var f=(h,r,s)=>new Promise((p,l)=>{var d=t=>{try{i(s.next(t))}catch(m){l(m)}},u=t=>{try{i(s.throw(t))}catch(m){l(m)}},i=t=>t.done?p(t.value):Promise.resolve(t.value).then(d,u);i((s=s.apply(h,r)).next())});import{_ as C}from"./k-table.c13bd7f5.js";import{g as $,d as D}from"./html-block.97e46234.js";import{u as M}from"./use-date.55b953fa.js";import{u as k}from"./replace-all.b35629e7.js";import{_ as N}from"./relations-tag.eed033c9.js";import{B as H}from"./breadcrumb.bcaeaf75.js";import{_ as T}from"./icon-button.0e134c9b.js";import{b as V}from"./confirm.629bcef4.js";import{g as w}from"./i18n.25caaace.js";import{d as I,cd as L,g as P,h as R,N as S,b7 as j,o as b,a as q,b as e,u as a,f as v,e as z,j as A,w as n,aH as B,t as _}from"./url.8f5ec20c.js";import{E as F}from"./windi.a815125a.js";import{E as G}from"./index.e9f8834a.js";import{E as J}from"./index.5388dbc8.js";import{E as K}from"./index.158cdd11.js";import"./sortable.esm.a99254e8.js";import"./main.1c3b59e3.js";import"./index.50c16ae5.js";import"./preload-helper.13a99eb0.js";import"./index.a9a077b4.js";import"./index.960b9732.js";import"./index.f571dfc9.js";import"./event.776e7e11.js";import"./index.1e7e06b8.js";import"./error.7e8331f1.js";import"./isNil.98bb3b88.js";import"./index.c6488b3c.js";import"./index.f9c89813.js";import"./scroll.0cf77af8.js";import"./isEqual.2e410d13.js";import"./_baseIsEqual.0a4e01e5.js";import"./debounce.730e1961.js";import"./toNumber.6efebd6a.js";import"./index.c93fe8e7.js";import"./validator.9b0d789f.js";import"./index.2e51d36e.js";import"./index.5b499f72.js";import"./dayjs.min.2044f1dd.js";import"./page.729fa09e.js";import"./validate.f3c0b03b.js";import"./index.878e2bbf.js";import"./index.adb17f32.js";import"./index.b065185c.js";import"./index.ab12ea9e.js";import"./index.b1b64a44.js";import"./style.1b77b3a2.js";import"./index.94998415.js";import"./_baseClone.885c975f.js";import"./index.60799c00.js";import"./index.1d16d007.js";import"./aria.75ec5909.js";import"./event.53b2ad83.js";import"./focus-trap.81e4fb05.js";import"./guid.c1a40312.js";import"./index.a5d96e5a.js";import"./refs.d2253dd4.js";/* empty css                                                               */import"./plugin-vue_export-helper.21dcd24c.js";import"./plugin-vue_export-helper.41ffa612.js";import"./index.0c2ced08.js";import"./logo-transparent.1566007e.js";const O={class:"p-24"},Q={class:"flex items-center py-24 space-x-16"},U=["title"],mo=I({setup(h){const{t:r}=w(),s=L(),p=P([]);R(()=>{l()});function l(){return f(this,null,function*(){const i=yield $();p.value=i.sort((t,m)=>t.lastModified>m.lastModified?-1:1)})}function d(i){return f(this,null,function*(){yield V(i.length);const t=i.map(m=>m.id);yield D({ids:t}),l()})}function u(){s.push(k({name:"htmlBlock-edit"}))}return(i,t)=>{const m=F,y=G,c=J,g=K,E=S("router-link"),x=j("hasPermission");return b(),q("div",O,[e(H,{name:a(r)("common.htmlBlocks")},null,8,["name"]),v("div",Q,[z((b(),A(y,{round:"","data-cy":"new",onClick:t[0]||(t[0]=o=>u())},{default:n(()=>[e(m,{class:"iconfont icon-a-addto"}),B(" "+_(a(r)("common.new")),1)]),_:1})),[[x,{feature:"htmlBlock",action:"edit"}]])]),e(a(C),{data:p.value,"show-check":"",permission:{feature:"htmlBlock",action:"delete"},onDelete:d},{default:n(()=>[e(c,{label:a(r)("common.name"),prop:"name"},{default:n(({row:o})=>[v("span",{class:"ellipsis",title:o.name,"data-cy":"name"},_(o.name),9,U)]),_:1},8,["label"]),e(c,{label:a(r)("common.usedBy")},{default:n(({row:o})=>[e(N,{id:o.id,relations:o.relations,type:"HtmlBlock"},null,8,["id","relations"])]),_:1},8,["label"]),e(c,{label:a(r)("common.lastModified")},{default:n(({row:o})=>[B(_(a(M)(o.lastModified)),1)]),_:1},8,["label"]),e(c,{width:"90",align:"right"},{default:n(({row:o})=>[e(E,{to:a(k)({name:"htmlBlock-edit",query:{id:o==null?void 0:o.id}}),"data-cy":"edit",class:"mx-8"},{default:n(()=>[e(g,{placement:"top",content:a(r)("common.edit")},{default:n(()=>[e(m,{class:"iconfont icon-a-writein hover:text-blue text-l"})]),_:1},8,["content"])]),_:2},1032,["to"]),e(T,{icon:"icon-time",tip:a(r)("common.version"),permission:{feature:"site",action:"log"},"data-cy":"versions",onClick:W=>i.$router.goLogVersions(o.keyHash,o.storeNameHash)},null,8,["tip","onClick"])]),_:1})]),_:1},8,["data"])])}}});export{mo as default};
