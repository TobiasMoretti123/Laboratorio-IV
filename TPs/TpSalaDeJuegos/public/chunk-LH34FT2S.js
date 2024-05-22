import{$ as T,V as A,ka as B,la as w,ma as D}from"./chunk-5LNGFYFJ.js";import{g as y,h as I,j as x}from"./chunk-TERAQOSY.js";import"./chunk-WXI33M2S.js";import{k as P,l as E,r as z}from"./chunk-MZ2EVUCB.js";import{Gb as l,Hb as O,Ib as C,Pa as s,Qa as _,ca as g,eb as m,gb as p,lb as r,ma as v,mb as i,na as b,nb as h,rb as k,wa as S,wb as u,xa as M,yb as f}from"./chunk-EPM2LCS5.js";function j(t,e){if(t&1&&(r(0,"div",22),l(1),i()),t&2){let c=f();s(),O(c.auth.currentUser==null?null:c.auth.currentUser.email)}}function H(t,e){t&1&&(r(0,"div",22),l(1,"Necesitas una pista?"),i())}function N(t,e){t&1&&(r(0,"div"),h(1,"img",23),i())}function L(t,e){t&1&&(r(0,"div"),h(1,"img",24),i())}function J(t,e){t&1&&(r(0,"div"),h(1,"img",25),i())}function R(t,e){t&1&&(r(0,"div"),h(1,"img",26),i())}function $(t,e){if(t&1&&(r(0,"span"),l(1),i()),t&2){let c=e.$implicit,n=f();s(),C(" ",n.letrasCorrectas.includes(c)?c:"_"," ")}}function G(t,e){if(t&1){let c=k();r(0,"button",27),u("click",function(){let o=S(c).$implicit,a=f();return M(a.IngresarLetra(o))}),l(1),i()}if(t&2){let c=e.$implicit,n=f();p("disabled",n.letrasCorrectas.includes(c)||n.letrasIncorrectas.includes(c)||n.letrasIncorrectas.length==4||n.esVictoria),s(),C(" ",c," ")}}var F=(()=>{let e=class e{constructor(n,o,a){this.snackBar=n,this.router=o,this.auth=a,this.botones=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],this.palabras=["Mozart","Beethoven","Saglieri","Bach","Vivaldi","Chopin","Pagaginini","Liszt","Brahms","Schubert","Verdi","Wagner"],this.palabraSeleccionada="",this.palabraSeleccionadaPorLetra=[],this.letrasIncorrectas=[],this.letrasCorrectas=[],this.limiteDeErrores=4,this.errores=0,this.letraIngresada="",this.esVictoria=!1,this.torzo=!1,this.cabeza=!1,this.brazos=!1,this.piernas=!1,this.mostrarUsuario=!1,this.mostrarHelp=!1,this.blockearJugarDeNuevo=!0}CerrarSession(){T(this.auth),this.AbrirSnackBar("Se a cerrado la sesion"),this.RuteoHome()}ngOnInit(){this.palabraSeleccionada=this.palabras[Math.floor(Math.random()*this.palabras.length)].toUpperCase(),this.palabraSeleccionadaPorLetra=this.palabraSeleccionada.split("")}IngresarLetra(n){this.letraIngresada=n.toUpperCase(),this.palabraSeleccionada.includes(n)?this.letrasCorrectas.push(n):(this.letrasIncorrectas.push(n),this.errores++),this.EstadoDelJuego(),this.ManejoErrores()}EstadoDelJuego(){this.palabraSeleccionada.split("").filter(o=>this.letrasCorrectas.includes(o)).length===this.palabraSeleccionada.length?(this.esVictoria=!0,this.blockearJugarDeNuevo=!1,this.AbrirSnackBar("Felicitaciones Ganaste "+this.letrasCorrectas.length+" Puntos")):this.errores>=this.limiteDeErrores&&(this.esVictoria=!1,this.blockearJugarDeNuevo=!1,this.AbrirSnackBar("Perdiste, la palabra era: "+this.palabraSeleccionada))}AbrirSnackBar(n){this.snackBar.open(n,"Cerrar",{duration:2e3})}Volver(){this.RuteoHome()}RuteoHome(){this.router.navigate(["/home"])}ManejoErrores(){switch(this.errores){case 1:this.cabeza=!0;break;case 2:this.torzo=!0;break;case 3:this.brazos=!0;break;case 4:this.piernas=!0;break;default:break}}ReiniciarJuego(){this.errores=0,this.esVictoria=!1,this.palabraSeleccionada=this.palabras[Math.floor(Math.random()*this.palabras.length)].toUpperCase(),this.palabraSeleccionadaPorLetra=this.palabraSeleccionada.split(""),this.letrasIncorrectas=[],this.letrasCorrectas=[],this.limiteDeErrores=4,this.errores=0,this.letraIngresada="",this.torzo=!1,this.cabeza=!1,this.brazos=!1,this.piernas=!1}MostrarHelp(){this.mostrarHelp=!0}OcultarHelp(){this.mostrarHelp=!1}MostrarUsuario(){this.mostrarUsuario=!0}OcultarUsuario(){this.mostrarUsuario=!1}Pista(){this.AbrirSnackBar("Es un compositor de musica clasica")}};e.\u0275fac=function(o){return new(o||e)(_(D),_(y),_(A))},e.\u0275cmp=v({type:e,selectors:[["app-ahorcado"]],decls:33,vars:9,consts:[[1,"button-grid"],["mat-raised-button","",3,"click"],["mat-raised-button","","routerLink","/chat"],["mat-raised-button","","routerLink","/quien-soy"],["mat-raised-button","","color","warn",3,"click"],[1,"material-icons",3,"mouseover","mouseleave"],["class","tooltip",4,"ngIf"],[1,"ahorcado-container"],[1,"material-icons",3,"click","mouseover","mouseleave"],[1,"munieco"],[1,"horca"],["src","../../../assets/horca.png"],[1,"cabeza"],[4,"ngIf"],[1,"torzo"],[1,"brazos"],[1,"piernas"],[1,"palabra-oculta"],[4,"ngFor","ngForOf"],[1,"botones"],["mat-raised-button","","color","accent",3,"disabled","click",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary",1,"reintentar",3,"click","disabled"],[1,"tooltip"],["src","../../../assets/cabeza.png"],["src","../../../assets/torzo.png"],["src","../../../assets/brazos.png"],["src","../../../assets/piernas.png"],["mat-raised-button","","color","accent",3,"click","disabled"]],template:function(o,a){o&1&&(r(0,"div",0)(1,"button",1),u("click",function(){return a.Volver()}),l(2,"Volver"),i(),r(3,"button",2),l(4,"Chat"),i(),r(5,"button",3),l(6,"Sobre M\xED"),i(),r(7,"button",4),u("click",function(){return a.CerrarSession()}),l(8,"Cerrar Sesi\xF3n"),i(),r(9,"i",5),u("mouseover",function(){return a.MostrarUsuario()})("mouseleave",function(){return a.OcultarUsuario()}),l(10,"account_circle"),i(),m(11,j,2,1,"div",6),i(),r(12,"div",7)(13,"i",8),u("click",function(){return a.Pista()})("mouseover",function(){return a.MostrarHelp()})("mouseleave",function(){return a.OcultarHelp()}),l(14,"help"),i(),m(15,H,2,0,"div",6),r(16,"div",9)(17,"span",10),h(18,"img",11),i(),r(19,"span",12),m(20,N,2,0,"div",13),i(),r(21,"span",14),m(22,L,2,0,"div",13),i(),r(23,"span",15),m(24,J,2,0,"div",13),i(),r(25,"span",16),m(26,R,2,0,"div",13),i()(),r(27,"div",17),m(28,$,2,1,"span",18),i(),r(29,"div",19),m(30,G,2,2,"button",20),i(),r(31,"button",21),u("click",function(){return a.ReiniciarJuego()}),l(32,"Volver a Jugar"),i()()),o&2&&(s(11),p("ngIf",a.mostrarUsuario),s(4),p("ngIf",a.mostrarHelp),s(5),p("ngIf",a.cabeza),s(2),p("ngIf",a.torzo),s(2),p("ngIf",a.brazos),s(2),p("ngIf",a.piernas),s(2),p("ngForOf",a.palabraSeleccionadaPorLetra),s(2),p("ngForOf",a.botones),s(),p("disabled",a.blockearJugarDeNuevo))},dependencies:[P,E,I,B],styles:['.button-grid[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;background-image:url("./media/grid-TFSRBOBQ.png");padding:10px;display:flex;justify-content:flex-end}.button-grid[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:10px;margin-bottom:10px;padding:20px 30px;font-size:20px}.content[_ngcontent-%COMP%]{padding-top:50px}.material-icons[_ngcontent-%COMP%]{margin-left:10px;margin-top:2px;font-size:40px}.ahorcado-container[_ngcontent-%COMP%]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#ffffff80;border-radius:10px;text-align:center;margin-top:25px}.material-icons[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:flex-start}.tooltip[_ngcontent-%COMP%]{position:absolute;background-color:#000c;color:#fff;padding:5px;border-radius:3px;font-size:20px}.palabra-oculta[_ngcontent-%COMP%]{font-size:70px;margin-bottom:20px}.botones[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center}.botones[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:10px;margin-bottom:10px;padding:20px 30px;font-size:20px}.resultado[_ngcontent-%COMP%]{font-size:18px}.munieco[_ngcontent-%COMP%]{display:flex;align-items:flex-end;justify-content:center;height:400px;position:relative}.horca[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:300px}.cabeza[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:60px;position:absolute;top:19%;left:37%;transform:translate(-50%)}.torzo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:10px;position:absolute;top:32%;left:37%;transform:translate(-50%)}.brazos[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px;position:absolute;top:32%;left:37%;transform:translate(-50%)}.piernas[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:70px;position:absolute;top:52%;left:37%;transform:translate(-50%)}.reintentar[_ngcontent-%COMP%]{margin-top:10px;margin-left:30px;margin-bottom:10px;display:block;padding:20px 30px;font-size:20px;border:none;border-radius:5px;cursor:pointer;text-align:center;line-height:0}']});let t=e;return t})();var Q=[{path:"",component:F}],U=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=b({type:e}),e.\u0275inj=g({imports:[x.forChild(Q),x]});let t=e;return t})();var ce=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=b({type:e}),e.\u0275inj=g({imports:[z,U,w]});let t=e;return t})();export{ce as AhorcadoModule};
