import{_ as Y}from"./tooltip.ae959863.js";import{g as M,w as Z,o as ee}from"./i18n.25caaace.js";import{a as f}from"./validate.f3c0b03b.js";import{E as le,a as oe}from"./index.960b9732.js";import{E as A}from"./windi.a815125a.js";import{E as K}from"./index.e9f8834a.js";import{E as D,a as ae}from"./index.94998415.js";import{E as ne}from"./index.db6dfc3c.js";import{E as H}from"./index.f571dfc9.js";import{d as P,g as $,c as O,i as B,o as m,j as c,w as t,u as o,f as y,b as a,a as x,b6 as j,F as S,k as F,t as I,aH as te}from"./url.8f5ec20c.js";const se={class:"w-full flex items-center"},ie=["data-cy"],de={class:"flex justify-between items-center py-5px"},me={class:"font-bold"},ue={class:"bg-gray/60 p-16 rounded-4px dark:bg-[#333]"},re={class:"flex items-center justify-between"},ce=y("span",{class:"mx-8"},"-",-1),pe={class:"w-full flex gap-12"},fe={class:"el-form-item__label"},Ce=P({props:{field:null},emits:["save"],setup(b,{expose:k,emit:g}){const p=b,{t:e}=M(),w={fileTypes:e("common.exampleCode",{code:e("common.fileTypesNotAllowed",{types:"{types}"})}),fileSize:e("common.exampleCode",{code:e("common.fileSizeExceedLimitTips",{size:"{size}"})})},T=$(),C=[{name:e("common.required"),type:"required"},{name:e("common.stringLength"),type:"stringLength",min:0,max:0},{name:e("common.range"),type:"range",min:0,max:0},{name:e("common.regex"),type:"regex",pattern:""},{name:e("common.min"),type:"min",value:0},{name:e("common.max"),type:"max",value:0},{name:e("common.minStringLength"),type:"minLength",value:0},{name:e("common.maxStringLength"),type:"maxLength",value:0},{name:e("common.minChecked"),type:"minChecked",value:0},{name:e("common.maxChecked"),type:"maxChecked",value:0},{name:e("common.fileSize"),type:"fileSize",value:1,pattern:"mb"},{name:e("common.fileTypes"),type:"fileTypes"}],_=$({}),U=O(()=>{let n=[];switch(p.field.controlType.toLowerCase()){case"textbox":case"textarea":n=["required","stringLength","minLength","maxLength","regex"];break;case"content":case"checkbox":n=["required","minChecked","maxChecked"];break;case"number":n=["required","range","regex","min","max"];break;case"mediafile":n=["required","fileSize","fileTypes"];break;default:n=["required"];break}return n}),L=O(()=>p.field.validations.map(n=>n.type)),u=O(()=>C.filter(s=>U.value.includes(s.type)&&!L.value.includes(s.type)));B(()=>u.value,n=>{_.value=n[0]},{immediate:!0}),B(()=>U.value,n=>{const s=p.field.validations.filter(d=>!n.includes(d.type));for(const d of s){const h=p.field.validations.findIndex(R=>R==d);h>-1&&p.field.validations.splice(h,1)}});function q(n){var s;return(s=C.find(d=>d.type===n))==null?void 0:s.name}function V(){p.field.validations.push(_.value)}function G(n){p.field.validations.splice(n,1)}function J(n){try{return n?Array.isArray(n)?n:n.split(","):[]}catch(s){return console.log(["parseFileTypes",s,n]),[]}}function Q(n,s){s.pattern=n.join(",")}return k({form:T}),(n,s)=>{const d=le,h=oe,R=A,z=K,r=D,E=ne,N=H,W=Y,X=ae;return m(),c(X,{ref_key:"form",ref:T,"label-position":"top",model:b.field,onSubmit:s[2]||(s[2]=Z(()=>{},["prevent"])),onKeydown:s[3]||(s[3]=ee(l=>g("save"),["enter"]))},{default:t(()=>[o(u).length?(m(),c(r,{key:0,label:o(e)("common.selectValidationRules")},{default:t(()=>[y("div",se,[a(h,{modelValue:_.value,"onUpdate:modelValue":s[0]||(s[0]=l=>_.value=l),class:"w-3/5","value-key":"type","data-cy":"validation-rules-dropdown"},{default:t(()=>[(m(!0),x(S,null,j(o(u),l=>(m(),c(d,{key:l.type,label:l.name,value:l,"data-cy":"validation-rules-option"},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),a(z,{circle:"",class:"ml-12","data-cy":"add-validation",onClick:s[1]||(s[1]=l=>V())},{default:t(()=>[a(R,{class:"iconfont icon-a-addto text-blue"})]),_:1})])]),_:1},8,["label"])):F("",!0),(m(!0),x(S,null,j(b.field.validations,(l,v)=>(m(),x("div",{key:l.type,"data-cy":l.type},[y("div",de,[y("span",me,I(l.name||q(l.type)),1),a(z,{circle:"","data-cy":"remove-validation",onClick:i=>G(v)},{default:t(()=>[a(R,{class:"iconfont icon-delete text-orange"})]),_:2},1032,["onClick"])]),y("div",ue,[["stringLength","range"].includes(l.type)?(m(),c(r,{key:0,label:o(e)("common.rangeValue")},{default:t(()=>[y("div",re,[a(r,{prop:"validations."+v+".min",rules:o(f)(o(e)("common.fieldRequiredTips"))},{default:t(()=>[a(E,{modelValue:l.min,"onUpdate:modelValue":i=>l.min=i,placeholder:o(e)("common.minimalValue"),class:"w-full","data-cy":"min"},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1032,["prop","rules"]),ce,a(r,{prop:"validations."+v+".max",rules:o(f)(o(e)("common.fieldRequiredTips"))},{default:t(()=>[a(E,{modelValue:l.max,"onUpdate:modelValue":i=>l.max=i,placeholder:o(e)("common.maximumValue"),class:"w-full","data-cy":"max"},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1032,["prop","rules"])])]),_:2},1032,["label"])):["min","minLength","minChecked"].includes(l.type)?(m(),c(r,{key:1,label:o(e)("common.minimalValue"),prop:"validations."+v+".value",rules:o(f)(o(e)("common.fieldRequiredTips"))},{default:t(()=>[a(E,{modelValue:l.value,"onUpdate:modelValue":i=>l.value=i,placeholder:o(e)("common.minimalValue"),class:"w-full","data-cy":"min"},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1032,["label","prop","rules"])):["max","maxLength","maxChecked"].includes(l.type)?(m(),c(r,{key:2,label:o(e)("common.maximumValue"),prop:"validations."+v+".value",rules:o(f)(o(e)("common.fieldRequiredTips"))},{default:t(()=>[a(E,{modelValue:l.value,"onUpdate:modelValue":i=>l.value=i,placeholder:o(e)("common.maximumValue"),class:"w-full","data-cy":"max"},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1032,["label","prop","rules"])):l.type==="regex"?(m(),c(r,{key:3,label:o(e)("common.pattern"),prop:"validations."+v+".pattern",rules:o(f)(o(e)("common.fieldRequiredTips"))},{default:t(()=>[a(N,{modelValue:l.pattern,"onUpdate:modelValue":i=>l.pattern=i,placeholder:o(e)("common.fieldPattern"),"data-cy":"regex-input"},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1032,["label","prop","rules"])):["fileSize"].includes(l.type)?(m(),c(r,{key:4,label:o(e)("common.maximumValue"),prop:"validations."+v+".value",rules:o(f)(o(e)("common.fieldRequiredTips"))},{default:t(()=>[y("div",pe,[a(E,{modelValue:l.value,"onUpdate:modelValue":i=>l.value=i,class:"flex-1",placeholder:o(e)("common.maximumValue"),"data-cy":"max"},null,8,["modelValue","onUpdate:modelValue","placeholder"]),a(h,{modelValue:l.pattern,"onUpdate:modelValue":i=>l.pattern=i,class:"flex-1"},{default:t(()=>[a(d,{label:"KB",value:"kb"}),a(d,{label:"MB",value:"mb"})]),_:2},1032,["modelValue","onUpdate:modelValue"])])]),_:2},1032,["label","prop","rules"])):["fileTypes"].includes(l.type)?(m(),c(r,{key:5,label:o(e)("common.fileTypes"),prop:"validations."+v+".pattern",rules:o(f)(o(e)("common.fieldRequiredTips"))},{default:t(()=>[a(h,{"model-value":J(l.pattern),multiple:"",filterable:"","allow-create":"","default-first-option":"",class:"w-full","data-cy":"file-types-dropdown",onChange:i=>Q(i,l)},{default:t(()=>[a(d,{label:".jpg",value:".jpg"}),a(d,{label:".jpeg",value:".jpeg"}),a(d,{label:".png",value:".png"}),a(d,{label:".gif",value:".gif"}),a(d,{label:".svg",value:".svg"}),a(d,{label:".webp",value:".webp"}),a(d,{label:".ico",value:".ico"})]),_:2},1032,["model-value","onChange"])]),_:2},1032,["label","prop","rules"])):F("",!0),a(r,{label:o(e)("common.validationFailedMessage")},{label:t(()=>[y("label",fe,[te(I(o(e)("common.validationFailedMessage"))+" ",1),w[l.type]?(m(),c(W,{key:0,tip:w[l.type],"enable-html":!0,placement:"top"},null,8,["tip"])):F("",!0)])]),default:t(()=>[a(N,{modelValue:l.msg,"onUpdate:modelValue":i=>l.msg=i,placeholder:o(e)("common.errorMessage"),"data-cy":"error-message"},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1032,["label"])])],8,ie))),128))]),_:1},8,["model"])}}}),ye={class:"w-full"},Ue=P({props:{options:null},setup(b){const k=b,{t:g}=M();function p(w){k.options.splice(k.options.indexOf(w),1)}function e(){k.options.push({key:"",value:""})}return(w,T)=>{const C=H,_=D,U=A,L=K;return m(),x(S,null,[(m(!0),x(S,null,j(b.options,(u,q)=>(m(),x("div",{key:q,class:"w-full flex items-center space-x-4 mb-16"},[a(_,{prop:"selectionOptions."+q+".key",rules:o(f)(o(g)("common.fieldRequiredTips")),class:"flex-1"},{default:t(()=>[a(C,{modelValue:u.key,"onUpdate:modelValue":V=>u.key=V,placeholder:o(g)("common.displayName"),"data-cy":"option-display-name"},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1032,["prop","rules"]),a(_,{prop:"selectionOptions."+q+".value",rules:o(f)(o(g)("common.fieldRequiredTips")),class:"flex-1"},{default:t(()=>[a(C,{modelValue:u.value,"onUpdate:modelValue":V=>u.value=V,placeholder:o(g)("common.value"),"data-cy":"option-value"},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1032,["prop","rules"]),a(L,{circle:"","data-cy":"remove-option",onClick:V=>p(u)},{default:t(()=>[a(U,{class:"iconfont icon-delete text-orange"})]),_:2},1032,["onClick"])]))),128)),y("div",ye,[a(L,{circle:"","data-cy":"add-option",onClick:T[0]||(T[0]=u=>e())},{default:t(()=>[a(U,{class:"iconfont icon-a-addto text-blue"})]),_:1})])],64)}}});export{Ue as _,Ce as a};
