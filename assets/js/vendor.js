/*
 Requirements:
  * Popper
  * Moment
  * Slick 1.8.1
  * AOS 2.3.1
  * Tilt
  * TWBS Pagination
*/
/* --------------------------------------------------------------------------------------------
  POPPER
  popper.min.js
  Copyright (C) Federico Zivolo 2019
  Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
-------------------------------------------------------------------------------------------- */
(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=e.ownerDocument.defaultView,n=o.getComputedStyle(e,null);return t?n[t]:n}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll|overlay)/.test(r+s+p)?e:n(o(e))}function i(e){return e&&e.referenceNode?e.referenceNode:e}function r(e){return 11===e?re:10===e?pe:re||pe}function p(e){if(!e)return document.documentElement;for(var o=r(10)?document.body:null,n=e.offsetParent||null;n===o&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TH','TD','TABLE'].indexOf(n.nodeName)&&'static'===t(n,'position')?p(n):n:e?e.ownerDocument.documentElement:document.documentElement}function s(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||p(e.firstElementChild)===e)}function d(e){return null===e.parentNode?e:d(e.parentNode)}function a(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,n=o?e:t,i=o?t:e,r=document.createRange();r.setStart(n,0),r.setEnd(i,0);var l=r.commonAncestorContainer;if(e!==l&&t!==l||n.contains(i))return s(l)?l:p(l);var f=d(e);return f.host?a(f.host,t):a(e,d(t).host)}function l(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',n=e.nodeName;if('BODY'===n||'HTML'===n){var i=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||i;return r[o]}return e[o]}function f(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],n=l(t,'top'),i=l(t,'left'),r=o?-1:1;return e.top+=n*r,e.bottom+=n*r,e.left+=i*r,e.right+=i*r,e}function m(e,t){var o='x'===t?'Left':'Top',n='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'],10)+parseFloat(e['border'+n+'Width'],10)}function h(e,t,o,n){return ee(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],r(10)?parseInt(o['offset'+e])+parseInt(n['margin'+('Height'===e?'Top':'Left')])+parseInt(n['margin'+('Height'===e?'Bottom':'Right')]):0)}function c(e){var t=e.body,o=e.documentElement,n=r(10)&&getComputedStyle(o);return{height:h('Height',t,o,n),width:h('Width',t,o,n)}}function g(e){return le({},e,{right:e.left+e.width,bottom:e.top+e.height})}function u(e){var o={};try{if(r(10)){o=e.getBoundingClientRect();var n=l(e,'top'),i=l(e,'left');o.top+=n,o.left+=i,o.bottom+=n,o.right+=i}else o=e.getBoundingClientRect()}catch(t){}var p={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},s='HTML'===e.nodeName?c(e.ownerDocument):{},d=s.width||e.clientWidth||p.width,a=s.height||e.clientHeight||p.height,f=e.offsetWidth-d,h=e.offsetHeight-a;if(f||h){var u=t(e);f-=m(u,'x'),h-=m(u,'y'),p.width-=f,p.height-=h}return g(p)}function b(e,o){var i=2<arguments.length&&void 0!==arguments[2]&&arguments[2],p=r(10),s='HTML'===o.nodeName,d=u(e),a=u(o),l=n(e),m=t(o),h=parseFloat(m.borderTopWidth,10),c=parseFloat(m.borderLeftWidth,10);i&&s&&(a.top=ee(a.top,0),a.left=ee(a.left,0));var b=g({top:d.top-a.top-h,left:d.left-a.left-c,width:d.width,height:d.height});if(b.marginTop=0,b.marginLeft=0,!p&&s){var w=parseFloat(m.marginTop,10),y=parseFloat(m.marginLeft,10);b.top-=h-w,b.bottom-=h-w,b.left-=c-y,b.right-=c-y,b.marginTop=w,b.marginLeft=y}return(p&&!i?o.contains(l):o===l&&'BODY'!==l.nodeName)&&(b=f(b,o)),b}function w(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=e.ownerDocument.documentElement,n=b(e,o),i=ee(o.clientWidth,window.innerWidth||0),r=ee(o.clientHeight,window.innerHeight||0),p=t?0:l(o),s=t?0:l(o,'left'),d={top:p-n.top+n.marginTop,left:s-n.left+n.marginLeft,width:i,height:r};return g(d)}function y(e){var n=e.nodeName;if('BODY'===n||'HTML'===n)return!1;if('fixed'===t(e,'position'))return!0;var i=o(e);return!!i&&y(i)}function E(e){if(!e||!e.parentElement||r())return document.documentElement;for(var o=e.parentElement;o&&'none'===t(o,'transform');)o=o.parentElement;return o||document.documentElement}function v(e,t,r,p){var s=4<arguments.length&&void 0!==arguments[4]&&arguments[4],d={top:0,left:0},l=s?E(e):a(e,i(t));if('viewport'===p)d=w(l,s);else{var f;'scrollParent'===p?(f=n(o(t)),'BODY'===f.nodeName&&(f=e.ownerDocument.documentElement)):'window'===p?f=e.ownerDocument.documentElement:f=p;var m=b(f,l,s);if('HTML'===f.nodeName&&!y(l)){var h=c(e.ownerDocument),g=h.height,u=h.width;d.top+=m.top-m.marginTop,d.bottom=g+m.top,d.left+=m.left-m.marginLeft,d.right=u+m.left}else d=m}r=r||0;var v='number'==typeof r;return d.left+=v?r:r.left||0,d.top+=v?r:r.top||0,d.right-=v?r:r.right||0,d.bottom-=v?r:r.bottom||0,d}function x(e){var t=e.width,o=e.height;return t*o}function O(e,t,o,n,i){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=v(o,n,r,i),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return le({key:e},s[e],{area:x(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,n=e.height;return t>=o.clientWidth&&n>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function L(e,t,o){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,r=n?E(t):a(t,i(o));return b(o,r,n)}function S(e){var t=e.ownerDocument.defaultView,o=t.getComputedStyle(e),n=parseFloat(o.marginTop||0)+parseFloat(o.marginBottom||0),i=parseFloat(o.marginLeft||0)+parseFloat(o.marginRight||0),r={width:e.offsetWidth+i,height:e.offsetHeight+n};return r}function T(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function C(e,t,o){o=o.split('-')[0];var n=S(e),i={width:n.width,height:n.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return i[p]=t[p]+t[d]/2-n[d]/2,i[s]=o===s?t[s]-n[a]:t[T(s)],i}function D(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function N(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var n=D(e,function(e){return e[t]===o});return e.indexOf(n)}function P(t,o,n){var i=void 0===n?t:t.slice(0,N(t,'name',n));return i.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var n=t['function']||t.fn;t.enabled&&e(n)&&(o.offsets.popper=g(o.offsets.popper),o.offsets.reference=g(o.offsets.reference),o=n(o,t))}),o}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=L(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=O(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=C(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?'fixed':'absolute',e=P(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var o=e.name,n=e.enabled;return n&&o===t})}function B(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function H(){return this.state.isDestroyed=!0,W(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.position='',this.popper.style.top='',this.popper.style.left='',this.popper.style.right='',this.popper.style.bottom='',this.popper.style.willChange='',this.popper.style[B('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function A(e){var t=e.ownerDocument;return t?t.defaultView:window}function M(e,t,o,i){var r='BODY'===e.nodeName,p=r?e.ownerDocument.defaultView:e;p.addEventListener(t,o,{passive:!0}),r||M(n(p.parentNode),t,o,i),i.push(p)}function F(e,t,o,i){o.updateBound=i,A(e).addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return M(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function I(){this.state.eventsEnabled||(this.state=F(this.reference,this.options,this.state,this.scheduleUpdate))}function R(e,t){return A(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function U(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=R(this.reference,this.state))}function Y(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function V(e,t){Object.keys(t).forEach(function(o){var n='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&Y(t[o])&&(n='px'),e.style[o]=t[o]+n})}function j(e,t){Object.keys(t).forEach(function(o){var n=t[o];!1===n?e.removeAttribute(o):e.setAttribute(o,t[o])})}function q(e,t){var o=e.offsets,n=o.popper,i=o.reference,r=$,p=function(e){return e},s=r(i.width),d=r(n.width),a=-1!==['left','right'].indexOf(e.placement),l=-1!==e.placement.indexOf('-'),f=t?a||l||s%2==d%2?r:Z:p,m=t?r:p;return{left:f(1==s%2&&1==d%2&&!l&&t?n.left-1:n.left),top:m(n.top),bottom:m(n.bottom),right:f(n.right)}}function K(e,t,o){var n=D(e,function(e){var o=e.name;return o===t}),i=!!n&&e.some(function(e){return e.name===o&&e.enabled&&e.order<n.order});if(!i){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return i}function z(e){return'end'===e?'start':'start'===e?'end':e}function G(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=he.indexOf(e),n=he.slice(o+1).concat(he.slice(0,o));return t?n.reverse():n}function _(e,t,o,n){var i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+i[1],p=i[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=n;}var d=g(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?ee(document.documentElement.clientHeight,window.innerHeight||0):ee(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function X(e,t,o,n){var i=[0,0],r=-1!==['right','left'].indexOf(n),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(D(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,n){var i=(1===n?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return _(e,i,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,n){Y(o)&&(i[t]+=o*('-'===e[n-1]?-1:1))})}),i}function J(e,t){var o,n=t.offset,i=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=i.split('-')[0];return o=Y(+n)?[+n,0]:X(n,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}var Q=Math.min,Z=Math.floor,$=Math.round,ee=Math.max,te='undefined'!=typeof window&&'undefined'!=typeof document&&'undefined'!=typeof navigator,oe=function(){for(var e=['Edge','Trident','Firefox'],t=0;t<e.length;t+=1)if(te&&0<=navigator.userAgent.indexOf(e[t]))return 1;return 0}(),ne=te&&window.Promise,ie=ne?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},oe))}},re=te&&!!(window.MSInputMethodContext&&document.documentMode),pe=te&&/MSIE 10/.test(navigator.userAgent),se=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},de=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),ae=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},le=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var n in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},fe=te&&/Firefox/i.test(navigator.userAgent),me=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],he=me.slice(3),ce={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},ge=function(){function t(o,n){var i=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};se(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=ie(this.update.bind(this)),this.options=le({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o&&o.jquery?o[0]:o,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(le({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){i.options.modifiers[e]=le({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return le({name:e},i.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return de(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return H.call(this)}},{key:'enableEventListeners',value:function(){return I.call(this)}},{key:'disableEventListeners',value:function(){return U.call(this)}}]),t}();return ge.Utils=('undefined'==typeof window?global:window).PopperUtils,ge.placements=me,ge.Defaults={placement:'bottom',positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],n=t.split('-')[1];if(n){var i=e.offsets,r=i.reference,p=i.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:ae({},d,r[d]),end:ae({},d,r[d]+r[a]-p[a])};e.offsets.popper=le({},p,l[n])}return e}},offset:{order:200,enabled:!0,fn:J,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||p(e.instance.popper);e.instance.reference===o&&(o=p(o));var n=B('transform'),i=e.instance.popper.style,r=i.top,s=i.left,d=i[n];i.top='',i.left='',i[n]='';var a=v(e.instance.popper,e.instance.reference,t.padding,o,e.positionFixed);i.top=r,i.left=s,i[n]=d,t.boundaries=a;var l=t.priority,f=e.offsets.popper,m={primary:function(e){var o=f[e];return f[e]<a[e]&&!t.escapeWithReference&&(o=ee(f[e],a[e])),ae({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=f[o];return f[e]>a[e]&&!t.escapeWithReference&&(n=Q(f[o],a[e]-('right'===e?f.width:f.height))),ae({},o,n)}};return l.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';f=le({},f,m[t](e))}),e.offsets.popper=f,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,n=t.reference,i=e.placement.split('-')[0],r=Z,p=-1!==['top','bottom'].indexOf(i),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(n[d])&&(e.offsets.popper[d]=r(n[d])-o[a]),o[d]>r(n[s])&&(e.offsets.popper[d]=r(n[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){var n;if(!K(e.instance.modifiers,'arrow','keepTogether'))return e;var i=o.element;if('string'==typeof i){if(i=e.instance.popper.querySelector(i),!i)return e;}else if(!e.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var r=e.placement.split('-')[0],p=e.offsets,s=p.popper,d=p.reference,a=-1!==['left','right'].indexOf(r),l=a?'height':'width',f=a?'Top':'Left',m=f.toLowerCase(),h=a?'left':'top',c=a?'bottom':'right',u=S(i)[l];d[c]-u<s[m]&&(e.offsets.popper[m]-=s[m]-(d[c]-u)),d[m]+u>s[c]&&(e.offsets.popper[m]+=d[m]+u-s[c]),e.offsets.popper=g(e.offsets.popper);var b=d[m]+d[l]/2-u/2,w=t(e.instance.popper),y=parseFloat(w['margin'+f],10),E=parseFloat(w['border'+f+'Width'],10),v=b-e.offsets.popper[m]-y-E;return v=ee(Q(s[l]-u,v),0),e.arrowElement=i,e.offsets.arrow=(n={},ae(n,m,$(v)),ae(n,h,''),n),e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=v(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),n=e.placement.split('-')[0],i=T(n),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case ce.FLIP:p=[n,i];break;case ce.CLOCKWISE:p=G(n);break;case ce.COUNTERCLOCKWISE:p=G(n,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(n!==s||p.length===d+1)return e;n=e.placement.split('-')[0],i=T(n);var a=e.offsets.popper,l=e.offsets.reference,f=Z,m='left'===n&&f(a.right)>f(l.left)||'right'===n&&f(a.left)<f(l.right)||'top'===n&&f(a.bottom)>f(l.top)||'bottom'===n&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===n&&h||'right'===n&&c||'top'===n&&g||'bottom'===n&&u,w=-1!==['top','bottom'].indexOf(n),y=!!t.flipVariations&&(w&&'start'===r&&h||w&&'end'===r&&c||!w&&'start'===r&&g||!w&&'end'===r&&u),E=!!t.flipVariationsByContent&&(w&&'start'===r&&c||w&&'end'===r&&h||!w&&'start'===r&&u||!w&&'end'===r&&g),v=y||E;(m||b||v)&&(e.flipped=!0,(m||b)&&(n=p[d+1]),v&&(r=z(r)),e.placement=n+(r?'-'+r:''),e.offsets.popper=le({},e.offsets.popper,C(e.instance.popper,e.offsets.reference,e.placement)),e=P(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport',flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],n=e.offsets,i=n.popper,r=n.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return i[p?'left':'top']=r[o]-(s?i[p?'width':'height']:0),e.placement=T(t),e.offsets.popper=g(i),e}},hide:{order:800,enabled:!0,fn:function(e){if(!K(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=D(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,n=t.y,i=e.offsets.popper,r=D(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==r&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===r?t.gpuAcceleration:r,l=p(e.instance.popper),f=u(l),m={position:i.position},h=q(e,2>window.devicePixelRatio||!fe),c='bottom'===o?'top':'bottom',g='right'===n?'left':'right',b=B('transform');if(d='bottom'==c?'HTML'===l.nodeName?-l.clientHeight+h.bottom:-f.height+h.bottom:h.top,s='right'==g?'HTML'===l.nodeName?-l.clientWidth+h.right:-f.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[g]=0,m.willChange='transform';else{var w='bottom'==c?-1:1,y='right'==g?-1:1;m[c]=d*w,m[g]=s*y,m.willChange=c+', '+g}var E={"x-placement":e.placement};return e.attributes=le({},E,e.attributes),e.styles=le({},m,e.styles),e.arrowStyles=le({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return V(e.instance.popper,e.styles),j(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&V(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,n,i){var r=L(i,t,e,o.positionFixed),p=O(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),V(t,{position:o.positionFixed?'fixed':'absolute'}),o},gpuAcceleration:void 0}}},ge});

 /* --------------------------------------------------------------------------------------------
  MOMENT
  moment.js
  license : MIT
  version : 2.9.0
  authors : Tim Wood, Iskren Chernev, Moment.js contributors
  https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.9.0/moment-with-locales.js
-------------------------------------------------------------------------------------------- */
(function (undefined) {
  /************************************
      Constants
  ************************************/

  var moment,
      VERSION = '2.9.0',
      // the global-scope this is NOT the global object in Node.js
      globalScope = (typeof global !== 'undefined' && (typeof window === 'undefined' || window === global.window)) ? global : this,
      oldGlobalMoment,
      round = Math.round,
      hasOwnProperty = Object.prototype.hasOwnProperty,
      i,

      YEAR = 0,
      MONTH = 1,
      DATE = 2,
      HOUR = 3,
      MINUTE = 4,
      SECOND = 5,
      MILLISECOND = 6,

      // internal storage for locale config files
      locales = {},

      // extra moment internal properties (plugins register props here)
      momentProperties = [],

      // check for nodeJS
      hasModule = (typeof module !== 'undefined' && module && module.exports),

      // ASP.NET json date format regex
      aspNetJsonRegex = /^\/?Date\((\-?\d+)/i,
      aspNetTimeSpanJsonRegex = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,

      // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
      // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
      isoDurationRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,

      // format tokens
      formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,
      localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,

      // parsing token regexes
      parseTokenOneOrTwoDigits = /\d\d?/, // 0 - 99
      parseTokenOneToThreeDigits = /\d{1,3}/, // 0 - 999
      parseTokenOneToFourDigits = /\d{1,4}/, // 0 - 9999
      parseTokenOneToSixDigits = /[+\-]?\d{1,6}/, // -999,999 - 999,999
      parseTokenDigits = /\d+/, // nonzero number of digits
      parseTokenWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, // any word (or two) characters or numbers including two/three word month in arabic.
      parseTokenTimezone = /Z|[\+\-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
      parseTokenT = /T/i, // T (ISO separator)
      parseTokenOffsetMs = /[\+\-]?\d+/, // 1234567890123
      parseTokenTimestampMs = /[\+\-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123

      //strict parsing regexes
      parseTokenOneDigit = /\d/, // 0 - 9
      parseTokenTwoDigits = /\d\d/, // 00 - 99
      parseTokenThreeDigits = /\d{3}/, // 000 - 999
      parseTokenFourDigits = /\d{4}/, // 0000 - 9999
      parseTokenSixDigits = /[+-]?\d{6}/, // -999,999 - 999,999
      parseTokenSignedNumber = /[+-]?\d+/, // -inf - inf

      // iso 8601 regex
      // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
      isoRegex = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,

      isoFormat = 'YYYY-MM-DDTHH:mm:ssZ',

      isoDates = [
          ['YYYYYY-MM-DD', /[+-]\d{6}-\d{2}-\d{2}/],
          ['YYYY-MM-DD', /\d{4}-\d{2}-\d{2}/],
          ['GGGG-[W]WW-E', /\d{4}-W\d{2}-\d/],
          ['GGGG-[W]WW', /\d{4}-W\d{2}/],
          ['YYYY-DDD', /\d{4}-\d{3}/]
      ],

      // iso time formats and regexes
      isoTimes = [
          ['HH:mm:ss.SSSS', /(T| )\d\d:\d\d:\d\d\.\d+/],
          ['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/],
          ['HH:mm', /(T| )\d\d:\d\d/],
          ['HH', /(T| )\d\d/]
      ],

      // timezone chunker '+10:00' > ['10', '00'] or '-1530' > ['-', '15', '30']
      parseTimezoneChunker = /([\+\-]|\d\d)/gi,

      // getter and setter names
      proxyGettersAndSetters = 'Date|Hours|Minutes|Seconds|Milliseconds'.split('|'),
      unitMillisecondFactors = {
          'Milliseconds' : 1,
          'Seconds' : 1e3,
          'Minutes' : 6e4,
          'Hours' : 36e5,
          'Days' : 864e5,
          'Months' : 2592e6,
          'Years' : 31536e6
      },

      unitAliases = {
          ms : 'millisecond',
          s : 'second',
          m : 'minute',
          h : 'hour',
          d : 'day',
          D : 'date',
          w : 'week',
          W : 'isoWeek',
          M : 'month',
          Q : 'quarter',
          y : 'year',
          DDD : 'dayOfYear',
          e : 'weekday',
          E : 'isoWeekday',
          gg: 'weekYear',
          GG: 'isoWeekYear'
      },

      camelFunctions = {
          dayofyear : 'dayOfYear',
          isoweekday : 'isoWeekday',
          isoweek : 'isoWeek',
          weekyear : 'weekYear',
          isoweekyear : 'isoWeekYear'
      },

      // format function strings
      formatFunctions = {},

      // default relative time thresholds
      relativeTimeThresholds = {
          s: 45,  // seconds to minute
          m: 45,  // minutes to hour
          h: 22,  // hours to day
          d: 26,  // days to month
          M: 11   // months to year
      },

      // tokens to ordinalize and pad
      ordinalizeTokens = 'DDD w W M D d'.split(' '),
      paddedTokens = 'M D H h m s w W'.split(' '),

      formatTokenFunctions = {
          M    : function () {
              return this.month() + 1;
          },
          MMM  : function (format) {
              return this.localeData().monthsShort(this, format);
          },
          MMMM : function (format) {
              return this.localeData().months(this, format);
          },
          D    : function () {
              return this.date();
          },
          DDD  : function () {
              return this.dayOfYear();
          },
          d    : function () {
              return this.day();
          },
          dd   : function (format) {
              return this.localeData().weekdaysMin(this, format);
          },
          ddd  : function (format) {
              return this.localeData().weekdaysShort(this, format);
          },
          dddd : function (format) {
              return this.localeData().weekdays(this, format);
          },
          w    : function () {
              return this.week();
          },
          W    : function () {
              return this.isoWeek();
          },
          YY   : function () {
              return leftZeroFill(this.year() % 100, 2);
          },
          YYYY : function () {
              return leftZeroFill(this.year(), 4);
          },
          YYYYY : function () {
              return leftZeroFill(this.year(), 5);
          },
          YYYYYY : function () {
              var y = this.year(), sign = y >= 0 ? '+' : '-';
              return sign + leftZeroFill(Math.abs(y), 6);
          },
          gg   : function () {
              return leftZeroFill(this.weekYear() % 100, 2);
          },
          gggg : function () {
              return leftZeroFill(this.weekYear(), 4);
          },
          ggggg : function () {
              return leftZeroFill(this.weekYear(), 5);
          },
          GG   : function () {
              return leftZeroFill(this.isoWeekYear() % 100, 2);
          },
          GGGG : function () {
              return leftZeroFill(this.isoWeekYear(), 4);
          },
          GGGGG : function () {
              return leftZeroFill(this.isoWeekYear(), 5);
          },
          e : function () {
              return this.weekday();
          },
          E : function () {
              return this.isoWeekday();
          },
          a    : function () {
              return this.localeData().meridiem(this.hours(), this.minutes(), true);
          },
          A    : function () {
              return this.localeData().meridiem(this.hours(), this.minutes(), false);
          },
          H    : function () {
              return this.hours();
          },
          h    : function () {
              return this.hours() % 12 || 12;
          },
          m    : function () {
              return this.minutes();
          },
          s    : function () {
              return this.seconds();
          },
          S    : function () {
              return toInt(this.milliseconds() / 100);
          },
          SS   : function () {
              return leftZeroFill(toInt(this.milliseconds() / 10), 2);
          },
          SSS  : function () {
              return leftZeroFill(this.milliseconds(), 3);
          },
          SSSS : function () {
              return leftZeroFill(this.milliseconds(), 3);
          },
          Z    : function () {
              var a = this.utcOffset(),
                  b = '+';
              if (a < 0) {
                  a = -a;
                  b = '-';
              }
              return b + leftZeroFill(toInt(a / 60), 2) + ':' + leftZeroFill(toInt(a) % 60, 2);
          },
          ZZ   : function () {
              var a = this.utcOffset(),
                  b = '+';
              if (a < 0) {
                  a = -a;
                  b = '-';
              }
              return b + leftZeroFill(toInt(a / 60), 2) + leftZeroFill(toInt(a) % 60, 2);
          },
          z : function () {
              return this.zoneAbbr();
          },
          zz : function () {
              return this.zoneName();
          },
          x    : function () {
              return this.valueOf();
          },
          X    : function () {
              return this.unix();
          },
          Q : function () {
              return this.quarter();
          }
      },

      deprecations = {},

      lists = ['months', 'monthsShort', 'weekdays', 'weekdaysShort', 'weekdaysMin'],

      updateInProgress = false;

  // Pick the first defined of two or three arguments. dfl comes from
  // default.
  function dfl(a, b, c) {
      switch (arguments.length) {
          case 2: return a != null ? a : b;
          case 3: return a != null ? a : b != null ? b : c;
          default: throw new Error('Implement me');
      }
  }

  function hasOwnProp(a, b) {
      return hasOwnProperty.call(a, b);
  }

  function defaultParsingFlags() {
      // We need to deep clone this object, and es5 standard is not very
      // helpful.
      return {
          empty : false,
          unusedTokens : [],
          unusedInput : [],
          overflow : -2,
          charsLeftOver : 0,
          nullInput : false,
          invalidMonth : null,
          invalidFormat : false,
          userInvalidated : false,
          iso: false
      };
  }

  function printMsg(msg) {
      if (moment.suppressDeprecationWarnings === false &&
              typeof console !== 'undefined' && console.warn) {
          console.warn('Deprecation warning: ' + msg);
      }
  }

  function deprecate(msg, fn) {
      var firstTime = true;
      return extend(function () {
          if (firstTime) {
              printMsg(msg);
              firstTime = false;
          }
          return fn.apply(this, arguments);
      }, fn);
  }

  function deprecateSimple(name, msg) {
      if (!deprecations[name]) {
          printMsg(msg);
          deprecations[name] = true;
      }
  }

  function padToken(func, count) {
      return function (a) {
          return leftZeroFill(func.call(this, a), count);
      };
  }
  function ordinalizeToken(func, period) {
      return function (a) {
          return this.localeData().ordinal(func.call(this, a), period);
      };
  }

  function monthDiff(a, b) {
      // difference in months
      var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
          // b is in (anchor - 1 month, anchor + 1 month)
          anchor = a.clone().add(wholeMonthDiff, 'months'),
          anchor2, adjust;

      if (b - anchor < 0) {
          anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
          // linear across the month
          adjust = (b - anchor) / (anchor - anchor2);
      } else {
          anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
          // linear across the month
          adjust = (b - anchor) / (anchor2 - anchor);
      }

      return -(wholeMonthDiff + adjust);
  }

  while (ordinalizeTokens.length) {
      i = ordinalizeTokens.pop();
      formatTokenFunctions[i + 'o'] = ordinalizeToken(formatTokenFunctions[i], i);
  }
  while (paddedTokens.length) {
      i = paddedTokens.pop();
      formatTokenFunctions[i + i] = padToken(formatTokenFunctions[i], 2);
  }
  formatTokenFunctions.DDDD = padToken(formatTokenFunctions.DDD, 3);


  function meridiemFixWrap(locale, hour, meridiem) {
      var isPm;

      if (meridiem == null) {
          // nothing to do
          return hour;
      }
      if (locale.meridiemHour != null) {
          return locale.meridiemHour(hour, meridiem);
      } else if (locale.isPM != null) {
          // Fallback
          isPm = locale.isPM(meridiem);
          if (isPm && hour < 12) {
              hour += 12;
          }
          if (!isPm && hour === 12) {
              hour = 0;
          }
          return hour;
      } else {
          // thie is not supposed to happen
          return hour;
      }
  }

  /************************************
      Constructors
  ************************************/

  function Locale() {
  }

  // Moment prototype object
  function Moment(config, skipOverflow) {
      if (skipOverflow !== false) {
          checkOverflow(config);
      }
      copyConfig(this, config);
      this._d = new Date(+config._d);
      // Prevent infinite loop in case updateOffset creates new moment
      // objects.
      if (updateInProgress === false) {
          updateInProgress = true;
          moment.updateOffset(this);
          updateInProgress = false;
      }
  }

  // Duration Constructor
  function Duration(duration) {
      var normalizedInput = normalizeObjectUnits(duration),
          years = normalizedInput.year || 0,
          quarters = normalizedInput.quarter || 0,
          months = normalizedInput.month || 0,
          weeks = normalizedInput.week || 0,
          days = normalizedInput.day || 0,
          hours = normalizedInput.hour || 0,
          minutes = normalizedInput.minute || 0,
          seconds = normalizedInput.second || 0,
          milliseconds = normalizedInput.millisecond || 0;

      // representation for dateAddRemove
      this._milliseconds = +milliseconds +
          seconds * 1e3 + // 1000
          minutes * 6e4 + // 1000 * 60
          hours * 36e5; // 1000 * 60 * 60
      // Because of dateAddRemove treats 24 hours as different from a
      // day when working around DST, we need to store them separately
      this._days = +days +
          weeks * 7;
      // It is impossible translate months into days without knowing
      // which months you are are talking about, so we have to store
      // it separately.
      this._months = +months +
          quarters * 3 +
          years * 12;

      this._data = {};

      this._locale = moment.localeData();

      this._bubble();
  }

  /************************************
      Helpers
  ************************************/


  function extend(a, b) {
      for (var i in b) {
          if (hasOwnProp(b, i)) {
              a[i] = b[i];
          }
      }

      if (hasOwnProp(b, 'toString')) {
          a.toString = b.toString;
      }

      if (hasOwnProp(b, 'valueOf')) {
          a.valueOf = b.valueOf;
      }

      return a;
  }

  function copyConfig(to, from) {
      var i, prop, val;

      if (typeof from._isAMomentObject !== 'undefined') {
          to._isAMomentObject = from._isAMomentObject;
      }
      if (typeof from._i !== 'undefined') {
          to._i = from._i;
      }
      if (typeof from._f !== 'undefined') {
          to._f = from._f;
      }
      if (typeof from._l !== 'undefined') {
          to._l = from._l;
      }
      if (typeof from._strict !== 'undefined') {
          to._strict = from._strict;
      }
      if (typeof from._tzm !== 'undefined') {
          to._tzm = from._tzm;
      }
      if (typeof from._isUTC !== 'undefined') {
          to._isUTC = from._isUTC;
      }
      if (typeof from._offset !== 'undefined') {
          to._offset = from._offset;
      }
      if (typeof from._pf !== 'undefined') {
          to._pf = from._pf;
      }
      if (typeof from._locale !== 'undefined') {
          to._locale = from._locale;
      }

      if (momentProperties.length > 0) {
          for (i in momentProperties) {
              prop = momentProperties[i];
              val = from[prop];
              if (typeof val !== 'undefined') {
                  to[prop] = val;
              }
          }
      }

      return to;
  }

  function absRound(number) {
      if (number < 0) {
          return Math.ceil(number);
      } else {
          return Math.floor(number);
      }
  }

  // left zero fill a number
  // see http://jsperf.com/left-zero-filling for performance comparison
  function leftZeroFill(number, targetLength, forceSign) {
      var output = '' + Math.abs(number),
          sign = number >= 0;

      while (output.length < targetLength) {
          output = '0' + output;
      }
      return (sign ? (forceSign ? '+' : '') : '-') + output;
  }

  function positiveMomentsDifference(base, other) {
      var res = {milliseconds: 0, months: 0};

      res.months = other.month() - base.month() +
          (other.year() - base.year()) * 12;
      if (base.clone().add(res.months, 'M').isAfter(other)) {
          --res.months;
      }

      res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

      return res;
  }

  function momentsDifference(base, other) {
      var res;
      other = makeAs(other, base);
      if (base.isBefore(other)) {
          res = positiveMomentsDifference(base, other);
      } else {
          res = positiveMomentsDifference(other, base);
          res.milliseconds = -res.milliseconds;
          res.months = -res.months;
      }

      return res;
  }

  // TODO: remove 'name' arg after deprecation is removed
  function createAdder(direction, name) {
      return function (val, period) {
          var dur, tmp;
          //invert the arguments, but complain about it
          if (period !== null && !isNaN(+period)) {
              deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period).');
              tmp = val; val = period; period = tmp;
          }

          val = typeof val === 'string' ? +val : val;
          dur = moment.duration(val, period);
          addOrSubtractDurationFromMoment(this, dur, direction);
          return this;
      };
  }

  function addOrSubtractDurationFromMoment(mom, duration, isAdding, updateOffset) {
      var milliseconds = duration._milliseconds,
          days = duration._days,
          months = duration._months;
      updateOffset = updateOffset == null ? true : updateOffset;

      if (milliseconds) {
          mom._d.setTime(+mom._d + milliseconds * isAdding);
      }
      if (days) {
          rawSetter(mom, 'Date', rawGetter(mom, 'Date') + days * isAdding);
      }
      if (months) {
          rawMonthSetter(mom, rawGetter(mom, 'Month') + months * isAdding);
      }
      if (updateOffset) {
          moment.updateOffset(mom, days || months);
      }
  }

  // check if is an array
  function isArray(input) {
      return Object.prototype.toString.call(input) === '[object Array]';
  }

  function isDate(input) {
      return Object.prototype.toString.call(input) === '[object Date]' ||
          input instanceof Date;
  }

  // compare two arrays, return the number of differences
  function compareArrays(array1, array2, dontConvert) {
      var len = Math.min(array1.length, array2.length),
          lengthDiff = Math.abs(array1.length - array2.length),
          diffs = 0,
          i;
      for (i = 0; i < len; i++) {
          if ((dontConvert && array1[i] !== array2[i]) ||
              (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
              diffs++;
          }
      }
      return diffs + lengthDiff;
  }

  function normalizeUnits(units) {
      if (units) {
          var lowered = units.toLowerCase().replace(/(.)s$/, '$1');
          units = unitAliases[units] || camelFunctions[lowered] || lowered;
      }
      return units;
  }

  function normalizeObjectUnits(inputObject) {
      var normalizedInput = {},
          normalizedProp,
          prop;

      for (prop in inputObject) {
          if (hasOwnProp(inputObject, prop)) {
              normalizedProp = normalizeUnits(prop);
              if (normalizedProp) {
                  normalizedInput[normalizedProp] = inputObject[prop];
              }
          }
      }

      return normalizedInput;
  }

  function makeList(field) {
      var count, setter;

      if (field.indexOf('week') === 0) {
          count = 7;
          setter = 'day';
      }
      else if (field.indexOf('month') === 0) {
          count = 12;
          setter = 'month';
      }
      else {
          return;
      }

      moment[field] = function (format, index) {
          var i, getter,
              method = moment._locale[field],
              results = [];

          if (typeof format === 'number') {
              index = format;
              format = undefined;
          }

          getter = function (i) {
              var m = moment().utc().set(setter, i);
              return method.call(moment._locale, m, format || '');
          };

          if (index != null) {
              return getter(index);
          }
          else {
              for (i = 0; i < count; i++) {
                  results.push(getter(i));
              }
              return results;
          }
      };
  }

  function toInt(argumentForCoercion) {
      var coercedNumber = +argumentForCoercion,
          value = 0;

      if (coercedNumber !== 0 && isFinite(coercedNumber)) {
          if (coercedNumber >= 0) {
              value = Math.floor(coercedNumber);
          } else {
              value = Math.ceil(coercedNumber);
          }
      }

      return value;
  }

  function daysInMonth(year, month) {
      return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  }

  function weeksInYear(year, dow, doy) {
      return weekOfYear(moment([year, 11, 31 + dow - doy]), dow, doy).week;
  }

  function daysInYear(year) {
      return isLeapYear(year) ? 366 : 365;
  }

  function isLeapYear(year) {
      return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  function checkOverflow(m) {
      var overflow;
      if (m._a && m._pf.overflow === -2) {
          overflow =
              m._a[MONTH] < 0 || m._a[MONTH] > 11 ? MONTH :
              m._a[DATE] < 1 || m._a[DATE] > daysInMonth(m._a[YEAR], m._a[MONTH]) ? DATE :
              m._a[HOUR] < 0 || m._a[HOUR] > 24 ||
                  (m._a[HOUR] === 24 && (m._a[MINUTE] !== 0 ||
                                         m._a[SECOND] !== 0 ||
                                         m._a[MILLISECOND] !== 0)) ? HOUR :
              m._a[MINUTE] < 0 || m._a[MINUTE] > 59 ? MINUTE :
              m._a[SECOND] < 0 || m._a[SECOND] > 59 ? SECOND :
              m._a[MILLISECOND] < 0 || m._a[MILLISECOND] > 999 ? MILLISECOND :
              -1;

          if (m._pf._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
              overflow = DATE;
          }

          m._pf.overflow = overflow;
      }
  }

  function isValid(m) {
      if (m._isValid == null) {
          m._isValid = !isNaN(m._d.getTime()) &&
              m._pf.overflow < 0 &&
              !m._pf.empty &&
              !m._pf.invalidMonth &&
              !m._pf.nullInput &&
              !m._pf.invalidFormat &&
              !m._pf.userInvalidated;

          if (m._strict) {
              m._isValid = m._isValid &&
                  m._pf.charsLeftOver === 0 &&
                  m._pf.unusedTokens.length === 0 &&
                  m._pf.bigHour === undefined;
          }
      }
      return m._isValid;
  }

  function normalizeLocale(key) {
      return key ? key.toLowerCase().replace('_', '-') : key;
  }

  // pick the locale from the array
  // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
  // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
  function chooseLocale(names) {
      var i = 0, j, next, locale, split;

      while (i < names.length) {
          split = normalizeLocale(names[i]).split('-');
          j = split.length;
          next = normalizeLocale(names[i + 1]);
          next = next ? next.split('-') : null;
          while (j > 0) {
              locale = loadLocale(split.slice(0, j).join('-'));
              if (locale) {
                  return locale;
              }
              if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                  //the next array item is better than a shallower substring of this one
                  break;
              }
              j--;
          }
          i++;
      }
      return null;
  }

  function loadLocale(name) {
      var oldLocale = null;
      if (!locales[name] && hasModule) {
          try {
              oldLocale = moment.locale();
              require('./locale/' + name);
              // because defineLocale currently also sets the global locale, we want to undo that for lazy loaded locales
              moment.locale(oldLocale);
          } catch (e) { }
      }
      return locales[name];
  }

  // Return a moment from input, that is local/utc/utcOffset equivalent to
  // model.
  function makeAs(input, model) {
      var res, diff;
      if (model._isUTC) {
          res = model.clone();
          diff = (moment.isMoment(input) || isDate(input) ?
                  +input : +moment(input)) - (+res);
          // Use low-level api, because this fn is low-level api.
          res._d.setTime(+res._d + diff);
          moment.updateOffset(res, false);
          return res;
      } else {
          return moment(input).local();
      }
  }

  /************************************
      Locale
  ************************************/


  extend(Locale.prototype, {

      set : function (config) {
          var prop, i;
          for (i in config) {
              prop = config[i];
              if (typeof prop === 'function') {
                  this[i] = prop;
              } else {
                  this['_' + i] = prop;
              }
          }
          // Lenient ordinal parsing accepts just a number in addition to
          // number + (possibly) stuff coming from _ordinalParseLenient.
          this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + /\d{1,2}/.source);
      },

      _months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
      months : function (m) {
          return this._months[m.month()];
      },

      _monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
      monthsShort : function (m) {
          return this._monthsShort[m.month()];
      },

      monthsParse : function (monthName, format, strict) {
          var i, mom, regex;

          if (!this._monthsParse) {
              this._monthsParse = [];
              this._longMonthsParse = [];
              this._shortMonthsParse = [];
          }

          for (i = 0; i < 12; i++) {
              // make the regex if we don't have it already
              mom = moment.utc([2000, i]);
              if (strict && !this._longMonthsParse[i]) {
                  this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                  this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
              }
              if (!strict && !this._monthsParse[i]) {
                  regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                  this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
              }
              // test the regex
              if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                  return i;
              } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                  return i;
              } else if (!strict && this._monthsParse[i].test(monthName)) {
                  return i;
              }
          }
      },

      _weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
      weekdays : function (m) {
          return this._weekdays[m.day()];
      },

      _weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
      weekdaysShort : function (m) {
          return this._weekdaysShort[m.day()];
      },

      _weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
      weekdaysMin : function (m) {
          return this._weekdaysMin[m.day()];
      },

      weekdaysParse : function (weekdayName) {
          var i, mom, regex;

          if (!this._weekdaysParse) {
              this._weekdaysParse = [];
          }

          for (i = 0; i < 7; i++) {
              // make the regex if we don't have it already
              if (!this._weekdaysParse[i]) {
                  mom = moment([2000, 1]).day(i);
                  regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                  this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
              }
              // test the regex
              if (this._weekdaysParse[i].test(weekdayName)) {
                  return i;
              }
          }
      },

      _longDateFormat : {
          LTS : 'h:mm:ss A',
          LT : 'h:mm A',
          L : 'MM/DD/YYYY',
          LL : 'MMMM D, YYYY',
          LLL : 'MMMM D, YYYY LT',
          LLLL : 'dddd, MMMM D, YYYY LT'
      },
      longDateFormat : function (key) {
          var output = this._longDateFormat[key];
          if (!output && this._longDateFormat[key.toUpperCase()]) {
              output = this._longDateFormat[key.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (val) {
                  return val.slice(1);
              });
              this._longDateFormat[key] = output;
          }
          return output;
      },

      isPM : function (input) {
          // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
          // Using charAt should be more compatible.
          return ((input + '').toLowerCase().charAt(0) === 'p');
      },

      _meridiemParse : /[ap]\.?m?\.?/i,
      meridiem : function (hours, minutes, isLower) {
          if (hours > 11) {
              return isLower ? 'pm' : 'PM';
          } else {
              return isLower ? 'am' : 'AM';
          }
      },


      _calendar : {
          sameDay : '[Today at] LT',
          nextDay : '[Tomorrow at] LT',
          nextWeek : 'dddd [at] LT',
          lastDay : '[Yesterday at] LT',
          lastWeek : '[Last] dddd [at] LT',
          sameElse : 'L'
      },
      calendar : function (key, mom, now) {
          var output = this._calendar[key];
          return typeof output === 'function' ? output.apply(mom, [now]) : output;
      },

      _relativeTime : {
          future : 'in %s',
          past : '%s ago',
          s : 'a few seconds',
          m : 'a minute',
          mm : '%d minutes',
          h : 'an hour',
          hh : '%d hours',
          d : 'a day',
          dd : '%d days',
          M : 'a month',
          MM : '%d months',
          y : 'a year',
          yy : '%d years'
      },

      relativeTime : function (number, withoutSuffix, string, isFuture) {
          var output = this._relativeTime[string];
          return (typeof output === 'function') ?
              output(number, withoutSuffix, string, isFuture) :
              output.replace(/%d/i, number);
      },

      pastFuture : function (diff, output) {
          var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
          return typeof format === 'function' ? format(output) : format.replace(/%s/i, output);
      },

      ordinal : function (number) {
          return this._ordinal.replace('%d', number);
      },
      _ordinal : '%d',
      _ordinalParse : /\d{1,2}/,

      preparse : function (string) {
          return string;
      },

      postformat : function (string) {
          return string;
      },

      week : function (mom) {
          return weekOfYear(mom, this._week.dow, this._week.doy).week;
      },

      _week : {
          dow : 0, // Sunday is the first day of the week.
          doy : 6  // The week that contains Jan 1st is the first week of the year.
      },

      firstDayOfWeek : function () {
          return this._week.dow;
      },

      firstDayOfYear : function () {
          return this._week.doy;
      },

      _invalidDate: 'Invalid date',
      invalidDate: function () {
          return this._invalidDate;
      }
  });

  /************************************
      Formatting
  ************************************/


  function removeFormattingTokens(input) {
      if (input.match(/\[[\s\S]/)) {
          return input.replace(/^\[|\]$/g, '');
      }
      return input.replace(/\\/g, '');
  }

  function makeFormatFunction(format) {
      var array = format.match(formattingTokens), i, length;

      for (i = 0, length = array.length; i < length; i++) {
          if (formatTokenFunctions[array[i]]) {
              array[i] = formatTokenFunctions[array[i]];
          } else {
              array[i] = removeFormattingTokens(array[i]);
          }
      }

      return function (mom) {
          var output = '';
          for (i = 0; i < length; i++) {
              output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
          }
          return output;
      };
  }

  // format date using native date object
  function formatMoment(m, format) {
      if (!m.isValid()) {
          return m.localeData().invalidDate();
      }

      format = expandFormat(format, m.localeData());

      if (!formatFunctions[format]) {
          formatFunctions[format] = makeFormatFunction(format);
      }

      return formatFunctions[format](m);
  }

  function expandFormat(format, locale) {
      var i = 5;

      function replaceLongDateFormatTokens(input) {
          return locale.longDateFormat(input) || input;
      }

      localFormattingTokens.lastIndex = 0;
      while (i >= 0 && localFormattingTokens.test(format)) {
          format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
          localFormattingTokens.lastIndex = 0;
          i -= 1;
      }

      return format;
  }


  /************************************
      Parsing
  ************************************/


  // get the regex to find the next token
  function getParseRegexForToken(token, config) {
      var a, strict = config._strict;
      switch (token) {
      case 'Q':
          return parseTokenOneDigit;
      case 'DDDD':
          return parseTokenThreeDigits;
      case 'YYYY':
      case 'GGGG':
      case 'gggg':
          return strict ? parseTokenFourDigits : parseTokenOneToFourDigits;
      case 'Y':
      case 'G':
      case 'g':
          return parseTokenSignedNumber;
      case 'YYYYYY':
      case 'YYYYY':
      case 'GGGGG':
      case 'ggggg':
          return strict ? parseTokenSixDigits : parseTokenOneToSixDigits;
      case 'S':
          if (strict) {
              return parseTokenOneDigit;
          }
          /* falls through */
      case 'SS':
          if (strict) {
              return parseTokenTwoDigits;
          }
          /* falls through */
      case 'SSS':
          if (strict) {
              return parseTokenThreeDigits;
          }
          /* falls through */
      case 'DDD':
          return parseTokenOneToThreeDigits;
      case 'MMM':
      case 'MMMM':
      case 'dd':
      case 'ddd':
      case 'dddd':
          return parseTokenWord;
      case 'a':
      case 'A':
          return config._locale._meridiemParse;
      case 'x':
          return parseTokenOffsetMs;
      case 'X':
          return parseTokenTimestampMs;
      case 'Z':
      case 'ZZ':
          return parseTokenTimezone;
      case 'T':
          return parseTokenT;
      case 'SSSS':
          return parseTokenDigits;
      case 'MM':
      case 'DD':
      case 'YY':
      case 'GG':
      case 'gg':
      case 'HH':
      case 'hh':
      case 'mm':
      case 'ss':
      case 'ww':
      case 'WW':
          return strict ? parseTokenTwoDigits : parseTokenOneOrTwoDigits;
      case 'M':
      case 'D':
      case 'd':
      case 'H':
      case 'h':
      case 'm':
      case 's':
      case 'w':
      case 'W':
      case 'e':
      case 'E':
          return parseTokenOneOrTwoDigits;
      case 'Do':
          return strict ? config._locale._ordinalParse : config._locale._ordinalParseLenient;
      default :
          a = new RegExp(regexpEscape(unescapeFormat(token.replace('\\', '')), 'i'));
          return a;
      }
  }

  function utcOffsetFromString(string) {
      string = string || '';
      var possibleTzMatches = (string.match(parseTokenTimezone) || []),
          tzChunk = possibleTzMatches[possibleTzMatches.length - 1] || [],
          parts = (tzChunk + '').match(parseTimezoneChunker) || ['-', 0, 0],
          minutes = +(parts[1] * 60) + toInt(parts[2]);

      return parts[0] === '+' ? minutes : -minutes;
  }

  // function to convert string input to date
  function addTimeToArrayFromToken(token, input, config) {
      var a, datePartArray = config._a;

      switch (token) {
      // QUARTER
      case 'Q':
          if (input != null) {
              datePartArray[MONTH] = (toInt(input) - 1) * 3;
          }
          break;
      // MONTH
      case 'M' : // fall through to MM
      case 'MM' :
          if (input != null) {
              datePartArray[MONTH] = toInt(input) - 1;
          }
          break;
      case 'MMM' : // fall through to MMMM
      case 'MMMM' :
          a = config._locale.monthsParse(input, token, config._strict);
          // if we didn't find a month name, mark the date as invalid.
          if (a != null) {
              datePartArray[MONTH] = a;
          } else {
              config._pf.invalidMonth = input;
          }
          break;
      // DAY OF MONTH
      case 'D' : // fall through to DD
      case 'DD' :
          if (input != null) {
              datePartArray[DATE] = toInt(input);
          }
          break;
      case 'Do' :
          if (input != null) {
              datePartArray[DATE] = toInt(parseInt(
                          input.match(/\d{1,2}/)[0], 10));
          }
          break;
      // DAY OF YEAR
      case 'DDD' : // fall through to DDDD
      case 'DDDD' :
          if (input != null) {
              config._dayOfYear = toInt(input);
          }

          break;
      // YEAR
      case 'YY' :
          datePartArray[YEAR] = moment.parseTwoDigitYear(input);
          break;
      case 'YYYY' :
      case 'YYYYY' :
      case 'YYYYYY' :
          datePartArray[YEAR] = toInt(input);
          break;
      // AM / PM
      case 'a' : // fall through to A
      case 'A' :
          config._meridiem = input;
          // config._isPm = config._locale.isPM(input);
          break;
      // HOUR
      case 'h' : // fall through to hh
      case 'hh' :
          config._pf.bigHour = true;
          /* falls through */
      case 'H' : // fall through to HH
      case 'HH' :
          datePartArray[HOUR] = toInt(input);
          break;
      // MINUTE
      case 'm' : // fall through to mm
      case 'mm' :
          datePartArray[MINUTE] = toInt(input);
          break;
      // SECOND
      case 's' : // fall through to ss
      case 'ss' :
          datePartArray[SECOND] = toInt(input);
          break;
      // MILLISECOND
      case 'S' :
      case 'SS' :
      case 'SSS' :
      case 'SSSS' :
          datePartArray[MILLISECOND] = toInt(('0.' + input) * 1000);
          break;
      // UNIX OFFSET (MILLISECONDS)
      case 'x':
          config._d = new Date(toInt(input));
          break;
      // UNIX TIMESTAMP WITH MS
      case 'X':
          config._d = new Date(parseFloat(input) * 1000);
          break;
      // TIMEZONE
      case 'Z' : // fall through to ZZ
      case 'ZZ' :
          config._useUTC = true;
          config._tzm = utcOffsetFromString(input);
          break;
      // WEEKDAY - human
      case 'dd':
      case 'ddd':
      case 'dddd':
          a = config._locale.weekdaysParse(input);
          // if we didn't get a weekday name, mark the date as invalid
          if (a != null) {
              config._w = config._w || {};
              config._w['d'] = a;
          } else {
              config._pf.invalidWeekday = input;
          }
          break;
      // WEEK, WEEK DAY - numeric
      case 'w':
      case 'ww':
      case 'W':
      case 'WW':
      case 'd':
      case 'e':
      case 'E':
          token = token.substr(0, 1);
          /* falls through */
      case 'gggg':
      case 'GGGG':
      case 'GGGGG':
          token = token.substr(0, 2);
          if (input) {
              config._w = config._w || {};
              config._w[token] = toInt(input);
          }
          break;
      case 'gg':
      case 'GG':
          config._w = config._w || {};
          config._w[token] = moment.parseTwoDigitYear(input);
      }
  }

  function dayOfYearFromWeekInfo(config) {
      var w, weekYear, week, weekday, dow, doy, temp;

      w = config._w;
      if (w.GG != null || w.W != null || w.E != null) {
          dow = 1;
          doy = 4;

          // TODO: We need to take the current isoWeekYear, but that depends on
          // how we interpret now (local, utc, fixed offset). So create
          // a now version of current config (take local/utc/offset flags, and
          // create now).
          weekYear = dfl(w.GG, config._a[YEAR], weekOfYear(moment(), 1, 4).year);
          week = dfl(w.W, 1);
          weekday = dfl(w.E, 1);
      } else {
          dow = config._locale._week.dow;
          doy = config._locale._week.doy;

          weekYear = dfl(w.gg, config._a[YEAR], weekOfYear(moment(), dow, doy).year);
          week = dfl(w.w, 1);

          if (w.d != null) {
              // weekday -- low day numbers are considered next week
              weekday = w.d;
              if (weekday < dow) {
                  ++week;
              }
          } else if (w.e != null) {
              // local weekday -- counting starts from begining of week
              weekday = w.e + dow;
          } else {
              // default to begining of week
              weekday = dow;
          }
      }
      temp = dayOfYearFromWeeks(weekYear, week, weekday, doy, dow);

      config._a[YEAR] = temp.year;
      config._dayOfYear = temp.dayOfYear;
  }

  // convert an array to a date.
  // the array should mirror the parameters below
  // note: all values past the year are optional and will default to the lowest possible value.
  // [year, month, day , hour, minute, second, millisecond]
  function dateFromConfig(config) {
      var i, date, input = [], currentDate, yearToUse;

      if (config._d) {
          return;
      }

      currentDate = currentDateArray(config);

      //compute day of the year from weeks and weekdays
      if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
          dayOfYearFromWeekInfo(config);
      }

      //if the day of the year is set, figure out what it is
      if (config._dayOfYear) {
          yearToUse = dfl(config._a[YEAR], currentDate[YEAR]);

          if (config._dayOfYear > daysInYear(yearToUse)) {
              config._pf._overflowDayOfYear = true;
          }

          date = makeUTCDate(yearToUse, 0, config._dayOfYear);
          config._a[MONTH] = date.getUTCMonth();
          config._a[DATE] = date.getUTCDate();
      }

      // Default to current date.
      // * if no year, month, day of month are given, default to today
      // * if day of month is given, default month and year
      // * if month is given, default only year
      // * if year is given, don't default anything
      for (i = 0; i < 3 && config._a[i] == null; ++i) {
          config._a[i] = input[i] = currentDate[i];
      }

      // Zero out whatever was not defaulted, including time
      for (; i < 7; i++) {
          config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
      }

      // Check for 24:00:00.000
      if (config._a[HOUR] === 24 &&
              config._a[MINUTE] === 0 &&
              config._a[SECOND] === 0 &&
              config._a[MILLISECOND] === 0) {
          config._nextDay = true;
          config._a[HOUR] = 0;
      }

      config._d = (config._useUTC ? makeUTCDate : makeDate).apply(null, input);
      // Apply timezone offset from input. The actual utcOffset can be changed
      // with parseZone.
      if (config._tzm != null) {
          config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
      }

      if (config._nextDay) {
          config._a[HOUR] = 24;
      }
  }

  function dateFromObject(config) {
      var normalizedInput;

      if (config._d) {
          return;
      }

      normalizedInput = normalizeObjectUnits(config._i);
      config._a = [
          normalizedInput.year,
          normalizedInput.month,
          normalizedInput.day || normalizedInput.date,
          normalizedInput.hour,
          normalizedInput.minute,
          normalizedInput.second,
          normalizedInput.millisecond
      ];

      dateFromConfig(config);
  }

  function currentDateArray(config) {
      var now = new Date();
      if (config._useUTC) {
          return [
              now.getUTCFullYear(),
              now.getUTCMonth(),
              now.getUTCDate()
          ];
      } else {
          return [now.getFullYear(), now.getMonth(), now.getDate()];
      }
  }

  // date from string and format string
  function makeDateFromStringAndFormat(config) {
      if (config._f === moment.ISO_8601) {
          parseISO(config);
          return;
      }

      config._a = [];
      config._pf.empty = true;

      // This array is used to make a Date, either with `new Date` or `Date.UTC`
      var string = '' + config._i,
          i, parsedInput, tokens, token, skipped,
          stringLength = string.length,
          totalParsedInputLength = 0;

      tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

      for (i = 0; i < tokens.length; i++) {
          token = tokens[i];
          parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
          if (parsedInput) {
              skipped = string.substr(0, string.indexOf(parsedInput));
              if (skipped.length > 0) {
                  config._pf.unusedInput.push(skipped);
              }
              string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
              totalParsedInputLength += parsedInput.length;
          }
          // don't parse if it's not a known token
          if (formatTokenFunctions[token]) {
              if (parsedInput) {
                  config._pf.empty = false;
              }
              else {
                  config._pf.unusedTokens.push(token);
              }
              addTimeToArrayFromToken(token, parsedInput, config);
          }
          else if (config._strict && !parsedInput) {
              config._pf.unusedTokens.push(token);
          }
      }

      // add remaining unparsed input length to the string
      config._pf.charsLeftOver = stringLength - totalParsedInputLength;
      if (string.length > 0) {
          config._pf.unusedInput.push(string);
      }

      // clear _12h flag if hour is <= 12
      if (config._pf.bigHour === true && config._a[HOUR] <= 12) {
          config._pf.bigHour = undefined;
      }
      // handle meridiem
      config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR],
              config._meridiem);
      dateFromConfig(config);
      checkOverflow(config);
  }

  function unescapeFormat(s) {
      return s.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
          return p1 || p2 || p3 || p4;
      });
  }

  // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
  function regexpEscape(s) {
      return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  }

  // date from string and array of format strings
  function makeDateFromStringAndArray(config) {
      var tempConfig,
          bestMoment,

          scoreToBeat,
          i,
          currentScore;

      if (config._f.length === 0) {
          config._pf.invalidFormat = true;
          config._d = new Date(NaN);
          return;
      }

      for (i = 0; i < config._f.length; i++) {
          currentScore = 0;
          tempConfig = copyConfig({}, config);
          if (config._useUTC != null) {
              tempConfig._useUTC = config._useUTC;
          }
          tempConfig._pf = defaultParsingFlags();
          tempConfig._f = config._f[i];
          makeDateFromStringAndFormat(tempConfig);

          if (!isValid(tempConfig)) {
              continue;
          }

          // if there is any input that was not parsed add a penalty for that format
          currentScore += tempConfig._pf.charsLeftOver;

          //or tokens
          currentScore += tempConfig._pf.unusedTokens.length * 10;

          tempConfig._pf.score = currentScore;

          if (scoreToBeat == null || currentScore < scoreToBeat) {
              scoreToBeat = currentScore;
              bestMoment = tempConfig;
          }
      }

      extend(config, bestMoment || tempConfig);
  }

  // date from iso format
  function parseISO(config) {
      var i, l,
          string = config._i,
          match = isoRegex.exec(string);

      if (match) {
          config._pf.iso = true;
          for (i = 0, l = isoDates.length; i < l; i++) {
              if (isoDates[i][1].exec(string)) {
                  // match[5] should be 'T' or undefined
                  config._f = isoDates[i][0] + (match[6] || ' ');
                  break;
              }
          }
          for (i = 0, l = isoTimes.length; i < l; i++) {
              if (isoTimes[i][1].exec(string)) {
                  config._f += isoTimes[i][0];
                  break;
              }
          }
          if (string.match(parseTokenTimezone)) {
              config._f += 'Z';
          }
          makeDateFromStringAndFormat(config);
      } else {
          config._isValid = false;
      }
  }

  // date from iso format or fallback
  function makeDateFromString(config) {
      parseISO(config);
      if (config._isValid === false) {
          delete config._isValid;
          moment.createFromInputFallback(config);
      }
  }

  function map(arr, fn) {
      var res = [], i;
      for (i = 0; i < arr.length; ++i) {
          res.push(fn(arr[i], i));
      }
      return res;
  }

  function makeDateFromInput(config) {
      var input = config._i, matched;
      if (input === undefined) {
          config._d = new Date();
      } else if (isDate(input)) {
          config._d = new Date(+input);
      } else if ((matched = aspNetJsonRegex.exec(input)) !== null) {
          config._d = new Date(+matched[1]);
      } else if (typeof input === 'string') {
          makeDateFromString(config);
      } else if (isArray(input)) {
          config._a = map(input.slice(0), function (obj) {
              return parseInt(obj, 10);
          });
          dateFromConfig(config);
      } else if (typeof(input) === 'object') {
          dateFromObject(config);
      } else if (typeof(input) === 'number') {
          // from milliseconds
          config._d = new Date(input);
      } else {
          moment.createFromInputFallback(config);
      }
  }

  function makeDate(y, m, d, h, M, s, ms) {
      //can't just apply() to create a date:
      //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
      var date = new Date(y, m, d, h, M, s, ms);

      //the date constructor doesn't accept years < 1970
      if (y < 1970) {
          date.setFullYear(y);
      }
      return date;
  }

  function makeUTCDate(y) {
      var date = new Date(Date.UTC.apply(null, arguments));
      if (y < 1970) {
          date.setUTCFullYear(y);
      }
      return date;
  }

  function parseWeekday(input, locale) {
      if (typeof input === 'string') {
          if (!isNaN(input)) {
              input = parseInt(input, 10);
          }
          else {
              input = locale.weekdaysParse(input);
              if (typeof input !== 'number') {
                  return null;
              }
          }
      }
      return input;
  }

  /************************************
      Relative Time
  ************************************/


  // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
  function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
      return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
  }

  function relativeTime(posNegDuration, withoutSuffix, locale) {
      var duration = moment.duration(posNegDuration).abs(),
          seconds = round(duration.as('s')),
          minutes = round(duration.as('m')),
          hours = round(duration.as('h')),
          days = round(duration.as('d')),
          months = round(duration.as('M')),
          years = round(duration.as('y')),

          args = seconds < relativeTimeThresholds.s && ['s', seconds] ||
              minutes === 1 && ['m'] ||
              minutes < relativeTimeThresholds.m && ['mm', minutes] ||
              hours === 1 && ['h'] ||
              hours < relativeTimeThresholds.h && ['hh', hours] ||
              days === 1 && ['d'] ||
              days < relativeTimeThresholds.d && ['dd', days] ||
              months === 1 && ['M'] ||
              months < relativeTimeThresholds.M && ['MM', months] ||
              years === 1 && ['y'] || ['yy', years];

      args[2] = withoutSuffix;
      args[3] = +posNegDuration > 0;
      args[4] = locale;
      return substituteTimeAgo.apply({}, args);
  }


  /************************************
      Week of Year
  ************************************/


  // firstDayOfWeek       0 = sun, 6 = sat
  //                      the day of the week that starts the week
  //                      (usually sunday or monday)
  // firstDayOfWeekOfYear 0 = sun, 6 = sat
  //                      the first week is the week that contains the first
  //                      of this day of the week
  //                      (eg. ISO weeks use thursday (4))
  function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
      var end = firstDayOfWeekOfYear - firstDayOfWeek,
          daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(),
          adjustedMoment;


      if (daysToDayOfWeek > end) {
          daysToDayOfWeek -= 7;
      }

      if (daysToDayOfWeek < end - 7) {
          daysToDayOfWeek += 7;
      }

      adjustedMoment = moment(mom).add(daysToDayOfWeek, 'd');
      return {
          week: Math.ceil(adjustedMoment.dayOfYear() / 7),
          year: adjustedMoment.year()
      };
  }

  //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
  function dayOfYearFromWeeks(year, week, weekday, firstDayOfWeekOfYear, firstDayOfWeek) {
      var d = makeUTCDate(year, 0, 1).getUTCDay(), daysToAdd, dayOfYear;

      d = d === 0 ? 7 : d;
      weekday = weekday != null ? weekday : firstDayOfWeek;
      daysToAdd = firstDayOfWeek - d + (d > firstDayOfWeekOfYear ? 7 : 0) - (d < firstDayOfWeek ? 7 : 0);
      dayOfYear = 7 * (week - 1) + (weekday - firstDayOfWeek) + daysToAdd + 1;

      return {
          year: dayOfYear > 0 ? year : year - 1,
          dayOfYear: dayOfYear > 0 ?  dayOfYear : daysInYear(year - 1) + dayOfYear
      };
  }

  /************************************
      Top Level Functions
  ************************************/

  function makeMoment(config) {
      var input = config._i,
          format = config._f,
          res;

      config._locale = config._locale || moment.localeData(config._l);

      if (input === null || (format === undefined && input === '')) {
          return moment.invalid({nullInput: true});
      }

      if (typeof input === 'string') {
          config._i = input = config._locale.preparse(input);
      }

      if (moment.isMoment(input)) {
          return new Moment(input, true);
      } else if (format) {
          if (isArray(format)) {
              makeDateFromStringAndArray(config);
          } else {
              makeDateFromStringAndFormat(config);
          }
      } else {
          makeDateFromInput(config);
      }

      res = new Moment(config);
      if (res._nextDay) {
          // Adding is smart enough around DST
          res.add(1, 'd');
          res._nextDay = undefined;
      }

      return res;
  }

  moment = function (input, format, locale, strict) {
      var c;

      if (typeof(locale) === 'boolean') {
          strict = locale;
          locale = undefined;
      }
      // object construction must be done this way.
      // https://github.com/moment/moment/issues/1423
      c = {};
      c._isAMomentObject = true;
      c._i = input;
      c._f = format;
      c._l = locale;
      c._strict = strict;
      c._isUTC = false;
      c._pf = defaultParsingFlags();

      return makeMoment(c);
  };

  moment.suppressDeprecationWarnings = false;

  moment.createFromInputFallback = deprecate(
      'moment construction falls back to js Date. This is ' +
      'discouraged and will be removed in upcoming major ' +
      'release. Please refer to ' +
      'https://github.com/moment/moment/issues/1407 for more info.',
      function (config) {
          config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
      }
  );

  // Pick a moment m from moments so that m[fn](other) is true for all
  // other. This relies on the function fn to be transitive.
  //
  // moments should either be an array of moment objects or an array, whose
  // first element is an array of moment objects.
  function pickBy(fn, moments) {
      var res, i;
      if (moments.length === 1 && isArray(moments[0])) {
          moments = moments[0];
      }
      if (!moments.length) {
          return moment();
      }
      res = moments[0];
      for (i = 1; i < moments.length; ++i) {
          if (moments[i][fn](res)) {
              res = moments[i];
          }
      }
      return res;
  }

  moment.min = function () {
      var args = [].slice.call(arguments, 0);

      return pickBy('isBefore', args);
  };

  moment.max = function () {
      var args = [].slice.call(arguments, 0);

      return pickBy('isAfter', args);
  };

  // creating with utc
  moment.utc = function (input, format, locale, strict) {
      var c;

      if (typeof(locale) === 'boolean') {
          strict = locale;
          locale = undefined;
      }
      // object construction must be done this way.
      // https://github.com/moment/moment/issues/1423
      c = {};
      c._isAMomentObject = true;
      c._useUTC = true;
      c._isUTC = true;
      c._l = locale;
      c._i = input;
      c._f = format;
      c._strict = strict;
      c._pf = defaultParsingFlags();

      return makeMoment(c).utc();
  };

  // creating with unix timestamp (in seconds)
  moment.unix = function (input) {
      return moment(input * 1000);
  };

  // duration
  moment.duration = function (input, key) {
      var duration = input,
          // matching against regexp is expensive, do it on demand
          match = null,
          sign,
          ret,
          parseIso,
          diffRes;

      if (moment.isDuration(input)) {
          duration = {
              ms: input._milliseconds,
              d: input._days,
              M: input._months
          };
      } else if (typeof input === 'number') {
          duration = {};
          if (key) {
              duration[key] = input;
          } else {
              duration.milliseconds = input;
          }
      } else if (!!(match = aspNetTimeSpanJsonRegex.exec(input))) {
          sign = (match[1] === '-') ? -1 : 1;
          duration = {
              y: 0,
              d: toInt(match[DATE]) * sign,
              h: toInt(match[HOUR]) * sign,
              m: toInt(match[MINUTE]) * sign,
              s: toInt(match[SECOND]) * sign,
              ms: toInt(match[MILLISECOND]) * sign
          };
      } else if (!!(match = isoDurationRegex.exec(input))) {
          sign = (match[1] === '-') ? -1 : 1;
          parseIso = function (inp) {
              // We'd normally use ~~inp for this, but unfortunately it also
              // converts floats to ints.
              // inp may be undefined, so careful calling replace on it.
              var res = inp && parseFloat(inp.replace(',', '.'));
              // apply sign while we're at it
              return (isNaN(res) ? 0 : res) * sign;
          };
          duration = {
              y: parseIso(match[2]),
              M: parseIso(match[3]),
              d: parseIso(match[4]),
              h: parseIso(match[5]),
              m: parseIso(match[6]),
              s: parseIso(match[7]),
              w: parseIso(match[8])
          };
      } else if (duration == null) {// checks for null or undefined
          duration = {};
      } else if (typeof duration === 'object' &&
              ('from' in duration || 'to' in duration)) {
          diffRes = momentsDifference(moment(duration.from), moment(duration.to));

          duration = {};
          duration.ms = diffRes.milliseconds;
          duration.M = diffRes.months;
      }

      ret = new Duration(duration);

      if (moment.isDuration(input) && hasOwnProp(input, '_locale')) {
          ret._locale = input._locale;
      }

      return ret;
  };

  // version number
  moment.version = VERSION;

  // default format
  moment.defaultFormat = isoFormat;

  // constant that refers to the ISO standard
  moment.ISO_8601 = function () {};

  // Plugins that add properties should also add the key here (null value),
  // so we can properly clone ourselves.
  moment.momentProperties = momentProperties;

  // This function will be called whenever a moment is mutated.
  // It is intended to keep the offset in sync with the timezone.
  moment.updateOffset = function () {};

  // This function allows you to set a threshold for relative time strings
  moment.relativeTimeThreshold = function (threshold, limit) {
      if (relativeTimeThresholds[threshold] === undefined) {
          return false;
      }
      if (limit === undefined) {
          return relativeTimeThresholds[threshold];
      }
      relativeTimeThresholds[threshold] = limit;
      return true;
  };

  moment.lang = deprecate(
      'moment.lang is deprecated. Use moment.locale instead.',
      function (key, value) {
          return moment.locale(key, value);
      }
  );

  // This function will load locale and then set the global locale.  If
  // no arguments are passed in, it will simply return the current global
  // locale key.
  moment.locale = function (key, values) {
      var data;
      if (key) {
          if (typeof(values) !== 'undefined') {
              data = moment.defineLocale(key, values);
          }
          else {
              data = moment.localeData(key);
          }

          if (data) {
              moment.duration._locale = moment._locale = data;
          }
      }

      return moment._locale._abbr;
  };

  moment.defineLocale = function (name, values) {
      if (values !== null) {
          values.abbr = name;
          if (!locales[name]) {
              locales[name] = new Locale();
          }
          locales[name].set(values);

          // backwards compat for now: also set the locale
          moment.locale(name);

          return locales[name];
      } else {
          // useful for testing
          delete locales[name];
          return null;
      }
  };

  moment.langData = deprecate(
      'moment.langData is deprecated. Use moment.localeData instead.',
      function (key) {
          return moment.localeData(key);
      }
  );

  // returns locale data
  moment.localeData = function (key) {
      var locale;

      if (key && key._locale && key._locale._abbr) {
          key = key._locale._abbr;
      }

      if (!key) {
          return moment._locale;
      }

      if (!isArray(key)) {
          //short-circuit everything else
          locale = loadLocale(key);
          if (locale) {
              return locale;
          }
          key = [key];
      }

      return chooseLocale(key);
  };

  // compare moment object
  moment.isMoment = function (obj) {
      return obj instanceof Moment ||
          (obj != null && hasOwnProp(obj, '_isAMomentObject'));
  };

  // for typechecking Duration objects
  moment.isDuration = function (obj) {
      return obj instanceof Duration;
  };

  for (i = lists.length - 1; i >= 0; --i) {
      makeList(lists[i]);
  }

  moment.normalizeUnits = function (units) {
      return normalizeUnits(units);
  };

  moment.invalid = function (flags) {
      var m = moment.utc(NaN);
      if (flags != null) {
          extend(m._pf, flags);
      }
      else {
          m._pf.userInvalidated = true;
      }

      return m;
  };

  moment.parseZone = function () {
      return moment.apply(null, arguments).parseZone();
  };

  moment.parseTwoDigitYear = function (input) {
      return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
  };

  moment.isDate = isDate;

  /************************************
      Moment Prototype
  ************************************/


  extend(moment.fn = Moment.prototype, {

      clone : function () {
          return moment(this);
      },

      valueOf : function () {
          return +this._d - ((this._offset || 0) * 60000);
      },

      unix : function () {
          return Math.floor(+this / 1000);
      },

      toString : function () {
          return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
      },

      toDate : function () {
          return this._offset ? new Date(+this) : this._d;
      },

      toISOString : function () {
          var m = moment(this).utc();
          if (0 < m.year() && m.year() <= 9999) {
              if ('function' === typeof Date.prototype.toISOString) {
                  // native implementation is ~50x faster, use it when we can
                  return this.toDate().toISOString();
              } else {
                  return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
              }
          } else {
              return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
          }
      },

      toArray : function () {
          var m = this;
          return [
              m.year(),
              m.month(),
              m.date(),
              m.hours(),
              m.minutes(),
              m.seconds(),
              m.milliseconds()
          ];
      },

      isValid : function () {
          return isValid(this);
      },

      isDSTShifted : function () {
          if (this._a) {
              return this.isValid() && compareArrays(this._a, (this._isUTC ? moment.utc(this._a) : moment(this._a)).toArray()) > 0;
          }

          return false;
      },

      parsingFlags : function () {
          return extend({}, this._pf);
      },

      invalidAt: function () {
          return this._pf.overflow;
      },

      utc : function (keepLocalTime) {
          return this.utcOffset(0, keepLocalTime);
      },

      local : function (keepLocalTime) {
          if (this._isUTC) {
              this.utcOffset(0, keepLocalTime);
              this._isUTC = false;

              if (keepLocalTime) {
                  this.subtract(this._dateUtcOffset(), 'm');
              }
          }
          return this;
      },

      format : function (inputString) {
          var output = formatMoment(this, inputString || moment.defaultFormat);
          return this.localeData().postformat(output);
      },

      add : createAdder(1, 'add'),

      subtract : createAdder(-1, 'subtract'),

      diff : function (input, units, asFloat) {
          var that = makeAs(input, this),
              zoneDiff = (that.utcOffset() - this.utcOffset()) * 6e4,
              anchor, diff, output, daysAdjust;

          units = normalizeUnits(units);

          if (units === 'year' || units === 'month' || units === 'quarter') {
              output = monthDiff(this, that);
              if (units === 'quarter') {
                  output = output / 3;
              } else if (units === 'year') {
                  output = output / 12;
              }
          } else {
              diff = this - that;
              output = units === 'second' ? diff / 1e3 : // 1000
                  units === 'minute' ? diff / 6e4 : // 1000 * 60
                  units === 'hour' ? diff / 36e5 : // 1000 * 60 * 60
                  units === 'day' ? (diff - zoneDiff) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
                  units === 'week' ? (diff - zoneDiff) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
                  diff;
          }
          return asFloat ? output : absRound(output);
      },

      from : function (time, withoutSuffix) {
          return moment.duration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
      },

      fromNow : function (withoutSuffix) {
          return this.from(moment(), withoutSuffix);
      },

      calendar : function (time) {
          // We want to compare the start of today, vs this.
          // Getting start-of-today depends on whether we're locat/utc/offset
          // or not.
          var now = time || moment(),
              sod = makeAs(now, this).startOf('day'),
              diff = this.diff(sod, 'days', true),
              format = diff < -6 ? 'sameElse' :
                  diff < -1 ? 'lastWeek' :
                  diff < 0 ? 'lastDay' :
                  diff < 1 ? 'sameDay' :
                  diff < 2 ? 'nextDay' :
                  diff < 7 ? 'nextWeek' : 'sameElse';
          return this.format(this.localeData().calendar(format, this, moment(now)));
      },

      isLeapYear : function () {
          return isLeapYear(this.year());
      },

      isDST : function () {
          return (this.utcOffset() > this.clone().month(0).utcOffset() ||
              this.utcOffset() > this.clone().month(5).utcOffset());
      },

      day : function (input) {
          var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
          if (input != null) {
              input = parseWeekday(input, this.localeData());
              return this.add(input - day, 'd');
          } else {
              return day;
          }
      },

      month : makeAccessor('Month', true),

      startOf : function (units) {
          units = normalizeUnits(units);
          // the following switch intentionally omits break keywords
          // to utilize falling through the cases.
          switch (units) {
          case 'year':
              this.month(0);
              /* falls through */
          case 'quarter':
          case 'month':
              this.date(1);
              /* falls through */
          case 'week':
          case 'isoWeek':
          case 'day':
              this.hours(0);
              /* falls through */
          case 'hour':
              this.minutes(0);
              /* falls through */
          case 'minute':
              this.seconds(0);
              /* falls through */
          case 'second':
              this.milliseconds(0);
              /* falls through */
          }

          // weeks are a special case
          if (units === 'week') {
              this.weekday(0);
          } else if (units === 'isoWeek') {
              this.isoWeekday(1);
          }

          // quarters are also special
          if (units === 'quarter') {
              this.month(Math.floor(this.month() / 3) * 3);
          }

          return this;
      },

      endOf: function (units) {
          units = normalizeUnits(units);
          if (units === undefined || units === 'millisecond') {
              return this;
          }
          return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
      },

      isAfter: function (input, units) {
          var inputMs;
          units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
          if (units === 'millisecond') {
              input = moment.isMoment(input) ? input : moment(input);
              return +this > +input;
          } else {
              inputMs = moment.isMoment(input) ? +input : +moment(input);
              return inputMs < +this.clone().startOf(units);
          }
      },

      isBefore: function (input, units) {
          var inputMs;
          units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
          if (units === 'millisecond') {
              input = moment.isMoment(input) ? input : moment(input);
              return +this < +input;
          } else {
              inputMs = moment.isMoment(input) ? +input : +moment(input);
              return +this.clone().endOf(units) < inputMs;
          }
      },

      isBetween: function (from, to, units) {
          return this.isAfter(from, units) && this.isBefore(to, units);
      },

      isSame: function (input, units) {
          var inputMs;
          units = normalizeUnits(units || 'millisecond');
          if (units === 'millisecond') {
              input = moment.isMoment(input) ? input : moment(input);
              return +this === +input;
          } else {
              inputMs = +moment(input);
              return +(this.clone().startOf(units)) <= inputMs && inputMs <= +(this.clone().endOf(units));
          }
      },

      min: deprecate(
               'moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548',
               function (other) {
                   other = moment.apply(null, arguments);
                   return other < this ? this : other;
               }
       ),

      max: deprecate(
              'moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548',
              function (other) {
                  other = moment.apply(null, arguments);
                  return other > this ? this : other;
              }
      ),

      zone : deprecate(
              'moment().zone is deprecated, use moment().utcOffset instead. ' +
              'https://github.com/moment/moment/issues/1779',
              function (input, keepLocalTime) {
                  if (input != null) {
                      if (typeof input !== 'string') {
                          input = -input;
                      }

                      this.utcOffset(input, keepLocalTime);

                      return this;
                  } else {
                      return -this.utcOffset();
                  }
              }
      ),

      // keepLocalTime = true means only change the timezone, without
      // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
      // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
      // +0200, so we adjust the time as needed, to be valid.
      //
      // Keeping the time actually adds/subtracts (one hour)
      // from the actual represented time. That is why we call updateOffset
      // a second time. In case it wants us to change the offset again
      // _changeInProgress == true case, then we have to adjust, because
      // there is no such time in the given timezone.
      utcOffset : function (input, keepLocalTime) {
          var offset = this._offset || 0,
              localAdjust;
          if (input != null) {
              if (typeof input === 'string') {
                  input = utcOffsetFromString(input);
              }
              if (Math.abs(input) < 16) {
                  input = input * 60;
              }
              if (!this._isUTC && keepLocalTime) {
                  localAdjust = this._dateUtcOffset();
              }
              this._offset = input;
              this._isUTC = true;
              if (localAdjust != null) {
                  this.add(localAdjust, 'm');
              }
              if (offset !== input) {
                  if (!keepLocalTime || this._changeInProgress) {
                      addOrSubtractDurationFromMoment(this,
                              moment.duration(input - offset, 'm'), 1, false);
                  } else if (!this._changeInProgress) {
                      this._changeInProgress = true;
                      moment.updateOffset(this, true);
                      this._changeInProgress = null;
                  }
              }

              return this;
          } else {
              return this._isUTC ? offset : this._dateUtcOffset();
          }
      },

      isLocal : function () {
          return !this._isUTC;
      },

      isUtcOffset : function () {
          return this._isUTC;
      },

      isUtc : function () {
          return this._isUTC && this._offset === 0;
      },

      zoneAbbr : function () {
          return this._isUTC ? 'UTC' : '';
      },

      zoneName : function () {
          return this._isUTC ? 'Coordinated Universal Time' : '';
      },

      parseZone : function () {
          if (this._tzm) {
              this.utcOffset(this._tzm);
          } else if (typeof this._i === 'string') {
              this.utcOffset(utcOffsetFromString(this._i));
          }
          return this;
      },

      hasAlignedHourOffset : function (input) {
          if (!input) {
              input = 0;
          }
          else {
              input = moment(input).utcOffset();
          }

          return (this.utcOffset() - input) % 60 === 0;
      },

      daysInMonth : function () {
          return daysInMonth(this.year(), this.month());
      },

      dayOfYear : function (input) {
          var dayOfYear = round((moment(this).startOf('day') - moment(this).startOf('year')) / 864e5) + 1;
          return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
      },

      quarter : function (input) {
          return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
      },

      weekYear : function (input) {
          var year = weekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
          return input == null ? year : this.add((input - year), 'y');
      },

      isoWeekYear : function (input) {
          var year = weekOfYear(this, 1, 4).year;
          return input == null ? year : this.add((input - year), 'y');
      },

      week : function (input) {
          var week = this.localeData().week(this);
          return input == null ? week : this.add((input - week) * 7, 'd');
      },

      isoWeek : function (input) {
          var week = weekOfYear(this, 1, 4).week;
          return input == null ? week : this.add((input - week) * 7, 'd');
      },

      weekday : function (input) {
          var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
          return input == null ? weekday : this.add(input - weekday, 'd');
      },

      isoWeekday : function (input) {
          // behaves the same as moment#day except
          // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
          // as a setter, sunday should belong to the previous week.
          return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
      },

      isoWeeksInYear : function () {
          return weeksInYear(this.year(), 1, 4);
      },

      weeksInYear : function () {
          var weekInfo = this.localeData()._week;
          return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
      },

      get : function (units) {
          units = normalizeUnits(units);
          return this[units]();
      },

      set : function (units, value) {
          var unit;
          if (typeof units === 'object') {
              for (unit in units) {
                  this.set(unit, units[unit]);
              }
          }
          else {
              units = normalizeUnits(units);
              if (typeof this[units] === 'function') {
                  this[units](value);
              }
          }
          return this;
      },

      // If passed a locale key, it will set the locale for this
      // instance.  Otherwise, it will return the locale configuration
      // variables for this instance.
      locale : function (key) {
          var newLocaleData;

          if (key === undefined) {
              return this._locale._abbr;
          } else {
              newLocaleData = moment.localeData(key);
              if (newLocaleData != null) {
                  this._locale = newLocaleData;
              }
              return this;
          }
      },

      lang : deprecate(
          'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
          function (key) {
              if (key === undefined) {
                  return this.localeData();
              } else {
                  return this.locale(key);
              }
          }
      ),

      localeData : function () {
          return this._locale;
      },

      _dateUtcOffset : function () {
          // On Firefox.24 Date#getTimezoneOffset returns a floating point.
          // https://github.com/moment/moment/pull/1871
          return -Math.round(this._d.getTimezoneOffset() / 15) * 15;
      }

  });

  function rawMonthSetter(mom, value) {
      var dayOfMonth;

      // TODO: Move this out of here!
      if (typeof value === 'string') {
          value = mom.localeData().monthsParse(value);
          // TODO: Another silent failure?
          if (typeof value !== 'number') {
              return mom;
          }
      }

      dayOfMonth = Math.min(mom.date(),
              daysInMonth(mom.year(), value));
      mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
      return mom;
  }

  function rawGetter(mom, unit) {
      return mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]();
  }

  function rawSetter(mom, unit, value) {
      if (unit === 'Month') {
          return rawMonthSetter(mom, value);
      } else {
          return mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
      }
  }

  function makeAccessor(unit, keepTime) {
      return function (value) {
          if (value != null) {
              rawSetter(this, unit, value);
              moment.updateOffset(this, keepTime);
              return this;
          } else {
              return rawGetter(this, unit);
          }
      };
  }

  moment.fn.millisecond = moment.fn.milliseconds = makeAccessor('Milliseconds', false);
  moment.fn.second = moment.fn.seconds = makeAccessor('Seconds', false);
  moment.fn.minute = moment.fn.minutes = makeAccessor('Minutes', false);
  // Setting the hour should keep the time, because the user explicitly
  // specified which hour he wants. So trying to maintain the same hour (in
  // a new timezone) makes sense. Adding/subtracting hours does not follow
  // this rule.
  moment.fn.hour = moment.fn.hours = makeAccessor('Hours', true);
  // moment.fn.month is defined separately
  moment.fn.date = makeAccessor('Date', true);
  moment.fn.dates = deprecate('dates accessor is deprecated. Use date instead.', makeAccessor('Date', true));
  moment.fn.year = makeAccessor('FullYear', true);
  moment.fn.years = deprecate('years accessor is deprecated. Use year instead.', makeAccessor('FullYear', true));

  // add plural methods
  moment.fn.days = moment.fn.day;
  moment.fn.months = moment.fn.month;
  moment.fn.weeks = moment.fn.week;
  moment.fn.isoWeeks = moment.fn.isoWeek;
  moment.fn.quarters = moment.fn.quarter;

  // add aliased format methods
  moment.fn.toJSON = moment.fn.toISOString;

  // alias isUtc for dev-friendliness
  moment.fn.isUTC = moment.fn.isUtc;

  /************************************
      Duration Prototype
  ************************************/


  function daysToYears (days) {
      // 400 years have 146097 days (taking into account leap year rules)
      return days * 400 / 146097;
  }

  function yearsToDays (years) {
      // years * 365 + absRound(years / 4) -
      //     absRound(years / 100) + absRound(years / 400);
      return years * 146097 / 400;
  }

  extend(moment.duration.fn = Duration.prototype, {

      _bubble : function () {
          var milliseconds = this._milliseconds,
              days = this._days,
              months = this._months,
              data = this._data,
              seconds, minutes, hours, years = 0;

          // The following code bubbles up values, see the tests for
          // examples of what that means.
          data.milliseconds = milliseconds % 1000;

          seconds = absRound(milliseconds / 1000);
          data.seconds = seconds % 60;

          minutes = absRound(seconds / 60);
          data.minutes = minutes % 60;

          hours = absRound(minutes / 60);
          data.hours = hours % 24;

          days += absRound(hours / 24);

          // Accurately convert days to years, assume start from year 0.
          years = absRound(daysToYears(days));
          days -= absRound(yearsToDays(years));

          // 30 days to a month
          // TODO (iskren): Use anchor date (like 1st Jan) to compute this.
          months += absRound(days / 30);
          days %= 30;

          // 12 months -> 1 year
          years += absRound(months / 12);
          months %= 12;

          data.days = days;
          data.months = months;
          data.years = years;
      },

      abs : function () {
          this._milliseconds = Math.abs(this._milliseconds);
          this._days = Math.abs(this._days);
          this._months = Math.abs(this._months);

          this._data.milliseconds = Math.abs(this._data.milliseconds);
          this._data.seconds = Math.abs(this._data.seconds);
          this._data.minutes = Math.abs(this._data.minutes);
          this._data.hours = Math.abs(this._data.hours);
          this._data.months = Math.abs(this._data.months);
          this._data.years = Math.abs(this._data.years);

          return this;
      },

      weeks : function () {
          return absRound(this.days() / 7);
      },

      valueOf : function () {
          return this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6;
      },

      humanize : function (withSuffix) {
          var output = relativeTime(this, !withSuffix, this.localeData());

          if (withSuffix) {
              output = this.localeData().pastFuture(+this, output);
          }

          return this.localeData().postformat(output);
      },

      add : function (input, val) {
          // supports only 2.0-style add(1, 's') or add(moment)
          var dur = moment.duration(input, val);

          this._milliseconds += dur._milliseconds;
          this._days += dur._days;
          this._months += dur._months;

          this._bubble();

          return this;
      },

      subtract : function (input, val) {
          var dur = moment.duration(input, val);

          this._milliseconds -= dur._milliseconds;
          this._days -= dur._days;
          this._months -= dur._months;

          this._bubble();

          return this;
      },

      get : function (units) {
          units = normalizeUnits(units);
          return this[units.toLowerCase() + 's']();
      },

      as : function (units) {
          var days, months;
          units = normalizeUnits(units);

          if (units === 'month' || units === 'year') {
              days = this._days + this._milliseconds / 864e5;
              months = this._months + daysToYears(days) * 12;
              return units === 'month' ? months : months / 12;
          } else {
              // handle milliseconds separately because of floating point math errors (issue #1867)
              days = this._days + Math.round(yearsToDays(this._months / 12));
              switch (units) {
                  case 'week': return days / 7 + this._milliseconds / 6048e5;
                  case 'day': return days + this._milliseconds / 864e5;
                  case 'hour': return days * 24 + this._milliseconds / 36e5;
                  case 'minute': return days * 24 * 60 + this._milliseconds / 6e4;
                  case 'second': return days * 24 * 60 * 60 + this._milliseconds / 1000;
                  // Math.floor prevents floating point math errors here
                  case 'millisecond': return Math.floor(days * 24 * 60 * 60 * 1000) + this._milliseconds;
                  default: throw new Error('Unknown unit ' + units);
              }
          }
      },

      lang : moment.fn.lang,
      locale : moment.fn.locale,

      toIsoString : deprecate(
          'toIsoString() is deprecated. Please use toISOString() instead ' +
          '(notice the capitals)',
          function () {
              return this.toISOString();
          }
      ),

      toISOString : function () {
          // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
          var years = Math.abs(this.years()),
              months = Math.abs(this.months()),
              days = Math.abs(this.days()),
              hours = Math.abs(this.hours()),
              minutes = Math.abs(this.minutes()),
              seconds = Math.abs(this.seconds() + this.milliseconds() / 1000);

          if (!this.asSeconds()) {
              // this is the same as C#'s (Noda) and python (isodate)...
              // but not other JS (goog.date)
              return 'P0D';
          }

          return (this.asSeconds() < 0 ? '-' : '') +
              'P' +
              (years ? years + 'Y' : '') +
              (months ? months + 'M' : '') +
              (days ? days + 'D' : '') +
              ((hours || minutes || seconds) ? 'T' : '') +
              (hours ? hours + 'H' : '') +
              (minutes ? minutes + 'M' : '') +
              (seconds ? seconds + 'S' : '');
      },

      localeData : function () {
          return this._locale;
      },

      toJSON : function () {
          return this.toISOString();
      }
  });

  moment.duration.fn.toString = moment.duration.fn.toISOString;

  function makeDurationGetter(name) {
      moment.duration.fn[name] = function () {
          return this._data[name];
      };
  }

  for (i in unitMillisecondFactors) {
      if (hasOwnProp(unitMillisecondFactors, i)) {
          makeDurationGetter(i.toLowerCase());
      }
  }

  moment.duration.fn.asMilliseconds = function () {
      return this.as('ms');
  };
  moment.duration.fn.asSeconds = function () {
      return this.as('s');
  };
  moment.duration.fn.asMinutes = function () {
      return this.as('m');
  };
  moment.duration.fn.asHours = function () {
      return this.as('h');
  };
  moment.duration.fn.asDays = function () {
      return this.as('d');
  };
  moment.duration.fn.asWeeks = function () {
      return this.as('weeks');
  };
  moment.duration.fn.asMonths = function () {
      return this.as('M');
  };
  moment.duration.fn.asYears = function () {
      return this.as('y');
  };

  /************************************
      Default Locale
  ************************************/


  // Set default locale, other locale will inherit from English.
  moment.locale('en', {
      ordinalParse: /\d{1,2}(th|st|nd|rd)/,
      ordinal : function (number) {
          var b = number % 10,
              output = (toInt(number % 100 / 10) === 1) ? 'th' :
              (b === 1) ? 'st' :
              (b === 2) ? 'nd' :
              (b === 3) ? 'rd' : 'th';
          return number + output;
      }
  });

  // moment.js locale configuration
// locale : afrikaans (af)
// author : Werner Mollentze : https://github.com/wernerm

(function (factory) {
  factory(moment);
}(function (moment) {
  return moment.defineLocale('af', {
      months : 'Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember'.split('_'),
      monthsShort : 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_'),
      weekdays : 'Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag'.split('_'),
      weekdaysShort : 'Son_Maa_Din_Woe_Don_Vry_Sat'.split('_'),
      weekdaysMin : 'So_Ma_Di_Wo_Do_Vr_Sa'.split('_'),
      meridiemParse: /vm|nm/i,
      isPM : function (input) {
          return /^nm$/i.test(input);
      },
      meridiem : function (hours, minutes, isLower) {
          if (hours < 12) {
              return isLower ? 'vm' : 'VM';
          } else {
              return isLower ? 'nm' : 'NM';
          }
      },
      longDateFormat : {
          LT : 'HH:mm',
          LTS : 'LT:ss',
          L : 'DD/MM/YYYY',
          LL : 'D MMMM YYYY',
          LLL : 'D MMMM YYYY LT',
          LLLL : 'dddd, D MMMM YYYY LT'
      },
      calendar : {
          sameDay : '[Vandag om] LT',
          nextDay : '[Môre om] LT',
          nextWeek : 'dddd [om] LT',
          lastDay : '[Gister om] LT',
          lastWeek : '[Laas] dddd [om] LT',
          sameElse : 'L'
      },
      relativeTime : {
          future : 'oor %s',
          past : '%s gelede',
          s : '\'n paar sekondes',
          m : '\'n minuut',
          mm : '%d minute',
          h : '\'n uur',
          hh : '%d ure',
          d : '\'n dag',
          dd : '%d dae',
          M : '\'n maand',
          MM : '%d maande',
          y : '\'n jaar',
          yy : '%d jaar'
      },
      ordinalParse: /\d{1,2}(ste|de)/,
      ordinal : function (number) {
          return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de'); // Thanks to Joris Röling : https://github.com/jjupiter
      },
      week : {
          dow : 1, // Maandag is die eerste dag van die week.
          doy : 4  // Die week wat die 4de Januarie bevat is die eerste week van die jaar.
      }
  });
}));
// moment.js locale configuration
// locale : Moroccan Arabic (ar-ma)
// author : ElFadili Yassine : https://github.com/ElFadiliY
// author : Abdel Said : https://github.com/abdelsaid

(function (factory) {
  factory(moment);
}(function (moment) {
  return moment.defineLocale('ar-ma', {
      months : 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
      monthsShort : 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
      weekdays : 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
      weekdaysShort : 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
      weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
      longDateFormat : {
          LT : 'HH:mm',
          LTS : 'LT:ss',
          L : 'DD/MM/YYYY',
          LL : 'D MMMM YYYY',
          LLL : 'D MMMM YYYY LT',
          LLLL : 'dddd D MMMM YYYY LT'
      },
      calendar : {
          sameDay: '[اليوم على الساعة] LT',
          nextDay: '[غدا على الساعة] LT',
          nextWeek: 'dddd [على الساعة] LT',
          lastDay: '[أمس على الساعة] LT',
          lastWeek: 'dddd [على الساعة] LT',
          sameElse: 'L'
      },
      relativeTime : {
          future : 'في %s',
          past : 'منذ %s',
          s : 'ثوان',
          m : 'دقيقة',
          mm : '%d دقائق',
          h : 'ساعة',
          hh : '%d ساعات',
          d : 'يوم',
          dd : '%d أيام',
          M : 'شهر',
          MM : '%d أشهر',
          y : 'سنة',
          yy : '%d سنوات'
      },
      week : {
          dow : 6, // Saturday is the first day of the week.
          doy : 12  // The week that contains Jan 1st is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : Arabic Saudi Arabia (ar-sa)
// author : Suhail Alkowaileet : https://github.com/xsoh

(function (factory) {
  factory(moment);
}(function (moment) {
  var symbolMap = {
      '1': '١',
      '2': '٢',
      '3': '٣',
      '4': '٤',
      '5': '٥',
      '6': '٦',
      '7': '٧',
      '8': '٨',
      '9': '٩',
      '0': '٠'
  }, numberMap = {
      '١': '1',
      '٢': '2',
      '٣': '3',
      '٤': '4',
      '٥': '5',
      '٦': '6',
      '٧': '7',
      '٨': '8',
      '٩': '9',
      '٠': '0'
  };

  return moment.defineLocale('ar-sa', {
      months : 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
      monthsShort : 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
      weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
      weekdaysShort : 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
      weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
      longDateFormat : {
          LT : 'HH:mm',
          LTS : 'HH:mm:ss',
          L : 'DD/MM/YYYY',
          LL : 'D MMMM YYYY',
          LLL : 'D MMMM YYYY LT',
          LLLL : 'dddd D MMMM YYYY LT'
      },
      meridiemParse: /ص|م/,
      isPM : function (input) {
          return 'م' === input;
      },
      meridiem : function (hour, minute, isLower) {
          if (hour < 12) {
              return 'ص';
          } else {
              return 'م';
          }
      },
      calendar : {
          sameDay: '[اليوم على الساعة] LT',
          nextDay: '[غدا على الساعة] LT',
          nextWeek: 'dddd [على الساعة] LT',
          lastDay: '[أمس على الساعة] LT',
          lastWeek: 'dddd [على الساعة] LT',
          sameElse: 'L'
      },
      relativeTime : {
          future : 'في %s',
          past : 'منذ %s',
          s : 'ثوان',
          m : 'دقيقة',
          mm : '%d دقائق',
          h : 'ساعة',
          hh : '%d ساعات',
          d : 'يوم',
          dd : '%d أيام',
          M : 'شهر',
          MM : '%d أشهر',
          y : 'سنة',
          yy : '%d سنوات'
      },
      preparse: function (string) {
          return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
              return numberMap[match];
          }).replace(/،/g, ',');
      },
      postformat: function (string) {
          return string.replace(/\d/g, function (match) {
              return symbolMap[match];
          }).replace(/,/g, '،');
      },
      week : {
          dow : 6, // Saturday is the first day of the week.
          doy : 12  // The week that contains Jan 1st is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale  : Tunisian Arabic (ar-tn)

(function (factory) {
  factory(moment);
}(function (moment) {
  return moment.defineLocale('ar-tn', {
      months: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
      monthsShort: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
      weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
      weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
      weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
      longDateFormat: {
          LT: 'HH:mm',
          LTS: 'LT:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY LT',
          LLLL: 'dddd D MMMM YYYY LT'
      },
      calendar: {
          sameDay: '[اليوم على الساعة] LT',
          nextDay: '[غدا على الساعة] LT',
          nextWeek: 'dddd [على الساعة] LT',
          lastDay: '[أمس على الساعة] LT',
          lastWeek: 'dddd [على الساعة] LT',
          sameElse: 'L'
      },
      relativeTime: {
          future: 'في %s',
          past: 'منذ %s',
          s: 'ثوان',
          m: 'دقيقة',
          mm: '%d دقائق',
          h: 'ساعة',
          hh: '%d ساعات',
          d: 'يوم',
          dd: '%d أيام',
          M: 'شهر',
          MM: '%d أشهر',
          y: 'سنة',
          yy: '%d سنوات'
      },
      week: {
          dow: 1, // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// Locale: Arabic (ar)
// Author: Abdel Said: https://github.com/abdelsaid
// Changes in months, weekdays: Ahmed Elkhatib
// Native plural forms: forabi https://github.com/forabi

(function (factory) {
  factory(moment);
}(function (moment) {
  var symbolMap = {
      '1': '١',
      '2': '٢',
      '3': '٣',
      '4': '٤',
      '5': '٥',
      '6': '٦',
      '7': '٧',
      '8': '٨',
      '9': '٩',
      '0': '٠'
  }, numberMap = {
      '١': '1',
      '٢': '2',
      '٣': '3',
      '٤': '4',
      '٥': '5',
      '٦': '6',
      '٧': '7',
      '٨': '8',
      '٩': '9',
      '٠': '0'
  }, pluralForm = function (n) {
      return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
  }, plurals = {
      s : ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
      m : ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
      h : ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
      d : ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
      M : ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
      y : ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
  }, pluralize = function (u) {
      return function (number, withoutSuffix, string, isFuture) {
          var f = pluralForm(number),
              str = plurals[u][pluralForm(number)];
          if (f === 2) {
              str = str[withoutSuffix ? 0 : 1];
          }
          return str.replace(/%d/i, number);
      };
  }, months = [
      'كانون الثاني يناير',
      'شباط فبراير',
      'آذار مارس',
      'نيسان أبريل',
      'أيار مايو',
      'حزيران يونيو',
      'تموز يوليو',
      'آب أغسطس',
      'أيلول سبتمبر',
      'تشرين الأول أكتوبر',
      'تشرين الثاني نوفمبر',
      'كانون الأول ديسمبر'
  ];

  return moment.defineLocale('ar', {
      months : months,
      monthsShort : months,
      weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
      weekdaysShort : 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
      weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
      longDateFormat : {
          LT : 'HH:mm',
          LTS : 'HH:mm:ss',
          L : 'DD/MM/YYYY',
          LL : 'D MMMM YYYY',
          LLL : 'D MMMM YYYY LT',
          LLLL : 'dddd D MMMM YYYY LT'
      },
      meridiemParse: /ص|م/,
      isPM : function (input) {
          return 'م' === input;
      },
      meridiem : function (hour, minute, isLower) {
          if (hour < 12) {
              return 'ص';
          } else {
              return 'م';
          }
      },
      calendar : {
          sameDay: '[اليوم عند الساعة] LT',
          nextDay: '[غدًا عند الساعة] LT',
          nextWeek: 'dddd [عند الساعة] LT',
          lastDay: '[أمس عند الساعة] LT',
          lastWeek: 'dddd [عند الساعة] LT',
          sameElse: 'L'
      },
      relativeTime : {
          future : 'بعد %s',
          past : 'منذ %s',
          s : pluralize('s'),
          m : pluralize('m'),
          mm : pluralize('m'),
          h : pluralize('h'),
          hh : pluralize('h'),
          d : pluralize('d'),
          dd : pluralize('d'),
          M : pluralize('M'),
          MM : pluralize('M'),
          y : pluralize('y'),
          yy : pluralize('y')
      },
      preparse: function (string) {
          return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
              return numberMap[match];
          }).replace(/،/g, ',');
      },
      postformat: function (string) {
          return string.replace(/\d/g, function (match) {
              return symbolMap[match];
          }).replace(/,/g, '،');
      },
      week : {
          dow : 6, // Saturday is the first day of the week.
          doy : 12  // The week that contains Jan 1st is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : azerbaijani (az)
// author : topchiyev : https://github.com/topchiyev

(function (factory) {
  factory(moment);
}(function (moment) {
  var suffixes = {
      1: '-inci',
      5: '-inci',
      8: '-inci',
      70: '-inci',
      80: '-inci',

      2: '-nci',
      7: '-nci',
      20: '-nci',
      50: '-nci',

      3: '-üncü',
      4: '-üncü',
      100: '-üncü',

      6: '-ncı',

      9: '-uncu',
      10: '-uncu',
      30: '-uncu',

      60: '-ıncı',
      90: '-ıncı'
  };
  return moment.defineLocale('az', {
      months : 'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'.split('_'),
      monthsShort : 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split('_'),
      weekdays : 'Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə'.split('_'),
      weekdaysShort : 'Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən'.split('_'),
      weekdaysMin : 'Bz_BE_ÇA_Çə_CA_Cü_Şə'.split('_'),
      longDateFormat : {
          LT : 'HH:mm',
          LTS : 'LT:ss',
          L : 'DD.MM.YYYY',
          LL : 'D MMMM YYYY',
          LLL : 'D MMMM YYYY LT',
          LLLL : 'dddd, D MMMM YYYY LT'
      },
      calendar : {
          sameDay : '[bugün saat] LT',
          nextDay : '[sabah saat] LT',
          nextWeek : '[gələn həftə] dddd [saat] LT',
          lastDay : '[dünən] LT',
          lastWeek : '[keçən həftə] dddd [saat] LT',
          sameElse : 'L'
      },
      relativeTime : {
          future : '%s sonra',
          past : '%s əvvəl',
          s : 'birneçə saniyyə',
          m : 'bir dəqiqə',
          mm : '%d dəqiqə',
          h : 'bir saat',
          hh : '%d saat',
          d : 'bir gün',
          dd : '%d gün',
          M : 'bir ay',
          MM : '%d ay',
          y : 'bir il',
          yy : '%d il'
      },
      meridiemParse: /gecə|səhər|gündüz|axşam/,
      isPM : function (input) {
          return /^(gündüz|axşam)$/.test(input);
      },
      meridiem : function (hour, minute, isLower) {
          if (hour < 4) {
              return 'gecə';
          } else if (hour < 12) {
              return 'səhər';
          } else if (hour < 17) {
              return 'gündüz';
          } else {
              return 'axşam';
          }
      },
      ordinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
      ordinal : function (number) {
          if (number === 0) {  // special case for zero
              return number + '-ıncı';
          }
          var a = number % 10,
              b = number % 100 - a,
              c = number >= 100 ? 100 : null;

          return number + (suffixes[a] || suffixes[b] || suffixes[c]);
      },
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 7  // The week that contains Jan 1st is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : belarusian (be)
// author : Dmitry Demidov : https://github.com/demidov91
// author: Praleska: http://praleska.pro/
// Author : Menelion Elensúle : https://github.com/Oire

(function (factory) {
  factory(moment);
}(function (moment) {
  function plural(word, num) {
      var forms = word.split('_');
      return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
  }

  function relativeTimeWithPlural(number, withoutSuffix, key) {
      var format = {
          'mm': withoutSuffix ? 'хвіліна_хвіліны_хвілін' : 'хвіліну_хвіліны_хвілін',
          'hh': withoutSuffix ? 'гадзіна_гадзіны_гадзін' : 'гадзіну_гадзіны_гадзін',
          'dd': 'дзень_дні_дзён',
          'MM': 'месяц_месяцы_месяцаў',
          'yy': 'год_гады_гадоў'
      };
      if (key === 'm') {
          return withoutSuffix ? 'хвіліна' : 'хвіліну';
      }
      else if (key === 'h') {
          return withoutSuffix ? 'гадзіна' : 'гадзіну';
      }
      else {
          return number + ' ' + plural(format[key], +number);
      }
  }

  function monthsCaseReplace(m, format) {
      var months = {
          'nominative': 'студзень_люты_сак��вік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань'.split('_'),
          'accusative': 'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'.split('_')
      },

      nounCase = (/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/).test(format) ?
          'accusative' :
          'nominative';

      return months[nounCase][m.month()];
  }

  function weekdaysCaseReplace(m, format) {
      var weekdays = {
          'nominative': 'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота'.split('_'),
          'accusative': 'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу'.split('_')
      },

      nounCase = (/\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/).test(format) ?
          'accusative' :
          'nominative';

      return weekdays[nounCase][m.day()];
  }

  return moment.defineLocale('be', {
      months : monthsCaseReplace,
      monthsShort : 'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'.split('_'),
      weekdays : weekdaysCaseReplace,
      weekdaysShort : 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
      weekdaysMin : 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
      longDateFormat : {
          LT : 'HH:mm',
          LTS : 'LT:ss',
          L : 'DD.MM.YYYY',
          LL : 'D MMMM YYYY г.',
          LLL : 'D MMMM YYYY г., LT',
          LLLL : 'dddd, D MMMM YYYY г., LT'
      },
      calendar : {
          sameDay: '[Сёння ў] LT',
          nextDay: '[Заўтра ў] LT',
          lastDay: '[Учора ў] LT',
          nextWeek: function () {
              return '[У] dddd [ў] LT';
          },
          lastWeek: function () {
              switch (this.day()) {
              case 0:
              case 3:
              case 5:
              case 6:
                  return '[У мінулую] dddd [ў] LT';
              case 1:
              case 2:
              case 4:
                  return '[У мінулы] dddd [ў] LT';
              }
          },
          sameElse: 'L'
      },
      relativeTime : {
          future : 'праз %s',
          past : '%s таму',
          s : 'некалькі секунд',
          m : relativeTimeWithPlural,
          mm : relativeTimeWithPlural,
          h : relativeTimeWithPlural,
          hh : relativeTimeWithPlural,
          d : 'дзень',
          dd : relativeTimeWithPlural,
          M : 'месяц',
          MM : relativeTimeWithPlural,
          y : 'год',
          yy : relativeTimeWithPlural
      },
      meridiemParse: /ночы|раніцы|дня|вечара/,
      isPM : function (input) {
          return /^(дня|вечара)$/.test(input);
      },
      meridiem : function (hour, minute, isLower) {
          if (hour < 4) {
              return 'ночы';
          } else if (hour < 12) {
              return 'раніцы';
          } else if (hour < 17) {
              return 'дня';
          } else {
              return 'вечара';
          }
      },

      ordinalParse: /\d{1,2}-(і|ы|га)/,
      ordinal: function (number, period) {
          switch (period) {
          case 'M':
          case 'd':
          case 'DDD':
          case 'w':
          case 'W':
              return (number % 10 === 2 || number % 10 === 3) && (number % 100 !== 12 && number % 100 !== 13) ? number + '-і' : number + '-ы';
          case 'D':
              return number + '-га';
          default:
              return number;
          }
      },

      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 7  // The week that contains Jan 1st is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : bulgarian (bg)
// author : Krasen Borisov : https://github.com/kraz

(function (factory) {
  factory(moment);
}(function (moment) {
  return moment.defineLocale('bg', {
      months : 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
      monthsShort : 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
      weekdays : 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
      weekdaysShort : 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
      weekdaysMin : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
      longDateFormat : {
          LT : 'H:mm',
          LTS : 'LT:ss',
          L : 'D.MM.YYYY',
          LL : 'D MMMM YYYY',
          LLL : 'D MMMM YYYY LT',
          LLLL : 'dddd, D MMMM YYYY LT'
      },
      calendar : {
          sameDay : '[Днес в] LT',
          nextDay : '[Утре в] LT',
          nextWeek : 'dddd [в] LT',
          lastDay : '[Вчера в] LT',
          lastWeek : function () {
              switch (this.day()) {
              case 0:
              case 3:
              case 6:
                  return '[В изминалата] dddd [в] LT';
              case 1:
              case 2:
              case 4:
              case 5:
                  return '[В изминалия] dddd [в] LT';
              }
          },
          sameElse : 'L'
      },
      relativeTime : {
          future : 'след %s',
          past : 'преди %s',
          s : 'няколко секунди',
          m : 'минута',
          mm : '%d минути',
          h : 'час',
          hh : '%d часа',
          d : 'ден',
          dd : '%d дни',
          M : 'месец',
          MM : '%d месеца',
          y : 'година',
          yy : '%d години'
      },
      ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
      ordinal : function (number) {
          var lastDigit = number % 10,
              last2Digits = number % 100;
          if (number === 0) {
              return number + '-ев';
          } else if (last2Digits === 0) {
              return number + '-ен';
          } else if (last2Digits > 10 && last2Digits < 20) {
              return number + '-ти';
          } else if (lastDigit === 1) {
              return number + '-ви';
          } else if (lastDigit === 2) {
              return number + '-ри';
          } else if (lastDigit === 7 || lastDigit === 8) {
              return number + '-ми';
          } else {
              return number + '-ти';
          }
      },
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 7  // The week that contains Jan 1st is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : Bengali (bn)
// author : Kaushik Gandhi : https://github.com/kaushikgandhi

(function (factory) {
  factory(moment);
}(function (moment) {
  var symbolMap = {
      '1': '১',
      '2': '২',
      '3': '৩',
      '4': '৪',
      '5': '৫',
      '6': '৬',
      '7': '৭',
      '8': '৮',
      '9': '৯',
      '0': '০'
  },
  numberMap = {
      '১': '1',
      '২': '2',
      '৩': '3',
      '৪': '4',
      '৫': '5',
      '৬': '6',
      '৭': '7',
      '৮': '8',
      '৯': '9',
      '০': '0'
  };

  return moment.defineLocale('bn', {
      months : 'জানুয়ারী_ফেবুয়ারী_মার্চ_এপ্রিল_মে_জুন_জুলাই_অগাস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর'.split('_'),
      monthsShort : 'জানু_ফেব_মার্চ_এপর_মে_জুন_জুল_অগ_সেপ্ট_অক্টো_নভ_ডিসেম্'.split('_'),
      weekdays : 'রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পত্তিবার_শুক্রুবার_শনিবার'.split('_'),
      weekdaysShort : 'রবি_সোম_মঙ্গল_বুধ_বৃহস্পত্তি_শুক্রু_শনি'.split('_'),
      weekdaysMin : 'রব_সম_মঙ্গ_বু_ব্রিহ_শু_শনি'.split('_'),
      longDateFormat : {
          LT : 'A h:mm সময়',
          LTS : 'A h:mm:ss সময়',
          L : 'DD/MM/YYYY',
          LL : 'D MMMM YYYY',
          LLL : 'D MMMM YYYY, LT',
          LLLL : 'dddd, D MMMM YYYY, LT'
      },
      calendar : {
          sameDay : '[আজ] LT',
          nextDay : '[আগামীকাল] LT',
          nextWeek : 'dddd, LT',
          lastDay : '[গতকাল] LT',
          lastWeek : '[গত] dddd, LT',
          sameElse : 'L'
      },
      relativeTime : {
          future : '%s পরে',
          past : '%s আগে',
          s : 'কএক সেকেন্ড',
          m : 'এক মিনিট',
          mm : '%d মিনিট',
          h : 'এক ঘন্টা',
          hh : '%d ঘন্টা',
          d : 'এক দিন',
          dd : '%d দিন',
          M : 'এক মাস',
          MM : '%d মাস',
          y : 'এক বছর',
          yy : '%d বছর'
      },
      preparse: function (string) {
          return string.replace(/[১২৩৪৫৬৭৮৯০]/g, function (match) {
              return numberMap[match];
          });
      },
      postformat: function (string) {
          return string.replace(/\d/g, function (match) {
              return symbolMap[match];
          });
      },
      meridiemParse: /রাত|শকাল|দুপুর|বিকেল|রাত/,
      isPM: function (input) {
          return /^(দুপুর|বিকেল|রাত)$/.test(input);
      },
      //Bengali is a vast language its spoken
      //in different forms in various parts of the world.
      //I have just generalized with most common one used
      meridiem : function (hour, minute, isLower) {
          if (hour < 4) {
              return 'রাত';
          } else if (hour < 10) {
              return 'শকাল';
          } else if (hour < 17) {
              return 'দুপুর';
          } else if (hour < 20) {
              return 'বিকেল';
          } else {
              return 'রাত';
          }
      },
      week : {
          dow : 0, // Sunday is the first day of the week.
          doy : 6  // The week that contains Jan 1st is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : tibetan (bo)
// author : Thupten N. Chakrishar : https://github.com/vajradog

(function (factory) {
  factory(moment);
}(function (moment) {
  var symbolMap = {
      '1': '༡',
      '2': '༢',
      '3': '༣',
      '4': '༤',
      '5': '༥',
      '6': '༦',
      '7': '༧',
      '8': '༨',
      '9': '༩',
      '0': '༠'
  },
  numberMap = {
      '༡': '1',
      '༢': '2',
      '༣': '3',
      '༤': '4',
      '༥': '5',
      '༦': '6',
      '༧': '7',
      '༨': '8',
      '༩': '9',
      '༠': '0'
  };

  return moment.defineLocale('bo', {
      months : 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
      monthsShort : 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
      weekdays : 'གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་'.split('_'),
      weekdaysShort : 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
      weekdaysMin : 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
      longDateFormat : {
          LT : 'A h:mm',
          LTS : 'LT:ss',
          L : 'DD/MM/YYYY',
          LL : 'D MMMM YYYY',
          LLL : 'D MMMM YYYY, LT',
          LLLL : 'dddd, D MMMM YYYY, LT'
      },
      calendar : {
          sameDay : '[དི་རིང] LT',
          nextDay : '[སང་ཉིན] LT',
          nextWeek : '[བདུན་ཕྲག་རྗེས་མ], LT',
          lastDay : '[ཁ་སང] LT',
          lastWeek : '[བདུན་ཕྲག་མཐའ་མ] dddd, LT',
          sameElse : 'L'
      },
      relativeTime : {
          future : '%s ལ་',
          past : '%s སྔན་ལ',
          s : 'ལམ་སང',
          m : 'སྐར་མ་གཅིག',
          mm : '%d སྐར་མ',
          h : 'ཆུ་ཚོད་གཅིག',
          hh : '%d ཆུ་ཚོད',
          d : 'ཉིན་གཅིག',
          dd : '%d ཉིན་',
          M : 'ཟླ་བ་གཅིག',
          MM : '%d ཟླ་བ',
          y : 'ལོ་གཅིག',
          yy : '%d ལོ'
      },
      preparse: function (string) {
          return string.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (match) {
              return numberMap[match];
          });
      },
      postformat: function (string) {
          return string.replace(/\d/g, function (match) {
              return symbolMap[match];
          });
      },
      meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
      isPM: function (input) {
          return /^(ཉིན་གུང|དགོང་དག|མཚན་མོ)$/.test(input);
      },
      meridiem : function (hour, minute, isLower) {
          if (hour < 4) {
              return 'མཚན་མོ';
          } else if (hour < 10) {
              return 'ཞོགས་ཀས';
          } else if (hour < 17) {
              return 'ཉིན་གུང';
          } else if (hour < 20) {
              return 'དགོང་དག';
          } else {
              return 'མཚན་མོ';
          }
      },
      week : {
          dow : 0, // Sunday is the first day of the week.
          doy : 6  // The week that contains Jan 1st is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : breton (br)
// author : Jean-Baptiste Le Duigou : https://github.com/jbleduigou

(function (factory) {
  factory(moment);
}(function (moment) {
  function relativeTimeWithMutation(number, withoutSuffix, key) {
      var format = {
          'mm': 'munutenn',
          'MM': 'miz',
          'dd': 'devezh'
      };
      return number + ' ' + mutation(format[key], number);
  }

  function specialMutationForYears(number) {
      switch (lastNumber(number)) {
      case 1:
      case 3:
      case 4:
      case 5:
      case 9:
          return number + ' bloaz';
      default:
          return number + ' vloaz';
      }
  }

  function lastNumber(number) {
      if (number > 9) {
          return lastNumber(number % 10);
      }
      return number;
  }

  function mutation(text, number) {
      if (number === 2) {
          return softMutation(text);
      }
      return text;
  }

  function softMutation(text) {
      var mutationTable = {
          'm': 'v',
          'b': 'v',
          'd': 'z'
      };
      if (mutationTable[text.charAt(0)] === undefined) {
          return text;
      }
      return mutationTable[text.charAt(0)] + text.substring(1);
  }

  return moment.defineLocale('br', {
      months : 'Genver_C\'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu'.split('_'),
      monthsShort : 'Gen_C\'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker'.split('_'),
      weekdays : 'Sul_Lun_Meurzh_Merc\'her_Yaou_Gwener_Sadorn'.split('_'),
      weekdaysShort : 'Sul_Lun_Meu_Mer_Yao_Gwe_Sad'.split('_'),
      weekdaysMin : 'Su_Lu_Me_Mer_Ya_Gw_Sa'.split('_'),
      longDateFormat : {
          LT : 'h[e]mm A',
          LTS : 'h[e]mm:ss A',
          L : 'DD/MM/YYYY',
          LL : 'D [a viz] MMMM YYYY',
          LLL : 'D [a viz] MMMM YYYY LT',
          LLLL : 'dddd, D [a viz] MMMM YYYY LT'
      },
      calendar : {
          sameDay : '[Hiziv da] LT',
          nextDay : '[Warc\'hoazh da] LT',
          nextWeek : 'dddd [da] LT',
          lastDay : '[Dec\'h da] LT',
          lastWeek : 'dddd [paset da] LT',
          sameElse : 'L'
      },
      relativeTime : {
          future : 'a-benn %s',
          past : '%s \'zo',
          s : 'un nebeud segondennoù',
          m : 'ur vunutenn',
          mm : relativeTimeWithMutation,
          h : 'un eur',
          hh : '%d eur',
          d : 'un devezh',
          dd : relativeTimeWithMutation,
          M : 'ur miz',
          MM : relativeTimeWithMutation,
          y : 'ur bloaz',
          yy : specialMutationForYears
      },
      ordinalParse: /\d{1,2}(añ|vet)/,
      ordinal : function (number) {
          var output = (number === 1) ? 'añ' : 'vet';
          return number + output;
      },
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 4  // The week that contains Jan 4th is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : bosnian (bs)
// author : Nedim Cholich : https://github.com/frontyard
// based on (hr) translation by Bojan Marković

(function (factory) {
  factory(moment);
}(function (moment) {
  function translate(number, withoutSuffix, key) {
      var result = number + ' ';
      switch (key) {
      case 'm':
          return withoutSuffix ? 'jedna minuta' : 'jedne minute';
      case 'mm':
          if (number === 1) {
              result += 'minuta';
          } else if (number === 2 || number === 3 || number === 4) {
              result += 'minute';
          } else {
              result += 'minuta';
          }
          return result;
      case 'h':
          return withoutSuffix ? 'jedan sat' : 'jednog sata';
      case 'hh':
          if (number === 1) {
              result += 'sat';
          } else if (number === 2 || number === 3 || number === 4) {
              result += 'sata';
          } else {
              result += 'sati';
          }
          return result;
      case 'dd':
          if (number === 1) {
              result += 'dan';
          } else {
              result += 'dana';
          }
          return result;
      case 'MM':
          if (number === 1) {
              result += 'mjesec';
          } else if (number === 2 || number === 3 || number === 4) {
              result += 'mjeseca';
          } else {
              result += 'mjeseci';
          }
          return result;
      case 'yy':
          if (number === 1) {
              result += 'godina';
          } else if (number === 2 || number === 3 || number === 4) {
              result += 'godine';
          } else {
              result += 'godina';
          }
          return result;
      }
  }

  return moment.defineLocale('bs', {
      months : 'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split('_'),
      monthsShort : 'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split('_'),
      weekdays : 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
      weekdaysShort : 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
      weekdaysMin : 'ne_po_ut_sr_če_pe_su'.split('_'),
      longDateFormat : {
          LT : 'H:mm',
          LTS : 'LT:ss',
          L : 'DD. MM. YYYY',
          LL : 'D. MMMM YYYY',
          LLL : 'D. MMMM YYYY LT',
          LLLL : 'dddd, D. MMMM YYYY LT'
      },
      calendar : {
          sameDay  : '[danas u] LT',
          nextDay  : '[sutra u] LT',

          nextWeek : function () {
              switch (this.day()) {
              case 0:
                  return '[u] [nedjelju] [u] LT';
              case 3:
                  return '[u] [srijedu] [u] LT';
              case 6:
                  return '[u] [subotu] [u] LT';
              case 1:
              case 2:
              case 4:
              case 5:
                  return '[u] dddd [u] LT';
              }
          },
          lastDay  : '[jučer u] LT',
          lastWeek : function () {
              switch (this.day()) {
              case 0:
              case 3:
                  return '[prošlu] dddd [u] LT';
              case 6:
                  return '[prošle] [subote] [u] LT';
              case 1:
              case 2:
              case 4:
              case 5:
                  return '[prošli] dddd [u] LT';
              }
          },
          sameElse : 'L'
      },
      relativeTime : {
          future : 'za %s',
          past   : 'prije %s',
          s      : 'par sekundi',
          m      : translate,
          mm     : translate,
          h      : translate,
          hh     : translate,
          d      : 'dan',
          dd     : translate,
          M      : 'mjesec',
          MM     : translate,
          y      : 'godinu',
          yy     : translate
      },
      ordinalParse: /\d{1,2}\./,
      ordinal : '%d.',
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 7  // The week that contains Jan 1st is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : catalan (ca)
// author : Juan G. Hurtado : https://github.com/juanghurtado

(function (factory) {
  factory(moment);
}(function (moment) {
  return moment.defineLocale('ca', {
      months : 'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'),
      monthsShort : 'gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.'.split('_'),
      weekdays : 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
      weekdaysShort : 'dg._dl._dt._dc._dj._dv._ds.'.split('_'),
      weekdaysMin : 'Dg_Dl_Dt_Dc_Dj_Dv_Ds'.split('_'),
      longDateFormat : {
          LT : 'H:mm',
          LTS : 'LT:ss',
          L : 'DD/MM/YYYY',
          LL : 'D MMMM YYYY',
          LLL : 'D MMMM YYYY LT',
          LLLL : 'dddd D MMMM YYYY LT'
      },
      calendar : {
          sameDay : function () {
              return '[avui a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
          },
          nextDay : function () {
              return '[demà a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
          },
          nextWeek : function () {
              return 'dddd [a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
          },
          lastDay : function () {
              return '[ahir a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
          },
          lastWeek : function () {
              return '[el] dddd [passat a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
          },
          sameElse : 'L'
      },
      relativeTime : {
          future : 'en %s',
          past : 'fa %s',
          s : 'uns segons',
          m : 'un minut',
          mm : '%d minuts',
          h : 'una hora',
          hh : '%d hores',
          d : 'un dia',
          dd : '%d dies',
          M : 'un mes',
          MM : '%d mesos',
          y : 'un any',
          yy : '%d anys'
      },
      ordinalParse: /\d{1,2}(r|n|t|è|a)/,
      ordinal : function (number, period) {
          var output = (number === 1) ? 'r' :
              (number === 2) ? 'n' :
              (number === 3) ? 'r' :
              (number === 4) ? 't' : 'è';
          if (period === 'w' || period === 'W') {
              output = 'a';
          }
          return number + output;
      },
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 4  // The week that contains Jan 4th is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : czech (cs)
// author : petrbela : https://github.com/petrbela

(function (factory) {
  factory(moment);
}(function (moment) {
  var months = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_'),
      monthsShort = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_');

  function plural(n) {
      return (n > 1) && (n < 5) && (~~(n / 10) !== 1);
  }

  function translate(number, withoutSuffix, key, isFuture) {
      var result = number + ' ';
      switch (key) {
      case 's':  // a few seconds / in a few seconds / a few seconds ago
          return (withoutSuffix || isFuture) ? 'pár sekund' : 'pár sekundami';
      case 'm':  // a minute / in a minute / a minute ago
          return withoutSuffix ? 'minuta' : (isFuture ? 'minutu' : 'minutou');
      case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
          if (withoutSuffix || isFuture) {
              return result + (plural(number) ? 'minuty' : 'minut');
          } else {
              return result + 'minutami';
          }
          break;
      case 'h':  // an hour / in an hour / an hour ago
          return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
      case 'hh': // 9 hours / in 9 hours / 9 hours ago
          if (withoutSuffix || isFuture) {
              return result + (plural(number) ? 'hodiny' : 'hodin');
          } else {
              return result + 'hodinami';
          }
          break;
      case 'd':  // a day / in a day / a day ago
          return (withoutSuffix || isFuture) ? 'den' : 'dnem';
      case 'dd': // 9 days / in 9 days / 9 days ago
          if (withoutSuffix || isFuture) {
              return result + (plural(number) ? 'dny' : 'dní');
          } else {
              return result + 'dny';
          }
          break;
      case 'M':  // a month / in a month / a month ago
          return (withoutSuffix || isFuture) ? 'měsíc' : 'měsícem';
      case 'MM': // 9 months / in 9 months / 9 months ago
          if (withoutSuffix || isFuture) {
              return result + (plural(number) ? 'měsíce' : 'měsíců');
          } else {
              return result + 'měsíci';
          }
          break;
      case 'y':  // a year / in a year / a year ago
          return (withoutSuffix || isFuture) ? 'rok' : 'rokem';
      case 'yy': // 9 years / in 9 years / 9 years ago
          if (withoutSuffix || isFuture) {
              return result + (plural(number) ? 'roky' : 'let');
          } else {
              return result + 'lety';
          }
          break;
      }
  }

  return moment.defineLocale('cs', {
      months : months,
      monthsShort : monthsShort,
      monthsParse : (function (months, monthsShort) {
          var i, _monthsParse = [];
          for (i = 0; i < 12; i++) {
              // use custom parser to solve problem with July (červenec)
              _monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');
          }
          return _monthsParse;
      }(months, monthsShort)),
      weekdays : 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
      weekdaysShort : 'ne_po_út_st_čt_pá_so'.split('_'),
      weekdaysMin : 'ne_po_út_st_čt_pá_so'.split('_'),
      longDateFormat : {
          LT: 'H:mm',
          LTS : 'LT:ss',
          L : 'DD.MM.YYYY',
          LL : 'D. MMMM YYYY',
          LLL : 'D. MMMM YYYY LT',
          LLLL : 'dddd D. MMMM YYYY LT'
      },
      calendar : {
          sameDay: '[dnes v] LT',
          nextDay: '[zítra v] LT',
          nextWeek: function () {
              switch (this.day()) {
              case 0:
                  return '[v neděli v] LT';
              case 1:
              case 2:
                  return '[v] dddd [v] LT';
              case 3:
                  return '[ve středu v] LT';
              case 4:
                  return '[ve čtvrtek v] LT';
              case 5:
                  return '[v pátek v] LT';
              case 6:
                  return '[v sobotu v] LT';
              }
          },
          lastDay: '[včera v] LT',
          lastWeek: function () {
              switch (this.day()) {
              case 0:
                  return '[minulou neděli v] LT';
              case 1:
              case 2:
                  return '[minulé] dddd [v] LT';
              case 3:
                  return '[minulou středu v] LT';
              case 4:
              case 5:
                  return '[minulý] dddd [v] LT';
              case 6:
                  return '[minulou sobotu v] LT';
              }
          },
          sameElse: 'L'
      },
      relativeTime : {
          future : 'za %s',
          past : 'před %s',
          s : translate,
          m : translate,
          mm : translate,
          h : translate,
          hh : translate,
          d : translate,
          dd : translate,
          M : translate,
          MM : translate,
          y : translate,
          yy : translate
      },
      ordinalParse : /\d{1,2}\./,
      ordinal : '%d.',
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 4  // The week that contains Jan 4th is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : chuvash (cv)
// author : Anatoly Mironov : https://github.com/mirontoli

(function (factory) {
  factory(moment);
}(function (moment) {
  return moment.defineLocale('cv', {
      months : 'кăрлач_нарăс_пуш_ака_май_çĕртме_утă_çурла_авăн_юпа_чӳк_раштав'.split('_'),
      monthsShort : 'кăр_нар_пуш_ака_май_çĕр_утă_çур_ав_юпа_чӳк_раш'.split('_'),
      weekdays : 'вырсарникун_тунтикун_ытларикун_юнкун_кĕçнерникун_эрнекун_шăматкун'.split('_'),
      weekdaysShort : 'выр_тун_ытл_юн_кĕç_эрн_шăм'.split('_'),
      weekdaysMin : 'вр_тн_ыт_юн_кç_эр_шм'.split('_'),
      longDateFormat : {
          LT : 'HH:mm',
          LTS : 'LT:ss',
          L : 'DD-MM-YYYY',
          LL : 'YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ]',
          LLL : 'YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ], LT',
          LLLL : 'dddd, YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ], LT'
      },
      calendar : {
          sameDay: '[Паян] LT [сехетре]',
          nextDay: '[Ыран] LT [сехетре]',
          lastDay: '[Ĕнер] LT [сехетре]',
          nextWeek: '[Çитес] dddd LT [сехетре]',
          lastWeek: '[Иртнĕ] dddd LT [сехетре]',
          sameElse: 'L'
      },
      relativeTime : {
          future : function (output) {
              var affix = /сехет$/i.exec(output) ? 'рен' : /çул$/i.exec(output) ? 'тан' : 'ран';
              return output + affix;
          },
          past : '%s каялла',
          s : 'пĕр-ик çеккунт',
          m : 'пĕр минут',
          mm : '%d минут',
          h : 'пĕр сехет',
          hh : '%d сехет',
          d : 'пĕр кун',
          dd : '%d кун',
          M : 'пĕр уйăх',
          MM : '%d уйăх',
          y : 'пĕр çул',
          yy : '%d çул'
      },
      ordinalParse: /\d{1,2}-мĕш/,
      ordinal : '%d-мĕш',
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 7  // The week that contains Jan 1st is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : Welsh (cy)
// author : Robert Allen

(function (factory) {
  factory(moment);
}(function (moment) {
  return moment.defineLocale('cy', {
      months: 'Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr'.split('_'),
      monthsShort: 'Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag'.split('_'),
      weekdays: 'Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn'.split('_'),
      weekdaysShort: 'Sul_Llun_Maw_Mer_Iau_Gwe_Sad'.split('_'),
      weekdaysMin: 'Su_Ll_Ma_Me_Ia_Gw_Sa'.split('_'),
      // time formats are the same as en-gb
      longDateFormat: {
          LT: 'HH:mm',
          LTS : 'LT:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY LT',
          LLLL: 'dddd, D MMMM YYYY LT'
      },
      calendar: {
          sameDay: '[Heddiw am] LT',
          nextDay: '[Yfory am] LT',
          nextWeek: 'dddd [am] LT',
          lastDay: '[Ddoe am] LT',
          lastWeek: 'dddd [diwethaf am] LT',
          sameElse: 'L'
      },
      relativeTime: {
          future: 'mewn %s',
          past: '%s yn ôl',
          s: 'ychydig eiliadau',
          m: 'munud',
          mm: '%d munud',
          h: 'awr',
          hh: '%d awr',
          d: 'diwrnod',
          dd: '%d diwrnod',
          M: 'mis',
          MM: '%d mis',
          y: 'blwyddyn',
          yy: '%d flynedd'
      },
      ordinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
      // traditional ordinal numbers above 31 are not commonly used in colloquial Welsh
      ordinal: function (number) {
          var b = number,
              output = '',
              lookup = [
                  '', 'af', 'il', 'ydd', 'ydd', 'ed', 'ed', 'ed', 'fed', 'fed', 'fed', // 1af to 10fed
                  'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'fed' // 11eg to 20fed
              ];

          if (b > 20) {
              if (b === 40 || b === 50 || b === 60 || b === 80 || b === 100) {
                  output = 'fed'; // not 30ain, 70ain or 90ain
              } else {
                  output = 'ain';
              }
          } else if (b > 0) {
              output = lookup[b];
          }

          return number + output;
      },
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 4  // The week that contains Jan 4th is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : danish (da)
// author : Ulrik Nielsen : https://github.com/mrbase

(function (factory) {
  factory(moment);
}(function (moment) {
  return moment.defineLocale('da', {
      months : 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split('_'),
      monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
      weekdays : 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
      weekdaysShort : 'søn_man_tir_ons_tor_fre_lør'.split('_'),
      weekdaysMin : 'sø_ma_ti_on_to_fr_lø'.split('_'),
      longDateFormat : {
          LT : 'HH:mm',
          LTS : 'LT:ss',
          L : 'DD/MM/YYYY',
          LL : 'D. MMMM YYYY',
          LLL : 'D. MMMM YYYY LT',
          LLLL : 'dddd [d.] D. MMMM YYYY LT'
      },
      calendar : {
          sameDay : '[I dag kl.] LT',
          nextDay : '[I morgen kl.] LT',
          nextWeek : 'dddd [kl.] LT',
          lastDay : '[I går kl.] LT',
          lastWeek : '[sidste] dddd [kl] LT',
          sameElse : 'L'
      },
      relativeTime : {
          future : 'om %s',
          past : '%s siden',
          s : 'få sekunder',
          m : 'et minut',
          mm : '%d minutter',
          h : 'en time',
          hh : '%d timer',
          d : 'en dag',
          dd : '%d dage',
          M : 'en måned',
          MM : '%d måneder',
          y : 'et år',
          yy : '%d år'
      },
      ordinalParse: /\d{1,2}\./,
      ordinal : '%d.',
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 4  // The week that contains Jan 4th is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : austrian german (de-at)
// author : lluchs : https://github.com/lluchs
// author: Menelion Elensúle: https://github.com/Oire
// author : Martin Groller : https://github.com/MadMG

(function (factory) {
  factory(moment);
}(function (moment) {
  function processRelativeTime(number, withoutSuffix, key, isFuture) {
      var format = {
          'm': ['eine Minute', 'einer Minute'],
          'h': ['eine Stunde', 'einer Stunde'],
          'd': ['ein Tag', 'einem Tag'],
          'dd': [number + ' Tage', number + ' Tagen'],
          'M': ['ein Monat', 'einem Monat'],
          'MM': [number + ' Monate', number + ' Monaten'],
          'y': ['ein Jahr', 'einem Jahr'],
          'yy': [number + ' Jahre', number + ' Jahren']
      };
      return withoutSuffix ? format[key][0] : format[key][1];
  }

  return moment.defineLocale('de-at', {
      months : 'Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
      monthsShort : 'Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
      weekdays : 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
      weekdaysShort : 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
      weekdaysMin : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
      longDateFormat : {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L : 'DD.MM.YYYY',
          LL : 'D. MMMM YYYY',
          LLL : 'D. MMMM YYYY LT',
          LLLL : 'dddd, D. MMMM YYYY LT'
      },
      calendar : {
          sameDay: '[Heute um] LT [Uhr]',
          sameElse: 'L',
          nextDay: '[Morgen um] LT [Uhr]',
          nextWeek: 'dddd [um] LT [Uhr]',
          lastDay: '[Gestern um] LT [Uhr]',
          lastWeek: '[letzten] dddd [um] LT [Uhr]'
      },
      relativeTime : {
          future : 'in %s',
          past : 'vor %s',
          s : 'ein paar Sekunden',
          m : processRelativeTime,
          mm : '%d Minuten',
          h : processRelativeTime,
          hh : '%d Stunden',
          d : processRelativeTime,
          dd : processRelativeTime,
          M : processRelativeTime,
          MM : processRelativeTime,
          y : processRelativeTime,
          yy : processRelativeTime
      },
      ordinalParse: /\d{1,2}\./,
      ordinal : '%d.',
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 4  // The week that contains Jan 4th is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : german (de)
// author : lluchs : https://github.com/lluchs
// author: Menelion Elensúle: https://github.com/Oire

(function (factory) {
  factory(moment);
}(function (moment) {
  function processRelativeTime(number, withoutSuffix, key, isFuture) {
      var format = {
          'm': ['eine Minute', 'einer Minute'],
          'h': ['eine Stunde', 'einer Stunde'],
          'd': ['ein Tag', 'einem Tag'],
          'dd': [number + ' Tage', number + ' Tagen'],
          'M': ['ein Monat', 'einem Monat'],
          'MM': [number + ' Monate', number + ' Monaten'],
          'y': ['ein Jahr', 'einem Jahr'],
          'yy': [number + ' Jahre', number + ' Jahren']
      };
      return withoutSuffix ? format[key][0] : format[key][1];
  }

  return moment.defineLocale('de', {
      months : 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
      monthsShort : 'Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
      weekdays : 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
      weekdaysShort : 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
      weekdaysMin : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
      longDateFormat : {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L : 'DD.MM.YYYY',
          LL : 'D. MMMM YYYY',
          LLL : 'D. MMMM YYYY LT',
          LLLL : 'dddd, D. MMMM YYYY LT'
      },
      calendar : {
          sameDay: '[Heute um] LT [Uhr]',
          sameElse: 'L',
          nextDay: '[Morgen um] LT [Uhr]',
          nextWeek: 'dddd [um] LT [Uhr]',
          lastDay: '[Gestern um] LT [Uhr]',
          lastWeek: '[letzten] dddd [um] LT [Uhr]'
      },
      relativeTime : {
          future : 'in %s',
          past : 'vor %s',
          s : 'ein paar Sekunden',
          m : processRelativeTime,
          mm : '%d Minuten',
          h : processRelativeTime,
          hh : '%d Stunden',
          d : processRelativeTime,
          dd : processRelativeTime,
          M : processRelativeTime,
          MM : processRelativeTime,
          y : processRelativeTime,
          yy : processRelativeTime
      },
      ordinalParse: /\d{1,2}\./,
      ordinal : '%d.',
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 4  // The week that contains Jan 4th is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : modern greek (el)
// author : Aggelos Karalias : https://github.com/mehiel

(function (factory) {
  factory(moment);
}(function (moment) {
  return moment.defineLocale('el', {
      monthsNominativeEl : 'Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος'.split('_'),
      monthsGenitiveEl : 'Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου'.split('_'),
      months : function (momentToFormat, format) {
          if (/D/.test(format.substring(0, format.indexOf('MMMM')))) { // if there is a day number before 'MMMM'
              return this._monthsGenitiveEl[momentToFormat.month()];
          } else {
              return this._monthsNominativeEl[momentToFormat.month()];
          }
      },
      monthsShort : 'Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ'.split('_'),
      weekdays : 'Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο'.split('_'),
      weekdaysShort : 'Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ'.split('_'),
      weekdaysMin : 'Κυ_Δε_Τρ_Τε_Πε_Πα_Σα'.split('_'),
      meridiem : function (hours, minutes, isLower) {
          if (hours > 11) {
              return isLower ? 'μμ' : 'ΜΜ';
          } else {
              return isLower ? 'πμ' : 'ΠΜ';
          }
      },
      isPM : function (input) {
          return ((input + '').toLowerCase()[0] === 'μ');
      },
      meridiemParse : /[ΠΜ]\.?Μ?\.?/i,
      longDateFormat : {
          LT : 'h:mm A',
          LTS : 'h:mm:ss A',
          L : 'DD/MM/YYYY',
          LL : 'D MMMM YYYY',
          LLL : 'D MMMM YYYY LT',
          LLLL : 'dddd, D MMMM YYYY LT'
      },
      calendarEl : {
          sameDay : '[Σήμερα {}] LT',
          nextDay : '[Αύριο {}] LT',
          nextWeek : 'dddd [{}] LT',
          lastDay : '[Χθες {}] LT',
          lastWeek : function () {
              switch (this.day()) {
                  case 6:
                      return '[το προηγούμενο] dddd [{}] LT';
                  default:
                      return '[την προηγούμενη] dddd [{}] LT';
              }
          },
          sameElse : 'L'
      },
      calendar : function (key, mom) {
          var output = this._calendarEl[key],
              hours = mom && mom.hours();

          if (typeof output === 'function') {
              output = output.apply(mom);
          }

          return output.replace('{}', (hours % 12 === 1 ? 'στη' : 'στις'));
      },
      relativeTime : {
          future : 'σε %s',
          past : '%s πριν',
          s : 'λίγα δευτερόλεπτα',
          m : 'ένα λεπτό',
          mm : '%d λεπτά',
          h : 'μία ώρα',
          hh : '%d ώρες',
          d : 'μία μέρα',
          dd : '%d μέρες',
          M : 'ένας μήνας',
          MM : '%d μήνες',
          y : 'ένας χρόνος',
          yy : '%d χρόνια'
      },
      ordinalParse: /\d{1,2}η/,
      ordinal: '%dη',
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 4  // The week that contains Jan 4st is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : australian english (en-au)

(function (factory) {
  factory(moment);
}(function (moment) {
  return moment.defineLocale('en-au', {
      months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
      monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
      weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
      weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
      weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
      longDateFormat : {
          LT : 'h:mm A',
          LTS : 'h:mm:ss A',
          L : 'DD/MM/YYYY',
          LL : 'D MMMM YYYY',
          LLL : 'D MMMM YYYY LT',
          LLLL : 'dddd, D MMMM YYYY LT'
      },
      calendar : {
          sameDay : '[Today at] LT',
          nextDay : '[Tomorrow at] LT',
          nextWeek : 'dddd [at] LT',
          lastDay : '[Yesterday at] LT',
          lastWeek : '[Last] dddd [at] LT',
          sameElse : 'L'
      },
      relativeTime : {
          future : 'in %s',
          past : '%s ago',
          s : 'a few seconds',
          m : 'a minute',
          mm : '%d minutes',
          h : 'an hour',
          hh : '%d hours',
          d : 'a day',
          dd : '%d days',
          M : 'a month',
          MM : '%d months',
          y : 'a year',
          yy : '%d years'
      },
      ordinalParse: /\d{1,2}(st|nd|rd|th)/,
      ordinal : function (number) {
          var b = number % 10,
              output = (~~(number % 100 / 10) === 1) ? 'th' :
              (b === 1) ? 'st' :
              (b === 2) ? 'nd' :
              (b === 3) ? 'rd' : 'th';
          return number + output;
      },
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 4  // The week that contains Jan 4th is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : canadian english (en-ca)
// author : Jonathan Abourbih : https://github.com/jonbca

(function (factory) {
  factory(moment);
}(function (moment) {
  return moment.defineLocale('en-ca', {
      months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
      monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
      weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
      weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
      weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
      longDateFormat : {
          LT : 'h:mm A',
          LTS : 'h:mm:ss A',
          L : 'YYYY-MM-DD',
          LL : 'D MMMM, YYYY',
          LLL : 'D MMMM, YYYY LT',
          LLLL : 'dddd, D MMMM, YYYY LT'
      },
      calendar : {
          sameDay : '[Today at] LT',
          nextDay : '[Tomorrow at] LT',
          nextWeek : 'dddd [at] LT',
          lastDay : '[Yesterday at] LT',
          lastWeek : '[Last] dddd [at] LT',
          sameElse : 'L'
      },
      relativeTime : {
          future : 'in %s',
          past : '%s ago',
          s : 'a few seconds',
          m : 'a minute',
          mm : '%d minutes',
          h : 'an hour',
          hh : '%d hours',
          d : 'a day',
          dd : '%d days',
          M : 'a month',
          MM : '%d months',
          y : 'a year',
          yy : '%d years'
      },
      ordinalParse: /\d{1,2}(st|nd|rd|th)/,
      ordinal : function (number) {
          var b = number % 10,
              output = (~~(number % 100 / 10) === 1) ? 'th' :
              (b === 1) ? 'st' :
              (b === 2) ? 'nd' :
              (b === 3) ? 'rd' : 'th';
          return number + output;
      }
  });
}));
// moment.js locale configuration
// locale : great britain english (en-gb)
// author : Chris Gedrim : https://github.com/chrisgedrim

(function (factory) {
  factory(moment);
}(function (moment) {
  return moment.defineLocale('en-gb', {
      months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
      monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
      weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
      weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
      weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
      longDateFormat : {
          LT : 'HH:mm',
          LTS : 'HH:mm:ss',
          L : 'DD/MM/YYYY',
          LL : 'D MMMM YYYY',
          LLL : 'D MMMM YYYY LT',
          LLLL : 'dddd, D MMMM YYYY LT'
      },
      calendar : {
          sameDay : '[Today at] LT',
          nextDay : '[Tomorrow at] LT',
          nextWeek : 'dddd [at] LT',
          lastDay : '[Yesterday at] LT',
          lastWeek : '[Last] dddd [at] LT',
          sameElse : 'L'
      },
      relativeTime : {
          future : 'in %s',
          past : '%s ago',
          s : 'a few seconds',
          m : 'a minute',
          mm : '%d minutes',
          h : 'an hour',
          hh : '%d hours',
          d : 'a day',
          dd : '%d days',
          M : 'a month',
          MM : '%d months',
          y : 'a year',
          yy : '%d years'
      },
      ordinalParse: /\d{1,2}(st|nd|rd|th)/,
      ordinal : function (number) {
          var b = number % 10,
              output = (~~(number % 100 / 10) === 1) ? 'th' :
              (b === 1) ? 'st' :
              (b === 2) ? 'nd' :
              (b === 3) ? 'rd' : 'th';
          return number + output;
      },
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 4  // The week that contains Jan 4th is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : esperanto (eo)
// author : Colin Dean : https://github.com/colindean
// komento: Mi estas malcerta se mi korekte traktis akuzativojn en tiu traduko.
//          Se ne, bonvolu korekti kaj avizi min por ke mi povas lerni!

(function (factory) {
  factory(moment);
}(function (moment) {
  return moment.defineLocale('eo', {
      months : 'januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro'.split('_'),
      monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec'.split('_'),
      weekdays : 'Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato'.split('_'),
      weekdaysShort : 'Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab'.split('_'),
      weekdaysMin : 'Di_Lu_Ma_Me_Ĵa_Ve_Sa'.split('_'),
      longDateFormat : {
          LT : 'HH:mm',
          LTS : 'LT:ss',
          L : 'YYYY-MM-DD',
          LL : 'D[-an de] MMMM, YYYY',
          LLL : 'D[-an de] MMMM, YYYY LT',
          LLLL : 'dddd, [la] D[-an de] MMMM, YYYY LT'
      },
      meridiemParse: /[ap]\.t\.m/i,
      isPM: function (input) {
          return input.charAt(0).toLowerCase() === 'p';
      },
      meridiem : function (hours, minutes, isLower) {
          if (hours > 11) {
              return isLower ? 'p.t.m.' : 'P.T.M.';
          } else {
              return isLower ? 'a.t.m.' : 'A.T.M.';
          }
      },
      calendar : {
          sameDay : '[Hodiaŭ je] LT',
          nextDay : '[Morgaŭ je] LT',
          nextWeek : 'dddd [je] LT',
          lastDay : '[Hieraŭ je] LT',
          lastWeek : '[pasinta] dddd [je] LT',
          sameElse : 'L'
      },
      relativeTime : {
          future : 'je %s',
          past : 'antaŭ %s',
          s : 'sekundoj',
          m : 'minuto',
          mm : '%d minutoj',
          h : 'horo',
          hh : '%d horoj',
          d : 'tago',//ne 'diurno', ĉar estas uzita por proksimumo
          dd : '%d tagoj',
          M : 'monato',
          MM : '%d monatoj',
          y : 'jaro',
          yy : '%d jaroj'
      },
      ordinalParse: /\d{1,2}a/,
      ordinal : '%da',
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 7  // The week that contains Jan 1st is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : spanish (es)
// author : Julio Napurí : https://github.com/julionc

(function (factory) {
  factory(moment);
}(function (moment) {
  var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
      monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');

  return moment.defineLocale('es', {
      months : 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
      monthsShort : function (m, format) {
          if (/-MMM-/.test(format)) {
              return monthsShort[m.month()];
          } else {
              return monthsShortDot[m.month()];
          }
      },
      weekdays : 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
      weekdaysShort : 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
      weekdaysMin : 'Do_Lu_Ma_Mi_Ju_Vi_Sá'.split('_'),
      longDateFormat : {
          LT : 'H:mm',
          LTS : 'LT:ss',
          L : 'DD/MM/YYYY',
          LL : 'D [de] MMMM [de] YYYY',
          LLL : 'D [de] MMMM [de] YYYY LT',
          LLLL : 'dddd, D [de] MMMM [de] YYYY LT'
      },
      calendar : {
          sameDay : function () {
              return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
          },
          nextDay : function () {
              return '[mañana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
          },
          nextWeek : function () {
              return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
          },
          lastDay : function () {
              return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
          },
          lastWeek : function () {
              return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
          },
          sameElse : 'L'
      },
      relativeTime : {
          future : 'en %s',
          past : 'hace %s',
          s : 'unos segundos',
          m : 'un minuto',
          mm : '%d minutos',
          h : 'una hora',
          hh : '%d horas',
          d : 'un día',
          dd : '%d días',
          M : 'un mes',
          MM : '%d meses',
          y : 'un año',
          yy : '%d años'
      },
      ordinalParse : /\d{1,2}º/,
      ordinal : '%dº',
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 4  // The week that contains Jan 4th is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : estonian (et)
// author : Henry Kehlmann : https://github.com/madhenry
// improvements : Illimar Tambek : https://github.com/ragulka

(function (factory) {
  factory(moment);
}(function (moment) {
  function processRelativeTime(number, withoutSuffix, key, isFuture) {
      var format = {
          's' : ['mõne sekundi', 'mõni sekund', 'paar sekundit'],
          'm' : ['ühe minuti', 'üks minut'],
          'mm': [number + ' minuti', number + ' minutit'],
          'h' : ['ühe tunni', 'tund aega', 'üks tund'],
          'hh': [number + ' tunni', number + ' tundi'],
          'd' : ['ühe päeva', 'üks päev'],
          'M' : ['kuu aja', 'kuu aega', 'üks kuu'],
          'MM': [number + ' kuu', number + ' kuud'],
          'y' : ['ühe aasta', 'aasta', 'üks aasta'],
          'yy': [number + ' aasta', number + ' aastat']
      };
      if (withoutSuffix) {
          return format[key][2] ? format[key][2] : format[key][1];
      }
      return isFuture ? format[key][0] : format[key][1];
  }

  return moment.defineLocale('et', {
      months        : 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'),
      monthsShort   : 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
      weekdays      : 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split('_'),
      weekdaysShort : 'P_E_T_K_N_R_L'.split('_'),
      weekdaysMin   : 'P_E_T_K_N_R_L'.split('_'),
      longDateFormat : {
          LT   : 'H:mm',
          LTS : 'LT:ss',
          L    : 'DD.MM.YYYY',
          LL   : 'D. MMMM YYYY',
          LLL  : 'D. MMMM YYYY LT',
          LLLL : 'dddd, D. MMMM YYYY LT'
      },
      calendar : {
          sameDay  : '[Täna,] LT',
          nextDay  : '[Homme,] LT',
          nextWeek : '[Järgmine] dddd LT',
          lastDay  : '[Eile,] LT',
          lastWeek : '[Eelmine] dddd LT',
          sameElse : 'L'
      },
      relativeTime : {
          future : '%s pärast',
          past   : '%s tagasi',
          s      : processRelativeTime,
          m      : processRelativeTime,
          mm     : processRelativeTime,
          h      : processRelativeTime,
          hh     : processRelativeTime,
          d      : processRelativeTime,
          dd     : '%d päeva',
          M      : processRelativeTime,
          MM     : processRelativeTime,
          y      : processRelativeTime,
          yy     : processRelativeTime
      },
      ordinalParse: /\d{1,2}\./,
      ordinal : '%d.',
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 4  // The week that contains Jan 4th is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : euskara (eu)
// author : Eneko Illarramendi : https://github.com/eillarra

(function (factory) {
  factory(moment);
}(function (moment) {
  return moment.defineLocale('eu', {
      months : 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split('_'),
      monthsShort : 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split('_'),
      weekdays : 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split('_'),
      weekdaysShort : 'ig._al._ar._az._og._ol._lr.'.split('_'),
      weekdaysMin : 'ig_al_ar_az_og_ol_lr'.split('_'),
      longDateFormat : {
          LT : 'HH:mm',
          LTS : 'LT:ss',
          L : 'YYYY-MM-DD',
          LL : 'YYYY[ko] MMMM[ren] D[a]',
          LLL : 'YYYY[ko] MMMM[ren] D[a] LT',
          LLLL : 'dddd, YYYY[ko] MMMM[ren] D[a] LT',
          l : 'YYYY-M-D',
          ll : 'YYYY[ko] MMM D[a]',
          lll : 'YYYY[ko] MMM D[a] LT',
          llll : 'ddd, YYYY[ko] MMM D[a] LT'
      },
      calendar : {
          sameDay : '[gaur] LT[etan]',
          nextDay : '[bihar] LT[etan]',
          nextWeek : 'dddd LT[etan]',
          lastDay : '[atzo] LT[etan]',
          lastWeek : '[aurreko] dddd LT[etan]',
          sameElse : 'L'
      },
      relativeTime : {
          future : '%s barru',
          past : 'duela %s',
          s : 'segundo batzuk',
          m : 'minutu bat',
          mm : '%d minutu',
          h : 'ordu bat',
          hh : '%d ordu',
          d : 'egun bat',
          dd : '%d egun',
          M : 'hilabete bat',
          MM : '%d hilabete',
          y : 'urte bat',
          yy : '%d urte'
      },
      ordinalParse: /\d{1,2}\./,
      ordinal : '%d.',
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 7  // The week that contains Jan 1st is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : Persian (fa)
// author : Ebrahim Byagowi : https://github.com/ebraminio

(function (factory) {
  factory(moment);
}(function (moment) {
  var symbolMap = {
      '1': '۱',
      '2': '۲',
      '3': '۳',
      '4': '۴',
      '5': '۵',
      '6': '۶',
      '7': '۷',
      '8': '۸',
      '9': '۹',
      '0': '۰'
  }, numberMap = {
      '۱': '1',
      '۲': '2',
      '۳': '3',
      '۴': '4',
      '۵': '5',
      '۶': '6',
      '۷': '7',
      '۸': '8',
      '۹': '9',
      '۰': '0'
  };

  return moment.defineLocale('fa', {
      months : 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
      monthsShort : 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
      weekdays : 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),
      weekdaysShort : 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),
      weekdaysMin : 'ی_د_س_چ_پ_ج_ش'.split('_'),
      longDateFormat : {
          LT : 'HH:mm',
          LTS : 'LT:ss',
          L : 'DD/MM/YYYY',
          LL : 'D MMMM YYYY',
          LLL : 'D MMMM YYYY LT',
          LLLL : 'dddd, D MMMM YYYY LT'
      },
      meridiemParse: /قبل از ظهر|بعد از ظهر/,
      isPM: function (input) {
          return /بعد از ظهر/.test(input);
      },
      meridiem : function (hour, minute, isLower) {
          if (hour < 12) {
              return 'قبل از ظهر';
          } else {
              return 'بعد از ظهر';
          }
      },
      calendar : {
          sameDay : '[امروز ساعت] LT',
          nextDay : '[فردا ساعت] LT',
          nextWeek : 'dddd [ساعت] LT',
          lastDay : '[دیروز ساعت] LT',
          lastWeek : 'dddd [پیش] [ساعت] LT',
          sameElse : 'L'
      },
      relativeTime : {
          future : 'در %s',
          past : '%s پیش',
          s : 'چندین ثانیه',
          m : 'یک دقیقه',
          mm : '%d دقیقه',
          h : 'یک ساعت',
          hh : '%d ساعت',
          d : 'یک روز',
          dd : '%d روز',
          M : 'یک ماه',
          MM : '%d ماه',
          y : 'یک سال',
          yy : '%d سال'
      },
      preparse: function (string) {
          return string.replace(/[۰-۹]/g, function (match) {
              return numberMap[match];
          }).replace(/،/g, ',');
      },
      postformat: function (string) {
          return string.replace(/\d/g, function (match) {
              return symbolMap[match];
          }).replace(/,/g, '،');
      },
      ordinalParse: /\d{1,2}م/,
      ordinal : '%dم',
      week : {
          dow : 6, // Saturday is the first day of the week.
          doy : 12 // The week that contains Jan 1st is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : finnish (fi)
// author : Tarmo Aidantausta : https://github.com/bleadof

(function (factory) {
  factory(moment);
}(function (moment) {
  var numbersPast = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' '),
      numbersFuture = [
          'nolla', 'yhden', 'kahden', 'kolmen', 'neljän', 'viiden', 'kuuden',
          numbersPast[7], numbersPast[8], numbersPast[9]
      ];

  function translate(number, withoutSuffix, key, isFuture) {
      var result = '';
      switch (key) {
      case 's':
          return isFuture ? 'muutaman sekunnin' : 'muutama sekunti';
      case 'm':
          return isFuture ? 'minuutin' : 'minuutti';
      case 'mm':
          result = isFuture ? 'minuutin' : 'minuuttia';
          break;
      case 'h':
          return isFuture ? 'tunnin' : 'tunti';
      case 'hh':
          result = isFuture ? 'tunnin' : 'tuntia';
          break;
      case 'd':
          return isFuture ? 'päivän' : 'päivä';
      case 'dd':
          result = isFuture ? 'päivän' : 'päivää';
          break;
      case 'M':
          return isFuture ? 'kuukauden' : 'kuukausi';
      case 'MM':
          result = isFuture ? 'kuukauden' : 'kuukautta';
          break;
      case 'y':
          return isFuture ? 'vuoden' : 'vuosi';
      case 'yy':
          result = isFuture ? 'vuoden' : 'vuotta';
          break;
      }
      result = verbalNumber(number, isFuture) + ' ' + result;
      return result;
  }

  function verbalNumber(number, isFuture) {
      return number < 10 ? (isFuture ? numbersFuture[number] : numbersPast[number]) : number;
  }

  return moment.defineLocale('fi', {
      months : 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
      monthsShort : 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_'),
      weekdays : 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
      weekdaysShort : 'su_ma_ti_ke_to_pe_la'.split('_'),
      weekdaysMin : 'su_ma_ti_ke_to_pe_la'.split('_'),
      longDateFormat : {
          LT : 'HH.mm',
          LTS : 'HH.mm.ss',
          L : 'DD.MM.YYYY',
          LL : 'Do MMMM[ta] YYYY',
          LLL : 'Do MMMM[ta] YYYY, [klo] LT',
          LLLL : 'dddd, Do MMMM[ta] YYYY, [klo] LT',
          l : 'D.M.YYYY',
          ll : 'Do MMM YYYY',
          lll : 'Do MMM YYYY, [klo] LT',
          llll : 'ddd, Do MMM YYYY, [klo] LT'
      },
      calendar : {
          sameDay : '[tänään] [klo] LT',
          nextDay : '[huomenna] [klo] LT',
          nextWeek : 'dddd [klo] LT',
          lastDay : '[eilen] [klo] LT',
          lastWeek : '[viime] dddd[na] [klo] LT',
          sameElse : 'L'
      },
      relativeTime : {
          future : '%s päästä',
          past : '%s sitten',
          s : translate,
          m : translate,
          mm : translate,
          h : translate,
          hh : translate,
          d : translate,
          dd : translate,
          M : translate,
          MM : translate,
          y : translate,
          yy : translate
      },
      ordinalParse: /\d{1,2}\./,
      ordinal : '%d.',
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 4  // The week that contains Jan 4th is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : faroese (fo)
// author : Ragnar Johannesen : https://github.com/ragnar123

(function (factory) {
  factory(moment);
}(function (moment) {
  return moment.defineLocale('fo', {
      months : 'januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
      monthsShort : 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
      weekdays : 'sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur'.split('_'),
      weekdaysShort : 'sun_mán_týs_mik_hós_frí_ley'.split('_'),
      weekdaysMin : 'su_má_tý_mi_hó_fr_le'.split('_'),
      longDateFormat : {
          LT : 'HH:mm',
          LTS : 'LT:ss',
          L : 'DD/MM/YYYY',
          LL : 'D MMMM YYYY',
          LLL : 'D MMMM YYYY LT',
          LLLL : 'dddd D. MMMM, YYYY LT'
      },
      calendar : {
          sameDay : '[Í dag kl.] LT',
          nextDay : '[Í morgin kl.] LT',
          nextWeek : 'dddd [kl.] LT',
          lastDay : '[Í gjár kl.] LT',
          lastWeek : '[síðstu] dddd [kl] LT',
          sameElse : 'L'
      },
      relativeTime : {
          future : 'um %s',
          past : '%s síðani',
          s : 'fá sekund',
          m : 'ein minutt',
          mm : '%d minuttir',
          h : 'ein tími',
          hh : '%d tímar',
          d : 'ein dagur',
          dd : '%d dagar',
          M : 'ein mánaði',
          MM : '%d mánaðir',
          y : 'eitt ár',
          yy : '%d ár'
      },
      ordinalParse: /\d{1,2}\./,
      ordinal : '%d.',
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 4  // The week that contains Jan 4th is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : canadian french (fr-ca)
// author : Jonathan Abourbih : https://github.com/jonbca

(function (factory) {
  factory(moment);
}(function (moment) {
  return moment.defineLocale('fr-ca', {
      months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
      monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
      weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
      weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
      weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
      longDateFormat : {
          LT : 'HH:mm',
          LTS : 'LT:ss',
          L : 'YYYY-MM-DD',
          LL : 'D MMMM YYYY',
          LLL : 'D MMMM YYYY LT',
          LLLL : 'dddd D MMMM YYYY LT'
      },
      calendar : {
          sameDay: '[Aujourd\'hui à] LT',
          nextDay: '[Demain à] LT',
          nextWeek: 'dddd [à] LT',
          lastDay: '[Hier à] LT',
          lastWeek: 'dddd [dernier à] LT',
          sameElse: 'L'
      },
      relativeTime : {
          future : 'dans %s',
          past : 'il y a %s',
          s : 'quelques secondes',
          m : 'une minute',
          mm : '%d minutes',
          h : 'une heure',
          hh : '%d heures',
          d : 'un jour',
          dd : '%d jours',
          M : 'un mois',
          MM : '%d mois',
          y : 'un an',
          yy : '%d ans'
      },
      ordinalParse: /\d{1,2}(er|)/,
      ordinal : function (number) {
          return number + (number === 1 ? 'er' : '');
      }
  });
}));
// moment.js locale configuration
// locale : french (fr)
// author : John Fischer : https://github.com/jfroffice

(function (factory) {
  factory(moment);
}(function (moment) {
  return moment.defineLocale('fr', {
      months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
      monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
      weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
      weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
      weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
      longDateFormat : {
          LT : 'HH:mm',
          LTS : 'LT:ss',
          L : 'DD/MM/YYYY',
          LL : 'D MMMM YYYY',
          LLL : 'D MMMM YYYY LT',
          LLLL : 'dddd D MMMM YYYY LT'
      },
      calendar : {
          sameDay: '[Aujourd\'hui à] LT',
          nextDay: '[Demain à] LT',
          nextWeek: 'dddd [à] LT',
          lastDay: '[Hier à] LT',
          lastWeek: 'dddd [dernier à] LT',
          sameElse: 'L'
      },
      relativeTime : {
          future : 'dans %s',
          past : 'il y a %s',
          s : 'quelques secondes',
          m : 'une minute',
          mm : '%d minutes',
          h : 'une heure',
          hh : '%d heures',
          d : 'un jour',
          dd : '%d jours',
          M : 'un mois',
          MM : '%d mois',
          y : 'un an',
          yy : '%d ans'
      },
      ordinalParse: /\d{1,2}(er|)/,
      ordinal : function (number) {
          return number + (number === 1 ? 'er' : '');
      },
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 4  // The week that contains Jan 4th is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : frisian (fy)
// author : Robin van der Vliet : https://github.com/robin0van0der0v

(function (factory) {
  factory(moment);
}(function (moment) {
  var monthsShortWithDots = 'jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.'.split('_'),
      monthsShortWithoutDots = 'jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_');

  return moment.defineLocale('fy', {
      months : 'jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber'.split('_'),
      monthsShort : function (m, format) {
          if (/-MMM-/.test(format)) {
              return monthsShortWithoutDots[m.month()];
          } else {
              return monthsShortWithDots[m.month()];
          }
      },
      weekdays : 'snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon'.split('_'),
      weekdaysShort : 'si._mo._ti._wo._to._fr._so.'.split('_'),
      weekdaysMin : 'Si_Mo_Ti_Wo_To_Fr_So'.split('_'),
      longDateFormat : {
          LT : 'HH:mm',
          LTS : 'LT:ss',
          L : 'DD-MM-YYYY',
          LL : 'D MMMM YYYY',
          LLL : 'D MMMM YYYY LT',
          LLLL : 'dddd D MMMM YYYY LT'
      },
      calendar : {
          sameDay: '[hjoed om] LT',
          nextDay: '[moarn om] LT',
          nextWeek: 'dddd [om] LT',
          lastDay: '[juster om] LT',
          lastWeek: '[ôfrûne] dddd [om] LT',
          sameElse: 'L'
      },
      relativeTime : {
          future : 'oer %s',
          past : '%s lyn',
          s : 'in pear sekonden',
          m : 'ien minút',
          mm : '%d minuten',
          h : 'ien oere',
          hh : '%d oeren',
          d : 'ien dei',
          dd : '%d dagen',
          M : 'ien moanne',
          MM : '%d moannen',
          y : 'ien jier',
          yy : '%d jierren'
      },
      ordinalParse: /\d{1,2}(ste|de)/,
      ordinal : function (number) {
          return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
      },
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 4  // The week that contains Jan 4th is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : galician (gl)
// author : Juan G. Hurtado : https://github.com/juanghurtado

(function (factory) {
  factory(moment);
}(function (moment) {
  return moment.defineLocale('gl', {
      months : 'Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro'.split('_'),
      monthsShort : 'Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.'.split('_'),
      weekdays : 'Domingo_Luns_Martes_Mércores_Xoves_Venres_Sábado'.split('_'),
      weekdaysShort : 'Dom._Lun._Mar._Mér._Xov._Ven._Sáb.'.split('_'),
      weekdaysMin : 'Do_Lu_Ma_Mé_Xo_Ve_Sá'.split('_'),
      longDateFormat : {
          LT : 'H:mm',
          LTS : 'LT:ss',
          L : 'DD/MM/YYYY',
          LL : 'D MMMM YYYY',
          LLL : 'D MMMM YYYY LT',
          LLLL : 'dddd D MMMM YYYY LT'
      },
      calendar : {
          sameDay : function () {
              return '[hoxe ' + ((this.hours() !== 1) ? 'ás' : 'á') + '] LT';
          },
          nextDay : function () {
              return '[mañá ' + ((this.hours() !== 1) ? 'ás' : 'á') + '] LT';
          },
          nextWeek : function () {
              return 'dddd [' + ((this.hours() !== 1) ? 'ás' : 'a') + '] LT';
          },
          lastDay : function () {
              return '[onte ' + ((this.hours() !== 1) ? 'á' : 'a') + '] LT';
          },
          lastWeek : function () {
              return '[o] dddd [pasado ' + ((this.hours() !== 1) ? 'ás' : 'a') + '] LT';
          },
          sameElse : 'L'
      },
      relativeTime : {
          future : function (str) {
              if (str === 'uns segundos') {
                  return 'nuns segundos';
              }
              return 'en ' + str;
          },
          past : 'hai %s',
          s : 'uns segundos',
          m : 'un minuto',
          mm : '%d minutos',
          h : 'unha hora',
          hh : '%d horas',
          d : 'un día',
          dd : '%d días',
          M : 'un mes',
          MM : '%d meses',
          y : 'un ano',
          yy : '%d anos'
      },
      ordinalParse : /\d{1,2}º/,
      ordinal : '%dº',
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 7  // The week that contains Jan 1st is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : Hebrew (he)
// author : Tomer Cohen : https://github.com/tomer
// author : Moshe Simantov : https://github.com/DevelopmentIL
// author : Tal Ater : https://github.com/TalAter

(function (factory) {
  factory(moment);
}(function (moment) {
  return moment.defineLocale('he', {
      months : 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
      monthsShort : 'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split('_'),
      weekdays : 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
      weekdaysShort : 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
      weekdaysMin : 'א_ב_ג_ד_ה_ו_ש'.split('_'),
      longDateFormat : {
          LT : 'HH:mm',
          LTS : 'LT:ss',
          L : 'DD/MM/YYYY',
          LL : 'D [ב]MMMM YYYY',
          LLL : 'D [ב]MMMM YYYY LT',
          LLLL : 'dddd, D [ב]MMMM YYYY LT',
          l : 'D/M/YYYY',
          ll : 'D MMM YYYY',
          lll : 'D MMM YYYY LT',
          llll : 'ddd, D MMM YYYY LT'
      },
      calendar : {
          sameDay : '[היום ב־]LT',
          nextDay : '[מחר ב־]LT',
          nextWeek : 'dddd [בשעה] LT',
          lastDay : '[אתמול ב־]LT',
          lastWeek : '[ביום] dddd [האחרון בשעה] LT',
          sameElse : 'L'
      },
      relativeTime : {
          future : 'בעוד %s',
          past : 'לפני %s',
          s : 'מספר שניות',
          m : 'דקה',
          mm : '%d דקות',
          h : 'שעה',
          hh : function (number) {
              if (number === 2) {
                  return 'שעתיים';
              }
              return number + ' שעות';
          },
          d : 'יום',
          dd : function (number) {
              if (number === 2) {
                  return 'יומיים';
              }
              return number + ' ימים';
          },
          M : 'חודש',
          MM : function (number) {
              if (number === 2) {
                  return 'חודשיים';
              }
              return number + ' חודשים';
          },
          y : 'שנה',
          yy : function (number) {
              if (number === 2) {
                  return 'שנתיים';
              } else if (number % 10 === 0 && number !== 10) {
                  return number + ' שנה';
              }
              return number + ' שנים';
          }
      }
  });
}));
// moment.js locale configuration
// locale : hindi (hi)
// author : Mayank Singhal : https://github.com/mayanksinghal

(function (factory) {
  factory(moment);
}(function (moment) {
  var symbolMap = {
      '1': '१',
      '2': '२',
      '3': '३',
      '4': '४',
      '5': '५',
      '6': '६',
      '7': '७',
      '8': '८',
      '9': '९',
      '0': '०'
  },
  numberMap = {
      '१': '1',
      '२': '2',
      '३': '3',
      '४': '4',
      '५': '5',
      '६': '6',
      '७': '7',
      '८': '8',
      '९': '9',
      '०': '0'
  };

  return moment.defineLocale('hi', {
      months : 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split('_'),
      monthsShort : 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
      weekdays : 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
      weekdaysShort : 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
      weekdaysMin : 'र_सो_मं_बु_गु_शु_श'.split('_'),
      longDateFormat : {
          LT : 'A h:mm बजे',
          LTS : 'A h:mm:ss बजे',
          L : 'DD/MM/YYYY',
          LL : 'D MMMM YYYY',
          LLL : 'D MMMM YYYY, LT',
          LLLL : 'dddd, D MMMM YYYY, LT'
      },
      calendar : {
          sameDay : '[आज] LT',
          nextDay : '[कल] LT',
          nextWeek : 'dddd, LT',
          lastDay : '[कल] LT',
          lastWeek : '[पिछले] dddd, LT',
          sameElse : 'L'
      },
      relativeTime : {
          future : '%s में',
          past : '%s पहले',
          s : 'कुछ ही क्षण',
          m : 'एक मिनट',
          mm : '%d मिनट',
          h : 'एक घंटा',
          hh : '%d घंटे',
          d : 'एक दिन',
          dd : '%d दिन',
          M : 'एक महीने',
          MM : '%d महीने',
          y : 'एक वर्ष',
          yy : '%d वर्ष'
      },
      preparse: function (string) {
          return string.replace(/[१२३४५६७८९०]/g, function (match) {
              return numberMap[match];
          });
      },
      postformat: function (string) {
          return string.replace(/\d/g, function (match) {
              return symbolMap[match];
          });
      },
      // Hindi notation for meridiems are quite fuzzy in practice. While there exists
      // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
      meridiemParse: /रात|सुबह|दोपहर|शाम/,
      meridiemHour : function (hour, meridiem) {
          if (hour === 12) {
              hour = 0;
          }
          if (meridiem === 'रात') {
              return hour < 4 ? hour : hour + 12;
          } else if (meridiem === 'सुबह') {
              return hour;
          } else if (meridiem === 'दोपहर') {
              return hour >= 10 ? hour : hour + 12;
          } else if (meridiem === 'शाम') {
              return hour + 12;
          }
      },
      meridiem : function (hour, minute, isLower) {
          if (hour < 4) {
              return 'रात';
          } else if (hour < 10) {
              return 'सुबह';
          } else if (hour < 17) {
              return 'दोपहर';
          } else if (hour < 20) {
              return 'शाम';
          } else {
              return 'रात';
          }
      },
      week : {
          dow : 0, // Sunday is the first day of the week.
          doy : 6  // The week that contains Jan 1st is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : hrvatski (hr)
// author : Bojan Marković : https://github.com/bmarkovic

// based on (sl) translation by Robert Sedovšek

(function (factory) {
  factory(moment);
}(function (moment) {
  function translate(number, withoutSuffix, key) {
      var result = number + ' ';
      switch (key) {
      case 'm':
          return withoutSuffix ? 'jedna minuta' : 'jedne minute';
      case 'mm':
          if (number === 1) {
              result += 'minuta';
          } else if (number === 2 || number === 3 || number === 4) {
              result += 'minute';
          } else {
              result += 'minuta';
          }
          return result;
      case 'h':
          return withoutSuffix ? 'jedan sat' : 'jednog sata';
      case 'hh':
          if (number === 1) {
              result += 'sat';
          } else if (number === 2 || number === 3 || number === 4) {
              result += 'sata';
          } else {
              result += 'sati';
          }
          return result;
      case 'dd':
          if (number === 1) {
              result += 'dan';
          } else {
              result += 'dana';
          }
          return result;
      case 'MM':
          if (number === 1) {
              result += 'mjesec';
          } else if (number === 2 || number === 3 || number === 4) {
              result += 'mjeseca';
          } else {
              result += 'mjeseci';
          }
          return result;
      case 'yy':
          if (number === 1) {
              result += 'godina';
          } else if (number === 2 || number === 3 || number === 4) {
              result += 'godine';
          } else {
              result += 'godina';
          }
          return result;
      }
  }

  return moment.defineLocale('hr', {
      months : 'sječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split('_'),
      monthsShort : 'sje._vel._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split('_'),
      weekdays : 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
      weekdaysShort : 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
      weekdaysMin : 'ne_po_ut_sr_če_pe_su'.split('_'),
      longDateFormat : {
          LT : 'H:mm',
          LTS : 'LT:ss',
          L : 'DD. MM. YYYY',
          LL : 'D. MMMM YYYY',
          LLL : 'D. MMMM YYYY LT',
          LLLL : 'dddd, D. MMMM YYYY LT'
      },
      calendar : {
          sameDay  : '[danas u] LT',
          nextDay  : '[sutra u] LT',

          nextWeek : function () {
              switch (this.day()) {
              case 0:
                  return '[u] [nedjelju] [u] LT';
              case 3:
                  return '[u] [srijedu] [u] LT';
              case 6:
                  return '[u] [subotu] [u] LT';
              case 1:
              case 2:
              case 4:
              case 5:
                  return '[u] dddd [u] LT';
              }
          },
          lastDay  : '[jučer u] LT',
          lastWeek : function () {
              switch (this.day()) {
              case 0:
              case 3:
                  return '[prošlu] dddd [u] LT';
              case 6:
                  return '[prošle] [subote] [u] LT';
              case 1:
              case 2:
              case 4:
              case 5:
                  return '[prošli] dddd [u] LT';
              }
          },
          sameElse : 'L'
      },
      relativeTime : {
          future : 'za %s',
          past   : 'prije %s',
          s      : 'par sekundi',
          m      : translate,
          mm     : translate,
          h      : translate,
          hh     : translate,
          d      : 'dan',
          dd     : translate,
          M      : 'mjesec',
          MM     : translate,
          y      : 'godinu',
          yy     : translate
      },
      ordinalParse: /\d{1,2}\./,
      ordinal : '%d.',
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 7  // The week that contains Jan 1st is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : hungarian (hu)
// author : Adam Brunner : https://github.com/adambrunner

(function (factory) {
  factory(moment);
}(function (moment) {
  var weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');

  function translate(number, withoutSuffix, key, isFuture) {
      var num = number,
          suffix;

      switch (key) {
      case 's':
          return (isFuture || withoutSuffix) ? 'néhány másodperc' : 'néhány másodperce';
      case 'm':
          return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');
      case 'mm':
          return num + (isFuture || withoutSuffix ? ' perc' : ' perce');
      case 'h':
          return 'egy' + (isFuture || withoutSuffix ? ' óra' : ' órája');
      case 'hh':
          return num + (isFuture || withoutSuffix ? ' óra' : ' órája');
      case 'd':
          return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');
      case 'dd':
          return num + (isFuture || withoutSuffix ? ' nap' : ' napja');
      case 'M':
          return 'egy' + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
      case 'MM':
          return num + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
      case 'y':
          return 'egy' + (isFuture || withoutSuffix ? ' év' : ' éve');
      case 'yy':
          return num + (isFuture || withoutSuffix ? ' év' : ' éve');
      }

      return '';
  }

  function week(isFuture) {
      return (isFuture ? '' : '[múlt] ') + '[' + weekEndings[this.day()] + '] LT[-kor]';
  }

  return moment.defineLocale('hu', {
      months : 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
      monthsShort : 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
      weekdays : 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
      weekdaysShort : 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
      weekdaysMin : 'v_h_k_sze_cs_p_szo'.split('_'),
      longDateFormat : {
          LT : 'H:mm',
          LTS : 'LT:ss',
          L : 'YYYY.MM.DD.',
          LL : 'YYYY. MMMM D.',
          LLL : 'YYYY. MMMM D., LT',
          LLLL : 'YYYY. MMMM D., dddd LT'
      },
      meridiemParse: /de|du/i,
      isPM: function (input) {
          return input.charAt(1).toLowerCase() === 'u';
      },
      meridiem : function (hours, minutes, isLower) {
          if (hours < 12) {
              return isLower === true ? 'de' : 'DE';
          } else {
              return isLower === true ? 'du' : 'DU';
          }
      },
      calendar : {
          sameDay : '[ma] LT[-kor]',
          nextDay : '[holnap] LT[-kor]',
          nextWeek : function () {
              return week.call(this, true);
          },
          lastDay : '[tegnap] LT[-kor]',
          lastWeek : function () {
              return week.call(this, false);
          },
          sameElse : 'L'
      },
      relativeTime : {
          future : '%s múlva',
          past : '%s',
          s : translate,
          m : translate,
          mm : translate,
          h : translate,
          hh : translate,
          d : translate,
          dd : translate,
          M : translate,
          MM : translate,
          y : translate,
          yy : translate
      },
      ordinalParse: /\d{1,2}\./,
      ordinal : '%d.',
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 7  // The week that contains Jan 1st is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : Armenian (hy-am)
// author : Armendarabyan : https://github.com/armendarabyan

(function (factory) {
  factory(moment);
}(function (moment) {
  function monthsCaseReplace(m, format) {
      var months = {
          'nominative': 'հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր'.split('_'),
          'accusative': 'հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի'.split('_')
      },

      nounCase = (/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/).test(format) ?
          'accusative' :
          'nominative';

      return months[nounCase][m.month()];
  }

  function monthsShortCaseReplace(m, format) {
      var monthsShort = 'հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ'.split('_');

      return monthsShort[m.month()];
  }

  function weekdaysCaseReplace(m, format) {
      var weekdays = 'կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ'.split('_');

      return weekdays[m.day()];
  }

  return moment.defineLocale('hy-am', {
      months : monthsCaseReplace,
      monthsShort : monthsShortCaseReplace,
      weekdays : weekdaysCaseReplace,
      weekdaysShort : 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
      weekdaysMin : 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
      longDateFormat : {
          LT : 'HH:mm',
          LTS : 'LT:ss',
          L : 'DD.MM.YYYY',
          LL : 'D MMMM YYYY թ.',
          LLL : 'D MMMM YYYY թ., LT',
          LLLL : 'dddd, D MMMM YYYY թ., LT'
      },
      calendar : {
          sameDay: '[այսօր] LT',
          nextDay: '[վաղը] LT',
          lastDay: '[երեկ] LT',
          nextWeek: function () {
              return 'dddd [օրը ժամը] LT';
          },
          lastWeek: function () {
              return '[անցած] dddd [օրը ժամը] LT';
          },
          sameElse: 'L'
      },
      relativeTime : {
          future : '%s հետո',
          past : '%s առաջ',
          s : 'մի քանի վայրկյան',
          m : 'րոպե',
          mm : '%d րոպե',
          h : 'ժամ',
          hh : '%d ժամ',
          d : 'օր',
          dd : '%d օր',
          M : 'ամիս',
          MM : '%d ամիս',
          y : 'տարի',
          yy : '%d տարի'
      },

      meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
      isPM: function (input) {
          return /^(ցերեկվա|երեկոյան)$/.test(input);
      },
      meridiem : function (hour) {
          if (hour < 4) {
              return 'գիշերվա';
          } else if (hour < 12) {
              return 'առավոտվա';
          } else if (hour < 17) {
              return 'ցերեկվա';
          } else {
              return 'երեկոյան';
          }
      },

      ordinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
      ordinal: function (number, period) {
          switch (period) {
          case 'DDD':
          case 'w':
          case 'W':
          case 'DDDo':
              if (number === 1) {
                  return number + '-ին';
              }
              return number + '-րդ';
          default:
              return number;
          }
      },

      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 7  // The week that contains Jan 1st is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : Bahasa Indonesia (id)
// author : Mohammad Satrio Utomo : https://github.com/tyok
// reference: http://id.wikisource.org/wiki/Pedoman_Umum_Ejaan_Bahasa_Indonesia_yang_Disempurnakan

(function (factory) {
  factory(moment);
}(function (moment) {
  return moment.defineLocale('id', {
      months : 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
      monthsShort : 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des'.split('_'),
      weekdays : 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
      weekdaysShort : 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
      weekdaysMin : 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
      longDateFormat : {
          LT : 'HH.mm',
          LTS : 'LT.ss',
          L : 'DD/MM/YYYY',
          LL : 'D MMMM YYYY',
          LLL : 'D MMMM YYYY [pukul] LT',
          LLLL : 'dddd, D MMMM YYYY [pukul] LT'
      },
      meridiemParse: /pagi|siang|sore|malam/,
      meridiemHour : function (hour, meridiem) {
          if (hour === 12) {
              hour = 0;
          }
          if (meridiem === 'pagi') {
              return hour;
          } else if (meridiem === 'siang') {
              return hour >= 11 ? hour : hour + 12;
          } else if (meridiem === 'sore' || meridiem === 'malam') {
              return hour + 12;
          }
      },
      meridiem : function (hours, minutes, isLower) {
          if (hours < 11) {
              return 'pagi';
          } else if (hours < 15) {
              return 'siang';
          } else if (hours < 19) {
              return 'sore';
          } else {
              return 'malam';
          }
      },
      calendar : {
          sameDay : '[Hari ini pukul] LT',
          nextDay : '[Besok pukul] LT',
          nextWeek : 'dddd [pukul] LT',
          lastDay : '[Kemarin pukul] LT',
          lastWeek : 'dddd [lalu pukul] LT',
          sameElse : 'L'
      },
      relativeTime : {
          future : 'dalam %s',
          past : '%s yang lalu',
          s : 'beberapa detik',
          m : 'semenit',
          mm : '%d menit',
          h : 'sejam',
          hh : '%d jam',
          d : 'sehari',
          dd : '%d hari',
          M : 'sebulan',
          MM : '%d bulan',
          y : 'setahun',
          yy : '%d tahun'
      },
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 7  // The week that contains Jan 1st is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : icelandic (is)
// author : Hinrik Örn Sigurðsson : https://github.com/hinrik

(function (factory) {
  factory(moment);
}(function (moment) {
  function plural(n) {
      if (n % 100 === 11) {
          return true;
      } else if (n % 10 === 1) {
          return false;
      }
      return true;
  }

  function translate(number, withoutSuffix, key, isFuture) {
      var result = number + ' ';
      switch (key) {
      case 's':
          return withoutSuffix || isFuture ? 'nokkrar sekúndur' : 'nokkrum sekúndum';
      case 'm':
          return withoutSuffix ? 'mínúta' : 'mínútu';
      case 'mm':
          if (plural(number)) {
              return result + (withoutSuffix || isFuture ? 'mínútur' : 'mínútum');
          } else if (withoutSuffix) {
              return result + 'mínúta';
          }
          return result + 'mínútu';
      case 'hh':
          if (plural(number)) {
              return result + (withoutSuffix || isFuture ? 'klukkustundir' : 'klukkustundum');
          }
          return result + 'klukkustund';
      case 'd':
          if (withoutSuffix) {
              return 'dagur';
          }
          return isFuture ? 'dag' : 'degi';
      case 'dd':
          if (plural(number)) {
              if (withoutSuffix) {
                  return result + 'dagar';
              }
              return result + (isFuture ? 'daga' : 'dögum');
          } else if (withoutSuffix) {
              return result + 'dagur';
          }
          return result + (isFuture ? 'dag' : 'degi');
      case 'M':
          if (withoutSuffix) {
              return 'mánuður';
          }
          return isFuture ? 'mánuð' : 'mánuði';
      case 'MM':
          if (plural(number)) {
              if (withoutSuffix) {
                  return result + 'mánuðir';
              }
              return result + (isFuture ? 'mánuði' : 'mánuðum');
          } else if (withoutSuffix) {
              return result + 'mánuður';
          }
          return result + (isFuture ? 'mánuð' : 'mánuði');
      case 'y':
          return withoutSuffix || isFuture ? 'ár' : 'ári';
      case 'yy':
          if (plural(number)) {
              return result + (withoutSuffix || isFuture ? 'ár' : 'árum');
          }
          return result + (withoutSuffix || isFuture ? 'ár' : 'ári');
      }
  }

  return moment.defineLocale('is', {
      months : 'janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember'.split('_'),
      monthsShort : 'jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des'.split('_'),
      weekdays : 'sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur'.split('_'),
      weekdaysShort : 'sun_mán_þri_mið_fim_fös_lau'.split('_'),
      weekdaysMin : 'Su_Má_Þr_Mi_Fi_Fö_La'.split('_'),
      longDateFormat : {
          LT : 'H:mm',
          LTS : 'LT:ss',
          L : 'DD/MM/YYYY',
          LL : 'D. MMMM YYYY',
          LLL : 'D. MMMM YYYY [kl.] LT',
          LLLL : 'dddd, D. MMMM YYYY [kl.] LT'
      },
      calendar : {
          sameDay : '[í dag kl.] LT',
          nextDay : '[á morgun kl.] LT',
          nextWeek : 'dddd [kl.] LT',
          lastDay : '[í gær kl.] LT',
          lastWeek : '[síðasta] dddd [kl.] LT',
          sameElse : 'L'
      },
      relativeTime : {
          future : 'eftir %s',
          past : 'fyrir %s síðan',
          s : translate,
          m : translate,
          mm : translate,
          h : 'klukkustund',
          hh : translate,
          d : translate,
          dd : translate,
          M : translate,
          MM : translate,
          y : translate,
          yy : translate
      },
      ordinalParse: /\d{1,2}\./,
      ordinal : '%d.',
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 4  // The week that contains Jan 4th is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : italian (it)
// author : Lorenzo : https://github.com/aliem
// author: Mattia Larentis: https://github.com/nostalgiaz

(function (factory) {
  factory(moment);
}(function (moment) {
  return moment.defineLocale('it', {
      months : 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
      monthsShort : 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
      weekdays : 'Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato'.split('_'),
      weekdaysShort : 'Dom_Lun_Mar_Mer_Gio_Ven_Sab'.split('_'),
      weekdaysMin : 'D_L_Ma_Me_G_V_S'.split('_'),
      longDateFormat : {
          LT : 'HH:mm',
          LTS : 'LT:ss',
          L : 'DD/MM/YYYY',
          LL : 'D MMMM YYYY',
          LLL : 'D MMMM YYYY LT',
          LLLL : 'dddd, D MMMM YYYY LT'
      },
      calendar : {
          sameDay: '[Oggi alle] LT',
          nextDay: '[Domani alle] LT',
          nextWeek: 'dddd [alle] LT',
          lastDay: '[Ieri alle] LT',
          lastWeek: function () {
              switch (this.day()) {
                  case 0:
                      return '[la scorsa] dddd [alle] LT';
                  default:
                      return '[lo scorso] dddd [alle] LT';
              }
          },
          sameElse: 'L'
      },
      relativeTime : {
          future : function (s) {
              return ((/^[0-9].+$/).test(s) ? 'tra' : 'in') + ' ' + s;
          },
          past : '%s fa',
          s : 'alcuni secondi',
          m : 'un minuto',
          mm : '%d minuti',
          h : 'un\'ora',
          hh : '%d ore',
          d : 'un giorno',
          dd : '%d giorni',
          M : 'un mese',
          MM : '%d mesi',
          y : 'un anno',
          yy : '%d anni'
      },
      ordinalParse : /\d{1,2}º/,
      ordinal: '%dº',
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 4  // The week that contains Jan 4th is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : japanese (ja)
// author : LI Long : https://github.com/baryon

(function (factory) {
  factory(moment);
}(function (moment) {
  return moment.defineLocale('ja', {
      months : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
      monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
      weekdays : '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
      weekdaysShort : '日_月_火_水_木_金_土'.split('_'),
      weekdaysMin : '日_月_火_水_木_金_土'.split('_'),
      longDateFormat : {
          LT : 'Ah時m分',
          LTS : 'LTs秒',
          L : 'YYYY/MM/DD',
          LL : 'YYYY年M月D日',
          LLL : 'YYYY年M月D日LT',
          LLLL : 'YYYY年M月D日LT dddd'
      },
      meridiemParse: /午前|午後/i,
      isPM : function (input) {
          return input === '午後';
      },
      meridiem : function (hour, minute, isLower) {
          if (hour < 12) {
              return '午前';
          } else {
              return '午後';
          }
      },
      calendar : {
          sameDay : '[今日] LT',
          nextDay : '[明日] LT',
          nextWeek : '[来週]dddd LT',
          lastDay : '[昨日] LT',
          lastWeek : '[前週]dddd LT',
          sameElse : 'L'
      },
      relativeTime : {
          future : '%s後',
          past : '%s前',
          s : '数秒',
          m : '1分',
          mm : '%d分',
          h : '1時間',
          hh : '%d時間',
          d : '1日',
          dd : '%d日',
          M : '1ヶ月',
          MM : '%dヶ月',
          y : '1年',
          yy : '%d年'
      }
  });
}));
// moment.js locale configuration
// locale : Georgian (ka)
// author : Irakli Janiashvili : https://github.com/irakli-janiashvili

(function (factory) {
  factory(moment);
}(function (moment) {
  function monthsCaseReplace(m, format) {
      var months = {
          'nominative': 'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split('_'),
          'accusative': 'იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს'.split('_')
      },

      nounCase = (/D[oD] *MMMM?/).test(format) ?
          'accusative' :
          'nominative';

      return months[nounCase][m.month()];
  }

  function weekdaysCaseReplace(m, format) {
      var weekdays = {
          'nominative': 'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split('_'),
          'accusative': 'კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს'.split('_')
      },

      nounCase = (/(წინა|შემდეგ)/).test(format) ?
          'accusative' :
          'nominative';

      return weekdays[nounCase][m.day()];
  }

  return moment.defineLocale('ka', {
      months : monthsCaseReplace,
      monthsShort : 'იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ'.split('_'),
      weekdays : weekdaysCaseReplace,
      weekdaysShort : 'კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ'.split('_'),
      weekdaysMin : 'კვ_ორ_სა_ოთ_ხუ_პა_შა'.split('_'),
      longDateFormat : {
          LT : 'h:mm A',
          LTS : 'h:mm:ss A',
          L : 'DD/MM/YYYY',
          LL : 'D MMMM YYYY',
          LLL : 'D MMMM YYYY LT',
          LLLL : 'dddd, D MMMM YYYY LT'
      },
      calendar : {
          sameDay : '[დღეს] LT[-ზე]',
          nextDay : '[ხვალ] LT[-ზე]',
          lastDay : '[გუშინ] LT[-ზე]',
          nextWeek : '[შემდეგ] dddd LT[-ზე]',
          lastWeek : '[წინა] dddd LT-ზე',
          sameElse : 'L'
      },
      relativeTime : {
          future : function (s) {
              return (/(წამი|წუთი|საათი|წელი)/).test(s) ?
                  s.replace(/ი$/, 'ში') :
                  s + 'ში';
          },
          past : function (s) {
              if ((/(წამი|წუთი|საათი|დღე|თვე)/).test(s)) {
                  return s.replace(/(ი|ე)$/, 'ის წინ');
              }
              if ((/წელი/).test(s)) {
                  return s.replace(/წელი$/, 'წლის წინ');
              }
          },
          s : 'რამდენიმე წამი',
          m : 'წუთი',
          mm : '%d წუთი',
          h : 'საათი',
          hh : '%d საათი',
          d : 'დღე',
          dd : '%d დღე',
          M : 'თვე',
          MM : '%d თვე',
          y : 'წელი',
          yy : '%d წელი'
      },
      ordinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
      ordinal : function (number) {
          if (number === 0) {
              return number;
          }

          if (number === 1) {
              return number + '-ლი';
          }

          if ((number < 20) || (number <= 100 && (number % 20 === 0)) || (number % 100 === 0)) {
              return 'მე-' + number;
          }

          return number + '-ე';
      },
      week : {
          dow : 1,
          doy : 7
      }
  });
}));
// moment.js locale configuration
// locale : khmer (km)
// author : Kruy Vanna : https://github.com/kruyvanna

(function (factory) {
  factory(moment);
}(function (moment) {
  return moment.defineLocale('km', {
      months: 'មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
      monthsShort: 'មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
      weekdays: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
      weekdaysShort: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
      weekdaysMin: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
      longDateFormat: {
          LT: 'HH:mm',
          LTS : 'LT:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY LT',
          LLLL: 'dddd, D MMMM YYYY LT'
      },
      calendar: {
          sameDay: '[ថ្ងៃនៈ ម៉ោង] LT',
          nextDay: '[ស្អែក ម៉ោង] LT',
          nextWeek: 'dddd [ម៉ោង] LT',
          lastDay: '[ម្សិលមិញ ម៉ោង] LT',
          lastWeek: 'dddd [សប្តាហ៍មុន] [ម៉ោង] LT',
          sameElse: 'L'
      },
      relativeTime: {
          future: '%sទៀត',
          past: '%sមុន',
          s: 'ប៉ុន្មានវិនាទី',
          m: 'មួយនាទី',
          mm: '%d នាទី',
          h: 'មួយម៉ោង',
          hh: '%d ម៉ោង',
          d: 'មួយថ្ងៃ',
          dd: '%d ថ្ងៃ',
          M: 'មួយខែ',
          MM: '%d ខែ',
          y: 'មួយឆ្នាំ',
          yy: '%d ឆ្នាំ'
      },
      week: {
          dow: 1, // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : korean (ko)
//
// authors
//
// - Kyungwook, Park : https://github.com/kyungw00k
// - Jeeeyul Lee <jeeeyul@gmail.com>
(function (factory) {
  factory(moment);
}(function (moment) {
  return moment.defineLocale('ko', {
      months : '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
      monthsShort : '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
      weekdays : '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
      weekdaysShort : '일_월_화_수_목_금_토'.split('_'),
      weekdaysMin : '일_월_화_수_목_금_토'.split('_'),
      longDateFormat : {
          LT : 'A h시 m분',
          LTS : 'A h시 m분 s초',
          L : 'YYYY.MM.DD',
          LL : 'YYYY년 MMMM D일',
          LLL : 'YYYY년 MMMM D일 LT',
          LLLL : 'YYYY년 MMMM D일 dddd LT'
      },
      calendar : {
          sameDay : '오늘 LT',
          nextDay : '내일 LT',
          nextWeek : 'dddd LT',
          lastDay : '어제 LT',
          lastWeek : '지난주 dddd LT',
          sameElse : 'L'
      },
      relativeTime : {
          future : '%s 후',
          past : '%s 전',
          s : '몇초',
          ss : '%d초',
          m : '일분',
          mm : '%d분',
          h : '한시간',
          hh : '%d시간',
          d : '하루',
          dd : '%d일',
          M : '한달',
          MM : '%d달',
          y : '일년',
          yy : '%d년'
      },
      ordinalParse : /\d{1,2}일/,
      ordinal : '%d일',
      meridiemParse : /오전|오후/,
      isPM : function (token) {
          return token === '오후';
      },
      meridiem : function (hour, minute, isUpper) {
          return hour < 12 ? '오전' : '오후';
      }
  });
}));
// moment.js locale configuration
// locale : Luxembourgish (lb)
// author : mweimerskirch : https://github.com/mweimerskirch, David Raison : https://github.com/kwisatz

// Note: Luxembourgish has a very particular phonological rule ('Eifeler Regel') that causes the
// deletion of the final 'n' in certain contexts. That's what the 'eifelerRegelAppliesToWeekday'
// and 'eifelerRegelAppliesToNumber' methods are meant for

(function (factory) {
  factory(moment);
}(function (moment) {
  function processRelativeTime(number, withoutSuffix, key, isFuture) {
      var format = {
          'm': ['eng Minutt', 'enger Minutt'],
          'h': ['eng Stonn', 'enger Stonn'],
          'd': ['een Dag', 'engem Dag'],
          'M': ['ee Mount', 'engem Mount'],
          'y': ['ee Joer', 'engem Joer']
      };
      return withoutSuffix ? format[key][0] : format[key][1];
  }

  function processFutureTime(string) {
      var number = string.substr(0, string.indexOf(' '));
      if (eifelerRegelAppliesToNumber(number)) {
          return 'a ' + string;
      }
      return 'an ' + string;
  }

  function processPastTime(string) {
      var number = string.substr(0, string.indexOf(' '));
      if (eifelerRegelAppliesToNumber(number)) {
          return 'viru ' + string;
      }
      return 'virun ' + string;
  }

  /**
   * Returns true if the word before the given number loses the '-n' ending.
   * e.g. 'an 10 Deeg' but 'a 5 Deeg'
   *
   * @param number {integer}
   * @returns {boolean}
   */
  function eifelerRegelAppliesToNumber(number) {
      number = parseInt(number, 10);
      if (isNaN(number)) {
          return false;
      }
      if (number < 0) {
          // Negative Number --> always true
          return true;
      } else if (number < 10) {
          // Only 1 digit
          if (4 <= number && number <= 7) {
              return true;
          }
          return false;
      } else if (number < 100) {
          // 2 digits
          var lastDigit = number % 10, firstDigit = number / 10;
          if (lastDigit === 0) {
              return eifelerRegelAppliesToNumber(firstDigit);
          }
          return eifelerRegelAppliesToNumber(lastDigit);
      } else if (number < 10000) {
          // 3 or 4 digits --> recursively check first digit
          while (number >= 10) {
              number = number / 10;
          }
          return eifelerRegelAppliesToNumber(number);
      } else {
          // Anything larger than 4 digits: recursively check first n-3 digits
          number = number / 1000;
          return eifelerRegelAppliesToNumber(number);
      }
  }

  return moment.defineLocale('lb', {
      months: 'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
      monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
      weekdays: 'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg'.split('_'),
      weekdaysShort: 'So._Mé._Dë._Më._Do._Fr._Sa.'.split('_'),
      weekdaysMin: 'So_Mé_Dë_Më_Do_Fr_Sa'.split('_'),
      longDateFormat: {
          LT: 'H:mm [Auer]',
          LTS: 'H:mm:ss [Auer]',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY LT',
          LLLL: 'dddd, D. MMMM YYYY LT'
      },
      calendar: {
          sameDay: '[Haut um] LT',
          sameElse: 'L',
          nextDay: '[Muer um] LT',
          nextWeek: 'dddd [um] LT',
          lastDay: '[Gëschter um] LT',
          lastWeek: function () {
              // Different date string for 'Dënschdeg' (Tuesday) and 'Donneschdeg' (Thursday) due to phonological rule
              switch (this.day()) {
                  case 2:
                  case 4:
                      return '[Leschten] dddd [um] LT';
                  default:
                      return '[Leschte] dddd [um] LT';
              }
          }
      },
      relativeTime : {
          future : processFutureTime,
          past : processPastTime,
          s : 'e puer Sekonnen',
          m : processRelativeTime,
          mm : '%d Minutten',
          h : processRelativeTime,
          hh : '%d Stonnen',
          d : processRelativeTime,
          dd : '%d Deeg',
          M : processRelativeTime,
          MM : '%d Méint',
          y : processRelativeTime,
          yy : '%d Joer'
      },
      ordinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: {
          dow: 1, // Monday is the first day of the week.
          doy: 4  // The week that contains Jan 4th is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : Lithuanian (lt)
// author : Mindaugas Mozūras : https://github.com/mmozuras

(function (factory) {
  factory(moment);
}(function (moment) {
  var units = {
      'm' : 'minutė_minutės_minutę',
      'mm': 'minutės_minučių_minutes',
      'h' : 'valanda_valandos_valandą',
      'hh': 'valandos_valandų_valandas',
      'd' : 'diena_dienos_dieną',
      'dd': 'dienos_dienų_dienas',
      'M' : 'mėnuo_mėnesio_mėnesį',
      'MM': 'mėnesiai_mėnesių_mėnesius',
      'y' : 'metai_metų_metus',
      'yy': 'metai_metų_metus'
  },
  weekDays = 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split('_');

  function translateSeconds(number, withoutSuffix, key, isFuture) {
      if (withoutSuffix) {
          return 'kelios sekundės';
      } else {
          return isFuture ? 'kelių sekundžių' : 'kelias sekundes';
      }
  }

  function translateSingular(number, withoutSuffix, key, isFuture) {
      return withoutSuffix ? forms(key)[0] : (isFuture ? forms(key)[1] : forms(key)[2]);
  }

  function special(number) {
      return number % 10 === 0 || (number > 10 && number < 20);
  }

  function forms(key) {
      return units[key].split('_');
  }

  function translate(number, withoutSuffix, key, isFuture) {
      var result = number + ' ';
      if (number === 1) {
          return result + translateSingular(number, withoutSuffix, key[0], isFuture);
      } else if (withoutSuffix) {
          return result + (special(number) ? forms(key)[1] : forms(key)[0]);
      } else {
          if (isFuture) {
              return result + forms(key)[1];
          } else {
              return result + (special(number) ? forms(key)[1] : forms(key)[2]);
          }
      }
  }

  function relativeWeekDay(moment, format) {
      var nominative = format.indexOf('dddd HH:mm') === -1,
          weekDay = weekDays[moment.day()];

      return nominative ? weekDay : weekDay.substring(0, weekDay.length - 2) + 'į';
  }

  return moment.defineLocale('lt', {
      months : 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_'),
      monthsShort : 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
      weekdays : relativeWeekDay,
      weekdaysShort : 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
      weekdaysMin : 'S_P_A_T_K_Pn_Š'.split('_'),
      longDateFormat : {
          LT : 'HH:mm',
          LTS : 'LT:ss',
          L : 'YYYY-MM-DD',
          LL : 'YYYY [m.] MMMM D [d.]',
          LLL : 'YYYY [m.] MMMM D [d.], LT [val.]',
          LLLL : 'YYYY [m.] MMMM D [d.], dddd, LT [val.]',
          l : 'YYYY-MM-DD',
          ll : 'YYYY [m.] MMMM D [d.]',
          lll : 'YYYY [m.] MMMM D [d.], LT [val.]',
          llll : 'YYYY [m.] MMMM D [d.], ddd, LT [val.]'
      },
      calendar : {
          sameDay : '[Šiandien] LT',
          nextDay : '[Rytoj] LT',
          nextWeek : 'dddd LT',
          lastDay : '[Vakar] LT',
          lastWeek : '[Praėjusį] dddd LT',
          sameElse : 'L'
      },
      relativeTime : {
          future : 'po %s',
          past : 'prieš %s',
          s : translateSeconds,
          m : translateSingular,
          mm : translate,
          h : translateSingular,
          hh : translate,
          d : translateSingular,
          dd : translate,
          M : translateSingular,
          MM : translate,
          y : translateSingular,
          yy : translate
      },
      ordinalParse: /\d{1,2}-oji/,
      ordinal : function (number) {
          return number + '-oji';
      },
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 4  // The week that contains Jan 4th is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : latvian (lv)
// author : Kristaps Karlsons : https://github.com/skakri

(function (factory) {
  factory(moment);
}(function (moment) {
  var units = {
      'mm': 'minūti_minūtes_minūte_minūtes',
      'hh': 'stundu_stundas_stunda_stundas',
      'dd': 'dienu_dienas_diena_dienas',
      'MM': 'mēnesi_mēnešus_mēnesis_mēneši',
      'yy': 'gadu_gadus_gads_gadi'
  };

  function format(word, number, withoutSuffix) {
      var forms = word.split('_');
      if (withoutSuffix) {
          return number % 10 === 1 && number !== 11 ? forms[2] : forms[3];
      } else {
          return number % 10 === 1 && number !== 11 ? forms[0] : forms[1];
      }
  }

  function relativeTimeWithPlural(number, withoutSuffix, key) {
      return number + ' ' + format(units[key], number, withoutSuffix);
  }

  return moment.defineLocale('lv', {
      months : 'janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris'.split('_'),
      monthsShort : 'jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec'.split('_'),
      weekdays : 'svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena'.split('_'),
      weekdaysShort : 'Sv_P_O_T_C_Pk_S'.split('_'),
      weekdaysMin : 'Sv_P_O_T_C_Pk_S'.split('_'),
      longDateFormat : {
          LT : 'HH:mm',
          LTS : 'LT:ss',
          L : 'DD.MM.YYYY',
          LL : 'YYYY. [gada] D. MMMM',
          LLL : 'YYYY. [gada] D. MMMM, LT',
          LLLL : 'YYYY. [gada] D. MMMM, dddd, LT'
      },
      calendar : {
          sameDay : '[Šodien pulksten] LT',
          nextDay : '[Rīt pulksten] LT',
          nextWeek : 'dddd [pulksten] LT',
          lastDay : '[Vakar pulksten] LT',
          lastWeek : '[Pagājušā] dddd [pulksten] LT',
          sameElse : 'L'
      },
      relativeTime : {
          future : '%s vēlāk',
          past : '%s agrāk',
          s : 'dažas sekundes',
          m : 'minūti',
          mm : relativeTimeWithPlural,
          h : 'stundu',
          hh : relativeTimeWithPlural,
          d : 'dienu',
          dd : relativeTimeWithPlural,
          M : 'mēnesi',
          MM : relativeTimeWithPlural,
          y : 'gadu',
          yy : relativeTimeWithPlural
      },
      ordinalParse: /\d{1,2}\./,
      ordinal : '%d.',
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 4  // The week that contains Jan 4th is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : macedonian (mk)
// author : Borislav Mickov : https://github.com/B0k0

(function (factory) {
  factory(moment);
}(function (moment) {
  return moment.defineLocale('mk', {
      months : 'јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември'.split('_'),
      monthsShort : 'јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек'.split('_'),
      weekdays : 'недела_понеделник_вторник_среда_четврток_петок_сабота'.split('_'),
      weekdaysShort : 'нед_пон_вто_сре_чет_пет_саб'.split('_'),
      weekdaysMin : 'нe_пo_вт_ср_че_пе_сa'.split('_'),
      longDateFormat : {
          LT : 'H:mm',
          LTS : 'LT:ss',
          L : 'D.MM.YYYY',
          LL : 'D MMMM YYYY',
          LLL : 'D MMMM YYYY LT',
          LLLL : 'dddd, D MMMM YYYY LT'
      },
      calendar : {
          sameDay : '[Денес во] LT',
          nextDay : '[Утре во] LT',
          nextWeek : 'dddd [во] LT',
          lastDay : '[Вчера во] LT',
          lastWeek : function () {
              switch (this.day()) {
              case 0:
              case 3:
              case 6:
                  return '[Во изминатата] dddd [во] LT';
              case 1:
              case 2:
              case 4:
              case 5:
                  return '[Во изминатиот] dddd [во] LT';
              }
          },
          sameElse : 'L'
      },
      relativeTime : {
          future : 'после %s',
          past : 'пред %s',
          s : 'неколку секунди',
          m : 'минута',
          mm : '%d минути',
          h : 'час',
          hh : '%d часа',
          d : 'ден',
          dd : '%d дена',
          M : 'месец',
          MM : '%d месеци',
          y : 'година',
          yy : '%d години'
      },
      ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
      ordinal : function (number) {
          var lastDigit = number % 10,
              last2Digits = number % 100;
          if (number === 0) {
              return number + '-ев';
          } else if (last2Digits === 0) {
              return number + '-ен';
          } else if (last2Digits > 10 && last2Digits < 20) {
              return number + '-ти';
          } else if (lastDigit === 1) {
              return number + '-ви';
          } else if (lastDigit === 2) {
              return number + '-ри';
          } else if (lastDigit === 7 || lastDigit === 8) {
              return number + '-ми';
          } else {
              return number + '-ти';
          }
      },
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 7  // The week that contains Jan 1st is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : malayalam (ml)
// author : Floyd Pink : https://github.com/floydpink

(function (factory) {
  factory(moment);
}(function (moment) {
  return moment.defineLocale('ml', {
      months : 'ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ'.split('_'),
      monthsShort : 'ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.'.split('_'),
      weekdays : 'ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച'.split('_'),
      weekdaysShort : 'ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി'.split('_'),
      weekdaysMin : 'ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ'.split('_'),
      longDateFormat : {
          LT : 'A h:mm -നു',
          LTS : 'A h:mm:ss -നു',
          L : 'DD/MM/YYYY',
          LL : 'D MMMM YYYY',
          LLL : 'D MMMM YYYY, LT',
          LLLL : 'dddd, D MMMM YYYY, LT'
      },
      calendar : {
          sameDay : '[ഇന്ന്] LT',
          nextDay : '[നാളെ] LT',
          nextWeek : 'dddd, LT',
          lastDay : '[ഇന്നലെ] LT',
          lastWeek : '[കഴിഞ്ഞ] dddd, LT',
          sameElse : 'L'
      },
      relativeTime : {
          future : '%s കഴിഞ്ഞ്',
          past : '%s മുൻപ്',
          s : 'അൽപ നിമിഷങ്ങൾ',
          m : 'ഒരു മിനിറ്റ്',
          mm : '%d മിനിറ്റ്',
          h : 'ഒരു മണിക്കൂർ',
          hh : '%d മണിക്കൂർ',
          d : 'ഒരു ദിവസം',
          dd : '%d ദിവസം',
          M : 'ഒരു മാസം',
          MM : '%d മാസം',
          y : 'ഒരു വർഷം',
          yy : '%d വർഷം'
      },
      meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
      isPM : function (input) {
          return /^(ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി)$/.test(input);
      },
      meridiem : function (hour, minute, isLower) {
          if (hour < 4) {
              return 'രാത്രി';
          } else if (hour < 12) {
              return 'രാവിലെ';
          } else if (hour < 17) {
              return 'ഉച്ച കഴിഞ്ഞ്';
          } else if (hour < 20) {
              return 'വൈകുന്നേരം';
          } else {
              return 'രാത്രി';
          }
      }
  });
}));
// moment.js locale configuration
// locale : Marathi (mr)
// author : Harshad Kale : https://github.com/kalehv

(function (factory) {
  factory(moment);
}(function (moment) {
  var symbolMap = {
      '1': '१',
      '2': '२',
      '3': '३',
      '4': '४',
      '5': '५',
      '6': '६',
      '7': '७',
      '8': '८',
      '9': '९',
      '0': '०'
  },
  numberMap = {
      '१': '1',
      '२': '2',
      '३': '3',
      '४': '4',
      '५': '5',
      '६': '6',
      '७': '7',
      '८': '8',
      '९': '9',
      '०': '0'
  };

  return moment.defineLocale('mr', {
      months : 'जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split('_'),
      monthsShort: 'जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split('_'),
      weekdays : 'रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
      weekdaysShort : 'रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि'.split('_'),
      weekdaysMin : 'र_सो_मं_बु_गु_शु_श'.split('_'),
      longDateFormat : {
          LT : 'A h:mm वाजता',
          LTS : 'A h:mm:ss वाजता',
          L : 'DD/MM/YYYY',
          LL : 'D MMMM YYYY',
          LLL : 'D MMMM YYYY, LT',
          LLLL : 'dddd, D MMMM YYYY, LT'
      },
      calendar : {
          sameDay : '[आज] LT',
          nextDay : '[उद्या] LT',
          nextWeek : 'dddd, LT',
          lastDay : '[काल] LT',
          lastWeek: '[मागील] dddd, LT',
          sameElse : 'L'
      },
      relativeTime : {
          future : '%s नंतर',
          past : '%s पूर्वी',
          s : 'सेकंद',
          m: 'एक मिनिट',
          mm: '%d मिनिटे',
          h : 'एक तास',
          hh : '%d तास',
          d : 'एक दिवस',
          dd : '%d दिवस',
          M : 'एक महिना',
          MM : '%d महिने',
          y : 'एक वर्ष',
          yy : '%d वर्षे'
      },
      preparse: function (string) {
          return string.replace(/[१२३४५६७८९०]/g, function (match) {
              return numberMap[match];
          });
      },
      postformat: function (string) {
          return string.replace(/\d/g, function (match) {
              return symbolMap[match];
          });
      },
      meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
      meridiemHour : function (hour, meridiem) {
          if (hour === 12) {
              hour = 0;
          }
          if (meridiem === 'रात्री') {
              return hour < 4 ? hour : hour + 12;
          } else if (meridiem === 'सकाळी') {
              return hour;
          } else if (meridiem === 'दुपारी') {
              return hour >= 10 ? hour : hour + 12;
          } else if (meridiem === 'सायंकाळी') {
              return hour + 12;
          }
      },
      meridiem: function (hour, minute, isLower)
      {
          if (hour < 4) {
              return 'रात्री';
          } else if (hour < 10) {
              return 'सकाळी';
          } else if (hour < 17) {
              return 'दुपारी';
          } else if (hour < 20) {
              return 'सायंकाळी';
          } else {
              return 'रात्री';
          }
      },
      week : {
          dow : 0, // Sunday is the first day of the week.
          doy : 6  // The week that contains Jan 1st is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : Bahasa Malaysia (ms-MY)
// author : Weldan Jamili : https://github.com/weldan

(function (factory) {
  factory(moment);
}(function (moment) {
  return moment.defineLocale('ms-my', {
      months : 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
      monthsShort : 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
      weekdays : 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
      weekdaysShort : 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
      weekdaysMin : 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
      longDateFormat : {
          LT : 'HH.mm',
          LTS : 'LT.ss',
          L : 'DD/MM/YYYY',
          LL : 'D MMMM YYYY',
          LLL : 'D MMMM YYYY [pukul] LT',
          LLLL : 'dddd, D MMMM YYYY [pukul] LT'
      },
      meridiemParse: /pagi|tengahari|petang|malam/,
      meridiemHour: function (hour, meridiem) {
          if (hour === 12) {
              hour = 0;
          }
          if (meridiem === 'pagi') {
              return hour;
          } else if (meridiem === 'tengahari') {
              return hour >= 11 ? hour : hour + 12;
          } else if (meridiem === 'petang' || meridiem === 'malam') {
              return hour + 12;
          }
      },
      meridiem : function (hours, minutes, isLower) {
          if (hours < 11) {
              return 'pagi';
          } else if (hours < 15) {
              return 'tengahari';
          } else if (hours < 19) {
              return 'petang';
          } else {
              return 'malam';
          }
      },
      calendar : {
          sameDay : '[Hari ini pukul] LT',
          nextDay : '[Esok pukul] LT',
          nextWeek : 'dddd [pukul] LT',
          lastDay : '[Kelmarin pukul] LT',
          lastWeek : 'dddd [lepas pukul] LT',
          sameElse : 'L'
      },
      relativeTime : {
          future : 'dalam %s',
          past : '%s yang lepas',
          s : 'beberapa saat',
          m : 'seminit',
          mm : '%d minit',
          h : 'sejam',
          hh : '%d jam',
          d : 'sehari',
          dd : '%d hari',
          M : 'sebulan',
          MM : '%d bulan',
          y : 'setahun',
          yy : '%d tahun'
      },
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 7  // The week that contains Jan 1st is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : Burmese (my)
// author : Squar team, mysquar.com

(function (factory) {
  factory(moment);
}(function (moment) {
  var symbolMap = {
      '1': '၁',
      '2': '၂',
      '3': '၃',
      '4': '၄',
      '5': '၅',
      '6': '၆',
      '7': '၇',
      '8': '၈',
      '9': '၉',
      '0': '၀'
  }, numberMap = {
      '၁': '1',
      '၂': '2',
      '၃': '3',
      '၄': '4',
      '၅': '5',
      '၆': '6',
      '၇': '7',
      '၈': '8',
      '၉': '9',
      '၀': '0'
  };
  return moment.defineLocale('my', {
      months: 'ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ'.split('_'),
      monthsShort: 'ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ'.split('_'),
      weekdays: 'တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ'.split('_'),
      weekdaysShort: 'နွေ_လာ_င်္ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
      weekdaysMin: 'နွေ_လာ_င်္ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
      longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY LT',
          LLLL: 'dddd D MMMM YYYY LT'
      },
      calendar: {
          sameDay: '[ယနေ.] LT [မှာ]',
          nextDay: '[မနက်ဖြန်] LT [မှာ]',
          nextWeek: 'dddd LT [မှာ]',
          lastDay: '[မနေ.က] LT [မှာ]',
          lastWeek: '[ပြီးခဲ့သော] dddd LT [မှာ]',
          sameElse: 'L'
      },
      relativeTime: {
          future: 'လာမည့် %s မှာ',
          past: 'လွန်ခဲ့သော %s က',
          s: 'စက္ကန်.အနည်းငယ်',
          m: 'တစ်မိနစ်',
          mm: '%d မိနစ်',
          h: 'တစ်နာရီ',
          hh: '%d နာရီ',
          d: 'တစ်ရက်',
          dd: '%d ရက်',
          M: 'တစ်လ',
          MM: '%d လ',
          y: 'တစ်နှစ်',
          yy: '%d နှစ်'
      },
      preparse: function (string) {
          return string.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (match) {
              return numberMap[match];
          });
      },
      postformat: function (string) {
          return string.replace(/\d/g, function (match) {
              return symbolMap[match];
          });
      },
      week: {
          dow: 1, // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 1st is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : norwegian bokmål (nb)
// authors : Espen Hovlandsdal : https://github.com/rexxars
//           Sigurd Gartmann : https://github.com/sigurdga

(function (factory) {
  factory(moment);
}(function (moment) {
  return moment.defineLocale('nb', {
      months : 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
      monthsShort : 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
      weekdays : 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
      weekdaysShort : 'søn_man_tirs_ons_tors_fre_lør'.split('_'),
      weekdaysMin : 'sø_ma_ti_on_to_fr_lø'.split('_'),
      longDateFormat : {
          LT : 'H.mm',
          LTS : 'LT.ss',
          L : 'DD.MM.YYYY',
          LL : 'D. MMMM YYYY',
          LLL : 'D. MMMM YYYY [kl.] LT',
          LLLL : 'dddd D. MMMM YYYY [kl.] LT'
      },
      calendar : {
          sameDay: '[i dag kl.] LT',
          nextDay: '[i morgen kl.] LT',
          nextWeek: 'dddd [kl.] LT',
          lastDay: '[i går kl.] LT',
          lastWeek: '[forrige] dddd [kl.] LT',
          sameElse: 'L'
      },
      relativeTime : {
          future : 'om %s',
          past : 'for %s siden',
          s : 'noen sekunder',
          m : 'ett minutt',
          mm : '%d minutter',
          h : 'en time',
          hh : '%d timer',
          d : 'en dag',
          dd : '%d dager',
          M : 'en måned',
          MM : '%d måneder',
          y : 'ett år',
          yy : '%d år'
      },
      ordinalParse: /\d{1,2}\./,
      ordinal : '%d.',
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 4  // The week that contains Jan 4th is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : nepali/nepalese
// author : suvash : https://github.com/suvash

(function (factory) {
  factory(moment);
}(function (moment) {
  var symbolMap = {
      '1': '१',
      '2': '२',
      '3': '३',
      '4': '४',
      '5': '५',
      '6': '६',
      '7': '७',
      '8': '८',
      '9': '९',
      '0': '०'
  },
  numberMap = {
      '१': '1',
      '२': '2',
      '३': '3',
      '४': '4',
      '५': '5',
      '६': '6',
      '७': '7',
      '८': '8',
      '९': '9',
      '०': '0'
  };

  return moment.defineLocale('ne', {
      months : 'जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर'.split('_'),
      monthsShort : 'जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.'.split('_'),
      weekdays : 'आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार'.split('_'),
      weekdaysShort : 'आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.'.split('_'),
      weekdaysMin : 'आइ._सो._मङ्_बु._बि._शु._श.'.split('_'),
      longDateFormat : {
          LT : 'Aको h:mm बजे',
          LTS : 'Aको h:mm:ss बजे',
          L : 'DD/MM/YYYY',
          LL : 'D MMMM YYYY',
          LLL : 'D MMMM YYYY, LT',
          LLLL : 'dddd, D MMMM YYYY, LT'
      },
      preparse: function (string) {
          return string.replace(/[१२३४५६७८९०]/g, function (match) {
              return numberMap[match];
          });
      },
      postformat: function (string) {
          return string.replace(/\d/g, function (match) {
              return symbolMap[match];
          });
      },
      meridiemParse: /राती|बिहान|दिउँसो|बेलुका|साँझ|राती/,
      meridiemHour : function (hour, meridiem) {
          if (hour === 12) {
              hour = 0;
          }
          if (meridiem === 'राती') {
              return hour < 3 ? hour : hour + 12;
          } else if (meridiem === 'बिहान') {
              return hour;
          } else if (meridiem === 'दिउँसो') {
              return hour >= 10 ? hour : hour + 12;
          } else if (meridiem === 'बेलुका' || meridiem === 'साँझ') {
              return hour + 12;
          }
      },
      meridiem : function (hour, minute, isLower) {
          if (hour < 3) {
              return 'राती';
          } else if (hour < 10) {
              return 'बिहान';
          } else if (hour < 15) {
              return 'दिउँसो';
          } else if (hour < 18) {
              return 'बेलुका';
          } else if (hour < 20) {
              return 'साँझ';
          } else {
              return 'राती';
          }
      },
      calendar : {
          sameDay : '[आज] LT',
          nextDay : '[भोली] LT',
          nextWeek : '[आउँदो] dddd[,] LT',
          lastDay : '[हिजो] LT',
          lastWeek : '[गएको] dddd[,] LT',
          sameElse : 'L'
      },
      relativeTime : {
          future : '%sमा',
          past : '%s अगाडी',
          s : 'केही समय',
          m : 'एक मिनेट',
          mm : '%d मिनेट',
          h : 'एक घण्टा',
          hh : '%d घण्टा',
          d : 'एक दिन',
          dd : '%d दिन',
          M : 'एक महिना',
          MM : '%d महिना',
          y : 'एक बर्ष',
          yy : '%d बर्ष'
      },
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 7  // The week that contains Jan 1st is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : dutch (nl)
// author : Joris Röling : https://github.com/jjupiter

(function (factory) {
  factory(moment);
}(function (moment) {
  var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
      monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');

  return moment.defineLocale('nl', {
      months : 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
      monthsShort : function (m, format) {
          if (/-MMM-/.test(format)) {
              return monthsShortWithoutDots[m.month()];
          } else {
              return monthsShortWithDots[m.month()];
          }
      },
      weekdays : 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
      weekdaysShort : 'zo._ma._di._wo._do._vr._za.'.split('_'),
      weekdaysMin : 'Zo_Ma_Di_Wo_Do_Vr_Za'.split('_'),
      longDateFormat : {
          LT : 'HH:mm',
          LTS : 'LT:ss',
          L : 'DD-MM-YYYY',
          LL : 'D MMMM YYYY',
          LLL : 'D MMMM YYYY LT',
          LLLL : 'dddd D MMMM YYYY LT'
      },
      calendar : {
          sameDay: '[vandaag om] LT',
          nextDay: '[morgen om] LT',
          nextWeek: 'dddd [om] LT',
          lastDay: '[gisteren om] LT',
          lastWeek: '[afgelopen] dddd [om] LT',
          sameElse: 'L'
      },
      relativeTime : {
          future : 'over %s',
          past : '%s geleden',
          s : 'een paar seconden',
          m : 'één minuut',
          mm : '%d minuten',
          h : 'één uur',
          hh : '%d uur',
          d : 'één dag',
          dd : '%d dagen',
          M : 'één maand',
          MM : '%d maanden',
          y : 'één jaar',
          yy : '%d jaar'
      },
      ordinalParse: /\d{1,2}(ste|de)/,
      ordinal : function (number) {
          return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
      },
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 4  // The week that contains Jan 4th is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : norwegian nynorsk (nn)
// author : https://github.com/mechuwind

(function (factory) {
  factory(moment);
}(function (moment) {
  return moment.defineLocale('nn', {
      months : 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
      monthsShort : 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
      weekdays : 'sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag'.split('_'),
      weekdaysShort : 'sun_mån_tys_ons_tor_fre_lau'.split('_'),
      weekdaysMin : 'su_må_ty_on_to_fr_lø'.split('_'),
      longDateFormat : {
          LT : 'HH:mm',
          LTS : 'LT:ss',
          L : 'DD.MM.YYYY',
          LL : 'D MMMM YYYY',
          LLL : 'D MMMM YYYY LT',
          LLLL : 'dddd D MMMM YYYY LT'
      },
      calendar : {
          sameDay: '[I dag klokka] LT',
          nextDay: '[I morgon klokka] LT',
          nextWeek: 'dddd [klokka] LT',
          lastDay: '[I går klokka] LT',
          lastWeek: '[Føregåande] dddd [klokka] LT',
          sameElse: 'L'
      },
      relativeTime : {
          future : 'om %s',
          past : 'for %s sidan',
          s : 'nokre sekund',
          m : 'eit minutt',
          mm : '%d minutt',
          h : 'ein time',
          hh : '%d timar',
          d : 'ein dag',
          dd : '%d dagar',
          M : 'ein månad',
          MM : '%d månader',
          y : 'eit år',
          yy : '%d år'
      },
      ordinalParse: /\d{1,2}\./,
      ordinal : '%d.',
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 4  // The week that contains Jan 4th is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : polish (pl)
// author : Rafal Hirsz : https://github.com/evoL

(function (factory) {
  factory(moment);
}(function (moment) {
  var monthsNominative = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_'),
      monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_');

  function plural(n) {
      return (n % 10 < 5) && (n % 10 > 1) && ((~~(n / 10) % 10) !== 1);
  }

  function translate(number, withoutSuffix, key) {
      var result = number + ' ';
      switch (key) {
      case 'm':
          return withoutSuffix ? 'minuta' : 'minutę';
      case 'mm':
          return result + (plural(number) ? 'minuty' : 'minut');
      case 'h':
          return withoutSuffix  ? 'godzina'  : 'godzinę';
      case 'hh':
          return result + (plural(number) ? 'godziny' : 'godzin');
      case 'MM':
          return result + (plural(number) ? 'miesiące' : 'miesięcy');
      case 'yy':
          return result + (plural(number) ? 'lata' : 'lat');
      }
  }

  return moment.defineLocale('pl', {
      months : function (momentToFormat, format) {
          if (/D MMMM/.test(format)) {
              return monthsSubjective[momentToFormat.month()];
          } else {
              return monthsNominative[momentToFormat.month()];
          }
      },
      monthsShort : 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
      weekdays : 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
      weekdaysShort : 'nie_pon_wt_śr_czw_pt_sb'.split('_'),
      weekdaysMin : 'N_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
      longDateFormat : {
          LT : 'HH:mm',
          LTS : 'LT:ss',
          L : 'DD.MM.YYYY',
          LL : 'D MMMM YYYY',
          LLL : 'D MMMM YYYY LT',
          LLLL : 'dddd, D MMMM YYYY LT'
      },
      calendar : {
          sameDay: '[Dziś o] LT',
          nextDay: '[Jutro o] LT',
          nextWeek: '[W] dddd [o] LT',
          lastDay: '[Wczoraj o] LT',
          lastWeek: function () {
              switch (this.day()) {
              case 0:
                  return '[W zeszłą niedzielę o] LT';
              case 3:
                  return '[W zeszłą środę o] LT';
              case 6:
                  return '[W zeszłą sobotę o] LT';
              default:
                  return '[W zeszły] dddd [o] LT';
              }
          },
          sameElse: 'L'
      },
      relativeTime : {
          future : 'za %s',
          past : '%s temu',
          s : 'kilka sekund',
          m : translate,
          mm : translate,
          h : translate,
          hh : translate,
          d : '1 dzień',
          dd : '%d dni',
          M : 'miesiąc',
          MM : translate,
          y : 'rok',
          yy : translate
      },
      ordinalParse: /\d{1,2}\./,
      ordinal : '%d.',
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 4  // The week that contains Jan 4th is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : brazilian portuguese (pt-br)
// author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira

(function (factory) {
  factory(moment);
}(function (moment) {
  return moment.defineLocale('pt-br', {
      months : 'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split('_'),
      monthsShort : 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
      weekdays : 'domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado'.split('_'),
      weekdaysShort : 'dom_seg_ter_qua_qui_sex_sáb'.split('_'),
      weekdaysMin : 'dom_2ª_3ª_4ª_5ª_6ª_sáb'.split('_'),
      longDateFormat : {
          LT : 'HH:mm',
          LTS : 'LT:ss',
          L : 'DD/MM/YYYY',
          LL : 'D [de] MMMM [de] YYYY',
          LLL : 'D [de] MMMM [de] YYYY [às] LT',
          LLLL : 'dddd, D [de] MMMM [de] YYYY [às] LT'
      },
      calendar : {
          sameDay: '[Hoje às] LT',
          nextDay: '[Amanhã às] LT',
          nextWeek: 'dddd [às] LT',
          lastDay: '[Ontem às] LT',
          lastWeek: function () {
              return (this.day() === 0 || this.day() === 6) ?
                  '[Último] dddd [às] LT' : // Saturday + Sunday
                  '[Última] dddd [às] LT'; // Monday - Friday
          },
          sameElse: 'L'
      },
      relativeTime : {
          future : 'em %s',
          past : '%s atrás',
          s : 'segundos',
          m : 'um minuto',
          mm : '%d minutos',
          h : 'uma hora',
          hh : '%d horas',
          d : 'um dia',
          dd : '%d dias',
          M : 'um mês',
          MM : '%d meses',
          y : 'um ano',
          yy : '%d anos'
      },
      ordinalParse: /\d{1,2}º/,
      ordinal : '%dº'
  });
}));
// moment.js locale configuration
// locale : portuguese (pt)
// author : Jefferson : https://github.com/jalex79

(function (factory) {
  factory(moment);
}(function (moment) {
  return moment.defineLocale('pt', {
      months : 'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split('_'),
      monthsShort : 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
      weekdays : 'domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado'.split('_'),
      weekdaysShort : 'dom_seg_ter_qua_qui_sex_sáb'.split('_'),
      weekdaysMin : 'dom_2ª_3ª_4ª_5ª_6ª_sáb'.split('_'),
      longDateFormat : {
          LT : 'HH:mm',
          LTS : 'LT:ss',
          L : 'DD/MM/YYYY',
          LL : 'D [de] MMMM [de] YYYY',
          LLL : 'D [de] MMMM [de] YYYY LT',
          LLLL : 'dddd, D [de] MMMM [de] YYYY LT'
      },
      calendar : {
          sameDay: '[Hoje às] LT',
          nextDay: '[Amanhã às] LT',
          nextWeek: 'dddd [às] LT',
          lastDay: '[Ontem às] LT',
          lastWeek: function () {
              return (this.day() === 0 || this.day() === 6) ?
                  '[Último] dddd [às] LT' : // Saturday + Sunday
                  '[Última] dddd [às] LT'; // Monday - Friday
          },
          sameElse: 'L'
      },
      relativeTime : {
          future : 'em %s',
          past : 'há %s',
          s : 'segundos',
          m : 'um minuto',
          mm : '%d minutos',
          h : 'uma hora',
          hh : '%d horas',
          d : 'um dia',
          dd : '%d dias',
          M : 'um mês',
          MM : '%d meses',
          y : 'um ano',
          yy : '%d anos'
      },
      ordinalParse: /\d{1,2}º/,
      ordinal : '%dº',
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 4  // The week that contains Jan 4th is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : romanian (ro)
// author : Vlad Gurdiga : https://github.com/gurdiga
// author : Valentin Agachi : https://github.com/avaly

(function (factory) {
  factory(moment);
}(function (moment) {
  function relativeTimeWithPlural(number, withoutSuffix, key) {
      var format = {
              'mm': 'minute',
              'hh': 'ore',
              'dd': 'zile',
              'MM': 'luni',
              'yy': 'ani'
          },
          separator = ' ';
      if (number % 100 >= 20 || (number >= 100 && number % 100 === 0)) {
          separator = ' de ';
      }

      return number + separator + format[key];
  }

  return moment.defineLocale('ro', {
      months : 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),
      monthsShort : 'ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
      weekdays : 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
      weekdaysShort : 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
      weekdaysMin : 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
      longDateFormat : {
          LT : 'H:mm',
          LTS : 'LT:ss',
          L : 'DD.MM.YYYY',
          LL : 'D MMMM YYYY',
          LLL : 'D MMMM YYYY H:mm',
          LLLL : 'dddd, D MMMM YYYY H:mm'
      },
      calendar : {
          sameDay: '[azi la] LT',
          nextDay: '[mâine la] LT',
          nextWeek: 'dddd [la] LT',
          lastDay: '[ieri la] LT',
          lastWeek: '[fosta] dddd [la] LT',
          sameElse: 'L'
      },
      relativeTime : {
          future : 'peste %s',
          past : '%s în urmă',
          s : 'câteva secunde',
          m : 'un minut',
          mm : relativeTimeWithPlural,
          h : 'o oră',
          hh : relativeTimeWithPlural,
          d : 'o zi',
          dd : relativeTimeWithPlural,
          M : 'o lună',
          MM : relativeTimeWithPlural,
          y : 'un an',
          yy : relativeTimeWithPlural
      },
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 7  // The week that contains Jan 1st is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : russian (ru)
// author : Viktorminator : https://github.com/Viktorminator
// Author : Menelion Elensúle : https://github.com/Oire

(function (factory) {
  factory(moment);
}(function (moment) {
  function plural(word, num) {
      var forms = word.split('_');
      return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
  }

  function relativeTimeWithPlural(number, withoutSuffix, key) {
      var format = {
          'mm': withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
          'hh': 'час_часа_часов',
          'dd': 'день_дня_дней',
          'MM': 'месяц_месяца_месяцев',
          'yy': 'год_года_лет'
      };
      if (key === 'm') {
          return withoutSuffix ? 'минута' : 'минуту';
      }
      else {
          return number + ' ' + plural(format[key], +number);
      }
  }

  function monthsCaseReplace(m, format) {
      var months = {
          'nominative': 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
          'accusative': 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_')
      },

      nounCase = (/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/).test(format) ?
          'accusative' :
          'nominative';

      return months[nounCase][m.month()];
  }

  function monthsShortCaseReplace(m, format) {
      var monthsShort = {
          'nominative': 'янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_'),
          'accusative': 'янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек'.split('_')
      },

      nounCase = (/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/).test(format) ?
          'accusative' :
          'nominative';

      return monthsShort[nounCase][m.month()];
  }

  function weekdaysCaseReplace(m, format) {
      var weekdays = {
          'nominative': 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
          'accusative': 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_')
      },

      nounCase = (/\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/).test(format) ?
          'accusative' :
          'nominative';

      return weekdays[nounCase][m.day()];
  }

  return moment.defineLocale('ru', {
      months : monthsCaseReplace,
      monthsShort : monthsShortCaseReplace,
      weekdays : weekdaysCaseReplace,
      weekdaysShort : 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
      weekdaysMin : 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
      monthsParse : [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[й|я]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i],
      longDateFormat : {
          LT : 'HH:mm',
          LTS : 'LT:ss',
          L : 'DD.MM.YYYY',
          LL : 'D MMMM YYYY г.',
          LLL : 'D MMMM YYYY г., LT',
          LLLL : 'dddd, D MMMM YYYY г., LT'
      },
      calendar : {
          sameDay: '[Сегодня в] LT',
          nextDay: '[Завтра в] LT',
          lastDay: '[Вчера в] LT',
          nextWeek: function () {
              return this.day() === 2 ? '[Во] dddd [в] LT' : '[В] dddd [в] LT';
          },
          lastWeek: function (now) {
              if (now.week() !== this.week()) {
                  switch (this.day()) {
                  case 0:
                      return '[В прошлое] dddd [в] LT';
                  case 1:
                  case 2:
                  case 4:
                      return '[В прошлый] dddd [в] LT';
                  case 3:
                  case 5:
                  case 6:
                      return '[В прошлую] dddd [в] LT';
                  }
              } else {
                  if (this.day() === 2) {
                      return '[Во] dddd [в] LT';
                  } else {
                      return '[В] dddd [в] LT';
                  }
              }
          },
          sameElse: 'L'
      },
      relativeTime : {
          future : 'через %s',
          past : '%s назад',
          s : 'несколько секунд',
          m : relativeTimeWithPlural,
          mm : relativeTimeWithPlural,
          h : 'час',
          hh : relativeTimeWithPlural,
          d : 'день',
          dd : relativeTimeWithPlural,
          M : 'месяц',
          MM : relativeTimeWithPlural,
          y : 'год',
          yy : relativeTimeWithPlural
      },

      meridiemParse: /ночи|утра|дня|вечера/i,
      isPM : function (input) {
          return /^(дня|вечера)$/.test(input);
      },

      meridiem : function (hour, minute, isLower) {
          if (hour < 4) {
              return 'ночи';
          } else if (hour < 12) {
              return 'утра';
          } else if (hour < 17) {
              return 'дня';
          } else {
              return 'вечера';
          }
      },

      ordinalParse: /\d{1,2}-(й|го|я)/,
      ordinal: function (number, period) {
          switch (period) {
          case 'M':
          case 'd':
          case 'DDD':
              return number + '-й';
          case 'D':
              return number + '-го';
          case 'w':
          case 'W':
              return number + '-я';
          default:
              return number;
          }
      },

      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 7  // The week that contains Jan 1st is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : slovak (sk)
// author : Martin Minka : https://github.com/k2s
// based on work of petrbela : https://github.com/petrbela

(function (factory) {
  factory(moment);
}(function (moment) {
  var months = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_'),
      monthsShort = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_');

  function plural(n) {
      return (n > 1) && (n < 5);
  }

  function translate(number, withoutSuffix, key, isFuture) {
      var result = number + ' ';
      switch (key) {
      case 's':  // a few seconds / in a few seconds / a few seconds ago
          return (withoutSuffix || isFuture) ? 'pár sekúnd' : 'pár sekundami';
      case 'm':  // a minute / in a minute / a minute ago
          return withoutSuffix ? 'minúta' : (isFuture ? 'minútu' : 'minútou');
      case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
          if (withoutSuffix || isFuture) {
              return result + (plural(number) ? 'minúty' : 'minút');
          } else {
              return result + 'minútami';
          }
          break;
      case 'h':  // an hour / in an hour / an hour ago
          return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
      case 'hh': // 9 hours / in 9 hours / 9 hours ago
          if (withoutSuffix || isFuture) {
              return result + (plural(number) ? 'hodiny' : 'hodín');
          } else {
              return result + 'hodinami';
          }
          break;
      case 'd':  // a day / in a day / a day ago
          return (withoutSuffix || isFuture) ? 'deň' : 'dňom';
      case 'dd': // 9 days / in 9 days / 9 days ago
          if (withoutSuffix || isFuture) {
              return result + (plural(number) ? 'dni' : 'dní');
          } else {
              return result + 'dňami';
          }
          break;
      case 'M':  // a month / in a month / a month ago
          return (withoutSuffix || isFuture) ? 'mesiac' : 'mesiacom';
      case 'MM': // 9 months / in 9 months / 9 months ago
          if (withoutSuffix || isFuture) {
              return result + (plural(number) ? 'mesiace' : 'mesiacov');
          } else {
              return result + 'mesiacmi';
          }
          break;
      case 'y':  // a year / in a year / a year ago
          return (withoutSuffix || isFuture) ? 'rok' : 'rokom';
      case 'yy': // 9 years / in 9 years / 9 years ago
          if (withoutSuffix || isFuture) {
              return result + (plural(number) ? 'roky' : 'rokov');
          } else {
              return result + 'rokmi';
          }
          break;
      }
  }

  return moment.defineLocale('sk', {
      months : months,
      monthsShort : monthsShort,
      monthsParse : (function (months, monthsShort) {
          var i, _monthsParse = [];
          for (i = 0; i < 12; i++) {
              // use custom parser to solve problem with July (červenec)
              _monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');
          }
          return _monthsParse;
      }(months, monthsShort)),
      weekdays : 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),
      weekdaysShort : 'ne_po_ut_st_št_pi_so'.split('_'),
      weekdaysMin : 'ne_po_ut_st_št_pi_so'.split('_'),
      longDateFormat : {
          LT: 'H:mm',
          LTS : 'LT:ss',
          L : 'DD.MM.YYYY',
          LL : 'D. MMMM YYYY',
          LLL : 'D. MMMM YYYY LT',
          LLLL : 'dddd D. MMMM YYYY LT'
      },
      calendar : {
          sameDay: '[dnes o] LT',
          nextDay: '[zajtra o] LT',
          nextWeek: function () {
              switch (this.day()) {
              case 0:
                  return '[v nedeľu o] LT';
              case 1:
              case 2:
                  return '[v] dddd [o] LT';
              case 3:
                  return '[v stredu o] LT';
              case 4:
                  return '[vo štvrtok o] LT';
              case 5:
                  return '[v piatok o] LT';
              case 6:
                  return '[v sobotu o] LT';
              }
          },
          lastDay: '[včera o] LT',
          lastWeek: function () {
              switch (this.day()) {
              case 0:
                  return '[minulú nedeľu o] LT';
              case 1:
              case 2:
                  return '[minulý] dddd [o] LT';
              case 3:
                  return '[minulú stredu o] LT';
              case 4:
              case 5:
                  return '[minulý] dddd [o] LT';
              case 6:
                  return '[minulú sobotu o] LT';
              }
          },
          sameElse: 'L'
      },
      relativeTime : {
          future : 'za %s',
          past : 'pred %s',
          s : translate,
          m : translate,
          mm : translate,
          h : translate,
          hh : translate,
          d : translate,
          dd : translate,
          M : translate,
          MM : translate,
          y : translate,
          yy : translate
      },
      ordinalParse: /\d{1,2}\./,
      ordinal : '%d.',
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 4  // The week that contains Jan 4th is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : slovenian (sl)
// author : Robert Sedovšek : https://github.com/sedovsek

(function (factory) {
  factory(moment);
}(function (moment) {
  function translate(number, withoutSuffix, key) {
      var result = number + ' ';
      switch (key) {
      case 'm':
          return withoutSuffix ? 'ena minuta' : 'eno minuto';
      case 'mm':
          if (number === 1) {
              result += 'minuta';
          } else if (number === 2) {
              result += 'minuti';
          } else if (number === 3 || number === 4) {
              result += 'minute';
          } else {
              result += 'minut';
          }
          return result;
      case 'h':
          return withoutSuffix ? 'ena ura' : 'eno uro';
      case 'hh':
          if (number === 1) {
              result += 'ura';
          } else if (number === 2) {
              result += 'uri';
          } else if (number === 3 || number === 4) {
              result += 'ure';
          } else {
              result += 'ur';
          }
          return result;
      case 'dd':
          if (number === 1) {
              result += 'dan';
          } else {
              result += 'dni';
          }
          return result;
      case 'MM':
          if (number === 1) {
              result += 'mesec';
          } else if (number === 2) {
              result += 'meseca';
          } else if (number === 3 || number === 4) {
              result += 'mesece';
          } else {
              result += 'mesecev';
          }
          return result;
      case 'yy':
          if (number === 1) {
              result += 'leto';
          } else if (number === 2) {
              result += 'leti';
          } else if (number === 3 || number === 4) {
              result += 'leta';
          } else {
              result += 'let';
          }
          return result;
      }
  }

  return moment.defineLocale('sl', {
      months : 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
      monthsShort : 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
      weekdays : 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
      weekdaysShort : 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
      weekdaysMin : 'ne_po_to_sr_če_pe_so'.split('_'),
      longDateFormat : {
          LT : 'H:mm',
          LTS : 'LT:ss',
          L : 'DD. MM. YYYY',
          LL : 'D. MMMM YYYY',
          LLL : 'D. MMMM YYYY LT',
          LLLL : 'dddd, D. MMMM YYYY LT'
      },
      calendar : {
          sameDay  : '[danes ob] LT',
          nextDay  : '[jutri ob] LT',

          nextWeek : function () {
              switch (this.day()) {
              case 0:
                  return '[v] [nedeljo] [ob] LT';
              case 3:
                  return '[v] [sredo] [ob] LT';
              case 6:
                  return '[v] [soboto] [ob] LT';
              case 1:
              case 2:
              case 4:
              case 5:
                  return '[v] dddd [ob] LT';
              }
          },
          lastDay  : '[včeraj ob] LT',
          lastWeek : function () {
              switch (this.day()) {
              case 0:
              case 3:
              case 6:
                  return '[prejšnja] dddd [ob] LT';
              case 1:
              case 2:
              case 4:
              case 5:
                  return '[prejšnji] dddd [ob] LT';
              }
          },
          sameElse : 'L'
      },
      relativeTime : {
          future : 'čez %s',
          past   : '%s nazaj',
          s      : 'nekaj sekund',
          m      : translate,
          mm     : translate,
          h      : translate,
          hh     : translate,
          d      : 'en dan',
          dd     : translate,
          M      : 'en mesec',
          MM     : translate,
          y      : 'eno leto',
          yy     : translate
      },
      ordinalParse: /\d{1,2}\./,
      ordinal : '%d.',
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 7  // The week that contains Jan 1st is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : Albanian (sq)
// author : Flakërim Ismani : https://github.com/flakerimi
// author: Menelion Elensúle: https://github.com/Oire (tests)
// author : Oerd Cukalla : https://github.com/oerd (fixes)

(function (factory) {
  factory(moment);
}(function (moment) {
  return moment.defineLocale('sq', {
      months : 'Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor'.split('_'),
      monthsShort : 'Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj'.split('_'),
      weekdays : 'E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë'.split('_'),
      weekdaysShort : 'Die_Hën_Mar_Mër_Enj_Pre_Sht'.split('_'),
      weekdaysMin : 'D_H_Ma_Më_E_P_Sh'.split('_'),
      meridiemParse: /PD|MD/,
      isPM: function (input) {
          return input.charAt(0) === 'M';
      },
      meridiem : function (hours, minutes, isLower) {
          return hours < 12 ? 'PD' : 'MD';
      },
      longDateFormat : {
          LT : 'HH:mm',
          LTS : 'LT:ss',
          L : 'DD/MM/YYYY',
          LL : 'D MMMM YYYY',
          LLL : 'D MMMM YYYY LT',
          LLLL : 'dddd, D MMMM YYYY LT'
      },
      calendar : {
          sameDay : '[Sot në] LT',
          nextDay : '[Nesër në] LT',
          nextWeek : 'dddd [në] LT',
          lastDay : '[Dje në] LT',
          lastWeek : 'dddd [e kaluar në] LT',
          sameElse : 'L'
      },
      relativeTime : {
          future : 'në %s',
          past : '%s më parë',
          s : 'disa sekonda',
          m : 'një minutë',
          mm : '%d minuta',
          h : 'një orë',
          hh : '%d orë',
          d : 'një ditë',
          dd : '%d ditë',
          M : 'një muaj',
          MM : '%d muaj',
          y : 'një vit',
          yy : '%d vite'
      },
      ordinalParse: /\d{1,2}\./,
      ordinal : '%d.',
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 4  // The week that contains Jan 4th is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : Serbian-cyrillic (sr-cyrl)
// author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j

(function (factory) {
  factory(moment);
}(function (moment) {
  var translator = {
      words: { //Different grammatical cases
          m: ['један минут', 'једне минуте'],
          mm: ['минут', 'минуте', 'минута'],
          h: ['један сат', 'једног сата'],
          hh: ['сат', 'сата', 'сати'],
          dd: ['дан', 'дана', 'дана'],
          MM: ['месец', 'месеца', 'месеци'],
          yy: ['година', 'године', 'година']
      },
      correctGrammaticalCase: function (number, wordKey) {
          return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
      },
      translate: function (number, withoutSuffix, key) {
          var wordKey = translator.words[key];
          if (key.length === 1) {
              return withoutSuffix ? wordKey[0] : wordKey[1];
          } else {
              return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
          }
      }
  };

  return moment.defineLocale('sr-cyrl', {
      months: ['јануар', 'фебруар', 'март', 'април', 'мај', 'јун', 'јул', 'август', 'септембар', 'октобар', 'новембар', 'децембар'],
      monthsShort: ['јан.', 'феб.', 'мар.', 'апр.', 'мај', 'јун', 'јул', 'авг.', 'сеп.', 'окт.', 'нов.', 'дец.'],
      weekdays: ['недеља', 'понедељак', 'уторак', 'среда', 'четвртак', 'петак', 'субота'],
      weekdaysShort: ['нед.', 'пон.', 'уто.', 'сре.', 'чет.', 'пет.', 'суб.'],
      weekdaysMin: ['не', 'по', 'ут', 'ср', 'че', 'пе', 'су'],
      longDateFormat: {
          LT: 'H:mm',
          LTS : 'LT:ss',
          L: 'DD. MM. YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY LT',
          LLLL: 'dddd, D. MMMM YYYY LT'
      },
      calendar: {
          sameDay: '[данас у] LT',
          nextDay: '[сутра у] LT',

          nextWeek: function () {
              switch (this.day()) {
              case 0:
                  return '[у] [недељу] [у] LT';
              case 3:
                  return '[у] [среду] [у] LT';
              case 6:
                  return '[у] [суботу] [у] LT';
              case 1:
              case 2:
              case 4:
              case 5:
                  return '[у] dddd [у] LT';
              }
          },
          lastDay  : '[јуче у] LT',
          lastWeek : function () {
              var lastWeekDays = [
                  '[прошле] [недеље] [у] LT',
                  '[прошлог] [понедељка] [у] LT',
                  '[прошлог] [уторка] [у] LT',
                  '[прошле] [среде] [у] LT',
                  '[прошлог] [четвртка] [у] LT',
                  '[прошлог] [петка] [у] LT',
                  '[прошле] [суботе] [у] LT'
              ];
              return lastWeekDays[this.day()];
          },
          sameElse : 'L'
      },
      relativeTime : {
          future : 'за %s',
          past   : 'пре %s',
          s      : 'неколико секунди',
          m      : translator.translate,
          mm     : translator.translate,
          h      : translator.translate,
          hh     : translator.translate,
          d      : 'дан',
          dd     : translator.translate,
          M      : 'месец',
          MM     : translator.translate,
          y      : 'годину',
          yy     : translator.translate
      },
      ordinalParse: /\d{1,2}\./,
      ordinal : '%d.',
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 7  // The week that contains Jan 1st is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : Serbian-latin (sr)
// author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j

(function (factory) {
  factory(moment);
}(function (moment) {
  var translator = {
      words: { //Different grammatical cases
          m: ['jedan minut', 'jedne minute'],
          mm: ['minut', 'minute', 'minuta'],
          h: ['jedan sat', 'jednog sata'],
          hh: ['sat', 'sata', 'sati'],
          dd: ['dan', 'dana', 'dana'],
          MM: ['mesec', 'meseca', 'meseci'],
          yy: ['godina', 'godine', 'godina']
      },
      correctGrammaticalCase: function (number, wordKey) {
          return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
      },
      translate: function (number, withoutSuffix, key) {
          var wordKey = translator.words[key];
          if (key.length === 1) {
              return withoutSuffix ? wordKey[0] : wordKey[1];
          } else {
              return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
          }
      }
  };

  return moment.defineLocale('sr', {
      months: ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar'],
      monthsShort: ['jan.', 'feb.', 'mar.', 'apr.', 'maj', 'jun', 'jul', 'avg.', 'sep.', 'okt.', 'nov.', 'dec.'],
      weekdays: ['nedelja', 'ponedeljak', 'utorak', 'sreda', 'četvrtak', 'petak', 'subota'],
      weekdaysShort: ['ned.', 'pon.', 'uto.', 'sre.', 'čet.', 'pet.', 'sub.'],
      weekdaysMin: ['ne', 'po', 'ut', 'sr', 'če', 'pe', 'su'],
      longDateFormat: {
          LT: 'H:mm',
          LTS : 'LT:ss',
          L: 'DD. MM. YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY LT',
          LLLL: 'dddd, D. MMMM YYYY LT'
      },
      calendar: {
          sameDay: '[danas u] LT',
          nextDay: '[sutra u] LT',

          nextWeek: function () {
              switch (this.day()) {
              case 0:
                  return '[u] [nedelju] [u] LT';
              case 3:
                  return '[u] [sredu] [u] LT';
              case 6:
                  return '[u] [subotu] [u] LT';
              case 1:
              case 2:
              case 4:
              case 5:
                  return '[u] dddd [u] LT';
              }
          },
          lastDay  : '[juče u] LT',
          lastWeek : function () {
              var lastWeekDays = [
                  '[prošle] [nedelje] [u] LT',
                  '[prošlog] [ponedeljka] [u] LT',
                  '[prošlog] [utorka] [u] LT',
                  '[prošle] [srede] [u] LT',
                  '[prošlog] [četvrtka] [u] LT',
                  '[prošlog] [petka] [u] LT',
                  '[prošle] [subote] [u] LT'
              ];
              return lastWeekDays[this.day()];
          },
          sameElse : 'L'
      },
      relativeTime : {
          future : 'za %s',
          past   : 'pre %s',
          s      : 'nekoliko sekundi',
          m      : translator.translate,
          mm     : translator.translate,
          h      : translator.translate,
          hh     : translator.translate,
          d      : 'dan',
          dd     : translator.translate,
          M      : 'mesec',
          MM     : translator.translate,
          y      : 'godinu',
          yy     : translator.translate
      },
      ordinalParse: /\d{1,2}\./,
      ordinal : '%d.',
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 7  // The week that contains Jan 1st is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : swedish (sv)
// author : Jens Alm : https://github.com/ulmus

(function (factory) {
  factory(moment);
}(function (moment) {
  return moment.defineLocale('sv', {
      months : 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
      monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
      weekdays : 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
      weekdaysShort : 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
      weekdaysMin : 'sö_må_ti_on_to_fr_lö'.split('_'),
      longDateFormat : {
          LT : 'HH:mm',
          LTS : 'LT:ss',
          L : 'YYYY-MM-DD',
          LL : 'D MMMM YYYY',
          LLL : 'D MMMM YYYY LT',
          LLLL : 'dddd D MMMM YYYY LT'
      },
      calendar : {
          sameDay: '[Idag] LT',
          nextDay: '[Imorgon] LT',
          lastDay: '[Igår] LT',
          nextWeek: 'dddd LT',
          lastWeek: '[Förra] dddd[en] LT',
          sameElse: 'L'
      },
      relativeTime : {
          future : 'om %s',
          past : 'för %s sedan',
          s : 'några sekunder',
          m : 'en minut',
          mm : '%d minuter',
          h : 'en timme',
          hh : '%d timmar',
          d : 'en dag',
          dd : '%d dagar',
          M : 'en månad',
          MM : '%d månader',
          y : 'ett år',
          yy : '%d år'
      },
      ordinalParse: /\d{1,2}(e|a)/,
      ordinal : function (number) {
          var b = number % 10,
              output = (~~(number % 100 / 10) === 1) ? 'e' :
              (b === 1) ? 'a' :
              (b === 2) ? 'a' :
              (b === 3) ? 'e' : 'e';
          return number + output;
      },
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 4  // The week that contains Jan 4th is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : tamil (ta)
// author : Arjunkumar Krishnamoorthy : https://github.com/tk120404

(function (factory) {
  factory(moment);
}(function (moment) {
  /*var symbolMap = {
          '1': '௧',
          '2': '௨',
          '3': '௩',
          '4': '௪',
          '5': '௫',
          '6': '௬',
          '7': '௭',
          '8': '௮',
          '9': '௯',
          '0': '௦'
      },
      numberMap = {
          '௧': '1',
          '௨': '2',
          '௩': '3',
          '௪': '4',
          '௫': '5',
          '௬': '6',
          '௭': '7',
          '௮': '8',
          '௯': '9',
          '௦': '0'
      }; */

  return moment.defineLocale('ta', {
      months : 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
      monthsShort : 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
      weekdays : 'ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை'.split('_'),
      weekdaysShort : 'ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி'.split('_'),
      weekdaysMin : 'ஞா_தி_செ_பு_வி_வெ_ச'.split('_'),
      longDateFormat : {
          LT : 'HH:mm',
          LTS : 'LT:ss',
          L : 'DD/MM/YYYY',
          LL : 'D MMMM YYYY',
          LLL : 'D MMMM YYYY, LT',
          LLLL : 'dddd, D MMMM YYYY, LT'
      },
      calendar : {
          sameDay : '[இன்று] LT',
          nextDay : '[நாளை] LT',
          nextWeek : 'dddd, LT',
          lastDay : '[நேற்று] LT',
          lastWeek : '[கடந்த வாரம்] dddd, LT',
          sameElse : 'L'
      },
      relativeTime : {
          future : '%s இல்',
          past : '%s முன்',
          s : 'ஒரு சில விநாடிகள்',
          m : 'ஒரு நிமிடம்',
          mm : '%d நிமிடங்கள்',
          h : 'ஒரு மணி நேரம்',
          hh : '%d மணி நேரம்',
          d : 'ஒரு நாள்',
          dd : '%d நாட்கள்',
          M : 'ஒரு மாதம்',
          MM : '%d மாதங்கள்',
          y : 'ஒரு வருடம்',
          yy : '%d ஆண்டுகள்'
      },
/*        preparse: function (string) {
          return string.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (match) {
              return numberMap[match];
          });
      },
      postformat: function (string) {
          return string.replace(/\d/g, function (match) {
              return symbolMap[match];
          });
      },*/
      ordinalParse: /\d{1,2}வது/,
      ordinal : function (number) {
          return number + 'வது';
      },


      // refer http://ta.wikipedia.org/s/1er1
      meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
      meridiem : function (hour, minute, isLower) {
          if (hour < 2) {
              return ' யாமம்';
          } else if (hour < 6) {
              return ' வைகறை';  // வைகறை
          } else if (hour < 10) {
              return ' காலை'; // காலை
          } else if (hour < 14) {
              return ' நண்பகல்'; // நண்பகல்
          } else if (hour < 18) {
              return ' எற்பாடு'; // எற்பாடு
          } else if (hour < 22) {
              return ' மாலை'; // மாலை
          } else {
              return ' யாமம்';
          }
      },
      meridiemHour : function (hour, meridiem) {
          if (hour === 12) {
              hour = 0;
          }
          if (meridiem === 'யாமம்') {
              return hour < 2 ? hour : hour + 12;
          } else if (meridiem === 'வைகறை' || meridiem === 'காலை') {
              return hour;
          } else if (meridiem === 'நண்பகல்') {
              return hour >= 10 ? hour : hour + 12;
          } else {
              return hour + 12;
          }
      },
      week : {
          dow : 0, // Sunday is the first day of the week.
          doy : 6  // The week that contains Jan 1st is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : thai (th)
// author : Kridsada Thanabulpong : https://github.com/sirn

(function (factory) {
  factory(moment);
}(function (moment) {
  return moment.defineLocale('th', {
      months : 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
      monthsShort : 'มกรา_กุมภา_มีนา_เมษา_พฤษภา_มิถุนา_กรกฎา_สิงหา_กันยา_ตุลา_พฤศจิกา_ธันวา'.split('_'),
      weekdays : 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
      weekdaysShort : 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'), // yes, three characters difference
      weekdaysMin : 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
      longDateFormat : {
          LT : 'H นาฬิกา m นาที',
          LTS : 'LT s วินาที',
          L : 'YYYY/MM/DD',
          LL : 'D MMMM YYYY',
          LLL : 'D MMMM YYYY เวลา LT',
          LLLL : 'วันddddที่ D MMMM YYYY เวลา LT'
      },
      meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
      isPM: function (input) {
          return input === 'หลังเที่ยง';
      },
      meridiem : function (hour, minute, isLower) {
          if (hour < 12) {
              return 'ก่อนเที่ยง';
          } else {
              return 'หลังเที่ยง';
          }
      },
      calendar : {
          sameDay : '[วันนี้ เวลา] LT',
          nextDay : '[พรุ่งนี้ เวลา] LT',
          nextWeek : 'dddd[หน้า เวลา] LT',
          lastDay : '[เมื่อวานนี้ เวลา] LT',
          lastWeek : '[วัน]dddd[ที่แล้ว เวลา] LT',
          sameElse : 'L'
      },
      relativeTime : {
          future : 'อีก %s',
          past : '%sที่แล้ว',
          s : 'ไม่กี่วินาที',
          m : '1 นาที',
          mm : '%d นาที',
          h : '1 ชั่วโมง',
          hh : '%d ชั่วโมง',
          d : '1 วัน',
          dd : '%d วัน',
          M : '1 เดือน',
          MM : '%d เดือน',
          y : '1 ปี',
          yy : '%d ปี'
      }
  });
}));
// moment.js locale configuration
// locale : Tagalog/Filipino (tl-ph)
// author : Dan Hagman

(function (factory) {
  factory(moment);
}(function (moment) {
  return moment.defineLocale('tl-ph', {
      months : 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split('_'),
      monthsShort : 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
      weekdays : 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split('_'),
      weekdaysShort : 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
      weekdaysMin : 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
      longDateFormat : {
          LT : 'HH:mm',
          LTS : 'LT:ss',
          L : 'MM/D/YYYY',
          LL : 'MMMM D, YYYY',
          LLL : 'MMMM D, YYYY LT',
          LLLL : 'dddd, MMMM DD, YYYY LT'
      },
      calendar : {
          sameDay: '[Ngayon sa] LT',
          nextDay: '[Bukas sa] LT',
          nextWeek: 'dddd [sa] LT',
          lastDay: '[Kahapon sa] LT',
          lastWeek: 'dddd [huling linggo] LT',
          sameElse: 'L'
      },
      relativeTime : {
          future : 'sa loob ng %s',
          past : '%s ang nakalipas',
          s : 'ilang segundo',
          m : 'isang minuto',
          mm : '%d minuto',
          h : 'isang oras',
          hh : '%d oras',
          d : 'isang araw',
          dd : '%d araw',
          M : 'isang buwan',
          MM : '%d buwan',
          y : 'isang taon',
          yy : '%d taon'
      },
      ordinalParse: /\d{1,2}/,
      ordinal : function (number) {
          return number;
      },
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 4  // The week that contains Jan 4th is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : turkish (tr)
// authors : Erhan Gundogan : https://github.com/erhangundogan,
//           Burak Yiğit Kaya: https://github.com/BYK

(function (factory) {
  factory(moment);
}(function (moment) {
  var suffixes = {
      1: '\'inci',
      5: '\'inci',
      8: '\'inci',
      70: '\'inci',
      80: '\'inci',

      2: '\'nci',
      7: '\'nci',
      20: '\'nci',
      50: '\'nci',

      3: '\'üncü',
      4: '\'üncü',
      100: '\'üncü',

      6: '\'ncı',

      9: '\'uncu',
      10: '\'uncu',
      30: '\'uncu',

      60: '\'ıncı',
      90: '\'ıncı'
  };

  return moment.defineLocale('tr', {
      months : 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
      monthsShort : 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
      weekdays : 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
      weekdaysShort : 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
      weekdaysMin : 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
      longDateFormat : {
          LT : 'HH:mm',
          LTS : 'LT:ss',
          L : 'DD.MM.YYYY',
          LL : 'D MMMM YYYY',
          LLL : 'D MMMM YYYY LT',
          LLLL : 'dddd, D MMMM YYYY LT'
      },
      calendar : {
          sameDay : '[bugün saat] LT',
          nextDay : '[yarın saat] LT',
          nextWeek : '[haftaya] dddd [saat] LT',
          lastDay : '[dün] LT',
          lastWeek : '[geçen hafta] dddd [saat] LT',
          sameElse : 'L'
      },
      relativeTime : {
          future : '%s sonra',
          past : '%s önce',
          s : 'birkaç saniye',
          m : 'bir dakika',
          mm : '%d dakika',
          h : 'bir saat',
          hh : '%d saat',
          d : 'bir gün',
          dd : '%d gün',
          M : 'bir ay',
          MM : '%d ay',
          y : 'bir yıl',
          yy : '%d yıl'
      },
      ordinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
      ordinal : function (number) {
          if (number === 0) {  // special case for zero
              return number + '\'ıncı';
          }
          var a = number % 10,
              b = number % 100 - a,
              c = number >= 100 ? 100 : null;

          return number + (suffixes[a] || suffixes[b] || suffixes[c]);
      },
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 7  // The week that contains Jan 1st is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : Morocco Central Atlas Tamaziɣt in Latin (tzm-latn)
// author : Abdel Said : https://github.com/abdelsaid

(function (factory) {
  factory(moment);
}(function (moment) {
  return moment.defineLocale('tzm-latn', {
      months : 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
      monthsShort : 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
      weekdays : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
      weekdaysShort : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
      weekdaysMin : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
      longDateFormat : {
          LT : 'HH:mm',
          LTS : 'LT:ss',
          L : 'DD/MM/YYYY',
          LL : 'D MMMM YYYY',
          LLL : 'D MMMM YYYY LT',
          LLLL : 'dddd D MMMM YYYY LT'
      },
      calendar : {
          sameDay: '[asdkh g] LT',
          nextDay: '[aska g] LT',
          nextWeek: 'dddd [g] LT',
          lastDay: '[assant g] LT',
          lastWeek: 'dddd [g] LT',
          sameElse: 'L'
      },
      relativeTime : {
          future : 'dadkh s yan %s',
          past : 'yan %s',
          s : 'imik',
          m : 'minuḍ',
          mm : '%d minuḍ',
          h : 'saɛa',
          hh : '%d tassaɛin',
          d : 'ass',
          dd : '%d ossan',
          M : 'ayowr',
          MM : '%d iyyirn',
          y : 'asgas',
          yy : '%d isgasn'
      },
      week : {
          dow : 6, // Saturday is the first day of the week.
          doy : 12  // The week that contains Jan 1st is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : Morocco Central Atlas Tamaziɣt (tzm)
// author : Abdel Said : https://github.com/abdelsaid

(function (factory) {
  factory(moment);
}(function (moment) {
  return moment.defineLocale('tzm', {
      months : 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
      monthsShort : 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
      weekdays : 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
      weekdaysShort : 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
      weekdaysMin : 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
      longDateFormat : {
          LT : 'HH:mm',
          LTS: 'LT:ss',
          L : 'DD/MM/YYYY',
          LL : 'D MMMM YYYY',
          LLL : 'D MMMM YYYY LT',
          LLLL : 'dddd D MMMM YYYY LT'
      },
      calendar : {
          sameDay: '[ⴰⵙⴷⵅ ⴴ] LT',
          nextDay: '[ⴰⵙⴽⴰ ⴴ] LT',
          nextWeek: 'dddd [ⴴ] LT',
          lastDay: '[ⴰⵚⴰⵏⵜ ⴴ] LT',
          lastWeek: 'dddd [ⴴ] LT',
          sameElse: 'L'
      },
      relativeTime : {
          future : 'ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s',
          past : 'ⵢⴰⵏ %s',
          s : 'ⵉⵎⵉⴽ',
          m : 'ⵎⵉⵏⵓⴺ',
          mm : '%d ⵎⵉⵏⵓⴺ',
          h : 'ⵙⴰⵄⴰ',
          hh : '%d ⵜⴰⵙⵙⴰⵄⵉⵏ',
          d : 'ⴰⵙⵙ',
          dd : '%d oⵙⵙⴰⵏ',
          M : 'ⴰⵢoⵓⵔ',
          MM : '%d ⵉⵢⵢⵉⵔⵏ',
          y : 'ⴰⵙⴳⴰⵙ',
          yy : '%d ⵉⵙⴳⴰⵙⵏ'
      },
      week : {
          dow : 6, // Saturday is the first day of the week.
          doy : 12  // The week that contains Jan 1st is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : ukrainian (uk)
// author : zemlanin : https://github.com/zemlanin
// Author : Menelion Elensúle : https://github.com/Oire

(function (factory) {
  factory(moment);
}(function (moment) {
  function plural(word, num) {
      var forms = word.split('_');
      return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
  }

  function relativeTimeWithPlural(number, withoutSuffix, key) {
      var format = {
          'mm': 'хвилина_хвилини_хвилин',
          'hh': 'година_години_годин',
          'dd': 'день_дні_днів',
          'MM': 'місяць_місяці_місяців',
          'yy': 'рік_роки_років'
      };
      if (key === 'm') {
          return withoutSuffix ? 'хвилина' : 'хвилину';
      }
      else if (key === 'h') {
          return withoutSuffix ? 'година' : 'годину';
      }
      else {
          return number + ' ' + plural(format[key], +number);
      }
  }

  function monthsCaseReplace(m, format) {
      var months = {
          'nominative': 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_'),
          'accusative': 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split('_')
      },

      nounCase = (/D[oD]? *MMMM?/).test(format) ?
          'accusative' :
          'nominative';

      return months[nounCase][m.month()];
  }

  function weekdaysCaseReplace(m, format) {
      var weekdays = {
          'nominative': 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split('_'),
          'accusative': 'неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу'.split('_'),
          'genitive': 'неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи'.split('_')
      },

      nounCase = (/(\[[ВвУу]\]) ?dddd/).test(format) ?
          'accusative' :
          ((/\[?(?:минулої|наступної)? ?\] ?dddd/).test(format) ?
              'genitive' :
              'nominative');

      return weekdays[nounCase][m.day()];
  }

  function processHoursFunction(str) {
      return function () {
          return str + 'о' + (this.hours() === 11 ? 'б' : '') + '] LT';
      };
  }

  return moment.defineLocale('uk', {
      months : monthsCaseReplace,
      monthsShort : 'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split('_'),
      weekdays : weekdaysCaseReplace,
      weekdaysShort : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
      weekdaysMin : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
      longDateFormat : {
          LT : 'HH:mm',
          LTS : 'LT:ss',
          L : 'DD.MM.YYYY',
          LL : 'D MMMM YYYY р.',
          LLL : 'D MMMM YYYY р., LT',
          LLLL : 'dddd, D MMMM YYYY р., LT'
      },
      calendar : {
          sameDay: processHoursFunction('[Сьогодні '),
          nextDay: processHoursFunction('[Завтра '),
          lastDay: processHoursFunction('[Вчора '),
          nextWeek: processHoursFunction('[У] dddd ['),
          lastWeek: function () {
              switch (this.day()) {
              case 0:
              case 3:
              case 5:
              case 6:
                  return processHoursFunction('[Минулої] dddd [').call(this);
              case 1:
              case 2:
              case 4:
                  return processHoursFunction('[Минулого] dddd [').call(this);
              }
          },
          sameElse: 'L'
      },
      relativeTime : {
          future : 'за %s',
          past : '%s тому',
          s : 'декілька секунд',
          m : relativeTimeWithPlural,
          mm : relativeTimeWithPlural,
          h : 'годину',
          hh : relativeTimeWithPlural,
          d : 'день',
          dd : relativeTimeWithPlural,
          M : 'місяць',
          MM : relativeTimeWithPlural,
          y : 'рік',
          yy : relativeTimeWithPlural
      },

      // M. E.: those two are virtually unused but a user might want to implement them for his/her website for some reason

      meridiemParse: /ночі|ранку|дня|вечора/,
      isPM: function (input) {
          return /^(дня|вечора)$/.test(input);
      },
      meridiem : function (hour, minute, isLower) {
          if (hour < 4) {
              return 'ночі';
          } else if (hour < 12) {
              return 'ранку';
          } else if (hour < 17) {
              return 'дня';
          } else {
              return 'вечора';
          }
      },

      ordinalParse: /\d{1,2}-(й|го)/,
      ordinal: function (number, period) {
          switch (period) {
          case 'M':
          case 'd':
          case 'DDD':
          case 'w':
          case 'W':
              return number + '-й';
          case 'D':
              return number + '-го';
          default:
              return number;
          }
      },

      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 7  // The week that contains Jan 1st is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : uzbek (uz)
// author : Sardor Muminov : https://github.com/muminoff

(function (factory) {
  factory(moment);
}(function (moment) {
  return moment.defineLocale('uz', {
      months : 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
      monthsShort : 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
      weekdays : 'Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба'.split('_'),
      weekdaysShort : 'Якш_Душ_Сеш_Чор_Пай_Жум_Шан'.split('_'),
      weekdaysMin : 'Як_Ду_Се_Чо_Па_Жу_Ша'.split('_'),
      longDateFormat : {
          LT : 'HH:mm',
          LTS : 'LT:ss',
          L : 'DD/MM/YYYY',
          LL : 'D MMMM YYYY',
          LLL : 'D MMMM YYYY LT',
          LLLL : 'D MMMM YYYY, dddd LT'
      },
      calendar : {
          sameDay : '[Бугун соат] LT [да]',
          nextDay : '[Эртага] LT [да]',
          nextWeek : 'dddd [куни соат] LT [да]',
          lastDay : '[Кеча соат] LT [да]',
          lastWeek : '[Утган] dddd [куни соат] LT [да]',
          sameElse : 'L'
      },
      relativeTime : {
          future : 'Якин %s ичида',
          past : 'Бир неча %s олдин',
          s : 'фурсат',
          m : 'бир дакика',
          mm : '%d дакика',
          h : 'бир соат',
          hh : '%d соат',
          d : 'бир кун',
          dd : '%d кун',
          M : 'бир ой',
          MM : '%d ой',
          y : 'бир йил',
          yy : '%d йил'
      },
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 7  // The week that contains Jan 4th is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : vietnamese (vi)
// author : Bang Nguyen : https://github.com/bangnk

(function (factory) {
  factory(moment);
}(function (moment) {
  return moment.defineLocale('vi', {
      months : 'tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12'.split('_'),
      monthsShort : 'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split('_'),
      weekdays : 'chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy'.split('_'),
      weekdaysShort : 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
      weekdaysMin : 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
      longDateFormat : {
          LT : 'HH:mm',
          LTS : 'LT:ss',
          L : 'DD/MM/YYYY',
          LL : 'D MMMM [năm] YYYY',
          LLL : 'D MMMM [năm] YYYY LT',
          LLLL : 'dddd, D MMMM [năm] YYYY LT',
          l : 'DD/M/YYYY',
          ll : 'D MMM YYYY',
          lll : 'D MMM YYYY LT',
          llll : 'ddd, D MMM YYYY LT'
      },
      calendar : {
          sameDay: '[Hôm nay lúc] LT',
          nextDay: '[Ngày mai lúc] LT',
          nextWeek: 'dddd [tuần tới lúc] LT',
          lastDay: '[Hôm qua lúc] LT',
          lastWeek: 'dddd [tuần rồi lúc] LT',
          sameElse: 'L'
      },
      relativeTime : {
          future : '%s tới',
          past : '%s trước',
          s : 'vài giây',
          m : 'một phút',
          mm : '%d phút',
          h : 'một giờ',
          hh : '%d giờ',
          d : 'một ngày',
          dd : '%d ngày',
          M : 'một tháng',
          MM : '%d tháng',
          y : 'một năm',
          yy : '%d năm'
      },
      ordinalParse: /\d{1,2}/,
      ordinal : function (number) {
          return number;
      },
      week : {
          dow : 1, // Monday is the first day of the week.
          doy : 4  // The week that contains Jan 4th is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : chinese (zh-cn)
// author : suupic : https://github.com/suupic
// author : Zeno Zeng : https://github.com/zenozeng

(function (factory) {
  factory(moment);
}(function (moment) {
  return moment.defineLocale('zh-cn', {
      months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
      monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
      weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
      weekdaysShort : '周日_周一_周二_周三_周四_周五_周六'.split('_'),
      weekdaysMin : '日_一_二_三_四_五_六'.split('_'),
      longDateFormat : {
          LT : 'Ah点mm',
          LTS : 'Ah点m分s秒',
          L : 'YYYY-MM-DD',
          LL : 'YYYY年MMMD日',
          LLL : 'YYYY年MMMD日LT',
          LLLL : 'YYYY年MMMD日ddddLT',
          l : 'YYYY-MM-DD',
          ll : 'YYYY年MMMD日',
          lll : 'YYYY年MMMD日LT',
          llll : 'YYYY年MMMD日ddddLT'
      },
      meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
      meridiemHour: function (hour, meridiem) {
          if (hour === 12) {
              hour = 0;
          }
          if (meridiem === '凌晨' || meridiem === '早上' ||
                  meridiem === '上午') {
              return hour;
          } else if (meridiem === '下午' || meridiem === '晚上') {
              return hour + 12;
          } else {
              // '中午'
              return hour >= 11 ? hour : hour + 12;
          }
      },
      meridiem : function (hour, minute, isLower) {
          var hm = hour * 100 + minute;
          if (hm < 600) {
              return '凌晨';
          } else if (hm < 900) {
              return '早上';
          } else if (hm < 1130) {
              return '上午';
          } else if (hm < 1230) {
              return '中午';
          } else if (hm < 1800) {
              return '下午';
          } else {
              return '晚上';
          }
      },
      calendar : {
          sameDay : function () {
              return this.minutes() === 0 ? '[今天]Ah[点整]' : '[今天]LT';
          },
          nextDay : function () {
              return this.minutes() === 0 ? '[明天]Ah[点整]' : '[明天]LT';
          },
          lastDay : function () {
              return this.minutes() === 0 ? '[昨天]Ah[点整]' : '[昨天]LT';
          },
          nextWeek : function () {
              var startOfWeek, prefix;
              startOfWeek = moment().startOf('week');
              prefix = this.unix() - startOfWeek.unix() >= 7 * 24 * 3600 ? '[下]' : '[本]';
              return this.minutes() === 0 ? prefix + 'dddAh点整' : prefix + 'dddAh点mm';
          },
          lastWeek : function () {
              var startOfWeek, prefix;
              startOfWeek = moment().startOf('week');
              prefix = this.unix() < startOfWeek.unix()  ? '[上]' : '[本]';
              return this.minutes() === 0 ? prefix + 'dddAh点整' : prefix + 'dddAh点mm';
          },
          sameElse : 'LL'
      },
      ordinalParse: /\d{1,2}(日|月|周)/,
      ordinal : function (number, period) {
          switch (period) {
          case 'd':
          case 'D':
          case 'DDD':
              return number + '日';
          case 'M':
              return number + '月';
          case 'w':
          case 'W':
              return number + '周';
          default:
              return number;
          }
      },
      relativeTime : {
          future : '%s内',
          past : '%s前',
          s : '几秒',
          m : '1分钟',
          mm : '%d分钟',
          h : '1小时',
          hh : '%d小时',
          d : '1天',
          dd : '%d天',
          M : '1个月',
          MM : '%d个月',
          y : '1年',
          yy : '%d年'
      },
      week : {
          // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
          dow : 1, // Monday is the first day of the week.
          doy : 4  // The week that contains Jan 4th is the first week of the year.
      }
  });
}));
// moment.js locale configuration
// locale : traditional chinese (zh-tw)
// author : Ben : https://github.com/ben-lin

(function (factory) {
  factory(moment);
}(function (moment) {
  return moment.defineLocale('zh-tw', {
      months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
      monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
      weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
      weekdaysShort : '週日_週一_週二_週三_週四_週五_週六'.split('_'),
      weekdaysMin : '日_一_二_三_四_五_六'.split('_'),
      longDateFormat : {
          LT : 'Ah點mm',
          LTS : 'Ah點m分s秒',
          L : 'YYYY年MMMD日',
          LL : 'YYYY年MMMD日',
          LLL : 'YYYY年MMMD日LT',
          LLLL : 'YYYY年MMMD日ddddLT',
          l : 'YYYY年MMMD日',
          ll : 'YYYY年MMMD日',
          lll : 'YYYY年MMMD日LT',
          llll : 'YYYY年MMMD日ddddLT'
      },
      meridiemParse: /早上|上午|中午|下午|晚上/,
      meridiemHour : function (hour, meridiem) {
          if (hour === 12) {
              hour = 0;
          }
          if (meridiem === '早上' || meridiem === '上午') {
              return hour;
          } else if (meridiem === '中午') {
              return hour >= 11 ? hour : hour + 12;
          } else if (meridiem === '下午' || meridiem === '晚上') {
              return hour + 12;
          }
      },
      meridiem : function (hour, minute, isLower) {
          var hm = hour * 100 + minute;
          if (hm < 900) {
              return '早上';
          } else if (hm < 1130) {
              return '上午';
          } else if (hm < 1230) {
              return '中午';
          } else if (hm < 1800) {
              return '下午';
          } else {
              return '晚上';
          }
      },
      calendar : {
          sameDay : '[今天]LT',
          nextDay : '[明天]LT',
          nextWeek : '[下]ddddLT',
          lastDay : '[昨天]LT',
          lastWeek : '[上]ddddLT',
          sameElse : 'L'
      },
      ordinalParse: /\d{1,2}(日|月|週)/,
      ordinal : function (number, period) {
          switch (period) {
          case 'd' :
          case 'D' :
          case 'DDD' :
              return number + '日';
          case 'M' :
              return number + '月';
          case 'w' :
          case 'W' :
              return number + '週';
          default :
              return number;
          }
      },
      relativeTime : {
          future : '%s內',
          past : '%s前',
          s : '幾秒',
          m : '一分鐘',
          mm : '%d分鐘',
          h : '一小時',
          hh : '%d小時',
          d : '一天',
          dd : '%d天',
          M : '一個月',
          MM : '%d個月',
          y : '一年',
          yy : '%d年'
      }
  });
}));

  moment.locale('en');


  /************************************
      Exposing Moment
  ************************************/

  function makeGlobal(shouldDeprecate) {
      /*global ender:false */
      if (typeof ender !== 'undefined') {
          return;
      }
      oldGlobalMoment = globalScope.moment;
      if (shouldDeprecate) {
          globalScope.moment = deprecate(
                  'Accessing Moment through the global scope is ' +
                  'deprecated, and will be removed in an upcoming ' +
                  'release.',
                  moment);
      } else {
          globalScope.moment = moment;
      }
  }

  // CommonJS module is defined
  if (hasModule) {
      module.exports = moment;
  } else if (typeof define === 'function' && define.amd) {
      define(function (require, exports, module) {
          if (module.config && module.config() && module.config().noGlobal === true) {
              // release the global variable
              globalScope.moment = oldGlobalMoment;
          }

          return moment;
      });
      makeGlobal(true);
  } else {
      makeGlobal();
  }
}).call(this);

/*  --------------------------------------------------------------------------------------------
  SLICK
  https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js
 -------------------------------------------------------------------------------------------- */
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});

/* --------------------------------------------------------------------------------------------
 aos.js
 * aos@2.3.1
 * https://unpkg.com/aos@2.3.1/dist/aos.js
-------------------------------------------------------------------------------------------- */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),f=o(c),s=n(8),d=o(s),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x=document.all&&!window.atob,j={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},O=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,j),(0,b.default)(w,j.once),w},_=function(){w=(0,h.default)(),O()},S=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},z=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},A=function(e){return j=i(j,e),w=(0,h.default)(),z(j.disable)||x?S():(document.querySelector("body").setAttribute("data-aos-easing",j.easing),document.querySelector("body").setAttribute("data-aos-duration",j.duration),document.querySelector("body").setAttribute("data-aos-delay",j.delay),"DOMContentLoaded"===j.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?O(!0):"load"===j.startEvent?window.addEventListener(j.startEvent,function(){O(!0)}):document.addEventListener(j.startEvent,function(){O(!0)}),window.addEventListener("resize",(0,f.default)(O,j.debounceDelay,!0)),window.addEventListener("orientationchange",(0,f.default)(O,j.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,j.once)},j.throttleDelay)),j.disableMutationObserver||(0,d.default)("[data-aos]",_),w)};e.exports={init:A,refresh:O,refreshHard:_}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(s,t),_?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return S?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||S&&o>=y}function s(){var e=O();return c(e)?d(e):void(h=setTimeout(s,a(e)))}function d(e){return h=void 0,z&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(s,t),o(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,k=0,_=!1,S=!1,z=!0;if("function"!=typeof e)throw new TypeError(f);return t=u(t)||0,i(n)&&(_=!!n.leading,S="maxWait"in n,y=S?x(u(n.maxWait)||0,t):y,z="trailing"in n?!!n.trailing:z),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(f);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return s;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?s:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f="Expected a function",s=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(s,t),_?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return S?x(i,y-o):i}function f(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||S&&o>=y}function s(){var e=j();return f(e)?d(e):void(h=setTimeout(s,u(e)))}function d(e){return h=void 0,z&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=f(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(s,t),i(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,O=0,_=!1,S=!1,z=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(_=!!n.leading,S="maxWait"in n,y=S?k(a(n.maxWait)||0,t):y,z="trailing"in n?!!n.trailing:z),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==s}function a(e){if("number"==typeof e)return e;if(r(e))return f;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?f:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",f=NaN,s="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e,t){var n=new r(o);a=t,n.observe(i.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function o(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes),o=t.concat(n).filter(function(e){return e.hasAttribute&&e.hasAttribute("data-aos")}).length;o&&a()})}Object.defineProperty(t,"__esModule",{value:!0});var i=window.document,r=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,a=function(){};t.default=n},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,f=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new f},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})};t.default=n}])});

/* --------------------------------------------------------------------------------------------
 Tilt.js
 * https://unpkg.com/tilt.js@1.2.1/dest/tilt.jquery.min.js
-------------------------------------------------------------------------------------------- */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = function( root, jQuery ) {
            if ( jQuery === undefined ) {
                // require('jQuery') returns a factory that requires window to
                // build a jQuery instance, we normalize how we use modules
                // that require this pattern but the window provided is a noop
                // if it's defined (how jquery works)
                if ( typeof window !== 'undefined' ) {
                    jQuery = require('jquery');
                }
                else {
                    jQuery = require('jquery')(root);
                }
            }
            factory(jQuery);
            return jQuery;
        };
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    $.fn.tilt = function (options) {

        /**
         * RequestAnimationFrame
         */
        const requestTick = function() {
            if (this.ticking) return;
            requestAnimationFrame(updateTransforms.bind(this));
            this.ticking = true;
        };

        /**
         * Bind mouse movement evens on instance
         */
        const bindEvents = function() {
            const _this = this;
            $(this).on('mousemove', mouseMove);
            $(this).on('mouseenter', mouseEnter);
            if (this.settings.reset) $(this).on('mouseleave', mouseLeave);
            if (this.settings.glare) $(window).on('resize', updateGlareSize.bind(_this));
        };

        /**
         * Set transition only on mouse leave and mouse enter so it doesn't influence mouse move transforms
         */
        const setTransition = function() {
            if (this.timeout !== undefined) clearTimeout(this.timeout);
            $(this).css({'transition': `${this.settings.speed}ms ${this.settings.easing}`});
            if(this.settings.glare) this.glareElement.css({'transition': `opacity ${this.settings.speed}ms ${this.settings.easing}`});
            this.timeout = setTimeout(() => {
                $(this).css({'transition': ''});
                if(this.settings.glare) this.glareElement.css({'transition': ''});
            }, this.settings.speed);
        };

        /**
         * When user mouse enters tilt element
         */
        const mouseEnter = function(event) {
            this.ticking = false;
            $(this).css({'will-change': 'transform'});
            setTransition.call(this);

            // Trigger change event
            $(this).trigger("tilt.mouseEnter");
        };

        /**
         * Return the x,y position of the mouse on the tilt element
         * @returns {{x: *, y: *}}
         */
        const getMousePositions = function(event) {
            if (typeof(event) === "undefined") {
                event = {
                    pageX: $(this).offset().left + $(this).outerWidth() / 2,
                    pageY: $(this).offset().top + $(this).outerHeight() / 2
                };
            }
            return {x: event.pageX, y: event.pageY};
        };

        /**
         * When user mouse moves over the tilt element
         */
        const mouseMove = function(event) {
            this.mousePositions = getMousePositions(event);
            requestTick.call(this);
        };

        /**
         * When user mouse leaves tilt element
         */
        const mouseLeave = function() {
            setTransition.call(this);
            this.reset = true;
            requestTick.call(this);

            // Trigger change event
            $(this).trigger("tilt.mouseLeave");
        };

        /**
         * Get tilt values
         *
         * @returns {{x: tilt value, y: tilt value}}
         */
        const getValues = function() {
            const width = $(this).outerWidth();
            const height = $(this).outerHeight();
            const left = $(this).offset().left;
            const top = $(this).offset().top;
            const percentageX = (this.mousePositions.x - left) / width;
            const percentageY = (this.mousePositions.y - top) / height;
            // x or y position inside instance / width of instance = percentage of position inside instance * the max tilt value
            const tiltX = ((this.settings.maxTilt / 2) - ((percentageX) * this.settings.maxTilt)).toFixed(2);
            const tiltY = (((percentageY) * this.settings.maxTilt) - (this.settings.maxTilt / 2)).toFixed(2);
            // angle
            const angle = Math.atan2(this.mousePositions.x - (left+width/2),- (this.mousePositions.y - (top+height/2)) )*(180/Math.PI);
            // Return x & y tilt values
            return {tiltX, tiltY, 'percentageX': percentageX * 100, 'percentageY': percentageY * 100, angle};
        };

        /**
         * Update tilt transforms on mousemove
         */
        const updateTransforms = function() {
            this.transforms = getValues.call(this);

            if (this.reset) {
                this.reset = false;
                $(this).css('transform', `perspective(${this.settings.perspective}px) rotateX(0deg) rotateY(0deg)`);

                // Rotate glare if enabled
                if (this.settings.glare){
                    this.glareElement.css('transform', `rotate(180deg) translate(-50%, -50%)`);
                    this.glareElement.css('opacity', `0`);
                }

                return;
            } else {
                $(this).css('transform', `perspective(${this.settings.perspective}px) rotateX(${this.settings.disableAxis === 'x' ? 0 : this.transforms.tiltY}deg) rotateY(${this.settings.disableAxis === 'y' ? 0 : this.transforms.tiltX}deg) scale3d(${this.settings.scale},${this.settings.scale},${this.settings.scale})`);

                // Rotate glare if enabled
                if (this.settings.glare){
                    this.glareElement.css('transform', `rotate(${this.transforms.angle}deg) translate(-50%, -50%)`);
                    this.glareElement.css('opacity', `${this.transforms.percentageY * this.settings.maxGlare / 100}`);
                }
            }

            // Trigger change event
            $(this).trigger("change", [this.transforms]);

            this.ticking = false;
        };

        /**
         * Prepare elements
         */
        const prepareGlare = function () {
            const glarePrerender = this.settings.glarePrerender;

            // If option pre-render is enabled we assume all html/css is present for an optimal glare effect.
            if (!glarePrerender)
            // Create glare element
                $(this).append('<div class="js-tilt-glare"><div class="js-tilt-glare-inner"></div></div>');

            // Store glare selector if glare is enabled
            this.glareElementWrapper = $(this).find(".js-tilt-glare");
            this.glareElement = $(this).find(".js-tilt-glare-inner");

            // Remember? We assume all css is already set, so just return
            if (glarePrerender) return;

            // Abstracted re-usable glare styles
            const stretch = {
                'position': 'absolute',
                'top': '0',
                'left': '0',
                'width': '100%',
                'height': '100%',
            };

            // Style glare wrapper
            this.glareElementWrapper.css(stretch).css({
                'overflow': 'hidden',
                'pointer-events': 'none',
            });

            // Style glare element
            this.glareElement.css({
                'position': 'absolute',
                'top': '50%',
                'left': '50%',
                'background-image': `linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)`,
                'width': `${$(this).outerWidth()*2}`,
                'height': `${$(this).outerWidth()*2}`,
                'transform': 'rotate(180deg) translate(-50%, -50%)',
                'transform-origin': '0% 0%',
                'opacity': '0',
            });

        };

        /**
         * Update glare on resize
         */
        const updateGlareSize = function () {
            this.glareElement.css({
                'width': `${$(this).outerWidth()*2}`,
                'height': `${$(this).outerWidth()*2}`,
            });
        };

        /**
         * Public methods
         */
        $.fn.tilt.destroy = function() {
            $(this).each(function () {
                $(this).find('.js-tilt-glare').remove();
                $(this).css({'will-change': '', 'transform': ''});
                $(this).off('mousemove mouseenter mouseleave');
            });
        };

        $.fn.tilt.getValues = function() {
            const results = [];
            $(this).each(function () {
                this.mousePositions = getMousePositions.call(this);
                results.push(getValues.call(this));
            });
            return results;
        };

        $.fn.tilt.reset = function() {
            $(this).each(function () {
                this.mousePositions = getMousePositions.call(this);
                this.settings = $(this).data('settings');
                mouseLeave.call(this);
                setTimeout(() => {
                    this.reset = false;
                }, this.settings.transition);
            });
        };

        /**
         * Loop every instance
         */
        return this.each(function () {

            /**
             * Default settings merged with user settings
             * Can be set trough data attributes or as parameter.
             * @type {*}
             */
            this.settings = $.extend({
                maxTilt: $(this).is('[data-tilt-max]') ? $(this).data('tilt-max') : 20,
                perspective: $(this).is('[data-tilt-perspective]') ? $(this).data('tilt-perspective') : 300,
                easing: $(this).is('[data-tilt-easing]') ? $(this).data('tilt-easing') : 'cubic-bezier(.03,.98,.52,.99)',
                scale: $(this).is('[data-tilt-scale]') ? $(this).data('tilt-scale') : '1',
                speed: $(this).is('[data-tilt-speed]') ? $(this).data('tilt-speed') : '400',
                transition: $(this).is('[data-tilt-transition]') ? $(this).data('tilt-transition') : true,
                disableAxis: $(this).is('[data-tilt-disable-axis]') ? $(this).data('tilt-disable-axis') : null,
                axis: $(this).is('[data-tilt-axis]') ? $(this).data('tilt-axis') : null,
                reset: $(this).is('[data-tilt-reset]') ? $(this).data('tilt-reset') : true,
                glare: $(this).is('[data-tilt-glare]') ? $(this).data('tilt-glare') : false,
                maxGlare: $(this).is('[data-tilt-maxglare]') ? $(this).data('tilt-maxglare') : 1,
            }, options);

            // Add deprecation warning & set disableAxis to deprecated axis setting
            if(this.settings.axis !== null){
                console.warn('Tilt.js: the axis setting has been renamed to disableAxis. See https://github.com/gijsroge/tilt.js/pull/26 for more information');
                this.settings.disableAxis = this.settings.axis;
            }

            this.init = () => {
                // Store settings
                $(this).data('settings', this.settings);

                // Prepare element
                if(this.settings.glare) prepareGlare.call(this);

                // Bind events
                bindEvents.call(this);
            };

            // Init
            this.init();

        });
    };

    /**
     * Auto load
     */
    $('[data-tilt]').tilt();

    return true;
}));

/* --------------------------------------------------------------------------------------------
 TWBS Pagination
 * jQuery Bootstrap Pagination v1.4.2
 * https://github.com/josecebe/twbs-pagination
 * Copyright 2014-2018, Eugene Simakin <john-24@list.ru>
 * Released under Apache-2.0 license
 * http://apache.org/licenses/LICENSE-2.0.html
-------------------------------------------------------------------------------------------- */
!function(o,e,t,s){"use strict";var i=o.fn.twbsPagination,r=function(t,s){if(this.$element=o(t),this.options=o.extend({},o.fn.twbsPagination.defaults,s),this.options.startPage<1||this.options.startPage>this.options.totalPages)throw new Error("Start page option is incorrect");if(this.options.totalPages=parseInt(this.options.totalPages),isNaN(this.options.totalPages))throw new Error("Total pages option is not correct!");if(this.options.visiblePages=parseInt(this.options.visiblePages),isNaN(this.options.visiblePages))throw new Error("Visible pages option is not correct!");if(this.options.beforePageClick instanceof Function&&this.$element.first().on("beforePage",this.options.beforePageClick),this.options.onPageClick instanceof Function&&this.$element.first().on("page",this.options.onPageClick),this.options.hideOnlyOnePage&&1==this.options.totalPages)return this.options.initiateStartPageClick&&this.$element.trigger("page",1),this;if(this.options.href&&(this.options.startPage=this.getPageFromQueryString(),this.options.startPage||(this.options.startPage=1)),"UL"===("function"==typeof this.$element.prop?this.$element.prop("tagName"):this.$element.attr("tagName")))this.$listContainer=this.$element;else{var e=this.$element,i=o([]);e.each(function(t){var s=o("<ul></ul>");o(this).append(s),i.push(s[0])}),this.$listContainer=i,this.$element=i}return this.$listContainer.addClass(this.options.paginationClass),this.options.initiateStartPageClick?this.show(this.options.startPage):(this.currentPage=this.options.startPage,this.render(this.getPages(this.options.startPage)),this.setupEvents()),this};r.prototype={constructor:r,destroy:function(){return this.$element.empty(),this.$element.removeData("twbs-pagination"),this.$element.off("page"),this},show:function(t){if(t<1||t>this.options.totalPages)throw new Error("Page is incorrect.");this.currentPage=t,this.$element.trigger("beforePage",t);var s=this.getPages(t);return this.render(s),this.setupEvents(),this.$element.trigger("page",t),s},enable:function(){this.show(this.currentPage)},disable:function(){var t=this;this.$listContainer.off("click").on("click","li",function(t){t.preventDefault()}),this.$listContainer.children().each(function(){o(this).hasClass(t.options.activeClass)||o(this).addClass(t.options.disabledClass)})},buildListItems:function(t){var s=[];if(this.options.first&&s.push(this.buildItem("first",1)),this.options.prev){var e=1<t.currentPage?t.currentPage-1:this.options.loop?this.options.totalPages:1;s.push(this.buildItem("prev",e))}for(var i=0;i<t.numeric.length;i++)s.push(this.buildItem("page",t.numeric[i]));if(this.options.next){var a=t.currentPage<this.options.totalPages?t.currentPage+1:this.options.loop?1:this.options.totalPages;s.push(this.buildItem("next",a))}return this.options.last&&s.push(this.buildItem("last",this.options.totalPages)),s},buildItem:function(t,s){var e=o("<li></li>"),i=o("<a></a>"),a=this.options[t]?this.makeText(this.options[t],s):s;return e.addClass(this.options[t+"Class"]),e.data("page",s),e.data("page-type",t),e.append(i.attr("href",this.makeHref(s)).addClass(this.options.anchorClass).html(a)),e},getPages:function(t){var s=[],e=Math.floor(this.options.visiblePages/2),i=t-e+1-this.options.visiblePages%2,a=t+e,n=this.options.visiblePages;n>this.options.totalPages&&(n=this.options.totalPages),i<=0&&(i=1,a=n),a>this.options.totalPages&&(i=this.options.totalPages-n+1,a=this.options.totalPages);for(var o=i;o<=a;)s.push(o),o++;return{currentPage:t,numeric:s}},render:function(s){var e=this;this.$listContainer.children().remove();var t=this.buildListItems(s);o.each(t,function(t,s){e.$listContainer.append(s)}),this.$listContainer.children().each(function(){var t=o(this);switch(t.data("page-type")){case"page":t.data("page")===s.currentPage&&t.addClass(e.options.activeClass);break;case"first":t.toggleClass(e.options.disabledClass,1===s.currentPage);break;case"last":t.toggleClass(e.options.disabledClass,s.currentPage===e.options.totalPages);break;case"prev":t.toggleClass(e.options.disabledClass,!e.options.loop&&1===s.currentPage);break;case"next":t.toggleClass(e.options.disabledClass,!e.options.loop&&s.currentPage===e.options.totalPages)}})},setupEvents:function(){var e=this;this.$listContainer.off("click").on("click","li",function(t){var s=o(this);if(s.hasClass(e.options.disabledClass)||s.hasClass(e.options.activeClass))return!1;!e.options.href&&t.preventDefault(),e.show(parseInt(s.data("page")))})},changeTotalPages:function(t,s){return this.options.totalPages=t,this.show(s)},makeHref:function(t){return this.options.href?this.generateQueryString(t):"#"},makeText:function(t,s){return t.replace(this.options.pageVariable,s).replace(this.options.totalPagesVariable,this.options.totalPages)},getPageFromQueryString:function(t){var s=this.getSearchString(t),e=new RegExp(this.options.pageVariable+"(=([^&#]*)|&|#|$)").exec(s);return e&&e[2]?(e=decodeURIComponent(e[2]),e=parseInt(e),isNaN(e)?null:e):null},generateQueryString:function(t,s){var e=this.getSearchString(s),i=new RegExp(this.options.pageVariable+"=*[^&#]*");return e?"?"+e.replace(i,this.options.pageVariable+"="+t):""},getSearchString:function(t){var s=t||e.location.search;return""===s?null:(0===s.indexOf("?")&&(s=s.substr(1)),s)},getCurrentPage:function(){return this.currentPage},getTotalPages:function(){return this.options.totalPages}},o.fn.twbsPagination=function(t){var s,e=Array.prototype.slice.call(arguments,1),i=o(this),a=i.data("twbs-pagination"),n="object"==typeof t?t:{};return a||i.data("twbs-pagination",a=new r(this,n)),"string"==typeof t&&(s=a[t].apply(a,e)),void 0===s?i:s},o.fn.twbsPagination.defaults={totalPages:1,startPage:1,visiblePages:5,initiateStartPageClick:!0,hideOnlyOnePage:!1,href:!1,pageVariable:"{{page}}",totalPagesVariable:"{{total_pages}}",page:null,first:"First",prev:"Previous",next:"Next",last:"Last",loop:!1,beforePageClick:null,onPageClick:null,paginationClass:"pagination",nextClass:"page-item next",prevClass:"page-item prev",lastClass:"page-item last",firstClass:"page-item first",pageClass:"page-item",activeClass:"active",disabledClass:"disabled",anchorClass:"page-link"},o.fn.twbsPagination.Constructor=r,o.fn.twbsPagination.noConflict=function(){return o.fn.twbsPagination=i,this},o.fn.twbsPagination.version="1.4.2"}(window.jQuery,window,document);