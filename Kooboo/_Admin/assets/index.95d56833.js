var m=(t,o,e)=>new Promise((n,r)=>{var d=i=>{try{a(e.next(i))}catch(s){r(s)}},l=i=>{try{a(e.throw(i))}catch(s){r(s)}},a=i=>i.done?n(i.value):Promise.resolve(i.value).then(d,l);a((e=e.apply(t,o)).next())});import{v as L,K as g}from"./url.8f5ec20c.js";import{g as N}from"./position.648be44c.js";import{t as w}from"./error.7e8331f1.js";import{g as A}from"./scroll.0cf77af8.js";import{t as h}from"./throttle.3f3ee457.js";const c="ElInfiniteScroll",O=50,_=200,C=0,D={delay:{type:Number,default:_},distance:{type:Number,default:C},disabled:{type:Boolean,default:!1},immediate:{type:Boolean,default:!0}},E=(t,o)=>Object.entries(D).reduce((e,[n,r])=>{var d,l;const{type:a,default:i}=r,s=t.getAttribute(`infinite-scroll-${n}`);let u=(l=(d=o[s])!=null?d:s)!=null?l:i;return u=u==="false"?!1:u,u=a(u),e[n]=Number.isNaN(u)?i:u,e},{}),S=t=>{const{observer:o}=t[c];o&&(o.disconnect(),delete t[c].observer)},F=(t,o)=>{const{container:e,containerEl:n,instance:r,observer:d,lastScrollTop:l}=t[c],{disabled:a,distance:i}=E(t,r),{clientHeight:s,scrollHeight:u,scrollTop:f}=n,T=f-l;if(t[c].lastScrollTop=f,d||a||T<0)return;let b=!1;if(e===t)b=u-(s+f)<=i;else{const{clientTop:y,scrollHeight:H}=t,I=N(t,n);b=f+s>=I+y+H-i}b&&o.call(r)};function p(t,o){const{containerEl:e,instance:n}=t[c],{disabled:r}=E(t,n);r||e.clientHeight===0||(e.scrollHeight<=e.clientHeight?o.call(n):S(t))}const V={mounted(t,o){return m(this,null,function*(){const{instance:e,value:n}=o;L(n)||w(c,"'v-infinite-scroll' binding value must be a function"),yield g();const{delay:r,immediate:d}=E(t,e),l=A(t,!0),a=l===window?document.documentElement:l,i=h(F.bind(null,t,n),r);if(!!l){if(t[c]={instance:e,container:l,containerEl:a,delay:r,cb:n,onScroll:i,lastScrollTop:a.scrollTop},d){const s=new MutationObserver(h(p.bind(null,t,n),O));t[c].observer=s,s.observe(t,{childList:!0,subtree:!0}),p(t,n)}l.addEventListener("scroll",i)}})},unmounted(t){const{container:o,onScroll:e}=t[c];o==null||o.removeEventListener("scroll",e),S(t)},updated(t){return m(this,null,function*(){t[c]||(yield g());const{containerEl:o,cb:e,observer:n}=t[c];o.clientHeight&&n&&p(t,e)})}},v=V;v.install=t=>{t.directive("InfiniteScroll",v)};const M=v;export{M as E};