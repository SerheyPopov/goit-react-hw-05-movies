"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[6],{3006:function(n,r,e){e.r(r);var t=e(9439),a=e(2791),c=e(877),o=e(4402),s=e(184);r.default=function(){var n=(0,a.useState)([]),r=(0,t.Z)(n,2),e=r[0],u=r[1];return(0,a.useEffect)((function(){try{(0,c.Wf)().then((function(n){u(n.results)}))}catch(n){console.log(n)}}),[]),(0,s.jsx)("div",{children:(0,s.jsx)(o.Z,{searchValue:e})})}},877:function(n,r,e){e.d(r,{IT:function(){return f},Wf:function(){return p},Zx:function(){return x},ei:function(){return g},ov:function(){return l}});var t=e(5861),a=e(4687),c=e.n(a),o=e(1243),s=e(2007),u=e.n(s),i="5f2a66e63fa9a8139a0b7e8b9aba27ca";o.Z.defaults.baseURL="https://api.themoviedb.org/";var p=function(){var n=(0,t.Z)(c().mark((function n(){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("3/trending/movie/day?api_key=".concat(i,"&language=en-US"));case 3:return r=n.sent,n.next=6,r.data;case 6:return e=n.sent,n.abrupt("return",e);case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(c().mark((function n(r){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("3/search/movie?query=".concat(r,"&api_key=").concat(i,"&language=en-US"));case 3:return e=n.sent,n.next=6,e.data;case 6:return t=n.sent,n.abrupt("return",t);case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(r){return n.apply(this,arguments)}}(),x=function(){var n=(0,t.Z)(c().mark((function n(r){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("3/movie/".concat(r,"?api_key=").concat(i,"&language=en-US"));case 3:return e=n.sent,n.next=6,e.data;case 6:return t=n.sent,n.abrupt("return",t);case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(r){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(c().mark((function n(r){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("3/movie/".concat(r,"/credits?api_key=").concat(i,"&language=en-US"));case 3:return e=n.sent,n.next=6,e.data;case 6:return t=n.sent,n.abrupt("return",t);case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(r){return n.apply(this,arguments)}}(),g=function(){var n=(0,t.Z)(c().mark((function n(r){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("3/movie/".concat(r,"/reviews?api_key=").concat(i,"&language=en-US"));case 3:return e=n.sent,n.next=6,e.data;case 6:return t=n.sent,n.abrupt("return",t);case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(r){return n.apply(this,arguments)}}();f.propTypes={onSubmit:u().string},x.propTypes={onSubmitId:u().string},l.propTypes={onSubmitCast:u().string},g.propTypes={onSubmitReviews:u().string}},4402:function(n,r,e){e.d(r,{Z:function(){return Z}});var t,a,c,o,s,u,i=e(7689),p=e(168),f=e(5706),x=e(1087),l=f.Z.ul(t||(t=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  margin-right: auto;\n  margin-left: auto;\n"]))),g=(0,f.Z)(x.rU)(a||(a=(0,p.Z)(["\n  text-decoration: none;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: scale(1.03);\n"]))),v=f.Z.li(c||(c=(0,p.Z)(["\n  width: 300px;\n  margin-right: auto;\n  margin-left: auto;\n//   border: 1px solid black;\n  margin-bottom: 20px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n      transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n      border-radius: 5px;\n  &:hover {\n    transform: scale(1.03);\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n    \n"]))),h=f.Z.img(o||(o=(0,p.Z)(["\n  display: block;\n"]))),d=f.Z.p(s||(s=(0,p.Z)(["\n  font-size: x-large;\n  font-weight: 700;\n  color: #656565;\n"]))),m=f.Z.div(u||(u=(0,p.Z)(["\n  height: 70px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 15px;\n  background-color: #f9f7f7;\n"]))),b=e(184),Z=function(n){var r=(0,i.TH)(),e=n.searchValue;return(0,b.jsx)(l,{children:e&&e.map((function(n){var e=n.id,t=n.poster_path,a=n.title;return(0,b.jsx)(v,{children:(0,b.jsxs)(g,{to:"/movies/".concat(e),state:{from:r},children:[(0,b.jsx)(h,{src:t?t&&"https://image.tmdb.org/t/p/w500"+t:"https://svgsilh.com/svg/24530-4f4f4f.svg",alt:a,width:300}),(0,b.jsx)(m,{children:(0,b.jsx)(d,{children:a})})]})},e)}))})}}}]);
//# sourceMappingURL=6.cdd70a19.chunk.js.map