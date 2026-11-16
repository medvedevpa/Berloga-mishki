"""Author local GLB assets with Blender 4.3: blender -b -t 2 --python tools/build-models.py."""
import bpy, math, random, os
from mathutils import Vector
from pathlib import Path
ROOT=Path(__file__).resolve().parent.parent
OUT=ROOT/'assets/models';OUT.mkdir(parents=True,exist_ok=True)
random.seed(1501)

def linear(v):return v/12.92 if v<=.04045 else ((v+.055)/1.055)**2.4

def mat(name,color,rough=.55,coat=0):
    h=color.lstrip('#');rgb=[linear(int(h[i:i+2],16)/255) for i in (0,2,4)]
    m=bpy.data.materials.new(name);m.diffuse_color=(*rgb,1);m.use_nodes=True
    p=m.node_tree.nodes.get('Principled BSDF');p.inputs['Base Color'].default_value=(*rgb,1);p.inputs['Roughness'].default_value=rough;p.inputs['Coat Weight'].default_value=coat;p.inputs['Coat Roughness'].default_value=.18
    return m

def reset():
    bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
    for x in list(bpy.data.materials):bpy.data.materials.remove(x)

def empty(name,loc=(0,0,0),parent=None):
    o=bpy.data.objects.new(name,None);bpy.context.collection.objects.link(o);o.location=loc
    if parent:
        bpy.context.view_layer.update();w=o.matrix_world.copy();o.parent=parent;o.matrix_world=w
    return o

def bind(o,parent):
    if parent:
        w=o.matrix_world.copy();o.parent=parent;o.matrix_world=w
    return o

def smooth(o,m):
    o.data.materials.append(m)
    for poly in o.data.polygons:poly.use_smooth=True
    return o

def uv(name,loc,scale,m,parent=None,seg=32,rings=20):
    bpy.ops.mesh.primitive_uv_sphere_add(segments=seg,ring_count=rings,location=loc)
    o=bpy.context.object;o.name=name;o.scale=scale;bpy.ops.object.transform_apply(location=False,rotation=False,scale=True);smooth(o,m);return bind(o,parent)

def cube(name,loc,size,m,parent=None,bevel=.05):
    bpy.ops.mesh.primitive_cube_add(size=1,location=loc);o=bpy.context.object;o.name=name;o.scale=size;bpy.ops.object.transform_apply(location=False,rotation=False,scale=True)
    mod=o.modifiers.new('Soft crafted edges','BEVEL');mod.width=bevel;mod.segments=3
    bpy.context.view_layer.objects.active=o;bpy.ops.object.modifier_apply(modifier=mod.name);smooth(o,m);return bind(o,parent)

def curve(name,points,r,m,parent=None):
    c=bpy.data.curves.new(name,'CURVE');c.dimensions='3D';c.resolution_u=12;c.bevel_depth=r;c.bevel_resolution=2
    s=c.splines.new('BEZIER');s.bezier_points.add(len(points)-1)
    for p,co in zip(s.bezier_points,points):p.co=co;p.handle_left_type=p.handle_right_type='AUTO'
    o=bpy.data.objects.new(name,c);bpy.context.collection.objects.link(o);o.data.materials.append(m);return bind(o,parent)

def ring(name,loc,r,t,m,parent=None,rot=(0,0,0),scale=(1,1,1)):
    bpy.ops.mesh.primitive_torus_add(major_segments=40,minor_segments=10,location=loc,rotation=rot,major_radius=r,minor_radius=t)
    o=bpy.context.object;o.name=name;o.scale=scale;smooth(o,m);return bind(o,parent)

def surface(name,verts,faces,m,parent=None,sub=1):
    mesh=bpy.data.meshes.new(name);mesh.from_pydata(verts,[],faces);mesh.update();uv=mesh.uv_layers.new(name='CraftUV');
    xs=[v[0] for v in verts];zs=[v[2] for v in verts];lo=min(xs);bot=min(zs);wide=max(max(xs)-lo,.01);high=max(max(zs)-bot,.01)
    for poly in mesh.polygons:
        for k in poly.loop_indices:
            v=verts[mesh.loops[k].vertex_index];uv.data[k].uv=((v[0]-lo)/wide,(v[2]-bot)/high)
    o=bpy.data.objects.new(name,mesh);bpy.context.collection.objects.link(o);smooth(o,m)
    if sub:
        mod=o.modifiers.new('Silky smooth silhouette','SUBSURF');mod.levels=sub;mod.render_levels=sub
        bpy.context.view_layer.objects.active=o;o.select_set(True);bpy.ops.object.modifier_apply(modifier=mod.name);o.select_set(False)
    return bind(o,parent)

