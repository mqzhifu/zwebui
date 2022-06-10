/*! 
 Build based on gin-vue-admin 
 Time : 1654852887000 */
System.register(["./gin-vue-admin-date-legacy.1654852887000.js","./gin-vue-admin-dictionary-legacy.1654852887000.js"],(function(n){"use strict";var e;return{setters:[function(n){e=n.f},function(){}],execute:function(){n("b",(function(n){return null!==n?n?"是":"否":""})),n("a",(function(n){if(null!==n&&""!==n){var t=new Date(n);return e(t,"yyyy-MM-dd hh:mm:ss")}return""})),n("f",(function(n){if(null!==n&&""!==n&&n>0){n+="000",n=parseInt(n);var t=new Date(n);return e(t,"yyyy-MM-dd hh:mm:ss")}return"--"}))}}}));
