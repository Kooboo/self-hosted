var y=(g,m,o)=>new Promise((r,l)=>{var p=e=>{try{s(o.next(e))}catch(c){l(c)}},u=e=>{try{s(o.throw(e))}catch(c){l(c)}},s=e=>e.done?r(e.value):Promise.resolve(e.value).then(p,u);s((o=o.apply(g,m)).next())});import{a as F,g as T,b as q,c as S,d as P}from"./user.f84e12ea.js";import{a as C}from"./validate.238a9986.js";import{_ as j}from"./index.7a75fca3.js";import{g as w}from"./i18n.bcd18f8a.js";import{E as z,a as A,c as H}from"./index.6d22f937.js";import{E as L,a as O}from"./index.6d63eb53.js";import{E as G}from"./index.d4a6b2d5.js";import{d as I,g as _,o as d,j as b,w as n,b as a,u as i,a as E,b6 as x,F as V,b7 as J,f as B,e as K,aH as h,t as D,k as M}from"./url.8f5ec20c.js";import{E as Q}from"./windi.19264205.js";import{E as W}from"./index.aec72f69.js";import{_ as X}from"./k-table.7d05e82e.js";import{B as Y}from"./breadcrumb.edaec300.js";import{b as Z}from"./confirm.eadb49f1.js";import{E as ee}from"./index.b83a1079.js";import"./replace-all.d441bf14.js";import"./main.582f9de6.js";import"./index.50c16ae5.js";import"./preload-helper.13a99eb0.js";import"./index.2341329b.js";import"./index.bda83f28.js";import"./index.bff48780.js";import"./index.649f6c77.js";import"./index.a32fb6e5.js";import"./style.9c8f6403.js";import"./toNumber.6efebd6a.js";import"./_baseIsEqual.547729d3.js";import"./index.5cbbc5d7.js";import"./event.776e7e11.js";import"./index.05e21f33.js";import"./error.7e8331f1.js";import"./isNil.98bb3b88.js";import"./index.ec6ad7db.js";import"./focus-trap.eafcfd1f.js";import"./event.53b2ad83.js";import"./index.79f78425.js";import"./index.c80f5028.js";import"./scroll.4888a9e9.js";import"./isEqual.11d86bcc.js";import"./debounce.730e1961.js";import"./index.9a83ee01.js";import"./validator.b73911a9.js";import"./_baseClone.eeff2792.js";import"./index.a3d8335f.js";import"./refs.d2253dd4.js";import"./sortable.esm.a99254e8.js";import"./icon-button.315b6443.js";import"./index.3a977dfb.js";import"./index.564bc658.js";import"./index.daafc4da.js";import"./index.59b1471f.js";/* empty css                                                               */import"./plugin-vue_export-helper.21dcd24c.js";import"./plugin-vue_export-helper.41ffa612.js";import"./logo-transparent.1566007e.js";import"./index.10f642b2.js";import"./aria.75ec5909.js";const oe=I({props:{modelValue:{type:Boolean}},emits:["update:modelValue","reload"],setup(g,{emit:m}){const{t:o}=w(),r=_([]),l=_([]);F().then(v=>{r.value=v,r.value.length&&(e.value.userId=r.value[0].userId)}),T().then(v=>{l.value=v,l.value.length&&(e.value.role=l.value[0])});const p={userId:C(o("common.userRequired")),role:C(o("common.roleRequiredTips"))},u=_(!0),s=_(),e=_({userId:"",role:""}),c=()=>y(this,null,function*(){yield s.value.validate(),yield q(e.value),u.value=!1,m("reload")});return(v,f)=>{const U=z,$=A,k=L,N=O,R=G;return d(),b(R,{"model-value":u.value,width:"600px","close-on-click-modal":!1,title:i(o)("common.addUser"),onClosed:f[3]||(f[3]=t=>m("update:modelValue",!1))},{footer:n(()=>[a(j,{"confirm-label":i(o)("common.add"),onConfirm:c,onCancel:f[2]||(f[2]=t=>u.value=!1)},null,8,["confirm-label"])]),default:n(()=>[a(N,{ref_key:"form",ref:s,"label-position":"top",model:e.value,rules:i(p)},{default:n(()=>[a(k,{label:i(o)("common.availableUser"),prop:"userId"},{default:n(()=>[a($,{modelValue:e.value.userId,"onUpdate:modelValue":f[0]||(f[0]=t=>e.value.userId=t),class:"w-full","data-cy":"users"},{default:n(()=>[(d(!0),E(V,null,x(r.value,t=>(d(),b(U,{key:t.userId,value:t.userId,label:`${t.userName}<${t.email}>`,"data-cy":"user-opt"},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),a(k,{label:i(o)("common.role"),prop:"role"},{default:n(()=>[a($,{modelValue:e.value.role,"onUpdate:modelValue":f[1]||(f[1]=t=>e.value.role=t),class:"w-full","data-cy":"roles"},{default:n(()=>[(d(!0),E(V,null,x(l.value,t=>(d(),b(U,{key:t,value:t,label:t,"data-cy":"role-opt"},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model","rules"])]),_:1},8,["model-value","title"])}}}),le={class:"flex items-center py-24 space-x-16"},te={class:"flex items-center"},ae=I({emits:["reload"],setup(g){const{t:m}=w(),o=_(!1);return(r,l)=>{const p=Q,u=W,s=J("hasPermission");return d(),E(V,null,[B("div",le,[K((d(),b(u,{round:"","data-cy":"add-user",onClick:l[0]||(l[0]=e=>o.value=!0)},{default:n(()=>[B("div",te,[a(p,{class:"mr-16 iconfont icon-a-addto"}),h(" "+D(i(m)("common.addUser")),1)])]),_:1})),[[s,{feature:"siteUser",action:"edit"}]])]),o.value?(d(),b(oe,{key:0,modelValue:o.value,"onUpdate:modelValue":l[1]||(l[1]=e=>o.value=e),onReload:l[2]||(l[2]=e=>r.$emit("reload"))},null,8,["modelValue"])):M("",!0)],64)}}}),re={class:"p-24"},io=I({setup(g){const{t:m}=w(),o=_(),r=()=>y(this,null,function*(){o.value=yield S()}),l=p=>y(this,null,function*(){yield Z(p.length),yield P(p.map(u=>u.userId)),r()});return r(),(p,u)=>{var c;const s=ee,e=H;return d(),E("div",re,[a(Y,{name:i(m)("common.siteUser")},null,8,["name"]),a(ae,{onReload:r}),a(i(X),{data:(c=o.value)!=null?c:[],"show-check":"",permission:{feature:"siteUser",action:"delete"},onDelete:l},{default:n(()=>[a(s,{label:i(m)("common.username"),prop:"userName"},null,8,["label"]),a(s,{label:i(m)("common.email"),prop:"email"},null,8,["label"]),a(s,{label:i(m)("common.role")},{default:n(({row:v})=>[a(e,{size:"small",class:"rounded-full cursor-pointer","data-cy":"role"},{default:n(()=>[h(D(v.role),1)]),_:2},1024)]),_:1},8,["label"])]),_:1},8,["data"])])}}});export{io as default};