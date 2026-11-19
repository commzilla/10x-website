import{c as e,i as t}from"./stage-Dt7Lt6g6.js";var n={face:[`#152c37`,`#80d2f0`,`#e7e8ff`,`#7954b9`,`#10202e`,`#c4eeff`],rim:[`#d9f8ff`,`#5c6ec0`,`#faf6ff`,`#b175dd`,`#8fdbec`]};function r(e,t){let n=parseInt(e.replace(`#`,``).slice(0,6),16),r=t<0?0:255,i=Math.abs(t),a=e=>Math.round(e+(r-e)*i).toString(16).padStart(2,`0`);return`#${a(n>>16&255)}${a(n>>8&255)}${a(n&255)}`}function i(e,t){return e===`iridescent`?n:{face:[r(t,-.8),t,r(t,.82),r(t,-.3),r(t,-.86),r(t,.5)],rim:[r(t,.85),r(t,-.35),r(t,.94),t,r(t,.45)]}}var a=0;function o(n=`blue`,r=.92,o=t){let s=`tenx-coin-${++a}`,{face:c,rim:l}=i(n,o),u=50*r,d=e=>e.map((t,n)=>`<stop offset="${(n/(e.length-1)).toFixed(3)}" stop-color="${t}"/>`).join(``),f=`M${50-u} 50a${u} ${u} 0 1 0 ${2*u} 0a${u} ${u} 0 1 0 ${-2*u} 0Z`,p=e(50,50,u*.5,.03);return`<svg viewBox="0 0 100 100" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">
  <defs>
    <linearGradient id="${s}-f" x1="0.12" y1="0.05" x2="0.88" y2="0.95">${d(c)}</linearGradient>
    <linearGradient id="${s}-r" x1="0" y1="0" x2="1" y2="1">${d(l)}</linearGradient>
  </defs>
  <path d="${f}${p}" fill="url(#${s}-f)" fill-rule="evenodd"/>
  <path d="${f}" fill="none" stroke="url(#${s}-r)" stroke-width="${(u*.045).toFixed(2)}"/>
  <path d="${p}" fill="none" stroke="url(#${s}-r)" stroke-width="${(u*.02).toFixed(2)}" stroke-linejoin="round" opacity="0.8"/>
</svg>`}export{o as t};