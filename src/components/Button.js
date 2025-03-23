export class Button {
  constructor({
    type = 'primary',
    size = 'medium',
    disabled = false,
    text = '',
    onClick = () => {},
    customStyles = {},
    glowIntensity = 1,
    ripple = true
  } = {}) {
    this.type = type;
    this.size = size;
    this.disabled = disabled;
    this.text = text;
    this.onClick = onClick;
    this.customStyles = customStyles;
    this.glowIntensity = glowIntensity;
    this.ripple = ripple;
  }

  render() {
    const btn = document.createElement('button');
    const validSizes = ['xsmall', 'small', 'medium', 'large', 'xlarge'];
    const sizeClass = validSizes.includes(this.size) ? `btn-${this.size}` : '';

    // 构建类名
    btn.className = [
      'btn',
      `btn-${this.type}`,
      sizeClass,
      this.ripple ? 'btn-ripple' : ''
    ].filter(Boolean).join(' ');

    // 基础属性
    btn.disabled = this.disabled;
    btn.innerHTML = this.text;

    // 自定义样式
    Object.entries(this.customStyles).forEach(([key, value]) => {
      btn.style.setProperty(key, value);
    });

    // CSS变量
    btn.style.setProperty('--glow-intensity', this.glowIntensity);

    // 点击处理
    btn.addEventListener('click', (e) => {
      this.onClick(e);
      if (this.ripple) this.createRippleEffect(e, btn);
    });

    return btn;
  }

  createRippleEffect(e, element) {
    const ripple = document.createElement('div');
    ripple.className = 'btn-ripple-effect';
    
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    
    ripple.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${e.clientX - rect.left - size/2}px;
      top: ${e.clientY - rect.top - size/2}px;
    `;
    
    element.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  }
}