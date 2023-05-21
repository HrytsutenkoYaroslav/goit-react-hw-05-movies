"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[137],{6815:function(n,e,r){r.d(e,{Fg:function(){return v},HC:function(){return x},NZ:function(){return l},PP:function(){return p},aV:function(){return d}});var t,a,o,u,c,i=r(168),s=r(6444),f=r(1087),p=s.ZP.section(t||(t=(0,i.Z)(["\n  padding: 0 50px;\n"]))),l=s.ZP.h2(a||(a=(0,i.Z)(["\n  margin: 30px 0;\n  padding-left: 5px;\n  font-size: 30px;\n  font-weight: 600;\n  text-align: center;\n"]))),d=s.ZP.ul(o||(o=(0,i.Z)(["\n  list-style: disc;\n  /* color: #833ab4; */\n"]))),x=s.ZP.li(u||(u=(0,i.Z)(["\n  margin-bottom: 8px;\n"]))),v=(0,s.ZP)(f.rU)(c||(c=(0,i.Z)(["\n  font-size: 20px;\n  color: #1944ec;\n  transition: color 0.2s ease-in-out;\n\n  &:hover,\n  &:focus {\n    color: #e20707;\n  }\n"])))},1137:function(n,e,r){r.r(e),r.d(e,{default:function(){return P}});var t,a,o,u=r(5861),c=r(9439),i=r(7757),s=r.n(i),f=r(2791),p=r(1087),l=r(7689),d=r(2147),x=r(1686),v=r.n(x),h=r(168),g=r(6444),m=g.ZP.form(t||(t=(0,h.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n"]))),Z=g.ZP.input(a||(a=(0,h.Z)(["\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  padding: 8px;\n  margin-right: 15px;\n  font-size: 16px;\n  outline: none;\n\n  &:focus {\n    border-color: #f94141;\n    box-shadow: 0 0 5px rgba(13, 87, 170, 0.3);\n  }\n"]))),b=g.ZP.button(o||(o=(0,h.Z)(["\n  background-color: #833ab4;\n  border: none;\n  border-radius: 4px;\n  padding: 8px 18px;\n  font-size: 16px;\n  cursor: pointer;\n  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;\n  outline: none;\n  color: #ffffff;\n\n  &:hover,\n  &:focus {\n    background-color: #e20707;\n  }\n"]))),k=r(184),y=function(n){var e=n.onSubmit,r=function(){var n=(0,u.Z)(s().mark((function n(r){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),(t=r.target.elements.query.value).trim()){n.next=5;break}return v().Notify.failure("Please enter something"),n.abrupt("return");case 5:e(t),r.target.reset();case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,k.jsxs)(m,{onSubmit:r,children:[(0,k.jsx)(Z,{name:"query",type:"text",placeholder:"Search movies"})," ",(0,k.jsx)(b,{children:"Search"})," "]})},w=r(6815),P=function(){var n=(0,f.useState)([]),e=(0,c.Z)(n,2),r=e[0],t=e[1],a=(0,p.lr)(),o=(0,c.Z)(a,2),i=o[0],x=o[1],h=(0,l.TH)();(0,f.useEffect)((function(){var n,e=null!==(n=i.get("query"))&&void 0!==n?n:"";if(e){var r=function(){var n=(0,u.Z)(s().mark((function n(){var r,a;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,d.FE)(e);case 3:r=n.sent,0===(a=r.results).length?(v().Notify.error("No movies found"),t([])):t(a),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),t([]);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();r()}}),[i]);return(0,k.jsx)("main",{children:(0,k.jsxs)(w.PP,{children:[(0,k.jsx)(w.NZ,{children:"Movies Page"}),(0,k.jsx)(y,{onSubmit:function(n){x({query:n})}})," ",(0,k.jsx)(w.aV,{children:r.map((function(n){return(0,k.jsx)(w.HC,{children:(0,k.jsx)(w.Fg,{to:"/movies/".concat(n.id),state:{from:h},children:n.title})},n.id)}))})]})})}},2147:function(n,e,r){r.d(e,{Mc:function(){return f},uV:function(){return p},Hx:function(){return l},FE:function(){return s},_k:function(){return i}});var t=r(5861),a=r(7757),o=r.n(a),u=r(1243),c="84068d2acd9315c3be219a34cf5a6c3a";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i=function(){var n=(0,t.Z)(o().mark((function n(){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/movie/day?api_key=".concat(c));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,t.Z)(o().mark((function n(e){var r,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?api_key=".concat(c,"&language=en-US&query=").concat(e));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(o().mark((function n(e){var r,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(e,"?api_key=").concat(c,"&language=en-US"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(o().mark((function n(e){var r,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(o().mark((function n(e){var r,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=137.17829c14.chunk.js.map