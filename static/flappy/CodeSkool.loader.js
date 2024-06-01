function createUnityInstance(t,r,d){function i(e,t){if(!i.aborted&&r.showBanner)return"error"==t&&(i.aborted=!0),r.showBanner(e,t);switch(t){case"error":console.error(e);break;case"warning":console.warn(e);break;default:console.log(e)}}function n(e){var t=e.reason||e.error,r=t?t.toString():e.message||e.reason||"",n=t&&t.stack?t.stack.toString():"";(r+="\n"+(n=n.startsWith(r)?n.substring(r.length):n).trim())&&c.stackTraceRegExp&&c.stackTraceRegExp.test(r)&&a(r,e.filename||t&&(t.fileName||t.sourceURL)||"",e.lineno||t&&(t.lineNumber||t.line)||0)}function o(e){e.preventDefault()}function a(e,t,r){-1==e.indexOf("fullscreen error")&&(c.startupErrorHandler?c.startupErrorHandler(e,t,r):c.errorHandler&&c.errorHandler(e,t,r)||(console.log("Invoking error handler due to\n"+e),"function"==typeof dump&&dump("Invoking error handler due to\n"+e),a.didShowErrorMessage)||(-1!=(e="An error occurred running the Unity content on this page. See your browser JavaScript console for more info. The error was:\n"+e).indexOf("DISABLE_EXCEPTION_CATCHING")?e="An exception has occurred, but exception handling has been disabled in this build. If you are the developer of this content, enable exceptions in your project WebGL player settings to be able to catch the exception or see the stack trace.":-1!=e.indexOf("Cannot enlarge memory arrays")?e="Out of memory. If you are the developer of this content, try allocating more memory to your WebGL build in the WebGL player settings.":-1==e.indexOf("Invalid array buffer length")&&-1==e.indexOf("Invalid typed array length")&&-1==e.indexOf("out of memory")&&-1==e.indexOf("could not allocate memory")||(e="The browser could not allocate enough memory for the WebGL content. If you are the developer of this content, try allocating less memory to your WebGL build in the WebGL player settings."),alert(e),a.didShowErrorMessage=!0))}function s(e,t){if("symbolsUrl"!=e){var r=c.downloadProgress[e],n=(r=r||(c.downloadProgress[e]={started:!1,finished:!1,lengthComputable:!1,total:0,loaded:0}),"object"!=typeof t||"progress"!=t.type&&"load"!=t.type||(r.started||(r.started=!0,r.lengthComputable=t.lengthComputable),r.total=t.total,r.loaded=t.loaded,"load"==t.type&&(r.finished=!0)),0),o=0,a=0,s=0,i=0;for(e in c.downloadProgress){if(!(r=c.downloadProgress[e]).started)return;a++,r.lengthComputable?(n+=r.loaded,o+=r.total,s++):r.finished||i++}d(.9*(a?(a-i-(o?s*(o-n)/o:0))/a:0))}}function l(){new Promise(function(a,e){var s=document.createElement("script");s.src=c.frameworkUrl,s.onload=function(){if("undefined"==typeof unityFramework||!unityFramework){var e,t=[["br","br"],["gz","gzip"]];for(e in t){var r,n=t[e];if(c.frameworkUrl.endsWith("."+n[0]))return r="Unable to parse "+c.frameworkUrl+"!","file:"==location.protocol?void i(r+" Loading pre-compressed (brotli or gzip) content via a file:// URL without a web server is not supported by this browser. Please use a local development web server to host compressed Unity content, or use the Unity Build and Run option.","error"):(r+=' This can happen if build compression was enabled but web server hosting the content was misconfigured to not serve the file with HTTP Response Header "Content-Encoding: '+n[1]+'" present. Check browser Console and Devtools Network tab to debug.',"br"==n[0]&&"http:"==location.protocol&&(n=-1!=["localhost","127.0.0.1"].indexOf(location.hostname)?"":"Migrate your server to use HTTPS.",r=/Firefox/.test(navigator.userAgent)?"Unable to parse "+c.frameworkUrl+'!<br>If using custom web server, verify that web server is sending .br files with HTTP Response Header "Content-Encoding: br". Brotli compression may not be supported in Firefox over HTTP connections. '+n+' See <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1670675">https://bugzilla.mozilla.org/show_bug.cgi?id=1670675</a> for more information.':"Unable to parse "+c.frameworkUrl+'!<br>If using custom web server, verify that web server is sending .br files with HTTP Response Header "Content-Encoding: br". Brotli compression may not be supported over HTTP connections. Migrate your server to use HTTPS.'),void i(r,"error"))}i("Unable to parse "+c.frameworkUrl+"! The file is corrupt, or compression was misconfigured? (check Content-Encoding HTTP Response Header on web server)","error")}var o=unityFramework;unityFramework=null,s.onload=null,a(o)},s.onerror=function(e){i("Unable to load file "+c.frameworkUrl+"! Check that the file exists on the remote server. (also check browser Console and Devtools Network tab to debug)","error")},document.body.appendChild(s),c.deinitializers.push(function(){document.body.removeChild(s)})}).then(function(e){e(c)});s(r="dataUrl"),e=c.cacheControl(c[r]),t=c.companyName&&c.productName?c.cachedFetch:c.fetchWithProgress,n=c[r],n=/file:\/\//.exec(n)?"same-origin":void 0;var r,e,t,n,o=t(c[r],{method:"GET",companyName:c.companyName,productName:c.productName,control:e,mode:n,onProgress:function(e){s(r,e)}}).then(function(e){return e.parsedBody}).catch(function(e){var t="Failed to download file "+c[r];"file:"==location.protocol?i(t+". Loading web pages via a file:// URL without a web server is not supported by this browser. Please use a local development web server to host Unity content, or use the Unity Build and Run option.","error"):console.error(t)});c.preRun.push(function(){c.addRunDependency("dataUrl"),o.then(function(e){var t=new DataView(e.buffer,e.byteOffset,e.byteLength),r=0,n="UnityWebData1.0\0";if(!String.fromCharCode.apply(null,e.subarray(r,r+n.length))==n)throw"unknown data format";var o=t.getUint32(r+=n.length,!0);for(r+=4;r<o;){var a=t.getUint32(r,!0),s=(r+=4,t.getUint32(r,!0)),i=(r+=4,t.getUint32(r,!0)),d=(r+=4,String.fromCharCode.apply(null,e.subarray(r,r+i)));r+=i;for(var l=0,u=d.indexOf("/",l)+1;0<u;l=u,u=d.indexOf("/",l)+1)c.FS_createPath(d.substring(0,l),d.substring(l,u-1),!0,!0);c.FS_createDataFile(d,null,e.subarray(a,a+s),!0,!0,!0)}c.removeRunDependency("dataUrl")})})}d=d||function(){};var e,c={canvas:t,webglContextAttributes:{preserveDrawingBuffer:!1},cacheControl:function(e){return e==c.dataUrl?"must-revalidate":"no-store"},streamingAssetsUrl:"StreamingAssets",downloadProgress:{},deinitializers:[],intervals:{},setInterval:function(e,t){e=window.setInterval(e,t);return this.intervals[e]=!0,e},clearInterval:function(e){delete this.intervals[e],window.clearInterval(e)},preRun:[],postRun:[],print:function(e){console.log(e)},printErr:function(e){console.error(e),"string"==typeof e&&-1!=e.indexOf("wasm streaming compile failed")&&(-1!=e.toLowerCase().indexOf("mime")?i('HTTP Response Header "Content-Type" configured incorrectly on the server for file '+c.codeUrl+' , should be "application/wasm". Startup time performance will suffer.',"warning"):i('WebAssembly streaming compilation failed! This can happen for example if "Content-Encoding" HTTP header is incorrectly enabled on the server for file '+c.codeUrl+", but the file is not pre-compressed on disk (or vice versa). Check the Network tab in browser Devtools to debug server header configuration.","warning"))},locateFile:function(e){return"build.wasm"==e?this.codeUrl:e},disabledCanvasEvents:["contextmenu","dragstart"]};for(e in r)c[e]=r[e];c.streamingAssetsUrl=new URL(c.streamingAssetsUrl,document.URL).href;var u,h,f,p,g,m,b,y,v=c.disabledCanvasEvents.slice(),w=(v.forEach(function(e){t.addEventListener(e,o)}),window.addEventListener("error",n),window.addEventListener("unhandledrejection",n),c.deinitializers.push(function(){for(var e in c.disableAccessToMediaDevices(),v.forEach(function(e){t.removeEventListener(e,o)}),window.removeEventListener("error",n),window.removeEventListener("unhandledrejection",n),c.intervals)window.clearInterval(e);c.intervals={}}),c.QuitCleanup=function(){for(var e=0;e<c.deinitializers.length;e++)c.deinitializers[e]();c.deinitializers=[],"function"==typeof c.onQuit&&c.onQuit()},""),x="",C=(document.addEventListener("webkitfullscreenchange",function(e){document.webkitCurrentFullScreenElement===t?t.style.width&&(w=t.style.width,x=t.style.height,t.style.width="100%",t.style.height="100%"):w&&(t.style.width=w,t.style.height=x,x=w="")}),{Module:c,SetFullscreen:function(){return c.SetFullscreen?c.SetFullscreen.apply(c,arguments):void c.print("Failed to set Fullscreen mode: Player not loaded yet.")},SendMessage:function(){return c.SendMessage?c.SendMessage.apply(c,arguments):void c.print("Failed to execute SendMessage: Player not loaded yet.")},Quit:function(){return new Promise(function(e,t){c.shouldQuit=!0,c.onQuit=e})}});return c.SystemInfo=function(){function e(e,t,r){return(e=RegExp(e,"i").exec(t))&&e[r]}for(var t,r,n,o,a=navigator.userAgent+" ",s=[["Firefox","Firefox"],["OPR","Opera"],["Edg","Edge"],["SamsungBrowser","Samsung Browser"],["Trident","Internet Explorer"],["MSIE","Internet Explorer"],["Chrome","Chrome"],["CriOS","Chrome on iOS Safari"],["FxiOS","Firefox on iOS Safari"],["Safari","Safari"]],i=0;i<s.length;++i)if(r=e(s[i][0]+"[/ ](.*?)[ \\)]",a,1)){t=s[i][1];break}"Safari"==t&&(r=e("Version/(.*?) ",a,1)),"Internet Explorer"==t&&(r=e("rv:(.*?)\\)? ",a,1)||r);for(var d=[["Windows (.*?)[;)]","Windows"],["Android ([0-9_.]+)","Android"],["iPhone OS ([0-9_.]+)","iPhoneOS"],["iPad.*? OS ([0-9_.]+)","iPadOS"],["FreeBSD( )","FreeBSD"],["OpenBSD( )","OpenBSD"],["Linux|X11()","Linux"],["Mac OS X ([0-9_.]+)","MacOS"],["bot|google|baidu|bing|msn|teoma|slurp|yandex","Search Bot"]],l=0;l<d.length;++l)if(u=e(d[l][0],a,1)){n=d[l][1],u=u.replace(/_/g,".");break}var u={"NT 5.0":"2000","NT 5.1":"XP","NT 5.2":"Server 2003","NT 6.0":"Vista","NT 6.1":"7","NT 6.2":"8","NT 6.3":"8.1","NT 10.0":"10"}[u]||u,c=((c=document.createElement("canvas"))&&(gl=c.getContext("webgl2"),glVersion=gl?2:0,gl||(gl=c&&c.getContext("webgl"))&&(glVersion=1),gl)&&(o=gl.getExtension("WEBGL_debug_renderer_info")&&gl.getParameter(37446)||gl.getParameter(7937)),"undefined"!=typeof SharedArrayBuffer),h="object"==typeof WebAssembly&&"function"==typeof WebAssembly.compile;return{width:screen.width,height:screen.height,userAgent:a.trim(),browser:t||"Unknown browser",browserVersion:r||"Unknown version",mobile:/Mobile|Android|iP(ad|hone)/.test(navigator.appVersion),os:n||"Unknown OS",osVersion:u||"Unknown OS Version",gpu:o||"Unknown GPU",language:navigator.userLanguage||navigator.language,hasWebGL:glVersion,hasCursorLock:!!document.body.requestPointerLock,hasFullscreen:!!document.body.requestFullscreen||!!document.body.webkitRequestFullscreen,hasThreads:c,hasWasm:h,hasWasmThreads:!1}}(),c.abortHandler=function(e){return a(e,"",0),!0},Error.stackTraceLimit=Math.max(Error.stackTraceLimit||0,50),c.fetchWithProgress=function(e,t){var l=function(){};return t&&t.onProgress&&(l=t.onProgress),fetch(e,t).then(function(r){var e=void 0!==r.body?r.body.getReader():void 0,n=void 0!==r.headers.get("Content-Length"),o=function(e,t){if(!t)return 0;var t=e.headers.get("Content-Encoding"),r=parseInt(e.headers.get("Content-Length"));switch(t){case"br":return Math.round(5*r);case"gzip":return Math.round(4*r);default:return r}}(r,n),a=new Uint8Array(o),s=[],i=0,d=0;return n||console.warn("[UnityCache] Response is served without Content-Length header. Please reconfigure server to include valid Content-Length for better download performance."),function t(){return void 0===e?r.arrayBuffer().then(function(e){return l({type:"progress",total:e.length,loaded:0,lengthComputable:n}),new Uint8Array(e)}):e.read().then(function(e){return(e.done?function(){if(i===o)return a;if(i<o)return a.slice(0,i);var e=new Uint8Array(i);e.set(a,0);for(var t=d,r=0;r<s.length;++r)e.set(s[r],t),t+=s[r].length;return e}:(i+e.value.length<=a.length?(a.set(e.value,i),d=i+e.value.length):s.push(e.value),i+=e.value.length,l({type:"progress",total:Math.max(o,i),loaded:i,lengthComputable:n}),t))()})}().then(function(e){return l({type:"load",total:e.length,loaded:e.length,lengthComputable:n}),r.parsedBody=e,r})})},c.UnityCache=(p={name:"UnityCache",version:3},g={name:"RequestStore",version:1},m={name:"WebAssembly",version:1},b=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB,P.UnityCacheDatabase=p,P.RequestStore=g,P.WebAssemblyStore=m,y=null,P.getInstance=function(){return y=y||new P},P.destroyInstance=function(){return y?y.close().then(function(){y=null}):Promise.resolve()},P.clearCache=function(){return P.destroyInstance().then(function(){return new Promise(function(e,t){var r=b.deleteDatabase(p.name);r.onsuccess=function(){e()},r.onerror=function(){t(new Error("Could not delete database."))},r.onblocked=function(){t(new Error("Database blocked."))}})})},P.prototype.execute=function(a,s,i){return this.isConnected.then(function(){return new Promise(function(t,r){try{var e,n,o;null===this.database?r(new Error("indexedDB access denied")):(e=-1!=["put","delete","clear"].indexOf(s)?"readwrite":"readonly",n=this.database.transaction([a],e).objectStore(a),"openKeyCursor"==s&&(n=n.index(i[0]),i=i.slice(1)),(o=n[s].apply(n,i)).onsuccess=function(e){t(e.target.result)},o.onerror=function(e){r(e)})}catch(e){r(e)}}.bind(this))}.bind(this))},P.prototype.loadRequest=function(e){return this.execute(g.name,"get",[e])},P.prototype.storeRequest=function(e){return this.execute(g.name,"put",[e])},P.prototype.close=function(){return this.isConnected.then(function(){this.database&&(this.database.close(),this.database=null)}.bind(this))},P),c.cachedFetch=(u=c.UnityCache,h=u.RequestStore,f=c.fetchWithProgress,E.prototype.arrayBuffer=function(){return Promise.resolve(this.parsedBody.buffer)},E.prototype.blob=function(){return this.arrayBuffer().then(function(e){return new Blob([e])})},E.prototype.json=function(){return this.text().then(function(e){return JSON.parse(e)})},E.prototype.text=function(){var e=new TextDecoder;return Promise.resolve(e.decode(this.parsedBody))},function(n,o){function a(e,t){return f(e,t).then(function(e){return!d.enabled||d.revalidated?e:304===e.status?(d.result.revalidated=d.result.accessed,d.revalidated=!0,i.storeRequest(d.result).then(function(){S("'"+d.result.url+"' successfully revalidated and served from the indexedDB cache")}).catch(function(e){S("'"+d.result.url+"' successfully revalidated but not stored in the indexedDB cache due to the error: "+e)}),new E(d.result.response)):(200==e.status?(d.result=k(e.url,d.company,d.product,d.accessed,e),d.revalidated=!0,i.storeRequest(d.result).then(function(){S("'"+d.result.url+"' successfully downloaded and stored in the indexedDB cache")}).catch(function(e){S("'"+d.result.url+"' successfully downloaded but not stored in the indexedDB cache due to the error: "+e)})):S("'"+d.result.url+"' request failed with status: "+e.status+" "+e.statusText),e)})}function s(e){o&&o.onProgress&&(o.onProgress({type:"progress",total:e.parsedBody.length,loaded:e.parsedBody.length,lengthComputable:!0}),o.onProgress({type:"load",total:e.parsedBody.length,loaded:e.parsedBody.length,lengthComputable:!0}))}var e,t,i=u.getInstance(),r=T("string"==typeof n?n:n.url),d={enabled:(e=r,!((t=o)&&t.method&&"GET"!==t.method||t&&-1==["must-revalidate","immutable"].indexOf(t.control)||!e.match("^https?://")))};return o&&(d.control=o.control,d.company=o.company,d.product=o.product),d.result=k(r,d.company,d.product,Date.now()),d.revalidated=!1,d.enabled?i.loadRequest(d.result.url).then(function(e){if(e&&e.version===h.version){d.result=e,d.result.accessed=Date.now();var t,r=new E(d.result.response);if("immutable"==d.control)return d.revalidated=!0,i.storeRequest(d.result),S("'"+d.result.url+"' served from the indexedDB cache without revalidation"),s(r),r;if(e=d.result.url,(!(t=window.location.href.match(/^[a-z]+:\/\/[^\/]+/))||e.lastIndexOf(t[0],0))&&(r.headers.get("Last-Modified")||r.headers.get("ETag")))return fetch(d.result.url,{method:"HEAD"}).then(function(t){return d.revalidated=["Last-Modified","ETag"].every(function(e){return!r.headers.get(e)||r.headers.get(e)==t.headers.get(e)}),d.revalidated?(d.result.revalidated=d.result.accessed,i.storeRequest(d.result),S("'"+d.result.url+"' successfully revalidated and served from the indexedDB cache"),s(r),r):a(n,o)});e=(o=o||{}).headers||{};o.headers=e,r.headers.get("Last-Modified")?(e["If-Modified-Since"]=r.headers.get("Last-Modified"),e["Cache-Control"]="no-cache"):r.headers.get("ETag")&&(e["If-None-Match"]=r.headers.get("ETag"),e["Cache-Control"]="no-cache")}return a(n,o)}).catch(function(e){return S("Failed to load '"+d.result.url+"' from indexedDB cache due to the error: "+e),f(n,o)}):f(n,o)}),new Promise(function(e,t){c.SystemInfo.hasWebGL?c.SystemInfo.hasWasm?(1==c.SystemInfo.hasWebGL&&c.print('Warning: Your browser does not support "WebGL 2" Graphics API, switching to "WebGL 1"'),c.startupErrorHandler=t,d(0),c.postRun.push(function(){d(1),delete c.startupErrorHandler,e(C)}),l()):t("Your browser does not support WebAssembly."):t("Your browser does not support WebGL.")});function S(e){console.log("[UnityCache] "+e)}function T(e){return T.link=T.link||document.createElement("a"),T.link.href=e,T.link.href}function E(t){t=t||{},this.headers=new Headers,Object.keys(t.headers).forEach(function(e){this.headers.set(e,t.headers[e])}.bind(this)),this.redirected=t.redirected,this.status=t.status,this.statusText=t.statusText,this.type=t.type,this.url=t.url,this.parsedBody=t.parsedBody,Object.defineProperty(this,"ok",{get:function(){return 200<=this.status&&this.status<=299}.bind(this)})}function k(e,t,r,n,o){var a={url:e,version:h.version,company:t,product:r,updated:n,revalidated:n,accessed:n,response:{headers:{}}};return o&&(o.headers.forEach(function(e,t){a.response.headers[t]=e}),["redirected","status","statusText","type","url"].forEach(function(e){a.response[e]=o[e]}),a.response.parsedBody=o.parsedBody),a}function P(){var o=this;o.isConnected=new Promise(function(t,r){function n(){o.openDBTimeout&&(clearTimeout(o.openDBTimeout),o.openDBTimeout=null)}try{o.openDBTimeout=setTimeout(function(){void 0===o.database&&r(new Error("Could not connect to database: Timeout."))},2e3);var e=b.open(p.name,p.version);e.onupgradeneeded=function(e){var t;(e=(e=e).target.result).objectStoreNames.contains(m.name)||e.createObjectStore(m.name),e.objectStoreNames.contains(g.name)||(t=e.createObjectStore(g.name,{keyPath:"url"}),["version","company","product","updated","revalidated","accessed"].forEach(function(e){t.createIndex(e,e)}))},e.onsuccess=function(e){n(),o.database=e.target.result,t()},e.onerror=function(e){n(),o.database=null,r(new Error("Could not connect to database."))}}catch(e){n(),o.database=null,r(new Error("Could not connect to database."))}})}}