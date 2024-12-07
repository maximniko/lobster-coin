import{a as j,b as M}from"./chunk-6NCSG23H.js";import"./chunk-AFNWUBL2.js";import{e as k,f as x,h as C,m as F,n as w,o as I}from"./chunk-RXMJEWER.js";import{a as N}from"./chunk-SQDKHEQL.js";import{a as O}from"./chunk-72KES5SO.js";import{h as g}from"./chunk-IF43YOD4.js";import{Ha as o,Ia as r,Qa as p,Xb as S,Ya as n,Zb as B,db as s,dc as y,ea as u,eb as a,fb as f,jc as D,nb as l,pb as d,sb as h,vb as v,wb as b}from"./chunk-QRCP5SW7.js";var T=class c extends j{constructor(e,t,i,m,G){super();this.formBuilder=e;this.router=t;this.twa=i;this.bankService=m;this.coinsService=G;this.transfer=this.transfer.bind(this),this.goBack=this.goBack.bind(this),this.maxSum=this.coinsService.balance,this.form=this.formBuilder.group({})}form;formSubscription;coinsSubscription;maxSum;ngOnInit(){this.formSubscription=this.form.statusChanges.subscribe(e=>this.twa.mainButtonIsActive(e=="VALID")),this.coinsSubscription=this.coinsService.balanceSubject.subscribe({next:e=>this.onNextBalance(e),error:()=>this.goBack()}),this.twa.backButtonOnClick(this.goBack),this.twa.setMainButton({text:"\u041F\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438",is_active:!0,is_visible:!0},this.transfer)}ngOnDestroy(){this.formSubscription?.unsubscribe(),this.coinsSubscription?.unsubscribe(),this.twa.offBackButton(this.goBack),this.twa.offMainButton(this.transfer)}onNextBalance(e){if(e!==this.maxSum){this.goBack();return}if(this.form.invalid)return;let t=this.form.value;if(t.sum>e){this.twa.showAlert("\u041E\u0448\u0438\u0431\u043A\u0430 \u0431\u0430\u043B\u0430\u043D\u0441\u0430");return}if(!t.sum||isNaN(t.sum))return;let i=this.bankService.balance;try{this.bankService.saveBalance(i+t.sum),this.coinsService.saveBalance(e-t.sum),this.form.reset()}catch(m){this.twa.showAlert(m.message),this.bankService.saveBalance(i),this.coinsService.saveBalance(e)}}transfer(){this.coinsService.loadBalance()}goBack(){this.router.navigate([O.balance()])}static \u0275fac=function(t){return new(t||c)(r(F),r(g),r(y),r(N),r(D))};static \u0275cmp=u({type:c,selectors:[["ng-component"]],hostAttrs:[1,"d-flex","flex-column","h-100"],standalone:!0,features:[p,h],decls:9,vars:6,consts:[[1,"accent-border","accent-border-top","accent-bg-shadow","rounded-5","tg-bg-secondary"],[1,"hstack","p-3","pb-0","color-accent"],[1,"m-auto","text-center","h5"],[1,"d-flex","flex-column","h-100","mb-5"],[1,"mx-2","my-4"],[3,"formGroup"],[3,"parentForm","max"]],template:function(t,i){t&1&&(s(0,"section",0)(1,"div",1)(2,"span",2),l(3),v(4,"async"),a()(),s(5,"div",3)(6,"div",4)(7,"form",5),f(8,"sum-input",6),a()()()()),t&2&&(o(3),d("\u041F\u0435\u0440\u0435\u0432\u043E\u0434 (\u0432\u0441\u0435\u0433\u043E: ",b(4,4,i.coinsService.balanceSubject),")"),o(4),n("formGroup",i.form),o(),n("parentForm",i.form)("max",i.maxSum))},dependencies:[B,S,w,x,k,M,I,C],encapsulation:2})};export{T as TransferComponent};