(this["webpackJsonpfrontend-challenge"]=this["webpackJsonpfrontend-challenge"]||[]).push([[0],{27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(19),s=a.n(i),l=a(15),r=a(9),o=a(22),d=a(7),u=a(2),j=a(20),h=(a(27),a(28),a(29),a(30),a(1));var f=function(e){var t=e.activeState,a=e.itemText,c=e.handleClick,n=t?"nav__item_active":"";return Object(h.jsx)("button",{className:"nav__item ".concat(n),onClick:c,children:a})};var b=function(e){var t=e.path,a=e.handleAllCatsClick,n=e.handleLikedCatsClick,i=Object(c.useState)(!1),s=Object(d.a)(i,2),l=s[0],r=s[1],o=Object(c.useState)(!1),u=Object(d.a)(o,2),j=u[0],b=u[1],O=Object(c.useCallback)((function(){"/all-cats"===t&&(r(!0),b(!1),console.log("all-cats")),"/liked-cats"===t&&(b(!0),r(!1),console.log("liked-cats")),"/not-found"===t&&(b(!1),r(!1),console.log("not found")),console.log(t)}),[t]);return Object(c.useEffect)((function(){O()}),[O]),Object(h.jsxs)("nav",{className:"nav",children:[Object(h.jsx)(f,{activeState:l,handleClick:a,itemText:"\u0412\u0441\u0435 \u043a\u043e\u0442\u0438\u043a\u0438"}),Object(h.jsx)(f,{activeState:j,handleClick:n,itemText:"\u041b\u044e\u0431\u0438\u043c\u044b\u0435 \u043a\u043e\u0442\u0438\u043a\u0438"})]})};var O=function(e){var t=e.path,a=e.handleAllCatsClick,c=e.handleLikedCatsClick;return Object(h.jsx)("header",{className:"header",children:Object(h.jsx)(b,{path:t,handleAllCatsClick:a,handleLikedCatsClick:c})})};a(32),a(33),a(34),a(35);var k=function(e){var t=e.handleLike,a=e.isLiked?"like-button_active":"";return Object(h.jsx)("button",{className:"like-button ".concat(a),onClick:t})};var m=function(e){var t=e.cardItem,a=e.handleLike,n=e.handleDislike,i=e.savedCards,s=e.path,l=Object(c.useState)(!1),r=Object(d.a)(l,2),o=r[0],u=r[1],j=Object(c.useCallback)((function(){var e=i.some((function(e){return e.id===t.id}));u(!!e)}),[]);return Object(c.useEffect)((function(){j()}),[j,s]),Object(h.jsx)("li",{className:"card",style:{backgroundImage:"url(".concat(t.url,")")},children:Object(h.jsx)(k,{handleLike:function(){j(),o?(u(!1),n(t)):(u(!0),a(t))},isLiked:o})})};a(36);var v=function(){return Object(h.jsx)("p",{className:"more-cats-loading",children:"... \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c \u0435\u0449\u0435 \u043a\u043e\u0442\u0438\u043a\u043e\u0432 ..."})},g=n.a.forwardRef((function(e,t){var a=e.imgData,c=e.handleLike,n=e.handleDislike,i=e.savedCards,s=e.path;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("ul",{className:"card-list",children:a.images.map((function(e,t){return Object(h.jsx)(m,{path:s,cardItem:e,handleLike:c,handleDislike:n,savedCards:i},t)}))}),a.fetching&&Object(h.jsx)(v,{}),Object(h.jsx)("div",{className:"card-list__bottom-boundary",ref:t})]})})),p=n.a.forwardRef((function(e,t){var a=e.imgData,c=e.handleLike,n=e.handleDislike,i=e.savedCards,s=e.path;return Object(h.jsx)(g,{path:s,handleLike:c,handleDislike:n,imgData:a,ref:t,savedCards:i})})),C=function(e){var t=e.path,a=e.catData,c=e.handleLike,n=e.handleDislike,i=e.savedCards;return Object(h.jsx)("ul",{className:"card-list",children:a.map((function(e,a){return Object(h.jsx)(m,{path:t,cardItem:e,handleLike:c,handleDislike:n,savedCards:i},a)}))})},x=(a(37),a.p+"static/media/cat-back.993e5cf9.svg");var E=function(){return Object(h.jsxs)("div",{className:"notfound",children:[Object(h.jsx)("h2",{className:"notfound__heading",children:"404"}),Object(h.jsx)("p",{className:"notfound__paragraph",children:"\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"}),Object(h.jsx)("img",{className:"notfound__image",src:x,alt:"\u043a\u043e\u0442\u0438\u043a"})]})};var _=function(){var e=Object(u.g)(),t=Object(c.useState)("/"),a=Object(d.a)(t,2),n=a[0],i=a[1],s=Object(c.useState)([]),l=Object(d.a)(s,2),f=l[0],b=l[1],k=new j.a("savedCatsDB");k.version(1).stores({cats:"++id, catId, url"}),k.open().catch((function(e){console.log(e)}));var m=Object(c.useCallback)((function(){k.cats.toArray().then((function(e){b(e)}))}),[]),v=function(e){var t={id:e.id,catId:e.id,url:e.url};console.log(t),k.cats.add(t).then((function(){var e=[t].concat(Object(o.a)(f));b(e),console.log(f)}))},g=function(e){k.cats.delete(e.id).then((function(){var t=f.filter((function(t){return t.id!==e.id}));b(t)}))},x=Object(c.useReducer)((function(e,t){switch(t.type){case"STACK_IMAGES":return Object(r.a)(Object(r.a)({},e),{},{images:e.images.concat(t.images)});case"FETCHING_IMAGES":return Object(r.a)(Object(r.a)({},e),{},{fetching:t.fetching});default:return e}}),{images:[],fetching:!0}),_=Object(d.a)(x,2),N=_[0],A=_[1],D=Object(c.useReducer)((function(e,t){switch(t.type){case"ADVANCE_PAGE":return Object(r.a)(Object(r.a)({},e),{},{page:e.page+1});default:return e}}),{page:0}),I=Object(d.a)(D,2),L=I[0],S=I[1],G=Object(c.useRef)(null),y=Object(c.useCallback)((function(e){new IntersectionObserver((function(e){e.forEach((function(e){e.intersectionRatio>0&&S({type:"ADVANCE_PAGE"})}))})).observe(e)}),[S]);return Object(c.useEffect)((function(){A({type:"FETCHING_IMAGES",fetching:!0}),fetch("https://api.thecatapi.com/v1/images/search?limit=15&page=".concat(L.page)).then((function(e){return e.json()})).then((function(e){A({type:"STACK_IMAGES",images:e}),A({type:"FETCHING_IMAGES",fetching:!1})})).catch((function(e){return A({type:"FETCHING_IMAGES",fetching:!1}),e}))}),[A,L.page]),Object(c.useEffect)((function(){G.current&&y(G.current)}),[y,G]),Object(c.useEffect)((function(){m()}),[m]),Object(c.useEffect)((function(){i(e.location.pathname)}),[e,n]),Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)(O,{path:n,handleAllCatsClick:function(){e.push("/all-cats"),i("/all-cats")},handleLikedCatsClick:function(){e.push("/liked-cats"),i("/liked-cats")}}),Object(h.jsxs)(u.d,{children:[Object(h.jsx)(u.a,{exact:!0,from:"/",to:"/all-cats"}),Object(h.jsx)(u.b,{path:"/all-cats",children:Object(h.jsx)(p,{path:n,imgData:N,ref:G,handleLike:v,handleDislike:g,savedCards:f})}),Object(h.jsx)(u.b,{path:"/liked-cats",children:Object(h.jsx)(C,{path:n,handleLike:v,handleDislike:g,savedCards:f,catData:f})}),Object(h.jsx)(u.b,{path:"/not-found",children:Object(h.jsx)(E,{})}),Object(h.jsx)(u.a,{from:"*",to:"/not-found"})]})]})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,44)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),i(e),s(e)}))};s.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(l.a,{basename:"/frontend-challenge",children:Object(h.jsx)(_,{})})}),document.getElementById("root")),N()}},[[43,1,2]]]);
//# sourceMappingURL=main.460f9be7.chunk.js.map