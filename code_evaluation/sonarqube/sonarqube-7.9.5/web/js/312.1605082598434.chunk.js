(window.webpackJsonp=window.webpackJsonp||[]).push([[312,23,369],{1721:function(e,t,n){"use strict";n.r(t),t.default="This organization is subscribed to a paid plan, allowing private projects. Its private projects, members, Quality Profiles and Quality Gates are visible to members only.\n\n---\n\nSee also: [Organization Visibility](/organizations/organization-visibility/)\n"},2027:function(e,t,n){"use strict";n.r(t);var a=n(695),r=n(711),o=n.n(r),i=n(705),c=n(712),s=n.n(c),l=n(701),u=n(854),m=n(717),p=n(704),g=n(721),d=n(1102),f=n(753),v=n(28),b=n(702);function h(e){var t,n,r,o=e.currentUser,i=e.organization,c=e.organizations.filter(function(e){return e.key!==i.key}),h=i.actions&&i.actions.admin;return i.alm?(t=Object(f.h)(i.alm.key),n=a.createElement(a.Fragment,null,a.createElement("p",null,Object(v.m)("organization.bound_to_x",Object(v.l)(t))),a.createElement("hr",{className:"spacer-top spacer-bottom"}),a.createElement("a",{href:i.alm.url,rel:"noopener noreferrer",target:"_blank"},Object(v.m)("organization.see_on_x",Object(v.l)(t)))),r=Object(b.b)()+"/images/sonarcloud/"+t+".svg"):Object(f.c)(o)&&(t=Object(f.b)(o)||"",n=a.createElement(a.Fragment,null,a.createElement("p",null,Object(v.m)("organization.not_bound_to_x",Object(v.l)(t))),h&&a.createElement(a.Fragment,null,a.createElement("hr",{className:"spacer-top spacer-bottom"}),a.createElement(l.Link,{to:"/organizations/"+i.key+"/edit"},Object(v.l)("organization.go_to_settings_to_bind")))),r=Object(b.b)()+"/images/sonarcloud/"+t+"-unbound.svg"),a.createElement("header",{className:"navbar-context-header"},a.createElement(u.a,{organization:i}),c.length?a.createElement(m.b,{className:"display-inline-block",overlay:a.createElement("ul",{className:"menu"},s()(c,function(e){return e.name.toLowerCase()}).map(function(e){return a.createElement(d.a,{key:e.key,organization:e})}))},a.createElement("a",{className:"display-inline-flex-center spacer-left link-base-color link-no-underline",href:"#"},i.name,a.createElement(g.a,{className:"little-spacer-left"}))):a.createElement("span",{className:"spacer-left"},i.name),t&&a.createElement(p.a,{mouseLeaveDelay:.25,overlay:n},a.createElement("img",{alt:Object(v.l)(t),className:"text-middle spacer-left",height:16,src:r,width:16})),null!=i.description&&a.createElement("div",{className:"navbar-context-description"},a.createElement("p",{className:"text-limited text-top",title:i.description},i.description)))}var y=n(931),E=n(725),O=n(110),z=n(832);function k(e){var t=e.currentUser,r=e.organization,o=e.userOrganizations,i=Object(O.isSonarCloud)();return a.createElement("div",{className:"navbar-context-meta"},null!=r.url&&a.createElement("a",{className:"spacer-right text-limited",href:r.url,rel:"nofollow",title:r.url},r.url),i&&Object(z.c)(r)&&Object(z.a)(t,r,o)&&a.createElement(E.a,{className:"spacer-right",doc:Promise.resolve().then(n.bind(null,1721))},a.createElement("div",{className:"outline-badge"},Object(v.l)("organization.paid_plan.badge"))),a.createElement("div",{className:"text-muted"},a.createElement("strong",null,Object(v.l)("organization.key"),":")," ",r.key),i&&a.createElement("div",{className:"navbar-context-meta-secondary"},a.createElement(y.a,{currentPage:{type:"ORGANIZATION",organization:r.key}})))}var j=n(696);function _(e){var t=e.location,n=e.organization,r=n.pages||[];if(0===r.length)return null;var o=r.some(function(e){return t.pathname==="/organizations/"+n.key+"/extension/"+e.key});return a.createElement(m.b,{overlay:a.createElement("ul",{className:"menu"},r.map(function(e){return a.createElement("li",{key:e.key},a.createElement(l.Link,{activeClassName:"active",to:"/organizations/"+n.key+"/extension/"+e.key},e.name))})),tagName:"li"},a.createElement("a",{className:j("dropdown-toggle",{active:o}),href:"#",id:"organization-navigation-more"},Object(v.l)("more"),a.createElement(g.a,{className:"little-spacer-left"})))}var N=["edit","groups","permissions","permission_templates","projects_management","webhooks"];function C(e){var t=e.location,n=e.organization,r=n.adminPages,o=void 0===r?[]:r,i=o.map(function(e){return"extension/"+e.key}).concat(N).some(function(e){return t.pathname.endsWith("organizations/"+n.key+"/"+e)});return a.createElement(m.b,{overlay:a.createElement("ul",{className:"menu"},a.createElement("li",null,a.createElement(l.Link,{activeClassName:"active",to:"/organizations/"+n.key+"/edit"},Object(v.l)("organization.settings"))),o.map(function(e){return a.createElement("li",{key:e.key},a.createElement(l.Link,{activeClassName:"active",to:"/organizations/"+n.key+"/extension/"+e.key},e.name))}),a.createElement("li",null,a.createElement(l.Link,{activeClassName:"active",to:"/organizations/"+n.key+"/groups"},Object(v.l)("user_groups.page"))),a.createElement("li",null,a.createElement(l.Link,{activeClassName:"active",to:"/organizations/"+n.key+"/permissions"},Object(v.l)("permissions.page"))),a.createElement("li",null,a.createElement(l.Link,{activeClassName:"active",to:"/organizations/"+n.key+"/permission_templates"},Object(v.l)("permission_templates"))),a.createElement("li",null,a.createElement(l.Link,{activeClassName:"active",to:"/organizations/"+n.key+"/projects_management"},Object(v.l)("projects_management"))),a.createElement("li",null,a.createElement(l.Link,{activeClassName:"active",to:"/organizations/"+n.key+"/webhooks"},Object(v.l)("webhooks.page")))),tagName:"li"},a.createElement("a",{className:j("dropdown-toggle",{active:i}),href:"#",id:"organization-navigation-admin"},Object(v.l)("layout.settings"),a.createElement(g.a,{className:"little-spacer-left"})))}var L=n(988),w=n(708);var x=Object(i.connect)(function(e){return{currentUser:Object(w.getCurrentUser)(e),userOrganizations:Object(w.getMyOrganizations)(e)}})(function(e){var t=e.currentUser,n=e.location,r=e.organization,o=e.userOrganizations,i=Object(z.a)(t,r,o),c=r.actions,s=void 0===c?{}:c;return a.createElement(L.a,{className:"navbar-context-tabs"},a.createElement("li",null,a.createElement(l.Link,{activeClassName:"active",to:"/organizations/"+r.key+"/projects"},Object(v.l)("projects.page"))),a.createElement("li",null,a.createElement(l.Link,{activeClassName:"active",to:{pathname:"/organizations/"+r.key+"/issues",query:{resolved:"false"}}},Object(v.l)("issues.page"))),i&&a.createElement("li",null,a.createElement(l.Link,{activeClassName:"active",to:"/organizations/"+r.key+"/quality_profiles"},Object(v.l)("quality_profiles.page"))),a.createElement("li",null,a.createElement(l.Link,{activeClassName:"active",to:"/organizations/"+r.key+"/rules"},Object(v.l)("coding_rules.page"))),i&&a.createElement("li",null,a.createElement(l.Link,{activeClassName:"active",to:Object(b.y)(r.key)},Object(v.l)("quality_gates.page"))),Object(z.b)(t,r,o)&&a.createElement("li",null,a.createElement(l.Link,{activeClassName:"active",to:"/organizations/"+r.key+"/members"},Object(v.l)("organization.members.page"))),a.createElement(_,{location:n,organization:r}),s.admin&&a.createElement(C,{location:n,organization:r}))}),P=n(703),U=n(1046);function S(e){var t=e.currentUser,n=e.location,r=e.organization,o=e.userOrganizations;return a.createElement(U.a,{height:P.contextNavHeightRaw,id:"context-navigation"},a.createElement("div",{className:"navbar-context-justified"},a.createElement(h,{currentUser:t,organization:r,organizations:o}),a.createElement(k,{currentUser:t,organization:r,userOrganizations:o})),a.createElement(x,{location:n,organization:r}))}var A=n(783),D=n(718),W=n(779);n.d(t,"OrganizationPage",function(){return T});var K,M=(K=function(e,t){return(K=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}K(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),T=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={loading:!0},t.stopLoading=function(){t.mounted&&t.setState({loading:!1})},t.updateOrganization=function(e){t.setState({loading:!0}),t.props.fetchOrganization(e).then(t.stopLoading,t.stopLoading)},t}return M(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.updateOrganization(this.props.params.organizationKey)},t.prototype.componentWillReceiveProps=function(e){e.params.organizationKey!==this.props.params.organizationKey&&this.updateOrganization(e.params.organizationKey)},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props.organization;return e&&e.actions&&null!=e.actions.admin?a.createElement("div",null,a.createElement(o.a,{defaultTitle:e.name,titleTemplate:"%s - "+e.name}),a.createElement(D.a,{suggestions:"organization_space"}),a.createElement(S,{currentUser:this.props.currentUser,location:this.props.location,organization:e,userOrganizations:this.props.userOrganizations}),this.props.children):this.state.loading?null:a.createElement(A.default,{withContainer:!1})},t}(a.PureComponent),H={fetchOrganization:W.f};t.default=Object(i.connect)(function(e,t){return{currentUser:Object(w.getCurrentUser)(e),organization:Object(w.getOrganizationByKey)(e,t.params.organizationKey),userOrganizations:Object(w.getMyOrganizations)(e)}},H)(T)},714:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(695),r=n(696),o=n(704),i=n(752),c=n(703);n(723);function s(e){var t=e.children,n=void 0===t?a.createElement(i.a,{fill:c.gray71,size:12}):t,s=e.tagName,l=void 0===s?"div":s;return a.createElement(l,{className:r("help-tooltip",e.className)},a.createElement(o.a,{mouseLeaveDelay:.25,onShow:e.onShow,overlay:e.overlay,placement:e.placement},a.createElement("span",{className:"display-inline-flex-center"},n)))}},718:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a,r=n(695),o=n(739),i=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});function c(e){var t=e.suggestions;return r.createElement(o.a.Consumer,null,function(e){var n=e.addSuggestions,a=e.removeSuggestions;return r.createElement(s,{addSuggestions:n,removeSuggestions:a,suggestions:t})})}var s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.componentDidMount=function(){this.props.addSuggestions(this.props.suggestions)},t.prototype.componentDidUpdate=function(e){e.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(e.suggestions))},t.prototype.componentWillUnmount=function(){this.props.removeSuggestions(this.props.suggestions)},t.prototype.render=function(){return null},t}(r.PureComponent)},723:function(e,t,n){var a=n(724);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(699)(a,r);a.locals&&(e.exports=a.locals)},724:function(e,t,n){(e.exports=n(698)(!1)).push([e.i,".help-tooltip{display:inline-flex;align-items:center;vertical-align:middle}.help-toolip-link{display:block;width:12px;height:12px;border:none}",""])},725:function(e,t,n){"use strict";var a,r=n(695),o=n(714),i=n(710),c=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=Object(i.a)(function(){return Promise.all([n.e(8),n.e(10)]).then(n.bind(null,824))}),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={open:!1},t.close=function(){t.mounted&&t.setState({open:!1})},t}return c(t,e),t.prototype.componentDidMount=function(){var e=this;this.mounted=!0,this.props.doc.then(function(t){var n=t.default;e.mounted&&e.setState({content:n})},function(){}),document.addEventListener("scroll",this.close,!0)},t.prototype.componentWillUnmount=function(){this.mounted=!1,document.removeEventListener("scroll",this.close,!0)},t.prototype.render=function(){return this.state.content?r.createElement(o.a,{className:this.props.className,overlay:r.createElement("div",{className:"abs-width-300"},r.createElement(s,{childProps:this.props.overlayProps,className:"cut-margins",content:this.state.content,isTooltip:!0}))},this.props.children):this.props.children||null},t}(r.PureComponent);t.a=l},753:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o}),n.d(t,"c",function(){return i}),n.d(t,"d",function(){return c}),n.d(t,"e",function(){return s}),n.d(t,"g",function(){return l}),n.d(t,"f",function(){return u}),n.d(t,"h",function(){return m});var a=n(722);function r(e,t){return t.endsWith("/")||(t+="/"),s(e)?t.replace("github.com/","github.com/orgs/")+"people":t+"profile/members"}function o(e){return Object(a.b)(e)&&e.externalProvider?m(e.externalProvider):void 0}function i(e){return Object(a.b)(e)&&(c(e.externalProvider)||s(e.externalProvider))}function c(e){return!!e&&e.startsWith("bitbucket")}function s(e){return"github"===e}function l(e){return"microsoft"===e}function u(e){return Boolean(e&&e.personal)}function m(e){return c(e)?"bitbucket":e}},768:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return c});var a=n(695),r=n(835),o=n(703),i=n(806);function c(e){var t=e.children;return a.createElement("div",{className:"global-container"},a.createElement("div",{className:"page-wrapper",id:"container"},a.createElement(i.a,{className:"navbar-global",height:o.globalNavHeightRaw}),t),a.createElement(r.a,null))}},783:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return s});var a=n(695),r=n(711),o=n(701),i=n(768),c=n(28);function s(e){var t=e.withContainer,n=void 0===t||t?i.default:a.Fragment;return a.createElement(n,null,a.createElement(r.Helmet,{defaultTitle:Object(c.l)("404_not_found"),defer:!1}),a.createElement("div",{className:"page-wrapper-simple",id:"bd"},a.createElement("div",{className:"page-simple",id:"nonav"},a.createElement("h2",{className:"big-spacer-bottom"},Object(c.l)("page_not_found")),a.createElement("p",{className:"spacer-bottom"},Object(c.l)("address_mistyped_or_page_moved")),a.createElement("p",null,a.createElement(o.Link,{to:"/"},Object(c.l)("go_back_to_homepage"))))))}},832:function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i});var a=n(722);function r(e){return Boolean(e&&"PAID"===e.subscription)}function o(e,t,n){return!r(t)||i(e,t,n)}function i(e,t,n){return Boolean(t&&Object(a.b)(e)&&(t.actions&&t.actions.admin||n.some(function(e){return e.key===t.key})))}},931:function(e,t,n){"use strict";var a=n(695),r=n(696),o=n(705),i=n(704),c=n(697),s=n(700),l=n(703);function u(e){var t=e.className,n=e.fill,o=void 0===n?l.orange:n,i=e.filled,c=void 0!==i&&i,u=e.size;return a.createElement(s.a,{className:r(t,"icon-outline",{"is-filled":c}),size:u,style:{color:o}},a.createElement("g",{transform:"matrix(0.870918,0,0,0.870918,0.978227,0.978227)"},a.createElement("path",{d:"M15.9,7.8L8.2,0.1C8.1,0 7.9,0 7.8,0.1L0.1,7.8C0,7.9 0,8.1 0.1,8.2C0.2,8.3 0.2,8.3 0.3,8.3L2.2,8.3L2.2,15.8C2.2,15.9 2.2,15.9 2.3,16C2.3,16 2.4,16.1 2.5,16.1L6.2,16.1C6.3,16.1 6.5,16 6.5,15.8L6.5,10.5L9.7,10.5L9.7,15.8C9.7,15.9 9.8,16.1 10,16.1L13.7,16.1C13.8,16.1 14,16 14,15.8L14,8.2L15.9,8.2C16,8.2 16,8.2 16.1,8.1C16,8 16.1,7.9 15.9,7.8Z"})))}var m,p=n(28),g=n(708),d=n(826),f=n(722),v=(m=function(e,t){return(m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}m(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),b=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClick=function(){t.props.setHomePage(t.props.currentPage)},t}return v(t,e),t.prototype.render=function(){var e=this.props,t=e.currentPage,n=e.currentUser;if(!Object(f.b)(n))return null;var o,s,l=n.homepage,m=void 0!==l&&(s=t,(o=l).type===s.type&&o.branch===s.branch&&o.component===s.component&&o.organization===s.organization),g=m?Object(p.l)("homepage.current"):Object(p.l)("homepage.check");return a.createElement(i.a,{overlay:g},m?a.createElement("span",{"aria-label":g,className:r("display-inline-block",this.props.className)},a.createElement(u,{filled:m})):a.createElement(c.c,{"aria-label":g,className:r("link-no-underline","set-homepage-link",this.props.className),onClick:this.handleClick},a.createElement(u,{filled:m})))},t}(a.PureComponent),h={setHomePage:d.f};t.a=Object(o.connect)(function(e){return{currentUser:Object(g.getCurrentUser)(e)}},h)(b)}}]);
//# sourceMappingURL=312.1605082598434.chunk.js.map