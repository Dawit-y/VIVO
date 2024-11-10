import{j as e,r as i,e as H,b as $,a as N}from"./index-QQyyaePt.js";import{d as U,C as G,S as W,L as z}from"./loading_spinner-D9m0Enmz.js";const O=({title:t,duration:s,handleTitleChange:a,handleDurationChange:l})=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"mb-4 text-xl font-bold first-letter:uppercase text-center",children:"Task Title"}),e.jsxs("div",{className:"mt-4",children:[e.jsx("label",{htmlFor:"title",className:"block text-sm font-medium text-gray-700",children:"Title"}),e.jsx("input",{placeholder:"title of task",id:"title",type:"text",value:t,onChange:n=>a(n.target.value),className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("label",{htmlFor:"duration",className:"block text-sm font-medium text-gray-700",children:"Duration"}),e.jsx("input",{placeholder:"50 min",id:"duration",type:"text",value:s,onChange:n=>l(n.target.value),className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"})]})]}),Y={toolbar:["heading","|","bold","italic","link","bulletedList","numberedList","|","insertTable","blockQuote","|","undo","redo","|"]},g=({content:t,handleContent:s,section:a})=>e.jsx("div",{children:e.jsx(U.CKEditor,{editor:G,config:Y,data:t,onChange:(l,n)=>{const c=n.getData();s(a,c)}})}),q=({content:t,handleContent:s,handleVideoChange:a})=>{const l=n=>{const c=n.target.value;a(c)};return e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"mb-4 text-xl font-bold first-letter:uppercase text-center",children:"Video Instruction"}),e.jsx(g,{content:t,handleContent:s,section:"video_instruction"}),e.jsxs("div",{className:"mt-4",children:[e.jsx("label",{htmlFor:"video",className:"block text-sm font-medium text-gray-700",children:"Attach a Video URL"}),e.jsx("input",{id:"video",type:"text",className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",onChange:l})]})]})},P=({content:t,handleContent:s})=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"mb-4 text-xl font-bold first-letter:uppercase text-center",children:"Background Information"}),e.jsx(g,{content:t,handleContent:s,section:"background_info"})]}),K=({content:t,handleContent:s})=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"mb-4 text-xl font-bold first-letter:uppercase text-center",children:"Task Brief"}),e.jsx(g,{content:t,handleContent:s,section:"task_brief"})]}),M=({content:t,handleContent:s})=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"mb-4 text-xl font-bold first-letter:uppercase text-center",children:"TaskResource"}),e.jsx(g,{content:t,handleContent:s,section:"task_resource"})]}),Q=({content:t,checkboxStates:s,handleContent:a,handleCheckboxChange:l})=>{const n=c=>{const{name:m,checked:x}=c.target;console.log(`Checkbox changed: ${m} - ${x}`),l({...s,[m]:x})};return e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"mb-4 text-xl font-bold first-letter:uppercase text-center",children:"Submit Task"}),e.jsx(g,{content:t,handleContent:a,section:"submit_task"}),e.jsxs("div",{className:"flex flex-col justify-content w-full mt-6",children:[e.jsx("label",{className:"",children:"How Should the file be submitted?"}),e.jsxs("label",{htmlFor:"file",className:"flex cursor-pointer items-start gap-4 mb-4 mt-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50",children:[e.jsxs("div",{className:"flex items-center",children:["​",e.jsx("input",{type:"checkbox",className:"size-4 rounded border-gray-300",id:"file",name:"file",checked:s.file||!1,onChange:n})]}),e.jsxs("div",{children:[e.jsx("strong",{className:"font-medium text-gray-900",children:"File"}),e.jsx("p",{className:"mt-1 text-sm text-gray-700",children:"Do you want applicants to submit this task as a file? e.g., txt, pdf, patch, doc"})]})]}),e.jsxs("label",{htmlFor:"url",className:"flex cursor-pointer items-start mb-4 gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50",children:[e.jsxs("div",{className:"flex items-center",children:["​",e.jsx("input",{type:"checkbox",className:"size-4 rounded border-gray-300",id:"url",name:"url",checked:s.url||!1,onChange:n})]}),e.jsxs("div",{children:[e.jsx("strong",{className:"font-medium text-gray-900",children:"URL"}),e.jsx("p",{className:"mt-1 text-sm text-gray-700",children:"Do you want applicants to submit this task as a URL for the solution? e.g., GitHub link, Google Drive link"})]})]}),e.jsxs("label",{htmlFor:"writing",className:"flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50",children:[e.jsxs("div",{className:"flex items-center",children:["​",e.jsx("input",{type:"checkbox",className:"size-4 rounded border-gray-300",id:"writing",name:"writing",checked:s.writing||!1,onChange:n})]}),e.jsxs("div",{children:[e.jsx("strong",{className:"font-medium text-gray-900",children:"Writing"}),e.jsx("p",{className:"mt-1 text-sm text-gray-700",children:"Do you want applicants to submit this task by writing their answer?"})]})]})]})]})},J=`
<div>
    <h1 style="font-weight: bold;">Task Overview</h1>
</div>
<div>
    <h2 style="font-weight: bold;">What you'll learn</h2>
    <ul style="list-style-type: disc; padding-left: 20px;">
        <li>Your Managing Director has a meeting with the CEO of Big Box Retail who are looking to acquire a retailer called Best Buy.</li>
        <li>How to prepare a company profile slide and why this is an essential resource to share with your client.</li>
    </ul>
</div>
<div>
    <h2 style="font-weight: bold;">What you'll do</h2>
    <ul style="list-style-type: disc; padding-left: 20px;">
        <li>Use the information provided on Best Buy to create a company profile in PowerPoint.</li>
    </ul>
</div>
`,X=`
<div>
    <h1>Here is the background information on your task</h1>
    <p>
        For the next step in the acquisition process, we need to project some forward-looking financials to estimate revenues and expenses, and gain a better understanding of what financial performance might look like over a future time period. This will help facilitate a healthy discussion with both our client and the target when it comes time to discuss valuation, or determining how much to pay for the asset.
        As such, we'd like you to build a simple five-year forecast so we can better evaluate the asset. An associate has emailed you some basic assumptions as well as a template model for you to run the numbers.
        Let’s touch base once you are finished to review outputs.
    </p>
</div>
`,Z=`
<div>
    <h1>Here is your task</h1>
</div>
<div>
    <h5>&lt;Email from Associate&gt;</h5>
    <p>Hello,</p>
    <p>We need you to create a high-level set of projections for the target company. As time is of the essence, I’ve attached a simple income statement (IS) model template from a former deal that you can use to draft your forecast. For the projected period, please use the following key operating assumptions:</p>
    <ul>
        <li>Forecast period: 5 years</li>
        <li>YoY Revenue Growth: 10%</li>
        <li>COGS % Revenue: assume declining margin to 76%</li>
        <li>SG&A % Revenue: assume declining margin to 16%</li>
        <li>Depreciation: $800 million for 2022 and held constant at 1.5% margin as % revenue</li>
        <li>Amortization: $100 million for 2022 and held constant over projection period</li>
        <li>Interest exp: $25 million for 2022 and held constant over projection period</li>
        <li>Tax rate: 20%</li>
    </ul>
    <p>In summary, please develop a five-year financial projection forecast model using the above key operating assumptions and information from the target company’s “FY22 Annual Report” as source inputs.</p>
    <p>As a tip, the provided assumptions will drive your model outputs in the projected period by properly linking cells and using consistent formulas that flow and should always be presented from left to right. Once you’ve finished your forecast model, submit the Excel document below.</p>
</div>
`,ee=`
<div>
    <h1>Here are some resources to help you</h1>
    <ul>
        <li>link to the resource</li>
    </ul>
</div>
`,te=`
<div>
    <h3>Upload your five-year financial projection forecast model</h3>
    <h3>Write your five-year financial projection forecast model</h3>
    <h3>Link your five-year financial projection forecast model</h3>
</div>
`,se={video_instruction:J,background_info:X,task_brief:Z,task_resource:ee,submit_task:te},ae=()=>{var C;const[t,s]=i.useState(0),[a,l]=i.useState(null),[n,c]=i.useState(""),[m,x]=i.useState(""),[r,T]=i.useState(se),[v,A]=i.useState(),[k,h]=i.useState(!1),[b,I]=i.useState({submit_task:{file:!1,url:!1,writing:!1}}),S=H();i.useEffect(()=>{console.log(r)},[r]),i.useEffect(()=>{console.log(v)},[v]);const j=$();console.log(j);const _=(C=j.state)==null?void 0:C.postId,B=o=>{c(o)},F=o=>{x(o)},p=(o,u)=>{T(y=>({...y,[o]:u}))},R=o=>{A(o)},D=o=>{I(o)},E=async()=>{if(t===0)try{h(!0);const o=await N.post("/tasks/",{title:n,duration:m,post:_});l(o.data.id),h(!1),s(t+1)}catch(o){h(!1),console.error("Error creating task:",o)}else s(t+1)},L=async o=>{o.preventDefault(),h(!0);try{const u=[];for(const d in r){const f={task:a,title:d,content:r[d]};d==="videoInstruction"&&(f.video=v),d==="submitTask"&&(f.is_file=b[d].file,f.is_url=b[d].url,f.is_text=b[d].writing),u.push(f)}const y=await N.post(`tasks/${a}/sections/`,u);y.status==201&&S(-1),console.log("Response:",y.data)}catch(u){console.error("Error creating task:",u)}finally{h(!1)}},w=[{label:"Task Title"},{label:"Video Instruction"},{label:"Background Information"},{label:"Task Brief"},{label:"Task Resource"},{label:"Submit Task"}];function V(){switch(t){case 0:return e.jsx(O,{title:n,duration:m,handleTitleChange:B,handleDurationChange:F});case 1:return e.jsx(q,{content:r.video_instruction,handleContent:p,handleVideoChange:R});case 2:return e.jsx(P,{content:r.background_info,handleContent:p});case 3:return e.jsx(K,{content:r.task_brief,handleContent:p});case 4:return e.jsx(M,{content:r.task_resource,handleContent:p});case 5:return e.jsx(Q,{content:r.submit_task,checkboxStates:b,handleContent:p,handleCheckboxChange:D});default:return null}}return e.jsx("div",{className:"flex items-center justify-center mt-8",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md w-full lg:max-w-4xl",children:[e.jsx(W,{steps:w,activeStep:t,connectorStateColors:!0,connectorStyleConfig:{completedColor:"#5A5A5A",activeColor:"#5A5A5A",disabledColor:"#eee"},styleConfig:{activeBgColor:"#808080",completedBgColor:"#5A5A5A",inactiveBgColor:"#eee",activeTextColor:"#fff",completedTextColor:"#fff",inactiveTextColor:"#5A5A5A"}}),e.jsxs("div",{style:{padding:"20px"},children:[V(),e.jsx("div",{className:"max-w-3xl mx-auto px-4 mt-5",children:e.jsxs("div",{className:"flex justify-between",children:[t!==0&&e.jsx("div",{className:"w-1/2",children:e.jsx("button",{onClick:()=>s(t-1),className:"w-32 focus:outline-none py-2 px-5 rounded-lg shadow-sm text-center text-gray-600 bg-white hover:bg-gray-100 font-medium border",children:"Previous"})}),t!==w.length-1?e.jsx("div",{className:"w-1/2",children:e.jsx("button",{onClick:E,className:`w-32 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white hover:bg-gray-600 font-medium ${k?"cursor-not-allowed disabled bg-gray-600":" bg-gray-800"} `,children:"Next"})}):e.jsx("div",{className:"w-1/2",children:k?e.jsx("button",{className:"w-40 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white bg-gray-800 hover:bg-gray-600 font-medium",children:e.jsx(z,{})}):e.jsx("button",{className:"w-40 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white bg-gray-800 hover:bg-gray-600 font-medium",onClick:L,children:"Create Task"})})]})})]})]})})};export{ae as default};
