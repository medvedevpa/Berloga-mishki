/* Development only. The app loads the checked-in local bundle offline. */
const path=require('node:path');const fs=require('node:fs');const esbuild=require('esbuild');const root=path.join(__dirname,'..');
esbuild.buildSync({entryPoints:[path.join(root,'node_modules/three/build/three.module.js')],outfile:path.join(root,'js/vendor/three.min.js'),bundle:true,format:'esm',minify:true,legalComments:'inline'});
fs.copyFileSync(path.join(root,'node_modules/three/LICENSE'),path.join(root,'js/vendor/THREE-LICENSE.txt'));
