(window.webpackJsonp=window.webpackJsonp||[]).push([[317],{1701:function(e,t,i){"use strict";i.r(t);var o=i(377),n=i(417),s=i.n(n),r=i(365),a=i(381),l=i.n(a),c=i(876),p=i(899),d=i(397),u=i(599);class m extends r.PureComponent{constructor(){super(...arguments),this.handleToggleUser=(e,t)=>{return e.permissions.includes(t)?this.props.revokePermissionFromUser(e.login,t):this.props.grantPermissionToUser(e.login,t)},this.handleToggleGroup=(e,t)=>{return e.permissions.includes(t)?this.props.revokePermissionFromGroup(e.name,t):this.props.grantPermissionToGroup(e.name,t)},this.handleSelectPermission=e=>{this.props.onPermissionSelect(e)}}render(){const e=this.props,t=e.filter,i=e.groups,o=e.groupsPaging,n=e.users,a=e.usersPaging;let l=u.a[this.props.component.qualifier];"public"===this.props.visibility&&(l=s()(l,"user","codeviewer"));const m=Object(u.e)(l,"projects_role");let h=0,g=0;return"users"!==t&&(h+=i.length,g+=o?o.total:i.length),"groups"!==t&&(h+=n.length,g+=a?a.total:n.length),r.createElement(r.Fragment,null,r.createElement(p.a,{filter:this.props.filter,groups:this.props.groups,onSelectPermission:this.handleSelectPermission,onToggleGroup:this.handleToggleGroup,onToggleUser:this.handleToggleUser,permissions:m,query:this.props.query,selectedPermission:this.props.selectedPermission,users:this.props.users},r.createElement(c.a,{filter:this.props.filter,onFilter:this.props.onFilterChange,onSearch:this.props.onQueryChange,query:this.props.query})),r.createElement(d.a,{count:h,loadMore:this.props.onLoadMore,total:g}))}}var h=i(878),g=i(367),b=i(0);class v extends r.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={applyTemplateModal:!1},this.handleApplyTemplate=()=>{this.setState({applyTemplateModal:!0})},this.handleApplyTemplateClose=()=>{this.mounted&&this.setState({applyTemplateModal:!1})}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=this.props.component,t=e.configuration,i=null!=t&&t.canApplyPermissionTemplate,o=["VW","SVW","APP"].includes(e.qualifier)?Object(b.l)("roles.page.description_portfolio"):Object(b.l)("roles.page.description2"),n="TRK"===e.qualifier&&e.visibility?Object(b.l)("visibility",e.visibility,"description",e.qualifier):void 0;return r.createElement("header",{className:"page-header"},r.createElement("h1",{className:"page-title"},Object(b.l)("permissions.page")),this.props.loading&&r.createElement("i",{className:"spinner"}),i&&r.createElement("div",{className:"page-actions"},r.createElement(g.a,{className:"js-apply-template",onClick:this.handleApplyTemplate},Object(b.l)("projects_role.apply_template")),this.state.applyTemplateModal&&r.createElement(h.a,{onApply:this.props.loadHolders,onClose:this.handleApplyTemplateClose,organization:e.organization,project:e})),r.createElement("div",{className:"page-description"},r.createElement("p",null,o),n&&r.createElement("p",null,n)))}}var S=i(396),f=i(385);function y(e){let t=e.component,i=e.onClose,o=e.onConfirm;const n=t.qualifier;return r.createElement(S.a,{confirmButtonText:Object(b.l)("projects_role.turn_project_to_public",n),header:Object(b.m)("projects_role.turn_x_to_public",t.name),onClose:i,onConfirm:o},r.createElement(f.a,{variant:"warning"},Object(b.l)("projects_role.are_you_sure_to_turn_project_to_public.warning",n)),r.createElement("p",null,Object(b.l)("projects_role.are_you_sure_to_turn_project_to_public",n)))}var x=i(652),P=i(703),j=i(522);i(877);function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=[],o=!0,n=!1,s=void 0;try{for(var r,a=e[Symbol.iterator]();!(o=(r=a.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(e){n=!0,s=e}finally{try{o||null==a.return||a.return()}finally{if(n)throw s}}return i}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var E=i(379);const T={fetchOrganization:i(450).f};t.default=Object(o.connect)((e,t)=>{let i=t.component;return{currentUser:Object(E.getCurrentUser)(e),organization:Object(E.getOrganizationByKey)(e,i.organization)}},T)(class extends r.PureComponent{constructor(e){super(e),this.mounted=!1,this.stopLoading=()=>{this.mounted&&this.setState({loading:!1})},this.loadUsersAndGroups=(e,t)=>{const i=this.props.component,o=this.state,n=o.filter,s=o.query,r=o.selectedPermission,a="groups"!==n?j.n({projectKey:i.key,q:s||void 0,permission:r,organization:i.organization,p:e}):Promise.resolve({paging:void 0,users:[]}),l="users"!==n?j.m({projectKey:i.key,q:s||void 0,permission:r,organization:i.organization,p:t}):Promise.resolve({paging:void 0,groups:[]});return Promise.all([a,l])},this.loadHolders=()=>(this.setState({loading:!0}),this.loadUsersAndGroups().then(e=>{let t=O(e,2),i=t[0],o=t[1];this.mounted&&this.setState({groups:o.groups,groupsPaging:o.paging,loading:!1,users:i.users,usersPaging:i.paging})},this.stopLoading)),this.onLoadMore=()=>{const e=this.state,t=e.usersPaging,i=e.groupsPaging;return this.setState({loading:!0}),this.loadUsersAndGroups(t?t.pageIndex+1:1,i?i.pageIndex+1:1).then(e=>{let t=O(e,2),i=t[0],o=t[1];this.mounted&&this.setState(e=>{let t=e.groups,n=e.users;return{groups:[...t,...o.groups],groupsPaging:o.paging,loading:!1,users:[...n,...i.users],usersPaging:i.paging}})},this.stopLoading)},this.handleFilterChange=e=>{this.mounted&&this.setState({filter:e},this.loadHolders)},this.handleQueryChange=e=>{this.mounted&&this.setState({query:e},this.loadHolders)},this.handlePermissionSelect=e=>{this.mounted&&this.setState(t=>({selectedPermission:t.selectedPermission===e?void 0:e}),this.loadHolders)},this.addPermissionToGroup=(e,t)=>this.state.groups.map(i=>i.name===e?Object.assign({},i,{permissions:[...i.permissions,t]}):i),this.addPermissionToUser=(e,t)=>this.state.users.map(i=>i.login===e?Object.assign({},i,{permissions:[...i.permissions,t]}):i),this.removePermissionFromGroup=(e,t)=>this.state.groups.map(i=>i.name===e?Object.assign({},i,{permissions:s()(i.permissions,t)}):i),this.removePermissionFromUser=(e,t)=>this.state.users.map(i=>i.login===e?Object.assign({},i,{permissions:s()(i.permissions,t)}):i),this.grantPermissionToGroup=(e,t)=>this.mounted?(this.setState({loading:!0,groups:this.addPermissionToGroup(e,t)}),j.o({projectKey:this.props.component.key,groupName:e,permission:t,organization:this.props.component.organization}).then(this.stopLoading,()=>{this.mounted&&this.setState({loading:!1,groups:this.removePermissionFromGroup(e,t)})})):Promise.resolve(),this.grantPermissionToUser=(e,t)=>this.mounted?(this.setState({loading:!0,users:this.addPermissionToUser(e,t)}),j.p({projectKey:this.props.component.key,login:e,permission:t,organization:this.props.component.organization}).then(this.stopLoading,()=>{this.mounted&&this.setState({loading:!1,users:this.removePermissionFromUser(e,t)})})):Promise.resolve(),this.revokePermissionFromGroup=(e,t)=>this.mounted?(this.setState({loading:!0,groups:this.removePermissionFromGroup(e,t)}),j.t({projectKey:this.props.component.key,groupName:e,permission:t,organization:this.props.component.organization}).then(this.stopLoading,()=>{this.mounted&&this.setState({loading:!1,groups:this.addPermissionToGroup(e,t)})})):Promise.resolve(),this.revokePermissionFromUser=(e,t)=>this.mounted?(this.setState({loading:!0,users:this.removePermissionFromUser(e,t)}),j.u({projectKey:this.props.component.key,login:e,permission:t,organization:this.props.component.organization}).then(this.stopLoading,()=>{this.mounted&&this.setState({loading:!1,users:this.addPermissionToUser(e,t)})})):Promise.resolve(),this.handleOrganizationUpgrade=()=>{const e=this.props,t=e.component,i=e.organization;i&&(this.props.onComponentChange({configuration:Object.assign({},t.configuration,{canUpdateProjectVisibilityToPrivate:!0})}),this.props.fetchOrganization(i.key))},this.handleVisibilityChange=e=>{"public"===e?this.openDisclaimer():this.turnProjectToPrivate()},this.turnProjectToPublic=()=>{this.props.onComponentChange({visibility:"public"}),j.e(this.props.component.key,"public").then(()=>{this.loadHolders()},()=>{this.props.onComponentChange({visibility:"private"})})},this.turnProjectToPrivate=()=>{this.props.onComponentChange({visibility:"private"}),j.e(this.props.component.key,"private").then(()=>{this.loadHolders()},()=>{this.props.onComponentChange({visibility:"public"})})},this.openDisclaimer=()=>{this.mounted&&this.setState({disclaimer:!0})},this.closeDisclaimer=()=>{this.mounted&&this.setState({disclaimer:!1})},this.state={disclaimer:!1,filter:"all",groups:[],loading:!0,query:"",users:[]}}componentDidMount(){this.mounted=!0,this.loadHolders()}componentWillUnmount(){this.mounted=!1}render(){const e=this.props,t=e.component,i=e.organization,o=t.configuration&&t.configuration.canUpdateProjectVisibilityToPrivate;let n;return i&&!o&&(n=i.actions&&i.actions.admin&&"TRK"===this.props.component.qualifier&&!i.canUpdateProjectsVisibilityToPrivate),r.createElement("div",{className:"page page-limited",id:"project-permissions-page"},r.createElement(l.a,{title:Object(b.l)("permissions.page")}),r.createElement(v,{component:t,loadHolders:this.loadHolders,loading:this.state.loading}),r.createElement("div",null,r.createElement(P.a,{canTurnToPrivate:o,className:"big-spacer-top big-spacer-bottom",onChange:this.handleVisibilityChange,visibility:t.visibility}),n&&i&&r.createElement(x.a,{className:"big-spacer-bottom",onOrganizationUpgrade:this.handleOrganizationUpgrade,organization:i}),this.state.disclaimer&&r.createElement(y,{component:t,onClose:this.closeDisclaimer,onConfirm:this.turnProjectToPublic})),r.createElement(m,{component:t,filter:this.state.filter,grantPermissionToGroup:this.grantPermissionToGroup,grantPermissionToUser:this.grantPermissionToUser,groups:this.state.groups,groupsPaging:this.state.groupsPaging,onFilterChange:this.handleFilterChange,onLoadMore:this.onLoadMore,onPermissionSelect:this.handlePermissionSelect,onQueryChange:this.handleQueryChange,query:this.state.query,revokePermissionFromGroup:this.revokePermissionFromGroup,revokePermissionFromUser:this.revokePermissionFromUser,selectedPermission:this.state.selectedPermission,users:this.state.users,usersPaging:this.state.usersPaging,visibility:t.visibility}))}})},378:function(e,t,i){"use strict";i.d(t,"a",function(){return r});var o=i(365),n=i(405),s=i(366);function r(e){return o.createElement(n,Object.assign({className:s("modal",{"modal-small":"small"===e.size,"modal-medium":"medium"===e.size,"modal-large":"large"===e.size}),isOpen:!0,overlayClassName:s("modal-overlay",{"modal-no-backdrop":e.noBackdrop})},e))}n.setAppElement("#content")},386:function(e,t,i){"use strict";i.d(t,"c",function(){return u}),i.d(t,"b",function(){return m}),i.d(t,"a",function(){return h});var o=i(365),n=i(367),s=i(380),r=(i(399),function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&(i[o[n]]=e[o[n]])}return i});const a=i.e(365).then(i.bind(null,440)),l=Object(s.a)(()=>a),c=Object(s.a)(()=>a.then(e=>({default:e.Creatable}))),p=Object(s.a)(()=>a.then(e=>({default:e.Async})));function d(){return o.createElement(n.d,{className:"button-tiny spacer-left text-middle",iconProps:{size:12}})}function u(e){var t=e.innerRef,i=r(e,["innerRef"]);const n=l,s=!!i.clearable&&Boolean(i.value);return o.createElement(n,Object.assign({},i,{clearRenderer:d,clearable:s,ref:t}))}function m(e){const t=c;return o.createElement(t,Object.assign({},e,{clearRenderer:d}))}function h(e){return o.createElement(p,Object.assign({},e))}},387:function(e,t,i){"use strict";i.d(t,"a",function(){return r});var o=i(365),n=i(378),s=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&(i[o[n]]=e[o[n]])}return i};class r extends o.Component{constructor(){super(...arguments),this.mounted=!1,this.state={submitting:!1},this.stopSubmitting=()=>{this.mounted&&this.setState({submitting:!1})},this.handleCloseClick=e=>{e&&(e.preventDefault(),e.currentTarget.blur()),this.props.onClose()},this.handleFormSubmit=e=>{e.preventDefault(),this.submit()},this.handleSubmitClick=e=>{e&&(e.preventDefault(),e.currentTarget.blur()),this.submit()},this.submit=()=>{const e=this.props.onSubmit();e&&(this.setState({submitting:!0}),e.then(this.stopSubmitting,this.stopSubmitting))}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=this.props,t=e.children,i=e.header,r=e.onClose,a=(e.onSubmit,s(e,["children","header","onClose","onSubmit"]));return o.createElement(n.a,Object.assign({contentLabel:i,onRequestClose:r},a),t({onCloseClick:this.handleCloseClick,onFormSubmit:this.handleFormSubmit,onSubmitClick:this.handleSubmitClick,submitting:this.state.submitting}))}}},396:function(e,t,i){"use strict";i.d(t,"a",function(){return l});var o=i(365),n=i(387),s=i(375),r=i(367),a=i(0);class l extends o.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.handleSubmit=()=>{const e=this.props.onConfirm(this.props.confirmData);return e?e.then(this.props.onClose,()=>{}):void this.props.onClose()},this.renderModalContent=e=>{let t=e.onCloseClick,i=e.onFormSubmit,n=e.submitting;const l=this.props,c=l.children,p=l.confirmButtonText,d=l.confirmDisable,u=l.header,m=l.headerDescription,h=l.isDestructive,g=l.cancelButtonText,b=void 0===g?Object(a.l)("cancel"):g;return o.createElement("form",{onSubmit:i},o.createElement("header",{className:"modal-head"},o.createElement("h2",null,u),m),o.createElement("div",{className:"modal-body"},c),o.createElement("footer",{className:"modal-foot"},o.createElement(s.a,{className:"spacer-right",loading:n}),o.createElement(r.i,{autoFocus:!0,className:h?"button-red":void 0,disabled:n||d},p),o.createElement(r.h,{disabled:n,onClick:t},b)))}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=this.props,t={header:e.header,onClose:e.onClose,noBackdrop:e.noBackdrop,size:e.size};return o.createElement(n.a,Object.assign({onSubmit:this.handleSubmit},t),this.renderModalContent)}}},397:function(e,t,i){"use strict";i.d(t,"a",function(){return c});var o=i(365),n=i(366),s=i(375),r=i(0),a=i(376),l=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&(i[o[n]]=e[o[n]])}return i};function c(e){var t=e.ready,i=void 0===t||t,c=l(e,["ready"]);const p=c.total&&c.total>c.count,d=o.createElement("a",{className:"spacer-left",href:"#",onClick:e=>{e.preventDefault(),e.currentTarget.blur(),c.loadMore&&c.loadMore()}},Object(r.l)("show_more")),u=o.createElement("a",{className:"spacer-left",href:"#",onClick:e=>{e.preventDefault(),e.currentTarget.blur(),c.reload&&c.reload()}},Object(r.l)("reload")),m=n("spacer-top note text-center",{"new-loading":!i},c.className);let h;return c.needReload&&c.reload?h=u:p&&c.loadMore&&(h=d),o.createElement("footer",{className:m},Object(r.m)("x_of_y_shown",Object(a.formatMeasure)(c.count,"INT",null),Object(a.formatMeasure)(c.total,"INT",null)),h,c.loading&&o.createElement(s.a,{className:"text-bottom spacer-left position-absolute"}))}},399:function(e,t,i){var o=i(400);"string"==typeof o&&(o=[[e.i,o,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};i(369)(o,n);o.locals&&(e.exports=o.locals)},400:function(e,t,i){(e.exports=i(368)(!1)).push([e.i,".Select{position:relative;display:inline-block;vertical-align:middle;font-size:12px;text-align:left}.Select,.Select div,.Select input,.Select span{box-sizing:border-box}.Select.is-disabled>.Select-control{background-color:#ebebeb!important;border-color:#ddd!important}.Select.is-disabled>.Select-control:hover{box-shadow:none!important}.Select.is-disabled .Select-arrow-zone{cursor:not-allowed!important;pointer-events:none!important}.Select.is-disabled .Select-placeholder,.Select.is-disabled .Select-value{color:#bbb!important}.Select-control{position:relative;display:table;width:100%;height:24px;line-height:22px;border:1px solid #cdcdcd;border-collapse:separate;border-radius:2px;background-color:#fff;color:#444;cursor:default;outline:none;overflow:hidden}.is-searchable.is-open>.Select-control{cursor:text}.is-open>.Select-control{border-bottom-right-radius:0;border-bottom-left-radius:0;background:#fff}.is-open>.Select-control>.Select-arrow{border-color:transparent transparent #999;border-width:0 5px 5px}.is-searchable.is-focused:not(.is-open)>.Select-control{cursor:text}.is-focused:not(.is-open)>.Select-control{border-color:#4b9fd5}.Select-placeholder{color:#777}.Select-placeholder,:not(.Select--multi)>.Select-control .Select-value{bottom:0;left:0;line-height:23px;padding-left:8px;padding-right:24px;position:absolute;right:0;top:0;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.Select-value [class^=icon-]{padding-top:5px}.Select-value img,.Select-value svg{padding-top:4px}.Select-option .outline-badge,.Select-value .outline-badge{height:20px;line-height:19px;margin-top:1px}.Select-option [class^=icon-],.Select-option img,.Select-option svg{padding-top:2px}.has-value.is-pseudo-focused:not(.Select--multi)>.Select-control>.Select-value .Select-value-label,.has-value:not(.Select--multi)>.Select-control>.Select-value .Select-value-label{color:#444}.has-value.is-pseudo-focused:not(.Select--multi)>.Select-control>.Select-value a.Select-value-label,.has-value:not(.Select--multi)>.Select-control>.Select-value a.Select-value-label{cursor:pointer;text-decoration:none}.has-value.is-pseudo-focused:not(.Select--multi)>.Select-control>.Select-value a.Select-value-label:focus,.has-value.is-pseudo-focused:not(.Select--multi)>.Select-control>.Select-value a.Select-value-label:hover,.has-value:not(.Select--multi)>.Select-control>.Select-value a.Select-value-label:focus,.has-value:not(.Select--multi)>.Select-control>.Select-value a.Select-value-label:hover{color:#007eff;outline:none;text-decoration:underline}.Select-input{vertical-align:top;height:22px;padding-left:8px;padding-right:8px;outline:none}.Select-input>input{background:none transparent;border:0;cursor:default;display:inline-block;font-family:inherit;font-size:12px;height:22px;margin:0;outline:none;padding:0;box-shadow:none;-webkit-appearance:none}.is-focused .Select-input>input{cursor:text}.has-value.is-pseudo-focused .Select-input{opacity:0}.Select-control:not(.is-searchable)>.Select-input{outline:none}.Select-loading-zone{cursor:pointer;display:table-cell;position:relative;text-align:center;vertical-align:middle;width:16px}.Select-loading{animation:Select-animation-spin .4s linear infinite;box-sizing:border-box;border-radius:50%;border:2px solid #ccc;border-right-color:#444;display:inline-block}.Select-clear-zone,.Select-loading{width:16px;height:16px;position:relative;vertical-align:middle}.Select-clear-zone{animation:Select-animation-fadeIn .2s;color:#999;cursor:pointer;display:table-cell;text-align:center;padding-right:4px}.Select-clear-zone:hover .Select-clear{background-image:url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTQgMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxLjQxNCI+PHBhdGggZD0iTTEzLjk2OSAxLjQwNkw4LjM5IDYuOTg0bDUuNTc4IDUuNTc5LTEuNDA2IDEuNDA2TDYuOTg0IDguMzlsLTUuNTc4IDUuNTc4TDAgMTIuNTYzbDUuNTc4LTUuNTc5TDAgMS40MDYgMS40MDYgMGw1LjU3OCA1LjU3OEwxMi41NjMgMGwxLjQwNiAxLjQwNnoiIGZpbGw9IiNlNzE0MzgiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvc3ZnPg==)}.Select-clear{display:block;width:9px;height:9px;background-image:url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTQgMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxLjQxNCI+PHBhdGggZD0iTTEzLjk2OSAxLjQwNkw4LjM5IDYuOTg0bDUuNTc4IDUuNTc5LTEuNDA2IDEuNDA2TDYuOTg0IDguMzlsLTUuNTc4IDUuNTc4TDAgMTIuNTYzbDUuNTc4LTUuNTc5TDAgMS40MDYgMS40MDYgMGw1LjU3OCA1LjU3OEwxMi41NjMgMGwxLjQwNiAxLjQwNnoiIGZpbGw9IiM5OTkiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvc3ZnPg==);background-size:9px 9px;text-indent:-9999px}.Select--multi .Select-clear-zone{width:17px}.Select-arrow-zone{cursor:pointer;display:table-cell;position:relative;text-align:center;vertical-align:middle;width:20px;padding-right:5px}.Select-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:4px 4px 2px;display:inline-block;height:0;width:0}.is-open .Select-arrow,.Select-arrow-zone:hover>.Select-arrow{border-top-color:#666}@keyframes Select-animation-fadeIn{0%{opacity:0}to{opacity:1}}.Select-menu-outer{border-bottom-right-radius:4px;border-bottom-left-radius:4px;background-color:#fff;border:1px solid #ccc;border-top-color:#e6e6e6;box-sizing:border-box;margin-top:-1px;max-height:200px;position:absolute;top:100%;width:100%;z-index:7500;-webkit-overflow-scrolling:touch;box-shadow:0 6px 12px rgba(0,0,0,.175)}.Select-menu{max-height:198px;padding:5px 0;overflow-y:auto}.Select-option{display:block;line-height:20px;padding:0 8px;box-sizing:border-box;color:#444;font-size:12px;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.Select-option:last-child{border-bottom-right-radius:2px;border-bottom-left-radius:2px}.Select-option.is-focused{background-color:#f3f3f3}.Select-option.is-disabled{font-weight:600;cursor:default}.Select-noresults{box-sizing:border-box;color:#999;cursor:default;display:block;padding:8px 10px}.Select--multi .Select-value{background-color:rgba(0,126,255,.08);border-radius:2px;border:1px solid rgba(0,126,255,.24);color:#444;display:inline-block;font-size:12px;line-height:14px;margin:1px 4px 1px 1px;vertical-align:top}.Select-value-label{font-size:12px}.is-searchable.is-open .Select-value-label{opacity:.5}.Select-big .Select-control{padding-top:4px;padding-bottom:4px}.Select-big .Select-placeholder{margin-top:4px;margin-bottom:4px}.Select-big .Select-value-label{display:inline-block;margin-top:7px;line-height:16px}.Select-big .Select-option{padding:7px 8px;line-height:16px}.Select-big img,.Select-big svg{padding-top:0}.Select--multi .Select-value-icon,.Select--multi .Select-value-label{display:inline-block;vertical-align:middle}.Select--multi .Select-value-label{display:inline-block;max-width:200px;border-bottom-right-radius:2px;border-top-right-radius:2px;cursor:default;padding:2px 5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.Select--multi a.Select-value-label{color:#007eff;cursor:pointer;text-decoration:none}.Select--multi a.Select-value-label:hover{text-decoration:underline}.Select--multi .Select-value-icon{cursor:pointer;border-bottom-left-radius:2px;border-top-left-radius:2px;border-right:1px solid rgba(0,126,255,.24);padding:1px 5px}.Select--multi .Select-value-icon:focus,.Select--multi .Select-value-icon:hover{background-color:rgba(0,113,230,.08);color:#0071e6}.Select--multi .Select-value-icon:active{background-color:rgba(0,126,255,.24)}.Select--multi.is-disabled .Select-value{background-color:#fcfcfc;border:1px solid #e3e3e3;color:#444}.Select--multi.is-disabled .Select-value-icon{cursor:not-allowed;border-right:1px solid #e3e3e3}.Select--multi.is-disabled .Select-value-icon:active,.Select--multi.is-disabled .Select-value-icon:focus,.Select--multi.is-disabled .Select-value-icon:hover{background-color:#fcfcfc}.Select-aria-only{display:none}@keyframes Select-animation-spin{to{transform:rotate(1turn)}}",""])},652:function(e,t,i){"use strict";var o=i(365),n=i(359),s=i(371),r=i(612),a=i(725),l=i(375),c=i(378),p=i(367),d=i(516),u=i(439),m=i(0);const h=Object(d.a)(a.a);class g extends o.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={ready:!1}}componentDidMount(){this.mounted=!0,Object(u.a)("billing/billing").then(()=>{this.mounted&&this.setState({ready:!0})},()=>{})}componentWillUnmount(){this.mounted=!1}render(){const e=Object(m.l)("billing.upgrade_box.upgrade_to_paid_plan");return this.state.ready?o.createElement(c.a,{contentLabel:e,noBackdrop:this.props.insideModal,onRequestClose:this.props.onClose,shouldCloseOnOverlayClick:!1,size:"medium"},o.createElement("div",{className:"modal-head"},o.createElement("h2",null,e)),o.createElement(h,{onCommit:this.props.onUpgradeDone,organizationKey:this.props.organization.key,subscriptionPlans:this.props.subscriptionPlans},e=>{let t=e.onSubmit,i=e.processingUpgrade,s=e.renderFormFields,a=e.renderNextCharge,c=e.renderRecap,d=e.renderSubmitButton;return o.createElement("form",{id:"organization-paid-plan-form",onSubmit:t},o.createElement("div",{className:"modal-body modal-container"},o.createElement("div",{className:"huge-spacer-bottom"},o.createElement("p",{className:"spacer-bottom"},o.createElement(n.FormattedMessage,{defaultMessage:Object(m.l)("billing.upgrade.org_x_advantages"),id:"billing.coupon.description",values:{org:o.createElement("strong",null,this.props.organization.name)}})),o.createElement(r.a,null)),s(),o.createElement("div",{className:"big-spacer-top"},c())),o.createElement("footer",{className:"modal-foot display-flex-center display-flex-space-between"},a()||o.createElement("span",null),o.createElement("div",null,o.createElement(l.a,{loading:i}),d(),o.createElement(p.h,{onClick:this.props.onClose},Object(m.l)("cancel")))))})):null}}var b=i(628),v=i(490),S=i(639);i.d(t,"a",function(){return f});class f extends o.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={subscriptionPlans:[],upgradeOrganizationModal:!1},this.fetchSubscriptionPlans=()=>Object(S.a)().then(e=>{this.mounted&&this.setState({subscriptionPlans:e})}),this.handleUpgradeClick=()=>{this.setState({upgradeOrganizationModal:!0})},this.handleUpgradeOrganizationModalClose=()=>{this.mounted&&this.setState({upgradeOrganizationModal:!1})},this.handleOrganizationUpgrade=()=>{this.props.onOrganizationUpgrade(),this.handleUpgradeOrganizationModalClose()}}componentDidMount(){this.mounted=!0,this.fetchSubscriptionPlans()}componentWillUnmount(){this.mounted=!1}render(){if(!Object(m.i)("billing.upgrade_box.header"))return null;const e=this.state,t=e.subscriptionPlans,i=e.upgradeOrganizationModal,a=t[0]&&t[0].price;return o.createElement(o.Fragment,null,o.createElement(b.a,{className:this.props.className,title:Object(m.l)("billing.upgrade_box.header"),titleInfo:void 0!==a&&o.createElement(n.FormattedMessage,{defaultMessage:Object(m.l)("billing.price_from_x"),id:"billing.price_from_x",values:{price:o.createElement("span",{className:"big"},Object(v.f)(a))}})},o.createElement(o.Fragment,null,o.createElement(r.a,null),o.createElement("div",{className:"big-spacer-left"},o.createElement(p.a,{className:"js-upgrade-organization",onClick:this.handleUpgradeClick},Object(m.l)("billing.paid_plan.upgrade")),o.createElement(s.Link,{className:"spacer-left",target:"_blank",to:"/about/pricing"},Object(m.l)("billing.pricing.learn_more"))))),i&&o.createElement(g,{insideModal:this.props.insideModal,onClose:this.handleUpgradeOrganizationModalClose,onUpgradeDone:this.handleOrganizationUpgrade,organization:this.props.organization,subscriptionPlans:t}))}}},703:function(e,t,i){"use strict";i.d(t,"a",function(){return r});var o=i(365),n=i(366),s=i(0);class r extends o.PureComponent{constructor(){super(...arguments),this.handlePublicClick=e=>{e.preventDefault(),e.currentTarget.blur(),this.props.onChange("public")},this.handlePrivateClick=e=>{e.preventDefault(),e.currentTarget.blur(),this.props.onChange("private")}}render(){return o.createElement("div",{className:n("visibility-select",this.props.className)},o.createElement("a",{className:"link-base-color link-no-underline visibility-select-option",href:"#",id:"visibility-public",onClick:this.handlePublicClick},o.createElement("i",{className:n("icon-radio",{"is-checked":"public"===this.props.visibility})}),o.createElement("span",{className:"spacer-left"},Object(s.l)("visibility.public"))),this.props.showDetails&&o.createElement("span",{className:"visibility-details note"},Object(s.l)("visibility.public.description.long")),this.props.canTurnToPrivate?o.createElement(o.Fragment,null,o.createElement("a",{className:"link-base-color link-no-underline huge-spacer-left visibility-select-option",href:"#",id:"visibility-private",onClick:this.handlePrivateClick},o.createElement("i",{className:n("icon-radio",{"is-checked":"private"===this.props.visibility})}),o.createElement("span",{className:"spacer-left"},Object(s.l)("visibility.private"))),this.props.showDetails&&o.createElement("span",{className:"visibility-details note"},Object(s.l)("visibility.private.description.long"))):o.createElement(o.Fragment,null,o.createElement("span",{className:"huge-spacer-left text-muted cursor-not-allowed visibility-select-option",id:"visibility-private"},o.createElement("i",{className:n("icon-radio",{"is-checked":"private"===this.props.visibility})}),o.createElement("span",{className:"spacer-left"},Object(s.l)("visibility.private"))),this.props.showDetails&&o.createElement("span",{className:"visibility-details note"},Object(s.l)("visibility.private.description.long"))))}}},878:function(e,t,i){"use strict";i.d(t,"a",function(){return d});var o=i(365),n=i(522),s=i(375),r=i(387),a=i(386),l=i(367),c=i(0),p=i(385);class d extends o.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={done:!1,loading:!0},this.fetchPermissionTemplates=()=>{Object(n.l)(this.props.organization).then(e=>{let t=e.permissionTemplates;this.mounted&&this.setState({loading:!1,permissionTemplates:t})},()=>{this.mounted&&this.setState({loading:!1})})},this.handleSubmit=()=>this.state.permissionTemplate?Object(n.b)({organization:this.props.organization,projectKey:this.props.project.key,templateId:this.state.permissionTemplate}).then(()=>{this.mounted&&(this.props.onApply&&this.props.onApply(),this.setState({done:!0}))}):Promise.reject(void 0),this.handlePermissionTemplateChange=e=>{let t=e.value;this.setState({permissionTemplate:t})}}componentDidMount(){this.mounted=!0,this.fetchPermissionTemplates()}componentWillUnmount(){this.mounted=!1}render(){const e=Object(c.m)("projects_role.apply_template_to_xxx",this.props.project.name);return o.createElement(r.a,{header:e,onClose:this.props.onClose,onSubmit:this.handleSubmit,size:"small"},t=>{let i=t.onCloseClick,n=t.onFormSubmit,r=t.submitting;return o.createElement("form",{id:"project-permissions-apply-template-form",onSubmit:n},o.createElement("header",{className:"modal-head"},o.createElement("h2",null,e)),o.createElement("div",{className:"modal-body"},this.state.done?o.createElement(p.a,{variant:"success"},Object(c.l)("projects_role.apply_template.success")):o.createElement(o.Fragment,null,this.state.loading?o.createElement("i",{className:"spinner"}):o.createElement("div",{className:"modal-field"},o.createElement("label",{htmlFor:"project-permissions-template"},Object(c.l)("template"),o.createElement("em",{className:"mandatory"},"*")),this.state.permissionTemplates&&o.createElement(a.c,{clearable:!1,id:"project-permissions-template",onChange:this.handlePermissionTemplateChange,options:this.state.permissionTemplates.map(e=>({label:e.name,value:e.id})),value:this.state.permissionTemplate})))),o.createElement("footer",{className:"modal-foot"},o.createElement(s.a,{className:"spacer-right",loading:r}),!this.state.done&&o.createElement(l.i,{disabled:r||!this.state.permissionTemplate},Object(c.l)("apply")),o.createElement(l.h,{onClick:i},Object(c.l)(this.state.done?"close":"cancel"))))})}}}}]);
//# sourceMappingURL=317.m.644f8619.chunk.js.map