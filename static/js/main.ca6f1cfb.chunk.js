(this.webpackJsonpjoke=this.webpackJsonpjoke||[]).push([[0],{21:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(14),r=n.n(a),o=(n(21),n(4)),u=n.n(o),i=n(15),j=n(5),f=n(16),p=n.n(f),h=(n(41),n(2)),l=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],r=s.a.useState(20),o=Object(j.a)(r,2),f=o[0],l=o[1],b=function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("https://official-joke-api.appspot.com/random_joke");case 3:t=e.sent,a(t.data),l(20),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){b()}),[]),Object(c.useEffect)((function(){f>0&&setTimeout((function(){return l(f-1)}),1e3)}),[f]),Object(c.useEffect)((function(){0===f&&b()}),[f]),Object(h.jsxs)("div",{className:"jokes",children:[Object(h.jsxs)("h1",{children:["Counter:",f]}),Object(h.jsxs)("h3",{className:"jokes__setup",children:["Setup: ",n.setup]}),Object(h.jsxs)("p",{className:"jokes__punchline",children:["Punchline: ",n.punchline]})]},n.id)},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(l,{})}),document.getElementById("root")),b()}},[[43,1,2]]]);
//# sourceMappingURL=main.ca6f1cfb.chunk.js.map