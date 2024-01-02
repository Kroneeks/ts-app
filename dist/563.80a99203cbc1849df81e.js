"use strict";(self.webpackChunkfloristby=self.webpackChunkfloristby||[]).push([[563],{1563:(e,r,n)=>{n.r(r),n.d(r,{default:()=>F});var a=n(5861),t=n(4687),o=n.n(t),s=n(3007);var i=n(1072),u=n(5255),l=n(8312),c=n(743),d=n(7294),v=n(4268),f=n(5140),p=n(1283),m=(0,v.hg)("login/loginByUsername",function(){var e=(0,a.Z)(o().mark((function e(r,n){var a,t,s,i,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.dispatch,t=n.extra,s=n.rejectWithValue,e.prev=1,e.next=4,t.api.post("/login",r);case 4:if((u=e.sent).data){e.next=7;break}throw new Error;case 7:return localStorage.setItem(p.z_,JSON.stringify(u.data)),a(f.hI.setAuthData(u.data)),null===(i=t.navigate)||void 0===i||i.call(t,"/about"),e.abrupt("return",u.data);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",s("error"));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(r,n){return e.apply(this,arguments)}}()),g=(0,v.oM)({name:"login",initialState:{isLoading:!1,username:"",password:""},reducers:{setUsername:function(e,r){e.username=r.payload},setPassword:function(e,r){e.password=r.payload}},extraReducers:function(e){e.addCase(m.pending,(function(e,r){e.error=void 0,e.isLoading=!0})),e.addCase(m.fulfilled,(function(e,r){e.isLoading=!1})),e.addCase(m.rejected,(function(e,r){e.isLoading=!1,e.error=r.payload}))}}),h=g.actions,x=g.reducer,y=n(1715),b=function(e){var r;return(null==e||null===(r=e.loginForm)||void 0===r?void 0:r.username)||""},N=function(e){var r;return(null==e||null===(r=e.loginForm)||void 0===r?void 0:r.password)||""},j=function(e){var r;return null==e||null===(r=e.loginForm)||void 0===r?void 0:r.error},w=function(e){var r;return(null==e||null===(r=e.loginForm)||void 0===r?void 0:r.isLoading)||!1},C=n(1233),k=n(5401),E=n(5893),I={loginForm:x},R=(0,d.memo)((function(e){var r=e.className,n=void 0===r?"":r,t=e.onSuccess,v=(0,i.$G)("loginForm").t,f=(0,k.T)(),p=(0,c.v9)(b),g=(0,c.v9)(N),x=(0,c.v9)(j),R=(0,c.v9)(w),F=(0,d.useCallback)((function(e){f(h.setUsername(e))}),[f]),M=(0,d.useCallback)((function(e){f(h.setPassword(e))}),[f]),O=(0,d.useCallback)((0,a.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(m({username:p,password:g}));case 2:"fulfilled"===e.sent.meta.requestStatus&&t();case 4:case"end":return e.stop()}}),e)}))),[t,f,p,g]);return(0,E.jsx)(C.W,{reducers:I,children:(0,E.jsxs)("div",{className:(0,s.A)("xYNEfcE9",{},[n]),children:[(0,E.jsx)(y.xv,{title:v("Форма авторизации"),className:"tNHSryI8"}),x&&(0,E.jsx)(y.xv,{text:v("Вы ввели неверный логин или пароль"),theme:y.lg.ERROR,className:"eMRip_RU"}),(0,E.jsx)(l.I,{value:p,onChange:F,placeholder:"Введите логин"}),(0,E.jsx)(l.I,{value:g,onChange:M,placeholder:"Введите пароль"}),(0,E.jsx)(u.zx,{onClick:O,className:"Ok_5amJo",disabled:R,children:v("Войти")})]})})}));R.displayName="LoginForm";const F=R},1233:(e,r,n)=>{n.d(r,{W:()=>u});var a=n(885),t=n(7294),o=n(743),s=n(5401),i=n(5893),u=function(e){var r=e.children,n=e.reducers,u=e.removeAfterUnmount,l=void 0===u||u,c=(0,o.oR)(),d=(0,s.T)();return(0,t.useEffect)((function(){var e=c.reducerManager.getMountedReducers();return Object.entries(n).forEach((function(r){var n=(0,a.Z)(r,2),t=n[0],o=n[1];e[t]||(c.reducerManager.add(t,o),d({type:"@INIT ".concat(t," reducer")}))})),function(){l&&Object.entries(n).forEach((function(e){var r=(0,a.Z)(e,2),n=r[0];r[1],c.reducerManager.remove(n),d({type:"@DESTROY ".concat(n," reducer")})}))}}),[d,n,l,c.reducerManager]),(0,i.jsx)(i.Fragment,{children:r})}},8312:(e,r,n)=>{n.d(r,{I:()=>l});var a=n(4942),t=n(4925),o=n(3007);var s=n(7294),i=n(5893),u=["className","value","type","placeholder","onChange","readonly","data-testid"],l=(0,s.memo)((function(e){var r=e.className,n=void 0===r?"":r,s=e.value,l=void 0===s?"":s,c=e.type,d=void 0===c?"text":c,v=e.placeholder,f=void 0===v?"":v,p=e.onChange,m=e.readonly,g=void 0!==m&&m,h=(e["data-testid"],(0,t.Z)(e,u),(0,a.Z)({},"fTN1PnWu",g));return(0,i.jsx)("div",{className:(0,o.A)("X8EVbQ1x",h,[n]),children:(0,i.jsx)("input",{type:d,value:l,readOnly:g,onChange:function(e){null==p||p(e.target.value)},placeholder:f})})}));l.displayName="Input"}}]);