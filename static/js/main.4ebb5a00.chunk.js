(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],{11:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(9),i=a.n(s),o=(a(16),a(17),a(6)),r=a(10),c=a(1),u=a(2),p=a(4),d=a(3),m=a(5),h=a(20),k=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={value:""},a.handleChange=function(e){a.setState({value:e.target.value})},a.sendNewTask=function(e){var t=a.state.value;if(!t.trim())return!1;if("Enter"===e.key&&t.length){var n={value:t,completed:!1,id:Object(h.a)()};a.props.updateInitialTasks(n),a.setState({value:""})}return!0},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",value:this.state.value,onChange:this.handleChange,onKeyUp:this.sendNewTask})}}]),t}(l.a.Component),g=a(7),f=a.n(g),T=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={newValueTask:a.props.task.value,editIntVisible:!1},a.textInput=l.a.createRef(),a.toggleCompleted=function(e){var t=a.props,n=t.updateTasksCondition,l=t.task;n(Object(o.a)({},l,{completed:!l.completed}))},a.toggleEditInput=function(e,t){e.preventDefault(),a.setState((function(e){return{editIntVisible:!e.editIntVisible,newValueTask:t||e.newValueTask.trim()}}),(function(){return a.textInput.current.focus()}))},a.sendNewTaskValue=function(){var e=a.props,t=e.updateTasksCondition,n=e.task,l=Object(o.a)({},n,{value:a.state.newValueTask.trim()||n.value.trim()});a.setState((function(e){return{newValueTask:e.newValueTask||a.props.task.value}})),t(l)},a.handleBlur=function(e){a.state.editIntVisible&&a.toggleEditInput(e),a.sendNewTaskValue()},a.editTaskValue=function(e){a.setState({newValueTask:e.target.value})},a.changeConditionEscapeKey=function(e){"Escape"===e.key&&a.toggleEditInput(e,a.props.task.value)},a.deleteTask=function(){var e=a.props,t=e.deleteTask,n=e.task;t(Object(o.a)({},n,{delete:!0}))},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.task,t=f()(this.state.editIntVisible?"editing":"view",e.completed?"completed":"");return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:f()(t),key:e.id,onDoubleClick:this.toggleEditInput},l.a.createElement("div",{className:"view"},l.a.createElement("input",{type:"checkbox",className:"toggle",id:"todo-".concat(e.id),onChange:this.toggleCompleted,checked:e.completed}),l.a.createElement("label",{htmlFor:"todo-".concat(e.id)},l.a.createElement("pre",{className:"taskLabelPre"},e.value)),l.a.createElement("button",{type:"button",className:"destroy",onClick:this.deleteTask})),l.a.createElement("form",{action:"",onSubmit:this.toggleEditInput},l.a.createElement("input",{type:"text",className:"edit",value:this.state.newValueTask,onChange:this.editTaskValue,onKeyUp:this.changeConditionEscapeKey,onBlur:this.handleBlur,ref:this.textInput}))))}}]),t}(l.a.Component),C=function(e){var t=e.initialTasksList,a=e.showCurrentTasks,n=e.updateTasksCondition,s=e.deleteTask,i=null;return"all"===a?i=t:"completed"===a?i=t.filter((function(e){return e.completed})):"active"===a&&(i=t.filter((function(e){return!e.completed}))),l.a.createElement("ul",{className:"todo-list"},i.map((function(e){return e.value?l.a.createElement(T,{task:e,key:e.id,updateTasksCondition:n,deleteTask:s,initialTasksList:t}):null})))},v=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).changeShowFlag=function(e){var t=e.target;(0,a.props.updateShowCurrentTaskFlag)(t.name)},a.clearCompleted=function(){var e=a.props;(0,e.clearCompleted)(e.initialTasksList.filter((function(e){return!e.completed})))},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.initialTasksList.filter((function(e){return!e.completed}));return l.a.createElement("footer",{className:"footer"},l.a.createElement("span",{className:"todo-count"},e.length>1?"items left ".concat(e.length):"item left ".concat(e.length)),l.a.createElement("ul",{className:"filters"},l.a.createElement("li",null,l.a.createElement("a",{href:"#/",className:"selected",onClick:this.changeShowFlag,name:"all"},"All")),l.a.createElement("li",null,l.a.createElement("a",{href:"#/active",onClick:this.changeShowFlag,name:"active"},"Active")),l.a.createElement("li",null,l.a.createElement("a",{href:"#/completed",onClick:this.changeShowFlag,name:"completed"},"Completed"))),l.a.createElement("button",{type:"button",className:"clear-completed",onClick:this.clearCompleted},"Clear completed"))}}]),t}(l.a.Component);function b(e,t,a){return e.map((function(e){return e.id===t.id?a?t[a]:t:a?e[a]:e}))}v.defaultProps={initialTasksList:[]};var E=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={initialTasksList:[],showCurrentTasks:"all",toggleCompleted:!1},a.updateInitialTasks=function(e){a.setState((function(t){return{initialTasksList:[].concat(Object(r.a)(t.initialTasksList),[e])}}))},a.updateTasksCondition=function(e){a.setState((function(t){return{initialTasksList:b(t.initialTasksList,e),toggleCompleted:!!b(t.initialTasksList,e,"completed").every((function(e){return e}))&&1}}))},a.updateShowCurrentTaskFlag=function(e){a.setState({showCurrentTasks:e})},a.toggleCompletedAll=function(){a.setState((function(e){return{initialTasksList:e.initialTasksList.map((function(t){return Object(o.a)({},t,{completed:!e.toggleCompleted})})),toggleCompleted:!e.toggleCompleted}}))},a.clearCompleted=function(e){a.setState({initialTasksList:e})},a.deleteTask=function(e){a.setState((function(t){return{initialTasksList:t.initialTasksList.filter((function(t){return t.id!==e.id}))}}))},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setState({initialTasksList:JSON.parse(localStorage.getItem("myData"))||[],toggleCompleted:JSON.parse(localStorage.getItem("myToggleCompleted"))||!1})}},{key:"componentDidUpdate",value:function(e,t,a){localStorage.setItem("myData",JSON.stringify(this.state.initialTasksList)),localStorage.setItem("myToggleCompleted",JSON.stringify(this.state.toggleCompleted))}},{key:"render",value:function(){return l.a.createElement("section",{className:"todoapp"},l.a.createElement("header",{className:"header"},l.a.createElement("h1",null,"todos"),l.a.createElement(k,{updateInitialTasks:this.updateInitialTasks})),this.state.initialTasksList.length?l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"main"},l.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",onChange:this.toggleCompletedAll,checked:this.state.toggleCompleted}),l.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),l.a.createElement(C,{initialTasksList:this.state.initialTasksList,showCurrentTasks:this.state.showCurrentTasks,updateTasksCondition:this.updateTasksCondition,deleteTask:this.deleteTask})),l.a.createElement(v,{initialTasksList:this.state.initialTasksList,showCurrentTasks:this.state.showCurrentTasks,updateShowCurrentTaskFlag:this.updateShowCurrentTaskFlag,clearCompleted:this.clearCompleted})):null)}}]),t}(l.a.Component);i.a.render(l.a.createElement(E,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.4ebb5a00.chunk.js.map