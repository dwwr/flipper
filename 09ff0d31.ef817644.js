(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{154:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return l})),t.d(r,"default",(function(){return u}));var n=t(1),a=t(11),o=(t(0),t(233)),i={id:"leak-canary-plugin",title:"LeakCanary"},c={id:"features/leak-canary-plugin",title:"LeakCanary",description:"\u2192 [See setup instructions for the LeakCanary](setup/leak-canary-plugin)",source:"@site/../docs/features/leak-canary-plugin.mdx",permalink:"/docs/features/leak-canary-plugin",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/features/leak-canary-plugin.mdx",sidebar:"features",previous:{title:"Shared Preferences",permalink:"/docs/features/shared-preferences-plugin"},next:{title:"Crash Reporter",permalink:"/docs/features/crash-reporter-plugin"}},l=[],p={rightToc:l};function u(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u2192 ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"setup/leak-canary-plugin"}),"See setup instructions for the LeakCanary")),Object(o.b)("p",null,"The LeakCanary plugin provides developers with Flipper support for ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/square/leakcanary"}),"LeakCanary"),", an open source memory leak detection library."),Object(o.b)("p",null,"Leaks detected by LeakCanary will appear automatically in Flipper. Each leak will display a hierarchy of objects, beginning from the garbage collector root and ending at the leaked class.\nSelecting any object in this list will display contents of the object's various fields."),Object(o.b)("p",null,"Note: this plugin is only available for Android."))}u.isMDXComponent=!0},233:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return y}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),u=function(e){var r=a.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c({},r,{},e)),t},s=function(e){var r=u(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),b=n,y=s["".concat(i,".").concat(b)]||s[b]||f[b]||o;return t?a.a.createElement(y,c({ref:r},p,{components:t})):a.a.createElement(y,c({ref:r},p))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=b;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);