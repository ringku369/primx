(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{ILV8:function(t,e,r){"use strict";r.r(e),r.d(e,"SuperadminDashboardModule",(function(){return k}));var n=r("ofXK"),i=r("tyNb"),s=r("6n/F"),o=r("RSNc"),a=r.n(o),l=r("fXoL"),c=r("5eHb"),d=r("JqCM"),p=r("lGQG"),h=r("2QD9"),u=r("yj+E"),m=r("tk/3"),f=r("Ai/k");let g=(()=>{class t{constructor(t,e,r){this.http=t,this.authtoken=e,this.baseurl=r}getSelfProfile(){return this.http.get(this.baseurl.geturl()+"/superadmin/getSelfProfile")}putSelfProfile(t){return this.http.post(this.baseurl.geturl()+"/superadmin/putSelfProfile",t)}putSelfPassword(t){return this.http.post(this.baseurl.geturl()+"/superadmin/putSelfPassword",t)}putSelfPasswordConfirmation(t){return this.http.post(this.baseurl.geturl()+"/superadmin/putSelfPasswordConfirmation",t)}}return t.\u0275fac=function(e){return new(e||t)(l["\u0275\u0275inject"](m.b),l["\u0275\u0275inject"](h.a),l["\u0275\u0275inject"](f.a))},t.\u0275prov=l["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var b=r("1kSV"),y=r("/n7v"),v=r("+Ai/"),x=r("otxP");a()(s);const w=new Date,S=[{path:"",component:(()=>{class t{constructor(t,e,r,n,i,o,a,l,c){this.router=t,this.toastr=e,this.spinner=r,this.authservice=n,this.authtoken=i,this.authstatus=o,this.superadminUserService=a,this.parserFormatter=l,this.calendar=c,this.Highcharts=s,this.success=[],this.errors=[],this.form={sno:null,mobile:null,fdate:null,user:"0",user_id:null},this.modelDisabled={year:w.getFullYear(),month:w.getMonth()+1,day:w.getDate()},this.spinner.show()}emptyMessage(){this.errors=[],this.success=[]}successMsg(t){for(let e=0;e<t.length;e++)this.toastr.success(t[e])}errorMsg(t){for(let e=0;e<t.length;e++)this.toastr.error(t[e])}selectToday(){this.fdate={year:w.getFullYear(),month:w.getMonth()+1,day:w.getDate()}}ngOnInit(){this.spinner.hide(),this.chartfunction()}chartfunction(){this.barBasicChartOptions={chart:{type:"column"},colors:["#2196f3","#7759de","#f44336","#00ACC1"],title:{text:"Monthly user count"},subtitle:{text:"Opening accounts comparison"},xAxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],crosshair:!0},yAxis:{min:0,title:{text:"Number Of User"}},tooltip:{headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f} Acc</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0},plotOptions:{column:{pointPadding:.2,borderWidth:0}},series:[{name:"Down Link Users",data:[50,100,150,200,150,100,50,100,150,200,250,300]}]},this.barBasicChartOptions1={chart:{type:"column"},colors:["#2196f3","#7759de","#f44336","#00ACC1"],title:{text:"Daily user count"},subtitle:{text:"Opening accounts comparison"},xAxis:{categories:["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"],crosshair:!0},yAxis:{min:0,title:{text:"Number Of User"}},tooltip:{headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f} Acc</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0},plotOptions:{column:{pointPadding:.2,borderWidth:0}},series:[{name:"Down Link Users",data:[50,100,150,200,150,100,50,100,150,200,250,300,200,250,300,50,100,150,200,150,100,50,100,150,200,250,300,200,250,300]}]},this.lineBasicChartOptions={chart:{type:"spline"},colors:["#00ACC1","#2196f3","#7759de"],title:{text:"Solar Employment Growth by Sector, 2010-2017"},subtitle:{text:"Source: thesolarfoundation.com"},yAxis:{title:{text:"Number of Employees"}},plotOptions:{series:{label:{connectorAllowed:!1},pointStart:2010}},series:[{name:"Installation",data:[5,25,15,35,25,35,45,75]},{name:"Manufacturing",data:[25,35,45,75,5,25,15,35]},{name:"Sales & Distribution",data:[45,75,25,5,15,55,5,25]}],responsive:{rules:[{condition:{maxWidth:500},chartOptions:{legend:{layout:"horizontal",align:"center",verticalAlign:"bottom"}}}]}}}}return t.\u0275fac=function(e){return new(e||t)(l["\u0275\u0275directiveInject"](i.f),l["\u0275\u0275directiveInject"](c.c),l["\u0275\u0275directiveInject"](d.c),l["\u0275\u0275directiveInject"](p.a),l["\u0275\u0275directiveInject"](h.a),l["\u0275\u0275directiveInject"](u.a),l["\u0275\u0275directiveInject"](g),l["\u0275\u0275directiveInject"](b.e),l["\u0275\u0275directiveInject"](b.c))},t.\u0275cmp=l["\u0275\u0275defineComponent"]({type:t,selectors:[["app-superadmin-dashboard"]],decls:11,vars:6,consts:[[1,"row"],[1,"col-xl-12"],["cardTitle","Demonstration Chart",3,"options"],["type","info","dismiss","true"],[1,"text-center","text-danger","font-weight-bolder"],[2,"width","100%","height","450px","display","block",3,"Highcharts","options"]],template:function(t,e){1&t&&(l["\u0275\u0275elementStart"](0,"div",0),l["\u0275\u0275element"](1,"ngx-spinner"),l["\u0275\u0275elementStart"](2,"div",1),l["\u0275\u0275elementStart"](3,"app-card",2),l["\u0275\u0275elementStart"](4,"app-alert",3),l["\u0275\u0275elementStart"](5,"span",4),l["\u0275\u0275text"](6," Until two months age of your membership, demo chart will be appeared otherwise this chart will be displayed according your account data history "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](7,"lib-highcharts-angular",5),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](8,"div",1),l["\u0275\u0275elementStart"](9,"app-card",2),l["\u0275\u0275element"](10,"lib-highcharts-angular",5),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&t&&(l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("options",!1),l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("Highcharts",e.Highcharts)("options",e.barBasicChartOptions),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("options",!1),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("Highcharts",e.Highcharts)("options",e.barBasicChartOptions1))},directives:[d.a,y.a,v.a,x.b],styles:["ng-select.ng-select[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-radius:4px;border:none!important;margin-top:-3px!important}"]}),t})()}];let j=(()=>{class t{}return t.\u0275mod=l["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[i.j.forChild(S)],i.j]}),t})();var C=r("ebz3"),M=r("3Pt+"),I=r("lTK2"),O=r("Kb4U"),A=r("D5FM"),P=r("z+eI");let k=(()=>{class t{}return t.\u0275mod=l["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[n.c,j,C.a,A.a,O.a,I.b,M.m,d.b,b.f,x.a,P.ChartModule]]}),t})()}}]);