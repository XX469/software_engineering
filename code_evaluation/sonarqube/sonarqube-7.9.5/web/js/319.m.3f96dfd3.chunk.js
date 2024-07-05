(window.webpackJsonp=window.webpackJsonp||[]).push([[319],{1702:function(e,t,n){"use strict";n.r(t);var r=n(365),l=n(371),i=n(386),o=n(0);class a extends r.PureComponent{constructor(){super(...arguments),this.handleChange=e=>{this.props.onCompare(e.value)}}render(){const e=this.props,t=e.profile,n=e.profiles,l=e.withKey,a=n.filter(e=>e.language===t.language&&e!==t).map(e=>({value:e.key,label:e.name}));return r.createElement("div",{className:"display-inline-block"},r.createElement("label",{className:"spacer-right"},Object(o.l)("quality_profiles.compare_with")),r.createElement(i.c,{className:"input-large",clearable:!1,onChange:this.handleChange,options:a,placeholder:Object(o.l)("select_verb"),value:l}))}}function c(){return r.createElement("div",{className:"big-spacer-top"},Object(o.l)("quality_profile.empty_comparison"))}var s=n(380),u=n(367),p=n(375),d=n(434);const h=Object(s.a)(()=>Promise.all([n.e(1),n.e(351)]).then(n.bind(null,971)),"ActivationFormModal");class f extends r.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={state:"closed"},this.handleButtonClick=()=>{this.setState({state:"opening"}),Object(d.c)({key:this.props.ruleKey,organization:this.props.organization}).then(e=>{let t=e.rule;this.mounted&&this.setState({rule:t,state:"open"})},()=>{this.mounted&&this.setState({state:"closed"})})},this.handleCloseModal=()=>{this.setState({state:"closed"})}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}isOpen(e){return"open"===e.state}render(){const e=this.props.profile;return!e.isBuiltIn&&e.actions&&e.actions.edit?r.createElement(p.a,{loading:"opening"===this.state.state},r.createElement(u.a,{disabled:"closed"!==this.state.state,onClick:this.handleButtonClick},this.props.children),this.isOpen(this.state)&&r.createElement(h,{modalHeader:Object(o.l)("coding_rules.activate_in_quality_profile"),onClose:this.handleCloseModal,onDone:this.props.onDone,organization:this.props.organization,profiles:[e],rule:this.state.rule})):null}}var m=n(532),b=n(372),g=n(504),S=n(680);class v extends r.PureComponent{renderRule(e,t){return r.createElement("div",null,r.createElement(m.a,{severity:t})," ",r.createElement(l.Link,{to:Object(b.C)({rule_key:e.key,open:e.key},this.props.organization)},e.name))}renderParameters(e){return e?r.createElement("ul",null,Object.keys(e).map(t=>r.createElement("li",{className:"spacer-top",key:t},r.createElement("code",null,t,": ",e[t])))):null}renderLeft(){return 0===this.props.inLeft.length?null:r.createElement(r.Fragment,null,r.createElement("tr",null,r.createElement("td",null,r.createElement("h6",null,Object(o.m)("quality_profiles.x_rules_only_in",this.props.inLeft.length)," ",this.props.left.name)),r.createElement("td",null," ")),this.props.inLeft.map(e=>r.createElement("tr",{className:"js-comparison-in-left",key:"left-".concat(e.key)},r.createElement("td",null,this.renderRule(e,e.severity)),r.createElement("td",null,this.props.rightProfile&&r.createElement(f,{key:e.key,onDone:this.props.refresh,organization:this.props.organization||void 0,profile:this.props.rightProfile,ruleKey:e.key},r.createElement(g.a,null))))))}renderRight(){return 0===this.props.inRight.length?null:r.createElement(r.Fragment,null,r.createElement("tr",null,r.createElement("td",null," "),r.createElement("td",null,r.createElement("h6",null,Object(o.m)("quality_profiles.x_rules_only_in",this.props.inRight.length)," ",this.props.right.name))),this.props.inRight.map(e=>r.createElement("tr",{className:"js-comparison-in-right",key:"right-".concat(e.key)},r.createElement("td",{className:"text-right"},r.createElement(f,{key:e.key,onDone:this.props.refresh,organization:this.props.organization||void 0,profile:this.props.leftProfile,ruleKey:e.key},r.createElement(S.a,null))),r.createElement("td",null,this.renderRule(e,e.severity)))))}renderModified(){return 0===this.props.modified.length?null:r.createElement(r.Fragment,null,r.createElement("tr",null,r.createElement("td",{className:"text-center",colSpan:2},r.createElement("h6",null,Object(o.m)("quality_profiles.x_rules_have_different_configuration",this.props.modified.length)))),r.createElement("tr",null,r.createElement("td",null,r.createElement("h6",null,this.props.left.name)),r.createElement("td",null,r.createElement("h6",null,this.props.right.name))),this.props.modified.map(e=>r.createElement("tr",{className:"js-comparison-modified",key:"modified-".concat(e.key)},r.createElement("td",null,this.renderRule(e,e.left.severity),this.renderParameters(e.left.params)),r.createElement("td",null,this.renderRule(e,e.right.severity),this.renderParameters(e.right.params)))))}render(){return this.props.inLeft.length||this.props.inRight.length||this.props.modified.length?r.createElement("table",{className:"data zebra quality-profile-comparison-table"},r.createElement("tbody",null,this.renderLeft(),this.renderRight(),this.renderModified())):r.createElement(c,null)}}var x=n(410),y=n(476);t.default=Object(l.withRouter)(class extends r.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!1},this.loadResults=()=>{const e=this.props.location.query.withKey;return e?(this.setState({loading:!0}),Object(x.h)(this.props.profile.key,e).then(e=>{let t=e.left,n=e.right,r=e.inLeft,l=e.inRight,i=e.modified;this.mounted&&this.setState({left:t,right:n,inLeft:r,inRight:l,modified:i,loading:!1})},()=>{this.mounted&&this.setState({loading:!1})})):(this.setState({left:void 0,loading:!1}),Promise.resolve())},this.handleCompare=e=>{const t=Object(y.b)(this.props.profile.name,this.props.profile.language,this.props.organization,e);this.props.router.push(t)}}componentDidMount(){this.mounted=!0,this.loadResults()}componentDidUpdate(e){e.profile===this.props.profile&&e.location===this.props.location||this.loadResults()}componentWillUnmount(){this.mounted=!1}hasResults(e){return void 0!==e.left}render(){const e=this.props,t=e.profile,n=e.profiles,l=e.location.query.withKey;return r.createElement("div",{className:"boxed-group boxed-group-inner js-profile-comparison"},r.createElement("header",null,r.createElement(a,{onCompare:this.handleCompare,profile:t,profiles:n,withKey:l}),this.state.loading&&r.createElement("i",{className:"spinner spacer-left"})),this.hasResults(this.state)&&r.createElement("div",{className:"spacer-top"},r.createElement(v,{inLeft:this.state.inLeft,inRight:this.state.inRight,left:this.state.left,leftProfile:t,modified:this.state.modified,organization:this.props.organization,refresh:this.loadResults,right:this.state.right,rightProfile:n.find(e=>e.key===l)})))}})},386:function(e,t,n){"use strict";n.d(t,"c",function(){return d}),n.d(t,"b",function(){return h}),n.d(t,"a",function(){return f});var r=n(365),l=n(367),i=n(380),o=(n(399),function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&(n[r[l]]=e[r[l]])}return n});const a=n.e(365).then(n.bind(null,440)),c=Object(i.a)(()=>a),s=Object(i.a)(()=>a.then(e=>({default:e.Creatable}))),u=Object(i.a)(()=>a.then(e=>({default:e.Async})));function p(){return r.createElement(l.d,{className:"button-tiny spacer-left text-middle",iconProps:{size:12}})}function d(e){var t=e.innerRef,n=o(e,["innerRef"]);const l=c,i=!!n.clearable&&Boolean(n.value);return r.createElement(l,Object.assign({},n,{clearRenderer:p,clearable:i,ref:t}))}function h(e){const t=s;return r.createElement(t,Object.assign({},e,{clearRenderer:p}))}function f(e){return r.createElement(u,Object.assign({},e))}},399:function(e,t,n){var r=n(400);"string"==typeof r&&(r=[[e.i,r,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(369)(r,l);r.locals&&(e.exports=r.locals)},400:function(e,t,n){(e.exports=n(368)(!1)).push([e.i,".Select{position:relative;display:inline-block;vertical-align:middle;font-size:12px;text-align:left}.Select,.Select div,.Select input,.Select span{box-sizing:border-box}.Select.is-disabled>.Select-control{background-color:#ebebeb!important;border-color:#ddd!important}.Select.is-disabled>.Select-control:hover{box-shadow:none!important}.Select.is-disabled .Select-arrow-zone{cursor:not-allowed!important;pointer-events:none!important}.Select.is-disabled .Select-placeholder,.Select.is-disabled .Select-value{color:#bbb!important}.Select-control{position:relative;display:table;width:100%;height:24px;line-height:22px;border:1px solid #cdcdcd;border-collapse:separate;border-radius:2px;background-color:#fff;color:#444;cursor:default;outline:none;overflow:hidden}.is-searchable.is-open>.Select-control{cursor:text}.is-open>.Select-control{border-bottom-right-radius:0;border-bottom-left-radius:0;background:#fff}.is-open>.Select-control>.Select-arrow{border-color:transparent transparent #999;border-width:0 5px 5px}.is-searchable.is-focused:not(.is-open)>.Select-control{cursor:text}.is-focused:not(.is-open)>.Select-control{border-color:#4b9fd5}.Select-placeholder{color:#777}.Select-placeholder,:not(.Select--multi)>.Select-control .Select-value{bottom:0;left:0;line-height:23px;padding-left:8px;padding-right:24px;position:absolute;right:0;top:0;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.Select-value [class^=icon-]{padding-top:5px}.Select-value img,.Select-value svg{padding-top:4px}.Select-option .outline-badge,.Select-value .outline-badge{height:20px;line-height:19px;margin-top:1px}.Select-option [class^=icon-],.Select-option img,.Select-option svg{padding-top:2px}.has-value.is-pseudo-focused:not(.Select--multi)>.Select-control>.Select-value .Select-value-label,.has-value:not(.Select--multi)>.Select-control>.Select-value .Select-value-label{color:#444}.has-value.is-pseudo-focused:not(.Select--multi)>.Select-control>.Select-value a.Select-value-label,.has-value:not(.Select--multi)>.Select-control>.Select-value a.Select-value-label{cursor:pointer;text-decoration:none}.has-value.is-pseudo-focused:not(.Select--multi)>.Select-control>.Select-value a.Select-value-label:focus,.has-value.is-pseudo-focused:not(.Select--multi)>.Select-control>.Select-value a.Select-value-label:hover,.has-value:not(.Select--multi)>.Select-control>.Select-value a.Select-value-label:focus,.has-value:not(.Select--multi)>.Select-control>.Select-value a.Select-value-label:hover{color:#007eff;outline:none;text-decoration:underline}.Select-input{vertical-align:top;height:22px;padding-left:8px;padding-right:8px;outline:none}.Select-input>input{background:none transparent;border:0;cursor:default;display:inline-block;font-family:inherit;font-size:12px;height:22px;margin:0;outline:none;padding:0;box-shadow:none;-webkit-appearance:none}.is-focused .Select-input>input{cursor:text}.has-value.is-pseudo-focused .Select-input{opacity:0}.Select-control:not(.is-searchable)>.Select-input{outline:none}.Select-loading-zone{cursor:pointer;display:table-cell;position:relative;text-align:center;vertical-align:middle;width:16px}.Select-loading{animation:Select-animation-spin .4s linear infinite;box-sizing:border-box;border-radius:50%;border:2px solid #ccc;border-right-color:#444;display:inline-block}.Select-clear-zone,.Select-loading{width:16px;height:16px;position:relative;vertical-align:middle}.Select-clear-zone{animation:Select-animation-fadeIn .2s;color:#999;cursor:pointer;display:table-cell;text-align:center;padding-right:4px}.Select-clear-zone:hover .Select-clear{background-image:url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTQgMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxLjQxNCI+PHBhdGggZD0iTTEzLjk2OSAxLjQwNkw4LjM5IDYuOTg0bDUuNTc4IDUuNTc5LTEuNDA2IDEuNDA2TDYuOTg0IDguMzlsLTUuNTc4IDUuNTc4TDAgMTIuNTYzbDUuNTc4LTUuNTc5TDAgMS40MDYgMS40MDYgMGw1LjU3OCA1LjU3OEwxMi41NjMgMGwxLjQwNiAxLjQwNnoiIGZpbGw9IiNlNzE0MzgiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvc3ZnPg==)}.Select-clear{display:block;width:9px;height:9px;background-image:url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTQgMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxLjQxNCI+PHBhdGggZD0iTTEzLjk2OSAxLjQwNkw4LjM5IDYuOTg0bDUuNTc4IDUuNTc5LTEuNDA2IDEuNDA2TDYuOTg0IDguMzlsLTUuNTc4IDUuNTc4TDAgMTIuNTYzbDUuNTc4LTUuNTc5TDAgMS40MDYgMS40MDYgMGw1LjU3OCA1LjU3OEwxMi41NjMgMGwxLjQwNiAxLjQwNnoiIGZpbGw9IiM5OTkiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvc3ZnPg==);background-size:9px 9px;text-indent:-9999px}.Select--multi .Select-clear-zone{width:17px}.Select-arrow-zone{cursor:pointer;display:table-cell;position:relative;text-align:center;vertical-align:middle;width:20px;padding-right:5px}.Select-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:4px 4px 2px;display:inline-block;height:0;width:0}.is-open .Select-arrow,.Select-arrow-zone:hover>.Select-arrow{border-top-color:#666}@keyframes Select-animation-fadeIn{0%{opacity:0}to{opacity:1}}.Select-menu-outer{border-bottom-right-radius:4px;border-bottom-left-radius:4px;background-color:#fff;border:1px solid #ccc;border-top-color:#e6e6e6;box-sizing:border-box;margin-top:-1px;max-height:200px;position:absolute;top:100%;width:100%;z-index:7500;-webkit-overflow-scrolling:touch;box-shadow:0 6px 12px rgba(0,0,0,.175)}.Select-menu{max-height:198px;padding:5px 0;overflow-y:auto}.Select-option{display:block;line-height:20px;padding:0 8px;box-sizing:border-box;color:#444;font-size:12px;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.Select-option:last-child{border-bottom-right-radius:2px;border-bottom-left-radius:2px}.Select-option.is-focused{background-color:#f3f3f3}.Select-option.is-disabled{font-weight:600;cursor:default}.Select-noresults{box-sizing:border-box;color:#999;cursor:default;display:block;padding:8px 10px}.Select--multi .Select-value{background-color:rgba(0,126,255,.08);border-radius:2px;border:1px solid rgba(0,126,255,.24);color:#444;display:inline-block;font-size:12px;line-height:14px;margin:1px 4px 1px 1px;vertical-align:top}.Select-value-label{font-size:12px}.is-searchable.is-open .Select-value-label{opacity:.5}.Select-big .Select-control{padding-top:4px;padding-bottom:4px}.Select-big .Select-placeholder{margin-top:4px;margin-bottom:4px}.Select-big .Select-value-label{display:inline-block;margin-top:7px;line-height:16px}.Select-big .Select-option{padding:7px 8px;line-height:16px}.Select-big img,.Select-big svg{padding-top:0}.Select--multi .Select-value-icon,.Select--multi .Select-value-label{display:inline-block;vertical-align:middle}.Select--multi .Select-value-label{display:inline-block;max-width:200px;border-bottom-right-radius:2px;border-top-right-radius:2px;cursor:default;padding:2px 5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.Select--multi a.Select-value-label{color:#007eff;cursor:pointer;text-decoration:none}.Select--multi a.Select-value-label:hover{text-decoration:underline}.Select--multi .Select-value-icon{cursor:pointer;border-bottom-left-radius:2px;border-top-left-radius:2px;border-right:1px solid rgba(0,126,255,.24);padding:1px 5px}.Select--multi .Select-value-icon:focus,.Select--multi .Select-value-icon:hover{background-color:rgba(0,113,230,.08);color:#0071e6}.Select--multi .Select-value-icon:active{background-color:rgba(0,126,255,.24)}.Select--multi.is-disabled .Select-value{background-color:#fcfcfc;border:1px solid #e3e3e3;color:#444}.Select--multi.is-disabled .Select-value-icon{cursor:not-allowed;border-right:1px solid #e3e3e3}.Select--multi.is-disabled .Select-value-icon:active,.Select--multi.is-disabled .Select-value-icon:focus,.Select--multi.is-disabled .Select-value-icon:hover{background-color:#fcfcfc}.Select-aria-only{display:none}@keyframes Select-animation-spin{to{transform:rotate(1turn)}}",""])},410:function(e,t,n){"use strict";n.d(t,"y",function(){return c}),n.d(t,"s",function(){return s}),n.d(t,"j",function(){return u}),n.d(t,"w",function(){return p}),n.d(t,"r",function(){return d}),n.d(t,"q",function(){return h}),n.d(t,"A",function(){return f}),n.d(t,"v",function(){return m}),n.d(t,"i",function(){return b}),n.d(t,"l",function(){return g}),n.d(t,"g",function(){return S}),n.d(t,"o",function(){return v}),n.d(t,"n",function(){return x}),n.d(t,"p",function(){return y}),n.d(t,"h",function(){return O}),n.d(t,"d",function(){return j}),n.d(t,"m",function(){return w}),n.d(t,"z",function(){return N}),n.d(t,"x",function(){return E}),n.d(t,"c",function(){return z}),n.d(t,"u",function(){return k}),n.d(t,"b",function(){return L}),n.d(t,"t",function(){return M}),n.d(t,"e",function(){return I}),n.d(t,"f",function(){return D}),n.d(t,"a",function(){return T}),n.d(t,"k",function(){return q});var r=n(415),l=n.n(r),i=n(495),o=n(4),a=n(383);function c(e){return Object(o.getJSON)("/api/qualityprofiles/search",e).catch(a.a)}function s(e){return Object(o.getJSON)("/api/qualityprofiles/show",e)}function u(e){return Object(o.request)("/api/qualityprofiles/create").setMethod("post").setData(e).submit().then(o.checkStatus).then(o.parseJSON).catch(a.a)}function p(e){return Object(o.request)("/api/qualityprofiles/restore").setMethod("post").setData(e).submit().then(o.checkStatus).then(o.parseJSON).catch(a.a)}function d(e){return Object(o.getJSON)("/api/qualityprofiles/projects",e).catch(a.a)}function h(e){return Object(o.getJSON)("/api/qualityprofiles/inheritance",{profileKey:e}).catch(a.a)}function f(e){return Object(o.post)("/api/qualityprofiles/set_default",{profileKey:e})}function m(e,t){return Object(o.post)("/api/qualityprofiles/rename",{key:e,name:t}).catch(a.a)}function b(e,t){return Object(o.postJSON)("/api/qualityprofiles/copy",{fromKey:e,toName:t}).catch(a.a)}function g(e){return Object(o.post)("/api/qualityprofiles/delete",{profileKey:e}).catch(a.a)}function S(e,t){return Object(o.post)("/api/qualityprofiles/change_parent",{profileKey:e,parentKey:t}).catch(a.a)}function v(){return Object(o.getJSON)("/api/qualityprofiles/importers").then(e=>e.importers,a.a)}function x(){return Object(o.getJSON)("/api/qualityprofiles/exporters").then(e=>e.exporters)}function y(e){return Object(o.getJSON)("/api/qualityprofiles/changelog",e)}function O(e,t){return Object(o.getJSON)("/api/qualityprofiles/compare",{leftKey:e,rightKey:t})}function j(e,t){return Object(o.post)("/api/qualityprofiles/add_project",{key:e,project:t}).catch(a.a)}function w(e,t){return Object(o.post)("/api/qualityprofiles/remove_project",{key:e,project:t}).catch(a.a)}function N(e){return Object(o.getJSON)("/api/qualityprofiles/search_users",e).catch(a.a)}function E(e){return Object(o.getJSON)("/api/qualityprofiles/search_groups",e).catch(a.a)}function z(e){return Object(o.post)("/api/qualityprofiles/add_user",e).catch(a.a)}function k(e){return Object(o.post)("/api/qualityprofiles/remove_user",e).catch(a.a)}function L(e){return Object(o.post)("/api/qualityprofiles/add_group",e).catch(a.a)}function M(e){return Object(o.post)("/api/qualityprofiles/remove_group",e).catch(a.a)}function I(e){return Object(o.postJSON)("/api/qualityprofiles/activate_rules",e)}function D(e){return Object(o.postJSON)("/api/qualityprofiles/deactivate_rules",e)}function T(e){const t=e.params&&l()(e.params,(e,t)=>"".concat(t,"=").concat(Object(i.a)(e))).join(";");return Object(o.post)("/api/qualityprofiles/activate_rule",Object.assign({},e,{params:t})).catch(a.a)}function q(e){return Object(o.post)("/api/qualityprofiles/deactivate_rule",e).catch(a.a)}},415:function(e,t,n){var r=n(51),l=n(15),i=n(472),o=n(6);e.exports=function(e,t){return(o(e)?r:i)(e,l(t,3))}},434:function(e,t,n){"use strict";n.d(t,"e",function(){return i}),n.d(t,"f",function(){return o}),n.d(t,"g",function(){return a}),n.d(t,"c",function(){return c}),n.d(t,"d",function(){return s}),n.d(t,"a",function(){return u}),n.d(t,"b",function(){return p}),n.d(t,"h",function(){return d});var r=n(4),l=n(383);function i(e){return Object(r.getJSON)("/api/rules/app",e).catch(l.a)}function o(e){return Object(r.getJSON)("/api/rules/search",e).catch(l.a)}function a(e,t){const n=e.facets.find(e=>e.property===t);return n?n.values:[]}function c(e){return Object(r.getJSON)("/api/rules/show",e).catch(l.a)}function s(e){return Object(r.getJSON)("/api/rules/tags",e).then(e=>e.tags,l.a)}function u(e){return Object(r.postJSON)("/api/rules/create",e).then(e=>e.rule,e=>e&&e.response&&409===e.response.status?Promise.reject(e.response):Object(l.a)(e))}function p(e){return Object(r.post)("/api/rules/delete",e).catch(l.a)}function d(e){return Object(r.postJSON)("/api/rules/update",e).then(e=>e.rule,l.a)}},495:function(e,t,n){"use strict";function r(e){const t=e.replace(/"/g,'\\"');return'"'.concat(t,'"')}n.d(t,"a",function(){return r})},532:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(365),l=n(370),i=n(373);const o={blocker:function(e){let t=e.className,n=e.size;return r.createElement(l.a,{className:t,size:n},r.createElement("path",{d:"M8 14c-3.311 0-6-2.689-6-6s2.689-6 6-6 6 2.689 6 6-2.689 6-6 6zM7 9h2V4H7v5zm0 3h2v-2H7v2z",style:{fill:i.red,fillRule:"nonzero"}}))},critical:function(e){let t=e.className,n=e.size;return r.createElement(l.a,{className:t,size:n},r.createElement("path",{d:"M8 2c3.311 0 6 2.689 6 6s-2.689 6-6 6-6-2.689-6-6 2.689-6 6-6zm1 10V7.414l1.893 1.893c.13.124.282.216.457.261a1.006 1.006 0 0 0 1.176-.591 1.01 1.01 0 0 0 .01-.729 1.052 1.052 0 0 0-.229-.355c-1.212-1.212-2.394-2.456-3.638-3.636a1.073 1.073 0 0 0-.169-.123 1.05 1.05 0 0 0-.448-.133h-.104a1.053 1.053 0 0 0-.493.16 1.212 1.212 0 0 0-.162.132C6.08 5.505 4.836 6.687 3.656 7.932a.994.994 0 0 0-.051 1.275c.208.271.548.42.888.389.198-.019.378-.098.535-.218.041-.035.04-.034.079-.071L7 7.414V12h2z",style:{fill:i.red,fillRule:"nonzero"}}))},major:function(e){let t=e.className,n=e.size;return r.createElement(l.a,{className:t,size:n},r.createElement("path",{d:"M8 2c3.311 0 6 2.689 6 6s-2.689 6-6 6-6-2.689-6-6 2.689-6 6-6zm.08 2.903c.071.008.14.019.208.039.138.042.26.114.37.205 1.244 1.146 2.426 2.357 3.639 3.536.1.103.181.218.234.352a1.01 1.01 0 0 1 .001.728 1.002 1.002 0 0 1-1.169.609 1.042 1.042 0 0 1-.46-.255L8 7.295l-2.903 2.822c-.039.036-.039.036-.08.07a1.002 1.002 0 0 1-1.604-.947c.032-.196.122-.37.253-.519C4.847 7.51 6.09 6.362 7.303 5.183c.052-.048.106-.093.167-.131a1.041 1.041 0 0 1 .61-.149z",style:{fill:i.red}}))},minor:function(e){let t=e.className,n=e.size;return r.createElement(l.a,{className:t,size:n},r.createElement("path",{d:"M8 2c3.311 0 6 2.689 6 6s-2.689 6-6 6-6-2.689-6-6 2.689-6 6-6zm1 6.586V4H7v4.586L5.107 6.693a1.178 1.178 0 0 0-.165-.134 1.041 1.041 0 0 0-.662-.152 1 1 0 0 0-.587 1.7c1.212 1.212 2.394 2.456 3.638 3.636.094.08.195.146.311.191a1.008 1.008 0 0 0 1.065-.227c1.213-1.212 2.457-2.394 3.637-3.639a.994.994 0 0 0 .051-1.275 1.012 1.012 0 0 0-.888-.389 1.041 1.041 0 0 0-.535.218c-.04.034-.04.034-.079.071L9 8.586z",style:{fill:i.lightGreen}}))},info:function(e){let t=e.className,n=e.size;return r.createElement(l.a,{className:t,size:n},r.createElement("path",{d:"M8 2c3.311 0 6 2.689 6 6s-2.689 6-6 6-6-2.689-6-6 2.689-6 6-6zm1 5H7v5h2V7zm0-3H7v2h2V4z",style:{fill:i.blue}}))}};function a(e){if(!e.severity)return null;const t=e.severity.toLowerCase(),n=o[t];return n?r.createElement(n,{className:e.className}):null}},680:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(365),l=n(370);function i(e){let t=e.className,n=e.fill,i=void 0===n?"currentColor":n,o=e.size;return r.createElement(l.a,{className:t,size:o},r.createElement("path",{d:"M4.404 8.28l4.604 4.602a.382.382 0 0 0 .279.118c.108 0 .2-.04.279-.118l1.03-1.03a.382.382 0 0 0 .117-.278.382.382 0 0 0-.117-.28L7.3 8l3.295-3.294a.382.382 0 0 0 .117-.28.382.382 0 0 0-.117-.279l-1.03-1.03A.382.382 0 0 0 9.286 3a.382.382 0 0 0-.278.118L4.404 7.72A.382.382 0 0 0 4.287 8c0 .108.04.201.117.28z",style:{fill:i}}))}}}]);
//# sourceMappingURL=319.m.3f96dfd3.chunk.js.map