(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{25:function(e,t,n){},46:function(e,t,n){},74:function(e,t,n){e.exports=n(90)},79:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(17),c=n.n(r),o=(n(79),n(10)),u=n(11),s=n(13),i=n(12),m=n(14),d=(n(25),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={operand1:0,operand2:"",operand3:"",op:""},n.fun1=function(e){0===n.state.operand1?n.setState({operand1:e.target.value}):n.setState({operand1:n.state.operand1+e.target.value})},n.fun2=function(e){n.setState({operand1:n.state.operand1+3.14})},n.operation=function(e){n.setState({operand2:n.state.operand1,op:e.target.value,operand1:""})},n.final=function(){"sin"===n.state.op&&n.setState({operand1:Math.sin(n.state.operand2)}),"cos"===n.state.op&&n.setState({operand1:Math.cos(n.state.operand2)}),"tan"===n.state.op&&n.setState({operand1:Math.tan(n.state.operand2)}),"sinh"===n.state.op&&n.setState({operand1:Math.sinh(n.state.operand2)}),"cosh"===n.state.op&&n.setState({operand1:Math.cosh(n.state.operand2)}),"tanh"===n.state.op&&n.setState({operand1:Math.tanh(n.state.operand2)}),"log"===n.state.op&&n.setState({operand1:Math.log(n.state.operand2)}),"sqrt"===n.state.op&&n.setState({operand1:Math.sqrt(n.state.operand2)}),"pow2"===n.state.op&&n.setState({operand1:Math.pow(n.state.operand2,2)}),"cube"===n.state.op&&n.setState({operand1:Math.pow(n.state.operand2,3)})},n.onCero=function(){n.setState({operand1:n.state.operand1.substring(0,n.state.operand1.length-1)})},n.fullerase=function(){n.setState({operand1:"",operand2:"",op:""})},n.erase=function(){n.setState({operand1:""})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h3",{className:"h3c"},"Scientific calculator")),l.a.createElement("div",{className:"flex-container"},l.a.createElement("div",null,l.a.createElement("input",{className:"disp1",type:"text",readOnly:!0,value:this.state.operand1,id:"disp"})),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons",value:"c",onClick:function(t){return e.erase(t)},id:"c"},"c")),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons",value:"backspace",onClick:function(t){return e.onCero(t)},id:"backspace"},"backspace")),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons",value:"ce",onClick:function(t){return e.fullerase(t)},id:"ce"},"ce")),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons",value:"sin",onClick:function(t){return e.operation(t)},id:"sin"},"sin")),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons",value:"cos",onClick:function(t){return e.operation(t)},id:"cos"},"cos")),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons",value:"tan",onClick:function(t){return e.operation(t)},id:"tan"},"tan")),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons",value:"sinh",onClick:function(t){return e.operation(t)},id:"sinh"},"sinh")),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons",value:"cosh",onClick:function(t){return e.operation(t)},id:"cosh"},"cosh")),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons",value:"tanh",onClick:function(t){return e.operation(t)},id:"tanh"},"tanh")),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons",value:"log",onClick:function(t){return e.operation(t)},id:"log"},"log")),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons",value:"pow2",onClick:function(t){return e.operation(t)},id:"pow2"},"pow2")),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons",value:"cube",onClick:function(t){return e.operation(t)},id:"cube"},"cube")),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons",value:"sqrt",onClick:function(t){return e.operation(t)},id:"sqrt"},"sqrt")),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons",value:"pie",onClick:function(t){return e.fun2(t)},id:"pie"},"pie")),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons",value:"1",onClick:function(t){return e.fun1(t)},id:"1"},"1")),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons",value:"2",onClick:function(t){return e.fun1(t)},id:"2"},"2")),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons",value:"3",onClick:function(t){return e.fun1(t)},id:"3"},"3")),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons",value:"4",onClick:function(t){return e.fun1(t)},id:"4"},"4")),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons1",value:"5",onClick:function(t){return e.fun1(t)},id:"5"},"5")),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons1",value:"6",onClick:function(t){return e.fun1(t)},id:"6"},"6")),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons1",value:"7",onClick:function(t){return e.fun1(t)},id:"7"},"7")),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons1",value:"8",onClick:function(t){return e.fun1(t)},id:"8"},"8")),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons1",value:"9",onClick:function(t){return e.fun1(t)},id:"9"},"9")),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons1",value:".",onClick:function(t){return e.fun1(t)},id:"."},".")),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons1",value:"0",onClick:function(t){return e.fun1(t)},id:"0"},"0")),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons1",value:"=",onClick:function(){return e.final()},id:"="},"="))))}}]),t}(a.Component)),p=n(22),b=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={operand1:0,operand2:"",op:""},n.fun1=function(e){0===n.state.operand1?n.setState({operand1:e.target.value}):n.setState({operand1:n.state.operand1+e.target.value})},n.operation=function(e){n.setState({operand2:n.state.operand1,op:e.target.value,operand1:""})},n.final=function(e){n.setState({operand1:n.state.operand1+e.target.value}),"+"===n.state.op&&n.setState({operand1:parseInt(n.state.operand2)+parseInt(n.state.operand1)}),"-"===n.state.op&&n.setState({operand1:parseInt(n.state.operand2)-parseInt(n.state.operand1)}),"*"===n.state.op&&n.setState({operand1:parseInt(n.state.operand2)*parseInt(n.state.operand1)}),"/"===n.state.op&&n.setState({operand1:parseInt(n.state.operand2)/parseInt(n.state.operand1)}),"%"===n.state.op&&n.setState({operand1:parseInt(n.state.operand2)%parseInt(n.state.operand1)})},n.fullerase=function(){n.setState({operand1:"",operand2:"",op:""})},n.scientific=function(){n.props.history.push({pathname:"/science"})},n.send=function(){sessionStorage.setItem("Result",n.state.operand1),n.props.history.push({pathname:"/result"})},n.erase=function(){n.setState({operand1:""})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h3",{className:"h3c"},"Simple calculator")),l.a.createElement("div",{className:"flex-container"},l.a.createElement("div",null,l.a.createElement("input",{className:"disp1",type:"text",readOnly:!0,value:this.state.operand1,id:"disp"})),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons",value:"(",onClick:function(t){return e.fun1(t)},id:"("},"(")),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons",value:"ce",onClick:function(t){return e.fullerase(t)},id:"ce"},"ce")),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons",value:")",onClick:function(t){return e.fun1(t)},id:")"},")")),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons",value:"c",onClick:function(t){return e.erase(t)},id:"c"},"c")),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons",value:"1",onClick:function(t){return e.fun1(t)},id:"1"},"1")),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons",value:"2",onClick:function(t){return e.fun1(t)},id:"2"},"2")),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons",value:"3",onClick:function(t){return e.fun1(t)},id:"3"},"3")),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons",value:"+",onClick:function(t){return e.operation(t)},id:"+"},"+")),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons",value:"4",onClick:function(t){return e.fun1(t)},id:"4"},"4")),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons1",value:"5",onClick:function(t){return e.fun1(t)},id:"5"},"5")),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons1",value:"6",onClick:function(t){return e.fun1(t)},id:"6"},"6")),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons1",value:"-",onClick:function(t){return e.operation(t)},id:"-"},"-")),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons1",value:"7",onClick:function(t){return e.fun1(t)},id:"7"},"7")),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons1",value:"8",onClick:function(t){return e.fun1(t)},id:"8"},"8")),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons1",value:"9",onClick:function(t){return e.fun1(t)},id:"9"},"9")),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons1",value:"*",onClick:function(t){return e.operation(t)},id:"*"},"*")),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons1",value:".",onClick:function(t){return e.operation(t)},id:"."},".")),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons1",value:"0",onClick:function(t){return e.fun1(t)},id:"0"},"0")),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons1",value:"=",onClick:function(t){return e.final(t)},id:"="},"=")),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons1",value:"/",onClick:function(t){return e.operation(t)},id:"/"},"/")),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons1",value:"%",onClick:function(t){return e.operation(t)},id:"%"},"%")),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons1",value:"send",onClick:function(t){return e.send(t)},id:"send"},"send")),l.a.createElement("button",{className:"buttons1",label:"Scientific calculator",onClick:function(){return e.scientific()}},"Scientific"),l.a.createElement("div",null,l.a.createElement(p.b,{to:"/science",target:"_blank"},"open in newtab")),l.a.createElement("div",null,l.a.createElement(p.b,{to:"/counter",target:"_blank"},"Counter app")),l.a.createElement("div",null,l.a.createElement(p.b,{to:"/bmi",target:"_blank"},"Bmi calculator"))))}}]),t}(a.Component),E=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={operand1:0},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setState({operand1:sessionStorage.getItem("Result")})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h3",{className:"h3c"},"Result of operation")),l.a.createElement("div",{className:"flex-container"},l.a.createElement("div",null,l.a.createElement("input",{className:"disp1",type:"text",readOnly:!0,value:this.state.operand1,id:"disp"}))))}}]),t}(a.Component),v=(n(46),n(99)),f=n(100),h=n(98),k=n(95),C=n(96),N=n(97),g=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={text1:""},n.inc=function(){n.setState({text1:parseInt(n.state.text1)+1})},n.dec=function(){n.setState({text1:parseInt(n.state.text1)-1})},n.sets=function(e){n.setState({text1:e.target.value})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(v.a,{fill:!0},l.a.createElement(v.a,{flex:!0,tag:"header",align:"center",background:"brand"},l.a.createElement("h5",{style:{fontSize:"15px"}},"Counter App"))),l.a.createElement("br",null),l.a.createElement(k.a,null,l.a.createElement(C.a,null,l.a.createElement(N.a,{lg:4},l.a.createElement(f.a,{label:"Inc",onClick:function(){return e.inc()}})),l.a.createElement(N.a,{lg:4},l.a.createElement(h.a,{id:"text",placeholder:"Enter the value",onChange:function(t){return e.sets(t)},value:this.state.text1})),l.a.createElement(N.a,{lg:6},l.a.createElement(f.a,{label:"Dec",onClick:function(){return e.dec()}})))))}}]),t}(a.Component),S=n(68),O=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={result:""},n.bmi=function(){n.setState({result:n.state.text/2.205*Math.pow(n.state.text1/39.37,2)})},n.sets=function(e){n.setState(Object(S.a)({},e.target.id,e.target.value))},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(v.a,{fill:!0},l.a.createElement(v.a,{flex:!0,tag:"header",align:"center",background:"brand"},l.a.createElement("h5",{style:{fontSize:"15px"}},"Counter App"))),l.a.createElement("br",null),l.a.createElement(k.a,null,l.a.createElement(C.a,null,l.a.createElement(N.a,null,l.a.createElement(h.a,{id:"text",label:"Height",placeholder:"Height",onChange:function(t){return e.sets(t)},value:this.state.text})),l.a.createElement(N.a,{lg:4},l.a.createElement(h.a,{id:"text1",label:"Weight",placeholder:"Weight",onChange:function(t){return e.sets(t)},value:this.state.text1})),l.a.createElement(N.a,{lg:4},l.a.createElement(h.a,{id:"text2",label:"Result",placeholder:"Result",value:this.state.result})))),l.a.createElement("div",null,l.a.createElement("button",{className:"buttons",onClick:function(){return e.bmi()},id:"reset"},"reset")))}}]),t}(a.Component),y=(n(89),n(19)),j=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(p.a,{history:r.hashHistory},l.a.createElement(y.c,null,l.a.createElement(y.a,{path:"/",exact:!0,component:b}),l.a.createElement(y.a,{path:"/science",component:d}),l.a.createElement(y.a,{path:"/result",component:E}),l.a.createElement(y.a,{path:"/counter",component:g}),l.a.createElement(y.a,{path:"/bmi",component:O}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[74,1,2]]]);
//# sourceMappingURL=main.565f4e84.chunk.js.map