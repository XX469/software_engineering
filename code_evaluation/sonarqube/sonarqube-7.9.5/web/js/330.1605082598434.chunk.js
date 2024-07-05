(window.webpackJsonp=window.webpackJsonp||[]).push([[330],{1325:function(t,e,n){"use strict";n.r(e),n.d(e,"OrganizationDelete",function(){return y});var o,r=n(695),i=n(705),a=n(741),c=n(761),u=n(28),l=n(965),s=n(697),p=n(781),d=n(110),f=n(715),m=n(735),h=n(775),b=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),y=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.mounted=!1,e.state={verify:""},e.fetchOrganizationPlanInfo=function(){Object(d.isSonarCloud)()&&Object(p.e)(e.props.organization.key).then(function(t){e.mounted&&e.setState({hasPaidPlan:"inactive"!==t.subscription.status})},function(){e.mounted&&e.setState({hasPaidPlan:!1})})},e.handleInput=function(t){e.setState({verify:t.currentTarget.value})},e.isVerified=function(){return e.state.verify.toLowerCase()===e.props.organization.name.toLowerCase()},e.onDelete=function(){var t=e.props.organization;return e.props.deleteOrganization(t.key).then(function(){e.state.hasPaidPlan?e.props.router.replace({pathname:"/feedback/downgrade",state:{confirmationMessage:Object(u.m)("organization.deleted_x",t.name),organization:t,title:Object(u.l)("billing.downgrade.reason.title_deleted")}}):(Object(h.a)(Object(u.l)("organization.deleted")),e.props.router.replace("/"))})},e}return b(e,t),e.prototype.componentDidMount=function(){this.mounted=!0,this.fetchOrganizationPlanInfo()},e.prototype.componentWillUnmount=function(){this.mounted=!1},e.prototype.render=function(){var t=this.state.hasPaidPlan;return r.createElement("div",{className:"boxed-group boxed-group-inner"},r.createElement("h2",{className:"boxed-title"},Object(u.l)("organization.delete")),r.createElement("p",{className:"big-spacer-bottom width-50"},r.createElement(c.a,{message:Object(u.l)("organization.delete.description")})),r.createElement(a.a,{confirmButtonText:Object(u.l)("delete"),confirmDisable:!this.isVerified(),isDestructive:!0,modalBody:r.createElement("div",null,t&&r.createElement(f.a,{variant:"warning"},Object(u.l)("organization.delete.sonarcloud.paid_plan_info")),r.createElement("p",null,Object(u.l)("organization.delete.question")),r.createElement("div",{className:"spacer-top"},r.createElement("label",{htmlFor:"downgrade-organization-name"},Object(u.l)("billing.downgrade.modal.type_to_proceed")),r.createElement("div",{className:"little-spacer-top"},r.createElement("input",{autoFocus:!0,className:"input-super-large",id:"downgrade-organization-name",onChange:this.handleInput,type:"text",value:this.state.verify})))),modalHeader:Object(u.m)("organization.delete_x",this.props.organization.name),onConfirm:this.onDelete},function(t){var e=t.onClick;return r.createElement(s.a,{className:"js-custom-measure-delete button-red",onClick:e},Object(u.l)("delete"))}))},e}(r.PureComponent),O={deleteOrganization:l.a};e.default=Object(m.a)(Object(i.connect)(null,O)(y))},709:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var o=n(695),r=n(740),i=n(696),a=function(){return(a=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};function c(t){return o.createElement(r,a({className:i("modal",{"modal-small":"small"===t.size,"modal-medium":"medium"===t.size,"modal-large":"large"===t.size}),isOpen:!0,overlayClassName:i("modal-overlay",{"modal-no-backdrop":t.noBackdrop})},t))}r.setAppElement("#content")},719:function(t,e,n){"use strict";var o,r=n(695),i=n(709),a=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),c=function(){return(c=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},u=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&(n[o[r]]=t[o[r]])}return n},l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.mounted=!1,e.state={submitting:!1},e.stopSubmitting=function(){e.mounted&&e.setState({submitting:!1})},e.handleCloseClick=function(t){t&&(t.preventDefault(),t.currentTarget.blur()),e.props.onClose()},e.handleFormSubmit=function(t){t.preventDefault(),e.submit()},e.handleSubmitClick=function(t){t&&(t.preventDefault(),t.currentTarget.blur()),e.submit()},e.submit=function(){var t=e.props.onSubmit();t&&(e.setState({submitting:!0}),t.then(e.stopSubmitting,e.stopSubmitting))},e}return a(e,t),e.prototype.componentDidMount=function(){this.mounted=!0},e.prototype.componentWillUnmount=function(){this.mounted=!1},e.prototype.render=function(){var t=this.props,e=t.children,n=t.header,o=t.onClose,a=(t.onSubmit,u(t,["children","header","onClose","onSubmit"]));return r.createElement(i.a,c({contentLabel:n,onRequestClose:o},a),e({onCloseClick:this.handleCloseClick,onFormSubmit:this.handleFormSubmit,onSubmitClick:this.handleSubmitClick,submitting:this.state.submitting}))},e}(r.Component);e.a=l},726:function(t,e,n){"use strict";var o,r=n(695),i=n(719),a=n(707),c=n(697),u=n(28),l=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),s=function(){return(s=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.mounted=!1,e.handleSubmit=function(){var t=e.props.onConfirm(e.props.confirmData);return t?t.then(e.props.onClose,function(){}):void e.props.onClose()},e.renderModalContent=function(t){var n=t.onCloseClick,o=t.onFormSubmit,i=t.submitting,l=e.props,s=l.children,p=l.confirmButtonText,d=l.confirmDisable,f=l.header,m=l.headerDescription,h=l.isDestructive,b=l.cancelButtonText,y=void 0===b?Object(u.l)("cancel"):b;return r.createElement("form",{onSubmit:o},r.createElement("header",{className:"modal-head"},r.createElement("h2",null,f),m),r.createElement("div",{className:"modal-body"},s),r.createElement("footer",{className:"modal-foot"},r.createElement(a.a,{className:"spacer-right",loading:i}),r.createElement(c.i,{autoFocus:!0,className:h?"button-red":void 0,disabled:i||d},p),r.createElement(c.h,{disabled:i,onClick:n},y)))},e}return l(e,t),e.prototype.componentDidMount=function(){this.mounted=!0},e.prototype.componentWillUnmount=function(){this.mounted=!1},e.prototype.render=function(){var t=this.props,e={header:t.header,onClose:t.onClose,noBackdrop:t.noBackdrop,size:t.size};return r.createElement(i.a,s({onSubmit:this.handleSubmit},e),this.renderModalContent)},e}(r.PureComponent);e.a=p},741:function(t,e,n){"use strict";var o,r=n(695),i=n(726),a=n(742),c=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),u=function(){return(u=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},l=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&(n[o[r]]=t[o[r]])}return n},s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.renderConfirmModal=function(t){var n=t.onClose,o=e.props,a=(o.children,o.modalBody),c=o.modalHeader,s=o.modalHeaderDescription,p=l(o,["children","modalBody","modalHeader","modalHeaderDescription"]);return r.createElement(i.a,u({header:c,headerDescription:s,onClose:n},p),a)},e}return c(e,t),e.prototype.render=function(){return r.createElement(a.a,{modal:this.renderConfirmModal},this.props.children)},e}(r.PureComponent);e.a=s},742:function(t,e,n){"use strict";var o,r=n(695),i=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.mounted=!1,e.state={modal:!1},e.handleButtonClick=function(){e.setState({modal:!0})},e.handleFormSubmit=function(t){t&&t.preventDefault(),e.setState({modal:!0})},e.handleCloseModal=function(){e.mounted&&e.setState({modal:!1})},e}return i(e,t),e.prototype.componentDidMount=function(){this.mounted=!0},e.prototype.componentWillUnmount=function(){this.mounted=!1},e.prototype.render=function(){return r.createElement(r.Fragment,null,this.props.children({onClick:this.handleButtonClick,onFormSubmit:this.handleFormSubmit}),this.state.modal&&this.props.modal({onClose:this.handleCloseModal}))},e}(r.PureComponent);e.a=a},775:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var o=n(758),r=n(751);function i(t){Object(o.default)().dispatch(r.b(t))}},829:function(t,e,n){var o;
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
!function(){"use strict";var r=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:r,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen};void 0===(o=function(){return i}.call(e,n,e,t))||(t.exports=o)}()},965:function(t,e,n){"use strict";n.d(e,"b",function(){return c}),n.d(e,"a",function(){return u});var o=n(781),r=n(891),i=n(751),a=n(28);function c(t,e){return function(n){return o.l(t,e).then(function(){n(r.h(t,e)),n(Object(i.b)(Object(a.l)("organization.updated")))})}}function u(t){return function(e){return o.c(t).then(function(){e(r.c(t))})}}}}]);
//# sourceMappingURL=330.1605082598434.chunk.js.map