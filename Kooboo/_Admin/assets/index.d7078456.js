var f=(u,t,r)=>new Promise((_,s)=>{var d=e=>{try{o(r.next(e))}catch(c){s(c)}},a=e=>{try{o(r.throw(e))}catch(c){s(c)}},o=e=>e.done?_(e.value):Promise.resolve(e.value).then(d,a);o((r=r.apply(u,t)).next())});import{_ as b}from"./k-table.c13bd7f5.js";import{g}from"./i18n.25caaace.js";import{g as v}from"./index.a39e6d10.js";import{E as C}from"./index.5388dbc8.js";import{d as I,g as P,o as h,a as w,b as i,w as p,f as n,t as l,u as m}from"./url.8f5ec20c.js";import"./sortable.esm.a99254e8.js";import"./icon-button.0e134c9b.js";import"./windi.a815125a.js";import"./index.e9f8834a.js";import"./index.1e7e06b8.js";import"./index.158cdd11.js";import"./focus-trap.81e4fb05.js";import"./isNil.98bb3b88.js";import"./event.53b2ad83.js";import"./index.0c2ced08.js";import"./index.f9c89813.js";import"./main.1c3b59e3.js";import"./index.50c16ae5.js";import"./preload-helper.13a99eb0.js";import"./replace-all.b35629e7.js";import"./index.a9a077b4.js";import"./index.960b9732.js";import"./index.f571dfc9.js";import"./event.776e7e11.js";import"./error.7e8331f1.js";import"./index.c6488b3c.js";import"./scroll.0cf77af8.js";import"./isEqual.2e410d13.js";import"./_baseIsEqual.0a4e01e5.js";import"./debounce.730e1961.js";import"./toNumber.6efebd6a.js";import"./index.c93fe8e7.js";import"./validator.9b0d789f.js";import"./index.2e51d36e.js";import"./index.5b499f72.js";const x={class:"p-24"},po=I({setup(u){const{t}=g(),r=P([]);return(()=>f(this,null,function*(){r.value=yield v()}))(),(s,d)=>{const a=C;return h(),w("div",x,[i(m(b),{data:r.value},{default:p(()=>[i(a,{label:"IP"},{default:p(({row:o})=>[n("span",null,l(o.ip),1)]),_:1}),i(a,{label:m(t)("common.region")},{default:p(({row:o})=>[n("span",null,l(o.region),1)]),_:1},8,["label"]),i(a,{label:m(t)("common.domain"),align:"center"},{default:p(({row:o})=>[n("span",null,l(o.domain),1)]),_:1},8,["label"]),i(a,{label:m(t)("common.requireICP"),align:"center"},{default:p(({row:o})=>[n("span",null,l(o.requireICP?m(t)("common.yes"):m(t)("common.no")),1)]),_:1},8,["label"])]),_:1},8,["data"])])}}});export{po as default};
