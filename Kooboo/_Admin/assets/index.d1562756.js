var A=(e,g,a)=>new Promise((u,p)=>{var m=d=>{try{y(a.next(d))}catch(i){p(i)}},n=d=>{try{y(a.throw(d))}catch(i){p(i)}},y=d=>d.done?u(d.value):Promise.resolve(d.value).then(m,n);y((a=a.apply(e,g)).next())});import{_ as te}from"./icon-button.0e134c9b.js";import{g as q,u as Q}from"./main.1c3b59e3.js";import{v as oe,g as W}from"./i18n.25caaace.js";import{E as X}from"./index.f571dfc9.js";import{E as z,a as ae}from"./index.94998415.js";import{d as L,u as f,o,a as w,b6 as I,e as ne,j as c,w as $,r as _,F as h,g as B,i as ue,f as C,t as F,aH as O,b as S,k as N,c as Y,h as Z,G as de,n as ie,m as se,az as me,c0 as re}from"./url.8f5ec20c.js";import{_ as ce}from"./index.b410d437.js";import{a as fe,b as pe}from"./index.d3b66472.js";import{_ as ve}from"./index.20e420e8.js";import{S as ye}from"./search-input.9d340a13.js";import{_ as ge}from"./k-table.c13bd7f5.js";import{_ as Ve}from"./index.50326354.js";import{u as be}from"./use-date.55b953fa.js";import{u as ke}from"./content-effect.da091881.js";import{_ as $e}from"./index.6c4e3269.js";import{E as ee,a as le}from"./index.960b9732.js";import{E as we}from"./index.5388dbc8.js";import{E as he}from"./index.a5d96e5a.js";import{b as xe}from"./textContent.f45c90f4.js";import{d as Ee}from"./image-cover.83330cdc.js";import{g as Se}from"./string.75b81683.js";import{E as Ue}from"./index.c6488b3c.js";import{_ as Ce}from"./key-value-editor.9a8a1084.js";import{E as Fe}from"./index.3746fd33.js";import{E as Ie,a as Me}from"./index.2e51d36e.js";import{b as Ne,a as Te}from"./index.5b499f72.js";import{E as Be}from"./index.537a2de2.js";import{E as De}from"./index.93cb5a2c.js";import{E as Le}from"./index.db6dfc3c.js";import{f as G,g as J}from"./custom-field.3235a3b0.js";const Re=L({props:{defaultModel:null,multilingualModel:null,label:null,rules:null,defaultProp:null,multilingualProp:null},emits:["update:default-model"],setup(e,{emit:g}){const a=e,u=q();g("update:default-model",y());function p(d){g("update:default-model",d),a.multilingualModel[u.default]=d}function m(d,i){var v=d==u.default;v&&g("update:default-model",i),a.multilingualModel[d]=i}function n(d){var k;var i=a.multilingualModel,v=d==u.default;return(k=i[d])!=null?k:v?a.defaultModel:void 0}function y(){if(a.defaultModel!=null)return a.defaultModel;var d=a.multilingualModel;return d[u.default]}return(d,i)=>{const v=z;return f(u).visible?(o(!0),w(h,{key:0},I(f(u).cultures,(k,V)=>ne((o(),c(v,{key:V,label:f(u).appendLangText(e.label,V),prop:`${e.multilingualProp}.${V}`,rules:e.rules},{default:$(()=>[_(d.$slots,"default",{value:n(V),onchange:x=>m(V,x)})]),_:2},1032,["label","prop","rules"])),[[oe,f(u).selected.includes(V)]])),128)):(o(),c(v,{key:1,label:e.label,prop:e.defaultProp,rules:e.rules},{default:$(()=>[_(d.$slots,"default",{value:y(),onchange:p})]),_:3},8,["label","prop","rules"]))}}});function H(e){return e?e.toLowerCase().split(" ").filter(g=>g).join("-"):""}const Oe={class:"inline-flex items-center space-x-4"},Pe={class:"text-s"},ze={class:"text-orange"},je=O(") "),Ae={class:"flex items-center space-x-8 w-full"},Cl=L({props:{title:null,seoName:null,path:null,label:null},emits:["update:seoName"],setup(e,{emit:g}){const a=e,u=B(a.seoName!=H(a.title)),p=Q(),{t:m}=W();return ue([()=>a.title,()=>u.value],()=>{u.value||g("update:seoName",H(a.title))}),(n,y)=>{const d=X,i=te,v=z;return o(),c(v,null,{label:$(()=>[C("div",Oe,[C("div",null,F(e.label||f(m)("common.seoName")),1),C("div",Pe,[O(" ("+F(f(p).site.baseUrl)+F(a.path)+"/",1),C("span",ze,F(a.seoName),1),je])])]),default:$(()=>[C("div",Ae,[S(d,{"model-value":a.seoName,"onUpdate:modelValue":y[0]||(y[0]=k=>g("update:seoName",k)),onInput:y[1]||(y[1]=()=>u.value=!0)},null,8,["model-value"]),u.value?(o(),c(i,{key:0,circle:"",class:"text-blue",icon:"icon-Refresh",tip:"Sync from title",onClick:y[2]||(y[2]=()=>u.value=!1)})):N("",!0)])]),_:1})}}}),_e={class:"flex items-center pb-24 justify-between"},Ge={class:"space-x-16 flex items-center"},Je=L({props:{modelValue:{type:Boolean},folderId:null,multiple:{type:Boolean},exclude:null},emits:["update:model-value","success"],setup(e,{emit:g}){const a=e,{t:u}=W(),p=B(!0),m=B(),{list:n,columns:y,keywords:d,columnLoaded:i,pagination:v,fetchList:k,searchCategories:V,categoryOptions:x,rawList:U}=ke(a.folderId,!0,a.exclude),t=Y(()=>y.value.map(s=>({name:s.name,displayName:s.displayName,controlType:s.controlType,multipleValue:s.multipleValue,attrs:{sortable:"custom","min-width":180}})));Z(()=>A(this,null,function*(){k(1,10)}));function r(){const s=[];for(const l of m.value.selected){const E=U.value.find(M=>M.id==l.id);E&&s.push(E)}g("success",s),p.value=!1}return(s,l)=>{const E=ee,M=le,D=ye,T=we,P=he;return o(),c(P,{modelValue:p.value,"onUpdate:modelValue":l[4]||(l[4]=b=>p.value=b),width:"900px","close-on-click-modal":!1,title:f(u)("common.content"),onClosed:l[5]||(l[5]=b=>g("update:model-value",!1))},{footer:$(()=>[S(Ve,{onConfirm:r,onCancel:l[3]||(l[3]=b=>p.value=!1)})]),default:$(()=>[C("div",_e,[C("div",Ge,[(o(!0),w(h,null,I(f(x),b=>{var j;return o(),c(M,{key:b.id,modelValue:f(V)[b.id],"onUpdate:modelValue":R=>f(V)[b.id]=R,clearable:"",multiple:"",placeholder:(j=b.display)!=null?j:b.alias,onChange:l[0]||(l[0]=()=>f(k)(1,10))},{default:$(()=>[(o(!0),w(h,null,I(b.options,R=>(o(),c(E,{key:R.key,label:R.value,value:R.key},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","placeholder"])}),128)),S(D,{modelValue:f(d),"onUpdate:modelValue":l[1]||(l[1]=b=>de(d)?d.value=b:null),placeholder:f(u)("common.searchContents"),class:"w-238px",clearable:"","data-cy":"search"},null,8,["modelValue","placeholder"])])]),f(i)?(o(),c(f(ge),{key:0,ref_key:"table",ref:m,data:f(n),"show-check":"","hide-header":"","is-radio":!e.multiple,pagination:f(v),"hide-delete":"",onChange:l[2]||(l[2]=b=>f(k)(b,10))},{default:$(()=>[S($e,{columns:f(t)},null,8,["columns"]),S(T,{prop:"online",sortable:"custom",label:f(u)("content.online"),width:"120",align:"center"},{default:$(({row:b})=>[C("span",{class:ie(b.online?"text-green":"text-999"),"data-cy":"online"},F(b.online?f(u)("common.yes"):f(u)("common.no")),3)]),_:1},8,["label"]),S(T,{label:f(u)("common.lastModified"),width:"180",align:"center",prop:"lastModified",sortable:"custom"},{default:$(({row:b})=>[O(F(f(be)(b.lastModified)),1)]),_:1},8,["label"])]),_:1},8,["data","is-radio","pagination"])):N("",!0)]),_:1},8,["modelValue","title"])}}}),He={key:0,class:"w-504px"},Ke={class:"flex space-x-4"},qe={key:1},Qe=L({props:{modelValue:null,contentFolder:null,multiple:{type:Boolean},allowRepetition:{type:Boolean}},emits:["update:model-value"],setup(e,{emit:g}){var U;const a=e,u=B(!1),p=B({columns:[],list:[]});function m(){u.value=!0}xe(a.modelValue||[],(U=a.contentFolder)!=null?U:"").then(t=>p.value=t);const n=Y(()=>{const t=[];if(!p.value)return t;for(const r of p.value.columns)r.controlType=="MediaFile"?t.unshift(r):t.push(r);return t});function y(t){let r=[...a.modelValue];if(a.multiple)for(const s of t)p.value.list.find(l=>l.id==s.id)||p.value.list.push(s),r.push(s.id);else r=t.map(s=>s.id),p.value.list=t;g("update:model-value",r)}function d(t){const r=a.modelValue.findIndex(s=>s==t);r>-1&&a.modelValue.splice(r,1),g("update:model-value",a.modelValue)}function i(t){const r=a.modelValue.splice(t.oldIndex,1)[0];a.modelValue.splice(t.newIndex,0,r),g("update:model-value",a.modelValue)}function v(t,r){var l,E;const s=(E=(l=p.value)==null?void 0:l.list)==null?void 0:E.find(M=>M.id==t);return s?Se(s.textValues,r):""}const k=Q();function V(t){return`url("${t?re(k.site.prUrl,t):Ee}")`}function x(t,r){if(r.controlType!=="MediaFile")return[];const s=v(t,r.name);if(!s)return[];if(!r.multipleValue)return[s];try{return JSON.parse(s)}catch(l){return console.warn(["JSON parse error",l,s]),[]}}return(t,r)=>{var E,M;const s=Ue,l=ve;return(M=(E=p.value)==null?void 0:E.columns)!=null&&M.length?(o(),w("div",He,[S(l,{"wrapper-class":"space-y-4 w-full",list:e.modelValue,onAdd:m,onDelete:d,onSort:i},{default:$(({item:D})=>[S(s,null,{default:$(()=>[C("div",Ke,[(o(!0),w(h,null,I(f(n),T=>(o(),w(h,{key:T.name},[T.controlType=="MediaFile"?(o(!0),w(h,{key:0},I(x(D,T),(P,b)=>(o(),w("div",{key:b,class:"w-32 h-32 bg-contain bg-center bg-no-repeat rounded-4px overflow-hidden inline-block relative group bg-gray",style:se({backgroundImage:V(P)})},null,4))),128)):(o(),w("div",qe,F(v(D,T.name)),1))],64))),128))])]),_:2},1024)]),_:1},8,["list"]),(o(),c(me,{to:"body"},[u.value?(o(),c(Je,{key:0,modelValue:u.value,"onUpdate:modelValue":r[0]||(r[0]=D=>u.value=D),"folder-id":e.contentFolder,multiple:e.multiple,exclude:e.allowRepetition?[]:e.modelValue,onSuccess:y},null,8,["modelValue","folder-id","multiple","exclude"])):N("",!0)]))])):N("",!0)}}});const K=L({props:{field:null,modelValue:null},emits:["update:model-value"],setup(e,{emit:g}){const a=e,u=B(!1);if(a.field.multiple&&!Array.isArray(a.modelValue)){var p=[];a.modelValue!==void 0&&p.push(a.modelValue),g("update:model-value",p)}return Z(()=>{u.value=!0}),(m,n)=>{const y=X,d=ee,i=le,v=Ie,k=Me,V=Ne,x=Te,U=Be,t=De,r=Fe,s=Le;return u.value?(o(),w(h,{key:0},[e.field.type==="TextBox"?(o(),c(y,{key:0,style:{width:"100%"},"model-value":e.modelValue,"onUpdate:modelValue":n[0]||(n[0]=l=>m.$emit("update:model-value",l))},null,8,["model-value"])):e.field.type==="TextArea"?(o(),c(y,{key:1,"model-value":e.modelValue,class:"break-normal",type:"textarea",autosize:{minRows:8,maxRows:15},style:{width:"100%"},"onUpdate:modelValue":n[1]||(n[1]=l=>m.$emit("update:model-value",l))},null,8,["model-value"])):e.field.type==="RichEditor"?(o(),c(ce,{key:2,"model-value":e.modelValue,min_height:385,"onUpdate:modelValue":n[2]||(n[2]=l=>m.$emit("update:model-value",l))},null,8,["model-value"])):e.field.type==="Selection"?(o(),c(i,{key:3,"model-value":e.modelValue,clearable:"","onUpdate:modelValue":n[3]||(n[3]=l=>m.$emit("update:model-value",l))},{default:$(()=>[(o(!0),w(h,null,I(e.field.selectionOptions,l=>(o(),c(d,{key:l.value,value:l.value,label:l.key},null,8,["value","label"]))),128))]),_:1},8,["model-value"])):e.field.type==="CheckBox"?(o(),c(k,{key:4,"model-value":e.modelValue,"onUpdate:modelValue":n[4]||(n[4]=l=>m.$emit("update:model-value",l))},{default:$(()=>[(o(!0),w(h,null,I(e.field.selectionOptions,l=>(o(),c(v,{key:l.value,size:"large",label:l.value},{default:$(()=>[O(F(l.key),1)]),_:2},1032,["label"]))),128))]),_:1},8,["model-value"])):e.field.type==="RadioBox"?(o(),c(x,{key:5,"model-value":e.modelValue,"onUpdate:modelValue":n[5]||(n[5]=l=>m.$emit("update:model-value",l))},{default:$(()=>[(o(!0),w(h,null,I(e.field.selectionOptions,l=>(o(),c(V,{key:l.value,size:"large",label:l.value},{default:$(()=>[O(F(l.key),1)]),_:2},1032,["label"]))),128))]),_:1},8,["model-value"])):e.field.type==="Switch"?(o(),c(U,{key:6,"model-value":e.modelValue,"onUpdate:modelValue":n[6]||(n[6]=l=>m.$emit("update:model-value",l))},null,8,["model-value"])):e.field.type==="DateTime"?(o(),c(t,{key:7,"model-value":e.modelValue,type:"datetime","popper-class":"filed-control-el-date-picker","onUpdate:modelValue":n[7]||(n[7]=l=>m.$emit("update:model-value",l))},null,8,["model-value"])):e.field.type==="ColorPicker"?(o(),c(r,{key:8,"model-value":e.modelValue,"popper-class":"filed-control-el-color-picker","show-alpha":"","onUpdate:modelValue":n[8]||(n[8]=l=>m.$emit("update:model-value",l))},null,8,["model-value"])):e.field.type==="Number"?(o(),c(s,{key:9,"model-value":e.modelValue,"controls-position":"right","onUpdate:modelValue":n[9]||(n[9]=l=>m.$emit("update:model-value",l))},null,8,["model-value"])):e.field.type==="MediaFile"?(o(),c(fe,{key:10,"model-value":e.modelValue,multiple:e.field.multiple,validations:e.field.validations,"onUpdate:modelValue":n[10]||(n[10]=l=>m.$emit("update:model-value",l))},null,8,["model-value","multiple","validations"])):e.field.type==="File"?(o(),c(pe,{key:11,"model-value":e.modelValue,multiple:e.field.multiple,"onUpdate:modelValue":n[11]||(n[11]=l=>m.$emit("update:model-value",l))},null,8,["model-value","multiple"])):e.field.type==="Content"?(o(),c(Qe,{key:12,"model-value":e.modelValue||[],"content-folder":e.field.contentFolder,multiple:e.field.multiple,"allow-repetition":e.field.allowRepetition,"onUpdate:modelValue":n[12]||(n[12]=l=>m.$emit("update:model-value",l))},null,8,["model-value","content-folder","multiple","allow-repetition"])):e.field.type==="KeyValues"?(o(),c(Ce,{key:13,"model-value":e.modelValue||[],"onUpdate:modelValue":n[13]||(n[13]=l=>m.$emit("update:model-value",l))},null,8,["model-value"])):N("",!0)],64)):N("",!0)}}}),We={key:0,class:"bg-fff dark:bg-[#252526] px-24 py-16 rounded-normal"},Fl=L({props:{data:null,customFields:null},setup(e,{expose:g}){const a=e,u=q(),p=B();function m(i){return i=Object.keys(a.data).find(v=>v.toLowerCase()==i.toLowerCase())||i,a.data[i]||(a.data[i]={}),a.data[i]}function n(i,v){return m(i)[v]}function y(i,v,k){const V=m(i);V[v]=k}function d(i){var x;if((x=G[i.type])==null?void 0:x.multilingual)return u.default;const k=m(i.name),V=Object.keys(k);return!V.length||V.includes(u.default)?u.default:V[0]}return g({form:p}),(i,v)=>{var U;const k=Re,V=z,x=ae;return(U=e.customFields)!=null&&U.length?(o(),w("div",We,[S(x,{ref_key:"form",ref:p,"label-position":"top",model:e.data},{default:$(()=>[(o(!0),w(h,null,I(e.customFields,t=>{var r;return o(),w(h,{key:t.name},[t.editable?(o(),w(h,{key:0},[((r=f(G)[t.type])==null?void 0:r.multilingual)&&t.multilingual?(o(),c(k,{key:0,label:t.displayName||t.name,"multilingual-model":m(t.name),rules:f(J)(t.validations,t.type),"multilingual-prop":t.name},{default:$(({value:s,onchange:l})=>[S(K,{"model-value":s,field:t,"onUpdate:modelValue":E=>l(E)},null,8,["model-value","field","onUpdate:modelValue"])]),_:2},1032,["label","multilingual-model","rules","multilingual-prop"])):(o(),c(V,{key:1,label:t.displayName||t.name,rules:f(J)(t.validations,t.type),prop:`${t.name}.${d(t)}`},{default:$(()=>[S(K,{"model-value":n(t.name,d(t)),field:t,"onUpdate:modelValue":s=>y(t.name,d(t),s)},null,8,["model-value","field","onUpdate:modelValue"])]),_:2},1032,["label","rules","prop"]))],64)):N("",!0)],64)}),128))]),_:1},8,["model"])])):N("",!0)}}});export{Fl as _,Cl as a,Re as b};
