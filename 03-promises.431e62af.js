function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=o.parcelRequire5f24;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},o.parcelRequire5f24=r);var i=r("7Y9D8");function l(e,o){return new Promise(((t,n)=>{const r=Math.random()>.3;setTimeout((()=>{r?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}document.querySelector(".form").addEventListener("submit",(function(o){o.preventDefault();const{delay:t,step:n,amount:r}=o.currentTarget.elements;let u=Number(t.value),s=Number(n.value),a=Number(r.value);for(let t=1;t<=a;t+=1)l(t,u).then((({position:o,delay:t})=>{e(i).Notify.success(`✅ Fulfilled promise ${o} in ${t}ms`),console.log(o,t)})).catch((({position:o,delay:t})=>{e(i).Notify.failure(`❌ Rejected promise ${o} in ${t}ms`),console.log(o,t)})),o.currentTarget.reset(),u+=s}));
//# sourceMappingURL=03-promises.431e62af.js.map