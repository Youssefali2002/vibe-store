# 🖼️ Preview Image Creation Script

## 📋 Available Options

### 🎨 Option 1: Use Online Tools
1. **Open SVG in Browser**: Double-click `preview.svg`
2. **Screenshot**: Take screenshot of the SVG
3. **Save as PNG**: Save the screenshot as `preview.png`

### 🛠️ Option 2: Use Design Software
1. **Open SVG**: Import `preview.svg` in:
   - Adobe Illustrator
   - Inkscape (Free)
   - Figma
   - Canva
2. **Export**: Save as PNG with 1200x630 dimensions

### 🌐 Option 3: Online Converters
1. **Upload SVG**: Go to:
   - [svgtopng.com](https://svgtopng.com)
   - [cloudconvert.com](https://cloudconvert.com/svg-to-png)
   - [convertio.co](https://convertio.co/svg-png)
2. **Download PNG**: Get the converted file

### 📱 Option 4: PowerShell with .NET
```powershell
# Add this to a PowerShell script
Add-Type -AssemblyName System.Drawing
Add-Type -AssemblyName System.Windows.Forms

$svg = [System.IO.File]::ReadAllText("preview.svg")
$bitmap = New-Object System.Drawing.Bitmap 1200, 630
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$graphics.Clear([System.Drawing.Color]::White)

# Save the bitmap
$bitmap.Save("preview.png", [System.Drawing.Imaging.ImageFormat]::Png)
```

## 🎯 Quick Solution

### 📸 Easiest Method:
1. **Open `preview.svg` in browser**
2. **Right-click → Save image as...**
3. **Name it `preview.png`**
4. **Place in project root**

### 🎨 Alternative: Create Manually
Use any design tool to create a 1200x630px image with:
- Vibe Store branding
- Desktop and mobile views
- Security/accessibility badges
- Professional appearance

## ✅ Final Result
Once you have `preview.png`, add it to your README.md:

```markdown
![Vibe Store Preview](preview.png)
```

And add meta tags to index.html:

```html
<meta property="og:image" content="preview.png">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="preview.png">
```
