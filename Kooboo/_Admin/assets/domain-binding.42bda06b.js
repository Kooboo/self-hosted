var w=(k,d,m)=>new Promise((v,n)=>{var u=e=>{try{c(m.next(e))}catch(s){n(s)}},p=e=>{try{c(m.throw(e))}catch(s){n(s)}},c=e=>e.done?v(e.value):Promise.resolve(e.value).then(u,p);c((m=m.apply(k,d)).next())});import{g as S,w as F}from"./i18n.25caaace.js";import{u as U}from"./use-operation-dialog.450d2247.js";import{m as q,a as C,r as T,d as A}from"./validate.f3c0b03b.js";import{f as M,m as O,n as j,o as G,q as H}from"./index.7247b296.js";import{d as B,M as Q,g as b,i as z,o as x,j as E,w as l,b as i,u as t,f as D,t as y,a as h,b6 as J,F as K,G as P,E as W,aH as X,cg as Y,x as Z}from"./url.8f5ec20c.js";import{_ as ee}from"./index.50326354.js";import{R as oe}from"./main.1c3b59e3.js";import{_ as te}from"./plugin-vue_export-helper.21dcd24c.js";import{E as ae}from"./index.f571dfc9.js";import{E as le,a as ie}from"./index.94998415.js";import{E as ne,a as se}from"./index.960b9732.js";import{E as me}from"./index.a5d96e5a.js";import{_ as re}from"./k-table.c13bd7f5.js";import{b as de}from"./confirm.629bcef4.js";import{E as ue}from"./index.e9f8834a.js";import{E as pe}from"./index.5388dbc8.js";import"./index.878e2bbf.js";import"./index.adb17f32.js";import"./replace-all.b35629e7.js";import"./index.b065185c.js";import"./index.ab12ea9e.js";import"./index.b1b64a44.js";import"./style.1b77b3a2.js";import"./toNumber.6efebd6a.js";import"./_baseIsEqual.0a4e01e5.js";import"./index.50c16ae5.js";import"./windi.a815125a.js";import"./preload-helper.13a99eb0.js";import"./event.776e7e11.js";import"./index.1e7e06b8.js";import"./error.7e8331f1.js";import"./isNil.98bb3b88.js";import"./_baseClone.885c975f.js";import"./isEqual.2e410d13.js";import"./index.158cdd11.js";import"./focus-trap.81e4fb05.js";import"./event.53b2ad83.js";import"./index.c6488b3c.js";import"./index.f9c89813.js";import"./scroll.0cf77af8.js";import"./debounce.730e1961.js";import"./index.c93fe8e7.js";import"./validator.9b0d789f.js";import"./index.1d16d007.js";import"./refs.d2253dd4.js";import"./sortable.esm.a99254e8.js";import"./icon-button.0e134c9b.js";import"./index.0c2ced08.js";import"./index.a9a077b4.js";import"./index.2e51d36e.js";import"./index.5b499f72.js";import"./logo-transparent.1566007e.js";import"./index.60799c00.js";import"./aria.75ec5909.js";const ce=["title"],fe=B({props:{modelValue:{type:Boolean},domain:null},emits:["create-success"],setup(k,{emit:d}){const m=k,v=Q(),{t:n}=S(),{visible:u,handleClose:p}=U(m,d),c=b(),e=b(),s=b(),o=b({subDomain:"",rootDomain:"",SiteId:""}),g={subDomain:[q,C(n("common.inputValue")),T(1,63),A(o.value)],SiteId:[C(n("common.inputValue"))]};z(()=>u.value,_=>w(this,null,function*(){var a,I;_&&(c.value=yield oe(),e.value=yield M(),(a=s.value)==null||a.resetFields(),o.value.subDomain="",o.value.rootDomain=e.value.filter(V=>V.id===v.query.id)[0].domainName,o.value.SiteId=(I=c.value[0])==null?void 0:I.siteId)}));function r(){var _;(_=s.value)==null||_.validate(a=>w(this,null,function*(){a&&(yield O(o.value.subDomain,o.value.rootDomain,o.value.SiteId),p(),d("create-success"))}))}return(_,a)=>{const I=ae,V=le,N=ne,R=se,L=ie,$=me;return x(),E($,{modelValue:t(u),"onUpdate:modelValue":a[3]||(a[3]=f=>P(u)?u.value=f:null),width:"600px","close-on-click-modal":!1,title:t(n)("common.newBinding"),onClose:t(p)},{footer:l(()=>[i(ee,{"confirm-label":t(n)("common.create"),onConfirm:r,onCancel:t(p)},null,8,["confirm-label","onCancel"])]),default:l(()=>[i(L,{ref_key:"form",ref:s,class:"el-form--label-normal",model:o.value,rules:t(g),"label-position":"top",onSubmit:a[2]||(a[2]=F(()=>{},["prevent"]))},{default:l(()=>[i(V,{prop:"subDomain",label:t(n)("common.domain")},{default:l(()=>[i(I,{modelValue:o.value.subDomain,"onUpdate:modelValue":a[0]||(a[0]=f=>o.value.subDomain=f),placeholder:"www","data-cy":"subdomain"},{append:l(()=>[D("span",{disabled:"",class:"ellipsis max-w-240px px-16 dark:bg-[#222] dark:rounded-tr-normal dark:rounded-br-normal dark:border-[#4c4d4f] dark:border-1 border-solid dark:border-l-0",title:o.value.rootDomain,"data-cy":"root-domain"},"."+y(o.value.rootDomain),9,ce)]),_:1},8,["modelValue"])]),_:1},8,["label"]),i(V,{prop:"SiteId",label:t(n)("common.site")},{default:l(()=>[i(R,{modelValue:o.value.SiteId,"onUpdate:modelValue":a[1]||(a[1]=f=>o.value.SiteId=f),class:"w-full"},{default:l(()=>[(x(!0),h(K,null,J(c.value,f=>(x(),E(N,{key:f.siteId,label:f.siteDisplayName,value:f.siteId,"data-cy":"site-opt"},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title","onClose"])}}});var _e=te(fe,[["__scopeId","data-v-7327bb0f"]]);const be={class:"p-24"},ve={class:"flex items-center pb-24 space-x-16"},ge={class:"flex items-center"},we=["href"],ko=B({setup(k){const{t:d}=S(),m=W({status:!1,open(){m.status=!0}}),v=e=>{Y("//"+e)},n=b(),u=b();function p(){return w(this,null,function*(){const e=Z("id");e&&(u.value=yield j(e),n.value=yield G(e))})}p();function c(e){return w(this,null,function*(){e.length&&(yield de(e.length),yield H(e.map(s=>s.id)),p())})}return(e,s)=>{const o=ue,g=pe;return x(),h("div",be,[D("div",ve,[i(o,{round:"",onClick:t(m).open},{default:l(()=>[D("div",ge,y(t(d)("common.new")),1)]),_:1},8,["onClick"])]),i(t(re),{data:u.value,"show-check":"",onDelete:c},{default:l(()=>[i(g,{label:t(d)("common.domain")},{default:l(({row:r})=>[D("span",null,y(r.fullName),1)]),_:1},8,["label"]),i(g,{label:t(d)("common.site")},{default:l(({row:r})=>[D("a",{class:"cursor-pointer text-blue",href:`/_Admin/site?SiteId=${r.webSiteId}`,target:"_blank","data-cy":"site-name"},y(r.siteName),9,we)]),_:1},8,["label"]),i(g,{width:"150px",align:"center"},{default:l(({row:r})=>[i(o,{type:"primary",round:"",onClick:_=>v(r.fullName)},{default:l(()=>[X(y(t(d)("common.preview")),1)]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),i(_e,{modelValue:t(m).status,"onUpdate:modelValue":s[0]||(s[0]=r=>t(m).status=r),domain:n.value,onCreateSuccess:p},null,8,["modelValue","domain"])])}}});export{ko as default};
