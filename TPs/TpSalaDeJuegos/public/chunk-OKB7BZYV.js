import{a as q,c as z,d as G,e as _}from"./chunk-S5UJMYJ3.js";import{$ as W,U as A,ca as L,ea as R,ga as V}from"./chunk-QRO6ZU5W.js";import{k as T,l as U,n as B,o as N,p as $}from"./chunk-VA7YLXIX.js";import{Fb as S,Gb as l,Hb as d,Ib as b,Jb as E,Kb as O,Lb as P,Mb as D,Ob as F,Pa as c,Pb as u,Qa as g,Qb as w,Rb as x,Sb as k,ba as M,eb as h,ga as j,gb as v,lb as a,ma as y,mb as o,wb as I,x as C,yb as m}from"./chunk-YPGK2BPN.js";var H=(()=>{let e=class e{constructor(i){this.firestore=i,this.mensajes$=null,this.nuevoMensaje=""}initChat(){let i=_(this.firestore,"messages"),n=z(i).pipe(C(s=>s.map(p=>({usuario:p.usuario,mensaje:p.mensaje,fecha:p.fecha.toDate()}))));this.mensajes$=n}enviarMensaje(i,n){let s=_(this.firestore,"messages");G(s,{fecha:new Date,usuario:i,mensaje:n})}};e.\u0275fac=function(n){return new(n||e)(j(q))},e.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function Q(t,e){if(t&1&&(a(0,"div")(1,"div"),l(2),u(3,"date"),o(),a(4,"div",8)(5,"div"),l(6),o()()()),t&2){let r=m().$implicit;c(2),E("",r.usuario," ",x(3,3,r.fecha,"short"),":"),c(4),b(" ",r.mensaje,"")}}function X(t,e){if(t&1&&(a(0,"div"),l(1),u(2,"date"),o(),a(3,"div"),l(4),o(),a(5,"div",9)(6,"div"),l(7),o()()),t&2){let r=m().$implicit;c(),d(x(2,3,r.fecha,"short")),c(3),d(r.mensaje),c(3),d(r.usuario)}}function Y(t,e){if(t&1&&(a(0,"div"),h(1,Q,7,6,"div",7)(2,X,8,6,"ng-template",null,0,k),o()),t&2){let r=e.$implicit,i=S(3),n=m();c(),v("ngIf",r.usuario===(n.auth.currentUser==null?null:n.auth.currentUser.email))("ngIfElse",i)}}var le=(()=>{let e=class e{constructor(i,n){this.chatService=i,this.auth=n,this.nuevoMensaje=""}ngOnInit(){this.chatService.initChat()}enviarMensaje(){this.nuevoMensaje.trim()!==""&&(this.chatService.enviarMensaje(this.auth.currentUser?.email,this.nuevoMensaje),this.nuevoMensaje="")}};e.\u0275fac=function(n){return new(n||e)(g(H),g(A))},e.\u0275cmp=y({type:e,selectors:[["app-chat"]],standalone:!0,features:[F],decls:8,vars:4,consts:[["otherUser",""],[1,"chat-box"],[1,"messages"],[4,"ngFor","ngForOf"],[1,"input-area"],["type","text","placeholder","Escribe un mensaje...",3,"ngModelChange","ngModel"],[3,"click"],[4,"ngIf","ngIfElse"],[1,"message","sent"],[1,"message","received"]],template:function(n,s){n&1&&(a(0,"div",1)(1,"div",2),h(2,Y,4,2,"div",3),u(3,"async"),o(),a(4,"div",4)(5,"input",5),D("ngModelChange",function(f){return P(s.nuevoMensaje,f)||(s.nuevoMensaje=f),f}),o(),a(6,"button",6),I("click",function(){return s.enviarMensaje()}),l(7,"Enviar"),o()()()),n&2&&(c(2),v("ngForOf",w(3,2,s.chatService.mensajes$)),c(3),O("ngModel",s.nuevoMensaje))},dependencies:[$,T,U,B,N,V,W,L,R],styles:[".chat-box[_ngcontent-%COMP%]{width:300px;height:400px;border:1px solid #ccc;overflow-y:auto}.messages[_ngcontent-%COMP%]{padding:10px}.message[_ngcontent-%COMP%]{padding:5px 10px;margin-bottom:5px;border-radius:5px}.sent[_ngcontent-%COMP%]{background-color:#dcf8c6;align-self:flex-end}.received[_ngcontent-%COMP%]{background-color:#f0f0f0;align-self:flex-start}.input-area[_ngcontent-%COMP%]{padding:10px;display:flex;align-items:center}.input-area[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{flex:1;padding:5px}.input-area[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:5px 10px;margin-left:10px}"]});let t=e;return t})();export{le as ChatComponent};