def leaf(name,base,length,width,angle,m,parent=None):
    verts=[];faces=[];axis=Vector((math.cos(angle),math.sin(angle),.55));side=Vector((-math.sin(angle),math.cos(angle),0));base=Vector(base)
    n=10
    for i in range(n+1):
        t=i/n;shape=math.sin(math.pi*t)**.7
        for j in range(5):
            s=(j-2)/2;p=base+axis*length*t+side*width*shape*s;p.z+=.08*math.sin(math.pi*t)*(1-s*s);verts.append(tuple(p))
    for i in range(n):
        for j in range(4):a=i*5+j;faces.append((a,a+1,a+6,a+5))
    return surface(name,verts,faces,m,parent,1)

def flower(loc,size,white,yellow,parent=None):
    x,y,z=loc
    for i in range(9):
        a=i*math.tau/9;o=uv('Daisy petal',(x+math.cos(a)*size*.5,y,z+math.sin(a)*size*.5),(size*.18,size*.07,size*.32),white,parent,16,10);o.rotation_euler[1]=math.pi/2-a
    uv('Pollen',(x,y-size*.08,z),(size*.22,size*.09,size*.22),yellow,parent,20,12)

def consolidate_static(root,preserve_names=()):
    # Join geometry by material inside a rig group; smooth authoring becomes few draw calls.
    for group in [o for o in root.children_recursive if o.type=='EMPTY']+[root]:
        groups={}
        for o in list(group.children):
            if o.type=='CURVE':
                bpy.ops.object.select_all(action='DESELECT');o.select_set(True);bpy.context.view_layer.objects.active=o;bpy.ops.object.convert(target='MESH');o=bpy.context.object
            if o.type=='MESH' and o.name not in preserve_names:
                key=o.data.materials[0].name if o.data.materials else 'none';groups.setdefault(key,[]).append(o)
        for key,items in groups.items():
            if len(items)>1:
                bpy.ops.object.select_all(action='DESELECT')
                for o in items:o.select_set(True)
                bpy.context.view_layer.objects.active=items[0];bpy.ops.object.join();items[0].name=group.name+'_'+key

def export(root,name):
    consolidate_static(root,preserve_names=('EyeLeft','EyeRight'))
    bpy.ops.object.select_all(action='DESELECT');root.select_set(True)
    for o in root.children_recursive:o.select_set(True)
    bpy.context.view_layer.objects.active=root
    bpy.ops.export_scene.gltf(filepath=str(OUT/name),export_format='GLB',use_selection=True,export_apply=True,export_yup=True,export_extras=True,export_materials='EXPORT')
    print('MODEL_READY',name,os.path.getsize(OUT/name),flush=True)

