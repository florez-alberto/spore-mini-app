import{_ as o}from"./index-016d2977.js";async function i(t,a=!0){await t.addParticleUpdater("wobble",async e=>{const{WobbleUpdater:r}=await o(()=>import("./WobbleUpdater-1d323b82.js"),["assets/WobbleUpdater-1d323b82.js","assets/index-016d2977.js","assets/index-db494224.css"]);return new r(e)},a)}export{i as loadWobbleUpdater};