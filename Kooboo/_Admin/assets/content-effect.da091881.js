var R=Object.defineProperty,_=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var I=(n,a,o)=>a in n?R(n,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[a]=o,M=(n,a)=>{for(var o in a||(a={}))j.call(a,o)&&I(n,o,a[o]);if(F)for(var o of F(a))A.call(a,o)&&I(n,o,a[o]);return n},T=(n,a)=>_(n,$(a));var h=(n,a,o)=>new Promise((v,f)=>{var m=u=>{try{p(o.next(u))}catch(i){f(i)}},y=u=>{try{p(o.throw(u))}catch(i){f(i)}},p=u=>u.done?v(u.value):Promise.resolve(u.value).then(m,y);p((o=o.apply(n,a)).next())});import{S as G,g as H}from"./textContent.f45c90f4.js";import{g as d,cd as N,M as Q,E as U,i as W,ch as X}from"./url.8f5ec20c.js";import{d as V}from"./dayjs.min.2044f1dd.js";import{u as Y}from"./use-date.55b953fa.js";import{c as C}from"./index.6c4e3269.js";import{o as Z}from"./omitBy.3974c317.js";import{i as z}from"./isEmpty.6bc22915.js";function ue(n,a,o){const v=d([]),f=d([]),m=d(!1),y=d([]),p=N(),u=Q(),i=U({currentPage:1,pageCount:0,pageSize:30}),g=d(""),w=d(""),O=d({}),q=d([]),c=d({prop:"",order:"ascending"});function x(){return h(this,null,function*(){g.value=w.value.trim(),yield P(1,i.pageSize)})}const b=X(x,1e3);W(()=>w.value,()=>{b()});function D(r,e,s){const l=Z(O.value,t=>z(t));if(g.value){const t={folderId:n,pageNr:r,pageSize:e!=null?e:30,keyword:g.value,categories:l,exclude:s};return c.value.prop&&(t.sortField=c.value.prop,t.ascending=c.value.order==="ascending"),G(t)}else{const t={folderId:n,pageNr:r,pageSize:e!=null?e:30,categories:l,exclude:s};return c.value.prop&&(t.sortField=c.value.prop,t.ascending=c.value.order==="ascending"),H(t)}}function P(r,e){return h(this,null,function*(){var l,t,L,k;r||(r=+((l=u.query.pageNr)!=null?l:1));const s=yield D(r,(t=e!=null?e:i.pageSize)!=null?t:30,o);q.value=(L=s.categories)!=null?L:[],y.value=((k=s.columns)!=null?k:[]).map(S=>(S.name=C(S.name),S)),f.value=s.list,J(s.list),i.currentPage=s.pageNr,i.pageCount=s.totalPages,i.pageSize=s.pageSize,a||p.replace({query:T(M({},u.query),{pageNr:r})})})}function J(r){v.value=r.map(e=>{const s={id:e.id,online:e.online,lastModified:e.lastModified,usedBy:e.usedBy,order:e.order};for(const l in e.textValues){const t=e.textValues[l];s[C(l)]=t,t&&V(t).isValid()&&t===V(t).toISOString()&&(s[C(l)]=Y(t))}return s}),m.value=!0}function B(){const{SiteId:r,folder:e}=u.query;return`${r}_TextContent_${e}`}function K(r){return h(this,null,function*(){var e;c.value.prop=(e=r.prop)!=null?e:"",c.value.order=r.order,localStorage.setItem(B(),JSON.stringify(c.value)),yield x()})}function E(){const r=localStorage.getItem(B());if(r){const{prop:e,order:s}=JSON.parse(r);c.value.prop=e,c.value.order=s}}return E(),{keywords:w,currentKeyword:g,pagination:i,list:v,rawList:f,columns:y,fetchList:P,columnLoaded:m,sortSetting:c,searchCategories:O,categoryOptions:q,onSortChanged:K,initSortSetting:E}}export{ue as u};
