var tl=Object.defineProperty,ol=Object.defineProperties;var al=Object.getOwnPropertyDescriptors;var Be=Object.getOwnPropertySymbols;var nl=Object.prototype.hasOwnProperty,sl=Object.prototype.propertyIsEnumerable;var Pe=(e,t,a)=>t in e?tl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,ve=(e,t)=>{for(var a in t||(t={}))nl.call(t,a)&&Pe(e,a,t[a]);if(Be)for(var a of Be(t))sl.call(t,a)&&Pe(e,a,t[a]);return e},fe=(e,t)=>ol(e,al(t));var z=(e,t,a)=>new Promise((s,i)=>{var u=g=>{try{c(a.next(g))}catch(o){i(o)}},n=g=>{try{c(a.throw(g))}catch(o){i(o)}},c=g=>g.done?s(g.value):Promise.resolve(g.value).then(u,n);c((a=a.apply(e,t)).next())});import{_ as rl}from"./icon-button.0e134c9b.js";import{_ as ul}from"./k-table.c13bd7f5.js";import{g as il,a as dl,b as ml,p as Ue,c as cl,d as vl,e as fl,f as pl,h as gl,u as yl,i as bl,s as _l,j as Vl,k as Sl,l as wl,m as kl}from"./index.6fafe25e.js";import{_ as _e}from"./index.50326354.js";import{i as he,u as xl,g as de,w as hl}from"./i18n.25caaace.js";import{a as we,r as Le,m as El,s as Cl}from"./validate.f3c0b03b.js";import{E as Ye,a as Ke,c as Xe}from"./index.960b9732.js";import{E as Ve,a as Se}from"./index.94998415.js";import{E as We,a as qe}from"./index.5b499f72.js";import{E as Il}from"./index.f571dfc9.js";import{E as ge}from"./index.a5d96e5a.js";import{Y as Nl,g as C,h as $l,K as be,c as U,aq as Bl,B as Pl,i as ne,d as ee,E as je,L as Ee,o as b,a as T,b as d,w as f,f as N,t as O,u as l,n as Q,G as Ul,m as ie,p as Te,U as Ll,b2 as Tl,j as L,k as K,F,b6 as J,aH as te,cq as Rl,cd as Ml,N as zl,b7 as Ol,e as ke}from"./url.8f5ec20c.js";import{_ as Fl}from"./alert.8fe5500a.js";import{E as Al}from"./index.85ace6fa.js";import{E as Re,u as De,i as Yl}from"./main.1c3b59e3.js";import{E as Kl}from"./index.537a2de2.js";import{E as Je}from"./index.e9f8834a.js";import{u as Me}from"./replace-all.b35629e7.js";import{B as Xl}from"./breadcrumb.bcaeaf75.js";import{b as Wl}from"./confirm.629bcef4.js";import{E as He}from"./index.db6dfc3c.js";import{c as Ge,E as Qe}from"./index.158cdd11.js";import{b as Ce,d as pe,l as ze,c as ql,u as Ie,_ as Ze,q as jl,w as Dl,E as Jl}from"./windi.a815125a.js";import{U as ye,I as Ne,C as el}from"./event.776e7e11.js";import{d as Oe}from"./debounce.730e1961.js";import{u as Hl}from"./index.f9c89813.js";import{u as Gl,a as Ql}from"./index.1e7e06b8.js";import{t as Zl,d as Fe}from"./error.7e8331f1.js";import{g as et}from"./user.4c2aab4d.js";import{E as lt}from"./index.93cb5a2c.js";import{E as tt}from"./index.378f5080.js";import{E as ot}from"./index.5388dbc8.js";import"./index.0c2ced08.js";import"./sortable.esm.a99254e8.js";import"./index.a9a077b4.js";import"./isEqual.2e410d13.js";import"./_baseIsEqual.0a4e01e5.js";import"./index.2e51d36e.js";import"./index.878e2bbf.js";import"./index.adb17f32.js";import"./index.b065185c.js";import"./index.ab12ea9e.js";import"./index.b1b64a44.js";import"./style.1b77b3a2.js";import"./toNumber.6efebd6a.js";import"./index.c6488b3c.js";import"./scroll.0cf77af8.js";import"./index.c93fe8e7.js";import"./validator.9b0d789f.js";import"./_baseClone.885c975f.js";import"./isNil.98bb3b88.js";import"./index.1d16d007.js";import"./focus-trap.81e4fb05.js";import"./refs.d2253dd4.js";import"./index.50c16ae5.js";import"./preload-helper.13a99eb0.js";/* empty css                                                               */import"./plugin-vue_export-helper.21dcd24c.js";import"./plugin-vue_export-helper.41ffa612.js";import"./logo-transparent.1566007e.js";import"./index.60799c00.js";import"./aria.75ec5909.js";import"./event.53b2ad83.js";import"./index.e3f90979.js";import"./dayjs.min.2044f1dd.js";import"./index.64203830.js";const ll=Symbol("sliderContextKey"),at=Ce({modelValue:{type:pe([Number,Array]),default:0},id:{type:String,default:void 0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},showInput:Boolean,showInputControls:{type:Boolean,default:!0},size:ze,inputSize:ze,showStops:Boolean,showTooltip:{type:Boolean,default:!0},formatTooltip:{type:pe(Function),default:void 0},disabled:Boolean,range:Boolean,vertical:Boolean,height:String,debounce:{type:Number,default:300},label:{type:String,default:void 0},rangeStartLabel:{type:String,default:void 0},rangeEndLabel:{type:String,default:void 0},formatValueText:{type:pe(Function),default:void 0},tooltipClass:{type:String,default:void 0},placement:{type:String,values:Ge,default:"top"},marks:{type:pe(Object)},validateEvent:{type:Boolean,default:!0}}),xe=e=>he(e)||Nl(e)&&e.every(he),nt={[ye]:xe,[Ne]:xe,[el]:xe},st=(e,t,a)=>{const s=C();return $l(()=>z(void 0,null,function*(){e.range?(Array.isArray(e.modelValue)?(t.firstValue=Math.max(e.min,e.modelValue[0]),t.secondValue=Math.min(e.max,e.modelValue[1])):(t.firstValue=e.min,t.secondValue=e.max),t.oldValue=[t.firstValue,t.secondValue]):(typeof e.modelValue!="number"||Number.isNaN(e.modelValue)?t.firstValue=e.min:t.firstValue=Math.min(e.max,Math.max(e.min,e.modelValue)),t.oldValue=t.firstValue),xl(window,"resize",a),yield be(),a()})),{sliderWrapper:s}},rt=e=>U(()=>e.marks?Object.keys(e.marks).map(parseFloat).sort((a,s)=>a-s).filter(a=>a<=e.max&&a>=e.min).map(a=>({point:a,position:(a-e.min)*100/(e.max-e.min),mark:e.marks[a]})):[]),ut=(e,t,a)=>{const{form:s,formItem:i}=Gl(),u=Bl(),n=C(),c=C(),g={firstButton:n,secondButton:c},o=U(()=>e.disabled||(s==null?void 0:s.disabled)||!1),p=U(()=>Math.min(t.firstValue,t.secondValue)),m=U(()=>Math.max(t.firstValue,t.secondValue)),_=U(()=>e.range?`${100*(m.value-p.value)/(e.max-e.min)}%`:`${100*(t.firstValue-e.min)/(e.max-e.min)}%`),S=U(()=>e.range?`${100*(p.value-e.min)/(e.max-e.min)}%`:"0%"),x=U(()=>e.vertical?{height:e.height}:{}),B=U(()=>e.vertical?{height:_.value,bottom:S.value}:{width:_.value,left:S.value}),E=()=>{u.value&&(t.sliderSize=u.value[`client${e.vertical?"Height":"Width"}`])},r=$=>{const y=e.min+$*(e.max-e.min)/100;if(!e.range)return n;let M;return Math.abs(p.value-y)<Math.abs(m.value-y)?M=t.firstValue<t.secondValue?"firstButton":"secondButton":M=t.firstValue>t.secondValue?"firstButton":"secondButton",g[M]},v=$=>{const y=r($);return y.value.setPosition($),y},P=$=>{t.firstValue=$,w(e.range?[p.value,m.value]:$)},V=$=>{t.secondValue=$,e.range&&w([p.value,m.value])},w=$=>{a(ye,$),a(Ne,$)},A=()=>z(void 0,null,function*(){yield be(),a(el,e.range?[p.value,m.value]:e.modelValue)}),Y=$=>{var y,M,se,re,ue,oe;if(o.value||t.dragging)return;E();let Z=0;if(e.vertical){const q=(se=(M=(y=$.touches)==null?void 0:y.item(0))==null?void 0:M.clientY)!=null?se:$.clientY;Z=(u.value.getBoundingClientRect().bottom-q)/t.sliderSize*100}else{const q=(oe=(ue=(re=$.touches)==null?void 0:re.item(0))==null?void 0:ue.clientX)!=null?oe:$.clientX,D=u.value.getBoundingClientRect().left;Z=(q-D)/t.sliderSize*100}if(!(Z<0||Z>100))return v(Z)};return{elFormItem:i,slider:u,firstButton:n,secondButton:c,sliderDisabled:o,minValue:p,maxValue:m,runwayStyle:x,barStyle:B,resetSize:E,setPosition:v,emitChange:A,onSliderWrapperPrevent:$=>{var y,M;(((y=g.firstButton.value)==null?void 0:y.dragging)||((M=g.secondButton.value)==null?void 0:M.dragging))&&$.preventDefault()},onSliderClick:$=>{Y($)&&A()},onSliderDown:$=>z(void 0,null,function*(){const y=Y($);y&&(yield be(),y.value.onButtonDown($))}),setFirstValue:P,setSecondValue:V}},{left:it,down:dt,right:mt,up:ct,home:vt,end:ft,pageUp:pt,pageDown:gt}=ql,yt=(e,t,a)=>{const s=C(),i=C(!1),u=U(()=>t.value instanceof Function),n=U(()=>u.value&&t.value(e.modelValue)||e.modelValue),c=Oe(()=>{a.value&&(i.value=!0)},50),g=Oe(()=>{a.value&&(i.value=!1)},50);return{tooltip:s,tooltipVisible:i,formatValue:n,displayTooltip:c,hideTooltip:g}},bt=(e,t,a)=>{const{disabled:s,min:i,max:u,step:n,showTooltip:c,precision:g,sliderSize:o,formatTooltip:p,emitChange:m,resetSize:_,updateDragging:S}=Pl(ll),{tooltip:x,tooltipVisible:B,formatValue:E,displayTooltip:r,hideTooltip:v}=yt(e,p,c),P=C(),V=U(()=>`${(e.modelValue-i.value)/(u.value-i.value)*100}%`),w=U(()=>e.vertical?{bottom:V.value}:{left:V.value}),A=()=>{t.hovering=!0,r()},Y=()=>{t.hovering=!1,t.dragging||v()},j=h=>{s.value||(h.preventDefault(),Z(h),window.addEventListener("mousemove",q),window.addEventListener("touchmove",q),window.addEventListener("mouseup",D),window.addEventListener("touchend",D),window.addEventListener("contextmenu",D),P.value.focus())},W=h=>{s.value||(t.newPosition=Number.parseFloat(V.value)+h/(u.value-i.value)*100,le(t.newPosition),m())},k=()=>{W(-n.value)},$=()=>{W(n.value)},y=()=>{W(-n.value*4)},M=()=>{W(n.value*4)},se=()=>{s.value||(le(0),m())},re=()=>{s.value||(le(100),m())},ue=h=>{let R=!0;[it,dt].includes(h.key)?k():[mt,ct].includes(h.key)?$():h.key===vt?se():h.key===ft?re():h.key===gt?y():h.key===pt?M():R=!1,R&&h.preventDefault()},oe=h=>{let R,H;return h.type.startsWith("touch")?(H=h.touches[0].clientY,R=h.touches[0].clientX):(H=h.clientY,R=h.clientX),{clientX:R,clientY:H}},Z=h=>{t.dragging=!0,t.isClick=!0;const{clientX:R,clientY:H}=oe(h);e.vertical?t.startY=H:t.startX=R,t.startPosition=Number.parseFloat(V.value),t.newPosition=t.startPosition},q=h=>{if(t.dragging){t.isClick=!1,r(),_();let R;const{clientX:H,clientY:ae}=oe(h);e.vertical?(t.currentY=ae,R=(t.startY-t.currentY)/o.value*100):(t.currentX=H,R=(t.currentX-t.startX)/o.value*100),t.newPosition=t.startPosition+R,le(t.newPosition)}},D=()=>{t.dragging&&(setTimeout(()=>{t.dragging=!1,t.hovering||v(),t.isClick||(le(t.newPosition),m())},0),window.removeEventListener("mousemove",q),window.removeEventListener("touchmove",q),window.removeEventListener("mouseup",D),window.removeEventListener("touchend",D),window.removeEventListener("contextmenu",D))},le=h=>z(void 0,null,function*(){if(h===null||Number.isNaN(+h))return;h<0?h=0:h>100&&(h=100);const R=100/((u.value-i.value)/n.value);let ae=Math.round(h/R)*R*(u.value-i.value)*.01+i.value;ae=Number.parseFloat(ae.toFixed(g.value)),a(ye,ae),!t.dragging&&e.modelValue!==t.oldValue&&(t.oldValue=e.modelValue),yield be(),t.dragging&&r(),x.value.updatePopper()});return ne(()=>t.dragging,h=>{S(h)}),{button:P,tooltip:x,tooltipVisible:B,showTooltip:c,wrapperStyle:w,formatValue:E,handleMouseEnter:A,handleMouseLeave:Y,onButtonDown:j,onKeyDown:ue,setPosition:le}},_t=(e,t,a,s)=>({stops:U(()=>{if(!e.showStops||e.min>e.max)return[];if(e.step===0)return[];const n=(e.max-e.min)/e.step,c=100*e.step/(e.max-e.min),g=Array.from({length:n-1}).map((o,p)=>(p+1)*c);return e.range?g.filter(o=>o<100*(a.value-e.min)/(e.max-e.min)||o>100*(s.value-e.min)/(e.max-e.min)):g.filter(o=>o>100*(t.firstValue-e.min)/(e.max-e.min))}),getStopStyle:n=>e.vertical?{bottom:`${n}%`}:{left:`${n}%`}}),Vt=(e,t,a,s,i,u)=>{const n=o=>{i(ye,o),i(Ne,o)},c=()=>e.range?![a.value,s.value].every((o,p)=>o===t.oldValue[p]):e.modelValue!==t.oldValue,g=()=>{var o,p;if(e.min>e.max){Zl("Slider","min should not be greater than max.");return}const m=e.modelValue;e.range&&Array.isArray(m)?m[1]<e.min?n([e.min,e.min]):m[0]>e.max?n([e.max,e.max]):m[0]<e.min?n([e.min,m[1]]):m[1]>e.max?n([m[0],e.max]):(t.firstValue=m[0],t.secondValue=m[1],c()&&(e.validateEvent&&((o=u==null?void 0:u.validate)==null||o.call(u,"change").catch(_=>Fe())),t.oldValue=m.slice())):!e.range&&typeof m=="number"&&!Number.isNaN(m)&&(m<e.min?n(e.min):m>e.max?n(e.max):(t.firstValue=m,c()&&(e.validateEvent&&((p=u==null?void 0:u.validate)==null||p.call(u,"change").catch(_=>Fe())),t.oldValue=m)))};g(),ne(()=>t.dragging,o=>{o||g()}),ne(()=>e.modelValue,(o,p)=>{t.dragging||Array.isArray(o)&&Array.isArray(p)&&o.every((m,_)=>m===p[_])&&t.firstValue===o[0]&&t.secondValue===o[1]||g()},{deep:!0}),ne(()=>[e.min,e.max],()=>{g()})},St=Ce({modelValue:{type:Number,default:0},vertical:Boolean,tooltipClass:String,placement:{type:String,values:Ge,default:"top"}}),wt={[ye]:e=>he(e)},kt={name:"ElSliderButton"},xt=ee(fe(ve({},kt),{props:St,emits:wt,setup(e,{expose:t,emit:a}){const s=e,i=Ie("slider"),u=je({hovering:!1,dragging:!1,isClick:!1,startX:0,currentX:0,startY:0,currentY:0,startPosition:0,newPosition:0,oldValue:s.modelValue}),{button:n,tooltip:c,showTooltip:g,tooltipVisible:o,wrapperStyle:p,formatValue:m,handleMouseEnter:_,handleMouseLeave:S,onButtonDown:x,onKeyDown:B,setPosition:E}=bt(s,u,a),{hovering:r,dragging:v}=Ee(u);return t({onButtonDown:x,onKeyDown:B,setPosition:E,hovering:r,dragging:v}),(P,V)=>(b(),T("div",{ref_key:"button",ref:n,class:Q([l(i).e("button-wrapper"),{hover:l(r),dragging:l(v)}]),style:ie(l(p)),tabindex:"0",onMouseenter:V[1]||(V[1]=(...w)=>l(_)&&l(_)(...w)),onMouseleave:V[2]||(V[2]=(...w)=>l(S)&&l(S)(...w)),onMousedown:V[3]||(V[3]=(...w)=>l(x)&&l(x)(...w)),onTouchstart:V[4]||(V[4]=(...w)=>l(x)&&l(x)(...w)),onFocus:V[5]||(V[5]=(...w)=>l(_)&&l(_)(...w)),onBlur:V[6]||(V[6]=(...w)=>l(S)&&l(S)(...w)),onKeydown:V[7]||(V[7]=(...w)=>l(B)&&l(B)(...w))},[d(l(Qe),{ref_key:"tooltip",ref:c,visible:l(o),"onUpdate:visible":V[0]||(V[0]=w=>Ul(o)?o.value=w:null),placement:P.placement,"fallback-placements":["top","bottom","right","left"],"stop-popper-mouse-event":!1,"popper-class":P.tooltipClass,disabled:!l(g),persistent:""},{content:f(()=>[N("span",null,O(l(m)),1)]),default:f(()=>[N("div",{class:Q([l(i).e("button"),{hover:l(r),dragging:l(v)}])},null,2)]),_:1},8,["visible","placement","popper-class","disabled"])],38))}}));var Ae=Ze(xt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/slider/src/button.vue"]]);const ht=Ce({mark:{type:pe([String,Object]),default:void 0}});var Et=ee({name:"ElSliderMarker",props:ht,setup(e){const t=Ie("slider"),a=U(()=>Te(e.mark)?e.mark:e.mark.label),s=U(()=>Te(e.mark)?void 0:e.mark.style);return()=>Ll("div",{class:t.e("marks-text"),style:s},a.value)}});const Ct=["id","role","aria-label","aria-labelledby"],It={key:1},Nt={name:"ElSlider"},$t=ee(fe(ve({},Nt),{props:at,emits:nt,setup(e,{expose:t,emit:a}){const s=e,i=Ie("slider"),{t:u}=Hl(),n=je({firstValue:0,secondValue:0,oldValue:0,dragging:!1,sliderSize:1}),{elFormItem:c,slider:g,firstButton:o,secondButton:p,sliderDisabled:m,minValue:_,maxValue:S,runwayStyle:x,barStyle:B,resetSize:E,emitChange:r,onSliderWrapperPrevent:v,onSliderClick:P,onSliderDown:V,setFirstValue:w,setSecondValue:A}=ut(s,n,a),{stops:Y,getStopStyle:j}=_t(s,n,_,S),{inputId:W,isLabeledByFormItem:k}=Ql(s,{formItemContext:c}),$=jl(),y=U(()=>s.inputSize||$.value),M=U(()=>s.label||u("el.slider.defaultLabel",{min:s.min,max:s.max})),se=U(()=>s.range?s.rangeStartLabel||u("el.slider.defaultRangeStartLabel"):M.value),re=U(()=>s.formatValueText?s.formatValueText(h.value):`${h.value}`),ue=U(()=>s.rangeEndLabel||u("el.slider.defaultRangeEndLabel")),oe=U(()=>s.formatValueText?s.formatValueText(R.value):`${R.value}`),Z=U(()=>[i.b(),i.m($.value),i.is("vertical",s.vertical),{[i.m("with-input")]:s.showInput}]),q=rt(s);Vt(s,n,_,S,a,c);const D=U(()=>{const I=[s.min,s.max,s.step].map(G=>{const me=`${G}`.split(".")[1];return me?me.length:0});return Math.max.apply(null,I)}),{sliderWrapper:le}=st(s,n,E),{firstValue:h,secondValue:R,sliderSize:H}=Ee(n),ae=I=>{n.dragging=I};return Tl(ll,fe(ve({},Ee(s)),{sliderSize:H,disabled:m,precision:D,emitChange:r,resetSize:E,updateDragging:ae})),t({onSliderClick:P}),(I,G)=>{var me,$e;return b(),T("div",{id:I.range?l(W):void 0,ref_key:"sliderWrapper",ref:le,class:Q(l(Z)),role:I.range?"group":void 0,"aria-label":I.range&&!l(k)?l(M):void 0,"aria-labelledby":I.range&&l(k)?(me=l(c))==null?void 0:me.labelId:void 0,onTouchstart:G[2]||(G[2]=(...X)=>l(v)&&l(v)(...X)),onTouchmove:G[3]||(G[3]=(...X)=>l(v)&&l(v)(...X))},[N("div",{ref_key:"slider",ref:g,class:Q([l(i).e("runway"),{"show-input":I.showInput&&!I.range},l(i).is("disabled",l(m))]),style:ie(l(x)),onMousedown:G[0]||(G[0]=(...X)=>l(V)&&l(V)(...X)),onTouchstart:G[1]||(G[1]=(...X)=>l(V)&&l(V)(...X))},[N("div",{class:Q(l(i).e("bar")),style:ie(l(B))},null,6),d(Ae,{id:I.range?void 0:l(W),ref_key:"firstButton",ref:o,"model-value":l(h),vertical:I.vertical,"tooltip-class":I.tooltipClass,placement:I.placement,role:"slider","aria-label":I.range||!l(k)?l(se):void 0,"aria-labelledby":!I.range&&l(k)?($e=l(c))==null?void 0:$e.labelId:void 0,"aria-valuemin":I.min,"aria-valuemax":I.range?l(R):I.max,"aria-valuenow":l(h),"aria-valuetext":l(re),"aria-orientation":I.vertical?"vertical":"horizontal","aria-disabled":l(m),"onUpdate:modelValue":l(w)},null,8,["id","model-value","vertical","tooltip-class","placement","aria-label","aria-labelledby","aria-valuemin","aria-valuemax","aria-valuenow","aria-valuetext","aria-orientation","aria-disabled","onUpdate:modelValue"]),I.range?(b(),L(Ae,{key:0,ref_key:"secondButton",ref:p,"model-value":l(R),vertical:I.vertical,"tooltip-class":I.tooltipClass,placement:I.placement,role:"slider","aria-label":l(ue),"aria-valuemin":l(h),"aria-valuemax":I.max,"aria-valuenow":l(R),"aria-valuetext":l(oe),"aria-orientation":I.vertical?"vertical":"horizontal","aria-disabled":l(m),"onUpdate:modelValue":l(A)},null,8,["model-value","vertical","tooltip-class","placement","aria-label","aria-valuemin","aria-valuemax","aria-valuenow","aria-valuetext","aria-orientation","aria-disabled","onUpdate:modelValue"])):K("v-if",!0),I.showStops?(b(),T("div",It,[(b(!0),T(F,null,J(l(Y),(X,ce)=>(b(),T("div",{key:ce,class:Q(l(i).e("stop")),style:ie(l(j)(X))},null,6))),128))])):K("v-if",!0),l(q).length>0?(b(),T(F,{key:2},[N("div",null,[(b(!0),T(F,null,J(l(q),(X,ce)=>(b(),T("div",{key:ce,style:ie(l(j)(X.position)),class:Q([l(i).e("stop"),l(i).e("marks-stop")])},null,6))),128))]),N("div",{class:Q(l(i).e("marks"))},[(b(!0),T(F,null,J(l(q),(X,ce)=>(b(),L(l(Et),{key:ce,mark:X.mark,style:ie(l(j)(X.position))},null,8,["mark","style"]))),128))],2)],64)):K("v-if",!0)],38),I.showInput&&!I.range?(b(),L(l(He),{key:0,ref:"input","model-value":l(h),class:Q(l(i).e("input")),step:I.step,disabled:l(m),controls:I.showInputControls,min:I.min,max:I.max,debounce:I.debounce,size:l(y),"onUpdate:modelValue":l(w),onChange:l(r)},null,8,["model-value","class","step","disabled","controls","min","max","debounce","size","onUpdate:modelValue","onChange"])):K("v-if",!0)],42,Ct)}}}));var Bt=Ze($t,[["__file","/home/runner/work/element-plus/element-plus/packages/components/slider/src/slider.vue"]]);const Pt=Dl(Bt),Ut={class:"flex items-center space-x-8 w-full"},Lt={class:"flex items-center space-x-4"},Tt={class:"flex-1"},Rt=ee({props:{modelValue:{type:Boolean}},emits:["update:modelValue","reload"],setup(e,{emit:t}){const{t:a}=de(),s=C(!0),i=C([]),u=C(),n=C(!1),c=C(!1),g=C([{key:"exist",value:a("common.existingSite")},{key:"new",value:a("common.newSite")}]),o=C({serverId:"",to:g.value[0].key,siteId:"",rootDomain:"",siteName:"",subDomain:""}),p=C();(()=>z(this,null,function*(){i.value=yield il()}))();const _=U(()=>{var E={serverId:[{type:"string",required:!0}]};return o.value.serverId&&(o.value.to=="exist"?Object.assign(E,{siteId:[{type:"string",required:!0}]}):Object.assign(E,{subDomain:[we(a("common.subDomainRequiredTips")),Le(1,63),El],rootDomain:we(a("common.rootDomainRequiredTips")),siteName:[Le(1,50),we(a("common.nameRequiredTips")),Cl()]})),E}),S=()=>z(this,null,function*(){var r;if(!o.value.serverId)return;const E=i.value.find(v=>v.id==o.value.serverId);try{u.value=yield dl(E.serverUrl,E.orgId),x.value=yield ml(E.serverUrl,E.orgId),o.value.rootDomain=(r=x.value[0])==null?void 0:r.value}catch(v){u.value=void 0}}),x=C([]),B=()=>z(this,null,function*(){yield p.value.validate();const E=i.value.find(r=>r.id==o.value.serverId);if(o.value.to==="exist"){const r=u.value.find(v=>v.key==o.value.siteId);yield Ue({remoteServerUrl:E.serverUrl,remoteWebSiteId:r.key,remoteSiteName:r.value,orgId:E.orgId,serverName:E.name})}else yield Ue({remoteServerUrl:E.serverUrl,FullDomain:`${o.value.subDomain}.${o.value.rootDomain}`,SiteName:o.value.siteName,orgId:E.orgId,serverName:E.name});t("reload"),s.value=!1});return ne(()=>o.value.subDomain,()=>{c.value||(o.value.siteName=o.value.subDomain)}),ne(()=>o.value.siteName,()=>{n.value||(o.value.subDomain=o.value.siteName)}),(E,r)=>{const v=Ye,P=Ke,V=Ve,w=We,A=qe,Y=Il,j=Se,W=ge;return b(),L(W,{"model-value":s.value,width:"600px","close-on-click-modal":!1,title:l(a)("common.newSync"),onClosed:r[9]||(r[9]=k=>t("update:modelValue",!1))},{footer:f(()=>[d(_e,{disabled:!u.value,onConfirm:B,onCancel:r[8]||(r[8]=k=>s.value=!1)},null,8,["disabled"])]),default:f(()=>[d(j,{ref_key:"form",ref:p,"label-position":"top",model:o.value,rules:l(_),"validate-on-rule-change":!1},{default:f(()=>[d(V,{label:l(a)("common.server"),prop:"serverId"},{default:f(()=>[N("div",Ut,[d(P,{modelValue:o.value.serverId,"onUpdate:modelValue":r[0]||(r[0]=k=>o.value.serverId=k),class:"w-full","data-cy":"servers",onChange:S},{default:f(()=>[(b(!0),T(F,null,J(i.value,k=>(b(),L(v,{key:k.id,label:`${k.name} (${k.serverUrl})`,value:k.id,"data-cy":"server-opt"},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])]),_:1},8,["label"]),o.value.serverId&&u.value?(b(),T(F,{key:0},[d(V,null,{default:f(()=>[d(A,{modelValue:o.value.to,"onUpdate:modelValue":r[1]||(r[1]=k=>o.value.to=k),class:"el-radio-group--rounded h-38px"},{default:f(()=>[(b(!0),T(F,null,J(g.value,k=>(b(),L(w,{key:k.key,label:k.key},{default:f(()=>[te(O(k.value),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1}),o.value.to=="exist"?(b(),L(V,{key:0,label:l(a)("common.siteName"),prop:"siteId"},{default:f(()=>[d(P,{modelValue:o.value.siteId,"onUpdate:modelValue":r[2]||(r[2]=k=>o.value.siteId=k),class:"w-full","data-cy":"sites"},{default:f(()=>[(b(!0),T(F,null,J(u.value,k=>(b(),L(v,{key:k.key,label:k.value,value:k.key,"data-cy":"site-opt"},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"])):K("",!0),o.value.to=="new"?(b(),T(F,{key:1},[d(V,{label:l(a)("common.siteName"),prop:"siteName"},{default:f(()=>[d(Y,{modelValue:o.value.siteName,"onUpdate:modelValue":r[3]||(r[3]=k=>o.value.siteName=k),"data-cy":"site-name",onInput:r[4]||(r[4]=k=>c.value=!0)},null,8,["modelValue"])]),_:1},8,["label"]),N("div",Lt,[N("div",Tt,[d(V,{label:l(a)("common.domain"),prop:"subDomain"},{default:f(()=>[d(Y,{modelValue:o.value.subDomain,"onUpdate:modelValue":r[5]||(r[5]=k=>o.value.subDomain=k),"data-cy":"site-subDomain",onInput:r[6]||(r[6]=k=>n.value=!0)},null,8,["modelValue"])]),_:1},8,["label"])]),d(V,{prop:"rootDomain",class:"mt-30px"},{default:f(()=>[d(P,{modelValue:o.value.rootDomain,"onUpdate:modelValue":r[7]||(r[7]=k=>o.value.rootDomain=k),class:"w-full"},{default:f(()=>[(b(!0),T(F,null,J(x.value,k=>(b(),L(v,{key:k.key,value:k.value,label:k.value,"data-cy":"root-domain"},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1})])],64)):K("",!0)],64)):K("",!0)]),_:1},8,["model","rules"])]),_:1},8,["model-value","title"])}}}),Mt={class:"px-32 mt-8"},zt={class:"flex-1"},Ot=ee({props:{modelValue:{type:Boolean},id:null},emits:["update:modelValue"],setup(e,{emit:t}){const a=e;var s=localStorage.getItem("settingsSyncState"),i=s?JSON.parse(s):{};const{t:u}=de(),n=C(!0),c=C(),g=()=>z(this,null,function*(){var S;const _=(S=i[a.id])!=null?S:[];c.value=(yield cl(a.id)).map(x=>fe(ve({},x),{selected:_.every(B=>B!=x.name)}))});g();function o(){return z(this,null,function*(){!c.value||(yield vl(a.id,c.value.filter(_=>_.selected).map(_=>({name:_.name,value:_.value}))),Re.success(u("common.pushSuccess")),g())})}function p(){return z(this,null,function*(){!c.value||(yield fl(c.value.filter(_=>_.selected).map(_=>({name:_.name,value:_.remoteValue}))),Re.success(u("common.pullSuccess")),g())})}ne(()=>c.value,()=>{!c.value||(i[a.id]=c.value.filter(_=>!_.selected).map(_=>_.name),localStorage.setItem("settingsSyncState",JSON.stringify(i)))},{deep:!0});const m=U(()=>{var _,S;return!((S=(_=c.value)==null?void 0:_.filter(x=>x.selected))!=null&&S.length)});return(_,S)=>{const x=Kl,B=Al,E=Je,r=ge;return b(),L(r,{"model-value":n.value,width:"600px","close-on-click-modal":!1,title:l(u)("common.siteSettingDifferences"),"custom-class":"el-dialog--zero-padding",onClosed:S[1]||(S[1]=v=>t("update:modelValue",!1))},{footer:f(()=>[d(E,{"data-cy":"cancel-in-dialog",onClick:S[0]||(S[0]=v=>n.value=!1)},{default:f(()=>[te(O(l(u)("common.cancel")),1)]),_:1}),d(E,{type:"primary",disabled:l(m),onClick:p},{default:f(()=>[te(O(l(u)("common.pull")),1)]),_:1},8,["disabled"]),d(E,{type:"primary",disabled:l(m),onClick:o},{default:f(()=>[te(O(l(u)("common.push")),1)]),_:1},8,["disabled"])]),default:f(()=>{var v;return[(v=c.value)!=null&&v.length?(b(),T(F,{key:0},[d(Fl,{content:l(u)("common.settingsSyncTip")},null,8,["content"]),N("div",Mt,[(b(!0),T(F,null,J(c.value,P=>(b(),T("div",{key:P.name,class:"flex items-center"},[N("p",zt,O(l(u)("common."+P.name)),1),d(x,{modelValue:P.selected,"onUpdate:modelValue":V=>P.selected=V},null,8,["modelValue","onUpdate:modelValue"])]))),128))])],64)):c.value?(b(),L(B,{key:1,description:l(u)("common.allSettingsSynced")},null,8,["description"])):K("",!0)]}),_:1},8,["model-value","title"])}}}),Ft={class:"flex flex-wrap gap-8 bg-card dark:bg-444 p-12 rounded-normal"},At={class:"leading-4"},Yt=ee({props:{modelValue:{type:Boolean},id:null},emits:["update:modelValue","reload"],setup(e,{emit:t}){const a=e,{t:s}=de(),i=C(!0),u=C([]),n=C("out"),c=C();pl().then(S=>u.value=S),gl(a.id).then(S=>c.value=S);const g=C([{key:"out",value:s("common.push")},{key:"in",value:s("common.pull")}]),o=()=>z(this,null,function*(){yield yl(a.id,c.value),t("reload"),i.value=!1}),p=U(()=>c.value?n.value=="in"?c.value.ignoreInStoreNames:c.value.ignoreOutStoreNames:[]);function m(S){return p.value.includes(S)}function _(S){var x=p.value.indexOf(S);x>-1?p.value.splice(x,1):p.value.push(S)}return(S,x)=>{const B=We,E=qe,r=Ve,v=Xe,P=Se,V=ge;return b(),L(V,{"model-value":i.value,width:"600px","close-on-click-modal":!1,title:l(s)("common.ignoreSettings"),onClosed:x[2]||(x[2]=w=>t("update:modelValue",!1))},{footer:f(()=>[d(_e,{disabled:!c.value,onConfirm:o,onCancel:x[1]||(x[1]=w=>i.value=!1)},null,8,["disabled"])]),default:f(()=>[d(P,{"label-width":"100px"},{default:f(()=>[d(r,{label:l(s)("common.type"),class:"flex--middle"},{default:f(()=>[d(E,{modelValue:n.value,"onUpdate:modelValue":x[0]||(x[0]=w=>n.value=w),class:"el-radio-group--rounded"},{default:f(()=>[(b(!0),T(F,null,J(g.value,w=>(b(),L(B,{key:w.key,label:w.key,onClick:A=>n.value=w.key},{default:f(()=>[te(O(w.value),1)]),_:2},1032,["label","onClick"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),d(r,{label:l(s)("common.ignoreStore")},{default:f(()=>[N("div",Ft,[(b(!0),T(F,null,J(u.value,w=>(b(),L(v,{key:w.name,round:"",class:Q(["cursor-pointer",{"line-through":m(w.key)}]),type:m(w.key)?"danger":"info",onClick:A=>_(w.key)},{default:f(()=>[N("span",At,O(w.value),1)]),_:2},1032,["class","type","onClick"]))),128))])]),_:1},8,["label"])]),_:1})]),_:1},8,["model-value","title"])}}}),Kt={class:"flex items-center w-full space-x-16"},Xt={class:"flex items-center w-full space-x-16"},Wt=ee({props:{modelValue:{type:Boolean},id:null},emits:["update:modelValue","reload"],setup(e,{emit:t}){const a=e,{t:s}=de(),i=C(!0),u=C(),n=C();bl(a.id).then(g=>{u.value=JSON.parse(JSON.stringify(g)),n.value=g});const c=()=>z(this,null,function*(){yield _l(a.id,n.value),t("reload"),i.value=!1});return(g,o)=>{const p=He,m=Pt,_=Ve,S=Se,x=ge;return b(),L(x,{"model-value":i.value,width:"600px","close-on-click-modal":!1,title:l(s)("common.syncProgress"),onClosed:o[5]||(o[5]=B=>t("update:modelValue",!1))},{footer:f(()=>[d(_e,{onConfirm:c,onCancel:o[4]||(o[4]=B=>i.value=!1)})]),default:f(()=>[n.value?(b(),L(S,{key:0,"label-position":"top"},{default:f(()=>[d(_,{label:`${l(s)("common.localProgress")} (${l(s)("common.localLastId")}: ${n.value.localLastId})`},{default:f(()=>[N("div",Kt,[d(p,{modelValue:n.value.localProgress,"onUpdate:modelValue":o[0]||(o[0]=B=>n.value.localProgress=B),class:"w-150px",disabled:n.value.localLastId==0,step:1,"step-strictly":""},null,8,["modelValue","disabled"]),d(m,{modelValue:n.value.localProgress,"onUpdate:modelValue":o[1]||(o[1]=B=>n.value.localProgress=B),class:"flex-1",min:0,max:n.value.localLastId,disabled:n.value.localLastId==0},null,8,["modelValue","max","disabled"])])]),_:1},8,["label"]),d(_,{label:`${l(s)("common.remoteProgress")} (${l(s)("common.remoteLastId")}: ${n.value.remoteLastId})`},{default:f(()=>[N("div",Xt,[d(p,{modelValue:n.value.remoteProgress,"onUpdate:modelValue":o[2]||(o[2]=B=>n.value.remoteProgress=B),class:"w-150px",disabled:n.value.remoteLastId==0,step:1,"step-strictly":""},null,8,["modelValue","disabled"]),d(m,{modelValue:n.value.remoteProgress,"onUpdate:modelValue":o[3]||(o[3]=B=>n.value.remoteProgress=B),min:0,class:"flex-1",max:n.value.remoteLastId,disabled:n.value.remoteLastId==0},null,8,["modelValue","max","disabled"])])]),_:1},8,["label"])]),_:1})):K("",!0)]),_:1},8,["model-value","title"])}}}),qt=ee({props:{modelValue:{type:Boolean}},emits:["update:model-value","create-success"],setup(e,{emit:t}){const{t:a}=de(),s=De(),i=C();let u=C({role:"",expire:new Date(Date.now()+3600*1e3*24*365)});const n=C([]),c=C(!0);et().then(o=>{n.value=o,n.value.length&&(u.value.role=n.value[0])});const g=()=>z(this,null,function*(){var p;yield(p=i.value)==null?void 0:p.validate();const o=yield Vl(u.value.role,u.value.expire,s.site.id);Rl("data:application/octet-stream;charset=utf-8,"+encodeURIComponent(o),"bearer.json"),c.value=!1,t("create-success")});return(o,p)=>{const m=Ye,_=Ke,S=Ve,x=lt,B=Se,E=ge;return b(),L(E,{modelValue:c.value,"onUpdate:modelValue":p[4]||(p[4]=r=>c.value=r),width:"600px","close-on-click-modal":!1,title:l(a)("common.newCooperationBearer"),onClosed:p[5]||(p[5]=r=>o.$emit("update:model-value",!1))},{footer:f(()=>[d(_e,{"confirm-label":l(a)("common.create"),onConfirm:g,onCancel:p[3]||(p[3]=r=>c.value=!1)},null,8,["confirm-label"])]),default:f(()=>[d(B,{ref_key:"form",ref:i,class:"el-form--label-normal",model:l(u),"label-position":"top",onSubmit:p[2]||(p[2]=hl(()=>{},["prevent"]))},{default:f(()=>[d(S,{label:l(a)("common.role"),prop:"role",required:""},{default:f(()=>[d(_,{modelValue:l(u).role,"onUpdate:modelValue":p[0]||(p[0]=r=>l(u).role=r),class:"w-full","data-cy":"roles"},{default:f(()=>[(b(!0),T(F,null,J(n.value,r=>(b(),L(m,{key:r,value:r,label:r,"data-cy":"role-opt"},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),d(S,{label:l(a)("common.expireDate"),prop:"expire",required:""},{default:f(()=>[d(x,{modelValue:l(u).expire,"onUpdate:modelValue":p[1]||(p[1]=r=>l(u).expire=r)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model"])]),_:1},8,["modelValue","title"])}}}),jt={class:"p-24"},Dt={class:"flex items-center py-24 space-x-16"},Jt={class:"flex items-center"},Ht={class:"flex items-center"},Gt={class:"flex items-center"},Qt=N("div",{class:"flex-1"},null,-1),Zt=["title"],eo={"data-cy":"remote-site"},lo={"data-cy":"server"},to={class:"space-x-4 cursor-pointer inline-flex items-center"},oo={class:"inline-flex items-center justify-end w-80px"},ao={class:"space-x-2px flex relative"},no={class:"relative w-12px h-12px top-2px overflow-hidden"},so={class:"inline-flex items-center justify-start w-80px"},ro={class:"space-x-2px flex relative"},uo={class:"relative w-12px h-12px bottom-2px overflow-hidden"},io={class:"py-4"},xa=ee({setup(e){const{t}=de(),a=C([]),s=C(!1),i=C(!1),u=C(!1),n=C(!1),c=Ml(),g=C(),o=C(!1),p=De(),m=()=>z(this,null,function*(){a.value=yield Sl()}),_=r=>z(this,null,function*(){yield Wl(r.length),yield wl(r.map(v=>v.id)),m()}),S=r=>{g.value=r,i.value=!0},x=r=>{g.value=r,u.value=!0},B=r=>{g.value=r,n.value=!0};function E(r){return z(this,null,function*(){try{var v=JSON.parse(yield r.raw.text());yield kl({remoteServerUrl:v.server,remoteWebSiteId:v.siteId,remoteSiteName:v.name,serverName:v.name,accessToken:v.token}),m()}catch(P){Yl(t("common.bearerInvalid"))}})}return m(),(r,v)=>{const P=Jl,V=Je,w=tt,A=rl,Y=ot,j=Xe,W=Qe,k=zl("router-link"),$=Ol("hasPermission");return b(),T(F,null,[N("div",jt,[d(Xl,{name:l(t)("common.sync")},null,8,["name"]),N("div",Dt,[ke((b(),L(V,{round:"","data-cy":"new-sync",onClick:v[0]||(v[0]=y=>s.value=!0)},{default:f(()=>[N("div",Jt,[d(P,{class:"mr-16 iconfont icon-a-addto"}),te(" "+O(l(t)("common.newSync")),1)])]),_:1})),[[$,{feature:"sync",action:"edit"}]]),l(p).isAdmin?ke((b(),L(V,{key:0,round:"","data-cy":"new-sync",onClick:v[1]||(v[1]=y=>o.value=!0)},{default:f(()=>[N("div",Ht,[d(P,{class:"mr-16 iconfont icon-a-addto"}),te(" "+O(l(t)("common.newCooperationBearer")),1)])]),_:1})),[[$,{feature:"sync",action:"edit"}]]):K("",!0),d(w,{"show-file-list":!1,action:"",accept:".json","auto-upload":!1,"on-change":E,"data-cy":"import-bearer"},{default:f(()=>[ke((b(),L(V,{round:""},{default:f(()=>[N("div",Gt,[d(P,{class:"mr-16 iconfont icon-a-Pullin"}),te(" "+O(l(t)("common.importCooperationBearer")),1)])]),_:1})),[[$,{feature:"sync",action:"edit"}]])]),_:1}),Qt,d(A,{permission:{feature:"sync",action:"edit"},circle:"",icon:"icon-yunfuwuqi",tip:l(t)("common.server"),onClick:v[2]||(v[2]=y=>l(c).push(l(Me)({name:"sync-server"})))},null,8,["tip"])]),d(l(ul),{data:a.value,"show-check":"",permission:{feature:"sync",action:"delete"},onDelete:_},{default:f(()=>[d(Y,{label:l(t)("common.server")},{default:f(({row:y})=>[N("span",{title:y.serverName},O(y.serverName),9,Zt)]),_:1},8,["label"]),d(Y,{label:l(t)("common.remoteSite")},{default:f(({row:y})=>[N("span",eo,O(y.remoteSiteName),1)]),_:1},8,["label"]),d(Y,{label:l(t)("common.serverUrl")},{default:f(({row:y})=>[N("span",lo,O(y.remoteServerUrl),1)]),_:1},8,["label"]),d(Y,{label:l(t)("common.difference"),align:"center"},{default:f(({row:y})=>[d(k,{to:l(Me)({name:"sync-list",query:{id:y.id}})},{default:f(()=>[N("div",to,[N("div",oo,[d(W,{content:l(t)("common.localChanges"),placement:"top"},{default:f(()=>[d(j,{round:""},{default:f(()=>[N("div",ao,[N("span",null,O(y.localDifference>999?"999+":y.localDifference),1),N("div",no,[d(P,{class:"iconfont icon-a-debug-step-out absolute top-[-4px] left-0"})])])]),_:2},1024)]),_:2},1032,["content"])]),N("div",so,[d(W,{content:l(t)("common.remoteChanges"),placement:"top"},{default:f(()=>[d(j,{type:"success",round:""},{default:f(()=>[N("div",ro,[N("div",uo,[d(P,{class:"iconfont icon-debug-step-into absolute bottom-[-4px] left-0"})]),N("span",null,O(y.remoteDifference>999?"999+":y.remoteDifference),1)])]),_:2},1024)]),_:2},1032,["content"])])])]),_:2},1032,["to"])]),_:1},8,["label"]),d(Y,{align:"right",width:"120"},{default:f(({row:y})=>[N("div",io,[d(A,{icon:"icon-a-debug-step-over",class:"text-m",tip:l(t)("common.syncProgress"),onClick:M=>B(y.id)},null,8,["tip","onClick"]),d(A,{icon:"icon-correct",class:"text-m",tip:l(t)("common.ignoreSettings"),onClick:M=>x(y.id)},null,8,["tip","onClick"]),d(A,{icon:"icon-a-setup",tip:l(t)("common.siteSettingsSync"),onClick:M=>S(y.id)},null,8,["tip","onClick"])])]),_:1})]),_:1},8,["data"])]),s.value?(b(),L(Rt,{key:0,modelValue:s.value,"onUpdate:modelValue":v[3]||(v[3]=y=>s.value=y),onReload:m},null,8,["modelValue"])):K("",!0),i.value?(b(),L(Ot,{key:1,id:g.value,modelValue:i.value,"onUpdate:modelValue":v[4]||(v[4]=y=>i.value=y)},null,8,["id","modelValue"])):K("",!0),u.value?(b(),L(Yt,{key:2,id:g.value,modelValue:u.value,"onUpdate:modelValue":v[5]||(v[5]=y=>u.value=y),onReload:m},null,8,["id","modelValue"])):K("",!0),n.value?(b(),L(Wt,{key:3,id:g.value,modelValue:n.value,"onUpdate:modelValue":v[6]||(v[6]=y=>n.value=y),onReload:m},null,8,["id","modelValue"])):K("",!0),o.value?(b(),L(qt,{key:4,modelValue:o.value,"onUpdate:modelValue":v[7]||(v[7]=y=>o.value=y)},null,8,["modelValue"])):K("",!0)],64)}}});export{xa as default};
