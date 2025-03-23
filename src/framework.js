import './styles/buttons.css';

export { Button } from './components/Button.js';

export function createApp(config) {
  return {
    mount(selector) {
      const el = document.querySelector(selector);
      if (el) {
        const content = config.render();
        el.innerHTML = content instanceof HTMLElement ? content.outerHTML : content;
      }
    }
  }
}