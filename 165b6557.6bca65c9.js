(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var i=n(1),a=n(11),r=(n(0),n(233)),o=n(235),l={id:"ios",title:"Building an iOS Plugin"},c={id:"tutorial/ios",title:"Building an iOS Plugin",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/../docs/tutorial/ios.mdx",permalink:"/docs/tutorial/ios",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/tutorial/ios.mdx",sidebar:"extending",previous:{title:"Intro",permalink:"/docs/tutorial/intro"},next:{title:"Building an Android Plugin",permalink:"/docs/tutorial/android"}},s=[{value:"Creating a Plugin",id:"creating-a-plugin",children:[]},{value:"Registering your Plugin",id:"registering-your-plugin",children:[]},{value:"What next",id:"what-next",children:[]}],p={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("img",{alt:"iOS Tutorial App",src:Object(o.a)("img/ios-tutorial-app.png")}),Object(r.b)("p",null,"For the purpose of the tutorial, we will assume you already have an existing iOS application in\nwhich you have a feed or list of items. As the Flipper team, we obviously concern ourselves mostly\nwith sea mammals, so this is what our app displays. The actual display logic is not what's interesting\nhere, but how we can make this data available in our Flipper desktop app."),Object(r.b)("p",null,"You can find the source code of the project ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/facebook/flipper/tree/c55bebd1be545c63dde93e143dd5c341dc2fd20b/iOS/Tutorial/Tutorial"}),"on GitHub"),"."),Object(r.b)("h2",{id:"creating-a-plugin"},"Creating a Plugin"),Object(r.b)("p",null,"On iOS, a Flipper plugin is a class that implements the\n",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/facebook/flipper/blob/master/iOS/FlipperKit/FlipperPlugin.h"}),Object(r.b)("inlineCode",{parentName:"a"},"FlipperPlugin")),"\ninterface."),Object(r.b)("p",null,"The interface is rather small and only comprises four methods:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"(NSString *)identifier"),": Specify a unique string so the JavaScript side knows where to talk to. This must match the name attribute in the ",Object(r.b)("inlineCode",{parentName:"li"},"package.json")," we will look into later in this tutorial."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"(void)didConnect:(id<FlipperConnection>)connection"),": This method is called when the desktop client connects and is ready to receive or send data."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"(void)didDisconnect"),": We're sure you can figure this one out."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"(BOOL)runInBackground"),": Unless this is true, only the currently selected plugin in the Flipper UI can communicate with the device. Its an optional method which you can override. Default value used is ",Object(r.b)("inlineCode",{parentName:"li"},"false"),".")),Object(r.b)("p",null,"Let's implement these methods for our sealife app:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-swift"}),'import Foundation\nimport FlipperKit\n\nclass SeaMammalsPlugin: NSObject, FlipperPlugin {\n  var connection: FlipperConnection? = nil\n  let mammals: [MarineMammal]\n\n  init(_ marineMammals: [MarineMammal]) {\n      mammals = marineMammals\n  }\n\n  func identifier() -> String! {\n    return "sea-mammals"\n  }\n\n  func didConnect(_ connection: FlipperConnection!) {\n    self.connection = connection\n    for (index, mammal) in mammals.enumerated() {\n      connection.send("newRow", withParams: ["id": index, "title": mammal.name, "url": mammal.image.absoluteString])\n    }\n  }\n\n  func didDisconnect() {\n    connection = nil;\n  }\n}\n')),Object(r.b)("p",null,"The two interesting bits here are ",Object(r.b)("inlineCode",{parentName:"p"},"didConnect")," and ",Object(r.b)("inlineCode",{parentName:"p"},"connection.send"),". ",Object(r.b)("inlineCode",{parentName:"p"},"connection.send"),' sends a message\nto the desktop app and is identified with the name "newRow".'),Object(r.b)("p",null,"For our sample app, we're dealing with a static data source. However, in real\nlife, you will likely dynamically receive new data as the user interacts with\nthe app. So while we just send all the data we have at once in ",Object(r.b)("inlineCode",{parentName:"p"},"didConnect"),",\nyou would normally set up a listener here to instead call ",Object(r.b)("inlineCode",{parentName:"p"},'connection.send("newRow", params)')," as new data\narrives. ",Object(r.b)("inlineCode",{parentName:"p"},"params")," are nothing but a dictionary which contains the data which you want to send over the wire to the desktop app."),Object(r.b)("h2",{id:"registering-your-plugin"},"Registering your Plugin"),Object(r.b)("p",null,"Now all you need to do is let Flipper know about your new plugin. You do this\nby calling ",Object(r.b)("inlineCode",{parentName:"p"},"add")," on your ",Object(r.b)("inlineCode",{parentName:"p"},"FlipperClient"),", which is normally created\nat application startup."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-swift"}),"let client = FlipperClient.shared()\n// Add all sorts of other amazing plugins here ...\nclient?.add(SeaMammalsPlugin(MarineMammal.defaultList))\nclient?.start()\n")),Object(r.b)("h2",{id:"what-next"},"What next"),Object(r.b)("p",null,'When starting your application now, Flipper will tell the desktop application\nabout the plugin it supports, including "sea-mammals" and will look for a\ncorresponding JavaScript plugin by that name. Before building it\'s JavaScript counterpart, first lets build a Flipper Plugin in Android.'))}u.isMDXComponent=!0},233:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,b=u["".concat(o,".").concat(m)]||u[m]||d[m]||r;return n?a.a.createElement(b,l({ref:t},s,{components:n})):a.a.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},234:function(e,t,n){"use strict";var i=n(0),a=n(56);t.a=function(){return Object(i.useContext)(a.a)}},235:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(236);var i=n(234);function a(e){var t=(Object(i.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},236:function(e,t,n){"use strict";var i=n(5),a=n(15),r=n(237),o="".startsWith;i(i.P+i.F*n(238)("startsWith"),"String",{startsWith:function(e){var t=r(this,e,"startsWith"),n=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),i=String(e);return o?o.call(t,i,n):t.slice(n,n+i.length)===i}})},237:function(e,t,n){var i=n(80),a=n(22);e.exports=function(e,t,n){if(i(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(e))}},238:function(e,t,n){var i=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[i]=!1,!"/./"[e](t)}catch(a){}}return!0}}}]);