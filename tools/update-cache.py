"""Run after adding files to css/js/assets; bump CACHE on each release."""
from pathlib import Path
import json,re
root=Path(__file__).resolve().parent.parent
files=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch-icon.png']
files+=['./'+str(f.relative_to(root)) for folder in ['css','js','assets'] for f in sorted((root/folder).rglob('*')) if f.is_file()]
p=root/'sw.js'
p.write_text(re.sub(r'const FILES=.*?;', 'const FILES='+json.dumps(files)+';',p.read_text(),count=1))
print('Offline shell:',len(files),'files')
