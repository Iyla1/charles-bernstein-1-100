import{j as u}from"./jsx-runtime.CIMolHGP.js";import{u as y}from"./index.bM7OrN6I.js";import{d as $}from"./player.CKjfIk3N.js";import{$ as w,a as j}from"./store.aycOQVLs.js";import{r}from"./index.DddtCxX5.js";import{u as P,a as S,I as F,G as E,$ as I,b as k}from"./label.CyPQ0yu1.js";import{W as C,D as N,H as R}from"./use-sync-refs.CdR1_aZG.js";let T="input";function D(a,e){let t=r.useId(),o=P(),d=S(),{id:l=o||`headlessui-input-${t}`,disabled:s=d||!1,autoFocus:i=!1,invalid:n=!1,...p}=a,m=F(),h=E(),{isFocused:c,focusProps:b}=I({autoFocus:i}),{isHovered:f,hoverProps:g}=k({isDisabled:s}),x=N({ref:e,id:l,"aria-labelledby":m,"aria-describedby":h,"aria-invalid":n?"":void 0,disabled:s||void 0,autoFocus:i},b,g),v=r.useMemo(()=>({disabled:s,invalid:n,hover:f,focus:c,autofocus:i}),[s,n,f,c,i]);return R({ourProps:x,theirProps:p,slot:v,defaultTag:T,name:"Input"})}let G=C(D);function H({title:a,titleId:e,...t},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":e},t),a?r.createElement("title",{id:e},a):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"}))}const L=r.forwardRef(H),Z=a=>{const{playerId:e}=a,o=y(w)[e]||{...$},d=l=>{j(l.target.value,e)};return u.jsxs("div",{className:"flex flex-row grow rounded-lg py-1.5 px-3 bg-white items-center gap-3 border-solid border border-gray-200",children:[u.jsx(L,{className:"h-6 w-6"}),u.jsx(G,{value:o.searchQuery,onChange:d,placeholder:"Search",className:"focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"})]})};export{Z as default};
