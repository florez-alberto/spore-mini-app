import{Remove as i}from"./index-e1dfb72d.js";import{E as a}from"./ExternalInteractorBase-029fb1b6.js";import{F as m}from"./index-016d2977.js";const s="remove";class u extends a{constructor(t){super(t),this.handleClickMode=r=>{const e=this.container,o=e.actualOptions;if(!o.interactivity.modes.remove||r!==s)return;const n=m(o.interactivity.modes.remove.quantity);e.particles.removeQuantity(n)}}clear(){}init(){}interact(){}isEnabled(){return!0}loadModeOptions(t,...r){t.remove||(t.remove=new i);for(const e of r)t.remove.load(e==null?void 0:e.remove)}reset(){}}export{u as Remover};
