!function(e){var t={};function r(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(o,i,function(t){return e[t]}.bind(null,i));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=842)}({686:function(e,t,r){},842:function(e,t,r){"use strict";r.r(t);new Map,new Map;var o,i,n,s;r(686);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==u(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==u(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===u(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return(f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance");return e}var y=0;function b(e){return"__private_"+y+++"_"+e}var g=window.GT3,m=(g.Hooks,g.autobind),h=g.ThemesCore,w=h.Widgets.BasicWidget,v=h.jQuery,O=h.isRTL,_=g.Isotope,j=m((n=b("ui"),s=b("isIsotope"),(i=function(e){var t,r;function o(){var t;t=e.apply(this,arguments)||this,Object.defineProperty(l(t),n,{writable:!0,value:{$scope:".gt3_module_blog",isotope_wrapper:".isotope_blog_items",$isotope_wrapper:".isotope_blog_items",$filter:".isotope-filter a"}}),Object.defineProperty(l(t),s,{writable:!0,value:!1}),t.isotope=null,t.extendUI(d(l(t),n)[n]),t.init();var r=window.GT3.ThemesCore.editMode;return t.ui.$scope?(t.showImages(),d(l(t),s)[s]=!!t.ui.isotope_wrapper,d(l(t),s)[s]?(t.isotope=new _(t.ui.isotope_wrapper,p({itemSelector:".isotope_item",originLeft:!O},t.settings.isotope_settings||{})),t.settings.packery?t.resizeWidget():t.ui.$isotope_wrapper.imagesLoaded((function(){t.isotope.layout(),setTimeout((function(){t.isotope.layout()}),3e3)})),t.ui.$filter&&t.ui.$filter.on("click",(function(e){e.preventDefault();var r=e.target||e.currentTarget,o=r.getAttribute("data-filter");v(r).siblings().removeClass("active"),v(r).addClass("active"),t.isotope.arrange({filter:o})})),t.settings.packery&&t.ui.$scope.addClass("blog_packery_loaded"),r&&t.resize(),t.afterInit(),t):l(t)):l(t)}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,f(t,r);var i=o.prototype;return i.showImages=function(){},i.resizeWidget=function(){var e,t,r,o,i=this,n=this.settings.packery_grid,s=v(window).outerWidth(),u=n.grid,a=n.lap;s<600?u=1:s<900&&u%2==0?(a/=2,u/=2):s<900&&u>2&&(u=2),e=Math.floor(this.ui.$isotope_wrapper.width()/u);var p=0;this.ui.$isotope_wrapper.find(".element").each((function(i,u){var c=v(u);s<600?c.css("height","auto").css("width","auto").attr("data-ratio",""):(t=r=e,(o=p%a+1)in n.elem&&("w"in n.elem[o]&&n.elem[o].w>1&&(r=e*n.elem[o].w),"h"in n.elem[o]&&n.elem[o].h>1&&(t=e*n.elem[o].h)),p++,c.css("height",Math.floor(t)).css("width",Math.floor(r)))})),this.isotope&&this.isotope.arrange({masonry:{columnWidth:e}}),this.isotope&&this.ui.$isotope_wrapper.imagesLoaded((function(){i.isotope.layout(),setTimeout((function(){i.isotope.layout()}),3e3)}))},i.resize=function(){d(this,s)[s]&&(this.settings.packery?this.resizeWidget():(this.ui.$scope.off(),this.isotope.layout()))},o}(w)).widgetName="gt3-core-blog",o=i))||o;window.GT3.ThemesCore.onWidgetRegisterHandler(j.widgetName,j)}});