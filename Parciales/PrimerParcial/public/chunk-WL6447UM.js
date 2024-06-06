import{a as E,b as y}from"./chunk-5B3KRFOS.js";import{a as se,b as de,c as pe,d as ce,e as ue}from"./chunk-AS57ESEQ.js";import{a as re,b as oe,c as ae,d as le,e as me}from"./chunk-Y7OHETLP.js";import"./chunk-GXDLTZJD.js";import{b as J,c as f,e as K,f as Q,g as W,i as _,k as X,l as Y,m as ee,n as te,o as ie,p as ne}from"./chunk-JNPN6GIP.js";import{V as $,_ as L,oa as q,pa as H,ua as Z}from"./chunk-DSM67ULI.js";import"./chunk-WXI33M2S.js";import{b as U,g as G,i as F}from"./chunk-IFLVTF5H.js";import{Ab as C,Ca as z,Ja as A,La as s,Ma as g,ab as u,ca as v,cb as p,gb as o,hb as i,ib as b,ic as D,jb as M,jc as j,kb as P,lb as R,lc as B,ma as x,na as S,ob as c,qb as h,va as I,wa as w,yb as l,zb as k}from"./chunk-IIOBNL57.js";var T=class{constructor(e,m,a,r,n,d){this.dni=e,this.nombre=m,this.edad=a,this.capacidadTransporte=r,this.paisOrigen=n,this.unidadPropia=d}};function N(){return function(t){let e=t.get("dni"),m={noEsDni:"El dni solo puede tener entre 7 y 8 digitos"};return e?/^\d{7,8}$/.test(e.value)?(e.setErrors(null),null):(e.setErrors(m),m):null}}function Ce(t,e){if(t&1){let m=R();o(0,"li")(1,"img",1),c("click",function(r){let n=I(m).$implicit,d=h();return w(d.SeleccionarPais(r,n))}),i(),l(2),i()}if(t&2){let m=e.$implicit;s(),p("src",m.flags.svg,A),s(),C(" ",m.name.common," ")}}function ve(t,e){if(t&1){let m=R();o(0,"li")(1,"img",1),c("click",function(r){let n=I(m).$implicit,d=h();return w(d.SeleccionarPais(r,n))}),i(),l(2),i()}if(t&2){let m=e.$implicit;s(),p("src",m.flags.svg,A),s(),C(" ",m.name.common," ")}}var fe=(()=>{let e=class e{constructor(a){this.paisesService=a,this.paisesEuropeos=[],this.paisesAfricanos=[],this.countrySelected=new z}ngOnInit(){this.paisesService.ObtenerPaises().subscribe(a=>{this.paisesEuropeos=a.filter(r=>r.region==="Europe").slice(0,3),this.paisesAfricanos=a.filter(r=>r.region==="Africa").slice(0,3)})}SeleccionarPais(a,r){this.selectedCountry=r,this.countrySelected.emit(this.selectedCountry)}};e.\u0275fac=function(r){return new(r||e)(g(y))},e.\u0275cmp=x({type:e,selectors:[["app-tabla-paises"]],outputs:{countrySelected:"countrySelected"},decls:10,vars:2,consts:[[4,"ngFor","ngForOf"],["alt","Flag",3,"click","src"]],template:function(r,n){r&1&&(o(0,"div")(1,"h2"),l(2,"Paises Europeos"),i(),o(3,"ul"),u(4,Ce,3,2,"li",0),i()(),o(5,"div")(6,"h2"),l(7,"Paises Africanos"),i(),o(8,"ul"),u(9,ve,3,2,"li",0),i()()),r&2&&(s(4),p("ngForOf",n.paisesEuropeos),s(5),p("ngForOf",n.paisesAfricanos))},dependencies:[D],styles:["div[_ngcontent-%COMP%]{margin:20px;padding:10px;border:1px solid #ccc}h2[_ngcontent-%COMP%]{font-size:1.5em;color:#333;font-size:30px}ul[_ngcontent-%COMP%]{list-style-type:none;padding:0}li[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:10px;font-size:15px}img[_ngcontent-%COMP%]{width:130px;margin-right:10px}li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer}li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{opacity:.8}"]});let t=e;return t})();function Se(t,e){if(t&1&&(o(0,"div",26),l(1),i()),t&2){let m=h();s(),k(m.auth.currentUser==null?null:m.auth.currentUser.email)}}function Me(t,e){t&1&&(M(0),o(1,"small",11),l(2,"S\xF3lo debe contener letras"),i(),P())}function Pe(t,e){t&1&&(M(0),o(1,"small",11),l(2,"Debe ser Mayor de 18 para ser Repartidor"),i(),P())}function Ee(t,e){t&1&&(M(0),o(1,"small",11),l(2,"La capacidad de transporte no puede ser negativa"),i(),P())}var ge=(()=>{let e=class e{constructor(a,r,n,d){this.repartidorService=a,this.auth=r,this.snackBar=n,this.router=d,this.mostrarTooltip=!1}ngOnInit(){this.form=new W({dni:new _("",[f.required,N()]),nombre:new _("",[f.required,f.pattern("^[a-zA-Z\\s]+$")]),edad:new _("",[f.required,f.min(18)]),capacidadTransporte:new _("",[f.required,f.min(0)]),unidadPropia:new _(!0)},[N()])}AltaRepartidor(){if(this.form.valid){let a=this.form.value.dni,r=this.form.value.nombre,n=this.form.value.edad,d=this.form.value.capacidadTransporte,O=this.paisSeleccionado.name.common,be=this.form.value.unidadPropia;this.repartidorCreado=new T(a,r,n,d,O,be),this.repartidorService.AltaRepartidores(this.repartidorCreado)}}OnSeleccionarPais(a){this.paisSeleccionado=a}get dni(){return this.form.get("dni")}get edad(){return this.form.get("edad")}get nombre(){return this.form.get("nombre")}get capacidadTransporte(){return this.form.get("capacidadTransporte")}get unidadPropia(){return this.form.get("unidadPropia")}CerrarSession(){L(this.auth),this.AbrirSnackBar("Se a cerrado la sesion"),this.AbrirRuta("/home")}AbrirSnackBar(a){this.snackBar.open(a,"Cerrar",{duration:2e3})}mostrarTexto(){this.mostrarTooltip=!0}ocultarTexto(){this.mostrarTooltip=!1}AbrirRuta(a){this.router.navigate([a])}};e.\u0275fac=function(r){return new(r||e)(g(E),g($),g(Z),g(G))},e.\u0275cmp=x({type:e,selectors:[["app-alta-repartidor"]],decls:53,vars:8,consts:[[1,"button-grid"],["mat-raised-button","",3,"click"],["mat-raised-button","","color","warn",3,"click"],[1,"material-icons",3,"mouseover","mouseleave"],["class","tooltip",4,"ngIf"],[1,"contenedor"],[3,"ngSubmit","formGroup"],[1,"dato"],["appearance","fill"],["for","dni",1,"form-label"],["matInput","","type","text","id","dni","formControlName","dni",1,"form-control"],[1,"text-danger"],["for","nombre",1,"form-label"],["matInput","","type","text","id","nombre","formControlName","nombre",1,"form-control"],[4,"ngIf"],["for","edad",1,"form-label"],["matInput","","type","number","id","edad","formControlName","edad",1,"form-control"],["for","capacidadTransporte",1,"form-label"],["matInput","","type","number","id","capacidadTransporte","formControlName","capacidadTransporte",1,"form-control"],["for","paisOrigen",1,"form-label"],["formControlName","unidadPropia"],["value","true"],["value","false"],["mat-raised-button","","type","submit",1,"form-button",3,"disabled"],[1,"dato-pais"],[3,"countrySelected"],[1,"tooltip"]],template:function(r,n){r&1&&(o(0,"div",0)(1,"button",1),c("click",function(){return n.AbrirRuta("/home")}),l(2,"Volver"),i(),o(3,"button",2),c("click",function(){return n.CerrarSession()}),l(4,"Cerrar Sesi\xF3n"),i(),o(5,"i",3),c("mouseover",function(){return n.mostrarTexto()})("mouseleave",function(){return n.ocultarTexto()}),l(6,"account_circle"),i(),u(7,Se,2,1,"div",4),i(),o(8,"div",5)(9,"form",6),c("ngSubmit",function(){return n.AltaRepartidor()}),o(10,"h2"),l(11,"Ingresar Un Repartidor"),i(),o(12,"div",7)(13,"mat-form-field",8)(14,"mat-label",9),l(15,"DNI"),i(),b(16,"input",10),o(17,"small",11),l(18),i()()(),o(19,"div",7)(20,"mat-form-field",8)(21,"mat-label",12),l(22,"Nombre"),i(),b(23,"input",13),u(24,Me,3,0,"ng-container",14),i()(),o(25,"div",7)(26,"mat-form-field",8)(27,"mat-label",15),l(28,"Edad"),i(),b(29,"input",16),u(30,Pe,3,0,"ng-container",14),i()(),o(31,"div",7)(32,"mat-form-field",8)(33,"mat-label",17),l(34,"Capacidad Transporte"),i(),b(35,"input",18),u(36,Ee,3,0,"ng-container",14),i()(),o(37,"div",7)(38,"mat-label",19),l(39,"Selecione Pais de La Tabla"),i(),o(40,"p"),l(41),i()(),o(42,"div",7)(43,"mat-radio-group",20)(44,"mat-radio-button",21),l(45,"Unidad Propia"),i(),o(46,"mat-radio-button",22),l(47,"No Unidad Propia"),i()()(),o(48,"div",7)(49,"button",23),l(50,"Enviar"),i()()()(),o(51,"div",24)(52,"app-tabla-paises",25),c("countrySelected",function(O){return n.OnSeleccionarPais(O)}),i()()),r&2&&(s(7),p("ngIf",n.mostrarTooltip),s(2),p("formGroup",n.form),s(9),C(" ",n.dni==null?null:n.dni.getError("noEsDni")," "),s(6),p("ngIf",n.nombre==null?null:n.nombre.hasError("pattern")),s(6),p("ngIf",n.edad==null?null:n.edad.hasError("min")),s(6),p("ngIf",n.capacidadTransporte==null?null:n.capacidadTransporte.hasError("min")),s(5),k(n.paisSeleccionado==null?null:n.paisSeleccionado.name.common),s(8),p("disabled",!n.form.valid))},dependencies:[j,X,J,Y,K,Q,ee,te,q,le,oe,re,se,de,fe],styles:[".button-grid[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;background-color:#00000080;padding:10px;display:flex;justify-content:flex-end}.button-grid[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:10px;margin-bottom:10px;padding:20px 30px;font-size:20px}.content[_ngcontent-%COMP%]{padding-top:50px}.material-icons[_ngcontent-%COMP%]{margin-left:10px;margin-top:2px;font-size:40px}.tooltip[_ngcontent-%COMP%]{position:absolute;background-color:#000c;color:#fff;padding:5px;border-radius:3px;z-index:9999}.contenedor[_ngcontent-%COMP%]{width:30%;margin:0 auto;position:absolute;top:50%;left:40%;transform:translate(-50%,-50%);border:1px solid #ccc;padding:20px;background-color:#443f8833;z-index:1000}.dato[_ngcontent-%COMP%]{margin-bottom:20px}.mat-form-field[_ngcontent-%COMP%]{width:100%}.mat-form-field[_ngcontent-%COMP%] > .mat-form-field-wrapper[_ngcontent-%COMP%]{padding:5px 12px}.mat-input-element[_ngcontent-%COMP%]{font-size:16px}.mat-form-field-underline[_ngcontent-%COMP%], .mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#2196f3}.text-danger[_ngcontent-%COMP%]{color:#f44336}.form-button[_ngcontent-%COMP%]{width:100%;background-color:#4caf50;color:#fff}.form-button[_ngcontent-%COMP%]:hover{background-color:#45a049}@media screen and (max-width: 480px){.contenedor[_ngcontent-%COMP%]{width:90%}}.dato-pais[_ngcontent-%COMP%]{width:30%;margin:0 auto;position:absolute;top:50%;left:80%;transform:translate(-50%,-50%);border:1px solid #ccc;padding:10px;background-color:#443f8833;z-index:1000}"]});let t=e;return t})();var ye=[{path:"",component:ge}],_e=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=S({type:e}),e.\u0275inj=v({imports:[F.forChild(ye),F]});let t=e;return t})();var ct=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=S({type:e}),e.\u0275inj=v({providers:[y,E],imports:[B,_e,U,ne,ie,H,ce,ue,me,ae,pe]});let t=e;return t})();export{ct as AltaRepartidorModule};