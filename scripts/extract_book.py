import sys, json
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[1] / '.tools'))
import pymupdf

root = Path(__file__).resolve().parents[1]
source = Path(sys.argv[1])
doc = pymupdf.open(source)
pages = [{'page': i + 1, 'text': page.get_text()} for i, page in enumerate(doc)]
(root / 'study-source').mkdir(exist_ok=True)
(root / 'study-source' / 'pages.json').write_text(json.dumps(pages, ensure_ascii=False, indent=2), encoding='utf-8')
(root / 'study-source' / 'book.txt').write_text('\n\n'.join(f'=== PDF PAGE {p["page"]} ===\n{p["text"]}' for p in pages), encoding='utf-8')
print(f'{len(pages)} pages; {sum(len(p["text"]) for p in pages)} text characters')
print('\n'.join(f'PAGE {p["page"]}: {p["text"][:2000]}' for p in pages[:6]))
