(this.webpackJsonpbinance_watch=this.webpackJsonpbinance_watch||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(4),o=n.n(r),s=(n(20),n.p,n(21),n(9)),i=n(42),u=n(2);var b=function(){var e,t=Object(c.useState)(""),n=Object(s.a)(t,2),a=n[0],r=n[1],o=Object(c.useState)("black"),b=Object(s.a)(o,2),l=b[0],d=b[1];return Object(c.useEffect)((function(){var t=new WebSocket("wss://stream.binance.com:9443/ws/etheur@trade");return t.onmessage=function(t){var n=JSON.parse(t.data),c=parseFloat(n.p).toFixed(2);r(c),d(e&&e!==c&&c>e?"red":"black"),e=c,console.log(n,e)},function(){t.close("Disconnected")}}),[]),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{style:{color:l},children:a}),Object(u.jsx)(i.a,{color:"primary",variant:"contained",children:"Hello World"})]})};var l=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(b,{})})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(l,{})}),document.getElementById("root")),d()}},[[27,1,2]]]);
//# sourceMappingURL=main.f87aa031.chunk.js.map