(self.webpackChunkmachine_learning_notes=self.webpackChunkmachine_learning_notes||[]).push([[13],{5601:function(e,t,a){"use strict";a.d(t,{Z:function(){return g}});var n=a(7294),r=a(6010),l=a(6742),s="sidebar_2ahu",i="sidebarItemTitle_2hhb",c="sidebarItemList_2xAf",m="sidebarItem_2UVv",u="sidebarItemLink_1RT6",o="sidebarItemLinkActive_12pM";function g(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("div",{className:(0,r.Z)(s,"thin-scrollbar")},n.createElement("h3",{className:i},t.title),n.createElement("ul",{className:c},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:m},n.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:o},e.title))}))))}},94:function(e,t,a){"use strict";a.r(t);var n=a(7294),r=a(2611),l=a(6742),s=a(5601),i=a(4973),c=a(6700);t.default=function(e){var t=e.tags,a=e.sidebar,m={};Object.keys(t).forEach((function(e){var t=function(e){return e[0].toUpperCase()}(e);m[t]=m[t]||[],m[t].push(e)}));var u=Object.entries(m).sort((function(e,t){var a=e[0],n=t[0];return a===n?0:a>n?1:-1})).map((function(e){var a=e[0],r=e[1];return n.createElement("div",{key:a},n.createElement("h3",null,a),r.map((function(e){return n.createElement(l.Z,{className:"padding-right--md",href:t[e].permalink,key:e},t[e].name," (",t[e].count,")")})),n.createElement("hr",null))})).filter((function(e){return null!=e}));return n.createElement(r.Z,{title:"Tags",description:"Blog Tags",wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"}},n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--3"},n.createElement(s.Z,{sidebar:a})),n.createElement("main",{className:"col col--7"},n.createElement("h1",null,n.createElement(i.Z,{id:"theme.tags.tagsPageTitle",description:"The title of the tag list page"},"Tags")),n.createElement("div",{className:"margin-vert--lg"},u)))))}}}]);