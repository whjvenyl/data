(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"Mgl+":function(t,n,e){"use strict";e.r(n);var s=e("8Y7J");class i{}var a=e("XNiG"),l=(e("GS7A"),e("zMNK")),o=e("IzEk"),r=e("1G5W"),c=e("QQfA"),u=e("5GAg"),b=e("/HVE"),h=e("itXk"),d=e("GyhO"),p=e("HDdC"),m=e("7o/Q");class f{constructor(t){this.total=t}call(t,n){return n.subscribe(new _(t,this.total))}}class _ extends m.a{constructor(t,n){super(t),this.total=n,this.count=0}_next(t){++this.count>this.total&&this.destination.next(t)}}var k=e("Kj3r"),g=e("lJxs"),y=e("JX91"),v=e("KCVW");const j=new Set;let x,O=(()=>{class t{constructor(t){this._platform=t,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):w}matchMedia(t){return this._platform.WEBKIT&&function(t){if(!j.has(t))try{x||(x=document.createElement("style"),x.setAttribute("type","text/css"),document.head.appendChild(x)),x.sheet&&(x.sheet.insertRule(`@media ${t} {.fx-query-test{ }}`,0),j.add(t))}catch(n){console.error(n)}}(t),this._matchMedia(t)}}return t.ngInjectableDef=Object(s.Rb)({factory:function(){return new t(Object(s.Sb)(b.a))},token:t,providedIn:"root"}),t})();function w(t){return{matches:"all"===t||""===t,media:t,addListener:()=>{},removeListener:()=>{}}}let S=(()=>{class t{constructor(t,n){this._mediaMatcher=t,this._zone=n,this._queries=new Map,this._destroySubject=new a.a}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return B(Object(v.b)(t)).some(t=>this._registerQuery(t).mql.matches)}observe(t){const n=B(Object(v.b)(t)).map(t=>this._registerQuery(t).observable);let e=Object(h.a)(n);return e=Object(d.a)(e.pipe(Object(o.a)(1)),e.pipe(t=>t.lift(new f(1)),Object(k.a)(0))),e.pipe(Object(g.a)(t=>{const n={matches:!1,breakpoints:{}};return t.forEach(t=>{n.matches=n.matches||t.matches,n.breakpoints[t.query]=t.matches}),n}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);const n=this._mediaMatcher.matchMedia(t),e={observable:new p.a(t=>{const e=n=>this._zone.run(()=>t.next(n));return n.addListener(e),()=>{n.removeListener(e)}}).pipe(Object(y.a)(n),Object(g.a)(n=>({query:t,matches:n.matches})),Object(r.a)(this._destroySubject)),mql:n};return this._queries.set(t,e),e}}return t.ngInjectableDef=Object(s.Rb)({factory:function(){return new t(Object(s.Sb)(O),Object(s.Sb)(s.z))},token:t,providedIn:"root"}),t})();function B(t){return t.map(t=>t.split(",")).reduce((t,n)=>t.concat(n)).map(t=>t.trim())}class D{constructor(t,n){this._overlayRef=n,this._afterDismissed=new a.a,this._afterOpened=new a.a,this._onAction=new a.a,this._dismissedByAction=!1,this.containerInstance=t,this.onAction().subscribe(()=>this.dismiss()),t._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete())}closeWithAction(){this.dismissWithAction()}_dismissAfter(t){this._durationTimeoutId=setTimeout(()=>this.dismiss(),t)}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed.asObservable()}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction.asObservable()}}const A=new s.q("MatSnackBarData");class R{constructor(){this.politeness="assertive",this.announcementMessage="",this.duration=0,this.data=null,this.horizontalPosition="center",this.verticalPosition="bottom"}}class L{constructor(t,n){this.snackBarRef=t,this.data=n}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}}class C extends l.a{constructor(t,n,e,s){super(),this._ngZone=t,this._elementRef=n,this._changeDetectorRef=e,this.snackBarConfig=s,this._destroyed=!1,this._onExit=new a.a,this._onEnter=new a.a,this._animationState="void",this._role="assertive"!==s.politeness||s.announcementMessage?"off"===s.politeness?null:"status":"alert"}attachComponentPortal(t){return this._assertNotAttached(),this._applySnackBarClasses(),this._portalOutlet.attachComponentPortal(t)}attachTemplatePortal(t){return this._assertNotAttached(),this._applySnackBarClasses(),this._portalOutlet.attachTemplatePortal(t)}onAnimationEnd(t){const{fromState:n,toState:e}=t;if(("void"===e&&"void"!==n||"hidden"===e)&&this._completeExit(),"visible"===e){const t=this._onEnter;this._ngZone.run(()=>{t.next(),t.complete()})}}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.detectChanges())}exit(){return this._animationState="hidden",this._onExit}ngOnDestroy(){this._destroyed=!0,this._completeExit()}_completeExit(){this._ngZone.onMicrotaskEmpty.asObservable().pipe(Object(o.a)(1)).subscribe(()=>{this._onExit.next(),this._onExit.complete()})}_applySnackBarClasses(){const t=this._elementRef.nativeElement,n=this.snackBarConfig.panelClass;n&&(Array.isArray(n)?n.forEach(n=>t.classList.add(n)):t.classList.add(n)),"center"===this.snackBarConfig.horizontalPosition&&t.classList.add("mat-snack-bar-center"),"top"===this.snackBarConfig.verticalPosition&&t.classList.add("mat-snack-bar-top")}_assertNotAttached(){if(this._portalOutlet.hasAttached())throw Error("Attempting to attach snack bar content after content is already attached")}}class M{}const E=new s.q("mat-snack-bar-default-options",{providedIn:"root",factory:function(){return new R}});let z=(()=>{class t{constructor(t,n,e,s,i,a){this._overlay=t,this._live=n,this._injector=e,this._breakpointObserver=s,this._parentSnackBar=i,this._defaultConfig=a,this._snackBarRefAtThisLevel=null}get _openedSnackBarRef(){const t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}openFromComponent(t,n){return this._attach(t,n)}openFromTemplate(t,n){return this._attach(t,n)}open(t,n="",e){const s=Object.assign({},this._defaultConfig,e);return s.data={message:t,action:n},s.announcementMessage||(s.announcementMessage=t),this.openFromComponent(L,s)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,n){const e=new l.e(n&&n.viewContainerRef&&n.viewContainerRef.injector||this._injector,new WeakMap([[R,n]])),s=new l.c(C,n.viewContainerRef,e),i=t.attach(s);return i.instance.snackBarConfig=n,i.instance}_attach(t,n){const e=Object.assign({},new R,this._defaultConfig,n),i=this._createOverlay(e),a=this._attachSnackBarContainer(i,e),o=new D(a,i);if(t instanceof s.M){const n=new l.g(t,null,{$implicit:e.data,snackBarRef:o});o.instance=a.attachTemplatePortal(n)}else{const n=this._createInjector(e,o),s=new l.c(t,void 0,n),i=a.attachComponentPortal(s);o.instance=i.instance}return this._breakpointObserver.observe("(max-width: 599.99px) and (orientation: portrait)").pipe(Object(r.a)(i.detachments())).subscribe(t=>{const n=i.overlayElement.classList;t.matches?n.add("mat-snack-bar-handset"):n.remove("mat-snack-bar-handset")}),this._animateSnackBar(o,e),this._openedSnackBarRef=o,this._openedSnackBarRef}_animateSnackBar(t,n){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),n.announcementMessage&&this._live.clear()}),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter(),n.duration&&n.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(n.duration)),n.announcementMessage&&this._live.announce(n.announcementMessage,n.politeness)}_createOverlay(t){const n=new c.b;n.direction=t.direction;let e=this._overlay.position().global();const s="rtl"===t.direction,i="left"===t.horizontalPosition||"start"===t.horizontalPosition&&!s||"end"===t.horizontalPosition&&s,a=!i&&"center"!==t.horizontalPosition;return i?e.left("0"):a?e.right("0"):e.centerHorizontally(),"top"===t.verticalPosition?e.top("0"):e.bottom("0"),n.positionStrategy=e,this._overlay.create(n)}_createInjector(t,n){return new l.e(t&&t.viewContainerRef&&t.viewContainerRef.injector||this._injector,new WeakMap([[D,n],[A,t.data]]))}}return t.ngInjectableDef=Object(s.Rb)({factory:function(){return new t(Object(s.Sb)(c.a),Object(s.Sb)(u.c),Object(s.Sb)(s.o),Object(s.Sb)(S),Object(s.Sb)(t,12),Object(s.Sb)(E))},token:t,providedIn:M}),t})();var T=e("SVse"),I=e("IP0z"),P=e("hOhj"),F=e("Xd0L"),N=e("cUpR"),q=e("Fwaw"),W=e("bujt"),J=e("omvX"),G=s.sb({encapsulation:2,styles:[".mat-snack-bar-container{border-radius:4px;box-sizing:border-box;display:block;margin:24px;max-width:33vw;min-width:344px;padding:14px 16px;min-height:48px;transform-origin:center}@media (-ms-high-contrast:active){.mat-snack-bar-container{border:solid 1px}}.mat-snack-bar-handset{width:100%}.mat-snack-bar-handset .mat-snack-bar-container{margin:8px;max-width:100%;min-width:0;width:100%}"],data:{animation:[{type:7,name:"state",definitions:[{type:0,name:"void, hidden",styles:{type:6,styles:{transform:"scale(0.8)",opacity:0},offset:null},options:void 0},{type:0,name:"visible",styles:{type:6,styles:{transform:"scale(1)",opacity:1},offset:null},options:void 0},{type:1,expr:"* => visible",animation:{type:4,styles:null,timings:"150ms cubic-bezier(0, 0, 0.2, 1)"},options:null},{type:1,expr:"* => void, * => hidden",animation:{type:4,styles:{type:6,styles:{opacity:0},offset:null},timings:"75ms cubic-bezier(0.4, 0.0, 1, 1)"},options:null}],options:{}}]}});function Q(t){return s.Nb(0,[(t()(),s.jb(0,null,null,0))],null,null)}function X(t){return s.Nb(0,[s.Jb(402653184,1,{_portalOutlet:0}),(t()(),s.jb(16777216,null,null,1,null,Q)),s.tb(2,212992,[[1,4]],0,l.b,[s.k,s.P],{portal:[0,"portal"]},null)],(function(t,n){t(n,2,0,"")}),null)}function $(t){return s.Nb(0,[(t()(),s.ub(0,0,null,null,1,"snack-bar-container",[["class","mat-snack-bar-container"]],[[1,"role",0],[40,"@state",0]],[["component","@state.done"]],(function(t,n,e){var i=!0;return"component:@state.done"===n&&(i=!1!==s.Fb(t,1).onAnimationEnd(e)&&i),i}),X,G)),s.tb(1,180224,null,0,C,[s.z,s.l,s.i,R],null,null)],null,(function(t,n){t(n,0,0,s.Fb(n,1)._role,s.Fb(n,1)._animationState)}))}var H=s.qb("snack-bar-container",C,$,{},{},[]),K=s.sb({encapsulation:2,styles:[".mat-simple-snackbar{display:flex;justify-content:space-between;align-items:center;line-height:20px;opacity:1}.mat-simple-snackbar-action{flex-shrink:0;margin:-8px -8px -8px 8px}.mat-simple-snackbar-action button{max-height:36px;min-width:0}[dir=rtl] .mat-simple-snackbar-action{margin-left:-8px;margin-right:8px}"],data:{}});function V(t){return s.Nb(0,[(t()(),s.ub(0,0,null,null,3,"div",[["class","mat-simple-snackbar-action"]],null,null,null,null,null)),(t()(),s.ub(1,0,null,null,2,"button",[["mat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(t,n,e){var s=!0;return"click"===n&&(s=!1!==t.component.action()&&s),s}),W.b,W.a)),s.tb(2,180224,null,0,q.b,[s.l,u.a,[2,J.a]],null,null),(t()(),s.Lb(3,0,["",""]))],null,(function(t,n){var e=n.component;t(n,1,0,s.Fb(n,2).disabled||null,"NoopAnimations"===s.Fb(n,2)._animationMode),t(n,3,0,e.data.action)}))}function Z(t){return s.Nb(2,[(t()(),s.ub(0,0,null,null,1,"span",[],null,null,null,null,null)),(t()(),s.Lb(1,null,["",""])),(t()(),s.jb(16777216,null,null,1,null,V)),s.tb(3,16384,null,0,T.k,[s.P,s.M],{ngIf:[0,"ngIf"]},null)],(function(t,n){t(n,3,0,n.component.hasAction)}),(function(t,n){t(n,1,0,n.component.data.message)}))}function U(t){return s.Nb(0,[(t()(),s.ub(0,0,null,null,1,"simple-snack-bar",[["class","mat-simple-snackbar"]],null,null,null,Z,K)),s.tb(1,49152,null,0,L,[D,A],null,null)],null,null)}var Y=s.qb("simple-snack-bar",L,U,{},{},[]),tt=e("pMnS"),nt=e("mrSG"),et=e("CoC1"),st=e("8nyR"),it=e("e1JD");let at=(()=>{let t=class extends st.c{constructor(t){super(),this.snackBar=t,this.expired$=new a.a}ngxsDataAfterExpired(t,n){this.snackBar.open("Expired",t.key,{duration:5e3,verticalPosition:"top",horizontalPosition:"right"})}addTodo(t){t&&this.ctx.setState(n=>n.concat(t))}removeTodo(t){this.ctx.setState(n=>n.filter((n,e)=>e!==t))}};return Object(nt.a)([Object(et.b)(),Object(nt.c)(0,Object(et.e)("todo")),Object(nt.b)("design:type",Function),Object(nt.b)("design:paramtypes",[String]),Object(nt.b)("design:returntype",void 0)],t.prototype,"addTodo",null),Object(nt.a)([Object(et.b)(),Object(nt.c)(0,Object(et.e)("idx")),Object(nt.b)("design:type",Function),Object(nt.b)("design:paramtypes",[Number]),Object(nt.b)("design:returntype",void 0)],t.prototype,"removeTodo",null),t=Object(nt.a)([Object(et.f)({ttlDelay:5e3,fireInit:!1,ttl:3e4,existingEngine:localStorage}),Object(et.g)(),Object(it.e)({name:"todo",defaults:[]})],t),t})();class lt{constructor(t){this.todo=t}}var ot=s.sb({encapsulation:2,styles:[],data:{}});function rt(t){return s.Nb(0,[(t()(),s.ub(0,0,null,null,4,"li",[["class","todo"]],null,null,null,null,null)),(t()(),s.Lb(1,null,["\n        "," "])),(t()(),s.ub(2,0,null,null,1,"button",[],null,[[null,"click"]],(function(t,n,e){var s=!0;return"click"===n&&(s=!1!==t.component.todo.removeTodo(t.context.index)&&s),s}),null,null)),(t()(),s.Lb(-1,null,["\u{1f5d1}"])),(t()(),s.Lb(-1,null,["\n    "]))],null,(function(t,n){t(n,1,0,n.context.$implicit)}))}function ct(t){return s.Nb(2,[(t()(),s.ub(0,0,null,null,3,"a",[["href","http://stackblitz.com/github/ngxs-labs/data?file=integration%2Fapp%2Fexamples%2Ftodo%2Ftodo.state.ts"],["target","_blank"]],null,null,null,null,null)),(t()(),s.Lb(-1,null,["\n    "])),(t()(),s.ub(2,0,null,null,0,"img",[["alt","stackblitz"],["class","stackblitz"],["src","https://habrastorage.org/webt/ma/me/jm/mamejmzzxqu5pfn6rfieay6oisi.png"]],null,null,null,null,null)),(t()(),s.Lb(-1,null,["\n"])),(t()(),s.Lb(-1,null,["\n\n"])),(t()(),s.ub(5,0,null,null,1,"h3",[],null,null,null,null,null)),(t()(),s.Lb(-1,null,["TodoState"])),(t()(),s.Lb(-1,null,["\n\nPS: TodoState will be persistence in localStorage (ttl: 30sec)\n\n"])),(t()(),s.ub(8,0,null,null,9,"div",[["class","add-todo"]],null,null,null,null,null)),(t()(),s.Lb(-1,null,["\n    "])),(t()(),s.ub(10,0,[["text",1]],null,0,"input",[["placeholder","New Todo"]],null,null,null,null,null)),(t()(),s.Lb(-1,null,["\n    "])),(t()(),s.ub(12,0,null,null,1,"button",[],null,[[null,"click"]],(function(t,n,e){var i=!0;return"click"===n&&(i=!1!==t.component.todo.addTodo(s.Fb(t,10).value)&&i),i}),null,null)),(t()(),s.Lb(-1,null,["Add"])),(t()(),s.Lb(-1,null,["\n    "])),(t()(),s.ub(15,0,null,null,1,"button",[],null,[[null,"click"]],(function(t,n,e){var s=!0;return"click"===n&&(s=!1!==t.component.todo.reset()&&s),s}),null,null)),(t()(),s.Lb(-1,null,["Reset"])),(t()(),s.Lb(-1,null,["\n"])),(t()(),s.Lb(-1,null,["\n"])),(t()(),s.ub(19,0,null,null,5,"ul",[],null,null,null,null,null)),(t()(),s.Lb(-1,null,["\n    "])),(t()(),s.jb(16777216,null,null,2,null,rt)),s.tb(22,278528,null,0,T.j,[s.P,s.M,s.s],{ngForOf:[0,"ngForOf"]},null),s.Hb(131072,T.b,[s.i]),(t()(),s.Lb(-1,null,["\n"])),(t()(),s.Lb(-1,null,["\n"]))],(function(t,n){var e=n.component;t(n,22,0,s.Mb(n,22,0,s.Fb(n,23).transform(e.todo.state$)))}),null)}function ut(t){return s.Nb(0,[(t()(),s.ub(0,0,null,null,1,"todo",[],null,null,null,ct,ot)),s.tb(1,49152,null,0,lt,[at],null,null)],null,null)}var bt=s.qb("todo",lt,ut,{},{},[]),ht=e("Mrqg"),dt=e("iInd");e.d(n,"TodoModuleNgFactory",(function(){return pt}));var pt=s.rb(i,[],(function(t){return s.Cb([s.Db(512,s.k,s.cb,[[8,[H,Y,tt.a,bt]],[3,s.k],s.x]),s.Db(4608,T.m,T.l,[s.u,[2,T.v]]),s.Db(4608,c.a,c.a,[c.g,c.c,s.k,c.f,c.d,s.r,s.z,T.d,I.b,[2,T.h]]),s.Db(5120,c.h,c.i,[c.a]),s.Db(4608,it.D,it.D,[[3,it.D],[2,it.c]]),s.Db(4608,at,at,[z]),s.Db(1073742336,T.c,T.c,[]),s.Db(1073742336,I.a,I.a,[]),s.Db(1073742336,l.f,l.f,[]),s.Db(1073742336,b.b,b.b,[]),s.Db(1073742336,P.b,P.b,[]),s.Db(1073742336,c.e,c.e,[]),s.Db(1073742336,F.g,F.g,[[2,F.d],[2,N.f]]),s.Db(1073742336,F.i,F.i,[]),s.Db(1073742336,q.c,q.c,[]),s.Db(1073742336,M,M,[]),s.Db(512,it.y,it.y,[s.r,it.v,[3,it.y],it.n,it.z,it.B,[2,ht.a]]),s.Db(1024,it.s,(function(){return[[at]]}),[]),s.Db(1073742336,it.p,it.p,[it.h,it.C,it.y,[2,it.s],it.o]),s.Db(1073742336,dt.m,dt.m,[[2,dt.r],[2,dt.k]]),s.Db(1073742336,i,i,[]),s.Db(1024,dt.i,(function(){return[[{path:"",component:lt}]]}),[])])}))}}]);