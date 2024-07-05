(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{2012:function(e,t,n){"use strict";n.r(t);var r,a=n(695),o=n(705),i=n(711),s=n.n(i),l=n(707),c=n(719),p=n(697),m=n(28),u=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),d=function(e){function t(t){var n=e.call(this,t)||this;return n.mounted=!1,n.handleSubmit=function(){return n.props.onSubmit({description:n.state.description,name:n.state.name,projectKeyPattern:n.state.projectKeyPattern}).then(n.props.onClose)},n.handleNameChange=function(e){n.setState({name:e.currentTarget.value})},n.handleDescriptionChange=function(e){n.setState({description:e.currentTarget.value})},n.handleProjectKeyPatternChange=function(e){n.setState({projectKeyPattern:e.currentTarget.value})},n.state={description:t.permissionTemplate&&t.permissionTemplate.description||"",name:t.permissionTemplate&&t.permissionTemplate.name||"",projectKeyPattern:t.permissionTemplate&&t.permissionTemplate.projectKeyPattern||""},n}return u(t,e),t.prototype.render=function(){var e=this;return a.createElement(c.a,{header:this.props.header,onClose:this.props.onClose,onSubmit:this.handleSubmit,size:"small"},function(t){var n=t.onCloseClick,r=t.onFormSubmit,o=t.submitting;return a.createElement("form",{id:"permission-template-form",onSubmit:r},a.createElement("header",{className:"modal-head"},a.createElement("h2",null,e.props.header)),a.createElement("div",{className:"modal-body"},a.createElement("div",{className:"modal-field"},a.createElement("label",{htmlFor:"permission-template-name"},Object(m.l)("name"),a.createElement("em",{className:"mandatory"},"*")),a.createElement("input",{autoFocus:!0,id:"permission-template-name",maxLength:256,name:"name",onChange:e.handleNameChange,required:!0,type:"text",value:e.state.name}),a.createElement("div",{className:"modal-field-description"},Object(m.l)("should_be_unique"))),a.createElement("div",{className:"modal-field"},a.createElement("label",{htmlFor:"permission-template-description"},Object(m.l)("description")),a.createElement("textarea",{id:"permission-template-description",name:"description",onChange:e.handleDescriptionChange,value:e.state.description})),a.createElement("div",{className:"modal-field"},a.createElement("label",{htmlFor:"permission-template-project-key-pattern"},Object(m.l)("permission_template.key_pattern")),a.createElement("input",{id:"permission-template-project-key-pattern",maxLength:500,name:"projectKeyPattern",onChange:e.handleProjectKeyPatternChange,type:"text",value:e.state.projectKeyPattern}),a.createElement("div",{className:"modal-field-description"},Object(m.l)("permission_template.key_pattern.description")))),a.createElement("footer",{className:"modal-foot"},a.createElement(l.a,{className:"spacer-right",loading:o}),a.createElement(p.i,{disabled:o,id:"permission-template-submit"},e.props.confirmButtonText),a.createElement(p.h,{disabled:o,id:"permission-template-cancel",onClick:n},Object(m.l)("cancel"))))})},t}(a.PureComponent),f=n(850),h=n(735),v=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),g=function(){return(g=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},y=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={createModal:!1},t.handleCreateClick=function(){t.setState({createModal:!0})},t.handleCreateModalClose=function(){t.mounted&&t.setState({createModal:!1})},t.handleCreateModalSubmit=function(e){var n=t.props.organization&&t.props.organization.key;return Object(f.f)(g({},e,{organization:n})).then(function(e){t.props.refresh().then(function(){var r=n?"/organizations/"+n+"/permission_templates":"/permission_templates";t.props.router.push({pathname:r,query:{id:e.permissionTemplate.id}})})})},t}return v(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){return a.createElement("header",{className:"page-header",id:"project-permissions-header"},a.createElement("h1",{className:"page-title"},Object(m.l)("permission_templates.page")),!this.props.ready&&a.createElement("i",{className:"spinner"}),a.createElement("div",{className:"page-actions"},a.createElement(p.a,{onClick:this.handleCreateClick},Object(m.l)("create")),this.state.createModal&&a.createElement(d,{confirmButtonText:Object(m.l)("create"),header:Object(m.l)("permission_template.new_template"),onClose:this.handleCreateModalClose,onSubmit:this.handleCreateModalSubmit})),a.createElement("p",{className:"page-description"},Object(m.l)("permission_templates.page.description")))},t}(a.PureComponent),b=Object(h.a)(y),E=n(714),z=n(761),C=n(715),_=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),j=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return _(t,e),t.prototype.renderTooltip=function(e){return"user"===e.key||"codeviewer"===e.key?a.createElement("div",null,a.createElement(z.a,{message:Object(m.l)("projects_role",e.key,"desc")}),a.createElement(C.a,{className:"spacer-top",variant:"warning"},Object(m.l)("projects_role.public_projects_warning"))):a.createElement(z.a,{message:Object(m.l)("projects_role",e.key,"desc")})},t.prototype.render=function(){var e=this,t=this.props.permissions.map(function(t){return a.createElement("th",{className:"permission-column",key:t.key},a.createElement("div",{className:"permission-column-inner"},a.createElement("span",{className:"text-middle"},Object(m.l)("projects_role",t.key)),a.createElement(E.a,{className:"spacer-left",overlay:e.renderTooltip(t)})))});return a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null," "),t,a.createElement("th",{className:"thin nowrap text-right"}," ")))},t}(a.PureComponent),O=n(701),N=n(712),S=n.n(N);function P(e){var t=e.organization,n=e.template,r=t&&!t.isDefault?["TRK"]:n.defaultFor,o=S()(r).map(function(e){return Object(m.l)("qualifiers",e)}).join(", ");return a.createElement("div",null,a.createElement("span",{className:"badge spacer-right"},Object(m.m)("permission_template.default_for",o)))}function k(e){var t=e.template,n=e.organization,r=n?"/organizations/"+n.key+"/permission_templates":"/permission_templates";return a.createElement("td",null,a.createElement(O.Link,{to:{pathname:r,query:{id:t.id}}},a.createElement("strong",{className:"js-name"},t.name)),t.defaultFor.length>0&&a.createElement("div",{className:"spacer-top js-defaults"},a.createElement(P,{organization:n,template:t})),!!t.description&&a.createElement("div",{className:"spacer-top js-description"},t.description),!!t.projectKeyPattern&&a.createElement("div",{className:"spacer-top js-project-key-pattern"},"Project Key Pattern: ",a.createElement("code",null,t.projectKeyPattern)))}var H=n(110);function w(e){var t=e.permission;return a.createElement("td",{className:"permission-column","data-permission":t.key},a.createElement("div",{className:"permission-column-inner"},a.createElement("ul",null,t.withProjectCreator&&a.createElement("li",{className:"little-spacer-bottom display-flex-center"},Object(m.l)("permission_templates.project_creators"),a.createElement(E.a,{className:"little-spacer-left",overlay:Object(m.l)(Object(H.isSonarCloud)()?"permission_templates.project_creators.explanation.sonarcloud":"permission_templates.project_creators.explanation")})),a.createElement("li",{className:"little-spacer-bottom"},a.createElement("strong",null,t.usersCount),"  user(s)"),a.createElement("li",null,a.createElement("strong",null,t.groupsCount)," group(s)"))))}var M=n(789),T=n.n(M);function V(e){var t=e.onClose,n=e.onSubmit,r=e.permissionTemplate,o=Object(m.l)("permission_template.delete_confirm_title");return a.createElement(c.a,{header:o,onClose:t,onSubmit:n},function(e){var t=e.onCloseClick,n=e.onFormSubmit,i=e.submitting;return a.createElement("form",{onSubmit:n},a.createElement("header",{className:"modal-head"},a.createElement("h2",null,o)),a.createElement("div",{className:"modal-body"},Object(m.m)("permission_template.do_you_want_to_delete_template_xxx",r.name)),a.createElement("footer",{className:"modal-foot"},a.createElement(l.a,{className:"spacer-right",loading:i}),a.createElement(p.i,{className:"button-red",disabled:i},Object(m.l)("delete")),a.createElement(p.h,{disabled:i,onClick:t},Object(m.l)("cancel"))))})}var q=n(750),L=n(733),x=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),D=function(){return(D=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},F=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={deleteForm:!1,updateModal:!1},t.handleUpdateClick=function(){t.setState({updateModal:!0})},t.handleCloseUpdateModal=function(){t.mounted&&t.setState({updateModal:!1})},t.handleSubmitUpdateModal=function(e){return Object(f.y)(D({id:t.props.permissionTemplate.id},e)).then(t.props.refresh)},t.handleDeleteClick=function(){t.setState({deleteForm:!0})},t.handleCloseDeleteForm=function(){t.mounted&&t.setState({deleteForm:!1})},t.handleDeleteSubmit=function(){return Object(f.g)({templateId:t.props.permissionTemplate.id}).then(function(){var e=t.props.organization?"/organizations/"+t.props.organization.key+"/permission_templates":"/permission_templates";t.props.router.replace(e),t.props.refresh()})},t.setDefault=function(e){return function(){Object(f.x)(t.props.permissionTemplate.id,e).then(t.props.refresh,function(){})}},t}return x(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.getAvailableQualifiers=function(){var e=this.props.organization&&!this.props.organization.isDefault?["TRK"]:this.props.topQualifiers;return T()(e,this.props.permissionTemplate.defaultFor)},t.prototype.renderSetDefaultsControl=function(){var e=this.getAvailableQualifiers();return 0===e.length?null:1===this.props.topQualifiers.length?this.renderIfSingleTopQualifier(e):this.renderIfMultipleTopQualifiers(e)},t.prototype.renderSetDefaultLink=function(e,t){return a.createElement(q.b,{className:"js-set-default","data-qualifier":e,key:e,onClick:this.setDefault(e)},t)},t.prototype.renderIfSingleTopQualifier=function(e){var t=this;return e.map(function(e){return t.renderSetDefaultLink(e,a.createElement("span",null,Object(m.l)("permission_templates.set_default")))})},t.prototype.renderIfMultipleTopQualifiers=function(e){var t=this;return e.map(function(e){return t.renderSetDefaultLink(e,a.createElement("span",null,Object(m.l)("permission_templates.set_default_for")," ",a.createElement(L.a,{qualifier:e})," ",Object(m.l)("qualifiers",e)))})},t.prototype.render=function(){var e=this.props,t=e.permissionTemplate,n=e.organization,r=n?"/organizations/"+n.key+"/permission_templates":"/permission_templates";return a.createElement(a.Fragment,null,a.createElement(q.c,null,this.renderSetDefaultsControl(),!this.props.fromDetails&&a.createElement(q.b,{to:{pathname:r,query:{id:t.id}}},Object(m.l)("edit_permissions")),a.createElement(q.b,{className:"js-update",onClick:this.handleUpdateClick},Object(m.l)("update_details")),0===t.defaultFor.length&&a.createElement(q.b,{className:"js-delete",destructive:!0,onClick:this.handleDeleteClick},Object(m.l)("delete"))),this.state.updateModal&&a.createElement(d,{confirmButtonText:Object(m.l)("update_verb"),header:Object(m.l)("permission_template.edit_template"),onClose:this.handleCloseUpdateModal,onSubmit:this.handleSubmitUpdateModal,permissionTemplate:t}),this.state.deleteForm&&a.createElement(V,{onClose:this.handleCloseDeleteForm,onSubmit:this.handleDeleteSubmit,permissionTemplate:t}))},t}(a.PureComponent),Q=Object(h.a)(F);function A(e){var t=e.template.permissions.map(function(e){return a.createElement(w,{key:e.key,permission:e})});return a.createElement("tr",{"data-id":e.template.id,"data-name":e.template.name},a.createElement(k,{organization:e.organization,template:e.template}),t,a.createElement("td",{className:"nowrap thin text-right"},a.createElement(Q,{organization:e.organization,permissionTemplate:e.template,refresh:e.refresh,topQualifiers:e.topQualifiers})))}function K(e){var t=e.permissionTemplates.map(function(t){return a.createElement(A,{key:t.id,organization:e.organization,refresh:e.refresh,template:t,topQualifiers:e.topQualifiers})});return a.createElement("div",{className:"boxed-group boxed-group-inner"},a.createElement("table",{className:"data zebra permissions-table",id:"permission-templates"},a.createElement(j,{organization:e.organization,permissions:e.permissions}),a.createElement("tbody",null,t)))}function U(e){return a.createElement("div",{className:"page page-limited"},a.createElement(s.a,{title:Object(m.l)("permission_templates.page")}),a.createElement(b,{organization:e.organization,ready:e.ready,refresh:e.refresh}),a.createElement(K,{organization:e.organization,permissionTemplates:e.permissionTemplates,permissions:e.permissions,refresh:e.refresh,topQualifiers:e.topQualifiers}))}function I(e){var t=e.template,n=e.organization,r=n?"/organizations/"+n.key+"/permission_templates":"/permission_templates";return a.createElement("header",{className:"page-header",id:"project-permissions-header"},a.createElement("div",{className:"note spacer-bottom"},a.createElement(O.Link,{className:"text-muted",to:r},Object(m.l)("permission_templates.page"))),a.createElement("h1",{className:"page-title"},t.name),e.loading&&a.createElement("i",{className:"spinner"}),a.createElement("div",{className:"pull-right"},a.createElement(Q,{fromDetails:!0,organization:n,permissionTemplate:t,refresh:e.refresh,topQualifiers:e.topQualifiers})))}function W(e){var t=e.organization,n=e.template;return a.createElement("div",{className:"big-spacer-bottom"},n.defaultFor.length>0&&a.createElement("div",{className:"spacer-top js-defaults"},a.createElement(P,{organization:t,template:n})),!!n.description&&a.createElement("div",{className:"spacer-top js-description"},n.description),!!n.projectKeyPattern&&a.createElement("div",{className:"spacer-top js-project-key-pattern"},"Project Key Pattern: ",a.createElement("code",null,n.projectKeyPattern)))}var B=n(1224),G=n(1199),R=n(926),J=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Z=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={filter:"all",groups:[],loading:!1,query:"",users:[]},t.requestHolders=function(e){t.setState({loading:!0});var n=t.props.template,r=t.state,a=r.query,o=r.filter,i=r.selectedPermission,s=[],l=null!=e?e:a;return"groups"!==o?s.push(f.k(n.id,l,i)):s.push(Promise.resolve([])),"users"!==o?s.push(f.j(n.id,l,i)):s.push(Promise.resolve([])),Promise.all(s).then(function(e){t.mounted&&t.setState({users:e[0],groups:e[1],loading:!1})})},t.handleToggleUser=function(e,n){if("<creator>"===e.login)return t.handleToggleProjectCreator(e,n);var r=t.props,a=r.template,o=r.organization,i=e.permissions.includes(n),s={templateId:a.id,login:e.login,permission:n};return o&&(s.organization=o.key),(i?f.w(s):f.r(s)).then(function(){return t.requestHolders()}).then(t.props.refresh)},t.handleToggleProjectCreator=function(e,n){var r=t.props.template;return(e.permissions.includes(n)?f.s(r.id,n):f.a(r.id,n)).then(function(){return t.requestHolders()}).then(t.props.refresh)},t.handleToggleGroup=function(e,n){var r=t.props,a=r.template,o=r.organization,i=e.permissions.includes(n),s={templateId:a.id,groupName:e.name,permission:n};return o&&Object.assign(s,{organization:o.key}),(i?f.v(s):f.q(s)).then(function(){return t.requestHolders()}).then(t.props.refresh)},t.handleSearch=function(e){t.setState({query:e}),t.requestHolders(e)},t.handleFilter=function(e){t.setState({filter:e},t.requestHolders)},t.handleSelectPermission=function(e){e===t.state.selectedPermission?t.setState({selectedPermission:void 0},t.requestHolders):t.setState({selectedPermission:e},t.requestHolders)},t.shouldDisplayCreator=function(e){var n=t.state,r=n.filter,a=n.query,o=n.selectedPermission,i=Object(m.l)("permission_templates.project_creators"),s="all"!==r,l=!a||i.toLocaleLowerCase().includes(a.toLowerCase()),c=void 0===o||e.includes(o);return!s&&l&&c},t}return J(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.requestHolders()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=Object(R.e)(R.b,"projects_role"),t=this.state.users.slice(),n=this.props.template.permissions.filter(function(e){return e.withProjectCreator}).map(function(e){return e.key});if(this.shouldDisplayCreator(n)){var r={login:"<creator>",name:Object(m.l)("permission_templates.project_creators"),permissions:n};t.unshift(r)}return a.createElement("div",{className:"page page-limited"},a.createElement(s.a,{title:this.props.template.name}),a.createElement(I,{loading:this.state.loading,organization:this.props.organization,refresh:this.props.refresh,template:this.props.template,topQualifiers:this.props.topQualifiers}),a.createElement(W,{organization:this.props.organization,template:this.props.template}),a.createElement(B.a,{groups:this.state.groups,onSelectPermission:this.handleSelectPermission,onToggleGroup:this.handleToggleGroup,onToggleUser:this.handleToggleUser,permissions:e,selectedPermission:this.state.selectedPermission,showPublicProjectsWarning:!0,users:t},a.createElement(G.a,{filter:this.state.filter,onFilter:this.handleFilter,onSearch:this.handleSearch,query:this.state.query})))},t}(a.PureComponent),X=n(998),Y=n(718),$=function(){return($=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},ee=["user","codeviewer","issueadmin","securityhotspotadmin","admin","scan"];var te=n(708);n(1200);n.d(t,"App",function(){return re});var ne=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),re=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={ready:!1,permissions:[],permissionTemplates:[]},t.requestPermissions=function(){var e=t.props.organization;return(e?Object(f.l)(e.key):Object(f.l)()).then(function(e){if(t.mounted){var n=function(e){return S()(e,function(e){return ee.indexOf(e.key)})}(e.permissions),r=function(e,t){return void 0===t&&(t=[]),e.map(function(e){var n=[];return t.forEach(function(t){t.templateId===e.id&&n.push(t.qualifier)}),$({},e,{defaultFor:n})})}(function(e,t){return e.map(function(e){var n=t.map(function(t){var n=e.permissions.find(function(e){return e.key===t.key});return $({usersCount:0,groupsCount:0},t,n)});return $({},e,{permissions:n})})}(e.permissionTemplates,n),e.defaultTemplates);t.setState({ready:!0,permissionTemplates:r,permissions:n})}})},t}return ne(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.requestPermissions()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.renderTemplate=function(e){if(!this.state.ready)return null;var t=this.state.permissionTemplates.find(function(t){return t.id===e});return t?a.createElement(Z,{organization:this.props.organization,refresh:this.requestPermissions,template:t,topQualifiers:this.props.topQualifiers}):null},t.prototype.renderHome=function(){return a.createElement(U,{organization:this.props.organization,permissionTemplates:this.state.permissionTemplates,permissions:this.state.permissions,ready:this.state.ready,refresh:this.requestPermissions,topQualifiers:this.props.topQualifiers})},t.prototype.render=function(){var e=this.props.location.query.id;return a.createElement("div",null,a.createElement(Y.a,{suggestions:"permission_templates"}),a.createElement(X.a,{organization:this.props.organization,title:Object(m.l)("permission_templates.page")}),e&&this.renderTemplate(e),!e&&this.renderHome())},t}(a.PureComponent);t.default=Object(o.connect)(function(e){return{topQualifiers:Object(te.getAppState)(e).qualifiers}})(re)},709:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(695),a=n(740),o=n(696),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function s(e){return r.createElement(a,i({className:o("modal",{"modal-small":"small"===e.size,"modal-medium":"medium"===e.size,"modal-large":"large"===e.size}),isOpen:!0,overlayClassName:o("modal-overlay",{"modal-no-backdrop":e.noBackdrop})},e))}a.setAppElement("#content")},714:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n(695),a=n(696),o=n(704),i=n(752),s=n(703);n(723);function l(e){var t=e.children,n=void 0===t?r.createElement(i.a,{fill:s.gray71,size:12}):t,l=e.tagName,c=void 0===l?"div":l;return r.createElement(c,{className:a("help-tooltip",e.className)},r.createElement(o.a,{mouseLeaveDelay:.25,onShow:e.onShow,overlay:e.overlay,placement:e.placement},r.createElement("span",{className:"display-inline-flex-center"},n)))}},718:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r,a=n(695),o=n(739),i=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});function s(e){var t=e.suggestions;return a.createElement(o.a.Consumer,null,function(e){var n=e.addSuggestions,r=e.removeSuggestions;return a.createElement(l,{addSuggestions:n,removeSuggestions:r,suggestions:t})})}var l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.componentDidMount=function(){this.props.addSuggestions(this.props.suggestions)},t.prototype.componentDidUpdate=function(e){e.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(e.suggestions))},t.prototype.componentWillUnmount=function(){this.props.removeSuggestions(this.props.suggestions)},t.prototype.render=function(){return null},t}(a.PureComponent)},719:function(e,t,n){"use strict";var r,a=n(695),o=n(709),i=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n},c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={submitting:!1},t.stopSubmitting=function(){t.mounted&&t.setState({submitting:!1})},t.handleCloseClick=function(e){e&&(e.preventDefault(),e.currentTarget.blur()),t.props.onClose()},t.handleFormSubmit=function(e){e.preventDefault(),t.submit()},t.handleSubmitClick=function(e){e&&(e.preventDefault(),e.currentTarget.blur()),t.submit()},t.submit=function(){var e=t.props.onSubmit();e&&(t.setState({submitting:!0}),e.then(t.stopSubmitting,t.stopSubmitting))},t}return i(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props,t=e.children,n=e.header,r=e.onClose,i=(e.onSubmit,l(e,["children","header","onClose","onSubmit"]));return a.createElement(o.a,s({contentLabel:n,onRequestClose:r},i),t({onCloseClick:this.handleCloseClick,onFormSubmit:this.handleFormSubmit,onSubmitClick:this.handleSubmitClick,submitting:this.state.submitting}))},t}(a.Component);t.a=c},723:function(e,t,n){var r=n(724);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(699)(r,a);r.locals&&(e.exports=r.locals)},724:function(e,t,n){(e.exports=n(698)(!1)).push([e.i,".help-tooltip{display:inline-flex;align-items:center;vertical-align:middle}.help-toolip-link{display:block;width:12px;height:12px;border:none}",""])},733:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(695),a=n(700),o=n(703),i={app:function(e){var t=e.className,n=e.fill,i=void 0===n?o.blue:n,s=e.size;return r.createElement(a.a,{className:t,size:s},r.createElement("path",{d:"M3.014 10.986a2 2 0 1 1-.001 4.001 2 2 0 0 1 .001-4.001zm9.984 0a2 2 0 1 1-.001 4.001 2 2 0 0 1 .001-4.001zm-5.004-.021c1.103 0 2 .896 2 2s-.897 2-2 2a2 2 0 0 1 0-4zm-4.98 1.021a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm9.984 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5.004-.021a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM2.984 6a2 2 0 1 1-.001 4.001A2 2 0 0 1 2.984 6zm9.984 0a2 2 0 1 1-.001 4.001A2 2 0 0 1 12.968 6zm-5.004-.021c1.103 0 2 .897 2 2a2 2 0 1 1-2-2zM2.984 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm9.984 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5.004-.021a1.001 1.001 0 0 1 0 2 1 1 0 0 1 0-2zM3 1.025a2 2 0 1 1-.001 4.001A2 2 0 0 1 3 1.025zm9.984 0a2 2 0 1 1-.001 4.001 2 2 0 0 1 .001-4.001zM7.98 1.004c1.103 0 2 .896 2 2s-.897 2-2 2a2 2 0 0 1 0-4zM3 2.025a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm9.984 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM7.98 2.004a1.001 1.001 0 0 1 0 2 1 1 0 0 1 0-2z",style:{fill:i}}))},brc:function(e){var t=e.className,n=e.fill,i=void 0===n?o.blue:n,s=e.size;return r.createElement(a.a,{className:t,size:s},r.createElement("path",{d:"M8 9V8h6v1h1v1h1v6H6v-6h1V9h1zm7 2H7v4h8v-4zm-1-7v3h-1V5H1v7h4v1H0V4h14zm-1-2v1.5h-1V3H2v.5H1V2h12zm-1-2v1.5h-1V1H3v.5H2V0h10z",style:{fill:i}}))},dev:function(e){var t=e.className,n=e.fill,i=void 0===n?o.blue:n,s=e.size;return r.createElement(a.a,{className:t,size:s},r.createElement("path",{d:"M7.974 8.02a3.5 3.5 0 0 1-2.482-1.017 3.428 3.428 0 0 1-1.028-2.455c0-.927.365-1.8 1.028-2.455a3.505 3.505 0 0 1 2.482-1.017 3.5 3.5 0 0 1 2.482 1.017 3.434 3.434 0 0 1 1.027 2.455c0 .928-.365 1.8-1.027 2.455A3.504 3.504 0 0 1 7.974 8.02zm0-5.778c-1.286 0-2.332 1.034-2.332 2.306s1.046 2.307 2.332 2.307c1.285 0 2.332-1.035 2.332-2.307S9.258 2.242 7.974 2.242zm3.534 6.418c.127.016.243.045.348.086.17.066.302.146.406.246.132.124.253.282.36.47.126.218.226.442.3.668.08.253.15.535.206.838.056.313.095.604.113.867.02.28.03.57.03.862 0 .532-.174.758-.306.882-.142.132-.397.31-.973.31H3.948c-.233 0-.437-.03-.606-.09-.14-.05-.26-.123-.366-.222-.13-.123-.306-.35-.306-.88 0-.294.01-.584.03-.863.018-.263.056-.554.112-.867a6.5 6.5 0 0 1 .207-.838c.073-.226.173-.45.298-.667.108-.19.23-.347.36-.47.106-.1.238-.18.407-.247.105-.04.22-.07.348-.086.202.13.432.277.683.435.342.217.756.4 1.265.564.523.166 1.06.25 1.59.25a5.25 5.25 0 0 0 1.592-.25c.51-.164.923-.348 1.266-.565.25-.158.48-.304.682-.435l-.002.002zm-.244-1.18c-.055 0-.184.066-.387.196-.202.13-.43.276-.685.437-.255.16-.586.307-.994.437-.408.13-.818.196-1.23.196-.41 0-.82-.065-1.228-.196a4.303 4.303 0 0 1-.993-.437c-.255-.16-.484-.306-.686-.437-.202-.13-.33-.196-.386-.196-.374 0-.716.06-1.026.183-.31.12-.572.283-.787.487a3.28 3.28 0 0 0-.57.737 4.662 4.662 0 0 0-.395.888c-.098.303-.18.633-.244.988a9.652 9.652 0 0 0-.128.992c-.02.306-.032.62-.032.942 0 .73.224 1.304.672 1.726.448.42 1.043.632 1.785.632h8.044c.743 0 1.34-.21 1.787-.633.447-.42.67-.996.67-1.725 0-.32-.01-.635-.03-.942a9.159 9.159 0 0 0-.374-1.98c-.098-.304-.23-.6-.395-.888a3.23 3.23 0 0 0-.57-.737 2.404 2.404 0 0 0-.788-.487 2.779 2.779 0 0 0-1.026-.183h-.004z",style:{fill:i}}))},dir:l,fil:function(e){var t=e.className,n=e.fill,i=void 0===n?o.blue:n,s=e.size;return r.createElement(a.a,{className:t,size:s},r.createElement("path",{d:"M14 15H2V1l7.997.02c1 .034 1.759.758 2.428 1.42.667.663 1.561 1.605 1.574 2.555H14V15zM9 2H3v12h10V6H9V2zm3 10H4v-1h8v1zm0-2H4V9h8v1zm-1.988-5h3.008c-.012-.674-.714-1.443-1.204-1.937-.488-.495-1.039-1.058-1.816-1.055v2.96l.012.032z",style:{fill:i}}))},svw:function(e){var t=e.className,n=e.fill,i=void 0===n?o.blue:n,s=e.size;return r.createElement(a.a,{className:t,size:s},r.createElement("path",{d:"M14 7h2v9H7v-2H0V0h14v7zM8 8v7h7V8H8zm3 6H9v-2h2v2zm3 0h-2v-2h2v2zm-1-7V1H1v12h6V7h6zm-7 5H2V8h4v4zm5-1H9V9h2v2zm3 0h-2V9h2v2zM5 9H3v2h2V9zm1-3H2V2h4v4zm6 0H8V2h4v4zM5 3H3v2h2V3zm6 0H9v2h2V3z",style:{fill:i}}))},trk:c,uts:p,vw:function(e){var t=e.className,n=e.fill,i=void 0===n?o.blue:n,s=e.size;return r.createElement(a.a,{className:t,size:s},r.createElement("path",{d:"M14.97 14.97H1.016V1.015H14.97V14.97zm-1-12.955H2.015V13.97H13.97V2.015zm-.973 10.982H9V9h3.997v3.997zM7 12.996H3.004V9H7v3.996zM11.997 10H10v1.997h1.997V10zM6 10H4.004v1.996H6V10zm1-3H3.006V3.006H7V7zm5.985 0H9V3.015h3.985V7zM6 4.006H4.006V6H6V4.006zm5.985.009H10V6h1.985V4.015z",style:{fill:i}}))},cla:p,dev_prj:c,lib:function(e){var t=e.className,n=e.fill,i=void 0===n?o.blue:n,s=e.size;return r.createElement(a.a,{className:t,size:s},r.createElement("path",{d:"M1 13h4V3H1v10zm3-1H2v-2h2v2zM2 4h2v4H2V4zm4 9h4V3H6v10zm3-1H7v-2h2v2zM7 4h2v4H7V4zm4 9h4V3h-4v10zm3-1h-2v-2h2v2zm-2-8h2v4h-2V4z",style:{fill:i}}))},pac:l};function s(e){if(!e.qualifier)return null;var t=e.qualifier.toLowerCase(),n=i[t];return n?r.createElement(n,{className:e.className,fill:e.fill}):null}function l(e){var t=e.className,n=e.fill,i=void 0===n?o.orange:n,s=e.size;return r.createElement(a.a,{className:t,size:s},r.createElement("path",{d:"M14 12.286V5.703a.673.673 0 0 0-.195-.5.644.644 0 0 0-.49-.203H6.704a.686.686 0 0 1-.5-.214.707.707 0 0 1-.203-.51v-.57c0-.2-.07-.363-.207-.502A.679.679 0 0 0 5.29 3H2.707a.672.672 0 0 0-.5.204.683.683 0 0 0-.206.5v8.582c0 .2.07.367.206.506.137.14.304.208.5.208h10.61a.66.66 0 0 0 .49-.208.685.685 0 0 0 .194-.506H14zm1-6.598v6.65c0 .458-.152.83-.475 1.16-.324.326-.7.502-1.15.502H2.647c-.452 0-.84-.175-1.162-.503a1.572 1.572 0 0 1-.486-1.158V3.654a1.6 1.6 0 0 1 .486-1.17A1.578 1.578 0 0 1 2.648 2h2.7c.45 0 .84.157 1.164.485.324.328.488.714.488 1.17V4h6.373c.452 0 .83.174 1.152.5.323.33.475.73.475 1.187v.001z",style:{fill:i}}))}function c(e){var t=e.className,n=e.fill,i=void 0===n?o.blue:n,s=e.size;return r.createElement(a.a,{className:t,size:s},r.createElement("path",{d:"M14.985 13.988L1 14.005 1.02 5h13.966v8.988h-.001zM1.998 5.995l.006 7.02L14.022 13 14 6.004l-12.002-.01v.001zM3 4.5V4h9.996l.004.5h1l-.005-1.497-11.98.003L2 4.5h1zm1-2v-.504h8.002L12 2.5h1l-.004-1.495H3.003L3 2.5h1z",style:{fill:i}}))}function p(e){var t=e.className,n=e.fill,i=void 0===n?o.blue:n,s=e.size;return r.createElement(a.a,{className:t,size:s},r.createElement("path",{d:"M14 15H2V1l7.997.02c1.013-.03 1.57.893 2.239 1.555.667.663 1.75 1.47 1.763 2.42H14V15zM9 2H3v12h10V6H9V2zM7 8l-3 2.5L7 13V8zm1 5l3-2.5L8 8v5zm2.012-8h3.008c-.012-.674-.78-1.258-1.27-1.752-.488-.495-.973-1.243-1.75-1.24v2.96l.012.032z",style:{fill:i}}))}},750:function(e,t,n){"use strict";var r=n(695),a=n(696),o=n(701),i=n(717),s=n(721),l=n(700);function c(e){var t=e.className,n=e.fill,a=void 0===n?"currentColor":n,o=e.size,i=void 0===o?14:o;return r.createElement(l.a,{className:t,size:i,viewBox:"0 0 14 14"},r.createElement("g",{transform:"matrix(0.0364583,0,0,0.0364583,0,-1.16667)"},r.createElement("path",{d:"M256,224C256,206.333 249.75,191.25 237.25,178.75C224.75,166.25 209.667,160 192,160C174.333,160 159.25,166.25 146.75,178.75C134.25,191.25 128,206.333 128,224C128,241.667 134.25,256.75 146.75,269.25C159.25,281.75 174.333,288 192,288C209.667,288 224.75,281.75 237.25,269.25C249.75,256.75 256,241.667 256,224ZM384,196.75L384,252.25C384,254.25 383.333,256.167 382,258C380.667,259.833 379,260.917 377,261.25L330.75,268.25C327.583,277.25 324.333,284.833 321,291C326.833,299.333 335.75,310.833 347.75,325.5C349.417,327.5 350.25,329.583 350.25,331.75C350.25,333.917 349.5,335.833 348,337.5C343.5,343.667 335.25,352.667 323.25,364.5C311.25,376.333 303.417,382.25 299.75,382.25C297.75,382.25 295.583,381.5 293.25,380L258.75,353C251.417,356.833 243.833,360 236,362.5C233.333,385.167 230.917,400.667 228.75,409C227.583,413.667 224.583,416 219.75,416L164.25,416C161.917,416 159.875,415.292 158.125,413.875C156.375,412.458 155.417,410.667 155.25,408.5L148.25,362.5C140.083,359.833 132.583,356.75 125.75,353.25L90.5,380C88.833,381.5 86.75,382.25 84.25,382.25C81.917,382.25 79.833,381.333 78,379.5C57,360.5 43.25,346.5 36.75,337.5C35.583,335.833 35,333.917 35,331.75C35,329.75 35.667,327.833 37,326C39.5,322.5 43.75,316.958 49.75,309.375C55.75,301.792 60.25,295.917 63.25,291.75C58.75,283.417 55.333,275.167 53,267L7.25,260.25C5.083,259.917 3.333,258.875 2,257.125C0.667,255.375 0,253.417 0,251.25L0,195.75C0,193.75 0.667,191.833 2,190C3.333,188.167 4.917,187.083 6.75,186.75L53.25,179.75C55.583,172.083 58.833,164.417 63,156.75C56.333,147.25 47.417,135.75 36.25,122.25C34.583,120.25 33.75,118.25 33.75,116.25C33.75,114.583 34.5,112.667 36,110.5C40.333,104.5 48.542,95.542 60.625,83.625C72.708,71.708 80.583,65.75 84.25,65.75C86.417,65.75 88.583,66.583 90.75,68.25L125.25,95C132.583,91.167 140.167,88 148,85.5C150.667,62.833 153.083,47.333 155.25,39C156.417,34.333 159.417,32 164.25,32L219.75,32C222.083,32 224.125,32.708 225.875,34.125C227.625,35.542 228.583,37.333 228.75,39.5L235.75,85.5C243.917,88.167 251.417,91.25 258.25,94.75L293.75,68C295.25,66.5 297.25,65.75 299.75,65.75C301.917,65.75 304,66.583 306,68.25C327.5,88.083 341.25,102.25 347.25,110.75C348.417,112.083 349,113.917 349,116.25C349,118.25 348.333,120.167 347,122C344.5,125.5 340.25,131.042 334.25,138.625C328.25,146.208 323.75,152.083 320.75,156.25C325.083,164.583 328.5,172.75 331,180.75L376.75,187.75C378.917,188.083 380.667,189.125 382,190.875C383.333,192.625 384,194.583 384,196.75Z",style:{fill:a}})))}var p=n(697);n.d(t,"c",function(){return d}),n.d(t,"b",function(){return f}),n.d(t,"a",function(){return h});var m,u=(m=function(e,t){return(m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}m(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});function d(e){return r.createElement(i.b,{className:e.className,onOpen:e.onOpen,overlay:r.createElement("ul",{className:"menu"},e.children)},r.createElement(p.a,{className:a("dropdown-toggle",e.toggleClassName,{"button-small":e.small})},r.createElement(c,{size:e.small?12:14}),r.createElement(s.a,{className:"little-spacer-left"})))}var f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClick=function(e){e.preventDefault(),e.currentTarget.blur(),t.props.onClick&&t.props.onClick()},t}return u(t,e),t.prototype.render=function(){var e=a(this.props.className,{"text-danger":this.props.destructive});return this.props.download&&"string"==typeof this.props.to?r.createElement("li",null,r.createElement("a",{className:e,download:this.props.download,href:this.props.to,id:this.props.id},this.props.children)):this.props.to?r.createElement("li",null,r.createElement(o.Link,{className:e,id:this.props.id,to:this.props.to},this.props.children)):r.createElement("li",null,r.createElement("a",{className:e,href:"#",id:this.props.id,onClick:this.handleClick},this.props.children))},t}(r.PureComponent);function h(){return r.createElement("li",{className:"divider"})}},789:function(e,t,n){var r=n(873),a=n(813),o=n(825),i=n(838),s=o(function(e,t){return i(e)?r(e,a(t,1,i,!0)):[]});e.exports=s},998:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(695),a=n(711),o=n.n(a);function i(e){var t=e.title,n=e.organization,a=t+(n?" - "+n.name:"");return r.createElement(o.a,{defaultTitle:a,titleTemplate:"%s - "+a})}}}]);
//# sourceMappingURL=20.1605082598434.chunk.js.map