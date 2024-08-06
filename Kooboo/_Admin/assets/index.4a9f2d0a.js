var Ne=Object.defineProperty,Te=Object.defineProperties;var Pe=Object.getOwnPropertyDescriptors;var te=Object.getOwnPropertySymbols;var we=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable;var ae=(e,t,o)=>t in e?Ne(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,J=(e,t)=>{for(var o in t||(t={}))we.call(t,o)&&ae(e,o,t[o]);if(te)for(var o of te(t))Ee.call(t,o)&&ae(e,o,t[o]);return e},X=(e,t)=>Te(e,Pe(t));var L=(e,t,o)=>new Promise((y,s)=>{var g=u=>{try{r(o.next(u))}catch(i){s(i)}},p=u=>{try{r(o.throw(u))}catch(i){s(i)}},r=u=>u.done?y(u.value):Promise.resolve(u.value).then(g,p);r((o=o.apply(e,t)).next())});import{b as U,d as V,m as re,u as j,_ as ie,E as I,O as Se,P as Ce,B as Be,c as K,y as $e,s as se,w as xe,r as ke}from"./windi.a815125a.js";import{d as q,B as G,g as S,i as k,K as Q,aa as F,o as ce,a as ue,n as de,u as x,m as Oe,A as Z,bB as ne,c as D,h as be,a3 as Re,b as f,p as ze,E as ve,b2 as Ae,r as fe,bh as Fe,J as Me,e as Le,k as Ve}from"./url.8f5ec20c.js";import{b as me,a2 as De,a3 as Ie,i as Ke,a4 as le,v as Ue}from"./i18n.25caaace.js";import{t as ee}from"./error.7e8331f1.js";import{U as pe}from"./event.776e7e11.js";import{u as je}from"./index.e9f8834a.js";const H=Symbol("tabsRootContextKey"),qe=U({tabs:{type:V(Array),default:()=>re([])}}),He={name:"ElTabBar"},We=q(X(J({},He),{props:qe,setup(e,{expose:t}){const o=e,y="ElTabBar",s=Z(),g=G(H);g||ee(y,"<el-tabs><el-tab-bar /></el-tabs>");const p=j("tabs"),r=S(),u=S(),i=()=>{let c=0,C=0;const _=["top","bottom"].includes(g.props.tabPosition)?"width":"height",d=_==="width"?"x":"y";return o.tabs.every(a=>{var N,h,B,O;const R=(h=(N=s.parent)==null?void 0:N.refs)==null?void 0:h[`tab-${a.paneName}`];if(!R)return!1;if(!a.active)return!0;C=R[`client${F(_)}`];const M=d==="x"?"left":"top";c=R.getBoundingClientRect()[M]-((O=(B=R.parentElement)==null?void 0:B.getBoundingClientRect()[M])!=null?O:0);const z=window.getComputedStyle(R);return _==="width"&&(o.tabs.length>1&&(C-=Number.parseFloat(z.paddingLeft)+Number.parseFloat(z.paddingRight)),c+=Number.parseFloat(z.paddingLeft)),!1}),{[_]:`${C}px`,transform:`translate${F(d)}(${c}px)`}},m=()=>u.value=i();return k(()=>o.tabs,()=>L(this,null,function*(){yield Q(),m()}),{immediate:!0}),me(r,()=>m()),t({ref:r,update:m}),(c,C)=>(ce(),ue("div",{ref_key:"barRef",ref:r,class:de([x(p).e("active-bar"),x(p).is(x(g).props.tabPosition)]),style:Oe(u.value)},null,6))}}));var Je=ie(We,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);const Xe=U({panes:{type:V(Array),default:()=>re([])},currentName:{type:[String,Number],default:""},editable:Boolean,onTabClick:{type:V(Function),default:ne},onTabRemove:{type:V(Function),default:ne},type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),oe="ElTabNav",Ye=q({name:oe,props:Xe,setup(e,{expose:t}){const o=Z(),y=G(H);y||ee(oe,"<el-tabs><tab-nav /></el-tabs>");const s=j("tabs"),g=De(),p=Ie(),r=S(),u=S(),i=S(),m=S(!1),c=S(0),C=S(!1),_=S(!0),d=D(()=>["top","bottom"].includes(y.props.tabPosition)?"width":"height"),a=D(()=>({transform:`translate${d.value==="width"?"X":"Y"}(-${c.value}px)`})),N=()=>{if(!r.value)return;const n=r.value[`offset${F(d.value)}`],b=c.value;if(!b)return;const l=b>n?b-n:0;c.value=l},h=()=>{if(!r.value||!u.value)return;const n=u.value[`offset${F(d.value)}`],b=r.value[`offset${F(d.value)}`],l=c.value;if(n-l<=b)return;const w=n-l>b*2?l+b:n-b;c.value=w},B=()=>L(this,null,function*(){const n=u.value;if(!m.value||!i.value||!r.value||!n)return;yield Q();const b=i.value.querySelector(".is-active");if(!b)return;const l=r.value,w=["top","bottom"].includes(y.props.tabPosition),P=b.getBoundingClientRect(),T=l.getBoundingClientRect(),$=w?n.offsetWidth-T.width:n.offsetHeight-T.height,E=c.value;let v=E;w?(P.left<T.left&&(v=E-(T.left-P.left)),P.right>T.right&&(v=E+P.right-T.right)):(P.top<T.top&&(v=E-(T.top-P.top)),P.bottom>T.bottom&&(v=E+(P.bottom-T.bottom))),v=Math.max(v,0),c.value=Math.min(v,$)}),O=()=>{if(!u.value||!r.value)return;const n=u.value[`offset${F(d.value)}`],b=r.value[`offset${F(d.value)}`],l=c.value;if(b<n){const w=c.value;m.value=m.value||{},m.value.prev=w,m.value.next=w+b<n,n-w<b&&(c.value=n-b)}else m.value=!1,l>0&&(c.value=0)},R=n=>{const b=n.code,{up:l,down:w,left:P,right:T}=K;if(![l,w,P,T].includes(b))return;const $=Array.from(n.currentTarget.querySelectorAll("[role=tab]")),E=$.indexOf(n.target);let v;b===P||b===l?E===0?v=$.length-1:v=E-1:E<$.length-1?v=E+1:v=0,$[v].focus(),$[v].click(),M()},M=()=>{_.value&&(C.value=!0)},z=()=>C.value=!1;return k(g,n=>{n==="hidden"?_.value=!1:n==="visible"&&setTimeout(()=>_.value=!0,50)}),k(p,n=>{n?setTimeout(()=>_.value=!0,50):_.value=!1}),me(i,O),be(()=>setTimeout(()=>B(),0)),Re(()=>O()),t({scrollToActiveTab:B,removeFocus:z}),k(()=>e.panes,()=>o.update(),{flush:"post"}),()=>{const n=m.value?[f("span",{class:[s.e("nav-prev"),s.is("disabled",!m.value.prev)],onClick:N},[f(I,null,{default:()=>[f(Se,null,null)]})]),f("span",{class:[s.e("nav-next"),s.is("disabled",!m.value.next)],onClick:h},[f(I,null,{default:()=>[f(Ce,null,null)]})])]:null,b=e.panes.map((l,w)=>{var P,T,$,E;const v=(T=(P=l.props.name)!=null?P:l.index)!=null?T:`${w}`,W=l.isClosable||e.editable;l.index=`${w}`;const ge=W?f(I,{class:"is-icon-close",onClick:A=>e.onTabRemove(l,A)},{default:()=>[f(Be,null,null)]}):null,ye=((E=($=l.slots).label)==null?void 0:E.call($))||l.props.label,_e=l.active?0:-1;return f("div",{ref:`tab-${v}`,class:[s.e("item"),s.is(y.props.tabPosition),s.is("active",l.active),s.is("disabled",l.props.disabled),s.is("closable",W),s.is("focus",C.value)],id:`tab-${v}`,key:`tab-${v}`,"aria-controls":`pane-${v}`,role:"tab","aria-selected":l.active,tabindex:_e,onFocus:()=>M(),onBlur:()=>z(),onClick:A=>{z(),e.onTabClick(l,v,A)},onKeydown:A=>{W&&(A.code===K.delete||A.code===K.backspace)&&e.onTabRemove(l,A)}},[ye,ge])});return f("div",{ref:i,class:[s.e("nav-wrap"),s.is("scrollable",!!m.value),s.is(y.props.tabPosition)]},[n,f("div",{class:s.e("nav-scroll"),ref:r},[f("div",{class:[s.e("nav"),s.is(y.props.tabPosition),s.is("stretch",e.stretch&&["top","bottom"].includes(y.props.tabPosition))],ref:u,style:a.value,role:"tablist",onKeydown:R},[e.type?null:f(Je,{tabs:[...e.panes]},null),b])])])}}}),Ge=U({type:{type:String,values:["card","border-card",""],default:""},activeName:{type:[String,Number]},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:V(Function),default:()=>!0},stretch:Boolean}),Y=e=>ze(e)||Ke(e),Qe={[pe]:e=>Y(e),"tab-click":(e,t)=>t instanceof Event,"tab-change":e=>Y(e),edit:(e,t)=>["remove","add"].includes(t),"tab-remove":e=>Y(e),"tab-add":()=>!0};var Ze=q({name:"ElTabs",props:Ge,emits:Qe,setup(e,{emit:t,slots:o,expose:y}){var s,g;const p=j("tabs"),r=S(),u=ve({}),i=S((g=(s=e.modelValue)!=null?s:e.activeName)!=null?g:"0"),m=a=>{i.value=a,t(pe,a),t("tab-change",a)},c=a=>L(this,null,function*(){var N,h,B;if(!(i.value===a||se(a)))try{(yield(N=e.beforeLeave)==null?void 0:N.call(e,a,i.value))!==!1&&(m(a),(B=(h=r.value)==null?void 0:h.removeFocus)==null||B.call(h))}catch(O){}}),C=(a,N,h)=>{a.props.disabled||(c(N),t("tab-click",a,h))},_=(a,N)=>{a.props.disabled||se(a.props.name)||(N.stopPropagation(),t("edit",a.props.name,"remove"),t("tab-remove",a.props.name))},d=()=>{t("edit",void 0,"add"),t("tab-add")};return je({from:'"activeName"',replacement:'"model-value" or "v-model"',scope:"ElTabs",version:"2.3.0",ref:"https://element-plus.org/en-US/component/tabs.html#attributes",type:"Attribute"},D(()=>!!e.activeName)),k(()=>e.activeName,a=>c(a)),k(()=>e.modelValue,a=>c(a)),k(i,()=>L(this,null,function*(){var a;yield Q(),(a=r.value)==null||a.scrollToActiveTab()})),Ae(H,{props:e,currentName:i,registerPane:h=>u[h.uid]=h,unregisterPane:h=>delete u[h]}),y({currentName:i}),()=>{const a=e.editable||e.addable?f("span",{class:p.e("new-tab"),tabindex:"0",onClick:d,onKeydown:B=>{B.code===K.enter&&d()}},[f(I,{class:p.is("icon-plus")},{default:()=>[f($e,null,null)]})]):null,N=f("div",{class:[p.e("header"),p.is(e.tabPosition)]},[a,f(Ye,{ref:r,currentName:i.value,editable:e.editable,type:e.type,panes:Object.values(u),stretch:e.stretch,onTabClick:C,onTabRemove:_},null)]),h=f("div",{class:p.e("content")},[fe(o,"default")]);return f("div",{class:[p.b(),p.m(e.tabPosition),{[p.m("card")]:e.type==="card",[p.m("border-card")]:e.type==="border-card"}]},[...e.tabPosition!=="bottom"?[N,h]:[h,N]])}}});const et=U({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),tt=["id","aria-hidden","aria-labelledby"],at={name:"ElTabPane"},st=q(X(J({},at),{props:et,setup(e){const t=e,o="ElTabPane",y=Z(),s=Fe(),g=G(H);g||ee(o,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const p=j("tab-pane"),r=S(),u=D(()=>t.closable||g.props.closable),i=le(()=>{var d;return g.currentName.value===((d=t.name)!=null?d:r.value)}),m=S(i.value),c=D(()=>{var d;return(d=t.name)!=null?d:r.value}),C=le(()=>!t.lazy||m.value||i.value);k(i,d=>{d&&(m.value=!0)});const _=ve({uid:y.uid,slots:s,props:t,paneName:c,active:i,index:r,isClosable:u});return be(()=>{g.registerPane(_)}),Me(()=>{g.unregisterPane(_.uid)}),(d,a)=>x(C)?Le((ce(),ue("div",{key:0,id:`pane-${x(c)}`,class:de(x(p).b()),role:"tabpanel","aria-hidden":!x(i),"aria-labelledby":`tab-${x(c)}`},[fe(d.$slots,"default")],10,tt)),[[Ue,x(i)]]):Ve("v-if",!0)}}));var he=ie(st,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);const dt=xe(Ze,{TabPane:he}),bt=ke(he);export{bt as E,dt as a};
