"use strict";(self.webpackChunkfloristby=self.webpackChunkfloristby||[]).push([[592],{7592:function(e,a,t){t.r(a),t.d(a,{default:function(){return C}});var n=t(3007),r=t(1072),s=t(5255),o=t(8312),l=t(743);const c=e=>e?.addCommentForm?.text??"";var d=t(7294),i=t(5401);const u=(0,t(4268).oM)({name:"addCommentForm",initialState:{text:void 0,error:void 0,isLoading:!1},reducers:{setText:(e,a)=>{e.text=a.payload},setError:(e,a)=>{e.error=a.payload}}}),{actions:m}=u,{reducer:x}=u;var h=t(1233),p=t(8519),v=t(5893);const f={addCommentForm:x};var C=e=>{const{className:a="",onSendComment:t}=e,{t:u}=(0,r.$G)(),x=(0,l.v9)(c),C=(0,i.T)(),y=(0,d.useCallback)((e=>{C(m.setText(e))}),[C]),b=(0,d.useCallback)((()=>{t(x??""),y("")}),[y,t,x]);return(0,v.jsx)(h.W,{reducers:f,children:(0,v.jsxs)(p.U,{justify:"between",max:!0,className:(0,n.A)("nkW6HzOI",{},[a]),children:[(0,v.jsx)(o.I,{className:"HKMyWfIi",value:x,onChange:y,placeholder:u("Введите текст комментария")}),(0,v.jsx)(s.zx,{onClick:b,children:u("Отправить")})]})})}},8312:function(e,a,t){t.d(a,{I:function(){return o}});var n=t(3007),r=t(7294),s=t(5893);const o=(0,r.memo)((e=>{const{className:a="",value:t="",type:r="text",placeholder:o="",onChange:l,readonly:c=!1,"data-testid":d="",...i}=e,u={fTN1PnWu:c};return(0,s.jsx)("div",{className:(0,n.A)("X8EVbQ1x",u,[a]),children:(0,s.jsx)("input",{type:r,value:t,readOnly:c,onChange:e=>{l?.(e.target.value)},placeholder:o,...i})})}));o.displayName="Input"}}]);