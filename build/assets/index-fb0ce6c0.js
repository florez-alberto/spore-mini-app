import{_ as e}from"./index-016d2977.js";class a{constructor(){this.factor=3,this.radius=200}load(r){r&&(r.factor!==void 0&&(this.factor=r.factor),r.radius!==void 0&&(this.radius=r.radius))}}async function s(t,r=!0){await t.addInteractor("externalSlow",async o=>{const{Slower:i}=await e(()=>import("./Slower-2a1b5e62.js"),["assets/Slower-2a1b5e62.js","assets/ExternalInteractorBase-029fb1b6.js","assets/index-016d2977.js","assets/index-db494224.css"]);return new i(o)},r)}export{a as Slow,s as loadExternalSlowInteraction};
