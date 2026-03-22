import re
import os

html_path = 'e:/ULTMT/BootstrapCourse/index.html'
with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Main Landmark
content = content.replace('    </nav>\n    <!-- Modern Hero Section -->', '    </nav>\n    <main>\n    <!-- Modern Hero Section -->')
content = content.replace('  <!-- End Contact Section -->\n  <script', '  <!-- End Contact Section -->\n  </main>\n  <script')

# 2. Add text-white to hero content (fixes the contrast ratio of the hero text on dark gradient background)
content = content.replace('<div class="hero-content">', '<div class="hero-content text-white">')

# 3. Headings fixes (Sequential descending order)
# Stats: convert <h3> to purely visual text since it skips h2
content = content.replace('<h3 class="fw-bold counter">500+</h3>', '<div class="fs-3 fw-bold counter">500+</div>')
content = content.replace('<h3 class="fw-bold counter">50k+</h3>', '<div class="fs-3 fw-bold counter">50k+</div>')
content = content.replace('<h3 class="fw-bold counter">24/7</h3>', '<div class="fs-3 fw-bold counter">24/7</div>')

# Floating cards: h6 -> p
content = re.sub(r'<h6 class="mb-1">(.*?)</h6>', r'<p class="h6 mb-1">\1</p>', content)

# Product cards: h5 -> p
content = re.sub(r'<h5 class="card-title(.*?)"(.*?)>(.*?)</h5>', r'<p class="h5 card-title\1"\2>\3</p>', content)

# Policy section: h5 -> h3 (since it follows h2)
content = re.sub(r'<h5 class="fw-bold mb-0">(.*?)</h5>', r'<h3 class="h5 fw-bold mb-0">\1</h3>', content)

# Trust section: h5 -> h4 (since it follows h3)
content = re.sub(r'<h5 class="fw-bold">(.*?)</h5>', r'<h4 class="h5 fw-bold">\1</h4>', content)

# Modal headings: it skips 
content = re.sub(r'<h5 class="modal-title"(.*?)>(.*?)</h5>', r'<h2 class="modal-title h5"\1>\2</h2>', content)
content = re.sub(r'<h2 class="fw-bold mb-2" id="modalTitle">(.*?)</h2>', r'<h3 class="fw-bold mb-2" id="modalTitle">\1</h3>', content)

# Offcanvas headings
content = re.sub(r'<h5 class="offcanvas-title fw-bold" id="offcanvasExampleLabel">(.*?)</h5>', r'<h2 class="offcanvas-title h5 fw-bold" id="offcanvasExampleLabel">\1</h2>', content, flags=re.DOTALL)
content = content.replace('<h5 class="text-muted">السلة فارغة</h5>', '<h3 class="h5 text-muted">السلة فارغة</h3>')

# Contact section headings
content = content.replace('<h5 class="fw-bold mb-3">الهاتف</h5>', '<h3 class="h5 fw-bold mb-3">الهاتف</h3>')
content = content.replace('<h5 class="fw-bold mb-3">البريد الإلكتروني</h5>', '<h3 class="h5 fw-bold mb-3">البريد الإلكتروني</h3>')
content = content.replace('<h5 class="fw-bold mb-3">العنوان</h5>', '<h3 class="h5 fw-bold mb-3">العنوان</h3>')
content = content.replace('<h4 class="fw-bold text-center mb-4">أرسل لنا رسالة</h4>', '<h3 class="h4 fw-bold text-center mb-4">أرسل لنا رسالة</h3>')
content = content.replace('<h5 class="fw-bold mb-3">تابعنا على</h5>', '<h3 class="h5 fw-bold mb-3">تابعنا على</h3>')

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(content)

# 4. Contrast in CSS
css_path = 'e:/ULTMT/BootstrapCourse/style/main.css'
with open(css_path, 'r', encoding='utf-8') as f:
    css_content = f.read()

# Make text-muted and orange darker to pass WCAG AA
css_content = css_content.replace('--accent-orange: #ff9800;', '--accent-orange: #d35400;')
css_content = css_content.replace('--text-muted: #6c757d;', '--text-muted: #545b62;')

with open(css_path, 'w', encoding='utf-8') as f:
    f.write(css_content)

print(f"Updates successfully applied to {html_path} and {css_path}")
