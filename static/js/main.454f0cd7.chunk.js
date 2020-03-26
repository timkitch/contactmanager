(this.webpackJsonpcontactmanager=this.webpackJsonpcontactmanager||[]).push([[0],{37:function(e,a,t){e.exports=t(67)},66:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(32),o=t.n(c),l=t(2),s=t(3),i=t(5),m=t(4),u=t(6),p=t(13),h=t(14),d=t(7),b=t.n(d),f=t(36),E=t(18),v=t(12),y=t.n(v),g=r.a.createContext(),C=function(e,a){switch(a.type){case"DELETE_CONTACT":return Object(E.a)({},e,{contacts:e.contacts.filter((function(e){return e.id!==a.payload}))});case"ADD_CONTACT":return Object(E.a)({},e,{contacts:[a.payload].concat(Object(f.a)(e.contacts))});case"UPDATE_CONTACT":return Object(E.a)({},e,{contacts:e.contacts.map((function(e){return e.id===a.payload.id?e=a.payload:e}))});default:return e}},N=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){return t.setState((function(a){return C(a,e)}))}},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e;return b.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b.a.awrap(y.a.get("https://jsonplaceholder.typicode.com/users"));case 2:e=a.sent,this.setState({contacts:e.data});case 4:case"end":return a.stop()}}),null,this)}},{key:"render",value:function(){return r.a.createElement(g.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),j=g.Consumer,O=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},t.onShowClick=function(){t.setState({showContactInfo:!t.state.showContactInfo})},t.onDeleteClick=function(e,a){var t;return b.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b.a.awrap(y.a.delete("https://jsonplaceholder.typicode.com/users/".concat(e)));case 2:t=n.sent,a({type:"DELETE_CONTACT",payload:e},console.log(t));case 4:case"end":return n.stop()}}))},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.props.contact,t=a.id,n=a.name,c=a.email,o=a.phone,l=this.state.showContactInfo;return r.a.createElement(j,null,(function(a){var s=a.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,n," ",r.a.createElement("i",{onClick:e.onShowClick,className:"fas fa-sort-down",style:{cursor:"pointer"}}),r.a.createElement("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:e.onDeleteClick.bind(e,t,s)}),r.a.createElement(p.b,{to:"contact/edit/".concat(t)},r.a.createElement("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"}}))),l?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email: ",c),r.a.createElement("li",{className:"list-group-item"},o)):null)}))}}]),a}(n.Component),k=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(j,null,(function(e){var a=e.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact "),"List"),a.map((function(e){return r.a.createElement(O,{key:e.id,contact:e})})))}))}}]),a}(n.Component),w=t(16),x=t(35),S=t.n(x),A=function(e){var a=e.label,t=e.name,n=e.value,c=e.placeholder,o=e.type,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",{type:o,name:t,className:S()("form-control form-control-lg",{"is-invalid":s}),placeholder:c,value:n,onChange:l}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))};A.defaultProps={type:"text"};var T=A,D=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.onSubmit=function(e,a){var n,r,c,o,l,s;return b.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(a.preventDefault(),n=t.state,r=n.name,c=n.email,o=n.phone,""!==r){i.next=5;break}return t.setState({errors:{name:"Name is required"}}),i.abrupt("return");case 5:if(""!==c){i.next=8;break}return t.setState({errors:{email:"Email is required"}}),i.abrupt("return");case 8:if(""!==o){i.next=11;break}return t.setState({errors:{phone:"Phone is required"}}),i.abrupt("return");case 11:return l={name:r,email:c,phone:o},i.next=14,b.a.awrap(y.a.post("https://jsonplaceholder.typicode.com/users",l));case 14:s=i.sent,e({type:"ADD_CONTACT",payload:s.data},console.log(s)),t.setState({name:"",email:"",phone:"",errors:{}}),t.props.history.push("/");case 18:case"end":return i.stop()}}))},t.onChange=function(e){return t.setState(Object(w.a)({},e.target.name,e.target.value))},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.errors;return r.a.createElement(j,null,(function(a){var l=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(T,{label:"Name",name:"name",placeholder:"Enter Name",value:t,onChange:e.onChange,error:o.name}),r.a.createElement(T,{label:"Email",name:"email",type:"email",placeholder:"Enter Email",value:n,onChange:e.onChange,error:o.email}),r.a.createElement(T,{label:"Phone",name:"phone",placeholder:"Enter Phone",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"}))))}))}}]),a}(n.Component),P=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.onSubmit=function(e,a){var n,r,c,o,l,s,i;return b.a.async((function(m){for(;;)switch(m.prev=m.next){case 0:if(a.preventDefault(),n=t.state,r=n.name,c=n.email,o=n.phone,""!==r){m.next=5;break}return t.setState({errors:{name:"Name is required"}}),m.abrupt("return");case 5:if(""!==c){m.next=8;break}return t.setState({errors:{email:"Email is required"}}),m.abrupt("return");case 8:if(""!==o){m.next=11;break}return t.setState({errors:{phone:"Phone is required"}}),m.abrupt("return");case 11:return l={name:r,email:c,phone:o},s=t.props.match.params.id,m.next=15,b.a.awrap(y.a.put("https://jsonplaceholder.typicode.com/users/".concat(s),l));case 15:i=m.sent,e({type:"UPDATE_CONTACT",payload:i.data}),t.setState({name:"",email:"",phone:"",errors:{}}),t.props.history.push("/");case 19:case"end":return m.stop()}}))},t.onChange=function(e){return t.setState(Object(w.a)({},e.target.name,e.target.value))},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e,a,t;return b.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e=this.props.match.params.id,n.next=3,b.a.awrap(y.a.get("https://jsonplaceholder.typicode.com/users/".concat(e)));case 3:a=n.sent,t=a.data,this.setState({name:t.name,email:t.email,phone:t.phone});case 6:case"end":return n.stop()}}),null,this)}},{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.errors;return r.a.createElement(j,null,(function(a){var l=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(T,{label:"Name",name:"name",placeholder:"Enter Name",value:t,onChange:e.onChange,error:o.name}),r.a.createElement(T,{label:"Email",name:"email",type:"email",placeholder:"Enter Email",value:n,onChange:e.onChange,error:o.email}),r.a.createElement(T,{label:"Phone",name:"phone",placeholder:"Enter Phone",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Update Contact",className:"btn btn-light btn-block"}))))}))}}]),a}(n.Component),q=function(e){var a=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},a),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"})," Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"})," Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"})," About"))))))};q.defaultProps={branding:"My App"};var M=q,_=function(e){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"Simple app to manage contacts"),r.a.createElement("p",{className:"text-secondary"},"Verion 1.0.0"))};function I(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404 Page Not Found")),r.a.createElement("p",{className:"lead"},"Sorry, that page does not exist"))}var F=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={title:"",body:""},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/posts/1").then((function(e){return e.json()})).then((function(a){return e.setState({title:a.title,body:a.body})}))}},{key:"render",value:function(){var e=this.state,a=e.title,t=e.body;return r.a.createElement("div",null,r.a.createElement("h1",null,a),r.a.createElement("p",null,t))}}]),a}(n.Component),L=(t(65),t(66),function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(N,null,r.a.createElement(p.a,{basename:"/contactmanager"},r.a.createElement("div",{className:"App"},r.a.createElement(M,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:k}),r.a.createElement(h.a,{exact:!0,path:"/contact/add",component:D}),r.a.createElement(h.a,{exact:!0,path:"/contact/edit/:id",component:P}),r.a.createElement(h.a,{exact:!0,path:"/about",component:_}),r.a.createElement(h.a,{exact:!0,path:"/test",component:F}),r.a.createElement(h.a,{component:I}))))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.454f0cd7.chunk.js.map