def bunny():
    reset();root=empty('Bunny');fur=mat('Warm honey fur','#dfb68b',.87);cream=mat('Cream muzzle','#fff0ce',.82);pink=mat('Soft pink','#e9a5a0',.65);green=mat('Emerald linen','#29975a',.78);trim=mat('Golden stitching','#f7db83',.55);white=mat('Eye whites','#fffdf5',.12,.5);iris=mat('Warm chocolate iris','#86502d',.18,.6);black=mat('Pupil','#211915',.06,.8);nose=mat('Rose nose','#c78075',.35,.35);brown=mat('Brows and smile','#946341',.65)
    # Pear-shaped torso and beautifully rounded paws.
    uv('Body',(0,.02,1.93),(.68,.49,.91),fur,root)
    uv('Tail',(.57,.4,1.62),(.27,.23,.26),cream,root)
    for s in [-1,1]:
        uv('Foot',(s*.39,-.18,1.09),(.35,.48,.2),cream,root)
        for j in [-1,0,1]:curve('Toe seam',[(s*.39+j*.085,-.57,1.12),(s*.39+j*.085,-.48,1.2)],.008,brown,root)
    # Apron is a curved, contoured surface rather than an overlay sphere.
    verts=[];faces=[];n=14
    for i in range(n+1):
        z=1.23+i/n*1.27;w=.57*(.85+.15*math.sin(i/n*math.pi))
        for j in range(n+1):
            t=(j/n*2-1);y=-math.sqrt(max(.03,1-(t*.83)**2))*.5-.018;verts.append((t*w,y,z))
    for i in range(n):
        for j in range(n):a=i*(n+1)+j;faces.append((a,a+1,a+n+2,a+n+1))
    surface('Curved apron',verts,faces,green,root,1)
    for s in [-1,1]:
        curve('Apron strap',[(s*.45,-.32,2.68),(s*.38,-.49,2.48),(s*.33,-.52,2.3)],.055,green,root)
        uv('Brass button',(s*.34,-.56,2.4),(.055,.025,.055),trim,root)
    pocket=cube('Apron pocket',(0,-.535,1.88),(.56,.06,.39),green,root,.07)
    for i in range(13):
        x=-.24+i*.04;curve('Pocket stitch',[(x,-.577,1.73),(x+.018,-.577,1.73)],.005,trim,root)
    flower((0,-.584,1.96),.17,cream,trim,root)
    head=empty('HeadRig',(0,0,3.18),root)
    # Sculpted head mesh: cheek volume and tapered chin built into the continuous surface.
    h=uv('Sculpted head',(0,0,3.18),(.8,.61,.76),fur,head,48,32)
    for v in h.data.vertices:
        z=v.co.z;v.co.x*=1+.13*math.exp(-((z+.25)/.23)**2);v.co.y*=1+.05*math.cos(z*3)
    uv('MuzzleLeft',(-.22,-.55,2.98),(.34,.21,.24),cream,head)
    uv('MuzzleRight',(.22,-.55,2.98),(.34,.21,.24),cream,head)
    uv('Chin',(0,-.53,2.82),(.3,.15,.17),cream,head)
    curve('Gentle smile',[(-.17,-.725,2.94),(0,-.775,2.87),(.17,-.725,2.94)],.014,brown,head)
    cube('Tiny front tooth',(0,-.785,2.89),(.07,.021,.04),white,head,.01)
    uv('Heart nose',(0,-.777,3.1),(.105,.065,.07),nose,head)
    curve('Philtrum',[(0,-.776,3.07),(0,-.763,2.99)],.012,brown,head)
    # Large eyes, proper cornea-like layered highlights and soft lid rims.
    for s,label in [(-1,'Left'),(1,'Right')]:
        uv('Eye socket',(s*.335,-.5,3.34),(.285,.125,.33),cream,head)
        eyerig=empty('Eye'+label+'Rig',(s*.335,-.565,3.34),head)
        uv('White sclera',(s*.335,-.565,3.34),(.24,.15,.28),white,eyerig,40,24)
        eye=uv('Eye'+label,(s*.335-.015,-.709,3.35),(.163,.055,.205),iris,eyerig,40,24)
        uv('Pupil',(s*.335-.025,-.755,3.36),(.105,.028,.14),black,eyerig,32,20)
        uv('Eye glint',(s*.335-.08,-.779,3.44),(.048,.012,.055),white,eyerig,20,12)
        uv('Eye glint small',(s*.335+.035,-.782,3.29),(.018,.009,.02),white,eyerig,12,8)
        curve('Upper eyelid',[(s*.335-.21,-.606,3.43),(s*.335-.13,-.624,3.59),(s*.335+.1,-.61,3.59),(s*.335+.22,-.583,3.43)],.016,brown,head)
        curve('Eyebrow',[(s*.335-.16,-.43,3.71),(s*.335,-.47,3.76),(s*.335+.15,-.44,3.72)],.033,brown,head)
        uv('Cheek blush',(s*.53,-.562,3.04),(.12,.024,.065),pink,head)
        for j in range(3):
            curve('Whisker',[(s*.34,-.755,3.01+j*.04),(s*.66,-.74,3+j*.08),(s*.91,-.67,3.01+j*.1)],.0055,cream,head)
            uv('Whisker pore',(s*(.32+j*.065),-.759,3.035),(.012,.007,.012),brown,head,10,6)
    # Tapered, curved ears with a soft ridge and inset lining.
    for s,label in [(-1,'Left'),(1,'Right')]:
        ear=empty('Ear'+label+'Rig',(s*.4,.015,3.72),head)
        for isinner in [False,True]:
            verts=[];faces=[];rows=24;cols=24
            for i in range(rows+1):
                t=i/rows;rad=math.sin(math.pi*t)**.6*(.24 if not isinner else .145);length=1.18 if not isinner else .94;start=3.66 if not isinner else 3.79
                cx=s*(.4+.13*t+.04*math.sin(t*math.pi));cy=.015+.06*t-(.18 if isinner else 0)
                for j in range(cols):
                    a=j/cols*math.tau;verts.append((cx+rad*math.cos(a),cy+rad*(.65 if not isinner else .18)*math.sin(a),start+length*t))
            for i in range(rows):
                for j in range(cols):a=i*cols+j;b=i*cols+(j+1)%cols;faces.append((a,b,b+cols,a+cols))
            surface('Inner ear' if isinner else 'Tapered ear',verts,faces,pink if isinner else fur,ear,1)
    for s,label in [(-1,'Left'),(1,'Right')]:
        arm=empty('Arm'+label+'Rig',(s*.64,0,2.35),root)
        o=uv('Soft arm',(s*.73,-.07,2.04),(.23,.25,.43),fur,arm);o.rotation_euler[1]=-s*.17
        uv('Paw',(s*.75,-.2,1.75),(.25,.27,.23),cream,arm)
        for j in [-1,1]:curve('Finger seam',[(s*.75+j*.055,-.442,1.76),(s*.75+j*.055,-.445,1.82)],.007,brown,arm)
    export(root,'bunny-chef-v15.glb')

