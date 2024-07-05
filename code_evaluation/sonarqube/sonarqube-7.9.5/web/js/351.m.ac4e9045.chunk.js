(window.webpackJsonp=window.webpackJsonp||[]).push([[351],{378:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a(365),s=a(405),i=a(366);function l(e){return n.createElement(s,Object.assign({className:i("modal",{"modal-small":"small"===e.size,"modal-medium":"medium"===e.size,"modal-large":"large"===e.size}),isOpen:!0,overlayClassName:i("modal-overlay",{"modal-no-backdrop":e.noBackdrop})},e))}s.setAppElement("#content")},432:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a(365),s=a(532),i=a(0);function l(e){let t=e.className,a=e.severity;return a?n.createElement("span",{className:t},n.createElement(s.a,{className:"little-spacer-right",severity:a}),Object(i.l)("severity",a)):null}},505:function(e,t,a){var n;
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
!function(){"use strict";var s=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:s,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:s&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:s&&!!window.screen};void 0===(n=function(){return i}.call(t,a,t,e))||(e.exports=n)}()},971:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return p});var n=a(562),s=a(365),i=a(410),l=a(378),r=a(386),o=a(432),c=a(385),m=a(367),d=a(489),u=a(0),h=a(476);class p extends s.PureComponent{constructor(e){var t;super(e),t=this,this.mounted=!1,this.getParams=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.props,a=e.activation,n=e.rule;const s={};if(n&&n.params){for(const e of n.params)s[e.key]=e.defaultValue||"";if(a&&a.params)for(const e of a.params)s[e.key]=e.value}return s},this.getQualityProfilesWithDepth=function(){let e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.props).profiles;return Object(h.g)(e.filter(e=>!e.isBuiltIn&&e.actions&&e.actions.edit&&e.language===t.props.rule.lang)).map(e=>Object.assign({},e,{depth:e.depth-1}))},this.handleFormSubmit=e=>{e.preventDefault(),this.setState({submitting:!0});const t={key:this.state.profile,organization:this.props.organization,params:this.state.params,rule:this.props.rule.key,severity:this.state.severity};Object(i.a)(t).then(()=>this.props.onDone(t.severity)).then(()=>{this.mounted&&(this.setState({submitting:!1}),this.props.onClose())},()=>{this.mounted&&this.setState({submitting:!1})})},this.handleParameterChange=e=>{const t=e.currentTarget,a=t.name,n=t.value;this.setState(e=>({params:Object.assign({},e.params,{[a]:n})}))},this.handleProfileChange=e=>{let t=e.value;this.setState({profile:t})},this.handleSeverityChange=e=>{let t=e.value;this.setState({severity:t})},this.renderSeverityOption=e=>{let t=e.value;return s.createElement(o.a,{severity:t})};const a=this.getQualityProfilesWithDepth(e);this.state={params:this.getParams(e),profile:a.length>0?a[0].key:"",severity:e.activation?e.activation.severity:e.rule.severity,submitting:!1}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=this.props,t=e.activation,a=e.rule,i=this.state,o=i.profile,h=i.severity,p=i.submitting,v=a.params,f=void 0===v?[]:v,y=this.getQualityProfilesWithDepth(),g=!!a.templateKey,b=y.length<=0,E=!!t;return s.createElement(l.a,{contentLabel:this.props.modalHeader,onRequestClose:this.props.onClose,size:"small"},s.createElement("form",{onSubmit:this.handleFormSubmit},s.createElement("div",{className:"modal-head"},s.createElement("h2",null,this.props.modalHeader)),s.createElement("div",{className:"modal-body modal-container"},!E&&b&&s.createElement(c.a,{variant:"info"},Object(u.l)("coding_rules.active_in_all_profiles")),s.createElement("div",{className:"modal-field"},s.createElement("label",null,Object(u.l)("coding_rules.quality_profile")),s.createElement(r.c,{className:"js-profile",clearable:!1,disabled:p||1===y.length,onChange:this.handleProfileChange,options:y.map(e=>({label:"   ".repeat(e.depth)+e.name,value:e.key})),value:o})),s.createElement("div",{className:"modal-field"},s.createElement("label",null,Object(u.l)("severity")),s.createElement(r.c,{className:"js-severity",clearable:!1,disabled:p,onChange:this.handleSeverityChange,optionRenderer:this.renderSeverityOption,options:d.e.map(e=>({label:Object(u.l)("severity",e),value:e})),searchable:!1,value:h,valueRenderer:this.renderSeverityOption})),g?s.createElement("div",{className:"modal-field"},s.createElement("p",{className:"note"},Object(u.l)("coding_rules.custom_rule.activation_notice"))):f.map(e=>s.createElement("div",{className:"modal-field",key:e.key},s.createElement("label",{title:e.key},e.key),"TEXT"===e.type?s.createElement("textarea",{disabled:p,name:e.key,onChange:this.handleParameterChange,placeholder:e.defaultValue,rows:3,value:this.state.params[e.key]||""}):s.createElement("input",{disabled:p,name:e.key,onChange:this.handleParameterChange,placeholder:e.defaultValue,type:"text",value:this.state.params[e.key]||""}),s.createElement("div",{className:"note",dangerouslySetInnerHTML:{__html:Object(n.sanitize)(e.htmlDesc||"")}})))),s.createElement("footer",{className:"modal-foot"},p&&s.createElement("i",{className:"spinner spacer-right"}),s.createElement(m.i,{disabled:p||b},E?Object(u.l)("save"):Object(u.l)("coding_rules.activate")),s.createElement(m.h,{disabled:p,onClick:this.props.onClose},Object(u.l)("cancel")))))}}}}]);
//# sourceMappingURL=351.m.ac4e9045.chunk.js.map