(window.webpackJsonp=window.webpackJsonp||[]).push([[351],{1975:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return m}),n.d(t,"isUnread",function(){return d}),n.d(t,"Notification",function(){return f}),n.d(t,"Feature",function(){return p});var a=n(695),r=n(696),o=n(729),c=n(707),i=n(709),l=n(697),s=n(109),u=n(28);function m(e){var t=e.loading,n=e.loadingMore,r=e.news,o=e.notificationsLastReadDate,s=e.paging;return a.createElement(i.a,{onRequestClose:e.onClose},a.createElement("div",{className:"notifications-sidebar"},a.createElement("div",{className:"notifications-sidebar-top"},a.createElement("h3",null,Object(u.l)("embed_docs.whats_new")),a.createElement(l.d,{className:"button-tiny",iconProps:{size:12,thin:!0},onClick:e.onClose})),a.createElement("div",{className:"notifications-sidebar-content"},t?a.createElement("div",{className:"text-center"},a.createElement(c.a,{className:"big-spacer-top",timeout:200})):r.map(function(e,t){return a.createElement(f,{key:e.publicationDate,notification:e,unread:d(t,e.publicationDate,o)})})),!t&&s&&s.total>r.length&&a.createElement("div",{className:"notifications-sidebar-footer"},a.createElement("div",{className:"spacer-top note text-center"},a.createElement("a",{className:"spacer-left",href:"#",onClick:e.fetchMoreFeatureNews},Object(u.l)("show_more")),n&&a.createElement(c.a,{className:"text-bottom spacer-left position-absolute"})))))}function d(e,t,n){return n?Object(s.c)(t,n)>0:e<1}function f(e){var t=e.notification,n=e.unread;return a.createElement("div",{className:r("notifications-sidebar-slice",{unread:n})},a.createElement("h4",null,a.createElement(o.a,{date:t.publicationDate,long:!1})),t.features.map(function(e,t){return a.createElement(p,{feature:e,key:t})}))}function p(e){var t=e.feature;return a.createElement("div",{className:"feature"},a.createElement("ul",{className:"categories spacer-bottom"},t.categories.map(function(e){return a.createElement("li",{key:e.name,style:{backgroundColor:e.color}},e.name)})),a.createElement("span",null,t.description),t.readMore&&a.createElement("a",{className:"learn-more",href:t.readMore,rel:"noopener noreferrer nofollow",target:"_blank"},Object(u.l)("learn_more")))}},709:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(695),r=n(740),o=n(696),c=function(){return(c=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function i(e){return a.createElement(r,c({className:o("modal",{"modal-small":"small"===e.size,"modal-medium":"medium"===e.size,"modal-large":"large"===e.size}),isOpen:!0,overlayClassName:o("modal-overlay",{"modal-no-backdrop":e.noBackdrop})},e))}r.setAppElement("#content")},729:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"a",function(){return s});var a=n(695),r=n(689),o=n(109),c=function(){return(c=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},i={year:"numeric",month:"short",day:"2-digit"},l={year:"numeric",month:"long",day:"numeric"};function s(e){var t=e.children,n=e.date,s=e.long;return a.createElement(r.FormattedDate,c({value:Object(o.g)(n)},s?l:i),t)}},829:function(e,t,n){var a;
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
!function(){"use strict";var r=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:r,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen};void 0===(a=function(){return o}.call(t,n,t,e))||(e.exports=a)}()}}]);
//# sourceMappingURL=351.1605082598434.chunk.js.map