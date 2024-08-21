import{b as h,r,c as u,j as s,d as f,a as n}from"./index-CDdEqYjS.js";import{P as y}from"./post_article_card_component-RbKf2LM9.js";function N(){const d=h(),e=r.useMemo(()=>d.state||{},[d.state]),[o,g]=r.useState(null),[t,p]=r.useState(null),x=u(),{post_id:i,applicant_id:l}=e;r.useEffect(()=>{i?(async()=>{try{const a=await n.get(`posts/${i}/`);g(a.data)}catch(a){console.error("Error fetching post:",a)}})():console.error("Post ID is missing")},[i]),r.useEffect(()=>{l?(async()=>{try{const a=await n.get(`applicants/${l}/`);p(a.data)}catch(a){console.error("Error fetching applicant:",a)}})():console.error("Applicant ID is missing")},[l]);const m=async c=>{try{const a=await n.patch(`applications/${e.id}/`,{status:c});console.log("Response:",a),x(-1)}catch(a){console.error("Error updating application status:",a)}};return console.log(e),!i||!l?s.jsx("div",{children:"Task ID is missing. Please provide a valid task."}):!o||!t?s.jsx(f,{}):s.jsx(s.Fragment,{children:s.jsxs("div",{children:[s.jsx("div",{className:"max-w-lg",children:s.jsx("h1",{className:"text-slate-500 text-center text-2xl m-8 font-extrabold sm:text-3xl",children:"Application Details"})}),s.jsxs("div",{children:[s.jsx(y,{post:o}),s.jsx("div",{className:"flex m-8 rounded-md bg-white p-4 border-gray-300 border-2 sm:p-6 lg:p-8 w-4/5 mx-auto",children:s.jsxs("dl",{className:"-my-3 divide-y divide-gray-100 text-sm",children:[s.jsxs("div",{className:"grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4",children:[s.jsx("dt",{className:"font-medium text-gray-900",children:"Applicant Name"}),s.jsx("dd",{className:"text-gray-700 sm:col-span-2",children:`${t.first_name} ${t.last_name}`})]}),s.jsxs("div",{className:"grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4",children:[s.jsx("dt",{className:"font-medium text-gray-900",children:"Age"}),s.jsx("dd",{className:"text-gray-700 sm:col-span-2",children:t.age})]}),s.jsxs("div",{className:"grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4",children:[s.jsx("dt",{className:"font-medium text-gray-900",children:"Gender"}),s.jsx("dd",{className:"text-gray-700 sm:col-span-2",children:t.gender})]}),s.jsxs("div",{className:"grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4",children:[s.jsx("dt",{className:"font-medium text-gray-900",children:"Portfolio Link"}),s.jsx("dd",{className:"text-blue-600 hover:underline cursor-pointer sm:col-span-2",children:t.portfolio_link})]}),s.jsxs("div",{className:"grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4",children:[s.jsx("dt",{className:"font-medium text-gray-900",children:"Resume"}),s.jsx("dd",{className:"text-blue-600 hover:underline cursor-pointer sm:col-span-2",children:t.resume})]}),s.jsxs("div",{children:[e.skills&&s.jsxs("div",{className:"grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4",children:[s.jsx("dt",{className:"font-medium text-gray-900",children:"Skills"}),s.jsx("dd",{className:"text-gray-700 sm:col-span-2",children:e.skills})]}),e.cover_letter&&s.jsxs("div",{className:"grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4",children:[s.jsx("dt",{className:"font-medium text-gray-900",children:"Cover Letter"}),s.jsx("dd",{className:"text-gray-700 sm:col-span-2",children:e.cover_letter})]}),e.availabilty&&s.jsxs("div",{className:"grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4",children:[s.jsx("dt",{className:"font-medium text-gray-900",children:"Availability"}),s.jsx("dd",{className:"text-gray-700 sm:col-span-2",children:e.availabilty})]}),e.other&&s.jsxs("div",{className:"grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4",children:[s.jsx("dt",{className:"font-medium text-gray-900",children:"Other Information"}),s.jsx("dd",{className:"text-gray-700 sm:col-span-2",children:e.other})]})]})]})})]}),s.jsx(s.Fragment,{children:s.jsxs("div",{class:"flex justify-center w-full max-w-2xl gap-5 mx-auto m-10",children:[s.jsx("div",{class:"mt-3 rounded-lg sm:mt-0",children:s.jsx("button",{onClick:()=>m("accepted"),class:"px-5 py-4 text-base font-medium text-center text-slate-700 transition duration-500 ease-in-out transform bg-green-300 lg:px-10 rounded-lg hover:bg-greem-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",children:"Accept"})}),s.jsx("div",{class:"mt-3 rounded-lg sm:mt-0 sm:ml-3",children:s.jsx("button",{onClick:()=>m("rejected"),class:"items-center block px-5 lg:px-10 py-3.5 text-base font-medium text-center text-red-600 transition duration-500 ease-in-out transform border-2 border-slate-300 shadow-md rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",children:"Decline"})})]})})]})})}export{N as default};