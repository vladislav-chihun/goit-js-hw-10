import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as o}from"./assets/vendor-77e16229.js";const e=document.querySelector(".form"),n=e.querySelector("input[name='delay']");e.querySelector("button");let u=e.querySelector('input[name="state"][value="fulfilled"]');e.querySelector('input[name="state"][value="rejected"]');e.addEventListener("submit",l);function l(i){i.preventDefault();const t=n.value;new Promise((r,s)=>{u.checked?setTimeout(()=>r(),t):setTimeout(()=>s(),t)}).then(()=>o.show({position:"topRight",message:`✅ Fulfilled promise in ${t}ms`,backgroundColor:"green"})).catch(()=>o.show({position:"topRight",message:`❌ Rejected promise in ${t}ms`,backgroundColor:"red"}))}
//# sourceMappingURL=commonHelpers2.js.map
