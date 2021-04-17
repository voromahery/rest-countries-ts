(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{31:function(e,n,t){},40:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var a=t(1),c=t.n(a),i=t(22),r=t.n(i),d=t(6),s=(t(31),t(2)),l=t(18),o=t.n(l),j=t(23),b=t(15),p=t(10),x=t(0),h={countryData:[],allData:[],dispatch:function(){return null},mode:!1};function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"RESOLVED":return Object(p.a)(Object(p.a)({},e),{},{isLoading:!1,allData:n.payload,countryData:n.payload,error:null});case"SEARCH_COUNTRY":case"SEARCH_BY_REGION":return Object(p.a)(Object(p.a)({},e),{},{countryData:n.payload});case"CHANGE_MODE":return Object(p.a)(Object(p.a)({},e),{},{mode:n.payload});default:return e}}var m,u=Object(a.createContext)(h),g=function(e){var n=e.children,t="https://restcountries.eu/rest/v2/all",c=Object(a.useReducer)(O,h),i=Object(b.a)(c,2),r=i[0],d=i[1];function s(){return(s=Object(j.a)(o.a.mark((function e(){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,console.log(a),d({type:"RESOLVED",payload:a});case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){s.apply(this,arguments)}()}),[]),Object(x.jsx)(u.Provider,{value:{countryData:r.countryData,allData:r.allData,mode:r.mode,dispatch:d},children:n})},f=t.p+"static/media/moon-solid.b23d5034.svg",v=t.p+"static/media/moon-regular.cd243273.svg",w=t(3),y=w.a.header(m||(m=Object(s.a)(["\n  padding-left: 18px;\n  padding-right: 18px;\n  @media (min-width: 650px) {\n    padding-left: 80px;\n    padding-right: 80px;\n  }\n"])));function C(){var e=Object(a.useContext)(u),n=e.mode,t=e.dispatch;return Object(x.jsxs)(y,{className:"".concat(n?"light-header":"dark-header"," header"),children:[Object(x.jsx)("h3",{children:Object(x.jsx)(d.b,{to:"/",children:"Where in the world?"})}),Object(x.jsx)("div",{className:"mode",onClick:function(){t({type:"CHANGE_MODE",payload:!n})},children:n?Object(x.jsxs)("span",{children:[Object(x.jsx)("img",{src:v,alt:"dark-moon",className:"moon"}),"Light mode"]}):Object(x.jsxs)("span",{children:[Object(x.jsx)("img",{src:f,alt:"light-moon",className:"moon"})," Dark mode"]})})]})}t(40);var k,N,D,E,R,S=w.a.div(k||(k=Object(s.a)(["\n  padding-left: 18px;\n  padding-right: 18px;\n  @media (min-width: 650px) {\n    padding-left: 80px;\n    padding-right: 80px;\n  }\n"]))),A=w.a.div(N||(N=Object(s.a)(["\n  padding-top: 64px;\n  padding-bottom: 64px;\n  padding-left: 65px;\n  padding-right: 64px;\n  display: grid;\n  grid-gap: 64px;\n  justify-items: center;\n\n  @media (min-width: 650px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  @media (min-width: 900px) {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  @media (min-width: 1200px) {\n    grid-template-columns: repeat(4, 1fr);\n  }\n"]))),L=w.a.form(D||(D=Object(s.a)(["\n  margin-top: 56px;\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n  @media (min-width: 650px) {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n  }\n"]))),B=w.a.img(E||(E=Object(s.a)(["\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n"]))),_=w.a.div(R||(R=Object(s.a)(["\n  padding: 16px;\n  @media (min-width: 300px) {\n    padding: 30px;\n  }\n"])));function T(){var e=Object(a.useContext)(u),n=e.countryData,t=e.allData,c=e.mode,i=e.dispatch,r=Object(a.useState)(""),s=Object(b.a)(r,2),l=s[0],o=s[1];return Object(x.jsxs)(S,{children:[Object(x.jsxs)(L,{children:[Object(x.jsx)("input",{type:"text",onChange:function(e){var n=e.target;o(n.value);var a=t.filter((function(e){return e.name.toLowerCase().includes(n.value.toLowerCase())}));i({type:"SEARCH_COUNTRY",payload:a})},className:"".concat(c?"input-light-mode":"input-dark-mode"),value:l,placeholder:"Search for a country..."}),Object(x.jsx)("select",{onChange:function(e){var n=t.filter((function(n){return n.region===e.target.value}));"All countries"===e.target.value?i({type:"SEARCH_BY_REGION",payload:t}):i({type:"SEARCH_BY_REGION",payload:n})},className:"".concat(c?"select-light-mode":"select-dark-mode"),children:["All countries","Africa","Americas","Asia","Europe","Oceania"].map((function(e){return Object(x.jsx)("option",{value:e,children:e},e)}))})]}),Object(x.jsx)(A,{children:n.map((function(e){return Object(x.jsx)("div",{className:"".concat(c?"light-card":"dark-card"," card"),children:Object(x.jsx)(d.b,{to:"/country/".concat(e.name),children:Object(x.jsxs)("div",{children:[Object(x.jsx)(B,{src:e.flag,alt:"flag"}),Object(x.jsxs)(_,{children:[Object(x.jsx)("h3",{style:{margin:"0"},children:e.name}),Object(x.jsxs)("ul",{children:[Object(x.jsxs)("li",{children:[Object(x.jsx)("span",{children:"Population:"})," ",e.population]}),Object(x.jsxs)("li",{children:[Object(x.jsx)("span",{children:"Region:"})," ",e.region]}),Object(x.jsxs)("li",{children:[Object(x.jsx)("span",{children:"Capital:"})," ",e.capital]})]})]})]})})},e.name)}))})]})}var H,z,P,G,I,Y,F,M,J,U,V,W,q,K,Q=t(4),X=t.p+"static/media/arrow-back-white.a7968dae.svg",Z=t.p+"static/media/arrow-back-dark.39940f16.svg",$=w.a.div(H||(H=Object(s.a)(["\n  height: 100%;\n  padding-left: 18px;\n  padding-right: 18px;\n  padding-top: 64px;\n  padding-bottom: 64px;\n  @media (min-width: 650px) {\n    padding-left: 80px;\n    padding-right: 80px;\n    padding-top: 128px;\n    padding-bottom: 128px;\n  }\n"]))),ee=w.a.button(z||(z=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 18px;\n"]))),ne=w.a.img(P||(P=Object(s.a)(["\n  max-width: 32px;\n"]))),te=w.a.div(G||(G=Object(s.a)(["\n  height: 100vh;\n  margin-top: 102.4px;\n  @media (min-width: 650px) {\n    display: flex;\n    flex-direction: row;\n    gap: 64px;\n    flex-wrap: nowrap;\n  }\n"]))),ae=w.a.img(I||(I=Object(s.a)(["\n  @media (min-width: 650px) {\n    flex-basis: 50%;\n    max-width: 50%;\n    height: max-content;\n  }\n"]))),ce=w.a.div(Y||(Y=Object(s.a)(["\n  @media (min-width: 650px) {\n    flex-basis: 50%;\n  }\n"]))),ie=w.a.h3(F||(F=Object(s.a)(["\n  font-size: 28px;\n  @media (min-width: 300px) {\n    font-size: 32px;\n  }\n  @media (min-width: 800px) {\n    font-size: 52px;\n  }\n"])));function re(){var e=Object(a.useContext)(u),n=e.allData,t=e.mode,c=Object(Q.f)(),i=n.find((function(e){return e.name===c.name}));return Object(x.jsxs)($,{className:"".concat(t?"light-container":"dark-container"," container"),children:[Object(x.jsx)(d.b,{to:"/",children:Object(x.jsxs)(ee,{className:"".concat(t?"back-light-mode":"back-dark-mode"),children:[t?Object(x.jsx)(ne,{src:X,alt:"back-arrow"}):Object(x.jsx)(ne,{src:Z,alt:"back-arrow"})," ","Back"]})}),Object(x.jsxs)(te,{children:[Object(x.jsx)(ae,{src:i.flag,alt:"flag"}),Object(x.jsxs)(ce,{children:[Object(x.jsx)(ie,{children:i.name}),Object(x.jsxs)("ul",{children:[Object(x.jsxs)("li",{children:[Object(x.jsx)("b",{children:"Native Name:"})," ",i.nativeName]}),Object(x.jsxs)("li",{children:[Object(x.jsx)("b",{children:"Population:"})," ",i.population]}),Object(x.jsxs)("li",{children:[Object(x.jsx)("b",{children:"Region:"})," ",i.region]}),Object(x.jsxs)("li",{children:[Object(x.jsx)("b",{children:"Sub Region:"})," ",i.subregion]}),Object(x.jsxs)("li",{children:[Object(x.jsx)("b",{children:"Capital:"})," ",i.capital]})]}),Object(x.jsxs)("ul",{children:[Object(x.jsxs)("li",{children:[Object(x.jsx)("b",{children:"Top Level Domain:"}),i.topLevelDomain.map((function(e,n){return Object(x.jsx)("div",{children:e},e[n])}))]}),Object(x.jsxs)("li",{children:[Object(x.jsx)("b",{children:"Currencies:"}),i.currencies.map((function(e){return Object(x.jsx)("div",{children:e.name},e.name)}))]})]}),Object(x.jsx)("div",{children:i.borders.length>0?Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"Border countries"}),Object(x.jsx)("ul",{children:i.borders.map((function(e,a){var c=n.find((function(n){return n.alpha3Code===e||n.alpha2Code===e}));return Object(x.jsx)(d.b,{to:"/border/".concat(e),children:Object(x.jsx)("button",{className:"".concat(t?"button-light-mode":"button-dark-mode"),children:c&&c.name})},e[a])}))})]}):Object(x.jsx)("p",{children:"This country has no border country."})})]})]})]})}var de=w.a.section(M||(M=Object(s.a)(["\n  height: 100%;\n  padding-left: 18px;\n  padding-right: 18px;\n  padding-top: 64px;\n  padding-bottom: 64px;\n  @media (min-width: 650px) {\n    padding-left: 80px;\n    padding-right: 80px;\n    padding-top: 128px;\n    padding-bottom: 128px;\n  }\n"]))),se=w.a.div(J||(J=Object(s.a)(["\n  height: 100vh;\n  margin-top: 102.4px;\n  @media (min-width: 650px) {\n    display: flex;\n    flex-direction: row;\n    gap: 64px;\n    flex-wrap: nowrap;\n  }\n"]))),le=w.a.button(U||(U=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 18px;\n"]))),oe=w.a.img(V||(V=Object(s.a)(["\n  max-width: 32px;\n"]))),je=w.a.img(W||(W=Object(s.a)(["\n  @media (min-width: 650px) {\n    flex-basis: 50%;\n    max-width: 50%;\n    height: max-content;\n  }\n"]))),be=w.a.div(q||(q=Object(s.a)(["\n  @media (min-width: 650px) {\n    flex-basis: 50%;\n  }\n"]))),pe=w.a.h3(K||(K=Object(s.a)(["\n  font-size: 28px;\n  @media (min-width: 300px) {\n    font-size: 32px;\n  }\n  @media (min-width: 800px) {\n    font-size: 52px;\n  }\n"])));function xe(){var e=Object(a.useContext)(u),n=e.allData,t=e.mode,c=Object(Q.f)(),i=n.find((function(e){return e.alpha3Code===c.border}));return Object(x.jsxs)(de,{className:"".concat(t?"light-container":"dark-container"," container"),children:[Object(x.jsx)(d.b,{to:"/",children:Object(x.jsxs)(le,{className:"".concat(t?"back-light-mode":"back-dark-mode"),children:[t?Object(x.jsx)(oe,{src:X,alt:"back-arrow"}):Object(x.jsx)(oe,{src:Z,alt:"back-arrow"})," ","Back"]})}),Object(x.jsxs)(se,{children:[Object(x.jsx)(je,{src:i.flag,alt:"flag"}),Object(x.jsxs)(be,{children:[Object(x.jsx)(pe,{children:i.name}),Object(x.jsxs)("ul",{children:[Object(x.jsxs)("li",{children:[Object(x.jsx)("b",{children:"Native Name:"})," ",i.nativeName]}),Object(x.jsxs)("li",{children:[Object(x.jsx)("b",{children:"Population:"})," ",i.population]}),Object(x.jsxs)("li",{children:[Object(x.jsx)("b",{children:"Region:"})," ",i.region]}),Object(x.jsxs)("li",{children:[Object(x.jsx)("b",{children:"Sub Region:"})," ",i.subregion]}),Object(x.jsxs)("li",{children:[Object(x.jsx)("b",{children:"Capital:"})," ",i.capital]})]}),Object(x.jsxs)("ul",{children:[Object(x.jsxs)("li",{children:[Object(x.jsx)("b",{children:"Top Level Domain:"}),i.topLevelDomain.map((function(e,n){return Object(x.jsx)("div",{children:e},e[n])}))]}),Object(x.jsxs)("li",{children:[Object(x.jsx)("b",{children:"Currencies:"}),i.currencies.map((function(e){return Object(x.jsx)("div",{children:e.name},e.name)}))]})]}),Object(x.jsxs)("div",{children:["Border countries",Object(x.jsx)("ul",{children:Object(x.jsx)("div",{children:i.borders.length>0?Object(x.jsxs)("div",{children:["Border countries",Object(x.jsx)("ul",{children:i.borders.map((function(e,a){var c=n.find((function(n){return n.alpha3Code===e}));return Object(x.jsx)(d.b,{to:"/border/".concat(e),children:Object(x.jsx)("button",{className:"".concat(t?"button-light-mode":"button-dark-mode"),children:c&&c.name})},e[a])}))})]}):Object(x.jsx)("p",{children:"This country has no border country."})})})]})]})]})]})}function he(){return Object(x.jsx)("div",{children:Object(x.jsxs)(Q.c,{children:[Object(x.jsx)(Q.a,{exact:!0,path:"/",children:Object(x.jsx)(T,{})}),Object(x.jsx)(Q.a,{exact:!0,path:"/country/:name",children:Object(x.jsx)(re,{})}),Object(x.jsx)(Q.a,{exact:!0,path:"/border/:border",children:Object(x.jsx)(xe,{})})]})})}var Oe=function(){var e=Object(a.useContext)(u).mode;return Object(x.jsxs)("div",{className:"".concat(e?"light-mode":"dark-mode"),children:[Object(x.jsx)(C,{}),Object(x.jsx)(he,{})]})},me=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,42)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,i=n.getLCP,r=n.getTTFB;t(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(g,{children:Object(x.jsx)(d.a,{children:Object(x.jsx)(Oe,{})})})}),document.getElementById("root")),me()}},[[41,1,2]]]);
//# sourceMappingURL=main.0ab8ebd6.chunk.js.map