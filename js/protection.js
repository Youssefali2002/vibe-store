// 🛡️ Vibe Store Protection Script
// Advanced Code Protection Against Theft

(function() {
    'use strict';
    
    // Configuration
    const config = {
        disableRightClick: true,
        disableDevTools: true,
        disableTextSelection: true,
        disableCopy: true,
        enableConsoleTrap: true,
        watermark: 'VIBE_STORE_PROTECTED_v1.0'
    };
    
    // Watermark in console
    console.log(`%c${config.watermark}`, 'color: #ff6b6b; font-size: 20px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);');
    console.log('%c© 2024 Vibe Store - All Rights Reserved', 'color: #4ecdc4; font-size: 14px;');
    
    // Disable Right Click
    if (config.disableRightClick) {
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            showNotification('🚫 ممنوع نسخ المحتوى!');
            return false;
        });
    }
    
    // Disable Developer Tools
    if (config.disableDevTools) {
        document.addEventListener('keydown', function(e) {
            // F12, Ctrl+U, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
            if (e.key === 'F12' || 
                (e.ctrlKey && e.key === 'u') || 
                (e.ctrlKey && e.shiftKey && e.key === 'I') ||
                (e.ctrlKey && e.shiftKey && e.key === 'J') ||
                (e.ctrlKey && e.shiftKey && e.key === 'C')) {
                e.preventDefault();
                showNotification('🚫 ممنوع فتح أدوات المطورين!');
                return false;
            }
        });
    }
    
    // Disable Text Selection
    if (config.disableTextSelection) {
        document.addEventListener('selectstart', function(e) {
            e.preventDefault();
            return false;
        });
        
        document.addEventListener('dragstart', function(e) {
            e.preventDefault();
            return false;
        });
    }
    
    // Disable Copy
    if (config.disableCopy) {
        document.addEventListener('copy', function(e) {
            e.preventDefault();
            showNotification('🚫 ممنوع نسخ المحتوى!');
            return false;
        });
        
        document.addEventListener('cut', function(e) {
            e.preventDefault();
            return false;
        });
    }
    
    // Console Trap
    if (config.enableConsoleTrap) {
        let devtools = {
            open: false,
            orientation: null
        };
        
        setInterval(function() {
            if (window.outerHeight - window.innerHeight > 200 || 
                window.outerWidth - window.innerWidth > 200) {
                if (!devtools.open) {
                    devtools.open = true;
                    showNotification('🚫 تم اكتشاف محاولة فتح أدوات المطورين!');
                    // Optional: Redirect or close
                    // window.location.href = 'about:blank';
                }
            } else {
                devtools.open = false;
            }
        }, 500);
    }
    
    // Disable View Source
    (function() {
        const originalOpen = XMLHttpRequest.prototype.open;
        XMLHttpRequest.prototype.open = function(method, url, async, user, password) {
            if (url.includes('view-source:')) {
                throw new Error('Access Denied');
            }
            return originalOpen.call(this, method, url, async, user, password);
        };
    })();
    
    // Show Notification Function
    function showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'protection-notification';
        notification.innerHTML = `
            <div class="protection-content">
                <i class="fa-solid fa-shield-halved"></i>
                <span>${message}</span>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            z-index: 999999;
            font-family: 'Cairo', sans-serif;
            font-size: 14px;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 10px;
            animation: slideIn 0.3s ease-out;
        `;
        
        document.body.appendChild(notification);
        
        // Auto remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
    
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        .protection-content {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .protection-content i {
            font-size: 16px;
        }
    `;
    document.head.appendChild(style);
    
    // Add watermark to page source
    const watermark = document.createComment(`${config.watermark} - Protected Content`);
    document.documentElement.insertBefore(watermark, document.documentElement.firstChild);
    
    // Disable inspect element
    document.addEventListener('click', function(e) {
        if (e.ctrlKey && e.shiftKey) {
            e.preventDefault();
            showNotification('🚫 ممنوع فحص العناصر!');
            return false;
        }
    });
    
    console.log('🛡️ Protection Script Loaded Successfully');
    
})();
