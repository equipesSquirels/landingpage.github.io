(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home","chunk-dffaab8c","chunk-576f263a"],{"00f8":function(e,t,s){},"011a":function(e,t,s){},"0f91":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=t.sendForm=t.send=t.init=void 0;var n=s("3245");Object.defineProperty(t,"EmailJSResponseStatus",{enumerable:!0,get:function(){return n.EmailJSResponseStatus}});var a=s("5129"),i=null,r="https://api.emailjs.com";function c(e,t,s){return void 0===s&&(s={}),new Promise((function(a,i){var r=new XMLHttpRequest;for(var c in r.addEventListener("load",(function(e){var t=new n.EmailJSResponseStatus(e.target);200===t.status||"OK"===t.text?a(t):i(t)})),r.addEventListener("error",(function(e){i(new n.EmailJSResponseStatus(e.target))})),r.open("POST",e,!0),s)r.setRequestHeader(c,s[c]);r.send(t)}))}function o(e){var t=document&&document.getElementById("g-recaptcha-response");return t&&t.value&&(e["g-recaptcha-response"]=t.value),t=null,e}function u(e){return"#"!==e[0]&&"."!==e[0]?"#"+e:e}function A(e,t){i=e,r=t||"https://api.emailjs.com"}function l(e,t,s,n){var a={lib_version:"2.6.4",user_id:n||i,service_id:e,template_id:t,template_params:o(s)};return c(r+"/api/v1.0/email/send",JSON.stringify(a),{"Content-type":"application/json"})}function d(e,t,s,n){if("string"===typeof s&&(s=document.querySelector(u(s))),!s||"FORM"!==s.nodeName)throw"Expected the HTML form element or the style selector of form";a.UI.progressState(s);var o=new FormData(s);return o.append("lib_version","2.6.4"),o.append("service_id",e),o.append("template_id",t),o.append("user_id",n||i),c(r+"/api/v1.0/email/send-form",o).then((function(e){return a.UI.successState(s),e}),(function(e){return a.UI.errorState(s),Promise.reject(e)}))}t.init=A,t.send=l,t.sendForm=d,t.default={init:A,send:l,sendForm:d}},"163a":function(e,t,s){"use strict";s("777f")},"1b2f":function(e,t,s){"use strict";s("6a43")},2430:function(e,t,s){},"254f":function(e,t,s){e.exports=s.p+"img/simple-icons_protonvpn.32e5e08c.png"},"2d83":function(e,t,s){e.exports=s.p+"img/instagram.9c83f3f6.png"},3245:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=void 0;var n=function(){function e(e){this.status=e.status,this.text=e.responseText}return e}();t.EmailJSResponseStatus=n},3330:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFPSURBVHgB7Zr/TcMwEIWfmaAjZAM6QpmkYQLYoB2hGzQbwAZhg7IB2aBscJxlI0SqqnYbVX7OfdKT8k+i++TIv3SAYRizQ0RazZum1+w1DWohio05apZgJ47cOfglz4zemDUm5AHl0U0teTcu/KJjXsGIhJkzlQ0Y0cI7kzRJErTwrUnOUHIPRkzyFL/1W4CNTMkDq2TOtm42kg3YyJT8YpVcSjgQZ0u6+AH//75oViiXJiaFQfPknBtctO0zXmZhgJeUsGC2qJMPL3jUB74pNo3vEu9kJsULfqJe3uufZPxTlPS3WI8olwZXLBNg4JaFvni02HXtcqlwbbavkONZy7XYjckFuqrlwITJ/bEDE5lyWzAhocPC5KjktNhF7SN3qFku546zBRuS1iczqVyJdzLPelDtwIhcbuVagR2puRnvlziSfcxOamqnNAzjHz/4Ub3fqLT7HQAAAABJRU5ErkJggg=="},"3f7e":function(e,t,s){},4340:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALJSURBVHgB7ZpBclJBEEC7h0CqXHEBU/wT+DcQl3IC4wmEhVUBF3ID4QTGDUmVC/AEiSfApYaFeIL/K3oAtn6LaadRUpEKyUwYZgbqv00qSVP1H9N0zzQDkJOT4xMEDyTV40YBxXMgLIOgdPZL9qLJWQobwLngVa11ToBHS3+eSvpdj8YfJmAZAQ7hlbtFjikLLI6S6qsYLONUEIVKy9Ww5LeftdcvwSJOBXWYAQ1tSjoVJCk/6cSxZHLY6oAF3BeZw9aICJ/pxKp3v/v4st+DNXCeogdfT+uS6KNOrFSCP2rtt7AGXvogk1RbQ4Go9VlbZyW9CTIuJL1W0Wh82lBpqPXQD01Xryu4IKm1u+qd1np405UMQpAxkUSC4cG439SKhYDYhGRQgoyRJNDFLNtvRpOT6eqYADGRVExkVqqvkgxSkOGTh0Ax0AxfKRncZntBND4bSpJahUQRi1I2SuLjyvI/gl3BBYYrmcpM1m9OB4IXZPggLKA4Uk9b1gj/T3IumMSd8l4pe6O7y/cBIVXUj4pm+LUkct6KkhgZvHhbmEsKsS+4HFdg96gUijgQahd7BDsKIcbBtglbqApM1meRoYAIF2KGxM00hd0jnaHs/W0TT9UOgEQHAZ9AoCAZtgmh2sQX1SZgC0hi1eiLBo3+nxz/EnyR4SHwQ+WYoFeQ5XgIrBk+UXIvbsoxwQoayz1Sx6XPW3Jc4umZDTkmOEGW4xGhTixPyO+SY4JKUVM5nqveFxeM4CbkmCBS1EwO3uvKMd4FjeTUmD8a942+N/SaolfV9oAQGjqxc7nLfhcM8SboQo5xLsjzn0Ixe+dCjtkDx/D8ktQcUyd2XTnGqSDPOEFXjqCpCsoQ1iSkezLX2JJjgtuq2ZRjwrknQzCVUp3lLMoxzqtoWmud4/J9NZaDzVzG83adEkVhfruCgL4DypPlg2pOTs5u8AeXi16emJSdnwAAAABJRU5ErkJggg=="},4438:function(e,t,s){e.exports=s.p+"img/foundation_sound.778e4d9b.png"},"4a12":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{attrs:{id:"content"}},[s("router-view"),s("Banner"),s("Resonance"),s("Newsletter"),s("Pack"),s("About"),s("Contacts"),s("Arrow"),s("Quiz")],1)},a=[],i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{className:"container-fluid"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("img",{staticClass:"img_content",attrs:{src:s("fcfc"),alt:"image"}})]),n("div",{staticClass:"col-md-6",attrs:{id:"products"}},[n("img",{staticClass:"logo_noir",attrs:{src:s("6aa3"),alt:"logo",width:"auto"}}),n("div",{staticClass:"resonance-container"},[n("h2",[e._v("Faites tester vos produits par de vrais technophiles")]),n("p",[e._v("Notre but : faire tester à notre super panel de technophiles les meilleurs produits de demain et donc le vôtre !")]),n("p",{staticClass:"responsive"},[e._v("Chaque utilisateur remplit un formulaire complet durant sa phase de testing pour évaluer au mieux le produit sur un maximum de critères. Cerise sur le gâteau, si votre techno fait l'unanimité auprès de vos testeurs, on vous octroie le "),n("span",[e._v("label Résonance")]),e._v(" que vous pourrez utiliser à votre guise dans votre communication.")])])])])]),n("div",{attrs:{id:"divider"}},[n("hr",{staticClass:"solid"})])])}],c={name:"Resonance"},o=c,u=(s("163a"),s("2877")),A=Object(u["a"])(o,i,r,!1,null,"161170ec",null),l=A.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("b-col",{attrs:{sm:"9",id:"packs"}},[n("h2",[e._v("Nos packs modulables")]),n("p",[e._v("A chaque entreprise son pack, que vous prépariez une campagne de crowdfunding ou que votre produit soit déjà installé sur le marché,"),n("br"),e._v(" nous vous offrons la solution la plus adapté à vos besoin.")])]),n("div",{staticClass:"row"},[n("div",{staticClass:"icon col-md-4 text-center"},[n("img",{staticClass:"center-block",attrs:{src:s("254f"),width:"100",alt:"service-image"}}),n("h4",[e._v("Pack Prototype")]),e._m(0),n("img",{staticClass:"arrowright",attrs:{src:s("4340")}})]),n("div",{staticClass:"icon col-md-4 text-center"},[n("img",{staticClass:"center-block",attrs:{src:s("4438"),width:"100",alt:"service-image"}}),n("h4",[e._v("Pack Echo")]),e._m(1),n("img",{staticClass:"arrowright",attrs:{src:s("4340")}})]),n("div",{staticClass:"icon col-md-4 text-center",attrs:{id:"resonance"}},[n("img",{staticClass:"center-block",attrs:{src:s("a520"),width:"100px",alt:"service-image"}}),n("h4",[e._v("Pack Résonance")]),e._m(2),n("img",{staticClass:"arrowright",attrs:{src:s("3330")}})])])],1)])])},m=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("Parfait pour les crownfunding,"),s("br"),e._v(" comprend testing et vidéo "),s("br"),e._v("feedback.")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("Campagne de lancement de "),s("br"),e._v(" votre produit, obrenez notre "),s("br"),e._v("label utilisateur.")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("Testing, vidéos et livestream "),s("br"),e._v("pour parler de votre produit "),s("br"),e._v("avec nos meilleurs testeurs.")])}],f={name:"Pack"},p=f,v=(s("ee54"),Object(u["a"])(p,d,m,!1,null,"15f09d64",null)),g=v.exports,h=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"background container-fluid"},[s("div",{staticClass:"banner_content"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[e._m(0),s("div",{staticClass:"col-md-6",attrs:{id:"testeur"}},[s("h2",[e._v("Vous aussi devenez testeurs")]),s("p",[e._v("Le pannel de testeur de Résonance est constitué de réels technophiles qui veulent êtres des acteurs clés de cette industrie. Si vous pensez être à la hauteur de cette tâche, soumettez votre candidature !")]),e._m(1),s("b-button",{staticClass:"btn_video",on:{click:function(t){e.modalShow=!e.modalShow}}},[e._v("C'est quoi un technophile ?")]),s("b-modal",{model:{value:e.modalShow,callback:function(t){e.modalShow=t},expression:"modalShow"}},[s("iframe",{attrs:{width:"460",height:"315",src:"https://www.youtube.com/embed/vsoO76T4_AQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])],1)])])])])},w=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col-md-6"},[n("img",{staticClass:"img",attrs:{src:s("a51a"),alt:"illustration"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"join"},[e._v("Rejoindre le pannel "),n("a",{attrs:{href:"#contact"}},[n("img",{attrs:{id:"contact",alt:"click",src:s("dfa8")}})])])}],E={name:"Video",data:function(){return{modalShow:!1}}},C=E,S=(s("59a6"),Object(u["a"])(C,h,w,!1,null,"38f8242f",null)),b=S.exports,I=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"contact container-fluid",attrs:{id:"contacts"}},[s("div",{staticClass:"container"},[e._m(0),s("form",{staticClass:"contact-form text-center",on:{submit:function(t){return t.preventDefault(),e.sendEmail(t)}}},[s("label",[e._v("Name")]),s("input",{attrs:{type:"text",name:"from_name"}}),s("label",[e._v("Email")]),s("input",{attrs:{type:"email",name:"from_email"}}),s("input",{staticClass:"btn btn-dark",attrs:{type:"submit",value:"Envoyer"}})])]),e._m(1)])},R=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"sm-9"},[s("h2",[e._v("Encore un peu de patience..")]),s("p",[e._v("Résonance sera initialisé dans les prochains jours. Pour ne pas manquer notre lancement, soyez sur de nous suivre sur les réseaux sociaux ou de vous inscrire à la Newsletter.")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center"},[n("a",{attrs:{href:"https://www.instagram.com/tech.resonance/"}},[n("img",{staticClass:"instagram",attrs:{src:s("2d83")}})]),n("a",{attrs:{href:"https://www.linkedin.com/company/tech-r%C3%A9sonance/"}},[n("img",{staticClass:"linkedin",attrs:{src:s("bc4d")}})])])}],B=s("0f91"),Q=s.n(B),U={name:"Login",data:function(){return{input:{emailAddress:"",password:""}}},methods:{sendEmail:function(e){Q.a.sendForm("service_6s1lz1d","template_4hsf5ml",e.target,"user_hL82gPuLVc6rUHST4FkvM").then((function(e){alert("SUCCESS!",e.status,e.text)}),(function(e){alert("FAILED...",e)}))}}},x=U,Y=(s("e824"),Object(u["a"])(x,I,R,!1,null,"321d9c2e",null)),F=Y.exports,k=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},z=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"arrow"},[n("a",{attrs:{href:"/"}},[n("img",{attrs:{src:s("fc44"),alt:"squirrels"}})])])}],G={name:"Arrow"},j=G,L=(s("1b2f"),Object(u["a"])(j,k,z,!1,null,null,null)),O=L.exports,J=s("84af"),P=s("fbef"),D=s("c3c9"),X={name:"App",components:{Newsletter:P["default"],Banner:J["a"],Quiz:D["default"],Resonance:l,Pack:g,About:b,Contacts:F,Arrow:O}},q=X,y=(s("6228"),Object(u["a"])(q,n,a,!1,null,null,null));t["default"]=y.exports},5129:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UI=void 0;var n=function(){function e(){}return e.clearAll=function(e){e.classList.remove(this.PROGRESS),e.classList.remove(this.DONE),e.classList.remove(this.ERROR)},e.progressState=function(e){this.clearAll(e),e.classList.add(this.PROGRESS)},e.successState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.DONE)},e.errorState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.ERROR)},e.PROGRESS="emailjs-sending",e.DONE="emailjs-success",e.ERROR="emailjs-error",e}();t.UI=n},"59a6":function(e,t,s){"use strict";s("00f8")},6228:function(e,t,s){"use strict";s("f51f")},6605:function(e,t,s){},"6a43":function(e,t,s){},"6aa3":function(e,t,s){e.exports=s.p+"img/Resonance.03844d6c.png"},"777f":function(e,t,s){},"84af":function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"banner"}},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"banner_content"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("h1",[e._v("Impulser la technologie de demain.")]),n("p",[e._v("La plateforme qui révolutionne la relation entre bêta-testeurs et créateurs de la tech.")]),n("p",{staticClass:"scroll"},[e._v("Découvrir le futur de la tech "),n("a",{attrs:{href:"#down"}},[n("img",{attrs:{id:"down",alt:"descendre",src:s("9469")}})])])])])])])])}],i={name:"Banner"},r=i,c=(s("fe7b"),s("2877")),o=Object(c["a"])(r,n,a,!1,null,"ed561b5e",null);t["a"]=o.exports},9469:function(e,t){e.exports="data:image/png;base64,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"},"9bbe":function(e,t){},a51a:function(e,t,s){e.exports=s.p+"img/illustrations.1377842b.png"},a520:function(e,t,s){e.exports=s.p+"img/openmoji_ecg-waves.056573bc.png"},bc4d:function(e,t){e.exports="data:image/png;base64,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"},c3c9:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"quiz"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12"},[s("h1",[e._v(e._s(e.quiz.title))]),s("div",{staticClass:"callout"},[e._l(e.quiz.questions,(function(t,n){return s("div",[s("div",{directives:[{name:"show",rawName:"v-show",value:n===e.questionIndex,expression:"index === questionIndex"}]},[s("h3",[e._v(e._s(t.text))]),s("ol",e._l(t.responses,(function(t){return s("li",[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.userResponses[n],expression:"userResponses[index]"}],attrs:{type:"checkbox",name:n},domProps:{value:t.value,checked:Array.isArray(e.userResponses[n])?e._i(e.userResponses[n],t.value)>-1:e.userResponses[n]},on:{change:function(s){var a=e.userResponses[n],i=s.target,r=!!i.checked;if(Array.isArray(a)){var c=t.value,o=e._i(a,c);i.checked?o<0&&e.$set(e.userResponses,n,a.concat([c])):o>-1&&e.$set(e.userResponses,n,a.slice(0,o).concat(a.slice(o+1)))}else e.$set(e.userResponses,n,r)}}}),e._v(" "+e._s(t.text)+" ")])])})),0),e.questionIndex>0?s("button",{staticClass:"btn-secondary",on:{click:e.prev}},[e._v("prev")]):e._e(),s("button",{staticClass:"btn-success",on:{click:e.next}},[e._v("next")])])])})),s("div",{directives:[{name:"show",rawName:"v-show",value:e.questionIndex===e.quiz.questions.length,expression:"questionIndex === quiz.questions.length"}]},[s("h3",[e._v("Your Results")]),s("p",[e._v("You are : "+e._s(e.score()))])])],2)])])])},a=[],i={name:"Quiz"},r=i,c=(s("f972"),s("2877")),o=Object(c["a"])(r,n,a,!1,null,"e19d42dc",null);t["default"]=o.exports},dfa8:function(e,t){e.exports="data:image/png;base64,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"},e824:function(e,t,s){"use strict";s("2430")},ee54:function(e,t,s){"use strict";s("011a")},f51f:function(e,t,s){},f972:function(e,t,s){"use strict";s("6605")},fbef:function(e,t,s){"use strict";s.r(t);var n,a,i={name:"Newsletter"},r=i,c=s("2877"),o=s("9bbe"),u=s.n(o),A=Object(c["a"])(r,n,a,!1,null,null,null);"function"===typeof u.a&&u()(A);t["default"]=A.exports},fc44:function(e,t,s){e.exports=s.p+"img/LogoRESONANCEResponsive.1902687f.png"},fcfc:function(e,t,s){e.exports=s.p+"img/image.4feae61e.png"},fe7b:function(e,t,s){"use strict";s("3f7e")}}]);
//# sourceMappingURL=home.4549d0e2.js.map