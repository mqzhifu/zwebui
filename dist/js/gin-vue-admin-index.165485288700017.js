/*! 
 Build based on gin-vue-admin 
 Time : 1654852887000 */
var e=(e,a,t)=>new Promise(((l,i)=>{var n=e=>{try{o(t.next(e))}catch(a){i(a)}},s=e=>{try{o(t.throw(e))}catch(a){i(a)}},o=e=>e.done?l(e.value):Promise.resolve(e.value).then(n,s);o((t=t.apply(e,a)).next())}));import{f as a,h as t,r as l}from"./gin-vue-admin-autoCode.1654852887000.js";import{_ as i,u as n,r as s,b as o,o as u,c as d,d as r,e as c,w as p,h as m,t as f,y as g,q as v,V as h,i as b}from"../gva/gin-vue-admin-index.1654852887000.js";import{a as y}from"./gin-vue-admin-format.1654852887000.js";import"./gin-vue-admin-date.1654852887000.js";import"./gin-vue-admin-dictionary.1654852887000.js";import"./gin-vue-admin-sysDictionary.1654852887000.js";const w={class:"gva-table-box"},C={class:"gva-btn-list"},x=m("新增"),z=m(" 已回滚 "),_=m(" 未回滚 "),k=m("回滚(删表)"),j=m("回滚(不删表)"),N=m("复用"),D=m("删除"),I={class:"gva-pagination"},T={name:"AutoCodeAdmin"};var B=i(Object.assign(T,{setup(i){const T=n(),B=s(1),A=s(0),S=s(10),P=s([]),q=e=>{S.value=e,O()},E=e=>{B.value=e,O()},O=()=>e(this,null,(function*(){const e=yield a({page:B.value,pageSize:S.value});0===e.code&&(P.value=e.data.list,A.value=e.data.total,B.value=e.data.page,S.value=e.data.pageSize)}));O();const V=a=>e(this,null,(function*(){h.confirm("此操作将删除本历史, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>e(this,null,(function*(){0===(yield t({id:Number(a.ID)})).code&&(b.success("删除成功"),O())}))))})),$=(a,t)=>e(this,null,(function*(){h.confirm(`此操作将删除自动创建的文件和api${t?"（包含数据库表！）":""}, 是否继续?`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>e(this,null,(function*(){0===(yield l({id:Number(a.ID),deleteTable:t})).code&&(b.success("回滚成功"),O())}))))})),F=e=>{e?T.push({name:"autoCodeEdit",params:{id:e.ID}}):T.push({name:"autoCode"})};return(e,a)=>{const t=o("el-button"),l=o("el-table-column"),i=o("el-tag"),n=o("el-table"),s=o("el-pagination");return u(),d("div",null,[r("div",w,[r("div",C,[c(t,{size:"small",type:"primary",icon:"plus",onClick:a[0]||(a[0]=e=>F(null))},{default:p((()=>[x])),_:1})]),c(n,{data:P.value},{default:p((()=>[c(l,{type:"selection",width:"55"}),c(l,{align:"left",label:"id",width:"60",prop:"ID"}),c(l,{align:"left",label:"日期",width:"180"},{default:p((e=>[m(f(g(y)(e.row.CreatedAt)),1)])),_:1}),c(l,{align:"left",label:"结构体名","min-width":"150",prop:"structName"}),c(l,{align:"left",label:"结构体描述","min-width":"150",prop:"structCNName"}),c(l,{align:"left",label:"表名称","min-width":"150",prop:"tableName"}),c(l,{align:"left",label:"回滚标记","min-width":"150",prop:"flag"},{default:p((e=>[e.row.flag?(u(),v(i,{key:0,type:"danger",size:"small",effect:"dark"},{default:p((()=>[z])),_:1})):(u(),v(i,{key:1,size:"small",type:"success",effect:"dark"},{default:p((()=>[_])),_:1}))])),_:1}),c(l,{align:"left",label:"操作","min-width":"240"},{default:p((e=>[r("div",null,[c(t,{size:"small",type:"text",disabled:1===e.row.flag,onClick:a=>$(e.row,!0)},{default:p((()=>[k])),_:2},1032,["disabled","onClick"]),c(t,{size:"small",type:"text",disabled:1===e.row.flag,onClick:a=>$(e.row,!1)},{default:p((()=>[j])),_:2},1032,["disabled","onClick"]),c(t,{size:"small",type:"text",onClick:a=>F(e.row)},{default:p((()=>[N])),_:2},1032,["onClick"]),c(t,{size:"small",type:"text",onClick:a=>V(e.row)},{default:p((()=>[D])),_:2},1032,["onClick"])])])),_:1})])),_:1},8,["data"]),r("div",I,[c(s,{"current-page":B.value,"page-size":S.value,"page-sizes":[10,30,50,100],total:A.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:E,onSizeChange:q},null,8,["current-page","page-size","total"])])])])}}}),[["__scopeId","data-v-65d37bec"]]);export{B as default};
