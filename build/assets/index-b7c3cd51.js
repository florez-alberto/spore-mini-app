import{_ as o}from"./index-016d2977.js";class i{constructor(){this.distance=200}load(n){n&&n.distance!==void 0&&(this.distance=n.distance)}}async function a(t,n=!0){await t.addInteractor("externalBounce",async e=>{const{Bouncer:r}=await o(()=>import("./Bouncer-35663586.js"),["assets/Bouncer-35663586.js","assets/index-016d2977.js","assets/index-db494224.css","assets/Ranges-09d92c84.js","assets/ExternalInteractorBase-029fb1b6.js"]);return new r(e)},n)}export{i as Bounce,a as loadExternalBounceInteraction};