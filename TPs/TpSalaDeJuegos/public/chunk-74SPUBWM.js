import{Z as L,da as O,e as R,g as N,ua as I,xa as P,ya as U}from"./chunk-TGLAPP5K.js";import{k as M,m as A}from"./chunk-76ATHODR.js";import{Fb as v,Gb as T,La as m,Ma as f,ab as d,ca as C,cb as g,gb as o,hb as i,ib as p,jb as F,kb as w,lb as x,ma as h,na as E,ob as _,qb as c,va as l,wa as u,xb as y,yb as a,zb as b}from"./chunk-LH7JB6HP.js";var D=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=E({type:t}),t.\u0275inj=C({imports:[I,I]});let e=t;return e})();function j(e,t){if(e&1&&(o(0,"div",14),a(1),i()),e&2){let r=c(2);m(),b(r.auth.currentUser==null?null:r.auth.currentUser.email)}}function z(e,t){if(e&1){let r=x();F(0),o(1,"div",3)(2,"div",4)(3,"button",5),_("click",function(){l(r);let n=c();return u(n.CerrarSession())}),a(4,"Cerrar Sesi\xF3n"),i(),o(5,"button",6),a(6,"Sobre M\xED"),i(),o(7,"i",7),_("mouseover",function(){l(r);let n=c();return u(n.mostrarTexto())})("mouseleave",function(){l(r);let n=c();return u(n.ocultarTexto())}),a(8,"account_circle"),i(),d(9,j,2,1,"div",8),i(),o(10,"div",9),p(11,"img",10)(12,"img",11),i(),o(13,"div",9),p(14,"img",12)(15,"img",13),i()(),w()}if(e&2){let r=c();m(9),g("ngIf",r.mostrarTooltip)}}function V(e,t){e&1&&(o(0,"div",3)(1,"div",4)(2,"button",15),a(3,"Loguearse"),i(),o(4,"button",16),a(5,"Registrarse"),i()()())}var ht=(()=>{let t=class t{constructor(s){this.auth=s,this.mostrarTooltip=!1}CerrarSession(){O(this.auth).then(()=>{console.log(this.auth.currentUser?.email)})}mostrarTexto(){this.mostrarTooltip=!0}ocultarTexto(){this.mostrarTooltip=!1}};t.\u0275fac=function(n){return new(n||t)(f(L))},t.\u0275cmp=h({type:t,selectors:[["app-home"]],standalone:!0,features:[v],decls:4,vars:2,consts:[["loggedOut",""],[1,"container"],[4,"ngIf","ngIfElse"],[1,"content"],[1,"button-grid"],["mat-raised-button","","color","warn",3,"click"],["mat-raised-button","","routerLink","/quien-soy"],[1,"material-icons",3,"mouseover","mouseleave"],["class","tooltip",4,"ngIf"],[1,"image-container"],["src","../../../assets/cartas.png","alt","Foto Alumno"],["src","../../../assets/dice.png","alt","Foto Alumno"],["src","../../../assets/mozart.png","alt","Foto Alumno"],["src","../../../assets/Ahorcado.png","alt","Foto Alumno"],[1,"tooltip"],["mat-raised-button","","color","accent","routerLink","/login"],["mat-raised-button","","routerLink","/registrarse"]],template:function(n,S){if(n&1&&(o(0,"div",1),d(1,z,16,1,"ng-container",2)(2,V,6,0,"ng-template",null,0,T),i()),n&2){let k=y(3);m(),g("ngIf",S.auth.currentUser==null?null:S.auth.currentUser.email)("ngIfElse",k)}},dependencies:[R,N,U,P,A,M,D],styles:[".container[_ngcontent-%COMP%]{position:relative;height:100vh}.button-grid[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;background-color:#fffc;padding:10px;display:flex;justify-content:flex-end}.button-grid[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:10px}.content[_ngcontent-%COMP%]{padding-top:50px}.material-icons[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;width:20px;height:20px;margin:10px;height:2vh}.image-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;height:40vh}.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:250px;height:250px;margin:10px;border:4px solid #615305;border-radius:10px}.tooltip[_ngcontent-%COMP%]{position:absolute;background-color:#000c;color:#fff;padding:5px;border-radius:3px;z-index:9999}"]});let e=t;return e})();export{ht as a};