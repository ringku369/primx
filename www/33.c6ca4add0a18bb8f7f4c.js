(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"6t3Y":function(e,t,r){"use strict";r.r(t),r.d(t,"UserPasswordModule",(function(){return F}));var n=r("ofXK"),s=r("tyNb"),i=(r("QVta"),r("PdH4")),o=r.n(i),a=r("fXoL"),d=r("5eHb"),l=r("JqCM"),c=r("lGQG"),u=r("2QD9"),p=r("yj+E"),m=r("hnKR"),f=r("1kSV"),h=r("/n7v"),g=r("+Ai/"),b=r("3Pt+");function v(e,t){if(1&e){const e=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"button",17),a["\u0275\u0275listener"]("click",(function(){return a["\u0275\u0275restoreView"](e),a["\u0275\u0275nextContext"]().promptAlert()})),a["\u0275\u0275text"](1,"Send Varifycode"),a["\u0275\u0275elementEnd"]()}}function w(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"div",18),a["\u0275\u0275elementStart"](1,"button",19),a["\u0275\u0275text"](2,"\xd7"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275text"](3),a["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit,r=a["\u0275\u0275nextContext"]();a["\u0275\u0275property"]("hidden",!r.success),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate1"](" ",e," ")}}function y(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"div",20),a["\u0275\u0275elementStart"](1,"button",19),a["\u0275\u0275text"](2,"\xd7"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275text"](3),a["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit,r=a["\u0275\u0275nextContext"]();a["\u0275\u0275property"]("hidden",!r.errors),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate1"](" ",e," ")}}function S(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"button",21),a["\u0275\u0275text"](1,"Update ..."),a["\u0275\u0275elementEnd"]()),2&e){a["\u0275\u0275nextContext"]();const e=a["\u0275\u0275reference"](9);a["\u0275\u0275property"]("disabled",!e.valid)}}const x=new Date,C=[{path:"",component:(()=>{class e{constructor(e,t,r,n,s,i,o,a,d){this.router=e,this.toastr=t,this.spinner=r,this.authservice=n,this.authtoken=s,this.authstatus=i,this.userUserService=o,this.parserFormatter=a,this.calendar=d,this.success=[],this.errors=[],this.form={current_password:null,password:null,confirm_password:null,verifycode:null},this.modelDisabled={year:x.getFullYear(),month:x.getMonth()+1,day:x.getDate()},this.users=[],this.spinner.show()}emptyMessage(){this.errors=[],this.success=[]}successMsg(e){for(let t=0;t<e.length;t++)this.toastr.success(e[t])}errorMsg(e){for(let t=0;t<e.length;t++)this.toastr.error(e[t])}selectToday(){this.fdate={year:x.getFullYear(),month:x.getMonth()+1,day:x.getDate()}}ngOnInit(){this.spinner.hide()}promptAlert(){o.a.fire({text:"Input Varification Code",input:"text"}).then(e=>{if(e.value){if(this.form.verifycode!=e.value)return this.toastr.error("Invalid varification code, user valid code to continue chage password"),this.spinner.hide(),!1;this.form.verifycode=e.value,this.putSelfPasswordConfirmation(this.form)}})}cloneOptions(e){return e.map(e=>({value:e.value,label:e.label}))}getSelfProfile(){this.userUserService.getSelfProfile().subscribe(e=>{this.form=e,null==this.form.gender&&(this.form.gender="")},e=>{this.errorMsg(e.error)})}confirmAlert(){o.a.fire({title:"Are you sure?",text:"Once deleted, you will not be able to recover this imaginary file!",showCloseButton:!0,showCancelButton:!0}).then(e=>{e.dismiss?o.a.fire("","Your imaginary file is safe!","error"):o.a.fire("","Poof! Your imaginary file has been deleted!","success")})}onSubmit(){this.spinner.show(),this.userUserService.putSelfPassword(this.form).subscribe(e=>{this.toastr.success(e[0]),this.form=e[1],this.spinner.hide(),this.promptAlert()},e=>{this.spinner.hide(),this.errorMsg(e.error)})}putSelfPasswordConfirmation(e){this.spinner.show(),this.userUserService.putSelfPasswordConfirmation(e).subscribe(e=>{this.form={current_password:null,password:null,confirm_password:null,verifycode:null},this.successMsg(e),this.spinner.hide(),this.signout()},e=>{this.spinner.hide(),this.errorMsg(e.error)})}signout(){this.authservice.postLogout(),this.authservice.postLogout().subscribe(e=>{this.authtoken.remove(),this.authstatus.changeAuthStatus(!1),this.router.navigateByUrl("/auth/signin")},e=>{})}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](s.f),a["\u0275\u0275directiveInject"](d.c),a["\u0275\u0275directiveInject"](l.c),a["\u0275\u0275directiveInject"](c.a),a["\u0275\u0275directiveInject"](u.a),a["\u0275\u0275directiveInject"](p.a),a["\u0275\u0275directiveInject"](m.a),a["\u0275\u0275directiveInject"](f.e),a["\u0275\u0275directiveInject"](f.c))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-user-password"]],decls:23,vars:7,consts:[[1,"row"],[1,"col-sm-12"],["cardTitle","User Password",3,"options"],["type","info","dismiss","true"],[1,"text-center","text-danger","font-weight-bolder"],["class","btn btn-block btn-sm btn-primary mb-4",3,"click",4,"ngIf"],[1,"m-t-20",3,"ngSubmit"],["signupForm","ngForm"],["class","alert alert-success",3,"hidden",4,"ngFor","ngForOf"],["class","alert alert-warning",3,"hidden",4,"ngFor","ngForOf"],[1,"input-group","input-group-sm","mb-4"],["type","password","name","password","placeholder","Password","aria-label","Password","aria-describedby","forPassword","required","",1,"form-control",3,"ngModel","ngModelChange"],[1,"input-group-prepend"],["id","forPassword",1,"input-group-text"],["type","password","name","confirm_password","placeholder","Confirm Password","aria-label","Confirm Password","aria-describedby","forConPassword","required","",1,"form-control",3,"ngModel","ngModelChange"],["id","forConPassword",1,"input-group-text"],["class","btn btn-block btn-sm btn-primary mb-4",3,"disabled",4,"ngIf"],[1,"btn","btn-block","btn-sm","btn-primary","mb-4",3,"click"],[1,"alert","alert-success",3,"hidden"],["type","button","data-dismiss","alert","aria-hidden","true",1,"close"],[1,"alert","alert-warning",3,"hidden"],[1,"btn","btn-block","btn-sm","btn-primary","mb-4",3,"disabled"]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"div",0),a["\u0275\u0275element"](1,"ngx-spinner"),a["\u0275\u0275elementStart"](2,"div",1),a["\u0275\u0275elementStart"](3,"app-card",2),a["\u0275\u0275elementStart"](4,"app-alert",3),a["\u0275\u0275elementStart"](5,"span",4),a["\u0275\u0275text"](6," There is a verification code required to change password and it's get in your email address also provide authentic information "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](7,v,2,0,"button",5),a["\u0275\u0275elementStart"](8,"form",6,7),a["\u0275\u0275listener"]("ngSubmit",(function(){return t.onSubmit()})),a["\u0275\u0275template"](10,w,4,2,"div",8),a["\u0275\u0275template"](11,y,4,2,"div",9),a["\u0275\u0275elementStart"](12,"div",10),a["\u0275\u0275elementStart"](13,"input",11),a["\u0275\u0275listener"]("ngModelChange",(function(e){return t.form.password=e})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](14,"div",12),a["\u0275\u0275elementStart"](15,"span",13),a["\u0275\u0275text"](16,"Required "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](17,"div",10),a["\u0275\u0275elementStart"](18,"input",14),a["\u0275\u0275listener"]("ngModelChange",(function(e){return t.form.confirm_password=e})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](19,"div",12),a["\u0275\u0275elementStart"](20,"span",15),a["\u0275\u0275text"](21,"Required "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](22,S,2,1,"button",16),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("options",!1),a["\u0275\u0275advance"](4),a["\u0275\u0275property"]("ngIf",t.form.verifycode),a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("ngForOf",t.success),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngForOf",t.errors),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngModel",t.form.password),a["\u0275\u0275advance"](5),a["\u0275\u0275property"]("ngModel",t.form.confirm_password),a["\u0275\u0275advance"](4),a["\u0275\u0275property"]("ngIf",null==t.form.verifycode))},directives:[l.a,h.a,g.a,n.u,b.G,b.s,b.t,n.t,b.d,b.C,b.r,b.u],styles:["ng-select.ng-select[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-radius:4px;border:none!important;margin-top:-3px!important}"]}),e})()}];let M=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[s.j.forChild(C)],s.j]}),e})();var E=r("ebz3"),P=r("lTK2"),I=r("Kb4U"),j=r("D5FM"),k=r("Mdnn");let F=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[n.c,M,E.a,j.a,I.a,P.b,b.m,l.b,f.f,k.a]]}),e})()}}]);