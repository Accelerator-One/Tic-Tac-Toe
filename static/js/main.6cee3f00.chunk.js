(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{31:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r),a=n(8),o=n.n(a),c=n(19),s=n(4),u=n(25),l=n(24),d=(n(31),n(13)),x=n.n(d),h=n(20),j=n(10),b=n(23),k=n.n(b),f=n(21),m=n.n(f),O=n(1);var B=function(t){var e=t.uid,n=t.markBox,i=t.turn,a=Object(r.useRef)(),o=Object(r.useState)(0),c=Object(j.a)(o,2),s=c[0],u=c[1],l={fontSize:"4em"};function d(){return(d=Object(h.a)(x.a.mark((function t(){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0===s){t.next=5;break}return a.current.style.backgroundColor="red",t.next=4,setTimeout((function(){a.current.style.backgroundColor="white"}),1200);case 4:return t.abrupt("return");case 5:u(!0===i?1:2),n(e);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(O.jsx)("div",{ref:a,id:"box:"+e,className:"box",onClick:function(){return d.apply(this,arguments)},children:1===s?Object(O.jsx)(m.a,{style:l}):2===s?Object(O.jsx)(k.a,{style:l}):""})},g=n(11),y=n.n(g),w=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(c.a)(this,n),(t=e.call(this)).winnerChecker=function(e){var n=t.state.grid;return n[0]===n[1]&&n[1]===n[2]&&n[2]===e?[0,1,2]:n[3]===n[4]&&n[4]===n[5]&&n[5]===e?[3,4,5]:n[6]===n[7]&&n[7]===n[8]&&n[8]===e?[6,7,8]:n[0]===n[3]&&n[3]===n[6]&&n[6]===e?[0,3,6]:n[1]===n[4]&&n[4]===n[7]&&n[7]===e?[1,4,7]:n[2]===n[5]&&n[5]===n[8]&&n[8]===e?[2,5,8]:n[0]===n[4]&&n[4]===n[8]&&n[8]===e?[0,4,8]:n[2]===n[4]&&n[4]===n[6]&&n[6]===e?[2,4,6]:null},t.checkWinner=function(){var e=t.winnerChecker(1);if(null!==e)return e.forEach((function(t){document.getElementById("box:"+t).style.backgroundColor="lightgreen"})),void y()({title:"Congratulations",text:"Player 1 Won!",icon:"success",closeOnClickOutside:"false",button:{text:"Play Again"}}).then((function(){return window.location.reload()}));var n=t.winnerChecker(2);if(null!==n)return n.forEach((function(t){document.getElementById("box:"+t).style.backgroundColor="lightgreen"})),void y()({title:"Congratulations",text:"Player 2 Won!",icon:"success",closeOnClickOutside:"false",button:{text:"Play Again"}}).then((function(){return window.location.reload()}));8===t.state.count&&y()({title:"Attention",text:"Match ended with a draw!",icon:"info",closeOnClickOutside:"false",button:{text:"Play Again"}}).then((function(){return window.location.reload()}))},t.markBox=function(e){var n=t.state.count,r=t.state.turn,i=t.state.grid;i[e]=!0===r?1:2,r=!r,n++,t.setState({grid:i,turn:r,count:n}),t.checkWinner()},t.state={count:0,turn:!0,grid:[0,0,0,0,0,0,0,0,0,0]},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{children:" Tic Tac Toe "}),Object(O.jsxs)("div",{id:"board",children:[Object(O.jsx)(B,{uid:"0",markBox:this.markBox,turn:this.state.turn}),Object(O.jsx)(B,{uid:"1",markBox:this.markBox,turn:this.state.turn}),Object(O.jsx)(B,{uid:"2",markBox:this.markBox,turn:this.state.turn}),Object(O.jsx)(B,{uid:"3",markBox:this.markBox,turn:this.state.turn}),Object(O.jsx)(B,{uid:"4",markBox:this.markBox,turn:this.state.turn}),Object(O.jsx)(B,{uid:"5",markBox:this.markBox,turn:this.state.turn}),Object(O.jsx)(B,{uid:"6",markBox:this.markBox,turn:this.state.turn}),Object(O.jsx)(B,{uid:"7",markBox:this.markBox,turn:this.state.turn}),Object(O.jsx)(B,{uid:"8",markBox:this.markBox,turn:this.state.turn})]}),Object(O.jsxs)("h2",{children:[" Player ",!0===this.state.turn?"1":"2"," turn "]})]})}}]),n}(r.Component);o.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(w,{})}),document.getElementById("root"))}},[[42,1,2]]]);