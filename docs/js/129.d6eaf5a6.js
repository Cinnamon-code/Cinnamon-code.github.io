"use strict";(self["webpackChunkcinnamon"]=self["webpackChunkcinnamon"]||[]).push([[129],{2129:function(t,n,e){e.r(n),e.d(n,{default:function(){return F}});var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"post"},[e("el-row",{attrs:{gutter:30}},[e("el-col",{attrs:{xs:24,sm:16,lg:18,xl:18}},[e("div",{staticClass:"editor"},[e("h1",[t._v("开始你的创作吧！")]),e("editor",{ref:"editor",attrs:{"api-key":t.apiKey,init:t.init,"cloud-channel":"6","tag-name":"div"},model:{value:t.content,callback:function(n){t.content=n},expression:"content"}})],1)]),e("el-col",{attrs:{xs:24,sm:8,lg:6,xl:6}},[e("div",{staticClass:"title"},[e("h1",[t._v("好听的标题")]),e("el-input",{model:{value:t.title,callback:function(n){t.title=n},expression:"title"}})],1),e("div",{staticClass:"digest"},[e("h1",[t._v("内容摘要")]),e("el-input",{attrs:{type:"textarea",rows:12},model:{value:t.digest,callback:function(n){t.digest=n},expression:"digest"}})],1)])],1),e("div",{staticClass:"select-cover"},[e("h1",[t._v("选个封面")]),e("s-image-upload",{on:{change:t.handleChange}})],1),e("el-button",{staticClass:"submit-btn",attrs:{type:"primary",plain:"",loading:t.loading},on:{click:t.submit}},[t._v(t._s(t.btnText))])],1)},o=[],r=e(655),s=e(144),a=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],l=function(t){return-1!==a.map((function(t){return t.toLowerCase()})).indexOf(t.toLowerCase())},c=function(t,n,e){Object.keys(n).filter(l).forEach((function(i){var o=n[i];"function"===typeof o&&("onInit"===i?o(t,e):e.on(i.substring(2),(function(t){return o(t,e)})))}))},u=function(t,n){var e=t.$props.modelEvents?t.$props.modelEvents:null,i=Array.isArray(e)?e.join(" "):e;n.on(i||"change input undo redo",(function(){t.$emit("input",n.getContent({format:t.$props.outputFormat}))}))},d=function(t,n,e){var i=n.$props.value?n.$props.value:"",o=n.$props.initialValue?n.$props.initialValue:"";e.setContent(i||(n.initialized?n.cache:o)),n.$watch("value",(function(t,i){e&&"string"===typeof t&&t!==i&&t!==e.getContent({format:n.$props.outputFormat})&&e.setContent(t)})),n.$listeners.input&&u(n,e),c(t,n.$listeners,e),n.initialized=!0},p=0,h=function(t){var n=Date.now(),e=Math.floor(1e9*Math.random());return p++,t+"_"+e+p+String(n)},f=function(t){return null!==t&&"textarea"===t.tagName.toLowerCase()},m=function(t){return"undefined"===typeof t||""===t?[]:Array.isArray(t)?t:t.split(" ")},g=function(t,n){return m(t).concat(m(n))},v=function(t){return null===t||void 0===t},y=function(){return{listeners:[],scriptId:h("tiny-script"),scriptLoaded:!1}},b=function(){var t=y(),n=function(t,n,e,i){var o=n.createElement("script");o.referrerPolicy="origin",o.type="application/javascript",o.id=t,o.src=e;var r=function(){o.removeEventListener("load",r),i()};o.addEventListener("load",r),n.head&&n.head.appendChild(o)},e=function(e,i,o){t.scriptLoaded?o():(t.listeners.push(o),e.getElementById(t.scriptId)||n(t.scriptId,e,i,(function(){t.listeners.forEach((function(t){return t()})),t.scriptLoaded=!0})))},i=function(){t=y()};return{load:e,reinitialize:i}},C=b(),$=function(){return"undefined"!==typeof window?window:e.g},S=function(){var t=$();return t&&t.tinymce?t.tinymce:null},x={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],value:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(t){return"html"===t||"text"===t}}},w=function(){return w=Object.assign||function(t){for(var n,e=1,i=arguments.length;e<i;e++)for(var o in n=arguments[e],n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},w.apply(this,arguments)},k=function(t,n,e){return t(e||"div",{attrs:{id:n}})},E=function(t,n){return t("textarea",{attrs:{id:n},style:{visibility:"hidden"}})},D=function(t){return function(){var n=w(w({},t.$props.init),{readonly:t.$props.disabled,selector:"#"+t.elementId,plugins:g(t.$props.init&&t.$props.init.plugins,t.$props.plugins),toolbar:t.$props.toolbar||t.$props.init&&t.$props.init.toolbar,inline:t.inlineEditor,setup:function(n){t.editor=n,n.on("init",(function(e){return d(e,t,n)})),t.$props.init&&"function"===typeof t.$props.init.setup&&t.$props.init.setup(n)}});f(t.element)&&(t.element.style.visibility="",t.element.style.display=""),S().init(n)}},I={props:x,created:function(){this.elementId=this.$props.id||h("tiny-vue"),this.inlineEditor=this.$props.init&&this.$props.init.inline||this.$props.inline,this.initialized=!1},watch:{disabled:function(){this.editor.setMode(this.disabled?"readonly":"design")}},mounted:function(){if(this.element=this.$el,null!==S())D(this)();else if(this.element&&this.element.ownerDocument){var t=this.$props.cloudChannel?this.$props.cloudChannel:"5",n=this.$props.apiKey?this.$props.apiKey:"no-api-key",e=v(this.$props.tinymceScriptSrc)?"https://cdn.tiny.cloud/1/"+n+"/tinymce/"+t+"/tinymce.min.js":this.$props.tinymceScriptSrc;C.load(this.element.ownerDocument,e,D(this))}},beforeDestroy:function(){null!==S()&&S().remove(this.editor)},deactivated:function(){var t;this.inlineEditor||(this.cache=this.editor.getContent(),null===(t=S())||void 0===t||t.remove(this.editor))},activated:function(){!this.inlineEditor&&this.initialized&&D(this)()},render:function(t){return this.inlineEditor?k(t,this.elementId,this.$props.tagName):E(t,this.elementId)}},A=I,_={API_KEY:"e34ndt5d8ui8r311yzt7tgx9xdo7q6mm2dib76x5cxucshwg",plugins:["advlist","autolink","lists","link","image","charmap","preview","anchor","searchreplace","visualblocks","fullscreen","insertdatetime","media","table","help","wordcount"],toolbar:"undo redo | formatpainter casechange blocks | bold italic backcolor |\n            alignleft aligncenter alignright alignjustify |\n            bullist numlist checklist outdent indent | removeformat | a11ycheck code table help",skin:"oxide-dark"},P=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"s-image-upload",on:{click:t.handleClick}},[e("div",{staticClass:"s-image-upload__inner",style:{height:t.height+"px"}},[t.imageUrl?e("img",{attrs:{src:t.imageUrl}}):e("i",{staticClass:"el-icon-plus upload-icon",style:{lineHeight:t.height+"px"}})]),e("input",{ref:"input",attrs:{type:"file",hidden:"",name:t.name},on:{change:t.handleChange}})])},U=[],O=s["default"].extend({name:"SImageUpload",data:function(){return{imageUrl:""}},props:{name:{type:String,default:function(){return"file"}},height:{type:Number,default:function(){return 500}}},methods:{handleClick:function(){this.$refs.input.click()},read:function(t){var n=this;if(t){var e=new FileReader;e.readAsDataURL(t),e.onload=function(){n.imageUrl=e.result}}},handleChange:function(t){var n=t.target.files,e=n?n[0]:null;this.read(e);var i=new FormData;i.set("cover",e),this.$emit("change",i)}}}),M=O,j=e(1001),L=(0,j.Z)(M,P,U,!1,null,"5f72f666",null),B=L.exports,K=s["default"].extend({name:"PostView",data:function(){return{apiKey:_.API_KEY,init:(0,r.pi)({height:800,borderRadius:0},_),title:"",content:"",digest:"",cover:null,loading:!1,btnText:"提交"}},methods:{handleChange:function(t){this.cover=t},submit:function(){var t,n,e;return(0,r.mG)(this,void 0,void 0,(function(){var i=this;return(0,r.Jh)(this,(function(o){switch(o.label){case 0:return this.loading=!0,null===(t=this.cover)||void 0===t||t.set("title",this.title),null===(n=this.cover)||void 0===n||n.set("digest",this.digest),null===(e=this.cover)||void 0===e||e.set("content",this.content),[4,this.$http.post({url:"/post/upload",data:this.cover}).then((function(t){var n=t.data;i.loading=!1,i.$message({type:n.status?"success":"error",message:n.msg,duration:1500,onClose:function(){n.status&&location.reload()}})}))];case 1:return o.sent(),[2]}}))}))}},components:{SImageUpload:B,Editor:A}}),R=K,z=(0,j.Z)(R,i,o,!1,null,null,null),F=z.exports}}]);
//# sourceMappingURL=129.d6eaf5a6.js.map