(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{Iab2:function(t,e,r){var n,s;void 0===(s="function"==typeof(n=function(){"use strict";function e(t,e,r){var n=new XMLHttpRequest;n.open("GET",t),n.responseType="blob",n.onload=function(){a(n.response,e,r)},n.onerror=function(){console.error("could not download file")},n.send()}function r(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function n(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(e){var r=document.createEvent("MouseEvents");r.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(r)}}var s="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,i=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),a=s.saveAs||("object"!=typeof window||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!i?function(t,i,a){var o=s.URL||s.webkitURL,u=document.createElement("a");u.download=i=i||t.name||"download",u.rel="noopener","string"==typeof t?(u.href=t,u.origin===location.origin?n(u):r(u.href)?e(t,i,a):n(u,u.target="_blank")):(u.href=o.createObjectURL(t),setTimeout((function(){o.revokeObjectURL(u.href)}),4e4),setTimeout((function(){n(u)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,s,i){if(s=s||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,i),s);else if(r(t))e(t,s,i);else{var a=document.createElement("a");a.href=t,a.target="_blank",setTimeout((function(){n(a)}))}}:function(t,r,n,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof t)return e(t,r,n);var o="application/octet-stream"===t.type,u=/constructor/i.test(s.HTMLElement)||s.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||o&&u||i)&&"undefined"!=typeof FileReader){var h=new FileReader;h.onloadend=function(){var t=h.result;t=l?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=t:location=t,a=null},h.readAsDataURL(t)}else{var p=s.URL||s.webkitURL,d=p.createObjectURL(t);a?a.location=d:location.href=d,a=null,setTimeout((function(){p.revokeObjectURL(d)}),4e4)}});s.saveAs=a.saveAs=a,t.exports=a})?n.apply(e,[]):n)||(t.exports=s)},Qe8B:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r("fXoL"),s=r("tk/3"),i=r("2QD9"),a=r("Ai/k");let o=(()=>{class t{constructor(t,e,r){this.http=t,this.authtoken=e,this.baseurl=r}getSelfProfile(){return this.http.get(this.baseurl.geturl()+"/admin/getSelfProfile")}putSelfProfile(t){return this.http.put(this.baseurl.geturl()+"/admin/putSelfProfile",t)}putSelfEmail(t){return this.http.put(this.baseurl.geturl()+"/admin/putSelfEmail",t)}putSelfPassword(t){return this.http.post(this.baseurl.geturl()+"/admin/putSelfPassword",t)}putSelfPasswordConfirmation(t){return this.http.post(this.baseurl.geturl()+"/admin/putSelfPasswordConfirmation",t)}getDownlinkUser(){return this.http.get(this.baseurl.geturl()+"/admin/getDownlinkUser")}getBranchForDD(){return this.http.get(this.baseurl.geturl()+"/admin/getBranchForDD")}getBankForDD(){return this.http.get(this.baseurl.geturl()+"/admin/getBankForDD")}getRankForDD(){return this.http.get(this.baseurl.geturl()+"/admin/getRankForDD")}getUserForDD(){return this.http.get(this.baseurl.geturl()+"/admin/getUserForDD")}getUserProfile(t){return this.http.post(this.baseurl.geturl()+"/admin/getUserProfile",t)}createBank(t){return this.http.post(this.baseurl.geturl()+"/admin/createBank",t)}getBank(){return this.http.get(this.baseurl.geturl()+"/admin/getBank")}updateBank(t){return this.http.put(this.baseurl.geturl()+"/admin/updateBank",t)}deleteBank(t){return this.http.delete(`${this.baseurl.geturl()}/admin/deleteBank/${t}`)}createBranch(t){return this.http.post(this.baseurl.geturl()+"/admin/createBranch",t)}getBranch(){return this.http.get(this.baseurl.geturl()+"/admin/getBranch")}updateBranch(t){return this.http.put(this.baseurl.geturl()+"/admin/updateBranch",t)}deleteBranch(t){return this.http.delete(`${this.baseurl.geturl()}/admin/deleteBranch/${t}`)}createRank(t){return this.http.post(this.baseurl.geturl()+"/admin/createRank",t)}getRank(){return this.http.get(this.baseurl.geturl()+"/admin/getRank")}updateRank(t){return this.http.put(this.baseurl.geturl()+"/admin/updateRank",t)}deleteRank(t){return this.http.delete(`${this.baseurl.geturl()}/admin/deleteRank/${t}`)}createUser(t){return this.http.post(this.baseurl.geturl()+"/admin/createUser",t)}getUser(){return this.http.get(this.baseurl.geturl()+"/admin/getUser")}updateUser(t){return this.http.put(this.baseurl.geturl()+"/admin/updateUser",t)}deleteUser(t){return this.http.delete(`${this.baseurl.geturl()}/admin/deleteUser/${t}`)}createDeposit(t){return this.http.post(this.baseurl.geturl()+"/admin/createDeposit",t)}getDeposit(){return this.http.get(this.baseurl.geturl()+"/admin/getDeposit")}updateDeposit(t){return this.http.put(this.baseurl.geturl()+"/admin/updateDeposit",t)}deleteDeposit(t){return this.http.delete(`${this.baseurl.geturl()}/admin/deleteDeposit/${t}`)}postFundTrToUser(t){return this.http.post(this.baseurl.geturl()+"/admin/postFundTrToUser",t)}postFundTrToUserConfirm(t){return this.http.post(this.baseurl.geturl()+"/admin/postFundTrToUserConfirm",t)}dateWiseEmployeeHistory(t){return this.http.post(this.baseurl.geturl()+"/admin/dateWiseEmployeeHistory",t)}dateWiseFundTrnHistory(t){return this.http.post(this.baseurl.geturl()+"/admin/dateWiseFundTrnHistory",t)}dateWiseUserFundTrnHistory(t){return this.http.post(this.baseurl.geturl()+"/admin/dateWiseUserFundTrnHistory",t)}getDashboardData(){return this.http.get(this.baseurl.geturl()+"/admin/getDashboardData")}}return t.\u0275fac=function(e){return new(e||t)(n["\u0275\u0275inject"](s.b),n["\u0275\u0275inject"](i.a),n["\u0275\u0275inject"](a.a))},t.\u0275prov=n["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},hnKR:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r("fXoL"),s=r("tk/3"),i=r("2QD9"),a=r("Ai/k");let o=(()=>{class t{constructor(t,e,r){this.http=t,this.authtoken=e,this.baseurl=r}getSelfProfile(){return this.http.get(this.baseurl.geturl()+"/user/getSelfProfile")}putSelfProfile(t){return this.http.put(this.baseurl.geturl()+"/user/putSelfProfile",t)}putSelfPassword(t){return this.http.post(this.baseurl.geturl()+"/user/putSelfPassword",t)}putSelfPasswordConfirmation(t){return this.http.post(this.baseurl.geturl()+"/user/putSelfPasswordConfirmation",t)}dateWiseUserFundTrnHistory(t){return this.http.post(this.baseurl.geturl()+"/user/dateWiseUserFundTrnHistory",t)}getDashboardData(){return this.http.get(this.baseurl.geturl()+"/user/getDashboardData")}}return t.\u0275fac=function(e){return new(e||t)(n["\u0275\u0275inject"](s.b),n["\u0275\u0275inject"](i.a),n["\u0275\u0275inject"](a.a))},t.\u0275prov=n["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},njyG:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r("fXoL"),s=r("ofXK"),i=function(){function t(){}var e;return e=t,t.forRoot=function(){return{ngModule:e}},t.\u0275mod=n["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=n["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[s.c]]}),t}()}}]);