var I=(y,a,i)=>new Promise((p,s)=>{var u=n=>{try{e(i.next(n))}catch(b){s(b)}},h=n=>{try{e(i.throw(n))}catch(b){s(b)}},e=n=>n.done?p(n.value):Promise.resolve(n.value).then(u,h);e((i=i.apply(y,a)).next())});import{_ as K}from"./index.5f76a3ad.js";import{d as $,o as m,a as x,F as R,b6 as S,b as o,w as r,u as d,f as U,t as q,g as k,i as A,j as E,aH as B,k as g,cd as W,c as X,cj as Y,x as Z}from"./url.8f5ec20c.js";import{u as ee}from"./replace-all.d441bf14.js";import{g as N,w as oe}from"./i18n.bcd18f8a.js";import{t as le,a as P,r as te,l as ae,i as re,w as j}from"./validate.238a9986.js";import{E as se,a as ue,c as ne}from"./index.6d22f937.js";import{E as O}from"./index.5cbbc5d7.js";import{E as G,a as H}from"./index.6d63eb53.js";import{E as me}from"./windi.19264205.js";import{E as ie}from"./index.aec72f69.js";import{f as pe,i as de,c as ce,h as ve}from"./index.bda83f28.js";import{_ as _e}from"./alert.8fe5500a.js";import{_ as L}from"./dev-mode.1f379952.js";import{e as fe}from"./guid.c1a40312.js";import{u as ye}from"./use-save-tip.8f44d6c0.js";import{E as be,a as xe}from"./index.59b1471f.js";import{E as he}from"./index.373c837a.js";import{E as Ve}from"./index.30822da9.js";import{E as ge}from"./index.79f78425.js";import"./index.2341329b.js";import"./main.582f9de6.js";import"./index.50c16ae5.js";import"./preload-helper.13a99eb0.js";import"./index.bff48780.js";import"./index.649f6c77.js";import"./index.a32fb6e5.js";import"./style.9c8f6403.js";import"./toNumber.6efebd6a.js";import"./_baseIsEqual.547729d3.js";import"./index.ec6ad7db.js";import"./focus-trap.eafcfd1f.js";import"./isNil.98bb3b88.js";import"./event.53b2ad83.js";import"./index.05e21f33.js";import"./index.c80f5028.js";import"./error.7e8331f1.js";import"./event.776e7e11.js";import"./scroll.4888a9e9.js";import"./isEqual.11d86bcc.js";import"./debounce.730e1961.js";import"./index.9a83ee01.js";import"./validator.b73911a9.js";import"./_baseClone.eeff2792.js";import"./index.72ccc088.js";import"./classCompletion.a22e38a6.js";import"./userWorker.b3a6730b.js";import"./editor.main.d2800f63.js";import"./vuedraggable.umd.7929a3b6.js";import"./cloneDeep.060340c1.js";import"./config.812575d1.js";import"./dark.166fd971.js";import"./page.e927203a.js";import"./index.10f642b2.js";import"./index.a3d8335f.js";import"./aria.75ec5909.js";import"./index.8bc4b1d6.js";import"./dropdown.f6378640.js";import"./refs.d2253dd4.js";import"./use-copy-text.c117d066.js";import"./index.73c941f5.js";import"./toggleComment.5b29ca87.js";import"./confirm.eadb49f1.js";import"./logo-transparent.1566007e.js";import"./index.7a75fca3.js";import"./index.d4a6b2d5.js";import"./icon-button.315b6443.js";import"./index.3a977dfb.js";import"./index.4dc50d47.js";import"./index.daafc4da.js";import"./index.3be79fd5.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./index.79dc05e0.js";import"./index.ff00fbd6.js";import"./index.57a23e6d.js";import"./index.d84e2378.js";/* empty css                                                               */import"./media-list.vue_vue_type_style_index_0_scoped_true_lang.c0b84b74.js";/* empty css                                                          */import"./file.734aeed6.js";import"./use-date.a1321c18.js";import"./dayjs.min.59f10137.js";/* empty css                                                          *//* empty css                                                                 */import"./use-file-upload.c73251ef.js";/* empty css                                                         */import"./image-editor.vue_vue_type_style_index_0_scoped_true_lang.53a9e945.js";import"./image-editor.f97cfa84.js";import"./main.esm.6441082b.js";import"./index.7633560d.js";const ke={class:"space-y-4"},Ee={class:"px-12 text-blue"},Ue=$({props:{list:null},setup(y){const{t:a}=N(),i={expiresIn:[le(a("common.integerRuleTips"))]};return(p,s)=>{const u=se,h=ue,e=O,n=G,b=H,C=me,T=ie;return m(),x("div",ke,[(m(!0),x(R,null,S(y.list,(c,w)=>(m(),x("div",{key:w,class:"flex items-center space-x-4"},[o(h,{modelValue:c.method,"onUpdate:modelValue":v=>c.method=v,class:"w-138px"},{default:r(()=>[o(u,{value:"Get",label:"GET","data-cy":"method-get"}),o(u,{value:"Put",label:"PUT","data-cy":"method-put"}),o(u,{value:"Post",label:"POST","data-cy":"method-post"}),o(u,{value:"Delete",label:"DELETE","data-cy":"method-delete"}),o(u,{value:"Options",label:"OPTIONS","data-cy":"method-options"}),o(u,{value:"Head",label:"HEAD","data-cy":"method-head"}),o(u,{value:"Patch",label:"PATCH","data-cy":"method-patch"}),o(u,{value:"Trace",label:"TRACE","data-cy":"method-trace"}),o(u,{value:"All",label:"ALL","data-cy":"method-all"})]),_:2},1032,["modelValue","onUpdate:modelValue"]),o(e,{modelValue:c.pattern,"onUpdate:modelValue":v=>c.pattern=v,placeholder:d(a)("common.inputCachePathTips"),class:"w-400px","data-cy":"cache-path"},null,8,["modelValue","onUpdate:modelValue","placeholder"]),o(b,{model:c,rules:d(i),onSubmit:s[0]||(s[0]=oe(()=>{},["prevent"]))},{default:r(()=>[o(n,{prop:"expiresIn"},{default:r(()=>[o(e,{modelValue:c.expiresIn,"onUpdate:modelValue":v=>c.expiresIn=v,modelModifiers:{number:!0},class:"w-138px"},{append:r(()=>[U("div",Ee,q(d(a)("common.minutes")),1)]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1032,["model","rules"]),U("div",null,[o(T,{circle:"",class:"text-orange","data-cy":"delete",onClick:v=>y.list.splice(w,1)},{default:r(()=>[o(C,{class:"iconfont icon-delete"})]),_:2},1032,["onClick"])])]))),128)),o(T,{circle:"",class:"text-blue","data-cy":"add",onClick:s[1]||(s[1]=c=>y.list.push({method:"Get",expiresIn:1,pattern:""}))},{default:r(()=>[o(C,{class:"iconfont icon-a-addto"})]),_:1})])}}}),Ce={class:"space-x-4 space-y-4"},Te=$({props:{id:null},emits:["change"],setup(y,{emit:a}){const i=k([]),p=k();return A(p,s=>{s&&a("change",s)}),pe().then(s=>i.value=s.data),(s,u)=>{var e;const h=ne;return m(),x("div",null,[U("div",Ce,[(m(!0),x(R,null,S(i.value,n=>(m(),E(h,{key:n._id,type:n._id===y.id?"success":"info",class:"cursor-pointer rounded-full px-24",size:"large",onClick:b=>p.value=n},{default:r(()=>[B(q(n.name),1)]),_:2},1032,["type","onClick"]))),128))]),(e=p.value)!=null&&e.description?(m(),E(_e,{key:0,class:"mt-12 rounded-normal text-444",content:p.value.description},null,8,["content"])):g("",!0)])}}}),we={class:"w-1120px mx-auto pt-32 pb-150px"},Ie=B("OpenApi"),Re={class:"rounded-normal w-full border border-solid border-blue/30 overflow-hidden"},Ae={class:"w-full"},$e={key:0,class:"mt-18px border-line border border-solid dark:border-opacity-50 w-full p-4 overflow-hidden"},fl=$({setup(y){const{t:a}=N(),i=W(),p=k(),s=k(),u=ye(),h=[{key:"url",value:"URL"},{key:"code",value:a("common.code")},{key:"template",value:a("common.template")}],e=k({name:"",type:"url",url:"",jsonData:"",caches:[],templateId:"",authUrl:"",customAuthorization:"",useCustomCode:!1,code:`// sample code.. 
// request.headers.Authorization='bearer xxxx'
// request.querys.token='xxxx'
// request.paths.id='xxxx'
// request.cookies.id='xxxx'
// request.body.token='xxxx'`,useCommaArray:!1,id:fe,baseUrl:""}),n=X(()=>({name:s.value?[]:[P(a("common.fieldRequiredTips")),te(1,50),ae(),re(de,a("common.nameExistsTips"))],baseUrl:[j(a("common.urlInvalidTips"))],url:e.value.type==="url"?[P(a("common.fieldRequiredTips")),j(a("common.urlInvalidTips"))]:[]})),b=k("https://openapi_template.kooboo.net"),C=_=>`${b.value}/detail?id=${_}`,T=_=>{var t;return((t=/id=(.*)/i.exec(_))==null?void 0:t[1].replace(/&.*/g,""))||""},c=()=>I(this,null,function*(){const _=Z("id");_?(s.value=!0,e.value=yield ce(_)):s.value=!1,u.init(e.value)});Y((_,t,V)=>I(this,null,function*(){_.name==="login"?V():yield u.check(e.value).then(()=>{V()}).catch(()=>{V(!1)})}));const w=()=>I(this,null,function*(){!e.value||(yield p.value.validate(),yield ve(e.value),u.init(e.value),v())}),v=()=>{i.goBackOrTo(ee({name:"openapis"}))};return A(()=>e.value.type,()=>{setTimeout(()=>{p.value.clearValidate()})}),A(()=>e.value,()=>{u.changed(e.value)},{deep:!0}),c(),(_,t)=>{const V=O,f=G,F=be,z=xe,D=he,M=H,Q=Ve,J=ge;return m(),x(R,null,[o(J,null,{default:r(()=>[U("div",we,[o(Q,null,{header:r(()=>[Ie]),default:r(()=>[o(M,{ref_key:"form",ref:p,"label-width":"138px",class:"pr-64",model:e.value,rules:d(n)},{default:r(()=>[o(f,{label:d(a)("common.name"),prop:"name"},{default:r(()=>[o(V,{modelValue:e.value.name,"onUpdate:modelValue":t[0]||(t[0]=l=>e.value.name=l),readonly:s.value,disabled:!!s.value,"data-cy":"openapi-name"},null,8,["modelValue","readonly","disabled"])]),_:1},8,["label"]),o(f,{label:"Base URL",prop:"baseUrl"},{default:r(()=>[o(V,{modelValue:e.value.baseUrl,"onUpdate:modelValue":t[1]||(t[1]=l=>e.value.baseUrl=l),placeholder:d(a)("common.optionalHttp"),"data-cy":"base-url"},null,8,["modelValue","placeholder"])]),_:1}),s.value?g("",!0):(m(),E(f,{key:0,label:d(a)("common.type")},{default:r(()=>[o(z,{modelValue:e.value.type,"onUpdate:modelValue":t[2]||(t[2]=l=>e.value.type=l),class:"el-radio-group--rounded"},{default:r(()=>[(m(),x(R,null,S(h,l=>o(F,{key:l.key,label:l.key,"data-cy":`type-${l.key}`},{default:r(()=>[B(q(l.value),1)]),_:2},1032,["label","data-cy"])),64))]),_:1},8,["modelValue"])]),_:1},8,["label"])),e.value.type=="url"?(m(),E(f,{key:1,prop:"url",label:d(a)("common.url")},{default:r(()=>[o(V,{modelValue:e.value.url,"onUpdate:modelValue":t[3]||(t[3]=l=>e.value.url=l),placeholder:"https://generator3.swagger.io/openapi.json","data-cy":"url",onInput:t[4]||(t[4]=l=>e.value.url=e.value.url.replace(/\s+/g,""))},null,8,["modelValue"])]),_:1},8,["label"])):g("",!0),e.value.type==="code"?(m(),E(f,{key:2},{default:r(()=>[U("div",Re,[o(L,{modelValue:e.value.jsonData,"onUpdate:modelValue":t[5]||(t[5]=l=>e.value.jsonData=l),class:"h-64",language:"json"},null,8,["modelValue"])])]),_:1})):g("",!0),e.value.type=="template"?(m(),E(f,{key:3},{default:r(()=>[o(Te,{id:T(e.value.url),onChange:t[6]||(t[6]=l=>{e.value.templateId=l._id,e.value.baseUrl=l.baseUrl,e.value.url=C(l._id),e.value.name||(e.value.name=l.name),e.value.authUrl=l.authUrl})},null,8,["id"])]),_:1})):g("",!0),o(f,{label:d(a)("common.cache")},{default:r(()=>[o(Ue,{list:e.value.caches},null,8,["list"])]),_:1},8,["label"]),o(f,{label:d(a)("common.useCommaArray")},{default:r(()=>[o(D,{modelValue:e.value.useCommaArray,"onUpdate:modelValue":t[7]||(t[7]=l=>e.value.useCommaArray=l),"data-cy":"enable-comma-array"},null,8,["modelValue"])]),_:1},8,["label"]),o(f,{label:d(a)("common.customAuth")},{default:r(()=>[U("div",Ae,[o(D,{modelValue:e.value.useCustomCode,"onUpdate:modelValue":t[8]||(t[8]=l=>e.value.useCustomCode=l),"data-cy":"enable-custom-auth"},null,8,["modelValue"]),e.value.useCustomCode?(m(),x("div",$e,[o(L,{modelValue:e.value.code,"onUpdate:modelValue":t[9]||(t[9]=l=>e.value.code=l),class:"h-64",language:"typescript","k-script":""},null,8,["modelValue"])])):g("",!0)])]),_:1},8,["label"])]),_:1},8,["model","rules"])]),_:1})])]),_:1}),o(K,{back:"",permission:{feature:"openApi",action:"edit"},onCancel:v,onSave:w})],64)}}});export{fl as default};