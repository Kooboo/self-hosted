var g=(f,s,n)=>new Promise((p,l)=>{var a=e=>{try{o(n.next(e))}catch(t){l(t)}},i=e=>{try{o(n.throw(e))}catch(t){l(t)}},o=e=>e.done?p(e.value):Promise.resolve(e.value).then(a,i);o((n=n.apply(f,s)).next())});import{g as I}from"./index.b065185c.js";import{d as B,M as C,cd as S,g as v,x as T,J as L,o as _,a as h,b as c,w as m,f as u,t as x,u as d,j as M,e as R}from"./url.8f5ec20c.js";import{g as q}from"./i18n.25caaace.js";import{E as D}from"./index.64203830.js";import{E as F,a as N}from"./index.5388dbc8.js";import{E as U,al as V}from"./windi.a815125a.js";import{E as j}from"./index.9be61a1f.js";import"./replace-all.b35629e7.js";import"./main.1c3b59e3.js";import"./index.50c16ae5.js";import"./preload-helper.13a99eb0.js";import"./index.c6488b3c.js";import"./error.7e8331f1.js";import"./index.158cdd11.js";import"./focus-trap.81e4fb05.js";import"./isNil.98bb3b88.js";import"./event.53b2ad83.js";import"./index.1e7e06b8.js";import"./debounce.730e1961.js";import"./toNumber.6efebd6a.js";import"./index.2e51d36e.js";import"./event.776e7e11.js";import"./index.c93fe8e7.js";import"./index.f9c89813.js";const J={class:"w-1120px mx-auto py-32"},P={class:"flex items-center space-x-12"},Q={class:"font-bold"},W={class:"text-s text-999"},Y={key:1,class:"w-16 h-16 inline-block clone-site-loading"},ge=B({setup(f){const{t:s}=q(),n=C(),p=S(),l=v(0),a=v([]),i=setInterval(()=>g(this,null,function*(){a.value=yield I(n.query);const o=a.value.length;let t=a.value.filter(r=>r.done).length*100/o;if(t!==100&&(l.value=Math.floor(t)),o>0&&t===100){const r=T("currentFolder");clearInterval(i),p.replace({name:"home",query:{currentFolder:r}})}}),500);return L(()=>{clearInterval(i)}),(o,e)=>{const t=D,r=F,y=U,b=N,E=j,w=V;return _(),h("div",J,[c(E,null,{header:m(()=>[u("div",P,[u("span",Q,x(d(s)("common.cloneSite")),1),u("span",W,x(d(s)("common.cloneWebsiteYouMayLeaveTips")),1)])]),default:m(()=>[c(t,{"text-inside":!0,"stroke-width":26,percentage:l.value},null,8,["percentage"]),c(b,{class:"mt-24 el-table--gray rounded-normal",data:a.value},{default:m(()=>[c(r,{label:"URL",prop:"url"}),c(r,{label:d(s)("common.status"),prop:"done",width:"100px",align:"center"},{default:m(k=>[k.row.done?(_(),M(y,{key:0,class:"iconfont icon-yes2 text-green"})):R((_(),h("div",Y,null,512)),[[w,!0]])]),_:1},8,["label"])]),_:1},8,["data"])]),_:1})])}}});export{ge as default};
