const staticCache="static-23110912",libsCache="libs-23110912",expectedCaches=["static-23110912","libs-23110912"],libs=["/","/index.html","/lib.min.js","/chunks/gui.js","/manifest.json"],assets=[];self.addEventListener("install",e=>{e.waitUntil(Promise.all([caches.open(staticCache).then(e=>{e.addAll(assets)}),caches.open(libsCache).then(e=>{e.addAll(libs)})]))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(e=>Promise.all(e.map(e=>{if(!expectedCaches.includes(e))return caches.delete(e)}))).then(()=>self.clients.claim()))}),self.addEventListener("fetch",s=>{s.respondWith(caches.match(s.request).then(e=>e||fetch(s.request).then(t=>-1<s.request.url.indexOf("/static/")?caches.open(staticCache).then(e=>(e.put(s.request,t.clone()),t)):t)))});