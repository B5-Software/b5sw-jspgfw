# 🚀 b5sw-jspgfw Framework

✨ **Modern Web Components Made Simple**  
🖌️ Styled Components | 🧩 Extensible Architecture | 🌈 Dynamic Themes

[![License](https://img.shields.io/badge/License-B5S_FOKPL_1.0_Permissive-blue)](LICENSE)
[![npm](https://img.shields.io/npm/v/b5sw-jspgfw)](https://www.npmjs.com/package/b5sw-jspgfw)

## 🌟 Features

### Component Gallery
|  Component   | Key Features                          |
|--------------|---------------------------------------|
| **NeonBtn**  | Glowing edges • Pulse animation       |
| **GlassBox** | Frosted effect • Dynamic transparency |
| **HoloCard** | 3D Parallax • Interactive shadows     |

### Core Tech
```bash
✅ 3KB Core Runtime
✅ CSS Custom Properties
✅ Zero Dependencies
✅ Mobile-First Design
```

## 🛠️ Installation
```bash
npm install b5sw-jspgfw
```

## 🎮 Basic Usage

### Component Initialization
```javascript
import { NeonButton, applyTheme } from 'b5sw-jspgfw';

// Set global theme
applyTheme({
  primary: '#a855f7',
  glowIntensity: 1.2
});

// Create button
const btn = new NeonButton({
  text: 'Click Me!',
  size: 'lg',
  onClick: () => console.log('Activated!')
});

document.body.appendChild(btn.render());
```

## 🎨 Theme Customization


### Runtime Config
```javascript
import { themeManager } from 'b5sw-jspgfw';

themeManager.update({
  components: {
    Button: {
      borderRadius: '12px',
      hoverScale: 1.05
    }
  }
});
```

## 📂 Project Structure
```
src/
├── components/      # UI Components
│   └── Button/      # 6 Button variants
└── styles/          # Theme system
```

## 📜 License & Ethics

### Permissions
```text
✅ Commercial Use
✅ Modification
✅ Distribution
✅ Private Use
```

### Restrictions
```text
❌ No Liability
❌ No Warranty
❌ Must Credit
```

Full license: [B5S-FOKPL-1.0-Permissive](LICENSE)

---


_Made with ❤️ by B5-Software • 🚀 Next-Gen Web Development_