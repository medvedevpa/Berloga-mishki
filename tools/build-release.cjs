const fs=require('node:fs');const crypto=require('node:crypto');const path=require('node:path');const {execFileSync}=require('node:child_process');const esbuild=require('esbuild');
const root=path.resolve(__dirname,'..'),version=require('../package.json').version.split('.')[0],outdir=path.join(root,'js/release/v'+version);
(async()=>{
 fs.mkdirSync(outdir,{recursive:true});
 const result=await esbuild.build({absWorkingDir:root,entryPoints:['tools/release-entry.js'],outdir,bundle:true,format:'esm',splitting:true,minify:true,entryNames:'app-[hash]',chunkNames:'chunk-[hash]',legalComments:'inline',metafile:true,plugins:[{name:'local-source-version',setup(build){build.onResolve({filter:/^\.\.?\/.*\?v=\d+$/},args=>({path:path.resolve(args.resolveDir,args.path.split('?')[0])}));}}]});
 const entry=Object.entries(result.metafile.outputs).find(([,v])=>v.entryPoint==='tools/release-entry.js')[0];
 const file=path.join(root,'index.html');let html=fs.readFileSync(file,'utf8').replace(/<script(?: type="module")? src="js\/[^"]+"><\/script>\s*/g,'');html=html.replace('</body>','<script type="module" src="'+entry+'"></script>\n</body>');const cssSources=['base','montessori','storybook','discovery','parent-review','forest','picnic','vivid','voice'];
 const css=esbuild.transformSync(cssSources.map(name=>fs.readFileSync(path.join(root,'css',name+'.css'),'utf8')).join('\n'),{loader:'css',minify:true}).code;
 const cssName='stylesheet-v'+version+'-'+crypto.createHash('sha256').update(css).digest('hex').slice(0,10)+'.css';fs.writeFileSync(path.join(root,'css',cssName),css);
 html=html.replace(/<link rel="stylesheet" href="css\/[^"]+">\s*/g,'').replace('</head>','<link rel="stylesheet" href="css/'+cssName+'">\n</head>');fs.writeFileSync(file,html);fs.writeFileSync(path.join(root,'release-v'+version+'.html'),html);
 execFileSync('python3',[path.join(root,'tools/update-cache.py')],{stdio:'inherit'});
 console.log('Release v'+version+': '+entry+' ('+Object.keys(result.metafile.outputs).length+' chunks)');
})().catch(error=>{console.error(error);process.exit(1)});
