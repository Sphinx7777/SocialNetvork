(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{234:function(e,t,a){"use strict";a.d(t,"a",function(){return s}),a.d(t,"b",function(){return l});var n=a(0),o=a.n(n),r=a(235),i=a.n(r),s=function(e){var t=e.input,a=e.label,n=e.size,r=e.type,s=e.placeholder,l=e.autoFocus,c=e.meta,p=c.error,u=c.warning,m=c.touched;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:i.a.inputLabel+" "+(m&&p?i.a.errorInputLabel:"")},a),o.a.createElement("input",Object.assign({className:i.a.inputField+" "+(m&&p?i.a.errorInputField:"")},t,{autoFocus:l,placeholder:s,size:n,type:r})),m&&(p&&o.a.createElement("div",{className:i.a.inputError},p)||u&&o.a.createElement("div",{className:i.a.inputWarning},u,"  ")))},l=function(e){var t=e.input,a=e.label,n=e.rows,r=e.cols,s=e.meta,l=s.error,c=s.warning,p=s.touched;return o.a.createElement(o.a.Fragment,null,o.a.createElement("textarea",Object.assign({className:i.a.areaField+" "+(p&&l?i.a.errorAreaField:"")},t,{placeholder:a,rows:n,cols:r})),p&&(l&&o.a.createElement("div",{className:i.a.areaError},l)||c&&o.a.createElement("div",{className:i.a.areaWarning},c)))}},235:function(e,t,a){e.exports={inputLabel:"ValidatorsComponents_inputLabel__2GXL9",areaLabel:"ValidatorsComponents_areaLabel__19-yA",errorInputLabel:"ValidatorsComponents_errorInputLabel__3_PjR",errorAreaLabel:"ValidatorsComponents_errorAreaLabel__3x-W2",inputField:"ValidatorsComponents_inputField__2b-Mb",areaField:"ValidatorsComponents_areaField__1ARsa",errorInputField:"ValidatorsComponents_errorInputField__26Tpl",errorAreaField:"ValidatorsComponents_errorAreaField__3iWvl",areaError:"ValidatorsComponents_areaError__2OZ-j",inputError:"ValidatorsComponents_inputError__2ueaq"}},251:function(e,t,a){e.exports={settings:"Settings_settings__1qoXu",uploadPhotoWrapper:"Settings_uploadPhotoWrapper__2GP6V",uploadPhoto:"Settings_uploadPhoto__EOyPH",uploadPhotoFinished:"Settings_uploadPhotoFinished__NfJe1",sendPhotoBtn:"Settings_sendPhotoBtn__241WB",sendPhoto:"Settings_sendPhoto__12uxt",settingsFormWrapper:"Settings_settingsFormWrapper__1GXub",submitFinished:"Settings_submitFinished__udxvj",finishedForm:"Settings_finishedForm__10hdU",settingsErrorForm:"Settings_settingsErrorForm__2ALQE",errorForm:"Settings_errorForm__3pamt",settingsForm:"Settings_settingsForm__DzB9p",description:"Settings_description__2XcJN",titleAboutMe:"Settings_titleAboutMe__PHA1D",lookingForAJob:"Settings_lookingForAJob__qk48N",sendBtn:"Settings_sendBtn__SUhVs",active:"Settings_active__1Y6kV",contacts:"Settings_contacts__2OcNW"}},252:function(e,t,a){"use strict";a.d(t,"a",function(){return d});var n=a(24),o=a(25),r=a(28),i=a(26),s=a(29),l=a(0),c=a.n(l),p=a(27),u=a(22),m=function(e){return{loadLogin:e.auth.loadLogin}},d=function(e){var t=function(t){function a(){return Object(n.a)(this,a),Object(r.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(s.a)(a,t),Object(o.a)(a,[{key:"render",value:function(){return this.props.loadLogin?c.a.createElement(e,this.props):c.a.createElement(u.a,{to:"/login"})}}]),a}(c.a.Component);return Object(p.b)(m)(t)}},316:function(e,t,a){"use strict";a.r(t);var n=a(24),o=a(25),r=a(28),i=a(26),s=a(29),l=a(0),c=a.n(l),p=a(251),u=a.n(p),m=a(118),d=a(119),b=a(234),h=Object(d.a)({form:"settingsForm"})(function(e){var t=e.handleSubmit,a=e.pristine,n=e.reset,o=e.submitting;return e.submitFinished&&setTimeout(function(){e.setSubmitFinished()},3e3),c.a.createElement("div",{className:u.a.settingsFormWrapper},c.a.createElement("form",{onSubmit:t},c.a.createElement("div",{className:e.submitFinished?u.a.settingsForm+" "+u.a.active:u.a.settingsForm},c.a.createElement("div",{className:u.a.contacts},c.a.createElement("span",{className:u.a.titleAboutMe},"Contacts"),c.a.createElement(m.a,{name:"contacts.skype",type:"text",component:b.a,label:"skype",validate:[]}),c.a.createElement(m.a,{name:"contacts.facebook",type:"text",component:b.a,label:"facebook",validate:[]}),c.a.createElement(m.a,{name:"contacts.instagram",type:"text",component:b.a,label:"instagram",validate:[]}),c.a.createElement(m.a,{name:"contacts.vk",type:"text",component:b.a,label:"vk",validate:[]}),c.a.createElement(m.a,{name:"contacts.website",type:"text",component:b.a,label:"My website",validate:[]}),c.a.createElement(m.a,{name:"contacts.github",type:"text",component:b.a,label:"Git",validate:[]})),c.a.createElement("div",{className:u.a.description},c.a.createElement("span",{className:u.a.titleAboutMe},"About me"),c.a.createElement(m.a,{name:"fullName",type:"text",component:b.a,label:"fullName",validate:[]}),c.a.createElement(m.a,{name:"aboutMe",type:"text",component:b.a,label:"aboutMe",validate:[]}),c.a.createElement(m.a,{name:"lookingForAJobDescription",type:"text",component:b.a,label:"lookingForAJobDescription",validate:[]}),c.a.createElement(m.a,{name:"lookingForAJob",type:"checkbox",component:b.a,label:"lookingForAJob",validate:[]}),c.a.createElement("button",{className:u.a.sendBtn,type:"submit",disabled:a||o},"To send"),c.a.createElement("button",{className:u.a.sendBtn,disabled:a,onClick:n},"Clear fields"))),e.error&&c.a.createElement("div",{className:u.a.settingsErrorForm},c.a.createElement("span",{className:u.a.errorForm},e.error)),e.submitFinished&&c.a.createElement("div",{className:u.a.submitFinished},c.a.createElement("span",{className:u.a.finishedForm},"\u0414\u0430\u043d\u043d\u044b\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u044b"))))}),_=a(61),g=function(e){var t=Object(l.useState)(null),a=Object(_.a)(t,2),n=a[0],o=a[1];return e.uploadPhotos&&setTimeout(function(){return e.setUploadPhoto(null)},5e3),c.a.createElement("div",{className:u.a.uploadPhotoWrapper},c.a.createElement("span",null,"Upload user photo"),c.a.createElement("div",{className:u.a.uploadPhoto},c.a.createElement("input",{name:"image",type:"file",onChange:function(e){var t=new FormData;t.append("image",e.currentTarget.files[0]),o(t)}}),c.a.createElement("div",{className:u.a.sendPhotoBtn},c.a.createElement("button",{className:u.a.sendPhoto,onClick:function(){e.onSubmit(n),o(null)},disabled:!n},"Upload photo")),e.uploadPhotos?c.a.createElement("div",{className:u.a.uploadPhotoFinished},"\u0424\u043e\u0442\u043e \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043e"):""))},f=function(e){function t(){var e,a;Object(n.a)(this,t);for(var o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return(a=Object(r.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).onSubmit=function(e){a.props.sendUserPhotos(e)},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return c.a.createElement("div",{className:u.a.settings},c.a.createElement(h,{initialValues:this.props.profile,onSubmit:this.props.onSubmit,submitFinished:this.props.submitFinished,setSubmitFinished:this.props.setSubmitFinished}),c.a.createElement(g,{onSubmit:this.onSubmit,uploadPhotos:this.props.uploadPhotos,setUploadPhoto:this.props.setUploadPhoto}))}}]),t}(c.a.Component),F=a(27),E=a(81),v=a(252),P=a(16),S=a(62),N=function(e){function t(){var e,a;Object(n.a)(this,t);for(var o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return(a=Object(r.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).onSubmit=function(e){a.props.sendSettingsForm(e);var t;return(t=1e4,new Promise(function(e){return setTimeout(e,t)})).then(function(){return!0})},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.getNewProfile(this.props.loginId)}},{key:"componentDidUpdate",value:function(e){e.profile!==this.props.profile&&this.props.getNewProfile(this.props.loginId)}},{key:"render",value:function(){return c.a.createElement(f,{onSubmit:this.onSubmit,submitFinished:this.props.submitFinished,setSubmitFinished:this.props.setSubmitFinished,sendUserPhotos:this.props.sendUserPhotos,uploadPhotos:this.props.uploadPhotos,setUploadPhoto:this.props.setUploadPhoto,profile:this.props.profile})}}]),t}(c.a.Component);t.default=Object(P.d)(v.a,Object(F.b)(function(e){return{submitFinished:e.settings.submitFinished,uploadPhotos:e.settings.uploadPhotos,loginId:e.auth.id,profile:e.profilePage.profile}},{sendSettingsForm:E.b,getNewProfile:S.f,setSubmitFinished:E.d,sendUserPhotos:E.c,setUploadPhoto:E.e}))(N)}}]);
//# sourceMappingURL=8.6cde258d.chunk.js.map