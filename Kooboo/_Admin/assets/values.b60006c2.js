var u=(d,a,i)=>new Promise((o,s)=>{var p=t=>{try{r(i.next(t))}catch(m){s(m)}},n=t=>{try{r(i.throw(t))}catch(m){s(m)}},r=t=>t.done?o(t.value):Promise.resolve(t.value).then(p,n);r((i=i.apply(d,a)).next())});import{_ as h}from"./k-table.7d05e82e.js";import{B as b}from"./breadcrumb.edaec300.js";import{d as w,g as y,c as C,o as c,a as f,f as g,b as _,u as l,w as S,F as v,x as k,b6 as B,j as N}from"./url.8f5ec20c.js";import{g as x}from"./i18n.bcd18f8a.js";import{V as E}from"./dev-mode.1f379952.js";import{b as F}from"./confirm.eadb49f1.js";import{E as V}from"./index.b83a1079.js";import"./sortable.esm.a99254e8.js";import"./icon-button.315b6443.js";import"./windi.19264205.js";import"./index.aec72f69.js";import"./index.05e21f33.js";import"./index.ec6ad7db.js";import"./focus-trap.eafcfd1f.js";import"./isNil.98bb3b88.js";import"./event.53b2ad83.js";import"./index.3a977dfb.js";import"./index.c80f5028.js";import"./main.582f9de6.js";import"./index.50c16ae5.js";import"./preload-helper.13a99eb0.js";import"./replace-all.d441bf14.js";import"./index.564bc658.js";import"./index.6d22f937.js";import"./index.5cbbc5d7.js";import"./event.776e7e11.js";import"./error.7e8331f1.js";import"./index.79f78425.js";import"./scroll.4888a9e9.js";import"./isEqual.11d86bcc.js";import"./_baseIsEqual.547729d3.js";import"./debounce.730e1961.js";import"./toNumber.6efebd6a.js";import"./index.9a83ee01.js";import"./validator.b73911a9.js";import"./index.daafc4da.js";import"./index.59b1471f.js";/* empty css                                                               */import"./plugin-vue_export-helper.21dcd24c.js";import"./plugin-vue_export-helper.41ffa612.js";import"./guid.c1a40312.js";import"./index.72ccc088.js";import"./classCompletion.a22e38a6.js";import"./userWorker.b3a6730b.js";import"./editor.main.d2800f63.js";import"./vuedraggable.umd.7929a3b6.js";import"./cloneDeep.060340c1.js";import"./_baseClone.eeff2792.js";import"./config.812575d1.js";import"./dark.166fd971.js";import"./page.e927203a.js";import"./validate.238a9986.js";import"./index.2341329b.js";import"./index.bda83f28.js";import"./index.bff48780.js";import"./index.649f6c77.js";import"./index.a32fb6e5.js";import"./style.9c8f6403.js";import"./index.6d63eb53.js";import"./index.10f642b2.js";import"./index.a3d8335f.js";import"./aria.75ec5909.js";import"./index.8bc4b1d6.js";import"./dropdown.f6378640.js";import"./refs.d2253dd4.js";import"./use-copy-text.c117d066.js";import"./index.73c941f5.js";import"./toggleComment.5b29ca87.js";import"./use-save-tip.8f44d6c0.js";import"./index.7a75fca3.js";import"./index.373c837a.js";import"./index.d4a6b2d5.js";import"./index.4dc50d47.js";import"./index.3be79fd5.js";import"./index.79dc05e0.js";import"./index.ff00fbd6.js";import"./index.57a23e6d.js";import"./alert.8fe5500a.js";import"./index.d84e2378.js";import"./media-list.vue_vue_type_style_index_0_scoped_true_lang.c0b84b74.js";/* empty css                                                          */import"./file.734aeed6.js";import"./use-date.a1321c18.js";import"./dayjs.min.59f10137.js";/* empty css                                                          *//* empty css                                                                 */import"./use-file-upload.c73251ef.js";/* empty css                                                         */import"./image-editor.vue_vue_type_style_index_0_scoped_true_lang.53a9e945.js";import"./image-editor.f97cfa84.js";import"./main.esm.6441082b.js";import"./index.7633560d.js";import"./logo-transparent.1566007e.js";const z={class:"p-24 flex items-center"},D={class:"p-24 pt-0"},wo=w({setup(d){const{t:a}=x(),i=E(),o=y({list:[],pageNr:1,pageSize:30,totalCount:0,totalPages:0}),s=C(()=>{let r=new Set;return o.value.list.forEach(t=>{var m;(m=Object.keys(t.values))==null||m.forEach(e=>r.add(e))}),Array.from(r)}),p=r=>u(this,null,function*(){o.value=yield i.getFormValues(k("id"),r),o.value.list||(o.value.list=[]),o.value.list.sort((t,m)=>t.lastModified>m.lastModified?-1:1)}),n=r=>u(this,null,function*(){yield F(r.length),i.deleteFormValues(r.map(t=>t.id)),p(o.value.pageNr)});return p(o.value.pageNr),(r,t)=>{const m=V;return c(),f(v,null,[g("div",z,[_(b,{"crumb-path":[{name:l(a)("common.forms"),route:{name:"forms"}},{name:l(a)("common.data")}]},null,8,["crumb-path"])]),g("div",D,[_(l(h),{data:o.value.list,"show-check":"","table-layout":"auto",pagination:{pageSize:o.value.pageSize,pageCount:o.value.totalPages,currentPage:o.value.pageNr},onChange:p,onDelete:n},{default:S(()=>[(c(!0),f(v,null,B(l(s),e=>(c(),N(m,{key:e,label:e,prop:`values.${e}`},null,8,["label","prop"]))),128))]),_:1},8,["data","pagination"])])],64)}}});export{wo as default};