def plant(which):
    reset();root=empty('Botanical');body=empty('PlantBody',parent=root);fruit=empty('Harvest',(0,0,1.4),root)
    green=mat('Leaf green','#359d35',.6,.15);vein=mat('Leaf vein','#8bc34a',.65);stemmat=mat('Stem','#4e9634',.65)
    curve('Living curved stem',[(0,0,0),(.045,.02,.5),(-.035,.01,1),(0,0,1.4)],.038,stemmat,body)
    for i in range(5):
        a=(i%2*math.pi)+.4;z=.22+i*.2;o=leaf('Sculpted leaf',(0,0,z),.65 if i<3 else .48,.2,a,green,body)
        curve('Vein',[(0,0,z),(math.cos(a)*.3,math.sin(a)*.3,z+.19),(math.cos(a)*.59,math.sin(a)*.59,z+.33)],.009,vein,body)
    if which=='sunflower':
        gold=mat('Petal gold','#ffc820',.4,.2);gold2=mat('Petal amber','#f8a614',.45);center=mat('Seed head','#75431f',.8);seedmat=mat('Individual seeds','#bb8135',.7)
        uv('Seed head',(0,-.03,1.4),(.26,.11,.26),center,fruit,40,24)
        for layer in range(2):
            for i in range(18):
                a=(i+.5*layer)*math.tau/18;r=.39-layer*.035
                o=uv('Layered petal',(math.cos(a)*r,-.015-layer*.035,1.4+math.sin(a)*r),(.095,.045,.27),gold if layer else gold2,fruit,24,12);o.rotation_euler[1]=math.pi/2-a
        for i in range(95):
            r=math.sqrt((i+.5)/95)*.225;a=i*2.39996;uv('Seed',(r*math.cos(a),-.132,1.4+r*math.sin(a)),(.014,.012,.022),seedmat,fruit,8,6)
    elif which=='berry':
        red=mat('Strawberry skin','#ee3046',.28,.6);yellow=mat('Golden seeds','#f9d382',.6)
        for dx,dz,scale in [(-.2,-.05,1),(.23,.13,.77),(.03,.42,.55)]:
            center=Vector((dx,-.08,1.4+dz));o=uv('Sculpted strawberry',tuple(center),(.245*scale,.2*scale,.31*scale),red,fruit,40,28)
            for v in o.data.vertices:
                t=(v.co.z/(.31*scale)+1)/2;v.co.x*=.63+.4*t;v.co.y*=.65+.35*t
            for i in range(65):
                y=1-2*(i+.5)/65;a=i*2.39996;r=math.sqrt(max(0,1-y*y));px=math.cos(a)*r*.245*scale*(.63+.4*(y+1)/2);py=math.sin(a)*r*.2*scale*(.65+.35*(y+1)/2)
                seed=uv('Strawberry seed',(center.x+px,center.y+py,center.z+y*.31*scale),(.013*scale,.009*scale,.022*scale),yellow,fruit,8,6)
            for j in range(5):leaf('Berry crown',(dx,-.08,center.z+.27*scale),.2*scale,.07*scale,j*math.tau/5,green,fruit)
    else:
        podmat=mat('Pea pod','#359c40',.44,.2);peamat=mat('Plump peas','#99d33e',.27,.5)
        for n in range(2):
            z=1.4+n*.22;x=(n-.5)*.18
            uv('Curved pea pod',(x,0,z),(.47,.13,.17),podmat,fruit,40,24)
            for i in [-1,0,1]:uv('Pea',(x+i*.23,-.115,z),(.125,.09,.12),peamat,fruit,24,16)
            curve('Pod seam',[(x-.4,-.08,z+.06),(x,-.17,z+.12),(x+.4,-.08,z+.06)],.014,vein,fruit)
    export(root,which+'-v15.glb')

