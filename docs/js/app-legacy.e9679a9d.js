(function(){"use strict";var t={9015:function(t,e,n){n.d(e,{Z:function(){return l}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"s-link",style:t.linkStyle},[n("a",{attrs:{href:"#"},on:{click:t.handleClick}},[t._t("default")],2)])},o=[],i={name:"SLink",methods:{handleClick(t){t.preventDefault(),this.$router.push(this.to)}},props:{to:{type:String,required:!0},linkStyle:{type:Object,default(){return{}}}}},u=i,a=n(1001),s=(0,a.Z)(u,r,o,!1,null,"8b36ac96",null),l=s.exports},6446:function(t,e,n){var r=n(144),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("s-nav-bar",{staticClass:"navbar",scopedSlots:t._u([{key:"title",fn:function(){return[n("h2",[t._v("肉桂面包")])]},proxy:!0}])},t._l(t.links,(function(e){return n("s-nav-bar-item",{key:e.to,attrs:{to:e.to}},[t._v(" "+t._s(e.name)+" ")])})),1),n("transition",{attrs:{name:"fade"}},[n("keep-alive",[n("router-view")],1)],1)],1)},i=[],u=n(655),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"s-navbar"},[n("div",{staticClass:"s-navbar-title",on:{click:function(e){return t.$router.push("/")}}},[t._t("title")],2),n("div",{staticClass:"s-navbar-items"},[t._t("default")],2)])},s=[],l={name:"SNavBar"},c=l,f=n(1001),d=(0,f.Z)(c,a,s,!1,null,"3c5f42cc",null),p=d.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"s-navbar-item"},[n("s-link",{staticClass:"s-navbar-item__inner",style:{color:this.routePath===this.to?"#002fa7":"inherit"},attrs:{to:t.to}},[t._t("default")],2)],1)},h=[],m=n(9015),b={name:"SNavBarItem",components:{SLink:m.Z},props:{to:{type:String,require:!0}},methods:{},computed:{routePath(){return`/${this.$route.path.split("/")[1]}`}}},y=b,g=(0,f.Z)(y,v,h,!1,null,"4c9cfb08",null),k=g.exports,C=r["default"].extend({name:"App",components:{SNavBarItem:k,SNavBar:p},data:function(){return{links:[]}},created:function(){return(0,u.mG)(this,void 0,void 0,(function(){var t=this;return(0,u.Jh)(this,(function(e){switch(e.label){case 0:return[4,new Promise((function(e){setTimeout((function(){t.links=[{name:"Home",to:"/"},{name:"Articles",to:"/articles"},{name:"Life",to:"/life"},{name:"About",to:"/about"}]}),500)}))];case 1:return e.sent(),[2]}}))}))}}),_=C,w=(0,f.Z)(_,o,i,!1,null,null,null),S=w.exports,O=n(8345);r["default"].use(O.Z);var E=[{path:"/",name:"home",component:function(){return n.e(755).then(n.bind(n,9755))}},{path:"/home",redirect:"/"}],j=new O.Z({mode:"hash",routes:E}),x=j,A=n(629),P={},N={},T={},Z={};r["default"].use(A.ZP);var $={},L=new A.ZP.Store({state:$,getters:P,mutations:N,actions:T,modules:Z}),B=n(4720),q=n(9669),D=n.n(q);r["default"].config.productionTip=!1,r["default"].prototype.$axios=D(),r["default"].use(B.Carousel),r["default"].use(B.CarouselItem),r["default"].use(B.Col),r["default"].use(B.Row),r["default"].use(B.Card),r["default"].use(B.Divider),new r["default"]({router:x,store:L,render:function(t){return t(S)}}).$mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,i){if(!r){var u=1/0;for(c=0;c<t.length;c++){r=t[c][0],o=t[c][1],i=t[c][2];for(var a=!0,s=0;s<r.length;s++)(!1&i||u>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[s])}))?r.splice(s--,1):(a=!1,i<u&&(u=i));if(a){t.splice(c--,1);var l=o();void 0!==l&&(e=l)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[r,o,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"-legacy.f8028264.js"}}(),function(){n.miniCssF=function(t){return"css/"+t+".ddfe373d.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="src:";n.l=function(r,o,i,u){if(t[r])t[r].push(o);else{var a,s;if(void 0!==i)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var f=l[c];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==e+i){a=f;break}}a||(s=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",e+i),a.src=r),t[r]=[o];var d=function(e,n){a.onerror=a.onload=null,clearTimeout(p);var o=t[r];if(delete t[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),s&&document.head.appendChild(a)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t=function(t,e,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var u=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||e,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=u,s.request=a,o.parentNode.removeChild(o),r(s)}};return o.onerror=o.onload=i,o.href=e,document.head.appendChild(o),o},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===t||i===e))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===t||i===e)return o}},r=function(r){return new Promise((function(o,i){var u=n.miniCssF(r),a=n.p+u;if(e(u,a))return o();t(r,a,o,i)}))},o={143:0};n.f.miniCss=function(t,e){var n={755:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=i);var u=n.p+n.u(e),a=new Error,s=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+e+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};n.l(u,s,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,i,u=r[0],a=r[1],s=r[2],l=0;if(u.some((function(e){return 0!==t[e]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(s)var c=s(n)}for(e&&e(r);l<u.length;l++)i=u[l],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(c)},r=self["webpackChunksrc"]=self["webpackChunksrc"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6446)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.e9679a9d.js.map