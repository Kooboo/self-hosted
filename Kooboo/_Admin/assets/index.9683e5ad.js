var ce=Object.defineProperty,fe=Object.defineProperties;var pe=Object.getOwnPropertyDescriptors;var Y=Object.getOwnPropertySymbols;var ve=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable;var Z=(o,t,e)=>t in o?ce(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,ee=(o,t)=>{for(var e in t||(t={}))ve.call(t,e)&&Z(o,e,t[e]);if(Y)for(var e of Y(t))xe.call(t,e)&&Z(o,e,t[e]);return o},te=(o,t)=>fe(o,pe(t));var I=(o,t,e)=>new Promise((d,v)=>{var b=p=>{try{i(e.next(p))}catch(s){v(s)}},M=p=>{try{i(e.throw(p))}catch(s){v(s)}},i=p=>p.done?d(p.value):Promise.resolve(p.value).then(b,M);i((e=e.apply(o,t)).next())});import{g as G,o as ge,w as E}from"./i18n.25caaace.js";import{d as D,M as K,g as S,h as Q,o as c,j as $,w as k,b as x,u as n,i as ne,N as ae,f,m as z,t as L,a as N,k as q,b6 as T,F as A,n as j,cd as be,c as he,aH as we,b3 as ye,b1 as _e,K as ke,I as Me,J as Fe}from"./url.8f5ec20c.js";import{u as P}from"./email.c84e7645.js";import{d as le}from"./dark.bb3c8a6e.js";import{a as Ne,r as Le,y as Ce}from"./validate.f3c0b03b.js";import{_ as Se}from"./index.50326354.js";import{r as Ee,n as $e,h as Ie,L as oe,b as O}from"./index.878e2bbf.js";import{E as Re}from"./index.f571dfc9.js";import{E as qe,a as Ve}from"./index.94998415.js";import{E as Ae}from"./index.a5d96e5a.js";import{s as Ue}from"./confirm.629bcef4.js";import{E as se}from"./windi.a815125a.js";import{E as re,a as ie,b as Be}from"./index.621cee8a.js";import{_ as Te}from"./plugin-vue_export-helper.21dcd24c.js";import{E as W,b as je}from"./main.1c3b59e3.js";import{E as ze}from"./index.e9f8834a.js";import{E as de}from"./index.c6488b3c.js";import{_ as De,a as Ke}from"./kmail-button.ec4ecaed.js";import{_ as Pe}from"./site-button.3f36f5db.js";import{E as He}from"./index.6be4823a.js";import"./index.7247b296.js";import"./index.adb17f32.js";import"./replace-all.b35629e7.js";import"./index.b065185c.js";import"./index.ab12ea9e.js";import"./index.b1b64a44.js";import"./style.1b77b3a2.js";import"./toNumber.6efebd6a.js";import"./_baseIsEqual.0a4e01e5.js";import"./event.776e7e11.js";import"./index.1e7e06b8.js";import"./error.7e8331f1.js";import"./isNil.98bb3b88.js";import"./_baseClone.885c975f.js";import"./isEqual.2e410d13.js";import"./index.1d16d007.js";import"./scroll.0cf77af8.js";import"./index.f9c89813.js";import"./focus-trap.81e4fb05.js";import"./refs.d2253dd4.js";import"./logo-transparent.1566007e.js";import"./index.60799c00.js";import"./aria.75ec5909.js";import"./event.53b2ad83.js";import"./validator.9b0d789f.js";import"./index.5f0a99c5.js";import"./index.158cdd11.js";import"./index.50c16ae5.js";import"./preload-helper.13a99eb0.js";import"./light-switch.7a8b86f3.js";import"./plugin-vue_export-helper.41ffa612.js";import"./index.a0b57910.js";import"./dropdown.fed924b2.js";import"./avatar.3578cce6.js";const Je=D({props:{modelValue:{type:Boolean},currentFolder:null},emits:["update:modelValue","reload","create-success"],setup(o,{emit:t}){const e=o;K();const d=P(),v=S(!0),{t:b}=G(),M=S(),i=S({name:"",relativeName:"",oldName:""}),p={name:[Ne(b("common.inputFolderNameTips")),Le(1,50),Ce]},s=g=>{const m=new URLSearchParams(location.search);m.set("folderName",g),history.replaceState(null,"",location.pathname+"?"+decodeURIComponent(m.toString())),d.firstActiveMenu="folder"+g},w=()=>I(this,null,function*(){var l;yield(l=M.value)==null?void 0:l.validate();let g=i.value.relativeName+i.value.name.trim();const y=new URL(window.location.href).searchParams.get("folderName");let F="";i.value.oldName?(yield Ee(i.value.oldName,g),y===i.value.oldName?yield s(g):y&&(y==null?void 0:y.toString().split("/")[0])===i.value.oldName.split("/")[0]&&y.includes(i.value.oldName)&&(F=y.toString().replace(new RegExp(i.value.oldName,"g"),g),yield s(F))):yield $e(i.value.name.trim()),t("update:modelValue",!1),t("reload",F)});return Q(()=>{i.value.oldName=e.currentFolder;var g=e.currentFolder.lastIndexOf("/");i.value.relativeName=g!==-1?e.currentFolder.substring(0,g+1):"",i.value.name=g!==-1?e.currentFolder.substring(g+1):e.currentFolder}),(g,m)=>{const y=Re,F=qe,l=Ve,_=Ae;return c(),$(_,{"model-value":v.value,width:"600px","close-on-click-modal":!1,title:i.value.oldName?n(b)("common.renameFolder"):n(b)("common.newFolder"),onClosed:m[3]||(m[3]=a=>t("update:modelValue",!1))},{footer:k(()=>[x(Se,{"confirm-label":i.value.oldName?n(b)("common.rename"):n(b)("common.create"),onConfirm:w,onCancel:m[2]||(m[2]=a=>v.value=!1)},null,8,["confirm-label"])]),default:k(()=>[x(l,{ref_key:"form",ref:M,class:"el-form--label-normal",model:i.value,rules:n(p),"label-position":"top",onSubmit:m[1]||(m[1]=E(()=>{},["prevent"]))},{default:k(()=>[x(F,{prop:"name",label:n(b)("common.name")},{default:k(()=>[x(y,{modelValue:i.value.name,"onUpdate:modelValue":m[0]||(m[0]=a=>i.value.name=a),"data-cy":"folder-name",onKeydown:ge(w,["enter"])},null,8,["modelValue","onKeydown"])]),_:1},8,["label"])]),_:1},8,["model","rules"])]),_:1},8,["model-value","title"])}}}),Oe={class:"flex items-center w-full justify-between pl-20px"},We={class:"flex items-center w-full"},Ge=["title"],Qe={key:0,class:"font-bold mx-4 group-hover:hidden"},Xe={class:"hidden items-center font-normal space-x-8 group-hover:flex"},Ye={class:"flex items-center w-full justify-between"},Ze={class:"flex items-center w-full"},et=["title"],tt={key:0,class:"font-bold mx-4 group-hover:hidden"},ot={class:"hidden items-center font-normal space-x-8 group-hover:flex"},nt=D({props:{menu:null},emits:["changeMenu","editFolder","deleteFolder","expandSubMenu"],setup(o,{emit:t}){const e=o,d=K(),v=P(),b=S(!1);Q(()=>I(this,null,function*(){var p;d.query.folderName&&d.query.folderName===e.menu.name&&((p=e.menu.items)==null?void 0:p.length)&&t("expandSubMenu",e.menu.name)}));const M=()=>{b.value=!b.value},i=p=>({"max-width":b.value?80-p*10+"px":120-p*10+"px"});return ne(()=>d.name,(p,s)=>{d.query.folderName&&s==="searchEmail"&&t("expandSubMenu",e.menu.name)}),(p,s)=>{var F;const w=se,g=ae("SubMenu",!0),m=re,y=ie;return(F=o.menu.items)!=null&&F.length?(c(),$(m,{key:0,index:"folder"+o.menu.name,class:j({dark:n(le),active:n(d).name!=="compose"&&n(d).query.folderName&&o.menu.name===n(d).query.folderName||n(v).activeName==="folder"+o.menu.name})},{title:k(()=>[f("div",{class:"w-full flex items-center justify-between group",style:z({paddingLeft:26+o.menu.floor*10+"px"}),onMouseenter:M,onMouseleave:M,onClick:s[2]||(s[2]=E(l=>t("changeMenu",{name:"folder",folderName:o.menu.name}),["stop"]))},[f("div",Oe,[f("div",We,[f("span",{class:"ellipsis",title:o.menu.name,style:z(i(o.menu.floor))},L(o.menu.displayName),13,Ge),o.menu.unRead!==0?(c(),N("span",Qe,"("+L(o.menu.unRead)+")",1)):q("",!0)]),f("div",Xe,[x(w,{class:"iconfont icon-a-writein !hover:text-blue !text-s !w-12 !text-444 !dark:text-999 !mr-0",onClick:s[0]||(s[0]=E(l=>t("editFolder",o.menu.name),["stop"]))}),x(w,{class:"iconfont icon-delete !hover:text-orange !text-s !w-12 !text-444 !dark:text-999 !mr-0",onClick:s[1]||(s[1]=E(l=>t("deleteFolder",o.menu),["stop"]))})])])],36)]),default:k(()=>[(c(!0),N(A,null,T(o.menu.items,l=>(c(),$(g,{key:l.id,menu:l,onChangeMenu:s[3]||(s[3]=_=>t("changeMenu",{name:"folder",folderName:_.folderName})),onEditFolder:s[4]||(s[4]=_=>t("editFolder",_)),onDeleteFolder:s[5]||(s[5]=_=>t("deleteFolder",_)),onExpandSubMenu:s[6]||(s[6]=_=>t("expandSubMenu",_))},null,8,["menu"]))),128))]),_:1},8,["index","class"])):(c(),$(y,{key:1,index:"folder"+o.menu.name},{title:k(()=>[f("div",{class:"w-full flex items-center justify-between group",style:z({paddingLeft:26+o.menu.floor*10+"px"}),onMouseenter:M,onMouseleave:M,onClick:s[9]||(s[9]=E(l=>t("changeMenu",{name:"folder",folderName:o.menu.name}),["stop"]))},[f("div",Ye,[f("div",Ze,[f("span",{class:"ellipsis",title:o.menu.name,style:z(i(o.menu.floor))},L(o.menu.displayName),13,et),o.menu.unRead!==0?(c(),N("span",tt,"("+L(o.menu.unRead)+")",1)):q("",!0)]),f("div",ot,[x(w,{class:"iconfont icon-a-writein !hover:text-blue !text-s !w-12 !text-444 !dark:text-999 !mr-0",onClick:s[7]||(s[7]=E(l=>t("editFolder",o.menu.name),["stop"]))}),x(w,{class:"iconfont icon-delete !hover:text-orange !text-s !w-12 !text-444 !dark:text-999 !mr-0",onClick:s[8]||(s[8]=E(l=>t("deleteFolder",o.menu),["stop"]))})])])],36)]),_:1},8,["index"]))}}});const at=o=>(ye("data-v-666a5c29"),o=o(),_e(),o),lt={class:"w-202px h-full relative z-50 dark:bg-[#252526] pb-[112px]"},st={class:"py-18px px-5"},rt=at(()=>f("div",{class:"h-16px border-t border-solid border-line dark:border-444"},null,-1)),it=["onClick"],dt={key:0},mt={key:0,class:"font-bold pl-4"},ut={key:1,class:"font-bold pl-4"},ct={key:2,class:"font-bold pl-4"},ft={class:"w-full flex items-center pl-26px"},pt=["title"],vt={key:0,class:"font-bold ml-4 h-10"},xt={class:"dark:text-999"},gt=D({setup(o){const t=P(),e=be(),d=K(),{t:v}=G(),b=S(!1),M=S(""),i=(a="")=>{b.value=!0,M.value=a},p=S(),s=a=>I(this,null,function*(){yield t.loadFolders(),a&&_(a)}),w=S([{label:v("common.inbox"),name:"inbox",icon:"icon-Inbox",show:!0},{label:v("mail.sent"),name:"sent",icon:"icon-send",show:!0},{label:v("common.folders"),name:"folder",icon:"icon-folder-fill",show:he(()=>{var a;return(a=t.folderList)==null?void 0:a.length})}]),g=S([{label:v("common.drafts"),name:"drafts",icon:"icon-draft"},{label:v("common.spam"),name:"spam",icon:"icon-a-alreadyremoved"},{label:v("common.trash"),name:"trash",icon:"icon-dustbin"}]),m=a=>I(this,null,function*(){var h,U,R;t.selectedMessage=[],t.firstActiveMenu="";let r;if(a.name==="folder"){let H=(h=a.folderName)!=null?h:"";r=a.name+H}else a.address?r=a.name+a.address:r=a.name;t.activeName===r&&(a.name==="folder"?yield t.loadFolders():yield t.loadAddress(a.name),yield t.refreshMessageList()),yield e.push({name:a.name,query:{address:(U=a.address)!=null?U:void 0,folderName:(R=a.folderName)!=null?R:void 0}})}),y=a=>I(this,null,function*(){var r;(r=a.items)!=null&&r.length?W.warning(v("common.pleaseDeleteTheSubFoldersInThisFolderBeforeRetrying")):(yield Ue(v("common.deleteEmailFolderTips")),yield Ie(a.id),yield t.loadFolders(),t.activeName==="folder"&&!t.folderList.length||t.activeName==="folder"+a.name?e.push({name:"inbox"}):yield t.refreshMessageList())}),F=a=>a==="sent"?t.sentAddressList:t.addressList;function l(a){const r=a.split("/");let h=[];return r.length>1?(h=r.slice(0,-1).map((U,R)=>"folder"+r.slice(0,R+1).join("/")),h.unshift("folder")):h=["folder"],h}const _=a=>I(this,null,function*(){let r=l(a);for(let h=0;h<r.length;h++)p.value&&(yield ke(),p.value.open(r[h]))});return(a,r)=>{const h=se,U=ze,R=ie,H=re,me=Be,ue=de;return c(),N(A,null,[f("aside",lt,[x(ue,null,{default:k(()=>[x(me,{ref_key:"menuRef",ref:p,"default-active":n(t).activeName,class:"!dark:text-blue"},{default:k(()=>{var V;return[f("div",st,[x(U,{type:"primary",class:"w-full leading-10",onClick:r[0]||(r[0]=u=>n(e).push({name:"compose",query:{address:n(d).query.address,oldFolder:n(d).name==="compose"?n(d).query.oldFolder:n(d).name,type:"compose"}}))},{default:k(()=>[x(h,{class:"iconfont icon-a-addto !text-14px !text-fff"}),we(" "+L(n(v)("common.compose")),1)]),_:1})]),rt,(c(!0),N(A,null,T(w.value.filter(u=>u.show),u=>{var B,J,X;return c(),$(H,{key:u.name,index:u.name,class:j({dark:n(le),active:n(t).firstActiveMenu===u.name||u.name===n(d).name&&!((B=n(d).query.address)!=null&&B.toString())&&!((J=n(d).query.folderName)!=null&&J.toString())||u.name==((X=n(d).query.activeMenu)==null?void 0:X.toString())})},{title:k(()=>[f("div",{class:"w-full dark:text-999 text-444 flex items-center h-14 leading-18px pl-5",onClick:[r[2]||(r[2]=E(()=>{},["stop"])),C=>m({name:u.name})]},[x(h,{class:j(["iconfont",u.icon])},null,8,["class"]),f("span",null,L(u.label),1),u.name==="folder"?(c(),N("div",dt,[u.name==="folder"&&n(t).folderUnreadCount?(c(),N("span",mt,"("+L(n(t).folderUnreadCount)+")",1)):q("",!0),x(h,{class:"iconfont icon-a-addto hover:text-blue !text-s ml-12 !text-444 !dark:text-999",onClick:r[1]||(r[1]=E(C=>i(),["stop"]))})])):u.name==="inbox"&&n(t).inboxUnreadCount?(c(),N("span",ut,"("+L(n(t).inboxUnreadCount)+")",1)):u.name==="sent"&&n(t).sentUnreadCount?(c(),N("span",ct,"("+L(n(t).sentUnreadCount)+")",1)):q("",!0)],8,it)]),default:k(()=>[u.name!=="folder"?(c(),N("div",{key:0,onClick:r[3]||(r[3]=E(()=>{},["stop"]))},[(c(!0),N(A,null,T(F(u.name),C=>(c(),$(R,{key:u.name+C.address,index:u.name+C.address,class:"text-12px !h-40px !leading-10",onClick:_t=>m({name:u.name,address:C.address})},{default:k(()=>[f("div",ft,[f("span",{class:"ellipsis h-10",title:C.address},L(C.address),9,pt),C.unRead!==0?(c(),N("span",vt,"("+L(C.unRead)+")",1)):q("",!0)])]),_:2},1032,["index","onClick"]))),128))])):(c(!0),N(A,{key:1},T(n(t).folderMenuTree,C=>(c(),$(nt,{key:C.name,menu:C,onChangeMenu:m,onEditFolder:i,onDeleteFolder:y,onExpandSubMenu:_},null,8,["menu"]))),128))]),_:2},1032,["index","class"])}),128)),(c(!0),N(A,null,T(g.value,u=>{var B;return c(),$(R,{key:u.name,index:u.name?u.name:(B=n(d).query.folder)==null?void 0:B.toString(),onClick:J=>m({name:u.name})},{default:k(()=>[x(h,{class:j(["iconfont",u.icon])},null,8,["class"]),f("span",xt,L(u.label),1)]),_:2},1032,["index","onClick"])}),128)),(V=n(t).folderList)!=null&&V.length?q("",!0):(c(),N("div",{key:0,class:"px-5 flex items-center py-16 mt-16 text-blue text-14px cursor-pointer border-t border-solid border-line dark:border-444",onClick:r[4]||(r[4]=E(u=>i(),["stop"]))},[x(h,{class:"iconfont icon-a-addto !w-18px !text-blue"}),f("span",null,L(n(v)("common.newFolder")),1)]))]}),_:1},8,["default-active"])]),_:1}),f("div",{class:j(["absolute bottom-56px bg-fff left-0 right-0 h-[56px] flex items-center pl-5 !hover:bg-[#d3eafd] cursor-pointer dark:bg-[#252526] text-444 dark:text-999",n(d).name==="calendar"?"bg-[#d3eafd]  dark:bg-[#244764] !dark:hover:bg-[#244764]":"!dark:hover:bg-[#18222c] "]),onClick:r[5]||(r[5]=V=>n(e).push({name:"calendar"}))},[x(h,{class:"iconfont icon-richeng text-18px text-999 text-opacity-60 mr-8"}),f("span",null,L(n(v)("common.calendar")),1)],2),f("div",{class:"absolute bottom-0 left-0 right-0 h-[56px] bg-fff flex items-center pl-5 space-x-8 hover:bg-blue/20 cursor-pointer dark:bg-[#252526] text-444 dark:text-999",onClick:r[6]||(r[6]=V=>{var u;return n(e).push({name:"addresses",query:te(ee({},n(e).currentRoute.value.query),{oldFolder:(u=n(d).name)==null?void 0:u.toString()})})})},[x(h,{class:"iconfont icon-shezhixitongshezhigongnengshezhishuxing-xian text-18px text-999 text-opacity-60"}),f("span",null,L(n(v)("common.settings")),1)])]),b.value?(c(),$(Je,{key:0,modelValue:b.value,"onUpdate:modelValue":r[7]||(r[7]=V=>b.value=V),"current-folder":M.value,onReload:s},null,8,["modelValue","current-folder"])):q("",!0)],64)}}});var bt=Te(gt,[["__scopeId","data-v-666a5c29"]]);const ht={class:"h-full flex flex-col"},wt={class:"flex-1 overflow-hidden relative"},yt={class:"absolute inset-0 left-202px bg-[#f3f5f5] dark:bg-[#121212]"},Fo=D({setup(o){const t=je(),e=P(),d=K(),{t:v}=G();let b=null;localStorage.setItem("isHasNewMessage","false"),e.isShowNewMessageLogo="false";let M;clearInterval(b);const i=S([]),p=S([]),s=S([]);return b=setInterval(()=>I(this,null,function*(){let w=yield oe();if(!(w<=e.preLatestId)){if(yield e.loadInboxAddressList(!0),d.name==="inbox"){i.value=yield O(e.folder,e.address,-1,e.messageKeyword||"",!0),p.value=yield O(e.folder,"",-1,""),e.preLatestId<w&&W.success(v("common.receiveCountNewMessage",{count:p.value.filter(l=>l.id>e.preLatestId).length})),e.messageList.length<30?M=e.messageList.length:M=30;let m=Me(e.messageList).slice(0,M),y=[],F=m.map(l=>l.id);var g=m.map(l=>l.id).filter(l=>!i.value.map(_=>_.id).includes(l));g.forEach(l=>{e.messageList.splice(e.messageList.findIndex(_=>_.id===l),1)}),i.value.forEach(l=>{F.includes(l.id)||y.push(l)}),e.messageList.forEach((l,_)=>{if(_>M)return;let a=i.value.find(r=>r.id==l.id&&r.read!==l.read);a!=null&&(l.read=a.read)}),y.forEach(l=>{l.id>F[0]?e.messageList.unshift(l):e.messageList.push(l)})}else s.value=yield O("Inbox","",-1,e.messageKeyword||"",!0),s.value.find(m=>m.id>e.preLatestId)&&W.success(v("common.receiveCountNewMessage",{count:s.value.filter(m=>m.id>e.preLatestId).length}));e.preLatestId=w}}),3e5),Q(()=>I(this,null,function*(){e.folder!=="inbox"&&(e.preLatestId=yield oe())})),Fe(()=>{clearInterval(b)}),ne(()=>d,()=>{var w,g,m;e.address=(g=(w=d.query.address)==null?void 0:w.toString())!=null?g:"",e.folder=((m=d.query.folder||d.name)==null?void 0:m.toString())||""},{deep:!0,immediate:!0}),e.loadAddress(),d.name!=="folder"&&d.query.folder!=="folder"&&e.loadFolders(),(w,g)=>{const m=ae("router-view"),y=de,F=He;return c(),$(F,{locale:n(t).locale},{default:k(()=>[f("div",ht,[x(n(Ke),{class:"pl-40px"},{left:k(()=>[x(Pe),x(De)]),right:k(()=>[]),_:1}),f("div",wt,[x(bt),f("div",yt,[x(y,{id:"main-scrollbar",class:"w-full"},{default:k(()=>[(c(),$(m,{key:w.$route.name}))]),_:1})])])])]),_:1},8,["locale"])}}});export{Fo as default};
