"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{877:function(e,n,t){t.d(n,{IT:function(){return f},Wf:function(){return i},Zx:function(){return l},ei:function(){return x},ov:function(){return v}});var r=t(5861),a=t(4687),c=t.n(a),u=t(1243),s=t(2007),o=t.n(s),p="5f2a66e63fa9a8139a0b7e8b9aba27ca";u.Z.defaults.baseURL="https://api.themoviedb.org/";var i=function(){var e=(0,r.Z)(c().mark((function e(){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("3/trending/movie/day?api_key=".concat(p,"&language=en-US"));case 3:return n=e.sent,e.next=6,n.data;case 6:return t=e.sent,e.abrupt("return",t);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("3/search/movie?query=".concat(n,"&api_key=").concat(p,"&language=en-US"));case 3:return t=e.sent,e.next=6,t.data;case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("3/movie/".concat(n,"?api_key=").concat(p,"&language=en-US"));case 3:return t=e.sent,e.next=6,t.data;case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("3/movie/".concat(n,"/credits?api_key=").concat(p,"&language=en-US"));case 3:return t=e.sent,e.next=6,t.data;case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}(),x=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("3/movie/".concat(n,"/reviews?api_key=").concat(p,"&language=en-US"));case 3:return t=e.sent,e.next=6,t.data;case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}();f.propTypes={onSubmit:o().string},l.propTypes={onSubmitId:o().string},v.propTypes={onSubmitCast:o().string},x.propTypes={onSubmitReviews:o().string}},3387:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r,a,c,u,s=t(9439),o=t(2791),p=t(7689),i=t(877),f=t(168),l=t(5706),v=l.Z.ul(r||(r=(0,f.Z)(["\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n"]))),x=l.Z.div(a||(a=(0,f.Z)(["\n  max-width: 700px;\n"]))),h=l.Z.li(c||(c=(0,f.Z)(["\n  width: 200px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),g=l.Z.p(u||(u=(0,f.Z)(["\n  font-size: larger;\n  text-align: center;\n  font-weight: 500;\n"]))),d=t(184),m=function(){var e=(0,o.useState)([]),n=(0,s.Z)(e,2),t=n[0],r=n[1],a=(0,p.UO)(),c=(0,o.useState)(!1),u=(0,s.Z)(c,2),f=u[0],l=u[1];return(0,o.useEffect)((function(){try{(0,i.ov)(a.filmId).then((function(e){if(0===e.cast.length)return l(!0);r(e.cast)}))}catch(e){console.log(e)}}),[a.filmId]),(0,d.jsxs)(x,{children:[f&&(0,d.jsx)("p",{children:"No cast"}),(0,d.jsx)(v,{children:t&&t.map((function(e){var n=e.id,t=e.profile_path,r=e.name;return(0,d.jsxs)(h,{children:[(0,d.jsx)("img",{src:t?t&&"https://image.tmdb.org/t/p/w500"+t:"https://svgsilh.com/svg/1287911-4f4f4f.svg",alt:r,width:200}),(0,d.jsx)(g,{children:r})]},n)}))})]})}}}]);
//# sourceMappingURL=387.49523246.chunk.js.map