import{j as s,x as u}from"../__chunks__/lit-element.BYUc91cE.js";import{o as p}from"../__chunks__/unsafe-html.CzzwY3gx.js";import{m as l}from"../__chunks__/index.module.DQI0LCqS.js";import{c as f}from"../__chunks__/cleanUpBlock.DyBWs1cd.js";import{m as h}from"../__chunks__/moveInstrumentation.CJwB2sIU.js";const d=t=>{const{template:o,container:r,cleanUp:n=!0,litRenderOptions:i,moveInstrumentationsOptions:e}=t;n&&f(r),s(o,r,i),e&&(Array.isArray(e)?e:[e]).forEach(({from:c,to:a})=>{try{h(c,a)}catch(m){l.error("Error moving instrumentation attributes:",m)}})},q=({quote:t,author:o})=>u`<blockquote class="quote__content">${p(t)}</blockquote><p class="quote__author">${o}</p>`;function k(t){const o=t.children[0].children[0].children[0],r=t.children[1].children[0].children[0];d({template:q({quote:o.innerHTML,author:r.innerText}),container:t,moveInstrumentationsOptions:[{from:o,to:".quote__content"},{from:r,to:".quote__author"}]})}export{k as default};
//# sourceMappingURL=quote.js.map