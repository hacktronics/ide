var GUI=(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([["compatibilitytesting"],{"./src/playground/compatibility-testing.jsx":function(t,e,n){"use strict";n.r(e);var e=n("./node_modules/react/index.js"),c=n.n(e),e=n("./node_modules/react-dom/index.js"),e=n.n(e),o=n("./src/containers/gui.jsx"),r=n("./src/lib/hash-parser-hoc.jsx"),n=n("./src/lib/app-state-hoc.jsx");function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(n){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e=f(n),e=(t=o?(t=f(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments),this);if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return l(e)}}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=Object(n.default)(Object(r.default)(o.default)),d="10015059",n=function(t){var e=r;if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t);var n,o=s(r);function r(t){if(this instanceof r)return(t=o.call(this,t)).updateProject=t.updateProject.bind(l(t)),t.state={projectId:window.location.hash.substring(1)||d},t;throw new TypeError("Cannot call a class as a function")}return e=r,(t=[{key:"componentDidMount",value:function(){window.addEventListener("hashchange",this.updateProject),window.location.hash.substring(1)||(window.location.hash=d)}},{key:"componentWillUnmount",value:function(){window.addEventListener("hashchange",this.updateProject)}},{key:"updateProject",value:function(){this.setState({projectId:window.location.hash.substring(1)})}},{key:"render",value:function(){return c.a.createElement("div",{style:{display:"flex"}},c.a.createElement(p,{isPlayerOnly:!0,isFullScreen:!1}),c.a.createElement("iframe",{allowFullScreen:!0,allowTransparency:!0,frameBorder:"0",height:"402",src:"https://scratch.mit.edu/projects/embed/".concat(this.state.projectId,"/?autostart=true"),width:"485"}))}}])&&a(e.prototype,t),n&&a(e,n),r}(c.a.Component),r=document.createElement("div");document.body.appendChild(r),e.a.render(c.a.createElement(n,null),r)}},[["./src/playground/compatibility-testing.jsx","lib.min"]]]);