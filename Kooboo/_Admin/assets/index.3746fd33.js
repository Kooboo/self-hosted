import{a as Ne,o as re,v as Ae}from"./i18n.25caaace.js";import{E as Ee}from"./index.e9f8834a.js";import{_ as O,E as Fe,B as Te,t as Ve,u as Ie,C as Pe,D as Be,q as He}from"./windi.a815125a.js";import{E as De}from"./index.158cdd11.js";import{E as Le}from"./index.f571dfc9.js";import{o as I,a as q}from"./event.53b2ad83.js";import{a as te}from"./position.648be44c.js";import{d as W,aq as se,g,i as y,h as Y,o as C,a as E,f as k,m as V,n as $,A as oe,c as T,B as ee,bA as ie,bk as Oe,F as We,b6 as ze,E as qe,K,b2 as Ke,N as M,b7 as Re,j as R,w as P,e as ce,b as A,k as j,aH as ue,t as he}from"./url.8f5ec20c.js";import{C as je}from"./index.c93fe8e7.js";import{i as Ue}from"./validator.9b0d789f.js";import{U as J}from"./event.776e7e11.js";import{u as Xe}from"./index.f9c89813.js";import{a as Ye}from"./index.1e7e06b8.js";import{d as de}from"./error.7e8331f1.js";import{d as Ze}from"./debounce.730e1961.js";let Q=!1;function L(e,t){if(!Ne)return;const o=function(l){var a;(a=t.drag)==null||a.call(t,l)},n=function(l){var a;q(document,"mousemove",o),q(document,"mouseup",n),q(document,"touchmove",o),q(document,"touchend",n),document.onselectstart=null,document.ondragstart=null,Q=!1,(a=t.end)==null||a.call(t,l)},r=function(l){var a;Q||(l.preventDefault(),document.onselectstart=()=>!1,document.ondragstart=()=>!1,I(document,"mousemove",o),I(document,"mouseup",n),I(document,"touchmove",o),I(document,"touchend",n),Q=!0,(a=t.start)==null||a.call(t,l))};I(e,"mousedown",r),I(e,"touchstart",r)}const Ge=W({name:"ElColorAlphaSlider",props:{color:{type:Object,required:!0},vertical:{type:Boolean,default:!1}},setup(e){const t=oe(),o=se(null),n=se(null),r=g(0),l=g(0),a=g(null);y(()=>e.color.get("alpha"),()=>{h()}),y(()=>e.color.value,()=>{h()});function c(){if(e.vertical)return 0;const s=t.vnode.el,u=e.color.get("alpha");return s?Math.round(u*(s.offsetWidth-o.value.offsetWidth/2)/100):0}function i(){const s=t.vnode.el;if(!e.vertical)return 0;const u=e.color.get("alpha");return s?Math.round(u*(s.offsetHeight-o.value.offsetHeight/2)/100):0}function b(){if(e.color&&e.color.value){const{r:s,g:u,b:m}=e.color.toRgb();return`linear-gradient(to right, rgba(${s}, ${u}, ${m}, 0) 0%, rgba(${s}, ${u}, ${m}, 1) 100%)`}return null}function p(s){s.target!==o.value&&v(s)}function v(s){const m=t.vnode.el.getBoundingClientRect(),{clientX:w,clientY:_}=te(s);if(e.vertical){let d=_-m.top;d=Math.max(o.value.offsetHeight/2,d),d=Math.min(d,m.height-o.value.offsetHeight/2),e.color.set("alpha",Math.round((d-o.value.offsetHeight/2)/(m.height-o.value.offsetHeight)*100))}else{let d=w-m.left;d=Math.max(o.value.offsetWidth/2,d),d=Math.min(d,m.width-o.value.offsetWidth/2),e.color.set("alpha",Math.round((d-o.value.offsetWidth/2)/(m.width-o.value.offsetWidth)*100))}}function h(){r.value=c(),l.value=i(),a.value=b()}return Y(()=>{const s={drag:u=>{v(u)},end:u=>{v(u)}};L(n.value,s),L(o.value,s),h()}),{thumb:o,bar:n,thumbLeft:r,thumbTop:l,background:a,handleClick:p,update:h}}});function Je(e,t,o,n,r,l){return C(),E("div",{class:$(["el-color-alpha-slider",{"is-vertical":e.vertical}])},[k("div",{ref:"bar",class:"el-color-alpha-slider__bar",style:V({background:e.background}),onClick:t[0]||(t[0]=(...a)=>e.handleClick&&e.handleClick(...a))},null,4),k("div",{ref:"thumb",class:"el-color-alpha-slider__thumb",style:V({left:e.thumbLeft+"px",top:e.thumbTop+"px"})},null,4)],2)}var Qe=O(Ge,[["render",Je],["__file","/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/alpha-slider.vue"]]);const xe=W({name:"ElColorHueSlider",props:{color:{type:Object,required:!0},vertical:Boolean},setup(e){const t=oe(),o=g(null),n=g(null),r=g(0),l=g(0),a=T(()=>e.color.get("hue"));y(()=>a.value,()=>{v()});function c(h){h.target!==o.value&&i(h)}function i(h){const u=t.vnode.el.getBoundingClientRect(),{clientX:m,clientY:w}=te(h);let _;if(e.vertical){let d=w-u.top;d=Math.min(d,u.height-o.value.offsetHeight/2),d=Math.max(o.value.offsetHeight/2,d),_=Math.round((d-o.value.offsetHeight/2)/(u.height-o.value.offsetHeight)*360)}else{let d=m-u.left;d=Math.min(d,u.width-o.value.offsetWidth/2),d=Math.max(o.value.offsetWidth/2,d),_=Math.round((d-o.value.offsetWidth/2)/(u.width-o.value.offsetWidth)*360)}e.color.set("hue",_)}function b(){const h=t.vnode.el;if(e.vertical)return 0;const s=e.color.get("hue");return h?Math.round(s*(h.offsetWidth-o.value.offsetWidth/2)/360):0}function p(){const h=t.vnode.el;if(!e.vertical)return 0;const s=e.color.get("hue");return h?Math.round(s*(h.offsetHeight-o.value.offsetHeight/2)/360):0}function v(){r.value=b(),l.value=p()}return Y(()=>{const h={drag:s=>{i(s)},end:s=>{i(s)}};L(n.value,h),L(o.value,h),v()}),{bar:n,thumb:o,thumbLeft:r,thumbTop:l,hueValue:a,handleClick:c,update:v}}});function et(e,t,o,n,r,l){return C(),E("div",{class:$(["el-color-hue-slider",{"is-vertical":e.vertical}])},[k("div",{ref:"bar",class:"el-color-hue-slider__bar",onClick:t[0]||(t[0]=(...a)=>e.handleClick&&e.handleClick(...a))},null,512),k("div",{ref:"thumb",class:"el-color-hue-slider__thumb",style:V({left:e.thumbLeft+"px",top:e.thumbTop+"px"})},null,4)],2)}var tt=O(xe,[["render",et],["__file","/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/hue-slider.vue"]]);const ge=Symbol(),ot=()=>ee(ge),fe=function(e,t,o){return[e,t*o/((e=(2-t)*o)<1?e:2-e)||0,e/2]},nt=function(e){return typeof e=="string"&&e.includes(".")&&Number.parseFloat(e)===1},lt=function(e){return typeof e=="string"&&e.includes("%")},B=function(e,t){nt(e)&&(e="100%");const o=lt(e);return e=Math.min(t,Math.max(0,Number.parseFloat(`${e}`))),o&&(e=Number.parseInt(`${e*t}`,10)/100),Math.abs(e-t)<1e-6?1:e%t/Number.parseFloat(t)},me={10:"A",11:"B",12:"C",13:"D",14:"E",15:"F"},U=function(e){e=Math.min(Math.round(e),255);const t=Math.floor(e/16),o=e%16;return`${me[t]||t}${me[o]||o}`},pe=function({r:e,g:t,b:o}){return Number.isNaN(+e)||Number.isNaN(+t)||Number.isNaN(+o)?"":`#${U(e)}${U(t)}${U(o)}`},x={A:10,B:11,C:12,D:13,E:14,F:15},F=function(e){return e.length===2?(x[e[0].toUpperCase()]||+e[0])*16+(x[e[1].toUpperCase()]||+e[1]):x[e[1].toUpperCase()]||+e[1]},at=function(e,t,o){t=t/100,o=o/100;let n=t;const r=Math.max(o,.01);o*=2,t*=o<=1?o:2-o,n*=r<=1?r:2-r;const l=(o+t)/2,a=o===0?2*n/(r+n):2*t/(o+t);return{h:e,s:a*100,v:l*100}},ve=function(e,t,o){e=B(e,255),t=B(t,255),o=B(o,255);const n=Math.max(e,t,o),r=Math.min(e,t,o);let l;const a=n,c=n-r,i=n===0?0:c/n;if(n===r)l=0;else{switch(n){case e:{l=(t-o)/c+(t<o?6:0);break}case t:{l=(o-e)/c+2;break}case o:{l=(e-t)/c+4;break}}l/=6}return{h:l*360,s:i*100,v:a*100}},H=function(e,t,o){e=B(e,360)*6,t=B(t,100),o=B(o,100);const n=Math.floor(e),r=e-n,l=o*(1-t),a=o*(1-r*t),c=o*(1-(1-r)*t),i=n%6,b=[o,a,l,l,c,o][i],p=[c,o,o,a,l,l][i],v=[l,l,c,o,o,a][i];return{r:Math.round(b*255),g:Math.round(p*255),b:Math.round(v*255)}};class D{constructor(t){this._hue=0,this._saturation=100,this._value=100,this._alpha=100,this.enableAlpha=!1,this.format="hex",this.value="",t=t||{};for(const o in t)ie(t,o)&&(this[o]=t[o]);t.value?this.fromString(t.value):this.doOnChange()}set(t,o){if(arguments.length===1&&typeof t=="object"){for(const n in t)ie(t,n)&&this.set(n,t[n]);return}this[`_${t}`]=o,this.doOnChange()}get(t){return t==="alpha"?Math.floor(this[`_${t}`]):this[`_${t}`]}toRgb(){return H(this._hue,this._saturation,this._value)}fromString(t){if(!t){this._hue=0,this._saturation=100,this._value=100,this.doOnChange();return}const o=(n,r,l)=>{this._hue=Math.max(0,Math.min(360,n)),this._saturation=Math.max(0,Math.min(100,r)),this._value=Math.max(0,Math.min(100,l)),this.doOnChange()};if(t.includes("hsl")){const n=t.replace(/hsla|hsl|\(|\)/gm,"").split(/\s|,/g).filter(r=>r!=="").map((r,l)=>l>2?Number.parseFloat(r):Number.parseInt(r,10));if(n.length===4?this._alpha=Number.parseFloat(n[3])*100:n.length===3&&(this._alpha=100),n.length>=3){const{h:r,s:l,v:a}=at(n[0],n[1],n[2]);o(r,l,a)}}else if(t.includes("hsv")){const n=t.replace(/hsva|hsv|\(|\)/gm,"").split(/\s|,/g).filter(r=>r!=="").map((r,l)=>l>2?Number.parseFloat(r):Number.parseInt(r,10));n.length===4?this._alpha=Number.parseFloat(n[3])*100:n.length===3&&(this._alpha=100),n.length>=3&&o(n[0],n[1],n[2])}else if(t.includes("rgb")){const n=t.replace(/rgba|rgb|\(|\)/gm,"").split(/\s|,/g).filter(r=>r!=="").map((r,l)=>l>2?Number.parseFloat(r):Number.parseInt(r,10));if(n.length===4?this._alpha=Number.parseFloat(n[3])*100:n.length===3&&(this._alpha=100),n.length>=3){const{h:r,s:l,v:a}=ve(n[0],n[1],n[2]);o(r,l,a)}}else if(t.includes("#")){const n=t.replace("#","").trim();if(!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{8}$/.test(n))return;let r,l,a;n.length===3?(r=F(n[0]+n[0]),l=F(n[1]+n[1]),a=F(n[2]+n[2])):(n.length===6||n.length===8)&&(r=F(n.slice(0,2)),l=F(n.slice(2,4)),a=F(n.slice(4,6))),n.length===8?this._alpha=F(n.slice(6))/255*100:(n.length===3||n.length===6)&&(this._alpha=100);const{h:c,s:i,v:b}=ve(r,l,a);o(c,i,b)}}compare(t){return Math.abs(t._hue-this._hue)<2&&Math.abs(t._saturation-this._saturation)<1&&Math.abs(t._value-this._value)<1&&Math.abs(t._alpha-this._alpha)<1}doOnChange(){const{_hue:t,_saturation:o,_value:n,_alpha:r,format:l}=this;if(this.enableAlpha)switch(l){case"hsl":{const a=fe(t,o/100,n/100);this.value=`hsla(${t}, ${Math.round(a[1]*100)}%, ${Math.round(a[2]*100)}%, ${this.get("alpha")/100})`;break}case"hsv":{this.value=`hsva(${t}, ${Math.round(o)}%, ${Math.round(n)}%, ${this.get("alpha")/100})`;break}case"hex":{this.value=`${pe(H(t,o,n))}${U(r*255/100)}`;break}default:{const{r:a,g:c,b:i}=H(t,o,n);this.value=`rgba(${a}, ${c}, ${i}, ${this.get("alpha")/100})`}}else switch(l){case"hsl":{const a=fe(t,o/100,n/100);this.value=`hsl(${t}, ${Math.round(a[1]*100)}%, ${Math.round(a[2]*100)}%)`;break}case"hsv":{this.value=`hsv(${t}, ${Math.round(o)}%, ${Math.round(n)}%)`;break}case"rgb":{const{r:a,g:c,b:i}=H(t,o,n);this.value=`rgb(${a}, ${c}, ${i})`;break}default:this.value=pe(H(t,o,n))}}}const rt=W({props:{colors:{type:Array,required:!0},color:{type:Object,required:!0}},setup(e){const{currentColor:t}=ot(),o=g(r(e.colors,e.color));y(()=>t.value,l=>{const a=new D;a.fromString(l),o.value.forEach(c=>{c.selected=a.compare(c)})}),Oe(()=>{o.value=r(e.colors,e.color)});function n(l){e.color.fromString(e.colors[l])}function r(l,a){return l.map(c=>{const i=new D;return i.enableAlpha=!0,i.format="rgba",i.fromString(c),i.selected=i.value===a.value,i})}return{rgbaColors:o,handleSelect:n}}}),st={class:"el-color-predefine"},it={class:"el-color-predefine__colors"},ct=["onClick"];function ut(e,t,o,n,r,l){return C(),E("div",st,[k("div",it,[(C(!0),E(We,null,ze(e.rgbaColors,(a,c)=>(C(),E("div",{key:e.colors[c],class:$(["el-color-predefine__color-selector",{selected:a.selected,"is-alpha":a._alpha<100}]),onClick:i=>e.handleSelect(c)},[k("div",{style:V({backgroundColor:a.value})},null,4)],10,ct))),128))])])}var ht=O(rt,[["render",ut],["__file","/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/predefine.vue"]]);const dt=W({name:"ElSlPanel",props:{color:{type:Object,required:!0}},setup(e){const t=oe(),o=g(0),n=g(0),r=g("hsl(0, 100%, 50%)"),l=T(()=>{const i=e.color.get("hue"),b=e.color.get("value");return{hue:i,value:b}});function a(){const i=e.color.get("saturation"),b=e.color.get("value"),p=t.vnode.el,{clientWidth:v,clientHeight:h}=p;n.value=i*v/100,o.value=(100-b)*h/100,r.value=`hsl(${e.color.get("hue")}, 100%, 50%)`}function c(i){const p=t.vnode.el.getBoundingClientRect(),{clientX:v,clientY:h}=te(i);let s=v-p.left,u=h-p.top;s=Math.max(0,s),s=Math.min(s,p.width),u=Math.max(0,u),u=Math.min(u,p.height),n.value=s,o.value=u,e.color.set({saturation:s/p.width*100,value:100-u/p.height*100})}return y(()=>l.value,()=>{a()}),Y(()=>{L(t.vnode.el,{drag:i=>{c(i)},end:i=>{c(i)}}),a()}),{cursorTop:o,cursorLeft:n,background:r,colorValue:l,handleDrag:c,update:a}}}),ft=k("div",{class:"el-color-svpanel__white"},null,-1),mt=k("div",{class:"el-color-svpanel__black"},null,-1),pt=k("div",null,null,-1),vt=[pt];function gt(e,t,o,n,r,l){return C(),E("div",{class:"el-color-svpanel",style:V({backgroundColor:e.background})},[ft,mt,k("div",{class:"el-color-svpanel__cursor",style:V({top:e.cursorTop+"px",left:e.cursorLeft+"px"})},vt,4)],4)}var bt=O(dt,[["render",gt],["__file","/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/sv-panel.vue"]]);const kt=W({name:"ElColorPicker",components:{ElButton:Ee,ElTooltip:De,ElInput:Le,ElIcon:Fe,Close:Te,ArrowDown:Ve,SvPanel:bt,HueSlider:tt,AlphaSlider:Qe,Predefine:ht},directives:{ClickOutside:je},props:{modelValue:String,id:String,showAlpha:Boolean,colorFormat:String,disabled:Boolean,size:{type:String,validator:Ue},popperClass:String,label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},predefine:Array,validateEvent:{type:Boolean,default:!0}},emits:["change","active-change",J],setup(e,{emit:t}){const{t:o}=Xe(),n=Ie("color"),r=ee(Pe,{}),l=ee(Be,{}),{inputId:a,isLabeledByFormItem:c}=Ye(e,{formItemContext:l}),i=g(),b=g(),p=g(),v=g(null);let h=!0;const s=qe(new D({enableAlpha:e.showAlpha,format:e.colorFormat||"",value:e.modelValue})),u=g(!1),m=g(!1),w=g(""),_=T(()=>!e.modelValue&&!m.value?"transparent":_e(s,e.showAlpha)),d=He(),ne=T(()=>!!(e.disabled||r.disabled)),Z=T(()=>!e.modelValue&&!m.value?"":s.value),be=T(()=>c.value?void 0:e.label||o("el.colorpicker.defaultLabel")),ke=T(()=>c.value?l.labelId:void 0);y(()=>e.modelValue,f=>{f?f&&f!==s.value&&(h=!1,s.fromString(f)):m.value=!1}),y(()=>Z.value,f=>{w.value=f,h&&t("active-change",f),h=!0}),y(()=>s.value,()=>{!e.modelValue&&!m.value&&(m.value=!0)});function _e(f,S){if(!(f instanceof D))throw new TypeError("color should be instance of _color Class");const{r:N,g:le,b:ae}=f.toRgb();return S?`rgba(${N}, ${le}, ${ae}, ${f.get("alpha")/100})`:`rgb(${N}, ${le}, ${ae})`}function $e(f){u.value=f}const z=Ze($e,100);function Ce(){z(!1),G()}function G(){K(()=>{e.modelValue?s.fromString(e.modelValue):(s.value="",K(()=>{m.value=!1}))})}function we(){ne.value||z(!u.value)}function Me(){s.fromString(w.value)}function ye(){var f;const S=s.value;t(J,S),t("change",S),e.validateEvent&&((f=l.validate)==null||f.call(l,"change").catch(N=>de())),z(!1),K(()=>{const N=new D({enableAlpha:e.showAlpha,format:e.colorFormat||"",value:e.modelValue});s.compare(N)||G()})}function Se(){var f;z(!1),t(J,null),t("change",null),e.modelValue!==null&&e.validateEvent&&((f=l.validate)==null||f.call(l,"change").catch(S=>de())),G()}return Y(()=>{e.modelValue&&(w.value=Z.value)}),y(()=>u.value,()=>{K(()=>{var f,S,N;(f=i.value)==null||f.update(),(S=b.value)==null||S.update(),(N=p.value)==null||N.update()})}),Ke(ge,{currentColor:Z}),{color:s,colorDisabled:ne,colorSize:d,displayedColor:_,showPanelColor:m,showPicker:u,customInput:w,buttonId:a,buttonAriaLabel:be,buttonAriaLabelledby:ke,handleConfirm:Me,hide:Ce,handleTrigger:we,clear:Se,confirmValue:ye,t:o,ns:n,hue:i,svPanel:b,alpha:p,popper:v}}}),_t=["id","aria-label","aria-labelledby","aria-description","tabindex"];function $t(e,t,o,n,r,l){const a=M("hue-slider"),c=M("sv-panel"),i=M("alpha-slider"),b=M("predefine"),p=M("el-input"),v=M("el-button"),h=M("arrow-down"),s=M("el-icon"),u=M("close"),m=M("el-tooltip"),w=Re("click-outside");return C(),R(m,{ref:"popper",visible:e.showPicker,"onUpdate:visible":t[3]||(t[3]=_=>e.showPicker=_),"show-arrow":!1,"fallback-placements":["bottom","top","right","left"],offset:0,"gpu-acceleration":!1,"popper-class":[e.ns.be("picker","panel"),e.ns.b("dropdown"),e.popperClass],"stop-popper-mouse-event":!1,effect:"light",trigger:"click",transition:"el-zoom-in-top",persistent:""},{content:P(()=>[ce((C(),E("div",null,[k("div",{class:$(e.ns.be("dropdown","main-wrapper"))},[A(a,{ref:"hue",class:"hue-slider",color:e.color,vertical:""},null,8,["color"]),A(c,{ref:"svPanel",color:e.color},null,8,["color"])],2),e.showAlpha?(C(),R(i,{key:0,ref:"alpha",color:e.color},null,8,["color"])):j("v-if",!0),e.predefine?(C(),R(b,{key:1,ref:"predefine",color:e.color,colors:e.predefine},null,8,["color","colors"])):j("v-if",!0),k("div",{class:$(e.ns.be("dropdown","btns"))},[k("span",{class:$(e.ns.be("dropdown","value"))},[A(p,{modelValue:e.customInput,"onUpdate:modelValue":t[0]||(t[0]=_=>e.customInput=_),"validate-event":!1,size:"small",onKeyup:re(e.handleConfirm,["enter"]),onBlur:e.handleConfirm},null,8,["modelValue","onKeyup","onBlur"])],2),A(v,{class:$(e.ns.be("dropdown","link-btn")),text:"",size:"small",onClick:e.clear},{default:P(()=>[ue(he(e.t("el.colorpicker.clear")),1)]),_:1},8,["class","onClick"]),A(v,{plain:"",size:"small",class:$(e.ns.be("dropdown","btn")),onClick:e.confirmValue},{default:P(()=>[ue(he(e.t("el.colorpicker.confirm")),1)]),_:1},8,["class","onClick"])],2)])),[[w,e.hide]])]),default:P(()=>[k("div",{id:e.buttonId,class:$([e.ns.b("picker"),e.ns.is("disabled",e.colorDisabled),e.ns.bm("picker",e.colorSize)]),role:"button","aria-label":e.buttonAriaLabel,"aria-labelledby":e.buttonAriaLabelledby,"aria-description":e.t("el.colorpicker.description",{color:e.modelValue||""}),tabindex:e.tabindex,onKeydown:t[2]||(t[2]=re((..._)=>e.handleTrigger&&e.handleTrigger(..._),["enter"]))},[e.colorDisabled?(C(),E("div",{key:0,class:$(e.ns.be("picker","mask"))},null,2)):j("v-if",!0),k("div",{class:$(e.ns.be("picker","trigger")),onClick:t[1]||(t[1]=(..._)=>e.handleTrigger&&e.handleTrigger(..._))},[k("span",{class:$([e.ns.be("picker","color"),e.ns.is("alpha",e.showAlpha)])},[k("span",{class:$(e.ns.be("picker","color-inner")),style:V({backgroundColor:e.displayedColor})},[ce(A(s,{class:$([e.ns.be("picker","icon"),e.ns.is("icon-arrow-down")])},{default:P(()=>[A(h)]),_:1},8,["class"]),[[Ae,e.modelValue||e.showPanelColor]]),!e.modelValue&&!e.showPanelColor?(C(),R(s,{key:0,class:$([e.ns.be("picker","empty"),e.ns.is("icon-close")])},{default:P(()=>[A(u)]),_:1},8,["class"])):j("v-if",!0)],6)],2)],2)],42,_t)]),_:1},8,["visible","popper-class"])}var X=O(kt,[["render",$t],["__file","/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/index.vue"]]);X.install=e=>{e.component(X.name,X)};const Ct=X,Lt=Ct;export{Lt as E};
