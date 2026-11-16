"""Run after adding files to css/js/assets; bump CACHE on each release."""
from pathlib import Path
import json,re
root=Path(__file__).resolve().parent.parent
files=['./manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch-icon.png']
html=(root/'index.html').read_text()
release=re.search(r'src="(js/release/v\d+)/app-[^"/]+\.js"',html)
folders=['assets']+([release[1]] if release else ['js','css'])
if release:
    files.insert(0,'./release-'+release[1].split('/')[-1]+'.html')
    files+=['./'+src for src in re.findall(r'href="(css/[^"]+\.css)"',html)]
files+=['./'+str(f.relative_to(root)) for folder in folders for f in sorted((root/folder).rglob('*')) if f.is_file()]
if not release:files[:0]=['./','./index.html']
p=root/'sw.js'
p.write_text(re.sub(r'const FILES=.*?;', 'const FILES='+json.dumps(files)+';',p.read_text(),count=1))
print('Offline shell:',len(files),'files')
