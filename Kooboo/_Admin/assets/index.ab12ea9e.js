import{d as n}from"./i18n.25caaace.js";import{d as s}from"./main.1c3b59e3.js";const t=n.global.t,u=e=>s.post("/user/register",e),c=e=>(e.withToken=!0,s.post("/user/login",e)),d=e=>s.post("/user/ChangeLanguage",{language:e}),g=()=>s.get("/user/getUser").then(e=>{for(const r in e)e[r]=e[r]||"";return e}),i=e=>s.post("/user/changePassword",e,void 0,{successMessage:t("common.passwordChanged")}),p=(e,r)=>s.post("/user/updateName",{firstName:e,lastName:r}),l=e=>s.post("/user/sendTelCode",{tel:e}),m=(e,r)=>s.post("/user/updateTel",{tel:e,code:r},void 0,{successMessage:t("common.phoneNumberUpdated")}),h=(e,r)=>s.post("/user/UpdateEmail",{email:e,code:r},void 0,{successMessage:t("common.emailUpdated")}),C=e=>s.get("user/IsUniqueEmail",{email:e},{hiddenLoading:!0,hiddenError:!0}),U=()=>s.get("/user/AvailableCurrency"),v=e=>s.post("/user/changeCurrency",{newCurrency:e},void 0,{successMessage:t("user.changeSuccess")});export{h as a,i as b,d as c,v as d,p as e,g as f,U as g,C as i,c as l,u as r,l as s,m as u};
