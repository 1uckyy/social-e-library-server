(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){},24:function(e,t,a){e.exports=a.p+"static/media/books.66030ad9.png"},46:function(e,t,a){e.exports=a(83)},83:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(42),r=a(23),c=a(1),s=a(2),i=a(4),m=a(3),u=a(7),h=a(5),b=a(8),d=a.n(b),E=(a(21),a(24)),p=a.n(E),f=a(6);var v=function(){return l.a.createElement("div",{className:"header"},l.a.createElement(f.b,{to:"/"},l.a.createElement("img",{className:"books-image",src:p.a,alt:"logo"})," "),l.a.createElement(f.b,{to:"/",className:"lib"},"Social e-library"),l.a.createElement("div",{className:"header-menu"}))};var k=function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{style:{textAlign:"center",fontSize:14,marginTop:10}},'"\u041d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043a\u043d\u0438\u0433\u0438 \u2014 \u0446\u0435\u043b\u043e\u0435 \u043f\u0440\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435. \u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u044d\u0442\u043e \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 \u0447\u0435\u043c \u0437\u0430\u0431\u0430\u0432\u0430, \u043e\u0434\u043d\u0430\u043a\u043e \u0437\u0430\u0442\u0435\u043c \u043a\u043d\u0438\u0433\u0430 \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u043b\u044e\u0431\u043e\u0432\u043d\u0438\u0446\u0435\u0439, \u0436\u0435\u043d\u043e\u0439, \u0445\u043e\u0437\u044f\u0438\u043d\u043e\u043c \u0438, \u043d\u0430\u043a\u043e\u043d\u0435\u0446, \u2014 \u0442\u0438\u0440\u0430\u043d\u043e\u043c."',l.a.createElement("br",null),"-\u0423\u0438\u043d\u0441\u0442\u043e\u043d \u0427\u0435\u0440\u0447\u0438\u043b\u043b\u044c-"))},g=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={email:"",password:""},e.onChange=e.onChange.bind(Object(u.a)(e)),e.onSubmit=e.onSubmit.bind(Object(u.a)(e)),e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"onChange",value:function(e){this.setState(Object(r.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault(),function(e){return d.a.post("users/login",{email:e.email,password:e.password}).then(function(e){if(!e.data.error)return localStorage.setItem("usertoken",e.data),e.data}).catch(function(e){console.log(e)})}({email:this.state.email,password:this.state.password}).then(function(e){localStorage.usertoken?t.props.history.push("/profile"):alert("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435!")})}},{key:"render",value:function(){return l.a.createElement("div",{className:"root"},l.a.createElement(v,null),l.a.createElement("div",{className:"container",style:{flexGrow:1}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 mt-5 mx-auto"},l.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},l.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"\u0412\u0445\u043e\u0434"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"\u0410\u0434\u0440\u0435\u0441 Email"),l.a.createElement("input",{type:"email",className:"form-control",name:"email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 Email",value:this.state.email,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"password"},"\u041f\u0430\u0440\u043e\u043b\u044c"),l.a.createElement("input",{type:"password",className:"form-control",name:"password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",value:this.state.password,onChange:this.onChange})),l.a.createElement("button",{type:"submit",className:"btn btn-lg btn-primary btn-block"},"\u0412\u043e\u0439\u0442\u0438"))))),l.a.createElement(k,null))}}]),t}(n.Component),y=a(16),_=a.n(y),N=function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.todo.book_title),l.a.createElement("td",null,e.todo.book_author),l.a.createElement("td",null,l.a.createElement(f.b,{to:"/read/"+e.todo._id},l.a.createElement(_.a,{variant:"info"},"\u0427\u0438\u0442\u0430\u0442\u044c"))))},j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onChange=a.onChange.bind(Object(u.a)(a)),a.searchClick=a.searchClick.bind(Object(u.a)(a)),a.state={book_title:"",todos:[]},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"onChange",value:function(e){this.setState({book_title:e.target.value})}},{key:"searchClick",value:function(){var e=this;this.state.book_title?d.a.get("books/search/"+this.state.book_title).then(function(t){e.setState({todos:t.data})}).catch(function(e){console.log(e)}):d.a.get("books").then(function(t){e.setState({todos:t.data})}).catch(function(e){console.log(e)})}},{key:"componentDidMount",value:function(){var e=this;d.a.get("books").then(function(t){e.setState({todos:t.data})}).catch(function(e){console.log(e)})}},{key:"todoList",value:function(){return this.state.todos.map(function(e,t){return l.a.createElement("tbody",null,l.a.createElement(N,{todo:e,key:t}))})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"search"},l.a.createElement("div",{className:"search-label"},"\u041f\u043e\u0438\u0441\u043a"),l.a.createElement("input",{className:"search-input",type:"text",onChange:this.onChange})),l.a.createElement(_.a,{variant:"info",onClick:this.searchClick},"\u0418\u0441\u043a\u0430\u0442\u044c"),l.a.createElement("div",{className:"books-users-label"},"\u041a\u043d\u0438\u0433\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438"),l.a.createElement("table",{className:"table table-striped",style:{marginTop:10,width:600}},l.a.createElement("thead",{className:"thead-dark"},l.a.createElement("tr",null,l.a.createElement("th",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),l.a.createElement("th",null,"\u0410\u0432\u0442\u043e\u0440"),l.a.createElement("th",null,"\u0421\u0441\u044b\u043b\u043a\u0430"))),this.todoList()))}}]),t}(n.Component),O=a(14),C=a.n(O),x=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={first_name:"",last_name:"",email:""},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){if(localStorage.usertoken){var e=localStorage.usertoken,t=C()(e);this.setState({first_name:t.first_name,last_name:t.last_name,email:t.email})}}},{key:"render",value:function(){var e=l.a.createElement("div",null,l.a.createElement("div",{className:"search-label"},"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c! "),l.a.createElement("div",null,"\u0412\u043e\u0439\u0434\u0438\u0442\u0435 \u0438\u043b\u0438 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c,",l.a.createElement("br",null),"\u0447\u0442\u043e\u0431\u044b \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0432\u043e\u0438 \u043a\u043d\u0438\u0433\u0438!")),t=l.a.createElement("div",null,l.a.createElement("div",{className:"search-label"},"\u041f\u0440\u0438\u0432\u0435\u0442, ",this.state.first_name,"!"),l.a.createElement("div",null,"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u043a\u043d\u0438\u0433\u0438,",l.a.createElement("br",null),"\u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c\u0438.",l.a.createElement("br",null),"\u041b\u044e\u0431\u0443\u044e \u0438\u0437 \u043d\u0438\u0445 \u0442\u044b \u043c\u043e\u0436\u0435\u0448\u044c \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c.",l.a.createElement("br",null),"\u0427\u0442\u043e\u0431\u044b \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0432\u043e\u044e \u043a\u043d\u0438\u0433\u0443 \u043f\u0435\u0440\u0435\u0439\u0434\u0438 \u0432 \u043f\u0440\u043e\u0444\u0438\u043b\u044c."));return l.a.createElement("div",null,localStorage.usertoken?t:e)}}]),t}(n.Component);var S=function(){return l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:"menu"},l.a.createElement("div",{className:"menu-label"},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"),l.a.createElement("div",{className:"menu-button"},l.a.createElement(f.b,{to:"/aboutlibrary"},"\u041e \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0435")),l.a.createElement("div",{className:"menu-button"},l.a.createElement(f.b,{to:"/aboutauthor"},"\u041e\u0431 \u0430\u0432\u0442\u043e\u0440\u0435")),l.a.createElement("div",{className:"menu-button"},l.a.createElement(f.b,{to:"/help"},"\u041f\u043e\u043c\u043e\u0449\u044c"))),l.a.createElement("div",{className:"last-updates"},l.a.createElement(j,null)),l.a.createElement("div",{className:"search"},l.a.createElement(x,null)))},w=a(17),T=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"logOut",value:function(e){e.preventDefault(),localStorage.removeItem("usertoken"),this.props.history.push("/")}},{key:"render",value:function(){var e=l.a.createElement("div",{className:"header-menu"},l.a.createElement(f.b,{to:"/login",className:"login-button"},"\u0412\u043e\u0439\u0442\u0438"),l.a.createElement(f.b,{to:"/register",className:"registr-button"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f")),t=l.a.createElement("div",{className:"header-menu"},l.a.createElement(f.b,{to:"/profile",className:"login-button"},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),l.a.createElement("a",{href:"",onClick:this.logOut.bind(this),className:"registr-button"},"\u0412\u044b\u0439\u0442\u0438"));return l.a.createElement("div",{className:"header"},l.a.createElement(f.b,{to:"/"},l.a.createElement("img",{className:"books-image",src:p.a,alt:"logo"})," "),l.a.createElement(f.b,{to:"/",className:"lib"},"Social e-library"),localStorage.usertoken?t:e)}}]),t}(n.Component),D=Object(w.d)(T);var G=function(){return l.a.createElement("div",{className:"root"},l.a.createElement(D,null),l.a.createElement(S,null),l.a.createElement(k,null))},M=function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.todo.book_title),l.a.createElement("td",null,e.todo.book_author),l.a.createElement("td",null,l.a.createElement(f.b,{to:"/read/"+e.todo._id},l.a.createElement(_.a,{variant:"info"},"\u0427\u0438\u0442\u0430\u0442\u044c"))),l.a.createElement("td",null,l.a.createElement(f.b,{to:"/edit/"+e.todo._id},l.a.createElement(_.a,{variant:"info"},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"))),l.a.createElement("td",null,l.a.createElement(f.b,{to:"/delete/"+e.todo._id},l.a.createElement(_.a,{variant:"info"},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))))},R=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={id:"",email:"",todos:[]},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a.get("books").then(function(t){e.setState({todos:t.data})}).catch(function(e){console.log(e)});var t=localStorage.usertoken,a=C()(t);this.setState({id:a._id,email:a.email})}},{key:"todoList",value:function(){var e=this;return this.state.todos.map(function(t,a){if(t.book_author==e.state.email)return l.a.createElement("tbody",null,l.a.createElement(M,{todo:t,key:a}))})}},{key:"render",value:function(){return l.a.createElement("div",{style:{marginTop:20}},l.a.createElement("h3",{style:{marginLeft:20}},"\u0412\u0430\u0448\u0438 \u043a\u043d\u0438\u0433\u0438"),l.a.createElement("table",{className:"table table-striped",style:{marginTop:10}},l.a.createElement("thead",{className:"thead-dark"},l.a.createElement("tr",null,l.a.createElement("th",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),l.a.createElement("th",null,"\u0410\u0432\u0442\u043e\u0440"),l.a.createElement("th",null,"\u0427\u0438\u0442\u0430\u0442\u044c"),l.a.createElement("th",null,"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"),l.a.createElement("th",null,"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))),this.todoList()),l.a.createElement("div",{style:{marginTop:10,marginLeft:20,marginBottom:15}},l.a.createElement(f.b,{to:"/add/"+this.state.id},l.a.createElement(_.a,{variant:"primary"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043d\u0438\u0433\u0443"))))}}]),t}(n.Component),F=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={first_name:"",last_name:"",email:""},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.usertoken,t=C()(e);this.setState({first_name:t.first_name,last_name:t.last_name,email:t.email})}},{key:"render",value:function(){return l.a.createElement("div",{className:"root"},l.a.createElement(v,null),l.a.createElement("div",{style:{flexGrow:1,overflow:"auto",marginTop:20}},l.a.createElement("div",null,l.a.createElement("div",{className:"col-sm-8 mx-auto"},l.a.createElement("h1",{className:"text-center"},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043f\u0440\u043e\u0444\u0438\u043b\u0435")),l.a.createElement("table",{className:"table col-md-6 mx-auto"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"\u0418\u043c\u044f:"),l.a.createElement("td",null,this.state.first_name)),l.a.createElement("tr",null,l.a.createElement("td",null,"\u0424\u0430\u043c\u0438\u043b\u0438\u044f:"),l.a.createElement("td",null,this.state.last_name)),l.a.createElement("tr",null,l.a.createElement("td",null,"Email:"),l.a.createElement("td",null,this.state.email))))),l.a.createElement(R,null)),l.a.createElement(k,null))}}]),t}(n.Component),L=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={first_name:"",last_name:"",email:"",password:""},e.onChange=e.onChange.bind(Object(u.a)(e)),e.onSubmit=e.onSubmit.bind(Object(u.a)(e)),e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"onChange",value:function(e){this.setState(Object(r.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a,n={first_name:this.state.first_name,last_name:this.state.last_name,email:this.state.email,password:this.state.password};(a=n,d.a.post("users/register",{first_name:a.first_name,last_name:a.last_name,email:a.email,password:a.password}).then(function(e){if(!e.data.error)return 1;alert("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0442\u0430\u043a\u043e\u0439 \u043f\u043e\u0447\u0442\u043e\u0439 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442!")})).then(function(e){e&&t.props.history.push("/login")})}},{key:"render",value:function(){return l.a.createElement("div",{className:"root"},l.a.createElement(v,null),l.a.createElement("div",{style:{flexGrow:1}},l.a.createElement("div",{className:"col-md-6 mt-5 mx-auto"},l.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},l.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"first_name"},"\u0418\u043c\u044f"),l.a.createElement("input",{type:"text",className:"form-control",name:"first_name",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",value:this.state.first_name,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"last_name"},"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"),l.a.createElement("input",{type:"text",className:"form-control",name:"last_name",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0430\u043c\u0438\u043b\u0438\u044e",value:this.state.last_name,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"\u0410\u0434\u0440\u0435\u0441 Email"),l.a.createElement("input",{type:"email",className:"form-control",name:"email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 Email",value:this.state.email,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"password"},"\u041f\u0430\u0440\u043e\u043b\u044c"),l.a.createElement("input",{type:"password",className:"form-control",name:"password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",value:this.state.password,onChange:this.onChange})),l.a.createElement("button",{type:"submit",className:"btn btn-lg btn-primary btn-block"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f")))),l.a.createElement(k,null))}}]),t}(n.Component),B=a(45),I=a.n(B),V=a(15),J=a.n(V),W=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={book_title:"",book_author:"",book_text:""},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a.get("http://localhost:4000/books/"+this.props.match.params.id).then(function(t){e.setState({book_title:t.data.book_title,book_author:t.data.book_author,book_text:t.data.book_text})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return l.a.createElement("div",{className:"root"},l.a.createElement(D,null),l.a.createElement("div",{style:{flexGrow:1,overflow:"auto"}},l.a.createElement(I.a,{fluid:!0},l.a.createElement(J.a,null,l.a.createElement("h1",null,this.state.book_title),l.a.createElement("h4",null,this.state.book_author),l.a.createElement("p",null,this.state.book_text)))),l.a.createElement(k,null))}}]),t}(n.Component),z=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onChangeTodoDescription=a.onChangeTodoDescription.bind(Object(u.a)(a)),a.onChangeTodoResponsible=a.onChangeTodoResponsible.bind(Object(u.a)(a)),a.onSubmit=a.onSubmit.bind(Object(u.a)(a)),a.state={book_title:"",book_author:"",book_text:""},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"onChangeTodoDescription",value:function(e){this.setState({book_title:e.target.value})}},{key:"onChangeTodoResponsible",value:function(e){this.setState({book_text:e.target.value})}},{key:"componentDidMount",value:function(){var e=localStorage.usertoken,t=C()(e);this.setState({book_author:t.email})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={book_title:this.state.book_title,book_author:this.state.book_author,book_text:this.state.book_text};d.a.post("http://localhost:4000/books/add",t).then(function(e){return console.log(e.data)}),this.setState({book_title:"",book_author:"",book_text:""}),this.props.history.push("/profile")}},{key:"render",value:function(){return l.a.createElement("div",{className:"root"},l.a.createElement(D,null),l.a.createElement("div",{className:"container",style:{flexGrow:1,overflow:"auto"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 mt-5 mx-auto"},l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0439 \u043a\u043d\u0438\u0433\u0438"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: "),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.book_title,onChange:this.onChangeTodoDescription})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"\u0410\u0432\u0442\u043e\u0440: "),l.a.createElement("input",{disabled:!0,type:"text",className:"form-control",value:this.state.book_author})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"\u0422\u0435\u043a\u0441\u0442: "),l.a.createElement("textarea",{class:"form-control",value:this.state.book_text,onChange:this.onChangeTodoResponsible,"aria-label":"With textarea"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",value:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",className:"btn btn-primary"})))))),l.a.createElement(k,null))}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onChangeTodoDescription=a.onChangeTodoDescription.bind(Object(u.a)(a)),a.onChangeTodoResponsible=a.onChangeTodoResponsible.bind(Object(u.a)(a)),a.onSubmit=a.onSubmit.bind(Object(u.a)(a)),a.state={book_id:"",book_title:"",book_author:"",book_text:""},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a.get("http://localhost:4000/books/"+this.props.match.params.id).then(function(t){e.setState({book_id:e.props.match.params.id,book_title:t.data.book_title,book_author:t.data.book_author,book_text:t.data.book_text})}).catch(function(e){console.log(e)});var t=localStorage.usertoken,a=C()(t);this.setState({book_author:a.email})}},{key:"onChangeTodoDescription",value:function(e){this.setState({book_title:e.target.value})}},{key:"onChangeTodoResponsible",value:function(e){this.setState({book_text:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={book_title:this.state.book_title,book_author:this.state.book_author,book_text:this.state.book_text};d.a.post("http://localhost:4000/books/update/"+this.state.book_id,t).then(function(e){return console.log(e.data)}),this.props.history.push("/profile")}},{key:"render",value:function(){return l.a.createElement("div",{className:"root"},l.a.createElement(D,null),l.a.createElement("div",{className:"container",style:{flexGrow:1,overflow:"auto"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 mt-5 mx-auto"},l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043a\u043d\u0438\u0433\u0438"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: "),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.book_title,onChange:this.onChangeTodoDescription})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"\u0410\u0432\u0442\u043e\u0440: "),l.a.createElement("input",{disabled:!0,type:"text",className:"form-control",value:this.state.book_author})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"\u0422\u0435\u043a\u0441\u0442: "),l.a.createElement("textarea",{class:"form-control",value:this.state.book_text,onChange:this.onChangeTodoResponsible,"aria-label":"With textarea"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",value:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u043a\u043d\u0438\u0433\u0443",className:"btn btn-primary"})))))),l.a.createElement(k,null))}}]),t}(n.Component),K=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){d.a.delete("http://localhost:4000/books/delete/"+this.props.match.params.id).then(console.log("Deleted")).catch(function(e){return console.log(e)}),this.props.history.push("/profile")}},{key:"render",value:function(){return l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",value:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0438\u0442\u044c",className:"btn btn-primary"}))}}]),t}(n.Component),q=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"root"},l.a.createElement(D,null),l.a.createElement("div",{style:{flexGrow:1,overflow:"auto"}},l.a.createElement(J.a,null,l.a.createElement("h1",{style:{marginTop:40}},"\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 (Social e-library)"),l.a.createElement("p",null,"\u0414\u0430\u043d\u043d\u0430\u044f \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0430 \u043f\u0440\u0435\u0436\u0434\u0435 \u0432\u0441\u0435\u0433\u043e \u0434\u043b\u044f \u0442\u0432\u043e\u0440\u0447\u0435\u0441\u043a\u0438\u0445 \u043b\u044e\u0434\u0435\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0445\u043e\u0442\u044f\u0442 \u0432\u044b\u0440\u0430\u0437\u0438\u0442\u044c \u0441\u0435\u0431\u044f \u0447\u0435\u0440\u0435\u0437 \u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u043d\u044b\u0435 \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u0438 \u043f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u044d\u0442\u0438\u043c \u0441 \u0434\u0440\u0443\u0433\u0438\u043c\u0438 \u043b\u044e\u0434\u044c\u043c\u0438."),l.a.createElement("h4",null,"\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438"),l.a.createElement("p",null,"\u041f\u0440\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b\u0441\u044f \u0442\u0430\u043a \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u043c\u044b\u0439 MERN stack:"),l.a.createElement("ul",null,l.a.createElement("li",null,"MongoDB"),l.a.createElement("li",null,"Express"),l.a.createElement("li",null,"React.js"),l.a.createElement("li",null,"Node.js")),l.a.createElement("p",null,"\u0422\u0430\u043a\u0436\u0435 \u0434\u043b\u044f \u0432\u0451\u0440\u0441\u0442\u043a\u0438 \u0447\u0430\u0441\u0442\u0438\u0447\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b\u0441\u044f Bootstrap."))),l.a.createElement(k,null))}}]),t}(n.Component),H=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"root"},l.a.createElement(D,null),l.a.createElement("div",{style:{flexGrow:1,overflow:"auto"}},l.a.createElement(J.a,null,l.a.createElement("h1",{style:{marginTop:40}},"\u041e\u0431 \u0430\u0432\u0442\u043e\u0440\u0435"),l.a.createElement("p",null,"\u041f\u0440\u043e\u0435\u043a\u0442 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043b \u0441\u0442\u0443\u0434\u0435\u043d\u0442 \u042f\u0440\u0413\u0423 \u0438\u043c. \u041f.\u0413.\u0414\u0435\u043c\u0438\u0434\u043e\u0432\u0430 \u0433\u0440\u0443\u043f\u043f\u044b \u0418\u0422-31\u0411\u041e \u041d\u043e\u0432\u0430\u043a \u0412\u043b\u0430\u0434\u0438\u0441\u043b\u0430\u0432 \u0410\u043d\u0434\u0440\u0435\u0435\u0432\u0438\u0447."),l.a.createElement("h4",null,"\u0421\u0441\u044b\u043b\u043a\u0438"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/1uckyy/social-e-library"},"\u041f\u0440\u043e\u0435\u043a\u0442 \u043d\u0430 Github"))),l.a.createElement("h4",null,"\u041e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u0432\u044f\u0437\u044c"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u041f\u043e\u0447\u0442\u0430: novak.vlad97@mail.ru"),l.a.createElement("li",null,l.a.createElement("a",{href:"https://vk.com/1uckyy"},"VK"))))),l.a.createElement(k,null))}}]),t}(n.Component),P=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"root"},l.a.createElement(D,null),l.a.createElement("div",{style:{flexGrow:1,overflow:"auto"}},l.a.createElement(J.a,null,l.a.createElement("h1",{style:{marginTop:40}},"\u041f\u043e\u043c\u043e\u0449\u044c"),l.a.createElement("h4",null,"\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"),l.a.createElement("ul",null,l.a.createElement("li",null,'\u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430 \u043a\u043d\u0438\u0433\u0438 \u0432 \u043f\u043e\u0438\u0441\u043a\u043e\u0432\u0443\u044e \u0441\u0442\u0440\u043e\u043a\u0443 \u043d\u0443\u0436\u043d\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u0422\u041e\u0427\u041d\u041e\u0415 \u0438 \u041f\u041e\u041b\u041d\u041e\u0415 \u0435\u0451 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435, \u0430 \u0437\u0430\u0442\u0435\u043c \u043d\u0430\u0436\u0430\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443 "\u0438\u0441\u043a\u0430\u0442\u044c"'),l.a.createElement("li",null,'\u0435\u0441\u043b\u0438 \u043f\u043e\u0441\u043b\u0435 \u043f\u043e\u0438\u0441\u043a\u0430 \u043d\u0443\u0436\u043d\u043e \u0432\u043d\u043e\u0432\u044c \u0432\u044b\u0432\u0435\u0441\u0442\u0438 \u0432\u0441\u0435 \u043a\u043d\u0438\u0433\u0438, \u0442\u043e \u043c\u043e\u0436\u043d\u043e \u043b\u0438\u0431\u043e \u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0438\u0441\u043a\u043e\u0432\u0443\u044e \u0441\u0442\u0440\u043e\u043a\u0443 \u043f\u0443\u0441\u0442\u043e\u0439 \u0438 \u043d\u0430\u0436\u0430\u0442\u044c "\u0438\u0441\u043a\u0430\u0442\u044c", \u043b\u0438\u0431\u043e \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443'),l.a.createElement("li",null,'\u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c \u0447\u0438\u0442\u0430\u0442\u044c \u043a\u043d\u0438\u0433\u0443 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 "\u0427\u0438\u0442\u0430\u0442\u044c" \u043d\u0430\u043f\u0440\u043e\u0442\u0438\u0432 \u043d\u0443\u0436\u043d\u043e\u0439 \u0432\u0430\u043c \u043a\u043d\u0438\u0433\u0438')),l.a.createElement("h4",null,"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),l.a.createElement("ul",null,l.a.createElement("li",null,'\u0434\u043b\u044f \u0432\u0445\u043e\u0434\u0430 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 "\u0412\u043e\u0439\u0442\u0438" \u0438 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0438 \u043f\u043e\u0447\u0442\u0443 \u0438 \u043f\u0430\u0440\u043e\u043b\u044c, \u043f\u043e\u0441\u043b\u0435 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 "\u0412\u0445\u043e\u0434"'),l.a.createElement("li",null,'\u0434\u043b\u044f \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f" \u0438 \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u044f, \u043f\u043e\u0441\u043b\u0435 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"')),l.a.createElement("h4",null,"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u0434\u043b\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f, \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f, \u043f\u0440\u043e\u0447\u0442\u0435\u043d\u0438\u044f \u0438\u043b\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u043a\u043d\u0438\u0433\u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u0441 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u043c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c")))),l.a.createElement(k,null))}}]),t}(n.Component);Object(o.render)(l.a.createElement(f.a,null,l.a.createElement(w.a,{exact:!0,path:"/",component:G}),l.a.createElement(w.a,{exact:!0,path:"/login",component:g}),l.a.createElement(w.a,{exact:!0,path:"/register",component:L}),l.a.createElement(w.a,{exact:!0,path:"/profile",component:F}),l.a.createElement(w.a,{exact:!0,path:"/aboutlibrary",component:q}),l.a.createElement(w.a,{exact:!0,path:"/aboutauthor",component:H}),l.a.createElement(w.a,{exact:!0,path:"/help",component:P}),l.a.createElement(w.a,{path:"/read/:id",component:W}),l.a.createElement(w.a,{path:"/add/:id",component:z}),l.a.createElement(w.a,{path:"/edit/:id",component:A}),l.a.createElement(w.a,{path:"/delete/:id",component:K})),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.3856e191.chunk.js.map