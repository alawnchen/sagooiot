import{L as x,h as _,a2 as B,S as C,T as l,n as I,ai as u,o as U,b as h,_ as a,aa as K,Y as F}from"./vue.1701184304695.js";import{b as V,E as L}from"./index.1701184304695.js";import{r as v}from"./validator.1701184304695.js";const N={class:"dialog-footer"},R=F("\u53D6\u6D88"),S=F("\u786E\u5B9A"),q=x({__name:"btn-form",props:{parentData:Array},emits:["getList"],setup(b,{expose:A,emit:E}){const s=_(!1),d=_(),i={parentId:-1,id:void 0,menuId:0,name:"",types:"",description:"",status:1},e=B({...i}),y={name:[v("\u6309\u94AE\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A")],types:[v("\u6309\u94AE\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A")]},m=async()=>{await d.value.validate(),e.parentId||(e.parentId=-1),await(e.id?V.menu.btn.edit:V.menu.btn.add)(e),L.success("\u64CD\u4F5C\u6210\u529F"),c(),s.value=!1,E("getList")},c=async()=>{Object.assign(e,{...i}),d.value&&d.value.resetFields()};return A({open:async r=>{c(),s.value=!0,I(()=>{Object.assign(e,{...r})})}}),(r,t)=>{const D=u("el-cascader"),n=u("el-form-item"),p=u("el-input"),w=u("el-switch"),g=u("el-form"),f=u("el-button"),k=u("el-dialog");return U(),C(k,{modelValue:s.value,"onUpdate:modelValue":t[6]||(t[6]=o=>s.value=o),title:`${e.id?"\u7F16\u8F91\u6309\u94AE":"\u65B0\u589E\u6309\u94AE"}`,width:"500px","close-on-click-modal":!1,"close-on-press-escape":!1},{footer:l(()=>[h("div",N,[a(f,{onClick:t[5]||(t[5]=o=>s.value=!1)},{default:l(()=>[R]),_:1}),a(f,{type:"primary",onClick:m},{default:l(()=>[S]),_:1})])]),default:l(()=>[a(g,{ref_key:"formRef",ref:d,model:e,rules:y,"label-width":"80px",onKeyup:K(m,["enter","native"])},{default:l(()=>[a(n,{label:"\u4E0A\u7EA7",prop:"parentId"},{default:l(()=>[a(D,{options:b.parentData,props:{label:"name",value:"id",checkStrictly:!0,emitPath:!1},placeholder:"\u8BF7\u9009\u62E9\u4E0A\u7EA7\u83DC\u5355",clearable:"",class:"w100",modelValue:e.parentId,"onUpdate:modelValue":t[0]||(t[0]=o=>e.parentId=o)},null,8,["options","modelValue"])]),_:1}),a(n,{label:"\u540D\u79F0",prop:"name"},{default:l(()=>[a(p,{modelValue:e.name,"onUpdate:modelValue":t[1]||(t[1]=o=>e.name=o),placeholder:"\u8F93\u5165\u540D\u79F0"},null,8,["modelValue"])]),_:1}),a(n,{label:"\u7F16\u7801",prop:"types"},{default:l(()=>[a(p,{modelValue:e.types,"onUpdate:modelValue":t[2]||(t[2]=o=>e.types=o),placeholder:"\u8F93\u5165\u7F16\u7801"},null,8,["modelValue"])]),_:1}),a(n,{label:"\u72B6\u6001",prop:"status"},{default:l(()=>[a(w,{modelValue:e.status,"onUpdate:modelValue":t[3]||(t[3]=o=>e.status=o),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1}),a(n,{label:"\u8BF4\u660E",prop:"description"},{default:l(()=>[a(p,{modelValue:e.description,"onUpdate:modelValue":t[4]||(t[4]=o=>e.description=o),type:"textarea",rows:6},null,8,["modelValue"])]),_:1})]),_:1},8,["model","onKeyup"])]),_:1},8,["modelValue","title"])}}});export{q as default};