import{j as p,ao as m,Y as d,i as o,o as x,c as S,a8 as f,_ as v}from"./entry.e454b2c0.js";const z=p({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(u){var c;const s=u;m(n=>({"5fa51ebc":_.value}));const e=d();(c=e==null?void 0:e.nuxtIcon)!=null&&c.aliases;const l=o(()=>{var n;return(((n=e==null?void 0:e.nuxtIcon)==null?void 0:n.aliases)||{})[s.name]||s.name}),_=o(()=>`url('https://api.iconify.design/${l.value.replace(":","/")}.svg')`),a=o(()=>{var t,i,r;if(!s.size&&typeof((t=e.nuxtIcon)==null?void 0:t.size)=="boolean"&&!((i=e.nuxtIcon)!=null&&i.size))return;const n=s.size||((r=e.nuxtIcon)==null?void 0:r.size)||"1em";return String(Number(n))===n?`${n}px`:n});return(n,t)=>(x(),S("span",{style:f({width:a.value,height:a.value})},null,4))}});const y=v(z,[["__scopeId","data-v-5ee01813"]]);export{y as default};
