var u=(a,o,t)=>new Promise((n,i)=>{var d=e=>{try{c(t.next(e))}catch(f){i(f)}},s=e=>{try{c(t.throw(e))}catch(f){i(f)}},c=e=>e.done?n(e.value):Promise.resolve(e.value).then(d,s);c((t=t.apply(a,o)).next())});import{l as y}from"./page.729fa09e.js";import{b as r}from"./index.976537c8.js";function p(a,o){return u(this,null,function*(){let t=a.find(n=>n.id===o.id&&n.tag===o.type);if(!t){const n=yield r(o.type,o.id);t={id:o.id,tag:o.type,source:n},a.push(t)}return t})}function l(a,o,t){return u(this,null,function*(){if(a.type==="layout"){for(const n of a.content)if(o.type==="layout"){const i=o.content.find(s=>s.name===n.name),d=i==null?void 0:i.addons;if(d)for(const s of d){const c=yield p(t,s);if(s.type==="layout"){const e=y(c.id,c.source.body);n.addons.push(e),l(e,s,t)}else n.addons.push(s)}}}})}export{l as m,p as t};
