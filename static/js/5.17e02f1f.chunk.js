(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{233:function(e,a,n){"use strict";n.d(a,"a",function(){return i});var t=n(0),r=n.n(t),o=n(234),s=n.n(o),i=function(e){var a=e.typeComponent,n=e.cols,t=e.input,o=e.label,i=e.rows,l=e.type,m=e.meta,c=m.error,u=m.warning,d=m.touched;return r.a.createElement("div",{className:s.a.formComponentWrapper},r.a.createElement("label",{className:s.a.formComponentLabel},o),r.a.createElement("div",{className:s.a.formComponent},"textarea"===a?r.a.createElement("textarea",Object.assign({className:s.a.formComponentField+" "+(d&&c?s.a.errorField:""),cols:n,rows:i},t,{placeholder:o})):r.a.createElement("input",Object.assign({className:s.a.formComponentField+" "+(d&&c?s.a.errorField:"")},t,{placeholder:o,size:"25",type:l})),d&&(c&&r.a.createElement("span",{className:s.a.formComponentError},c)||u&&r.a.createElement("span",{className:s.a.formComponentWarning},u))))}},234:function(e,a,n){e.exports={formComponentLabel:"ComponentValidators_formComponentLabel__1g9Xk",formComponent:"ComponentValidators_formComponent__6R4WU",formComponentField:"ComponentValidators_formComponentField__r7AHL",errorField:"ComponentValidators_errorField__2eHy5",formComponentError:"ComponentValidators_formComponentError__1JMXU"}},236:function(e,a,n){"use strict";n.d(a,"a",function(){return t}),n.d(a,"b",function(){return r}),n.d(a,"c",function(){return o});var t=function(e){if(!(e&&e.length>=1))return"Required field"},r=function(e){return function(a){if(a&&a.length>e)return"Max ".concat(e," symbols")}},o=function(e){return function(a){if(a&&a.length<e)return"Minimum ".concat(e," symbols")}}},244:function(e,a,n){"use strict";n.d(a,"a",function(){return p});var t=n(24),r=n(25),o=n(28),s=n(26),i=n(29),l=n(0),m=n.n(l),c=n(27),u=n(22),d=function(e){return{loadLogin:e.auth.loadLogin}},p=function(e){var a=function(a){function n(){return Object(t.a)(this,n),Object(o.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(i.a)(n,a),Object(r.a)(n,[{key:"render",value:function(){return this.props.loadLogin?m.a.createElement(e,this.props):m.a.createElement(u.a,{to:"/login"})}}]),n}(m.a.Component);return Object(c.b)(d)(a)}},259:function(e,a,n){e.exports={dialogsWrapper:"Dialogs_dialogsWrapper__2amst",newDialogForm:"Dialogs_newDialogForm__b8EPm",newDialogText:"Dialogs_newDialogText__9cc80",newDialogBtn:"Dialogs_newDialogBtn__3JpSa",Btn:"Dialogs_Btn__Ir976",dialogs:"Dialogs_dialogs__3By4X",user:"Dialogs_user__1rw9X",messages:"Dialogs_messages__3P9ar",answers:"Dialogs_answers__2TqMC",newDialogMinimum:"Dialogs_newDialogMinimum__3Dg2w",userItem:"Dialogs_userItem__2sV4v"}},308:function(e,a,n){"use strict";n.r(a);var t=n(24),r=n(25),o=n(28),s=n(26),i=n(29),l=n(0),m=n.n(l),c=n(259),u=n.n(c),d=n(117),p=n(118),g=n(236),f=n(233),_=Object(g.c)(3),b=Object(p.a)({form:"newDialogText"})(function(e){return m.a.createElement("form",{onSubmit:e.handleSubmit(e.onSubmit)},m.a.createElement("div",{className:u.a.newDialogForm},m.a.createElement(d.a,{className:u.a.newDialogText,label:"Minimum 3 symbols every 5 seconds",component:f.a,readonly:!0,cols:"40",rows:"5",name:"newTextDialog",type:"text",typeComponent:"textarea",validate:[_]}),m.a.createElement("div",{className:u.a.newDialogBtn},m.a.createElement("button",{className:u.a.Btn,disabled:e.pristine||e.submitting},"Send message"))))}),w=function(e){return m.a.createElement("div",{className:u.a.dialogsWrapper},m.a.createElement("div",{className:u.a.dialogs},m.a.createElement("div",{className:u.a.user},m.a.createElement("div",{className:u.a.userItem},"user"),m.a.createElement("div",{className:u.a.userItem},"user"),m.a.createElement("div",{className:u.a.userItem},"user"),m.a.createElement("div",{className:u.a.userItem},"user")),m.a.createElement("div",{className:u.a.messages},m.a.createElement(b,{onSubmit:function(a){a.newTextDialog&&e.addNewPost(a.newTextDialog);var n;return(n=5e3,new Promise(function(e){return setTimeout(e,n)})).then(function(){return!0})},postSend:e.postSend}),m.a.createElement("div",null,e.myPost.map(function(e){return m.a.createElement("div",{key:e.id},e.post)}))),m.a.createElement("div",{className:u.a.answers},m.a.createElement("h3",null,"Answers"),e.userAnswers.map(function(e,a){return m.a.createElement("div",{key:a},e.answered)}))))},E=n(27),v=n(80),D=n(16),C=n(244),N=function(e){function a(){return Object(t.a)(this,a),Object(o.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return m.a.createElement(w,this.props)}}]),a}(m.a.Component);a.default=Object(D.d)(C.a,Object(E.b)(function(e){return{userAnswers:e.dialogsPage.userAnswers,myPost:e.dialogsPage.myPost,postSend:e.dialogsPage.postSend}},{addNewPost:v.a}))(N)}}]);
//# sourceMappingURL=5.17e02f1f.chunk.js.map