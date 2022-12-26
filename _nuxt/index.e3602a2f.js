import{o as l,a as o,b as r,e as U,r as d,u as t,w as h,v as g,i as x,f as m,t as k,h as c,F as w,j as b,p as V,k as j}from"./entry.af0c733a.js";function M(s,i){return l(),o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[r("path",{"fill-rule":"evenodd",d:"M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z","clip-rule":"evenodd"})])}function y(s,i){return l(),o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[r("path",{d:"M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"})])}function z(s,i){return l(),o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[r("path",{"fill-rule":"evenodd",d:"M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z","clip-rule":"evenodd"})])}const S=s=>(V("data-v-c607f9b3"),s=s(),j(),s),T=S(()=>r("p",null,"Calculate a cross-multiplication without picking up a pen.",-1)),N={class:"max-w-xl mx-auto grid grid-cols-4 gap-4 justify-center mt-8"},R={class:"flex items-center justify-center"},A={class:"flex items-center justify-center"},D=["onUpdate:modelValue"],F={class:"col-span-2 flex justify-center items-center space-x-4"},L={__name:"Calculator",setup(s){const i=d("People"),a=d("Apples"),v=d(!1),f=d(!1),u=d([[4,12],[3,null]]),$=()=>{u.value.push([0,0])},C=()=>{u.value.pop()};return(P,e)=>(l(),o("div",null,[T,r("div",N,[r("div",R,[t(v)?h((l(),o("input",{key:0,"onUpdate:modelValue":e[0]||(e[0]=n=>x(i)?i.value=n:null),type:"text",placeholder:"People",onBlur:e[1]||(e[1]=n=>v.value=!1)},null,544)),[[g,t(i)]]):(l(),o("p",{key:1,class:"text-right cursor-pointer",onClick:e[2]||(e[2]=n=>v.value=!0)},[m(k(t(i)||"Unit")+" ",1),c(t(y),{class:"inline ml-1 w-3 h-3"})]))]),r("div",A,[t(f)?h((l(),o("input",{key:0,"onUpdate:modelValue":e[3]||(e[3]=n=>x(a)?a.value=n:null),type:"text",placeholder:"Apples",onBlur:e[4]||(e[4]=n=>f.value=!1)},null,544)),[[g,t(a)]]):(l(),o("p",{key:1,class:"text-right cursor-pointer",onClick:e[5]||(e[5]=n=>f.value=!0)},[m(k(t(a)||"Unit")+" ",1),c(t(y),{class:"inline ml-1 w-3 h-3"})]))]),(l(!0),o(w,null,b(t(u),(n,p)=>(l(),o(w,{key:`row:${p}`},[(l(!0),o(w,null,b(n,(E,_)=>(l(),o("div",{key:`cell:${p}-${_}`},[h(r("input",{type:"text","onUpdate:modelValue":B=>t(u)[p][_]=B},null,8,D),[[g,t(u)[p][_]]])]))),128))],64))),128)),r("div",F,[r("button",{onClick:e[6]||(e[6]=n=>$()),class:"border-2 border-indigo-600 dark:border-indigo-400 rounded-xl hover:bg-indigo-600 dark:hover:bg-indigo-400"},[c(t(z),{class:"w-12 h-12 p-2 fill-white"})]),r("button",{onClick:e[7]||(e[7]=n=>C()),class:"border-2 border-indigo-600 dark:border-indigo-400 rounded-xl hover:bg-indigo-600 dark:hover:bg-indigo-400"},[c(t(M),{class:"w-12 h-12 p-2 fill-white"})])])])]))}},O=U(L,[["__scopeId","data-v-c607f9b3"]]),q={__name:"index",setup(s){return(i,a)=>(l(),o("div",null,[c(O)]))}};export{q as default};