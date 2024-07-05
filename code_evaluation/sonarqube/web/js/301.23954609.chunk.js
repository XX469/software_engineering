(window.webpackJsonp=window.webpackJsonp||[]).push([[301],{1041:function(e,n){e.exports="The Default gate is applied to all projects not explicitly assigned to a gate. Quality Profile and Gate administrators can assign projects to a gate from the Quality Profile page. Project administrators can also choose a non-default gate.\n"},1847:function(e,n,t){"use strict";t.r(n);var o=t(539),i=t(556),r=t.n(i),a=t(567),l=t(4);function c(){return o.createElement("header",{className:"page-header"},o.createElement("div",{className:"page-title display-flex-center"},o.createElement("h1",null,Object(l.l)("project_quality_gate.page")),o.createElement(a.a,{className:"spacer-left",doc:Promise.resolve().then(t.t.bind(null,1041,7))})),o.createElement("div",{className:"page-description"},Object(l.l)("project_quality_gate.page.description")))}var s,u=t(559),p=(s=function(e,n){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)},function(e,n){function t(){this.constructor=e}s(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),d=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.mounted=!1,n.state={loading:!1},n.stopLoading=function(){n.mounted&&n.setState({loading:!1})},n.handleChange=function(e){var t=n.props.gate,o=null==t&&null!=e.value,i=null!=t&&null==e.value,r=null!=t&&t.id!==Number(e.value);(o||i||r)&&(n.setState({loading:!0}),n.props.onChange(t&&t.id,Number(e.value)).then(n.stopLoading,n.stopLoading))},n.renderGateName=function(e){return e.isDefault?o.createElement("span",null,o.createElement("strong",null,Object(l.l)("default")),": ",e.label):o.createElement("span",null,e.label)},n}return p(n,e),n.prototype.componentDidMount=function(){this.mounted=!0},n.prototype.componentWillUnmount=function(){this.mounted=!1},n.prototype.renderSelect=function(){var e=this.props,n=e.gate,t=e.allGates.map(function(e){return{value:String(e.id),label:e.name,isDefault:e.isDefault}});return o.createElement(u.c,{clearable:!1,disabled:this.state.loading,onChange:this.handleChange,optionRenderer:this.renderGateName,options:t,style:{width:300},value:n&&String(n.id),valueRenderer:this.renderGateName})},n.prototype.render=function(){return o.createElement("div",null,this.renderSelect(),this.state.loading&&o.createElement("i",{className:"spinner spacer-left"}))},n}(o.PureComponent),f=t(649),g=t(562),h=t(777),b=t(702),m=function(){var e=function(n,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(n,t)};return function(n,t){function o(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}}(),v=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.mounted=!1,n.state={loading:!0},n.handleChangeGate=function(e,t){var o=n.state.allGates;if(!e&&!t||!o)return Promise.resolve();var i=n.props.component,r={gateId:t||e,organization:i.organization,projectKey:i.key};return(t?Object(f.a)(r):Object(f.g)(r)).then(function(){if(n.mounted)if(Object(h.a)(Object(l.l)("project_quality_gate.successfully_updated")),t){var e=o.find(function(e){return e.id===t});e&&(n.setState({gate:e}),n.props.onComponentChange({qualityGate:e}))}else n.setState({gate:void 0})})},n}return m(n,e),n.prototype.componentDidMount=function(){this.mounted=!0,this.checkPermissions()?this.fetchQualityGates():Object(b.a)()},n.prototype.componentWillUnmount=function(){this.mounted=!1},n.prototype.checkPermissions=function(){var e=this.props.component.configuration;return!!(e&&e.showQualityGates)},n.prototype.fetchQualityGates=function(){var e=this,n=this.props.component;this.setState({loading:!0}),Promise.all([Object(f.i)({organization:n.organization}),Object(f.k)({organization:n.organization,project:n.key})]).then(function(n){var t=n[0].qualitygates,o=n[1];e.mounted&&e.setState({allGates:t,gate:o,loading:!1})},function(){e.mounted&&e.setState({loading:!1})})},n.prototype.render=function(){if(!this.checkPermissions())return null;var e=this.state,n=e.allGates,t=e.gate,i=e.loading;return o.createElement("div",{className:"page page-limited",id:"project-quality-gate"},o.createElement(g.a,{suggestions:"project_quality_gate"}),o.createElement(r.a,{title:Object(l.l)("project_quality_gate.page")}),o.createElement(c,null),i?o.createElement("i",{className:"spinner"}):n&&o.createElement(d,{allGates:n,gate:t,onChange:this.handleChangeGate}))},n}(o.PureComponent);n.default=v},558:function(e,n,t){"use strict";t.d(n,"a",function(){return c});var o=t(539),i=t(540),r=t(549),a=t(598),l=t(546);t(568);function c(e){var n=e.children,t=void 0===n?o.createElement(a.a,{fill:l.gray71,size:12}):n,c=e.tagName,s=void 0===c?"div":c;return o.createElement(s,{className:i("help-tooltip",e.className)},o.createElement(r.a,{mouseLeaveDelay:.25,onShow:e.onShow,overlay:e.overlay,placement:e.placement},o.createElement("span",{className:"display-inline-flex-center"},t)))}},559:function(e,n,t){"use strict";t.d(n,"c",function(){return h}),t.d(n,"b",function(){return b}),t.d(n,"a",function(){return m});var o=t(539),i=t(546),r=t(582),a=t(541),l=t(554),c=(t(573),function(){return(c=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}).apply(this,arguments)}),s=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)n.indexOf(o[i])<0&&(t[o[i]]=e[o[i]])}return t},u=t.e(356).then(t.bind(null,615)),p=Object(l.a)(function(){return u}),d=Object(l.a)(function(){return u.then(function(e){return{default:e.Creatable}})}),f=Object(l.a)(function(){return u.then(function(e){return{default:e.Async}})});function g(){return o.createElement(a.b,{className:"button-tiny spacer-left text-middle",color:i.gray60},o.createElement(r.a,{size:12}))}function h(e){var n=e.innerRef,t=s(e,["innerRef"]),i=p,r=!!t.clearable&&Boolean(t.value);return o.createElement(i,c({},t,{clearRenderer:g,clearable:r,ref:n}))}function b(e){var n=d;return o.createElement(n,c({},e,{clearRenderer:g}))}function m(e){return o.createElement(f,c({},e))}},562:function(e,n,t){"use strict";t.d(n,"a",function(){return l});var o,i=t(539),r=t(587),a=(o=function(e,n){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)},function(e,n){function t(){this.constructor=e}o(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)});function l(e){var n=e.suggestions;return i.createElement(r.a.Consumer,null,function(e){var t=e.addSuggestions,o=e.removeSuggestions;return i.createElement(c,{addSuggestions:t,removeSuggestions:o,suggestions:n})})}var c=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return a(n,e),n.prototype.componentDidMount=function(){this.props.addSuggestions(this.props.suggestions)},n.prototype.componentDidUpdate=function(e){e.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(e.suggestions))},n.prototype.componentWillUnmount=function(){this.props.removeSuggestions(this.props.suggestions)},n.prototype.render=function(){return null},n}(i.PureComponent)},567:function(e,n,t){"use strict";var o,i=t(539),r=t(558),a=t(554),l=(o=function(e,n){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)},function(e,n){function t(){this.constructor=e}o(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),c=Object(a.a)(function(){return Promise.all([t.e(8),t.e(10)]).then(t.bind(null,8))}),s=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.state={open:!1},n.close=function(){n.setState({open:!1})},n}return l(n,e),n.prototype.componentDidMount=function(){var e=this;this.props.doc.then(function(n){var t=n.default;e.setState({content:t})},function(){}),document.addEventListener("scroll",this.close,!0)},n.prototype.componentWillUnmount=function(){document.removeEventListener("scroll",this.close,!0)},n.prototype.render=function(){return this.state.content?i.createElement(r.a,{className:this.props.className,overlay:i.createElement("div",{className:"abs-width-300"},i.createElement(c,{childProps:this.props.overlayProps,className:"cut-margins",content:this.state.content,isTooltip:!0}))},this.props.children):this.props.children||null},n}(i.PureComponent);n.a=s},568:function(e,n,t){var o=t(569);"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(543)(o,i);o.locals&&(e.exports=o.locals)},569:function(e,n,t){(e.exports=t(542)(!1)).push([e.i,"/*\n * SonarQube\n * Copyright (C) 2009-2018 SonarSource SA\n * mailto:info AT sonarsource DOT com\n *\n * This program is free software; you can redistribute it and/or\n * modify it under the terms of the GNU Lesser General Public\n * License as published by the Free Software Foundation; either\n * version 3 of the License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU\n * Lesser General Public License for more details.\n *\n * You should have received a copy of the GNU Lesser General Public License\n * along with this program; if not, write to the Free Software Foundation,\n * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.\n */\n.help-tooltip {\n  display: inline-flex;\n  align-items: center;\n  vertical-align: middle;\n}\n\n.help-toolip-link {\n  display: block;\n  width: 12px;\n  height: 12px;\n  border: none;\n}\n",""])},573:function(e,n,t){var o=t(574);"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(543)(o,i);o.locals&&(e.exports=o.locals)},574:function(e,n,t){(e.exports=t(542)(!1)).push([e.i,"/*\n * SonarQube\n * Copyright (C) 2009-2018 SonarSource SA\n * mailto:info AT sonarsource DOT com\n *\n * This program is free software; you can redistribute it and/or\n * modify it under the terms of the GNU Lesser General Public\n * License as published by the Free Software Foundation; either\n * version 3 of the License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU\n * Lesser General Public License for more details.\n *\n * You should have received a copy of the GNU Lesser General Public License\n * along with this program; if not, write to the Free Software Foundation,\n * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.\n */\n.Select {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 12px;\n  text-align: left;\n}\n\n.Select,\n.Select div,\n.Select input,\n.Select span {\n  box-sizing: border-box;\n}\n\n.Select.is-disabled > .Select-control {\n  background-color: #ebebeb !important;\n  border-color: #ddd !important;\n}\n\n.Select.is-disabled > .Select-control:hover {\n  box-shadow: none !important;\n}\n\n.Select.is-disabled .Select-arrow-zone {\n  cursor: not-allowed !important;\n  pointer-events: none !important;\n}\n\n.Select.is-disabled .Select-placeholder,\n.Select.is-disabled .Select-value {\n  color: #bbb !important;\n}\n\n.Select-control {\n  position: relative;\n  display: table;\n  width: 100%;\n  height: 24px;\n  line-height: 22px;\n  border: 1px solid #cdcdcd;\n  border-collapse: separate;\n  border-radius: 2px;\n  background-color: #fff;\n  color: #444;\n  cursor: default;\n  outline: none;\n  overflow: hidden;\n}\n\n.is-searchable.is-open > .Select-control {\n  cursor: text;\n}\n\n.is-open > .Select-control {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n  background: #fff;\n}\n\n.is-open > .Select-control > .Select-arrow {\n  border-color: transparent transparent #999;\n  border-width: 0 5px 5px;\n}\n\n.is-searchable.is-focused:not(.is-open) > .Select-control {\n  cursor: text;\n}\n\n.is-focused:not(.is-open) > .Select-control {\n  border-color: #4b9fd5;\n}\n\n.Select-placeholder {\n  color: #777;\n}\n\n.Select-placeholder,\n:not(.Select--multi) > .Select-control .Select-value {\n  bottom: 0;\n  left: 0;\n  line-height: 23px;\n  padding-left: 8px;\n  padding-right: 24px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.Select-value [class^='icon-'] {\n  padding-top: 5px;\n}\n\n.Select-value svg,\n.Select-value img {\n  padding-top: 4px;\n}\n\n.Select-value .outline-badge,\n.Select-option .outline-badge {\n  height: 20px;\n  line-height: 19px;\n  margin-top: 1px;\n}\n\n.Select-option svg,\n.Select-option img,\n.Select-option [class^='icon-'] {\n  padding-top: 2px;\n}\n\n.has-value:not(.Select--multi) > .Select-control > .Select-value .Select-value-label,\n.has-value.is-pseudo-focused:not(.Select--multi)\n  > .Select-control\n  > .Select-value\n  .Select-value-label {\n  color: #444;\n}\n\n.has-value:not(.Select--multi) > .Select-control > .Select-value a.Select-value-label,\n.has-value.is-pseudo-focused:not(.Select--multi)\n  > .Select-control\n  > .Select-value\n  a.Select-value-label {\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.has-value:not(.Select--multi) > .Select-control > .Select-value a.Select-value-label:hover,\n.has-value.is-pseudo-focused:not(.Select--multi)\n  > .Select-control\n  > .Select-value\n  a.Select-value-label:hover,\n.has-value:not(.Select--multi) > .Select-control > .Select-value a.Select-value-label:focus,\n.has-value.is-pseudo-focused:not(.Select--multi)\n  > .Select-control\n  > .Select-value\n  a.Select-value-label:focus {\n  color: #007eff;\n  outline: none;\n  text-decoration: underline;\n}\n\n.Select-input {\n  vertical-align: top;\n  height: 22px;\n  padding-left: 8px;\n  padding-right: 8px;\n  outline: none;\n}\n\n.Select-input > input {\n  background: none transparent;\n  border: 0 none;\n  cursor: default;\n  display: inline-block;\n  font-family: inherit;\n  font-size: 12px;\n  height: 22px;\n  margin: 0;\n  outline: none;\n  padding: 0;\n  box-shadow: none;\n  -webkit-appearance: none;\n}\n\n.is-focused .Select-input > input {\n  cursor: text;\n}\n\n.has-value.is-pseudo-focused .Select-input {\n  opacity: 0;\n}\n\n.Select-control:not(.is-searchable) > .Select-input {\n  outline: none;\n}\n\n.Select-loading-zone {\n  cursor: pointer;\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  width: 16px;\n}\n\n.Select-loading {\n  animation: Select-animation-spin 400ms infinite linear;\n  width: 16px;\n  height: 16px;\n  box-sizing: border-box;\n  border-radius: 50%;\n  border: 2px solid #ccc;\n  border-right-color: #444;\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n}\n\n.Select-clear-zone {\n  animation: Select-animation-fadeIn 200ms;\n  color: #999;\n  cursor: pointer;\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  width: 16px;\n  height: 16px;\n  padding-right: 4px;\n}\n\n.Select-clear-zone:hover .Select-clear {\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxNCAxNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEuNDE0MjE7Ij4gICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC4wMjM0Mzc1LDAsMCwwLjAyMzQzNzUsLTUuMDE1NjIsLTUuMDE1NjIpIj4gICAgICAgIDxwYXRoIGQ9Ik04MTAsMjc0TDU3Miw1MTJMODEwLDc1MEw3NTAsODEwTDUxMiw1NzJMMjc0LDgxMEwyMTQsNzUwTDQ1Miw1MTJMMjE0LDI3NEwyNzQsMjE0TDUxMiw0NTJMNzUwLDIxNEw4MTAsMjc0WiIgc3R5bGU9ImZpbGw6cmdiKDIzMSwyMCw1Nik7ZmlsbC1ydWxlOm5vbnplcm87Ii8+ICAgIDwvZz48L3N2Zz4=);\n}\n\n.Select-clear {\n  display: block;\n  width: 9px;\n  height: 9px;\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxNCAxNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEuNDE0MjE7Ij4gICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC4wMjM0Mzc1LDAsMCwwLjAyMzQzNzUsLTUuMDE1NjIsLTUuMDE1NjIpIj4gICAgICAgIDxwYXRoIGQ9Ik04MTAsMjc0TDU3Miw1MTJMODEwLDc1MEw3NTAsODEwTDUxMiw1NzJMMjc0LDgxMEwyMTQsNzUwTDQ1Miw1MTJMMjE0LDI3NEwyNzQsMjE0TDUxMiw0NTJMNzUwLDIxNEw4MTAsMjc0WiIgc3R5bGU9ImZpbGw6cmdiKDE1MywxNTMsMTUzKTtmaWxsLXJ1bGU6bm9uemVybzsiLz4gICAgPC9nPjwvc3ZnPg==);\n  background-size: 9px 9px;\n  text-indent: -9999px;\n}\n\n.Select--multi .Select-clear-zone {\n  width: 17px;\n}\n\n.Select-arrow-zone {\n  cursor: pointer;\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  width: 20px;\n  padding-right: 5px;\n}\n\n.Select-arrow {\n  border-color: #999 transparent transparent;\n  border-style: solid;\n  border-width: 4px 4px 2px;\n  display: inline-block;\n  height: 0;\n  width: 0;\n}\n\n.is-open .Select-arrow,\n.Select-arrow-zone:hover > .Select-arrow {\n  border-top-color: #666;\n}\n\n@keyframes Select-animation-fadeIn {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n.Select-menu-outer {\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-top-color: #e6e6e6;\n  box-sizing: border-box;\n  margin-top: -1px;\n  max-height: 200px;\n  position: absolute;\n  top: 100%;\n  width: 100%;\n  z-index: 7500;\n  -webkit-overflow-scrolling: touch;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n}\n\n.Select-menu {\n  max-height: 198px;\n  padding: 5px 0;\n  overflow-y: auto;\n}\n\n.Select-option {\n  display: block;\n  line-height: 20px;\n  padding: 0 8px;\n  box-sizing: border-box;\n  color: #444;\n  font-size: 12px;\n  cursor: pointer;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.Select-option:last-child {\n  border-bottom-right-radius: 2px;\n  border-bottom-left-radius: 2px;\n}\n\n.Select-option.is-focused {\n  background-color: #f3f3f3;\n}\n\n.Select-option.is-disabled {\n  font-weight: 600;\n  cursor: default;\n}\n\n.Select-noresults {\n  box-sizing: border-box;\n  color: #999;\n  cursor: default;\n  display: block;\n  padding: 8px 10px;\n}\n\n.Select--multi .Select-value {\n  background-color: rgba(0, 126, 255, 0.08);\n  border-radius: 2px;\n  border: 1px solid rgba(0, 126, 255, 0.24);\n  color: #444;\n  display: inline-block;\n  font-size: 12px;\n  line-height: 14px;\n  margin: 1px 4px 1px 1px;\n  vertical-align: top;\n}\n\n.Select-value-label {\n  font-size: 12px;\n}\n\n.is-searchable.is-open .Select-value-label {\n  opacity: 0.5;\n}\n\n.Select-big .Select-control {\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n\n.Select-big .Select-placeholder {\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\n\n.Select-big .Select-value-label {\n  display: inline-block;\n  margin-top: 7px;\n  line-height: 16px;\n}\n\n.Select-big .Select-option {\n  padding: 7px 8px;\n  line-height: 16px;\n}\n\n.Select-big img,\n.Select-big svg {\n  padding-top: 0;\n}\n\n.Select--multi .Select-value-icon,\n.Select--multi .Select-value-label {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.Select--multi .Select-value-label {\n  display: inline-block;\n  max-width: 200px;\n  border-bottom-right-radius: 2px;\n  border-top-right-radius: 2px;\n  cursor: default;\n  padding: 2px 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.Select--multi a.Select-value-label {\n  color: #007eff;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.Select--multi a.Select-value-label:hover {\n  text-decoration: underline;\n}\n\n.Select--multi .Select-value-icon {\n  cursor: pointer;\n  border-bottom-left-radius: 2px;\n  border-top-left-radius: 2px;\n  border-right: 1px solid rgba(0, 126, 255, 0.24);\n  padding: 1px 5px;\n}\n\n.Select--multi .Select-value-icon:hover,\n.Select--multi .Select-value-icon:focus {\n  background-color: rgba(0, 113, 230, 0.08);\n  color: #0071e6;\n}\n\n.Select--multi .Select-value-icon:active {\n  background-color: rgba(0, 126, 255, 0.24);\n}\n\n.Select--multi.is-disabled .Select-value {\n  background-color: #fcfcfc;\n  border: 1px solid #e3e3e3;\n  color: #444;\n}\n\n.Select--multi.is-disabled .Select-value-icon {\n  cursor: not-allowed;\n  border-right: 1px solid #e3e3e3;\n}\n\n.Select--multi.is-disabled .Select-value-icon:hover,\n.Select--multi.is-disabled .Select-value-icon:focus,\n.Select--multi.is-disabled .Select-value-icon:active {\n  background-color: #fcfcfc;\n}\n\n.Select-aria-only {\n  display: none;\n}\n\n@keyframes Select-animation-spin {\n  to {\n    transform: rotate(1turn);\n  }\n}\n",""])},649:function(e,n,t){"use strict";t.d(n,"i",function(){return a}),t.d(n,"h",function(){return l}),t.d(n,"d",function(){return c}),t.d(n,"f",function(){return s}),t.d(n,"l",function(){return u}),t.d(n,"b",function(){return p}),t.d(n,"n",function(){return d}),t.d(n,"c",function(){return f}),t.d(n,"o",function(){return g}),t.d(n,"e",function(){return h}),t.d(n,"k",function(){return b}),t.d(n,"m",function(){return m}),t.d(n,"a",function(){return v}),t.d(n,"g",function(){return S}),t.d(n,"j",function(){return y});var o=t(26),i=t(555),r=function(){return(r=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}).apply(this,arguments)};function a(e){return Object(o.getJSON)("/api/qualitygates/list",e).catch(i.a)}function l(e){return Object(o.getJSON)("/api/qualitygates/show",e).catch(i.a)}function c(e){return Object(o.postJSON)("/api/qualitygates/create",e).catch(i.a)}function s(e){return Object(o.post)("/api/qualitygates/destroy",e).catch(i.a)}function u(e){return Object(o.post)("/api/qualitygates/rename",e).catch(i.a)}function p(e){return Object(o.postJSON)("/api/qualitygates/copy",e).catch(i.a)}function d(e){return Object(o.post)("/api/qualitygates/set_as_default",e).catch(i.a)}function f(e){return Object(o.postJSON)("/api/qualitygates/create_condition",e)}function g(e){return Object(o.postJSON)("/api/qualitygates/update_condition",e)}function h(e){return Object(o.post)("/api/qualitygates/delete_condition",e)}function b(e){return Object(o.getJSON)("/api/qualitygates/get_by_project",e).then(function(e){var n=e.qualityGate;return n&&r({},n,{isDefault:n.default})},i.a)}function m(e){return Object(o.getJSON)("/api/qualitygates/search",e).catch(i.a)}function v(e){return Object(o.post)("/api/qualitygates/select",e).catch(i.a)}function S(e){return Object(o.post)("/api/qualitygates/deselect",e).catch(i.a)}function y(e){return Object(o.getJSON)("/api/qualitygates/application_status",e).catch(i.a)}},702:function(e,n,t){"use strict";t.d(n,"a",function(){return a});var o=t(624),i=t(630),r=t(718);function a(){var e=Object(o.default)(),n=Object(i.a)(),t=window.location.pathname+window.location.search+window.location.hash;e.dispatch(Object(r.c)()),n.replace({pathname:"/sessions/new",query:{return_to:t}})}},777:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var o=t(624),i=t(597);function r(e){Object(o.default)().dispatch(i.b(e))}}}]);
//# sourceMappingURL=301.23954609.chunk.js.map