(this.webpackJsonpbinance_watch=this.webpackJsonpbinance_watch||[]).push([[0],{116:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),s=n(11),o=n.n(s),i=(n(88),n.p,n(89),n(17)),l=n.n(i),b=n(23),d=n(27),u=n(32),j=n(44),h=n(29),p=n.n(h),f="https://api.binance.com/api/v3",m=function(){return"".concat(f,"/exchangeInfo")},g=function(){return"".concat(f,"/aggTrades")},x=function(){var e=Object(b.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get(m());case 3:return t=e.sent,e.abrupt("return",t.data.symbols);case 7:return e.prev=7,e.t0=e.catch(0),console.log("------error",e.t0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(b.a)(l.a.mark((function e(t,n){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={symbol:t.toUpperCase(),limit:50},n&&(a.fromId=n),e.next=5,p.a.get(g(),{params:a});case 5:return r=e.sent,e.abrupt("return",r.data);case 9:return e.prev=9,e.t0=e.catch(0),console.log("-----error",e.t0),e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}(),v="wss://stream.binance.com:9443/ws/etheur@trade",y=function(e,t,n,a){var r=t.toLowerCase();if(e){for(var c=arguments.length,s=new Array(c>4?c-4:0),o=4;o<c;o++)s[o-4]=arguments[o];var i=s.map((function(e){return"depth"===e?"".concat(r,"@").concat(e).concat(n):"".concat(r,"@").concat(e)})),l={method:"UNSUBSCRIBE",params:i,id:a};e.send(JSON.stringify(l))}},S=function(e,t,n,a){var r=t.toLowerCase();if(e){for(var c=arguments.length,s=new Array(c>4?c-4:0),o=4;o<c;o++)s[o-4]=arguments[o];var i=s.map((function(e){return"depth"===e?"".concat(r,"@").concat(e).concat(n):"".concat(r,"@").concat(e)})),l={method:"SUBSCRIBE",params:i,id:a};e.send(JSON.stringify(l))}},k=function(e,t,n){t.push(e),t.splice(0,1),n(Object(j.a)(t))},w=function(e,t,n,a){e.onmessage=function(e){var r=JSON.parse(e.data);"aggTrade"===r.e?k(r,t,n):"asks"in r&&"bids"in r&&a(Object(u.a)({},r))}};var C=n(171),T=n(173),N=n(4);var A=function(e){var t=e.symbol,n=e.setSymbol,a=e.allSymbols;return Object(N.jsx)("div",{children:a&&a.length&&Object(N.jsx)(T.a,{id:"combo-box",value:t,options:a,getOptionLabel:function(e){return e},onChange:function(e,t){return n(t)},renderInput:function(e){return Object(N.jsx)(C.a,Object(u.a)(Object(u.a)({},e),{},{label:"Symbol Name",variant:"outlined"}))}})})},B=n(159),_=n(163),F=n(167),I=n(166),E=n(162),U=n(164),W=n(165),M=n(157),P=n(160),L=n(161),R=Object(B.a)((function(e){return{toolbar:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,borderWidth:"1px",borderStyle:"solid"}}}));var z=function(e){var t=e.title,n=R();return Object(N.jsx)(P.a,{className:n.toolbar,children:Object(N.jsx)(L.a,{className:n.title,variant:"h6",id:"tableTitle",component:"div",children:t})})},J=n(172),H=Object(B.a)({table:{}});var q=function(e){var t=e.aggTrades,n=e.symbolObj,a=H(),r=Object(j.a)(t).reverse();return Object(N.jsxs)(M.a,{children:[Object(N.jsx)(z,{title:"Aggregate Trade"}),Object(N.jsx)(E.a,{component:M.a,children:Object(N.jsxs)(_.a,{size:"small",className:a.table,"aria-label":"AggTrades table",children:[Object(N.jsx)(U.a,{children:Object(N.jsxs)(W.a,{children:[Object(N.jsx)(I.a,{children:"Time"}),Object(N.jsxs)(I.a,{align:"right",children:["Price\xa0(",n.quoteAsset,")"]}),Object(N.jsxs)(I.a,{align:"right",children:["Amount\xa0(",n.baseAsset,")"]})]})}),Object(N.jsx)(F.a,{children:r.map((function(e,t){return Object(N.jsxs)(W.a,{children:[Object(N.jsx)(I.a,{component:"th",scope:"row",children:Object(J.a)(new Date(e.T),"HH:mm:ss")}),Object(N.jsx)(I.a,{align:"right",children:e.p}),Object(N.jsx)(I.a,{align:"right",children:e.q})]},e.a)}))})]})})]})},D=Object(B.a)((function(e){return{root:{fontSize:"200pt",borderRadius:0,width:"auto",borderWidth:"1px 1px 0 1px",borderStyle:"solid"},table:{fontSize:"200pt"},firstCol:{width:"50px"},bids_first:{background:"#08bdb4",width:"50px"},asks_first:{background:"#f0246b",width:"50px"},title:{flex:"1 1 100%"},tableCell:{fontSize:"0.5rem"},tableCell_bids:{color:"#08bdb4"},tableCell_asks:{color:"#f0246b"},paper:{borderWidth:"1px",borderStyle:"solid"}}}));var Q=function(e){var t=e.pbd,n=e.symbolObj,a=Object(r.useMemo)((function(){if(!t||!t.bids)return{bids:[],asks:[]};var e=t.bids,n=t.asks;return e.sort((function(e,t){return t[0]-e[0]})),n.sort((function(e,t){return t[0]-e[0]})),{bids:e,asks:n}}),[t]),c=a.bids,s=a.asks,o=D();return t&&t.bids?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(z,{title:"Partial Book Depth"}),Object(N.jsx)(E.a,{component:M.a,className:o.root,children:Object(N.jsxs)(_.a,{size:"small",className:o.table,"aria-label":"AggTrades table",children:[Object(N.jsx)(U.a,{children:Object(N.jsxs)(W.a,{children:[Object(N.jsx)(I.a,{align:"center",children:"Quotation"}),Object(N.jsxs)(I.a,{align:"right",children:["Price\xa0(",n.quoteAsset,")"]}),Object(N.jsxs)(I.a,{align:"right",children:["Amount\xa0(",n.baseAsset,")"]})]})}),Object(N.jsxs)(F.a,{children:[Object(N.jsx)(W.a,{children:Object(N.jsx)(I.a,{component:"th",scope:"row",className:o.asks_first,rowSpan:s.length+1,align:"center",children:"Asks"})}),s.map((function(e,t){return Object(N.jsxs)(W.a,{children:[Object(N.jsx)(I.a,{align:"right",className:"".concat(o.tableCell," ").concat(o.tableCell_asks),children:e[0]}),Object(N.jsx)(I.a,{align:"right",className:o.tableCell,children:e[1]})]},"asks_".concat(t))})),Object(N.jsx)(W.a,{children:Object(N.jsx)(I.a,{component:"th",scope:"row",className:o.bids_first,rowSpan:c.length+1,align:"center",children:"Bids"})}),c.map((function(e,t){return Object(N.jsxs)(W.a,{children:[Object(N.jsx)(I.a,{align:"right",className:"".concat(o.tableCell," ").concat(o.tableCell_bids),children:e[0]}),Object(N.jsx)(I.a,{align:"right",className:o.tableCell,children:e[1]})]},"bids_".concat(t))}))]})]})})]}):Object(N.jsx)(N.Fragment,{})},G=n(169),K=n(168);var V=function(){var e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,c=Object(r.useState)(null),s=Object(d.a)(c,2),o=s[0],i=s[1],u=Object(r.useState)({symbol:e}),j=Object(d.a)(u,2),h=j[0],p=j[1],f=Object(r.useState)([]),m=Object(d.a)(f,2),g=m[0],C=m[1],T=Object(r.useState)([]),N=Object(d.a)(T,2),A=N[0],B=N[1],_=Object(r.useState)({}),F=Object(d.a)(_,2),I=F[0],E=F[1],U=function(){return O(h.symbol)};Object(r.useEffect)((function(){var e=new WebSocket(v);return e.onopen=function(){return S(e,h.symbol,n,t,"aggTrade","depth")},i(e),x().then((function(e){C(e),W(h.symbol,e)})),U().then((function(t){B(t),w(e,t,B,E)})),function(){e.close(),i(null)}}),[]),Object(r.useEffect)(Object(b.a)(l.a.mark((function e(){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(B([]),E({}),!o){e.next=17;break}return o.onmessage=function(){},a&&y(o,a.symbol,n,t,"aggTrade","depth"),S(o,h.symbol,n,t,"aggTrade","depth"),e.prev=6,e.next=9,U();case 9:r=e.sent,B(r),w(o,r,B,E),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(6),console.log("------error",e.t0);case 17:case"end":return e.stop()}}),e,null,[[6,14]])}))),[h.symbol]);var W=function(e,t){var n;e&&(a=h,(n=t?t.find((function(t){return t.symbol===e.toUpperCase()})):g.find((function(t){return t.symbol===e.toUpperCase()})))&&p(n))};return{symbolObj:h,changeSymbol:W,allSymbols:g,updateAggTrades:k,aggTrades:A,pbd:I}}("ETHBTC",2),t=e.symbolObj,n=e.changeSymbol,c=e.allSymbols,s=e.aggTrades,o=e.pbd;return Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{children:"Binance Watch"}),Object(N.jsxs)(K.a,{container:!0,spacing:2,children:[Object(N.jsx)(K.a,{item:!0,xs:12,children:Object(N.jsx)(A,{symbol:t.symbol,setSymbol:n,allSymbols:c.map((function(e){return e.symbol.toUpperCase()}))})}),Object(N.jsx)(K.a,{item:!0,xs:12,md:6,lg:4,children:o&&o.asks?Object(N.jsx)(Q,{pbd:o,symbolObj:t}):Object(N.jsxs)(K.a,{container:!0,justifyContent:"center",children:[Object(N.jsx)(K.a,{item:!0,children:Object(N.jsx)(G.a,{color:"secondary"})}),Object(N.jsxs)(K.a,{item:!0,xs:12,children:[Object(N.jsx)("p",{children:"# Some Products have slow depth response."}),Object(N.jsx)("p",{children:"# Please be patient or try something else!"})]})]})}),Object(N.jsx)(K.a,{item:!0,xs:12,md:6,lg:8,children:Object(N.jsx)(q,{aggTrades:s,symbolObj:t})})]})]})},X=n(70),Y=n(170),Z=Object(X.a)({breakpoints:{values:{xs:0,sm:432,md:960,lg:1280,xl:1920}},palette:{text:"#ffffff",background:"rgb(22, 26, 30)",primary:{light:"#5e92f3",main:"#1565c0",dark:"#003c8f",contrastText:"#ffffff"},secondary:{light:"#82e9de",main:"#4db6ac",dark:"#00867d",contrastText:"#ffffff"},third:{light:"#ffffff",main:"#e0e0e0",dark:"#aeaeae",contrastText:"#303030"},error:{light:"#e57373",main:"#f44336",dark:"#d32f2f",contrastText:"#fff"}},brand_icon:{512:"assets/burn-512.png"},typography:{fontFamily:["Noto Sans TC","Roboto","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),fontWeightLight:400,fontWeightRegular:500,fontWeightMedium:600,fontWeightBold:700},spot_background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",overrides:{MuiTextField:{root:{color:"yellow","& fieldset":{borderColor:"white"}}},MuiAutocomplete:{root:{},popupIndicator:{background:"white","&:hover":{background:"white"}},popper:{background:"rgb(22, 26, 30)",boxShadow:"0 1px 6px 2px white"}}},props:{MuiIconButton:{}}});var $=function(){return Object(N.jsx)("div",{className:"App",children:Object(N.jsx)(Y.a,{theme:Z,children:Object(N.jsx)(V,{})})})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,174)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};o.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)($,{})}),document.getElementById("root")),ee()},88:function(e,t,n){},89:function(e,t,n){}},[[116,1,2]]]);
//# sourceMappingURL=main.9c88f9cd.chunk.js.map