(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"0f91":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.EmailJSResponseStatus=e.sendForm=e.send=e.init=void 0;var n=s("3245");Object.defineProperty(e,"EmailJSResponseStatus",{enumerable:!0,get:function(){return n.EmailJSResponseStatus}});var r=s("5129"),a=null,i="https://api.emailjs.com";function o(t,e,s){return void 0===s&&(s={}),new Promise((function(r,a){var i=new XMLHttpRequest;for(var o in i.addEventListener("load",(function(t){var e=new n.EmailJSResponseStatus(t.target);200===e.status||"OK"===e.text?r(e):a(e)})),i.addEventListener("error",(function(t){a(new n.EmailJSResponseStatus(t.target))})),i.open("POST",t,!0),s)i.setRequestHeader(o,s[o]);i.send(e)}))}function c(t){var e=document&&document.getElementById("g-recaptcha-response");return e&&e.value&&(t["g-recaptcha-response"]=e.value),e=null,t}function u(t){return"#"!==t[0]&&"."!==t[0]?"#"+t:t}function l(t,e){a=t,i=e||"https://api.emailjs.com"}function d(t,e,s,n){var r={lib_version:"2.6.4",user_id:n||a,service_id:t,template_id:e,template_params:c(s)};return o(i+"/api/v1.0/email/send",JSON.stringify(r),{"Content-type":"application/json"})}function m(t,e,s,n){if("string"===typeof s&&(s=document.querySelector(u(s))),!s||"FORM"!==s.nodeName)throw"Expected the HTML form element or the style selector of form";r.UI.progressState(s);var c=new FormData(s);return c.append("lib_version","2.6.4"),c.append("service_id",t),c.append("template_id",e),c.append("user_id",n||a),o(i+"/api/v1.0/email/send-form",c).then((function(t){return r.UI.successState(s),t}),(function(t){return r.UI.errorState(s),Promise.reject(t)}))}e.init=l,e.send=d,e.sendForm=m,e.default={init:l,send:d,sendForm:m}},"17fc":function(t,e,s){"use strict";s("5b30")},"1b2f":function(t,e,s){"use strict";s("6a43")},2342:function(t,e,s){t.exports=s.p+"media/coffin-dance-official-music-video-hd.9a8d3c47.mp3"},"30ae":function(t,e,s){},3245:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.EmailJSResponseStatus=void 0;var n=function(){function t(t){this.status=t.status,this.text=t.responseText}return t}();e.EmailJSResponseStatus=n},"3faf":function(t,e,s){"use strict";s("30ae")},4362:function(t,e,s){"use strict";s("fd7e")},"4a12":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{attrs:{id:"content"}},[s("router-view"),s("Banner"),s("About"),s("Services"),s("Video"),s("login"),s("Arrow")],1)},r=[],a=s("84af"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{className:"us container-fluid",id:"about"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[t._m(0),n("div",{staticClass:"col-md-6 text-center"},[n("img",{attrs:{src:s("aac2"),width:"450",alt:"service-image"}})])])])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-6"},[n("h1",[t._v("À propos de "),n("span",[t._v("NOUS ?")])]),n("p",[t._v(" team squirrels")]),n("audio",{attrs:{controls:"",preload:"auto"}},[n("source",{attrs:{src:s("2342"),type:"audio/mpeg"}})]),n("button",{staticClass:"btn btn-dark",attrs:{type:"button"}},[t._v("Notre instagram")])])}],c={name:"About"},u=c,l=(s("8709"),s("2877")),d=Object(l["a"])(u,i,o,!1,null,"25ead95f",null),m=d.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"services container-fluid",attrs:{id:"services"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row container"},[n("div",{staticClass:"icon col-md-4 text-center"},[n("img",{staticClass:"center-block",attrs:{src:s("f433"),width:"150",alt:"service-image"}}),n("h4",[t._v("squirrels title")]),n("p",[t._v("Parce que tu dois partir en fanfare nous te proposons un assortiment d'exotisme avec plusieurs extrats. Grâce à cela vous et votre entourage pourront partager un moment unique autour de votre cercueil.")])]),n("div",{staticClass:"icon col-md-4 text-center"},[n("img",{staticClass:"center-block",attrs:{src:s("f433"),width:"150",alt:"service-image"}}),n("h4",[t._v("squirrels title")]),n("p",[t._v("Parce que tu dois partir en fanfare nous te proposons un assortiment d'exotisme avec plusieurs extrats. Grâce à cela vous et votre entourage pourront partager un moment unique autour de votre cercueil.")])]),n("div",{staticClass:"icon col-md-4 text-center"},[n("img",{staticClass:"center-block",attrs:{src:s("f433"),width:"150",alt:"service-image"}}),n("h4",[t._v("Squirrels title")]),n("p",[t._v("Parce que tu dois partir en fanfare nous te proposons un assortiment d'exotisme avec plusieurs extrats. Grâce à cela vous et votre entourage pourront partager un moment unique autour de votre cercueil.")])])])])])},v=[],p={name:"Services"},_=p,b=(s("17fc"),Object(l["a"])(_,f,v,!1,null,"f18894ae",null)),h=b.exports,g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"background container-fluid",attrs:{id:"video"}},[s("div",{staticClass:"banner_content container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-5"},[s("h1",[t._v("Découvrez comment ça marche!")]),s("p",[t._v("Petite danse, déhanche énervé, pleureuse, que du plaisir en gros")]),s("button",{staticClass:"btn btn-dark",attrs:{type:"button"}},[t._v("Contacter l'équipe Squirrels")])]),s("div",{staticClass:"col-md-5 text-center"},[s("div",{staticClass:"video"},[s("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/vsoO76T4_AQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])])])])}],C={name:"Video"},E=C,w=(s("4362"),Object(l["a"])(E,g,S,!1,null,"3af72f2f",null)),x=w.exports,R=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"arrow"},[s("a",{attrs:{href:"#nav"}},[s("img",{attrs:{src:"http://i.stack.imgur.com/SBv4T.gif",alt:"pokemon"}})])])}],y={name:"Arrow"},j=y,L=(s("1b2f"),Object(l["a"])(j,R,O,!1,null,null,null)),q=L.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"newsletter container-fluid",attrs:{id:"newsletter"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("form",{staticClass:"contact-form",on:{submit:function(e){return e.preventDefault(),t.sendEmail(e)}}},[n("label",[t._v("Name")]),n("input",{attrs:{type:"text",name:"from_name"}}),n("label",[t._v("Email")]),n("input",{attrs:{type:"email",name:"from_email"}}),n("label",[t._v("Message")]),n("textarea",{attrs:{name:"message"}}),n("input",{attrs:{type:"submit",value:"Envoyer"}})])]),n("div",{staticClass:"col-md-6 text-center"},[n("img",{attrs:{src:s("f433"),alt:"service-image"}})])])])])},k=[],A=s("0f91"),N=s.n(A),$={name:"Login",data:function(){return{input:{emailAddress:"",password:""}}},methods:{sendEmail:function(t){N.a.sendForm("service_6s1lz1d","template_4hsf5ml",t.target,"user_hL82gPuLVc6rUHST4FkvM").then((function(t){alert("SUCCESS!",t.status,t.text)}),(function(t){alert("FAILED...",t)}))}}},J=$,M=(s("3faf"),Object(l["a"])(J,P,k,!1,null,"ee7df562",null)),D=M.exports,F={name:"App",components:{Video:x,Login:D,Banner:a["a"],About:m,Services:h,Arrow:q}},G=F,I=(s("6228"),Object(l["a"])(G,n,r,!1,null,null,null));e["default"]=I.exports},5129:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.UI=void 0;var n=function(){function t(){}return t.clearAll=function(t){t.classList.remove(this.PROGRESS),t.classList.remove(this.DONE),t.classList.remove(this.ERROR)},t.progressState=function(t){this.clearAll(t),t.classList.add(this.PROGRESS)},t.successState=function(t){t.classList.remove(this.PROGRESS),t.classList.add(this.DONE)},t.errorState=function(t){t.classList.remove(this.PROGRESS),t.classList.add(this.ERROR)},t.PROGRESS="emailjs-sending",t.DONE="emailjs-success",t.ERROR="emailjs-error",t}();e.UI=n},"54e4":function(t,e,s){},"5b30":function(t,e,s){},6228:function(t,e,s){"use strict";s("f51f")},"6a43":function(t,e,s){},"84af":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"background container-fluid"},[s("div",{staticClass:"banner_content container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("h1",[t._v("L'enterrement"),s("br"),t._v("de demain !")]),s("p",[t._v(" Marre des ceremonie nul apporte de la joie de la danse et ... voila paye")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Découvrir")]),s("button",{staticClass:"btn btn-dark",attrs:{type:"button"}},[t._v("Nous contacter")])]),s("div",{staticClass:"col-md-6 text-center"})])])])}],a={name:"Banner"},i=a,o=(s("a04f"),s("2877")),c=Object(o["a"])(i,n,r,!1,null,"0c55c71c",null);e["a"]=c.exports},8709:function(t,e,s){"use strict";s("dd49")},a04f:function(t,e,s){"use strict";s("54e4")},aac2:function(t,e,s){t.exports=s.p+"img/IconSquirrels.d00dc476.png"},dd49:function(t,e,s){},f433:function(t,e,s){t.exports=s.p+"img/LogoSquirrelsNoir.0529f7d6.png"},f51f:function(t,e,s){},fd7e:function(t,e,s){}}]);
//# sourceMappingURL=home.0ec51dbc.js.map