(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(12),s=n.n(i),r=(n(26),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))}),o=n(11),u=(n(27),n(1)),j=function(e){var t=e.value.title,n=e.value.score,c=e.value.by,a=e.value.time;return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"news",children:Object(u.jsxs)("ul",{children:[Object(u.jsxs)("div",{children:[" story by ",c,":"]}),Object(u.jsxs)("button",{className:"buttonUpdateS",onClick:e.useprops,children:["  ",t]}),Object(u.jsxs)("div",{children:[" rating : ",n]}),Object(u.jsxs)("div",{children:[" published time : ",function(e){var t=new Date(1e3*e),n=t.getFullYear(),c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()];return e=t.getDate()+" "+c+" "+n+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()}(a)]}),Object(u.jsxs)("div",{children:["comments: ",e.value.descendants]})]})})})},l=n(7),d=n(3),b={data:{}},h="ADD_NEWS_LIST",O=function(){return function(e){fetch("https://hacker-news.firebaseio.com/v0/newstories.json").then((function(e){return e.json()})).then((function(t){t=t.slice(0,100);var n={};Promise.all(t.map((function(t){fetch("https://hacker-news.firebaseio.com/v0/item/".concat(t,".json")).then((function(e){return e.json()})).then((function(c){n[t]=c,e({type:h,payload:n})}))})))}))}},f=(n(34),function(e){var t=Object(l.b)(),n=Object(l.c)((function(e){return e.data.data})),a=Object(c.useState)(0),i=Object(o.a)(a,2),s=(i[0],i[1],Object(c.useState)(!0)),r=Object(o.a)(s,2),d=r[0],b=r[1];function h(){t(O()),b(!0)}return Object(c.useEffect)((function(){t(O()),setInterval((function(){return h()}),6e4)}),[]),Object(c.useEffect)((function(){Object.keys(n).length>99&&b(!1)}),[n]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("div",{children:Object(u.jsx)("button",{className:"buttonUpdate",onClick:function(){h()},children:"Update list"})}),d?Object(u.jsx)("div",{className:"loading",children:"LOADING"}):Object.values(n).reverse().filter((function(e){return null!==e})).map((function(t){return Object(u.jsx)(j,{value:t,useprops:function(){e.history.push("".concat(t.id))}},t.id)}))]})}),v=n(21),p=n(2),m=(n(35),{data:{}}),x="ADD_COMMENT",g=function(e){return function(t){fetch("https://hacker-news.firebaseio.com/v0/item/".concat(e,".json")).then((function(e){return e.json()})).then((function(e){t({type:x,payload:e})}))}},y=function e(t){var n=Object(c.useState)(!1),a=Object(o.a)(n,2),i=a[0],s=a[1],r=Object(l.b)(),j=Object(l.c)((function(e){return e.comment.data}))[t.value];return Object(c.useEffect)((function(){r(g(t.value))}),[]),Object(u.jsx)("div",{children:j&&!j.deleted&&Object(u.jsxs)("div",{className:"Comment",children:[Object(u.jsxs)("h4",{children:["\u21b0 by: ",j.by," "]}),j.text,(j.kids||[]).length&&!i?Object(u.jsx)("button",{onClick:function(){s(!0)},children:"Show more"}):null,Object(u.jsxs)("div",{children:["       ",(j.kids||[]).length&&i?Object.values(j.kids).map((function(t){return Object(u.jsx)(e,{value:t},t)})):null]})]})})},k=(n(36),{data:{}}),D="ADD_ID_INFO",N=function(e){return function(t){fetch("https://hacker-news.firebaseio.com/v0/item/".concat(e,".json")).then((function(e){return e.json()})).then((function(e){t({type:D,payload:e})}))}},S=function(e){var t=Object(l.b)(),n=Object(l.c)((function(e){return e.ids.data}));Object(c.useEffect)((function(){t(N(e.match.params.value))}),[]);n.id;var a=n.title,i=(n.score,n.by),s=n.time,r=n.url;return Object(u.jsxs)("div",{className:"Page",children:[Object(u.jsx)("button",{className:"buttonUpdate",onClick:function(){return e.history.push("/")},children:"\u041d\u0430\u0437\u0430\u0434"}),Object(u.jsx)("a",{href:r,children:r}),Object(u.jsxs)("h2",{children:[" ",a]}),Object(u.jsxs)("div",{children:[" published time : ",function(e){var t=new Date(1e3*e),n=t.getFullYear(),c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()];return e=t.getDate()+" "+c+" "+n+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()}(s)]}),Object(u.jsx)("h3",{children:i}),Object(u.jsxs)("div",{children:["comments:",Object(u.jsx)("h1",{children:n.descendants})]}),Object(u.jsx)("h1",{children:"Comments"}),(n.kids||[]).length?Object.values(n.kids).map((function(e){return Object(u.jsx)(y,{value:e},e)})):null]})},w=function(e){return Object(u.jsx)(v.a,{children:Object(u.jsxs)(p.c,{children:[Object(u.jsx)(p.a,{exact:!0,path:"/",component:f}),Object(u.jsx)(p.a,{path:"/:value",component:S})]})})},M=n(10),C=n(19),A=n(20),F=Object(M.combineReducers)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;return t.type===h?Object(d.a)(Object(d.a)({},e),{},{data:Object(d.a)(Object(d.a)({},e.data),t.payload)}):e},ids:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;return t.type===D?Object(d.a)(Object(d.a)({},e),{},{data:Object(d.a)(Object(d.a)({},e.data),t.payload)}):e},comment:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;if(t.type===x){var n=Object(d.a)({},e.data);return n[t.payload.id]=t.payload,Object(d.a)(Object(d.a)({},e),{},{data:n})}return e}}),J=Object(M.createStore)(F,Object(C.composeWithDevTools)(Object(M.applyMiddleware)(A.a)));s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(l.a,{store:J,children:Object(u.jsx)(w,{})})}),document.getElementById("root")),r()}},[[41,1,2]]]);
//# sourceMappingURL=main.c2becd31.chunk.js.map