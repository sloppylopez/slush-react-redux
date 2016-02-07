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

  depCache: {
    "app.js": [
      "npm:react@0.14.7.js",
      "npm:react-dom@0.14.7.js",
      "stylesheets/main.css!github:systemjs/plugin-css@0.1.20.js",
      "github:twbs/bootstrap@3.3.6/css/bootstrap.css!github:systemjs/plugin-css@0.1.20.js",
      "npm:font-awesome@4.5.0/css/font-awesome.css!github:systemjs/plugin-css@0.1.20.js",
      "npm:react-router@2.0.0-rc5.js",
      "containers/App.js",
      "containers/HomePage.js"
    ],
    "npm:react-router@2.0.0-rc5.js": [
      "npm:react-router@2.0.0-rc5/lib/index.js"
    ],
    "containers/App.js": [
      "npm:babel-runtime@5.8.35/helpers/get.js",
      "npm:babel-runtime@5.8.35/helpers/inherits.js",
      "npm:babel-runtime@5.8.35/helpers/create-class.js",
      "npm:babel-runtime@5.8.35/helpers/class-call-check.js",
      "npm:react@0.14.7.js"
    ],
    "npm:react@0.14.7.js": [
      "npm:react@0.14.7/react.js"
    ],
    "npm:react-dom@0.14.7.js": [
      "npm:react-dom@0.14.7/index.js"
    ],
    "containers/HomePage.js": [
      "npm:babel-runtime@5.8.35/helpers/get.js",
      "npm:babel-runtime@5.8.35/helpers/inherits.js",
      "npm:babel-runtime@5.8.35/helpers/create-class.js",
      "npm:babel-runtime@5.8.35/helpers/class-call-check.js",
      "npm:react@0.14.7.js",
      "containers/MainHeader.js",
      "containers/MainBody.js",
      "containers/MainFooter.js"
    ],
    "npm:babel-runtime@5.8.35/helpers/get.js": [
      "npm:babel-runtime@5.8.35/core-js/object/get-own-property-descriptor.js"
    ],
    "npm:babel-runtime@5.8.35/helpers/inherits.js": [
      "npm:babel-runtime@5.8.35/core-js/object/create.js",
      "npm:babel-runtime@5.8.35/core-js/object/set-prototype-of.js"
    ],
    "npm:babel-runtime@5.8.35/helpers/create-class.js": [
      "npm:babel-runtime@5.8.35/core-js/object/define-property.js"
    ],
    "npm:react@0.14.7/react.js": [
      "npm:react@0.14.7/lib/React.js"
    ],
    "npm:react-router@2.0.0-rc5/lib/index.js": [
      "npm:react-router@2.0.0-rc5/lib/Router.js",
      "npm:react-router@2.0.0-rc5/lib/Link.js",
      "npm:react-router@2.0.0-rc5/lib/IndexLink.js",
      "npm:react-router@2.0.0-rc5/lib/IndexRedirect.js",
      "npm:react-router@2.0.0-rc5/lib/IndexRoute.js",
      "npm:react-router@2.0.0-rc5/lib/Redirect.js",
      "npm:react-router@2.0.0-rc5/lib/Route.js",
      "npm:react-router@2.0.0-rc5/lib/History.js",
      "npm:react-router@2.0.0-rc5/lib/Lifecycle.js",
      "npm:react-router@2.0.0-rc5/lib/RouteContext.js",
      "npm:react-router@2.0.0-rc5/lib/useRoutes.js",
      "npm:react-router@2.0.0-rc5/lib/RouteUtils.js",
      "npm:react-router@2.0.0-rc5/lib/RouterContext.js",
      "npm:react-router@2.0.0-rc5/lib/RoutingContext.js",
      "npm:react-router@2.0.0-rc5/lib/PropTypes.js",
      "npm:react-router@2.0.0-rc5/lib/match.js",
      "npm:react-router@2.0.0-rc5/lib/useRouterHistory.js",
      "npm:react-router@2.0.0-rc5/lib/PatternUtils.js",
      "npm:react-router@2.0.0-rc5/lib/browserHistory.js",
      "npm:react-router@2.0.0-rc5/lib/hashHistory.js",
      "npm:react-router@2.0.0-rc5/lib/createMemoryHistory.js"
    ],
    "npm:react-dom@0.14.7/index.js": [
      "npm:react@0.14.7/lib/ReactDOM.js"
    ],
    "containers/MainFooter.js": [
      "npm:babel-runtime@5.8.35/helpers/get.js",
      "npm:babel-runtime@5.8.35/helpers/inherits.js",
      "npm:babel-runtime@5.8.35/helpers/create-class.js",
      "npm:babel-runtime@5.8.35/helpers/class-call-check.js",
      "npm:react@0.14.7.js"
    ],
    "containers/MainBody.js": [
      "npm:babel-runtime@5.8.35/helpers/get.js",
      "npm:babel-runtime@5.8.35/helpers/inherits.js",
      "npm:babel-runtime@5.8.35/helpers/create-class.js",
      "npm:babel-runtime@5.8.35/helpers/class-call-check.js",
      "npm:react@0.14.7.js",
      "containers/TechnologiesTable.js"
    ],
    "containers/MainHeader.js": [
      "npm:babel-runtime@5.8.35/helpers/get.js",
      "npm:babel-runtime@5.8.35/helpers/inherits.js",
      "npm:babel-runtime@5.8.35/helpers/create-class.js",
      "npm:babel-runtime@5.8.35/helpers/class-call-check.js",
      "npm:react@0.14.7.js"
    ],
    "npm:react-router@2.0.0-rc5/lib/PropTypes.js": [
      "npm:react@0.14.7.js"
    ],
    "npm:babel-runtime@5.8.35/core-js/object/create.js": [
      "npm:core-js@1.2.6/library/fn/object/create.js"
    ],
    "npm:babel-runtime@5.8.35/core-js/object/set-prototype-of.js": [
      "npm:core-js@1.2.6/library/fn/object/set-prototype-of.js"
    ],
    "npm:babel-runtime@5.8.35/core-js/object/define-property.js": [
      "npm:core-js@1.2.6/library/fn/object/define-property.js"
    ],
    "npm:react@0.14.7/lib/React.js": [
      "npm:react@0.14.7/lib/ReactDOM.js",
      "npm:react@0.14.7/lib/ReactDOMServer.js",
      "npm:react@0.14.7/lib/ReactIsomorphic.js",
      "npm:react@0.14.7/lib/Object.assign.js",
      "npm:react@0.14.7/lib/deprecated.js"
    ],
    "npm:react-router@2.0.0-rc5/lib/IndexLink.js": [
      "npm:react@0.14.7.js",
      "npm:react-router@2.0.0-rc5/lib/Link.js"
    ],
    "npm:babel-runtime@5.8.35/core-js/object/get-own-property-descriptor.js": [
      "npm:core-js@1.2.6/library/fn/object/get-own-property-descriptor.js"
    ],
    "npm:react-router@2.0.0-rc5/lib/Link.js": [
      "npm:react@0.14.7.js",
      "npm:react-router@2.0.0-rc5/lib/warning.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react-router@2.0.0-rc5/lib/IndexRedirect.js": [
      "npm:react@0.14.7.js",
      "npm:react-router@2.0.0-rc5/lib/warning.js",
      "npm:invariant@2.2.0.js",
      "npm:react-router@2.0.0-rc5/lib/Redirect.js",
      "npm:react-router@2.0.0-rc5/lib/PropTypes.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react-router@2.0.0-rc5/lib/IndexRoute.js": [
      "npm:react@0.14.7.js",
      "npm:react-router@2.0.0-rc5/lib/warning.js",
      "npm:invariant@2.2.0.js",
      "npm:react-router@2.0.0-rc5/lib/RouteUtils.js",
      "npm:react-router@2.0.0-rc5/lib/PropTypes.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react-router@2.0.0-rc5/lib/Redirect.js": [
      "npm:react@0.14.7.js",
      "npm:invariant@2.2.0.js",
      "npm:react-router@2.0.0-rc5/lib/RouteUtils.js",
      "npm:react-router@2.0.0-rc5/lib/PatternUtils.js",
      "npm:react-router@2.0.0-rc5/lib/PropTypes.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react-router@2.0.0-rc5/lib/Route.js": [
      "npm:react@0.14.7.js",
      "npm:invariant@2.2.0.js",
      "npm:react-router@2.0.0-rc5/lib/RouteUtils.js",
      "npm:react-router@2.0.0-rc5/lib/PropTypes.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react-router@2.0.0-rc5/lib/History.js": [
      "npm:react-router@2.0.0-rc5/lib/warning.js",
      "npm:react-router@2.0.0-rc5/lib/PropTypes.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react-router@2.0.0-rc5/lib/Lifecycle.js": [
      "npm:react-router@2.0.0-rc5/lib/warning.js",
      "npm:react@0.14.7.js",
      "npm:invariant@2.2.0.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react-router@2.0.0-rc5/lib/RouteContext.js": [
      "npm:react-router@2.0.0-rc5/lib/warning.js",
      "npm:react@0.14.7.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react-router@2.0.0-rc5/lib/RouteUtils.js": [
      "npm:react@0.14.7.js",
      "npm:react-router@2.0.0-rc5/lib/warning.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react-router@2.0.0-rc5/lib/RouterContext.js": [
      "npm:invariant@2.2.0.js",
      "npm:react@0.14.7.js",
      "npm:react-router@2.0.0-rc5/lib/deprecateObjectProperties.js",
      "npm:react-router@2.0.0-rc5/lib/getRouteParams.js",
      "npm:react-router@2.0.0-rc5/lib/RouteUtils.js",
      "npm:react-router@2.0.0-rc5/lib/warning.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react-router@2.0.0-rc5/lib/RoutingContext.js": [
      "npm:react@0.14.7.js",
      "npm:react-router@2.0.0-rc5/lib/RouterContext.js",
      "npm:react-router@2.0.0-rc5/lib/warning.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react-router@2.0.0-rc5/lib/Router.js": [
      "npm:history@2.0.0/lib/createHashHistory.js",
      "npm:history@2.0.0/lib/useQueries.js",
      "npm:react@0.14.7.js",
      "npm:react-router@2.0.0-rc5/lib/createTransitionManager.js",
      "npm:react-router@2.0.0-rc5/lib/PropTypes.js",
      "npm:react-router@2.0.0-rc5/lib/RouterContext.js",
      "npm:react-router@2.0.0-rc5/lib/RouteUtils.js",
      "npm:react-router@2.0.0-rc5/lib/RouterUtils.js",
      "npm:react-router@2.0.0-rc5/lib/warning.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react-router@2.0.0-rc5/lib/useRoutes.js": [
      "npm:history@2.0.0/lib/useQueries.js",
      "npm:react-router@2.0.0-rc5/lib/createTransitionManager.js",
      "npm:react-router@2.0.0-rc5/lib/warning.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react-router@2.0.0-rc5/lib/match.js": [
      "npm:invariant@2.2.0.js",
      "npm:react-router@2.0.0-rc5/lib/createMemoryHistory.js",
      "npm:react-router@2.0.0-rc5/lib/createTransitionManager.js",
      "npm:react-router@2.0.0-rc5/lib/RouteUtils.js",
      "npm:react-router@2.0.0-rc5/lib/RouterUtils.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react-router@2.0.0-rc5/lib/PatternUtils.js": [
      "npm:invariant@2.2.0.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react-router@2.0.0-rc5/lib/useRouterHistory.js": [
      "npm:history@2.0.0/lib/useQueries.js",
      "npm:history@2.0.0/lib/useBasename.js"
    ],
    "npm:react-router@2.0.0-rc5/lib/browserHistory.js": [
      "npm:history@2.0.0/lib/createBrowserHistory.js",
      "npm:react-router@2.0.0-rc5/lib/createRouterHistory.js"
    ],
    "npm:react-router@2.0.0-rc5/lib/hashHistory.js": [
      "npm:history@2.0.0/lib/createHashHistory.js",
      "npm:react-router@2.0.0-rc5/lib/createRouterHistory.js"
    ],
    "npm:react-router@2.0.0-rc5/lib/createMemoryHistory.js": [
      "npm:history@2.0.0/lib/useQueries.js",
      "npm:history@2.0.0/lib/createMemoryHistory.js"
    ],
    "npm:react@0.14.7/lib/ReactDOM.js": [
      "npm:react@0.14.7/lib/ReactCurrentOwner.js",
      "npm:react@0.14.7/lib/ReactDOMTextComponent.js",
      "npm:react@0.14.7/lib/ReactDefaultInjection.js",
      "npm:react@0.14.7/lib/ReactInstanceHandles.js",
      "npm:react@0.14.7/lib/ReactMount.js",
      "npm:react@0.14.7/lib/ReactPerf.js",
      "npm:react@0.14.7/lib/ReactReconciler.js",
      "npm:react@0.14.7/lib/ReactUpdates.js",
      "npm:react@0.14.7/lib/ReactVersion.js",
      "npm:react@0.14.7/lib/findDOMNode.js",
      "npm:react@0.14.7/lib/renderSubtreeIntoContainer.js",
      "npm:fbjs@0.6.1/lib/warning.js",
      "npm:fbjs@0.6.1/lib/ExecutionEnvironment.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "containers/TechnologiesTable.js": [
      "npm:babel-runtime@5.8.35/helpers/get.js",
      "npm:babel-runtime@5.8.35/helpers/inherits.js",
      "npm:babel-runtime@5.8.35/helpers/create-class.js",
      "npm:babel-runtime@5.8.35/helpers/class-call-check.js",
      "npm:react@0.14.7.js"
    ],
    "npm:core-js@1.2.6/library/fn/object/set-prototype-of.js": [
      "npm:core-js@1.2.6/library/modules/es6.object.set-prototype-of.js",
      "npm:core-js@1.2.6/library/modules/$.core.js"
    ],
    "npm:core-js@1.2.6/library/fn/object/define-property.js": [
      "npm:core-js@1.2.6/library/modules/$.js"
    ],
    "npm:core-js@1.2.6/library/fn/object/create.js": [
      "npm:core-js@1.2.6/library/modules/$.js"
    ],
    "npm:react@0.14.7/lib/ReactDOMServer.js": [
      "npm:react@0.14.7/lib/ReactDefaultInjection.js",
      "npm:react@0.14.7/lib/ReactServerRendering.js",
      "npm:react@0.14.7/lib/ReactVersion.js"
    ],
    "npm:core-js@1.2.6/library/fn/object/get-own-property-descriptor.js": [
      "npm:core-js@1.2.6/library/modules/$.js",
      "npm:core-js@1.2.6/library/modules/es6.object.get-own-property-descriptor.js"
    ],
    "github:jspm/nodelibs-process@0.1.2.js": [
      "github:jspm/nodelibs-process@0.1.2/index.js"
    ],
    "npm:invariant@2.2.0.js": [
      "npm:invariant@2.2.0/browser.js"
    ],
    "npm:react-router@2.0.0-rc5/lib/getRouteParams.js": [
      "npm:react-router@2.0.0-rc5/lib/PatternUtils.js"
    ],
    "npm:react@0.14.7/lib/ReactIsomorphic.js": [
      "npm:react@0.14.7/lib/ReactChildren.js",
      "npm:react@0.14.7/lib/ReactComponent.js",
      "npm:react@0.14.7/lib/ReactClass.js",
      "npm:react@0.14.7/lib/ReactDOMFactories.js",
      "npm:react@0.14.7/lib/ReactElement.js",
      "npm:react@0.14.7/lib/ReactElementValidator.js",
      "npm:react@0.14.7/lib/ReactPropTypes.js",
      "npm:react@0.14.7/lib/ReactVersion.js",
      "npm:react@0.14.7/lib/Object.assign.js",
      "npm:react@0.14.7/lib/onlyChild.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react-router@2.0.0-rc5/lib/warning.js": [
      "npm:warning@2.1.0.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react-router@2.0.0-rc5/lib/deprecateObjectProperties.js": [
      "npm:react-router@2.0.0-rc5/lib/warning.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:history@2.0.0/lib/createHashHistory.js": [
      "npm:warning@2.1.0.js",
      "npm:invariant@2.2.0.js",
      "npm:history@2.0.0/lib/Actions.js",
      "npm:history@2.0.0/lib/PathUtils.js",
      "npm:history@2.0.0/lib/ExecutionEnvironment.js",
      "npm:history@2.0.0/lib/DOMUtils.js",
      "npm:history@2.0.0/lib/DOMStateStorage.js",
      "npm:history@2.0.0/lib/createDOMHistory.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:history@2.0.0/lib/useQueries.js": [
      "npm:warning@2.1.0.js",
      "npm:query-string@3.0.0.js",
      "npm:history@2.0.0/lib/runTransitionHook.js",
      "npm:history@2.0.0/lib/PathUtils.js",
      "npm:history@2.0.0/lib/deprecate.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/deprecated.js": [
      "npm:react@0.14.7/lib/Object.assign.js",
      "npm:fbjs@0.6.1/lib/warning.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react-router@2.0.0-rc5/lib/createTransitionManager.js": [
      "npm:react-router@2.0.0-rc5/lib/warning.js",
      "npm:history@2.0.0/lib/Actions.js",
      "npm:react-router@2.0.0-rc5/lib/computeChangedRoutes.js",
      "npm:react-router@2.0.0-rc5/lib/TransitionUtils.js",
      "npm:react-router@2.0.0-rc5/lib/isActive.js",
      "npm:react-router@2.0.0-rc5/lib/getComponents.js",
      "npm:react-router@2.0.0-rc5/lib/matchRoutes.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:history@2.0.0/lib/useBasename.js": [
      "npm:history@2.0.0/lib/ExecutionEnvironment.js",
      "npm:history@2.0.0/lib/PathUtils.js",
      "npm:history@2.0.0/lib/runTransitionHook.js",
      "npm:history@2.0.0/lib/deprecate.js"
    ],
    "npm:react@0.14.7/lib/ReactReconciler.js": [
      "npm:react@0.14.7/lib/ReactRef.js"
    ],
    "npm:react-router@2.0.0-rc5/lib/createRouterHistory.js": [
      "npm:react-router@2.0.0-rc5/lib/useRouterHistory.js"
    ],
    "npm:react-router@2.0.0-rc5/lib/RouterUtils.js": [
      "npm:react-router@2.0.0-rc5/lib/deprecateObjectProperties.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:history@2.0.0/lib/createBrowserHistory.js": [
      "npm:invariant@2.2.0.js",
      "npm:history@2.0.0/lib/Actions.js",
      "npm:history@2.0.0/lib/PathUtils.js",
      "npm:history@2.0.0/lib/ExecutionEnvironment.js",
      "npm:history@2.0.0/lib/DOMUtils.js",
      "npm:history@2.0.0/lib/DOMStateStorage.js",
      "npm:history@2.0.0/lib/createDOMHistory.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:history@2.0.0/lib/createMemoryHistory.js": [
      "npm:warning@2.1.0.js",
      "npm:invariant@2.2.0.js",
      "npm:history@2.0.0/lib/PathUtils.js",
      "npm:history@2.0.0/lib/Actions.js",
      "npm:history@2.0.0/lib/createHistory.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/ReactDOMTextComponent.js": [
      "npm:react@0.14.7/lib/DOMChildrenOperations.js",
      "npm:react@0.14.7/lib/DOMPropertyOperations.js",
      "npm:react@0.14.7/lib/ReactComponentBrowserEnvironment.js",
      "npm:react@0.14.7/lib/ReactMount.js",
      "npm:react@0.14.7/lib/Object.assign.js",
      "npm:react@0.14.7/lib/escapeTextContentForBrowser.js",
      "npm:react@0.14.7/lib/setTextContent.js",
      "npm:react@0.14.7/lib/validateDOMNesting.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/ReactPerf.js": [
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/ReactDefaultInjection.js": [
      "npm:react@0.14.7/lib/BeforeInputEventPlugin.js",
      "npm:react@0.14.7/lib/ChangeEventPlugin.js",
      "npm:react@0.14.7/lib/ClientReactRootIndex.js",
      "npm:react@0.14.7/lib/DefaultEventPluginOrder.js",
      "npm:react@0.14.7/lib/EnterLeaveEventPlugin.js",
      "npm:fbjs@0.6.1/lib/ExecutionEnvironment.js",
      "npm:react@0.14.7/lib/HTMLDOMPropertyConfig.js",
      "npm:react@0.14.7/lib/ReactBrowserComponentMixin.js",
      "npm:react@0.14.7/lib/ReactComponentBrowserEnvironment.js",
      "npm:react@0.14.7/lib/ReactDefaultBatchingStrategy.js",
      "npm:react@0.14.7/lib/ReactDOMComponent.js",
      "npm:react@0.14.7/lib/ReactDOMTextComponent.js",
      "npm:react@0.14.7/lib/ReactEventListener.js",
      "npm:react@0.14.7/lib/ReactInjection.js",
      "npm:react@0.14.7/lib/ReactInstanceHandles.js",
      "npm:react@0.14.7/lib/ReactMount.js",
      "npm:react@0.14.7/lib/ReactReconcileTransaction.js",
      "npm:react@0.14.7/lib/SelectEventPlugin.js",
      "npm:react@0.14.7/lib/ServerReactRootIndex.js",
      "npm:react@0.14.7/lib/SimpleEventPlugin.js",
      "npm:react@0.14.7/lib/SVGDOMPropertyConfig.js",
      "npm:react@0.14.7/lib/ReactDefaultPerf.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/ReactMount.js": [
      "npm:react@0.14.7/lib/DOMProperty.js",
      "npm:react@0.14.7/lib/ReactBrowserEventEmitter.js",
      "npm:react@0.14.7/lib/ReactCurrentOwner.js",
      "npm:react@0.14.7/lib/ReactDOMFeatureFlags.js",
      "npm:react@0.14.7/lib/ReactElement.js",
      "npm:react@0.14.7/lib/ReactEmptyComponentRegistry.js",
      "npm:react@0.14.7/lib/ReactInstanceHandles.js",
      "npm:react@0.14.7/lib/ReactInstanceMap.js",
      "npm:react@0.14.7/lib/ReactMarkupChecksum.js",
      "npm:react@0.14.7/lib/ReactPerf.js",
      "npm:react@0.14.7/lib/ReactReconciler.js",
      "npm:react@0.14.7/lib/ReactUpdateQueue.js",
      "npm:react@0.14.7/lib/ReactUpdates.js",
      "npm:react@0.14.7/lib/Object.assign.js",
      "npm:fbjs@0.6.1/lib/emptyObject.js",
      "npm:fbjs@0.6.1/lib/containsNode.js",
      "npm:react@0.14.7/lib/instantiateReactComponent.js",
      "npm:fbjs@0.6.1/lib/invariant.js",
      "npm:react@0.14.7/lib/setInnerHTML.js",
      "npm:react@0.14.7/lib/shouldUpdateReactComponent.js",
      "npm:react@0.14.7/lib/validateDOMNesting.js",
      "npm:fbjs@0.6.1/lib/warning.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/ReactInstanceHandles.js": [
      "npm:react@0.14.7/lib/ReactRootIndex.js",
      "npm:fbjs@0.6.1/lib/invariant.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/ReactUpdates.js": [
      "npm:react@0.14.7/lib/CallbackQueue.js",
      "npm:react@0.14.7/lib/PooledClass.js",
      "npm:react@0.14.7/lib/ReactPerf.js",
      "npm:react@0.14.7/lib/ReactReconciler.js",
      "npm:react@0.14.7/lib/Transaction.js",
      "npm:react@0.14.7/lib/Object.assign.js",
      "npm:fbjs@0.6.1/lib/invariant.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/findDOMNode.js": [
      "npm:react@0.14.7/lib/ReactCurrentOwner.js",
      "npm:react@0.14.7/lib/ReactInstanceMap.js",
      "npm:react@0.14.7/lib/ReactMount.js",
      "npm:fbjs@0.6.1/lib/invariant.js",
      "npm:fbjs@0.6.1/lib/warning.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/renderSubtreeIntoContainer.js": [
      "npm:react@0.14.7/lib/ReactMount.js"
    ],
    "npm:fbjs@0.6.1/lib/warning.js": [
      "npm:fbjs@0.6.1/lib/emptyFunction.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:core-js@1.2.6/library/modules/es6.object.get-own-property-descriptor.js": [
      "npm:core-js@1.2.6/library/modules/$.to-iobject.js",
      "npm:core-js@1.2.6/library/modules/$.object-sap.js"
    ],
    "npm:warning@2.1.0.js": [
      "npm:warning@2.1.0/browser.js"
    ],
    "npm:query-string@3.0.0.js": [
      "npm:query-string@3.0.0/index.js"
    ],
    "npm:react-router@2.0.0-rc5/lib/computeChangedRoutes.js": [
      "npm:react-router@2.0.0-rc5/lib/PatternUtils.js"
    ],
    "npm:core-js@1.2.6/library/modules/es6.object.set-prototype-of.js": [
      "npm:core-js@1.2.6/library/modules/$.export.js",
      "npm:core-js@1.2.6/library/modules/$.set-proto.js"
    ],
    "npm:react-router@2.0.0-rc5/lib/isActive.js": [
      "npm:react-router@2.0.0-rc5/lib/PatternUtils.js"
    ],
    "npm:react-router@2.0.0-rc5/lib/getComponents.js": [
      "npm:react-router@2.0.0-rc5/lib/AsyncUtils.js"
    ],
    "github:jspm/nodelibs-process@0.1.2/index.js": [
      "npm:process@0.11.2.js"
    ],
    "npm:invariant@2.2.0/browser.js": [
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/ReactElement.js": [
      "npm:react@0.14.7/lib/ReactCurrentOwner.js",
      "npm:react@0.14.7/lib/Object.assign.js",
      "npm:react@0.14.7/lib/canDefineProperty.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:history@2.0.0/lib/PathUtils.js": [
      "npm:warning@2.1.0.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:history@2.0.0/lib/DOMStateStorage.js": [
      "npm:warning@2.1.0.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:history@2.0.0/lib/createDOMHistory.js": [
      "npm:invariant@2.2.0.js",
      "npm:history@2.0.0/lib/ExecutionEnvironment.js",
      "npm:history@2.0.0/lib/DOMUtils.js",
      "npm:history@2.0.0/lib/createHistory.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:history@2.0.0/lib/runTransitionHook.js": [
      "npm:warning@2.1.0.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:history@2.0.0/lib/deprecate.js": [
      "npm:warning@2.1.0.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react-router@2.0.0-rc5/lib/TransitionUtils.js": [
      "npm:react-router@2.0.0-rc5/lib/AsyncUtils.js",
      "npm:react-router@2.0.0-rc5/lib/warning.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/ReactChildren.js": [
      "npm:react@0.14.7/lib/PooledClass.js",
      "npm:react@0.14.7/lib/ReactElement.js",
      "npm:fbjs@0.6.1/lib/emptyFunction.js",
      "npm:react@0.14.7/lib/traverseAllChildren.js"
    ],
    "npm:react@0.14.7/lib/ReactComponent.js": [
      "npm:react@0.14.7/lib/ReactNoopUpdateQueue.js",
      "npm:react@0.14.7/lib/canDefineProperty.js",
      "npm:fbjs@0.6.1/lib/emptyObject.js",
      "npm:fbjs@0.6.1/lib/invariant.js",
      "npm:fbjs@0.6.1/lib/warning.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/ReactClass.js": [
      "npm:react@0.14.7/lib/ReactComponent.js",
      "npm:react@0.14.7/lib/ReactElement.js",
      "npm:react@0.14.7/lib/ReactPropTypeLocations.js",
      "npm:react@0.14.7/lib/ReactPropTypeLocationNames.js",
      "npm:react@0.14.7/lib/ReactNoopUpdateQueue.js",
      "npm:react@0.14.7/lib/Object.assign.js",
      "npm:fbjs@0.6.1/lib/emptyObject.js",
      "npm:fbjs@0.6.1/lib/invariant.js",
      "npm:fbjs@0.6.1/lib/keyMirror.js",
      "npm:fbjs@0.6.1/lib/keyOf.js",
      "npm:fbjs@0.6.1/lib/warning.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/ReactElementValidator.js": [
      "npm:react@0.14.7/lib/ReactElement.js",
      "npm:react@0.14.7/lib/ReactPropTypeLocations.js",
      "npm:react@0.14.7/lib/ReactPropTypeLocationNames.js",
      "npm:react@0.14.7/lib/ReactCurrentOwner.js",
      "npm:react@0.14.7/lib/canDefineProperty.js",
      "npm:react@0.14.7/lib/getIteratorFn.js",
      "npm:fbjs@0.6.1/lib/invariant.js",
      "npm:fbjs@0.6.1/lib/warning.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/ReactDOMFactories.js": [
      "npm:react@0.14.7/lib/ReactElement.js",
      "npm:react@0.14.7/lib/ReactElementValidator.js",
      "npm:fbjs@0.6.1/lib/mapObject.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/ReactPropTypes.js": [
      "npm:react@0.14.7/lib/ReactElement.js",
      "npm:react@0.14.7/lib/ReactPropTypeLocationNames.js",
      "npm:fbjs@0.6.1/lib/emptyFunction.js",
      "npm:react@0.14.7/lib/getIteratorFn.js"
    ],
    "npm:react@0.14.7/lib/onlyChild.js": [
      "npm:react@0.14.7/lib/ReactElement.js",
      "npm:fbjs@0.6.1/lib/invariant.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/ReactServerRendering.js": [
      "npm:react@0.14.7/lib/ReactDefaultBatchingStrategy.js",
      "npm:react@0.14.7/lib/ReactElement.js",
      "npm:react@0.14.7/lib/ReactInstanceHandles.js",
      "npm:react@0.14.7/lib/ReactMarkupChecksum.js",
      "npm:react@0.14.7/lib/ReactServerBatchingStrategy.js",
      "npm:react@0.14.7/lib/ReactServerRenderingTransaction.js",
      "npm:react@0.14.7/lib/ReactUpdates.js",
      "npm:fbjs@0.6.1/lib/emptyObject.js",
      "npm:react@0.14.7/lib/instantiateReactComponent.js",
      "npm:fbjs@0.6.1/lib/invariant.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/ReactInjection.js": [
      "npm:react@0.14.7/lib/DOMProperty.js",
      "npm:react@0.14.7/lib/EventPluginHub.js",
      "npm:react@0.14.7/lib/ReactComponentEnvironment.js",
      "npm:react@0.14.7/lib/ReactClass.js",
      "npm:react@0.14.7/lib/ReactEmptyComponent.js",
      "npm:react@0.14.7/lib/ReactBrowserEventEmitter.js",
      "npm:react@0.14.7/lib/ReactNativeComponent.js",
      "npm:react@0.14.7/lib/ReactPerf.js",
      "npm:react@0.14.7/lib/ReactRootIndex.js",
      "npm:react@0.14.7/lib/ReactUpdates.js"
    ],
    "npm:react@0.14.7/lib/ReactReconcileTransaction.js": [
      "npm:react@0.14.7/lib/CallbackQueue.js",
      "npm:react@0.14.7/lib/PooledClass.js",
      "npm:react@0.14.7/lib/ReactBrowserEventEmitter.js",
      "npm:react@0.14.7/lib/ReactDOMFeatureFlags.js",
      "npm:react@0.14.7/lib/ReactInputSelection.js",
      "npm:react@0.14.7/lib/Transaction.js",
      "npm:react@0.14.7/lib/Object.assign.js"
    ],
    "npm:react@0.14.7/lib/SVGDOMPropertyConfig.js": [
      "npm:react@0.14.7/lib/DOMProperty.js"
    ],
    "npm:react@0.14.7/lib/ReactMarkupChecksum.js": [
      "npm:react@0.14.7/lib/adler32.js"
    ],
    "npm:fbjs@0.6.1/lib/containsNode.js": [
      "npm:fbjs@0.6.1/lib/isTextNode.js"
    ],
    "npm:react-router@2.0.0-rc5/lib/matchRoutes.js": [
      "npm:react-router@2.0.0-rc5/lib/warning.js",
      "npm:react-router@2.0.0-rc5/lib/AsyncUtils.js",
      "npm:react-router@2.0.0-rc5/lib/PatternUtils.js",
      "npm:react-router@2.0.0-rc5/lib/RouteUtils.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/ReactRef.js": [
      "npm:react@0.14.7/lib/ReactOwner.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:history@2.0.0/lib/createHistory.js": [
      "npm:warning@2.1.0.js",
      "npm:deep-equal@1.0.1.js",
      "npm:history@2.0.0/lib/PathUtils.js",
      "npm:history@2.0.0/lib/AsyncUtils.js",
      "npm:history@2.0.0/lib/Actions.js",
      "npm:history@2.0.0/lib/createLocation.js",
      "npm:history@2.0.0/lib/runTransitionHook.js",
      "npm:history@2.0.0/lib/deprecate.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/ReactComponentBrowserEnvironment.js": [
      "npm:react@0.14.7/lib/ReactDOMIDOperations.js",
      "npm:react@0.14.7/lib/ReactMount.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/ReactBrowserEventEmitter.js": [
      "npm:react@0.14.7/lib/EventConstants.js",
      "npm:react@0.14.7/lib/EventPluginHub.js",
      "npm:react@0.14.7/lib/EventPluginRegistry.js",
      "npm:react@0.14.7/lib/ReactEventEmitterMixin.js",
      "npm:react@0.14.7/lib/ReactPerf.js",
      "npm:react@0.14.7/lib/ViewportMetrics.js",
      "npm:react@0.14.7/lib/Object.assign.js",
      "npm:react@0.14.7/lib/isEventSupported.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:fbjs@0.6.1/lib/emptyObject.js": [
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:fbjs@0.6.1/lib/invariant.js": [
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/DOMChildrenOperations.js": [
      "npm:react@0.14.7/lib/Danger.js",
      "npm:react@0.14.7/lib/ReactMultiChildUpdateTypes.js",
      "npm:react@0.14.7/lib/ReactPerf.js",
      "npm:react@0.14.7/lib/setInnerHTML.js",
      "npm:react@0.14.7/lib/setTextContent.js",
      "npm:fbjs@0.6.1/lib/invariant.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/DOMPropertyOperations.js": [
      "npm:react@0.14.7/lib/DOMProperty.js",
      "npm:react@0.14.7/lib/ReactPerf.js",
      "npm:react@0.14.7/lib/quoteAttributeValueForBrowser.js",
      "npm:fbjs@0.6.1/lib/warning.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/setTextContent.js": [
      "npm:fbjs@0.6.1/lib/ExecutionEnvironment.js",
      "npm:react@0.14.7/lib/escapeTextContentForBrowser.js",
      "npm:react@0.14.7/lib/setInnerHTML.js"
    ],
    "npm:react@0.14.7/lib/validateDOMNesting.js": [
      "npm:react@0.14.7/lib/Object.assign.js",
      "npm:fbjs@0.6.1/lib/emptyFunction.js",
      "npm:fbjs@0.6.1/lib/warning.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/BeforeInputEventPlugin.js": [
      "npm:react@0.14.7/lib/EventConstants.js",
      "npm:react@0.14.7/lib/EventPropagators.js",
      "npm:fbjs@0.6.1/lib/ExecutionEnvironment.js",
      "npm:react@0.14.7/lib/FallbackCompositionState.js",
      "npm:react@0.14.7/lib/SyntheticCompositionEvent.js",
      "npm:react@0.14.7/lib/SyntheticInputEvent.js",
      "npm:fbjs@0.6.1/lib/keyOf.js"
    ],
    "npm:react@0.14.7/lib/ChangeEventPlugin.js": [
      "npm:react@0.14.7/lib/EventConstants.js",
      "npm:react@0.14.7/lib/EventPluginHub.js",
      "npm:react@0.14.7/lib/EventPropagators.js",
      "npm:fbjs@0.6.1/lib/ExecutionEnvironment.js",
      "npm:react@0.14.7/lib/ReactUpdates.js",
      "npm:react@0.14.7/lib/SyntheticEvent.js",
      "npm:react@0.14.7/lib/getEventTarget.js",
      "npm:react@0.14.7/lib/isEventSupported.js",
      "npm:react@0.14.7/lib/isTextInputElement.js",
      "npm:fbjs@0.6.1/lib/keyOf.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/DefaultEventPluginOrder.js": [
      "npm:fbjs@0.6.1/lib/keyOf.js"
    ],
    "npm:react@0.14.7/lib/EnterLeaveEventPlugin.js": [
      "npm:react@0.14.7/lib/EventConstants.js",
      "npm:react@0.14.7/lib/EventPropagators.js",
      "npm:react@0.14.7/lib/SyntheticMouseEvent.js",
      "npm:react@0.14.7/lib/ReactMount.js",
      "npm:fbjs@0.6.1/lib/keyOf.js"
    ],
    "npm:react@0.14.7/lib/ReactBrowserComponentMixin.js": [
      "npm:react@0.14.7/lib/ReactInstanceMap.js",
      "npm:react@0.14.7/lib/findDOMNode.js",
      "npm:fbjs@0.6.1/lib/warning.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/HTMLDOMPropertyConfig.js": [
      "npm:react@0.14.7/lib/DOMProperty.js",
      "npm:fbjs@0.6.1/lib/ExecutionEnvironment.js"
    ],
    "npm:react@0.14.7/lib/ReactDOMComponent.js": [
      "npm:react@0.14.7/lib/AutoFocusUtils.js",
      "npm:react@0.14.7/lib/CSSPropertyOperations.js",
      "npm:react@0.14.7/lib/DOMProperty.js",
      "npm:react@0.14.7/lib/DOMPropertyOperations.js",
      "npm:react@0.14.7/lib/EventConstants.js",
      "npm:react@0.14.7/lib/ReactBrowserEventEmitter.js",
      "npm:react@0.14.7/lib/ReactComponentBrowserEnvironment.js",
      "npm:react@0.14.7/lib/ReactDOMButton.js",
      "npm:react@0.14.7/lib/ReactDOMInput.js",
      "npm:react@0.14.7/lib/ReactDOMOption.js",
      "npm:react@0.14.7/lib/ReactDOMSelect.js",
      "npm:react@0.14.7/lib/ReactDOMTextarea.js",
      "npm:react@0.14.7/lib/ReactMount.js",
      "npm:react@0.14.7/lib/ReactMultiChild.js",
      "npm:react@0.14.7/lib/ReactPerf.js",
      "npm:react@0.14.7/lib/ReactUpdateQueue.js",
      "npm:react@0.14.7/lib/Object.assign.js",
      "npm:react@0.14.7/lib/canDefineProperty.js",
      "npm:react@0.14.7/lib/escapeTextContentForBrowser.js",
      "npm:fbjs@0.6.1/lib/invariant.js",
      "npm:react@0.14.7/lib/isEventSupported.js",
      "npm:fbjs@0.6.1/lib/keyOf.js",
      "npm:react@0.14.7/lib/setInnerHTML.js",
      "npm:react@0.14.7/lib/setTextContent.js",
      "npm:fbjs@0.6.1/lib/shallowEqual.js",
      "npm:react@0.14.7/lib/validateDOMNesting.js",
      "npm:fbjs@0.6.1/lib/warning.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/ReactDefaultBatchingStrategy.js": [
      "npm:react@0.14.7/lib/ReactUpdates.js",
      "npm:react@0.14.7/lib/Transaction.js",
      "npm:react@0.14.7/lib/Object.assign.js",
      "npm:fbjs@0.6.1/lib/emptyFunction.js"
    ],
    "npm:react@0.14.7/lib/ReactEventListener.js": [
      "npm:fbjs@0.6.1/lib/EventListener.js",
      "npm:fbjs@0.6.1/lib/ExecutionEnvironment.js",
      "npm:react@0.14.7/lib/PooledClass.js",
      "npm:react@0.14.7/lib/ReactInstanceHandles.js",
      "npm:react@0.14.7/lib/ReactMount.js",
      "npm:react@0.14.7/lib/ReactUpdates.js",
      "npm:react@0.14.7/lib/Object.assign.js",
      "npm:react@0.14.7/lib/getEventTarget.js",
      "npm:fbjs@0.6.1/lib/getUnboundedScrollPosition.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/SelectEventPlugin.js": [
      "npm:react@0.14.7/lib/EventConstants.js",
      "npm:react@0.14.7/lib/EventPropagators.js",
      "npm:fbjs@0.6.1/lib/ExecutionEnvironment.js",
      "npm:react@0.14.7/lib/ReactInputSelection.js",
      "npm:react@0.14.7/lib/SyntheticEvent.js",
      "npm:fbjs@0.6.1/lib/getActiveElement.js",
      "npm:react@0.14.7/lib/isTextInputElement.js",
      "npm:fbjs@0.6.1/lib/keyOf.js",
      "npm:fbjs@0.6.1/lib/shallowEqual.js"
    ],
    "npm:react@0.14.7/lib/SimpleEventPlugin.js": [
      "npm:react@0.14.7/lib/EventConstants.js",
      "npm:fbjs@0.6.1/lib/EventListener.js",
      "npm:react@0.14.7/lib/EventPropagators.js",
      "npm:react@0.14.7/lib/ReactMount.js",
      "npm:react@0.14.7/lib/SyntheticClipboardEvent.js",
      "npm:react@0.14.7/lib/SyntheticEvent.js",
      "npm:react@0.14.7/lib/SyntheticFocusEvent.js",
      "npm:react@0.14.7/lib/SyntheticKeyboardEvent.js",
      "npm:react@0.14.7/lib/SyntheticMouseEvent.js",
      "npm:react@0.14.7/lib/SyntheticDragEvent.js",
      "npm:react@0.14.7/lib/SyntheticTouchEvent.js",
      "npm:react@0.14.7/lib/SyntheticUIEvent.js",
      "npm:react@0.14.7/lib/SyntheticWheelEvent.js",
      "npm:fbjs@0.6.1/lib/emptyFunction.js",
      "npm:react@0.14.7/lib/getEventCharCode.js",
      "npm:fbjs@0.6.1/lib/invariant.js",
      "npm:fbjs@0.6.1/lib/keyOf.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/ReactDefaultPerf.js": [
      "npm:react@0.14.7/lib/DOMProperty.js",
      "npm:react@0.14.7/lib/ReactDefaultPerfAnalysis.js",
      "npm:react@0.14.7/lib/ReactMount.js",
      "npm:react@0.14.7/lib/ReactPerf.js",
      "npm:fbjs@0.6.1/lib/performanceNow.js"
    ],
    "npm:react@0.14.7/lib/DOMProperty.js": [
      "npm:fbjs@0.6.1/lib/invariant.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/ReactUpdateQueue.js": [
      "npm:react@0.14.7/lib/ReactCurrentOwner.js",
      "npm:react@0.14.7/lib/ReactElement.js",
      "npm:react@0.14.7/lib/ReactInstanceMap.js",
      "npm:react@0.14.7/lib/ReactUpdates.js",
      "npm:react@0.14.7/lib/Object.assign.js",
      "npm:fbjs@0.6.1/lib/invariant.js",
      "npm:fbjs@0.6.1/lib/warning.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/instantiateReactComponent.js": [
      "npm:react@0.14.7/lib/ReactCompositeComponent.js",
      "npm:react@0.14.7/lib/ReactEmptyComponent.js",
      "npm:react@0.14.7/lib/ReactNativeComponent.js",
      "npm:react@0.14.7/lib/Object.assign.js",
      "npm:fbjs@0.6.1/lib/invariant.js",
      "npm:fbjs@0.6.1/lib/warning.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/setInnerHTML.js": [
      "npm:fbjs@0.6.1/lib/ExecutionEnvironment.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/CallbackQueue.js": [
      "npm:react@0.14.7/lib/PooledClass.js",
      "npm:react@0.14.7/lib/Object.assign.js",
      "npm:fbjs@0.6.1/lib/invariant.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/PooledClass.js": [
      "npm:fbjs@0.6.1/lib/invariant.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/Transaction.js": [
      "npm:fbjs@0.6.1/lib/invariant.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:core-js@1.2.6/library/modules/$.to-iobject.js": [
      "npm:core-js@1.2.6/library/modules/$.iobject.js",
      "npm:core-js@1.2.6/library/modules/$.defined.js"
    ],
    "npm:core-js@1.2.6/library/modules/$.export.js": [
      "npm:core-js@1.2.6/library/modules/$.global.js",
      "npm:core-js@1.2.6/library/modules/$.core.js",
      "npm:core-js@1.2.6/library/modules/$.ctx.js"
    ],
    "npm:core-js@1.2.6/library/modules/$.set-proto.js": [
      "npm:core-js@1.2.6/library/modules/$.js",
      "npm:core-js@1.2.6/library/modules/$.is-object.js",
      "npm:core-js@1.2.6/library/modules/$.an-object.js",
      "npm:core-js@1.2.6/library/modules/$.ctx.js"
    ],
    "npm:process@0.11.2.js": [
      "npm:process@0.11.2/browser.js"
    ],
    "npm:core-js@1.2.6/library/modules/$.object-sap.js": [
      "npm:core-js@1.2.6/library/modules/$.export.js",
      "npm:core-js@1.2.6/library/modules/$.core.js",
      "npm:core-js@1.2.6/library/modules/$.fails.js"
    ],
    "npm:query-string@3.0.0/index.js": [
      "npm:strict-uri-encode@1.1.0.js"
    ],
    "npm:warning@2.1.0/browser.js": [
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/canDefineProperty.js": [
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/ReactPropTypeLocationNames.js": [
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:fbjs@0.6.1/lib/keyMirror.js": [
      "npm:fbjs@0.6.1/lib/invariant.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/traverseAllChildren.js": [
      "npm:react@0.14.7/lib/ReactCurrentOwner.js",
      "npm:react@0.14.7/lib/ReactElement.js",
      "npm:react@0.14.7/lib/ReactInstanceHandles.js",
      "npm:react@0.14.7/lib/getIteratorFn.js",
      "npm:fbjs@0.6.1/lib/invariant.js",
      "npm:fbjs@0.6.1/lib/warning.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/ReactNoopUpdateQueue.js": [
      "npm:fbjs@0.6.1/lib/warning.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/ReactPropTypeLocations.js": [
      "npm:fbjs@0.6.1/lib/keyMirror.js"
    ],
    "npm:deep-equal@1.0.1.js": [
      "npm:deep-equal@1.0.1/index.js"
    ],
    "npm:react@0.14.7/lib/ReactEmptyComponent.js": [
      "npm:react@0.14.7/lib/ReactElement.js",
      "npm:react@0.14.7/lib/ReactEmptyComponentRegistry.js",
      "npm:react@0.14.7/lib/ReactReconciler.js",
      "npm:react@0.14.7/lib/Object.assign.js"
    ],
    "npm:fbjs@0.6.1/lib/isTextNode.js": [
      "npm:fbjs@0.6.1/lib/isNode.js"
    ],
    "npm:react@0.14.7/lib/ReactEventEmitterMixin.js": [
      "npm:react@0.14.7/lib/EventPluginHub.js"
    ],
    "npm:react@0.14.7/lib/quoteAttributeValueForBrowser.js": [
      "npm:react@0.14.7/lib/escapeTextContentForBrowser.js"
    ],
    "npm:react@0.14.7/lib/FallbackCompositionState.js": [
      "npm:react@0.14.7/lib/PooledClass.js",
      "npm:react@0.14.7/lib/Object.assign.js",
      "npm:react@0.14.7/lib/getTextContentAccessor.js"
    ],
    "npm:react@0.14.7/lib/SyntheticCompositionEvent.js": [
      "npm:react@0.14.7/lib/SyntheticEvent.js"
    ],
    "npm:react@0.14.7/lib/SyntheticInputEvent.js": [
      "npm:react@0.14.7/lib/SyntheticEvent.js"
    ],
    "npm:react@0.14.7/lib/SyntheticMouseEvent.js": [
      "npm:react@0.14.7/lib/SyntheticUIEvent.js",
      "npm:react@0.14.7/lib/ViewportMetrics.js",
      "npm:react@0.14.7/lib/getEventModifierState.js"
    ],
    "npm:history@2.0.0/lib/createLocation.js": [
      "npm:warning@2.1.0.js",
      "npm:history@2.0.0/lib/Actions.js",
      "npm:history@2.0.0/lib/PathUtils.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/ReactServerRenderingTransaction.js": [
      "npm:react@0.14.7/lib/PooledClass.js",
      "npm:react@0.14.7/lib/CallbackQueue.js",
      "npm:react@0.14.7/lib/Transaction.js",
      "npm:react@0.14.7/lib/Object.assign.js",
      "npm:fbjs@0.6.1/lib/emptyFunction.js"
    ],
    "npm:react@0.14.7/lib/EventPluginHub.js": [
      "npm:react@0.14.7/lib/EventPluginRegistry.js",
      "npm:react@0.14.7/lib/EventPluginUtils.js",
      "npm:react@0.14.7/lib/ReactErrorUtils.js",
      "npm:react@0.14.7/lib/accumulateInto.js",
      "npm:react@0.14.7/lib/forEachAccumulated.js",
      "npm:fbjs@0.6.1/lib/invariant.js",
      "npm:fbjs@0.6.1/lib/warning.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/ReactComponentEnvironment.js": [
      "npm:fbjs@0.6.1/lib/invariant.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/ReactInputSelection.js": [
      "npm:react@0.14.7/lib/ReactDOMSelection.js",
      "npm:fbjs@0.6.1/lib/containsNode.js",
      "npm:fbjs@0.6.1/lib/focusNode.js",
      "npm:fbjs@0.6.1/lib/getActiveElement.js"
    ],
    "npm:react@0.14.7/lib/ReactNativeComponent.js": [
      "npm:react@0.14.7/lib/Object.assign.js",
      "npm:fbjs@0.6.1/lib/invariant.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/ReactOwner.js": [
      "npm:fbjs@0.6.1/lib/invariant.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/ReactDOMIDOperations.js": [
      "npm:react@0.14.7/lib/DOMChildrenOperations.js",
      "npm:react@0.14.7/lib/DOMPropertyOperations.js",
      "npm:react@0.14.7/lib/ReactMount.js",
      "npm:react@0.14.7/lib/ReactPerf.js",
      "npm:fbjs@0.6.1/lib/invariant.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/EventConstants.js": [
      "npm:fbjs@0.6.1/lib/keyMirror.js"
    ],
    "npm:react@0.14.7/lib/EventPluginRegistry.js": [
      "npm:fbjs@0.6.1/lib/invariant.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/isEventSupported.js": [
      "npm:fbjs@0.6.1/lib/ExecutionEnvironment.js"
    ],
    "npm:react@0.14.7/lib/Danger.js": [
      "npm:fbjs@0.6.1/lib/ExecutionEnvironment.js",
      "npm:fbjs@0.6.1/lib/createNodesFromMarkup.js",
      "npm:fbjs@0.6.1/lib/emptyFunction.js",
      "npm:fbjs@0.6.1/lib/getMarkupWrap.js",
      "npm:fbjs@0.6.1/lib/invariant.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/ReactMultiChildUpdateTypes.js": [
      "npm:fbjs@0.6.1/lib/keyMirror.js"
    ],
    "npm:react@0.14.7/lib/EventPropagators.js": [
      "npm:react@0.14.7/lib/EventConstants.js",
      "npm:react@0.14.7/lib/EventPluginHub.js",
      "npm:fbjs@0.6.1/lib/warning.js",
      "npm:react@0.14.7/lib/accumulateInto.js",
      "npm:react@0.14.7/lib/forEachAccumulated.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/AutoFocusUtils.js": [
      "npm:react@0.14.7/lib/ReactMount.js",
      "npm:react@0.14.7/lib/findDOMNode.js",
      "npm:fbjs@0.6.1/lib/focusNode.js"
    ],
    "npm:react@0.14.7/lib/CSSPropertyOperations.js": [
      "npm:react@0.14.7/lib/CSSProperty.js",
      "npm:fbjs@0.6.1/lib/ExecutionEnvironment.js",
      "npm:react@0.14.7/lib/ReactPerf.js",
      "npm:fbjs@0.6.1/lib/camelizeStyleName.js",
      "npm:react@0.14.7/lib/dangerousStyleValue.js",
      "npm:fbjs@0.6.1/lib/hyphenateStyleName.js",
      "npm:fbjs@0.6.1/lib/memoizeStringOnly.js",
      "npm:fbjs@0.6.1/lib/warning.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/SyntheticEvent.js": [
      "npm:react@0.14.7/lib/PooledClass.js",
      "npm:react@0.14.7/lib/Object.assign.js",
      "npm:fbjs@0.6.1/lib/emptyFunction.js",
      "npm:fbjs@0.6.1/lib/warning.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/ReactDOMInput.js": [
      "npm:react@0.14.7/lib/ReactDOMIDOperations.js",
      "npm:react@0.14.7/lib/LinkedValueUtils.js",
      "npm:react@0.14.7/lib/ReactMount.js",
      "npm:react@0.14.7/lib/ReactUpdates.js",
      "npm:react@0.14.7/lib/Object.assign.js",
      "npm:fbjs@0.6.1/lib/invariant.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/ReactDOMOption.js": [
      "npm:react@0.14.7/lib/ReactChildren.js",
      "npm:react@0.14.7/lib/ReactDOMSelect.js",
      "npm:react@0.14.7/lib/Object.assign.js",
      "npm:fbjs@0.6.1/lib/warning.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/ReactDOMSelect.js": [
      "npm:react@0.14.7/lib/LinkedValueUtils.js",
      "npm:react@0.14.7/lib/ReactMount.js",
      "npm:react@0.14.7/lib/ReactUpdates.js",
      "npm:react@0.14.7/lib/Object.assign.js",
      "npm:fbjs@0.6.1/lib/warning.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/ReactDOMTextarea.js": [
      "npm:react@0.14.7/lib/LinkedValueUtils.js",
      "npm:react@0.14.7/lib/ReactDOMIDOperations.js",
      "npm:react@0.14.7/lib/ReactUpdates.js",
      "npm:react@0.14.7/lib/Object.assign.js",
      "npm:fbjs@0.6.1/lib/invariant.js",
      "npm:fbjs@0.6.1/lib/warning.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/SyntheticFocusEvent.js": [
      "npm:react@0.14.7/lib/SyntheticUIEvent.js"
    ],
    "npm:react@0.14.7/lib/SyntheticKeyboardEvent.js": [
      "npm:react@0.14.7/lib/SyntheticUIEvent.js",
      "npm:react@0.14.7/lib/getEventCharCode.js",
      "npm:react@0.14.7/lib/getEventKey.js",
      "npm:react@0.14.7/lib/getEventModifierState.js"
    ],
    "npm:react@0.14.7/lib/SyntheticDragEvent.js": [
      "npm:react@0.14.7/lib/SyntheticMouseEvent.js"
    ],
    "npm:react@0.14.7/lib/SyntheticTouchEvent.js": [
      "npm:react@0.14.7/lib/SyntheticUIEvent.js",
      "npm:react@0.14.7/lib/getEventModifierState.js"
    ],
    "npm:react@0.14.7/lib/SyntheticUIEvent.js": [
      "npm:react@0.14.7/lib/SyntheticEvent.js",
      "npm:react@0.14.7/lib/getEventTarget.js"
    ],
    "npm:react@0.14.7/lib/SyntheticWheelEvent.js": [
      "npm:react@0.14.7/lib/SyntheticMouseEvent.js"
    ],
    "npm:react@0.14.7/lib/ReactDefaultPerfAnalysis.js": [
      "npm:react@0.14.7/lib/Object.assign.js"
    ],
    "npm:fbjs@0.6.1/lib/performanceNow.js": [
      "npm:fbjs@0.6.1/lib/performance.js"
    ],
    "npm:react@0.14.7/lib/SyntheticClipboardEvent.js": [
      "npm:react@0.14.7/lib/SyntheticEvent.js"
    ],
    "npm:react@0.14.7/lib/ReactMultiChild.js": [
      "npm:react@0.14.7/lib/ReactComponentEnvironment.js",
      "npm:react@0.14.7/lib/ReactMultiChildUpdateTypes.js",
      "npm:react@0.14.7/lib/ReactCurrentOwner.js",
      "npm:react@0.14.7/lib/ReactReconciler.js",
      "npm:react@0.14.7/lib/ReactChildReconciler.js",
      "npm:react@0.14.7/lib/flattenChildren.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:fbjs@0.6.1/lib/EventListener.js": [
      "npm:fbjs@0.6.1/lib/emptyFunction.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/ReactCompositeComponent.js": [
      "npm:react@0.14.7/lib/ReactComponentEnvironment.js",
      "npm:react@0.14.7/lib/ReactCurrentOwner.js",
      "npm:react@0.14.7/lib/ReactElement.js",
      "npm:react@0.14.7/lib/ReactInstanceMap.js",
      "npm:react@0.14.7/lib/ReactPerf.js",
      "npm:react@0.14.7/lib/ReactPropTypeLocations.js",
      "npm:react@0.14.7/lib/ReactPropTypeLocationNames.js",
      "npm:react@0.14.7/lib/ReactReconciler.js",
      "npm:react@0.14.7/lib/ReactUpdateQueue.js",
      "npm:react@0.14.7/lib/Object.assign.js",
      "npm:fbjs@0.6.1/lib/emptyObject.js",
      "npm:fbjs@0.6.1/lib/invariant.js",
      "npm:react@0.14.7/lib/shouldUpdateReactComponent.js",
      "npm:fbjs@0.6.1/lib/warning.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:core-js@1.2.6/library/modules/$.iobject.js": [
      "npm:core-js@1.2.6/library/modules/$.cof.js"
    ],
    "npm:core-js@1.2.6/library/modules/$.ctx.js": [
      "npm:core-js@1.2.6/library/modules/$.a-function.js"
    ],
    "npm:core-js@1.2.6/library/modules/$.an-object.js": [
      "npm:core-js@1.2.6/library/modules/$.is-object.js"
    ],
    "npm:strict-uri-encode@1.1.0.js": [
      "npm:strict-uri-encode@1.1.0/index.js"
    ],
    "npm:deep-equal@1.0.1/index.js": [
      "npm:deep-equal@1.0.1/lib/keys.js",
      "npm:deep-equal@1.0.1/lib/is_arguments.js"
    ],
    "npm:fbjs@0.6.1/lib/camelizeStyleName.js": [
      "npm:fbjs@0.6.1/lib/camelize.js"
    ],
    "npm:react@0.14.7/lib/dangerousStyleValue.js": [
      "npm:react@0.14.7/lib/CSSProperty.js"
    ],
    "npm:fbjs@0.6.1/lib/hyphenateStyleName.js": [
      "npm:fbjs@0.6.1/lib/hyphenate.js"
    ],
    "npm:react@0.14.7/lib/ReactErrorUtils.js": [
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:fbjs@0.6.1/lib/createNodesFromMarkup.js": [
      "npm:fbjs@0.6.1/lib/ExecutionEnvironment.js",
      "npm:fbjs@0.6.1/lib/createArrayFromMixed.js",
      "npm:fbjs@0.6.1/lib/getMarkupWrap.js",
      "npm:fbjs@0.6.1/lib/invariant.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:fbjs@0.6.1/lib/getMarkupWrap.js": [
      "npm:fbjs@0.6.1/lib/ExecutionEnvironment.js",
      "npm:fbjs@0.6.1/lib/invariant.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/getTextContentAccessor.js": [
      "npm:fbjs@0.6.1/lib/ExecutionEnvironment.js"
    ],
    "npm:react@0.14.7/lib/EventPluginUtils.js": [
      "npm:react@0.14.7/lib/EventConstants.js",
      "npm:react@0.14.7/lib/ReactErrorUtils.js",
      "npm:fbjs@0.6.1/lib/invariant.js",
      "npm:fbjs@0.6.1/lib/warning.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/accumulateInto.js": [
      "npm:fbjs@0.6.1/lib/invariant.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/ReactDOMSelection.js": [
      "npm:fbjs@0.6.1/lib/ExecutionEnvironment.js",
      "npm:react@0.14.7/lib/getNodeForCharacterOffset.js",
      "npm:react@0.14.7/lib/getTextContentAccessor.js"
    ],
    "npm:react@0.14.7/lib/LinkedValueUtils.js": [
      "npm:react@0.14.7/lib/ReactPropTypes.js",
      "npm:react@0.14.7/lib/ReactPropTypeLocations.js",
      "npm:fbjs@0.6.1/lib/invariant.js",
      "npm:fbjs@0.6.1/lib/warning.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/getEventKey.js": [
      "npm:react@0.14.7/lib/getEventCharCode.js"
    ],
    "npm:fbjs@0.6.1/lib/performance.js": [
      "npm:fbjs@0.6.1/lib/ExecutionEnvironment.js"
    ],
    "npm:react@0.14.7/lib/ReactChildReconciler.js": [
      "npm:react@0.14.7/lib/ReactReconciler.js",
      "npm:react@0.14.7/lib/instantiateReactComponent.js",
      "npm:react@0.14.7/lib/shouldUpdateReactComponent.js",
      "npm:react@0.14.7/lib/traverseAllChildren.js",
      "npm:fbjs@0.6.1/lib/warning.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:react@0.14.7/lib/flattenChildren.js": [
      "npm:react@0.14.7/lib/traverseAllChildren.js",
      "npm:fbjs@0.6.1/lib/warning.js",
      "github:jspm/nodelibs-process@0.1.2.js"
    ],
    "npm:fbjs@0.6.1/lib/createArrayFromMixed.js": [
      "npm:fbjs@0.6.1/lib/toArray.js"
    ],
    "npm:fbjs@0.6.1/lib/toArray.js": [
      "npm:fbjs@0.6.1/lib/invariant.js",
      "github:jspm/nodelibs-process@0.1.2.js"
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
