import{a as h,b as P,c as E}from"./chunk-WKSGILIF.js";import{d as U}from"./chunk-RJ55LIM7.js";import{a as y,d as S,f as w,h as B}from"./chunk-G2BCKOD2.js";import{V as C,Y as x,ka as _,la as k,ma as O,na as R}from"./chunk-5LNGFYFJ.js";import{g as v}from"./chunk-TERAQOSY.js";import"./chunk-WXI33M2S.js";import"./chunk-MZ2EVUCB.js";import{Gb as s,Kb as p,Lb as g,Mb as f,Ob as b,Pa as d,Qa as c,lb as r,ma as M,mb as a,wb as m}from"./chunk-EPM2LCS5.js";var G=(()=>{let o=class o{constructor(e,n){this.auth=e,this.snackBar=n,this.nuevoUsuarioMail="",this.nuevoUsuarioClave="",this.usuarioLogeado=new h(this.nuevoUsuarioMail,this.nuevoUsuarioClave),this.banderaError=!1,this.mensajeError="",this.router=new v,this.mostrarTooltip=!1}Registrarse(){x(this.auth,this.nuevoUsuarioMail,this.nuevoUsuarioClave).then(e=>{e.user.email!==null&&(this.usuarioLogeado=new h(e.user.email,this.nuevoUsuarioClave),this.banderaError=!1,this.AbrirSnackBar("Bienvenido Nuevo Usuario: "+this.usuarioLogeado.mail),this.RuteoHome())}).catch(e=>{switch(this.banderaError=!0,e.code){case"auth/invalid-email":this.AbrirSnackBar("Email invalido");break;case"auth/email-already-in-use":this.AbrirSnackBar("Email ya en uso");break;case"auth/missing-password":this.AbrirSnackBar("Contrase\xF1a Vacia");break;case"auth/weak-password":this.AbrirSnackBar("La contrase\xF1a es muy corta");break;default:this.AbrirSnackBar(e.code);break}})}AbrirSnackBar(e){this.snackBar.open(e,"Cerrar",{duration:2e3})}RuteoHome(){this.router.navigate(["/home"])}Volver(){this.RuteoHome()}mostrarTexto(){this.mostrarTooltip=!0}ocultarTexto(){this.mostrarTooltip=!1}};o.\u0275fac=function(n){return new(n||o)(c(C),c(O))},o.\u0275cmp=M({type:o,selectors:[["app-registrarse-verificacion"]],standalone:!0,features:[b],decls:14,vars:2,consts:[[1,"button-grid"],["mat-raised-button","",3,"click"],[1,"contenedor"],[1,"texto"],[1,"inputs"],[1,"input"],["matInput","","placeholder","Correo electr\xF3nico",3,"ngModelChange","ngModel"],["matInput","","type","password","placeholder","Contrase\xF1a",3,"ngModelChange","ngModel"],[1,"botones"],["mat-raised-button","","color","primary",1,"boton",3,"click"]],template:function(n,t){n&1&&(r(0,"div",0)(1,"button",1),m("click",function(){return t.Volver()}),s(2,"Volver"),a()(),r(3,"div",2)(4,"h1",3),s(5,"Ingresar Usuario"),a(),r(6,"div",4)(7,"mat-form-field",5)(8,"input",6),f("ngModelChange",function(i){return g(t.nuevoUsuarioMail,i)||(t.nuevoUsuarioMail=i),i}),a()(),r(9,"mat-form-field",5)(10,"input",7),f("ngModelChange",function(i){return g(t.nuevoUsuarioClave,i)||(t.nuevoUsuarioClave=i),i}),a()()(),r(11,"div",8)(12,"button",9),m("click",function(){return t.Registrarse()}),s(13,"Login"),a()()()),n&2&&(d(8),p("ngModel",t.nuevoUsuarioMail),d(2),p("ngModel",t.nuevoUsuarioClave))},dependencies:[B,y,S,w,k,_,E,P,U,R],styles:['.contenedor[_ngcontent-%COMP%]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#ffffff80;padding:100px;border-radius:10px;text-align:center}.button-grid[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;background-image:url("./media/grid-TFSRBOBQ.png");padding:10px;display:flex;justify-content:flex-end}.button-grid[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:10px;margin-bottom:10px;padding:20px 30px;font-size:20px}.content[_ngcontent-%COMP%]{padding-top:50px}.material-icons[_ngcontent-%COMP%]{margin-left:10px;margin-top:2px;font-size:40px}.boton[_ngcontent-%COMP%]{display:block;padding:40px 50px;font-size:20px;border:none;border-radius:5px;margin-bottom:10px;cursor:pointer;text-align:center;line-height:0;width:100%}.texto[_ngcontent-%COMP%]{text-align:center}.inputs[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-right:400px}.input[_ngcontent-%COMP%]{padding:40px 50px;font-size:20px;width:200%}']});let l=o;return l})();export{G as RegistrarseVerificacionComponent};