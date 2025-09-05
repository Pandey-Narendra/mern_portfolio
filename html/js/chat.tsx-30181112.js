import{i as n,j as t}from"./localStorage-e41904e9.js";import{a as p}from"./client-ebe67c58.js";import{C as c}from"./index-db3d9d77.js";import{M as d}from"./select-b26c20a4.js";import{T as l}from"./themeContext-e2709bf1.js";import{c as h,a as x,b as u,d as f,e as C}from"./chatIframe-0e6e32f7.js";import{m as g}from"./index-f612f062.js";/* empty css             */import"./i18n-a7d9572b.js";import{q as j,Q as v}from"./browserPolyfillWrapper-b0fafb12.js";import{C as E,R}from"./reactQueryProviderExtension-ed907ea6.js";import{c as P}from"./index-64a9bfa6.js";import"./index-773e7750.js";import"./button-e9a1516e.js";import"./IconCheck-d416f5fc.js";import"./createReactComponent-8aad68f0.js";import"./index-8b63691d.js";import"./analytics-8361cfa0.js";import"./index-365c38c1.js";import"./merlin-logo-643be8a2.js";import"./helper-647ff239.js";import"./motion-5430e276.js";import"./useTranslation-e9fdbc7b.js";import"./IconLoader-6ddcdf80.js";import"./webAccess-8c482c3b.js";import"./backend-b694c8c6.js";import"./persist-4b6dccac.js";import"./useSSE-9b5541ff.js";import"./debounce-c70d88e0.js";import"./utils-03467116.js";import"./postMessageConstants-fa0bb197.js";import"./accordion-05be2e35.js";import"./IconArrowUpRight-c409d730.js";import"./IconArrowLeft-69432c7a.js";function T(){return t.jsx(E,{children:t.jsx(R,{children:t.jsx(c,{children:t.jsx(l,{children:t.jsx(d,{children:t.jsx(u,{children:t.jsx(f,{children:t.jsx(C,{})})})})})})})})}const y=async()=>{if(document.getElementById("merlin-chat"))return;const e=await j.fetchQuery(v.MerlinConfig);if(e&&e.misc.chat.gui!=="native")return;const o=document.createElement("merlin-component");o.id="merlin-chat",o.className="merlin chat";const i=o.attachShadow({mode:"open"}),s=document.createElement("style");s.textContent=`${P}
    :host(#merlin-chat) {
    }
    .reactAppRoot {
      all: initial; /* 1st rule so subsequent properties are reset. */
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      position: relative;
      z-index: 2147483647;
    }
    .dark {
        ${h}
    }
    ${x}
    `.replaceAll(":root",":host");const r=document.createElement("div");r.id="reactAppRoot",r.className="reactAppRoot",n.forEach(a=>{r.addEventListener(a,m=>{m.stopPropagation()})}),i.appendChild(s),i.appendChild(r),g(o),p(r).render(t.jsx(T,{}))};y();
