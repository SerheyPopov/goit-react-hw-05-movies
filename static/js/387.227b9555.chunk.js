"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{877:function(n,t,r){r.d(t,{IT:function(){return f},Wf:function(){return p},Zx:function(){return h},ei:function(){return d},ov:function(){return x}});var e=r(5861),a=r(4687),u=r.n(a),c=r(1243),i=r(2007),s=r.n(i),o={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YmFjMThkZTliMmI1NDkwNTZmYWVhNTZjOTAyNzU2YiIsInN1YiI6IjY0NmI1NGE5NTc1MzBlMDc4YTYwYjYxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M0yl0J_692yCcYW8WNbOdrUjK2jg9bmYgULdE6qFbyg"}};c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var p=function(){var n=(0,e.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day",o);case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?query=".concat(t),o);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t),o);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits?language=en-US"),o);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews?language=en-US"),o);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();f.propTypes={onSubmit:s().string},h.propTypes={onSubmitId:s().string},x.propTypes={onSubmitCast:s().string},d.propTypes={onSubmitReviews:s().string}},3387:function(n,t,r){r.r(t),r.d(t,{default:function(){return m}});var e,a,u,c,i=r(9439),s=r(2791),o=r(7689),p=r(877),f=r(168),h=r(5706),x=h.Z.ul(e||(e=(0,f.Z)(["\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n"]))),d=h.Z.div(a||(a=(0,f.Z)(["\n  max-width: 700px;\n"]))),l=h.Z.li(u||(u=(0,f.Z)(["\n  width: 200px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),v=h.Z.p(c||(c=(0,f.Z)(["\n  font-size: larger;\n  text-align: center;\n  font-weight: 500;\n"]))),g=r(184),m=function(){var n=(0,s.useState)([]),t=(0,i.Z)(n,2),r=t[0],e=t[1],a=(0,o.UO)(),u=(0,s.useState)(!1),c=(0,i.Z)(u,2),f=c[0],h=c[1];return(0,s.useEffect)((function(){try{(0,p.ov)(a.filmId).then((function(n){if(0===n.cast.length)return h(!0);e(n.cast)}))}catch(n){console.log(n)}}),[a]),(0,g.jsxs)(d,{children:[f&&(0,g.jsx)("p",{children:"No cast"}),(0,g.jsx)(x,{children:r&&r.map((function(n){var t=n.id,r=n.profile_path,e=n.name;return(0,g.jsxs)(l,{children:[(0,g.jsx)("img",{src:r?r&&"https://image.tmdb.org/t/p/w500"+r:"https://svgsilh.com/svg/1287911-4f4f4f.svg",alt:e,width:200}),(0,g.jsx)(v,{children:e})]},t)}))})]})}}}]);
//# sourceMappingURL=387.227b9555.chunk.js.map