var h=(w,m,s)=>new Promise((g,v)=>{var l=t=>{try{n(s.next(t))}catch(c){v(c)}},p=t=>{try{n(s.throw(t))}catch(c){v(c)}},n=t=>t.done?g(t.value):Promise.resolve(t.value).then(l,p);n((s=s.apply(w,m)).next())});import{d as j,cd as K,x as L,g as E,i as B,cj as H,b7 as M,o as x,a as V,u as o,f as i,j as I,w as f,k as C,b as a,F as O,t as F,e as Q,aH as q,K as z}from"./url.8f5ec20c.js";import{u as G}from"./replace-all.b35629e7.js";import{_ as J}from"./index.214551b7.js";import{c as W}from"./index.20e420e8.js";import{_ as X}from"./index.47274d5a.js";import{u as Y,_ as Z}from"./sidebar.35d6032e.js";import{_ as tt}from"./index.5d366322.js";import{u as ot,E as et}from"./main.1c3b59e3.js";import{u as rt}from"./use-save-tip.63213ba1.js";import{K as it,L as at}from"./dev-mode.d22f2f80.js";import{g as mt}from"./i18n.25caaace.js";import{_ as st}from"./plugin-vue_export-helper.21dcd24c.js";import{E as pt}from"./index.f571dfc9.js";import{E as lt,a as nt}from"./index.94998415.js";import{E as ct}from"./index.c6488b3c.js";import{E as ut}from"./index.e9f8834a.js";import"./classCompletion.a22e38a6.js";import"./userWorker.b3a6730b.js";import"./editor.main.d2800f63.js";import"./preload-helper.13a99eb0.js";import"./guid.c1a40312.js";import"./vuedraggable.umd.5305b990.js";import"./windi.a815125a.js";import"./index.158cdd11.js";import"./focus-trap.81e4fb05.js";import"./isNil.98bb3b88.js";import"./event.53b2ad83.js";import"./index.1e7e06b8.js";import"./cloneDeep.f12cadc0.js";import"./_baseClone.885c975f.js";import"./_baseIsEqual.0a4e01e5.js";import"./basic.9508f80f.js";import"./index.50326354.js";import"./index.960b9732.js";import"./index.f9c89813.js";import"./error.7e8331f1.js";import"./event.776e7e11.js";import"./scroll.0cf77af8.js";import"./isEqual.2e410d13.js";import"./debounce.730e1961.js";import"./toNumber.6efebd6a.js";import"./index.c93fe8e7.js";import"./validator.9b0d789f.js";import"./index.a5d96e5a.js";import"./index.1d16d007.js";import"./refs.d2253dd4.js";import"./index.537a2de2.js";import"./index.db6dfc3c.js";import"./index.e3f90979.js";import"./validate.f3c0b03b.js";import"./index.878e2bbf.js";import"./index.adb17f32.js";import"./index.b065185c.js";import"./index.ab12ea9e.js";import"./index.b1b64a44.js";import"./style.1b77b3a2.js";import"./index.0ea2a2de.js";import"./string.75b81683.js";import"./pickBy.a49d7a76.js";import"./_basePickBy.1e82afbc.js";import"./pick.51150ea7.js";import"./_createCompounder.2027fb34.js";import"./isEmpty.6bc22915.js";import"./last.e7aa49db.js";import"./index.50c16ae5.js";import"./index.e89ba775.js";import"./index.5f0a99c5.js";import"./index.2e51d36e.js";import"./index.a0b57910.js";import"./dropdown.fed924b2.js";import"./confirm.629bcef4.js";import"./logo-transparent.1566007e.js";import"./index.60799c00.js";import"./aria.75ec5909.js";import"./config.e9159c41.js";import"./dark.bb3c8a6e.js";import"./page.729fa09e.js";import"./use-copy-text.dc8d5085.js";import"./index.7c7fa606.js";import"./toggleComment.5b29ca87.js";import"./index.5b499f72.js";import"./icon-button.0e134c9b.js";import"./index.0c2ced08.js";import"./index.3be79fd5.js";import"./index.925df86b.js";import"./index.378f5080.js";import"./index.64203830.js";import"./alert.8fe5500a.js";import"./index.84e4a218.js";/* empty css                                                               */import"./media-list.vue_vue_type_style_index_0_scoped_true_lang.6e849230.js";/* empty css                                                          */import"./file.9f559d69.js";import"./use-date.55b953fa.js";import"./dayjs.min.2044f1dd.js";/* empty css                                                          *//* empty css                                                                 */import"./use-file-upload.beffa25f.js";/* empty css                                                         */import"./image-editor.vue_vue_type_style_index_0_scoped_true_lang.e5d64b31.js";import"./image-editor.e294b472.js";import"./main.esm.8d4b9329.js";import"./index.1be51314.js";const dt={key:0,class:"flex w-full h-full"},_t={class:"flex-1 pr-32 pl-80px flex flex-col min-h-400px min-w-600px"},ft={class:"pt-16"},vt={class:"flex-1 rounded-normal overflow-hidden shadow-s-10 mb-100px min-h-400px bg-fff"},ht={class:"bg-card dark:bg-[#333] shadow-s-10 w-400px h-full dark:text-fff/86"},xt={class:"pb-150px"},gt={class:"flex items-center px-24 py-12 leading-none"},bt={class:"flex-1 text-m"},wt=j({setup(w){const{t:m}=mt(),s=K(),g=L("id"),v=ot(),l=E(),p=rt((r,e)=>{if(!(r==="el"&&e))return e}),{init:n,model:t,save:c,preview:N,styles:u,scripts:d}=Y();n(g),B(()=>t.value,()=>{var r;z(()=>{p.init([t.value,u.value,d.value])}),l.value=(r=t.value)==null?void 0:r.urlPath});const P=E(),b=()=>h(this,null,function*(){var r,e;yield(r=P.value)==null?void 0:r.validate(),yield c(),et.success(m("common.saveSuccess")),p.init([t.value,u.value,d.value]),l.value=(e=t.value)==null?void 0:e.urlPath}),S=()=>{s.goBackOrTo(G({name:"pages"}))},R=()=>h(this,null,function*(){yield b(),S()});return H((r,e,_)=>h(this,null,function*(){r.name==="login"?_():yield p.check([t.value,u.value,d.value]).then(()=>{_()}).catch(()=>{_(!1)})})),B(()=>[t.value,u.value,d.value],()=>{p.changed([t.value,u.value,d.value])},{deep:!0}),W("save",b),it().loadAll(),at().loadAll(),(r,e)=>{const _=pt,T=lt,$=nt,A=ct,D=ut,U=M("hasPermission");return x(),V(O,null,[o(t)?(x(),V("div",dt,[i("div",_t,[i("div",ft,[o(t)?(x(),I($,{key:0},{default:f(()=>[a(T,{label:o(m)("common.pageName")},{default:f(()=>[a(_,{modelValue:o(t).name,"onUpdate:modelValue":e[0]||(e[0]=y=>o(t).name=y),title:o(t).name,class:"w-300px",disabled:"",onInput:e[1]||(e[1]=y=>{var k;return o(t).name=(k=o(t))==null?void 0:k.name.replace(/\s+/g,"")})},null,8,["modelValue","title"])]),_:1},8,["label"])]),_:1})):C("",!0)]),i("div",vt,[a(X,{content:o(N),"base-url":o(v).site.prUrl},null,8,["content","base-url"])])]),i("div",ht,[a(A,null,{default:f(()=>[i("div",xt,[i("div",gt,[i("p",bt,F(o(m)("common.setting")),1),a(tt)]),a(Z,{"old-url-path":l.value},null,8,["old-url-path"])])]),_:1})])])):C("",!0),a(J,{back:"",permission:{feature:"pages",action:"edit"},onCancel:S,onSave:b},{"extra-buttons":f(()=>[Q((x(),I(D,{round:"",type:"primary","data-cy":"save-and-return",onClick:R},{default:f(()=>[q(F(o(m)("common.saveAndReturn")),1)]),_:1})),[[U,{feature:"pages",action:"edit"}]])]),_:1})],64)}}});var ge=st(wt,[["__scopeId","data-v-4e095ec5"]]);export{ge as default};
