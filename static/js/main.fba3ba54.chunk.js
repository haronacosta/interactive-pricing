(this["webpackJsonpinteractive-pricing"]=this["webpackJsonpinteractive-pricing"]||[]).push([[0],{11:function(e,t,i){"use strict";i.r(t);var c=i(1),r=i.n(c),n=i(4),a=i.n(n),s=(i(9),i(0)),j=function(){return Object(s.jsxs)("header",{className:"InteractiveHeader",children:[Object(s.jsx)("div",{className:"InteractiveHeader__title",children:"Simple, traffic-based pricing"}),Object(s.jsxs)("div",{className:"InteractiveHeader__subtitle",children:[Object(s.jsx)("p",{children:"Sign-up for our 30-day trial."}),Object(s.jsx)("p",{children:"Not credit card required."})]})]})},d=i(3),u=[{id:1,pageviews:"10k",perMouth:"8$"},{id:2,pageviews:"50k",perMouth:"12$"},{id:3,pageviews:"100k",perMouth:"16$"},{id:4,pageviews:"500k",perMouth:"24$"},{id:5,pageviews:"1M",perMouth:"36$"}],p=function(){var e=Object(c.useState)(1),t=Object(d.a)(e,2),i=t[0],r=t[1],n=Object(c.useState)({}),a=Object(d.a)(n,2),j=a[0],p=a[1];return Object(c.useEffect)((function(){var e=parseInt(i),t=u.filter((function(t){return t.id===e}));p(t[0])}),[i]),Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"Pricing",children:[Object(s.jsx)("input",{type:"range",className:"Pricing__range",value:i,list:"pricingmarks",min:"1",max:"5",step:"1",onChange:function(e){r(e.target.value)}}),Object(s.jsxs)("datalist",{id:"pricingmarks",children:[Object(s.jsx)("option",{value:"1"}),Object(s.jsx)("option",{value:"2"}),Object(s.jsx)("option",{value:"3"}),Object(s.jsx)("option",{value:"4"}),Object(s.jsx)("option",{value:"5"})]}),Object(s.jsx)("div",{className:"Pricing__select-price",children:j.perMouth})]})})};var l=function(){return Object(s.jsxs)("div",{className:"InteractivePricing",children:[Object(s.jsx)(j,{}),Object(s.jsx)(p,{})]})};a.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(l,{})}),document.getElementById("root"))},9:function(e,t,i){}},[[11,1,2]]]);
//# sourceMappingURL=main.fba3ba54.chunk.js.map