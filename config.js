System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "stage": 0,
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "dist/bundle.js": [
      "app.js",
      "npm:react@0.14.7",
      "npm:react-dom@0.14.7",
      "npm:react-router@2.0.0-rc5",
      "containers/App.js",
      "containers/HomePage.js",
      "stylesheets/main.css!github:systemjs/plugin-css@0.1.20",
      "github:twbs/bootstrap@3.3.6/css/bootstrap.css!github:systemjs/plugin-css@0.1.20",
      "npm:font-awesome@4.5.0/css/font-awesome.css!github:systemjs/plugin-css@0.1.20",
      "npm:babel-runtime@5.8.35/helpers/class-call-check",
      "npm:react@0.14.7/react",
      "npm:react-router@2.0.0-rc5/lib/index",
      "npm:babel-runtime@5.8.35/helpers/get",
      "npm:babel-runtime@5.8.35/helpers/inherits",
      "npm:babel-runtime@5.8.35/helpers/create-class",
      "npm:react-dom@0.14.7/index",
      "containers/MainHeader.js",
      "containers/MainBody.js",
      "containers/MainFooter.js",
      "npm:react@0.14.7/lib/React",
      "npm:react-router@2.0.0-rc5/lib/IndexLink",
      "npm:react-router@2.0.0-rc5/lib/Link",
      "npm:react-router@2.0.0-rc5/lib/IndexRedirect",
      "npm:react-router@2.0.0-rc5/lib/IndexRoute",
      "npm:react-router@2.0.0-rc5/lib/Redirect",
      "npm:react-router@2.0.0-rc5/lib/Route",
      "npm:react-router@2.0.0-rc5/lib/History",
      "npm:react-router@2.0.0-rc5/lib/RouteContext",
      "npm:react-router@2.0.0-rc5/lib/Lifecycle",
      "npm:react-router@2.0.0-rc5/lib/RouteUtils",
      "npm:react-router@2.0.0-rc5/lib/RouterContext",
      "npm:react-router@2.0.0-rc5/lib/Router",
      "npm:react-router@2.0.0-rc5/lib/useRoutes",
      "npm:react-router@2.0.0-rc5/lib/PropTypes",
      "npm:babel-runtime@5.8.35/core-js/object/get-own-property-descriptor",
      "npm:babel-runtime@5.8.35/core-js/object/create",
      "npm:babel-runtime@5.8.35/core-js/object/set-prototype-of",
      "npm:babel-runtime@5.8.35/core-js/object/define-property",
      "npm:react-router@2.0.0-rc5/lib/RoutingContext",
      "npm:react-router@2.0.0-rc5/lib/match",
      "npm:react-router@2.0.0-rc5/lib/PatternUtils",
      "npm:react-router@2.0.0-rc5/lib/useRouterHistory",
      "npm:react-router@2.0.0-rc5/lib/browserHistory",
      "npm:react-router@2.0.0-rc5/lib/hashHistory",
      "npm:react-router@2.0.0-rc5/lib/createMemoryHistory",
      "npm:react@0.14.7/lib/ReactDOM",
      "containers/TechnologiesTable.js",
      "npm:react@0.14.7/lib/Object.assign",
      "github:jspm/nodelibs-process@0.1.2",
      "npm:invariant@2.2.0",
      "npm:react-router@2.0.0-rc5/lib/getRouteParams",
      "npm:react@0.14.7/lib/ReactDOMServer",
      "npm:react@0.14.7/lib/ReactIsomorphic",
      "npm:react-router@2.0.0-rc5/lib/warning",
      "npm:react-router@2.0.0-rc5/lib/deprecateObjectProperties",
      "npm:history@2.0.0/lib/createHashHistory",
      "npm:history@2.0.0/lib/useQueries",
      "npm:react@0.14.7/lib/deprecated",
      "npm:react-router@2.0.0-rc5/lib/createTransitionManager",
      "npm:react@0.14.7/lib/ReactCurrentOwner",
      "npm:react@0.14.7/lib/ReactVersion",
      "npm:core-js@1.2.6/library/fn/object/get-own-property-descriptor",
      "npm:core-js@1.2.6/library/fn/object/create",
      "npm:core-js@1.2.6/library/fn/object/set-prototype-of",
      "npm:history@2.0.0/lib/useBasename",
      "npm:core-js@1.2.6/library/fn/object/define-property",
      "npm:react-router@2.0.0-rc5/lib/createRouterHistory",
      "npm:react@0.14.7/lib/ReactReconciler",
      "npm:react@0.14.7/lib/renderSubtreeIntoContainer",
      "npm:react-router@2.0.0-rc5/lib/RouterUtils",
      "npm:history@2.0.0/lib/createBrowserHistory",
      "npm:history@2.0.0/lib/createMemoryHistory",
      "npm:react@0.14.7/lib/ReactDOMTextComponent",
      "npm:react@0.14.7/lib/ReactPerf",
      "npm:react@0.14.7/lib/ReactDefaultInjection",
      "npm:react@0.14.7/lib/ReactInstanceHandles",
      "npm:react@0.14.7/lib/ReactMount",
      "npm:react@0.14.7/lib/ReactUpdates",
      "npm:react@0.14.7/lib/findDOMNode",
      "npm:fbjs@0.6.1/lib/ExecutionEnvironment",
      "npm:fbjs@0.6.1/lib/warning",
      "npm:history@2.0.0/lib/Actions",
      "npm:history@2.0.0/lib/ExecutionEnvironment",
      "npm:history@2.0.0/lib/DOMUtils",
      "npm:warning@2.1.0",
      "npm:query-string@3.0.0",
      "npm:react-router@2.0.0-rc5/lib/computeChangedRoutes",
      "npm:react-router@2.0.0-rc5/lib/isActive",
      "npm:react-router@2.0.0-rc5/lib/getComponents",
      "github:jspm/nodelibs-process@0.1.2/index",
      "npm:invariant@2.2.0/browser",
      "npm:react@0.14.7/lib/ReactElement",
      "npm:history@2.0.0/lib/PathUtils",
      "npm:history@2.0.0/lib/DOMStateStorage",
      "npm:history@2.0.0/lib/createDOMHistory",
      "npm:history@2.0.0/lib/runTransitionHook",
      "npm:history@2.0.0/lib/deprecate",
      "npm:react-router@2.0.0-rc5/lib/TransitionUtils",
      "npm:react@0.14.7/lib/ReactServerRendering",
      "npm:react@0.14.7/lib/ReactChildren",
      "npm:react@0.14.7/lib/ReactComponent",
      "npm:react@0.14.7/lib/ReactClass",
      "npm:react@0.14.7/lib/ReactDOMFactories",
      "npm:react@0.14.7/lib/ReactElementValidator",
      "npm:react@0.14.7/lib/ReactPropTypes",
      "npm:react@0.14.7/lib/onlyChild",
      "npm:core-js@1.2.6/library/modules/$",
      "npm:core-js@1.2.6/library/modules/$.core",
      "npm:react@0.14.7/lib/escapeTextContentForBrowser",
      "npm:react@0.14.7/lib/ClientReactRootIndex",
      "npm:react@0.14.7/lib/ServerReactRootIndex",
      "npm:react@0.14.7/lib/ReactRootIndex",
      "npm:core-js@1.2.6/library/modules/es6.object.get-own-property-descriptor",
      "npm:core-js@1.2.6/library/modules/es6.object.set-prototype-of",
      "npm:react@0.14.7/lib/ReactInjection",
      "npm:react@0.14.7/lib/ReactReconcileTransaction",
      "npm:react@0.14.7/lib/SVGDOMPropertyConfig",
      "npm:react-router@2.0.0-rc5/lib/matchRoutes",
      "npm:react@0.14.7/lib/ReactRef",
      "npm:history@2.0.0/lib/createHistory",
      "npm:react@0.14.7/lib/ReactComponentBrowserEnvironment",
      "npm:fbjs@0.6.1/lib/invariant",
      "npm:react@0.14.7/lib/DOMChildrenOperations",
      "npm:react@0.14.7/lib/DOMPropertyOperations",
      "npm:react@0.14.7/lib/setTextContent",
      "npm:react@0.14.7/lib/validateDOMNesting",
      "npm:react@0.14.7/lib/BeforeInputEventPlugin",
      "npm:react@0.14.7/lib/ChangeEventPlugin",
      "npm:react@0.14.7/lib/DefaultEventPluginOrder",
      "npm:react@0.14.7/lib/EnterLeaveEventPlugin",
      "npm:react@0.14.7/lib/HTMLDOMPropertyConfig",
      "npm:react@0.14.7/lib/ReactBrowserComponentMixin",
      "npm:react@0.14.7/lib/ReactDefaultBatchingStrategy",
      "npm:react@0.14.7/lib/ReactDOMComponent",
      "npm:react@0.14.7/lib/ReactEventListener",
      "npm:react@0.14.7/lib/SelectEventPlugin",
      "npm:react@0.14.7/lib/SimpleEventPlugin",
      "npm:react@0.14.7/lib/ReactDefaultPerf",
      "npm:react@0.14.7/lib/DOMProperty",
      "npm:react@0.14.7/lib/ReactDOMFeatureFlags",
      "npm:react@0.14.7/lib/ReactEmptyComponentRegistry",
      "npm:react@0.14.7/lib/ReactInstanceMap",
      "npm:react@0.14.7/lib/shouldUpdateReactComponent",
      "npm:react@0.14.7/lib/ReactMarkupChecksum",
      "npm:fbjs@0.6.1/lib/containsNode",
      "npm:react@0.14.7/lib/ReactBrowserEventEmitter",
      "npm:fbjs@0.6.1/lib/emptyObject",
      "npm:react@0.14.7/lib/ReactUpdateQueue",
      "npm:react@0.14.7/lib/instantiateReactComponent",
      "npm:react@0.14.7/lib/setInnerHTML",
      "npm:react@0.14.7/lib/CallbackQueue",
      "npm:react@0.14.7/lib/PooledClass",
      "npm:react@0.14.7/lib/Transaction",
      "npm:fbjs@0.6.1/lib/emptyFunction",
      "npm:react-router@2.0.0-rc5/lib/AsyncUtils",
      "npm:react@0.14.7/lib/ReactServerBatchingStrategy",
      "npm:fbjs@0.6.1/lib/keyOf",
      "npm:fbjs@0.6.1/lib/mapObject",
      "npm:react@0.14.7/lib/getIteratorFn",
      "npm:process@0.11.2",
      "npm:query-string@3.0.0/index",
      "npm:warning@2.1.0/browser",
      "npm:react@0.14.7/lib/canDefineProperty",
      "npm:react@0.14.7/lib/ReactPropTypeLocationNames",
      "npm:fbjs@0.6.1/lib/keyMirror",
      "npm:react@0.14.7/lib/ReactServerRenderingTransaction",
      "npm:react@0.14.7/lib/traverseAllChildren",
      "npm:react@0.14.7/lib/ReactNoopUpdateQueue",
      "npm:react@0.14.7/lib/ReactPropTypeLocations",
      "npm:history@2.0.0/lib/AsyncUtils",
      "npm:react@0.14.7/lib/getEventTarget",
      "npm:react@0.14.7/lib/isTextInputElement",
      "npm:react@0.14.7/lib/ReactDOMButton",
      "npm:fbjs@0.6.1/lib/shallowEqual",
      "npm:fbjs@0.6.1/lib/getUnboundedScrollPosition",
      "npm:fbjs@0.6.1/lib/getActiveElement",
      "npm:deep-equal@1.0.1",
      "npm:core-js@1.2.6/library/modules/$.to-iobject",
      "npm:core-js@1.2.6/library/modules/$.object-sap",
      "npm:core-js@1.2.6/library/modules/$.export",
      "npm:core-js@1.2.6/library/modules/$.set-proto",
      "npm:react@0.14.7/lib/ReactEmptyComponent",
      "npm:react@0.14.7/lib/quoteAttributeValueForBrowser",
      "npm:react@0.14.7/lib/FallbackCompositionState",
      "npm:react@0.14.7/lib/SyntheticCompositionEvent",
      "npm:react@0.14.7/lib/SyntheticInputEvent",
      "npm:react@0.14.7/lib/SyntheticMouseEvent",
      "npm:react@0.14.7/lib/SyntheticClipboardEvent",
      "npm:react@0.14.7/lib/SyntheticFocusEvent",
      "npm:react@0.14.7/lib/SyntheticKeyboardEvent",
      "npm:react@0.14.7/lib/SyntheticDragEvent",
      "npm:react@0.14.7/lib/SyntheticTouchEvent",
      "npm:history@2.0.0/lib/createLocation",
      "npm:react@0.14.7/lib/ReactMultiChild",
      "npm:fbjs@0.6.1/lib/EventListener",
      "npm:react@0.14.7/lib/EventPluginHub",
      "npm:react@0.14.7/lib/ReactComponentEnvironment",
      "npm:react@0.14.7/lib/ReactNativeComponent",
      "npm:react@0.14.7/lib/ReactInputSelection",
      "npm:react@0.14.7/lib/ReactOwner",
      "npm:react@0.14.7/lib/ReactDOMIDOperations",
      "npm:react@0.14.7/lib/Danger",
      "npm:react@0.14.7/lib/ReactMultiChildUpdateTypes",
      "npm:react@0.14.7/lib/EventConstants",
      "npm:react@0.14.7/lib/EventPropagators",
      "npm:react@0.14.7/lib/SyntheticEvent",
      "npm:react@0.14.7/lib/isEventSupported",
      "npm:react@0.14.7/lib/AutoFocusUtils",
      "npm:react@0.14.7/lib/CSSPropertyOperations",
      "npm:react@0.14.7/lib/ReactDOMInput",
      "npm:react@0.14.7/lib/ReactDOMOption",
      "npm:react@0.14.7/lib/ReactDOMSelect",
      "npm:react@0.14.7/lib/ReactDOMTextarea",
      "npm:react@0.14.7/lib/getEventCharCode",
      "npm:react@0.14.7/lib/SyntheticUIEvent",
      "npm:react@0.14.7/lib/SyntheticWheelEvent",
      "npm:react@0.14.7/lib/ReactDefaultPerfAnalysis",
      "npm:fbjs@0.6.1/lib/performanceNow",
      "npm:react@0.14.7/lib/adler32",
      "npm:react@0.14.7/lib/ViewportMetrics",
      "npm:fbjs@0.6.1/lib/isTextNode",
      "npm:react@0.14.7/lib/ReactEventEmitterMixin",
      "npm:react@0.14.7/lib/EventPluginRegistry",
      "npm:react@0.14.7/lib/ReactCompositeComponent",
      "npm:process@0.11.2/browser",
      "npm:core-js@1.2.6/library/modules/$.defined",
      "npm:core-js@1.2.6/library/modules/$.fails",
      "npm:core-js@1.2.6/library/modules/$.global",
      "npm:core-js@1.2.6/library/modules/$.is-object",
      "npm:react@0.14.7/lib/getEventModifierState",
      "npm:react@0.14.7/lib/forEachAccumulated",
      "npm:fbjs@0.6.1/lib/focusNode",
      "npm:react@0.14.7/lib/CSSProperty",
      "npm:fbjs@0.6.1/lib/memoizeStringOnly",
      "npm:strict-uri-encode@1.1.0",
      "npm:deep-equal@1.0.1/index",
      "npm:core-js@1.2.6/library/modules/$.iobject",
      "npm:core-js@1.2.6/library/modules/$.ctx",
      "npm:core-js@1.2.6/library/modules/$.an-object",
      "npm:react@0.14.7/lib/getEventKey",
      "npm:fbjs@0.6.1/lib/camelizeStyleName",
      "npm:react@0.14.7/lib/dangerousStyleValue",
      "npm:fbjs@0.6.1/lib/hyphenateStyleName",
      "npm:react@0.14.7/lib/ReactErrorUtils",
      "npm:fbjs@0.6.1/lib/createNodesFromMarkup",
      "npm:fbjs@0.6.1/lib/getMarkupWrap",
      "npm:react@0.14.7/lib/getTextContentAccessor",
      "npm:react@0.14.7/lib/ReactChildReconciler",
      "npm:react@0.14.7/lib/flattenChildren",
      "npm:react@0.14.7/lib/EventPluginUtils",
      "npm:react@0.14.7/lib/accumulateInto",
      "npm:react@0.14.7/lib/ReactDOMSelection",
      "npm:react@0.14.7/lib/LinkedValueUtils",
      "npm:fbjs@0.6.1/lib/performance",
      "npm:fbjs@0.6.1/lib/isNode",
      "npm:strict-uri-encode@1.1.0/index",
      "npm:deep-equal@1.0.1/lib/keys",
      "npm:deep-equal@1.0.1/lib/is_arguments",
      "npm:core-js@1.2.6/library/modules/$.cof",
      "npm:core-js@1.2.6/library/modules/$.a-function",
      "npm:fbjs@0.6.1/lib/camelize",
      "npm:fbjs@0.6.1/lib/hyphenate",
      "npm:react@0.14.7/lib/getNodeForCharacterOffset",
      "npm:fbjs@0.6.1/lib/createArrayFromMixed",
      "npm:fbjs@0.6.1/lib/toArray"
    ]
  },

  depCache: {
    "app.js": [
      "npm:react@0.14.7",
      "npm:react-dom@0.14.7",
      "stylesheets/main.css!github:systemjs/plugin-css@0.1.20",
      "github:twbs/bootstrap@3.3.6/css/bootstrap.css!github:systemjs/plugin-css@0.1.20",
      "npm:font-awesome@4.5.0/css/font-awesome.css!github:systemjs/plugin-css@0.1.20",
      "npm:react-router@2.0.0-rc5",
      "containers/App.js",
      "containers/HomePage.js"
    ],
    "npm:react-dom@0.14.7": [
      "npm:react-dom@0.14.7/index"
    ],
    "npm:react-router@2.0.0-rc5": [
      "npm:react-router@2.0.0-rc5/lib/index"
    ],
    "containers/App.js": [
      "npm:babel-runtime@5.8.35/helpers/get",
      "npm:babel-runtime@5.8.35/helpers/inherits",
      "npm:babel-runtime@5.8.35/helpers/create-class",
      "npm:babel-runtime@5.8.35/helpers/class-call-check",
      "npm:react@0.14.7"
    ],
    "npm:react@0.14.7": [
      "npm:react@0.14.7/react"
    ],
    "containers/HomePage.js": [
      "npm:babel-runtime@5.8.35/helpers/get",
      "npm:babel-runtime@5.8.35/helpers/inherits",
      "npm:babel-runtime@5.8.35/helpers/create-class",
      "npm:babel-runtime@5.8.35/helpers/class-call-check",
      "npm:react@0.14.7",
      "containers/MainHeader.js",
      "containers/MainBody.js",
      "containers/MainFooter.js"
    ],
    "npm:babel-runtime@5.8.35/helpers/get": [
      "npm:babel-runtime@5.8.35/core-js/object/get-own-property-descriptor"
    ],
    "npm:babel-runtime@5.8.35/helpers/inherits": [
      "npm:babel-runtime@5.8.35/core-js/object/create",
      "npm:babel-runtime@5.8.35/core-js/object/set-prototype-of"
    ],
    "npm:babel-runtime@5.8.35/helpers/create-class": [
      "npm:babel-runtime@5.8.35/core-js/object/define-property"
    ],
    "npm:react@0.14.7/react": [
      "npm:react@0.14.7/lib/React"
    ],
    "npm:react-router@2.0.0-rc5/lib/index": [
      "npm:react-router@2.0.0-rc5/lib/Router",
      "npm:react-router@2.0.0-rc5/lib/Link",
      "npm:react-router@2.0.0-rc5/lib/IndexLink",
      "npm:react-router@2.0.0-rc5/lib/IndexRedirect",
      "npm:react-router@2.0.0-rc5/lib/IndexRoute",
      "npm:react-router@2.0.0-rc5/lib/Redirect",
      "npm:react-router@2.0.0-rc5/lib/Route",
      "npm:react-router@2.0.0-rc5/lib/History",
      "npm:react-router@2.0.0-rc5/lib/Lifecycle",
      "npm:react-router@2.0.0-rc5/lib/RouteContext",
      "npm:react-router@2.0.0-rc5/lib/useRoutes",
      "npm:react-router@2.0.0-rc5/lib/RouteUtils",
      "npm:react-router@2.0.0-rc5/lib/RouterContext",
      "npm:react-router@2.0.0-rc5/lib/RoutingContext",
      "npm:react-router@2.0.0-rc5/lib/PropTypes",
      "npm:react-router@2.0.0-rc5/lib/match",
      "npm:react-router@2.0.0-rc5/lib/useRouterHistory",
      "npm:react-router@2.0.0-rc5/lib/PatternUtils",
      "npm:react-router@2.0.0-rc5/lib/browserHistory",
      "npm:react-router@2.0.0-rc5/lib/hashHistory",
      "npm:react-router@2.0.0-rc5/lib/createMemoryHistory"
    ],
    "npm:react-dom@0.14.7/index": [
      "npm:react@0.14.7/lib/ReactDOM"
    ],
    "containers/MainHeader.js": [
      "npm:babel-runtime@5.8.35/helpers/get",
      "npm:babel-runtime@5.8.35/helpers/inherits",
      "npm:babel-runtime@5.8.35/helpers/create-class",
      "npm:babel-runtime@5.8.35/helpers/class-call-check",
      "npm:react@0.14.7"
    ],
    "containers/MainBody.js": [
      "npm:babel-runtime@5.8.35/helpers/get",
      "npm:babel-runtime@5.8.35/helpers/inherits",
      "npm:babel-runtime@5.8.35/helpers/create-class",
      "npm:babel-runtime@5.8.35/helpers/class-call-check",
      "npm:react@0.14.7",
      "containers/TechnologiesTable.js"
    ],
    "containers/MainFooter.js": [
      "npm:babel-runtime@5.8.35/helpers/get",
      "npm:babel-runtime@5.8.35/helpers/inherits",
      "npm:babel-runtime@5.8.35/helpers/create-class",
      "npm:babel-runtime@5.8.35/helpers/class-call-check",
      "npm:react@0.14.7"
    ],
    "npm:react-router@2.0.0-rc5/lib/PropTypes": [
      "npm:react@0.14.7"
    ],
    "npm:babel-runtime@5.8.35/core-js/object/get-own-property-descriptor": [
      "npm:core-js@1.2.6/library/fn/object/get-own-property-descriptor"
    ],
    "npm:babel-runtime@5.8.35/core-js/object/create": [
      "npm:core-js@1.2.6/library/fn/object/create"
    ],
    "npm:babel-runtime@5.8.35/core-js/object/set-prototype-of": [
      "npm:core-js@1.2.6/library/fn/object/set-prototype-of"
    ],
    "npm:babel-runtime@5.8.35/core-js/object/define-property": [
      "npm:core-js@1.2.6/library/fn/object/define-property"
    ],
    "npm:react@0.14.7/lib/React": [
      "npm:react@0.14.7/lib/ReactDOM",
      "npm:react@0.14.7/lib/ReactDOMServer",
      "npm:react@0.14.7/lib/ReactIsomorphic",
      "npm:react@0.14.7/lib/Object.assign",
      "npm:react@0.14.7/lib/deprecated"
    ],
    "npm:react-router@2.0.0-rc5/lib/IndexLink": [
      "npm:react@0.14.7",
      "npm:react-router@2.0.0-rc5/lib/Link"
    ],
    "npm:react-router@2.0.0-rc5/lib/Link": [
      "npm:react@0.14.7",
      "npm:react-router@2.0.0-rc5/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react-router@2.0.0-rc5/lib/IndexRedirect": [
      "npm:react@0.14.7",
      "npm:react-router@2.0.0-rc5/lib/warning",
      "npm:invariant@2.2.0",
      "npm:react-router@2.0.0-rc5/lib/Redirect",
      "npm:react-router@2.0.0-rc5/lib/PropTypes",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react-router@2.0.0-rc5/lib/IndexRoute": [
      "npm:react@0.14.7",
      "npm:react-router@2.0.0-rc5/lib/warning",
      "npm:invariant@2.2.0",
      "npm:react-router@2.0.0-rc5/lib/RouteUtils",
      "npm:react-router@2.0.0-rc5/lib/PropTypes",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react-router@2.0.0-rc5/lib/Redirect": [
      "npm:react@0.14.7",
      "npm:invariant@2.2.0",
      "npm:react-router@2.0.0-rc5/lib/RouteUtils",
      "npm:react-router@2.0.0-rc5/lib/PatternUtils",
      "npm:react-router@2.0.0-rc5/lib/PropTypes",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react-router@2.0.0-rc5/lib/History": [
      "npm:react-router@2.0.0-rc5/lib/warning",
      "npm:react-router@2.0.0-rc5/lib/PropTypes",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react-router@2.0.0-rc5/lib/Route": [
      "npm:react@0.14.7",
      "npm:invariant@2.2.0",
      "npm:react-router@2.0.0-rc5/lib/RouteUtils",
      "npm:react-router@2.0.0-rc5/lib/PropTypes",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react-router@2.0.0-rc5/lib/Lifecycle": [
      "npm:react-router@2.0.0-rc5/lib/warning",
      "npm:react@0.14.7",
      "npm:invariant@2.2.0",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react-router@2.0.0-rc5/lib/RouteContext": [
      "npm:react-router@2.0.0-rc5/lib/warning",
      "npm:react@0.14.7",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react-router@2.0.0-rc5/lib/RouteUtils": [
      "npm:react@0.14.7",
      "npm:react-router@2.0.0-rc5/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react-router@2.0.0-rc5/lib/RouterContext": [
      "npm:invariant@2.2.0",
      "npm:react@0.14.7",
      "npm:react-router@2.0.0-rc5/lib/deprecateObjectProperties",
      "npm:react-router@2.0.0-rc5/lib/getRouteParams",
      "npm:react-router@2.0.0-rc5/lib/RouteUtils",
      "npm:react-router@2.0.0-rc5/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react-router@2.0.0-rc5/lib/RoutingContext": [
      "npm:react@0.14.7",
      "npm:react-router@2.0.0-rc5/lib/RouterContext",
      "npm:react-router@2.0.0-rc5/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react-router@2.0.0-rc5/lib/match": [
      "npm:invariant@2.2.0",
      "npm:react-router@2.0.0-rc5/lib/createMemoryHistory",
      "npm:react-router@2.0.0-rc5/lib/createTransitionManager",
      "npm:react-router@2.0.0-rc5/lib/RouteUtils",
      "npm:react-router@2.0.0-rc5/lib/RouterUtils",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react-router@2.0.0-rc5/lib/PatternUtils": [
      "npm:invariant@2.2.0",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react-router@2.0.0-rc5/lib/Router": [
      "npm:history@2.0.0/lib/createHashHistory",
      "npm:history@2.0.0/lib/useQueries",
      "npm:react@0.14.7",
      "npm:react-router@2.0.0-rc5/lib/createTransitionManager",
      "npm:react-router@2.0.0-rc5/lib/PropTypes",
      "npm:react-router@2.0.0-rc5/lib/RouterContext",
      "npm:react-router@2.0.0-rc5/lib/RouteUtils",
      "npm:react-router@2.0.0-rc5/lib/RouterUtils",
      "npm:react-router@2.0.0-rc5/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react-router@2.0.0-rc5/lib/useRoutes": [
      "npm:history@2.0.0/lib/useQueries",
      "npm:react-router@2.0.0-rc5/lib/createTransitionManager",
      "npm:react-router@2.0.0-rc5/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react-router@2.0.0-rc5/lib/useRouterHistory": [
      "npm:history@2.0.0/lib/useQueries",
      "npm:history@2.0.0/lib/useBasename"
    ],
    "npm:react-router@2.0.0-rc5/lib/hashHistory": [
      "npm:history@2.0.0/lib/createHashHistory",
      "npm:react-router@2.0.0-rc5/lib/createRouterHistory"
    ],
    "npm:react-router@2.0.0-rc5/lib/browserHistory": [
      "npm:history@2.0.0/lib/createBrowserHistory",
      "npm:react-router@2.0.0-rc5/lib/createRouterHistory"
    ],
    "npm:react-router@2.0.0-rc5/lib/createMemoryHistory": [
      "npm:history@2.0.0/lib/useQueries",
      "npm:history@2.0.0/lib/createMemoryHistory"
    ],
    "npm:react@0.14.7/lib/ReactDOM": [
      "npm:react@0.14.7/lib/ReactCurrentOwner",
      "npm:react@0.14.7/lib/ReactDOMTextComponent",
      "npm:react@0.14.7/lib/ReactDefaultInjection",
      "npm:react@0.14.7/lib/ReactInstanceHandles",
      "npm:react@0.14.7/lib/ReactMount",
      "npm:react@0.14.7/lib/ReactPerf",
      "npm:react@0.14.7/lib/ReactReconciler",
      "npm:react@0.14.7/lib/ReactUpdates",
      "npm:react@0.14.7/lib/ReactVersion",
      "npm:react@0.14.7/lib/findDOMNode",
      "npm:react@0.14.7/lib/renderSubtreeIntoContainer",
      "npm:fbjs@0.6.1/lib/warning",
      "npm:fbjs@0.6.1/lib/ExecutionEnvironment",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "containers/TechnologiesTable.js": [
      "npm:babel-runtime@5.8.35/helpers/get",
      "npm:babel-runtime@5.8.35/helpers/inherits",
      "npm:babel-runtime@5.8.35/helpers/create-class",
      "npm:babel-runtime@5.8.35/helpers/class-call-check",
      "npm:react@0.14.7"
    ],
    "npm:core-js@1.2.6/library/fn/object/create": [
      "npm:core-js@1.2.6/library/modules/$"
    ],
    "npm:core-js@1.2.6/library/fn/object/set-prototype-of": [
      "npm:core-js@1.2.6/library/modules/es6.object.set-prototype-of",
      "npm:core-js@1.2.6/library/modules/$.core"
    ],
    "npm:core-js@1.2.6/library/fn/object/define-property": [
      "npm:core-js@1.2.6/library/modules/$"
    ],
    "npm:react@0.14.7/lib/ReactDOMServer": [
      "npm:react@0.14.7/lib/ReactDefaultInjection",
      "npm:react@0.14.7/lib/ReactServerRendering",
      "npm:react@0.14.7/lib/ReactVersion"
    ],
    "npm:core-js@1.2.6/library/fn/object/get-own-property-descriptor": [
      "npm:core-js@1.2.6/library/modules/$",
      "npm:core-js@1.2.6/library/modules/es6.object.get-own-property-descriptor"
    ],
    "github:jspm/nodelibs-process@0.1.2": [
      "github:jspm/nodelibs-process@0.1.2/index"
    ],
    "npm:invariant@2.2.0": [
      "npm:invariant@2.2.0/browser"
    ],
    "npm:react-router@2.0.0-rc5/lib/getRouteParams": [
      "npm:react-router@2.0.0-rc5/lib/PatternUtils"
    ],
    "npm:history@2.0.0/lib/useBasename": [
      "npm:history@2.0.0/lib/ExecutionEnvironment",
      "npm:history@2.0.0/lib/PathUtils",
      "npm:history@2.0.0/lib/runTransitionHook",
      "npm:history@2.0.0/lib/deprecate"
    ],
    "npm:react-router@2.0.0-rc5/lib/createRouterHistory": [
      "npm:react-router@2.0.0-rc5/lib/useRouterHistory"
    ],
    "npm:react@0.14.7/lib/ReactIsomorphic": [
      "npm:react@0.14.7/lib/ReactChildren",
      "npm:react@0.14.7/lib/ReactComponent",
      "npm:react@0.14.7/lib/ReactClass",
      "npm:react@0.14.7/lib/ReactDOMFactories",
      "npm:react@0.14.7/lib/ReactElement",
      "npm:react@0.14.7/lib/ReactElementValidator",
      "npm:react@0.14.7/lib/ReactPropTypes",
      "npm:react@0.14.7/lib/ReactVersion",
      "npm:react@0.14.7/lib/Object.assign",
      "npm:react@0.14.7/lib/onlyChild",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react-router@2.0.0-rc5/lib/warning": [
      "npm:warning@2.1.0",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react-router@2.0.0-rc5/lib/deprecateObjectProperties": [
      "npm:react-router@2.0.0-rc5/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react-router@2.0.0-rc5/lib/RouterUtils": [
      "npm:react-router@2.0.0-rc5/lib/deprecateObjectProperties",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:history@2.0.0/lib/createHashHistory": [
      "npm:warning@2.1.0",
      "npm:invariant@2.2.0",
      "npm:history@2.0.0/lib/Actions",
      "npm:history@2.0.0/lib/PathUtils",
      "npm:history@2.0.0/lib/ExecutionEnvironment",
      "npm:history@2.0.0/lib/DOMUtils",
      "npm:history@2.0.0/lib/DOMStateStorage",
      "npm:history@2.0.0/lib/createDOMHistory",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:history@2.0.0/lib/useQueries": [
      "npm:warning@2.1.0",
      "npm:query-string@3.0.0",
      "npm:history@2.0.0/lib/runTransitionHook",
      "npm:history@2.0.0/lib/PathUtils",
      "npm:history@2.0.0/lib/deprecate",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:history@2.0.0/lib/createMemoryHistory": [
      "npm:warning@2.1.0",
      "npm:invariant@2.2.0",
      "npm:history@2.0.0/lib/PathUtils",
      "npm:history@2.0.0/lib/Actions",
      "npm:history@2.0.0/lib/createHistory",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:history@2.0.0/lib/createBrowserHistory": [
      "npm:invariant@2.2.0",
      "npm:history@2.0.0/lib/Actions",
      "npm:history@2.0.0/lib/PathUtils",
      "npm:history@2.0.0/lib/ExecutionEnvironment",
      "npm:history@2.0.0/lib/DOMUtils",
      "npm:history@2.0.0/lib/DOMStateStorage",
      "npm:history@2.0.0/lib/createDOMHistory",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/ReactDOMTextComponent": [
      "npm:react@0.14.7/lib/DOMChildrenOperations",
      "npm:react@0.14.7/lib/DOMPropertyOperations",
      "npm:react@0.14.7/lib/ReactComponentBrowserEnvironment",
      "npm:react@0.14.7/lib/ReactMount",
      "npm:react@0.14.7/lib/Object.assign",
      "npm:react@0.14.7/lib/escapeTextContentForBrowser",
      "npm:react@0.14.7/lib/setTextContent",
      "npm:react@0.14.7/lib/validateDOMNesting",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/ReactPerf": [
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/deprecated": [
      "npm:react@0.14.7/lib/Object.assign",
      "npm:fbjs@0.6.1/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react-router@2.0.0-rc5/lib/createTransitionManager": [
      "npm:react-router@2.0.0-rc5/lib/warning",
      "npm:history@2.0.0/lib/Actions",
      "npm:react-router@2.0.0-rc5/lib/computeChangedRoutes",
      "npm:react-router@2.0.0-rc5/lib/TransitionUtils",
      "npm:react-router@2.0.0-rc5/lib/isActive",
      "npm:react-router@2.0.0-rc5/lib/getComponents",
      "npm:react-router@2.0.0-rc5/lib/matchRoutes",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/ReactDefaultInjection": [
      "npm:react@0.14.7/lib/BeforeInputEventPlugin",
      "npm:react@0.14.7/lib/ChangeEventPlugin",
      "npm:react@0.14.7/lib/ClientReactRootIndex",
      "npm:react@0.14.7/lib/DefaultEventPluginOrder",
      "npm:react@0.14.7/lib/EnterLeaveEventPlugin",
      "npm:fbjs@0.6.1/lib/ExecutionEnvironment",
      "npm:react@0.14.7/lib/HTMLDOMPropertyConfig",
      "npm:react@0.14.7/lib/ReactBrowserComponentMixin",
      "npm:react@0.14.7/lib/ReactComponentBrowserEnvironment",
      "npm:react@0.14.7/lib/ReactDefaultBatchingStrategy",
      "npm:react@0.14.7/lib/ReactDOMComponent",
      "npm:react@0.14.7/lib/ReactDOMTextComponent",
      "npm:react@0.14.7/lib/ReactEventListener",
      "npm:react@0.14.7/lib/ReactInjection",
      "npm:react@0.14.7/lib/ReactInstanceHandles",
      "npm:react@0.14.7/lib/ReactMount",
      "npm:react@0.14.7/lib/ReactReconcileTransaction",
      "npm:react@0.14.7/lib/SelectEventPlugin",
      "npm:react@0.14.7/lib/ServerReactRootIndex",
      "npm:react@0.14.7/lib/SimpleEventPlugin",
      "npm:react@0.14.7/lib/SVGDOMPropertyConfig",
      "npm:react@0.14.7/lib/ReactDefaultPerf",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/ReactInstanceHandles": [
      "npm:react@0.14.7/lib/ReactRootIndex",
      "npm:fbjs@0.6.1/lib/invariant",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/ReactMount": [
      "npm:react@0.14.7/lib/DOMProperty",
      "npm:react@0.14.7/lib/ReactBrowserEventEmitter",
      "npm:react@0.14.7/lib/ReactCurrentOwner",
      "npm:react@0.14.7/lib/ReactDOMFeatureFlags",
      "npm:react@0.14.7/lib/ReactElement",
      "npm:react@0.14.7/lib/ReactEmptyComponentRegistry",
      "npm:react@0.14.7/lib/ReactInstanceHandles",
      "npm:react@0.14.7/lib/ReactInstanceMap",
      "npm:react@0.14.7/lib/ReactMarkupChecksum",
      "npm:react@0.14.7/lib/ReactPerf",
      "npm:react@0.14.7/lib/ReactReconciler",
      "npm:react@0.14.7/lib/ReactUpdateQueue",
      "npm:react@0.14.7/lib/ReactUpdates",
      "npm:react@0.14.7/lib/Object.assign",
      "npm:fbjs@0.6.1/lib/emptyObject",
      "npm:fbjs@0.6.1/lib/containsNode",
      "npm:react@0.14.7/lib/instantiateReactComponent",
      "npm:fbjs@0.6.1/lib/invariant",
      "npm:react@0.14.7/lib/setInnerHTML",
      "npm:react@0.14.7/lib/shouldUpdateReactComponent",
      "npm:react@0.14.7/lib/validateDOMNesting",
      "npm:fbjs@0.6.1/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/ReactReconciler": [
      "npm:react@0.14.7/lib/ReactRef"
    ],
    "npm:react@0.14.7/lib/renderSubtreeIntoContainer": [
      "npm:react@0.14.7/lib/ReactMount"
    ],
    "npm:fbjs@0.6.1/lib/warning": [
      "npm:fbjs@0.6.1/lib/emptyFunction",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/findDOMNode": [
      "npm:react@0.14.7/lib/ReactCurrentOwner",
      "npm:react@0.14.7/lib/ReactInstanceMap",
      "npm:react@0.14.7/lib/ReactMount",
      "npm:fbjs@0.6.1/lib/invariant",
      "npm:fbjs@0.6.1/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/ReactUpdates": [
      "npm:react@0.14.7/lib/CallbackQueue",
      "npm:react@0.14.7/lib/PooledClass",
      "npm:react@0.14.7/lib/ReactPerf",
      "npm:react@0.14.7/lib/ReactReconciler",
      "npm:react@0.14.7/lib/Transaction",
      "npm:react@0.14.7/lib/Object.assign",
      "npm:fbjs@0.6.1/lib/invariant",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:core-js@1.2.6/library/modules/es6.object.set-prototype-of": [
      "npm:core-js@1.2.6/library/modules/$.export",
      "npm:core-js@1.2.6/library/modules/$.set-proto"
    ],
    "npm:core-js@1.2.6/library/modules/es6.object.get-own-property-descriptor": [
      "npm:core-js@1.2.6/library/modules/$.to-iobject",
      "npm:core-js@1.2.6/library/modules/$.object-sap"
    ],
    "npm:warning@2.1.0": [
      "npm:warning@2.1.0/browser"
    ],
    "npm:query-string@3.0.0": [
      "npm:query-string@3.0.0/index"
    ],
    "npm:react-router@2.0.0-rc5/lib/computeChangedRoutes": [
      "npm:react-router@2.0.0-rc5/lib/PatternUtils"
    ],
    "npm:react-router@2.0.0-rc5/lib/isActive": [
      "npm:react-router@2.0.0-rc5/lib/PatternUtils"
    ],
    "npm:react-router@2.0.0-rc5/lib/getComponents": [
      "npm:react-router@2.0.0-rc5/lib/AsyncUtils"
    ],
    "npm:react@0.14.7/lib/ReactInjection": [
      "npm:react@0.14.7/lib/DOMProperty",
      "npm:react@0.14.7/lib/EventPluginHub",
      "npm:react@0.14.7/lib/ReactComponentEnvironment",
      "npm:react@0.14.7/lib/ReactClass",
      "npm:react@0.14.7/lib/ReactEmptyComponent",
      "npm:react@0.14.7/lib/ReactBrowserEventEmitter",
      "npm:react@0.14.7/lib/ReactNativeComponent",
      "npm:react@0.14.7/lib/ReactPerf",
      "npm:react@0.14.7/lib/ReactRootIndex",
      "npm:react@0.14.7/lib/ReactUpdates"
    ],
    "npm:react@0.14.7/lib/ReactReconcileTransaction": [
      "npm:react@0.14.7/lib/CallbackQueue",
      "npm:react@0.14.7/lib/PooledClass",
      "npm:react@0.14.7/lib/ReactBrowserEventEmitter",
      "npm:react@0.14.7/lib/ReactDOMFeatureFlags",
      "npm:react@0.14.7/lib/ReactInputSelection",
      "npm:react@0.14.7/lib/Transaction",
      "npm:react@0.14.7/lib/Object.assign"
    ],
    "npm:react@0.14.7/lib/SVGDOMPropertyConfig": [
      "npm:react@0.14.7/lib/DOMProperty"
    ],
    "npm:react@0.14.7/lib/ReactMarkupChecksum": [
      "npm:react@0.14.7/lib/adler32"
    ],
    "npm:fbjs@0.6.1/lib/containsNode": [
      "npm:fbjs@0.6.1/lib/isTextNode"
    ],
    "github:jspm/nodelibs-process@0.1.2/index": [
      "npm:process@0.11.2"
    ],
    "npm:invariant@2.2.0/browser": [
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:history@2.0.0/lib/PathUtils": [
      "npm:warning@2.1.0",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:history@2.0.0/lib/runTransitionHook": [
      "npm:warning@2.1.0",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:history@2.0.0/lib/deprecate": [
      "npm:warning@2.1.0",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/ReactElement": [
      "npm:react@0.14.7/lib/ReactCurrentOwner",
      "npm:react@0.14.7/lib/Object.assign",
      "npm:react@0.14.7/lib/canDefineProperty",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:history@2.0.0/lib/DOMStateStorage": [
      "npm:warning@2.1.0",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:history@2.0.0/lib/createDOMHistory": [
      "npm:invariant@2.2.0",
      "npm:history@2.0.0/lib/ExecutionEnvironment",
      "npm:history@2.0.0/lib/DOMUtils",
      "npm:history@2.0.0/lib/createHistory",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:history@2.0.0/lib/createHistory": [
      "npm:warning@2.1.0",
      "npm:deep-equal@1.0.1",
      "npm:history@2.0.0/lib/PathUtils",
      "npm:history@2.0.0/lib/AsyncUtils",
      "npm:history@2.0.0/lib/Actions",
      "npm:history@2.0.0/lib/createLocation",
      "npm:history@2.0.0/lib/runTransitionHook",
      "npm:history@2.0.0/lib/deprecate",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/ReactComponentBrowserEnvironment": [
      "npm:react@0.14.7/lib/ReactDOMIDOperations",
      "npm:react@0.14.7/lib/ReactMount",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react-router@2.0.0-rc5/lib/TransitionUtils": [
      "npm:react-router@2.0.0-rc5/lib/AsyncUtils",
      "npm:react-router@2.0.0-rc5/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react-router@2.0.0-rc5/lib/matchRoutes": [
      "npm:react-router@2.0.0-rc5/lib/warning",
      "npm:react-router@2.0.0-rc5/lib/AsyncUtils",
      "npm:react-router@2.0.0-rc5/lib/PatternUtils",
      "npm:react-router@2.0.0-rc5/lib/RouteUtils",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:fbjs@0.6.1/lib/invariant": [
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/ReactBrowserEventEmitter": [
      "npm:react@0.14.7/lib/EventConstants",
      "npm:react@0.14.7/lib/EventPluginHub",
      "npm:react@0.14.7/lib/EventPluginRegistry",
      "npm:react@0.14.7/lib/ReactEventEmitterMixin",
      "npm:react@0.14.7/lib/ReactPerf",
      "npm:react@0.14.7/lib/ViewportMetrics",
      "npm:react@0.14.7/lib/Object.assign",
      "npm:react@0.14.7/lib/isEventSupported",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:fbjs@0.6.1/lib/emptyObject": [
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/ReactServerRendering": [
      "npm:react@0.14.7/lib/ReactDefaultBatchingStrategy",
      "npm:react@0.14.7/lib/ReactElement",
      "npm:react@0.14.7/lib/ReactInstanceHandles",
      "npm:react@0.14.7/lib/ReactMarkupChecksum",
      "npm:react@0.14.7/lib/ReactServerBatchingStrategy",
      "npm:react@0.14.7/lib/ReactServerRenderingTransaction",
      "npm:react@0.14.7/lib/ReactUpdates",
      "npm:fbjs@0.6.1/lib/emptyObject",
      "npm:react@0.14.7/lib/instantiateReactComponent",
      "npm:fbjs@0.6.1/lib/invariant",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/ReactChildren": [
      "npm:react@0.14.7/lib/PooledClass",
      "npm:react@0.14.7/lib/ReactElement",
      "npm:fbjs@0.6.1/lib/emptyFunction",
      "npm:react@0.14.7/lib/traverseAllChildren"
    ],
    "npm:react@0.14.7/lib/ReactComponent": [
      "npm:react@0.14.7/lib/ReactNoopUpdateQueue",
      "npm:react@0.14.7/lib/canDefineProperty",
      "npm:fbjs@0.6.1/lib/emptyObject",
      "npm:fbjs@0.6.1/lib/invariant",
      "npm:fbjs@0.6.1/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/ReactDOMFactories": [
      "npm:react@0.14.7/lib/ReactElement",
      "npm:react@0.14.7/lib/ReactElementValidator",
      "npm:fbjs@0.6.1/lib/mapObject",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/ReactClass": [
      "npm:react@0.14.7/lib/ReactComponent",
      "npm:react@0.14.7/lib/ReactElement",
      "npm:react@0.14.7/lib/ReactPropTypeLocations",
      "npm:react@0.14.7/lib/ReactPropTypeLocationNames",
      "npm:react@0.14.7/lib/ReactNoopUpdateQueue",
      "npm:react@0.14.7/lib/Object.assign",
      "npm:fbjs@0.6.1/lib/emptyObject",
      "npm:fbjs@0.6.1/lib/invariant",
      "npm:fbjs@0.6.1/lib/keyMirror",
      "npm:fbjs@0.6.1/lib/keyOf",
      "npm:fbjs@0.6.1/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/ReactElementValidator": [
      "npm:react@0.14.7/lib/ReactElement",
      "npm:react@0.14.7/lib/ReactPropTypeLocations",
      "npm:react@0.14.7/lib/ReactPropTypeLocationNames",
      "npm:react@0.14.7/lib/ReactCurrentOwner",
      "npm:react@0.14.7/lib/canDefineProperty",
      "npm:react@0.14.7/lib/getIteratorFn",
      "npm:fbjs@0.6.1/lib/invariant",
      "npm:fbjs@0.6.1/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/ReactPropTypes": [
      "npm:react@0.14.7/lib/ReactElement",
      "npm:react@0.14.7/lib/ReactPropTypeLocationNames",
      "npm:fbjs@0.6.1/lib/emptyFunction",
      "npm:react@0.14.7/lib/getIteratorFn"
    ],
    "npm:react@0.14.7/lib/onlyChild": [
      "npm:react@0.14.7/lib/ReactElement",
      "npm:fbjs@0.6.1/lib/invariant",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/DOMChildrenOperations": [
      "npm:react@0.14.7/lib/Danger",
      "npm:react@0.14.7/lib/ReactMultiChildUpdateTypes",
      "npm:react@0.14.7/lib/ReactPerf",
      "npm:react@0.14.7/lib/setInnerHTML",
      "npm:react@0.14.7/lib/setTextContent",
      "npm:fbjs@0.6.1/lib/invariant",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/DOMPropertyOperations": [
      "npm:react@0.14.7/lib/DOMProperty",
      "npm:react@0.14.7/lib/ReactPerf",
      "npm:react@0.14.7/lib/quoteAttributeValueForBrowser",
      "npm:fbjs@0.6.1/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/setTextContent": [
      "npm:fbjs@0.6.1/lib/ExecutionEnvironment",
      "npm:react@0.14.7/lib/escapeTextContentForBrowser",
      "npm:react@0.14.7/lib/setInnerHTML"
    ],
    "npm:react@0.14.7/lib/validateDOMNesting": [
      "npm:react@0.14.7/lib/Object.assign",
      "npm:fbjs@0.6.1/lib/emptyFunction",
      "npm:fbjs@0.6.1/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/BeforeInputEventPlugin": [
      "npm:react@0.14.7/lib/EventConstants",
      "npm:react@0.14.7/lib/EventPropagators",
      "npm:fbjs@0.6.1/lib/ExecutionEnvironment",
      "npm:react@0.14.7/lib/FallbackCompositionState",
      "npm:react@0.14.7/lib/SyntheticCompositionEvent",
      "npm:react@0.14.7/lib/SyntheticInputEvent",
      "npm:fbjs@0.6.1/lib/keyOf"
    ],
    "npm:react@0.14.7/lib/ChangeEventPlugin": [
      "npm:react@0.14.7/lib/EventConstants",
      "npm:react@0.14.7/lib/EventPluginHub",
      "npm:react@0.14.7/lib/EventPropagators",
      "npm:fbjs@0.6.1/lib/ExecutionEnvironment",
      "npm:react@0.14.7/lib/ReactUpdates",
      "npm:react@0.14.7/lib/SyntheticEvent",
      "npm:react@0.14.7/lib/getEventTarget",
      "npm:react@0.14.7/lib/isEventSupported",
      "npm:react@0.14.7/lib/isTextInputElement",
      "npm:fbjs@0.6.1/lib/keyOf",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/DefaultEventPluginOrder": [
      "npm:fbjs@0.6.1/lib/keyOf"
    ],
    "npm:react@0.14.7/lib/EnterLeaveEventPlugin": [
      "npm:react@0.14.7/lib/EventConstants",
      "npm:react@0.14.7/lib/EventPropagators",
      "npm:react@0.14.7/lib/SyntheticMouseEvent",
      "npm:react@0.14.7/lib/ReactMount",
      "npm:fbjs@0.6.1/lib/keyOf"
    ],
    "npm:react@0.14.7/lib/HTMLDOMPropertyConfig": [
      "npm:react@0.14.7/lib/DOMProperty",
      "npm:fbjs@0.6.1/lib/ExecutionEnvironment"
    ],
    "npm:react@0.14.7/lib/ReactBrowserComponentMixin": [
      "npm:react@0.14.7/lib/ReactInstanceMap",
      "npm:react@0.14.7/lib/findDOMNode",
      "npm:fbjs@0.6.1/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/ReactDefaultBatchingStrategy": [
      "npm:react@0.14.7/lib/ReactUpdates",
      "npm:react@0.14.7/lib/Transaction",
      "npm:react@0.14.7/lib/Object.assign",
      "npm:fbjs@0.6.1/lib/emptyFunction"
    ],
    "npm:react@0.14.7/lib/ReactDOMComponent": [
      "npm:react@0.14.7/lib/AutoFocusUtils",
      "npm:react@0.14.7/lib/CSSPropertyOperations",
      "npm:react@0.14.7/lib/DOMProperty",
      "npm:react@0.14.7/lib/DOMPropertyOperations",
      "npm:react@0.14.7/lib/EventConstants",
      "npm:react@0.14.7/lib/ReactBrowserEventEmitter",
      "npm:react@0.14.7/lib/ReactComponentBrowserEnvironment",
      "npm:react@0.14.7/lib/ReactDOMButton",
      "npm:react@0.14.7/lib/ReactDOMInput",
      "npm:react@0.14.7/lib/ReactDOMOption",
      "npm:react@0.14.7/lib/ReactDOMSelect",
      "npm:react@0.14.7/lib/ReactDOMTextarea",
      "npm:react@0.14.7/lib/ReactMount",
      "npm:react@0.14.7/lib/ReactMultiChild",
      "npm:react@0.14.7/lib/ReactPerf",
      "npm:react@0.14.7/lib/ReactUpdateQueue",
      "npm:react@0.14.7/lib/Object.assign",
      "npm:react@0.14.7/lib/canDefineProperty",
      "npm:react@0.14.7/lib/escapeTextContentForBrowser",
      "npm:fbjs@0.6.1/lib/invariant",
      "npm:react@0.14.7/lib/isEventSupported",
      "npm:fbjs@0.6.1/lib/keyOf",
      "npm:react@0.14.7/lib/setInnerHTML",
      "npm:react@0.14.7/lib/setTextContent",
      "npm:fbjs@0.6.1/lib/shallowEqual",
      "npm:react@0.14.7/lib/validateDOMNesting",
      "npm:fbjs@0.6.1/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/ReactEventListener": [
      "npm:fbjs@0.6.1/lib/EventListener",
      "npm:fbjs@0.6.1/lib/ExecutionEnvironment",
      "npm:react@0.14.7/lib/PooledClass",
      "npm:react@0.14.7/lib/ReactInstanceHandles",
      "npm:react@0.14.7/lib/ReactMount",
      "npm:react@0.14.7/lib/ReactUpdates",
      "npm:react@0.14.7/lib/Object.assign",
      "npm:react@0.14.7/lib/getEventTarget",
      "npm:fbjs@0.6.1/lib/getUnboundedScrollPosition",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/SelectEventPlugin": [
      "npm:react@0.14.7/lib/EventConstants",
      "npm:react@0.14.7/lib/EventPropagators",
      "npm:fbjs@0.6.1/lib/ExecutionEnvironment",
      "npm:react@0.14.7/lib/ReactInputSelection",
      "npm:react@0.14.7/lib/SyntheticEvent",
      "npm:fbjs@0.6.1/lib/getActiveElement",
      "npm:react@0.14.7/lib/isTextInputElement",
      "npm:fbjs@0.6.1/lib/keyOf",
      "npm:fbjs@0.6.1/lib/shallowEqual"
    ],
    "npm:react@0.14.7/lib/SimpleEventPlugin": [
      "npm:react@0.14.7/lib/EventConstants",
      "npm:fbjs@0.6.1/lib/EventListener",
      "npm:react@0.14.7/lib/EventPropagators",
      "npm:react@0.14.7/lib/ReactMount",
      "npm:react@0.14.7/lib/SyntheticClipboardEvent",
      "npm:react@0.14.7/lib/SyntheticEvent",
      "npm:react@0.14.7/lib/SyntheticFocusEvent",
      "npm:react@0.14.7/lib/SyntheticKeyboardEvent",
      "npm:react@0.14.7/lib/SyntheticMouseEvent",
      "npm:react@0.14.7/lib/SyntheticDragEvent",
      "npm:react@0.14.7/lib/SyntheticTouchEvent",
      "npm:react@0.14.7/lib/SyntheticUIEvent",
      "npm:react@0.14.7/lib/SyntheticWheelEvent",
      "npm:fbjs@0.6.1/lib/emptyFunction",
      "npm:react@0.14.7/lib/getEventCharCode",
      "npm:fbjs@0.6.1/lib/invariant",
      "npm:fbjs@0.6.1/lib/keyOf",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/ReactDefaultPerf": [
      "npm:react@0.14.7/lib/DOMProperty",
      "npm:react@0.14.7/lib/ReactDefaultPerfAnalysis",
      "npm:react@0.14.7/lib/ReactMount",
      "npm:react@0.14.7/lib/ReactPerf",
      "npm:fbjs@0.6.1/lib/performanceNow"
    ],
    "npm:react@0.14.7/lib/DOMProperty": [
      "npm:fbjs@0.6.1/lib/invariant",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/ReactUpdateQueue": [
      "npm:react@0.14.7/lib/ReactCurrentOwner",
      "npm:react@0.14.7/lib/ReactElement",
      "npm:react@0.14.7/lib/ReactInstanceMap",
      "npm:react@0.14.7/lib/ReactUpdates",
      "npm:react@0.14.7/lib/Object.assign",
      "npm:fbjs@0.6.1/lib/invariant",
      "npm:fbjs@0.6.1/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/instantiateReactComponent": [
      "npm:react@0.14.7/lib/ReactCompositeComponent",
      "npm:react@0.14.7/lib/ReactEmptyComponent",
      "npm:react@0.14.7/lib/ReactNativeComponent",
      "npm:react@0.14.7/lib/Object.assign",
      "npm:fbjs@0.6.1/lib/invariant",
      "npm:fbjs@0.6.1/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/setInnerHTML": [
      "npm:fbjs@0.6.1/lib/ExecutionEnvironment",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/ReactRef": [
      "npm:react@0.14.7/lib/ReactOwner",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/CallbackQueue": [
      "npm:react@0.14.7/lib/PooledClass",
      "npm:react@0.14.7/lib/Object.assign",
      "npm:fbjs@0.6.1/lib/invariant",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/PooledClass": [
      "npm:fbjs@0.6.1/lib/invariant",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/Transaction": [
      "npm:fbjs@0.6.1/lib/invariant",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:deep-equal@1.0.1": [
      "npm:deep-equal@1.0.1/index"
    ],
    "npm:core-js@1.2.6/library/modules/$.export": [
      "npm:core-js@1.2.6/library/modules/$.global",
      "npm:core-js@1.2.6/library/modules/$.core",
      "npm:core-js@1.2.6/library/modules/$.ctx"
    ],
    "npm:core-js@1.2.6/library/modules/$.to-iobject": [
      "npm:core-js@1.2.6/library/modules/$.iobject",
      "npm:core-js@1.2.6/library/modules/$.defined"
    ],
    "npm:core-js@1.2.6/library/modules/$.set-proto": [
      "npm:core-js@1.2.6/library/modules/$",
      "npm:core-js@1.2.6/library/modules/$.is-object",
      "npm:core-js@1.2.6/library/modules/$.an-object",
      "npm:core-js@1.2.6/library/modules/$.ctx"
    ],
    "npm:core-js@1.2.6/library/modules/$.object-sap": [
      "npm:core-js@1.2.6/library/modules/$.export",
      "npm:core-js@1.2.6/library/modules/$.core",
      "npm:core-js@1.2.6/library/modules/$.fails"
    ],
    "npm:react@0.14.7/lib/ReactEmptyComponent": [
      "npm:react@0.14.7/lib/ReactElement",
      "npm:react@0.14.7/lib/ReactEmptyComponentRegistry",
      "npm:react@0.14.7/lib/ReactReconciler",
      "npm:react@0.14.7/lib/Object.assign"
    ],
    "npm:fbjs@0.6.1/lib/isTextNode": [
      "npm:fbjs@0.6.1/lib/isNode"
    ],
    "npm:process@0.11.2": [
      "npm:process@0.11.2/browser"
    ],
    "npm:react@0.14.7/lib/ReactEventEmitterMixin": [
      "npm:react@0.14.7/lib/EventPluginHub"
    ],
    "npm:react@0.14.7/lib/quoteAttributeValueForBrowser": [
      "npm:react@0.14.7/lib/escapeTextContentForBrowser"
    ],
    "npm:react@0.14.7/lib/FallbackCompositionState": [
      "npm:react@0.14.7/lib/PooledClass",
      "npm:react@0.14.7/lib/Object.assign",
      "npm:react@0.14.7/lib/getTextContentAccessor"
    ],
    "npm:react@0.14.7/lib/SyntheticInputEvent": [
      "npm:react@0.14.7/lib/SyntheticEvent"
    ],
    "npm:react@0.14.7/lib/SyntheticCompositionEvent": [
      "npm:react@0.14.7/lib/SyntheticEvent"
    ],
    "npm:react@0.14.7/lib/SyntheticMouseEvent": [
      "npm:react@0.14.7/lib/SyntheticUIEvent",
      "npm:react@0.14.7/lib/ViewportMetrics",
      "npm:react@0.14.7/lib/getEventModifierState"
    ],
    "npm:react@0.14.7/lib/SyntheticClipboardEvent": [
      "npm:react@0.14.7/lib/SyntheticEvent"
    ],
    "npm:react@0.14.7/lib/SyntheticFocusEvent": [
      "npm:react@0.14.7/lib/SyntheticUIEvent"
    ],
    "npm:react@0.14.7/lib/SyntheticKeyboardEvent": [
      "npm:react@0.14.7/lib/SyntheticUIEvent",
      "npm:react@0.14.7/lib/getEventCharCode",
      "npm:react@0.14.7/lib/getEventKey",
      "npm:react@0.14.7/lib/getEventModifierState"
    ],
    "npm:react@0.14.7/lib/SyntheticTouchEvent": [
      "npm:react@0.14.7/lib/SyntheticUIEvent",
      "npm:react@0.14.7/lib/getEventModifierState"
    ],
    "npm:react@0.14.7/lib/SyntheticDragEvent": [
      "npm:react@0.14.7/lib/SyntheticMouseEvent"
    ],
    "npm:query-string@3.0.0/index": [
      "npm:strict-uri-encode@1.1.0"
    ],
    "npm:warning@2.1.0/browser": [
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/canDefineProperty": [
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:history@2.0.0/lib/createLocation": [
      "npm:warning@2.1.0",
      "npm:history@2.0.0/lib/Actions",
      "npm:history@2.0.0/lib/PathUtils",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/ReactPropTypeLocationNames": [
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:fbjs@0.6.1/lib/keyMirror": [
      "npm:fbjs@0.6.1/lib/invariant",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/ReactMultiChild": [
      "npm:react@0.14.7/lib/ReactComponentEnvironment",
      "npm:react@0.14.7/lib/ReactMultiChildUpdateTypes",
      "npm:react@0.14.7/lib/ReactCurrentOwner",
      "npm:react@0.14.7/lib/ReactReconciler",
      "npm:react@0.14.7/lib/ReactChildReconciler",
      "npm:react@0.14.7/lib/flattenChildren",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:fbjs@0.6.1/lib/EventListener": [
      "npm:fbjs@0.6.1/lib/emptyFunction",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/EventPluginHub": [
      "npm:react@0.14.7/lib/EventPluginRegistry",
      "npm:react@0.14.7/lib/EventPluginUtils",
      "npm:react@0.14.7/lib/ReactErrorUtils",
      "npm:react@0.14.7/lib/accumulateInto",
      "npm:react@0.14.7/lib/forEachAccumulated",
      "npm:fbjs@0.6.1/lib/invariant",
      "npm:fbjs@0.6.1/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/ReactComponentEnvironment": [
      "npm:fbjs@0.6.1/lib/invariant",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/ReactNativeComponent": [
      "npm:react@0.14.7/lib/Object.assign",
      "npm:fbjs@0.6.1/lib/invariant",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/ReactInputSelection": [
      "npm:react@0.14.7/lib/ReactDOMSelection",
      "npm:fbjs@0.6.1/lib/containsNode",
      "npm:fbjs@0.6.1/lib/focusNode",
      "npm:fbjs@0.6.1/lib/getActiveElement"
    ],
    "npm:react@0.14.7/lib/ReactDOMIDOperations": [
      "npm:react@0.14.7/lib/DOMChildrenOperations",
      "npm:react@0.14.7/lib/DOMPropertyOperations",
      "npm:react@0.14.7/lib/ReactMount",
      "npm:react@0.14.7/lib/ReactPerf",
      "npm:fbjs@0.6.1/lib/invariant",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/EventPluginRegistry": [
      "npm:fbjs@0.6.1/lib/invariant",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/EventConstants": [
      "npm:fbjs@0.6.1/lib/keyMirror"
    ],
    "npm:react@0.14.7/lib/isEventSupported": [
      "npm:fbjs@0.6.1/lib/ExecutionEnvironment"
    ],
    "npm:react@0.14.7/lib/traverseAllChildren": [
      "npm:react@0.14.7/lib/ReactCurrentOwner",
      "npm:react@0.14.7/lib/ReactElement",
      "npm:react@0.14.7/lib/ReactInstanceHandles",
      "npm:react@0.14.7/lib/getIteratorFn",
      "npm:fbjs@0.6.1/lib/invariant",
      "npm:fbjs@0.6.1/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/ReactServerRenderingTransaction": [
      "npm:react@0.14.7/lib/PooledClass",
      "npm:react@0.14.7/lib/CallbackQueue",
      "npm:react@0.14.7/lib/Transaction",
      "npm:react@0.14.7/lib/Object.assign",
      "npm:fbjs@0.6.1/lib/emptyFunction"
    ],
    "npm:react@0.14.7/lib/ReactNoopUpdateQueue": [
      "npm:fbjs@0.6.1/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/ReactPropTypeLocations": [
      "npm:fbjs@0.6.1/lib/keyMirror"
    ],
    "npm:react@0.14.7/lib/Danger": [
      "npm:fbjs@0.6.1/lib/ExecutionEnvironment",
      "npm:fbjs@0.6.1/lib/createNodesFromMarkup",
      "npm:fbjs@0.6.1/lib/emptyFunction",
      "npm:fbjs@0.6.1/lib/getMarkupWrap",
      "npm:fbjs@0.6.1/lib/invariant",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/ReactMultiChildUpdateTypes": [
      "npm:fbjs@0.6.1/lib/keyMirror"
    ],
    "npm:react@0.14.7/lib/EventPropagators": [
      "npm:react@0.14.7/lib/EventConstants",
      "npm:react@0.14.7/lib/EventPluginHub",
      "npm:fbjs@0.6.1/lib/warning",
      "npm:react@0.14.7/lib/accumulateInto",
      "npm:react@0.14.7/lib/forEachAccumulated",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/SyntheticEvent": [
      "npm:react@0.14.7/lib/PooledClass",
      "npm:react@0.14.7/lib/Object.assign",
      "npm:fbjs@0.6.1/lib/emptyFunction",
      "npm:fbjs@0.6.1/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/AutoFocusUtils": [
      "npm:react@0.14.7/lib/ReactMount",
      "npm:react@0.14.7/lib/findDOMNode",
      "npm:fbjs@0.6.1/lib/focusNode"
    ],
    "npm:react@0.14.7/lib/CSSPropertyOperations": [
      "npm:react@0.14.7/lib/CSSProperty",
      "npm:fbjs@0.6.1/lib/ExecutionEnvironment",
      "npm:react@0.14.7/lib/ReactPerf",
      "npm:fbjs@0.6.1/lib/camelizeStyleName",
      "npm:react@0.14.7/lib/dangerousStyleValue",
      "npm:fbjs@0.6.1/lib/hyphenateStyleName",
      "npm:fbjs@0.6.1/lib/memoizeStringOnly",
      "npm:fbjs@0.6.1/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/ReactDOMInput": [
      "npm:react@0.14.7/lib/ReactDOMIDOperations",
      "npm:react@0.14.7/lib/LinkedValueUtils",
      "npm:react@0.14.7/lib/ReactMount",
      "npm:react@0.14.7/lib/ReactUpdates",
      "npm:react@0.14.7/lib/Object.assign",
      "npm:fbjs@0.6.1/lib/invariant",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/ReactDOMOption": [
      "npm:react@0.14.7/lib/ReactChildren",
      "npm:react@0.14.7/lib/ReactDOMSelect",
      "npm:react@0.14.7/lib/Object.assign",
      "npm:fbjs@0.6.1/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/ReactDOMSelect": [
      "npm:react@0.14.7/lib/LinkedValueUtils",
      "npm:react@0.14.7/lib/ReactMount",
      "npm:react@0.14.7/lib/ReactUpdates",
      "npm:react@0.14.7/lib/Object.assign",
      "npm:fbjs@0.6.1/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/ReactDOMTextarea": [
      "npm:react@0.14.7/lib/LinkedValueUtils",
      "npm:react@0.14.7/lib/ReactDOMIDOperations",
      "npm:react@0.14.7/lib/ReactUpdates",
      "npm:react@0.14.7/lib/Object.assign",
      "npm:fbjs@0.6.1/lib/invariant",
      "npm:fbjs@0.6.1/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/SyntheticUIEvent": [
      "npm:react@0.14.7/lib/SyntheticEvent",
      "npm:react@0.14.7/lib/getEventTarget"
    ],
    "npm:react@0.14.7/lib/SyntheticWheelEvent": [
      "npm:react@0.14.7/lib/SyntheticMouseEvent"
    ],
    "npm:react@0.14.7/lib/ReactDefaultPerfAnalysis": [
      "npm:react@0.14.7/lib/Object.assign"
    ],
    "npm:fbjs@0.6.1/lib/performanceNow": [
      "npm:fbjs@0.6.1/lib/performance"
    ],
    "npm:react@0.14.7/lib/ReactCompositeComponent": [
      "npm:react@0.14.7/lib/ReactComponentEnvironment",
      "npm:react@0.14.7/lib/ReactCurrentOwner",
      "npm:react@0.14.7/lib/ReactElement",
      "npm:react@0.14.7/lib/ReactInstanceMap",
      "npm:react@0.14.7/lib/ReactPerf",
      "npm:react@0.14.7/lib/ReactPropTypeLocations",
      "npm:react@0.14.7/lib/ReactPropTypeLocationNames",
      "npm:react@0.14.7/lib/ReactReconciler",
      "npm:react@0.14.7/lib/ReactUpdateQueue",
      "npm:react@0.14.7/lib/Object.assign",
      "npm:fbjs@0.6.1/lib/emptyObject",
      "npm:fbjs@0.6.1/lib/invariant",
      "npm:react@0.14.7/lib/shouldUpdateReactComponent",
      "npm:fbjs@0.6.1/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/ReactOwner": [
      "npm:fbjs@0.6.1/lib/invariant",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:deep-equal@1.0.1/index": [
      "npm:deep-equal@1.0.1/lib/keys",
      "npm:deep-equal@1.0.1/lib/is_arguments"
    ],
    "npm:core-js@1.2.6/library/modules/$.ctx": [
      "npm:core-js@1.2.6/library/modules/$.a-function"
    ],
    "npm:core-js@1.2.6/library/modules/$.iobject": [
      "npm:core-js@1.2.6/library/modules/$.cof"
    ],
    "npm:core-js@1.2.6/library/modules/$.an-object": [
      "npm:core-js@1.2.6/library/modules/$.is-object"
    ],
    "npm:strict-uri-encode@1.1.0": [
      "npm:strict-uri-encode@1.1.0/index"
    ],
    "npm:react@0.14.7/lib/getEventKey": [
      "npm:react@0.14.7/lib/getEventCharCode"
    ],
    "npm:fbjs@0.6.1/lib/camelizeStyleName": [
      "npm:fbjs@0.6.1/lib/camelize"
    ],
    "npm:react@0.14.7/lib/dangerousStyleValue": [
      "npm:react@0.14.7/lib/CSSProperty"
    ],
    "npm:fbjs@0.6.1/lib/hyphenateStyleName": [
      "npm:fbjs@0.6.1/lib/hyphenate"
    ],
    "npm:react@0.14.7/lib/ReactErrorUtils": [
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:fbjs@0.6.1/lib/createNodesFromMarkup": [
      "npm:fbjs@0.6.1/lib/ExecutionEnvironment",
      "npm:fbjs@0.6.1/lib/createArrayFromMixed",
      "npm:fbjs@0.6.1/lib/getMarkupWrap",
      "npm:fbjs@0.6.1/lib/invariant",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:fbjs@0.6.1/lib/getMarkupWrap": [
      "npm:fbjs@0.6.1/lib/ExecutionEnvironment",
      "npm:fbjs@0.6.1/lib/invariant",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/getTextContentAccessor": [
      "npm:fbjs@0.6.1/lib/ExecutionEnvironment"
    ],
    "npm:react@0.14.7/lib/ReactChildReconciler": [
      "npm:react@0.14.7/lib/ReactReconciler",
      "npm:react@0.14.7/lib/instantiateReactComponent",
      "npm:react@0.14.7/lib/shouldUpdateReactComponent",
      "npm:react@0.14.7/lib/traverseAllChildren",
      "npm:fbjs@0.6.1/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/flattenChildren": [
      "npm:react@0.14.7/lib/traverseAllChildren",
      "npm:fbjs@0.6.1/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/EventPluginUtils": [
      "npm:react@0.14.7/lib/EventConstants",
      "npm:react@0.14.7/lib/ReactErrorUtils",
      "npm:fbjs@0.6.1/lib/invariant",
      "npm:fbjs@0.6.1/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/accumulateInto": [
      "npm:fbjs@0.6.1/lib/invariant",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:react@0.14.7/lib/ReactDOMSelection": [
      "npm:fbjs@0.6.1/lib/ExecutionEnvironment",
      "npm:react@0.14.7/lib/getNodeForCharacterOffset",
      "npm:react@0.14.7/lib/getTextContentAccessor"
    ],
    "npm:react@0.14.7/lib/LinkedValueUtils": [
      "npm:react@0.14.7/lib/ReactPropTypes",
      "npm:react@0.14.7/lib/ReactPropTypeLocations",
      "npm:fbjs@0.6.1/lib/invariant",
      "npm:fbjs@0.6.1/lib/warning",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:fbjs@0.6.1/lib/performance": [
      "npm:fbjs@0.6.1/lib/ExecutionEnvironment"
    ],
    "npm:fbjs@0.6.1/lib/createArrayFromMixed": [
      "npm:fbjs@0.6.1/lib/toArray"
    ],
    "npm:fbjs@0.6.1/lib/toArray": [
      "npm:fbjs@0.6.1/lib/invariant",
      "github:jspm/nodelibs-process@0.1.2"
    ]
  },

  map: {
    "babel": "npm:babel-core@5.8.35",
    "babel-runtime": "npm:babel-runtime@5.8.35",
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "classnames": "npm:classnames@2.2.3",
    "clean-css": "npm:clean-css@3.4.9",
    "core-js": "npm:core-js@1.2.6",
    "css": "github:systemjs/plugin-css@0.1.20",
    "eslint": "npm:eslint@1.10.3",
    "express": "npm:express@4.13.4",
    "font-awesome": "npm:font-awesome@4.5.0",
    "history": "npm:history@2.0.0",
    "immutable": "npm:immutable@3.7.6",
    "jquery": "npm:jquery@2.2.0",
    "jspm-loader-jsx": "npm:jspm-loader-jsx@0.0.7",
    "react": "npm:react@0.14.7",
    "react-dom": "npm:react-dom@0.14.7",
    "react-redux": "npm:react-redux@4.3.0",
    "react-router": "npm:react-router@2.0.0-rc5",
    "react-tap-event-plugin": "npm:react-tap-event-plugin@0.2.2",
    "redux": "npm:redux@3.2.1",
    "redux-async": "npm:redux-async@2.0.1",
    "redux-logger": "npm:redux-logger@2.5.0",
    "redux-thunk": "npm:redux-thunk@1.0.3",
    "reselect": "npm:reselect@2.0.3",
    "systemjs/plugin-css": "github:systemjs/plugin-css@0.1.20",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.0"
    },
    "github:jspm/nodelibs-domain@0.1.0": {
      "domain-browser": "npm:domain-browser@1.1.7"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-net@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.2"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:twbs/bootstrap@3.3.6": {
      "jquery": "github:components/jquery@2.2.0"
    },
    "npm:accepts@1.2.13": {
      "mime-types": "npm:mime-types@2.1.9",
      "negotiator": "npm:negotiator@0.5.3"
    },
    "npm:align-text@0.1.4": {
      "kind-of": "npm:kind-of@3.0.2",
      "longest": "npm:longest@1.0.1",
      "repeat-string": "npm:repeat-string@1.5.2"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:argparse@1.0.5": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "sprintf-js": "npm:sprintf-js@1.0.3",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:array-union@1.0.1": {
      "array-uniq": "npm:array-uniq@1.0.2"
    },
    "npm:asap@2.0.3": {
      "domain": "github:jspm/nodelibs-domain@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asn1.js@4.4.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@4.10.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:async@0.2.10": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:async@1.5.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-runtime@5.8.35": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bn.js@4.10.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:brace-expansion@1.1.2": {
      "balanced-match": "npm:balanced-match@0.3.0",
      "concat-map": "npm:concat-map@0.0.1"
    },
    "npm:browserify-aes@1.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.2",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@4.0.0": {
      "bn.js": "npm:bn.js@4.10.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.2"
    },
    "npm:browserify-sign@4.0.0": {
      "bn.js": "npm:bn.js@4.10.1",
      "browserify-rsa": "npm:browserify-rsa@4.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.2.3",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:camel-case@1.2.2": {
      "sentence-case": "npm:sentence-case@1.1.3",
      "upper-case": "npm:upper-case@1.1.3"
    },
    "npm:center-align@0.1.3": {
      "align-text": "npm:align-text@0.1.4",
      "lazy-cache": "npm:lazy-cache@1.0.3"
    },
    "npm:chalk@1.1.1": {
      "ansi-styles": "npm:ansi-styles@2.1.0",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.4",
      "has-ansi": "npm:has-ansi@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-ansi": "npm:strip-ansi@3.0.0",
      "supports-color": "npm:supports-color@2.0.0"
    },
    "npm:cipher-base@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:clean-css@3.4.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.8.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.4.4",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:cli-cursor@1.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "restore-cursor": "npm:restore-cursor@1.0.1"
    },
    "npm:cli-width@1.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:cliui@2.1.0": {
      "center-align": "npm:center-align@0.1.3",
      "right-align": "npm:right-align@0.1.3",
      "wordwrap": "npm:wordwrap@0.0.2"
    },
    "npm:code-point-at@1.0.0": {
      "number-is-nan": "npm:number-is-nan@1.0.0"
    },
    "npm:commander@2.8.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:concat-stream@1.5.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@2.0.5",
      "typedarray": "npm:typedarray@0.0.6"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:content-disposition@0.5.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:cookie-signature@1.0.6": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.10.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.2.3"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.4"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.11.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.0",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@5.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.2"
    },
    "npm:d@0.1.1": {
      "es5-ext": "npm:es5-ext@0.10.11"
    },
    "npm:debug@2.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ms": "npm:ms@0.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:decamelize@1.1.2": {
      "escape-string-regexp": "npm:escape-string-regexp@1.0.4"
    },
    "npm:del@2.2.0": {
      "globby": "npm:globby@4.0.0",
      "is-path-cwd": "npm:is-path-cwd@1.0.0",
      "is-path-in-cwd": "npm:is-path-in-cwd@1.0.0",
      "object-assign": "npm:object-assign@4.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "pify": "npm:pify@2.3.0",
      "pinkie-promise": "npm:pinkie-promise@2.0.0",
      "rimraf": "npm:rimraf@2.5.1"
    },
    "npm:depd@1.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:destroy@1.0.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:diffie-hellman@5.0.2": {
      "bn.js": "npm:bn.js@4.10.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:doctrine@0.7.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "esutils": "npm:esutils@1.1.6",
      "isarray": "npm:isarray@0.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:domain-browser@1.1.7": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:elliptic@6.2.3": {
      "bn.js": "npm:bn.js@4.10.1",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:envify@3.4.0": {
      "jstransform": "npm:jstransform@10.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "through": "npm:through@2.3.8"
    },
    "npm:es5-ext@0.10.11": {
      "es6-iterator": "npm:es6-iterator@2.0.0",
      "es6-symbol": "npm:es6-symbol@3.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:es6-iterator@2.0.0": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.11",
      "es6-symbol": "npm:es6-symbol@3.0.2"
    },
    "npm:es6-map@0.1.3": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.11",
      "es6-iterator": "npm:es6-iterator@2.0.0",
      "es6-set": "npm:es6-set@0.1.4",
      "es6-symbol": "npm:es6-symbol@3.0.2",
      "event-emitter": "npm:event-emitter@0.3.4"
    },
    "npm:es6-set@0.1.4": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.11",
      "es6-iterator": "npm:es6-iterator@2.0.0",
      "es6-symbol": "npm:es6-symbol@3.0.2",
      "event-emitter": "npm:event-emitter@0.3.4"
    },
    "npm:es6-symbol@3.0.2": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.11"
    },
    "npm:es6-weak-map@2.0.1": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.11",
      "es6-iterator": "npm:es6-iterator@2.0.0",
      "es6-symbol": "npm:es6-symbol@3.0.2"
    },
    "npm:escope@3.4.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "es6-map": "npm:es6-map@0.1.3",
      "es6-weak-map": "npm:es6-weak-map@2.0.1",
      "esrecurse": "npm:esrecurse@3.1.1",
      "estraverse": "npm:estraverse@4.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:eslint@1.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "chalk": "npm:chalk@1.1.1",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "concat-stream": "npm:concat-stream@1.5.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "debug": "npm:debug@2.2.0",
      "doctrine": "npm:doctrine@0.7.2",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.4",
      "escope": "npm:escope@3.4.0",
      "espree": "npm:espree@2.2.5",
      "estraverse": "npm:estraverse@4.1.1",
      "estraverse-fb": "npm:estraverse-fb@1.3.1",
      "esutils": "npm:esutils@2.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "file-entry-cache": "npm:file-entry-cache@1.2.4",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@5.0.15",
      "globals": "npm:globals@8.18.0",
      "handlebars": "npm:handlebars@4.0.5",
      "inquirer": "npm:inquirer@0.11.4",
      "is-my-json-valid": "npm:is-my-json-valid@2.12.4",
      "is-resolvable": "npm:is-resolvable@1.0.0",
      "js-yaml": "npm:js-yaml@3.4.5",
      "json-stable-stringify": "npm:json-stable-stringify@1.0.1",
      "lodash.clonedeep": "npm:lodash.clonedeep@3.0.2",
      "lodash.merge": "npm:lodash.merge@3.3.2",
      "lodash.omit": "npm:lodash.omit@3.1.0",
      "minimatch": "npm:minimatch@3.0.0",
      "mkdirp": "npm:mkdirp@0.5.1",
      "object-assign": "npm:object-assign@4.0.1",
      "optionator": "npm:optionator@0.6.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.0",
      "path-is-inside": "npm:path-is-inside@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "shelljs": "npm:shelljs@0.5.3",
      "strip-json-comments": "npm:strip-json-comments@1.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "text-table": "npm:text-table@0.2.0",
      "user-home": "npm:user-home@2.0.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xml-escape": "npm:xml-escape@1.0.0"
    },
    "npm:espree@2.2.5": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:esprima-fb@13001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:esprima@2.7.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:esrecurse@3.1.1": {
      "estraverse": "npm:estraverse@3.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:estraverse-fb@1.3.1": {
      "estraverse": "npm:estraverse@4.1.1"
    },
    "npm:estraverse@3.1.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:estraverse@4.1.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:etag@1.7.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:event-emitter@0.3.4": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.11",
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:exit-hook@1.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:express@4.13.4": {
      "accepts": "npm:accepts@1.2.13",
      "array-flatten": "npm:array-flatten@1.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "content-disposition": "npm:content-disposition@0.5.1",
      "content-type": "npm:content-type@1.0.1",
      "cookie": "npm:cookie@0.1.5",
      "cookie-signature": "npm:cookie-signature@1.0.6",
      "debug": "npm:debug@2.2.0",
      "depd": "npm:depd@1.1.0",
      "escape-html": "npm:escape-html@1.0.3",
      "etag": "npm:etag@1.7.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "finalhandler": "npm:finalhandler@0.4.1",
      "fresh": "npm:fresh@0.3.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "merge-descriptors": "npm:merge-descriptors@1.0.1",
      "methods": "npm:methods@1.1.2",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "on-finished": "npm:on-finished@2.3.0",
      "parseurl": "npm:parseurl@1.3.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-to-regexp": "npm:path-to-regexp@0.1.7",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "proxy-addr": "npm:proxy-addr@1.0.10",
      "qs": "npm:qs@4.0.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "range-parser": "npm:range-parser@1.0.3",
      "send": "npm:send@0.13.1",
      "serve-static": "npm:serve-static@1.10.2",
      "type-is": "npm:type-is@1.6.11",
      "utils-merge": "npm:utils-merge@1.0.0",
      "vary": "npm:vary@1.0.1"
    },
    "npm:fbjs@0.2.1": {
      "core-js": "npm:core-js@1.2.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise": "npm:promise@7.1.1",
      "whatwg-fetch": "npm:whatwg-fetch@0.9.0"
    },
    "npm:fbjs@0.6.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:figures@1.4.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:file-entry-cache@1.2.4": {
      "flat-cache": "npm:flat-cache@1.0.10",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "object-assign": "npm:object-assign@4.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:finalhandler@0.4.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "debug": "npm:debug@2.2.0",
      "escape-html": "npm:escape-html@1.0.3",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "on-finished": "npm:on-finished@2.3.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "unpipe": "npm:unpipe@1.0.0"
    },
    "npm:flat-cache@1.0.10": {
      "del": "npm:del@2.2.0",
      "graceful-fs": "npm:graceful-fs@4.1.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "read-json-sync": "npm:read-json-sync@1.1.1",
      "write": "npm:write@0.2.1"
    },
    "npm:font-awesome@4.5.0": {
      "css": "github:systemjs/plugin-css@0.1.20"
    },
    "npm:generate-function@2.0.0": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:generate-object-property@1.2.0": {
      "is-property": "npm:is-property@1.0.2"
    },
    "npm:glob@5.0.15": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inflight": "npm:inflight@1.0.4",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@3.0.0",
      "once": "npm:once@1.3.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:glob@6.0.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inflight": "npm:inflight@1.0.4",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@3.0.0",
      "once": "npm:once@1.3.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:globals@8.18.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:globby@4.0.0": {
      "array-union": "npm:array-union@1.0.1",
      "arrify": "npm:arrify@1.0.1",
      "glob": "npm:glob@6.0.4",
      "object-assign": "npm:object-assign@4.0.1",
      "pify": "npm:pify@2.3.0",
      "pinkie-promise": "npm:pinkie-promise@2.0.0"
    },
    "npm:graceful-fs@4.1.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:handlebars@4.0.5": {
      "async": "npm:async@1.5.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "optimist": "npm:optimist@0.6.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.4.4",
      "uglify-js": "npm:uglify-js@2.6.1"
    },
    "npm:has-ansi@2.0.0": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:history@2.0.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "deep-equal": "npm:deep-equal@1.0.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "invariant": "npm:invariant@2.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "query-string": "npm:query-string@3.0.0",
      "warning": "npm:warning@2.1.0"
    },
    "npm:http-errors@1.3.1": {
      "inherits": "npm:inherits@2.0.1",
      "statuses": "npm:statuses@1.2.1"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inflight@1.0.4": {
      "once": "npm:once@1.3.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:inquirer@0.11.4": {
      "ansi-escapes": "npm:ansi-escapes@1.1.1",
      "ansi-regex": "npm:ansi-regex@2.0.0",
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "chalk": "npm:chalk@1.1.1",
      "cli-cursor": "npm:cli-cursor@1.0.2",
      "cli-width": "npm:cli-width@1.1.1",
      "figures": "npm:figures@1.4.0",
      "lodash": "npm:lodash@3.10.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readline2": "npm:readline2@1.0.1",
      "run-async": "npm:run-async@0.1.0",
      "rx-lite": "npm:rx-lite@3.1.2",
      "string-width": "npm:string-width@1.0.1",
      "strip-ansi": "npm:strip-ansi@3.0.0",
      "through": "npm:through@2.3.8",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:invariant@2.2.0": {
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:is-buffer@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:is-fullwidth-code-point@1.0.0": {
      "number-is-nan": "npm:number-is-nan@1.0.0"
    },
    "npm:is-my-json-valid@2.12.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "generate-function": "npm:generate-function@2.0.0",
      "generate-object-property": "npm:generate-object-property@1.2.0",
      "jsonpointer": "npm:jsonpointer@2.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:is-path-cwd@1.0.0": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:is-path-in-cwd@1.0.0": {
      "is-path-inside": "npm:is-path-inside@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:is-path-inside@1.0.0": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-inside": "npm:path-is-inside@1.0.1"
    },
    "npm:is-resolvable@1.0.0": {
      "tryit": "npm:tryit@1.0.2"
    },
    "npm:js-yaml@3.4.5": {
      "argparse": "npm:argparse@1.0.5",
      "esprima": "npm:esprima@2.7.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:json-stable-stringify@1.0.1": {
      "jsonify": "npm:jsonify@0.0.0"
    },
    "npm:jsonpointer@2.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:jspm-loader-jsx@0.0.7": {
      "pascal-case": "npm:pascal-case@1.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "react": "npm:react@0.13.3",
      "react-hot-api": "github:gaearon/react-hot-api@0.4.5"
    },
    "npm:jstransform@10.1.0": {
      "base62": "npm:base62@0.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima-fb": "npm:esprima-fb@13001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.1.31"
    },
    "npm:kind-of@3.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "is-buffer": "npm:is-buffer@1.1.2"
    },
    "npm:lazy-cache@1.0.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:levn@0.2.5": {
      "prelude-ls": "npm:prelude-ls@1.1.2",
      "type-check": "npm:type-check@0.3.2"
    },
    "npm:lodash._baseassign@3.2.0": {
      "lodash._basecopy": "npm:lodash._basecopy@3.0.1",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash._baseclone@3.3.0": {
      "lodash._arraycopy": "npm:lodash._arraycopy@3.0.0",
      "lodash._arrayeach": "npm:lodash._arrayeach@3.0.0",
      "lodash._baseassign": "npm:lodash._baseassign@3.2.0",
      "lodash._basefor": "npm:lodash._basefor@3.0.3",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash._basedifference@3.0.3": {
      "lodash._baseindexof": "npm:lodash._baseindexof@3.1.0",
      "lodash._cacheindexof": "npm:lodash._cacheindexof@3.0.2",
      "lodash._createcache": "npm:lodash._createcache@3.1.2"
    },
    "npm:lodash._baseflatten@3.1.4": {
      "lodash.isarguments": "npm:lodash.isarguments@3.0.6",
      "lodash.isarray": "npm:lodash.isarray@3.0.4"
    },
    "npm:lodash._createassigner@3.1.1": {
      "lodash._bindcallback": "npm:lodash._bindcallback@3.0.1",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9",
      "lodash.restparam": "npm:lodash.restparam@3.6.1"
    },
    "npm:lodash._createcache@3.1.2": {
      "lodash._getnative": "npm:lodash._getnative@3.9.1"
    },
    "npm:lodash._pickbyarray@3.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash._pickbycallback@3.0.0": {
      "lodash._basefor": "npm:lodash._basefor@3.0.3",
      "lodash.keysin": "npm:lodash.keysin@3.0.8"
    },
    "npm:lodash.clonedeep@3.0.2": {
      "lodash._baseclone": "npm:lodash._baseclone@3.3.0",
      "lodash._bindcallback": "npm:lodash._bindcallback@3.0.1"
    },
    "npm:lodash.isplainobject@3.2.0": {
      "lodash._basefor": "npm:lodash._basefor@3.0.3",
      "lodash.isarguments": "npm:lodash.isarguments@3.0.6",
      "lodash.keysin": "npm:lodash.keysin@3.0.8"
    },
    "npm:lodash.keys@3.1.2": {
      "lodash._getnative": "npm:lodash._getnative@3.9.1",
      "lodash.isarguments": "npm:lodash.isarguments@3.0.6",
      "lodash.isarray": "npm:lodash.isarray@3.0.4"
    },
    "npm:lodash.keysin@3.0.8": {
      "lodash.isarguments": "npm:lodash.isarguments@3.0.6",
      "lodash.isarray": "npm:lodash.isarray@3.0.4"
    },
    "npm:lodash.merge@3.3.2": {
      "lodash._arraycopy": "npm:lodash._arraycopy@3.0.0",
      "lodash._arrayeach": "npm:lodash._arrayeach@3.0.0",
      "lodash._createassigner": "npm:lodash._createassigner@3.1.1",
      "lodash._getnative": "npm:lodash._getnative@3.9.1",
      "lodash.isarguments": "npm:lodash.isarguments@3.0.6",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.isplainobject": "npm:lodash.isplainobject@3.2.0",
      "lodash.istypedarray": "npm:lodash.istypedarray@3.0.4",
      "lodash.keys": "npm:lodash.keys@3.1.2",
      "lodash.keysin": "npm:lodash.keysin@3.0.8",
      "lodash.toplainobject": "npm:lodash.toplainobject@3.0.0"
    },
    "npm:lodash.omit@3.1.0": {
      "lodash._arraymap": "npm:lodash._arraymap@3.0.0",
      "lodash._basedifference": "npm:lodash._basedifference@3.0.3",
      "lodash._baseflatten": "npm:lodash._baseflatten@3.1.4",
      "lodash._bindcallback": "npm:lodash._bindcallback@3.0.1",
      "lodash._pickbyarray": "npm:lodash._pickbyarray@3.0.2",
      "lodash._pickbycallback": "npm:lodash._pickbycallback@3.0.0",
      "lodash.keysin": "npm:lodash.keysin@3.0.8",
      "lodash.restparam": "npm:lodash.restparam@3.6.1"
    },
    "npm:lodash.toplainobject@3.0.0": {
      "lodash._basecopy": "npm:lodash._basecopy@3.0.1",
      "lodash.keysin": "npm:lodash.keysin@3.0.8"
    },
    "npm:lodash@3.10.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash@4.2.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:loose-envify@1.1.0": {
      "js-tokens": "npm:js-tokens@1.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.10.1",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:mime-db@1.21.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:mime-types@2.1.9": {
      "mime-db": "npm:mime-db@1.21.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:mime@1.3.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:minimatch@3.0.0": {
      "brace-expansion": "npm:brace-expansion@1.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:mkdirp@0.5.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:mute-stream@0.0.5": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:on-finished@2.3.0": {
      "ee-first": "npm:ee-first@1.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:once@1.3.3": {
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:optimist@0.6.1": {
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "wordwrap": "npm:wordwrap@0.0.2"
    },
    "npm:optionator@0.6.0": {
      "deep-is": "npm:deep-is@0.1.3",
      "fast-levenshtein": "npm:fast-levenshtein@1.0.7",
      "levn": "npm:levn@0.2.5",
      "prelude-ls": "npm:prelude-ls@1.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "type-check": "npm:type-check@0.3.2",
      "wordwrap": "npm:wordwrap@0.0.2"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:os-homedir@1.0.1": {
      "os": "github:jspm/nodelibs-os@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:parse-asn1@5.0.0": {
      "asn1.js": "npm:asn1.js@4.4.0",
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:parseurl@1.3.1": {
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:pascal-case@1.1.2": {
      "camel-case": "npm:camel-case@1.2.2",
      "upper-case-first": "npm:upper-case-first@1.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-is-absolute@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-is-inside@1.0.1": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:pify@2.3.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pinkie-promise@2.0.0": {
      "pinkie": "npm:pinkie@2.0.4"
    },
    "npm:process-nextick-args@1.0.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:promise@7.1.1": {
      "asap": "npm:asap@2.0.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:proxy-addr@1.0.10": {
      "forwarded": "npm:forwarded@0.1.0",
      "ipaddr.js": "npm:ipaddr.js@1.0.5"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.10.1",
      "browserify-rsa": "npm:browserify-rsa@4.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "randombytes": "npm:randombytes@2.0.2"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:query-string@3.0.0": {
      "strict-uri-encode": "npm:strict-uri-encode@1.1.0"
    },
    "npm:randombytes@2.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react-dom@0.14.7": {
      "react": "npm:react@0.14.7"
    },
    "npm:react-redux@4.3.0": {
      "hoist-non-react-statics": "npm:hoist-non-react-statics@1.0.5",
      "invariant": "npm:invariant@2.2.0",
      "lodash": "npm:lodash@4.2.1",
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@0.14.7",
      "redux": "npm:redux@3.2.1"
    },
    "npm:react-router@2.0.0-rc5": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "history": "npm:history@2.0.0",
      "invariant": "npm:invariant@2.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "warning": "npm:warning@2.1.0"
    },
    "npm:react-tap-event-plugin@0.2.2": {
      "fbjs": "npm:fbjs@0.2.1",
      "react": "npm:react@0.14.7"
    },
    "npm:react@0.13.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "envify": "npm:envify@3.4.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react@0.14.7": {
      "fbjs": "npm:fbjs@0.6.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:read-json-sync@1.1.1": {
      "graceful-fs": "npm:graceful-fs@4.1.3"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.6",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:readline2@1.0.1": {
      "code-point-at": "npm:code-point-at@1.0.0",
      "is-fullwidth-code-point": "npm:is-fullwidth-code-point@1.0.0",
      "mute-stream": "npm:mute-stream@0.0.5",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readline": "github:jspm/nodelibs-readline@0.1.0"
    },
    "npm:redux@3.2.1": {
      "lodash": "npm:lodash@4.2.1",
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:restore-cursor@1.0.1": {
      "exit-hook": "npm:exit-hook@1.1.1",
      "onetime": "npm:onetime@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:right-align@0.1.3": {
      "align-text": "npm:align-text@0.1.4"
    },
    "npm:rimraf@2.5.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@6.0.4",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:run-async@0.1.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "once": "npm:once@1.3.3"
    },
    "npm:rx-lite@3.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:send@0.13.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "debug": "npm:debug@2.2.0",
      "depd": "npm:depd@1.1.0",
      "destroy": "npm:destroy@1.0.4",
      "escape-html": "npm:escape-html@1.0.3",
      "etag": "npm:etag@1.7.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fresh": "npm:fresh@0.3.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http-errors": "npm:http-errors@1.3.1",
      "mime": "npm:mime@1.3.4",
      "ms": "npm:ms@0.7.1",
      "on-finished": "npm:on-finished@2.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "range-parser": "npm:range-parser@1.0.3",
      "statuses": "npm:statuses@1.2.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:sentence-case@1.1.3": {
      "lower-case": "npm:lower-case@1.1.3"
    },
    "npm:serve-static@1.10.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "escape-html": "npm:escape-html@1.0.3",
      "parseurl": "npm:parseurl@1.3.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "send": "npm:send@0.13.1",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:sha.js@2.4.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:shelljs@0.5.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.1.31": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.5.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:statuses@1.2.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string-width@1.0.1": {
      "code-point-at": "npm:code-point-at@1.0.0",
      "is-fullwidth-code-point": "npm:is-fullwidth-code-point@1.0.0",
      "strip-ansi": "npm:strip-ansi@3.0.0"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:strip-ansi@3.0.0": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:strip-json-comments@1.0.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:supports-color@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:through@2.3.8": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:timers-browserify@1.4.2": {
      "process": "npm:process@0.11.2"
    },
    "npm:type-check@0.3.2": {
      "prelude-ls": "npm:prelude-ls@1.1.2"
    },
    "npm:type-is@1.6.11": {
      "media-typer": "npm:media-typer@0.3.0",
      "mime-types": "npm:mime-types@2.1.9"
    },
    "npm:uglify-js@2.6.1": {
      "async": "npm:async@0.2.10",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.3",
      "uglify-to-browserify": "npm:uglify-to-browserify@1.0.2",
      "yargs": "npm:yargs@3.10.0"
    },
    "npm:uglify-to-browserify@1.0.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:upper-case-first@1.1.2": {
      "upper-case": "npm:upper-case@1.1.3"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:user-home@2.0.0": {
      "os-homedir": "npm:os-homedir@1.0.1"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:warning@2.1.0": {
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:window-size@0.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:write@0.2.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:yargs@3.10.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "camelcase": "npm:camelcase@1.2.1",
      "cliui": "npm:cliui@2.1.0",
      "decamelize": "npm:decamelize@1.1.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "window-size": "npm:window-size@0.1.0"
    }
  }
});
