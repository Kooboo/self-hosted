var w=(x,t,s)=>new Promise((_,u)=>{var c=m=>{try{p(s.next(m))}catch(r){u(r)}},e=m=>{try{p(s.throw(m))}catch(r){u(r)}},p=m=>m.done?_(m.value):Promise.resolve(m.value).then(c,e);p((s=s.apply(x,t)).next())});import{g as I,o as B}from"./i18n.25caaace.js";import{a as T}from"./index.7247b296.js";import{x as U,L as C,H as h}from"./main.1c3b59e3.js";import{a as N,r as V,m as K,d as H,i as L,s as $}from"./validate.f3c0b03b.js";import{d as j,g as d,cd as A,i as g,o as D,a as R,f as v,t as y,u as n,b as i,w as l,F as M,b6 as O,j as Q,aH as z,x as G}from"./url.8f5ec20c.js";import{E as J}from"./index.f571dfc9.js";import{E as P,a as W}from"./index.94998415.js";import{E as X,a as Y}from"./index.960b9732.js";import{E as Z}from"./index.e9f8834a.js";import"./index.50c16ae5.js";import"./windi.a815125a.js";import"./preload-helper.13a99eb0.js";import"./replace-all.b35629e7.js";import"./index.878e2bbf.js";import"./index.adb17f32.js";import"./index.b065185c.js";import"./index.ab12ea9e.js";import"./index.b1b64a44.js";import"./style.1b77b3a2.js";import"./toNumber.6efebd6a.js";import"./_baseIsEqual.0a4e01e5.js";import"./event.776e7e11.js";import"./index.1e7e06b8.js";import"./error.7e8331f1.js";import"./isNil.98bb3b88.js";import"./_baseClone.885c975f.js";import"./isEqual.2e410d13.js";import"./index.158cdd11.js";import"./focus-trap.81e4fb05.js";import"./event.53b2ad83.js";import"./index.c6488b3c.js";import"./index.f9c89813.js";import"./scroll.0cf77af8.js";import"./debounce.730e1961.js";import"./index.c93fe8e7.js";import"./validator.9b0d789f.js";const ee={class:"text-444 dark:text-fff/86"},oe={class:"text-3l mb-8"},te={class:"text-s"},ae={class:"border-t border-b border-line dark:border-[#555] border-solid my-24 py-24"},me={class:"flex items-center space-x-8"},Ae=j({setup(x){const{t}=I(),s=d(),_=A(),u=d(!1),c=d(!1),e=d({subDomain:"",rootDomain:"",siteName:""}),p={subDomain:[N(t("common.subDomainRequiredTips")),V(1,63),K,H(e.value)],rootDomain:N(t("common.rootDomainRequiredTips")),siteName:[V(1,50),N(t("common.nameRequiredTips")),L(U,t("common.siteNameExistsTips")),$()]},m=d();T().then(f=>{s.value=f,s.value.length&&(e.value.rootDomain=s.value[0].domainName)});const r=()=>w(this,null,function*(){yield m.value.validate();const f=yield C(e.value),o=G("currentFolder");o&&(yield h({siteIds:[f.id],folderName:o})),_.push({name:"home",query:{currentFolder:o}})});return g(()=>e.value.subDomain,()=>{u.value||(e.value.siteName=e.value.subDomain)}),g(()=>e.value.siteName,()=>{c.value||(e.value.subDomain=e.value.siteName)}),(f,o)=>{const E=J,b=P,k=X,q=Y,S=W,F=Z;return D(),R("div",ee,[v("p",oe,y(n(t)("common.createSite")),1),v("p",te,y(n(t)("common.createTips")),1),v("div",ae,[i(S,{ref_key:"form",ref:m,"label-position":"top",model:e.value,rules:n(p),onKeydown:B(r,["enter"])},{default:l(()=>[i(b,{label:n(t)("common.siteName"),prop:"siteName"},{default:l(()=>[i(E,{modelValue:e.value.siteName,"onUpdate:modelValue":o[0]||(o[0]=a=>e.value.siteName=a),modelModifiers:{trim:!0},class:"w-394px","data-cy":"siteName",onInput:o[1]||(o[1]=a=>u.value=!0)},null,8,["modelValue"])]),_:1},8,["label"]),v("div",me,[i(b,{label:n(t)("common.domain"),prop:"subDomain"},{default:l(()=>[i(E,{modelValue:e.value.subDomain,"onUpdate:modelValue":o[2]||(o[2]=a=>e.value.subDomain=a),class:"w-394px","data-cy":"subdomain",onInput:o[3]||(o[3]=a=>c.value=!0)},null,8,["modelValue"])]),_:1},8,["label"]),i(b,{prop:"rootDomain",class:"mt-30px"},{default:l(()=>[i(q,{modelValue:e.value.rootDomain,"onUpdate:modelValue":o[4]||(o[4]=a=>e.value.rootDomain=a),"data-cy":"root-domain"},{default:l(()=>[(D(!0),R(M,null,O(s.value,a=>(D(),Q(k,{key:a.domainName,value:a.domainName,label:"."+a.domainName,"data-cy":"root-domain-opt"},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1})])]),_:1},8,["model","rules","onKeydown"])]),i(F,{round:"",type:"primary","data-cy":"start-create",onClick:r},{default:l(()=>[z(y(n(t)("common.startCreate")),1)]),_:1})])}}});export{Ae as default};
