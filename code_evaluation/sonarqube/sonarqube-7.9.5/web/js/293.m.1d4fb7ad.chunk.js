(window.webpackJsonp=window.webpackJsonp||[]).push([[293],{1443:function(e,t,n){var s=n(1444);"string"==typeof s&&(s=[[e.i,s,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(369)(s,a);s.locals&&(e.exports=s.locals)},1444:function(e,t,n){(e.exports=n(368)(!1)).push([e.i,'.status-indicator{display:inline-block;box-sizing:border-box;width:16px;height:16px;border-radius:16px;margin:4px}.status-indicator.small-status-indicator{width:8px;height:8px;border-radius:8px;margin:8px}.status-indicator.big-status-indicator{width:24px;height:24px;border-radius:24px;margin:0}.status-indicator.red{position:relative;z-index:2;background-color:#d4333f}.status-indicator.red:after{position:absolute;z-index:3;display:block;width:6px;height:2px;top:3px;left:1px;background-color:#fff;content:""}.status-indicator.yellow{background-color:#eabe06}.status-indicator.green{background-color:#0a0}.status-indicator.orange{background-color:#ed7d20}.status-indicator.gray{background-color:#b4b4b4}',""])},1446:function(e,t,n){var s=n(1447);"string"==typeof s&&(s=[[e.i,s,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(369)(s,a);s.locals&&(e.exports=s.locals)},1447:function(e,t,n){(e.exports=n(368)(!1)).push([e.i,".system-info-health-title{margin-top:24px;margin-bottom:16px}.system-info-health-info{margin-top:-12px}.system-info-copy-paste-id-info{max-width:550px;padding:8px 16px;clear:both;line-height:1.8}.system-info-health-info .status-indicator{position:relative;top:8px}.system-info-health-info.no-margin .status-indicator{margin:0}.system-info-section~.system-info-section{margin-top:16px}.system-info-section-item-name{width:25vw;overflow:hidden;text-overflow:ellipsis}.system-upgrade-version{padding:8px}.system-upgrade-version~.system-upgrade-version{margin-top:10px;padding-top:18px;border-top:1px solid #e6e6e6}.system-upgrade-intermediate{padding:6px 10px}",""])},1680:function(e,t,n){"use strict";n.r(t);var s=n(365),a=n(371),r=n(381),o=n.n(r),l=n(382),i=n.n(l),c=n(415),m=n.n(c),u=n(366),d=n(385);function p(e){let t=e.className,n=e.health,a=e.healthCause;return s.createElement(d.a,{className:u("boxed-group-accordion-alert",t),display:"inline",variant:"RED"===n?"error":"warning"},a)}n(1443);function h(e){let t=e.className,n=e.color,a=e.size;return s.createElement("i",{className:u("status-indicator",n,{"small-status-indicator":"small"===a,"big-status-indicator":"big"===a},t)})}var g=n(374),f=n(0);function b(e){let t=e.biggerHealth,n=e.className,a=e.name,r=e.health,o=e.healthCauses;const l=o&&o.length>0&&"GREEN"!==r,i=s.createElement(h,{color:r.toLowerCase(),size:t?"big":void 0});return s.createElement("div",{className:u("system-info-health-info",n)},l&&o.map((e,t)=>s.createElement(p,{className:"spacer-right",health:r,healthCause:e,key:t})),a?s.createElement(g.a,{overlay:Object(f.m)("system.current_health_of_x",a)},s.createElement("span",null,i)):i)}var v=n(563),y=n(546),E=n(59),C=n.n(E),S=n(19),O=n.n(S),N=n(474),x=n.n(N),j=n(16),w=n.n(j),_=n(457),k=n.n(_),L=n(1445),D=n.n(L),I=n(486),U=n(376);const F=["INFO","DEBUG","TRACE"],P=F[0],M="Application Nodes",B="Compute Engine",W="Compute Engine Logging",T="High Availability",q="Health Causes",H="Health",z="Logs Level",R="Name",A="ncloc",J="Plugins",V="Search Nodes",Q="Search",G="Server ID",Y="Settings",K="State",X="Statistics",Z="System",$="Version",ee="Web Logging",te="Web";function ne(e){return x()(e,[H,q,R,J,Y,G,$])}function se(e){return e[H]}function ae(e){return e[q]}function re(e){if(void 0!==e){if(function(e){return void 0!==e[z]}(e))return e[z];if(function(e){return Boolean(e[ee]||e[W])}(e))return i()([re(e[ee]),re(e[W])],e=>F.indexOf(e))[1]}return P}function oe(e){return e[M]}function le(e){return e[Z]&&!0===e[Z][T]}function ie(e){return e&&e[Z][G]}function ce(e){return e&&e[Z][$]}function me(e){const t=oe(e);return t.length>0?t[0][Z][$]:void 0}function ue(e){if(le(e)){const t=i()(oe(e).map(re),e=>F.indexOf(e));return t.length>0?t[t.length-1]:P}return re(e)}function de(e){return e[R]}function pe(e){const t={},n=e[X];return n&&(t["Lines of Code"]=Object(U.formatMeasure)(n[A],"INT")),Object.assign({},e[Z],t)}function he(e){return Object.assign({},pe(e),x()(e,[M,J,V,Y,X,Z]))}function ge(e){return Object.assign({},pe(e),O()(e,(e,t)=>null==e||[J,Y,X,Z].includes(t)||t.startsWith(B)||t.startsWith(Q)||t.startsWith(te)))}function fe(e){const t=new Date;return"".concat(e?e+"-":"")+"".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-")+"".concat(t.getDate(),"-").concat(t.getHours(),"-").concat(t.getMinutes())}const be=w()(e=>({expandedCards:Object(I.b)(e.expand,I.g)})),ve=w()(e=>Object(I.a)({expand:Object(I.m)(e.expandedCards)}));function ye(e){return i()(e,[e=>-Number(e.version.split(".")[0]),e=>-Number(e.version.split(".")[1]||0),e=>-Number(e.version.split(".")[2]||0)])}function Ee(e){const t=k()(e,e=>e.version.split(".")[0]);return i()(Object.keys(t),e=>-Number(e)).map(e=>t[e])}function Ce(e){let t=e.name,n=e.value;if(t===H||t===K)return s.createElement(b,{className:"no-margin",health:n});if(n instanceof Array)return s.createElement("code",null,JSON.stringify(n));switch(typeof n){case"boolean":return s.createElement(Se,{value:n});case"object":return s.createElement(Oe,{value:n});default:return s.createElement("code",null,n)}}function Se(e){return e.value?s.createElement(y.a,null):s.createElement(v.a,null)}function Oe(e){let t=e.value;return s.createElement("table",{className:"data"},s.createElement("tbody",null,m()(t,(e,t)=>s.createElement("tr",{key:t},s.createElement("td",{className:"thin nowrap"},t),s.createElement("td",null,s.createElement(Ce,{name:t,value:e}))))))}function Ne(e){let t=e.name,n=e.items;return s.createElement("div",{className:"system-info-section"},t&&s.createElement("h4",{className:"spacer-bottom"},t),s.createElement("table",{className:"data zebra",id:t},s.createElement("tbody",null,m()(n,(e,t)=>s.createElement("tr",{key:t},s.createElement("td",{className:"thin"},s.createElement("div",{className:"system-info-section-item-name"},t)),s.createElement("td",{style:{wordBreak:"break-all"}},s.createElement(Ce,{name:t,value:e})))))))}var xe=n(881);function je(e){let t=e.biggerHealth,n=e.health,a=e.healthCauses,r=e.onClick,o=e.open,l=e.name,i=e.sysInfoData;const c=function(e){const t={},n={};return D()(e,(e,s)=>{"object"!=typeof e||e instanceof Array?t[s]=e:n[s]=e}),{mainSection:t,sections:n}}(i),u=c.mainSection,p=c.sections,h=o&&u&&Object.keys(u).length>0,g=o&&p,v=re(i),y=v&&v!==F[0];return s.createElement(xe.a,{data:l,onClick:r,open:o,renderHeader:()=>s.createElement(s.Fragment,null,y&&s.createElement(d.a,{className:"boxed-group-accordion-alert spacer-left",display:"inline",variant:"warning"},Object(f.l)("system.log_level.warning.short")),n&&s.createElement(b,{biggerHealth:t,className:"pull-right",health:n,healthCauses:a,name:l})),title:l},h&&s.createElement(Ne,{items:u}),g&&m()(p,(e,t)=>s.createElement(Ne,{items:e,key:t,name:t})))}function we(e){let t=e.expandedCards,n=e.sysInfoData,a=e.toggleCard;return s.createElement(s.Fragment,null,s.createElement(je,{biggerHealth:!0,health:se(n),healthCauses:ae(n),name:"System",onClick:a,open:t.includes("System"),sysInfoData:ne(he(n))}),s.createElement("li",{className:"note system-info-health-title"},Object(f.l)("system.application_nodes_title")),i()(oe(n),de).map(e=>s.createElement(je,{health:se(e),healthCauses:ae(e),key:de(e),name:de(e),onClick:a,open:t.includes(de(e)),sysInfoData:ne(e)})),s.createElement("li",{className:"note system-info-health-title"},Object(f.l)("system.search_nodes_title")),i()(function(e){return e[V]}(n),de).map(e=>s.createElement(je,{key:de(e),name:de(e),onClick:a,open:t.includes(de(e)),sysInfoData:ne(e)})))}var _e=n(531),ke=n(378),Le=n(367);class De extends s.PureComponent{constructor(e){super(e),this.handleFormSubmit=e=>{e.preventDefault();const t=this.state.newLevel;this.state.updating||(this.setState({updating:!0}),Object(_e.g)(t).then(()=>this.props.onChange(t),()=>this.setState({updating:!1})))},this.handleLevelChange=e=>this.setState({newLevel:e.currentTarget.value}),this.state={newLevel:e.logLevel,updating:!1}}render(){const e=this.state,t=e.updating,n=e.newLevel,a=Object(f.l)("system.set_log_level");return s.createElement(ke.a,{contentLabel:a,onRequestClose:this.props.onClose},s.createElement("form",{id:"set-log-level-form",onSubmit:this.handleFormSubmit},s.createElement("div",{className:"modal-head"},s.createElement("h2",null,a)),s.createElement("div",{className:"modal-body"},F.map(e=>s.createElement("p",{className:"spacer-bottom",key:e},s.createElement("input",{checked:e===n,className:"spacer-right text-middle",id:"loglevel-".concat(e),name:"system.log_levels",onChange:this.handleLevelChange,type:"radio",value:e}),s.createElement("label",{className:"text-middle",htmlFor:"loglevel-".concat(e)},e))),s.createElement(d.a,{className:"spacer-top",variant:"info"},this.props.infoMsg),"INFO"!==n&&s.createElement(d.a,{className:"spacer-top",variant:"warning"},Object(f.l)("system.log_level.warning"))),s.createElement("div",{className:"modal-foot"},t&&s.createElement("i",{className:"spinner spacer-right"}),s.createElement(Le.i,{disabled:t,id:"set-log-level-submit"},Object(f.l)("save")),s.createElement(Le.h,{id:"set-log-level-cancel",onClick:this.props.onClose},Object(f.l)("cancel")))))}}var Ie=n(673),Ue=n(388),Fe=n(391),Pe=n(799),Me=n(372);class Be extends s.PureComponent{constructor(e){super(e),this.handleLogsLevelOpen=()=>{this.setState({openLogsLevelForm:!0})},this.handleLogsLevelChange=e=>{this.setState({logLevel:e}),this.props.onLogLevelChange(),this.handleLogsLevelClose()},this.handleLogsLevelClose=()=>{this.setState({openLogsLevelForm:!1})},this.removeElementFocus=e=>{e.currentTarget.blur()},this.state={logLevel:e.logLevel,openLogsLevelForm:!1}}componentWillReceiveProps(e){e.logLevel!==this.state.logLevel&&this.setState({logLevel:e.logLevel})}render(){const e=Object(Me.b)()+"/api/system/info",t=Object(Me.b)()+"/api/system/logs";return s.createElement("div",{className:"page-actions"},s.createElement("span",null,s.createElement("span",{className:"text-middle"},Object(f.l)("system.logs_level"),":",s.createElement("strong",{className:"little-spacer-left"},this.state.logLevel)),s.createElement(Le.f,{className:"spacer-left button-small",id:"edit-logs-level-button",onClick:this.handleLogsLevelOpen})),this.props.canDownloadLogs&&s.createElement(Ue.b,{className:"display-inline-block spacer-left",overlay:s.createElement("ul",{className:"menu"},s.createElement("li",null,s.createElement("a",{download:"sonarqube_app.log",href:t+"?process=app",id:"logs-link",rel:"noopener noreferrer",target:"_blank"},"Main Process")),s.createElement("li",null,s.createElement("a",{download:"sonarqube_ce.log",href:t+"?process=ce",id:"ce-logs-link",rel:"noopener noreferrer",target:"_blank"},"Compute Engine")),s.createElement("li",null,s.createElement("a",{download:"sonarqube_es.log",href:t+"?process=es",id:"es-logs-link",rel:"noopener noreferrer",target:"_blank"},"Search Engine")),s.createElement("li",null,s.createElement("a",{download:"sonarqube_web.log",href:t+"?process=web",id:"web-logs-link",rel:"noopener noreferrer",target:"_blank"},"Web Server")))},s.createElement(Le.a,null,Object(f.l)("system.download_logs"),s.createElement(Fe.a,{className:"little-spacer-left"}))),s.createElement("a",{className:"button spacer-left",download:"sonarqube-support-info-".concat(fe(this.props.serverId),".json"),href:e,id:"download-link",onClick:this.removeElementFocus,rel:"noopener noreferrer",target:"_blank"},Object(f.l)("system.download_system_info")),this.props.canRestart&&s.createElement(Ie.a.Consumer,null,e=>{let t=e.fetchSystemStatus,n=e.systemStatus;return s.createElement(Pe.a,{className:"spacer-left",fetchSystemStatus:t,systemStatus:n})}),this.state.openLogsLevelForm&&s.createElement(De,{infoMsg:Object(f.l)(this.props.cluster?"system.cluster_log_level.info":"system.log_level.info"),logLevel:this.state.logLevel,onChange:this.handleLogsLevelChange,onClose:this.handleLogsLevelClose}))}}var We=n(494),Te=n(13);function qe(e){const t=e.isCluster,n=e.loading,a=e.logLevel,r=e.serverId,o=e.showActions,l=e.version;return s.createElement("header",{className:"page-header"},s.createElement("h1",{className:"page-title"},Object(f.l)("system_info.page")),o&&s.createElement(Be,{canDownloadLogs:!t,canRestart:!t,cluster:t,logLevel:a,onLogLevelChange:e.onLogLevelChange,serverId:r}),n&&s.createElement("div",{className:"page-actions"},s.createElement("i",{className:"spinner"})),r&&l&&s.createElement("div",{className:"system-info-copy-paste-id-info boxed-group display-flex-center"},s.createElement("div",{className:"flex-1"},s.createElement("table",{className:"width-100"},s.createElement("tbody",null,s.createElement("tr",null,s.createElement("th",null,s.createElement("strong",null,Object(f.l)("system.server_id"))),s.createElement("td",null,r)),s.createElement("tr",null,s.createElement("th",null,s.createElement("strong",null,Object(f.l)("system.version"))),s.createElement("td",null,l))))),s.createElement(We.a,{className:"flex-0",copyValue:"SonarQube ID information\nServer ID: ".concat(r,"\nVersion: ").concat(l,"\nDate: ").concat(Object(Te.j)(Date.now()),"\n"),label:Object(f.l)("system.copy_id_info")})))}function He(e){let t=e.expandedCards,n=e.sysInfoData,a=e.toggleCard;return s.createElement(s.Fragment,null,s.createElement(je,{biggerHealth:!0,health:se(n),healthCauses:ae(n),name:"System",onClick:a,open:t.includes("System"),sysInfoData:ne(ge(n))}),m()(function(e){return{Web:C()(e,(e,t)=>t.startsWith(te)),"Compute Engine":C()(e,(e,t)=>t.startsWith(B)),"Search Engine":C()(e,(e,t)=>t.startsWith(Q))}}(n),(e,n)=>s.createElement(je,{key:n,name:n,onClick:a,open:t.includes(n),sysInfoData:ne(e)})))}var ze=n(359),Re=n(401);class Ae extends s.PureComponent{constructor(){super(...arguments),this.state={showMore:!1},this.toggleIntermediatVersions=()=>{this.setState(e=>({showMore:!e.showMore}))}}render(){const e=this.state.showMore,t=this.props.upgrades;return t.length<=0?null:s.createElement("div",{className:this.props.className},s.createElement(Le.c,{className:"little-spacer-bottom",onClick:this.toggleIntermediatVersions},e?Object(f.l)("system.hide_intermediate_versions"):Object(f.l)("system.show_intermediate_versions"),s.createElement(Fe.a,{className:"little-spacer-left",turned:e})),e&&t.map(e=>s.createElement("div",{className:"note system-upgrade-intermediate",key:e.version},s.createElement(Re.a,{date:e.releaseDate,long:!0},t=>s.createElement("p",null,s.createElement("b",{className:"little-spacer-right"},"SonarQube ",e.version),t,e.changeLogUrl&&s.createElement("a",{className:"spacer-left",href:e.changeLogUrl,rel:"noopener noreferrer",target:"_blank"},Object(f.l)("system.release_notes")))),s.createElement("p",{className:"little-spacer-top"},e.description))))}}function Je(e){let t=e.type,n=e.systemUpgrades;const a=n[0];return s.createElement("div",{className:"system-upgrade-version"},t&&s.createElement("h1",{className:"spacer-bottom"},s.createElement("strong",null,t)),s.createElement("p",null,s.createElement(ze.FormattedMessage,{defaultMessage:Object(f.l)("system.version_is_availble"),id:"system.version_is_availble",values:{version:s.createElement("b",null,"SonarQube ",a.version)}})),s.createElement("p",{className:"spacer-top"},a.description),s.createElement("div",{className:"big-spacer-top"},s.createElement(Re.a,{date:a.releaseDate,long:!0},e=>s.createElement("span",null,Object(f.m)("system.released_x",e))),a.changeLogUrl&&s.createElement("a",{className:"spacer-left",href:a.changeLogUrl,rel:"noopener noreferrer",target:"_blank"},Object(f.l)("system.release_notes"))),s.createElement(Ae,{className:"spacer-top",upgrades:n.slice(1)}),s.createElement("div",{className:"big-spacer-top"},s.createElement("a",{className:"button",download:"sonarqube-".concat(a.version,".zip"),href:a.downloadUrl,target:"blank"},Object(f.m)("system.download_x",a.version)),s.createElement("a",{className:"spacer-left",href:"https://redirect.sonarsource.com/doc/upgrading.html",target:"_blank"},Object(f.l)("system.how_to_upgrade"))))}class Ve extends s.PureComponent{constructor(){super(...arguments),this.state={upgrading:!1}}render(){const e=this.state.upgrading,t=this.props.systemUpgrades,n=Object(f.l)("system.system_upgrade");return s.createElement(ke.a,{contentLabel:n,onRequestClose:this.props.onClose},s.createElement("div",{className:"modal-head"},s.createElement("h2",null,n)),s.createElement("div",{className:"modal-body"},t.map((e,t)=>s.createElement(Je,{key:e[e.length-1].version,systemUpgrades:e,type:0===t?Object(f.l)("system.latest_version"):Object(f.l)("system.lts_version")}))),s.createElement("div",{className:"modal-foot"},e&&s.createElement("i",{className:"spinner spacer-right"}),s.createElement("a",{className:"pull-left",href:"https://www.sonarqube.org/downloads/",rel:"noopener noreferrer",target:"_blank"},Object(f.l)("system.see_sonarqube_downloads")),s.createElement(Le.h,{onClick:this.props.onClose},Object(f.l)("cancel"))))}}class Qe extends s.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={openSystemUpgradeForm:!1,systemUpgrades:[]},this.fetchSystemUpgrade=()=>Object(_e.d)().then(e=>{let t=e.upgrades;this.mounted&&this.setState({systemUpgrades:Ee(ye(t))})},()=>{}),this.handleOpenSystemUpgradeForm=()=>{this.setState({openSystemUpgradeForm:!0})},this.handleCloseSystemUpgradeForm=()=>{this.setState({openSystemUpgradeForm:!1})}}componentDidMount(){this.mounted=!0,this.fetchSystemUpgrade()}componentWillUnmount(){this.mounted=!1}render(){const e=this.state.systemUpgrades;return e.length<=0?null:s.createElement("div",{className:"page-notifs"},s.createElement(d.a,{variant:"info"},Object(f.l)("system.new_version_available"),s.createElement(Le.a,{className:"spacer-left",onClick:this.handleOpenSystemUpgradeForm},Object(f.l)("learn_more"))),this.state.openSystemUpgradeForm&&s.createElement(Ve,{onClose:this.handleCloseSystemUpgradeForm,systemUpgrades:e}))}}var Ge=n(389);n(1446);t.default=Object(a.withRouter)(class extends s.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!0},this.fetchSysInfo=()=>{this.setState({loading:!0}),Object(_e.b)().then(e=>{this.mounted&&this.setState({loading:!1,sysInfoData:e})},()=>{this.mounted&&this.setState({loading:!1})})},this.toggleSysInfoCards=e=>{const t=be(this.props.location.query);let n;n=t.expandedCards.includes(e)?t.expandedCards.filter(t=>t!==e):t.expandedCards.concat(e),this.updateQuery({expandedCards:n})},this.updateQuery=e=>{const t=ve(Object.assign({},be(this.props.location.query),e));this.props.router.replace({pathname:this.props.location.pathname,query:t})}}componentDidMount(){this.mounted=!0,this.fetchSysInfo()}componentWillUnmount(){this.mounted=!1}renderSysInfo(){const e=this.state.sysInfoData;if(!e)return null;const t=be(this.props.location.query);return le(e)?s.createElement(we,{expandedCards:t.expandedCards,sysInfoData:e,toggleCard:this.toggleSysInfoCards}):s.createElement(He,{expandedCards:t.expandedCards,sysInfoData:e,toggleCard:this.toggleSysInfoCards})}render(){const e=this.state,t=e.loading,n=e.sysInfoData;return s.createElement("div",{className:"page page-limited"},s.createElement(Ge.a,{suggestions:"system_info"}),s.createElement(o.a,{title:Object(f.l)("system_info.page")}),s.createElement(Qe,null),n&&s.createElement(qe,{isCluster:le(n),loading:t,logLevel:ue(n),onLogLevelChange:this.fetchSysInfo,serverId:ie(n),showActions:void 0!==n,version:le(n)?me(n):ce(n)}),this.renderSysInfo())}})},378:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var s=n(365),a=n(405),r=n(366);function o(e){return s.createElement(a,Object.assign({className:r("modal",{"modal-small":"small"===e.size,"modal-medium":"medium"===e.size,"modal-large":"large"===e.size}),isOpen:!0,overlayClassName:r("modal-overlay",{"modal-no-backdrop":e.noBackdrop})},e))}a.setAppElement("#content")},387:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var s=n(365),a=n(378),r=function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(s=Object.getOwnPropertySymbols(e);a<s.length;a++)t.indexOf(s[a])<0&&(n[s[a]]=e[s[a]])}return n};class o extends s.Component{constructor(){super(...arguments),this.mounted=!1,this.state={submitting:!1},this.stopSubmitting=()=>{this.mounted&&this.setState({submitting:!1})},this.handleCloseClick=e=>{e&&(e.preventDefault(),e.currentTarget.blur()),this.props.onClose()},this.handleFormSubmit=e=>{e.preventDefault(),this.submit()},this.handleSubmitClick=e=>{e&&(e.preventDefault(),e.currentTarget.blur()),this.submit()},this.submit=()=>{const e=this.props.onSubmit();e&&(this.setState({submitting:!0}),e.then(this.stopSubmitting,this.stopSubmitting))}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=this.props,t=e.children,n=e.header,o=e.onClose,l=(e.onSubmit,r(e,["children","header","onClose","onSubmit"]));return s.createElement(a.a,Object.assign({contentLabel:n,onRequestClose:o},l),t({onCloseClick:this.handleCloseClick,onFormSubmit:this.handleFormSubmit,onSubmitClick:this.handleSubmitClick,submitting:this.state.submitting}))}}},389:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var s=n(365),a=n(411);function r(e){let t=e.suggestions;return s.createElement(a.a.Consumer,null,e=>{let n=e.addSuggestions,a=e.removeSuggestions;return s.createElement(o,{addSuggestions:n,removeSuggestions:a,suggestions:t})})}class o extends s.PureComponent{componentDidMount(){this.props.addSuggestions(this.props.suggestions)}componentDidUpdate(e){e.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(e.suggestions))}componentWillUnmount(){this.props.removeSuggestions(this.props.suggestions)}render(){return null}}},396:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var s=n(365),a=n(387),r=n(375),o=n(367),l=n(0);class i extends s.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.handleSubmit=()=>{const e=this.props.onConfirm(this.props.confirmData);return e?e.then(this.props.onClose,()=>{}):void this.props.onClose()},this.renderModalContent=e=>{let t=e.onCloseClick,n=e.onFormSubmit,a=e.submitting;const i=this.props,c=i.children,m=i.confirmButtonText,u=i.confirmDisable,d=i.header,p=i.headerDescription,h=i.isDestructive,g=i.cancelButtonText,f=void 0===g?Object(l.l)("cancel"):g;return s.createElement("form",{onSubmit:n},s.createElement("header",{className:"modal-head"},s.createElement("h2",null,d),p),s.createElement("div",{className:"modal-body"},c),s.createElement("footer",{className:"modal-foot"},s.createElement(r.a,{className:"spacer-right",loading:a}),s.createElement(o.i,{autoFocus:!0,className:h?"button-red":void 0,disabled:a||u},m),s.createElement(o.h,{disabled:a,onClick:t},f)))}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=this.props,t={header:e.header,onClose:e.onClose,noBackdrop:e.noBackdrop,size:e.size};return s.createElement(a.a,Object.assign({onSubmit:this.handleSubmit},t),this.renderModalContent)}}},401:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"a",function(){return i});var s=n(365),a=n(359),r=n(13);const o={year:"numeric",month:"short",day:"2-digit"},l={year:"numeric",month:"long",day:"numeric"};function i(e){let t=e.children,n=e.date,i=e.long;return s.createElement(a.FormattedDate,Object.assign({value:Object(r.g)(n)},i?l:o),t)}},412:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var s=n(365),a=n(396),r=n(413),o=function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(s=Object.getOwnPropertySymbols(e);a<s.length;a++)t.indexOf(s[a])<0&&(n[s[a]]=e[s[a]])}return n};class l extends s.PureComponent{constructor(){super(...arguments),this.renderConfirmModal=e=>{let t=e.onClose;const n=this.props,r=(n.children,n.modalBody),l=n.modalHeader,i=n.modalHeaderDescription,c=o(n,["children","modalBody","modalHeader","modalHeaderDescription"]);return s.createElement(a.a,Object.assign({header:l,headerDescription:i,onClose:t},c),r)}}render(){return s.createElement(r.a,{modal:this.renderConfirmModal},this.props.children)}}},413:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var s=n(365);class a extends s.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={modal:!1},this.handleButtonClick=()=>{this.setState({modal:!0})},this.handleFormSubmit=e=>{e&&e.preventDefault(),this.setState({modal:!0})},this.handleCloseModal=()=>{this.mounted&&this.setState({modal:!1})}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){return s.createElement(s.Fragment,null,this.props.children({onClick:this.handleButtonClick,onFormSubmit:this.handleFormSubmit}),this.state.modal&&this.props.modal({onClose:this.handleCloseModal}))}}},483:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var s=n(365),a=n(370);function r(e){let t=e.className,n=e.fill,r=void 0===n?"currentColor":n,o=e.size;return s.createElement(a.a,{className:t,size:o},s.createElement("path",{d:"M7.72 11.596L3.119 6.992A.382.382 0 0 1 3 6.713c0-.108.04-.2.118-.279l1.03-1.03a.382.382 0 0 1 .278-.117c.108 0 .201.04.28.117L8 8.7l3.294-3.295a.382.382 0 0 1 .28-.117c.108 0 .2.04.279.117l1.03 1.03a.382.382 0 0 1 .117.28c0 .107-.04.2-.118.278L8.28 11.596a.382.382 0 0 1-.279.117.382.382 0 0 1-.28-.117z",style:{fill:r}}))}},494:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var s=n(365),a=n(366),r=n(538),o=n(374),l=n(367),i=n(0);class c extends s.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={tooltipShown:!1},this.showTooltip=()=>{this.mounted&&(this.setState({tooltipShown:!0}),setTimeout(()=>{this.mounted&&this.setState({tooltipShown:!1})},1e3))}}componentDidMount(){this.mounted=!0,this.copyButton&&(this.clipboard=new r(this.copyButton),this.clipboard.on("success",this.showTooltip))}componentDidUpdate(){this.clipboard&&this.clipboard.destroy(),this.copyButton&&(this.clipboard=new r(this.copyButton),this.clipboard.on("success",this.showTooltip))}componentWillUnmount(){this.mounted=!1,this.clipboard&&this.clipboard.destroy()}render(){return s.createElement(o.a,{overlay:Object(i.l)("copied_action"),visible:this.state.tooltipShown},s.createElement(l.a,{className:a("no-select",this.props.className),"data-clipboard-text":this.props.copyValue,innerRef:e=>this.copyButton=e},this.props.label?this.props.label:Object(i.l)("copy")))}}},496:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var s=n(365),a=n(483),r=n(504),o=function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(s=Object.getOwnPropertySymbols(e);a<s.length;a++)t.indexOf(s[a])<0&&(n[s[a]]=e[s[a]])}return n};function l(e){var t=e.open,n=o(e,["open"]);return t?s.createElement(a.a,Object.assign({},n)):s.createElement(r.a,Object.assign({},n))}},531:function(e,t,n){"use strict";n.d(t,"g",function(){return r}),n.d(t,"b",function(){return o}),n.d(t,"c",function(){return l}),n.d(t,"d",function(){return i}),n.d(t,"a",function(){return c}),n.d(t,"e",function(){return m}),n.d(t,"f",function(){return u}),n.d(t,"h",function(){return d});var s=n(4),a=n(383);function r(e){return Object(s.post)("/api/system/change_log_level",{level:e}).catch(a.a)}function o(){return Object(s.getJSON)("/api/system/info").catch(a.a)}function l(){return Object(s.getJSON)("/api/system/status")}function i(){return Object(s.getJSON)("/api/system/upgrades")}function c(){return Object(s.getJSON)("/api/system/db_migration_status")}function m(){return Object(s.postJSON)("/api/system/migrate_db")}function u(){return Object(s.post)("/api/system/restart").catch(a.a)}function d(){return Object(s.requestTryAndRepeatUntil)(l,{max:-1,slowThreshold:-15},e=>{return"UP"===e.status})}},673:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"c",function(){return r});var s=n(365);const a={installing:[],removing:[],updating:[]},r="UP",o=s.createContext({fetchSystemStatus:()=>{},fetchPendingPlugins:()=>{},pendingPlugins:a,systemStatus:r});t.a=o},799:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var s=n(365),a=n(366),r=n(412),o=n(0),l=n(531),i=n(367);class c extends s.PureComponent{constructor(){super(...arguments),this.handleConfirm=()=>Object(l.f)().then(this.props.fetchSystemStatus)}render(){const e=this.props,t=e.className,n=e.systemStatus;return s.createElement(r.a,{confirmButtonText:Object(o.l)("restart"),modalBody:s.createElement(s.Fragment,null,s.createElement("p",{className:"spacer-top spacer-bottom"},Object(o.l)("system.are_you_sure_to_restart")),s.createElement("p",null,Object(o.l)("system.forcing_shutdown_not_recommended"))),modalHeader:Object(o.l)("system.restart_server"),onConfirm:this.handleConfirm},e=>{let r=e.onClick;return s.createElement(i.a,{className:a("button-red",t),disabled:"UP"!==n,onClick:r},"RESTARTING"===n?Object(o.l)("system.restart_in_progress"):Object(o.l)("system.restart_server"))})}}},881:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var s=n(365),a=n(366),r=n(496);class o extends s.PureComponent{constructor(){super(...arguments),this.state={hoveringInner:!1},this.handleClick=()=>{this.props.onClick(this.props.data)},this.onDetailEnter=()=>{this.setState({hoveringInner:!0})},this.onDetailLeave=()=>{this.setState({hoveringInner:!1})}}render(){const e=this.props,t=e.className,n=e.open,o=e.renderHeader,l=e.title;return s.createElement("div",{className:a("boxed-group boxed-group-accordion",t,{"no-hover":this.state.hoveringInner})},s.createElement("div",{className:"boxed-group-header",onClick:this.handleClick,role:"listitem"},s.createElement("span",{className:"boxed-group-accordion-title"},s.createElement(r.a,{className:"little-spacer-right",open:n}),l),o&&o()),n&&s.createElement("div",{className:"boxed-group-inner",onMouseEnter:this.onDetailEnter,onMouseLeave:this.onDetailLeave},this.props.children))}}}}]);
//# sourceMappingURL=293.m.1d4fb7ad.chunk.js.map