"use strict";(self["webpackChunkcinnamon"]=self["webpackChunkcinnamon"]||[]).push([[77],{1077:function(t,e,a){a.r(e),a.d(e,{default:function(){return k}});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"s-article"},[a("div",{staticClass:"s-article__cover"},[a("img",{attrs:{src:t.art.coverUrl,alt:"cover"}})]),a("div",{staticClass:"s-article__title"},[a("h1",[t._v(t._s(t.art.title))]),a("span",{staticClass:"option"},[a("span",[t._v("updated")]),t._v(t._s(t.art.updated))]),a("span",{staticClass:"option"},[a("span",[t._v("created")]),t._v(t._s(t.art.created))]),a("span",{staticClass:"option"},[a("span",[t._v("like")]),t._v(t._s(t.art.likes))]),a("span",{staticClass:"option"},[a("span",[t._v("comments")]),t._v(t._s(t.art.comments))])]),a("div",{staticClass:"s-article__body"},[a("el-row",{attrs:{gutter:30}},[a("el-col",{attrs:{xs:24,sm:24,xl:18,lg:18}},[a("p",[t._v(t._s(t.art.digest))]),a("el-divider"),a("p",{domProps:{innerHTML:t._s(t.art.content)}})],1),a("el-col",{attrs:{xs:24,sm:24,xl:6,lg:6}},[a("div",{staticClass:"side"},[a("el-button",{staticClass:"like-btn",attrs:{type:t.like?"danger":"info"},on:{click:t.likeOrDislike}},[t._v(" "+t._s(t.like?"不":"")+"喜欢这篇文章 ")]),a("s-card",{attrs:{header:"其他文章"}},t._l(t.others,(function(e){return a("s-link",{key:e._id,attrs:{to:"/articles/"+e._id,"hover-blue":""}},[t._v(t._s(e.title))])})),1)],1)])],1)],1),a("div",{staticClass:"s-article__comment"})])},s=[],n=a(655),i=a(144),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"s-card",class:[t.shadow?"shadow":""]},[a("div",{staticClass:"s-card__header",style:{backgroundColor:t.headerBackgroundColor,color:t.headerColor}},[t.header?a("span",[t._v(t._s(t.header))]):t._t("header")],2),a("div",{staticClass:"s-card__body",style:t.bodyStyle},[t._t("default")],2)])},o=[],l=i["default"].extend({name:"SCard",props:{header:{type:String,default:function(){return""}},shadow:{type:Boolean,default:function(){return!1}},headerBackgroundColor:{type:String,default:function(){return"#002fa7"}},headerColor:{type:String,default:function(){return"#fff"}},bodyStyle:{type:Object,default:function(){return{padding:"20px"}}}}}),d=l,u=a(1001),p=(0,u.Z)(d,c,o,!1,null,"6ae18c44",null),_=p.exports,h=a(4662),f=a(2648),v=i["default"].extend({name:"SArticle",components:{SLink:h.Z,SCard:_},data:function(){return{id:this.$route.params._id,art:{},others:[],like:!1}},methods:{formatDate:function(t){var e=new Date(t),a=e.getFullYear(),r=e.getMonth()+1,s=e.getDate(),n=e.getHours(),i=e.getMinutes();return"".concat(a,"/").concat(r>=10?r:"0".concat(r),"/").concat(s>=10?s:"0".concat(s),"\n      ").concat(n>=10?n:"0".concat(n),":").concat(i>=10?i:"0".concat(i))},likeOrDislike:function(){var t=this,e=JSON.parse(localStorage.getItem("cinnamon-info"));e?this.$http.post({url:"/like/".concat(this.like?"dislike":"like"),data:{userId:e._id,artId:this.id}}).then((function(e){var a=e.data;return t.like=a.status})):this.$message.error("只有登录才能喜欢这篇文章哦～")}},watch:{"$route.params":{handler:function(){this.$forceUpdate()},deep:!0}},created:function(){var t=this;this.$http.get({url:"/article/get/".concat(this.id)}).then((function(e){var a=e.data,r=a.art;a.status?t.art=(0,n.pi)((0,n.pi)({},r),{coverUrl:"".concat(f.Z.SERVER_URL).concat(r.coverUrl),updated:t.formatDate(r.updated),created:t.formatDate(r.created)}):t.$message({type:"error",message:a.msg,duration:1500,onClose:function(){t.$router.push("/articles")}})})),this.$http.get({url:"/article/get_all"}).then((function(e){var a=e.data,r=a.articles;t.others=r.filter((function(e){return e._id!==t.id})).splice(0,10)}));var e=JSON.parse(localStorage.getItem("cinnamon-info"));e&&this.$http.get({url:"/like/get",params:{userId:e._id,artId:this.id}}).then((function(e){var a=e.data;return t.like=a.status}))}}),g=v,m=(0,u.Z)(g,r,s,!1,null,"21e5cbd0",null),k=m.exports}}]);
//# sourceMappingURL=77-legacy.103f76f8.js.map