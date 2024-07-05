(window.webpackJsonp=window.webpackJsonp||[]).push([[286],{1521:function(e,t){e.exports="### ![SonarSource logo](/images/sonarsource-icon.png) Data Center Edition\n\nSupport for High-Availability. Allow every node of SonarQube to be redundant, in order to keep the service up at all times without worrying about downtime or interruption.\n"},1522:function(e,t){e.exports="### ![SonarSource logo](/images/sonarsource-icon.png) Developer Edition\n\n* Branch and Pull Requests analysis\n* Analysis of additional languages: C/C++, Objective-C, PL/SQL, ABAP , TSQL , Swift\n* Detection of security vulnerabilities\n* SonarLint notifications\n\n"},1523:function(e,t){e.exports="### ![SonarSource logo](/images/sonarsource-icon.png) Enterprise Edition\n\n* Portfolio management\n* Executive reporting\n* Analysis of additional languages: Apex, COBOL, PL/I, RPG & VB6\n* Parallel processing of analysis reports\n* Project transfer\n"},1524:function(e,t,n){var r=n(1525);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(543)(r,a);r.locals&&(e.exports=r.locals)},1525:function(e,t,n){(e.exports=n(542)(!1)).push([e.i,"/*\n * SonarQube\n * Copyright (C) 2009-2018 SonarSource SA\n * mailto:info AT sonarsource DOT com\n *\n * This program is free software; you can redistribute it and/or\n * modify it under the terms of the GNU Lesser General Public\n * License as published by the Free Software Foundation; either\n * version 3 of the License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU\n * Lesser General Public License for more details.\n *\n * You should have received a copy of the GNU Lesser General Public License\n * along with this program; if not, write to the Free Software Foundation,\n * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.\n */\n.marketplace-editions {\n  display: flex;\n  flex-direction: row;\n  margin-left: -8px;\n  margin-right: -8px;\n}\n\n.marketplace-edition {\n  position: relative;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin-left: 8px;\n  margin-right: 8px;\n  max-width: 50%;\n}\n\n.marketplace-edition .markdown img {\n  width: 16px;\n}\n\n.marketplace-edition .markdown h3 {\n  font-size: 14px;\n  margin-top: 0;\n}\n\n.marketplace-edition-badge {\n  position: absolute;\n  right: -1px;\n  top: 16px;\n  padding: 4px 8px;\n  border-radius: 2px 0 0 2px;\n  height: inherit;\n  line-height: inherit;\n}\n\n.marketplace-edition-action {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n}\n\n.marketplace-plugin-table {\n  table-layout: fixed;\n  width: 100%;\n}\n\n.marketplace-plugin-license {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n",""])},1811:function(e,t,n){"use strict";n.r(t);var r=n(539),a=n(548),i=n(720),o=n.n(i),l=n(557),c=n.n(l),s=n(556),u=n.n(s),p=n(4);function d(e){var t=e.currentEdition;return r.createElement("header",{className:"page-header",id:"marketplace-header"},r.createElement("h1",{className:"page-title"},Object(p.l)("marketplace.page")),t&&r.createElement("h3",{className:"page-description"},Object(p.l)("marketplace.page.you_are_running",t)),r.createElement("p",{className:"page-description"},"datacenter"===t?Object(p.l)("marketplace.page.description_best_edition"):Object(p.l)("marketplace.page.description")))}var m=n(1521),g=n.n(m),f=n(1522),h=n.n(f),v=n(1523),b=n.n(v),y=n(774),E=n(554),O=Object(E.a)(function(){return Promise.all([n.e(8),n.e(10)]).then(n.bind(null,8))});function k(e){var t=e.edition,n=e.ncloc,a=e.serverId,i=e.currentEdition;return r.createElement("div",{className:"boxed-group boxed-group-inner marketplace-edition"},"datacenter"===t.key&&r.createElement(O,{content:g.a}),"developer"===t.key&&r.createElement(O,{content:h.a}),"enterprise"===t.key&&r.createElement(O,{content:b.a}),r.createElement("div",{className:"marketplace-edition-action spacer-top"},r.createElement("a",{href:Object(y.d)(t,{ncloc:n,serverId:a,sourceEdition:i}),rel:"noopener noreferrer",target:"_blank"},Object(p.l)("marketplace.ask_for_information"))))}var _,j=n(740),P=(_=function(e,t){return(_=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}_(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),N=function(){return(N=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},w=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={},t.fetchData=function(){Object(j.b)().then(function(e){t.mounted&&t.setState(N({},e))},function(){})},t}return P(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.fetchData()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props.currentEdition,t=this.state,n=t.serverId,a=t.ncloc,i=y.a.findIndex(function(t){return t.key===e}),o=y.a.slice(i+1);return o.length<=0?null:r.createElement("div",{className:"spacer-bottom marketplace-editions"},o.map(function(t){return r.createElement(k,{currentEdition:e,edition:t,key:t.key,ncloc:a,serverId:n})}))},t}(r.PureComponent);function S(e){var t=e.total;return r.createElement("footer",{className:"spacer-top note text-center"},Object(p.m)("x_show",t))}var x=n(577),C=n(549);function A(e){var t=e.release,n=e.update;return r.createElement("li",{className:"big-spacer-bottom"},r.createElement("div",{className:"little-spacer-bottom"},"COMPATIBLE"!==n.status&&n.status?r.createElement(C.a,{overlay:Object(p.l)("marketplace.update_status",n.status)},r.createElement("span",{className:"js-plugin-changelog-version badge badge-warning spacer-right"},t.version)):r.createElement("span",{className:"js-plugin-changelog-version badge badge-success spacer-right"},t.version),r.createElement("span",{className:"js-plugin-changelog-date note spacer-right"},r.createElement(x.a,{date:t.date})),t.changeLogUrl&&r.createElement("a",{className:"js-plugin-changelog-link",href:t.changeLogUrl,target:"_blank"},Object(p.l)("marketplace.release_notes"))),r.createElement("div",{className:"js-plugin-changelog-description"},t.description))}function U(e){var t=e.release,n=e.update;return r.createElement("div",{className:"abs-width-300"},r.createElement("h6",null,Object(p.l)("changelog")),r.createElement("ul",{className:"js-plugin-changelog-list"},n.previousUpdates&&n.previousUpdates.map(function(e){return e.release?r.createElement(A,{key:e.release.version,release:e.release,update:e}):null}),r.createElement(A,{release:t,update:n})))}var T=n(866),L=n(561),M=n(541);function I(e){var t=e.release,n=e.update;return r.createElement(L.b,{className:"display-inline-block little-spacer-left",overlay:r.createElement(U,{release:t,update:n})},r.createElement(M.a,{className:"button-link js-changelog issue-rule"},r.createElement(T.a,null)))}var D=function(e){return r.createElement("td",{className:"text-top width-25 big-spacer-right"},r.createElement("div",null,r.createElement("strong",{className:"js-plugin-name"},e.plugin.name),e.plugin.category&&r.createElement("span",{className:"js-plugin-category badge spacer-left"},e.plugin.category)),r.createElement("div",{className:"js-plugin-description little-spacer-top"},e.plugin.description))},q=n(534);function z(e){var t=e.license;return t?r.createElement(C.a,{overlay:t},r.createElement("li",{className:"little-spacer-bottom marketplace-plugin-license"},r.createElement(q.FormattedMessage,{defaultMessage:Object(p.l)("marketplace.licensed_under_x"),id:"marketplace.licensed_under_x",values:{license:r.createElement("span",{className:"js-plugin-license"},t)}}))):null}function F(e){var t=e.plugin;return t.organizationName?r.createElement("li",{className:"little-spacer-bottom"},r.createElement(q.FormattedMessage,{defaultMessage:Object(p.l)("marketplace.developed_by_x"),id:"marketplace.developed_by_x",values:{organization:t.organizationUrl?r.createElement("a",{className:"js-plugin-organization",href:t.organizationUrl,target:"_blank"},t.organizationName):r.createElement("span",{className:"js-plugin-organization"},t.organizationName)}})):null}var B=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),R=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClick=function(){t.props.onClick(t.props.update)},t}return B(t,e),t.prototype.render=function(){var e=this.props,t=e.disabled,n=e.update;return"COMPATIBLE"===n.status&&n.release?r.createElement(M.a,{className:"js-update little-spacer-bottom",disabled:t,onClick:this.handleClick},Object(p.m)("marketplace.update_to_x",n.release.version)):null},t}(r.PureComponent),Q=n(848),J=n(575),G=n(722),W=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Y=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={acceptTerms:!1,loading:!1},t.doPluginAction=function(e){t.setState({loading:!0}),e({key:t.props.plugin.key}).then(function(){t.props.refreshPending(),t.mounted&&t.setState({loading:!1})},function(){t.mounted&&t.setState({loading:!1})})},t.handleInstall=function(){return t.doPluginAction(Q.g)},t.handleUpdate=function(){return t.doPluginAction(Q.i)},t.handleUninstall=function(){return t.doPluginAction(Q.h)},t.handleTermsCheck=function(e){return t.setState({acceptTerms:e})},t}return W(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.renderBundled=function(){var e=this,t=this.props.plugin;return r.createElement("div",{className:"js-actions"},Object(y.e)(t)&&r.createElement("div",null,r.createElement("p",{className:"little-spacer-bottom"},Object(p.l)("marketplace.available_under_commercial_license")),r.createElement("a",{href:t.homepageUrl,target:"_blank"},Object(p.l)("marketplace.learn_more"))),Object(y.f)(t)&&r.createElement("p",null,r.createElement(G.a,{className:"little-spacer-right"}),Object(p.l)("marketplace.installed")),Object(y.f)(t)&&t.updates&&t.updates.length>0&&r.createElement("div",{className:"spacer-top"},t.updates.map(function(t,n){return r.createElement(R,{disabled:e.state.loading,key:n,onClick:e.handleUpdate,update:t})})))},t.prototype.render=function(){var e=this,t=this.props.plugin;if(t.editionBundled)return this.renderBundled();var n=this.state.loading;return r.createElement("div",{className:"js-actions"},Object(y.e)(t)&&t.termsAndConditionsUrl&&r.createElement("p",{className:"little-spacer-bottom"},r.createElement(J.a,{checked:this.state.acceptTerms,className:"js-terms",id:"plugin-terms-"+t.key,onCheck:this.handleTermsCheck},r.createElement("label",{className:"little-spacer-left",htmlFor:"plugin-terms-"+t.key},Object(p.l)("marketplace.i_accept_the"))),r.createElement("a",{className:"js-plugin-terms nowrap little-spacer-left",href:t.termsAndConditionsUrl,target:"_blank"},Object(p.l)("marketplace.terms_and_conditions"))),n&&r.createElement("i",{className:"spinner spacer-right little-spacer-top little-spacer-bottom"}),Object(y.f)(t)&&r.createElement("div",{className:"display-inlin-block"},t.updates&&t.updates.map(function(t,a){return r.createElement(R,{disabled:n,key:a,onClick:e.handleUpdate,update:t})}),r.createElement(M.a,{className:"js-uninstall button-red little-spacer-left",disabled:n,onClick:this.handleUninstall},Object(p.l)("marketplace.uninstall"))),Object(y.e)(t)&&r.createElement(M.a,{className:"js-install",disabled:n||null!=t.termsAndConditionsUrl&&!this.state.acceptTerms,onClick:this.handleInstall},Object(p.l)("marketplace.install")))},t}(r.PureComponent);function H(e){var t=e.plugin,n=e.refreshPending,a=e.status;return r.createElement("td",{className:"text-top text-right width-20 little-spacer-left"},"installing"===a&&r.createElement("p",{className:"text-success"},Object(p.l)("marketplace.install_pending")),"updating"===a&&r.createElement("p",{className:"text-success"},Object(p.l)("marketplace.update_pending")),"removing"===a&&r.createElement("p",{className:"text-danger"},Object(p.l)("marketplace.uninstall_pending")),null==a&&r.createElement(Y,{plugin:t,refreshPending:n}))}function V(e){var t=e.plugin;return t.homepageUrl||t.issueTrackerUrl?r.createElement("li",{className:"little-spacer-bottom"},r.createElement("ul",{className:"list-inline"},t.homepageUrl&&r.createElement("li",null,r.createElement("a",{className:"js-plugin-homepage",href:t.homepageUrl,target:"_blank"},Object(p.l)("marketplace.homepage"))),t.issueTrackerUrl&&r.createElement("li",null,r.createElement("a",{className:"js-plugin-issues",href:t.issueTrackerUrl,target:"_blank"},Object(p.l)("marketplace.issue_tracker"))))):null}function K(e){var t=e.plugin,n=e.readOnly,a=e.refreshPending,i=e.status;return r.createElement("tr",null,r.createElement(D,{plugin:t}),r.createElement("td",{className:"text-top big-spacer-right"},r.createElement("ul",null,r.createElement("li",{className:"display-flex-row little-spacer-bottom"},r.createElement("div",{className:"pull-left spacer-right"},r.createElement("span",{className:"badge badge-success"},t.release.version)),r.createElement("div",null,t.release.description,r.createElement(I,{release:t.release,update:t.update}),t.update.requires.length>0&&r.createElement("p",{className:"little-spacer-top"},r.createElement("strong",null,Object(p.m)("marketplace.installing_this_plugin_will_also_install_x",t.update.requires.map(function(e){return e.name}).join(", ")))))))),r.createElement("td",{className:"text-top width-20"},r.createElement("ul",null,r.createElement(V,{plugin:t}),r.createElement(z,{license:t.license}),r.createElement(F,{plugin:t}))),!n&&r.createElement(H,{plugin:t,refreshPending:a,status:i}))}var X=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Z=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={changelogOpen:!1},t.handleChangelogClick=function(e){e.preventDefault(),e.stopPropagation(),t.toggleChangelog()},t.toggleChangelog=function(e){void 0!==e?t.setState({changelogOpen:e}):t.setState(function(e){return{changelogOpen:!e.changelogOpen}})},t}return X(t,e),t.prototype.render=function(){var e=this.props,t=e.release,n=e.update;return r.createElement("li",{className:"display-flex-row little-spacer-bottom",key:t.version},r.createElement("div",{className:"pull-left spacer-right"},"COMPATIBLE"===n.status?r.createElement("span",{className:"js-update-version badge badge-success"},t.version):r.createElement(C.a,{overlay:Object(p.l)("marketplace.update_status",n.status)},r.createElement("span",{className:"js-update-version badge badge-warning"},t.version))),r.createElement("div",null,t.description,r.createElement(I,{release:t,update:n})))},t}(r.PureComponent);function $(e){var t=e.updates;return!t||t.length<=0?null:r.createElement("li",{className:"spacer-top"},r.createElement("strong",null,Object(p.l)("marketplace.updates"),":"),r.createElement("ul",{className:"little-spacer-top"},t.map(function(e){return e.release?r.createElement(Z,{key:e.release.version,release:e.release,update:e}):null})))}function ee(e){var t=e.plugin,n=e.readOnly,a=e.refreshPending,i=e.status;return r.createElement("tr",null,r.createElement(D,{plugin:t}),r.createElement("td",{className:"text-top big-spacer-right"},r.createElement("ul",null,r.createElement("li",{className:"little-spacer-bottom"},r.createElement("strong",{className:"js-plugin-installed-version little-spacer-right"},t.version),Object(p.l)("marketplace._installed")),r.createElement($,{updates:t.updates}))),r.createElement("td",{className:"text-top width-20"},r.createElement("ul",null,r.createElement(V,{plugin:t}),r.createElement(z,{license:t.license}),r.createElement(F,{plugin:t}))),!n&&r.createElement(H,{plugin:t,refreshPending:a,status:i}))}var te=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),ne=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.getPluginStatus=function(e){var n=t.props.pending,r=n.installing,a=n.updating,i=n.removing;return r.find(function(t){return t.key===e.key})?"installing":a.find(function(t){return t.key===e.key})?"updating":i.find(function(t){return t.key===e.key})?"removing":void 0},t.renderPlugin=function(e){var n=t.getPluginStatus(e);return Object(y.f)(e)?r.createElement(ee,{plugin:e,readOnly:t.props.readOnly,refreshPending:t.props.refreshPending,status:n}):Object(y.e)(e)?r.createElement(K,{plugin:e,readOnly:t.props.readOnly,refreshPending:t.props.refreshPending,status:n}):null},t}return te(t,e),t.prototype.render=function(){var e=this;return r.createElement("div",{className:"boxed-group boxed-group-inner",id:"marketplace-plugins"},r.createElement("ul",null,this.props.plugins.map(function(t){return r.createElement("li",{className:"panel panel-vertical",key:t.key},r.createElement("table",{className:"marketplace-plugin-table"},r.createElement("tbody",null,e.renderPlugin(t))))})))},t}(r.PureComponent),re=n(611),ae=n(589),ie=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),oe=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleSearch=function(e){t.props.updateQuery({search:e})},t.handleFilterChange=function(e){return t.props.updateQuery({filter:e})},t}return ie(t,e),t.prototype.render=function(){var e=this.props,t=e.query,n=e.updateCenterActive,a=[{label:Object(p.l)("marketplace.all"),value:"all"},{label:Object(p.l)("marketplace.installed"),value:"installed"},{disabled:!n,label:Object(p.l)("marketplace.updates_only"),tooltip:n?void 0:Object(p.l)("marketplace.not_activated"),value:"updates"}];return r.createElement("div",{className:"big-spacer-bottom",id:"marketplace-search"},r.createElement("div",{className:"display-inline-block text-top nowrap abs-width-240 spacer-right"},r.createElement(re.a,{name:"marketplace-filter",onCheck:this.handleFilterChange,options:a,value:t.filter})),r.createElement(ae.a,{onChange:this.handleSearch,placeholder:Object(p.l)("marketplace.search"),value:t.search}))},t}(r.PureComponent),le=n(562),ce=n(603),se=(n(1524),function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}()),ue=function(){return(ue=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},pe=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={loadingPlugins:!0,plugins:[]},t.fetchQueryPlugins=function(){var e=Object(y.g)(t.props.location.query),n=t.fetchAllPlugins;"updates"===e.filter?n=Q.f:"installed"===e.filter&&(n=Q.c),t.setState({loadingPlugins:!0}),n().then(function(e){t.mounted&&t.setState({loadingPlugins:!1,plugins:c()(e,"name")})},t.stopLoadingPlugins)},t.fetchAllPlugins=function(){return Promise.all([Object(Q.d)(),Object(Q.b)()]).then(function(e){var t=e[0],n=e[1];return o()(t.concat(n.plugins),"key")},t.stopLoadingPlugins)},t.updateQuery=function(e){var n=Object(y.h)(ue({},Object(y.g)(t.props.location.query),e));t.props.router.push({pathname:t.props.location.pathname,query:n})},t.stopLoadingPlugins=function(){t.mounted&&t.setState({loadingPlugins:!1})},t}return se(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.fetchQueryPlugins()},t.prototype.componentDidUpdate=function(e){e.location.query.filter!==this.props.location.query.filter&&this.fetchQueryPlugins()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props,t=e.currentEdition,n=e.standaloneMode,a=e.pendingPlugins,i=this.state,o=i.loadingPlugins,l=i.plugins,c=Object(y.g)(this.props.location.query),s=Object(y.c)(l,c.search);return r.createElement("div",{className:"page page-limited",id:"marketplace-page"},r.createElement(le.a,{suggestions:"marketplace"}),r.createElement(u.a,{title:Object(p.l)("marketplace.page")}),r.createElement(d,{currentEdition:t}),r.createElement(w,{currentEdition:t}),r.createElement("header",{className:"page-header"},r.createElement("h1",{className:"page-title"},Object(p.l)("marketplace.page.open_source_plugins"))),r.createElement(oe,{query:c,updateCenterActive:this.props.updateCenterActive,updateQuery:this.updateQuery}),o&&r.createElement("i",{className:"spinner"}),!o&&r.createElement(ne,{pending:a,plugins:s,readOnly:!n,refreshPending:this.props.fetchPendingPlugins}),!o&&r.createElement(S,{total:s.length}))},t}(r.PureComponent),de=Object(ce.a)(pe),me=n(551),ge=n(976),fe=function(){return(fe=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};t.default=Object(a.connect)(function(e){var t=Object(me.getGlobalSettingValue)(e,"sonar.updatecenter.activate");return{currentEdition:Object(me.getAppState)(e).edition,standaloneMode:Object(me.getAppState)(e).standalone,updateCenterActive:Boolean(t&&"true"===t.value)}})(function(e){return r.createElement(ge.a.Consumer,null,function(t){var n=t.fetchPendingPlugins,a=t.pendingPlugins;return r.createElement(de,fe({fetchPendingPlugins:n,pendingPlugins:a},e))})})},562:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r,a=n(539),i=n(587),o=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});function l(e){var t=e.suggestions;return a.createElement(i.a.Consumer,null,function(e){var n=e.addSuggestions,r=e.removeSuggestions;return a.createElement(c,{addSuggestions:n,removeSuggestions:r,suggestions:t})})}var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.componentDidMount=function(){this.props.addSuggestions(this.props.suggestions)},t.prototype.componentDidUpdate=function(e){e.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(e.suggestions))},t.prototype.componentWillUnmount=function(){this.props.removeSuggestions(this.props.suggestions)},t.prototype.render=function(){return null},t}(a.PureComponent)},566:function(e,t,n){var r=n(572),a=1/0,i=1.7976931348623157e308;e.exports=function(e){return e?(e=r(e))===a||e===-a?(e<0?-1:1)*i:e==e?e:0:0===e?e:0}},575:function(e,t,n){"use strict";var r,a=n(539),i=n(540),o=n(552),l=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClick=function(e){e.preventDefault(),e.currentTarget.blur(),t.props.disabled||t.props.onCheck(!t.props.checked,t.props.id)},t}return l(t,e),t.prototype.render=function(){var e=i("icon-checkbox",{"icon-checkbox-checked":this.props.checked,"icon-checkbox-single":this.props.thirdState,"icon-checkbox-disabled":this.props.disabled});return this.props.children?a.createElement("a",{className:i("link-checkbox",this.props.className,{note:this.props.disabled,disabled:this.props.disabled}),href:"#",id:this.props.id,onClick:this.handleClick},a.createElement(o.a,{loading:Boolean(this.props.loading)},a.createElement("i",{className:e})),this.props.children):this.props.loading?a.createElement(o.a,null):a.createElement("a",{className:i(e,this.props.className),href:"#",id:this.props.id,onClick:this.handleClick})},t.defaultProps={thirdState:!1},t}(a.PureComponent);t.a=c},577:function(e,t,n){"use strict";n.d(t,"b",function(){return c}),n.d(t,"a",function(){return s});var r=n(539),a=n(534),i=n(75),o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},l={year:"numeric",month:"short",day:"2-digit"},c={year:"numeric",month:"long",day:"numeric"};function s(e){var t=e.children,n=e.date,s=e.long;return r.createElement(a.FormattedDate,o({value:Object(i.e)(n)},s?c:l),t)}},611:function(e,t,n){"use strict";var r,a=n(539),i=n(540),o=n(549),l=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleChange=function(e){var n=e.currentTarget.value;t.props.onCheck(n)},t.renderOption=function(e){var n=e.value===t.props.value,r=t.props.name+"__"+e.value;return a.createElement("li",{key:e.value},a.createElement("input",{checked:n,disabled:e.disabled,id:r,name:t.props.name,onChange:t.handleChange,type:"radio",value:e.value}),a.createElement(o.a,{overlay:e.tooltip||void 0},a.createElement("label",{htmlFor:r},e.label)))},t}return l(t,e),t.prototype.render=function(){return a.createElement("ul",{className:i("radio-toggle",this.props.className)},this.props.options.map(this.renderOption))},t.defaultProps={disabled:!1,value:null},t}(a.PureComponent);t.a=c},622:function(e,t,n){var r=n(566);e.exports=function(e){var t=r(e),n=t%1;return t==t?n?t-n:t:0}},657:function(e,t){e.exports=function(e,t,n,r){for(var a=e.length,i=n+(r?1:-1);r?i--:++i<a;)if(t(e[i],i,e))return i;return-1}},722:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(539),a=n(544);function i(e){var t=e.className,n=e.fill,i=void 0===n?"currentColor":n,o=e.size;return r.createElement(a.a,{className:t,size:o},r.createElement("path",{d:"M14.92 4.804q0 0.357-0.25 0.607l-7.679 7.679q-0.25 0.25-0.607 0.25t-0.607-0.25l-4.446-4.446q-0.25-0.25-0.25-0.607t0.25-0.607l1.214-1.214q0.25-0.25 0.607-0.25t0.607 0.25l2.625 2.634 5.857-5.866q0.25-0.25 0.607-0.25t0.607 0.25l1.214 1.214q0.25 0.25 0.25 0.607z",style:{fill:i}}))}},740:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o}),n.d(t,"c",function(){return l});var r=n(26),a=n(555);function i(e){return Object(r.getJSON)("/api/navigation/component",e).catch(a.a)}function o(){return Object(r.getJSON)("/api/navigation/marketplace").catch(a.a)}function l(){return Object(r.getJSON)("/api/navigation/settings").catch(a.a)}},848:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"e",function(){return u}),n.d(t,"c",function(){return m}),n.d(t,"d",function(){return g}),n.d(t,"f",function(){return f}),n.d(t,"g",function(){return h}),n.d(t,"h",function(){return v}),n.d(t,"i",function(){return b}),n.d(t,"a",function(){return y});var r=n(849),a=n.n(r),i=n(26),o=n(555),l=n(693),c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function s(){return Object(i.getJSON)("/api/plugins/available").catch(o.a)}function u(){return Object(i.getJSON)("/api/plugins/pending").catch(o.a)}function p(e){return e?["COMPATIBLE","REQUIRES_SYSTEM_UPGRADE","DEPS_REQUIRE_SYSTEM_UPGRADE"].map(function(t){var n=a()(e,function(e){return e.status===t});return n>-1?e[n]:void 0}).filter(l.a):[]}function d(e,t){if(!t)return e;var n=t.indexOf(e),r=n>0?t.slice(0,n):[];return c({},e,{previousUpdates:r})}function m(){return Object(i.getJSON)("/api/plugins/installed",{f:"category"}).then(function(e){return e.plugins},o.a)}function g(){return Promise.all([Object(i.getJSON)("/api/plugins/installed",{f:"category"}),Object(i.getJSON)("/api/plugins/updates")]).then(function(e){var t=e[0],n=e[1];return t.plugins.map(function(e){var t=n.plugins.find(function(t){return t.key===e.key});return t?c({},t,e,{updates:p(t.updates).map(function(e){return d(e,t.updates)})}):e})}).catch(o.a)}function f(){return Promise.all([Object(i.getJSON)("/api/plugins/updates"),Object(i.getJSON)("/api/plugins/installed")]).then(function(e){var t=e[0],n=e[1];return t.plugins.map(function(e){var t=p(e.updates).map(function(t){return d(t,e.updates)}),r=n.plugins.find(function(t){return t.key===e.key});return r?c({},r,e,{updates:t}):c({},e,{updates:t})})}).catch(o.a)}function h(e){return Object(i.post)("/api/plugins/install",e).catch(o.a)}function v(e){return Object(i.post)("/api/plugins/uninstall",e).catch(o.a)}function b(e){return Object(i.post)("/api/plugins/update",e).catch(o.a)}function y(){return Object(i.post)("/api/plugins/cancel_all").catch(o.a)}},849:function(e,t,n){var r=n(657),a=n(77),i=n(622),o=Math.max,l=Math.min;e.exports=function(e,t,n){var c=null==e?0:e.length;if(!c)return-1;var s=c-1;return void 0!==n&&(s=i(n),s=n<0?o(c+s,0):l(s,c-1)),r(e,a(t,3),s,!0)}},866:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(539),a=n(544);function i(e){var t=e.className,n=e.fill,i=void 0===n?"currentColor":n,o=e.size;return r.createElement(a.a,{className:t,size:o},r.createElement("path",{d:"M5.273 7.182v1.636a.818.818 0 0 1-.818.818H2.818A.818.818 0 0 1 2 8.818V7.182c0-.452.366-.818.818-.818h1.637c.451 0 .818.366.818.818zm4.363 0v1.636a.818.818 0 0 1-.818.818H7.182a.818.818 0 0 1-.818-.818V7.182c0-.452.366-.818.818-.818h1.636c.452 0 .818.366.818.818zm4.364 0v1.636a.818.818 0 0 1-.818.818h-1.637a.818.818 0 0 1-.818-.818V7.182c0-.452.367-.818.818-.818h1.637c.452 0 .818.366.818.818z",style:{fill:i}}))}},976:function(e,t,n){"use strict";n.d(t,"b",function(){return a});var r=n(539),a={installing:[],removing:[],updating:[]},i=r.createContext({fetchPendingPlugins:function(){},pendingPlugins:a});t.a=i}}]);
//# sourceMappingURL=286.a3b87fff.chunk.js.map