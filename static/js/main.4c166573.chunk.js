(this.webpackJsonpyoubike=this.webpackJsonpyoubike||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(4),r=n.n(s),a=n(2),o=n(0),j=function(e){return Object(o.jsx)("div",{className:"map-box",children:Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("span",{className:"close-icon",onClick:e.handleClose,children:"x"}),e.content]})})};function d(){var e=Object(c.useState)(null),t=Object(a.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)(!1),r=Object(a.a)(s,2),d=r[0],u=r[1],b=Object(c.useState)([]),O=Object(a.a)(b,2),h=O[0],x=O[1],m=Object(c.useState)("Click"),v=Object(a.a)(m,2),f=v[0],p=v[1],g=Object(c.useState)("Click"),S=Object(a.a)(g,2),w=S[0],y=S[1],k=Object(c.useState)("Taipei"),C=Object(a.a)(k,2),F=C[0],T=C[1],A=Object(c.useRef)(null),E=Object(c.useState)(!1),L=Object(a.a)(E,2),M=L[0],N=L[1],D="https://www.google.com/maps/embed/v1/place?key=AIzaSyDId7Y0YTgaQiAMczyNPA8OjJevW92Uh8s&q="+F+",Taipei",H=function(e,t,n){p(t),y(n),T(t),M||e.currentTarget.classList.remove("hover"),N(!M)},I=function(e){e.currentTarget.classList.add("hover")},J=function(e){e.currentTarget.classList.remove("hover")};return Object(c.useEffect)((function(){fetch("https://data.ntpc.gov.tw/api/datasets/71CD1490-A2DF-4198-BEF1-318479775E8A/json/preview").then((function(e){return e.json()})).then((function(e){u(!0);var t=e;t.sort((function(e,t){return t.mday-e.mday})),x(t)}),(function(e){u(!0),i(e),window.alert("Error: "+e.message+"\nTry using CORS Chrome extension")}))}),[]),n?Object(o.jsxs)("div",{children:["Error: ",n.message]}):d?Object(o.jsxs)("div",{children:[M&&Object(o.jsx)(j,{content:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{id:"mapHeaderWrapper",children:[Object(o.jsx)("div",{id:"mapHeaderLocation",children:f}),Object(o.jsxs)("div",{id:"mapHeaderStat",children:["Available: ",w]})]}),Object(o.jsx)("iframe",{width:"1005",height:"450",src:D})]}),handleClose:H}),Object(o.jsx)("ul",{id:"listing",children:h.map((function(e){return Object(o.jsx)("li",{onClick:function(t){return H(t,e.snaen,e.sbi)},onMouseEnter:I,onMouseLeave:J,children:Object(o.jsxs)("ul",{ref:A,id:"item",children:[Object(o.jsx)("li",{children:e.snaen}),Object(o.jsxs)("li",{children:["Total: ",e.tot]}),Object(o.jsxs)("li",{children:["Available: ",e.sbi]}),Object(o.jsx)("li",{children:l(e.mday)})]})},e.sno)}))})]}):Object(o.jsx)("div",{children:"Loading..."})}function l(e){return(e/1e10).toFixed(0)+"/"+u((e/1e8).toFixed(0)%100)+"/"+u((e/1e6).toFixed(0)%100)+" - "+u((e/1e4%100).toFixed(0))+":"+u((e/100%100).toFixed(0))+":"+u((e%100).toFixed(0))}function u(e){return e/10<1?"0"+e:e}n(10);var b=function(){return Object(o.jsx)(d,{})};r.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.4c166573.chunk.js.map