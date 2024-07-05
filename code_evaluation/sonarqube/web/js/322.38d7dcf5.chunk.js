(window.webpackJsonp=window.webpackJsonp||[]).push([[322],{1053:function(e,t,n){"use strict";var a,r=n(539),c=n(540),i=n(556),s=n.n(i),l=n(683),m=n(594),o=n(789),u=n(541),p=n(4),d=n(604),f=n(547),h=n(76),E=(n(1054),a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),b=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={},t.fetchStatus=function(){(t.props.setup?t.fetchMigrationState():t.fetchSystemStatus()).catch(function(){t.mounted&&t.setState({message:void 0,startedAt:void 0,state:void 0,status:"OFFLINE"})})},t.fetchSystemStatus=function(){return Object(l.d)().then(function(e){var n=e.status;t.mounted&&(t.setState({status:n}),"STARTING"===n?(t.setState({wasStarting:!0}),t.scheduleRefresh()):"UP"===n?t.state.wasStarting&&t.loadPreviousPage():t.scheduleRefresh())})},t.fetchMigrationState=function(){return Object(l.b)().then(function(e){var n=e.message,a=e.startedAt,r=e.state;t.mounted&&(t.setState({message:n,startedAt:a,state:r}),"MIGRATION_SUCCEEDED"===r?t.loadPreviousPage():"NO_MIGRATION"!==r&&t.scheduleRefresh())})},t.scheduleRefresh=function(){t.interval=window.setTimeout(t.fetchStatus,5e3)},t.loadPreviousPage=function(){setInterval(function(){window.location.href=Object(f.A)(t.props.location)},2500)},t.handleMigrateClick=function(){Object(l.f)().then(function(e){var n=e.message,a=e.startedAt,r=e.state;t.mounted&&t.setState({message:n,startedAt:a,state:r})},function(){})},t}return E(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.fetchStatus()},t.prototype.componentWillUnmount=function(){this.mounted=!1,this.interval&&window.clearInterval(this.interval)},t.prototype.render=function(){var e=this.state,t=e.state,n=e.status;return r.createElement(r.Fragment,null,r.createElement(s.a,{defaultTitle:Object(p.l)("maintenance.page")}),r.createElement("div",{className:"page-wrapper-simple",id:"bd"},r.createElement("div",{className:c("page-simple",{"panel-warning":"MIGRATION_REQUIRED"===t}),id:"nonav"},"OFFLINE"===n&&r.createElement(r.Fragment,null,r.createElement("h1",{className:"maintenance-title text-danger"},r.createElement(d.a,{message:Object(p.l)("maintenance.is_offline")})),!Object(h.isSonarCloud)()&&r.createElement("p",{className:"maintenance-text"},Object(p.l)("maintenance.sonarqube_is_offline.text")),r.createElement("p",{className:"maintenance-text text-center"},r.createElement("a",{href:Object(f.b)()+"/"},Object(p.l)("maintenance.try_again")))),"UP"===n&&r.createElement(r.Fragment,null,r.createElement("h1",{className:"maintenance-title"},r.createElement(d.a,{message:Object(p.l)("maintenance.is_up")})),r.createElement("p",{className:"maintenance-text text-center"},Object(p.l)("maintenance.all_systems_opetational")),r.createElement("p",{className:"maintenance-text text-center"},r.createElement("a",{href:Object(f.b)()+"/"},Object(p.l)("layout.home")))),"STARTING"===n&&r.createElement(r.Fragment,null,r.createElement("h1",{className:"maintenance-title"},r.createElement(d.a,{message:Object(p.l)("maintenance.is_starting")})),r.createElement("p",{className:"maintenance-spinner"},r.createElement("i",{className:"spinner"}))),"DOWN"===n&&r.createElement(r.Fragment,null,r.createElement("h1",{className:"maintenance-title text-danger"},r.createElement(d.a,{message:Object(p.l)("maintenance.is_down")})),r.createElement("p",{className:"maintenance-text"},Object(p.l)("maintenance.sonarqube_is_down.text")),r.createElement("p",{className:"maintenance-text text-center"},r.createElement("a",{href:Object(f.b)()+"/"},Object(p.l)("maintenance.try_again")))),("DB_MIGRATION_NEEDED"===n||"DB_MIGRATION_RUNNING"===n)&&r.createElement(r.Fragment,null,r.createElement("h1",{className:"maintenance-title"},r.createElement(d.a,{message:Object(p.l)("maintenance.is_under_maintenance")})),!Object(h.isSonarCloud)()&&r.createElement(r.Fragment,null,r.createElement("p",{className:"maintenance-text",dangerouslySetInnerHTML:{__html:Object(p.l)("maintenance.sonarqube_is_under_maintenance.1")}}),r.createElement("p",{className:"maintenance-text",dangerouslySetInnerHTML:{__html:Object(p.l)("maintenance.sonarqube_is_under_maintenance.2")}}))),"NO_MIGRATION"===t&&r.createElement(r.Fragment,null,r.createElement("h1",{className:"maintenance-title"},Object(p.l)("maintenance.database_is_up_to_date")),r.createElement("p",{className:"maintenance-text text-center"},r.createElement("a",{href:Object(f.b)()+"/"},Object(p.l)("layout.home")))),"MIGRATION_REQUIRED"===t&&r.createElement(r.Fragment,null,r.createElement("h1",{className:"maintenance-title"},Object(p.l)("maintenance.upgrade_database")),r.createElement("p",{className:"maintenance-text"},Object(p.l)("maintenance.upgrade_database.1")),r.createElement("p",{className:"maintenance-text"},Object(p.l)("maintenance.upgrade_database.2")),r.createElement("p",{className:"maintenance-text"},Object(p.l)("maintenance.upgrade_database.3")),r.createElement("div",{className:"maintenance-spinner"},r.createElement(u.a,{id:"start-migration",onClick:this.handleMigrateClick},Object(p.l)("maintenance.upgrade")))),"NOT_SUPPORTED"===t&&r.createElement(r.Fragment,null,r.createElement("h1",{className:"maintenance-title text-danger"},Object(p.l)("maintenance.migration_not_supported")),r.createElement("p",null,Object(p.l)("maintenance.migration_not_supported.text"))),"MIGRATION_RUNNING"===t&&r.createElement(r.Fragment,null,r.createElement("h1",{className:"maintenance-title"},Object(p.l)("maintenance.database_migration")),this.state.message&&r.createElement("p",{className:"maintenance-text text-center"},this.state.message),this.state.startedAt&&r.createElement("p",{className:"maintenance-text text-center"},Object(p.l)("background_tasks.table.started")," ",r.createElement(m.a,{date:this.state.startedAt}),r.createElement("br",null),r.createElement("small",{className:"text-muted"},r.createElement(o.a,{date:this.state.startedAt,long:!0}))),r.createElement("p",{className:"maintenance-spinner"},r.createElement("i",{className:"spinner"}))),"MIGRATION_SUCCEEDED"===t&&r.createElement(r.Fragment,null,r.createElement("h1",{className:"maintenance-title text-success"},Object(p.l)("maintenance.database_is_up_to_date")),r.createElement("p",{className:"maintenance-text text-center"},r.createElement("a",{href:Object(f.b)()+"/"},Object(p.l)("layout.home")))),"MIGRATION_FAILED"===t&&r.createElement(r.Fragment,null,r.createElement("h1",{className:"maintenance-title text-danger"},Object(p.l)("maintenance.upgrade_failed")),r.createElement("p",{className:"maintenance-text"},Object(p.l)("maintenance.upgrade_failed.text"))))))},t}(r.PureComponent);t.a=b},1054:function(e,t,n){var a=n(1055);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(543)(a,r);a.locals&&(e.exports=a.locals)},1055:function(e,t,n){(e.exports=n(542)(!1)).push([e.i,"/*\n * SonarQube\n * Copyright (C) 2009-2018 SonarSource SA\n * mailto:info AT sonarsource DOT com\n *\n * This program is free software; you can redistribute it and/or\n * modify it under the terms of the GNU Lesser General Public\n * License as published by the Free Software Foundation; either\n * version 3 of the License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU\n * Lesser General Public License for more details.\n *\n * You should have received a copy of the GNU Lesser General Public License\n * along with this program; if not, write to the Free Software Foundation,\n * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.\n */\n.maintenance-title {\n  margin-bottom: 40px;\n  line-height: 1.5;\n  font-size: 24px;\n  font-weight: 300;\n  text-align: center;\n}\n\n.maintenance-text {\n  margin-bottom: 16px;\n  line-height: 1.5;\n  font-size: 16px;\n  font-weight: 300;\n}\n\n.maintenance-spinner {\n  margin-top: 40px;\n  text-align: center;\n}\n",""])},1801:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return i});var a=n(539),r=n(1053),c=function(){return(c=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function i(e){return a.createElement(r.a,c({setup:!1},e))}},594:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(539),r=n(534),c=n(75);function i(e){var t=e.children,n=e.date;return a.createElement(r.FormattedRelative,{value:Object(c.e)(n)},t)}},683:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"h",function(){return i}),n.d(t,"c",function(){return s}),n.d(t,"d",function(){return l}),n.d(t,"e",function(){return m}),n.d(t,"b",function(){return o}),n.d(t,"f",function(){return u}),n.d(t,"g",function(){return f});var a,r=n(26),c=n(555);function i(e){return Object(r.post)("/api/system/change_log_level",{level:e}).catch(c.a)}function s(){return Object(r.getJSON)("/api/system/info").catch(c.a)}function l(){return Object(r.getJSON)("/api/system/status")}function m(){return Object(r.getJSON)("/api/system/upgrades")}function o(){return Object(r.getJSON)("/api/system/db_migration_status")}function u(){return Object(r.postJSON)("/api/system/migrate_db")}!function(e){e.RED="RED",e.YELLOW="YELLOW",e.GREEN="GREEN"}(a||(a={}));var p=2e3;function d(){return new Promise(function(e){return function e(t){setTimeout(function(){l().then(function(n){"UP"===n.status?t():e(t)}).catch(function(){return e(t)})},p)}(e)})}function f(){return Object(r.post)("/api/system/restart").catch(c.a).then(d)}},789:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var a=n(539),r=n(534),c=n(75),i=function(){return(i=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},s={hour:"numeric",minute:"numeric"},l={hour:"numeric",minute:"numeric",second:"numeric"};function m(e){var t=e.children,n=e.date,m=e.long;return a.createElement(r.FormattedTime,i({value:Object(c.e)(n)},m?l:s),t)}}}]);
//# sourceMappingURL=322.38d7dcf5.chunk.js.map