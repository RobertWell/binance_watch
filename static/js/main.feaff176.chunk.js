(this.webpackJsonpbinance_watch=this.webpackJsonpbinance_watch||[]).push([[0],{116:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),s=n(11),o=n.n(s),i=(n(88),n.p,n(89),n(14)),l=n.n(i),b=n(19),u=n(29),d=n(24),j=n(44),p=n(23),h=n.n(p),f="https://api.binance.com/api/v3",m=function(){return"".concat(f,"/exchangeInfo")},g=function(){return"".concat(f,"/aggTrades")},O=function(){return"".concat(f,"/depth")},x=function(){var e=Object(b.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get(m());case 3:return t=e.sent,e.abrupt("return",t.data.symbols);case 7:return e.prev=7,e.t0=e.catch(0),console.log("------error",e.t0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(b.a)(l.a.mark((function e(t,n){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={symbol:t.toUpperCase(),limit:50},n&&(a.fromId=n),e.next=5,h.a.get(g(),{params:a});case 5:return r=e.sent,e.abrupt("return",r.data);case 9:return e.prev=9,e.t0=e.catch(0),console.log("-----error",e.t0),e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}(),y=function(){var e=Object(b.a)(l.a.mark((function e(t,n){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={symbol:t.toUpperCase(),limit:10},n&&(a.fromId=n),e.next=5,h.a.get(O(),{params:a});case 5:return r=e.sent,e.abrupt("return",r.data);case 9:return e.prev=9,e.t0=e.catch(0),console.log("-----error",e.t0),e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}(),S="wss://stream.binance.com:9443/ws/etheur@trade",k=function(e,t,n,a){var r=t.toLowerCase();if(e){for(var c=arguments.length,s=new Array(c>4?c-4:0),o=4;o<c;o++)s[o-4]=arguments[o];var i=s.map((function(e){return"depth"===e?"".concat(r,"@").concat(e).concat(n):"".concat(r,"@").concat(e)})),l={method:"UNSUBSCRIBE",params:i,id:a};e.send(JSON.stringify(l))}},w=function(e,t,n,a){var r=t.toLowerCase();if(e){for(var c=arguments.length,s=new Array(c>4?c-4:0),o=4;o<c;o++)s[o-4]=arguments[o];var i=s.map((function(e){return"depth"===e?"".concat(r,"@").concat(e).concat(n):"".concat(r,"@").concat(e)})),l={method:"SUBSCRIBE",params:i,id:a};e.send(JSON.stringify(l))}},C=function(e,t,n){t.push(e),t.splice(0,1),n(Object(j.a)(t))},T=function(e,t,n,a){e.onmessage=function(e){var r=JSON.parse(e.data);"aggTrade"===r.e?C(r,t,n):"asks"in r&&"bids"in r&&a(Object(d.a)({},r))}};var N=n(171),A=n(173),B=n(4);var _=function(e){var t=e.symbol,n=e.setSymbol,a=e.allSymbols;return Object(B.jsx)("div",{children:a&&a.length&&Object(B.jsx)(A.a,{id:"combo-box",value:t,options:a,getOptionLabel:function(e){return e},onChange:function(e,t){return n(t)},renderInput:function(e){return Object(B.jsx)(N.a,Object(d.a)(Object(d.a)({},e),{},{label:"Symbol Name",variant:"outlined"}))}})})},I=n(159),F=n(163),U=n(167),E=n(166),W=n(162),M=n(164),P=n(165),L=n(157),R=n(160),z=n(161),J=Object(I.a)((function(e){return{toolbar:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,borderWidth:"1px",borderStyle:"solid"}}}));var H=function(e){var t=e.title,n=J();return Object(B.jsx)(R.a,{className:n.toolbar,children:Object(B.jsx)(z.a,{className:n.title,variant:"h6",id:"tableTitle",component:"div",children:t})})},q=n(172),D=Object(I.a)({table:{}});var Q=function(e){var t=e.aggTrades,n=e.symbolObj,a=D(),r=Object(j.a)(t).reverse();return Object(B.jsxs)(L.a,{children:[Object(B.jsx)(H,{title:"Aggregate Trade"}),Object(B.jsx)(W.a,{component:L.a,children:Object(B.jsxs)(F.a,{size:"small",className:a.table,"aria-label":"AggTrades table",children:[Object(B.jsx)(M.a,{children:Object(B.jsxs)(P.a,{children:[Object(B.jsx)(E.a,{children:"Time"}),Object(B.jsxs)(E.a,{align:"right",children:["Price\xa0(",n.quoteAsset,")"]}),Object(B.jsxs)(E.a,{align:"right",children:["Amount\xa0(",n.baseAsset,")"]})]})}),Object(B.jsx)(U.a,{children:r.map((function(e,t){return Object(B.jsxs)(P.a,{children:[Object(B.jsx)(E.a,{component:"th",scope:"row",children:Object(q.a)(new Date(e.T),"HH:mm:ss")}),Object(B.jsx)(E.a,{align:"right",children:e.p}),Object(B.jsx)(E.a,{align:"right",children:e.q})]},e.a)}))})]})})]})},G=Object(I.a)((function(e){return{root:{fontSize:"200pt",borderRadius:0,width:"auto",borderWidth:"1px 1px 0 1px",borderStyle:"solid"},table:{fontSize:"200pt"},firstCol:{width:"50px"},bids_first:{background:"#08bdb4",width:"50px"},asks_first:{background:"#f0246b",width:"50px"},title:{flex:"1 1 100%"},tableCell:{fontSize:"0.5rem"},tableCell_bids:{color:"#08bdb4"},tableCell_asks:{color:"#f0246b"},paper:{borderWidth:"1px",borderStyle:"solid"}}}));var K=function(e){var t=e.pbd,n=e.symbolObj,a=Object(r.useMemo)((function(){if(!t||!t.bids)return{bids:[],asks:[]};var e=t.bids,n=t.asks;return e.sort((function(e,t){return t[0]-e[0]})),n.sort((function(e,t){return t[0]-e[0]})),{bids:e,asks:n}}),[t]),c=a.bids,s=a.asks,o=G();return t&&t.bids?Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(H,{title:"Partial Book Depth"}),Object(B.jsx)(W.a,{component:L.a,className:o.root,children:Object(B.jsxs)(F.a,{size:"small",className:o.table,"aria-label":"AggTrades table",children:[Object(B.jsx)(M.a,{children:Object(B.jsxs)(P.a,{children:[Object(B.jsx)(E.a,{align:"center",children:"Quotation"}),Object(B.jsxs)(E.a,{align:"right",children:["Price\xa0(",n.quoteAsset,")"]}),Object(B.jsxs)(E.a,{align:"right",children:["Amount\xa0(",n.baseAsset,")"]})]})}),Object(B.jsxs)(U.a,{children:[Object(B.jsx)(P.a,{children:Object(B.jsx)(E.a,{component:"th",scope:"row",className:o.asks_first,rowSpan:s.length+1,align:"center",children:"Asks"})}),s.map((function(e,t){return Object(B.jsxs)(P.a,{children:[Object(B.jsx)(E.a,{align:"right",className:"".concat(o.tableCell," ").concat(o.tableCell_asks),children:e[0]}),Object(B.jsx)(E.a,{align:"right",className:o.tableCell,children:e[1]})]},"asks_".concat(t))})),Object(B.jsx)(P.a,{children:Object(B.jsx)(E.a,{component:"th",scope:"row",className:o.bids_first,rowSpan:c.length+1,align:"center",children:"Bids"})}),c.map((function(e,t){return Object(B.jsxs)(P.a,{children:[Object(B.jsx)(E.a,{align:"right",className:"".concat(o.tableCell," ").concat(o.tableCell_bids),children:e[0]}),Object(B.jsx)(E.a,{align:"right",className:o.tableCell,children:e[1]})]},"bids_".concat(t))}))]})]})})]}):Object(B.jsx)(B.Fragment,{})},V=n(169),X=n(168);var Y=function(){var e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,c=Object(r.useState)(null),s=Object(u.a)(c,2),o=s[0],i=s[1],j=Object(r.useState)({symbol:e}),p=Object(u.a)(j,2),h=p[0],f=p[1],m=Object(r.useState)([]),g=Object(u.a)(m,2),O=g[0],N=g[1],A=Object(r.useState)([]),B=Object(u.a)(A,2),_=B[0],I=B[1],F=Object(r.useState)({}),U=Object(u.a)(F,2),E=U[0],W=U[1];Object(r.useEffect)((function(){var e=new WebSocket(S);return e.onopen=function(){return w(e,h.symbol,n,t,"aggTrade","depth")},i(e),x().then((function(e){N(e),M(h.symbol,e)})),v(h.symbol).then((function(t){I(t),T(e,t,I,W)})),y(h.symbol).then((function(e){W(Object(d.a)({},e))})),function(){e.close(),i(null)}}),[]),Object(r.useEffect)(Object(b.a)(l.a.mark((function e(){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(I([]),y(h.symbol).then((function(e){W(Object(d.a)({},e))})),!o){e.next=17;break}return o.onmessage=function(){},a&&k(o,a.symbol,n,t,"aggTrade","depth"),w(o,h.symbol,n,t,"aggTrade","depth"),e.prev=6,e.next=9,v(h.symbol);case 9:r=e.sent,I(r),T(o,r,I,W),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(6),console.log("------error",e.t0);case 17:case"end":return e.stop()}}),e,null,[[6,14]])}))),[h.symbol]);var M=function(e,t){var n;e&&(a=h,(n=t?t.find((function(t){return t.symbol===e.toUpperCase()})):O.find((function(t){return t.symbol===e.toUpperCase()})))&&f(n))};return{symbolObj:h,changeSymbol:M,allSymbols:O,updateAggTrades:C,aggTrades:_,pbd:E}}("ETHBTC",2),t=e.symbolObj,n=e.changeSymbol,c=e.allSymbols,s=e.aggTrades,o=e.pbd;return Object(B.jsxs)("div",{children:[Object(B.jsx)("h2",{children:"Binance Watch"}),Object(B.jsxs)(X.a,{container:!0,spacing:2,children:[Object(B.jsx)(X.a,{item:!0,xs:12,children:Object(B.jsx)(_,{symbol:t.symbol,setSymbol:n,allSymbols:c.map((function(e){return e.symbol.toUpperCase()}))})}),Object(B.jsx)(X.a,{item:!0,xs:12,md:6,lg:4,children:o&&o.asks?Object(B.jsx)(K,{pbd:o,symbolObj:t}):Object(B.jsxs)(X.a,{container:!0,justifyContent:"center",children:[Object(B.jsx)(X.a,{item:!0,children:Object(B.jsx)(V.a,{color:"secondary"})}),Object(B.jsxs)(X.a,{item:!0,xs:12,children:[Object(B.jsx)("p",{children:"# Some Products have slow depth response."}),Object(B.jsx)("p",{children:"# Please be patient or try something else!"})]})]})}),Object(B.jsx)(X.a,{item:!0,xs:12,md:6,lg:8,children:Object(B.jsx)(Q,{aggTrades:s,symbolObj:t})})]})]})},Z=n(70),$=n(170),ee=Object(Z.a)({breakpoints:{values:{xs:0,sm:432,md:960,lg:1280,xl:1920}},palette:{text:"#ffffff",background:"rgb(22, 26, 30)",primary:{light:"#5e92f3",main:"#1565c0",dark:"#003c8f",contrastText:"#ffffff"},secondary:{light:"#82e9de",main:"#4db6ac",dark:"#00867d",contrastText:"#ffffff"},third:{light:"#ffffff",main:"#e0e0e0",dark:"#aeaeae",contrastText:"#303030"},error:{light:"#e57373",main:"#f44336",dark:"#d32f2f",contrastText:"#fff"}},brand_icon:{512:"assets/burn-512.png"},typography:{fontFamily:["Noto Sans TC","Roboto","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),fontWeightLight:400,fontWeightRegular:500,fontWeightMedium:600,fontWeightBold:700},spot_background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",overrides:{MuiTextField:{root:{color:"yellow","& fieldset":{borderColor:"white"}}},MuiAutocomplete:{root:{},popupIndicator:{background:"white","&:hover":{background:"white"}},popper:{background:"rgb(22, 26, 30)",boxShadow:"0 1px 6px 2px white"}}},props:{MuiIconButton:{}}});var te=function(){return Object(B.jsx)("div",{className:"App",children:Object(B.jsx)($.a,{theme:ee,children:Object(B.jsx)(Y,{})})})},ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,174)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};o.a.render(Object(B.jsx)(c.a.StrictMode,{children:Object(B.jsx)(te,{})}),document.getElementById("root")),ne()},88:function(e,t,n){},89:function(e,t,n){}},[[116,1,2]]]);
//# sourceMappingURL=main.feaff176.chunk.js.map