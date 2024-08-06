var ae=Object.defineProperty,te=Object.defineProperties;var le=Object.getOwnPropertyDescriptors;var K=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable;var H=(i,e,s)=>e in i?ae(i,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[e]=s,k=(i,e)=>{for(var s in e||(e={}))se.call(e,s)&&H(i,s,e[s]);if(K)for(var s of K(e))ne.call(e,s)&&H(i,s,e[s]);return i},j=(i,e)=>te(i,le(e));var E=(i,e,s)=>new Promise((w,N)=>{var o=d=>{try{r(s.next(d))}catch(g){N(g)}},T=d=>{try{r(s.throw(d))}catch(g){N(g)}},r=d=>d.done?w(d.value):Promise.resolve(d.value).then(o,T);r((s=s.apply(i,e)).next())});import{_ as me}from"./k-table.c13bd7f5.js";import{_ as ue}from"./tooltip.ae959863.js";import{g as ie,o as re}from"./i18n.25caaace.js";import{a as de}from"./index.7247b296.js";import{a as pe,b as ce,c as fe}from"./index.b065185c.js";import{d as ve}from"./create.886df97d.js";import{w as _e,a as x,r as G,D as be,d as ge,c as Q,i as ye,s as xe}from"./validate.f3c0b03b.js";import{d as De,g as _,cd as Ve,i as S,o as b,a as D,f as c,t as f,u as m,b as l,w as n,F as I,b6 as z,j as J,aH as V,k as M,x as Ne}from"./url.8f5ec20c.js";import{b as Te,x as Ee,H as we}from"./main.1c3b59e3.js";import{S as Re,E as he,a as Ue}from"./index.94998415.js";import{E as ke}from"./index.f571dfc9.js";import{E as Se,a as Ie}from"./index.960b9732.js";import{E as Pe,a as qe}from"./index.5b499f72.js";import{E as Ce}from"./index.db6dfc3c.js";import{E as Fe}from"./index.e9f8834a.js";import{E as Le}from"./index.5388dbc8.js";import"./sortable.esm.a99254e8.js";import"./icon-button.0e134c9b.js";import"./windi.a815125a.js";import"./index.158cdd11.js";import"./focus-trap.81e4fb05.js";import"./isNil.98bb3b88.js";import"./event.53b2ad83.js";import"./index.1e7e06b8.js";import"./index.0c2ced08.js";import"./index.f9c89813.js";import"./index.a9a077b4.js";import"./isEqual.2e410d13.js";import"./_baseIsEqual.0a4e01e5.js";import"./error.7e8331f1.js";import"./index.2e51d36e.js";import"./event.776e7e11.js";import"./replace-all.b35629e7.js";import"./index.878e2bbf.js";import"./index.adb17f32.js";import"./index.ab12ea9e.js";import"./index.b1b64a44.js";import"./style.1b77b3a2.js";import"./toNumber.6efebd6a.js";import"./index.50c16ae5.js";import"./preload-helper.13a99eb0.js";import"./_baseClone.885c975f.js";import"./index.c6488b3c.js";import"./scroll.0cf77af8.js";import"./debounce.730e1961.js";import"./index.c93fe8e7.js";import"./validator.9b0d789f.js";import"./index.e3f90979.js";const Oe={class:"text-444 dark:text-fff/86"},Ae={class:"text-3l mb-8"},Be={class:"text-s"},$e={class:"border-t border-b border-line dark:border-[#555] border-solid my-24 py-24"},Ke={class:"flex items-center space-x-8"},He={key:0,class:"text-444 text-s mt-24"},je={key:0,class:"flex space-x-16"},Ge={class:"flex flex-col"},Qe={class:"text-s mt-4"},ze={class:"flex flex-col"},Je={class:"text-s mt-4"},Me={class:"flex items-center space-x-12"},Qo=De({setup(i){const{t:e}=ie(),s=_(),w=Ve(),N=Te(),o=_({rootDomain:"",subDomain:"",siteName:"",url:"",TotalPages:20,Depth:2}),T={auto:e("common.auto"),semiAuto:e("common.semiAuto"),manual:e("common.manual")},r=_(Object.keys(T)[0]),d=_([]),g=_([]),P=_(!1),q=_(!1),W=()=>E(this,null,function*(){d.value=yield pe(o.value.url,o.value.TotalPages)}),C={url:[_e(e("common.urlInvalid")),x(e("common.urlRequiredTips"))],subDomain:[x(e("common.subDomainRequiredTips")),G(1,63),be,ge(o.value)],TotalPages:[Q(),x(e("common.valueRequiredTips"))],Depth:[Q(),x(e("common.valueRequiredTips"))],rootDomain:x(e("common.rootDomainRequiredTips")),siteName:[G(1,50),x(e("common.nameRequiredTips")),ye(Ee,e("common.siteNameExistsTips")),xe()]},R=_(!1),F=_();de().then(u=>{s.value=u,s.value.length&&(o.value.rootDomain=s.value[0].domainName)}),S(()=>o.value.url,()=>E(this,null,function*(){d.value=[];try{yield new Re({url:C.url}).validate(o.value),R.value=!0}catch(y){R.value=!1}var u="",a=!1;try{var v=new URL(o.value.url);u=v.host}catch(y){}finally{ve.forEach(function(y){u.indexOf(y,u.length-y.length)!==-1&&(a=!0,u=u.substr(0,u.lastIndexOf(y)))});var p=u.split("."),h=p[p.length-2+(a?1:0)];o.value.subDomain=h||""}}));const L=()=>E(this,null,function*(){yield F.value.validate();const u=k({},o.value);let a;r.value==="manual"?a=yield ce(j(k({},u),{Urls:g.value})):(r.value==="auto"&&(delete u.TotalPages,delete u.Depth),a=yield fe(u));const v=Ne("currentFolder");v&&(yield we({siteIds:[a.siteId],folderName:v})),w.replace({name:"transferring",query:{siteId:a.siteId,id:a.taskId,currentFolder:v}})});return S(()=>o.value.subDomain,()=>{P.value||(o.value.siteName=o.value.subDomain)}),S(()=>o.value.siteName,()=>{q.value||(o.value.subDomain=o.value.siteName)}),(u,a)=>{const v=ke,p=he,h=Se,y=Ie,X=Pe,Y=qe,U=Ce,Z=ue,O=Fe,A=Le,ee=me,oe=Ue;return b(),D("div",Oe,[c("p",Ae,f(m(e)("common.cloneSite")),1),c("p",Be,f(m(e)("common.cloneTips")),1),c("div",$e,[l(oe,{ref_key:"form",ref:F,"label-position":"top",model:o.value,rules:m(C),onKeydown:re(L,["enter"])},{default:n(()=>{var B;return[l(p,{label:"URL",prop:"url"},{default:n(()=>[l(v,{modelValue:o.value.url,"onUpdate:modelValue":a[0]||(a[0]=t=>o.value.url=t),autofocus:"",tabindex:"1",class:"w-394px",placeholder:m(e)("common.inputURLTips"),"data-cy":"url"},null,8,["modelValue","placeholder"])]),_:1}),l(p,{label:m(e)("common.siteName"),prop:"siteName"},{default:n(()=>[l(v,{modelValue:o.value.siteName,"onUpdate:modelValue":a[1]||(a[1]=t=>o.value.siteName=t),class:"w-394px","data-cy":"siteName",onInput:a[2]||(a[2]=t=>P.value=!0)},null,8,["modelValue"])]),_:1},8,["label"]),c("div",Ke,[l(p,{label:m(e)("common.domain"),prop:"subDomain"},{default:n(()=>[l(v,{modelValue:o.value.subDomain,"onUpdate:modelValue":a[3]||(a[3]=t=>o.value.subDomain=t),tabindex:"2",class:"w-394px","data-cy":"subdomain",onInput:a[4]||(a[4]=t=>q.value=!0)},null,8,["modelValue"])]),_:1},8,["label"]),l(p,{prop:"rootDomain",class:"mt-30px"},{default:n(()=>[l(y,{modelValue:o.value.rootDomain,"onUpdate:modelValue":a[5]||(a[5]=t=>o.value.rootDomain=t)},{default:n(()=>[(b(!0),D(I,null,z(s.value,t=>(b(),J(h,{key:t.domainName,value:t.domainName,label:"."+t.domainName,"data-cy":"root-domain-opt"},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),(B=m(N).header)!=null&&B.isOnlineServer?(b(),D("p",He,f(m(e)("common.cloneVersionTips")),1)):(b(),D(I,{key:1},[l(p,null,{default:n(()=>[l(Y,{modelValue:r.value,"onUpdate:modelValue":a[6]||(a[6]=t=>r.value=t),class:"el-radio-group--rounded"},{default:n(()=>[(b(),D(I,null,z(T,(t,$)=>l(X,{key:$,label:$,"data-cy":`clone-type${t}`},{default:n(()=>[V(f(t),1)]),_:2},1032,["label","data-cy"])),64))]),_:1},8,["modelValue"])]),_:1}),r.value=="semiAuto"?(b(),D("div",je,[l(p,{label:m(e)("common.pages"),prop:"TotalPages"},{default:n(()=>[c("div",Ge,[l(U,{modelValue:o.value.TotalPages,"onUpdate:modelValue":a[7]||(a[7]=t=>o.value.TotalPages=t),min:1,"data-cy":"semiauto-pages"},null,8,["modelValue"]),c("p",Qe,f(m(e)("common.maxAmountOfPagesToClone")),1)])]),_:1},8,["label"]),l(p,{label:m(e)("common.deeps"),prop:"Depth"},{default:n(()=>[c("div",ze,[l(U,{modelValue:o.value.Depth,"onUpdate:modelValue":a[8]||(a[8]=t=>o.value.Depth=t),"data-cy":"deeps",min:1},null,8,["modelValue"]),c("p",Je,f(m(e)("common.theNumberOfClicksAwayFromHomePage")),1)])]),_:1},8,["label"])])):M("",!0),r.value=="manual"?(b(),J(ee,{key:1,data:d.value,"show-check":"","hide-delete":"","onUpdate:selectedData":a[10]||(a[10]=t=>g.value=t)},{bar:n(()=>[c("div",Me,[c("div",null,[c("span",null,f(m(e)("common.pages")),1),l(Z,{tip:m(e)("common.maxAmountOfPagesToClone"),"custom-class":"ml-4"},null,8,["tip"])]),l(p,{prop:"TotalPages",class:"mb-0"},{default:n(()=>[l(U,{modelValue:o.value.TotalPages,"onUpdate:modelValue":a[9]||(a[9]=t=>o.value.TotalPages=t),min:1,"data-cy":"manual-pages"},null,8,["modelValue"])]),_:1}),l(O,{round:"",type:"primary",disabled:!R.value,"data-cy":"scan",onClick:W},{default:n(()=>[V(f(m(e)("common.scan")),1)]),_:1},8,["disabled"])])]),default:n(()=>[l(A,{width:"50px"},{default:n(t=>[V(f(t.$index+1),1)]),_:1}),l(A,{label:"URL"},{default:n(t=>[V(f(t.row),1)]),_:1})]),_:1},8,["data"])):M("",!0)],64))]}),_:1},8,["model","rules","onKeydown"])]),l(O,{round:"",type:"primary","data-cy":"start-clone",disabled:!g.value.length&&r.value==="manual",onClick:L},{default:n(()=>[V(f(m(e)("common.startClone")),1)]),_:1},8,["disabled"])])}}});export{Qo as default};
