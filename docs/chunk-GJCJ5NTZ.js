import{b as pe}from"./chunk-CMFS2QB3.js";import{a as ae}from"./chunk-OIFQLSBG.js";import{n as de}from"./chunk-RXMJEWER.js";import"./chunk-JIHTAVX4.js";import{h as se}from"./chunk-IF43YOD4.js";import{Ea as q,G as Y,Ha as d,Ia as c,Ma as S,Q as H,R as N,S as B,U as L,Ub as oe,Wb as re,Xa as G,Xb as ce,Y as U,Ya as g,Zb as y,bb as K,cb as V,cc as le,db as m,dc as ue,ea as b,eb as l,fb as A,ga as u,hb as p,i as X,ib as J,jc as me,l as j,lb as Q,nb as Z,oa as z,pa as W,pb as ee,sb as C,tb as te,ub as k,vb as ie,wb as ne,xa as v}from"./chunk-QRCP5SW7.js";function fe(n){return new X(e=>n.subscribe(e))}var w=class n{constructor(e,t){this.el=e;this.renderer=t}appClickAnimation=1;ngOnInit(){this.addAnimation()}addAnimation(){let e=this.el.nativeElement,t=`bubbleMove-${this.appClickAnimation}-${Date.now()}`,i=Math.random()*50-25,o=Math.random()*50-25,r=`
      @keyframes ${t} {
        0% {
          opacity: 1;
          offset-rotate: ${i}deg;
          offset-distance: 0%;
        }
        100% {
          opacity: 0;
          offset-distance: 100%;
          offset-rotate: ${o}deg;
          transform: scale(1.2);
        }
      }
    `,s=document.styleSheets[0];s.insertRule(r,s.cssRules.length),this.renderer.setStyle(e,"animation",`${t} 1.5s ease-in-out forwards`),this.renderer.setStyle(e,"offset-path",this.generateRandomPath())}generateRandomPath(){let e=Math.random()*100-50,t=Math.random()*100-50,i=-Math.random()*100,o=-Math.random()*200,r=Math.random()*50-25,s=-150-r;return`path("M 0 0 C ${e} ${i}, ${t} ${o}, ${r} ${s}")`}static \u0275fac=function(t){return new(t||n)(c(v),c(S))};static \u0275dir=u({type:n,selectors:[["","appClickAnimation",""]],inputs:{appClickAnimation:"appClickAnimation"},standalone:!0})};var f=class n{sounds;activeSounds=0;maxConcurrentSounds=3;withSound=!0;constructor(){this.sounds=ke.map(e=>new Audio(Ce+e))}play(e){if(!this.withSound||this.activeSounds>=this.maxConcurrentSounds)return;let t=Object.keys(this.sounds),i=e%t.length,o=this.sounds[i];o.play(),this.activeSounds++,o.onended=()=>{this.activeSounds--}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=U({token:n,factory:n.\u0275fac,providedIn:"root"})},Ce="assets/coin/sounds/",ke=["1-1.mp3","1-2.mp3","1-3.mp3","1-4.mp3","1-5.mp3","1-6.mp3","1-7.mp3"];var M=class n{constructor(e){this.coinSoundService=e}appClickSound={sound:1};ngOnInit(){this.addSound()}addSound(){this.coinSoundService.play(this.appClickSound.sound)}static \u0275fac=function(t){return new(t||n)(c(f))};static \u0275dir=u({type:n,selectors:[["","appClickSound",""]],inputs:{appClickSound:"appClickSound"},standalone:!0})};var I=class n{constructor(e,t){this.el=e;this.renderer=t}onMouseEnter(e){let t=this.el.nativeElement,i=t.getBoundingClientRect(),{averageX:o,averageY:r}=this.getAverageTouchPoint(e),s=i.left+i.width/2,a=i.top+i.height/2,$=s-o,E=a-r,ve=Math.sqrt($**2+E**2),O=Math.min(i.width,i.height)/2,_=`clickCenter-${Date.now()}`,D;if(ve/O<.3)D=`
      @keyframes ${_} {
        0% { transform: scale(1); }
        50% { transform: scale(0.95); }
        100% { transform: scale(1); }
      }
    `;else{let x=E/O,R=-($/O),Se=s+$,ge=a+E,F=20*Math.max(Math.abs(x),Math.abs(R));D=`
      @keyframes ${_} {
        0% {
          transform: rotate3d(${x}, ${R}, 0, ${F}deg);
          transform-origin: ${Se}px ${ge}px;
        }
        50% { transform: rotate3d(${x/2}, ${R/2}, 0, ${F/2}deg); }
        100% { transform: rotate3d(0, 0, 0, 0deg); }
      }
    `}let P=document.styleSheets[0];P.insertRule(D,P.cssRules.length),this.renderer.setStyle(t,"animation",`${_} 0.7s ease-out forwards`)}onTouchEnd(e){let t=this.el.nativeElement;this.renderer.removeClass(t,"press-center"),this.renderer.removeClass(t,"press-edge")}getAverageTouchPoint(e){let t=0,i=0,o=e.touches.length;for(let a=0;a<o;a++)t+=e.touches[a].clientX,i+=e.touches[a].clientY;let r=t/o,s=i/o;return{averageX:r,averageY:s}}static \u0275fac=function(t){return new(t||n)(c(v),c(S))};static \u0275dir=u({type:n,selectors:[["","coinPress",""]],hostBindings:function(t,i){t&1&&p("touchstart",function(r){return i.onMouseEnter(r)})("touchend",function(r){return i.onTouchEnd(r)})},standalone:!0})};var Me=(n,e)=>e.id,Ie=n=>({sound:n}),Te=(n,e)=>({"top.px":n,"left.px":e});function $e(n,e){if(n&1&&(m(0,"div",2),Z(1),ie(2,"async"),l()),n&2){let t=e.$implicit,i=J();g("appClickAnimation",t.id)("appClickSound",te(6,Ie,t.id))("ngStyle",k(8,Te,t.top,t.left)),d(),ee(" ",ne(2,4,i.turboService.perClickSubject)," ")}}var T=class n{constructor(e,t){this.coinsService=e;this.turboService=t}clicks=[];clickCounter=0;perClick=1;trigger$=new j;clickSubject=new j;triggerSubscription;turboSubscription;bubbleSrc(){let e="/assets/bubbles/bubble.svg";return le.production?"bubble-click"+e:e}ngOnInit(){this.triggerSubscription=this.trigger$.pipe(N(void 0),B(()=>fe(this.clickSubject).pipe(H(e=>e+1,0))),Y(500),L(()=>this.trigger$.next())).subscribe(e=>this.coinsService.saveClicks(e*this.perClick)),this.turboSubscription=this.turboService.perClickSubject.subscribe(e=>this.perClick=e)}ngOnDestroy(){this.triggerSubscription?.unsubscribe(),this.turboSubscription?.unsubscribe()}onClick(e){for(let t=0;t<e.changedTouches.length;t++){let i=e.changedTouches[t],o=Math.random()*360-180,r={id:this.clickCounter++,top:i.clientY,left:i.clientX,rotation:o};this.clicks.push(r),this.clickSubject.next(),setTimeout(()=>{this.clicks=this.clicks.filter(s=>s.id!==r.id)},1500)}}static \u0275fac=function(t){return new(t||n)(c(me),c(pe))};static \u0275cmp=b({type:n,selectors:[["main-coin"]],standalone:!0,features:[C],decls:4,vars:1,consts:[[1,"m-auto"],["coinPress","","alt","bubble",2,"width","17rem","height","17rem","border-radius","50%",3,"touchend","src"],[1,"click","color-accent",3,"appClickAnimation","appClickSound","ngStyle"]],template:function(t,i){t&1&&(m(0,"div",0)(1,"img",1),p("touchend",function(r){return i.onClick(r)}),l(),K(2,$e,3,11,"div",2,Me),l()),t&2&&(d(),Q("src",i.bubbleSrc(),q),d(),V(i.clicks))},dependencies:[y,re,ce,de,w,I,M],styles:['.clicker-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;position:relative;border-radius:50%}.click[_ngcontent-%COMP%]{position:fixed;font-size:2rem;pointer-events:none}.bubble[_ngcontent-%COMP%]{position:relative;border-radius:50%;background:#fff linear-gradient(to left,#bbd2ff,#b1fbff);box-shadow:2rem 5rem 5rem #8dedff85}.bubble[_ngcontent-%COMP%]:before{content:"";position:absolute;display:block;top:2%;left:3%;height:95%;width:95%;border-radius:50%;background:#bff8ff;opacity:.8;overflow:hidden}.bubble[_ngcontent-%COMP%]:after{content:"";position:absolute;display:block;top:25%;left:70%;height:25%;width:9%;border-radius:50%;background:#fbf8ff;overflow:hidden}']})};var Ee=(n,e)=>({"color-accent":n,"opacity-75":e}),be=class n{constructor(e,t,i){this.coinSoundService=e;this.twa=t;this.router=i}ngOnInit(){this.twa.visibleBackButton(!1)}toggleWithSound(){this.coinSoundService.withSound=!this.coinSoundService.withSound,this.twa.hapticFeedbackNotificationOccurred(this.coinSoundService.withSound?"success":"warning")}symbols=ae;static \u0275fac=function(t){return new(t||n)(c(f),c(ue),c(se))};static \u0275cmp=b({type:n,selectors:[["ng-component"]],hostAttrs:[1,"d-flex","flex-column","h-100"],standalone:!0,features:[C],decls:5,vars:5,consts:[[1,"accent-border","accent-border-top","accent-bg-shadow","rounded-5","tg-bg-secondary","d-flex","h-100"],[1,"btn","border-0","position-absolute","end-0","m-3",3,"click","ngClass"],[1,"bi",2,"width","2rem","height","2rem"],[1,"coin-layout"]],template:function(t,i){t&1&&(m(0,"section",0)(1,"button",1),p("click",function(){return i.toggleWithSound()}),z(),m(2,"svg",2),A(3,"use"),l()(),W(),A(4,"main-coin",3),l()),t&2&&(d(),g("ngClass",k(2,Ee,i.coinSoundService.withSound,!i.coinSoundService.withSound)),d(2),G("href","#"+(i.coinSoundService.withSound?i.symbols.volumeUpFill:i.symbols.volumeMute),null,"xlink"))},dependencies:[y,oe,T],styles:[".coin-layout[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;background:linear-gradient(220deg,#0085ff4d,#fec8ff4d)}"]})};export{be as MainComponent};