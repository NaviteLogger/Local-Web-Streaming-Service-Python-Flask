(()=>{var e={};e.id=820,e.ids=[820,888,660],e.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},8826:(e,t,r)=>{"use strict";r.r(t),r.d(t,{config:()=>f,default:()=>u,getServerSideProps:()=>p,getStaticPaths:()=>c,getStaticProps:()=>d,reportWebVitals:()=>h,routeModule:()=>_,unstable_getServerProps:()=>b,unstable_getServerSideProps:()=>x,unstable_getStaticParams:()=>y,unstable_getStaticPaths:()=>m,unstable_getStaticProps:()=>g});var n=r(7093),o=r(5244),s=r(1323),i=r(5172),a=r(5472),l=r(1542);let u=(0,s.l)(l,"default"),d=(0,s.l)(l,"getStaticProps"),c=(0,s.l)(l,"getStaticPaths"),p=(0,s.l)(l,"getServerSideProps"),f=(0,s.l)(l,"config"),h=(0,s.l)(l,"reportWebVitals"),g=(0,s.l)(l,"unstable_getStaticProps"),m=(0,s.l)(l,"unstable_getStaticPaths"),y=(0,s.l)(l,"unstable_getStaticParams"),b=(0,s.l)(l,"unstable_getServerProps"),x=(0,s.l)(l,"unstable_getServerSideProps"),_=new n.PagesRouteModule({definition:{kind:o.x.PAGES,page:"/_error",pathname:"/_error",bundlePath:"",filename:""},components:{App:a.default,Document:i.default},userland:l})},1542:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d}});let n=r(167),o=r(997),s=n._(r(6689)),i=n._(r(4412)),a={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function l(e){let{res:t,err:r}=e;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}let u={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}};class d extends s.default.Component{render(){let{statusCode:e,withDarkMode:t=!0}=this.props,r=this.props.title||a[e]||"An unexpected error has occurred";return(0,o.jsxs)("div",{style:u.error,children:[(0,o.jsx)(i.default,{children:(0,o.jsx)("title",{children:e?e+": "+r:"Application error: a client-side exception has occurred"})}),(0,o.jsxs)("div",{style:u.desc,children:[(0,o.jsx)("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(t?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),e?(0,o.jsx)("h1",{className:"next-error-h1",style:u.h1,children:e}):null,(0,o.jsx)("div",{style:u.wrap,children:(0,o.jsxs)("h2",{style:u.h2,children:[this.props.title||e?r:(0,o.jsx)(o.Fragment,{children:"Application error: a client-side exception has occurred (see the browser console for more information)"}),"."]})})]})]})}}d.displayName="ErrorPage",d.getInitialProps=l,d.origGetInitialProps=l,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1326:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},4412:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{defaultHead:function(){return c},default:function(){return g}});let n=r(167),o=r(8760),s=r(997),i=o._(r(6689)),a=n._(r(6440)),l=r(8039),u=r(1988),d=r(1326);function c(e){void 0===e&&(e=!1);let t=[(0,s.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,s.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(6367);let f=["name","httpEquiv","charSet","itemProp"];function h(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(c(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return o=>{let s=!0,i=!1;if(o.key&&"number"!=typeof o.key&&o.key.indexOf("$")>0){i=!0;let t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?s=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?s=!1:t.add(o.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(o.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?s=!1:r.add(t);else{let e=o.props[t],r=n[t]||new Set;("name"!==t||!i)&&r.has(e)?s=!1:(r.add(e),n[t]=r)}}}}return s}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,i.default.cloneElement(e,t)}return i.default.cloneElement(e,{key:n})})}let g=function(e){let{children:t}=e,r=(0,i.useContext)(l.AmpStateContext),n=(0,i.useContext)(u.HeadManagerContext);return(0,s.jsx)(a.default,{reduceComponentsToState:h,headManager:n,inAmpMode:(0,d.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6440:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});let n=r(6689),o=()=>{},s=()=>{};function i(e){var t;let{headManager:r,reduceComponentsToState:i}=e;function a(){if(r&&r.mountedInstances){let t=n.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(i(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),a(),o(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),o(()=>(r&&(r._pendingUpdate=a),()=>{r&&(r._pendingUpdate=a)})),s(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},6367:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},5472:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(997);function o({Component:e,pageProps:t}){return n.jsx(e,{...t})}r(1851),r(6689)},5172:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var n=r(997),o=r(6859),s=r.n(o);class i extends s(){render(){return(0,n.jsxs)(o.Html,{lang:"en",children:[(0,n.jsxs)(o.Head,{children:[n.jsx("meta",{content:"width=device-width, initial-scale=1.0"}),n.jsx("meta",{charSet:"utf-8"}),n.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),n.jsx("style",{dangerouslySetInnerHTML:{__html:'html {  line-height: 1.15;}body {  margin: 0;}* {  box-sizing: border-box;  border-width: 0;  border-style: solid;}p,li,ul,pre,div,h1,h2,h3,h4,h5,h6,figure,blockquote,figcaption {  margin: 0;  padding: 0;}button {  background-color: transparent;}button,input,optgroup,select,textarea {  font-family: inherit;  font-size: 100%;  line-height: 1.15;  margin: 0;}button,select {  text-transform: none;}button,[type="button"],[type="reset"],[type="submit"] {  -webkit-appearance: button;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner {  border-style: none;  padding: 0;}button:-moz-focus,[type="button"]:-moz-focus,[type="reset"]:-moz-focus,[type="submit"]:-moz-focus {  outline: 1px dotted ButtonText;}a {  color: inherit;  text-decoration: inherit;}input {  padding: 2px 4px;}img {  display: block;}html { scroll-behavior: smooth  }'},"data-tag":"reset-style-sheet"}),n.jsx("style",{dangerouslySetInnerHTML:{__html:"\n  html {\n    font-family: Inter;\n    font-size: 16px;\n  }\n\n  body {\n    font-weight: 400;\n    font-style:normal;\n    text-decoration: none;\n    text-transform: none;\n    letter-spacing: normal;\n    line-height: 1.15;\n    color: var(--dl-color-gray-black);\n    background-color: var(--dl-color-gray-white);\n    \n  }\n\n  \n\n  "},"data-tag":"default-style-sheet"}),n.jsx("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap","data-tag":"font"}),n.jsx("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap","data-tag":"font"}),n.jsx("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap","data-tag":"font"}),n.jsx("link",{rel:"stylesheet",href:"https://unpkg.com/animate.css@4.1.1/animate.css"}),n.jsx("link",{rel:"stylesheet",href:"https://unpkg.com/@teleporthq/teleport-custom-scripts/dist/style.css"}),n.jsx("link",{rel:"stylesheet",href:"https://unpkg.com/@teleporthq/teleport-custom-scripts/dist/style.css"}),n.jsx("noscript",{dangerouslySetInnerHTML:{__html:"</noscript><style>\n@keyframes fade-in-left {\n  0% {\n    opacity: 0;\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n</style><noscript>"}})]}),(0,n.jsxs)("body",{children:[n.jsx(o.Main,{}),n.jsx(o.NextScript,{}),n.jsx("div",{dangerouslySetInnerHTML:{__html:"<script data-section-id='navbar' src='https://unpkg.com/@teleporthq/teleport-custom-scripts'></script>"}})]})]})}}let a=i},1851:()=>{},5244:(e,t)=>{"use strict";var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},8039:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.AmpContext},1988:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.HeadManagerContext},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},1017:e=>{"use strict";e.exports=require("path")},8760:(e,t)=>{"use strict";function r(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(r=function(e){return e?n:t})(e)}t._=t._interop_require_wildcard=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=r(t);if(n&&n.has(e))return n.get(e);var o={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=s?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(o,i,a):o[i]=e[i]}return o.default=e,n&&n.set(e,o),o}}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[859],()=>r(8826));module.exports=n})();