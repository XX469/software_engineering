(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1154:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(539),o=n(594),a=n(585),i=n(549),l=n(4);function c(e){var t=e.date;return t?r.createElement(i.a,{overlay:r.createElement(a.a,{date:t})},r.createElement("span",null,r.createElement(o.a,{date:t}))):r.createElement("span",null,Object(l.l)("never"))}},1194:function(e,t,n){"use strict";var r,o=n(539),a=n(586),i=n(553),l=n(541),c=n(4),s=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={loading:!1,name:null},t.handleNameChange=function(e){t.setState({name:e.currentTarget.value})},t.handleFormSubmit=function(e){e.preventDefault();var n=t.state.name;null!=n&&(t.setState({loading:!0}),Object(a.v)(t.props.profile.key,n).then(function(){return t.props.onRename(n)},function(){t.mounted&&t.setState({loading:!1})}))},t}return s(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props.profile,t=Object(c.m)("quality_profiles.rename_x_title",e.name,e.languageName),n=this.state.loading||!this.state.name||this.state.name===e.name;return o.createElement(i.a,{contentLabel:t,onRequestClose:this.props.onClose},o.createElement("form",{id:"rename-profile-form",onSubmit:this.handleFormSubmit},o.createElement("div",{className:"modal-head"},o.createElement("h2",null,t)),o.createElement("div",{className:"modal-body"},o.createElement("div",{className:"modal-field"},o.createElement("label",{htmlFor:"rename-profile-name"},Object(c.l)("quality_profiles.new_name"),o.createElement("em",{className:"mandatory"},"*")),o.createElement("input",{autoFocus:!0,id:"rename-profile-name",maxLength:100,name:"name",onChange:this.handleNameChange,required:!0,size:50,type:"text",value:null!=this.state.name?this.state.name:e.name}))),o.createElement("div",{className:"modal-foot"},this.state.loading&&o.createElement("i",{className:"spinner spacer-right"}),o.createElement(l.f,{disabled:n,id:"rename-profile-submit"},Object(c.l)("rename")),o.createElement(l.e,{id:"rename-profile-cancel",onClick:this.props.onClose},Object(c.l)("cancel")))))},t}(o.PureComponent),p=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),m=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={loading:!1,name:null},t.handleNameChange=function(e){t.setState({name:e.currentTarget.value})},t.handleFormSubmit=function(e){e.preventDefault();var n=t.state.name;null!=n&&(t.setState({loading:!0}),Object(a.i)(t.props.profile.key,n).then(function(e){return t.props.onCopy(e.name)},function(){t.mounted&&t.setState({loading:!1})}))},t}return p(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props.profile,t=Object(c.m)("quality_profiles.copy_x_title",e.name,e.languageName),n=this.state.loading||!this.state.name||this.state.name===e.name;return o.createElement(i.a,{contentLabel:t,onRequestClose:this.props.onClose},o.createElement("form",{id:"copy-profile-form",onSubmit:this.handleFormSubmit},o.createElement("div",{className:"modal-head"},o.createElement("h2",null,t)),o.createElement("div",{className:"modal-body"},o.createElement("div",{className:"modal-field"},o.createElement("label",{htmlFor:"copy-profile-name"},Object(c.l)("quality_profiles.copy_new_name"),o.createElement("em",{className:"mandatory"},"*")),o.createElement("input",{autoFocus:!0,id:"copy-profile-name",maxLength:100,name:"name",onChange:this.handleNameChange,required:!0,size:50,type:"text",value:null!=this.state.name?this.state.name:e.name}))),o.createElement("div",{className:"modal-foot"},this.state.loading&&o.createElement("i",{className:"spinner spacer-right"}),o.createElement(l.f,{disabled:n,id:"copy-profile-submit"},Object(c.l)("copy")),o.createElement(l.e,{id:"copy-profile-cancel",onClick:this.props.onClose},Object(c.l)("cancel")))))},t}(o.PureComponent),f=n(560),d=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={loading:!1,name:null},t.handleFormSubmit=function(e){e.preventDefault(),t.setState({loading:!0}),Object(a.l)(t.props.profile.key).then(t.props.onDelete,function(){t.mounted&&t.setState({loading:!1})})},t}return d(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props.profile,t=Object(c.l)("quality_profiles.delete_confirm_title");return o.createElement(i.a,{contentLabel:t,onRequestClose:this.props.onClose},o.createElement("form",{id:"delete-profile-form",onSubmit:this.handleFormSubmit},o.createElement("div",{className:"modal-head"},o.createElement("h2",null,t)),o.createElement("div",{className:"modal-body"},o.createElement("div",{className:"js-modal-messages"}),e.childrenCount>0?o.createElement("div",null,o.createElement(f.a,{variant:"warning"},Object(c.l)("quality_profiles.this_profile_has_descendants")),o.createElement("p",null,Object(c.m)("quality_profiles.are_you_sure_want_delete_profile_x_and_descendants",e.name,e.languageName))):o.createElement("p",null,Object(c.m)("quality_profiles.are_you_sure_want_delete_profile_x",e.name,e.languageName))),o.createElement("div",{className:"modal-foot"},this.state.loading&&o.createElement("i",{className:"spinner spacer-right"}),o.createElement(l.f,{className:"button-red",disabled:this.state.loading,id:"delete-profile-submit"},Object(c.l)("delete")),o.createElement(l.e,{id:"delete-profile-cancel",onClick:this.props.onClose},Object(c.l)("cancel")))))},t}(o.PureComponent),y=n(547),b=n(652),O=n(596),v=n(603),C=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),g=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={copyFormOpen:!1,deleteFormOpen:!1,renameFormOpen:!1},t.handleRenameClick=function(){t.setState({renameFormOpen:!0})},t.handleProfileRename=function(e){t.closeRenameForm(),t.props.updateProfiles().then(function(){t.props.fromList||t.props.router.replace(Object(b.c)(e,t.props.profile.language,t.props.organization))},function(){})},t.closeRenameForm=function(){t.setState({renameFormOpen:!1})},t.handleCopyClick=function(){t.setState({copyFormOpen:!0})},t.handleProfileCopy=function(e){t.closeCopyForm(),t.props.updateProfiles().then(function(){t.props.router.push(Object(b.c)(e,t.props.profile.language,t.props.organization))},function(){})},t.closeCopyForm=function(){t.setState({copyFormOpen:!1})},t.handleSetDefaultClick=function(){Object(a.A)(t.props.profile.key).then(t.props.updateProfiles,function(){})},t.handleDeleteClick=function(){t.setState({deleteFormOpen:!0})},t.handleProfileDelete=function(){t.props.router.replace(Object(b.e)(t.props.organization)),t.props.updateProfiles()},t.closeDeleteForm=function(){t.setState({deleteFormOpen:!1})},t}return C(t,e),t.prototype.render=function(){var e=this.props.profile,t=e.actions,n=void 0===t?{}:t,r=window.baseUrl+"/api/qualityprofiles/backup?profileKey="+encodeURIComponent(e.key),a=Object(y.C)({qprofile:e.key,activation:"false"},this.props.organization);return o.createElement(o.Fragment,null,o.createElement(O.c,{className:this.props.className},n.edit&&o.createElement(O.b,{id:"quality-profile-activate-more-rules",to:a},Object(c.l)("quality_profiles.activate_more_rules")),!e.isBuiltIn&&o.createElement(O.b,{download:e.key+".xml",id:"quality-profile-backup",to:r},Object(c.l)("backup_verb")),o.createElement(O.b,{id:"quality-profile-compare",to:Object(b.b)(e.name,e.language,this.props.organization)},Object(c.l)("compare")),n.copy&&o.createElement(O.b,{id:"quality-profile-copy",onClick:this.handleCopyClick},Object(c.l)("copy")),n.edit&&o.createElement(O.b,{id:"quality-profile-rename",onClick:this.handleRenameClick},Object(c.l)("rename")),n.setAsDefault&&o.createElement(O.b,{id:"quality-profile-set-as-default",onClick:this.handleSetDefaultClick},Object(c.l)("set_as_default")),n.delete&&o.createElement(O.a,null),n.delete&&o.createElement(O.b,{destructive:!0,id:"quality-profile-delete",onClick:this.handleDeleteClick},Object(c.l)("delete"))),this.state.copyFormOpen&&o.createElement(m,{onClose:this.closeCopyForm,onCopy:this.handleProfileCopy,profile:e}),this.state.deleteFormOpen&&o.createElement(h,{onClose:this.closeDeleteForm,onDelete:this.handleProfileDelete,profile:e}),this.state.renameFormOpen&&o.createElement(u,{onClose:this.closeRenameForm,onRename:this.handleProfileRename,profile:e}))},t}(o.PureComponent);t.a=Object(v.a)(g)},553:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n(539),o=n(580),a=n(540),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function l(e){return r.createElement(o,i({className:a("modal",{"modal-medium":e.medium,"modal-large":e.large,"modal-simple":e.simple}),isOpen:!0,overlayClassName:a("modal-overlay",{"modal-no-backdrop":e.noBackdrop})},e))}o.setAppElement("#content")},558:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(539),o=n(540),a=n(549),i=n(598),l=n(546);n(568);function c(e){var t=e.children,n=void 0===t?r.createElement(i.a,{fill:l.gray71,size:12}):t,c=e.tagName,s=void 0===c?"div":c;return r.createElement(s,{className:o("help-tooltip",e.className)},r.createElement(a.a,{mouseLeaveDelay:.25,onShow:e.onShow,overlay:e.overlay,placement:e.placement},r.createElement("span",{className:"display-inline-flex-center"},n)))}},567:function(e,t,n){"use strict";var r,o=n(539),a=n(558),i=n(554),l=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=Object(i.a)(function(){return Promise.all([n.e(8),n.e(10)]).then(n.bind(null,8))}),s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={open:!1},t.close=function(){t.setState({open:!1})},t}return l(t,e),t.prototype.componentDidMount=function(){var e=this;this.props.doc.then(function(t){var n=t.default;e.setState({content:n})},function(){}),document.addEventListener("scroll",this.close,!0)},t.prototype.componentWillUnmount=function(){document.removeEventListener("scroll",this.close,!0)},t.prototype.render=function(){return this.state.content?o.createElement(a.a,{className:this.props.className,overlay:o.createElement("div",{className:"abs-width-300"},o.createElement(c,{childProps:this.props.overlayProps,className:"cut-margins",content:this.state.content,isTooltip:!0}))},this.props.children):this.props.children||null},t}(o.PureComponent);t.a=s},568:function(e,t,n){var r=n(569);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(543)(r,o);r.locals&&(e.exports=r.locals)},569:function(e,t,n){(e.exports=n(542)(!1)).push([e.i,"/*\n * SonarQube\n * Copyright (C) 2009-2018 SonarSource SA\n * mailto:info AT sonarsource DOT com\n *\n * This program is free software; you can redistribute it and/or\n * modify it under the terms of the GNU Lesser General Public\n * License as published by the Free Software Foundation; either\n * version 3 of the License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU\n * Lesser General Public License for more details.\n *\n * You should have received a copy of the GNU Lesser General Public License\n * along with this program; if not, write to the Free Software Foundation,\n * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.\n */\n.help-tooltip {\n  display: inline-flex;\n  align-items: center;\n  vertical-align: middle;\n}\n\n.help-toolip-link {\n  display: block;\n  width: 12px;\n  height: 12px;\n  border: none;\n}\n",""])},581:function(e,t,n){var r=n(134),o=n(77),a=n(637),i=n(34);e.exports=function(e,t){return(i(e)?r:a)(e,o(t,3))}},585:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(539),o=n(534),a=n(75),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},l={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"};function c(e){var t=e.children,n=e.date;return r.createElement(o.FormattedDate,i({value:Object(a.e)(n)},l),t)}},586:function(e,t,n){"use strict";n.d(t,"y",function(){return s}),n.d(t,"s",function(){return u}),n.d(t,"j",function(){return p}),n.d(t,"w",function(){return m}),n.d(t,"r",function(){return f}),n.d(t,"q",function(){return d}),n.d(t,"A",function(){return h}),n.d(t,"v",function(){return y}),n.d(t,"i",function(){return b}),n.d(t,"l",function(){return O}),n.d(t,"g",function(){return v}),n.d(t,"o",function(){return C}),n.d(t,"n",function(){return g}),n.d(t,"p",function(){return _}),n.d(t,"h",function(){return j}),n.d(t,"d",function(){return E}),n.d(t,"m",function(){return N}),n.d(t,"z",function(){return S}),n.d(t,"x",function(){return q}),n.d(t,"c",function(){return w}),n.d(t,"u",function(){return P}),n.d(t,"b",function(){return k}),n.d(t,"t",function(){return F}),n.d(t,"e",function(){return L}),n.d(t,"f",function(){return x}),n.d(t,"a",function(){return D}),n.d(t,"k",function(){return A});var r=n(581),o=n.n(r),a=n(659),i=n(26),l=n(555),c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function s(e){return Object(i.getJSON)("/api/qualityprofiles/search",e).catch(l.a)}function u(e){return Object(i.getJSON)("/api/qualityprofiles/show",e)}function p(e){return Object(i.request)("/api/qualityprofiles/create").setMethod("post").setData(e).submit().then(i.checkStatus).then(i.parseJSON).catch(l.a)}function m(e){return Object(i.request)("/api/qualityprofiles/restore").setMethod("post").setData(e).submit().then(i.checkStatus).then(i.parseJSON).catch(l.a)}function f(e){return Object(i.getJSON)("/api/qualityprofiles/projects",e).catch(l.a)}function d(e){return Object(i.getJSON)("/api/qualityprofiles/inheritance",{profileKey:e}).catch(l.a)}function h(e){return Object(i.post)("/api/qualityprofiles/set_default",{profileKey:e})}function y(e,t){return Object(i.post)("/api/qualityprofiles/rename",{key:e,name:t}).catch(l.a)}function b(e,t){return Object(i.postJSON)("/api/qualityprofiles/copy",{fromKey:e,toName:t}).catch(l.a)}function O(e){return Object(i.post)("/api/qualityprofiles/delete",{profileKey:e}).catch(l.a)}function v(e,t){return Object(i.post)("/api/qualityprofiles/change_parent",{profileKey:e,parentKey:t}).catch(l.a)}function C(){return Object(i.getJSON)("/api/qualityprofiles/importers").then(function(e){return e.importers},l.a)}function g(){return Object(i.getJSON)("/api/qualityprofiles/exporters").then(function(e){return e.exporters})}function _(e){return Object(i.getJSON)("/api/qualityprofiles/changelog",e)}function j(e,t){return Object(i.getJSON)("/api/qualityprofiles/compare",{leftKey:e,rightKey:t})}function E(e,t){return Object(i.post)("/api/qualityprofiles/add_project",{profileKey:e,projectKey:t}).catch(l.a)}function N(e,t){return Object(i.post)("/api/qualityprofiles/remove_project",{profileKey:e,projectKey:t}).catch(l.a)}function S(e){return Object(i.getJSON)("/api/qualityprofiles/search_users",e).catch(l.a)}function q(e){return Object(i.getJSON)("/api/qualityprofiles/search_groups",e).catch(l.a)}function w(e){return Object(i.post)("/api/qualityprofiles/add_user",e).catch(l.a)}function P(e){return Object(i.post)("/api/qualityprofiles/remove_user",e).catch(l.a)}function k(e){return Object(i.post)("/api/qualityprofiles/add_group",e).catch(l.a)}function F(e){return Object(i.post)("/api/qualityprofiles/remove_group",e).catch(l.a)}function L(e){return Object(i.postJSON)("/api/qualityprofiles/activate_rules",e)}function x(e){return Object(i.postJSON)("/api/qualityprofiles/deactivate_rules",e)}function D(e){var t=e.params&&o()(e.params,function(e,t){return t+"="+Object(a.a)(e)}).join(";");return Object(i.post)("/api/qualityprofiles/activate_rule",c({},e,{params:t})).catch(l.a)}function A(e){return Object(i.post)("/api/qualityprofiles/deactivate_rule",e).catch(l.a)}},594:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(539),o=n(534),a=n(75);function i(e){var t=e.children,n=e.date;return r.createElement(o.FormattedRelative,{value:Object(a.e)(n)},t)}},596:function(e,t,n){"use strict";var r=n(539),o=n(540),a=n(545),i=n(561),l=n(565),c=n(544);function s(e){var t=e.className,n=e.fill,o=void 0===n?"currentColor":n,a=e.size,i=void 0===a?14:a;return r.createElement(c.a,{className:t,size:i,viewBox:"0 0 14 14"},r.createElement("g",{transform:"matrix(0.0364583,0,0,0.0364583,0,-1.16667)"},r.createElement("path",{d:"M256,224C256,206.333 249.75,191.25 237.25,178.75C224.75,166.25 209.667,160 192,160C174.333,160 159.25,166.25 146.75,178.75C134.25,191.25 128,206.333 128,224C128,241.667 134.25,256.75 146.75,269.25C159.25,281.75 174.333,288 192,288C209.667,288 224.75,281.75 237.25,269.25C249.75,256.75 256,241.667 256,224ZM384,196.75L384,252.25C384,254.25 383.333,256.167 382,258C380.667,259.833 379,260.917 377,261.25L330.75,268.25C327.583,277.25 324.333,284.833 321,291C326.833,299.333 335.75,310.833 347.75,325.5C349.417,327.5 350.25,329.583 350.25,331.75C350.25,333.917 349.5,335.833 348,337.5C343.5,343.667 335.25,352.667 323.25,364.5C311.25,376.333 303.417,382.25 299.75,382.25C297.75,382.25 295.583,381.5 293.25,380L258.75,353C251.417,356.833 243.833,360 236,362.5C233.333,385.167 230.917,400.667 228.75,409C227.583,413.667 224.583,416 219.75,416L164.25,416C161.917,416 159.875,415.292 158.125,413.875C156.375,412.458 155.417,410.667 155.25,408.5L148.25,362.5C140.083,359.833 132.583,356.75 125.75,353.25L90.5,380C88.833,381.5 86.75,382.25 84.25,382.25C81.917,382.25 79.833,381.333 78,379.5C57,360.5 43.25,346.5 36.75,337.5C35.583,335.833 35,333.917 35,331.75C35,329.75 35.667,327.833 37,326C39.5,322.5 43.75,316.958 49.75,309.375C55.75,301.792 60.25,295.917 63.25,291.75C58.75,283.417 55.333,275.167 53,267L7.25,260.25C5.083,259.917 3.333,258.875 2,257.125C0.667,255.375 0,253.417 0,251.25L0,195.75C0,193.75 0.667,191.833 2,190C3.333,188.167 4.917,187.083 6.75,186.75L53.25,179.75C55.583,172.083 58.833,164.417 63,156.75C56.333,147.25 47.417,135.75 36.25,122.25C34.583,120.25 33.75,118.25 33.75,116.25C33.75,114.583 34.5,112.667 36,110.5C40.333,104.5 48.542,95.542 60.625,83.625C72.708,71.708 80.583,65.75 84.25,65.75C86.417,65.75 88.583,66.583 90.75,68.25L125.25,95C132.583,91.167 140.167,88 148,85.5C150.667,62.833 153.083,47.333 155.25,39C156.417,34.333 159.417,32 164.25,32L219.75,32C222.083,32 224.125,32.708 225.875,34.125C227.625,35.542 228.583,37.333 228.75,39.5L235.75,85.5C243.917,88.167 251.417,91.25 258.25,94.75L293.75,68C295.25,66.5 297.25,65.75 299.75,65.75C301.917,65.75 304,66.583 306,68.25C327.5,88.083 341.25,102.25 347.25,110.75C348.417,112.083 349,113.917 349,116.25C349,118.25 348.333,120.167 347,122C344.5,125.5 340.25,131.042 334.25,138.625C328.25,146.208 323.75,152.083 320.75,156.25C325.083,164.583 328.5,172.75 331,180.75L376.75,187.75C378.917,188.083 380.667,189.125 382,190.875C383.333,192.625 384,194.583 384,196.75Z",style:{fill:o}})))}var u=n(541);n.d(t,"c",function(){return f}),n.d(t,"b",function(){return d}),n.d(t,"a",function(){return h});var p,m=(p=function(e,t){return(p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}p(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});function f(e){return r.createElement(i.b,{className:e.className,onOpen:e.onOpen,overlay:r.createElement("ul",{className:"menu"},e.children)},r.createElement(u.a,{className:o("dropdown-toggle",e.toggleClassName,{"button-small":e.small})},r.createElement(s,{size:e.small?12:14}),r.createElement(l.a,{className:"little-spacer-left"})))}var d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClick=function(e){e.preventDefault(),e.currentTarget.blur(),t.props.onClick&&t.props.onClick()},t}return m(t,e),t.prototype.render=function(){var e=o(this.props.className,{"text-danger":this.props.destructive});return this.props.download&&"string"==typeof this.props.to?r.createElement("li",null,r.createElement("a",{className:e,download:this.props.download,href:this.props.to,id:this.props.id},this.props.children)):this.props.to?r.createElement("li",null,r.createElement(a.Link,{className:e,id:this.props.id,to:this.props.to},this.props.children)):r.createElement("li",null,r.createElement("a",{className:e,href:"#",id:this.props.id,onClick:this.handleClick},this.props.children))},t}(r.PureComponent);function h(){return r.createElement("li",{className:"divider"})}},659:function(e,t,n){"use strict";function r(e){return'"'+e.replace(/"/g,'\\"')+'"'}n.d(t,"a",function(){return r})},812:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n(539),o=n(540),a=n(567),i=n(4);function l(e){var t=e.className,l=e.tooltip,c=void 0===l||l,s=r.createElement("div",{className:o("outline-badge",t)},Object(i.l)("quality_profiles.built_in"));return c?r.createElement(a.a,{doc:Promise.resolve().then(n.t.bind(null,856,7))},s):s}},820:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(539),o=n(545),a=n(652),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n};function c(e){var t=e.name,n=e.language,c=e.organization,s=e.children,u=l(e,["name","language","organization","children"]);return r.createElement(o.Link,i({activeClassName:"link-no-underline",to:Object(a.c)(t,n,c)},u),s)}},856:function(e,t){e.exports="Built-in profiles are provided directly by the language analyzers and may be updated with each new analyzer version. They represent best-practice, minimum rule sets.\n"}}]);
//# sourceMappingURL=16.08b4d4b2.chunk.js.map