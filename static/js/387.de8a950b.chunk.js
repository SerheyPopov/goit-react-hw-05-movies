"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{877:function(t,e,n){n.d(e,{IT:function(){return f},Wf:function(){return p},Zx:function(){return l},ei:function(){return v},ov:function(){return h}});var r=n(5861),a=n(4687),c=n.n(a),s=n(1243),u=n(2007),o=n.n(u),i={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YmFjMThkZTliMmI1NDkwNTZmYWVhNTZjOTAyNzU2YiIsInN1YiI6IjY0NmI1NGE5NTc1MzBlMDc4YTYwYjYxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M0yl0J_692yCcYW8WNbOdrUjK2jg9bmYgULdE6qFbyg"}};s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var p=function(){var t=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.get("trending/movie/day",i);case 3:return e=t.sent,t.next=6,e.data;case 6:return n=t.sent,t.abrupt("return",n);case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.get("search/movie?query=".concat(e),i);case 3:return n=t.sent,t.next=6,n.data;case 6:return r=t.sent,t.abrupt("return",r);case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.get("movie/".concat(e),i);case 3:return n=t.sent,t.next=6,n.data;case 6:return r=t.sent,t.abrupt("return",r);case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.get("movie/".concat(e,"/credits?language=en-US"),i);case 3:return n=t.sent,t.next=6,n.data;case 6:return r=t.sent,t.abrupt("return",r);case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.get("movie/".concat(e,"/reviews?language=en-US"),i);case 3:return n=t.sent,t.next=6,n.data;case 6:return r=t.sent,t.abrupt("return",r);case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}();f.propTypes={onSubmit:o().string},l.propTypes={onSubmitId:o().string},h.propTypes={onSubmitCast:o().string},v.propTypes={onSubmitReviews:o().string}},3387:function(t,e,n){n.r(e),n.d(e,{default:function(){return g}});var r,a,c,s,u=n(9439),o=n(2791),i=n(7689),p=n(877),f=n(168),l=n(5706),h=l.Z.ul(r||(r=(0,f.Z)(["\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n"]))),v=l.Z.div(a||(a=(0,f.Z)(["\n  max-width: 700px;\n"]))),x=l.Z.li(c||(c=(0,f.Z)(["\n  width: 200px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),d=l.Z.p(s||(s=(0,f.Z)(["\n  font-size: larger;\n  text-align: center;\n  font-weight: 500;\n"]))),m=n(184),g=function(){var t=(0,o.useState)([]),e=(0,u.Z)(t,2),n=e[0],r=e[1],a=(0,i.UO)(),c=(0,o.useState)(!1),s=(0,u.Z)(c,2),f=s[0],l=s[1];return(0,o.useEffect)((function(){try{(0,p.ov)(a.filmId).then((function(t){if(0===t.cast.length)return l(!0);r(t.cast)}))}catch(t){console.log(t)}}),[a.filmId]),(0,m.jsxs)(v,{children:[f&&(0,m.jsx)("p",{children:"No cast"}),(0,m.jsx)(h,{children:n&&n.map((function(t){var e=t.id,n=t.profile_path,r=t.name;return(0,m.jsxs)(x,{children:[(0,m.jsx)("img",{src:n?n&&"https://image.tmdb.org/t/p/w500"+n:"https://svgsilh.com/svg/1287911-4f4f4f.svg",alt:r,width:200}),(0,m.jsx)(d,{children:r})]},e)}))})]})}}}]);
//# sourceMappingURL=387.de8a950b.chunk.js.map