"use strict";(self.webpackChunkfloristby=self.webpackChunkfloristby||[]).push([[196],{4196:(e,r,n)=>{n.r(r),n.d(r,{default:()=>s});var t=n(5893),o=n(8418),a=n(7294),l=n(1072),c=n(6925),u=n(314);const s=function(){var e=(0,l.$G)("main").t,r=(0,a.useState)(""),n=r[0],s=r[1];return(0,t.jsxs)(u.T,{children:[e("Главная страница"),(0,t.jsx)(o.A,{}),(0,t.jsx)(c.I,{value:n,onChange:function(e){s(e)}})]})}},6925:(e,r,n)=>{n.d(r,{I:()=>l});var t=n(5893),o=n(4611);var a=n(7294),l=(0,a.memo)((function(e){var r,n=e.className,a=void 0===n?"":n,l=e.value,c=void 0===l?"":l,u=e.type,s=void 0===u?"text":u,i=e.placeholder,f=void 0===i?"":i,p=e.onChange,v=e.readonly,d=void 0!==v&&v,h=(function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)r.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(n[t[o]]=e[t[o]])}}(e,["className","value","type","placeholder","onChange","readonly"]),(r={}).fTN1PnWu=d,r);return(0,t.jsx)("div",{className:(0,o.A)("X8EVbQ1x",h,[a]),children:(0,t.jsx)("input",{type:s,value:c,readOnly:d,onChange:function(e){null==p||p(e.target.value)},placeholder:f})})}));l.displayName="Input"},314:(e,r,n)=>{n.d(r,{T:()=>f});var t=n(5893),o=n(4611);var a=n(7294),l=n(5461),c=n(6294),u=n(9250),s=n(2276),i=n(5998),f=(0,a.memo)((function(e){var r=e.className,n=void 0===r?"":r,f=e.children,p=e.onScrollEnd,v=(0,a.useRef)(),d=(0,a.useRef)(),h=(0,l.T)(),y=(0,u.TH)().pathname,b=(0,i.v9)((function(e){return(0,c.Qi)(e,y)}));!function(e){var r=e.callback,n=e.wrapperRef,t=e.triggerRef;(0,a.useEffect)((function(){var e=null;if(r){var o={root:n.current,rootMargin:"0px",threshold:1};return e=new IntersectionObserver((function(e){e[0].isIntersecting&&r()}),o),e.observe(t.current),function(){e&&t.current&&e.unobserve(t.current)}}}),[n,t,r])}({triggerRef:d,wrapperRef:v,callback:p}),(0,s.Q)((function(){v.current.scrollTop=b}));var g,m,j=(g=function(e){console.log("SCROLL"),h(c.Aw.setScrollPosition({position:e.currentTarget.scrollTop,path:y}))},500,m=(0,a.useRef)(!1),(0,a.useCallback)((function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];m.current||(g.apply(void 0,e),m.current=!0,setTimeout((function(){m.current=!1}),500))}),[g,500]));return(0,t.jsxs)("section",{ref:v,className:(0,o.A)("a83jDcrK",{},[n]),onScroll:j,children:[f,p?(0,t.jsx)("div",{className:"VaPQ__zP",ref:d}):null]})}));f.displayName="Page"},2276:(e,r,n)=>{n.d(r,{Q:()=>o});var t=n(7294);function o(e){(0,t.useEffect)((function(){e()}),[])}}}]);