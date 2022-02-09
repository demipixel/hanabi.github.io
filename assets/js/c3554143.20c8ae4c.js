"use strict";(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[4977],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8375:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],l={id:"dual-color-6-suits",title:"Dual-Color (6 Suits)"},c=void 0,u={unversionedId:"variant-specific/dual-color-6-suits",id:"variant-specific/dual-color-6-suits",title:"Dual-Color (6 Suits)",description:'These conventions apply to the "Dual-Color (6 Suits)" variant.',source:"@site/docs/variant-specific/dual-color-6-suits.md",sourceDirName:"variant-specific",slug:"/variant-specific/dual-color-6-suits",permalink:"/docs/variant-specific/dual-color-6-suits",editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/variant-specific/dual-color-6-suits.md",tags:[],version:"current",frontMatter:{id:"dual-color-6-suits",title:"Dual-Color (6 Suits)"},sidebar:"mainSidebar",previous:{title:"Dual-Color (3 Suits)",permalink:"/docs/variant-specific/dual-color-3-suits"},next:{title:"Duck",permalink:"/docs/variant-specific/duck"}},s=[{value:"The Negative Prompt",id:"the-negative-prompt",children:[],level:3},{value:"Order Chop Move Change",id:"order-chop-move-change",children:[],level:3}],p={toc:s};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'These conventions apply to the "Dual-Color (6 Suits)" variant.'),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"the-negative-prompt"},"The Negative Prompt"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In this variant, since negative color information conveys just as much information as positive color information, you should include that when deciding which card to play into a ",(0,o.kt)("em",{parentName:"li"},"Prompt"),"."),(0,o.kt)("li",{parentName:"ul"},"For example:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Alice has a red card in slot 1 and a red card in slot 2."),(0,o.kt)("li",{parentName:"ul"},"Alice is ",(0,o.kt)("em",{parentName:"li"},"Prompted")," for a mahogany 2. (Mahogany is composed of red and black.)"),(0,o.kt)("li",{parentName:"ul"},"Normally, Alice would play slot 1, since ",(0,o.kt)("em",{parentName:"li"},"Prompts")," promise the left-most card."),(0,o.kt)("li",{parentName:"ul"},"However, Alice's slot 1 card has no negative clues, and her slot 2 card has a negative yellow clue."),(0,o.kt)("li",{parentName:"ul"},"Thus, this is a ",(0,o.kt)("em",{parentName:"li"},"Negative Prompt")," and Alice plays slot 2 instead of slot 1.")))),(0,o.kt)("h3",{id:"order-chop-move-change"},"Order Chop Move Change"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Normally, ",(0,o.kt)("em",{parentName:"li"},"Order Chop Moves"),', are "turned off" when two different 1\'s have different positive clues on them.',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'For example, Order Chop Moves would be "turned off" in the situation where Alice has one 1 has a positive 1 clue on it, and Alice has another 1 with a positive 1 clue on it and a positive red clue on it.'))),(0,o.kt)("li",{parentName:"ul"},'In the "Dual Color (6 Suit)" variant, ',(0,o.kt)("em",{parentName:"li"},"Order Chop Moves")," are never turned off when there are two different 1's, regardless of different positive or negative color clues on them."),(0,o.kt)("li",{parentName:"ul"},'The only exception is when the exact identity of the 1 is known (e.g. from being completely "filled in"). In this situation, ',(0,o.kt)("em",{parentName:"li"},"Order Chop Moves")," are turned off.")))}d.isMDXComponent=!0}}]);