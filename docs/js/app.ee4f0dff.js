(function(){"use strict";var e={4662:function(e,t,n){n.d(t,{Z:function(){return l}});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"s-link",style:e.linkStyle},[n("a",{class:[e.hoverBlue?"blue":"green"],attrs:{href:"#"},on:{click:e.handleClick}},[e._t("default")],2)])},o=[],i=n(144),a=i["default"].extend({name:"SLink",methods:{handleClick:function(e){e.preventDefault(),this.$router.push(this.to)}},props:{to:{type:String,required:!0},linkStyle:{type:Object,default:function(){return{}}},hoverBlue:{type:Boolean,default:function(){return!1}}}}),u=a,c=n(1001),s=(0,c.Z)(u,r,o,!1,null,"7deba9f4",null),l=s.exports},2648:function(e,t){var n="westcoast.blue";t["Z"]={SERVER_URL:"https://".concat(n,":8000")}},3234:function(e,t,n){var r=n(144),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("s-nav-bar",{staticClass:"navbar navbar-top",scopedSlots:e._u([{key:"title",fn:function(){return[n("h2",[e._v("肉桂面包")])]},proxy:!0}])},e._l(e.realLinks,(function(t){return n("s-nav-bar-item",{key:t.to,attrs:{to:t.to}},[e._v(" "+e._s(t.name)+" ")])})),1),n("keep-alive",[n("router-view")],1),e._m(0)],1)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"footer"},[n("h1",[e._v("End")]),n("p",[e._v("关于一个爱吃肉桂面包男孩的网站。")]),n("p",[e._v("你可以从这个博客获取一些有用的，没用的，或者不管什么东西。希望能够帮到你。你也可以向我的邮箱留言，可以提建议或者寻求帮助。")]),n("p",[e._v("邮箱："),n("a",{attrs:{href:"mailto:shencong2001@live.cn"}},[e._v("shencong2001@live.cn")])]),n("p",[e._v("项目地址： "),n("a",{attrs:{href:"https://github.com/Cinnamon-code/Cinnamon-code.github.io",target:"_blank"}},[e._v(" github.com/Cinnamon-code/Cinnamon-code.github.io ")])])])}],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"s-navbar"},[n("div",{staticClass:"s-navbar-title",on:{click:function(t){return e.$router.push("/")}}},[e._t("title")],2),n("div",{staticClass:"s-navbar-items"},[e._t("default")],2)])},u=[],c=r["default"].extend({name:"SNavBar"}),s=c,l=n(1001),f=(0,l.Z)(s,a,u,!1,null,"c65f82be",null),d=f.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"s-navbar-item"},[n("s-link",{staticClass:"s-navbar-item__inner",style:{color:this.routePath===this.to?"#156554":"inherit"},attrs:{to:e.to}},[e._t("default")],2)],1)},h=[],m=n(4662),v=r["default"].extend({name:"SNavBarItem",components:{SLink:m.Z},props:{to:{type:String,required:!0}},methods:{},computed:{routePath:function(){return"/".concat(this.$route.path.split("/")[1])}}}),b=v,g=(0,l.Z)(b,p,h,!1,null,"4e2d00aa",null),y=g.exports,_=r["default"].extend({name:"App",components:{SNavBarItem:y,SNavBar:d},data:function(){return{links:[]}},created:function(){this.links=[{name:"Home",to:"/"},{name:"Articles",to:"/articles"},{name:"Life",to:"/life"},{name:"About",to:"/about"},{name:"Post",to:"/post"}]},methods:{checkJwt:function(){this.$http.get({url:"/jwt"}).then((function(e){var t=e.data;401===t.code&&(localStorage.removeItem("cinnamon-token"),localStorage.removeItem("cinnamon-info"))}))}},computed:{realLinks:function(){var e=localStorage.getItem("cinnamon-info");if(e){var t=JSON.parse(e);if(t.root)return this.links}return this.links.slice(0,this.links.length-1)}},mounted:function(){window.onscroll=function(){var e=document.querySelector(".navbar-top");0===window.scrollY?(e.style.boxShadow="none",e.style.padding="50px 80px"):(e.style.boxShadow="0 2px 12px 0 rgba(0, 0, 0, 0.1)",e.style.padding="15px 80px")}}}),k=_,w=(0,l.Z)(k,o,i,!1,null,null,null),S=w.exports,C=n(8345),E=n(4720),O=n.n(E),P=n(2648),j="".concat(P.Z.SERVER_URL,"/api"),x=5e3,A=n(655),L=n(9669),T=n.n(L),q=function(){function e(e){Object.defineProperty(this,"_instance",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this._instance=T().create(e),this._instance.interceptors.request.use((function(e){var t,n=null!==(t=localStorage.getItem("cinnamon-token"))&&void 0!==t?t:"";return n.startsWith("Bearer ")?e.headers["Authorization"]=n:e.headers["Authorization"]="Bearer ".concat(n),e}),(function(e){return Promise.reject(e)})),this._instance.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}))}return Object.defineProperty(e.prototype,"request",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var t=this;return new Promise((function(n,r){t._instance.request(e).then((function(e){return n(e)})).catch((function(e){return r(e)}))}))}}),Object.defineProperty(e.prototype,"get",{enumerable:!1,configurable:!0,writable:!0,value:function(e){return this._instance.request((0,A.pi)((0,A.pi)({},e),{method:"GET"}))}}),Object.defineProperty(e.prototype,"post",{enumerable:!1,configurable:!0,writable:!0,value:function(e){return this._instance.request((0,A.pi)((0,A.pi)({},e),{method:"POST"}))}}),Object.defineProperty(e.prototype,"delete",{enumerable:!1,configurable:!0,writable:!0,value:function(e){return this._instance.request((0,A.pi)((0,A.pi)({},e),{method:"DELETE"}))}}),Object.defineProperty(e.prototype,"put",{enumerable:!1,configurable:!0,writable:!0,value:function(e){return this._instance.request((0,A.pi)((0,A.pi)({},e),{method:"PUT"}))}}),e}(),B=q,N=new B({baseURL:j,timeout:x}),Z={install:function(e){e.prototype.$http=N}};r["default"].use(C.Z);var I=[{path:"/",name:"home",component:function(){return n.e(987).then(n.bind(n,5987))}},{path:"/home",redirect:"/"},{path:"/post",name:"Post",component:function(){return n.e(129).then(n.bind(n,2129))}},{path:"/articles",name:"Articles",component:function(){return n.e(863).then(n.bind(n,6863))},children:[{path:":_id",name:"Article",component:function(){return n.e(77).then(n.bind(n,1077))}}]}],$=new C.Z({mode:"hash",routes:I});$.beforeEach((function(e,t,n){var r=localStorage.getItem("cinnamon-token");r?N.get({url:"/jwt"}).then((function(e){var t=e.data;401===t.code?((0,E.Message)({type:"warning",message:"登录已过期，请重新登录。",duration:1500,onClose:function(){n("/")}}),localStorage.removeItem("cinnamon-token"),localStorage.removeItem("cinnamon-info")):n()})):n()})),$.afterEach((function(){return window.scroll(0,0)}));var R=$,U=n(629),D={},F={},M={},z={};r["default"].use(U.ZP);var H={userInfo:{}},J=new U.ZP.Store({state:H,getters:D,mutations:F,actions:M,modules:z});r["default"].config.productionTip=!1,r["default"].use(O()),r["default"].use(Z),new r["default"]({router:R,store:J,render:function(e){return e(S)}}).$mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(l--,1);var s=o();void 0!==s&&(t=s)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{77:"103f76f8",129:"d6eaf5a6",863:"cda52b17",987:"a50435a0"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{77:"7d004f99",129:"16a217dc",863:"4f034e44",987:"ad52ad16"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="cinnamon:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+i){u=f;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=r),e[r]=[o];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),u=i&&i.target&&i.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=i,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),u=n.p+a;if(t(a,u))return o();e(r,u,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={77:1,129:1,863:1,987:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),u=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],u=r[1],c=r[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(c)var l=c(n)}for(t&&t(r);s<a.length;s++)i=a[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self["webpackChunkcinnamon"]=self["webpackChunkcinnamon"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(3234)}));r=n.O(r)})();
//# sourceMappingURL=app.ee4f0dff.js.map