(()=>{var e={845:e=>{self,e.exports=(()=>{"use strict";var e={};return((e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isArmadaLoaded=void 0,t.isArmadaLoaded=e=>{var t,n;const a=!0===(null===(n=null===(t=window.eight)||void 0===t?void 0:t.armada)||void 0===n?void 0:n.loaded);if(!e)return a;a?e():document.addEventListener("ARMADA:LOADED",e)},t.default=t.isArmadaLoaded})(0,e),e})()}},t={};function n(a){var d=t[a];if(void 0!==d)return d.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(845);class t extends HTMLElement{constructor(){super(),this.modalId=this.dataset.modalId}connectedCallback(){(0,e.isArmadaLoaded)(this.init.bind(this))}init(){this.openButton=this.querySelector('[data-armada-selector="modal-open"]')||this.firstElementChild,this.openButton.addEventListener("click",this.onButtonClick.bind(this)),window.eight.armada.elementRegistry.register({key:"armada-modal-open",assetPath:"/assets/engine-modal-open.min.js"})}onButtonClick(){const e=this.closest("slider-engine");e&&"true"==e.getAttribute("dragging")||this.modalId&&(window.eight.eventsEngine.emit(`${eight.constants.events["ARMADA:MODAL:CLOSE:ALL"]}`),window.eight.eventsEngine.namedEvents.openModal(this.modalId))}}customElements.define("armada-modal-open",t)})()})();