var v=(g,h,n)=>new Promise((l,o)=>{var p=e=>{try{r(n.next(e))}catch(c){o(c)}},u=e=>{try{r(n.throw(e))}catch(c){o(c)}},r=e=>e.done?l(e.value):Promise.resolve(e.value).then(p,u);r((n=n.apply(g,h)).next())});import{g as j,v as q,w as F}from"./i18n.25caaace.js";import{_ as I}from"./index.5d366322.js";import{a as S,r as $,s as x,i as A}from"./validate.f3c0b03b.js";import{i as C,a as H,u as L}from"./html-block.97e46234.js";import{_ as D}from"./index.b410d437.js";import{g as K,u as O}from"./main.1c3b59e3.js";import{e as G}from"./guid.c1a40312.js";import{d as J,g as z,E as P,c as k,h as Q,i as E,J as W,cj as X,o as f,a as T,f as Y,b as _,w as b,u as s,j as V,aH as Z,t as ee,F as ae,b6 as te,e as se}from"./url.8f5ec20c.js";import{u as oe}from"./use-save-tip.63213ba1.js";import{E as ne,a as le}from"./index.94998415.js";import{E as ie}from"./index.f571dfc9.js";const re={class:"flex justify-end mb-8"},Ve=J({props:{id:null},setup(g,{expose:h}){const n=g,{t:l}=j(),o=K(),p=z(),u=O(),r=oe(),e=P({id:G,name:"",values:{}}),c={name:[S(l("common.fieldRequiredTips")),$(1,50),x(),A(C,l("common.valueHasBeenTakenTips"))],contentTypeId:[S(l("common.fieldRequiredTips"))]},B=k(()=>!n.id);k(()=>o.visible&&Object.keys(o.cultures).length>1),Q(()=>v(this,null,function*(){if(n.id){const a=yield H({id:n.id,name:n.id});e.name=a.name,e.id=a.id;for(const t in e.values)e.values[t]=a.values[t]||""}r.init(e)})),E(()=>o.cultures,a=>{if(a){const t=o.default;Object.keys(a).sort((i,w)=>i===t?-1:w===t?1:0).forEach(i=>e.values[i]=e.values[i]||"")}},{immediate:!0});function M(a){let t=l("common.content");return a===o.default?o.selected.length>1?t+` - ${a} (`+l("common.default")+")":t:t+` - ${a}`}function N(a){return o.selected.includes(a)}function R(){return v(this,null,function*(){var a;yield(a=p.value)==null?void 0:a.validate(),yield L(e),r.init(e)})}return h({save:R,model:e}),W(()=>{u.firstActiveMenu=""}),X((a,t,m)=>v(this,null,function*(){var i;a.name==="login"?m():(u.firstActiveMenu=(i=a.meta.activeMenu)!=null?i:a.name,yield r.check(e).then(()=>{m()}).catch(()=>{u.firstActiveMenu="htmlblocks",m(!1)}))})),E(()=>e,()=>{r.changed(e)},{deep:!0}),(a,t)=>{const m=ne,i=ie,w=le;return f(),T("div",null,[Y("div",re,[_(I)]),_(w,{ref_key:"form",ref:p,model:s(e),rules:s(c),"label-width":"auto",onSubmit:t[1]||(t[1]=F(()=>{},["prevent"]))},{default:b(()=>[s(B)?(f(),V(m,{key:1,prop:"name",label:s(l)("common.name")},{default:b(()=>[_(i,{modelValue:s(e).name,"onUpdate:modelValue":t[0]||(t[0]=y=>s(e).name=y)},null,8,["modelValue"])]),_:1},8,["label"])):(f(),V(m,{key:0,label:s(l)("common.name")},{default:b(()=>[Z(ee(s(e).name),1)]),_:1},8,["label"])),(f(!0),T(ae,null,te(s(e).values,(y,d)=>se((f(),V(m,{key:d,label:M(d),class:"label-right"},{default:b(()=>[_(D,{modelValue:s(e).values[d],"onUpdate:modelValue":U=>s(e).values[d]=U},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])),[[q,N(d)]])),128))]),_:1},8,["model","rules"])])}}});export{Ve as _};
