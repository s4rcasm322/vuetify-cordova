webpackJsonp([1],{123:function(e,t,n){"use strict";var a=n(197),o=n.n(a),i=n(179),r=n(178),s=n(83),c={langs:{es:i.a,en:r.a},default:"en",selected:null,current:null,expr:function(e,t,n){if(!e)return e;"object"===(void 0===e?"undefined":o()(e))&&(t=e[1],e=e[0]);var a=this.current[e.toLowerCase()];return a?(a=a.replace("%0%",this.current[t]),a=a.replace("%1%",this.current[n])):e},change:function(e){this.langs[e]||(e=this.default),this.langs[e]&&(this.current=this.langs[e],this.selected=e)}};if(!c.current){var l="en";navigator.language&&(l=navigator.language.toLowerCase().split("-")[0]),s.a.state.lang&&(l=s.a.state.lang),c.change(l)}t.a=c},124:function(e,t,n){"use strict";var a=n(61),o=n(465),i=n(183);a.default.use(o.a);var r=new o.a({routes:i.a});t.a=r},125:function(e,t,n){"use strict";t.a={home:"fas fa-home",form:"fab fa-wpforms",github:"fab fa-github",html:"fab fa-css3-alt",exit:"fas fa-sign-out-alt",options:"fas fa-cog"}},172:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(61),o=n(467),i=n.n(o),r=n(428),s=(n.n(r),n(445)),c=n.n(s),l=n(446),u=n.n(l),d=n(444),m=n(426),f=(n.n(m),n(429)),v=(n.n(f),n(427)),p=(n.n(v),n(83)),g=n(447),h=n.n(g),_=n(124);if(a.default.use(i.a),a.default.config.productionTip=!1,a.default.use(c.a),a.default.use(u.a),a.default.use(d.a),"file:"===window.location.protocol||"3000"===window.location.port){var x=document.createElement("script");x.setAttribute("type","text/javascript"),x.setAttribute("src","cordova.js"),document.body.appendChild(x)}new a.default({el:"#app",router:_.a,store:p.a,template:"<App/>",components:{App:h.a},head:{meta:[{name:"viewport",content:"width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"}]}})},174:function(e,t,n){"use strict";var a=n(124),o=n(175);t.a=function(e,t){return e.route?void a.a.push({name:e.route,params:e.params}):o.a[e.id]?void o.a[e.id]():void console.log("Clicked "+e.title)}},175:function(e,t,n){"use strict";var a=n(123);t.a={exit:function(){confirm(a.a.current.exit_application)&&navigator.app.exitApp()},githubPage:function(){window.open("https://fraigo.github.io/vuetify-cordova/www/","_blank")},githubProject:function(){window.open("https://github.com/fraigo/vuetify-cordova","_blank")}}},176:function(e,t){e.exports={title:"Vuetify Cordova",shortTitle:"Vuetify",description:"Vuetify PWA Application Template for Cordova Application Projects",url:"https://fraigo.github.io/vuetify-cordova/www/",icon:"img/icons/icon.png",iconSize:256,androidAppId:"io.github.fraigo.vuecordova",author:"Francisco Igor",email:"franciscoigor@gmail.com",googleAnalyticsKey:"UA-114956450-1",lang:null}},177:function(e,t,n){"use strict";t.a=[{label:"name",name:"name",value:null,placeholder:["enter_param","name"],validation:"required",required:!0,type:"text"},{label:"email",name:"email",value:null,placeholder:["enter_param","email"],validation:"required|email",required:!0,width:50,type:"text"},{label:"age",name:"age",value:null,placeholder:["enter_param","age"],validation:"required",required:!0,width:50,type:"number"},{label:"address",name:"address",value:null,placeholder:["enter_param","address"],validation:"required",required:!0,multiLine:!0,type:"text"}]},178:function(e,t,n){"use strict";t.a={exit_application:"Exit application ?",exit:"Exit",home:"Home",form:"Form example",browser:"Browser properties",github_project:"GitHub Project",github_demo:"GitHub Demo",name:"Name",email:"Email",age:"Age",address:"Address",enter_param:"Enter %0%",options:"Options",language:"Language",menu:"Menu",mini_menu:"Mini menu",dark_mode:"Dark mode",_lang_name:"English",_lang_code:"en"}},179:function(e,t,n){"use strict";t.a={exit_application:"Salir de la aplicación ?",exit:"Salir",home:"Inicio",form:"Demo Formulario",browser:"Propiedades web",github_project:"Proyecto GitHub",github_demo:"Demo GitHub",name:"Nombre",email:"Correo",age:"Edad",address:"Dirección",enter_param:"Ingresar %0%",options:"Opciones",language:"Idioma",menu:"Menu",mini_menu:"Menu simple",dark_mode:"Modo obscuro",_lang_name:"Español",_lang_code:"es"}},180:function(e,t,n){"use strict";var a=n(182),o=n(181),i={items:a.a,buttons:o.a,miniVariant:!1,toolbar:!0,darkMode:!1,opened:!1};t.a=i},181:function(e,t,n){"use strict";var a=n(125);t.a=[{icon:a.a.exit,title:"exit",id:"exit",cordova:!0}]},182:function(e,t,n){"use strict";var a=n(125);t.a=[{icon:a.a.home,title:"home",route:"Home",id:"home"},{icon:a.a.form,title:"form",route:"Form",id:"form"},{icon:a.a.html,title:"browser",route:"Props",id:"props"},{icon:a.a.github,title:"github_project",id:"githubProject"},{icon:a.a.github,title:"github_demo",id:"githubPage"},{classes:["menu-separator"]},{icon:a.a.options,title:"options",route:"Options",id:"options"},{classes:["menu-separator"],cordova:!0},{icon:"fas fa-sign-out-alt",title:"Exit",id:"exit",separator:!0,cordova:!0}]},183:function(e,t,n){"use strict";var a=n(453),o=n.n(a),i=n(451),r=n.n(i),s=n(455),c=n.n(s),l=n(452),u=n.n(l),d=n(454),m=n.n(d),f=n(177);t.a=[{path:"/",name:"Home",component:o.a},{path:"/contact",name:"Contact",component:r.a},{path:"/props",name:"Props",component:c.a},{path:"/form",name:"Form",component:u.a,props:{formFields:f.a,title:"form"}},{path:"/options",name:"Options",component:m.a}]},184:function(e,t,n){"use strict";var a=n(176),o=n.n(a),i=n(180);t.a={app:o.a,menu:i.a,lang:o.a.lang}},185:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(61),o=n(83),i=n(450),r=n.n(i),s=n(448),c=n.n(s),l=n(123),u=n(174);window.$lang=l.a,t.default={components:{menuList:r.a,buttonList:c.a},data:function(){return{cordova:a.default.cordova,config:o.a.state,lang:l.a,isCordovaReady:!1}},created:function(){var e=this;this.cordova.on("deviceready",function(){e.onDeviceReady(),e.isCordovaReady=!0})},methods:{onDeviceReady:function(){this.cordova.on("pause",this.onPause,!1),this.cordova.on("resume",this.onResume,!1),"Android"===this.cordova.device.platform&&document.addEventListener("backbutton",this.onBackButton,!1)},onPause:function(){console.log("pause")},onResume:function(){setTimeout(function(){console.log("resume")},0)},onBackButton:function(){},exitApp:function(){navigator.app.exitApp()},menuClick:function(e){n.i(u.a)(e)}}}},186:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{items:Array,cordovaReady:{type:Boolean,default:!1}},data:function(){return{lang:window.$lang}},created:function(){},methods:{buttonClick:function(e){this.$emit("click",e)}}}},187:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{item:Object,iconOnly:{type:Boolean,default:!1}},data:function(){return{lang:window.$lang}},created:function(){},methods:{iconClick:function(e){this.$emit("iconClick")}}}},188:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(449),o=n.n(a);t.default={components:{menuItem:o.a},props:{items:Array,cordovaReady:{type:Boolean,default:!1},miniVariant:{type:Boolean,default:!0}},data:function(){return{}},created:function(){},methods:{menuClick:function(e){this.$emit("click",e)}}}},189:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{},data:function(){return{contact:{}}},created:function(){},methods:{}}},190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{formFields:{type:Array},title:String},data:function(){return{lang:window.$lang}},created:function(){},methods:{}}},191:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{},data:function(){return{lang:window.$lang}},created:function(){this.lang.langs.en.title="Vuetify Template for Cordova Projects",this.lang.langs.es.title="Plantilla Vuetify para Proyectos Cordova"},methods:{}}},192:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{},data:function(){return{languages:[{code:"es",name:"Español"},{code:"en",name:"English"}],lang:window.$lang,store:this.$store}},created:function(){},methods:{changeLang:function(e){this.lang.change(e),this.store.commit("update",["lang",e])},doSwitch:function(e){var t=this.store.state.menu[e];this.store.commit("update",["menu",e,t])}}}},193:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{props:{}}},created:function(){var e={transform:"transform WebkitTransform MozTransform OTransform msTransform".split(" "),transition:"transition WebkitTransition MozTransition OTransition msTransition".split(" ")};for(var t in e){var n=e[t];this.props[t]=[];for(var a=0;a<n.length;a++)void 0!==document.createElement("div").style[n[a]]&&this.props[t].push(n[a])}this.browser={userAgent:navigator.userAgent,language:navigator.language,onLine:navigator.onLine,maxTouchPoints:navigator.maxTouchPoints}},methods:{}}},426:function(e,t){},427:function(e,t){},428:function(e,t){},429:function(e,t){},430:function(e,t){},431:function(e,t){},432:function(e,t){},433:function(e,t){},434:function(e,t){},435:function(e,t){},436:function(e,t){},437:function(e,t){},438:function(e,t){},443:function(e,t,n){e.exports=n.p+"img/icon.2320d21.png"},447:function(e,t,n){function a(e){n(434)}var o=n(29)(n(185),n(460),a,null,null);e.exports=o.exports},448:function(e,t,n){function a(e){n(438)}var o=n(29)(n(186),n(464),a,"data-v-8c1f9b1c",null);e.exports=o.exports},449:function(e,t,n){function a(e){n(431)}var o=n(29)(n(187),n(457),a,null,null);e.exports=o.exports},450:function(e,t,n){function a(e){n(430)}var o=n(29)(n(188),n(456),a,"data-v-14a253c2",null);e.exports=o.exports},451:function(e,t,n){function a(e){n(432)}var o=n(29)(n(189),n(458),a,null,null);e.exports=o.exports},452:function(e,t,n){function a(e){n(437)}var o=n(29)(n(190),n(463),a,null,null);e.exports=o.exports},453:function(e,t,n){function a(e){n(433)}var o=n(29)(n(191),n(459),a,"data-v-42bfdb2b",null);e.exports=o.exports},454:function(e,t,n){function a(e){n(436)}var o=n(29)(n(192),n(462),a,"data-v-6dea7afc",null);e.exports=o.exports},455:function(e,t,n){function a(e){n(435)}var o=n(29)(n(193),n(461),a,"data-v-67bbf27f",null);e.exports=o.exports},456:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-list",e._l(e.items,function(t,a){return n("v-list-tile",{directives:[{name:"show",rawName:"v-show",value:!t.cordova||e.cordovaReady,expression:"!item.cordova || cordovaReady"}],key:a,class:t.classes,on:{click:function(n){e.menuClick(t)}}},[n("menu-item",{attrs:{item:t,"icon-only":e.miniVariant}})],1)}),1)},staticRenderFns:[]}},457:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{row:""}},[n("div",{staticClass:"menu-icon",attrs:{title:e.lang.expr(e.item.title)},on:{click:function(t){e.iconClick(e.item)}}},[n("v-icon",[e._v(e._s(e.item.icon))])],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.iconOnly,expression:"!iconOnly"}],staticClass:"menu-label"},[e._v(e._s(e.lang.expr(e.item.title)))])])},staticRenderFns:[]}},458:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[n("v-flex",{attrs:{xs10:""}},[n("h1",[e._v("Contact form")])]),e._v(" "),n("v-flex",{attrs:{xs2:"","align-right":""}},[n("router-link",{attrs:{to:{name:"Home",params:{}}}},[e._v("Home")])],1),e._v(" "),n("v-flex",{attrs:{xs12:"","px-1":""}},[n("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|max:20",expression:"'required|max:20'"}],attrs:{label:"Name",placeholder:"Enter your name","error-messages":e.errors.collect("name"),"data-vv-name":"name",required:""},model:{value:e.contact.name,callback:function(t){e.$set(e.contact,"name",t)},expression:"contact.name"}})],1),e._v(" "),n("v-flex",{attrs:{xs12:"",sm6:!0,"px-1":""}},[n("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{label:"E-mail",placeholder:"Enter your email","error-messages":e.errors.collect("email"),"data-vv-name":"email",required:""},model:{value:e.contact.email,callback:function(t){e.$set(e.contact,"email",t)},expression:"contact.email"}})],1),e._v(" "),n("v-flex",{attrs:{xs12:"",sm6:!0,"px-1":""}},[n("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0,regex:/[0-9]+/},expression:"{ required: true, regex: /[0-9]+/ }"}],attrs:{label:"Phone",placeholder:"+1 111 111 1111","error-messages":e.errors.collect("phone"),"data-vv-name":"phone",required:""},model:{value:e.contact.phone,callback:function(t){e.$set(e.contact,"phone",t)},expression:"contact.phone"}})],1),e._v(" "),n("v-flex",{attrs:{xs12:"","align-center":"","px-1":""}},[e._v("\n      "+e._s(e.contact)+"\n      ")])],1)],1)},staticRenderFns:[]}},459:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[a("v-flex",{attrs:{xs12:"",sm6:""}},[a("img",{staticClass:"mb-5",attrs:{src:n(443),alt:"Vuetify1"}})]),e._v(" "),a("v-flex",{attrs:{xs12:"",sm6:"","my-3":""}},[a("h3",[e._v(e._s(e.lang.current.title))]),e._v(" "),a("br"),e._v(" "),a("router-link",{attrs:{to:{name:"Form",params:{}}}},[a("v-icon",[e._v("fab fa-wpforms")]),e._v(" "+e._s(e.lang.current.form))],1),e._v(" "),a("br"),e._v(" "),a("a",{attrs:{href:"https://github.com/fraigo/vuetify-cordova"}},[a("v-icon",[e._v("fab fa-github")]),e._v(" "+e._s(e.lang.current.github_project))],1)],1)],1)],1)},staticRenderFns:[]}},460:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{dark:e.config.menu.darkMode}},[n("v-navigation-drawer",{attrs:{fixed:"","mini-variant":e.config.menu.miniVariant,app:""},model:{value:e.config.menu.opened,callback:function(t){e.$set(e.config.menu,"opened",t)},expression:"config.menu.opened"}},[n("menu-list",{attrs:{items:e.config.menu.items,"cordova-ready":e.isCordovaReady,"mini-variant":e.config.menu.miniVariant},on:{click:e.menuClick}})],1),e._v(" "),e.config.menu.toolbar?n("v-toolbar",{attrs:{app:""}},[e.config.menu.items?n("v-btn",{attrs:{icon:"",title:e.lang.current.menu},on:{click:function(t){e.config.menu.opened=!e.config.menu.opened}}},[n("v-icon",[e._v("fas fa-bars")])],1):e._e(),e._v(" "),n("v-toolbar-title",{domProps:{textContent:e._s(e.config.app.title)}}),e._v(" "),n("v-spacer"),e._v(" "),n("button-list",{attrs:{items:e.config.menu.buttons,"cordova-ready":e.isCordovaReady},on:{click:e.menuClick}})],1):e._e(),e._v(" "),n("v-content",[n("transition",{attrs:{name:"animated","enter-active-class":"animated fadeIn"}},[n("router-view")],1)],1)],1)},staticRenderFns:[]}},461:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[n("v-flex",{attrs:{xs12:""}},[n("h1",[e._v("WebView Properties")])]),e._v(" "),e._l(e.browser,function(t,a){return n("v-flex",{key:a,attrs:{xs12:""}},[n("h2",[e._v(e._s(a))]),e._v(" "),n("h4",[e._v(e._s(t))])])}),e._v(" "),n("v-flex",{attrs:{xs12:""}},[n("h1",[e._v("CSS Compatibility")])]),e._v(" "),e._l(e.props,function(t,a){return n("v-flex",{key:a,attrs:{xs12:""}},[n("h2",[e._v(e._s(a))]),e._v(" "),n("h4",[e._v(e._s(t))])])}),e._v(" "),n("v-flex",{attrs:{xs12:"","my-3":""}},[n("router-link",{attrs:{to:{name:"Home",params:{}}}},[e._v("Home")])],1)],2)],1)},staticRenderFns:[]}},462:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("h2",[e._v(e._s(e.lang.current.options))])]),e._v(" "),n("v-flex",{attrs:{xs12:"",sm6:"","my-3":""}},[n("v-select",{attrs:{items:e.languages,label:e.lang.expr("language"),"item-value":"code"},on:{change:function(t){e.changeLang(t)}},scopedSlots:e._u([{key:"selection",fn:function(t){return[e._v("\n              "+e._s(t.item.name)+"\n            ")]}},{key:"item",fn:function(t){return[e._v("\n              "+e._s(t.item.name)+"\n            ")]}}]),model:{value:e.lang.selected,callback:function(t){e.$set(e.lang,"selected",t)},expression:"lang.selected"}})],1),e._v(" "),n("v-flex",{attrs:{xs12:""}},[n("h2",[e._v(e._s(e.lang.current.menu))])]),e._v(" "),n("v-flex",{attrs:{xs12:"",sm6:"","my-3":""}},[n("v-switch",{attrs:{label:e.lang.expr("Mini_menu")},on:{change:function(t){e.doSwitch("miniVariant",t)}},model:{value:e.store.state.menu.miniVariant,callback:function(t){e.$set(e.store.state.menu,"miniVariant",t)},expression:"store.state.menu.miniVariant"}})],1),e._v(" "),n("v-flex",{attrs:{xs12:"",sm6:"","my-3":""}},[n("v-switch",{attrs:{label:e.lang.expr("Dark_mode")},on:{change:function(t){e.doSwitch("darkMode",t)}},model:{value:e.store.state.menu.darkMode,callback:function(t){e.$set(e.store.state.menu,"darkMode",t)},expression:"store.state.menu.darkMode"}})],1)],1)],1)},staticRenderFns:[]}},463:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[n("v-flex",{attrs:{xs10:""}},[n("h1",[e._v(e._s(e.lang.expr(e.title)))])]),e._v(" "),n("v-flex",{attrs:{xs2:"","align-right":""}},[n("router-link",{attrs:{to:{name:"Home",params:{}}}},[e._v(e._s(e.lang.current.home))])],1),e._v(" "),e._l(e.formFields,function(t,a){return n("v-flex",{key:a,attrs:{xs12:"",sm6:50==t.width,sm4:33==t.width,sm8:66==t.width,"px-1":""}},[n(t.multiLine?"v-textarea":"v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:t.validation,expression:"field.validation"}],tag:"div",attrs:{label:e.lang.expr(t.label),placeholder:e.lang.expr(t.placeholder),"error-messages":e.errors.collect(t.name),"data-vv-name":t.name,required:t.required,mask:t.mask,readonly:t.readonly,type:t.type?t.type:"text"},model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"field.value"}})],1)})],2)],1)},staticRenderFns:[]}},464:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",e._l(e.items,function(t,a){return n("v-btn",{directives:[{name:"show",rawName:"v-show",value:!t.cordova||e.cordovaReady,expression:"!item.cordova || cordovaReady"}],key:a,class:t.classes,attrs:{icon:"",title:e.lang.expr(t.title)},on:{click:function(n){e.buttonClick(t)}}},[n("v-icon",[e._v(e._s(t.icon))])],1)}),1)},staticRenderFns:[]}},471:function(e,t,n){n(173),e.exports=n(172)},83:function(e,t,n){"use strict";var a=n(61),o=n(469),i=n(468),r=n(184);a.default.use(o.a);var s=new i.a({storage:window.localStorage});t.a=new o.a.Store({state:r.a,mutations:{update:function(e,t){var n=t[0],a=t[1];if(t.length>=3){var o=t[2];e[n][a]=o}else e[n]=a}},plugins:[s.plugin]})}},[471]);