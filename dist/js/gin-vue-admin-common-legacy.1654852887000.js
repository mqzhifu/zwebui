/*! 
 Build based on gin-vue-admin 
 Time : 1654852887000 */
!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=document.createElement("style");a.innerHTML=".image-uploader[data-v-15c9badb]{border:1px dashed #d9d9d9;width:180px;border-radius:6px;cursor:pointer;position:relative;overflow:hidden}.image-uploader[data-v-15c9badb]{border-color:#409eff}.image-uploader-icon[data-v-15c9badb]{font-size:28px;color:#8c939d;width:178px;height:178px;line-height:178px;text-align:center}.image[data-v-15c9badb]{width:178px;height:178px;display:block}\n",document.head.appendChild(a),System.register(["../gva/gin-vue-admin-index-legacy.1654852887000.js"],(function(a){"use strict";var n,i,r,o,l,d,u,s,c,p,f,h;return{setters:[function(e){n=e.s,i=e._,r=e.r,o=e.j,l=e.b,d=e.o,u=e.c,s=e.e,c=e.w,p=e.y,f=e.h,h=e.i}],execute:function(){a("g",(function(e){return n({url:"/fileUploadAndDownload/getFileList",method:"post",data:e})})),a("d",(function(e){return n({url:"/fileUploadAndDownload/deleteFile",method:"post",data:e})})),a("e",(function(e){return n({url:"/fileUploadAndDownload/editFileName",method:"post",data:e})}));var m=function(){function a(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1920;e(this,a),this.file=t,this.fileSize=n,this.maxWH=i}var n,i,r;return n=a,(i=[{key:"compress",value:function(){var e=this,t=this.file.type,a=this.file.size/1024;return new Promise((function(n){var i=new FileReader;i.readAsDataURL(e.file),i.onload=function(){var r=document.createElement("canvas"),o=document.createElement("img");o.src=i.result,o.onload=function(){var i=r.getContext("2d"),l=e.dWH(o.width,o.height,e.maxWH);r.width=l.width,r.height=l.height,i.clearRect(0,0,r.width,r.height),i.drawImage(o,0,0,r.width,r.height);var d=r.toDataURL(t,.9),u=e.fileSizeKB(d);u>e.fileSize&&console.log("图片尺寸太大!"+a+" >> "+u);var s=e.dataURLtoBlob(d,t),c=new File([s],e.file.name);n(c)}}}))}},{key:"dWH",value:function(e,t,a){var n={width:e,height:t};return Math.max(e,t)>a?e>t?(n.width=a,n.height=Math.round(t*(a/e)),n):(n.height=a,n.width=Math.round(e*(a/t)),n):n}},{key:"fileSizeKB",value:function(e){return Math.round(3*e.split(",")[1].length/4/1024)}},{key:"dataURLtoBlob",value:function(e,t){for(var a=atob(e.split(",")[1]),n=e.split(",")[0].split(":")[1].split(";")[0],i=new ArrayBuffer(a.length),r=new Uint8Array(i),o=0;o<a.length;o++)r[o]=a.charCodeAt(o);return t&&(n=t),new Blob([i],{type:n,lastModifiedDate:new Date})}}])&&t(n.prototype,i),r&&t(n,r),Object.defineProperty(n,"prototype",{writable:!1}),a}(),g=f("压缩上传"),v={name:"UploadImage",methods:{}},b=(a("U",i(Object.assign(v,{props:{imageUrl:{type:String,default:""},fileSize:{type:Number,default:2048},maxWH:{type:Number,default:1920}},emits:["on-success"],setup:function(e,t){var a=t.emit,n=e,i=r("http://adminapi.seedreality.com"),f=o(),v=function(e){var t="image/jpeg"===e.type,a="image/png"===e.type;if(!t&&!a)return h.error("上传头像图片只能是 jpg或png 格式!"),!1;var i=e.size/1024<n.fileSize;return i||new m(e,n.fileSize,n.maxWH).compress()},b=function(e){var t=e.data;t.file&&a("on-success",t.file.url)};return function(e,t){var a=l("el-button"),n=l("el-upload");return d(),u("div",null,[s(n,{action:"".concat(i.value,"/fileUploadAndDownload/upload"),headers:{"x-token":p(f).token},"show-file-list":!1,"on-success":b,"before-upload":v,multiple:!1},{default:c((function(){return[s(a,{size:"small",type:"primary"},{default:c((function(){return[g]})),_:1})]})),_:1},8,["action","headers"])])}}}),[["__scopeId","data-v-15c9badb"]])),f("普通上传")),w={name:"UploadCommon",methods:{}};a("_",Object.assign(w,{emits:["on-success"],setup:function(e,t){var a=t.emit,n=r("http://adminapi.seedreality.com"),i=o(),f=r(!1),m=function(e){f.value=!0;var t="image/jpeg"===e.type,a="image/png"===e.type,n=e.size/1024/1024<.5;return t||a||(h.error("上传图片只能是 jpg或png 格式!"),f.value=!1),n||(h.error("未压缩未见上传图片大小不能超过 500KB，请使用压缩上传"),f.value=!1),(a||t)&&n},g=function(e){var t=e.data;t.file&&a("on-success",t.file.url)},v=function(){h({type:"error",message:"上传失败"}),f.value=!1};return function(e,t){var a=l("el-button"),r=l("el-upload");return d(),u("div",null,[s(r,{action:"".concat(n.value,"/fileUploadAndDownload/upload"),"before-upload":m,headers:{"x-token":p(i).token},"on-error":v,"on-success":g,"show-file-list":!1,class:"upload-btn"},{default:c((function(){return[s(a,{size:"small",type:"primary"},{default:c((function(){return[b]})),_:1})]})),_:1},8,["action","headers"])])}}}))}}}))}();
