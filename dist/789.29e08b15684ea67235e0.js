"use strict";(self.webpackChunkfloristby=self.webpackChunkfloristby||[]).push([[789],{9970:(e,n,a)=>{a.d(n,{Q:()=>t});var r=a(7294);function t(e){(0,r.useEffect)((function(){e()}),[])}},5789:(e,n,a)=>{a.r(n),a.d(n,{default:()=>X});var r=a(1072),t=a(5401),o=a(9250),l=a(8979),i=a(8519),u=a(4942),c=a(7294),d=a(3007);const s={ProfileCard:"wW9jgKKD",editing:"DjTe7269",loading:"t07ZxFGs",error:"i5YK3SSb"};var f=a(1715),v=a(8312),p=a(379),h=a(2949),g=function(e){return e.USD="$ USD",e.EUR="€ EUR",e.GBP="£ GBP",e}({}),C=a(4342),m=a(5893),R=[{value:g.USD,content:g.USD},{value:g.EUR,content:g.EUR},{value:g.GBP,content:g.GBP}],y=(0,c.memo)((function(e){var n=(0,r.$G)("profilePage").t,a=e.className,t=void 0===a?"":a,o=e.value,l=e.readonly,i=void 0===l||l,u=e.onChange,d=(0,c.useCallback)((function(e){null==u||u(e)}),[u]);return(0,m.jsx)(C.w,{className:t,value:o,defaultValue:n("Укажите валюту"),label:n("Укажите валюту"),items:R,onChange:d,readonly:i,direction:"top right"})}));y.displayName="CurrencySelect";var x=function(e){return e.Lithuania="Lithuania",e.Poland="Poland",e.US="United States",e}({}),E=[{value:x.Lithuania,content:x.Lithuania},{value:x.Poland,content:x.Poland},{value:x.US,content:x.US}],j=(0,c.memo)((function(e){var n=(0,r.$G)("profilePage").t,a=e.className,t=void 0===a?"":a,o=e.value,l=e.readonly,i=void 0===l||l,u=e.onChange,d=(0,c.useCallback)((function(e){null==u||u(e)}),[u]);return(0,m.jsx)(C.w,{className:t,value:o,defaultValue:n("Укажите страну"),label:n("Укажите страну"),items:E,onChange:d,readonly:i,direction:"top right"})}));j.displayName="CountrySelect";var N=function(e){var n=(0,r.$G)("profilePage").t,a=e.className,t=void 0===a?"":a,o=e.data,l=e.isLoading,c=void 0!==l&&l,g=e.error,C=void 0===g?"":g,R=e.readonly,x=void 0===R||R,E=e.onChangeFirstname,N=e.onChangeLastname,b=e.onChangeAge,O=e.onChangeCity,P=e.onChangeUsername,T=e.onChangeAvatar,A=e.onChangeCurrency,U=e.onChangeCountry,k=(0,u.Z)({},s.editing,!x);return c?(0,m.jsx)(i.U,{justify:"center",max:!0,className:(0,d.A)(s.ProfileCard,(0,u.Z)({},s.loading,!0),[t]),children:(0,m.jsx)(p.a,{})}):C?(0,m.jsx)(i.U,{justify:"center",max:!0,className:(0,d.A)(s.ProfileCard,{},[t,s.error]),children:(0,m.jsx)(f.xv,{theme:f.lg.ERROR,align:f.PH.CENTER,title:n("Ошибка"),text:n("Непредвиденная ошибка")})}):(0,m.jsxs)(i.g,{max:!0,gap:"16",className:(0,d.A)(s.ProfileCard,k,[t]),children:[(null==o?void 0:o.avatar)&&(0,m.jsx)(i.U,{justify:"center",max:!0,className:s.avatarWrapper,children:(0,m.jsx)(h.q,{src:null==o?void 0:o.avatar,alt:n("Аватар"),size:h.D.LARGE})}),(0,m.jsx)(v.I,{value:null==o?void 0:o.first,className:s.input,placeholder:n("Ваше имя"),onChange:E,readonly:x}),(0,m.jsx)(v.I,{value:null==o?void 0:o.lastname,className:s.input,placeholder:n("Ваша фамилия"),onChange:N,readonly:x}),(0,m.jsx)(v.I,{value:null==o?void 0:o.age,className:s.input,placeholder:n("Ваш возраст"),onChange:b,readonly:x}),(0,m.jsx)(v.I,{value:null==o?void 0:o.city,className:s.input,placeholder:n("Город"),onChange:O,readonly:x}),(0,m.jsx)(v.I,{value:null==o?void 0:o.username,className:s.input,placeholder:n("Имя пользователя"),onChange:P,readonly:x}),(0,m.jsx)(v.I,{value:null==o?void 0:o.avatar,className:s.input,placeholder:n("Введите ссылку на аватар"),onChange:T,readonly:x}),(0,m.jsx)(y,{className:s.input,onChange:A,readonly:x,value:null==o?void 0:o.currency}),(0,m.jsx)(j,{className:s.input,onChange:U,readonly:x,value:null==o?void 0:o.country})]})},b=a(743),O=function(e){var n;return null===(n=e.profile)||void 0===n?void 0:n.error},P=function(e){var n;return null===(n=e.profile)||void 0===n?void 0:n.form},T=function(e){var n;return null===(n=e.profile)||void 0===n?void 0:n.isLoading},A=function(e){var n;return null===(n=e.profile)||void 0===n?void 0:n.readonly},U=function(e){var n;return null===(n=e.profile)||void 0===n?void 0:n.validateError},k=a(4268),I=a(5861),S=a(4687),_=a.n(S),w=(0,k.hg)("profile/fetchProfileData",function(){var e=(0,I.Z)(_().mark((function e(n,a){var r,t,o;return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.extra,t=a.rejectWithValue,e.prev=1,e.next=4,r.api.get("/profile/".concat(n));case 4:if((o=e.sent).data){e.next=7;break}throw new Error;case 7:return e.abrupt("return",o.data);case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",t("error"));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(n,a){return e.apply(this,arguments)}}()),D=function(e){return e.INCORRECT_USER_DATA="INCORRECT_USER_DATA",e.INCORRECT_AGE="INCORRECT_AGE",e.INCORRECT_COUNTRY="INCORRECT_COUNTRY",e.NO_DATA="NO_DATA",e.SERVER_ERROR="SERVER_ERROR",e}({}),L=function(e){if(!e)return[D.NO_DATA];var n=e.first,a=e.lastname,r=e.age,t=e.country,o=[];return n&&a||o.push(D.INCORRECT_USER_DATA),(!r||!Number.isInteger(r)||r>200||r<0)&&o.push(D.INCORRECT_AGE),t||o.push(D.INCORRECT_COUNTRY),o},G=(0,k.hg)("profile/updateProfileData",function(){var e=(0,I.Z)(_().mark((function e(n,a){var r,t,o,l,i,u;return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=a.extra,t=a.rejectWithValue,o=a.getState,l=P(o()),!(i=L(l)).length){e.next=5;break}return e.abrupt("return",t(i));case 5:return e.prev=5,e.next=8,r.api.put("/profile/".concat(null==l?void 0:l.id),l);case 8:if((u=e.sent).data){e.next=11;break}throw new Error;case 11:return e.abrupt("return",u.data);case 14:return e.prev=14,e.t0=e.catch(5),e.abrupt("return",t([D.SERVER_ERROR]));case 17:case"end":return e.stop()}}),e,null,[[5,14]])})));return function(n,a){return e.apply(this,arguments)}}());function Z(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function V(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?Z(Object(a),!0).forEach((function(n){(0,u.Z)(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Z(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}var $=(0,k.oM)({name:"profile",initialState:{readonly:!0,isLoading:!1,error:void 0,data:void 0},reducers:{setReadonly:function(e,n){e.readonly=n.payload},cancelEdit:function(e){e.readonly=!0,e.validateError=void 0,e.form=e.data},updateProfile:function(e,n){e.form=V(V({},e.form),n.payload)},saveProfile:function(e){e.readonly=!0}},extraReducers:function(e){e.addCase(w.pending,(function(e){e.error=void 0,e.isLoading=!0})),e.addCase(w.fulfilled,(function(e,n){e.isLoading=!1,e.data=n.payload,e.form=n.payload})),e.addCase(w.rejected,(function(e,n){e.isLoading=!1,e.error=n.payload})),e.addCase(G.pending,(function(e){e.validateError=void 0,e.isLoading=!0})),e.addCase(G.fulfilled,(function(e,n){e.isLoading=!1,e.data=n.payload,e.form=n.payload,e.readonly=!0,e.validateError=void 0})),e.addCase(G.rejected,(function(e,n){e.isLoading=!1,e.validateError=n.payload}))}}),M=$.actions,W=$.reducer,Q=a(1233),Y=a(9970),z=a(5140),F=function(e){var n;return null===(n=e.profile)||void 0===n?void 0:n.data},B=a(5255),K=(0,c.memo)((function(e){var n=e.className,a=(0,r.$G)("profilePage").t,o=(0,b.v9)(z.m5),l=(0,b.v9)(F),u=(null==o?void 0:o.id)===(null==l?void 0:l.id),s=(0,b.v9)(A),v=(0,t.T)(),p=(0,c.useCallback)((function(){v(M.setReadonly(!1))}),[v]),h=(0,c.useCallback)((function(){v(M.cancelEdit())}),[v]),g=(0,c.useCallback)((function(){v(G())}),[v]);return(0,m.jsxs)(i.U,{max:!0,justify:"between",className:(0,d.A)("",{},[n]),children:[(0,m.jsx)(f.xv,{title:a("Профиль")}),u&&(0,m.jsx)(m.Fragment,{children:s?(0,m.jsx)(B.zx,{theme:B.bn.OUTLINE,onClick:p,children:a("Редактировать")}):(0,m.jsxs)(i.U,{gap:"8",children:[(0,m.jsx)(B.zx,{theme:B.bn.OUTLINE_RED,onClick:h,children:a("Отменить")}),(0,m.jsx)(B.zx,{theme:B.bn.OUTLINE,onClick:g,children:a("Сохранить")})]})})]})}));K.displayName="EditableProfileCardHeader";var H={profile:W},q=(0,c.memo)((function(e){e.className;var n,a=e.id,o=(0,r.$G)("profilePage").t,l=(0,t.T)(),i=(0,b.v9)(P),d=(0,b.v9)(T),s=(0,b.v9)(O),v=(0,b.v9)(A),p=(0,b.v9)(U);(0,Y.Q)((function(){a&&l(w(a))}));var h=(n={},(0,u.Z)(n,D.SERVER_ERROR,o("Серверная ошибка")),(0,u.Z)(n,D.INCORRECT_AGE,o("Некорректный возраст")),(0,u.Z)(n,D.INCORRECT_COUNTRY,o("Некорректный регион")),(0,u.Z)(n,D.INCORRECT_USER_DATA,o("Имя и фамилия обязательны")),(0,u.Z)(n,D.NO_DATA,o("Данные не указаны")),n),g=(0,c.useCallback)((function(e){l(M.updateProfile({first:null!=e?e:""}))}),[l]),C=(0,c.useCallback)((function(e){l(M.updateProfile({lastname:null!=e?e:""}))}),[l]),R=(0,c.useCallback)((function(e){var n;/^\d+$/.test(null!=e?e:"")&&l(M.updateProfile({age:null!==(n=Number(e))&&void 0!==n?n:0}))}),[l]),y=(0,c.useCallback)((function(e){l(M.updateProfile({city:null!=e?e:""}))}),[l]),x=(0,c.useCallback)((function(e){l(M.updateProfile({username:null!=e?e:""}))}),[l]),E=(0,c.useCallback)((function(e){l(M.updateProfile({avatar:null!=e?e:""}))}),[l]),j=(0,c.useCallback)((function(e){l(M.updateProfile({currency:e}))}),[l]),k=(0,c.useCallback)((function(e){l(M.updateProfile({country:e}))}),[l]);return(0,m.jsxs)(Q.W,{reducers:H,children:[(0,m.jsx)(K,{}),(null==p?void 0:p.length)&&(null==p?void 0:p.map((function(e){return(0,m.jsx)(f.xv,{theme:f.lg.ERROR,text:h[e]},e)}))),(0,m.jsx)(N,{data:i,isLoading:d,error:s,readonly:v,onChangeFirstname:g,onChangeLastname:C,onChangeAge:R,onChangeCity:y,onChangeUsername:x,onChangeAvatar:E,onChangeCurrency:j,onChangeCountry:k})]})}));q.displayName="EditableProfileCard";const X=function(e){e.className;var n=(0,r.$G)("profilePage").t,a=((0,t.T)(),(0,o.UO)().id);return a?(0,m.jsx)(l.T,{children:(0,m.jsx)(i.g,{max:!0,gap:"16",children:(0,m.jsx)(q,{id:a})})}):(0,m.jsx)(f.xv,{theme:f.lg.ERROR,text:n("Не удалось загрузить профиль")})}},1233:(e,n,a)=>{a.d(n,{W:()=>u});var r=a(885),t=a(7294),o=a(743),l=a(5401),i=a(5893),u=function(e){var n=e.children,a=e.reducers,u=e.removeAfterUnmount,c=void 0===u||u,d=(0,o.oR)(),s=(0,l.T)();return(0,t.useEffect)((function(){var e=d.reducerManager.getMountedReducers();return Object.entries(a).forEach((function(n){var a=(0,r.Z)(n,2),t=a[0],o=a[1];e[t]||(d.reducerManager.add(t,o),s({type:"@INIT ".concat(t," reducer")}))})),function(){c&&Object.entries(a).forEach((function(e){var n=(0,r.Z)(e,2),a=n[0];n[1],d.reducerManager.remove(a),s({type:"@DESTROY ".concat(a," reducer")})}))}}),[s,a,c,d.reducerManager]),(0,i.jsx)(i.Fragment,{children:n})}},8312:(e,n,a)=>{a.d(n,{I:()=>c});var r=a(4942),t=a(4925),o=a(3007);var l=a(7294),i=a(5893),u=["className","value","type","placeholder","onChange","readonly","data-testid"],c=(0,l.memo)((function(e){var n=e.className,a=void 0===n?"":n,l=e.value,c=void 0===l?"":l,d=e.type,s=void 0===d?"text":d,f=e.placeholder,v=void 0===f?"":f,p=e.onChange,h=e.readonly,g=void 0!==h&&h,C=(e["data-testid"],(0,t.Z)(e,u),(0,r.Z)({},"fTN1PnWu",g));return(0,i.jsx)("div",{className:(0,o.A)("X8EVbQ1x",C,[a]),children:(0,i.jsx)("input",{type:s,value:c,readOnly:g,onChange:function(e){null==p||p(e.target.value)},placeholder:v})})}));c.displayName="Input"},8979:(e,n,a)=>{a.d(n,{T:()=>f});var r=a(3007);var t=a(7294),o=a(885),l=a(5401),i=a(8183),u=a(9250),c=a(9970),d=a(743),s=a(5893),f=(0,t.memo)((function(e){var n=e.className,a=void 0===n?"":n,f=e.children,v=e.onScrollEnd,p=(0,t.useRef)(),h=(0,t.useRef)(),g=(0,l.T)(),C=(0,u.TH)().pathname,m=(0,d.v9)((function(e){return(0,i.Qi)(e,C)}));!function(e){var n=e.callback,a=e.wrapperRef,r=e.triggerRef;(0,t.useEffect)((function(){var e=null;if(n){var t={root:a.current,rootMargin:"0px",threshold:1};return(e=new IntersectionObserver((function(e){(0,o.Z)(e,1)[0].isIntersecting&&n()}),t)).observe(r.current),function(){e&&r.current&&e.unobserve(r.current)}}}),[a,r,n])}({triggerRef:h,wrapperRef:p,callback:v}),(0,c.Q)((function(){p.current.scrollTop=m}));var R,y,x=(R=function(e){g(i.Aw.setScrollPosition({position:e.currentTarget.scrollTop,path:C}))},500,y=(0,t.useRef)(!1),(0,t.useCallback)((function(){y.current||(R.apply(void 0,arguments),y.current=!0,setTimeout((function(){y.current=!1}),500))}),[R,500]));return(0,s.jsxs)("main",{ref:p,className:(0,r.A)("a83jDcrK",{},[a]),onScroll:x,children:[f,v?(0,s.jsx)("div",{className:"VaPQ__zP",ref:h}):null]})}));f.displayName="Page"}}]);