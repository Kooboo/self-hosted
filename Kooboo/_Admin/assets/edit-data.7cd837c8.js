var _=(u,m,o)=>new Promise((e,p)=>{var a=t=>{try{r(o.next(t))}catch(i){p(i)}},s=t=>{try{r(o.throw(t))}catch(i){p(i)}},r=t=>t.done?e(t.value):Promise.resolve(t.value).then(a,s);r((o=o.apply(u,m)).next())});import{u as g}from"./use-table.ec0182e9.js";import{_ as v}from"./index.5f76a3ad.js";import{d as x,cd as N,x as f,g as R,M as h,o as k,a as D,f as B,b as l,u as d}from"./url.8f5ec20c.js";import{e as E}from"./guid.c1a40312.js";import{E as T}from"./edit-data-form.c8b62766.js";import{_ as q}from"./plugin-vue_export-helper.21dcd24c.js";import"./replace-all.d441bf14.js";import"./i18n.bcd18f8a.js";import"./index.aec72f69.js";import"./windi.19264205.js";import"./index.05e21f33.js";import"./index.a32fb6e5.js";import"./main.582f9de6.js";import"./index.50c16ae5.js";import"./preload-helper.13a99eb0.js";import"./style.9c8f6403.js";import"./toNumber.6efebd6a.js";import"./_baseIsEqual.547729d3.js";import"./index.20b12391.js";import"./dark.166fd971.js";import"./dev-mode.1f379952.js";import"./index.72ccc088.js";import"./classCompletion.a22e38a6.js";import"./userWorker.b3a6730b.js";import"./editor.main.d2800f63.js";import"./vuedraggable.umd.7929a3b6.js";import"./index.ec6ad7db.js";import"./focus-trap.eafcfd1f.js";import"./isNil.98bb3b88.js";import"./event.53b2ad83.js";import"./cloneDeep.060340c1.js";import"./_baseClone.eeff2792.js";import"./index.79f78425.js";import"./error.7e8331f1.js";import"./config.812575d1.js";import"./page.e927203a.js";import"./validate.238a9986.js";import"./index.2341329b.js";import"./index.bda83f28.js";import"./index.bff48780.js";import"./index.649f6c77.js";import"./index.6d63eb53.js";import"./isEqual.11d86bcc.js";import"./index.10f642b2.js";import"./index.5cbbc5d7.js";import"./event.776e7e11.js";import"./index.a3d8335f.js";import"./scroll.4888a9e9.js";import"./aria.75ec5909.js";import"./validator.b73911a9.js";import"./index.c80f5028.js";import"./index.8bc4b1d6.js";import"./dropdown.f6378640.js";import"./refs.d2253dd4.js";import"./use-copy-text.c117d066.js";import"./index.73c941f5.js";import"./toggleComment.5b29ca87.js";import"./use-save-tip.8f44d6c0.js";import"./confirm.eadb49f1.js";import"./logo-transparent.1566007e.js";import"./index.7a75fca3.js";import"./index.373c837a.js";import"./index.59b1471f.js";import"./index.6d22f937.js";import"./debounce.730e1961.js";import"./index.9a83ee01.js";import"./index.d4a6b2d5.js";import"./icon-button.315b6443.js";import"./index.3a977dfb.js";import"./index.4dc50d47.js";import"./index.daafc4da.js";import"./index.3be79fd5.js";import"./index.79dc05e0.js";import"./index.ff00fbd6.js";import"./index.57a23e6d.js";import"./alert.8fe5500a.js";import"./index.d84e2378.js";/* empty css                                                               */import"./media-list.vue_vue_type_style_index_0_scoped_true_lang.c0b84b74.js";/* empty css                                                          */import"./file.734aeed6.js";import"./use-date.a1321c18.js";import"./dayjs.min.59f10137.js";/* empty css                                                          *//* empty css                                                                 */import"./use-file-upload.c73251ef.js";/* empty css                                                         */import"./image-editor.vue_vue_type_style_index_0_scoped_true_lang.53a9e945.js";import"./image-editor.f97cfa84.js";import"./main.esm.6441082b.js";import"./index.7633560d.js";import"./media-dialog.31d6c41c.js";import"./breadcrumb.edaec300.js";import"./plugin-vue_export-helper.41ffa612.js";import"./media.71de4b30.js";import"./index.b8a66e09.js";import"./search-provider.17b07ede.js";import"./last.e7aa49db.js";import"./_baseIndexOf.4d7985be.js";import"./_baseUniq.098d08d2.js";import"./use-operation-dialog.175b540a.js";import"./folder.8308bb9d.js";import"./relations-tag.7a82bbd0.js";import"./index.b83a1079.js";import"./index.ea2df5df.js";import"./browser.6efdef8a.js";import"./throttle.3f3ee457.js";import"./index.564bc658.js";import"./search-input.5b2e8d23.js";import"./layout.29f65550.js";import"./index.4972d853.js";import"./position.f6e7bc86.js";import"./utils.dd51a1eb.js";import"./index.99c245f4.js";import"./index.55babe62.js";import"./index.6c05d6c4.js";import"./file.eef7ed38.js";import"./pick.80c375ab.js";import"./_basePickBy.0604ed3c.js";import"./index.0a8d3d17.js";import"./index.e3f90979.js";import"./index.d6799c63.js";const C={class:"p-32 edit-data pb-150px"},M={class:"rounded-normal bg-fff py-24 px-56px dark:bg-[#252526]"},Q=x({setup(u){const m=N(),o=f("table"),e=f("id")||E,{dbType:p,appendQueryToRoute:a,getListRouteName:s}=g(),r=R(),t=s(),i=h();i.meta.activeMenu=t;function b(){return _(this,null,function*(){var n;yield(n=r.value)==null?void 0:n.save(),c()})}function c(){m.push(a({name:"table-data",query:{table:o,pageNr:i.query.pageNr}}))}function y(){c()}return(n,S)=>(k(),D("div",C,[B("div",M,[l(T,{id:d(e),ref_key:"form",ref:r,"db-type":d(p),table:d(o)},null,8,["id","db-type","table"])]),l(v,{permission:{feature:"database",action:"edit"},onCancel:y,onSave:b})]))}});var Wo=q(Q,[["__scopeId","data-v-117474a5"]]);export{Wo as default};
