var GUI=(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([["gui"],{"./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/index.css":function(e,o,s){(o=e.exports=s("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,"html,\nbody,\n.index_app_2mqDO {\n    /* probably unecessary, transitional until layout is refactored */\n    width: 100%; \n    height: 100%;\n    margin: 0;\n\n    /* Setting min height/width makes the UI scroll below those sizes */\n    min-width: 1024px;\n    min-height: 640px; /* Min height to fit sprite/backdrop button */\n}\n\n/* @todo: move globally? Safe / side FX, for blocks particularly? */\n\n* { -webkit-box-sizing: border-box; box-sizing: border-box; }\n",""]),o.locals={app:"index_app_2mqDO"}},"./src/playground/index.css":function(e,o,s){var n=s("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/index.css"),t=("string"==typeof n&&(n=[[e.i,n,""]]),{hmr:!0});t.transform=void 0,t.insertInto=void 0,s("./node_modules/style-loader/lib/addStyles.js")(n,t);n.locals&&(e.exports=n.locals)},"./src/playground/index.jsx":function(e,o,s){"use strict";s.r(o);s("./node_modules/es6-object-assign/auto.js"),s("./node_modules/core-js/fn/array/includes.js"),s("./node_modules/core-js/fn/promise/finally.js"),s("./node_modules/intl/index.js");var o=s("./node_modules/react/index.js"),o=s.n(o),n=s("./node_modules/react-dom/index.js"),n=s.n(n),t=s("./src/lib/analytics.js"),d=s("./src/lib/app-state-hoc.jsx"),a=s("./src/components/browser-modal/browser-modal.jsx"),l=s("./src/lib/supported-browser.js"),r=s("./src/playground/index.css"),r=s.n(r),t=(t.default.send({hitType:"pageview",page:"/player",title:"Player"}),document.createElement("div"));t.className=r.a.app,document.body.appendChild(t),Object(l.default)()?s("./src/playground/render-gui.jsx").default(t):(a.default.setAppElement(t),r=Object(d.default)(a.default,!0),n.a.render(o.a.createElement(r,{onBack:function(){}}),t))},"./src/playground/render-gui.jsx":function(e,o,s){"use strict";s.r(o);var n=s("./node_modules/react/index.js"),d=s.n(n),n=s("./node_modules/react-dom/index.js"),a=s.n(n),l=s("./node_modules/redux/es/index.js"),r=s("./src/lib/app-state-hoc.jsx"),i=s("./src/containers/gui.jsx"),c=s("./src/lib/hash-parser-hoc.jsx"),t=s("./src/lib/log.js");function u(){window.location="https://ide.codeskool.cc"}function p(){Object(t.default)("User canceled telemetry modal")}function m(){Object(t.default)("User opted into telemetry")}function b(){Object(t.default)("User opted out of telemetry")}o.default=function(e){i.default.setAppElement(e);var o,s=Object(l.compose)(r.default,c.default)(i.default),n=window.location.href.match(/[?&]backpack_host=([^&]*)&?/),n=n?n[1]:null,t=window.location.href.match(/[?&]isScratchDesktop=([^&]+)/);if(t)try{o=JSON.parse(t[1])}catch(e){o=t[1]}a.a.render(o?d.a.createElement(s,{canEditTitle:!0,isScratchDesktop:!0,showTelemetryModal:!0,canSave:!1,onTelemetryModalCancel:p,onTelemetryModalOptIn:m,onTelemetryModalOptOut:b}):d.a.createElement(s,{canEditTitle:!0,backpackVisible:!0,showComingSoon:!0,backpackHost:n,canSave:!1,onClickLogo:u}),e)}},1:function(e,o){}},[["./src/playground/index.jsx","lib.min"]]]);