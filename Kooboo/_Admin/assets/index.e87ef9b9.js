var I=(w,f,u)=>new Promise((o,t)=>{var _=r=>{try{k(u.next(r))}catch(p){t(p)}},m=r=>{try{k(u.throw(r))}catch(p){t(p)}},k=r=>r.done?o(r.value):Promise.resolve(r.value).then(_,m);k((u=u.apply(w,f)).next())});import{g as M,w as P}from"./i18n.25caaace.js";import{_ as _e}from"./index.214551b7.js";import{B as be}from"./breadcrumb.bcaeaf75.js";import{c as ye,r as ge}from"./index.20e420e8.js";import{l as Ve,n as ke,o as xe,u as we,p as Se,q as Ee,s as $e}from"./commerce.9fdd3168.js";import{u as Te}from"./email.c84e7645.js";import{_ as ue}from"./index.47274d5a.js";import{_ as ee}from"./index.50326354.js";import{a as R,u as Ce,b as he,w as Ue}from"./validate.f3c0b03b.js";import{_ as Ne,aa as De}from"./dev-mode.d22f2f80.js";import{_ as Ae}from"./index.90b2a9af.js";import{E as le,a as oe,c as me}from"./index.960b9732.js";import{E as G,a as X}from"./index.94998415.js";import{E as Be}from"./index.2e51d36e.js";import{E as re,a as ie}from"./index.5b499f72.js";import{E as qe}from"./index.e281bb71.js";import{E as te}from"./index.f571dfc9.js";import{E as W}from"./index.a5d96e5a.js";import{d as L,g,i as J,K as je,o as d,j as $,w as l,b as e,u as c,a as U,b6 as O,F as B,f as b,k as D,aH as j,t as h}from"./url.8f5ec20c.js";import{E as z}from"./windi.a815125a.js";import{E as ae}from"./index.e9f8834a.js";import{E as Ie}from"./index.db6dfc3c.js";import{E as de}from"./index.537a2de2.js";import{_ as pe}from"./k-table.c13bd7f5.js";import{u as ce}from"./use-date.55b953fa.js";import{E as ve}from"./index.5388dbc8.js";import{E as fe}from"./index.158cdd11.js";import{E as Le,a as Oe}from"./index.bee5f1ae.js";import{E as Re}from"./index.92411976.js";import"./replace-all.b35629e7.js";import"./main.1c3b59e3.js";import"./index.50c16ae5.js";import"./preload-helper.13a99eb0.js";/* empty css                                                               */import"./plugin-vue_export-helper.21dcd24c.js";import"./plugin-vue_export-helper.41ffa612.js";import"./index.c6488b3c.js";import"./error.7e8331f1.js";import"./classCompletion.a22e38a6.js";import"./userWorker.b3a6730b.js";import"./editor.main.d2800f63.js";import"./guid.c1a40312.js";import"./vuedraggable.umd.5305b990.js";import"./cloneDeep.f12cadc0.js";import"./_baseClone.885c975f.js";import"./_baseIsEqual.0a4e01e5.js";import"./index.878e2bbf.js";import"./index.7247b296.js";import"./index.adb17f32.js";import"./index.b065185c.js";import"./index.ab12ea9e.js";import"./index.b1b64a44.js";import"./style.1b77b3a2.js";import"./toNumber.6efebd6a.js";import"./config.e9159c41.js";import"./dark.bb3c8a6e.js";import"./page.729fa09e.js";import"./index.60799c00.js";import"./index.1d16d007.js";import"./scroll.0cf77af8.js";import"./aria.75ec5909.js";import"./event.53b2ad83.js";import"./focus-trap.81e4fb05.js";import"./isNil.98bb3b88.js";import"./validator.9b0d789f.js";import"./index.f9c89813.js";import"./index.1e7e06b8.js";import"./index.a0b57910.js";import"./dropdown.fed924b2.js";import"./refs.d2253dd4.js";import"./use-copy-text.dc8d5085.js";import"./index.7c7fa606.js";import"./toggleComment.5b29ca87.js";import"./use-save-tip.63213ba1.js";import"./confirm.629bcef4.js";import"./logo-transparent.1566007e.js";import"./icon-button.0e134c9b.js";import"./index.0c2ced08.js";import"./index.5d366322.js";import"./index.3be79fd5.js";import"./index.925df86b.js";import"./index.378f5080.js";import"./index.64203830.js";import"./alert.8fe5500a.js";import"./index.84e4a218.js";import"./media-list.vue_vue_type_style_index_0_scoped_true_lang.6e849230.js";/* empty css                                                          */import"./file.9f559d69.js";/* empty css                                                          *//* empty css                                                                 */import"./use-file-upload.beffa25f.js";/* empty css                                                         */import"./image-editor.vue_vue_type_style_index_0_scoped_true_lang.e5d64b31.js";import"./image-editor.e294b472.js";import"./main.esm.8d4b9329.js";import"./index.1be51314.js";import"./_baseUniq.549af2de.js";import"./_baseIndexOf.4d7985be.js";import"./event.776e7e11.js";import"./isEqual.2e410d13.js";import"./debounce.730e1961.js";import"./index.c93fe8e7.js";import"./index.e3f90979.js";import"./sortable.esm.a99254e8.js";import"./index.a9a077b4.js";import"./dayjs.min.2044f1dd.js";const Me={class:"flex items-center space-x-8 w-full"},Fe={key:0,class:"border border-line rounded-normal p-8"},Je=L({props:{modelValue:{type:Boolean},events:null,model:null},emits:["update:model-value","success"],setup(w,{emit:f}){var a,E,V;const u=w,o=g(),{t}=M(),_=g(!0),m=g(!!((E=(a=u.model)==null?void 0:a.sendToAddresses)!=null&&E.length)),k=g("preview"),r=g(),p=[{key:"preview",value:t("common.preview")},{key:"code",value:t("common.code")}],i=g(JSON.parse(JSON.stringify((V=u.model)!=null?V:{event:"",subjectTemplate:"",bodyTemplate:"",sendToCustomer:!0,sendToAddresses:[]}))),n={event:[R(t("common.eventRequiredTips"))]};function x(){return I(this,null,function*(){yield o.value.validate(),f("success",i.value),_.value=!1})}return J([()=>k.value,()=>i.value.event],()=>I(this,null,function*(){k.value!="preview"||!i.value.event||(yield je(),r.value=yield Ve(i.value))}),{immediate:!0}),J(()=>i.value.event,()=>{const y=u.events.find(s=>s.name==i.value.event);y&&(i.value.subjectTemplate=y.mailSubjectTemplate,i.value.bodyTemplate=y.mailBodyTemplate)}),J(()=>m.value,()=>{m.value||(i.value.sendToAddresses=[])}),(y,s)=>{const v=le,C=oe,q=G,N=Be,F=re,Q=ie,Y=qe,Z=ue,S=te,K=X,H=W;return d(),$(H,{modelValue:_.value,"onUpdate:modelValue":s[8]||(s[8]=A=>_.value=A),width:"800px","close-on-click-modal":!1,title:c(t)("common.emailNotifications"),onClosed:s[9]||(s[9]=A=>f("update:model-value",!1))},{footer:l(()=>[e(ee,{onConfirm:x,onCancel:s[7]||(s[7]=A=>_.value=!1)})]),default:l(()=>[e(K,{ref_key:"form",ref:o,model:i.value,"label-position":"top",rules:n,class:"space-y-12"},{default:l(()=>{var A,ne,se;return[e(q,{label:c(t)("common.event"),prop:"event"},{default:l(()=>[e(C,{modelValue:i.value.event,"onUpdate:modelValue":s[0]||(s[0]=T=>i.value.event=T),placeholder:c(t)("common.pleaseSelect"),class:"w-full"},{default:l(()=>[(d(!0),U(B,null,O(w.events,T=>(d(),$(v,{key:T.name,value:T.name,label:T.display},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),e(q,{label:c(t)("common.sendTo")},{default:l(()=>[b("div",Me,[e(N,{modelValue:i.value.sendToCustomer,"onUpdate:modelValue":s[1]||(s[1]=T=>i.value.sendToCustomer=T),class:"flex-shrink-0",label:c(t)("common.customer")},null,8,["modelValue","label"]),e(N,{modelValue:m.value,"onUpdate:modelValue":s[2]||(s[2]=T=>m.value=T),class:"flex-shrink-0",label:c(t)("common.partner")},null,8,["modelValue","label"]),m.value?(d(),$(Ae,{key:0,modelValue:i.value.sendToAddresses,"onUpdate:modelValue":s[3]||(s[3]=T=>i.value.sendToAddresses=T),class:"flex-1 w-full","disable-query":"","input-value":i.value.sendToAddresses,"data-cy":"bcc"},null,8,["modelValue","input-value"])):D("",!0)])]),_:1},8,["label"]),i.value.event?(d(),U(B,{key:0},[e(Q,{modelValue:k.value,"onUpdate:modelValue":s[4]||(s[4]=T=>k.value=T),class:"el-radio-group--rounded"},{default:l(()=>[(d(),U(B,null,O(p,T=>e(F,{key:T.key,label:T.key},{default:l(()=>[j(h(T.value),1)]),_:2},1032,["label"])),64))]),_:1},8,["modelValue"]),k.value=="preview"?(d(),U("div",Fe,[b("h1",null,"Subject: "+h((A=r.value)==null?void 0:A.subjectTemplate),1),e(Y,{class:"my-12"}),e(Z,{class:"h-300px",content:(se=(ne=r.value)==null?void 0:ne.bodyTemplate)!=null?se:""},null,8,["content"])])):(d(),U(B,{key:1},[e(q,{label:c(t)("common.subject"),prop:"subjectTemplate"},{default:l(()=>[e(S,{modelValue:i.value.subjectTemplate,"onUpdate:modelValue":s[5]||(s[5]=T=>i.value.subjectTemplate=T)},null,8,["modelValue"])]),_:1},8,["label"]),e(q,{label:c(t)("common.content"),prop:"bodyTemplate"},{default:l(()=>[e(Ne,{modelValue:i.value.bodyTemplate,"onUpdate:modelValue":s[6]||(s[6]=T=>i.value.bodyTemplate=T),class:"border border-999",language:"html","k-script":""},null,8,["modelValue"])]),_:1},8,["label"])],64))],64)):D("",!0)]}),_:1},8,["model"])]),_:1},8,["modelValue","title"])}}}),Pe={class:"space-y-4 w-full"},We={class:"text-666 dark:text-fff/67 flex items-center pl-16 pr-8 w-full border-line dark:border-666 rounded-normal border border-solid ellipsis bg-fff dark:bg-[#333]","data-cy":"added-item"},ze={class:"overflow-hidden leading-40px flex-1 mr-8 ellipsis","data-cy":"text"},Ke={class:"p-4"},He={class:"p-4"},Ge=L({props:{items:null,events:null},setup(w){const f=w,u=g(!1),o=g();function t(){o.value=void 0,u.value=!0}function _(r){if(o.value){const p=f.items.indexOf(o.value);f.items.splice(p,1,r)}else f.items.push(r)}function m(r){o.value=r,u.value=!0}function k(r){f.items.splice(r,1)}return(r,p)=>{const i=me,n=z,x=ae;return d(),U("div",Pe,[(d(!0),U(B,null,O(w.items,(a,E)=>{var V;return d(),U("div",{key:E},[b("div",We,[b("div",ze,h((V=w.events.find(y=>y.name==a.event))==null?void 0:V.description),1),b("div",null,[e(i,{round:""},{default:l(()=>{var y;return[j(h((y=w.events.find(s=>s.name==a.event))==null?void 0:y.display),1)]}),_:2},1024)]),b("div",Ke,[e(n,{class:"iconfont icon-a-setup cursor-pointer","data-cy":"edit",onClick:P(y=>m(a),["stop"])},null,8,["onClick"])]),b("div",He,[e(n,{class:"text-orange iconfont icon-delete cursor-pointer",color:"#fab6b6","data-cy":"remove",onClick:P(y=>k(E),["stop"])},null,8,["onClick"])])])])}),128)),e(x,{circle:"","data-cy":"add",onClick:t},{default:l(()=>[e(n,{class:"text-blue iconfont icon-a-addto"})]),_:1}),b("div",null,[u.value?(d(),$(Je,{key:0,modelValue:u.value,"onUpdate:modelValue":p[0]||(p[0]=a=>u.value=a),events:w.events,model:o.value,onSuccess:_},null,8,["modelValue","events","model"])):D("",!0)])])}}}),Xe=L({props:{modelValue:{type:Boolean},model:null},emits:["update:model-value","success"],setup(w,{emit:f}){var p;const u=w,o=g(),{t}=M(),_=g(!0),m=g(JSON.parse(JSON.stringify((p=u.model)!=null?p:{server:"",port:"",ssl:!1,userName:"",password:""}))),k={server:[Ce(t("common.urlInvalid")),R(t("common.serverUrlRequiredTips"))],port:[he()],userName:[R(t("common.inputUsernameTips"))],password:[R(t("common.inputPasswordTips"))]};function r(){return I(this,null,function*(){yield o.value.validate(),f("success",m.value),_.value=!1})}return(i,n)=>{const x=te,a=G,E=Ie,V=de,y=X,s=W;return d(),$(s,{modelValue:_.value,"onUpdate:modelValue":n[6]||(n[6]=v=>_.value=v),width:"600px","close-on-click-modal":!1,title:`smtp ${c(t)("common.setting")}`,onClosed:n[7]||(n[7]=v=>f("update:model-value",!1))},{footer:l(()=>[e(ee,{onConfirm:r,onCancel:n[5]||(n[5]=v=>_.value=!1)})]),default:l(()=>[e(y,{ref_key:"form",ref:o,model:m.value,"label-position":"top",rules:k,class:"space-y-12"},{default:l(()=>[e(a,{label:c(t)("common.server"),prop:"server"},{default:l(()=>[e(x,{modelValue:m.value.server,"onUpdate:modelValue":n[0]||(n[0]=v=>m.value.server=v),placeholder:"smtp.qq.com"},null,8,["modelValue"])]),_:1},8,["label"]),e(a,{label:c(t)("common.port")},{default:l(()=>[e(E,{modelValue:m.value.port,"onUpdate:modelValue":n[1]||(n[1]=v=>m.value.port=v),modelModifiers:{number:!0},placeholder:"587"},null,8,["modelValue"])]),_:1},8,["label"]),e(a,{label:"ssl"},{default:l(()=>[e(V,{modelValue:m.value.ssl,"onUpdate:modelValue":n[2]||(n[2]=v=>m.value.ssl=v)},null,8,["modelValue"])]),_:1}),e(a,{label:c(t)("common.account"),prop:"userName"},{default:l(()=>[e(x,{modelValue:m.value.userName,"onUpdate:modelValue":n[3]||(n[3]=v=>m.value.userName=v),placeholder:"xxx@qq.com"},null,8,["modelValue"])]),_:1},8,["label"]),e(a,{label:c(t)("common.password"),prop:"password"},{default:l(()=>[e(x,{modelValue:m.value.password,"onUpdate:modelValue":n[4]||(n[4]=v=>m.value.password=v),type:"password"},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model"])]),_:1},8,["modelValue","title"])}}}),Qe=L({props:{modelValue:{type:Boolean},events:null,model:null},emits:["update:model-value","success"],setup(w,{emit:f}){var p;const u=w,o=g(),{t}=M(),_=g(!0),m=g(JSON.parse(JSON.stringify((p=u.model)!=null?p:{event:"",url:""}))),k={url:[Ue(t("common.urlInvalid")),R(t("common.urlRequiredTips"))],event:[R(t("common.eventRequiredTips"))]};function r(){return I(this,null,function*(){yield o.value.validate(),f("success",m.value),_.value=!1})}return(i,n)=>{const x=le,a=oe,E=G,V=te,y=X,s=W;return d(),$(s,{modelValue:_.value,"onUpdate:modelValue":n[3]||(n[3]=v=>_.value=v),width:"600px","close-on-click-modal":!1,title:"Webhook",onClosed:n[4]||(n[4]=v=>f("update:model-value",!1))},{footer:l(()=>[e(ee,{onConfirm:r,onCancel:n[2]||(n[2]=v=>_.value=!1)})]),default:l(()=>[e(y,{ref_key:"form",ref:o,model:m.value,"label-position":"top",rules:k,class:"space-y-12"},{default:l(()=>[e(E,{label:c(t)("common.event"),prop:"event"},{default:l(()=>[e(a,{modelValue:m.value.event,"onUpdate:modelValue":n[0]||(n[0]=v=>m.value.event=v),placeholder:c(t)("common.pleaseSelect"),class:"w-full"},{default:l(()=>[(d(!0),U(B,null,O(w.events,v=>(d(),$(x,{key:v.name,value:v.name,label:v.display},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),e(E,{label:"URL",prop:"url"},{default:l(()=>[e(V,{modelValue:m.value.url,"onUpdate:modelValue":n[1]||(n[1]=v=>m.value.url=v)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])}}}),Ye={class:"space-y-4 w-full"},Ze={class:"text-666 dark:text-fff/67 flex items-center pl-16 pr-8 w-full border-line dark:border-666 rounded-normal border border-solid ellipsis bg-fff dark:bg-[#333]","data-cy":"added-item"},el={class:"overflow-hidden leading-40px flex-1 mr-8 ellipsis","data-cy":"text"},ll={class:"p-4"},ol={class:"p-4"},tl=L({props:{items:null,events:null},setup(w){const f=w,u=g(!1),o=g();function t(){o.value=void 0,u.value=!0}function _(r){if(o.value){const p=f.items.indexOf(o.value);f.items.splice(p,1,r)}else f.items.push(r)}function m(r){o.value=r,u.value=!0}function k(r){f.items.splice(r,1)}return(r,p)=>{const i=me,n=z,x=ae;return d(),U("div",Ye,[(d(!0),U(B,null,O(w.items,(a,E)=>{var V;return d(),U("div",{key:E},[b("div",Ze,[b("div",el,h((V=w.events.find(y=>y.name==a.event))==null?void 0:V.description),1),b("div",null,[e(i,{round:""},{default:l(()=>{var y;return[j(h((y=w.events.find(s=>s.name==a.event))==null?void 0:y.display),1)]}),_:2},1024)]),b("div",ll,[e(n,{class:"iconfont icon-a-setup cursor-pointer","data-cy":"edit",onClick:P(y=>m(a),["stop"])},null,8,["onClick"])]),b("div",ol,[e(n,{class:"text-orange iconfont icon-delete cursor-pointer",color:"#fab6b6","data-cy":"remove",onClick:P(y=>k(E),["stop"])},null,8,["onClick"])])])])}),128)),e(x,{circle:"","data-cy":"add",onClick:t},{default:l(()=>[e(n,{class:"text-blue iconfont icon-a-addto"})]),_:1}),b("div",null,[u.value?(d(),$(Qe,{key:0,modelValue:u.value,"onUpdate:modelValue":p[0]||(p[0]=a=>u.value=a),events:w.events,model:o.value,onSuccess:_},null,8,["modelValue","events","model"])):D("",!0)])])}}}),al=["onClick"],nl=L({props:{modelValue:{type:Boolean}},emits:["update:model-value"],setup(w,{emit:f}){const{t:u}=M(),o=g(!0),t=g(),_=g(!1),m=g(),k=r=>I(this,null,function*(){t.value=yield ke({pagenr:r})});return k(),(r,p)=>{var y;const i=ve,n=z,x=fe,a=pe,E=W,V=ue;return d(),U(B,null,[e(E,{modelValue:o.value,"onUpdate:modelValue":p[0]||(p[0]=s=>o.value=s),width:"1000px","close-on-click-modal":!1,title:c(u)("common.log"),onClosed:p[1]||(p[1]=s=>f("update:model-value",!1))},{default:l(()=>{var s,v,C,q;return[t.value?(d(),$(a,{key:0,data:(s=t.value)==null?void 0:s.dataList,pagination:{currentPage:(v=t.value)==null?void 0:v.pageNr,pageCount:(C=t.value)==null?void 0:C.totalPages,pageSize:(q=t.value)==null?void 0:q.pageSize},onChange:k},{default:l(()=>[e(i,{label:c(u)("common.email")},{default:l(({row:N})=>[b("span",null,h(N.address),1)]),_:1},8,["label"]),e(i,{label:c(u)("common.event"),width:"180"},{default:l(({row:N})=>[b("span",null,h(N.event),1)]),_:1},8,["label"]),e(i,{label:c(u)("common.content")},{default:l(({row:N})=>[b("span",{class:"text-blue cursor-pointer",onClick:F=>{m.value=N,_.value=!0}},h(N.subject),9,al)]),_:1},8,["label"]),e(i,{label:c(u)("common.dateTime"),width:"180"},{default:l(({row:N})=>[b("span",null,h(c(ce)(new Date(N.timestamp))),1)]),_:1},8,["label"]),e(i,{label:c(u)("common.status"),width:"80",align:"center"},{default:l(({row:N})=>[!N.sent&&N.errorCount?(d(),$(x,{key:0,placement:"top-start",content:N.error},{default:l(()=>[e(n,{class:"iconfont icon-fasongshibai text-orange"})]),_:2},1032,["content"])):D("",!0),N.sent?(d(),$(x,{key:1,placement:"top-start",content:c(u)("common.deliverySuccessful")},{default:l(()=>[e(n,{class:"iconfont icon-fasongchenggong text-green"})]),_:1},8,["content"])):D("",!0)]),_:1},8,["label"])]),_:1},8,["data","pagination"])):D("",!0)]}),_:1},8,["modelValue","title"]),m.value?(d(),$(E,{key:0,modelValue:_.value,"onUpdate:modelValue":p[2]||(p[2]=s=>_.value=s),title:(y=m.value)==null?void 0:y.subject,width:"1200px"},{default:l(()=>{var s;return[e(V,{class:"h-600px",content:(s=m.value)==null?void 0:s.content},null,8,["content"])]}),_:1},8,["modelValue","title"])):D("",!0)],64)}}}),sl=["onClick"],ul={class:"max-h-600px overflow-auto"},ml=L({props:{modelValue:{type:Boolean}},emits:["update:model-value"],setup(w,{emit:f}){const{t:u}=M(),o=g(!0),t=g(),_=g(!1),m=g(),k=r=>I(this,null,function*(){t.value=yield xe({pagenr:r})});return k(),(r,p)=>{const i=ve,n=z,x=fe,a=pe,E=W;return d(),U(B,null,[e(E,{modelValue:o.value,"onUpdate:modelValue":p[0]||(p[0]=V=>o.value=V),width:"1000px","close-on-click-modal":!1,title:c(u)("common.log"),onClosed:p[1]||(p[1]=V=>f("update:model-value",!1))},{default:l(()=>{var V,y,s,v;return[t.value?(d(),$(a,{key:0,data:(V=t.value)==null?void 0:V.dataList,pagination:{currentPage:(y=t.value)==null?void 0:y.pageNr,pageCount:(s=t.value)==null?void 0:s.totalPages,pageSize:(v=t.value)==null?void 0:v.pageSize},onChange:k},{default:l(()=>[e(i,{label:"URL"},{default:l(({row:C})=>[b("span",null,h(C.address),1)]),_:1}),e(i,{label:c(u)("common.event"),width:"180"},{default:l(({row:C})=>[b("span",null,h(C.event),1)]),_:1},8,["label"]),e(i,{label:c(u)("common.content")},{default:l(({row:C})=>[b("span",{class:"text-blue cursor-pointer truncate",onClick:q=>{m.value=C,_.value=!0}},h(C.content),9,sl)]),_:1},8,["label"]),e(i,{label:c(u)("common.dateTime"),width:"180"},{default:l(({row:C})=>[b("span",null,h(c(ce)(new Date(C.timestamp))),1)]),_:1},8,["label"]),e(i,{label:c(u)("common.status"),width:"80",align:"center"},{default:l(({row:C})=>[!C.sent&&C.errorCount?(d(),$(x,{key:0,placement:"top-start",content:C.error},{default:l(()=>[e(n,{class:"iconfont icon-fasongshibai text-orange"})]),_:2},1032,["content"])):D("",!0),C.sent?(d(),$(x,{key:1,placement:"top-start",content:c(u)("common.success")},{default:l(()=>[e(n,{class:"iconfont icon-fasongchenggong text-green"})]),_:1},8,["content"])):D("",!0)]),_:1},8,["label"])]),_:1},8,["data","pagination"])):D("",!0)]}),_:1},8,["modelValue","title"]),m.value?(d(),$(E,{key:0,modelValue:_.value,"onUpdate:modelValue":p[2]||(p[2]=V=>_.value=V),title:c(u)("common.content"),width:"1200px"},{default:l(()=>[b("div",ul,[e(De,{data:JSON.parse(m.value.content)},null,8,["data"])])]),_:1},8,["modelValue","title"])):D("",!0)],64)}}}),rl={class:"p-24 pb-150px"},il={class:"rounded-normal bg-fff dark:bg-[#252526] mt-16 mb-24 py-24 px-56px relative"},dl={class:"max-w-504px"},pl={key:0,class:"flex items-center space-x-8"},cl={class:"text-s text-999"},vl={class:"text-s text-999"},fl={class:"text-s text-999"},_l=j("Sending Log"),bl={key:0,class:"rounded-normal bg-fff dark:bg-[#252526] mt-16 mb-24 py-24 px-56px relative"},yl={class:"max-w-504px"},gl={class:"flex items-center"},Vl=b("span",null,"Webhooks",-1),kl=j('SHA256Hash(request.body+secret)== request.header["X-Kooboo-Hmac-SHA256"]'),xl=j("Sending Log"),wt=L({setup(w){const{t:f}=M(),u=we(),o=g(),t=g([]),_=g([]),m=Te(),k=g(!1),r=g(!1),p=g(!1);Se().then(x=>t.value=x),Ee().then(x=>_.value=x);const i=[{key:"kooboo",value:"Kooboo"},{key:"custom",value:f("common.custom")}],n=()=>I(this,null,function*(){yield $e(o.value),u.loadSettings(),ge()});return J(()=>u.settings,()=>{o.value=JSON.parse(JSON.stringify(u.settings))},{immediate:!0}),J(()=>{var x;return(x=o.value)==null?void 0:x.mailServerType},()=>{var x;((x=o.value)==null?void 0:x.mailServerType)=="kooboo"&&m.loadAddress("addresses")},{immediate:!0}),ye("save",n),(x,a)=>{const E=de,V=G,y=re,s=ie,v=ae,C=le,q=oe,N=z,F=Le,Q=Oe,Y=Re,Z=X;return d(),U("div",rl,[e(be,{name:c(f)("commerce.notificationSettings")},null,8,["name"]),o.value?(d(),$(Z,{key:0,"label-position":"top"},{default:l(()=>[b("div",il,[b("div",dl,[e(V,{label:c(f)("common.enableEmailNotification")},{default:l(()=>[e(E,{modelValue:o.value.enableEmailNotification,"onUpdate:modelValue":a[0]||(a[0]=S=>o.value.enableEmailNotification=S)},null,8,["modelValue"])]),_:1},8,["label"]),e(V,{label:c(f)("common.mailServer")},{default:l(()=>[e(s,{modelValue:o.value.mailServerType,"onUpdate:modelValue":a[1]||(a[1]=S=>o.value.mailServerType=S),class:"el-radio-group--rounded"},{default:l(()=>[(d(),U(B,null,O(i,S=>e(y,{key:S.key,label:S.key},{default:l(()=>[j(h(S.value),1)]),_:2},1032,["label"])),64))]),_:1},8,["modelValue"])]),_:1},8,["label"]),e(V,null,{default:l(()=>{var S,K,H;return[o.value.mailServerType=="custom"?(d(),U("div",pl,[e(v,{type:"primary",size:"small",round:"",onClick:a[2]||(a[2]=A=>k.value=!0)},{default:l(()=>[j(h(c(f)("common.setServerInfo")),1)]),_:1}),b("span",cl,h((S=o.value.customMailServer)==null?void 0:S.server),1),b("span",vl,h((K=o.value.customMailServer)==null?void 0:K.port),1),b("span",fl,h((H=o.value.customMailServer)==null?void 0:H.userName),1)])):(d(),$(q,{key:1,modelValue:o.value.koobooEmailAddress,"onUpdate:modelValue":a[3]||(a[3]=A=>o.value.koobooEmailAddress=A),placeholder:c(f)("common.pleaseSelect"),class:"w-250px"},{default:l(()=>[(d(!0),U(B,null,O(c(m).addressList.filter(A=>A.addressType!=="Wildcard"),A=>(d(),$(C,{key:A.id,value:A.address,label:A.address},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"]))]}),_:1}),e(V,{label:c(f)("common.event")},{default:l(()=>[e(Ge,{items:o.value.emailNotifications,events:t.value},null,8,["items","events"])]),_:1},8,["label"])]),e(v,{round:"",size:"small",type:"primary",class:"absolute top-24 right-32",plain:"",onClick:a[4]||(a[4]=S=>r.value=!0)},{default:l(()=>[_l]),_:1}),k.value?(d(),$(Xe,{key:0,modelValue:k.value,"onUpdate:modelValue":a[5]||(a[5]=S=>k.value=S),model:o.value.customMailServer,onSuccess:a[6]||(a[6]=S=>o.value.customMailServer=S)},null,8,["modelValue","model"])):D("",!0)]),o.value?(d(),U("div",bl,[b("div",yl,[e(V,{label:c(f)("common.enableWebhook")},{default:l(()=>[e(E,{modelValue:o.value.enableWebhook,"onUpdate:modelValue":a[7]||(a[7]=S=>o.value.enableWebhook=S)},null,8,["modelValue"])]),_:1},8,["label"]),e(V,null,{label:l(()=>[b("div",gl,[Vl,e(Y,{placement:"top-start",width:"600"},{reference:l(()=>[e(N,{class:"ml-4 iconfont icon-problem",onClick:a[8]||(a[8]=P(()=>{},["prevent"]))})]),default:l(()=>[e(Q,{title:c(f)("common.webhookDescription"),column:1,border:""},{default:l(()=>[e(F,{label:"secret"},{default:l(()=>[j(h(o.value.webhookSecret),1)]),_:1}),e(F,{label:"Verification"},{default:l(()=>[kl]),_:1})]),_:1},8,["title"])]),_:1})])]),default:l(()=>[e(tl,{events:_.value,items:o.value.webhooks},null,8,["events","items"])]),_:1})]),e(v,{round:"",size:"small",type:"primary",class:"absolute top-24 right-32",plain:"",onClick:a[9]||(a[9]=S=>p.value=!0)},{default:l(()=>[xl]),_:1})])):D("",!0)]),_:1})):D("",!0),r.value?(d(),$(nl,{key:1,modelValue:r.value,"onUpdate:modelValue":a[10]||(a[10]=S=>r.value=S)},null,8,["modelValue"])):D("",!0),p.value?(d(),$(ml,{key:2,modelValue:p.value,"onUpdate:modelValue":a[11]||(a[11]=S=>p.value=S)},null,8,["modelValue"])):D("",!0),e(_e,{"hidden-cancel":"",onSave:n})])}}});export{wt as default};
