/*! 
 Build based on gin-vue-admin 
 Time : 1654852887000 */
import{i as e}from"./gin-vue-admin-initdb.1654852887000.js";import{_ as a,u as l,r as s,a as t,b as o,o as d,c as i,d as p,n as u,e as n,w as r,f as m,g as c,h as b,E as v,i as g}from"../gva/gin-vue-admin-index.1654852887000.js";const h={class:"init_page"},f={class:"init_page_panle"},y=c('<div class="hello_title" data-v-1bb614c4>GIN-VUE-ADMIN</div><p class="in-two a-fadeinT" data-v-1bb614c4>初始化须知</p><p class="init_p" data-v-1bb614c4>1.您需有用一定的VUE和GOLANG基础</p><p class="init_p" data-v-1bb614c4>2.请您确认是否已经阅读过官方文档</p><p class="init_p" data-v-1bb614c4>3.请您确认是否了解后续的配置流程</p><p class="init_p" data-v-1bb614c4>注：开发组不为文档中书写过的内容提供无偿服务</p>',6),_={class:"init_btn"},V=b(" 阅读文档 "),w=b(" 我已确认 "),N={style:{"text-align":"right"}},q=b("立即初始化"),k={name:"Init"};var U=a(Object.assign(k,{setup(a){const c=l(),b=s(0),k=()=>{b.value=b.value+1},U=()=>{window.open("https://www.gin-vue-admin.com/docs/first_master#3-init")},x=s(!1),T=t({dbType:"mysql",host:"127.0.0.1",port:"3306",userName:"root",password:"",dbName:"gva"}),j=e=>{switch(e){case"mysql":default:Object.assign(T,{dbType:"mysql",host:"127.0.0.1",port:"3306",userName:"root",password:"",dbName:"gva"});break;case"pgsql":Object.assign(T,{dbType:"pgsql",host:"127.0.0.1",port:"5432",userName:"postgres",password:"",dbName:"gva"})}},C=()=>{return a=this,l=null,s=function*(){const a=v.service({lock:!0,text:"正在初始化数据库，请稍候",spinner:"loading",background:"rgba(0, 0, 0, 0.7)"});try{const l=yield e(T);0===l.code&&(x.value=!0,g({type:"success",message:l.msg}),c.push({name:"Login"})),a.close()}catch(l){a.close()}},new Promise(((e,t)=>{var o=e=>{try{i(s.next(e))}catch(a){t(a)}},d=e=>{try{i(s.throw(e))}catch(a){t(a)}},i=a=>a.done?e(a.value):Promise.resolve(a.value).then(o,d);i((s=s.apply(a,l)).next())}));var a,l,s};return(e,a)=>{const l=o("el-button"),s=o("el-option"),t=o("el-select"),c=o("el-form-item"),v=o("el-input"),g=o("el-form");return d(),i("div",h,[p("div",f,[b.value<2?(d(),i("div",{key:0,id:"hello",class:u([[b.value<1?"slide-in-fwd-top":"slide-out-right"],"hello"])},[p("div",null,[y,p("p",_,[n(l,{type:"primary",onClick:U},{default:r((()=>[V])),_:1}),n(l,{type:"primary",onClick:k},{default:r((()=>[w])),_:1})])])],2)):m("",!0),b.value>0?(d(),i("div",{key:1,class:u([[b.value>0&&!x.value?"slide-in-left":"",x.value?"slide-out-right":""],"form"])},[n(g,{ref:"formRef",model:T,"label-width":"100px"},{default:r((()=>[n(c,{label:"数据库类型"},{default:r((()=>[n(t,{modelValue:T.dbType,"onUpdate:modelValue":a[0]||(a[0]=e=>T.dbType=e),placeholder:"请选择",onChange:j},{default:r((()=>[n(s,{key:"mysql",label:"mysql",value:"mysql"}),n(s,{key:"pgsql",label:"pgsql(测试版)",value:"pgsql"})])),_:1},8,["modelValue"])])),_:1}),n(c,{label:"host"},{default:r((()=>[n(v,{modelValue:T.host,"onUpdate:modelValue":a[1]||(a[1]=e=>T.host=e),placeholder:"请输入数据库链接"},null,8,["modelValue"])])),_:1}),n(c,{label:"port"},{default:r((()=>[n(v,{modelValue:T.port,"onUpdate:modelValue":a[2]||(a[2]=e=>T.port=e),placeholder:"请输入数据库端口"},null,8,["modelValue"])])),_:1}),n(c,{label:"userName"},{default:r((()=>[n(v,{modelValue:T.userName,"onUpdate:modelValue":a[3]||(a[3]=e=>T.userName=e),placeholder:"请输入数据库用户名"},null,8,["modelValue"])])),_:1}),n(c,{label:"password"},{default:r((()=>[n(v,{modelValue:T.password,"onUpdate:modelValue":a[4]||(a[4]=e=>T.password=e),placeholder:"请输入数据库密码（没有则为空）"},null,8,["modelValue"])])),_:1}),n(c,{label:"dbName"},{default:r((()=>[n(v,{modelValue:T.dbName,"onUpdate:modelValue":a[5]||(a[5]=e=>T.dbName=e),placeholder:"请输入数据库名称"},null,8,["modelValue"])])),_:1}),n(c,null,{default:r((()=>[p("div",N,[n(l,{type:"primary",onClick:C},{default:r((()=>[q])),_:1})])])),_:1})])),_:1},8,["model"])],2)):m("",!0)])])}}}),[["__scopeId","data-v-1bb614c4"]]);export{U as default};
