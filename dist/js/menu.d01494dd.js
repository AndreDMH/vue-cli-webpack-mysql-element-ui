(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["menu"],{"0cb2":function(t,e,n){var a=n("e330"),r=n("7b0b"),i=Math.floor,o=a("".charAt),s=a("".replace),c=a("".slice),l=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,a,d,f){var p=n+t.length,v=a.length,x=u;return void 0!==d&&(d=r(d),x=l),s(f,x,(function(r,s){var l;switch(o(s,0)){case"$":return"$";case"&":return t;case"`":return c(e,0,n);case"'":return c(e,p);case"<":l=d[c(s,1,-1)];break;default:var u=+s;if(0===u)return r;if(u>v){var f=i(u/10);return 0===f?r:f<=v?void 0===a[f-1]?o(s,1):a[f-1]+o(s,1):r}l=a[u-1]}return void 0===l?"":l}))}},"107c":function(t,e,n){var a=n("d039"),r=n("da84"),i=r.RegExp;t.exports=a((function(){var t=i("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},"14c3":function(t,e,n){var a=n("da84"),r=n("c65b"),i=n("825a"),o=n("1626"),s=n("c6b6"),c=n("9263"),l=a.TypeError;t.exports=function(t,e){var n=t.exec;if(o(n)){var a=r(n,t,e);return null!==a&&i(a),a}if("RegExp"===s(t))return r(c,t,e);throw l("RegExp#exec called on incompatible receiver")}},"3b1c":function(t,e,n){},"46d0":function(t,e,n){"use strict";n("5796")},"4c5a":function(t,e,n){"use strict";n("9f38")},5319:function(t,e,n){"use strict";var a=n("2ba4"),r=n("c65b"),i=n("e330"),o=n("d784"),s=n("d039"),c=n("825a"),l=n("1626"),u=n("5926"),d=n("50c4"),f=n("577e"),p=n("1d80"),v=n("8aa5"),x=n("dc4a"),h=n("0cb2"),g=n("14c3"),m=n("b622"),b=m("replace"),C=Math.max,y=Math.min,_=i([].concat),w=i([].push),$=i("".indexOf),E=i("".slice),I=function(t){return void 0===t?t:String(t)},S=function(){return"$0"==="a".replace(/./,"$0")}(),k=function(){return!!/./[b]&&""===/./[b]("a","$0")}(),R=!s((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));o("replace",(function(t,e,n){var i=k?"$":"$0";return[function(t,n){var a=p(this),i=void 0==t?void 0:x(t,b);return i?r(i,t,a,n):r(e,f(a),t,n)},function(t,r){var o=c(this),s=f(t);if("string"==typeof r&&-1===$(r,i)&&-1===$(r,"$<")){var p=n(e,o,s,r);if(p.done)return p.value}var x=l(r);x||(r=f(r));var m=o.global;if(m){var b=o.unicode;o.lastIndex=0}var S=[];while(1){var k=g(o,s);if(null===k)break;if(w(S,k),!m)break;var R=f(k[0]);""===R&&(o.lastIndex=v(s,d(o.lastIndex),b))}for(var A="",O=0,M=0;M<S.length;M++){k=S[M];for(var T=f(k[0]),B=C(y(u(k.index),s.length),0),j=[],F=1;F<k.length;F++)w(j,I(k[F]));var H=k.groups;if(x){var K=_([T],j,B,s);void 0!==H&&w(K,H);var N=f(a(r,void 0,K))}else N=h(T,s,B,j,H,r);B>=O&&(A+=E(s,O,B)+N,O=B+T.length)}return A+E(s,O)}]}),!R||!S||k)},"577e":function(t,e,n){var a=n("da84"),r=n("f5df"),i=a.String;t.exports=function(t){if("Symbol"===r(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},5796:function(t,e,n){},6547:function(t,e,n){var a=n("e330"),r=n("5926"),i=n("577e"),o=n("1d80"),s=a("".charAt),c=a("".charCodeAt),l=a("".slice),u=function(t){return function(e,n){var a,u,d=i(o(e)),f=r(n),p=d.length;return f<0||f>=p?t?"":void 0:(a=c(d,f),a<55296||a>56319||f+1===p||(u=c(d,f+1))<56320||u>57343?t?s(d,f):a:t?l(d,f,f+2):u-56320+(a-55296<<10)+65536)}};t.exports={codeAt:u(!1),charAt:u(!0)}},"6bd7":function(t,e,n){"use strict";n("3b1c")},"8aa5":function(t,e,n){"use strict";var a=n("6547").charAt;t.exports=function(t,e,n){return e+(n?a(t,e).length:1)}},9263:function(t,e,n){"use strict";var a=n("c65b"),r=n("e330"),i=n("577e"),o=n("ad6d"),s=n("9f7f"),c=n("5692"),l=n("7c73"),u=n("69f3").get,d=n("fce3"),f=n("107c"),p=c("native-string-replace",String.prototype.replace),v=RegExp.prototype.exec,x=v,h=r("".charAt),g=r("".indexOf),m=r("".replace),b=r("".slice),C=function(){var t=/a/,e=/b*/g;return a(v,t,"a"),a(v,e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),y=s.BROKEN_CARET,_=void 0!==/()??/.exec("")[1],w=C||_||y||d||f;w&&(x=function(t){var e,n,r,s,c,d,f,w=this,$=u(w),E=i(t),I=$.raw;if(I)return I.lastIndex=w.lastIndex,e=a(x,I,E),w.lastIndex=I.lastIndex,e;var S=$.groups,k=y&&w.sticky,R=a(o,w),A=w.source,O=0,M=E;if(k&&(R=m(R,"y",""),-1===g(R,"g")&&(R+="g"),M=b(E,w.lastIndex),w.lastIndex>0&&(!w.multiline||w.multiline&&"\n"!==h(E,w.lastIndex-1))&&(A="(?: "+A+")",M=" "+M,O++),n=new RegExp("^(?:"+A+")",R)),_&&(n=new RegExp("^"+A+"$(?!\\s)",R)),C&&(r=w.lastIndex),s=a(v,k?n:w,M),k?s?(s.input=b(s.input,O),s[0]=b(s[0],O),s.index=w.lastIndex,w.lastIndex+=s[0].length):w.lastIndex=0:C&&s&&(w.lastIndex=w.global?s.index+s[0].length:r),_&&s&&s.length>1&&a(p,s[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(s[c]=void 0)})),s&&S)for(s.groups=d=l(null),c=0;c<S.length;c++)f=S[c],d[f[0]]=s[f[1]];return s}),t.exports=x},"9a0b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"100%"}},[n("el-container",{staticStyle:{height:"100%"}},[n("el-header",{staticClass:"header"},[n("Header",{attrs:{status:t.isCollapse},on:{collapseClick:t.collapseClick}})],1),n("el-container",{staticStyle:{height:"100%"}},[n("el-aside",{staticClass:"aside",style:t.isCollapse?"width:64px;!important":"width:160px;!important"},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":t.defaultActive,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b",collapse:t.isCollapse,router:"","unique-opened":!0}},[n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{staticClass:"fa fa-gears"}),n("span",[t._v(" 常用工具")])]),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"noteManage"}},[n("i",{staticClass:"fa fa-book",attrs:{"aria-hidden":"true"}}),t._v(" 便签管理")])],1)],2),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[n("i",{staticClass:"fa fa-users"}),n("span",[t._v(" 账户管理")])]),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"userManage"}},[n("i",{staticClass:"fa fa-user"}),t._v(" 用户管理")])],1)],2)],1)],1),n("el-container",[n("el-main",[n("keep-alive",[n("router-view")],1)],1),n("el-footer",{staticClass:"footer"},[n("Footer")],1)],1)],1)],1)],1)},r=[],i=(n("ac1f"),n("5319"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"logo",style:this.collStatus?"width:64px":"width:160px"},[n("span",{staticClass:"logo_txt"},[t._v("LOGO")])]),t._l(t.$route.meta,(function(e){return n("div",{key:e,staticClass:"header_body"},[t._v(t._s(e)+" "),n("div",{staticClass:"collapse"},[n("span",{on:{click:t.collapseBtn}},[n("i",{staticClass:"fa fa-bars fa-lg"})])]),n("div",{staticClass:"header_body_user"},[n("el-dropdown",{on:{command:t.handleCommand}},[n("span",[n("i",{staticClass:"fa fa-user-circle",attrs:{"aria-hidden":"true"}}),t._v(" 用户信息")]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"signout"}},[t._v("退出")])],1)],1)],1)])}))],2)}),o=[],s={name:"Header",props:{status:Boolean},data:function(){return{collStatus:this.status}},created:function(){},methods:{handleCommand:function(t){this.$router.push("/")},collapseBtn:function(){this.collStatus?this.collStatus=!1:this.collStatus=!0,this.$emit("collapseClick",this.collStatus)}}},c=s,l=(n("4c5a"),n("2877")),u=Object(l["a"])(c,i,o,!1,null,"415bf84e",null),d=u.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"})},p=[],v={name:"Footer",props:{name:String},data:function(){return{}}},x=v,h=(n("6bd7"),Object(l["a"])(x,f,p,!1,null,"0f0bdbf9",null)),g=h.exports,m={name:"Menu",components:{Header:d,Footer:g},computed:{defaultActive:function(){return this.$route.path.replace("/pages/","")}},data:function(){return{isCollapse:!1,screenWidth:document.body.clientWidth}},created:function(){},methods:{collapseClick:function(t){this.isCollapse=t}}},b=m,C=(n("46d0"),Object(l["a"])(b,a,r,!1,null,"0a617894",null));e["default"]=C.exports},"9f38":function(t,e,n){},"9f7f":function(t,e,n){var a=n("d039"),r=n("da84"),i=r.RegExp,o=a((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),s=o||a((function(){return!i("a","y").sticky})),c=o||a((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}));t.exports={BROKEN_CARET:c,MISSED_STICKY:s,UNSUPPORTED_Y:o}},ac1f:function(t,e,n){"use strict";var a=n("23e7"),r=n("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(t,e,n){"use strict";var a=n("825a");t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},d784:function(t,e,n){"use strict";n("ac1f");var a=n("e330"),r=n("6eeb"),i=n("9263"),o=n("d039"),s=n("b622"),c=n("9112"),l=s("species"),u=RegExp.prototype;t.exports=function(t,e,n,d){var f=s(t),p=!o((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),v=p&&!o((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[f]=/./[f]),n.exec=function(){return e=!0,null},n[f](""),!e}));if(!p||!v||n){var x=a(/./[f]),h=e(f,""[t],(function(t,e,n,r,o){var s=a(t),c=e.exec;return c===i||c===u.exec?p&&!o?{done:!0,value:x(e,n,r)}:{done:!0,value:s(n,e,r)}:{done:!1}}));r(String.prototype,t,h[0]),r(u,f,h[1])}d&&c(u[f],"sham",!0)}},fce3:function(t,e,n){var a=n("d039"),r=n("da84"),i=r.RegExp;t.exports=a((function(){var t=i(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))}}]);
//# sourceMappingURL=menu.d01494dd.js.map