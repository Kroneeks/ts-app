"use strict";(self.webpackChunkfloristby=self.webpackChunkfloristby||[]).push([[728],{6410:(e,t,n)=>{n.r(t),n.d(t,{default:()=>B});var r=n(5893),a=n(4611);var o=n(1072),i=n(7294),l=n(3260),c=n(7168),u=function(e){var t,n;return null!==(n=null===(t=e.articlesPage)||void 0===t?void 0:t.isLoading)&&void 0!==n&&n},s=function(e){var t,n;return null!==(n=null===(t=e.articlesPage)||void 0===t?void 0:t.error)&&void 0!==n?n:""},d=function(e){var t,n;return null!==(n=null===(t=e.articlesPage)||void 0===t?void 0:t.view)&&void 0!==n?n:l.GA.BLOCK},f=function(e){var t,n;return null!==(n=null===(t=e.articlesPage)||void 0===t?void 0:t.page)&&void 0!==n?n:1},v=function(e){var t,n;return null!==(n=null===(t=e.articlesPage)||void 0===t?void 0:t._inited)&&void 0!==n&&n},p=function(e){var t,n;return null!==(n=null===(t=e.articlesPage)||void 0===t?void 0:t.order)&&void 0!==n?n:"asc"},h=function(e){var t,n;return null!==(n=null===(t=e.articlesPage)||void 0===t?void 0:t.sort)&&void 0!==n?n:l.$B.CREATED},y=function(e){var t,n;return null!==(n=null===(t=e.articlesPage)||void 0===t?void 0:t.search)&&void 0!==n?n:""},g=function(e){var t,n;return null!==(n=null===(t=e.articlesPage)||void 0===t?void 0:t.type)&&void 0!==n?n:l.Iq.ALL};var b=(0,c.hg)("articlesPage/fetchArticlesList",(function(e,t){return n=void 0,r=void 0,o=function(){var e,n,r,a,o,i,c,u,s,d;return function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(l){return function(c){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,l[0]&&(i=0)),i;)try{if(n=1,r&&(a=2&l[0]?r.return:l[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;switch(r=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,r=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){i.label=l[1];break}if(6===l[0]&&i.label<a[1]){i.label=a[1],a=l;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(l);break}a[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(e,i)}catch(e){l=[6,e],r=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}}(this,(function(v){switch(v.label){case 0:e=t.extra,n=t.rejectWithValue,r=t.getState,a=function(e){var t,n;return null!==(n=null===(t=e.articlesPage)||void 0===t?void 0:t.limit)&&void 0!==n?n:9}(r()),o=h(r()),i=p(r()),c=y(r()),u=f(r()),s=g(r()),v.label=1;case 1:return v.trys.push([1,3,,4]),b={sort:o,order:i,search:c,type:s},window.history.pushState(null,"",function(e){var t=new URLSearchParams(window.location.search);return Object.entries(e).forEach((function(e){var n=e[0],r=e[1];void 0!==r&&t.set(n,r)})),"?".concat(t.toString())}(b)),[4,e.api.get("/articles",{params:{_expand:"user",_limit:a,_page:u,_sort:o,_order:i,q:c,type:s===l.Iq.ALL?void 0:s}})];case 2:if(!(d=v.sent()).data)throw new Error;return[2,d.data];case 3:return v.sent(),[2,n("error")];case 4:return[2]}var b}))},new((a=void 0)||(a=Promise))((function(e,t){function i(e){try{c(o.next(e))}catch(e){t(e)}}function l(e){try{c(o.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(i,l)}c((o=o.apply(n,r||[])).next())}));var n,r,a,o})),w=n(7665),m=n(6017),x=(0,c.HF)({selectId:function(e){return e.id}}),P=x.getSelectors((function(e){var t;return null!==(t=null==e?void 0:e.articlesPage)&&void 0!==t?t:x.getInitialState()})),S=(0,c.oM)({name:"articlesPageSlice",initialState:x.getInitialState({isLoading:!1,error:void 0,ids:[],entities:{},view:l.GA.BLOCK,page:1,hasMore:!0,_inited:!1,order:"asc",limit:5,sort:m.$B.CREATED,search:"",type:m.Iq.ALL}),reducers:{setView:function(e,t){e.view=t.payload,localStorage.setItem(w.J,t.payload)},setPage:function(e,t){e.page=t.payload},setOrder:function(e,t){e.order=t.payload},setSort:function(e,t){e.sort=t.payload},setType:function(e,t){e.type=t.payload},setSearch:function(e,t){e.search=t.payload},initState:function(e){var t=localStorage.getItem(w.J);e.view=t,e.limit=t===l.GA.LIST?4:9,e._inited=!0}},extraReducers:function(e){e.addCase(b.pending,(function(e,t){e.error=void 0,e.isLoading=!0,t.meta.arg.replace&&x.removeAll(e)})),e.addCase(b.fulfilled,(function(e,t){e.isLoading=!1,e.hasMore=t.payload.length>=e.limit,t.meta.arg.replace?x.setAll(e,t.payload):x.addMany(e,t.payload)})),e.addCase(b.rejected,(function(e,t){e.isLoading=!1,e.error=t.payload}))}}),C=S.reducer,k=S.actions,A=n(1150),j=n(2276),L=n(5461),O=n(5998),N=n(314),T=(0,c.hg)("articlesPage/fetchNextArticlesPage",(function(e,t){return n=void 0,r=void 0,o=function(){var e,n,r,a,o;return function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(l){return function(c){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,l[0]&&(i=0)),i;)try{if(n=1,r&&(a=2&l[0]?r.return:l[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;switch(r=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,r=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){i.label=l[1];break}if(6===l[0]&&i.label<a[1]){i.label=a[1],a=l;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(l);break}a[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(e,i)}catch(e){l=[6,e],r=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}}(this,(function(i){return e=t.getState,n=t.dispatch,r=f(e()),a=function(e){var t,n;return null===(n=null===(t=e.articlesPage)||void 0===t?void 0:t.hasMore)||void 0===n||n}(e()),o=u(e()),a&&!o&&(n(k.setPage(r+1)),n(b({}))),[2]}))},new((a=void 0)||(a=Promise))((function(e,t){function i(e){try{c(o.next(e))}catch(e){t(e)}}function l(e){try{c(o.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(i,l)}c((o=o.apply(n,r||[])).next())}));var n,r,a,o})),E=(0,c.hg)("articlesPage/initArticlesPage",(function(e,t){return n=void 0,r=void 0,o=function(){var n,r,a,o,i;return function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(l){return function(c){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,l[0]&&(i=0)),i;)try{if(n=1,r&&(a=2&l[0]?r.return:l[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;switch(r=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,r=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){i.label=l[1];break}if(6===l[0]&&i.label<a[1]){i.label=a[1],a=l;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(l);break}a[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(e,i)}catch(e){l=[6,e],r=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}}(this,(function(l){return n=t.getState,r=t.dispatch,v(n())||(a=e.get("order"),o=e.get("sort"),i=e.get("search"),a&&r(k.setOrder(a)),o&&r(k.setSort(o)),i&&r(k.setSearch(i)),r(k.initState()),r(b({}))),[2]}))},new((a=void 0)||(a=Promise))((function(e,t){function i(e){try{c(o.next(e))}catch(e){t(e)}}function l(e){try{c(o.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(i,l)}c((o=o.apply(n,r||[])).next())}));var n,r,a,o}));const I={sortWrapper:"gpeOuN5x",search:"bEEsZGDy",tabs:"PRsfwRoW"};var G=n(5022),_=n(6925),R=(0,i.memo)((function(e){var t,n,c=e.className,u=void 0===c?"":c,s=(0,o.$G)("article").t,f=(0,L.T)(),v=((0,O.v9)(d),(0,O.v9)(h)),w=(0,O.v9)(p),m=(0,O.v9)(y),x=(0,O.v9)(g),P=(0,i.useCallback)((function(){f(b({replace:!0}))}),[f]),S=(t=P,500,n=(0,i.useRef)(),console.log(n),(0,i.useCallback)((function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];n.current&&clearTimeout(n.current),n.current=setTimeout((function(){t.apply(void 0,e)}),500)}),[t,500])),C=(0,i.useCallback)((function(e){f(k.setView(e)),f(k.setPage(1)),P()}),[f,P]),A=(0,i.useCallback)((function(e){f(k.setOrder(e)),f(k.setPage(1)),P()}),[f,P]),j=(0,i.useCallback)((function(e){f(k.setSort(e)),f(k.setPage(1)),P()}),[f,P]),N=(0,i.useCallback)((function(e){f(k.setSearch(e)),f(k.setPage(1)),S()}),[f,S]),T=(0,i.useCallback)((function(e){f(k.setType(e)),f(k.setPage(1)),P()}),[f,P]);return(0,r.jsxs)("div",{className:(0,a.A)(I.ArticlePageFilters,{},[u]),children:[(0,r.jsxs)("div",{className:I.sortWrapper,children:[(0,r.jsx)(l.xT,{order:w,sort:v,onChangeOrder:A,onChangeSort:j}),(0,r.jsx)(l.Vv,{view:l.GA.BLOCK,onViewClick:C})]}),(0,r.jsx)(G.Z,{className:I.search,children:(0,r.jsx)(_.I,{onChange:N,value:m,placeholder:s("Поиск")})}),(0,r.jsx)(l.XL,{value:x,onChangeType:T,className:I.tabs})]})}));R.displayName="ArticlePageFilters";var V=n(9655),W={articlesPage:C},q=(0,i.memo)((function(e){var t=e.className,n=void 0===t?"":t,c=((0,o.$G)().t,(0,L.T)()),f=(0,O.v9)(P.selectAll),p=(0,O.v9)(u),h=((0,O.v9)(s),(0,O.v9)(d)),y=((0,O.v9)(v),(0,V.lr)()[0]),g=(0,i.useCallback)((function(){c(T())}),[c]);return(0,j.Q)((function(){c(E(y))})),(0,r.jsx)(A.W,{reducers:W,removeAfterUnmount:!1,children:(0,r.jsxs)(N.T,{onScrollEnd:g,className:(0,a.A)("qHZ74rtG",{},[n]),children:[(0,r.jsx)(R,{}),(0,r.jsx)(l.wD,{view:h,isLoading:p,articles:f,className:"lzD_hlxE"})]})})}));q.displayName="ArticlePage";const B=q},6925:(e,t,n)=>{n.d(t,{I:()=>i});var r=n(5893),a=n(4611);var o=n(7294),i=(0,o.memo)((function(e){var t,n=e.className,o=void 0===n?"":n,i=e.value,l=void 0===i?"":i,c=e.type,u=void 0===c?"text":c,s=e.placeholder,d=void 0===s?"":s,f=e.onChange,v=e.readonly,p=void 0!==v&&v,h=(function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}}(e,["className","value","type","placeholder","onChange","readonly"]),(t={}).fTN1PnWu=p,t);return(0,r.jsx)("div",{className:(0,a.A)("X8EVbQ1x",h,[o]),children:(0,r.jsx)("input",{type:u,value:l,readOnly:p,onChange:function(e){null==f||f(e.target.value)},placeholder:d})})}));i.displayName="Input"}}]);