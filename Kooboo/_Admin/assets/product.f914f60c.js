import{d as c}from"./i18n.25caaace.js";import{d as e}from"./main.1c3b59e3.js";import{a as s}from"./replace-all.b35629e7.js";const a=c.global.t,g=()=>e.get(s("productManagement/list")),u=t=>e.post(s("productManagement/pagingList"),t),i=t=>e.get(s("productManagement/getEdit"),{id:t}),m=t=>e.get(s("productManagement/Variants"),{id:t}),p=(t,o)=>e.post(s("productManagement/create"),t,void 0,{successMessage:o?void 0:a("common.saveSuccess")}),M=(t,o)=>e.post(s("productManagement/edit"),t,void 0,{successMessage:o?void 0:a("common.saveSuccess")}),l=t=>e.post(s("productManagement/deletes"),{ids:t},void 0,{successMessage:a("common.deleteSuccess")});export{i as a,g as b,p as c,l as d,M as e,m as f,u as g};