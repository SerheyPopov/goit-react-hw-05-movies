"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{877:function(t,n,r){r.d(n,{IT:function(){return f},Wf:function(){return p},Zx:function(){return h},ei:function(){return d},ov:function(){return l}});var e=r(5861),a=r(4687),u=r.n(a),i=r(1243),c=r(2007),o=r.n(c),s={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YmFjMThkZTliMmI1NDkwNTZmYWVhNTZjOTAyNzU2YiIsInN1YiI6IjY0NmI1NGE5NTc1MzBlMDc4YTYwYjYxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M0yl0J_692yCcYW8WNbOdrUjK2jg9bmYgULdE6qFbyg"}};i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var p=function(){var t=(0,e.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("trending/movie/day",s);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("search/movie?query=".concat(n),s);case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("movie/".concat(n),s);case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("movie/".concat(n,"/credits?language=en-US"),s);case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("movie/".concat(n,"/reviews?language=en-US"),s);case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();f.propTypes={onSubmit:o().string},h.propTypes={onSubmitId:o().string},l.propTypes={onSubmitCast:o().string},d.propTypes={onSubmitReviews:o().string}},9779:function(t,n,r){r.r(n),r.d(n,{default:function(){return d}});var e,a,u=r(9439),i=r(2791),c=r(7689),o=r(877),s=r(168),p=r(5706),f=p.Z.h3(e||(e=(0,s.Z)(["\n  margin-bottom: 10px;\n  font-size: x-large;\n  font-weight: 700;\n  color: #6a6a6a;\n"]))),h=p.Z.p(a||(a=(0,s.Z)(["\n  margin-bottom: 30px;\n  border-bottom: 2px solid black;\n  font-weight: lighter;\n"]))),l=r(184),d=function(){var t=(0,i.useState)([]),n=(0,u.Z)(t,2),r=n[0],e=n[1],a=(0,i.useState)(!1),s=(0,u.Z)(a,2),p=s[0],d=s[1],m=(0,c.UO)();return(0,i.useEffect)((function(){try{(0,o.ei)(m.filmId).then((function(t){if(0===t.total_results)return d(!0);e(t.results)}))}catch(t){console.log(t)}}),[m]),(0,l.jsxs)("div",{children:[p&&(0,l.jsx)("p",{children:"Review not written yet"}),(0,l.jsx)("ul",{children:r&&r.map((function(t){var n=t.id,r=t.author,e=t.content;return(0,l.jsxs)("li",{children:[(0,l.jsx)(f,{children:r}),(0,l.jsx)(h,{children:e})]},n)}))})]})}}}]);
//# sourceMappingURL=779.98547351.chunk.js.map