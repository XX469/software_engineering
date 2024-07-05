(window.webpackJsonp=window.webpackJsonp||[]).push([[354],{2045:function(e,t,n){"use strict";n.r(t);var r,o=n(695),a=n(701),c=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.render=function(){var e=window.SonarGovernance.CreateForm;return o.createElement(e,i({},this.props))},t}(o.Component),u=n(717),s=n(700);function f(e){var t=e.className,n=e.fill,r=void 0===n?"currentColor":n,a=e.size;return o.createElement(s.a,{className:t,size:a},o.createElement("path",{d:"M1,7L7,7L7,1L9,1L9,7L15,7L15,9L9,9L9,15L7,15L7,9L1,9L1,7Z",style:{fill:r}}))}var p=n(899),h=n(769),d=n(28),m=n(110),b=n(702),y=n(722);n.d(t,"GlobalNavPlus",function(){return j});var v=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),j=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={createPortfolio:!1,governanceReady:!1},t.handleNewProjectClick=function(e){e.preventDefault(),t.props.openProjectOnboarding()},t.openCreatePortfolioForm=function(){t.setState({createPortfolio:!0})},t.closeCreatePortfolioForm=function(){t.setState({createPortfolio:!1})},t.handleNewPortfolioClick=function(e){e.preventDefault(),e.currentTarget.blur(),t.openCreatePortfolioForm()},t.handleCreatePortfolio=function(e){var n=e.key,r=e.qualifier;return Object(p.a)({component:n}).then(function(e){e.configuration&&e.configuration.extensions&&e.configuration.extensions.find(function(e){return"governance/console"===e.key})?t.props.router.push(Object(b.t)(n,r)):t.props.router.push(Object(b.u)(n)),t.closeCreatePortfolioForm()})},t}return v(t,e),t.prototype.componentDidMount=function(){var e=this;this.mounted=!0,this.props.appState.qualifiers.includes("VW")&&Object(h.a)("governance/console").then(function(){e.mounted&&e.setState({governanceReady:!0})},function(){})},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.renderCreateProject=function(e){return e?o.createElement("li",null,o.createElement("a",{className:"js-new-project",href:"#",onClick:this.handleNewProjectClick},Object(m.isSonarCloud)()?Object(d.l)("provisioning.analyze_new_project"):Object(d.l)("my_account.create_new.TRK"))):null},t.prototype.renderCreateOrganization=function(e){return e?o.createElement("li",null,o.createElement(a.Link,{className:"js-new-organization",to:"/create-organization"},Object(d.l)("my_account.create_new_organization"))):null},t.prototype.renderCreatePortfolio=function(e,t){return this.props.appState.qualifiers.includes("VW")&&e?o.createElement("li",null,o.createElement("a",{className:"js-new-portfolio",href:"#",onClick:this.handleNewPortfolioClick},t?Object(d.l)("my_account.create_new",t):Object(d.l)("my_account.create_new_portfolio_application"))):null},t.prototype.render=function(){var e,t=this.props.currentUser,n=Object(y.a)(t,"applicationcreator"),r=Object(m.isSonarCloud)(),a=Object(y.a)(t,"portfoliocreator"),c=Object(m.isSonarCloud)()||Object(y.a)(t,"provisioning");return c||n||a||r?(n?a||(e="APP"):e="VW",o.createElement(o.Fragment,null,o.createElement(u.b,{overlay:o.createElement("ul",{className:"menu"},this.renderCreateProject(c),this.renderCreateOrganization(r),this.renderCreatePortfolio(n||a,e)),tagName:"li"},o.createElement("a",{className:"navbar-icon navbar-plus",href:"#",title:Object(m.isSonarCloud)()?Object(d.l)("my_account.create_new_project_or_organization"):Object(d.l)("my_account.create_new_project_portfolio_or_application")},o.createElement(f,null))),this.state.governanceReady&&this.state.createPortfolio&&o.createElement(l,{defaultQualifier:e,onClose:this.closeCreatePortfolioForm,onCreate:this.handleCreatePortfolio}))):null},t}(o.PureComponent);t.default=Object(a.withRouter)(j)},769:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"a",function(){return u});var r=n(702),o=n(83),a=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function c(e){try{l(r.next(e))}catch(e){a(e)}}function i(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(c,i)}l((r=r.apply(e,t||[])).next())})},c=function(e,t){var n,r,o,a,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++,r=a[1],a=[0];continue;case 7:a=c.ops.pop(),c.trys.pop();continue;default:if(!(o=(o=c.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){c=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){c.label=a[1];break}if(6===a[0]&&c.label<o[1]){c.label=o[1],o=a;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(a);break}o[2]&&c.ops.pop(),c.trys.pop();continue}a=t.call(e,c)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}},i=!1;function l(e,t){return void 0===t&&(t="body"),new Promise(function(n){var o=document.createElement("script");o.src=""+Object(r.b)()+e,o.onload=n,document.getElementsByTagName(t)[0].appendChild(o)})}function u(e){return a(this,void 0,void 0,function(){var t,r;return c(this,function(a){switch(a.label){case 0:return(t=Object(o.a)(e))?[2,Promise.resolve(t)]:i?[3,2]:[4,Promise.all([n.e(0),n.e(1),n.e(3),n.e(15),n.e(286)]).then(n.bind(null,913))];case 1:(0,a.sent().default)(),i=!0,a.label=2;case 2:return[4,l("/static/"+e+".js")];case 3:return a.sent(),(r=Object(o.a)(e))?[2,r]:[2,Promise.reject()]}})})}},899:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return c}),n.d(t,"c",function(){return i});var r=n(38),o=n(713);function a(e){return Object(r.getJSON)("/api/navigation/component",e).catch(o.a)}function c(){return Object(r.getJSON)("/api/navigation/marketplace").catch(o.a)}function i(){return Object(r.getJSON)("/api/navigation/settings").catch(o.a)}}}]);
//# sourceMappingURL=354.1605082598434.chunk.js.map