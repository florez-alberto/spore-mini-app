import{_ as n}from"./index-016d2977.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-ff7a9446.js"),["assets/PolygonDrawer-ff7a9446.js","assets/PolygonDrawerBase-9ae21485.js","assets/index-016d2977.js","assets/index-db494224.css"]);await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-abd40975.js"),["assets/TriangleDrawer-abd40975.js","assets/PolygonDrawerBase-9ae21485.js","assets/index-016d2977.js","assets/index-db494224.css"]);await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
