(()=>{var t={845:t=>{self,t.exports=(()=>{"use strict";var t={};return((t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.isArmadaLoaded=void 0,e.isArmadaLoaded=t=>{var e,i;const r=!0===(null===(i=null===(e=window.eight)||void 0===e?void 0:e.armada)||void 0===i?void 0:i.loaded);if(!t)return r;r?t():document.addEventListener("ARMADA:LOADED",t)},e.default=e.isArmadaLoaded})(0,t),t})()}},e={};function i(r){var a=e[r];if(void 0!==a)return a.exports;var s=e[r]={exports:{}};return t[r](s,s.exports,i),s.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var r in e)i.o(e,r)&&!i.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=i(845);class e extends HTMLElement{constructor(){super()}connectedCallback(){this.regularPrice=this.querySelector(`[data-armada-selector="price-${this.sectionId}"]`),this.compareAt=this.querySelector(`[data-armada-selector="compare-at-${this.sectionId}"]`),this.discountAmt=this.querySelector(`[data-armada-selector="discount-${this.sectionId}"]`),this.unitPriceWrap=this.querySelector(`[data-armada-selector="unit-price-container-${this.sectionId}"]`),this.unitPrice=this.querySelector(`[data-armada-selector="unit-price-${this.sectionId}"]`),this.unitPriceRef=this.querySelector(`[data-armada-selector="unit-price-ref-${this.sectionId}"]`),this.compareAtWrap=this.querySelector('[data-armada-selector="compare-at-container"]'),this.discountAmtWrap=this.querySelector('[data-armada-selector="discount-amount-container"]'),this.savingsFormat=this.getAttribute("discount-value"),(0,t.isArmadaLoaded)(this.init.bind(this))}init(){window.eight.armada.elementRegistry.register({key:"product-price",assetPath:"/assets/component-price.min.js"})}static get observedAttributes(){return["compare-at","price","discount","unit-price","unit-price-measurement"]}attributeChangedCallback(t,e,i){if(e&&e!==i)switch(t){case"price":this.regularPrice.innerText=window.eight.productEngine.formatMoney(i,this.moneyFormat);break;case"compare-at":null===i||"null"===i||+i<+this.getAttribute("price")?(this.compareAt.innerText="",this.compareAtWrap.classList.add("hidden")):(this.compareAt.innerText=window.eight.productEngine.formatMoney(i,this.moneyFormat),this.compareAtWrap.classList.remove("hidden"));break;case"discount":null===i||"null"===i||this.compareAtWrap&&this.compareAtWrap.classList.contains("hidden")?(this.discountAmt.innerText="",this.discountAmtWrap.classList.add("hidden")):this.savingsFormat&&"hide"!==this.savingsFormat&&("value"===this.savingsFormat?this.discountAmt.innerText=`-${window.eight.productEngine.formatMoney(i,this.moneyFormat)}`:this.discountAmt.innerText=`-${i}`,this.discountAmtWrap.classList.remove("hidden"));break;case"unit-price":null===i||"null"===i?(this.unitPriceWrap.classList.add("hidden"),this.unitPrice.innerText=""):this.unitPrice&&(this.unitPrice.innerText=`${window.eight.productEngine.formatMoney(i,this.moneyFormat)}`);break;case"unit-price-measurement":const t=window.eight.safeJSONParse(i),e=1!==t.reference_value?t.reference_value+t.reference_unit:t.reference_unit;null===i||"null"===i?(this.unitPriceWrap.classList.add("hidden"),this.unitPriceRef.innerText=""):this.unitPriceRef&&(this.unitPriceRef.innerText=e)}}get moneyFormat(){return this.getAttribute("money-format")?this.getAttribute("money-format"):"${{amount}}"}get sectionId(){return this.getAttribute("section-id")?this.getAttribute("section-id"):""}}window.customElements.define("product-price",e)})()})();