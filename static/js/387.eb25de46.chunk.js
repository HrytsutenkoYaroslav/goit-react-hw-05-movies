"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{4387:function(n,t,e){e.r(t),e.d(t,{default:function(){return U}});var r,a,c,u,i,o,s,p=e(5861),f=e(9439),d=e(7757),x=e.n(d),l=e(2791),h=e(7689),v=e(2147),g=e(168),m=e(6444),w=m.ZP.div(r||(r=(0,g.Z)(["\n  margin-top: 30px;\n  padding: 0 40px 40px 40px;\n"]))),Z=m.ZP.h2(a||(a=(0,g.Z)(["\n  font-size: 25px;\n  font-weight: 500;\n  text-align: center;\n  margin-bottom: 30px;\n"]))),b=m.ZP.ul(c||(c=(0,g.Z)(["\n  margin-top: 30px;\n  display: flex;\n  align-items: flex-start;\n  gap: 40px;\n  flex-wrap: wrap;\n"]))),k=m.ZP.li(u||(u=(0,g.Z)(["\n  padding-bottom: 10px;\n  border-bottom: 1px solid #833ab4;\n  width: 100%;\n"]))),y=m.ZP.p(i||(i=(0,g.Z)(["\n  margin-bottom: 10px;\n  font-size: 20px;\n  font-weight: 500;\n"]))),_=m.ZP.p(o||(o=(0,g.Z)(["\n  line-height: 1.5;\n  margin-bottom: 10px;\n"]))),j=m.ZP.p(s||(s=(0,g.Z)(["\n  margin: 30px auto 0 auto;\n  text-align: center;\n  padding: 20px;\n  background-color: #833ab4;\n  border-radius: 5px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n  max-width: 500px;\n"]))),P=e(184),U=function(){var n=(0,h.UO)().movieId,t=(0,l.useState)([]),e=(0,f.Z)(t,2),r=e[0],a=e[1];return(0,l.useEffect)((function(){var t=function(){var t=(0,p.Z)(x().mark((function t(){var e,r;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,v.Hx)(n);case 3:e=t.sent,r=e.results,a(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}),[n]),(0,P.jsxs)(w,{children:[(0,P.jsx)(Z,{children:"Reviews"}),r.length?(0,P.jsx)(b,{className:"reviews-container",children:r.map((function(n){return(0,P.jsxs)(k,{className:"review-card",children:[(0,P.jsxs)(y,{children:["Author: ",n.author]}),(0,P.jsx)(_,{children:n.content})]},n.id)}))}):(0,P.jsx)(j,{children:"We don't have any reviews for this movie yet."})]})}},2147:function(n,t,e){e.d(t,{Mc:function(){return p},uV:function(){return f},Hx:function(){return d},FE:function(){return s},_k:function(){return o}});var r=e(5861),a=e(7757),c=e.n(a),u=e(1243),i="84068d2acd9315c3be219a34cf5a6c3a";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=387.eb25de46.chunk.js.map