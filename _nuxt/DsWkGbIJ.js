import{y as f,k as u,l as d,z as i,c as b}from"./DQ4DrVOm.js";const k=Symbol.for("nuxt:client-only"),h=f({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(m,{slots:e,attrs:c}){const l=u(!1);return d(()=>{l.value=!0}),i(k,!0),a=>{var t;if(l.value)return(t=e.default)==null?void 0:t.call(e);const n=e.fallback||e.placeholder;if(n)return n();const r=a.fallback||a.placeholder||"",o=a.fallbackTag||a.placeholderTag||"span";return b(o,c,r)}}});export{h as _};
