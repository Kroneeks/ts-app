"use strict";(self.webpackChunkfloristby=self.webpackChunkfloristby||[]).push([[224],{9970:(e,t,n)=>{n.d(t,{Q:()=>a});var r=n(7294);function a(e){(0,r.useEffect)((function(){e()}),[])}},5224:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Be});var r=n(1072),a=n(5401),o=n(9250),i=n(8979),l=n(8519),u=n(4942),s=n(7294),c=n(3007);const d={ProfileCard:"wW9jgKKD",editing:"DjTe7269",loading:"t07ZxFGs",error:"i5YK3SSb"};var p=n(1715),f=n(8312),v=n(379),b=n(2949),g=function(e){return e.USD="$ USD",e.EUR="€ EUR",e.GBP="£ GBP",e}({}),h=n(885),x=n(4192),m=n(5910),R=n(6723),y=n(3855);function O(e,t){let[n,r]=(0,s.useState)(e),a=(0,y.E)(e);return(0,R.e)((()=>r(a.current)),[a,r,...t]),n}var C,E=n(3784),T=n(5394),S=n(2984),P=n(2720),j=n(1363),N=n(1497),I=n(4103),L=n(4575),w=n(6567),A=n(4157),k=n(2966),D=((C=D||{})[C.None=1]="None",C[C.Focusable=2]="Focusable",C[C.Hidden=4]="Hidden",C);let U=(0,T.yV)((function(e,t){let{features:n=1,...r}=e,a={ref:t,"aria-hidden":2==(2&n)||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...4==(4&n)&&2!=(2&n)&&{display:"none"}}};return(0,T.sY)({ourProps:a,theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})}));function z(e={},t=null,n=[]){for(let[r,a]of Object.entries(e))_(n,M(t,r),a);return n}function M(e,t){return e?e+"["+t+"]":t}function _(e,t,n){if(Array.isArray(n))for(let[r,a]of n.entries())_(e,M(t,r.toString()),a);else n instanceof Date?e.push([t,n.toISOString()]):"boolean"==typeof n?e.push([t,n?"1":"0"]):"string"==typeof n?e.push([t,n]):"number"==typeof n?e.push([t,`${n}`]):null==n?e.push([t,""]):z(n,t,e)}var Z,V,G=n(5466),F=n(3781),Q=n(476),$=n(5257),Y=((V=Y||{})[V.Open=0]="Open",V[V.Closed=1]="Closed",V),B=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(B||{}),H=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(H||{}),W=((Z=W||{})[Z.OpenListbox=0]="OpenListbox",Z[Z.CloseListbox=1]="CloseListbox",Z[Z.GoToOption=2]="GoToOption",Z[Z.Search=3]="Search",Z[Z.ClearSearch=4]="ClearSearch",Z[Z.RegisterOption=5]="RegisterOption",Z[Z.UnregisterOption=6]="UnregisterOption",Z[Z.RegisterLabel=7]="RegisterLabel",Z);function K(e,t=(e=>e)){let n=null!==e.activeOptionIndex?e.options[e.activeOptionIndex]:null,r=(0,L.z2)(t(e.options.slice()),(e=>e.dataRef.current.domRef.current)),a=n?r.indexOf(n):null;return-1===a&&(a=null),{options:r,activeOptionIndex:a}}let J={1:e=>e.dataRef.current.disabled||1===e.listboxState?e:{...e,activeOptionIndex:null,listboxState:1},0(e){if(e.dataRef.current.disabled||0===e.listboxState)return e;let t=e.activeOptionIndex,{isSelected:n}=e.dataRef.current,r=e.options.findIndex((e=>n(e.dataRef.current.value)));return-1!==r&&(t=r),{...e,listboxState:0,activeOptionIndex:t}},2(e,t){var n;if(e.dataRef.current.disabled||1===e.listboxState)return e;let r=K(e),a=(0,N.d)(t,{resolveItems:()=>r.options,resolveActiveIndex:()=>r.activeOptionIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...r,searchQuery:"",activeOptionIndex:a,activationTrigger:null!=(n=t.trigger)?n:1}},3:(e,t)=>{if(e.dataRef.current.disabled||1===e.listboxState)return e;let n=""!==e.searchQuery?0:1,r=e.searchQuery+t.value.toLowerCase(),a=(null!==e.activeOptionIndex?e.options.slice(e.activeOptionIndex+n).concat(e.options.slice(0,e.activeOptionIndex+n)):e.options).find((e=>{var t;return!e.dataRef.current.disabled&&(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(r))})),o=a?e.options.indexOf(a):-1;return-1===o||o===e.activeOptionIndex?{...e,searchQuery:r}:{...e,searchQuery:r,activeOptionIndex:o,activationTrigger:1}},4:e=>e.dataRef.current.disabled||1===e.listboxState||""===e.searchQuery?e:{...e,searchQuery:""},5:(e,t)=>{let n={id:t.id,dataRef:t.dataRef},r=K(e,(e=>[...e,n]));return null===e.activeOptionIndex&&e.dataRef.current.isSelected(t.dataRef.current.value)&&(r.activeOptionIndex=r.options.indexOf(n)),{...e,...r}},6:(e,t)=>{let n=K(e,(e=>{let n=e.findIndex((e=>e.id===t.id));return-1!==n&&e.splice(n,1),e}));return{...e,...n,activationTrigger:1}},7:(e,t)=>({...e,labelId:t.id})},X=(0,s.createContext)(null);function q(e){let t=(0,s.useContext)(X);if(null===t){let t=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,q),t}return t}X.displayName="ListboxActionsContext";let ee=(0,s.createContext)(null);function te(e){let t=(0,s.useContext)(ee);if(null===t){let t=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,te),t}return t}function ne(e,t){return(0,S.E)(t.type,J,e,t)}ee.displayName="ListboxDataContext";let re=s.Fragment,ae=T.AN.RenderStrategy|T.AN.Static,oe=(0,T.yV)((function(e,t){let{value:n,defaultValue:r,form:a,name:o,onChange:i,by:l=((e,t)=>e===t),disabled:u=!1,horizontal:c=!1,multiple:d=!1,...p}=e;const f=c?"horizontal":"vertical";let v=(0,E.T)(t),[b=(d?[]:void 0),g]=function(e,t,n){let[r,a]=(0,s.useState)(n),o=void 0!==e,i=(0,s.useRef)(o),l=(0,s.useRef)(!1),u=(0,s.useRef)(!1);return!o||i.current||l.current?!o&&i.current&&!u.current&&(u.current=!0,i.current=o,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(l.current=!0,i.current=o,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[o?e:r,(0,F.z)((e=>(o||a(e),null==t?void 0:t(e))))]}(n,i,r),[h,m]=(0,s.useReducer)(ne,{dataRef:(0,s.createRef)(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),y=(0,s.useRef)({static:!1,hold:!1}),O=(0,s.useRef)(null),C=(0,s.useRef)(null),P=(0,s.useRef)(null),j=(0,F.z)("string"==typeof l?(e,t)=>{let n=l;return(null==e?void 0:e[n])===(null==t?void 0:t[n])}:l),I=(0,s.useCallback)((e=>(0,S.E)(A.mode,{1:()=>b.some((t=>j(t,e))),0:()=>j(b,e)})),[b]),A=(0,s.useMemo)((()=>({...h,value:b,disabled:u,mode:d?1:0,orientation:f,compare:j,isSelected:I,optionsPropsRef:y,labelRef:O,buttonRef:C,optionsRef:P})),[b,u,d,h]);(0,R.e)((()=>{h.dataRef.current=A}),[A]),(0,k.O)([A.buttonRef,A.optionsRef],((e,t)=>{var n;m({type:1}),(0,L.sP)(t,L.tJ.Loose)||(e.preventDefault(),null==(n=A.buttonRef.current)||n.focus())}),0===A.listboxState);let M=(0,s.useMemo)((()=>({open:0===A.listboxState,disabled:u,value:b})),[A,u,b]),_=(0,F.z)((e=>{let t=A.options.find((t=>t.id===e));t&&B(t.dataRef.current.value)})),Z=(0,F.z)((()=>{if(null!==A.activeOptionIndex){let{dataRef:e,id:t}=A.options[A.activeOptionIndex];B(e.current.value),m({type:2,focus:N.T.Specific,id:t})}})),V=(0,F.z)((()=>m({type:0}))),G=(0,F.z)((()=>m({type:1}))),Q=(0,F.z)(((e,t,n)=>e===N.T.Specific?m({type:2,focus:N.T.Specific,id:t,trigger:n}):m({type:2,focus:e,trigger:n}))),$=(0,F.z)(((e,t)=>(m({type:5,id:e,dataRef:t}),()=>m({type:6,id:e})))),Y=(0,F.z)((e=>(m({type:7,id:e}),()=>m({type:7,id:null})))),B=(0,F.z)((e=>(0,S.E)(A.mode,{0:()=>null==g?void 0:g(e),1(){let t=A.value.slice(),n=t.findIndex((t=>j(t,e)));return-1===n?t.push(e):t.splice(n,1),null==g?void 0:g(t)}}))),H=(0,F.z)((e=>m({type:3,value:e}))),W=(0,F.z)((()=>m({type:4}))),K=(0,s.useMemo)((()=>({onChange:B,registerOption:$,registerLabel:Y,goToOption:Q,closeListbox:G,openListbox:V,selectActiveOption:Z,selectOption:_,search:H,clearSearch:W})),[]),J={ref:v},q=(0,s.useRef)(null),te=(0,x.G)();return(0,s.useEffect)((()=>{q.current&&void 0!==r&&te.addEventListener(q.current,"reset",(()=>{null==g||g(r)}))}),[q,g]),s.createElement(X.Provider,{value:K},s.createElement(ee.Provider,{value:A},s.createElement(w.up,{value:(0,S.E)(A.listboxState,{0:w.ZM.Open,1:w.ZM.Closed})},null!=o&&null!=b&&z({[o]:b}).map((([e,t],n)=>s.createElement(U,{features:D.Hidden,ref:0===n?e=>{var t;q.current=null!=(t=null==e?void 0:e.closest("form"))?t:null}:void 0,...(0,T.oA)({key:e,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:a,name:e,value:t})}))),(0,T.sY)({ourProps:J,theirProps:p,slot:M,defaultTag:re,name:"Listbox"}))))})),ie=(0,T.yV)((function(e,t){var n;let r=(0,m.M)(),{id:a=`headlessui-listbox-button-${r}`,...o}=e,i=te("Listbox.Button"),l=q("Listbox.Button"),u=(0,E.T)(i.buttonRef,t),c=(0,x.G)(),d=(0,F.z)((e=>{switch(e.key){case j.R.Space:case j.R.Enter:case j.R.ArrowDown:e.preventDefault(),l.openListbox(),c.nextFrame((()=>{i.value||l.goToOption(N.T.First)}));break;case j.R.ArrowUp:e.preventDefault(),l.openListbox(),c.nextFrame((()=>{i.value||l.goToOption(N.T.Last)}))}})),p=(0,F.z)((e=>{e.key===j.R.Space&&e.preventDefault()})),f=(0,F.z)((e=>{if((0,I.P)(e.currentTarget))return e.preventDefault();0===i.listboxState?(l.closeListbox(),c.nextFrame((()=>{var e;return null==(e=i.buttonRef.current)?void 0:e.focus({preventScroll:!0})}))):(e.preventDefault(),l.openListbox())})),v=O((()=>{if(i.labelId)return[i.labelId,a].join(" ")}),[i.labelId,a]),b=(0,s.useMemo)((()=>({open:0===i.listboxState,disabled:i.disabled,value:i.value})),[i]),g={ref:u,id:a,type:(0,A.f)(e,i.buttonRef),"aria-haspopup":"listbox","aria-controls":null==(n=i.optionsRef.current)?void 0:n.id,"aria-expanded":0===i.listboxState,"aria-labelledby":v,disabled:i.disabled,onKeyDown:d,onKeyUp:p,onClick:f};return(0,T.sY)({ourProps:g,theirProps:o,slot:b,defaultTag:"button",name:"Listbox.Button"})})),le=(0,T.yV)((function(e,t){let n=(0,m.M)(),{id:r=`headlessui-listbox-label-${n}`,...a}=e,o=te("Listbox.Label"),i=q("Listbox.Label"),l=(0,E.T)(o.labelRef,t);(0,R.e)((()=>i.registerLabel(r)),[r]);let u=(0,F.z)((()=>{var e;return null==(e=o.buttonRef.current)?void 0:e.focus({preventScroll:!0})})),c=(0,s.useMemo)((()=>({open:0===o.listboxState,disabled:o.disabled})),[o]);return(0,T.sY)({ourProps:{ref:l,id:r,onClick:u},theirProps:a,slot:c,defaultTag:"label",name:"Listbox.Label"})})),ue=(0,T.yV)((function(e,t){var n;let r=(0,m.M)(),{id:a=`headlessui-listbox-options-${r}`,...o}=e,i=te("Listbox.Options"),l=q("Listbox.Options"),u=(0,E.T)(i.optionsRef,t),c=(0,x.G)(),d=(0,x.G)(),p=(0,w.oJ)(),f=null!==p?(p&w.ZM.Open)===w.ZM.Open:0===i.listboxState;(0,s.useEffect)((()=>{var e;let t=i.optionsRef.current;t&&0===i.listboxState&&t!==(null==(e=(0,G.r)(t))?void 0:e.activeElement)&&t.focus({preventScroll:!0})}),[i.listboxState,i.optionsRef]);let v=(0,F.z)((e=>{switch(d.dispose(),e.key){case j.R.Space:if(""!==i.searchQuery)return e.preventDefault(),e.stopPropagation(),l.search(e.key);case j.R.Enter:if(e.preventDefault(),e.stopPropagation(),null!==i.activeOptionIndex){let{dataRef:e}=i.options[i.activeOptionIndex];l.onChange(e.current.value)}0===i.mode&&(l.closeListbox(),(0,P.k)().nextFrame((()=>{var e;return null==(e=i.buttonRef.current)?void 0:e.focus({preventScroll:!0})})));break;case(0,S.E)(i.orientation,{vertical:j.R.ArrowDown,horizontal:j.R.ArrowRight}):return e.preventDefault(),e.stopPropagation(),l.goToOption(N.T.Next);case(0,S.E)(i.orientation,{vertical:j.R.ArrowUp,horizontal:j.R.ArrowLeft}):return e.preventDefault(),e.stopPropagation(),l.goToOption(N.T.Previous);case j.R.Home:case j.R.PageUp:return e.preventDefault(),e.stopPropagation(),l.goToOption(N.T.First);case j.R.End:case j.R.PageDown:return e.preventDefault(),e.stopPropagation(),l.goToOption(N.T.Last);case j.R.Escape:return e.preventDefault(),e.stopPropagation(),l.closeListbox(),c.nextFrame((()=>{var e;return null==(e=i.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));case j.R.Tab:e.preventDefault(),e.stopPropagation();break;default:1===e.key.length&&(l.search(e.key),d.setTimeout((()=>l.clearSearch()),350))}})),b=O((()=>{var e,t,n;return null!=(n=null==(e=i.labelRef.current)?void 0:e.id)?n:null==(t=i.buttonRef.current)?void 0:t.id}),[i.labelRef.current,i.buttonRef.current]),g=(0,s.useMemo)((()=>({open:0===i.listboxState})),[i]),h={"aria-activedescendant":null===i.activeOptionIndex||null==(n=i.options[i.activeOptionIndex])?void 0:n.id,"aria-multiselectable":1===i.mode||void 0,"aria-labelledby":b,"aria-orientation":i.orientation,id:a,onKeyDown:v,role:"listbox",tabIndex:0,ref:u};return(0,T.sY)({ourProps:h,theirProps:o,slot:g,defaultTag:"ul",features:ae,visible:f,name:"Listbox.Options"})})),se=(0,T.yV)((function(e,t){let n=(0,m.M)(),{id:r=`headlessui-listbox-option-${n}`,disabled:a=!1,value:o,...i}=e,l=te("Listbox.Option"),u=q("Listbox.Option"),c=null!==l.activeOptionIndex&&l.options[l.activeOptionIndex].id===r,d=l.isSelected(o),p=(0,s.useRef)(null),f=(0,$.x)(p),v=(0,y.E)({disabled:a,value:o,domRef:p,get textValue(){return f()}}),b=(0,E.T)(t,p);(0,R.e)((()=>{if(0!==l.listboxState||!c||0===l.activationTrigger)return;let e=(0,P.k)();return e.requestAnimationFrame((()=>{var e,t;null==(t=null==(e=p.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})})),e.dispose}),[p,c,l.listboxState,l.activationTrigger,l.activeOptionIndex]),(0,R.e)((()=>u.registerOption(r,v)),[v,r]);let g=(0,F.z)((e=>{if(a)return e.preventDefault();u.onChange(o),0===l.mode&&(u.closeListbox(),(0,P.k)().nextFrame((()=>{var e;return null==(e=l.buttonRef.current)?void 0:e.focus({preventScroll:!0})})))})),h=(0,F.z)((()=>{if(a)return u.goToOption(N.T.Nothing);u.goToOption(N.T.Specific,r)})),x=(0,Q.g)(),O=(0,F.z)((e=>x.update(e))),C=(0,F.z)((e=>{x.wasMoved(e)&&(a||c||u.goToOption(N.T.Specific,r,0))})),S=(0,F.z)((e=>{x.wasMoved(e)&&(a||c&&u.goToOption(N.T.Nothing))})),j=(0,s.useMemo)((()=>({active:c,selected:d,disabled:a})),[c,d,a]);return(0,T.sY)({ourProps:{id:r,ref:b,role:"option",tabIndex:!0===a?void 0:-1,"aria-disabled":!0===a||void 0,"aria-selected":d,disabled:void 0,onClick:g,onFocus:h,onPointerEnter:O,onMouseEnter:O,onPointerMove:C,onMouseMove:C,onPointerLeave:S,onMouseLeave:S},theirProps:i,slot:j,defaultTag:"li",name:"Listbox.Option"})})),ce=Object.assign(oe,{Button:ie,Label:le,Options:ue,Option:se});var de=n(5255),pe=n(5893),fe={"bottom left":"oFXYv034","bottom right":"Jl5DRf3z","top left":"aacUeHXS","top right":"c68gv_LQ"},ve=function(e){var t=e.className,n=void 0===t?"":t,r=e.items,a=e.value,o=e.defaultValue,i=e.onChange,d=e.readonly,p=e.direction,f=void 0===p?"bottom right":p,v=e.label,b=(0,s.useState)(),g=(0,h.Z)(b,2),x=g[0],m=(g[1],[fe[f]]);return(0,pe.jsxs)(l.U,{gap:"4",children:[v&&(0,pe.jsx)("span",{children:v}),(0,pe.jsxs)(ce,{disabled:d,as:"div",className:(0,c.A)("LsvjvEi8",{},[n]),value:x,onChange:i,children:[(0,pe.jsx)(ce.Button,{className:"qrO2mTX9",children:(0,pe.jsx)(de.zx,{disabled:d,children:null!=a?a:o})}),(0,pe.jsx)(ce.Options,{className:(0,c.A)("V57wMCSt",{},m),children:null==r?void 0:r.map((function(e){return(0,pe.jsx)(ce.Option,{value:e.value,disabled:e.disabled,as:s.Fragment,children:function(t){var n,r=t.active,a=t.selected;return(0,pe.jsxs)("li",{className:(0,c.A)("mBjSAlwm",(n={},(0,u.Z)(n,"lE7gaHdr",r),(0,u.Z)(n,"yYTJVDnW",e.disabled),n)),children:[a&&">",e.content]})}},e.id)}))})]})]})},be=[{value:g.USD,content:g.USD},{value:g.EUR,content:g.EUR},{value:g.GBP,content:g.GBP}],ge=(0,s.memo)((function(e){var t=(0,r.$G)("profilePage").t,n=e.className,a=void 0===n?"":n,o=e.value,i=e.readonly,l=void 0===i||i,u=e.onChange,c=(0,s.useCallback)((function(e){null==u||u(e)}),[u]);return(0,pe.jsx)(ve,{className:a,value:o,defaultValue:t("Укажите валюту"),label:t("Укажите валюту"),items:be,onChange:c,readonly:l,direction:"top right"})}));ge.displayName="CurrencySelect";var he=function(e){return e.Lithuania="Lithuania",e.Poland="Poland",e.US="United States",e}({}),xe=[{value:he.Lithuania,content:he.Lithuania},{value:he.Poland,content:he.Poland},{value:he.US,content:he.US}],me=(0,s.memo)((function(e){var t=(0,r.$G)("profilePage").t,n=e.className,a=void 0===n?"":n,o=e.value,i=e.readonly,l=void 0===i||i,u=e.onChange,c=(0,s.useCallback)((function(e){null==u||u(e)}),[u]);return(0,pe.jsx)(ve,{className:a,value:o,defaultValue:t("Укажите страну"),label:t("Укажите страну"),items:xe,onChange:c,readonly:l,direction:"top right"})}));me.displayName="CountrySelect";var Re=function(e){var t=(0,r.$G)("profilePage").t,n=e.className,a=void 0===n?"":n,o=e.data,i=e.isLoading,s=void 0!==i&&i,g=e.error,h=void 0===g?"":g,x=e.readonly,m=void 0===x||x,R=e.onChangeFirstname,y=e.onChangeLastname,O=e.onChangeAge,C=e.onChangeCity,E=e.onChangeUsername,T=e.onChangeAvatar,S=e.onChangeCurrency,P=e.onChangeCountry,j=(0,u.Z)({},d.editing,!m);return s?(0,pe.jsx)(l.U,{justify:"center",max:!0,className:(0,c.A)(d.ProfileCard,(0,u.Z)({},d.loading,!0),[a]),children:(0,pe.jsx)(v.a,{})}):h?(0,pe.jsx)(l.U,{justify:"center",max:!0,className:(0,c.A)(d.ProfileCard,{},[a,d.error]),children:(0,pe.jsx)(p.xv,{theme:p.lg.ERROR,align:p.PH.CENTER,title:t("Ошибка"),text:t("Непредвиденная ошибка")})}):(0,pe.jsxs)(l.g,{max:!0,gap:"16",className:(0,c.A)(d.ProfileCard,j,[a]),children:[(null==o?void 0:o.avatar)&&(0,pe.jsx)(l.U,{justify:"center",max:!0,className:d.avatarWrapper,children:(0,pe.jsx)(b.q,{src:null==o?void 0:o.avatar,alt:t("Аватар"),size:b.D.LARGE})}),(0,pe.jsx)(f.I,{value:null==o?void 0:o.first,className:d.input,placeholder:t("Ваше имя"),onChange:R,readonly:m}),(0,pe.jsx)(f.I,{value:null==o?void 0:o.lastname,className:d.input,placeholder:t("Ваша фамилия"),onChange:y,readonly:m}),(0,pe.jsx)(f.I,{value:null==o?void 0:o.age,className:d.input,placeholder:t("Ваш возраст"),onChange:O,readonly:m}),(0,pe.jsx)(f.I,{value:null==o?void 0:o.city,className:d.input,placeholder:t("Город"),onChange:C,readonly:m}),(0,pe.jsx)(f.I,{value:null==o?void 0:o.username,className:d.input,placeholder:t("Имя пользователя"),onChange:E,readonly:m}),(0,pe.jsx)(f.I,{value:null==o?void 0:o.avatar,className:d.input,placeholder:t("Введите ссылку на аватар"),onChange:T,readonly:m}),(0,pe.jsx)(ge,{className:d.input,onChange:S,readonly:m,value:null==o?void 0:o.currency}),(0,pe.jsx)(me,{className:d.input,onChange:P,readonly:m,value:null==o?void 0:o.country})]})},ye=n(743),Oe=function(e){var t;return null===(t=e.profile)||void 0===t?void 0:t.error},Ce=function(e){var t;return null===(t=e.profile)||void 0===t?void 0:t.form},Ee=function(e){var t;return null===(t=e.profile)||void 0===t?void 0:t.isLoading},Te=function(e){var t;return null===(t=e.profile)||void 0===t?void 0:t.readonly},Se=function(e){var t;return null===(t=e.profile)||void 0===t?void 0:t.validateError},Pe=n(4268),je=n(5861),Ne=n(4687),Ie=n.n(Ne),Le=(0,Pe.hg)("profile/fetchProfileData",function(){var e=(0,je.Z)(Ie().mark((function e(t,n){var r,a,o;return Ie().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.extra,a=n.rejectWithValue,e.prev=1,e.next=4,r.api.get("/profile/".concat(t));case 4:if((o=e.sent).data){e.next=7;break}throw new Error;case 7:return e.abrupt("return",o.data);case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",a("error"));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}()),we=function(e){return e.INCORRECT_USER_DATA="INCORRECT_USER_DATA",e.INCORRECT_AGE="INCORRECT_AGE",e.INCORRECT_COUNTRY="INCORRECT_COUNTRY",e.NO_DATA="NO_DATA",e.SERVER_ERROR="SERVER_ERROR",e}({}),Ae=function(e){if(!e)return[we.NO_DATA];var t=e.first,n=e.lastname,r=e.age,a=e.country,o=[];return t&&n||o.push(we.INCORRECT_USER_DATA),(!r||!Number.isInteger(r)||r>200||r<0)&&o.push(we.INCORRECT_AGE),a||o.push(we.INCORRECT_COUNTRY),o},ke=(0,Pe.hg)("profile/updateProfileData",function(){var e=(0,je.Z)(Ie().mark((function e(t,n){var r,a,o,i,l,u;return Ie().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.extra,a=n.rejectWithValue,o=n.getState,i=Ce(o()),!(l=Ae(i)).length){e.next=5;break}return e.abrupt("return",a(l));case 5:return e.prev=5,e.next=8,r.api.put("/profile/".concat(null==i?void 0:i.id),i);case 8:if((u=e.sent).data){e.next=11;break}throw new Error;case 11:return e.abrupt("return",u.data);case 14:return e.prev=14,e.t0=e.catch(5),e.abrupt("return",a([we.SERVER_ERROR]));case 17:case"end":return e.stop()}}),e,null,[[5,14]])})));return function(t,n){return e.apply(this,arguments)}}());function De(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ue(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?De(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):De(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ze=(0,Pe.oM)({name:"profile",initialState:{readonly:!0,isLoading:!1,error:void 0,data:void 0},reducers:{setReadonly:function(e,t){e.readonly=t.payload},cancelEdit:function(e){e.readonly=!0,e.validateError=void 0,e.form=e.data},updateProfile:function(e,t){e.form=Ue(Ue({},e.form),t.payload)},saveProfile:function(e){e.readonly=!0}},extraReducers:function(e){e.addCase(Le.pending,(function(e){e.error=void 0,e.isLoading=!0})),e.addCase(Le.fulfilled,(function(e,t){e.isLoading=!1,e.data=t.payload,e.form=t.payload})),e.addCase(Le.rejected,(function(e,t){e.isLoading=!1,e.error=t.payload})),e.addCase(ke.pending,(function(e){e.validateError=void 0,e.isLoading=!0})),e.addCase(ke.fulfilled,(function(e,t){e.isLoading=!1,e.data=t.payload,e.form=t.payload,e.readonly=!0,e.validateError=void 0})),e.addCase(ke.rejected,(function(e,t){e.isLoading=!1,e.validateError=t.payload}))}}),Me=ze.actions,_e=ze.reducer,Ze=n(1233),Ve=n(9970),Ge=n(5140),Fe=function(e){var t;return null===(t=e.profile)||void 0===t?void 0:t.data},Qe=(0,s.memo)((function(e){var t=e.className,n=(0,r.$G)("profilePage").t,o=(0,ye.v9)(Ge.m5),i=(0,ye.v9)(Fe),u=(null==o?void 0:o.id)===(null==i?void 0:i.id),d=(0,ye.v9)(Te),f=(0,a.T)(),v=(0,s.useCallback)((function(){f(Me.setReadonly(!1))}),[f]),b=(0,s.useCallback)((function(){f(Me.cancelEdit())}),[f]),g=(0,s.useCallback)((function(){f(ke())}),[f]);return(0,pe.jsxs)(l.U,{max:!0,justify:"between",className:(0,c.A)("",{},[t]),children:[(0,pe.jsx)(p.xv,{title:n("Профиль")}),u&&(0,pe.jsx)(pe.Fragment,{children:d?(0,pe.jsx)(de.zx,{theme:de.bn.OUTLINE,onClick:v,children:n("Редактировать")}):(0,pe.jsxs)(l.U,{gap:"8",children:[(0,pe.jsx)(de.zx,{theme:de.bn.OUTLINE_RED,onClick:b,children:n("Отменить")}),(0,pe.jsx)(de.zx,{theme:de.bn.OUTLINE,onClick:g,children:n("Сохранить")})]})})]})}));Qe.displayName="EditableProfileCardHeader";var $e={profile:_e},Ye=(0,s.memo)((function(e){e.className;var t,n=e.id,o=(0,r.$G)("profilePage").t,i=(0,a.T)(),l=(0,ye.v9)(Ce),c=(0,ye.v9)(Ee),d=(0,ye.v9)(Oe),f=(0,ye.v9)(Te),v=(0,ye.v9)(Se);(0,Ve.Q)((function(){n&&i(Le(n))}));var b=(t={},(0,u.Z)(t,we.SERVER_ERROR,o("Серверная ошибка")),(0,u.Z)(t,we.INCORRECT_AGE,o("Некорректный возраст")),(0,u.Z)(t,we.INCORRECT_COUNTRY,o("Некорректный регион")),(0,u.Z)(t,we.INCORRECT_USER_DATA,o("Имя и фамилия обязательны")),(0,u.Z)(t,we.NO_DATA,o("Данные не указаны")),t),g=(0,s.useCallback)((function(e){i(Me.updateProfile({first:null!=e?e:""}))}),[i]),h=(0,s.useCallback)((function(e){i(Me.updateProfile({lastname:null!=e?e:""}))}),[i]),x=(0,s.useCallback)((function(e){var t;/^\d+$/.test(null!=e?e:"")&&i(Me.updateProfile({age:null!==(t=Number(e))&&void 0!==t?t:0}))}),[i]),m=(0,s.useCallback)((function(e){i(Me.updateProfile({city:null!=e?e:""}))}),[i]),R=(0,s.useCallback)((function(e){i(Me.updateProfile({username:null!=e?e:""}))}),[i]),y=(0,s.useCallback)((function(e){i(Me.updateProfile({avatar:null!=e?e:""}))}),[i]),O=(0,s.useCallback)((function(e){i(Me.updateProfile({currency:e}))}),[i]),C=(0,s.useCallback)((function(e){i(Me.updateProfile({country:e}))}),[i]);return(0,pe.jsxs)(Ze.W,{reducers:$e,children:[(0,pe.jsx)(Qe,{}),(null==v?void 0:v.length)&&(null==v?void 0:v.map((function(e){return(0,pe.jsx)(p.xv,{theme:p.lg.ERROR,text:b[e]},e)}))),(0,pe.jsx)(Re,{data:l,isLoading:c,error:d,readonly:f,onChangeFirstname:g,onChangeLastname:h,onChangeAge:x,onChangeCity:m,onChangeUsername:R,onChangeAvatar:y,onChangeCurrency:O,onChangeCountry:C})]})}));Ye.displayName="EditableProfileCard";const Be=function(e){e.className;var t=(0,r.$G)("profilePage").t,n=((0,a.T)(),(0,o.UO)().id);return n?(0,pe.jsx)(i.T,{children:(0,pe.jsx)(l.g,{max:!0,gap:"16",children:(0,pe.jsx)(Ye,{id:n})})}):(0,pe.jsx)(p.xv,{theme:p.lg.ERROR,text:t("Не удалось загрузить профиль")})}},1233:(e,t,n)=>{n.d(t,{W:()=>u});var r=n(885),a=n(7294),o=n(743),i=n(5401),l=n(5893),u=function(e){var t=e.children,n=e.reducers,u=e.removeAfterUnmount,s=void 0===u||u,c=(0,o.oR)(),d=(0,i.T)();return(0,a.useEffect)((function(){var e=c.reducerManager.getMountedReducers();return Object.entries(n).forEach((function(t){var n=(0,r.Z)(t,2),a=n[0],o=n[1];e[a]||(c.reducerManager.add(a,o),d({type:"@INIT ".concat(a," reducer")}))})),function(){s&&Object.entries(n).forEach((function(e){var t=(0,r.Z)(e,2),n=t[0];t[1],c.reducerManager.remove(n),d({type:"@DESTROY ".concat(n," reducer")})}))}}),[d,n,s,c.reducerManager]),(0,l.jsx)(l.Fragment,{children:t})}},8312:(e,t,n)=>{n.d(t,{I:()=>s});var r=n(4942),a=n(4925),o=n(3007);var i=n(7294),l=n(5893),u=["className","value","type","placeholder","onChange","readonly","data-testid"],s=(0,i.memo)((function(e){var t=e.className,n=void 0===t?"":t,i=e.value,s=void 0===i?"":i,c=e.type,d=void 0===c?"text":c,p=e.placeholder,f=void 0===p?"":p,v=e.onChange,b=e.readonly,g=void 0!==b&&b,h=(e["data-testid"],(0,a.Z)(e,u),(0,r.Z)({},"fTN1PnWu",g));return(0,l.jsx)("div",{className:(0,o.A)("X8EVbQ1x",h,[n]),children:(0,l.jsx)("input",{type:d,value:s,readOnly:g,onChange:function(e){null==v||v(e.target.value)},placeholder:f})})}));s.displayName="Input"},8519:(e,t,n)=>{n.d(t,{U:()=>l,g:()=>u.g});var r=n(4942),a=n(3562),o=n(5893);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var l=function(e){return(0,o.jsx)(a.k,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({direction:"row"},e))},u=n(4092)},8979:(e,t,n)=>{n.d(t,{T:()=>p});var r=n(3007);var a=n(7294),o=n(885),i=n(5401),l=n(8183),u=n(9250),s=n(9970),c=n(743),d=n(5893),p=(0,a.memo)((function(e){var t=e.className,n=void 0===t?"":t,p=e.children,f=e.onScrollEnd,v=(0,a.useRef)(),b=(0,a.useRef)(),g=(0,i.T)(),h=(0,u.TH)().pathname,x=(0,c.v9)((function(e){return(0,l.Qi)(e,h)}));!function(e){var t=e.callback,n=e.wrapperRef,r=e.triggerRef;(0,a.useEffect)((function(){var e=null;if(t){var a={root:n.current,rootMargin:"0px",threshold:1};return(e=new IntersectionObserver((function(e){(0,o.Z)(e,1)[0].isIntersecting&&t()}),a)).observe(r.current),function(){e&&r.current&&e.unobserve(r.current)}}}),[n,r,t])}({triggerRef:b,wrapperRef:v,callback:f}),(0,s.Q)((function(){v.current.scrollTop=x}));var m,R,y=(m=function(e){g(l.Aw.setScrollPosition({position:e.currentTarget.scrollTop,path:h}))},500,R=(0,a.useRef)(!1),(0,a.useCallback)((function(){R.current||(m.apply(void 0,arguments),R.current=!0,setTimeout((function(){R.current=!1}),500))}),[m,500]));return(0,d.jsxs)("main",{ref:v,className:(0,r.A)("a83jDcrK",{},[n]),onScroll:y,children:[p,f?(0,d.jsx)("div",{className:"VaPQ__zP",ref:b}):null]})}));p.displayName="Page"}}]);