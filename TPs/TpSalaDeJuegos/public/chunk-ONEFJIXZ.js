import{a as f,b as E,c as P}from"./chunk-BEWHN6CC.js";import{$ as S,U as b,Z as k,ca as B,ea as L,ga as I}from"./chunk-QRO6ZU5W.js";import{d as A}from"./chunk-H5ZOCSIB.js";import{a as F,b as W}from"./chunk-GLVLIRRK.js";import{t as y,u as w}from"./chunk-XHZBIIPB.js";import{f as _}from"./chunk-AKS2IQM2.js";import{p as v}from"./chunk-VA7YLXIX.js";import{Gb as s,Kb as p,Lb as g,Mb as h,Ob as C,Pa as m,Qa as d,lb as r,ma as M,mb as a,wb as c}from"./chunk-YPGK2BPN.js";var Q=(()=>{let o=class o{constructor(e,n){this.auth=e,this.snackBar=n,this.usuarioMail="",this.usuarioClave="",this.mensajeError="",this.usuarioLogeado=new f(this.usuarioMail,this.usuarioClave),this.router=new _}Login(){k(this.auth,this.usuarioMail,this.usuarioClave).then(e=>{e.user.email!=null&&(this.usuarioLogeado=new f(e.user.email,this.usuarioClave),this.AbrirSnackBar("Bienvenido: "+this.usuarioLogeado.mail),this.RuteoHome())}).catch(e=>{switch(e.code){case"auth/invalid-email":this.AbrirSnackBar("Email Invalido");break;case"auth/missing-password":this.AbrirSnackBar("Contrase\xF1a Vacia");break;default:this.AbrirSnackBar(e.code);break}})}IngresoRapido(){this.usuarioMail="tobiasmoretti14@gmail.com",this.usuarioClave="asdfghjkl"}AbrirSnackBar(e){this.snackBar.open(e,"Cerrar",{duration:2e3})}RuteoHome(){this.router.navigate(["/home"])}};o.\u0275fac=function(n){return new(n||o)(d(b),d(F))},o.\u0275cmp=M({type:o,selectors:[["app-login-verificacion"]],standalone:!0,features:[C],decls:14,vars:2,consts:[[1,"contenedor"],[1,"row","justify-content-center"],[1,"col-md-6","border","p-4"],[1,"texto"],[1,"inputCorreo"],["matInput","","placeholder","Correo electr\xF3nico",3,"ngModelChange","ngModel"],[1,"inputClave"],["matInput","","type","password","placeholder","Contrase\xF1a",3,"ngModelChange","ngModel"],[1,"botones"],["mat-raised-button","","color","primary",1,"boton",3,"click"]],template:function(n,i){n&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),s(4,"Loguearse"),a(),r(5,"mat-form-field",4)(6,"input",5),h("ngModelChange",function(t){return g(i.usuarioMail,t)||(i.usuarioMail=t),t}),a()(),r(7,"mat-form-field",6)(8,"input",7),h("ngModelChange",function(t){return g(i.usuarioClave,t)||(i.usuarioClave=t),t}),a()(),r(9,"div",8)(10,"button",9),c("click",function(){return i.Login()}),s(11,"Login"),a(),r(12,"button",9),c("click",function(){return i.IngresoRapido()}),s(13,"Auto Completar"),a()()()()()),n&2&&(m(6),p("ngModel",i.usuarioMail),m(2),p("ngModel",i.usuarioClave))},dependencies:[v,I,S,B,L,w,y,P,E,A,W],styles:[".contenedor[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:90vh}.border[_ngcontent-%COMP%]{border:4px solid #615305;border-radius:10px}.boton[_ngcontent-%COMP%]{width:100%;margin-top:5px}.texto[_ngcontent-%COMP%]{margin-left:135px}.inputClave[_ngcontent-%COMP%]{margin-left:10px}"]});let l=o;return l})();export{Q as a};
