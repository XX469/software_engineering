(window.webpackJsonp=window.webpackJsonp||[]).push([[334],{1666:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return s});var a=n(365),c=n(891);function s(e){return a.createElement(c.a,Object.assign({setup:!0},e))}},414:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(365),c=n(359),s=n(13);function i(e){let t=e.children,n=e.date;return a.createElement(c.FormattedRelative,{value:Object(s.g)(n)},t)}},531:function(e,t,n){"use strict";n.d(t,"g",function(){return s}),n.d(t,"b",function(){return i}),n.d(t,"c",function(){return r}),n.d(t,"d",function(){return l}),n.d(t,"a",function(){return m}),n.d(t,"e",function(){return u}),n.d(t,"f",function(){return o}),n.d(t,"h",function(){return d});var a=n(4),c=n(383);function s(e){return Object(a.post)("/api/system/change_log_level",{level:e}).catch(c.a)}function i(){return Object(a.getJSON)("/api/system/info").catch(c.a)}function r(){return Object(a.getJSON)("/api/system/status")}function l(){return Object(a.getJSON)("/api/system/upgrades")}function m(){return Object(a.getJSON)("/api/system/db_migration_status")}function u(){return Object(a.postJSON)("/api/system/migrate_db")}function o(){return Object(a.post)("/api/system/restart").catch(c.a)}function d(){return Object(a.requestTryAndRepeatUntil)(r,{max:-1,slowThreshold:-15},e=>{return"UP"===e.status})}},619:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(365),c=n(359),s=n(13);const i={hour:"numeric",minute:"numeric"},r={hour:"numeric",minute:"numeric",second:"numeric"};function l(e){let t=e.children,n=e.date,l=e.long;return a.createElement(c.FormattedTime,Object.assign({value:Object(s.g)(n)},l?r:i),t)}},891:function(e,t,n){"use strict";n.d(t,"a",function(){return E});var a=n(365),c=n(381),s=n.n(c),i=n(359),r=n(366),l=n(531),m=n(414),u=n(619),o=n(367),d=n(0),h=n(431),g=n(372),p=n(14);n(892);class E extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={},this.fetchStatus=()=>{(this.props.setup?this.fetchMigrationState():this.fetchSystemStatus()).catch(()=>{this.mounted&&this.setState({message:void 0,startedAt:void 0,state:void 0,status:"OFFLINE"})})},this.fetchSystemStatus=()=>Object(l.c)().then(e=>{let t=e.status;this.mounted&&(this.setState({status:t}),"STARTING"===t?(this.setState({wasStarting:!0}),this.scheduleRefresh()):"UP"===t?this.state.wasStarting&&this.loadPreviousPage():this.scheduleRefresh())}),this.fetchMigrationState=()=>Object(l.a)().then(e=>{let t=e.message,n=e.startedAt,a=e.state;this.mounted&&(this.setState({message:t,startedAt:n,state:a}),"MIGRATION_SUCCEEDED"===a?this.loadPreviousPage():"NO_MIGRATION"!==a&&this.scheduleRefresh())}),this.scheduleRefresh=()=>{this.interval=window.setTimeout(this.fetchStatus,5e3)},this.loadPreviousPage=()=>{setInterval(()=>{window.location.href=Object(g.A)(this.props.location)},2500)},this.handleMigrateClick=()=>{Object(l.e)().then(e=>{let t=e.message,n=e.startedAt,a=e.state;this.mounted&&this.setState({message:t,startedAt:n,state:a})},()=>{})}}componentDidMount(){this.mounted=!0,this.fetchStatus()}componentWillUnmount(){this.mounted=!1,this.interval&&window.clearInterval(this.interval)}render(){const e=this.state,t=e.state,n=e.status;return a.createElement(a.Fragment,null,a.createElement(s.a,{defaultTitle:Object(d.l)("maintenance.page")}),a.createElement("div",{className:"page-wrapper-simple",id:"bd"},a.createElement("div",{className:r("page-simple",{"panel-warning":"MIGRATION_REQUIRED"===t}),id:"nonav"},"OFFLINE"===n&&a.createElement(a.Fragment,null,a.createElement("h1",{className:"maintenance-title text-danger"},a.createElement(h.a,{message:Object(d.l)("maintenance.is_offline")})),!Object(p.isSonarCloud)()&&a.createElement("p",{className:"maintenance-text"},Object(d.l)("maintenance.sonarqube_is_offline.text")),a.createElement("p",{className:"maintenance-text text-center"},a.createElement("a",{href:Object(g.b)()+"/"},Object(d.l)("maintenance.try_again")))),"UP"===n&&a.createElement(a.Fragment,null,a.createElement("h1",{className:"maintenance-title"},a.createElement(h.a,{message:Object(d.l)("maintenance.is_up")})),a.createElement("p",{className:"maintenance-text text-center"},Object(d.l)("maintenance.all_systems_opetational")),a.createElement("p",{className:"maintenance-text text-center"},a.createElement("a",{href:Object(g.b)()+"/"},Object(d.l)("layout.home")))),"STARTING"===n&&a.createElement(a.Fragment,null,a.createElement("h1",{className:"maintenance-title"},a.createElement(h.a,{message:Object(d.l)("maintenance.is_starting")})),a.createElement("p",{className:"maintenance-spinner"},a.createElement("i",{className:"spinner"}))),"DOWN"===n&&a.createElement(a.Fragment,null,a.createElement("h1",{className:"maintenance-title text-danger"},a.createElement(h.a,{message:Object(d.l)("maintenance.is_down")})),a.createElement("p",{className:"maintenance-text"},Object(d.l)("maintenance.sonarqube_is_down.text")),a.createElement("p",{className:"maintenance-text text-center"},a.createElement("a",{href:Object(g.b)()+"/"},Object(d.l)("maintenance.try_again")))),("DB_MIGRATION_NEEDED"===n||"DB_MIGRATION_RUNNING"===n)&&a.createElement(a.Fragment,null,a.createElement("h1",{className:"maintenance-title"},a.createElement(h.a,{message:Object(d.l)("maintenance.is_under_maintenance")})),!Object(p.isSonarCloud)()&&a.createElement(a.Fragment,null,a.createElement("p",{className:"maintenance-text"},a.createElement(i.FormattedMessage,{defaultMessage:Object(d.l)("maintenance.sonarqube_is_under_maintenance.1"),id:"maintenance.sonarqube_is_under_maintenance.1",values:{link:a.createElement("a",{href:"https://redirect.sonarsource.com/doc/plugin-library.html"},Object(d.l)("maintenance.sonarqube_is_under_maintenance_link.1"))}})),a.createElement("p",{className:"maintenance-text"},a.createElement(i.FormattedMessage,{defaultMessage:Object(d.l)("maintenance.sonarqube_is_under_maintenance.2"),id:"maintenance.sonarqube_is_under_maintenance.2",values:{link:a.createElement("a",{href:"https://redirect.sonarsource.com/doc/upgrading.html"},Object(d.l)("maintenance.sonarqube_is_under_maintenance_link.2"))}})))),"NO_MIGRATION"===t&&a.createElement(a.Fragment,null,a.createElement("h1",{className:"maintenance-title"},Object(d.l)("maintenance.database_is_up_to_date")),a.createElement("p",{className:"maintenance-text text-center"},a.createElement("a",{href:Object(g.b)()+"/"},Object(d.l)("layout.home")))),"MIGRATION_REQUIRED"===t&&a.createElement(a.Fragment,null,a.createElement("h1",{className:"maintenance-title"},Object(d.l)("maintenance.upgrade_database")),a.createElement("p",{className:"maintenance-text"},Object(d.l)("maintenance.upgrade_database.1")),a.createElement("p",{className:"maintenance-text"},Object(d.l)("maintenance.upgrade_database.2")),a.createElement("p",{className:"maintenance-text"},Object(d.l)("maintenance.upgrade_database.3")),a.createElement("div",{className:"maintenance-spinner"},a.createElement(o.a,{id:"start-migration",onClick:this.handleMigrateClick},Object(d.l)("maintenance.upgrade")))),"NOT_SUPPORTED"===t&&a.createElement(a.Fragment,null,a.createElement("h1",{className:"maintenance-title text-danger"},Object(d.l)("maintenance.migration_not_supported")),a.createElement("p",null,Object(d.l)("maintenance.migration_not_supported.text"))),"MIGRATION_RUNNING"===t&&a.createElement(a.Fragment,null,a.createElement("h1",{className:"maintenance-title"},Object(d.l)("maintenance.database_migration")),this.state.message&&a.createElement("p",{className:"maintenance-text text-center"},this.state.message),this.state.startedAt&&a.createElement("p",{className:"maintenance-text text-center"},Object(d.l)("background_tasks.table.started")," ",a.createElement(m.a,{date:this.state.startedAt}),a.createElement("br",null),a.createElement("small",{className:"text-muted"},a.createElement(u.a,{date:this.state.startedAt,long:!0}))),a.createElement("p",{className:"maintenance-spinner"},a.createElement("i",{className:"spinner"}))),"MIGRATION_SUCCEEDED"===t&&a.createElement(a.Fragment,null,a.createElement("h1",{className:"maintenance-title text-success"},Object(d.l)("maintenance.database_is_up_to_date")),a.createElement("p",{className:"maintenance-text text-center"},a.createElement("a",{href:Object(g.b)()+"/"},Object(d.l)("layout.home")))),"MIGRATION_FAILED"===t&&a.createElement(a.Fragment,null,a.createElement("h1",{className:"maintenance-title text-danger"},Object(d.l)("maintenance.upgrade_failed")),a.createElement("p",{className:"maintenance-text"},Object(d.l)("maintenance.upgrade_failed.text"))))))}}},892:function(e,t,n){var a=n(893);"string"==typeof a&&(a=[[e.i,a,""]]);var c={hmr:!0,transform:void 0,insertInto:void 0};n(369)(a,c);a.locals&&(e.exports=a.locals)},893:function(e,t,n){(e.exports=n(368)(!1)).push([e.i,".maintenance-title{margin-bottom:40px;line-height:1.5;font-size:24px;font-weight:300;text-align:center}.maintenance-text{margin-bottom:16px;line-height:1.5;font-size:16px;font-weight:300}.maintenance-spinner{margin-top:40px;text-align:center}",""])}}]);
//# sourceMappingURL=334.m.139c07b0.chunk.js.map