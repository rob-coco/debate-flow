function D(){}const V=t=>t;function L(t,n){for(const e in n)t[e]=n[e];return t}function M(t){return t()}function X(){return Object.create(null)}function O(t){t.forEach(M)}function Y(t){return typeof t=="function"}function Z(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function $(t){return Object.keys(t).length===0}function P(t,...n){if(t==null){for(const i of n)i(void 0);return D}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function tt(t,n,e){t.$$.on_destroy.push(P(n,e))}function nt(t,n,e,i){if(t){const c=k(t,n,e,i);return t[0](c)}}function k(t,n,e,i){return t[1]&&i?L(e.ctx.slice(),t[1](i(n))):e.ctx}function et(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const u=[],r=Math.max(n.dirty.length,c.length);for(let s=0;s<r;s+=1)u[s]=n.dirty[s]|c[s];return u}return n.dirty|c}return n.dirty}function it(t,n,e,i,c,u){if(c){const r=k(n,e,i,u);t.p(r,c)}}function ct(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function rt(t){return t??""}function lt(t,n,e){return t.set(e),n}let p=!1;function st(){p=!0}function ut(){p=!1}function B(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function T(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let o=0;o<n.length;o++){const a=n[o];a.claim_order!==void 0&&l.push(a)}n=l}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let l=0;l<n.length;l++){const o=n[l].claim_order,a=(c>0&&n[e[c]].claim_order<=o?c+1:B(1,c,S=>n[e[S]].claim_order,o))-1;i[l]=e[a]+1;const w=a+1;e[w]=l,c=Math.max(w,c)}const u=[],r=[];let s=n.length-1;for(let l=e[c]+1;l!=0;l=i[l-1]){for(u.push(n[l-1]);s>=l;s--)r.push(n[s]);s--}for(;s>=0;s--)r.push(n[s]);u.reverse(),r.sort((l,o)=>l.claim_order-o.claim_order);for(let l=0,o=0;l<r.length;l++){for(;o<u.length&&r[l].claim_order>=u[o].claim_order;)o++;const a=o<u.length?u[o]:null;t.insertBefore(r[l],a)}}function q(t,n){t.appendChild(n)}function H(t){if(!t)return document;const n=t.getRootNode?t.getRootNode():t.ownerDocument;return n&&n.host?n:t.ownerDocument}function ot(t){const n=N("style");return n.textContent="/* empty */",R(H(t),n),n.sheet}function R(t,n){return q(t.head||t,n),n.sheet}function z(t,n){if(p){for(T(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function at(t,n,e){p&&!e?z(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function ft(t){t.parentNode&&t.parentNode.removeChild(t)}function _t(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function N(t){return document.createElement(t)}function F(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function v(t){return document.createTextNode(t)}function dt(){return v(" ")}function ht(){return v("")}function mt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function pt(t){return function(n){n.target===this&&t.call(this,n)}}function yt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function bt(t){return t.dataset.svelteH}function gt(t){let n;return{p(...e){n=e,n.forEach(i=>t.push(i))},r(){n.forEach(e=>t.splice(t.indexOf(e),1))}}}function xt(t){return t===""?null:+t}function vt(t){return Array.from(t.childNodes)}function I(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function C(t,n,e,i,c=!1){I(t);const u=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const s=t[r];if(n(s)){const l=e(s);return l===void 0?t.splice(r,1):t[r]=l,c||(t.claim_info.last_index=r),s}}for(let r=t.claim_info.last_index-1;r>=0;r--){const s=t[r];if(n(s)){const l=e(s);return l===void 0?t.splice(r,1):t[r]=l,c?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,s}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function A(t,n,e,i){return C(t,c=>c.nodeName===n,c=>{const u=[];for(let r=0;r<c.attributes.length;r++){const s=c.attributes[r];e[s.name]||u.push(s.name)}u.forEach(r=>c.removeAttribute(r))},()=>i(n))}function wt(t,n,e){return A(t,n,e,N)}function Et(t,n,e){return A(t,n,e,F)}function W(t,n){return C(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>v(n),!0)}function kt(t){return W(t," ")}function Nt(t,n){n=""+n,t.data!==n&&(t.data=n)}function Ct(t,n){t.value=n??""}function At(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function jt(t,n,e){t.classList.toggle(n,!!e)}function G(t,n,{bubbles:e=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:i})}function St(t,n){return new t(n)}let m;function y(t){m=t}function d(){if(!m)throw new Error("Function called outside component initialization");return m}function Dt(t){d().$$.on_mount.push(t)}function Lt(t){d().$$.after_update.push(t)}function Mt(t){d().$$.on_destroy.push(t)}function Ot(){const t=d();return(n,e,{cancelable:i=!1}={})=>{const c=t.$$.callbacks[n];if(c){const u=G(n,e,{cancelable:i});return c.slice().forEach(r=>{r.call(t,u)}),!u.defaultPrevented}return!0}}function Pt(t,n){return d().$$.context.set(t,n),n}function Bt(t){return d().$$.context.get(t)}function Tt(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const h=[],E=[];let _=[];const g=[],j=Promise.resolve();let x=!1;function J(){x||(x=!0,j.then(Q))}function qt(){return J(),j}function K(t){_.push(t)}function Ht(t){g.push(t)}const b=new Set;let f=0;function Q(){if(f!==0)return;const t=m;do{try{for(;f<h.length;){const n=h[f];f++,y(n),U(n.$$)}}catch(n){throw h.length=0,f=0,n}for(y(null),h.length=0,f=0;E.length;)E.pop()();for(let n=0;n<_.length;n+=1){const e=_[n];b.has(e)||(b.add(e),e())}_.length=0}while(h.length);for(;g.length;)g.pop()();x=!1,b.clear(),y(t)}function U(t){if(t.fragment!==null){t.update(),O(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(K)}}function Rt(t){const n=[],e=[];_.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),_=n}export{X as $,jt as A,Ht as B,mt as C,Tt as D,bt as E,_t as F,O as G,V as H,L as I,Y as J,Ct as K,Mt as L,rt as M,K as N,Ot as O,Bt as P,lt as Q,Pt as R,gt as S,xt as T,P as U,pt as V,F as W,Et as X,H as Y,ot as Z,G as _,dt as a,Q as a0,$ as a1,Rt as a2,m as a3,y as a4,M as a5,h as a6,J as a7,st as a8,ut as a9,Lt as b,kt as c,ft as d,ht as e,N as f,wt as g,vt as h,at as i,yt as j,At as k,v as l,W as m,Nt as n,Dt as o,E as p,St as q,nt as r,Z as s,qt as t,it as u,ct as v,et as w,z as x,D as y,tt as z};