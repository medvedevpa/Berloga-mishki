/* Development only. The app loads the checked-in local bundle offline. */
const path=require('node:path');const fs=require('node:fs');const esbuild=require('esbuild');const root=path.join(__dirname,'..');
esbuild.buildSync({entryPoints:[path.join(root,'node_modules/three/build/three.module.js')],outfile:path.join(root,'js/vendor/three.min.js'),bundle:true,format:'esm',minify:true,legalComments:'inline'});
fs.copyFileSync(path.join(root,'node_modules/three/LICENSE'),path.join(root,'js/vendor/THREE-LICENSE.txt'));

const version=require('../package.json').version.split('.')[0];
const loader=esbuild.buildSync({entryPoints:[path.join(root,'node_modules/three/examples/jsm/loaders/GLTFLoader.js')],bundle:true,format:'esm',minify:true,legalComments:'inline',external:['three'],write:false});
fs.writeFileSync(path.join(root,'js/vendor/gltf-loader.min.js'),loader.outputFiles[0].text.replaceAll('from"three"','from"./three.min.js?v='+version+'"'));
