var Qe=Object.defineProperty,Je=Object.defineProperties;var We=Object.getOwnPropertyDescriptors;var Ue=Object.getOwnPropertySymbols;var Xe=Object.prototype.hasOwnProperty,Ye=Object.prototype.propertyIsEnumerable;var Ee=(l,h,s)=>h in l?Qe(l,h,{enumerable:!0,configurable:!0,writable:!0,value:s}):l[h]=s,fe=(l,h)=>{for(var s in h||(h={}))Xe.call(h,s)&&Ee(l,s,h[s]);if(Ue)for(var s of Ue(h))Ye.call(h,s)&&Ee(l,s,h[s]);return l},me=(l,h)=>Je(l,We(h));var D=(l,h,s)=>new Promise((u,c)=>{var U=y=>{try{E(s.next(y))}catch(P){c(P)}},$=y=>{try{E(s.throw(y))}catch(P){c(P)}},E=y=>y.done?u(y.value):Promise.resolve(y.value).then(U,$);E((s=s.apply(l,h)).next())});import{d as Se,g as Ze,i as eo,a as oo,b as lo,c as ao,e as to,f as no}from"./media-list.vue_vue_type_style_index_0_scoped_true_lang.6e849230.js";import{B as so}from"./breadcrumb.bcaeaf75.js";import{L as io}from"./index.b9334ca3.js";import{u as ro,_ as Fe,M as co,a as Pe,b as uo,t as Ie,c as Le}from"./search-provider.930da3c1.js";import{g as ie,w as A,o as fo}from"./i18n.25caaace.js";import{_ as mo}from"./folder.8308bb9d.js";import{u as po}from"./use-date.55b953fa.js";import{u as Me,k as vo,d as ve,l as ho,i as go}from"./main.1c3b59e3.js";import{c as yo}from"./use-copy-text.dc8d5085.js";import{d as le,g as w,h as Te,c as K,o as n,a as I,F as oe,b6 as pe,u as o,f as p,t as B,j as k,n as R,k as v,b as V,w as _,e as Z,r as ee,c0 as he,aH as W,b3 as bo,b1 as wo,cg as se,x as ze,G as ko,cl as _o,bz as xo,B as Co,cd as $o,M as Vo,E as Uo,i as J,b7 as Eo}from"./url.8f5ec20c.js";import{a as X}from"./replace-all.b35629e7.js";/* empty css                                                          */import{_ as De}from"./plugin-vue_export-helper.21dcd24c.js";import{E as Fo}from"./index.13a7cab6.js";import{E as Be}from"./index.2e51d36e.js";import{E as Ne}from"./index.158cdd11.js";import{al as Po,j as Io,E as Lo}from"./windi.a815125a.js";import{_ as So}from"./layout.ac9c1bc9.js";import{s as Mo}from"./utils.4193a5f4.js";import{d as To,b as zo}from"./confirm.629bcef4.js";import{_ as Do}from"./index.cc554f5e.js";import{u as Bo}from"./use-file-upload.beffa25f.js";import{_ as No}from"./index.50326354.js";import{u as jo}from"./use-operation-dialog.450d2247.js";import{E as Ao}from"./index.f571dfc9.js";import{E as Ko,a as Ro}from"./index.94998415.js";import{E as qo}from"./index.5c572ff2.js";import{E as Oo}from"./index.a5d96e5a.js";import{E as Ho,a as Go}from"./index.4a9f2d0a.js";import{E as Qo}from"./index.e9f8834a.js";import{l as Jo}from"./last.e7aa49db.js";const Wo=l=>(bo("data-v-5a518433"),l=l(),wo(),l),Xo={key:0,class:"flex items-center flex-wrap"},Yo=["onClick"],Zo={class:"flex flex-1 items-center justify-between px-24"},el={class:"flex items-center cursor-pointer min-w-0","data-cy":"folder"},ol=Wo(()=>p("img",{src:mo,class:"w-48px mr-16"},null,-1)),ll={class:"text-m overflow-hidden"},al=["title"],tl={class:"text-444 dark:text-fff/60 mt-1px","data-cy":"total-files"},nl={key:0,class:"flex-none mb-16"},sl={class:"h-38px px-24 text-666 dark:text-fff/50 flex items-center justify-between border-solid border-t-1 border-black/6 dark:border-fff/10","data-cy":"last-modified-in-grid"},il={class:"text-s"},rl=["onClick"],dl={key:1},cl={class:"hidden absolute top-8 right-8"},ul={class:"h-20px flex items-center space-x-8 dark:text-fff/50 text-14px text-666"},fl=["onClick"],ml=["onClick"],pl=["onClick"],vl=["onClick"],hl=["onClick"],gl={class:"w-full flex-1 rounded-4px overflow-hidden"},yl=["src","alt","title"],bl={class:"ellipsis text-s text-444 dark:text-fff/60 h-32 leading-32px text-center","data-cy":"file-name"},wl={key:0,class:"el-table__empty-block w-full"},kl={class:"el-table__empty-text"},_l=le({props:{folders:null,files:null,hasCheckbox:{type:Boolean},gridCol:null,hideOpenFolder:{type:Boolean},pagination:null,fileActions:null,provider:null},emits:["clickFolder","editImage","changePage","loadMore"],setup(l,{emit:h}){const s=l,u=w(!1);Te(()=>{u.value=!0});const{t:c}=ie(),U=Me(),$=K(()=>s.folders.length===0&&s.files.length===0),E=K(()=>s.fileActions?s.fileActions:["openFolder","copy","preview","edit","download"]),y=w(!1),P=w([]),z=f=>{P.value=[q(f.url)],y.value=!0},C=f=>D(this,null,function*(){const g=yield Se({folder:f,folders:[f],files:[]},s.provider);if(!g)return;const L=X(`Download/Package?file=${g}&type=media`);se(`/_api/v2/${L}`)}),i=f=>{if(f.downloadUrl)se(f.downloadUrl);else{const d=X(`Download/Single?id=${f.key}&type=media&provider=${s.provider}`);se(`/_api/v2/${d}`)}},b=f=>{if(!f.folder){console.warn("folder is empty");return}const d={fullPath:`${f.folder||"/"}`,name:"",lastModified:new Date,count:1};F(d)},{handleClickFolder:F,handleEditImage:r,dialogInfo:m,handleCheckFile:M,getPreviewUrl:q}=ro(h);return(f,d)=>{const g=Be,L=Ne,H=Fo,G=Po;return n(),I("div",null,[l.folders.length?(n(),I("div",Xo,[(n(!0),I(oe,null,pe(l.folders,t=>(n(),I("div",{key:t.fullPath,class:"folder-item bg-fff dark:bg-444 dark:text-fff/50 rounded-4px shadow-l-10 w-354px h-147px mr-32 mb-24 flex flex-col justify-between cursor-pointer",onClick:T=>o(F)(t)},[p("div",Zo,[p("div",el,[ol,p("div",ll,[p("div",{class:"font-bold ellipsis",title:t.name,"data-cy":"folder-name"},B(t.name),9,al),p("div",tl,B(o(c)("common.totalFiles",{n:t.count>99?"99+":t.count},t.count)),1)])]),o(m)?v("",!0):(n(),I("div",nl,[l.hasCheckbox?(n(),k(g,{key:0,modelValue:t.selected,"onUpdate:modelValue":T=>t.selected=T,size:"large",class:R(["hidden rounded-full text-0px !h-24",{"!block":t.selected}]),"data-cy":"checkbox",onClick:d[0]||(d[0]=A(()=>{},["stop"]))},null,8,["modelValue","onUpdate:modelValue","class"])):v("",!0)]))]),p("div",sl,[p("span",il,B(o(c)("common.lastModified"))+": "+B(o(po)(t.lastModified)),1),V(L,{placement:"top","show-after":300,content:o(c)("common.download")},{default:_(()=>[p("span",{class:R(["iconfont icon-xiazai-wenjianxiazai-05 cursor-pointer hover:text-blue font-bold pr-6px hidden text-14px",{"!block":t.selected}]),"data-cy":"copy-in-grid",onClick:A(T=>C(t.fullPath),["stop"])},null,10,rl)]),_:2},1032,["content"])])],8,Yo))),128))])):v("",!0),u.value?(n(),I("div",dl,[p("div",{class:R(["grid gap-2",l.gridCol===4?"grid-cols-4":"grid-cols-6"])},[(n(!0),I(oe,null,pe(l.files,t=>Z((n(),I("div",{key:t.id,class:R(["file-item relative rounded-4px w-full h-161px px-32 pt-32 mb-12 hover:bg-[#E9EAF0] dark:hover:bg-444 flex flex-col",{"bg-[#E9EAF0] dark:bg-444":t.selected}])},[ee(f.$slots,"checkbox",{item:t},()=>[l.hasCheckbox?(n(),k(g,{key:0,modelValue:t.selected,"onUpdate:modelValue":T=>t.selected=T,size:"large",class:R(["hidden absolute top-8 left-8",{"!block":t.selected}]),onClick:d[1]||(d[1]=A(()=>{},["stop"])),onChange:T=>o(M)(t,l.files)},null,8,["modelValue","onUpdate:modelValue","class","onChange"])):v("",!0)],!0),p("div",cl,[p("div",ul,[l.hideOpenFolder?v("",!0):(n(),k(L,{key:0,placement:"top","show-after":300,content:o(c)("common.openFileLocation",t)},{default:_(()=>[p("span",{class:"iconfont icon-folder cursor-pointer hover:text-blue","data-cy":"open-folder",onClick:A(T=>b(t),["stop"])},null,8,fl)]),_:2},1032,["content"])),o(E).includes("copy")?(n(),k(L,{key:1,placement:"top","show-after":300,content:o(c)("common.copyUrl")},{default:_(()=>[p("span",{class:"iconfont icon-copy cursor-pointer hover:text-blue","data-cy":"copy-in-grid",onClick:A(T=>o(yo)(o(he)(o(U).site.baseUrl,t.url)),["stop"])},null,8,ml)]),_:2},1032,["content"])):v("",!0),o(E).includes("preview")?(n(),k(L,{key:2,placement:"top","show-after":300,content:o(c)("common.preview")},{default:_(()=>[p("span",{class:"iconfont icon-eyes cursor-pointer hover:text-blue","data-cy":"preview-in-grid",onClick:A(T=>z(t),["stop"])},null,8,pl)]),_:2},1032,["content"])):v("",!0),o(U).hasAccess("mediaLibrary","edit")&&o(E).includes("edit")?(n(),k(L,{key:3,placement:"top","show-after":300,content:o(c)("common.edit")},{default:_(()=>[p("span",{class:"iconfont icon-a-writein cursor-pointer hover:text-blue","data-cy":"edit-in-grid",onClick:A(T=>o(r)(t,l.provider),["stop"])},null,8,vl)]),_:2},1032,["content"])):v("",!0),o(E).includes("download")?(n(),k(L,{key:4,placement:"top","show-after":300,content:o(c)("common.download")},{default:_(()=>[p("span",{class:"iconfont icon-xiazai-wenjianxiazai-05 cursor-pointer hover:text-blue font-bold","data-cy":"download-in-grid",onClick:A(T=>i(t),["stop"])},null,8,hl)]),_:2},1032,["content"])):v("",!0),ee(f.$slots,"actions",{item:t},void 0,!0)])]),p("div",gl,[ee(f.$slots,"thumbnail",{item:t},()=>[t.thumbnail?(n(),I("img",{key:0,class:"select-none w-full h-full object-contain dark:text-fff/60",src:t.thumbnail,"data-cy":"thumbnail",alt:t.alt||t.name,title:o(c)("common.imageTitle",me(fe({},t),{size:o(vo)(t.size)}))},null,8,yl)):v("",!0)],!0)]),p("div",bl,[ee(f.$slots,"file-name",{item:t},()=>[W(B(t.name),1)],!0)])],2)),[[G,t.loading]])),128))],2),o($)?(n(),I("div",wl,[p("span",kl,B(o(c)("common.noData")),1)])):v("",!0),y.value?(n(),k(H,{key:1,"url-list":P.value,"hide-on-click-modal":"",onClose:d[2]||(d[2]=t=>y.value=!1)},null,8,["url-list"])):v("",!0)])):v("",!0)])}}});var je=De(_l,[["__scopeId","data-v-5a518433"]]);const xl=l=>ve.get(X("online-media/SearchOnline"),l),Cl=()=>ve.get(X("online-media/Providers")),$l=(l,h,s)=>ve.post(X(`online-media/Download?provider=${s}`),{file:h},{path:l},{hiddenLoading:!0}),Vl=["onClick"],Ul=p("span",{class:"absolute top-8 left-8 iconfont text-green icon-fasongchenggong","data-cy":"downloaded"},null,-1),El=p("span",{class:"absolute top-8 left-8 iconfont text-orange icon-fasongshibai","data-cy":"download-failed"},null,-1),Fl=le({props:{provider:null},emits:["reload"],setup(l,{expose:h,emit:s}){const u=l,c=w(!1),{t:U}=ie(),$=w(),E=w([]),y=w([]),P=()=>D(this,null,function*(){E.value=yield Cl()});function z(r){return D(this,null,function*(){return yield xl(r)})}function C(r){y.value=r}function i(r){var M;r.loading=!0;const m={id:r.id,name:r.name,url:r.url,alt:r.alt};return r.status=void 0,$l((M=ze("folder"))!=null?M:"/",m,u.provider).then(()=>{r.status=!0,s("reload")}).catch(()=>{r.status=!1}).finally(()=>{r.selected=!0,r.loading=!1})}P();function b(){var r;c.value=!0,(r=$.value)==null||r.reset()}function F(r){return D(this,null,function*(){if(y.value.some(m=>m.loading===!0)){yield Mo(U("common.downloadingImageTip"),{showCancelButton:!1});return}r()})}return h({show:b}),(r,m)=>{const M=Ne,q=je;return n(),k(So,{ref_key:"searchDialogRef",ref:$,modelValue:c.value,"onUpdate:modelValue":m[0]||(m[0]=f=>c.value=f),"fetch-data":z,providers:E.value,"before-close":F,onListChanged:C},{default:_(({list:f})=>[V(q,{class:"mr-12",folders:[],files:f||[],"has-checkbox":!1,"hide-open-folder":!0,"grid-col":4,"file-actions":["copy","preview"],provider:l.provider},{actions:_(({item:d})=>[d.status!==!0?(n(),k(M,{key:0,placement:"top","show-after":300,content:o(U)("common.downloadToMediaLibrary")},{default:_(()=>[p("span",{class:"iconfont icon-xiazai-wenjianxiazai-05 cursor-pointer hover:text-blue font-bold","data-cy":"download-in-search",onClick:A(g=>i(d),["stop"])},null,8,Vl)]),_:2},1032,["content"])):v("",!0)]),checkbox:_(({item:d})=>[d.status===!0?(n(),k(M,{key:0,placement:"top","show-after":300,content:o(U)("common.downloaded")},{default:_(()=>[Ul]),_:1},8,["content"])):v("",!0),d.status===!1?(n(),k(M,{key:1,placement:"top","show-after":300,content:o(U)("common.downloadFailed")},{default:_(()=>[El]),_:1},8,["content"])):v("",!0)]),_:2},1032,["files","provider"])]),_:1},8,["modelValue","providers"])}}}),Pl=le({props:{folder:null,provider:null,multiple:{type:Boolean}},emits:["afterUpload"],setup(l,{emit:h}){const s=l;let u;const{getAccepts:c,checkFile:U}=Bo(),$=c("image"),E=K(()=>{var i;return Ze((i=s.provider)!=null?i:"default")});function y(){u||(u=Io.service({background:"rgba(0, 0, 0, 0.5)"}))}function P(i){return D(this,null,function*(){var r;if(!U($,i))return!1;const b=he(s.folder,i.name);(yield eo((r=s.provider)!=null?r:"default",b).then(()=>!0).catch(()=>!1))||(yield To()),y()})}function z(){u==null||u.close(),u=void 0}function C(i){ho(),z(),h("afterUpload",i)}return(i,b)=>{const F=Do;return n(),k(F,{permission:{feature:"mediaLibrary",action:"edit"},multiple:l.multiple,action:o(E),accept:o($).join(","),"before-upload":P,"on-success":C,data:{folder:l.folder},"data-cy":"upload"},{default:_(()=>[ee(i.$slots,"default")]),_:3},8,["multiple","action","accept","data"])}}}),Il={class:"flex items-center justify-center h-90px w-90px"},Ll=le({props:{modelValue:{type:Boolean},file:null,provider:null},emits:["saved"],setup(l,{emit:h}){const s=l,u=w(),c=w({}),{t:U}=ie(),{visible:$,handleClose:E}=jo(s,h),y=Me();function P(C){return C&&(_o(C)?C:(C=xo(C,{siteId:ze("siteId")}),he(y.site.prUrl,C)))}function z(){var C;(C=u.value)==null||C.validate(i=>D(this,null,function*(){var b;i&&(yield oo({id:s.file.key,alt:(b=s.file.alt)!=null?b:"",name:s.file.name,provider:s.provider}),E(),h("saved"))}))}return(C,i)=>{const b=Ao,F=Ko,r=qo,m=Ro,M=No,q=Oo;return n(),k(q,{modelValue:o($),"onUpdate:modelValue":i[3]||(i[3]=f=>ko($)?$.value=f:null),width:"600px","close-on-click-modal":!1,title:o(U)("common.editImage"),onClose:o(E)},{footer:_(()=>[V(M,{"confirm-label":o(U)("common.save"),onConfirm:z,onCancel:o(E)},null,8,["confirm-label","onCancel"])]),default:_(()=>[l.file?(n(),k(m,{key:0,ref_key:"form",ref:u,class:"el-form--label-normal",model:l.file,rules:c.value,"label-position":"top",onSubmit:i[2]||(i[2]=A(()=>{},["prevent"]))},{default:_(()=>[V(F,{prop:"name",label:o(U)("common.name")},{default:_(()=>[V(b,{modelValue:l.file.name,"onUpdate:modelValue":i[0]||(i[0]=f=>l.file.name=f),disabled:"","data-cy":"folder-name-input"},null,8,["modelValue"])]),_:1},8,["label"]),V(F,{prop:"alt",label:o(U)("common.altText")},{default:_(()=>[V(b,{modelValue:l.file.alt,"onUpdate:modelValue":i[1]||(i[1]=f=>l.file.alt=f),"data-cy":"folder-alt-input",onKeydown:fo(z,["enter"])},null,8,["modelValue","onKeydown"])]),_:1},8,["label"]),V(F,{label:o(U)("common.image")},{default:_(()=>[p("div",Il,[V(r,{style:{"max-height":"100%","max-width":"100%"},src:l.file.thumbnail,"zoom-rate":1.2,"max-scale":7,"min-scale":.2,"preview-src-list":[P(l.file.url)],"initial-index":0,fit:"contain"},null,8,["src","zoom-rate","min-scale","preview-src-list"])])]),_:1},8,["label"])]),_:1},8,["model","rules"])):v("",!0)]),_:1},8,["modelValue","title","onClose"])}}}),Sl={class:"media"},Ml={class:"p-24px media__body"},Tl={class:"flex items-center space-x-24"},zl={key:1},Dl={key:0,class:"rounded-normal overflow-hidden shadow-s-10"},Bl={key:1},Nl=le({props:{gridCol:null},emits:["loaded"],setup(l,{expose:h,emit:s}){var $e;const{t:u}=ie(),c=Co("dialogInfo"),U=$o(),$=Vo(),E=[{displayName:u("common.all"),value:"all"},{displayName:u("common.page"),value:"page"},{displayName:u("common.style"),value:"style"},{displayName:u("common.view"),value:"view"},{displayName:u("common.layout"),value:"layout"},{displayName:u("common.htmlBlock"),value:"HTMLBlock"},{displayName:u("common.content"),value:"TextContent"}],y=w("all"),P=w(!1),z=w(!1),C=w(($e=$.query.listType)!=null?$e:"grid"),i=w([]),b=w([]),F=w(!1),r=w("/"),m=Uo({currentPage:1,pageSize:24,totalCount:0}),M=w(!1),q=w(!1),f=w({key:"",alt:"",name:"",url:"",thumbnail:""}),d=w(""),g=w($.query.provider||"default"),L=w([]),H=K(()=>b.value.filter(e=>e.selected)),G=K(()=>i.value.filter(e=>e.selected)),t=K(()=>H.value.length+G.value.length),T=K(()=>b.value.length+i.value.length),ae=K(()=>y.value==="all"),ge=w([]),ye=K(()=>ge.value.map(e=>(e.name==="searchResult"?e.name=u("common.searchResult"):e.name==="root"&&!c&&(e.name=u("common.mediaLibrary")),e))),Ae=K(()=>!c&&(g.value||"default")==="default");Te(()=>{c?Q():J(()=>$.query,e=>{$.name==="media"&&(r.value=e.folder||"/",d.value=e.keyword||"",g.value=e.provider||"default",Q())},{immediate:!0,deep:!0})}),J(()=>y.value,()=>{r.value="/",Q()}),J(()=>P.value,e=>{i.value.forEach(a=>{a.selected=e}),b.value.forEach(a=>{a.selected=e})}),J(()=>t.value,e=>{e===0?(P.value=!1,z.value=!1):e<T.value?z.value=!0:e===T.value&&(z.value=!1,P.value=!0)}),J(()=>$.query.listType,()=>{C.value=$.query.listType}),J(()=>d.value,()=>{m.currentPage=1});function Ke(e,a){return D(this,null,function*(){var j,O,S;const N=yield to({pageNr:e,pageSize:m.pageSize,provider:g.value,path:r.value,keyword:(j=d.value)==null?void 0:j.trim(),startAfter:e>1&&(S=(O=Jo(b.value))==null?void 0:O.key)!=null?S:""},a);be(N,e)})}function be(e,a){var O;if(L.value=(O=e.providers)!=null?O:[],ge.value=e.crumbPath,d.value&&(y.value="all"),e.errorMessage){i.value=[],b.value=[],m.totalCount=0,m.currentPage=1,console.warn(e.errorMessage),go(u("common.configError",{message:e.errorMessage.replace("{troubleshoot}",u("common.troubleshoot"))}),!0,{dangerouslyUseHTMLString:!0});return}F.value=e.files.infinite||!1,F.value&&(a=e.files.pageNr);const N=(e.folders||[]).map(S=>(S.selected=!1,S));!F.value||a<=1?i.value=Le(N,"id"):i.value=Le([...i.value,...N],"id");const j=e.files.list.map(S=>(S.selected=!1,S));b.value=!F.value||a<=1?j:[...b.value,...j],m.totalCount=e.files.totalCount,m.currentPage=a,s("loaded",{keyword:d.value,data:e,page:a,providers:L.value,infinite:F.value})}function re(e){m.currentPage=e,ce(m.currentPage)}function de(e){r.value=e.fullPath,m.currentPage=1,d.value="",b.value=[],i.value=[],Y()}function we(e){f.value=e,q.value=!0}function Re(e,a){return D(this,null,function*(){const N=yield no({pageNr:e,pageSize:m.pageSize,provider:g.value,by:y.value},a);be(N,e)})}function ce(e,a){ae.value?Ke(e,a):Re(e,a)}function Q(e){Y(),ce(m.currentPage,e)}function qe(){M.value=!0}const ke=w();function Oe(){var e;(e=ke.value)==null||e.show()}function _e(e){m.currentPage=1,Q(e)}function He(){return D(this,null,function*(){try{if(yield zo(G.value.length+H.value.length),G.value.length>0&&(yield lo(G.value.map(e=>e.fullPath),g.value)),H.value.length>0){const e=H.value.map(a=>a.key||a.id);yield ao(e,g.value)}_e()}catch(e){}})}function Ge(){return D(this,null,function*(){const e=G.value.map(S=>S.fullPath),a=H.value.map(S=>S.key),N={root:r.value,folders:e,files:a},j=yield Se(N,g.value);if(!j)return;const O=X(`Download/Package?file=${j}&type=media`);se(`/_api/v2/${O}`)})}function xe(e){Ie(e.fullPath,"/")!==Ie(r.value,"/")&&ue(e)}function ue(e){de(e)}function Ce(){ue({name:"root",fullPath:"/"})}function Y(){c?ce(m.currentPage):U.push({name:$.name,query:me(fe({},$.query),{folder:r.value,keyword:d.value,provider:g.value,listType:C.value})})}return h({selectedFiles:H,getCrumbPath:ye,handleClickPath:ue,handleClickBreadcrumb:xe}),(e,a)=>{var Ve;const N=Ho,j=Go,O=Be,S=Lo,te=Qo,ne=Eo("hasPermission");return n(),I("div",Sl,[o(c)?v("",!0):(n(),I("div",{key:0,class:R(["flex items-center justify-between px-24 pt-0 relative",{"pb-24":g.value==="default"}])},[V(so,{class:R({"w-[calc(100%-400px)]":L.value.length>1,"w-[calc(100%-270px)]":L.value.length<=1}),"crumb-path":o(ye),onHandleClickPath:xe},null,8,["class","crumb-path"]),p("div",{class:R({"max-w-400px":L.value.length>1,"max-w-270px":L.value.length<=1})},[V(Fe,{provider:g.value,"onUpdate:provider":[a[0]||(a[0]=x=>g.value=x),Ce],searchKey:d.value,"onUpdate:searchKey":[a[1]||(a[1]=x=>d.value=x),Y],providers:L.value},null,8,["provider","searchKey","providers"])],2)],2)),o(Ae)?(n(),k(j,{key:1,modelValue:y.value,"onUpdate:modelValue":a[2]||(a[2]=x=>y.value=x),class:"el-tabs--hide-content"},{default:_(()=>[(n(!0),I(oe,null,pe(o(E),x=>(n(),I(oe,null,[x.value==="all"||!d.value?(n(),k(N,{key:x.value,label:x.displayName,name:x.value},null,8,["label","name"])):v("",!0)],64))),256))]),_:1},8,["modelValue"])):v("",!0),p("div",Ml,[p("div",{class:R(["flex items-center justify-between media__head",{"mb-24px":!o(c)}])},[p("div",Tl,[o(ae)?(n(),I(oe,{key:0},[o(c)?v("",!0):(n(),k(O,{key:0,modelValue:P.value,"onUpdate:modelValue":a[3]||(a[3]=x=>P.value=x),indeterminate:z.value,size:"large","data-cy":"check-all"},{default:_(()=>[W(B(o(u)("common.selectAllFiles")),1)]),_:1},8,["modelValue","indeterminate"])),V(Pl,{disabled:!!d.value,folder:r.value,provider:g.value,multiple:!0,onAfterUpload:a[4]||(a[4]=x=>_e(!0))},null,8,["disabled","folder","provider"]),o(c)?v("",!0):Z((n(),k(te,{key:1,disabled:!!d.value,round:"","data-cy":"new-folder",onClick:qe},{default:_(()=>[V(S,{class:"iconfont icon-a-addfile"}),W(" "+B(o(u)("common.newFolder")),1)]),_:1},8,["disabled"])),[[ne,{feature:"mediaLibrary",action:"edit"}]]),o(c)?v("",!0):Z((n(),k(te,{key:2,disabled:!!d.value,round:"","data-cy":"search",onClick:Oe},{default:_(()=>[V(S,{class:"iconfont icon-search"}),W(" "+B(o(u)("common.search")),1)]),_:1},8,["disabled"])),[[ne,{feature:"mediaLibrary",action:"view"}]]),o(t)>0&&!o(c)?Z((n(),k(te,{key:3,round:"","data-cy":"download",onClick:Ge},{default:_(()=>[V(S,{class:"iconfont icon-xiazai-wenjianxiazai-05"}),W(" "+B(o(u)("common.download")),1)]),_:1})),[[ne,{feature:"mediaLibrary",action:"view"}]]):v("",!0),o(t)>0&&!o(c)?Z((n(),k(te,{key:4,round:"",class:"text-orange","data-cy":"delete",onClick:He},{default:_(()=>[V(S,{class:"iconfont icon-delete"}),W(" "+B(o(u)("common.delete")),1)]),_:1})),[[ne,{feature:"mediaLibrary",action:"delete"}]]):v("",!0)],64)):v("",!0)]),o(c)?(n(),I("div",zl,[V(Fe,{provider:g.value,"onUpdate:provider":[a[6]||(a[6]=x=>g.value=x),Ce],searchKey:d.value,"onUpdate:searchKey":[a[7]||(a[7]=x=>d.value=x),Y],providers:L.value},null,8,["provider","searchKey","providers"])])):(n(),k(io,{key:0,current:C.value,"onUpdate:current":a[5]||(a[5]=x=>C.value=x),onChange:Y},null,8,["current"]))],2),C.value==="list"?(n(),I("div",Dl,[V(co,{folders:i.value,files:b.value,"has-checkbox":o(ae),"hide-open-folder":!d.value,provider:g.value,onClickFolder:de,onEditImage:we},null,8,["folders","files","has-checkbox","hide-open-folder","provider"]),b.value.length||i.value.length?(n(),k(Pe,{key:0,class:"bg-fff dark:bg-444 py-24",pagination:o(m),infinite:F.value,onCurrentChange:re},null,8,["pagination","infinite"])):v("",!0)])):(n(),I("div",Bl,[V(je,{folders:i.value,files:b.value,"has-checkbox":o(ae),"hide-open-folder":!d.value,"grid-col":(Ve=l.gridCol)!=null?Ve:6,pagination:o(m),provider:g.value,onClickFolder:de,onEditImage:we,onChangePage:re},null,8,["folders","files","has-checkbox","hide-open-folder","grid-col","pagination","provider"]),b.value.length||i.value.length?(n(),k(Pe,{key:0,class:R(["dark:bg-[#1e1e1e] py-24",l.gridCol?"bg-fff dark:bg-[#222222]":"bg-[#f3f5f5]"]),pagination:o(m),infinite:F.value,onCurrentChange:re},null,8,["class","pagination","infinite"])):v("",!0)]))]),V(uo,{modelValue:M.value,"onUpdate:modelValue":a[8]||(a[8]=x=>M.value=x),path:r.value,folders:i.value,provider:g.value,onCreateSuccess:Q},null,8,["modelValue","path","folders","provider"]),V(Ll,{modelValue:q.value,"onUpdate:modelValue":a[9]||(a[9]=x=>q.value=x),file:f.value,provider:g.value},null,8,["modelValue","file","provider"]),V(Fl,{ref_key:"searchDialog",ref:ke,provider:g.value,onReload:a[10]||(a[10]=x=>Q(!0))},null,8,["provider"])])}}});var ya=De(Nl,[["__scopeId","data-v-3ef491b5"]]);export{ya as M,Pl as _};