def cottage():
    reset();root=empty('Cottage');wall=mat('Warm plaster','#f9ddb0',.85);wood=mat('Honey timber','#b47b43',.62);trim=mat('Cream trim','#ffecbf',.62);roof=mat('RoofClay','#de5735',.48);roofdark=mat('RoofShade','#b83e29',.55);glass=mat('Sky blue glass','#55bed1',.2,.65);leafmat=mat('Leaves','#389741',.6);pink=mat('Pink blossoms','#f778a7',.45);gold=mat('Brass','#e5b94f',.25,.55)
    cube('Plaster cottage',(0,0,1.1),(2.15,1.72,2.2),wall,root,.15)
    for s in [-1,1]:
        cube('Corner beam',(s*.99,-.88,1.12),(.14,.13,2.1),wood,root,.035)
        cube('Side sill',(s*1.05,0,.16),(.14,1.72,.16),wood,root,.035)
    # Curved, overhanging roof surfaces, individually rounded barrel tiles, then join by material.
    for s in [-1,1]:
        for row in range(5):
            t=row/4;xx=s*(.1+t*1.16);zz=3.2-(abs(xx)/1.26)**.85*.97
            for j in range(6):
                yy=-1.04+j*.4
                tile=cube('Rounded clay tile',(xx,yy,zz),(.35,.46,.11),roof if (row+j)%3 else roofdark,root,.065);tile.rotation_euler[1]=s*.67
    curve('Roof ridge',[(0,-1.2,3.24),(0,0,3.26),(0,1.2,3.24)],.095,roof,root)
    # Gable face behind the tiles.
    verts=[(-1.2,-.92,2.2),(1.2,-.92,2.2),(0,-.92,3.17),(-1.2,.92,2.2),(1.2,.92,2.2),(0,.92,3.17)]
    surface('Gable',verts,[(0,1,2),(5,4,3),(0,3,4,1),(1,4,5,2),(2,5,3,0)],wall,root,0)
    # Carved door, framed blue windows, flower boxes and a little lamp.
    cube('Arched door',(0,-.915,.82),(.82,.13,1.55),wood,root,.13)
    for i in range(5):curve('Door grain',[(-.31+i*.155,-.994,.16),(-.32+i*.155,-1,.82),(-.3+i*.155,-.994,1.45)],.009,roofdark,root)
    uv('Door knob',(.25,-1.035,.76),(.055,.04,.055),gold,root,20,12)
    for s in [-1,1]:
        x=s*.73;cube('Window',(x,-.92,1.35),(.39,.08,.52),glass,root,.06)
        for dx in [-.22,.22]:cube('Window jamb',(x+dx,-.988,1.35),(.05,.06,.61),trim,root,.02)
        for z in [1.05,1.35,1.65]:cube('Window bar',(x,-.99,z),(.48,.06,.05),trim,root,.02)
        cube('Window cross',(x,-.992,1.35),(.035,.07,.55),trim,root,.01)
        cube('Flower box',(x,-1.05,.99),(.57,.34,.19),wood,root,.04)
        for j in range(4):
            xx=x-.19+j*.13;curve('Plant sprig',[(xx,-1.13,1.06),(xx+.02,-1.12,1.23)],.012,leafmat,root);flower((xx,-1.19,1.2+(j%2)*.07),.115,pink if j%2 else trim,gold,root)
    ring('Round loft frame',(0,-.967,2.55),.2,.04,trim,root,(math.pi/2,0,0));uv('Loft glass',(0,-.957,2.55),(.18,.025,.18),glass,root)
    cube('Chimney',(.64,.45,3.03),(.3,.35,.65),wall,root,.04)
    for z in [2.8,3.02,3.24]:cube('Chimney mortar',(.64,.45,z),(.32,.37,.03),wood,root,.01)
    export(root,'cottage-v15.glb')

