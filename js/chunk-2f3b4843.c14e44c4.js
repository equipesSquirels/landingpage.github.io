(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f3b4843"],{"0942":function(e,t,r){},"14c3":function(e,t,r){var n=r("c6b6"),a=r("9263");e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var s=r.call(e,t);if("object"!==typeof s)throw TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==n(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},5319:function(e,t,r){"use strict";var n=r("d784"),a=r("825a"),s=r("7b0b"),i=r("50c4"),o=r("a691"),c=r("1d80"),l=r("8aa5"),u=r("14c3"),d=Math.max,f=Math.min,p=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,g=/\$([$&'`]|\d\d?)/g,x=function(e){return void 0===e?e:String(e)};n("replace",2,(function(e,t,r,n){var h=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=n.REPLACE_KEEPS_$0,E=h?"$":"$0";return[function(r,n){var a=c(this),s=void 0==r?void 0:r[e];return void 0!==s?s.call(r,a,n):t.call(String(a),r,n)},function(e,n){if(!h&&m||"string"===typeof n&&-1===n.indexOf(E)){var s=r(t,e,this,n);if(s.done)return s.value}var c=a(e),p=String(this),v="function"===typeof n;v||(n=String(n));var g=c.global;if(g){var b=c.unicode;c.lastIndex=0}var R=[];while(1){var w=u(c,p);if(null===w)break;if(R.push(w),!g)break;var C=String(w[0]);""===C&&(c.lastIndex=l(p,i(c.lastIndex),b))}for(var y="",S=0,I=0;I<R.length;I++){w=R[I];for(var A=String(w[0]),P=d(f(o(w.index),p.length),0),$=[],T=1;T<w.length;T++)$.push(x(w[T]));var U=w.groups;if(v){var M=[A].concat($,P,p);void 0!==U&&M.push(U);var q=String(n.apply(void 0,M))}else q=_(A,p,P,$,U,n);P>=S&&(y+=p.slice(S,P)+q,S=P+A.length)}return y+p.slice(S)}];function _(e,r,n,a,i,o){var c=n+e.length,l=a.length,u=g;return void 0!==i&&(i=s(i),u=v),t.call(o,u,(function(t,s){var o;switch(s.charAt(0)){case"$":return"$";case"&":return e;case"`":return r.slice(0,n);case"'":return r.slice(c);case"<":o=i[s.slice(1,-1)];break;default:var u=+s;if(0===u)return t;if(u>l){var d=p(u/10);return 0===d?t:d<=l?void 0===a[d-1]?s.charAt(1):a[d-1]+s.charAt(1):t}o=a[u-1]}return void 0===o?"":o}))}}))},6547:function(e,t,r){var n=r("a691"),a=r("1d80"),s=function(e){return function(t,r){var s,i,o=String(a(t)),c=n(r),l=o.length;return c<0||c>=l?e?"":void 0:(s=o.charCodeAt(c),s<55296||s>56319||c+1===l||(i=o.charCodeAt(c+1))<56320||i>57343?e?o.charAt(c):s:e?o.slice(c,c+2):i-56320+(s-55296<<10)+65536)}};e.exports={codeAt:s(!1),charAt:s(!0)}},"8aa5":function(e,t,r){"use strict";var n=r("6547").charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},"8bb6":function(e,t,r){"use strict";r("0942")},9263:function(e,t,r){"use strict";var n=r("ad6d"),a=r("9f7f"),s=RegExp.prototype.exec,i=String.prototype.replace,o=s,c=function(){var e=/a/,t=/b*/g;return s.call(e,"a"),s.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),l=a.UNSUPPORTED_Y||a.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=c||u||l;d&&(o=function(e){var t,r,a,o,d=this,f=l&&d.sticky,p=n.call(d),v=d.source,g=0,x=e;return f&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),x=String(e).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==e[d.lastIndex-1])&&(v="(?: "+v+")",x=" "+x,g++),r=new RegExp("^(?:"+v+")",p)),u&&(r=new RegExp("^"+v+"$(?!\\s)",p)),c&&(t=d.lastIndex),a=s.call(f?r:d,x),f?a?(a.input=a.input.slice(g),a[0]=a[0].slice(g),a.index=d.lastIndex,d.lastIndex+=a[0].length):d.lastIndex=0:c&&a&&(d.lastIndex=d.global?a.index+a[0].length:t),u&&a&&a.length>1&&i.call(a[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(a[o]=void 0)})),a}),e.exports=o},"9f7f":function(e,t,r){"use strict";var n=r("d039");function a(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=n((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,r){"use strict";var n=r("23e7"),a=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(e,t,r){"use strict";var n=r("825a");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,r){"use strict";r("ac1f");var n=r("6eeb"),a=r("d039"),s=r("b622"),i=r("9263"),o=r("9112"),c=s("species"),l=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=s("replace"),f=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),p=!a((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));e.exports=function(e,t,r,d){var v=s(e),g=!a((function(){var t={};return t[v]=function(){return 7},7!=""[e](t)})),x=g&&!a((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[c]=function(){return r},r.flags="",r[v]=/./[v]),r.exec=function(){return t=!0,null},r[v](""),!t}));if(!g||!x||"replace"===e&&(!l||!u||f)||"split"===e&&!p){var h=/./[v],m=r(v,""[e],(function(e,t,r,n,a){return t.exec===i?g&&!a?{done:!0,value:h.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),E=m[0],_=m[1];n(String.prototype,e,E),n(RegExp.prototype,v,2==t?function(e,t){return _.call(e,this,t)}:function(e){return _.call(e,this)})}d&&o(RegExp.prototype[v],"sham",!0)}},dd1d:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row"},[e._m(0),r("div",{staticClass:"col-sm-5 m-auto"},[""!==e.errorMessage?r("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(" "+e._s(e.errorMessage)+" ")]):e._e(),""!==e.successMessage?r("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[e._v(" "+e._s(e.successMessage)+" ")]):e._e(),r("form",{attrs:{id:"login-form"},on:{submit:function(t){return t.preventDefault(),e.loginRequest(t)}}},[r("div",{staticClass:"row text-left"},[r("div",{staticClass:"col-sm-12 form-group"},[r("label",{attrs:{for:"email"}},[e._v("Email Address")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control form-control-lg",attrs:{type:"email",id:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),r("div",{staticClass:"col-sm-12 form-group"},[r("label",{attrs:{for:"password"}},[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),r("div",{staticClass:"col-sm-12 text-center form-group"},[r("button",{staticClass:"btn btn-lg px-4",class:{disabled:e.xhrRequest},attrs:{disabled:e.xhrRequest}},[e.xhrRequest?e._e():r("span",[e._v("Login")]),e.xhrRequest?r("span",[e._v("Please Wait...")]):e._e()]),e.xhrRequest?r("div",{staticClass:"spinner-border text-secondary loader",attrs:{role:"status"}},[r("span",{staticClass:"sr-only"},[e._v("Loading...")])]):e._e()]),r("div",{staticClass:"col-sm-12 text-center form-group mt-5"},[r("p",[e._v("Don't have an account? "),r("router-link",{attrs:{to:"/signup"}},[e._v("Sign Up")])],1)])])])])])},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-12 text-center mb-4"},[r("h1",[e._v("Log In")])])}],s=(r("ac1f"),r("5319"),r("2591")),i={name:"Login",data:function(){return{email:"",password:"",xhrRequest:!1,errorMessage:"",successMessage:""}},methods:{loginRequest:function(){var e=this,t=this;t.xhrRequest=!0,t.errorMessage="",t.successMessage="",s["a"].auth().signInWithEmailAndPassword(t.email,t.password).then((function(){e.$router.replace("dashboard"),t.xhrRequest=!1}),(function(e){t.errorMessage=e.message,t.xhrRequest=!1}))}}},o=i,c=(r("8bb6"),r("2877")),l=Object(c["a"])(o,n,a,!1,null,"27805404",null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2f3b4843.c14e44c4.js.map