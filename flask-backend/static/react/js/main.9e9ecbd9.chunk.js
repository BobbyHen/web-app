(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(23)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),c=n.n(r),i=(n(16),n(1)),u=n(2),l=n(4),s=n(3),m=n(5),d=(n(17),n(18),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h2",{className:"titleText"},"Ron Swanson Quotes"))}}]),t}(a.Component));n(19);var f=function(){return o.a.createElement("button",{className:"quoteButton",onClick:function(e){e.preventDefault(),window.location.reload()}},"Generate Quote")},h=n(6),p=n.n(h),v=n(9),b=(n(22),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={loading:!0},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(p.a.mark(function e(){var t,n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"/get_quote",e.next=3,fetch("/get_quote");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,this.setState({quote:n[0],loading:!1}),console.log(n);case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return o.a.createElement("div",{className:"quotesSection"},o.a.createElement("div",{className:"quoteText"},o.a.createElement("em",null,this.state.loading?o.a.createElement("div",null," Loading..."):o.a.createElement("div",null,'"',this.state.quote,'"'))))}}]),t}(a.Component)),w=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement(d,null),o.a.createElement(b,null),o.a.createElement(f,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.9e9ecbd9.chunk.js.map