def foods():
    reset();root=empty('Produce');red=mat('Apple lacquer','#dd2432',.22,.65);orange=mat('Carrot orange','#f58c24',.34,.25);yellow=mat('Pear green gold','#b4c937',.28,.5);green=mat('Fresh leaves','#3c9e38',.5,.15);stem=mat('Fruit stem','#79502d',.75);crease=mat('Carrot grooves','#ce681d',.72)
    apple=empty('apple',parent=root);o=uv('Sculpted apple',(0,0,0),(.42,.39,.4),red,apple,48,32)
    for v in o.data.vertices:
        a=math.atan2(v.co.y,v.co.x);r=math.hypot(v.co.x,v.co.y);v.co.x*=1+.035*math.cos(a*5);v.co.y*=1+.035*math.cos(a*5);v.co.z-=math.copysign(.065*math.exp(-r*r/.012),v.co.z)
    curve('Apple stalk',[(0,0,.32),(.01,.01,.48),(.045,.01,.52)],.026,stem,apple);leaf('Apple leaf',(.01,.01,.45),.3,.1,.4,green,apple)
    carrot=empty('carrot',parent=root);verts=[];faces=[];rows=26;cols=32
    for i in range(rows+1):
        t=i/rows;z=-.44+t*.85;r=.012+.22*t**.75
        for j in range(cols):
            a=j*math.tau/cols;rad=r*(1+.02*math.sin(a*5+t*12));verts.append((math.cos(a)*rad+.035*math.sin(t*3),math.sin(a)*rad,z))
    for i in range(rows):
        for j in range(cols):a=i*cols+j;b=i*cols+(j+1)%cols;faces.append((a,b,b+cols,a+cols))
    surface('Organic carrot',verts,faces,orange,carrot,1);uv('Carrot top',(.005,0,.39),(.22,.22,.08),orange,carrot)
    for z in [-.2,-.03,.16]:curve('Fine root groove',[(-.09,-.12,z),(.01,-.17,z-.012),(.1,-.12,z)],.006,crease,carrot)
    for i in range(7):
        a=i*math.tau/7;curve('Leaf stalk',[(0,0,.43),(math.cos(a)*.08,math.sin(a)*.08,.68),(math.cos(a)*.14,math.sin(a)*.14,.88)],.01,green,carrot)
        for j in range(3):leaf('Carrot frond',(math.cos(a)*.08,math.sin(a)*.08,.59+j*.085),.18,.045,a+(-1 if j%2 else 1)*.6,green,carrot)
    pear=empty('pear',parent=root);o=uv('Sculpted pear',(0,0,.05),(.37,.34,.47),yellow,pear,48,32)
    for v in o.data.vertices:
        t=(v.co.z+.47)/.94;factor=1.05-.5*t+.18*math.sin(t*math.pi*2);v.co.x*=factor;v.co.y*=factor
    curve('Pear stalk',[(0,0,.45),(-.025,0,.57),(.015,0,.62)],.024,stem,pear);leaf('Pear leaf',(0,0,.55),.25,.08,-.2,green,pear)
    export(root,'produce-v15.glb')

bunny()
for name in ['sunflower','berry','pea']:plant(name)
cottage()

foods()
