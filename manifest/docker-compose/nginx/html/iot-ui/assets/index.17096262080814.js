import{g as e,E as a,_ as t}from"./index.1709626208081.js";import{d as o,a as s,Y as r,S as l,e as i,ah as p,o as n,L as u}from"./vue.1709626208081.js";const d={"class":"upload"};var c=t(o({__name:"index",props:{multiple:{type:Boolean,"default":!1},accept:{type:String,"default":".jpg,.png,.jpeg,.gif"},name:{type:String,"default":""}},emits:["setImg","setImgs"],setup(t,{emit:o}){const c=e("/base-api/api/v1/common/singleImg"),m=localStorage.uploadFileWay,g={Authorization:"Bearer "+localStorage.token},f=o,v=t,_=e=>{var t;if(0!==e.code)return a.error(e.message);const o=null==(t=null==e?void 0:e.data)?void 0:t.full_path;f("setImg",o,v.name)},h=e=>!(e.size/1024/1024>2)||(a.error("图片不能超过2MB!"),!1);return(e,a)=>{const o=p("el-upload");return n(),s("div",d,[r(o,{"class":"hide",accept:t.accept,limit:1,data:{source:i(m)},multiple:t.multiple,headers:g,"before-upload":h,"on-error":e.uploadErr,action:i(c),"on-success":_},{"default":l((()=>[u(e.$slots,"default",{},void 0,!0)])),_:3},8,["accept","data","multiple","on-error","action"])])}}}),[["__scopeId","data-v-6ebf6600"]]);export{c as u};