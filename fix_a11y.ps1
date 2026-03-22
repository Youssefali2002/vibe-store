$path = 'e:\ULTMT\BootstrapCourse\index.html'
$content = Get-Content $path -Raw -Encoding UTF8

# 1. Main Landmark
$content = $content -replace '</nav>\s*<!-- Modern Hero Section -->', "</nav>`n    <main>`n    <!-- Modern Hero Section -->"
$content = $content -replace '  <!-- End Contact Section -->\s*<script', "  <!-- End Contact Section -->`n  </main>`n  <script"

# 2. Add text-white to hero content
$content = $content -replace '<div class="hero-content">', '<div class="hero-content text-white">'

# 3. Headings fixes
$content = $content -replace '<h3 class="fw-bold counter">500\+</h3>', '<div class="fs-3 fw-bold counter">500+</div>'
$content = $content -replace '<h3 class="fw-bold counter">50k\+</h3>', '<div class="fs-3 fw-bold counter">50k+</div>'
$content = $content -replace '<h3 class="fw-bold counter">24/7</h3>', '<div class="fs-3 fw-bold counter">24/7</div>'

$content = [regex]::Replace($content, '<h6 class="mb-1">(.*?)</h6>', '<p class="h6 mb-1">$1</p>')
$content = [regex]::Replace($content, '<h5 class="card-title([^>]*)>(.*?)</h5>', '<p class="h5 card-title$1>$2</p>', 'SingleLine')

# Policy section h5, we can just replace all <h5 class="fw-bold mb-0"> to <h3
$content = [regex]::Replace($content, '<h5 class="fw-bold mb-0">(.*?)</h5>', '<h3 class="h5 fw-bold mb-0">$1</h3>')

# Trust section h5, we can just replace <h5 class="fw-bold">
$content = [regex]::Replace($content, '<h5 class="fw-bold">(.*?)</h5>', '<h4 class="h5 fw-bold">$1</h4>')

# Modal headings 
$content = [regex]::Replace($content, '<h5 class="modal-title"(.*?)>(.*?)</h5>', '<h2 class="modal-title h5"$1>$2</h2>')
$content = [regex]::Replace($content, '<h2 class="fw-bold mb-2" id="modalTitle">(.*?)</h2>', '<h3 class="fw-bold mb-2" id="modalTitle">$1</h3>')

# Offcanvas heading
$content = [regex]::Replace($content, '(?s)<h5 class="offcanvas-title fw-bold" id="offcanvasExampleLabel">\s*سلة(.*?)</h5>', '<h2 class="offcanvas-title h5 fw-bold" id="offcanvasExampleLabel">`n          سلة$1</h2>')

$content = $content -replace '<h5 class="fw-bold mb-3">الهاتف</h5>', '<h3 class="h5 fw-bold mb-3">الهاتف</h3>'
$content = $content -replace '<h5 class="fw-bold mb-3">البريد الإلكتروني</h5>', '<h3 class="h5 fw-bold mb-3">البريد الإلكتروني</h3>'
$content = $content -replace '<h5 class="fw-bold mb-3">العنوان</h5>', '<h3 class="h5 fw-bold mb-3">العنوان</h3>'
$content = $content -replace '<h4 class="fw-bold text-center mb-4">أرسل لنا رسالة</h4>', '<h3 class="h4 fw-bold text-center mb-4">أرسل لنا رسالة</h3>'
$content = $content -replace '<h5 class="fw-bold mb-3">تابعنا على</h5>', '<h3 class="h5 fw-bold mb-3">تابعنا على</h3>'
$content = $content -replace '<h5 class="text-muted">السلة فارغة</h5>', '<h3 class="h5 text-muted">السلة فارغة</h3>'

[IO.File]::WriteAllText($path, $content, [System.Text.Encoding]::UTF8)

$cssPath = 'e:\ULTMT\BootstrapCourse\style\main.css'
$cssContent = Get-Content $cssPath -Raw -Encoding UTF8
$cssContent = $cssContent -replace '--accent-orange:\s*#ff9800;', '--accent-orange: #d35400;'
$cssContent = $cssContent -replace '--text-muted:\s*#6c757d;', '--text-muted: #545b62;'

[IO.File]::WriteAllText($cssPath, $cssContent, [System.Text.Encoding]::UTF8)
