import{_ as S,a as A}from"./kmail-button.ec4ecaed.js";import{_ as $}from"./site-button.3f36f5db.js";import{d as w,M as D,c as g,N as x,o as s,a as h,b as o,w as t,u,F as N,b6 as z,n as B,f as _,t as M,j as v}from"./url.8f5ec20c.js";import{g as y}from"./i18n.25caaace.js";import{b as k}from"./main.1c3b59e3.js";import{E as I}from"./windi.a815125a.js";import{a as j,b as F}from"./index.621cee8a.js";import{E as C}from"./index.c6488b3c.js";import{E as V}from"./index.6be4823a.js";import"./light-switch.7a8b86f3.js";import"./dark.bb3c8a6e.js";import"./plugin-vue_export-helper.41ffa612.js";import"./index.ab12ea9e.js";import"./index.a0b57910.js";import"./index.e9f8834a.js";import"./index.1e7e06b8.js";import"./index.158cdd11.js";import"./focus-trap.81e4fb05.js";import"./isNil.98bb3b88.js";import"./event.53b2ad83.js";import"./dropdown.fed924b2.js";import"./index.f9c89813.js";import"./refs.d2253dd4.js";import"./avatar.3578cce6.js";import"./logo-transparent.1566007e.js";import"./index.878e2bbf.js";import"./email.c84e7645.js";import"./index.7247b296.js";import"./index.50c16ae5.js";import"./preload-helper.13a99eb0.js";import"./replace-all.b35629e7.js";import"./aria.75ec5909.js";import"./index.5f0a99c5.js";import"./error.7e8331f1.js";const G={class:"w-202px h-full relative bg-fff z-10 dark:bg-[#252526]"},L=w({setup(E){const e=k(),i=D(),{t:n}=y(),d=g(()=>i.meta.activeMenu||i.name),f=g(()=>{var a,b,c,m,l,p;return[{label:n("common.domain"),name:"kconsole",show:!0,icon:"icon-Domain"},{label:n("common.organization"),name:"organization",show:!0,icon:"icon-tissue"},{label:n("common.dataCenter"),name:"serviceDataCenter",show:(a=e.currentOrg)==null?void 0:a.isAdmin,icon:"icon-Datacenter"},{label:n("common.domainCDN"),name:"cdn",show:(b=e.header)==null?void 0:b.isOnlineServer,icon:"icon-a-domaincdn"},{label:"Google SC",name:"searchConsole",show:(c=e.currentOrg)==null?void 0:c.isAdmin,icon:"icon-gaojisousuo1"},{label:n("console.member"),name:"member",show:(m=e.currentOrg)==null?void 0:m.isAdmin,icon:"icon-member"},{label:n("common.orders"),name:"consoleOrder",show:(l=e.currentOrg)==null?void 0:l.isAdmin,icon:"icon-Order"},{label:n("common.balance"),name:"domain-balance",show:(p=e.currentOrg)==null?void 0:p.isAdmin,icon:"icon-balance"}]});return(a,b)=>{const c=I,m=j,l=x("router-link"),p=F,O=C;return s(),h("aside",G,[o(O,null,{default:t(()=>[o(p,{"default-active":u(d)},{default:t(()=>[(s(!0),h(N,null,z(u(f).filter(r=>r.show),r=>(s(),h("div",{key:r.name},[o(l,{to:{name:r.name}},{default:t(()=>[o(m,{index:r.name},{default:t(()=>[o(c,{class:B(["iconfont",r.icon])},null,8,["class"]),_("span",null,M(r.label),1)]),_:2},1032,["index"])]),_:2},1032,["to"])]))),128))]),_:1},8,["default-active"])]),_:1})])}}}),P={class:"h-full flex flex-col bg-[#f3f5f5] dark:bg-[#1e1e1e]"},R={class:"flex-1 overflow-hidden relative"},q={class:"absolute inset-0 left-202px"},Oo=w({setup(E){const e=k();return(i,n)=>{const d=x("router-view"),f=C,a=V;return s(),v(a,{locale:u(e).locale},{default:t(()=>[_("div",P,[o(u(A),{class:"pl-40px"},{left:t(()=>[o($),o(S)]),right:t(()=>[]),_:1}),_("div",R,[o(L),_("div",q,[o(f,{id:"main-scrollbar",class:"w-full"},{default:t(()=>[(s(),v(d,{key:i.$route.name}))]),_:1})])])])]),_:1},8,["locale"])}}});export{Oo as default};