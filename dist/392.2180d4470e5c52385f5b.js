"use strict";(self.webpackChunkfloristby=self.webpackChunkfloristby||[]).push([[392],{392:(e,n,r)=>{r.r(n),r.d(n,{default:()=>k});var t=r(893),o=r(611);var a=r(72),i=r(161),l=r(925),s=r(998),u=r(294),c=r(168),d=r(861),f=r(372),v=r(665),p=(0,c.hg)("login/loginByUsername",(function(e,n){return r=void 0,t=void 0,a=function(){var r;return function(e,n){var r,t,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(l){return function(s){return function(l){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,l[0]&&(i=0)),i;)try{if(r=1,t&&(o=2&l[0]?t.return:l[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,l[1])).done)return o;switch(t=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,t=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){i.label=l[1];break}if(6===l[0]&&i.label<o[1]){i.label=o[1],o=l;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(l);break}o[2]&&i.ops.pop(),i.trys.pop();continue}l=n.call(e,i)}catch(e){l=[6,e],t=0}finally{r=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,s])}}}(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,d.Z.post("http://localhost:8000/login",e)];case 1:if(r=t.sent(),isFinite(r.data))throw new Error;return localStorage.setItem(v.z,JSON.stringify(r.data)),n.dispatch(f.hI.setAuthData(r.data)),[2,r.data];case 2:return t.sent(),[2,n.rejectWithValue("error")];case 3:return[2]}}))},new((o=void 0)||(o=Promise))((function(e,n){function i(e){try{s(a.next(e))}catch(e){n(e)}}function l(e){try{s(a.throw(e))}catch(e){n(e)}}function s(n){var r;n.done?e(n.value):(r=n.value,r instanceof o?r:new o((function(e){e(r)}))).then(i,l)}s((a=a.apply(r,t||[])).next())}));var r,t,o,a})),m=(0,c.oM)({name:"login",initialState:{isLoading:!1,username:"",password:""},reducers:{setUsername:function(e,n){e.username=n.payload},setPassword:function(e,n){e.password=n.payload}},extraReducers:function(e){e.addCase(p.pending,(function(e,n){e.error=void 0,e.isLoading=!0})),e.addCase(p.fulfilled,(function(e,n){e.isLoading=!1})),e.addCase(p.rejected,(function(e,n){e.isLoading=!1,e.error=n.payload}))}}),h=m.actions,y=m.reducer,g=r(680);const b={title:"ikI7VPeL",text:"uNJeeCm1",error:"F9oLXAK4"};var x;!function(e){e.PRIMARY="primary",e.SECONDARY="secondary",e.ERROR="error"}(x||(x={}));var w=function(e){var n,r=e.className,a=void 0===r?"":r,i=e.title,l=void 0===i?"":i,s=e.text,u=void 0===s?"":s,c=e.theme,d=void 0===c?x.PRIMARY:c;return(0,t.jsxs)("div",{className:(0,o.A)(b.Text,(n={},n[b[d]]=!0,n),[a]),children:[(0,t.jsx)("p",{className:b.title,children:l}),(0,t.jsx)("p",{className:b.text,children:u})]})},N=function(e){var n;return(null===(n=null==e?void 0:e.loginForm)||void 0===n?void 0:n.username)||""},j=function(e){var n;return(null===(n=null==e?void 0:e.loginForm)||void 0===n?void 0:n.password)||""},C=function(e){var n;return null===(n=null==e?void 0:e.loginForm)||void 0===n?void 0:n.error},R=function(e){var n;return(null===(n=null==e?void 0:e.loginForm)||void 0===n?void 0:n.isLoading)||!1},O=(0,u.memo)((function(e){var n=e.className,r=void 0===n?"":n,c=(0,a.$G)("loginForm").t,d=(0,g.T)(),f=(0,s.oR)(),v=(0,s.v9)(N),m=(0,s.v9)(j),b=(0,s.v9)(C),O=(0,s.v9)(R);(0,u.useEffect)((function(){return f.reducerManager.add("loginForm",y),d({type:"@INIT loginForm reducer"}),function(){f.reducerManager.remove("loginForm"),d({type:"@DESTROY loginForm reducer"})}}),[]);var k=(0,u.useCallback)((function(e){d(h.setUsername(e))}),[d]),I=(0,u.useCallback)((function(e){d(h.setPassword(e))}),[d]),F=(0,u.useCallback)((function(){d(p({username:v,password:m}))}),[d,v,m]);return(0,t.jsxs)("div",{className:(0,o.A)("xYNEfcE9",{},[r]),children:[(0,t.jsx)(w,{title:c("Форма авторизации"),className:"tNHSryI8"}),b&&(0,t.jsx)(w,{text:c("Вы ввели неверный логин или пароль"),theme:x.ERROR,className:"eMRip_RU"}),(0,t.jsx)(l.I,{value:v,onChange:k,placeholder:"Введите логин"}),(0,t.jsx)(l.I,{value:m,onChange:I,placeholder:"Введите пароль"}),(0,t.jsx)(i.zx,{onClick:F,className:"Ok_5amJo",disabled:O,children:c("Войти")})]})}));O.displayName="LoginForm";const k=O},925:(e,n,r)=>{r.d(n,{I:()=>i});var t=r(893),o=r(611);var a=r(294),i=(0,a.memo)((function(e){var n=e.className,r=void 0===n?"":n,a=e.value,i=void 0===a?"":a,l=e.type,s=void 0===l?"text":l,u=e.onChange;return function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]])}}(e,["className","value","type","onChange"]),(0,t.jsx)("div",{className:(0,o.A)("X8EVbQ1x",{},[r]),children:(0,t.jsx)("input",{type:s,value:i,onChange:function(e){null==u||u(e.target.value)}})})}));i.displayName="Input"}}]);