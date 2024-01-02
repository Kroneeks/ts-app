"use strict";(self.webpackChunkfloristby=self.webpackChunkfloristby||[]).push([[677],{6805:(e,t,a)=>{a.d(t,{D0:()=>ie,wD:()=>S,$B:()=>v.$B,xT:()=>fe,Iq:()=>v.Iq,XL:()=>u,GA:()=>v.GA,Vv:()=>he,wq:()=>$});var r=a(3007),n=a(1072),i=a(7294);const s={Tabs:"bXYDRoXv"};var c=a(6425),l=a(5893),o=(0,i.memo)((function(e){var t=e.className,a=void 0===t?"":t,o=e.tabs,v=e.onTabClick,u=e.value,d=((0,n.$G)().t,(0,i.useCallback)((function(e){return function(){v(e)}}),[v]));return(0,l.jsx)("div",{className:(0,r.A)(s.Tabs,{},[a]),children:o.map((function(e){return(0,l.jsx)(c.Z,{className:s.tab,theme:e.value===u?c.r.NORMAL:c.r.OUTLINED,onClick:d(e),children:e.content},e.value)}))})}));o.displayName="Tabs";var v=a(7113),u=(0,i.memo)((function(e){var t=e.className,a=void 0===t?"":t,s=e.value,c=e.onChangeType,u=(0,n.$G)("article").t,d=(0,i.useMemo)((function(){return[{value:v.Iq.ALL,content:u("Все статьи")},{value:v.Iq.IT,content:u("Айти")},{value:v.Iq.ECONOMICS,content:u("Экономика")},{value:v.Iq.SCIENCE,content:u("Наука")}]}),[u]),h=(0,i.useCallback)((function(e){c(e.value)}),[c]);return(0,l.jsx)(o,{className:(0,r.A)("",{},[a]),tabs:d,value:s,onTabClick:h})}));u.displayName="ArticleTypeTabs";var d=a(885);const h={BLOCK:"aaeYDeSq",card:"I6tD17AJ",LIST:"u7NJuMjl",itemsWrapper:"mItkaw0h",ItemContainer:"ws7sKKBc"},m={LIST:"cbg6jpk8",date:"gzcu7DmY",views:"Loz2hfru",header:"dwZR2QFa",username:"qqjY3IRX",title:"gvCBzE5L",img:"trLYSQ7F",footer:"sXa5L34T",textBlock:"JGwHSPVM",BLOCK:"J5uzMtGj",imageWrapper:"dOeIdIHt",infoWrapper:"sm3cbRbR",types:"ZhtaCnW5"};var f,g,p=a(1715),x=a(3895);function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},j.apply(this,arguments)}const N=function(e){return i.createElement("svg",j({xmlns:"http://www.w3.org/2000/svg",width:800,height:800,fill:"none",viewBox:"0 0 24 24"},e),f||(f=i.createElement("path",{d:"M12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5ZM9.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z",clipRule:"evenodd"})),g||(g=i.createElement("path",{d:"M12 3.25c-4.514 0-7.555 2.704-9.32 4.997l-.031.041c-.4.519-.767.996-1.016 1.56-.267.605-.383 1.264-.383 2.152 0 .888.116 1.547.383 2.152.25.564.617 1.042 1.016 1.56l.032.041C4.445 18.046 7.486 20.75 12 20.75c4.514 0 7.555-2.704 9.32-4.997l.031-.041c.4-.518.767-.996 1.016-1.56.267-.605.383-1.264.383-2.152 0-.888-.116-1.547-.383-2.152-.25-.564-.617-1.041-1.016-1.56l-.032-.041C19.555 5.954 16.514 3.25 12 3.25ZM3.87 9.162C5.498 7.045 8.15 4.75 12 4.75c3.85 0 6.501 2.295 8.13 4.412.44.57.696.91.865 1.292.158.358.255.795.255 1.546s-.097 1.188-.255 1.546c-.169.382-.426.722-.864 1.292C18.5 16.955 15.85 19.25 12 19.25c-3.85 0-6.501-2.295-8.13-4.412-.44-.57-.696-.91-.865-1.292-.158-.358-.255-.795-.255-1.546s.097-1.188.255-1.546c.169-.382.426-.722.864-1.292Z",clipRule:"evenodd"})))};var w=a(2949),A=a(5255);const Z={title:"BHmndKmm",paragraph:"tLIzh4YH"};var b=(0,i.memo)((function(e){var t=e.className,a=void 0===t?"":t,i=e.block;return(0,n.$G)().t,(0,l.jsxs)("div",{className:(0,r.A)(Z.ArticleTextBlockComponent,{},[a]),children:[i.title&&(0,l.jsx)(p.xv,{title:i.title,className:Z.title}),i.paragraphs.map((function(e,t){return(0,l.jsx)(p.xv,{text:e,className:Z.paragraph},e)}))]})}));b.displayName="ArticleTextBlockComponent";var y=a(6478),C=a(6897),O=a(1283),L=(0,i.memo)((function(e){var t=e.className,a=void 0===t?"":t,i=e.article,s=e.view,o=e.target,u=void 0===o?"_blank":o,d=e.index,h=(0,n.$G)("article").t,f=(0,l.jsx)(p.xv,{text:i.type.join(", "),className:m.types}),g=(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(p.xv,{text:String(i.views),className:m.views}),(0,l.jsx)(x.JO,{Svg:N})]}),j=function(){d&&sessionStorage.setItem(O.hu,JSON.stringify(d))};if(s===v.GA.LIST){var Z,L,E=i.blocks.find((function(e){return e.type===v.Lk.TEXT}));return(0,l.jsx)("div",{className:(0,r.A)(m.ArticleListItem,{},[a,m[s]]),children:(0,l.jsxs)(c.Z,{className:m.card,children:[(0,l.jsxs)("div",{className:m.header,children:[(0,l.jsx)(w.q,{src:null!==(Z=null===(L=i.user)||void 0===L?void 0:L.avatar)&&void 0!==Z?Z:""}),(0,l.jsx)(p.xv,{text:i.user.username,className:m.username}),(0,l.jsx)(p.xv,{text:i.createdAt,className:m.date})]}),(0,l.jsx)(p.xv,{title:i.title,className:m.title}),f,(0,l.jsx)("img",{src:i.img,className:m.img,alt:i.title}),E&&(0,l.jsx)(b,{block:E,className:m.textBlock}),(0,l.jsxs)("div",{className:m.footer,children:[(0,l.jsx)(C.F,{to:y.h3.articleDetails+i.id,target:u,children:(0,l.jsx)(A.zx,{theme:A.bn.OUTLINE,onClick:j,children:h("Читать далее")})}),g]})]})})}return(0,l.jsx)(C.F,{to:y.h3.articleDetails+i.id,className:(0,r.A)(m.ArticleListItem,{},[a,m[s]]),target:u,onClick:j,children:(0,l.jsxs)(c.Z,{children:[(0,l.jsxs)("div",{className:m.imageWrapper,children:[(0,l.jsx)("img",{src:i.img,alt:i.title,className:m.img}),(0,l.jsx)(p.xv,{text:i.createdAt,className:m.date})]}),(0,l.jsxs)("div",{className:m.infoWrapper,children:[f,g]}),(0,l.jsx)(p.xv,{text:i.title,className:m.title})]})})}));L.displayName="ArticleListItem";var E=a(3312),I=(0,i.memo)((function(e){var t=e.className,a=void 0===t?"":t,n=e.view;return n===v.GA.LIST?(0,l.jsx)("div",{className:(0,r.A)(m.ArticleListItem,{},[a,m[n]]),children:(0,l.jsxs)(c.Z,{className:m.card,children:[(0,l.jsxs)("div",{className:m.header,children:[(0,l.jsx)(E.O,{borderR:"50%",height:70,width:70}),(0,l.jsx)(E.O,{width:150,height:16,className:m.username}),(0,l.jsx)(E.O,{width:150,height:16,className:m.date})]}),(0,l.jsx)(E.O,{width:250,height:32,className:m.title}),(0,l.jsx)(E.O,{width:250,height:24,className:m.title}),(0,l.jsx)(E.O,{height:250,className:m.img}),(0,l.jsx)(E.O,{height:204,className:m.img}),(0,l.jsx)("div",{className:m.footer,children:(0,l.jsx)(E.O,{width:200,height:46})})]})}):(0,l.jsx)("div",{className:(0,r.A)(m.ArticleListItem,{},[a,m[n]]),children:(0,l.jsxs)(c.Z,{children:[(0,l.jsx)("div",{className:m.imageWrapper,children:(0,l.jsx)(E.O,{width:200,height:200,className:m.img})}),(0,l.jsx)("div",{className:m.infoWrapper,children:(0,l.jsx)(E.O,{width:130,height:16})}),(0,l.jsx)(E.O,{width:150,height:16,className:m.title})]})})}));I.displayName="ArticleListItem";var k=a(6246),S=function(e){var t=e.className,a=void 0===t?"":t,s=e.articles,c=e.isLoading,o=e.view,u=void 0===o?v.GA.BLOCK:o,m=e.target,f=void 0===m?"_blank":m,g=e.onLoadNextPart,x=e.virtualized,j=void 0!==x&&x,N=(0,n.$G)("article").t,w=(0,i.useState)(1),A=(0,d.Z)(w,2),Z=A[0],b=A[1],y=(0,i.useRef)(null);function C(e){return void 0!==e?new Array(e===v.GA.BLOCK?9:3).fill(0).map((function(t,a){return(0,l.jsx)(I,{view:e},a)})):new Array(3).fill(0).map((function(e,t){return(0,l.jsx)(I,{view:v.GA.LIST,className:h.card},t)}))}(0,i.useEffect)((function(){var e,t=null!==(e=sessionStorage.getItem(O.hu))&&void 0!==e?e:1;b(+t)}),[]),(0,i.useEffect)((function(){var e;return"BLOCK"===u&&(e=setTimeout((function(){y.current&&y.current.scrollToIndex(Z)}),100)),function(){clearTimeout(e)}}),[Z,u]);var E=function(e,t){return(0,l.jsx)(L,{className:h.card,index:e,article:t,view:u,target:f},t.id)},S=(0,i.memo)((function(){if(c)return(0,l.jsx)("div",{className:h.skeleton,children:C()})}));if(S.displayName="Footer",!c&&!s.length)return(0,l.jsx)("div",{className:(0,r.A)(h.ArticleList,{},[a,h[u]]),children:(0,l.jsx)(p.xv,{title:N("Статьи не найдены")})});var T=(0,l.jsx)(k.OO,{data:s,itemContent:E,endReached:g,initialTopMostItemIndex:Z,components:{Footer:S},style:{width:"100%"}}),M=(0,l.jsx)(k.Mr,{data:s,itemContent:E,endReached:g,totalCount:s.length,components:{ScrollSeekPlaceholder:function(e){e.height,e.width;var t=e.index;return(0,l.jsx)("div",{className:h.ItemContainer,children:(0,l.jsx)(I,{view:u,className:h.card},t)})}},listClassName:h.itemsWrapper,scrollSeekConfiguration:{enter:function(e){return Math.abs(e)>700},exit:function(e){return Math.abs(e)<30}},style:{width:"100%"}});return j?(0,l.jsx)("div",{className:(0,r.A)(h.ArticleList,{},[a,h[u]]),children:"LIST"===u?T:M}):(0,l.jsxs)("div",{className:(0,r.A)(h.ArticleList,{},[a,h[u]]),children:[s.length>0?s.map((function(e){return(0,l.jsx)(L,{article:e,view:u,target:f},e.id)})):null,c&&C(u)]})},T=a(1233),M=a(4268),_=a(5861),H=a(4687),V=a.n(H),R=(0,M.hg)("articleDetails/fetchArticleById",function(){var e=(0,_.Z)(V().mark((function e(t,a){var r,n,i;return V().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=a.extra,n=a.rejectWithValue,e.prev=1,t){e.next=4;break}throw new Error("");case 4:return e.next=6,r.api.get("/articles/".concat(t),{params:{_expand:"user"}});case 6:if((i=e.sent).data){e.next=9;break}throw new Error;case 9:return e.abrupt("return",i.data);case 12:return e.prev=12,e.t0=e.catch(1),e.abrupt("return",n("error"));case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,a){return e.apply(this,arguments)}}()),B=(0,M.oM)({name:"articleDetails",initialState:{isLoading:!1,error:void 0,data:void 0},reducers:{},extraReducers:function(e){e.addCase(R.pending,(function(e){e.error=void 0,e.isLoading=!0})),e.addCase(R.fulfilled,(function(e,t){e.isLoading=!1,e.data=t.payload})),e.addCase(R.rejected,(function(e,t){e.isLoading=!1,e.error=t.payload}))}}),P=(B.actions,B.reducer),G=a(5401),D=a(743),$=function(e){var t;return null===(t=e.articleDetails)||void 0===t?void 0:t.data},W=function(e){var t;return null===(t=e.articleDetails)||void 0===t?void 0:t.error},q=function(e){var t,a;return null!==(t=null===(a=e.articleDetails)||void 0===a?void 0:a.isLoading)&&void 0!==t&&t};const z={avatar:"WDmBKEor",avatarWrapper:"a1QkiB5u",icon:"KUWbT9GB"};var K;function J(){return J=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},J.apply(this,arguments)}const F=function(e){return i.createElement("svg",J({xmlns:"http://www.w3.org/2000/svg",fill:"none","aria-hidden":"true",className:"calendar_svg__w-6 calendar_svg__h-6 calendar_svg__text-gray-800 calendar_svg__dark:text-white",viewBox:"0 0 20 20"},e),K||(K=i.createElement("path",{d:"M6 1a1 1 0 0 0-2 0h2ZM4 4a1 1 0 0 0 2 0H4Zm7-3a1 1 0 1 0-2 0h2ZM9 4a1 1 0 1 0 2 0H9Zm7-3a1 1 0 1 0-2 0h2Zm-2 3a1 1 0 1 0 2 0h-2ZM1 6a1 1 0 0 0 0 2V6Zm18 2a1 1 0 1 0 0-2v2ZM5 11v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 11v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 15v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 15v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 11v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM5 15v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM2 4h16V2H2v2Zm16 0h2a2 2 0 0 0-2-2v2Zm0 0v14h2V4h-2Zm0 14v2a2 2 0 0 0 2-2h-2Zm0 0H2v2h16v-2ZM2 18H0a2 2 0 0 0 2 2v-2Zm0 0V4H0v14h2ZM2 4V2a2 2 0 0 0-2 2h2Zm2-3v3h2V1H4Zm5 0v3h2V1H9Zm5 0v3h2V1h-2ZM1 8h18V6H1v2Zm3 3v.01h2V11H4Zm1 1.01h.01v-2H5v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H5v2h.01v-2ZM9 11v.01h2V11H9Zm1 1.01h.01v-2H10v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM9 15v.01h2V15H9Zm1 1.01h.01v-2H10v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM14 15v.01h2V15h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM14 11v.01h2V11h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM4 15v.01h2V15H4Zm1 1.01h.01v-2H5v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H5v2h.01v-2Z"})))};var Y,X;function Q(){return Q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},Q.apply(this,arguments)}const U=function(e){return i.createElement("svg",Q({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"copy_svg__w-6 copy_svg__h-6 copy_svg__text-gray-800 copy_svg__dark:text-white",viewBox:"0 0 18 20"},e),Y||(Y=i.createElement("path",{d:"M5 9V4.13a2.96 2.96 0 0 0-1.293.749L.879 7.707A2.96 2.96 0 0 0 .13 9H5Zm11.066-9H9.829a2.98 2.98 0 0 0-2.122.879L7 1.584A.987.987 0 0 0 6.766 2h4.3A3.972 3.972 0 0 1 15 6v10h1.066A1.97 1.97 0 0 0 18 14V2a1.97 1.97 0 0 0-1.934-2Z"})),X||(X=i.createElement("path",{d:"M11.066 4H7v5a2 2 0 0 1-2 2H0v7a1.969 1.969 0 0 0 1.933 2h9.133A1.97 1.97 0 0 0 13 18V6a1.97 1.97 0 0 0-1.934-2Z"})))};var ee=function(e){var t=e.className,a=void 0===t?"":t,n=e.text,s=(0,i.useCallback)((function(){navigator.clipboard.writeText(n)}),[n]);return(0,l.jsxs)("pre",{className:(0,r.A)("EGVBrTRk",{},[a]),children:[(0,l.jsx)(A.zx,{onClick:s,className:"x9B5cNnv",theme:A.bn.CLEAR,children:(0,l.jsx)(x.JO,{Svg:U})}),(0,l.jsx)("code",{children:n})]})},te=(0,i.memo)((function(e){var t=e.className,a=void 0===t?"":t,i=e.block;return(0,n.$G)().t,(0,l.jsx)("div",{className:(0,r.A)("OpzK0VPf",{},[a]),children:(0,l.jsx)(ee,{text:i.code})})}));te.displayName="ArticleCodeBlockComponent";var ae=(0,i.memo)((function(e){var t=e.className,a=void 0===t?"":t,i=e.block;return(0,n.$G)().t,(0,l.jsxs)("div",{className:(0,r.A)("qeyWCkOB",{},[a]),children:[(0,l.jsx)("img",{src:i.src,className:"Pr2NTJfR",alt:i.title}),i.title&&(0,l.jsx)(p.xv,{text:i.title,align:p.PH.CENTER})]})}));ae.displayName="ArticleImageBlockComponent";var re=a(8519),ne={articleDetails:P},ie=(0,i.memo)((function(e){var t,a=(0,n.$G)("article-details").t,s=e.className,c=void 0===s?"":s,o=e.id,u=(0,G.T)(),d=(0,D.v9)(q),h=(0,D.v9)(W),m=(0,D.v9)($),f=(0,i.useCallback)((function(e){switch(e.type){case v.Lk.CODE:return(0,l.jsx)(te,{className:z.block,block:e},e.id);case v.Lk.IMAGE:return(0,l.jsx)(ae,{className:z.block,block:e},e.id);case v.Lk.TEXT:return(0,l.jsx)(b,{className:z.block,block:e},e.id);default:return null}}),[]);if((0,i.useEffect)((function(){u(R(o))}),[u,o]),d)t=(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(E.O,{className:z.avatar,width:200,height:200,borderR:"50%"}),(0,l.jsx)(E.O,{className:z.title,width:300,height:32}),(0,l.jsx)(E.O,{className:z.skeleton,width:600,height:24}),(0,l.jsx)(E.O,{className:z.skeleton,width:"100%",height:200}),(0,l.jsx)(E.O,{className:z.skeleton,width:"100%",height:200})]});else if(h)t=(0,l.jsx)(p.xv,{theme:p.lg.ERROR,title:a("Произошла ошибка при загрузке статьи"),align:p.PH.CENTER,text:h});else{var g;t=(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(re.U,{justify:"center",max:!0,className:z.avatarWrapper,children:(0,l.jsx)(w.q,{size:w.D.LARGE,src:null!==(g=null==m?void 0:m.img)&&void 0!==g?g:"",className:z.avatar})}),(0,l.jsxs)(re.g,{gap:"4",max:!0,children:[(0,l.jsx)(p.xv,{title:null==m?void 0:m.title,text:null==m?void 0:m.subtitle}),(0,l.jsxs)(re.U,{gap:"8",className:z.articleInfo,children:[(0,l.jsx)(x.JO,{Svg:N}),(0,l.jsx)(p.xv,{size:p.yH.S,text:String(null==m?void 0:m.views)})]}),(0,l.jsxs)(re.U,{gap:"8",className:z.articleInfo,children:[(0,l.jsx)(x.JO,{Svg:F}),(0,l.jsx)(p.xv,{size:p.yH.S,text:null==m?void 0:m.createdAt})]})]}),null==m?void 0:m.blocks.map(f)]})}return(0,l.jsx)(T.W,{reducers:ne,removeAfterUnmount:!0,children:(0,l.jsx)(re.g,{gap:"16",max:!0,className:(0,r.A)(z.ArticleDetails,{},[c]),children:t})})}));ie.displayName="ArticleDetails";var se=a(4942);const ce={notSelected:"a0vVlVuW"};var le;function oe(){return oe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},oe.apply(this,arguments)}var ve;function ue(){return ue=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},ue.apply(this,arguments)}var de=[{view:v.GA.LIST,icon:function(e){return i.createElement("svg",oe({xmlns:"http://www.w3.org/2000/svg",width:800,height:800,className:"list_svg__icon",viewBox:"0 0 1024 1024"},e),le||(le=i.createElement("path",{d:"M64 192h896v76.8H64V192zm0 281.6h896v76.8H64v-76.8zm0 281.6h896V832H64v-76.8z"})))}},{view:v.GA.BLOCK,icon:function(e){return i.createElement("svg",ue({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"tiled_svg__w-6 tiled_svg__h-6 tiled_svg__text-gray-800 tiled_svg__dark:text-white",viewBox:"0 0 18 18"},e),ve||(ve=i.createElement("path",{d:"M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"})))}}],he=(0,i.memo)((function(e){var t=e.className,a=void 0===t?"":t,i=e.view,s=e.onViewClick;return(0,n.$G)().t,(0,l.jsx)("div",{className:(0,r.A)(ce.ArticleViewSelector,{},[a]),children:de.map((function(e){return(0,l.jsx)(A.zx,{theme:A.bn.CLEAR,onClick:(t=e.view,function(){null==s||s(t)}),children:(0,l.jsx)(x.JO,{Svg:e.icon,className:(0,r.A)("",(0,se.Z)({},ce.notSelected,e.view!==i),[])})},e.view);var t}))})}));he.displayName="ArticleViewSelector";var me=function(e){(0,n.$G)().t;var t=e.className,a=void 0===t?"":t,s=e.label,c=void 0===s?"":s,o=e.value,v=e.options,u=e.readonly,d=void 0===u||u,h=e.onChange,m=(0,i.useMemo)((function(){return null==v?void 0:v.map((function(e){return(0,l.jsx)("option",{className:"JkXz98qY",value:e.value,children:e.content},e.value)}))}),[v]);return(0,l.jsxs)("div",{className:(0,r.A)("cidfdn6H",{},[a]),children:[c&&(0,l.jsx)("span",{className:"G1uuf7Bp",children:c}),(0,l.jsx)("select",{className:"VOKOuKGo",value:o,onChange:function(e){h&&(null==h||h(e.target.value))},disabled:d,children:m})]})},fe=(0,i.memo)((function(e){var t=e.className,a=void 0===t?"":t,s=e.sort,c=e.order,o=e.onChangeOrder,u=e.onChangeSort,d=(0,n.$G)().t,h=((0,i.useCallback)((function(e){u(e)}),[u]),(0,i.useCallback)((function(e){o(e)}),[o]),(0,i.useMemo)((function(){return[{value:"asc",content:d("возрастанию")},{value:"desc",content:d("убыванию")}]}),[d])),m=(0,i.useMemo)((function(){return[{value:v.$B.CREATED,content:d("дате создания")},{value:v.$B.TITLE,content:d("названию")},{value:v.$B.VIEWS,content:d("просмотрам")}]}),[d]);return(0,l.jsxs)("div",{className:(0,r.A)("gSPXPxAR",{},[a]),children:[(0,l.jsx)(me,{options:m,label:d("Сортировать ПО"),readonly:!1,value:s,onChange:u}),(0,l.jsx)(me,{options:h,label:d("по"),readonly:!1,value:c,onChange:o})]})}));fe.displayName="ArticleSortSelector"},7113:(e,t,a)=>{a.d(t,{$B:()=>r,GA:()=>s,Iq:()=>n,Lk:()=>i});var r=function(e){return e.VIEWS="views",e.TITLE="title",e.CREATED="createdAt",e}({}),n=function(e){return e.ALL="ALL",e.IT="IT",e.SCIENCE="SCIENCE",e.ECONOMICS="ECONOMICS",e}({}),i=function(e){return e.TEXT="TEXT",e.CODE="CODE",e.IMAGE="IMAGE",e}({}),s=function(e){return e.BLOCK="BLOCK",e.LIST="LIST",e}({})},2255:(e,t,a)=>{a.d(t,{$4:()=>s,F_:()=>l,Fy:()=>u,J$:()=>o,Jy:()=>i,Qm:()=>d,YY:()=>c,kL:()=>v,os:()=>h,sl:()=>m,u5:()=>n});var r=a(6805),n=function(e){var t,a;return null!==(t=null===(a=e.articlesPage)||void 0===a?void 0:a.isLoading)&&void 0!==t&&t},i=function(e){var t,a;return null!==(t=null===(a=e.articlesPage)||void 0===a?void 0:a.error)&&void 0!==t?t:""},s=function(e){var t,a;return null!==(t=null===(a=e.articlesPage)||void 0===a?void 0:a.view)&&void 0!==t?t:r.GA.BLOCK},c=function(e){var t,a;return null!==(t=null===(a=e.articlesPage)||void 0===a?void 0:a.page)&&void 0!==t?t:1},l=function(e){var t,a;return null!==(t=null===(a=e.articlesPage)||void 0===a?void 0:a.limit)&&void 0!==t?t:9},o=function(e){var t,a;return null===(t=null===(a=e.articlesPage)||void 0===a?void 0:a.hasMore)||void 0===t||t},v=function(e){var t,a;return null!==(t=null===(a=e.articlesPage)||void 0===a?void 0:a._inited)&&void 0!==t&&t},u=function(e){var t,a;return null!==(t=null===(a=e.articlesPage)||void 0===a?void 0:a.order)&&void 0!==t?t:"asc"},d=function(e){var t,a;return null!==(t=null===(a=e.articlesPage)||void 0===a?void 0:a.sort)&&void 0!==t?t:r.$B.CREATED},h=function(e){var t,a;return null!==(t=null===(a=e.articlesPage)||void 0===a?void 0:a.search)&&void 0!==t?t:""},m=function(e){var t,a;return null!==(t=null===(a=e.articlesPage)||void 0===a?void 0:a.type)&&void 0!==t?t:r.Iq.ALL}},6388:(e,t,a)=>{a.d(t,{j:()=>v});var r=a(5861),n=a(4687),i=a.n(n),s=a(4268),c=a(6805),l=a(2255),o=a(885);var v=(0,s.hg)("articlesPage/fetchArticlesList",function(){var e=(0,r.Z)(i().mark((function e(t,a){var r,n,s,v,u,d,h,m,f,g;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.extra,n=a.rejectWithValue,s=a.getState,v=(0,l.F_)(s()),u=(0,l.Qm)(s()),d=(0,l.Fy)(s()),h=(0,l.os)(s()),m=(0,l.YY)(s()),f=(0,l.sl)(s()),e.prev=7,t={sort:u,order:d,search:h,type:f},window.history.pushState(null,"",function(e){var t=new URLSearchParams(window.location.search);return Object.entries(e).forEach((function(e){var a=(0,o.Z)(e,2),r=a[0],n=a[1];void 0!==n&&t.set(r,n)})),"?".concat(t.toString())}(t)),e.next=11,r.api.get("/articles",{params:{_expand:"user",_limit:v,_page:m,_sort:u,_order:d,q:h,type:f===c.Iq.ALL?void 0:f}});case 11:if((g=e.sent).data){e.next=14;break}throw new Error;case 14:return e.abrupt("return",g.data);case 17:return e.prev=17,e.t0=e.catch(7),e.abrupt("return",n("error"));case 20:case"end":return e.stop()}var t}),e,null,[[7,17]])})));return function(t,a){return e.apply(this,arguments)}}())},8834:(e,t,a)=>{a.d(t,{h:()=>v});var r=a(5861),n=a(4687),i=a.n(n),s=a(4268),c=a(2255),l=a(8218),o=a(6388),v=(0,s.hg)("articlesPage/fetchNextArticlesPage",function(){var e=(0,r.Z)(i().mark((function e(t,a){var r,n,s,v,u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=a.getState,n=a.dispatch,s=(0,c.YY)(r()),v=(0,c.J$)(r()),u=(0,c.u5)(r()),v&&!u&&(n(l.cf.setPage(s+1)),n((0,o.j)({})));case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())},8218:(e,t,a)=>{a.d(t,{Q5:()=>u,Zz:()=>o,cf:()=>d});var r=a(4268),n=a(6805),i=a(6388),s=a(1283),c=a(7113),l=(0,r.HF)({selectId:function(e){return e.id}}),o=l.getSelectors((function(e){var t;return null!==(t=null==e?void 0:e.articlesPage)&&void 0!==t?t:l.getInitialState()})),v=(0,r.oM)({name:"articlesPageSlice",initialState:l.getInitialState({isLoading:!1,error:void 0,ids:[],entities:{},view:n.GA.BLOCK,page:1,hasMore:!0,_inited:!1,order:"asc",limit:5,sort:c.$B.CREATED,search:"",type:c.Iq.ALL}),reducers:{setView:function(e,t){e.view=t.payload,localStorage.setItem(s.J0,t.payload)},setPage:function(e,t){e.page=t.payload},setOrder:function(e,t){e.order=t.payload},setSort:function(e,t){e.sort=t.payload},setType:function(e,t){e.type=t.payload},setSearch:function(e,t){e.search=t.payload},initState:function(e){var t=localStorage.getItem(s.J0);e.view=t,e.limit=t===n.GA.LIST?4:9,e._inited=!0}},extraReducers:function(e){e.addCase(i.j.pending,(function(e,t){e.error=void 0,e.isLoading=!0,t.meta.arg.replace&&l.removeAll(e)})),e.addCase(i.j.fulfilled,(function(e,t){e.isLoading=!1,e.hasMore=t.payload.length>=e.limit,t.meta.arg.replace?l.setAll(e,t.payload):l.addMany(e,t.payload)})),e.addCase(i.j.rejected,(function(e,t){e.isLoading=!1,e.error=t.payload}))}}),u=v.reducer,d=v.actions},9970:(e,t,a)=>{a.d(t,{Q:()=>n});var r=a(7294);function n(e){(0,r.useEffect)((function(){e()}),[])}},1233:(e,t,a)=>{a.d(t,{W:()=>l});var r=a(885),n=a(7294),i=a(743),s=a(5401),c=a(5893),l=function(e){var t=e.children,a=e.reducers,l=e.removeAfterUnmount,o=void 0===l||l,v=(0,i.oR)(),u=(0,s.T)();return(0,n.useEffect)((function(){var e=v.reducerManager.getMountedReducers();return Object.entries(a).forEach((function(t){var a=(0,r.Z)(t,2),n=a[0],i=a[1];e[n]||(v.reducerManager.add(n,i),u({type:"@INIT ".concat(n," reducer")}))})),function(){o&&Object.entries(a).forEach((function(e){var t=(0,r.Z)(e,2),a=t[0];t[1],v.reducerManager.remove(a),u({type:"@DESTROY ".concat(a," reducer")})}))}}),[u,a,o,v.reducerManager]),(0,c.jsx)(c.Fragment,{children:t})}},8979:(e,t,a)=>{a.d(t,{T:()=>d});var r=a(3007);var n=a(7294),i=a(885),s=a(5401),c=a(8183),l=a(9250),o=a(9970),v=a(743),u=a(5893),d=(0,n.memo)((function(e){var t=e.className,a=void 0===t?"":t,d=e.children,h=e.onScrollEnd,m=(0,n.useRef)(),f=(0,n.useRef)(),g=(0,s.T)(),p=(0,l.TH)().pathname,x=(0,v.v9)((function(e){return(0,c.Qi)(e,p)}));!function(e){var t=e.callback,a=e.wrapperRef,r=e.triggerRef;(0,n.useEffect)((function(){var e=null;if(t){var n={root:a.current,rootMargin:"0px",threshold:1};return(e=new IntersectionObserver((function(e){(0,i.Z)(e,1)[0].isIntersecting&&t()}),n)).observe(r.current),function(){e&&r.current&&e.unobserve(r.current)}}}),[a,r,t])}({triggerRef:f,wrapperRef:m,callback:h}),(0,o.Q)((function(){m.current.scrollTop=x}));var j,N,w=(j=function(e){g(c.Aw.setScrollPosition({position:e.currentTarget.scrollTop,path:p}))},500,N=(0,n.useRef)(!1),(0,n.useCallback)((function(){N.current||(j.apply(void 0,arguments),N.current=!0,setTimeout((function(){N.current=!1}),500))}),[j,500]));return(0,u.jsxs)("main",{ref:m,className:(0,r.A)("a83jDcrK",{},[a]),onScroll:w,children:[d,h?(0,u.jsx)("div",{className:"VaPQ__zP",ref:f}):null]})}));d.displayName="Page"}}]);