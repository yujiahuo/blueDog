import { WebComponent } from 'web-component'

@WebComponent('header-menu', {
  template: require('./header-menu.html'),
  style: require('./header-menu.css'),
  shadowDOM: true
})

export class HeaderMenu extends HTMLElement {}

customElements.define('header-menu', HeaderMenu);