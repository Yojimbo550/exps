if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const c=e=>r(e,o),l={module:{uri:o},exports:t,require:c};s[o]=Promise.all(i.map((e=>l[e]||c(e)))).then((e=>(n(...e),t)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"exps"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/exps/css/app.ec70df6b.css",revision:null},{url:"/exps/index.html",revision:"13666b7c329eec119daca00f050f3da4"},{url:"/exps/js/app.bf98dda0.js",revision:null},{url:"/exps/js/chunk-vendors.e59b1f21.js",revision:null},{url:"/exps/manifest.json",revision:"dee61eb6a075f1b2bb7d4836e1cbd30e"},{url:"/exps/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
