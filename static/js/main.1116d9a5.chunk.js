(this["webpackJsonpfrontend-challenge"]=this["webpackJsonpfrontend-challenge"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),i=c(17),s=c.n(i),r=c(13),l=c(9),u=c(8),o=c(2),j=(c(23),c(24),c(25),c(26),c(1));var f=function(e){var t=e.activeState,c=e.itemText,n=e.handleClick,a=t?"nav__item_active":"";return Object(j.jsx)("button",{className:"nav__item ".concat(a),onClick:n,children:c})};var b=function(e){var t=e.path,c=e.handleAllCatsClick,a=e.handleLikedCatsClick,i=Object(n.useState)(!1),s=Object(u.a)(i,2),r=s[0],l=s[1],o=Object(n.useState)(!1),b=Object(u.a)(o,2),d=b[0],h=b[1],O=Object(n.useCallback)((function(){"/all-cats"===t&&(l(!0),h(!1)),"/liked-cats"===t&&(h(!0),l(!1)),"/not-found"===t&&(h(!1),l(!1))}),[t]);return Object(n.useEffect)((function(){O()}),[O]),Object(j.jsxs)("nav",{className:"nav",children:[Object(j.jsx)(f,{activeState:r,handleClick:c,itemText:"\u0412\u0441\u0435 \u043a\u043e\u0442\u0438\u043a\u0438"}),Object(j.jsx)(f,{activeState:d,handleClick:a,itemText:"\u041b\u044e\u0431\u0438\u043c\u044b\u0435 \u043a\u043e\u0442\u0438\u043a\u0438"})]})};var d=function(e){var t=e.path,c=e.handleAllCatsClick,n=e.handleLikedCatsClick;return Object(j.jsx)("header",{className:"header",children:Object(j.jsx)(b,{path:t,handleAllCatsClick:c,handleLikedCatsClick:n})})};c(28),c(29),c(30),c(31);var h=function(){return Object(j.jsx)("button",{className:"like-button"})};var O=function(e){var t=e.image;return Object(j.jsx)("li",{className:"card",style:{backgroundImage:"url(".concat(t.url,")")},children:Object(j.jsx)(h,{})})};c(32);var m=function(){return Object(j.jsx)("p",{className:"more-cats-loading",children:"... \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c \u0435\u0449\u0435 \u043a\u043e\u0442\u0438\u043a\u043e\u0432 ..."})},g=a.a.forwardRef((function(e,t){var c=e.imgData;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("ul",{className:"card-list",children:c.images.map((function(e,t){return Object(j.jsx)(O,{image:e},t)}))}),c.fetching&&Object(j.jsx)(m,{}),Object(j.jsx)("div",{className:"card-list__bottom-boundary",ref:t})]})})),p=a.a.forwardRef((function(e,t){var c=e.imgData;return Object(j.jsx)(g,{imgData:c,ref:t})})),x=(c(33),c.p+"static/media/cat-back.993e5cf9.svg");var v=function(){return Object(j.jsxs)("div",{className:"notfound",children:[Object(j.jsx)("h2",{className:"notfound__heading",children:"404"}),Object(j.jsx)("p",{className:"notfound__paragraph",children:"\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"}),Object(j.jsx)("img",{className:"notfound__image",src:x,alt:"\u043a\u043e\u0442\u0438\u043a"})]})};var C=function(){var e=Object(o.g)(),t=Object(n.useState)("/"),c=Object(u.a)(t,2),a=c[0],i=c[1],s=Object(n.useReducer)((function(e,t){switch(t.type){case"STACK_IMAGES":return Object(l.a)(Object(l.a)({},e),{},{images:e.images.concat(t.images)});case"FETCHING_IMAGES":return Object(l.a)(Object(l.a)({},e),{},{fetching:t.fetching});default:return e}}),{images:[],fetching:!0}),r=Object(u.a)(s,2),f=r[0],b=r[1],h=Object(n.useReducer)((function(e,t){switch(t.type){case"ADVANCE_PAGE":return Object(l.a)(Object(l.a)({},e),{},{page:e.page+1});default:return e}}),{page:0}),O=Object(u.a)(h,2),m=O[0],g=O[1];Object(n.useEffect)((function(){b({type:"FETCHING_IMAGES",fetching:!0}),fetch("https://api.thecatapi.com/v1/images/search?limit=9&page=".concat(m.page,"&order=Desc")).then((function(e){return e.json()})).then((function(e){b({type:"STACK_IMAGES",images:e}),b({type:"FETCHING_IMAGES",fetching:!1})})).catch((function(e){return b({type:"FETCHING_IMAGES",fetching:!1}),e}))}),[b,m.page]);var x=Object(n.useRef)(null),C=Object(n.useCallback)((function(e){new IntersectionObserver((function(e){e.forEach((function(e){e.intersectionRatio>0&&g({type:"ADVANCE_PAGE"})}))})).observe(e)}),[g]);return Object(n.useEffect)((function(){x.current&&C(x.current)}),[C,x]),Object(n.useEffect)((function(){i(e.location.pathname)}),[e]),Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(d,{path:a,handleAllCatsClick:function(){e.push("/all-cats"),i("/all-cats")},handleLikedCatsClick:function(){e.push("/liked-cats"),i("/liked-cats")}}),Object(j.jsxs)(o.d,{children:[Object(j.jsx)(o.a,{exact:!0,from:"/",to:"/all-cats"}),Object(j.jsx)(o.b,{path:"/all-cats",children:Object(j.jsx)(p,{imgData:f,ref:x})}),Object(j.jsx)(o.b,{path:"/liked-cats",children:Object(j.jsx)("div",{children:"/liked-cats"})}),Object(j.jsx)(o.b,{path:"/not-found",children:Object(j.jsx)(v,{})}),Object(j.jsx)(o.a,{from:"*",to:"/not-found"})]})]})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,40)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),i(e),s(e)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(r.a,{basemname:"/".concat("/frontend-challenge"),children:Object(j.jsx)(C,{})})}),document.getElementById("root")),k()}},[[39,1,2]]]);
//# sourceMappingURL=main.1116d9a5.chunk.js.map