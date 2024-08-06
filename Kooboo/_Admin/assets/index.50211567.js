var _=Object.defineProperty;var H=Object.getOwnPropertySymbols;var ee=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable;var K=(e,n,l)=>n in e?_(e,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[n]=l,F=(e,n)=>{for(var l in n||(n={}))ee.call(n,l)&&K(e,l,n[l]);if(H)for(var l of H(n))le.call(n,l)&&K(e,l,n[l]);return e};import{_ as te}from"./key-value-editor.9a8a1084.js";import{_ as ae}from"./index.b410d437.js";import{d as oe,g as J,w as ie}from"./i18n.25caaace.js";import{i as j}from"./string.75b81683.js";import{_ as Q,u as ne,a as me,b as de}from"./index.d3b66472.js";import{M as re}from"./media-dialog.d9567663.js";import"./validate.f3c0b03b.js";import"./image-editor.vue_vue_type_style_index_0_scoped_true_lang.e5d64b31.js";import{_ as ue}from"./index.50326354.js";import{u as se}from"./use-operation-dialog.450d2247.js";import{c as W}from"./cloneDeep.f12cadc0.js";import{E as X}from"./index.f571dfc9.js";import{E as Y,a as ce}from"./index.94998415.js";import{E as fe}from"./index.c6488b3c.js";import{E as ge}from"./index.a5d96e5a.js";import{d as G,g as U,o as d,j as f,w as y,b as R,u as m,f as q,a as E,b6 as P,F as $,G as pe,c as z,i as ve,b7 as ye,k as A,e as be,aH as I,t as L,az as Ve,co as ke,aT as v,n as he}from"./url.8f5ec20c.js";import{V as xe}from"./vuedraggable.umd.5305b990.js";import{E as Te}from"./index.e9f8834a.js";import{u as Ee,g as Ne}from"./main.1c3b59e3.js";import{E as Ce}from"./index.3746fd33.js";import{E as Se,a as we}from"./index.960b9732.js";import{E as Ue,a as Ae}from"./index.2e51d36e.js";import{b as Me,a as Be}from"./index.5b499f72.js";import{E as De}from"./index.537a2de2.js";import{E as Fe}from"./index.93cb5a2c.js";import{E as Re}from"./index.db6dfc3c.js";const p=oe.global.t;function $e(){const e=[{displayName:p("common.textBox"),value:"TextBox",dataType:"String"},{displayName:p("common.textArea"),value:"TextArea",dataType:"String"},{displayName:p("common.richEditor"),value:"RichEditor",dataType:"String"},{displayName:p("common.selection"),value:"Selection",dataType:"Array"},{displayName:p("common.checkbox"),value:"CheckBox",dataType:"Array"},{displayName:p("common.radiobox"),value:"RadioBox",dataType:"Array"},{displayName:p("common.switch"),value:"Switch",dataType:"Bool"},{displayName:p("common.mediaFile"),value:"MediaFile",dataType:"Undefined"},{displayName:p("common.mediaFileAdvanced"),value:"AdvancedMediaFile",dataType:"Undefined"},{displayName:p("common.file"),value:"File",dataType:"Undefined"},{displayName:p("common.dateTime"),value:"DateTime",dataType:"DateTime"},{displayName:p("common.number"),value:"Number",dataType:"Number"},{displayName:p("common.colorPicker"),value:"ColorPicker",dataType:"String"},{displayName:p("common.keyValue"),value:"KeyValues",dataType:"Undefined"}];function n(g){let o=g.toLowerCase();switch(o){case"tinymce":o="richeditor";break;case"boolean":o="switch";break}return e.find(r=>r.value.toLowerCase()===o)}function l(g){return e.filter(c=>j(c.dataType,g)&&!j(c.value,"AdvancedMediaFile"))}const b=["alt","id","url","downloadUrl","previewUrl","size","lastModified","folder","mimeType"].sort().map(g=>`{{${g}}}`);return{controlTypes:e,defaultAdvancedMediaFileOptions:b,getControlType:n,getAvailableControlTypes:l}}function Vl(e){const n=p,l=[],{validations:b,controlType:g}=e;return b&&b.forEach(function(o){switch(o.type){case"required":l.push({required:!0,message:o.msg||n("common.fieldRequiredTips"),trigger:["checkbox","radiobox","number","selection"].includes((g!=null?g:"").toLowerCase())?"change":"blur"});break;case"regex":o.pattern&&l.push({pattern:new RegExp(o.pattern),message:o.msg||n("common.inputError"),trigger:"blur"});break;case"range":l.push({type:"number",min:Number(o.min),max:Number(o.max),message:o.msg||n("common.inputError"),trigger:"change"});break;case"stringLength":l.push({min:Number(o.min),max:Number(o.max),message:o.msg||n("common.inputError"),trigger:"blur"});break;case"min":l.push({type:"number",min:Number(o.value),message:o.msg||n("common.inputError"),trigger:"change"});break;case"minLength":l.push({min:Number(o.value),message:o.msg||n("common.inputError"),trigger:"blur"});break;case"minChecked":l.push({type:"array",min:Number(o.value),message:o.msg||n("common.inputError"),trigger:"change"});break;case"max":l.push({type:"number",max:Number(o.value),message:o.msg||n("common.inputError"),trigger:"change"});break;case"maxLength":l.push({max:Number(o.value),message:o.msg||n("common.inputError"),trigger:"blur"});break;case"maxChecked":l.push({type:"array",max:Number(o.value),message:o.msg||n("common.inputError"),trigger:"change"});break}}),l}const ze={class:"px-32 py-24"},Le=G({props:{modelValue:{type:Boolean},meta:null},emits:["save"],setup(e,{expose:n,emit:l}){const b=e,{t:g}=J(),{visible:o,handleClose:c}=se(b,l),r=U({});function T(u){const a={};for(const k of b.meta)a[k.key]=u[k.key]||k.value;r.value=a,o.value=!0}function M(){l("save",W(r.value)),c()}return n({showDialog:T}),(u,a)=>{const k=X,N=Y,C=ce,B=fe,S=ue,w=ge;return d(),f(w,{modelValue:m(o),"onUpdate:modelValue":a[1]||(a[1]=h=>pe(o)?o.value=h:null),width:"600px","close-on-click-modal":!1,title:m(g)("common.editCommonName",{name:m(g)("common.meta")}),"custom-class":"el-dialog--zero-padding",onClose:m(c)},{footer:y(()=>[R(S,{"confirm-label":m(g)("common.save"),onConfirm:M,onCancel:m(c)},null,8,["confirm-label","onCancel"])]),default:y(()=>[q("div",ze,[R(B,{"max-height":"50vh"},{default:y(()=>[R(C,{model:r.value,"label-position":"top",onSubmit:a[0]||(a[0]=ie(()=>{},["prevent"]))},{default:y(()=>[(d(!0),E($,null,P(e.meta,h=>(d(),f(N,{key:h.key,prop:h.key,label:h.key},{default:y(()=>[R(k,{modelValue:r.value[h.key],"onUpdate:modelValue":i=>r.value[h.key]=i},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop","label"]))),128))]),_:1},8,["model"])]),_:1})])]),_:1},8,["modelValue","title","onClose"])}}}),Oe={class:"select-media-file"},Pe={key:0},qe={class:"flex items-center"},Ie={key:0,class:"ml-8px text-s text-666","data-cy":"tooltip-right"},Je=G({props:{multiple:{type:Boolean},modelValue:null,placeholder:null,meta:null},emits:["update:modelValue"],setup(e,{emit:n}){const l=e,{t:b}=J(),g=U(o());function o(){if(l.multiple)return Array.isArray(l.modelValue)?l.modelValue.map(i=>i?JSON.parse(i):{src:""}):[l.modelValue?JSON.parse(l.modelValue):{src:""}];{let i=l.modelValue;return Array.isArray(l.modelValue)&&(i=l.modelValue[0]),i?JSON.parse(i):{src:""}}}const c=z({get(){return g.value},set(i){g.value=i,r(i)}}),r=i=>{Array.isArray(i)?n("update:modelValue",i.map(s=>JSON.stringify(s))):n("update:modelValue",JSON.stringify(i))};ve(()=>[l.modelValue,l.multiple],()=>{g.value=o()},{deep:!0});const T=z(()=>l.multiple?c.value.map(i=>({key:i.src,value:i})):[]),{onChange:M}=ne(T,i=>{c.value=W(i.map(s=>s.value))}),u=U(!1),a=U(!1),k=U(),N=U(-1);function C(i){const s={src:i.url};return l.meta&&l.meta.forEach(V=>{if(V.key==="src")return;const D=ke(V.value,{interpolate:/{{([\s\S]+?)}}/g});s[V.key]=D(i)}),s}function B(i){var s;l.multiple?c.value=((s=c.value)!=null?s:[]).concat(i.map(C)):c.value=C(i[0])}function S(i){i===void 0?c.value={src:""}:(c.value.splice(i,1),r(c.value))}function w(i,s){var V;N.value=s,(V=k.value)==null||V.showDialog(i)}function h(i){Array.isArray(c.value)&&l.multiple?c.value=c.value.map((s,V)=>V===N.value?F(F({},s),i):s):c.value=F(F({},c.value),i)}return(i,s)=>{var O;const V=Te,D=ye("hasPermission");return d(),E($,null,[q("div",Oe,[m(c)?(d(),E("div",Pe,[e.multiple?(d(),f(m(xe),{key:0,"model-value":m(T),"item-key":"key",disabled:m(T).length<2,class:"flex items-center flex-wrap",onChange:m(M)},{item:y(({element:x,index:t})=>[(d(),f(Q,{key:t,tooltip:m(T).length<2?void 0:m(b)("common.dragToSort"),url:x.value.src,advanced:e.meta&&e.meta.length>0,onRemove:Z=>S(t),onEdit:Z=>w(x.value,t)},null,8,["tooltip","url","advanced","onRemove","onEdit"]))]),_:1},8,["model-value","disabled","onChange"])):(d(),f(Q,{key:1,url:m(c).src,advanced:e.meta&&e.meta.length>0,onRemove:s[0]||(s[0]=x=>S()),onEdit:s[1]||(s[1]=x=>w(m(c),-1))},null,8,["url","advanced"]))])):A("",!0),q("div",qe,[be((d(),f(V,{type:"primary",round:"",onClick:s[2]||(s[2]=x=>u.value=!0)},{default:y(()=>[I(L(m(b)("common.selectFile")),1)]),_:1})),[[D,{feature:"content",action:"edit"}]]),e.placeholder?(d(),E("div",Ie,L(e.placeholder),1)):A("",!0)])]),(d(),f(Ve,{to:"body"},[u.value?(d(),f(m(re),{key:0,modelValue:u.value,"onUpdate:modelValue":s[3]||(s[3]=x=>u.value=x),multiple:e.multiple,onChoose:B},null,8,["modelValue","multiple"])):A("",!0),R(Le,{ref_key:"editMetadataDialog",ref:k,modelValue:a.value,"onUpdate:modelValue":s[4]||(s[4]=x=>a.value=x),meta:(O=e.meta)!=null?O:[],onSave:h},null,8,["modelValue","meta"])]))],64)}}});const Ge=["innerHTML"],He={key:14,class:"w-full py-8 text-s text-666","data-cy":"tooltip-below"},kl=G({props:{field:null,model:null,cssClass:null,rules:null},setup(e){const n=e,{site:l}=Ee(),b=z(()=>{const u=n.field.settings;return n.field.controlType!=="RichEditor"||l.enableTinymceToolbarSettings&&(!u.toolbar&&l.tinymceSettings.toolbar&&(u.toolbar=l.tinymceSettings.toolbar),!u.font_formats&&l.tinymceSettings.font_formats&&(u.font_formats=l.tinymceSettings.font_formats),!u.font_size_formats&&l.tinymceSettings.font_size_formats&&(u.font_size_formats=l.tinymceSettings.font_size_formats)),u}),{t:g}=J(),o=Ne(),{getControlType:c}=$e(),r=z(()=>typeof n.field.controlType!="string"?{value:n.field.controlType}:c(n.field.controlType)),T=z(()=>{if(n.field.toolTip&&r.value){const u=["CheckBox","RadioBox","Switch","RichEditor","ColorPicker"];return typeof r.value.value=="string"&&u.includes(r.value.value)}return!1}),M=(u,a)=>["TextBox","TextArea","RichEditor"].includes(a)&&u.isMultilingual?u.lang===o.default?o.selected.length>1?u.displayName+" - "+u.lang+" ("+g("common.default")+")":u.displayName:u.displayName+" - "+u.lang:u.displayName;return(u,a)=>{const k=X,N=Se,C=we,B=Ue,S=Ae,w=Me,h=Be,i=De,s=Fe,V=Ce,D=Re,O=te,x=Y;return m(r)?(d(),f(x,{key:0,label:M(e.field,m(r).value),prop:e.field.prop,rules:e.rules,required:e.field.required,class:he(e.cssClass)},{default:y(()=>[m(r).value==="TextBox"?(d(),f(k,v({key:0,modelValue:e.model[e.field.prop],"onUpdate:modelValue":a[0]||(a[0]=t=>e.model[e.field.prop]=t),placeholder:e.field.toolTip,style:{width:"100%"}},e.field.settings),null,16,["modelValue","placeholder"])):m(r).value==="TextArea"?(d(),f(k,v({key:1,modelValue:e.model[e.field.prop],"onUpdate:modelValue":a[1]||(a[1]=t=>e.model[e.field.prop]=t),class:"break-normal",type:"textarea",autosize:{minRows:8,maxRows:15},style:{width:"100%"},placeholder:e.field.toolTip},e.field.settings),null,16,["modelValue","placeholder"])):m(r).value==="RichEditor"?(d(),f(ae,v({key:2,modelValue:e.model[e.field.prop],"onUpdate:modelValue":a[2]||(a[2]=t=>e.model[e.field.prop]=t),min_height:385},m(b)),null,16,["modelValue"])):m(r).value==="Selection"?(d(),f(C,v({key:3,modelValue:e.model[e.field.prop],"onUpdate:modelValue":a[3]||(a[3]=t=>e.model[e.field.prop]=t),placeholder:e.field.toolTip,clearable:"",filterable:""},e.field.settings),{default:y(()=>[(d(!0),E($,null,P(e.field.selectionOptions,t=>(d(),f(N,{key:t.value,value:t.value,label:t.key},{default:y(()=>[q("div",{innerHTML:t.key},null,8,Ge)]),_:2},1032,["value","label"]))),128))]),_:1},16,["modelValue","placeholder"])):m(r).value==="CheckBox"?(d(),f(S,v({key:4,modelValue:e.model[e.field.prop],"onUpdate:modelValue":a[4]||(a[4]=t=>e.model[e.field.prop]=t)},e.field.settings),{default:y(()=>[(d(!0),E($,null,P(e.field.selectionOptions,t=>(d(),f(B,{key:t.value,size:"large",label:t.value},{default:y(()=>[I(L(t.key),1)]),_:2},1032,["label"]))),128))]),_:1},16,["modelValue"])):m(r).value==="RadioBox"?(d(),f(h,v({key:5,modelValue:e.model[e.field.prop],"onUpdate:modelValue":a[5]||(a[5]=t=>e.model[e.field.prop]=t)},e.field.settings),{default:y(()=>[(d(!0),E($,null,P(e.field.selectionOptions,t=>(d(),f(w,{key:t.value,size:"large",label:t.value},{default:y(()=>[I(L(t.key),1)]),_:2},1032,["label"]))),128))]),_:1},16,["modelValue"])):m(r).value==="Switch"?(d(),f(i,v({key:6,modelValue:e.model[e.field.prop],"onUpdate:modelValue":a[6]||(a[6]=t=>e.model[e.field.prop]=t)},e.field.settings),null,16,["modelValue"])):m(r).value==="DateTime"?(d(),f(s,v({key:7,modelValue:e.model[e.field.prop],"onUpdate:modelValue":a[7]||(a[7]=t=>e.model[e.field.prop]=t),type:"datetime","popper-class":"filed-control-el-date-picker",placeholder:e.field.toolTip},e.field.settings),null,16,["modelValue","placeholder"])):m(r).value==="ColorPicker"?(d(),f(V,v({key:8,modelValue:e.model[e.field.prop],"onUpdate:modelValue":a[8]||(a[8]=t=>e.model[e.field.prop]=t),"popper-class":"filed-control-el-color-picker","show-alpha":""},e.field.settings),null,16,["modelValue"])):m(r).value==="Number"?(d(),f(D,v({key:9,modelValue:e.model[e.field.prop],"onUpdate:modelValue":a[9]||(a[9]=t=>e.model[e.field.prop]=t),"controls-position":"right",placeholder:e.field.toolTip},e.field.settings),null,16,["modelValue","placeholder"])):m(r).value==="MediaFile"?(d(),f(me,v({key:10,modelValue:e.model[e.field.prop],"onUpdate:modelValue":a[10]||(a[10]=t=>e.model[e.field.prop]=t),multiple:e.field.multipleValue,placeholder:e.field.toolTip,validations:e.field.validations},e.field.settings),null,16,["modelValue","multiple","placeholder","validations"])):m(r).value==="AdvancedMediaFile"?(d(),f(Je,v({key:11,modelValue:e.model[e.field.prop],"onUpdate:modelValue":a[11]||(a[11]=t=>e.model[e.field.prop]=t),multiple:e.field.multipleValue,placeholder:e.field.toolTip},e.field.settings),null,16,["modelValue","multiple","placeholder"])):m(r).value==="File"?(d(),f(de,v({key:12,modelValue:e.model[e.field.prop],"onUpdate:modelValue":a[12]||(a[12]=t=>e.model[e.field.prop]=t),multiple:e.field.multipleValue,placeholder:e.field.toolTip},e.field.settings),null,16,["modelValue","multiple","placeholder"])):m(r).value==="KeyValues"?(d(),f(O,v({key:13,modelValue:e.model[e.field.prop],"onUpdate:modelValue":a[13]||(a[13]=t=>e.model[e.field.prop]=t),multiple:e.field.multipleValue,placeholder:e.field.toolTip},e.field.settings,{class:"w-1/2 min-w-300px"}),null,16,["modelValue","multiple","placeholder"])):A("",!0),m(T)?(d(),E("div",He,L(e.field.toolTip),1)):A("",!0)]),_:1},8,["label","prop","rules","required","class"])):A("",!0)}}});export{kl as _,Vl as g,$e as u};
