import{r as l,j as s}from"./index-CDdEqYjS.js";function i({percent:r}){const[a,c]=l.useState(0),t=60,o=10,e=2*Math.PI*t;return l.useEffect(()=>{const n=(100-r)/100*e;c(n)},[c,e,r,a]),s.jsxs("div",{className:"flex items-center justify-center",children:[s.jsxs("svg",{className:"transform -rotate-90 w-36 h-36",children:[s.jsx("circle",{cx:"72.5",cy:"72.5",r:t,stroke:"currentColor",strokeWidth:o,fill:"transparent",className:"text-gray-700"}),s.jsx("circle",{cx:"72.5",cy:"72.5",r:t,stroke:"currentColor",strokeWidth:o,fill:"transparent",strokeDasharray:e,strokeDashoffset:a,className:`stroke-current text-${r>50?"blue":"red"}-500`})]}),s.jsxs("span",{className:"absolute text-2xl font-semibold",children:[r,"%"]})]})}export{i as C};
