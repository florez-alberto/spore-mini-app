import{Grab as v}from"./index-9643ff3b.js";import{g as y}from"./CanvasUtils-fea7ab4f.js";import{h as k,p as L,J as h,ad as O,ae as C,a as w}from"./index-016d2977.js";import{E as D}from"./ExternalInteractorBase-029fb1b6.js";import"./OptionsColor-d40a8221.js";const E=0;function M(r,t,n,i,o,e){y(r,n,i),r.strokeStyle=k(o,e),r.lineWidth=t,r.stroke()}function G(r,t,n,i,o){r.canvas.draw(e=>{const s=t.getPosition();M(e,t.retina.linksWidth??E,s,o,n,i)})}const P="grab",q=0,H=0;class A extends D{constructor(t){super(t)}clear(){}init(){const t=this.container,n=t.actualOptions.interactivity.modes.grab;n&&(t.retina.grabModeDistance=n.distance*t.retina.pixelRatio)}interact(){var c;const t=this.container,n=t.actualOptions,i=n.interactivity;if(!i.modes.grab||!i.events.onHover.enable||t.interactivity.status!==L)return;const o=t.interactivity.mouse.position;if(!o)return;const e=t.retina.grabModeDistance;if(!e||e<q)return;const s=t.particles.quadTree.queryCircle(o,e,a=>this.isEnabled(a));for(const a of s){const f=a.getPosition(),l=h(f,o);if(l>e)continue;const b=i.modes.grab.links,d=b.opacity,g=d-l*d/e;if(g<=H)continue;const u=b.color??((c=a.options.links)==null?void 0:c.color);if(!t.particles.grabLineColor&&u){const m=i.modes.grab.links;t.particles.grabLineColor=O(u,m.blink,m.consent)}const p=C(a,void 0,t.particles.grabLineColor);p&&G(t,a,p,g,o)}}isEnabled(t){const n=this.container,i=n.interactivity.mouse,o=((t==null?void 0:t.interactivity)??n.actualOptions.interactivity).events;return o.onHover.enable&&!!i.position&&w(P,o.onHover.mode)}loadModeOptions(t,...n){t.grab||(t.grab=new v);for(const i of n)t.grab.load(i==null?void 0:i.grab)}reset(){}}export{A as Grabber};
