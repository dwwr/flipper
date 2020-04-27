(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{227:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return l})),r.d(n,"rightToc",(function(){return c})),r.d(n,"default",(function(){return u}));var t=r(1),a=r(11),i=(r(0),r(233)),o={id:"images-plugin",title:"Images Setup",sidebar_label:"Images"},l={id:"setup/images-plugin",title:"Images Setup",description:"Currently, the images plugin only supports [Fresco](https://frescolib.org/) for Android as backend, but just like the network plugin, support for other image loading libraries",source:"@site/../docs/setup/images-plugin.mdx",permalink:"/docs/setup/images-plugin",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/setup/images-plugin.mdx",sidebar_label:"Images",sidebar:"setup",previous:{title:"Databases Plugin Setup",permalink:"/docs/setup/databases-plugin"},next:{title:"Sandbox Setup",permalink:"/docs/setup/sandbox-plugin"}},c=[{value:"Fresco and Android",id:"fresco-and-android",children:[{value:"Leak Tracking",id:"leak-tracking",children:[]},{value:"Attribution",id:"attribution",children:[]}]}],p={rightToc:c};function u(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},p,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Currently, the images plugin only supports ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://frescolib.org/"}),"Fresco")," for Android as backend, but just like the network plugin, support for other image loading libraries\ncould easily be added. Send us a PR!"),Object(i.b)("h2",{id:"fresco-and-android"},"Fresco and Android"),Object(i.b)("p",null,"The Fresco images plugin is shipped as a separate Maven artifact:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-groovy"}),"dependencies {\n  debugImplementation 'com.facebook.flipper:flipper-fresco-plugin:0.30.1'\n}\n")),Object(i.b)("p",null,"After including the plugin in your dependencies, you can add it to the\nclient:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"import com.facebook.flipper.plugins.fresco.FrescoFlipperPlugin;\n\nclient.addPlugin(new FrescoFlipperPlugin());\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"FrescoFlipperPlugin")," constructor offers a whole lot of configuration options which\ncan be useful if you have an advanced setup of Fresco in your application:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"FrescoFlipperPlugin(\n      DebugImageTracker imageTracker,\n      PlatformBitmapFactory bitmapFactory,\n      @Nullable FlipperObjectHelper flipperObjectHelper,\n      DebugMemoryManager memoryManager,\n      FlipperPerfLogger perfLogger,\n      @Nullable FrescoFlipperDebugPrefHelper debugPrefHelper,\n      @Nullable CloseableReferenceLeakTracker closeableReferenceLeakTracker) { ... }\n")),Object(i.b)("h3",{id:"leak-tracking"},"Leak Tracking"),Object(i.b)("p",null,"The Flipper plugin can help you track down ",Object(i.b)("inlineCode",{parentName:"p"},"CloseableReferences")," who have not had\n",Object(i.b)("inlineCode",{parentName:"p"},"close()")," called on them. This can have a negative impact on the performance of\nyour application."),Object(i.b)("p",null,"To enable this functionality, you need to create a ",Object(i.b)("inlineCode",{parentName:"p"},"CloseableReferenceLeakTracker"),"\nand set it in both your ",Object(i.b)("inlineCode",{parentName:"p"},"ImagePipelineConfig")," for Fresco and the ",Object(i.b)("inlineCode",{parentName:"p"},"FrescoPluginPlugin"),"\non creation."),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"import com.facebook.imagepipeline.debug.FlipperCloseableReferenceLeakTracker;\n\n// ...\n\nFlipperCloseableReferenceLeakTracker leakTracker = new FlipperCloseableReferenceLeakTracker();\n\nnew ImagePipelineConfig.Builder()\n    // ...\n    .setCloseableReferenceLeakTracker(leakTracker)\n    .build();\n\n\nclient.addPlugin(new FrescoFlipperPlugin(\n    new FlipperImageTracker(),\n    Fresco.getImagePipelineFactory().getPlatformBitmapFactory(),\n    null,\n    new NoOpDebugMemoryManager(),\n    new NoOpFlipperPerfLogger(),\n    null,\n    leakTracker));\n")),Object(i.b)("h3",{id:"attribution"},"Attribution"),Object(i.b)("p",null,"In order to annotate images with the context they are used in, you have to set a\ncaller context when loading the image. This can be any object, so for the simplest\ncase, a String will suffice."),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),'String callerContext = "my_feature";\n\n// For DraweeViews:\ndraweeView.setImageURI(uri, callerContext);\n\n// For prefetching:\nImagePipeline imagePipeline = Fresco.getImagePipeline();\nimagePipeline.prefetchToDiskCache(imageRequest, callerContext);\n\n// For manually fetching an image:\nDataSource<CloseableReference<CloseableImage>>\n    dataSource = imagePipeline.fetchDecodedImage(imageRequest, callerContext);\n')),Object(i.b)("p",null,"If a caller context is supplied, the image will be properly attributed in the\nFlipper image plugin."))}u.isMDXComponent=!0},233:function(e,n,r){"use strict";r.d(n,"a",(function(){return s})),r.d(n,"b",(function(){return d}));var t=r(0),a=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var n=a.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):l({},n,{},e)),r},s=function(e){var n=u(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},g=Object(t.forwardRef)((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),g=t,d=s["".concat(o,".").concat(g)]||s[g]||b[g]||i;return r?a.a.createElement(d,l({ref:n},p,{components:r})):a.a.createElement(d,l({ref:n},p))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,o=new Array(i);o[0]=g;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"}}]);