var Q=Object.defineProperty,W=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var R=(l,i,a)=>i in l?Q(l,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[i]=a,U=(l,i)=>{for(var a in i||(i={}))X.call(i,a)&&R(l,a,i[a]);if(I)for(var a of I(i))Y.call(i,a)&&R(l,a,i[a]);return l},M=(l,i)=>W(l,K(i));var F=(l,i,a)=>new Promise((c,u)=>{var E=f=>{try{e(a.next(f))}catch(w){u(w)}},d=f=>{try{e(a.throw(f))}catch(w){u(w)}},e=f=>f.done?c(f.value):Promise.resolve(f.value).then(E,d);e((a=a.apply(l,i)).next())});import{T as Z,H as ee,a5 as oe,_ as te}from"./dev-mode.d22f2f80.js";import{e as ie}from"./guid.c1a40312.js";import{d as A,g as h,h as re,aW as ae,i as L,o as x,a as H,f as k,b as m,w as v,aH as O,t as C,u as p,n as ne,j as T,k as N,F as q,cd as le,x as J,cj as se,b7 as me,e as pe}from"./url.8f5ec20c.js";import{u as j}from"./replace-all.b35629e7.js";import{c as ue}from"./index.20e420e8.js";import{_ as de}from"./index.214551b7.js";import{u as ce}from"./use-save-tip.63213ba1.js";import{U as fe}from"./editor.main.d2800f63.js";import{g as z}from"./i18n.25caaace.js";import{_ as ve}from"./icon-button.0e134c9b.js";import{E as _e}from"./edit-field-dialog.782a743e.js";import{_ as ye}from"./k-table.c13bd7f5.js";import{u as ge}from"./index.50211567.js";import{_ as be}from"./plugin-vue_export-helper.21dcd24c.js";import{c as P}from"./cloneDeep.f12cadc0.js";import{E as we}from"./windi.a815125a.js";import{E as G}from"./index.e9f8834a.js";import{E as he}from"./index.5388dbc8.js";import{_ as ke}from"./index.50326354.js";import{E as Se}from"./index.a5d96e5a.js";import{E as Ve}from"./main.1c3b59e3.js";import"./index.c6488b3c.js";import"./error.7e8331f1.js";import"./userWorker.b3a6730b.js";import"./config.e9159c41.js";import"./dark.bb3c8a6e.js";import"./page.729fa09e.js";import"./validate.f3c0b03b.js";import"./index.878e2bbf.js";import"./index.adb17f32.js";import"./index.b065185c.js";import"./index.ab12ea9e.js";import"./index.b1b64a44.js";import"./style.1b77b3a2.js";import"./toNumber.6efebd6a.js";import"./_baseIsEqual.0a4e01e5.js";import"./index.94998415.js";import"./index.1e7e06b8.js";import"./_baseClone.885c975f.js";import"./isEqual.2e410d13.js";import"./index.60799c00.js";import"./index.f571dfc9.js";import"./event.776e7e11.js";import"./isNil.98bb3b88.js";import"./index.1d16d007.js";import"./scroll.0cf77af8.js";import"./aria.75ec5909.js";import"./event.53b2ad83.js";import"./focus-trap.81e4fb05.js";import"./validator.9b0d789f.js";import"./index.f9c89813.js";import"./index.a0b57910.js";import"./index.158cdd11.js";import"./dropdown.fed924b2.js";import"./refs.d2253dd4.js";import"./use-copy-text.dc8d5085.js";import"./index.7c7fa606.js";import"./toggleComment.5b29ca87.js";import"./confirm.629bcef4.js";import"./logo-transparent.1566007e.js";import"./index.537a2de2.js";import"./index.5b499f72.js";import"./index.960b9732.js";import"./debounce.730e1961.js";import"./index.c93fe8e7.js";import"./vuedraggable.umd.5305b990.js";import"./index.5d366322.js";import"./index.2e51d36e.js";import"./index.3be79fd5.js";import"./index.925df86b.js";import"./index.378f5080.js";import"./index.64203830.js";import"./alert.8fe5500a.js";import"./index.84e4a218.js";/* empty css                                                               */import"./media-list.vue_vue_type_style_index_0_scoped_true_lang.6e849230.js";/* empty css                                                          */import"./file.9f559d69.js";import"./use-date.55b953fa.js";import"./dayjs.min.2044f1dd.js";/* empty css                                                          *//* empty css                                                                 */import"./use-file-upload.beffa25f.js";/* empty css                                                         */import"./image-editor.vue_vue_type_style_index_0_scoped_true_lang.e5d64b31.js";import"./image-editor.e294b472.js";import"./main.esm.8d4b9329.js";import"./index.1be51314.js";import"./classCompletion.a22e38a6.js";import"./preload-helper.13a99eb0.js";import"./index.0c2ced08.js";import"./tooltip.ae959863.js";import"./key-value-editor.9a8a1084.js";import"./selection-editor.30a86485.js";import"./index.db6dfc3c.js";import"./index.e3f90979.js";import"./index.bd47f674.js";import"./index.486a11ff.js";import"./editable-tags.b9955dfc.js";import"./index.92411976.js";import"./_baseIndexOf.4d7985be.js";import"./index.e89ba775.js";import"./index.5f0a99c5.js";import"./string.75b81683.js";import"./isEmpty.6bc22915.js";import"./index.4a9f2d0a.js";import"./sortable.esm.a99254e8.js";import"./index.a9a077b4.js";import"./index.b410d437.js";import"./media-dialog.d9567663.js";import"./breadcrumb.bcaeaf75.js";import"./plugin-vue_export-helper.41ffa612.js";import"./media.ccb5179e.js";import"./index.b9334ca3.js";import"./search-provider.930da3c1.js";import"./last.e7aa49db.js";import"./_baseUniq.549af2de.js";import"./use-operation-dialog.450d2247.js";import"./folder.8308bb9d.js";import"./relations-tag.eed033c9.js";import"./index.13a7cab6.js";import"./browser.06df4d2e.js";import"./throttle.3f3ee457.js";import"./search-input.9d340a13.js";import"./layout.ac9c1bc9.js";import"./index.95d56833.js";import"./position.648be44c.js";import"./utils.4193a5f4.js";import"./index.cc554f5e.js";import"./index.5c572ff2.js";import"./file.0614f81f.js";import"./pick.51150ea7.js";import"./_basePickBy.1e82afbc.js";import"./index.d3b66472.js";import"./index.3746fd33.js";import"./index.93cb5a2c.js";import"./index.50c16ae5.js";const xe={class:"flex items-center pb-24"},Ce={"data-cy":"display-name"},Ee={"data-cy":"control-type"},Fe=A({props:{modelValue:null,permission:null,propertyOptions:null,showDefaultValue:{type:Boolean},hidePreviewField:{type:Boolean},enableDynamicOptions:{type:Boolean}},emits:["update:model-value"],setup(l,{emit:i}){const a=l,c=h(),{t:u}=z(),{getControlType:E}=ge(),d=h(!1),e=h([]);re(()=>{e.value=w(a.modelValue.map(t=>{const o=P(t);return _(o,"selectionOptions"),_(o,"validations"),_(o,"settings"),o}))}),ae(()=>{e.value=[],c.value=void 0,d.value=!1});const f=t=>{const o={};t.forEach((n,y)=>{n.order=y,o[n.name]=n}),e.value=w(e.value).map(n=>o[n.name]||n)};function w(t){return t.sort((o,n)=>{if(o.isSystemField!==n.isSystemField){if(o.isSystemField)return 1;if(n.isSystemField)return-1}return o.order>n.order?1:-1})}function S(t){return F(this,null,function*(){e.value.splice(t,1)})}function _(t,o){t[o]?t[o]=typeof t[o]=="string"?JSON.parse(t[o]):t[o]:t[o]=[]}function D(t,o){return typeof t[o]=="string"?t[o]:JSON.stringify(t[o])}function $(){c.value=void 0,d.value=!0}function B(t){c.value=P(t),_(c.value,"selectionOptions"),_(c.value,"validations"),_(c.value,"settings"),d.value=!0}return L(()=>e.value,t=>{const o=t.map(n=>M(U({},n),{selectionOptions:D(n,"selectionOptions"),validations:D(n,"validations"),settings:D(n,"settings")}));i("update:model-value",o)},{deep:!0}),(t,o)=>{const n=we,y=G,r=he,g=ve;return x(),H(q,null,[k("div",xe,[m(y,{round:"","data-cy":"new-field",onClick:$},{default:v(()=>[m(n,{class:"iconfont icon-a-addto"}),O(" "+C(p(u)("common.newField")),1)]),_:1})]),m(p(ye),{ref:"table",data:e.value,"row-class-name":({row:s,rowIndex:V})=>s.isSystemField?"":"draggable",draggable:".draggable","row-key":"name",onSorted:o[0]||(o[0]=s=>f(s))},{default:v(()=>[m(r,{label:p(u)("common.name")},{default:v(({row:s})=>[k("span",{class:ne({"text-999":s.isSystemField}),"data-cy":"field-name"},C(s.name),3)]),_:1},8,["label"]),m(r,{label:p(u)("common.displayName")},{default:v(({row:s})=>[k("span",Ce,C(s.displayName),1)]),_:1},8,["label"]),m(r,{label:p(u)("common.controlType"),width:"200"},{default:v(({row:s})=>{var V;return[k("span",Ee,C((V=p(E)(s.controlType))==null?void 0:V.displayName),1)]}),_:1},8,["label"]),m(r,{width:"120",align:"right"},{default:v(({row:s,$index:V})=>[m(g,{icon:"icon-a-writein",tip:p(u)("common.edit"),"data-cy":"edit",onClick:b=>B(s)},null,8,["tip","onClick"]),s.isSystemField?N("",!0):(x(),T(g,{key:0,permission:{feature:"contentType",action:"edit"},icon:"icon-delete text-orange hover:text-orange",tip:p(u)("common.delete"),"data-cy":"delete",onClick:b=>S(V)},null,8,["tip","onClick"])),m(g,{icon:"icon-move js-sortable cursor-move",tip:p(u)("common.move"),"data-cy":"move"},null,8,["tip"])]),_:1})]),_:1},8,["data","row-class-name"]),d.value?(x(),T(_e,{key:0,modelValue:d.value,"onUpdate:modelValue":o[1]||(o[1]=s=>d.value=s),fields:e.value,field:c.value,options:l.propertyOptions,"show-default-value":l.showDefaultValue,"hide-preview-field":l.hidePreviewField,"enable-dynamic-options":l.enableDynamicOptions},null,8,["modelValue","fields","field","options","show-default-value","hide-preview-field","enable-dynamic-options"])):N("",!0)],64)}}});var De=be(Fe,[["__scopeId","data-v-d1faafb8"]]);const Be={class:"h-full w-full flex flex-col overflow-hidden"},Te={class:"pt-16 px-32 bg-fff dark:bg-[#222] dark:border-transparent border-b border-solid border-line flex items-start"},$e=k("div",{class:"flex-1"},null,-1),Oe={class:"flex-1"},ui=A({setup(l){const{t:i}=z(),a=Z(),c=le(),u=h(),E=h(),d=ce(),e=h(),f=ee(J("id")||""),w={hideDisplayInSearchResult:!0,hideMultipleLanguage:!0,hideSummaryField:!0},S=h(!1),_=h([]),D=()=>F(this,null,function*(){e.value=yield a.getView(J("id")),d.init(e.value)}),$=()=>{c.goBackOrTo(j({name:"views"}))},B=()=>F(this,null,function*(){if(!e.value)return;yield u.value.validate();const y=e.value.id===ie;yield a.updateView(e.value,f.save()),Ve.success(i("common.saveSuccess")),d.init(e.value),y&&c.replace(j({name:"view-edit",query:{id:e.value.id}}))}),t=()=>{var y,r;S.value=!0,_.value=P((r=(y=e.value)==null?void 0:y.propDefines)!=null?r:[])},o=()=>{!e.value||(e.value.propDefines=P(_.value),S.value=!1)},n=()=>F(this,null,function*(){yield B(),$()});return se((y,r,g)=>F(this,null,function*(){y.name==="login"?g():yield d.check(e.value).then(()=>{g()}).catch(()=>{g(!1)})})),ue("save",B),L(()=>e.value,()=>{d.changed(e.value)},{deep:!0}),D(),(y,r)=>{const g=G,s=Se,V=me("hasPermission");return x(),H(q,null,[k("div",Be,[k("div",Te,[e.value?(x(),T(oe,{key:0,ref_key:"form",ref:u,model:e.value,inline:""},null,8,["model"])):N("",!0),$e,m(g,{round:"",class:"lineButton",onClick:t},{default:v(()=>[O(C(p(i)("common.parameters")),1)]),_:1}),m(g,{round:"",class:"lineButton",onClick:r[0]||(r[0]=b=>E.value.format())},{default:v(()=>[O(C(p(i)("common.format")),1)]),_:1})]),k("div",Oe,[e.value?(x(),T(te,{key:0,ref_key:"editor",ref:E,modelValue:e.value.body,"onUpdate:modelValue":r[1]||(r[1]=b=>e.value.body=b),language:"html","k-script":"",uri:p(fe).file(e.value.id),onMonacoLoadComplete:r[2]||(r[2]=b=>p(f).bindMonaco(b,"html"))},null,8,["modelValue","uri"])):N("",!0)]),m(de,{back:"",permission:{feature:"view",action:"edit"},onCancel:$,onSave:B},{"extra-buttons":v(()=>[pe((x(),T(g,{round:"",type:"primary","data-cy":"save-and-return",onClick:n},{default:v(()=>[O(C(p(i)("common.saveAndReturn")),1)]),_:1})),[[V,{feature:"view",action:"edit"}]])]),_:1})]),m(s,{modelValue:S.value,"onUpdate:modelValue":r[5]||(r[5]=b=>S.value=b),"close-on-click-modal":!1,title:p(i)("common.parameters")},{footer:v(()=>[m(ke,{onConfirm:o,onCancel:r[4]||(r[4]=b=>S.value=!1)})]),default:v(()=>[m(De,{modelValue:_.value,"onUpdate:modelValue":r[3]||(r[3]=b=>_.value=b),"property-options":w,"show-default-value":!0,"hide-preview-field":!0},null,8,["modelValue"])]),_:1},8,["modelValue","title"])],64)}}});export{ui as default};
