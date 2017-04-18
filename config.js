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
      "containers/HomePage.js",
      "containers/MainFooter.js",
      "npm:react@0.14.8.js",
      "npm:react@0.14.8/react.js",
      "npm:react@0.14.8/lib/React.js",
      "npm:react@0.14.8/lib/deprecated.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "npm:process@0.11.9.js",
      "npm:process@0.11.9/browser.js",
      "npm:fbjs@0.6.1/lib/warning.js",
      "npm:fbjs@0.6.1/lib/emptyFunction.js",
      "npm:react@0.14.8/lib/Object.assign.js",
      "npm:react@0.14.8/lib/ReactIsomorphic.js",
      "npm:react@0.14.8/lib/onlyChild.js",
      "npm:fbjs@0.6.1/lib/invariant.js",
      "npm:react@0.14.8/lib/ReactElement.js",
      "npm:react@0.14.8/lib/canDefineProperty.js",
      "npm:react@0.14.8/lib/ReactCurrentOwner.js",
      "npm:react@0.14.8/lib/ReactVersion.js",
      "npm:react@0.14.8/lib/ReactPropTypes.js",
      "npm:react@0.14.8/lib/getIteratorFn.js",
      "npm:react@0.14.8/lib/ReactPropTypeLocationNames.js",
      "npm:react@0.14.8/lib/ReactElementValidator.js",
      "npm:react@0.14.8/lib/ReactPropTypeLocations.js",
      "npm:fbjs@0.6.1/lib/keyMirror.js",
      "npm:react@0.14.8/lib/ReactDOMFactories.js",
      "npm:fbjs@0.6.1/lib/mapObject.js",
      "npm:react@0.14.8/lib/ReactClass.js",
      "npm:fbjs@0.6.1/lib/keyOf.js",
      "npm:fbjs@0.6.1/lib/emptyObject.js",
      "npm:react@0.14.8/lib/ReactNoopUpdateQueue.js",
      "npm:react@0.14.8/lib/ReactComponent.js",
      "npm:react@0.14.8/lib/ReactChildren.js",
      "npm:react@0.14.8/lib/traverseAllChildren.js",
      "npm:react@0.14.8/lib/ReactInstanceHandles.js",
      "npm:react@0.14.8/lib/ReactRootIndex.js",
      "npm:react@0.14.8/lib/PooledClass.js",
      "npm:react@0.14.8/lib/ReactDOMServer.js",
      "npm:react@0.14.8/lib/ReactServerRendering.js",
      "npm:react@0.14.8/lib/instantiateReactComponent.js",
      "npm:react@0.14.8/lib/ReactNativeComponent.js",
      "npm:react@0.14.8/lib/ReactEmptyComponent.js",
      "npm:react@0.14.8/lib/ReactReconciler.js",
      "npm:react@0.14.8/lib/ReactRef.js",
      "npm:react@0.14.8/lib/ReactOwner.js",
      "npm:react@0.14.8/lib/ReactEmptyComponentRegistry.js",
      "npm:react@0.14.8/lib/ReactCompositeComponent.js",
      "npm:react@0.14.8/lib/shouldUpdateReactComponent.js",
      "npm:react@0.14.8/lib/ReactUpdateQueue.js",
      "npm:react@0.14.8/lib/ReactUpdates.js",
      "npm:react@0.14.8/lib/Transaction.js",
      "npm:react@0.14.8/lib/ReactPerf.js",
      "npm:react@0.14.8/lib/CallbackQueue.js",
      "npm:react@0.14.8/lib/ReactInstanceMap.js",
      "npm:react@0.14.8/lib/ReactComponentEnvironment.js",
      "npm:react@0.14.8/lib/ReactServerRenderingTransaction.js",
      "npm:react@0.14.8/lib/ReactServerBatchingStrategy.js",
      "npm:react@0.14.8/lib/ReactMarkupChecksum.js",
      "npm:react@0.14.8/lib/adler32.js",
      "npm:react@0.14.8/lib/ReactDefaultBatchingStrategy.js",
      "npm:react@0.14.8/lib/ReactDefaultInjection.js",
      "npm:react@0.14.8/lib/ReactDefaultPerf.js",
      "npm:fbjs@0.6.1/lib/performanceNow.js",
      "npm:fbjs@0.6.1/lib/performance.js",
      "npm:fbjs@0.6.1/lib/ExecutionEnvironment.js",
      "npm:react@0.14.8/lib/ReactMount.js",
      "npm:react@0.14.8/lib/validateDOMNesting.js",
      "npm:react@0.14.8/lib/setInnerHTML.js",
      "npm:fbjs@0.6.1/lib/containsNode.js",
      "npm:fbjs@0.6.1/lib/isTextNode.js",
      "npm:fbjs@0.6.1/lib/isNode.js",
      "npm:react@0.14.8/lib/ReactDOMFeatureFlags.js",
      "npm:react@0.14.8/lib/ReactBrowserEventEmitter.js",
      "npm:react@0.14.8/lib/isEventSupported.js",
      "npm:react@0.14.8/lib/ViewportMetrics.js",
      "npm:react@0.14.8/lib/ReactEventEmitterMixin.js",
      "npm:react@0.14.8/lib/EventPluginHub.js",
      "npm:react@0.14.8/lib/forEachAccumulated.js",
      "npm:react@0.14.8/lib/accumulateInto.js",
      "npm:react@0.14.8/lib/ReactErrorUtils.js",
      "npm:react@0.14.8/lib/EventPluginUtils.js",
      "npm:react@0.14.8/lib/EventConstants.js",
      "npm:react@0.14.8/lib/EventPluginRegistry.js",
      "npm:react@0.14.8/lib/DOMProperty.js",
      "npm:react@0.14.8/lib/ReactDefaultPerfAnalysis.js",
      "npm:react@0.14.8/lib/SVGDOMPropertyConfig.js",
      "npm:react@0.14.8/lib/SimpleEventPlugin.js",
      "npm:react@0.14.8/lib/getEventCharCode.js",
      "npm:react@0.14.8/lib/SyntheticWheelEvent.js",
      "npm:react@0.14.8/lib/SyntheticMouseEvent.js",
      "npm:react@0.14.8/lib/getEventModifierState.js",
      "npm:react@0.14.8/lib/SyntheticUIEvent.js",
      "npm:react@0.14.8/lib/getEventTarget.js",
      "npm:react@0.14.8/lib/SyntheticEvent.js",
      "npm:react@0.14.8/lib/SyntheticTouchEvent.js",
      "npm:react@0.14.8/lib/SyntheticDragEvent.js",
      "npm:react@0.14.8/lib/SyntheticKeyboardEvent.js",
      "npm:react@0.14.8/lib/getEventKey.js",
      "npm:react@0.14.8/lib/SyntheticFocusEvent.js",
      "npm:react@0.14.8/lib/SyntheticClipboardEvent.js",
      "npm:react@0.14.8/lib/EventPropagators.js",
      "npm:fbjs@0.6.1/lib/EventListener.js",
      "npm:react@0.14.8/lib/ServerReactRootIndex.js",
      "npm:react@0.14.8/lib/SelectEventPlugin.js",
      "npm:fbjs@0.6.1/lib/shallowEqual.js",
      "npm:react@0.14.8/lib/isTextInputElement.js",
      "npm:fbjs@0.6.1/lib/getActiveElement.js",
      "npm:react@0.14.8/lib/ReactInputSelection.js",
      "npm:fbjs@0.6.1/lib/focusNode.js",
      "npm:react@0.14.8/lib/ReactDOMSelection.js",
      "npm:react@0.14.8/lib/getTextContentAccessor.js",
      "npm:react@0.14.8/lib/getNodeForCharacterOffset.js",
      "npm:react@0.14.8/lib/ReactReconcileTransaction.js",
      "npm:react@0.14.8/lib/ReactInjection.js",
      "npm:react@0.14.8/lib/ReactEventListener.js",
      "npm:fbjs@0.6.1/lib/getUnboundedScrollPosition.js",
      "npm:react@0.14.8/lib/ReactDOMTextComponent.js",
      "npm:react@0.14.8/lib/setTextContent.js",
      "npm:react@0.14.8/lib/escapeTextContentForBrowser.js",
      "npm:react@0.14.8/lib/ReactComponentBrowserEnvironment.js",
      "npm:react@0.14.8/lib/ReactDOMIDOperations.js",
      "npm:react@0.14.8/lib/DOMPropertyOperations.js",
      "npm:react@0.14.8/lib/quoteAttributeValueForBrowser.js",
      "npm:react@0.14.8/lib/DOMChildrenOperations.js",
      "npm:react@0.14.8/lib/ReactMultiChildUpdateTypes.js",
      "npm:react@0.14.8/lib/Danger.js",
      "npm:fbjs@0.6.1/lib/getMarkupWrap.js",
      "npm:fbjs@0.6.1/lib/createNodesFromMarkup.js",
      "npm:fbjs@0.6.1/lib/createArrayFromMixed.js",
      "npm:fbjs@0.6.1/lib/toArray.js",
      "npm:react@0.14.8/lib/ReactDOMComponent.js",
      "npm:react@0.14.8/lib/ReactMultiChild.js",
      "npm:react@0.14.8/lib/flattenChildren.js",
      "npm:react@0.14.8/lib/ReactChildReconciler.js",
      "npm:react@0.14.8/lib/ReactDOMTextarea.js",
      "npm:react@0.14.8/lib/LinkedValueUtils.js",
      "npm:react@0.14.8/lib/ReactDOMSelect.js",
      "npm:react@0.14.8/lib/ReactDOMOption.js",
      "npm:react@0.14.8/lib/ReactDOMInput.js",
      "npm:react@0.14.8/lib/ReactDOMButton.js",
      "npm:react@0.14.8/lib/CSSPropertyOperations.js",
      "npm:fbjs@0.6.1/lib/memoizeStringOnly.js",
      "npm:fbjs@0.6.1/lib/hyphenateStyleName.js",
      "npm:fbjs@0.6.1/lib/hyphenate.js",
      "npm:react@0.14.8/lib/dangerousStyleValue.js",
      "npm:react@0.14.8/lib/CSSProperty.js",
      "npm:fbjs@0.6.1/lib/camelizeStyleName.js",
      "npm:fbjs@0.6.1/lib/camelize.js",
      "npm:react@0.14.8/lib/AutoFocusUtils.js",
      "npm:react@0.14.8/lib/findDOMNode.js",
      "npm:react@0.14.8/lib/ReactBrowserComponentMixin.js",
      "npm:react@0.14.8/lib/HTMLDOMPropertyConfig.js",
      "npm:react@0.14.8/lib/EnterLeaveEventPlugin.js",
      "npm:react@0.14.8/lib/DefaultEventPluginOrder.js",
      "npm:react@0.14.8/lib/ClientReactRootIndex.js",
      "npm:react@0.14.8/lib/ChangeEventPlugin.js",
      "npm:react@0.14.8/lib/BeforeInputEventPlugin.js",
      "npm:react@0.14.8/lib/SyntheticInputEvent.js",
      "npm:react@0.14.8/lib/SyntheticCompositionEvent.js",
      "npm:react@0.14.8/lib/FallbackCompositionState.js",
      "npm:react@0.14.8/lib/ReactDOM.js",
      "npm:react@0.14.8/lib/renderSubtreeIntoContainer.js",
      "npm:babel-runtime@5.8.38/helpers/class-call-check.js",
      "npm:babel-runtime@5.8.38/helpers/create-class.js",
      "npm:babel-runtime@5.8.38/core-js/object/define-property.js",
      "npm:core-js@1.2.7/library/fn/object/define-property.js",
      "npm:core-js@1.2.7/library/modules/$.js",
      "npm:babel-runtime@5.8.38/helpers/inherits.js",
      "npm:babel-runtime@5.8.38/core-js/object/set-prototype-of.js",
      "npm:core-js@1.2.7/library/fn/object/set-prototype-of.js",
      "npm:core-js@1.2.7/library/modules/$.core.js",
      "npm:core-js@1.2.7/library/modules/es6.object.set-prototype-of.js",
      "npm:core-js@1.2.7/library/modules/$.set-proto.js",
      "npm:core-js@1.2.7/library/modules/$.ctx.js",
      "npm:core-js@1.2.7/library/modules/$.a-function.js",
      "npm:core-js@1.2.7/library/modules/$.an-object.js",
      "npm:core-js@1.2.7/library/modules/$.is-object.js",
      "npm:core-js@1.2.7/library/modules/$.export.js",
      "npm:core-js@1.2.7/library/modules/$.global.js",
      "npm:babel-runtime@5.8.38/core-js/object/create.js",
      "npm:core-js@1.2.7/library/fn/object/create.js",
      "npm:babel-runtime@5.8.38/helpers/get.js",
      "npm:babel-runtime@5.8.38/core-js/object/get-own-property-descriptor.js",
      "npm:core-js@1.2.7/library/fn/object/get-own-property-descriptor.js",
      "npm:core-js@1.2.7/library/modules/es6.object.get-own-property-descriptor.js",
      "npm:core-js@1.2.7/library/modules/$.object-sap.js",
      "npm:core-js@1.2.7/library/modules/$.fails.js",
      "npm:core-js@1.2.7/library/modules/$.to-iobject.js",
      "npm:core-js@1.2.7/library/modules/$.defined.js",
      "npm:core-js@1.2.7/library/modules/$.iobject.js",
      "npm:core-js@1.2.7/library/modules/$.cof.js",
      "containers/MainBody.js",
      "containers/MainHeader.js",
      "containers/MainNav.js",
      "npm:react-bootstrap@0.28.5.js",
      "npm:react-bootstrap@0.28.5/lib/index.js",
      "npm:react-bootstrap@0.28.5/lib/FormControls/index.js",
      "npm:react-bootstrap@0.28.5/lib/FormControls/Static.js",
      "npm:react-prop-types@0.3.2/lib/elementType.js",
      "npm:react-prop-types@0.3.2/lib/common.js",
      "npm:react-bootstrap@0.28.5/lib/utils/childrenValueInputValidation.js",
      "npm:react-prop-types@0.3.2/lib/singlePropFrom.js",
      "npm:react@15.4.2.js",
      "npm:react@15.4.2/react.js",
      "npm:react@15.4.2/lib/React.js",
      "npm:react@15.4.2/lib/ReactElementValidator.js",
      "npm:fbjs@0.8.9/lib/warning.js",
      "npm:fbjs@0.8.9/lib/emptyFunction.js",
      "npm:react@15.4.2/lib/getIteratorFn.js",
      "npm:react@15.4.2/lib/canDefineProperty.js",
      "npm:react@15.4.2/lib/checkReactTypeSpec.js",
      "npm:react@15.4.2/lib/ReactComponentTreeHook.js",
      "npm:fbjs@0.8.9/lib/invariant.js",
      "npm:react@15.4.2/lib/ReactCurrentOwner.js",
      "npm:react@15.4.2/lib/reactProdInvariant.js",
      "npm:react@15.4.2/lib/ReactPropTypesSecret.js",
      "npm:react@15.4.2/lib/ReactPropTypeLocationNames.js",
      "npm:react@15.4.2/lib/ReactElement.js",
      "npm:react@15.4.2/lib/ReactElementSymbol.js",
      "npm:object-assign@4.1.0.js",
      "npm:object-assign@4.1.0/index.js",
      "npm:react@15.4.2/lib/onlyChild.js",
      "npm:react@15.4.2/lib/ReactVersion.js",
      "npm:react@15.4.2/lib/ReactPropTypes.js",
      "npm:react@15.4.2/lib/ReactDOMFactories.js",
      "npm:react@15.4.2/lib/ReactClass.js",
      "npm:fbjs@0.8.9/lib/emptyObject.js",
      "npm:react@15.4.2/lib/ReactNoopUpdateQueue.js",
      "npm:react@15.4.2/lib/ReactComponent.js",
      "npm:react@15.4.2/lib/ReactPureComponent.js",
      "npm:react@15.4.2/lib/ReactChildren.js",
      "npm:react@15.4.2/lib/traverseAllChildren.js",
      "npm:react@15.4.2/lib/KeyEscapeUtils.js",
      "npm:react@15.4.2/lib/PooledClass.js",
      "npm:babel-runtime@5.8.38/helpers/interop-require-default.js",
      "npm:react-bootstrap@0.28.5/lib/InputBase.js",
      "npm:react-bootstrap@0.28.5/lib/Glyphicon.js",
      "npm:classnames@2.2.5.js",
      "npm:classnames@2.2.5/index.js",
      "npm:babel-runtime@5.8.38/helpers/extends.js",
      "npm:babel-runtime@5.8.38/core-js/object/assign.js",
      "npm:core-js@1.2.7/library/fn/object/assign.js",
      "npm:core-js@1.2.7/library/modules/es6.object.assign.js",
      "npm:core-js@1.2.7/library/modules/$.object-assign.js",
      "npm:core-js@1.2.7/library/modules/$.to-object.js",
      "npm:react-bootstrap@0.28.5/lib/FormGroup.js",
      "npm:babel-runtime@5.8.38/helpers/object-without-properties.js",
      "npm:react-bootstrap@0.28.5/lib/Fade.js",
      "npm:react-prop-types@0.3.2/lib/deprecated.js",
      "npm:warning@2.1.0.js",
      "npm:warning@2.1.0/browser.js",
      "npm:react-overlays@0.6.10/lib/Transition.js",
      "npm:dom-helpers@2.4.0/events/on.js",
      "npm:dom-helpers@2.4.0/util/inDOM.js",
      "npm:dom-helpers@2.4.0/transition/properties.js",
      "npm:react-dom@0.14.8.js",
      "npm:react-dom@0.14.8/index.js",
      "npm:react-bootstrap@0.28.5/lib/Collapse.js",
      "npm:react-bootstrap@0.28.5/lib/utils/createChainedFunction.js",
      "npm:dom-helpers@2.4.0/style.js",
      "npm:dom-helpers@2.4.0/style/index.js",
      "npm:dom-helpers@2.4.0/style/removeStyle.js",
      "npm:dom-helpers@2.4.0/style/getComputedStyle.js",
      "npm:dom-helpers@2.4.0/util/camelizeStyle.js",
      "npm:dom-helpers@2.4.0/util/camelize.js",
      "npm:dom-helpers@2.4.0/util/babelHelpers.js",
      "npm:dom-helpers@2.4.0/util/hyphenateStyle.js",
      "npm:dom-helpers@2.4.0/util/hyphenate.js",
      "npm:react-bootstrap@0.28.5/lib/Well.js",
      "npm:react-bootstrap@0.28.5/lib/styleMaps.js",
      "npm:babel-runtime@5.8.38/core-js/object/keys.js",
      "npm:core-js@1.2.7/library/fn/object/keys.js",
      "npm:core-js@1.2.7/library/modules/es6.object.keys.js",
      "npm:react-bootstrap@0.28.5/lib/utils/bootstrapUtils.js",
      "npm:invariant@2.2.2.js",
      "npm:invariant@2.2.2/browser.js",
      "npm:react-bootstrap@0.28.5/lib/Tooltip.js",
      "npm:react-prop-types@0.3.2/lib/isRequiredForA11y.js",
      "npm:react-bootstrap@0.28.5/lib/Thumbnail.js",
      "npm:react-bootstrap@0.28.5/lib/SafeAnchor.js",
      "npm:react-bootstrap@0.28.5/lib/Tabs.js",
      "npm:react-bootstrap@0.28.5/lib/utils/ValidComponentChildren.js",
      "npm:keycode@2.1.8.js",
      "npm:keycode@2.1.8/index.js",
      "npm:react-bootstrap@0.28.5/lib/NavItem.js",
      "npm:react-bootstrap@0.28.5/lib/Nav.js",
      "npm:react-prop-types@0.3.2/lib/all.js",
      "npm:react-bootstrap@0.28.5/lib/Col.js",
      "npm:react-bootstrap@0.28.5/lib/Table.js",
      "npm:react-bootstrap@0.28.5/lib/Tab.js",
      "npm:react-bootstrap@0.28.5/lib/utils/TransitionEvents.js",
      "npm:react-bootstrap@0.28.5/lib/SplitButton.js",
      "npm:lodash-compat@3.10.2/object/pick.js",
      "npm:lodash-compat@3.10.2/function/restParam.js",
      "npm:lodash-compat@3.10.2/internal/pickByCallback.js",
      "npm:lodash-compat@3.10.2/internal/baseForIn.js",
      "npm:lodash-compat@3.10.2/object/keysIn.js",
      "npm:lodash-compat@3.10.2/support.js",
      "npm:lodash-compat@3.10.2/lang/isString.js",
      "npm:lodash-compat@3.10.2/internal/isObjectLike.js",
      "npm:lodash-compat@3.10.2/lang/isObject.js",
      "npm:lodash-compat@3.10.2/internal/isLength.js",
      "npm:lodash-compat@3.10.2/internal/isIndex.js",
      "npm:lodash-compat@3.10.2/lang/isFunction.js",
      "npm:lodash-compat@3.10.2/lang/isArray.js",
      "npm:lodash-compat@3.10.2/internal/getNative.js",
      "npm:lodash-compat@3.10.2/lang/isNative.js",
      "npm:lodash-compat@3.10.2/internal/isHostObject.js",
      "npm:lodash-compat@3.10.2/lang/isArguments.js",
      "npm:lodash-compat@3.10.2/internal/isArrayLike.js",
      "npm:lodash-compat@3.10.2/internal/getLength.js",
      "npm:lodash-compat@3.10.2/internal/baseProperty.js",
      "npm:lodash-compat@3.10.2/internal/toObject.js",
      "npm:lodash-compat@3.10.2/internal/arrayEach.js",
      "npm:lodash-compat@3.10.2/internal/baseFor.js",
      "npm:lodash-compat@3.10.2/internal/createBaseFor.js",
      "npm:lodash-compat@3.10.2/internal/pickByArray.js",
      "npm:lodash-compat@3.10.2/internal/bindCallback.js",
      "npm:lodash-compat@3.10.2/utility/identity.js",
      "npm:lodash-compat@3.10.2/internal/baseFlatten.js",
      "npm:lodash-compat@3.10.2/internal/arrayPush.js",
      "npm:lodash-compat@3.10.2/object/omit.js",
      "npm:lodash-compat@3.10.2/internal/baseDifference.js",
      "npm:lodash-compat@3.10.2/internal/createCache.js",
      "npm:lodash-compat@3.10.2/internal/SetCache.js",
      "npm:lodash-compat@3.10.2/internal/cachePush.js",
      "npm:lodash-compat@3.10.2/internal/cacheIndexOf.js",
      "npm:lodash-compat@3.10.2/internal/baseIndexOf.js",
      "npm:lodash-compat@3.10.2/internal/indexOfNaN.js",
      "npm:lodash-compat@3.10.2/internal/arrayMap.js",
      "npm:react-bootstrap@0.28.5/lib/SplitToggle.js",
      "npm:react-bootstrap@0.28.5/lib/DropdownToggle.js",
      "npm:react-bootstrap@0.28.5/lib/Button.js",
      "npm:react-bootstrap@0.28.5/lib/Dropdown.js",
      "npm:react-bootstrap@0.28.5/lib/utils/CustomPropTypes.js",
      "npm:react-bootstrap@0.28.5/lib/utils/childrenToArray.js",
      "npm:react-bootstrap@0.28.5/lib/DropdownMenu.js",
      "npm:react-overlays@0.6.10/lib/RootCloseWrapper.js",
      "npm:react-overlays@0.6.10/lib/utils/ownerDocument.js",
      "npm:dom-helpers@2.4.0/ownerDocument.js",
      "npm:react-overlays@0.6.10/lib/utils/addEventListener.js",
      "npm:dom-helpers@2.4.0/events/off.js",
      "npm:dom-helpers@2.4.0/query/contains.js",
      "npm:react-bootstrap@0.28.5/lib/ButtonGroup.js",
      "npm:uncontrollable@3.3.1.js",
      "npm:uncontrollable@3.3.1/index.js",
      "npm:uncontrollable@3.3.1/createUncontrollable.js",
      "npm:uncontrollable@3.3.1/utils.js",
      "npm:lodash-compat@3.10.2/collection/find.js",
      "npm:lodash-compat@3.10.2/internal/createFind.js",
      "npm:lodash-compat@3.10.2/internal/baseFindIndex.js",
      "npm:lodash-compat@3.10.2/internal/baseFind.js",
      "npm:lodash-compat@3.10.2/internal/baseCallback.js",
      "npm:lodash-compat@3.10.2/utility/property.js",
      "npm:lodash-compat@3.10.2/internal/isKey.js",
      "npm:lodash-compat@3.10.2/internal/basePropertyDeep.js",
      "npm:lodash-compat@3.10.2/internal/toPath.js",
      "npm:lodash-compat@3.10.2/internal/baseToString.js",
      "npm:lodash-compat@3.10.2/internal/baseGet.js",
      "npm:lodash-compat@3.10.2/internal/baseMatchesProperty.js",
      "npm:lodash-compat@3.10.2/array/last.js",
      "npm:lodash-compat@3.10.2/internal/isStrictComparable.js",
      "npm:lodash-compat@3.10.2/internal/baseSlice.js",
      "npm:lodash-compat@3.10.2/internal/baseIsEqual.js",
      "npm:lodash-compat@3.10.2/internal/baseIsEqualDeep.js",
      "npm:lodash-compat@3.10.2/lang/isTypedArray.js",
      "npm:lodash-compat@3.10.2/internal/equalObjects.js",
      "npm:lodash-compat@3.10.2/object/keys.js",
      "npm:lodash-compat@3.10.2/internal/shimKeys.js",
      "npm:lodash-compat@3.10.2/internal/equalByTag.js",
      "npm:lodash-compat@3.10.2/internal/equalArrays.js",
      "npm:lodash-compat@3.10.2/internal/arraySome.js",
      "npm:lodash-compat@3.10.2/internal/baseMatches.js",
      "npm:lodash-compat@3.10.2/internal/getMatchData.js",
      "npm:lodash-compat@3.10.2/object/pairs.js",
      "npm:lodash-compat@3.10.2/internal/baseIsMatch.js",
      "npm:lodash-compat@3.10.2/internal/baseEach.js",
      "npm:lodash-compat@3.10.2/internal/createBaseEach.js",
      "npm:lodash-compat@3.10.2/internal/baseForOwn.js",
      "npm:dom-helpers@2.4.0/activeElement.js",
      "npm:react-bootstrap@0.28.5/lib/Row.js",
      "npm:react-bootstrap@0.28.5/lib/ResponsiveEmbed.js",
      "npm:react-bootstrap@0.28.5/lib/ProgressBar.js",
      "npm:react-bootstrap@0.28.5/lib/Interpolate.js",
      "npm:react-bootstrap@0.28.5/lib/Popover.js",
      "npm:react-bootstrap@0.28.5/lib/PanelGroup.js",
      "npm:react-bootstrap@0.28.5/lib/Panel.js",
      "npm:react-bootstrap@0.28.5/lib/Pagination.js",
      "npm:react-bootstrap@0.28.5/lib/PaginationButton.js",
      "npm:react-bootstrap@0.28.5/lib/utils/createSelectedEvent.js",
      "npm:react-bootstrap@0.28.5/lib/Pager.js",
      "npm:react-bootstrap@0.28.5/lib/PageItem.js",
      "npm:react-bootstrap@0.28.5/lib/PageHeader.js",
      "npm:react-bootstrap@0.28.5/lib/OverlayTrigger.js",
      "npm:react-bootstrap@0.28.5/lib/Overlay.js",
      "npm:react-overlays@0.6.10/lib/Overlay.js",
      "npm:react-prop-types@0.4.0/lib/elementType.js",
      "npm:react-prop-types@0.4.0/lib/utils/createChainableTypeChecker.js",
      "npm:react-overlays@0.6.10/lib/Position.js",
      "npm:react-overlays@0.6.10/lib/utils/getContainer.js",
      "npm:react-overlays@0.6.10/lib/utils/calculatePosition.js",
      "npm:dom-helpers@2.4.0/query/scrollTop.js",
      "npm:dom-helpers@2.4.0/query/isWindow.js",
      "npm:dom-helpers@2.4.0/query/position.js",
      "npm:dom-helpers@2.4.0/query/scrollLeft.js",
      "npm:dom-helpers@2.4.0/query/offsetParent.js",
      "npm:dom-helpers@2.4.0/query/offset.js",
      "npm:react-prop-types@0.4.0/lib/componentOrElement.js",
      "npm:react-overlays@0.6.10/lib/Portal.js",
      "npm:react-bootstrap@0.28.5/lib/NavDropdown.js",
      "npm:react-bootstrap@0.28.5/lib/NavbarBrand.js",
      "npm:react-bootstrap@0.28.5/lib/NavBrand.js",
      "npm:react-bootstrap@0.28.5/lib/utils/deprecationWarning.js",
      "npm:react-bootstrap@0.28.5/lib/Navbar.js",
      "npm:react-bootstrap@0.28.5/lib/NavbarCollapse.js",
      "npm:react-bootstrap@0.28.5/lib/NavbarToggle.js",
      "npm:react-bootstrap@0.28.5/lib/NavbarHeader.js",
      "npm:react-bootstrap@0.28.5/lib/deprecated/Navbar.js",
      "npm:react-bootstrap@0.28.5/lib/Grid.js",
      "npm:react-bootstrap@0.28.5/lib/ModalTitle.js",
      "npm:react-bootstrap@0.28.5/lib/ModalHeader.js",
      "npm:react-bootstrap@0.28.5/lib/ModalFooter.js",
      "npm:react-bootstrap@0.28.5/lib/ModalBody.js",
      "npm:react-bootstrap@0.28.5/lib/Modal.js",
      "npm:react-overlays@0.6.10/lib/utils/isOverflowing.js",
      "npm:react-overlays@0.6.10/lib/Modal.js",
      "npm:react-overlays@0.6.10/lib/utils/addFocusListener.js",
      "npm:react-overlays@0.6.10/lib/ModalManager.js",
      "npm:react-overlays@0.6.10/lib/utils/manageAriaHidden.js",
      "npm:dom-helpers@2.4.0/util/scrollbarSize.js",
      "npm:dom-helpers@2.4.0/class.js",
      "npm:dom-helpers@2.4.0/class/index.js",
      "npm:dom-helpers@2.4.0/class/hasClass.js",
      "npm:dom-helpers@2.4.0/class/removeClass.js",
      "npm:dom-helpers@2.4.0/class/addClass.js",
      "npm:warning@3.0.0.js",
      "npm:warning@3.0.0/browser.js",
      "npm:react-bootstrap@0.28.5/lib/ModalDialog.js",
      "npm:dom-helpers@2.4.0/events.js",
      "npm:dom-helpers@2.4.0/events/index.js",
      "npm:dom-helpers@2.4.0/events/filter.js",
      "npm:dom-helpers@2.4.0/query/querySelectorAll.js",
      "npm:react-bootstrap@0.28.5/lib/Media.js",
      "npm:react-bootstrap@0.28.5/lib/MediaListItem.js",
      "npm:react-bootstrap@0.28.5/lib/MediaList.js",
      "npm:react-bootstrap@0.28.5/lib/MediaRight.js",
      "npm:react-bootstrap@0.28.5/lib/MediaLeft.js",
      "npm:react-bootstrap@0.28.5/lib/MediaBody.js",
      "npm:react-bootstrap@0.28.5/lib/MediaHeading.js",
      "npm:react-bootstrap@0.28.5/lib/MenuItem.js",
      "npm:react-bootstrap@0.28.5/lib/ListGroupItem.js",
      "npm:react-bootstrap@0.28.5/lib/ListGroup.js",
      "npm:react-bootstrap@0.28.5/lib/Label.js",
      "npm:react-bootstrap@0.28.5/lib/Jumbotron.js",
      "npm:react-bootstrap@0.28.5/lib/Input.js",
      "npm:babel-runtime@5.8.38/helpers/interop-require-wildcard.js",
      "npm:react-bootstrap@0.28.5/lib/Image.js",
      "npm:react-bootstrap@0.28.5/lib/DropdownButton.js",
      "npm:react-bootstrap@0.28.5/lib/CollapsibleNav.js",
      "npm:react-bootstrap@0.28.5/lib/Clearfix.js",
      "npm:react-bootstrap@0.28.5/lib/CarouselItem.js",
      "npm:react-bootstrap@0.28.5/lib/Carousel.js",
      "npm:react-bootstrap@0.28.5/lib/CarouselCaption.js",
      "npm:react-bootstrap@0.28.5/lib/ButtonToolbar.js",
      "npm:react-bootstrap@0.28.5/lib/ButtonInput.js",
      "npm:react-bootstrap@0.28.5/lib/BreadcrumbItem.js",
      "npm:react-bootstrap@0.28.5/lib/Breadcrumb.js",
      "npm:react-bootstrap@0.28.5/lib/Badge.js",
      "npm:react-bootstrap@0.28.5/lib/Alert.js",
      "npm:react-bootstrap@0.28.5/lib/Accordion.js",
      "npm:jquery@2.2.4.js",
      "npm:jquery@2.2.4/dist/jquery.js",
      "containers/App.js",
      "npm:react-router@2.8.1.js",
      "npm:react-router@2.8.1/lib/index.js",
      "npm:react-router@2.8.1/lib/createMemoryHistory.js",
      "npm:history@2.1.2/lib/createMemoryHistory.js",
      "npm:history@2.1.2/lib/createHistory.js",
      "npm:history@2.1.2/lib/deprecate.js",
      "npm:history@2.1.2/lib/runTransitionHook.js",
      "npm:history@2.1.2/lib/createLocation.js",
      "npm:history@2.1.2/lib/PathUtils.js",
      "npm:history@2.1.2/lib/Actions.js",
      "npm:history@2.1.2/lib/AsyncUtils.js",
      "npm:deep-equal@1.0.1.js",
      "npm:deep-equal@1.0.1/index.js",
      "npm:deep-equal@1.0.1/lib/is_arguments.js",
      "npm:deep-equal@1.0.1/lib/keys.js",
      "npm:history@2.1.2/lib/useBasename.js",
      "npm:history@2.1.2/lib/ExecutionEnvironment.js",
      "npm:history@2.1.2/lib/useQueries.js",
      "npm:query-string@3.0.3.js",
      "npm:query-string@3.0.3/index.js",
      "npm:strict-uri-encode@1.1.0.js",
      "npm:strict-uri-encode@1.1.0/index.js",
      "npm:react-router@2.8.1/lib/hashHistory.js",
      "npm:react-router@2.8.1/lib/createRouterHistory.js",
      "npm:react-router@2.8.1/lib/useRouterHistory.js",
      "npm:history@2.1.2/lib/createHashHistory.js",
      "npm:history@2.1.2/lib/createDOMHistory.js",
      "npm:history@2.1.2/lib/DOMUtils.js",
      "npm:history@2.1.2/lib/DOMStateStorage.js",
      "npm:react-router@2.8.1/lib/browserHistory.js",
      "npm:history@2.1.2/lib/createBrowserHistory.js",
      "npm:react-router@2.8.1/lib/applyRouterMiddleware.js",
      "npm:react-router@2.8.1/lib/routerWarning.js",
      "npm:react-router@2.8.1/lib/RouterContext.js",
      "npm:react-router@2.8.1/lib/RouteUtils.js",
      "npm:react-router@2.8.1/lib/getRouteParams.js",
      "npm:react-router@2.8.1/lib/PatternUtils.js",
      "npm:react-router@2.8.1/lib/deprecateObjectProperties.js",
      "npm:react-router@2.8.1/lib/match.js",
      "npm:react-router@2.8.1/lib/RouterUtils.js",
      "npm:react-router@2.8.1/lib/createTransitionManager.js",
      "npm:react-router@2.8.1/lib/matchRoutes.js",
      "npm:react-router@2.8.1/lib/makeStateWithLocation.js",
      "npm:react-router@2.8.1/lib/AsyncUtils.js",
      "npm:react-router@2.8.1/lib/getComponents.js",
      "npm:react-router@2.8.1/lib/isActive.js",
      "npm:react-router@2.8.1/lib/TransitionUtils.js",
      "npm:react-router@2.8.1/lib/computeChangedRoutes.js",
      "npm:react-router@2.8.1/lib/RoutingContext.js",
      "npm:react-router@2.8.1/lib/useRoutes.js",
      "npm:react-router@2.8.1/lib/RouteContext.js",
      "npm:react-router@2.8.1/lib/Lifecycle.js",
      "npm:react-router@2.8.1/lib/History.js",
      "npm:react-router@2.8.1/lib/InternalPropTypes.js",
      "npm:react-router@2.8.1/lib/Route.js",
      "npm:react-router@2.8.1/lib/Redirect.js",
      "npm:react-router@2.8.1/lib/IndexRoute.js",
      "npm:react-router@2.8.1/lib/IndexRedirect.js",
      "npm:react-router@2.8.1/lib/withRouter.js",
      "npm:react-router@2.8.1/lib/PropTypes.js",
      "npm:hoist-non-react-statics@1.2.0.js",
      "npm:hoist-non-react-statics@1.2.0/index.js",
      "npm:react-router@2.8.1/lib/IndexLink.js",
      "npm:react-router@2.8.1/lib/Link.js",
      "npm:react-router@2.8.1/lib/Router.js",
      "npm:font-awesome@4.7.0/css/font-awesome.css!github:systemjs/plugin-css@0.1.32.js",
      "github:twbs/bootstrap@3.3.7/css/bootstrap.css!github:systemjs/plugin-css@0.1.32.js",
      "stylesheets/main.css!github:systemjs/plugin-css@0.1.32.js",
      "npm:toastr@2.1.2.js",
      "npm:toastr@2.1.2/toastr.js",
      "stylesheets/toastr.css!github:systemjs/plugin-css@0.1.32.js"
    ]
  },

  depCache: {
    "app.js": [
      "react",
      "react-dom",
      "stylesheets/toastr.css!css",
      "toastr",
      "stylesheets/main.css!css",
      "bootstrap/css/bootstrap.css!css",
      "font-awesome/css/font-awesome.css!css",
      "react-router",
      "./containers/App",
      "./containers/HomePage"
    ],
    "npm:react@0.14.8.js": [
      "npm:react@0.14.8/react.js"
    ],
    "npm:toastr@2.1.2.js": [
      "npm:toastr@2.1.2/toastr.js"
    ],
    "npm:react-router@2.8.1.js": [
      "npm:react-router@2.8.1/lib/index"
    ],
    "containers/HomePage.js": [
      "babel-runtime/helpers/get",
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/create-class",
      "babel-runtime/helpers/class-call-check",
      "react",
      "./MainNav",
      "./MainHeader",
      "./MainBody",
      "./MainFooter"
    ],
    "containers/App.js": [
      "babel-runtime/helpers/get",
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/create-class",
      "babel-runtime/helpers/class-call-check",
      "react"
    ],
    "npm:react-dom@0.14.8.js": [
      "npm:react-dom@0.14.8/index.js"
    ],
    "npm:toastr@2.1.2/toastr.js": [
      "jquery"
    ],
    "npm:react@0.14.8/react.js": [
      "./lib/React"
    ],
    "npm:babel-runtime@5.8.38/helpers/get.js": [
      "../core-js/object/get-own-property-descriptor"
    ],
    "npm:react-router@2.8.1/lib/index.js": [
      "./RouteUtils",
      "./PropTypes",
      "./PatternUtils",
      "./Router",
      "./Link",
      "./IndexLink",
      "./withRouter",
      "./IndexRedirect",
      "./IndexRoute",
      "./Redirect",
      "./Route",
      "./History",
      "./Lifecycle",
      "./RouteContext",
      "./useRoutes",
      "./RouterContext",
      "./RoutingContext",
      "./match",
      "./useRouterHistory",
      "./applyRouterMiddleware",
      "./browserHistory",
      "./hashHistory",
      "./createMemoryHistory"
    ],
    "npm:babel-runtime@5.8.38/helpers/inherits.js": [
      "../core-js/object/create",
      "../core-js/object/set-prototype-of"
    ],
    "npm:babel-runtime@5.8.38/helpers/create-class.js": [
      "../core-js/object/define-property"
    ],
    "containers/MainNav.js": [
      "babel-runtime/helpers/get",
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/create-class",
      "babel-runtime/helpers/class-call-check",
      "jquery",
      "react",
      "react-dom",
      "react-bootstrap"
    ],
    "containers/MainHeader.js": [
      "babel-runtime/helpers/get",
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/create-class",
      "babel-runtime/helpers/class-call-check",
      "react"
    ],
    "containers/MainBody.js": [
      "babel-runtime/helpers/get",
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/create-class",
      "babel-runtime/helpers/class-call-check",
      "react"
    ],
    "containers/MainFooter.js": [
      "babel-runtime/helpers/get",
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/create-class",
      "babel-runtime/helpers/class-call-check",
      "react"
    ],
    "npm:react-dom@0.14.8/index.js": [
      "react/lib/ReactDOM"
    ],
    "npm:react@0.14.8/lib/React.js": [
      "./ReactDOM",
      "./ReactDOMServer",
      "./ReactIsomorphic",
      "./Object.assign",
      "./deprecated"
    ],
    "npm:babel-runtime@5.8.38/core-js/object/get-own-property-descriptor.js": [
      "core-js/library/fn/object/get-own-property-descriptor"
    ],
    "npm:react-router@2.8.1/lib/PropTypes.js": [
      "react",
      "./deprecateObjectProperties",
      "./InternalPropTypes",
      "./routerWarning",
      "process"
    ],
    "npm:react-router@2.8.1/lib/RouteUtils.js": [
      "react"
    ],
    "npm:react-router@2.8.1/lib/PatternUtils.js": [
      "invariant",
      "process"
    ],
    "npm:react-router@2.8.1/lib/Link.js": [
      "react",
      "./routerWarning",
      "invariant",
      "./PropTypes",
      "process"
    ],
    "npm:react-router@2.8.1/lib/IndexLink.js": [
      "react",
      "./Link"
    ],
    "npm:react-router@2.8.1/lib/withRouter.js": [
      "invariant",
      "react",
      "hoist-non-react-statics",
      "./PropTypes",
      "process"
    ],
    "npm:react-router@2.8.1/lib/IndexRedirect.js": [
      "react",
      "./routerWarning",
      "invariant",
      "./Redirect",
      "./InternalPropTypes",
      "process"
    ],
    "npm:react-router@2.8.1/lib/Redirect.js": [
      "react",
      "invariant",
      "./RouteUtils",
      "./PatternUtils",
      "./InternalPropTypes",
      "process"
    ],
    "npm:react-router@2.8.1/lib/Route.js": [
      "react",
      "invariant",
      "./RouteUtils",
      "./InternalPropTypes",
      "process"
    ],
    "npm:react-router@2.8.1/lib/Lifecycle.js": [
      "./routerWarning",
      "react",
      "invariant",
      "process"
    ],
    "npm:react-router@2.8.1/lib/RouteContext.js": [
      "./routerWarning",
      "react",
      "process"
    ],
    "npm:react-router@2.8.1/lib/History.js": [
      "./routerWarning",
      "./InternalPropTypes",
      "process"
    ],
    "npm:react-router@2.8.1/lib/IndexRoute.js": [
      "react",
      "./routerWarning",
      "invariant",
      "./RouteUtils",
      "./InternalPropTypes",
      "process"
    ],
    "npm:react-router@2.8.1/lib/RouterContext.js": [
      "invariant",
      "react",
      "./deprecateObjectProperties",
      "./getRouteParams",
      "./RouteUtils",
      "./routerWarning",
      "process"
    ],
    "npm:react-router@2.8.1/lib/RoutingContext.js": [
      "react",
      "./RouterContext",
      "./routerWarning",
      "process"
    ],
    "npm:react-router@2.8.1/lib/Router.js": [
      "history/lib/createHashHistory",
      "history/lib/useQueries",
      "invariant",
      "react",
      "./createTransitionManager",
      "./InternalPropTypes",
      "./RouterContext",
      "./RouteUtils",
      "./RouterUtils",
      "./routerWarning",
      "process"
    ],
    "npm:react-router@2.8.1/lib/useRoutes.js": [
      "history/lib/useQueries",
      "./createTransitionManager",
      "./routerWarning",
      "process"
    ],
    "npm:jquery@2.2.4.js": [
      "npm:jquery@2.2.4/dist/jquery.js"
    ],
    "npm:babel-runtime@5.8.38/core-js/object/create.js": [
      "core-js/library/fn/object/create"
    ],
    "npm:babel-runtime@5.8.38/core-js/object/set-prototype-of.js": [
      "core-js/library/fn/object/set-prototype-of"
    ],
    "npm:babel-runtime@5.8.38/core-js/object/define-property.js": [
      "core-js/library/fn/object/define-property"
    ],
    "npm:react-bootstrap@0.28.5.js": [
      "npm:react-bootstrap@0.28.5/lib/index.js"
    ],
    "npm:react-router@2.8.1/lib/applyRouterMiddleware.js": [
      "react",
      "./RouterContext",
      "./routerWarning",
      "process"
    ],
    "npm:react-router@2.8.1/lib/match.js": [
      "history/lib/Actions",
      "invariant",
      "./createMemoryHistory",
      "./createTransitionManager",
      "./RouteUtils",
      "./RouterUtils",
      "process"
    ],
    "npm:react-router@2.8.1/lib/useRouterHistory.js": [
      "history/lib/useQueries",
      "history/lib/useBasename"
    ],
    "npm:react-router@2.8.1/lib/browserHistory.js": [
      "history/lib/createBrowserHistory",
      "./createRouterHistory"
    ],
    "npm:react-router@2.8.1/lib/hashHistory.js": [
      "history/lib/createHashHistory",
      "./createRouterHistory"
    ],
    "npm:react-router@2.8.1/lib/createMemoryHistory.js": [
      "history/lib/useQueries",
      "history/lib/useBasename",
      "history/lib/createMemoryHistory"
    ],
    "npm:react@0.14.8/lib/ReactDOM.js": [
      "./ReactCurrentOwner",
      "./ReactDOMTextComponent",
      "./ReactDefaultInjection",
      "./ReactInstanceHandles",
      "./ReactMount",
      "./ReactPerf",
      "./ReactReconciler",
      "./ReactUpdates",
      "./ReactVersion",
      "./findDOMNode",
      "./renderSubtreeIntoContainer",
      "fbjs/lib/warning",
      "fbjs/lib/ExecutionEnvironment",
      "process"
    ],
    "npm:hoist-non-react-statics@1.2.0.js": [
      "npm:hoist-non-react-statics@1.2.0/index.js"
    ],
    "npm:react@0.14.8/lib/ReactDOMServer.js": [
      "./ReactDefaultInjection",
      "./ReactServerRendering",
      "./ReactVersion"
    ],
    "npm:core-js@1.2.7/library/fn/object/get-own-property-descriptor.js": [
      "../../modules/$",
      "../../modules/es6.object.get-own-property-descriptor"
    ],
    "npm:react@15.4.2.js": [
      "npm:react@15.4.2/react.js"
    ],
    "github:jspm/nodelibs-process@0.1.2.js": [
      "github:jspm/nodelibs-process@0.1.2/index"
    ],
    "npm:invariant@2.2.2.js": [
      "npm:invariant@2.2.2/browser.js"
    ],
    "npm:react-router@2.8.1/lib/getRouteParams.js": [
      "./PatternUtils"
    ],
    "npm:react@0.14.8/lib/ReactIsomorphic.js": [
      "./ReactChildren",
      "./ReactComponent",
      "./ReactClass",
      "./ReactDOMFactories",
      "./ReactElement",
      "./ReactElementValidator",
      "./ReactPropTypes",
      "./ReactVersion",
      "./Object.assign",
      "./onlyChild",
      "process"
    ],
    "npm:react-router@2.8.1/lib/InternalPropTypes.js": [
      "react"
    ],
    "npm:react-router@2.8.1/lib/deprecateObjectProperties.js": [
      "./routerWarning",
      "process"
    ],
    "npm:react-router@2.8.1/lib/routerWarning.js": [
      "warning"
    ],
    "npm:history@2.1.2/lib/createHashHistory.js": [
      "warning",
      "invariant",
      "./Actions",
      "./PathUtils",
      "./ExecutionEnvironment",
      "./DOMUtils",
      "./DOMStateStorage",
      "./createDOMHistory",
      "process"
    ],
    "npm:history@2.1.2/lib/useQueries.js": [
      "warning",
      "query-string",
      "./runTransitionHook",
      "./PathUtils",
      "./deprecate",
      "process"
    ],
    "npm:react-router@2.8.1/lib/createTransitionManager.js": [
      "./routerWarning",
      "./computeChangedRoutes",
      "./TransitionUtils",
      "./isActive",
      "./getComponents",
      "./matchRoutes",
      "process"
    ],
    "npm:react@0.14.8/lib/deprecated.js": [
      "./Object.assign",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:core-js@1.2.7/library/fn/object/set-prototype-of.js": [
      "../../modules/es6.object.set-prototype-of",
      "../../modules/$.core"
    ],
    "npm:core-js@1.2.7/library/fn/object/create.js": [
      "../../modules/$"
    ],
    "npm:core-js@1.2.7/library/fn/object/define-property.js": [
      "../../modules/$"
    ],
    "npm:react-router@2.8.1/lib/createRouterHistory.js": [
      "./useRouterHistory"
    ],
    "npm:react-router@2.8.1/lib/RouterUtils.js": [
      "./deprecateObjectProperties",
      "process"
    ],
    "npm:history@2.1.2/lib/useBasename.js": [
      "warning",
      "./ExecutionEnvironment",
      "./PathUtils",
      "./runTransitionHook",
      "./deprecate",
      "process"
    ],
    "npm:history@2.1.2/lib/createBrowserHistory.js": [
      "invariant",
      "./Actions",
      "./PathUtils",
      "./ExecutionEnvironment",
      "./DOMUtils",
      "./DOMStateStorage",
      "./createDOMHistory",
      "process"
    ],
    "npm:history@2.1.2/lib/createMemoryHistory.js": [
      "warning",
      "invariant",
      "./PathUtils",
      "./Actions",
      "./createHistory",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactDOMTextComponent.js": [
      "./DOMChildrenOperations",
      "./DOMPropertyOperations",
      "./ReactComponentBrowserEnvironment",
      "./ReactMount",
      "./Object.assign",
      "./escapeTextContentForBrowser",
      "./setTextContent",
      "./validateDOMNesting",
      "process"
    ],
    "npm:react-bootstrap@0.28.5/lib/index.js": [
      "babel-runtime/helpers/interop-require-default",
      "babel-runtime/helpers/interop-require-wildcard",
      "./utils/childrenValueInputValidation",
      "./utils/createChainedFunction",
      "./utils/ValidComponentChildren",
      "./utils/bootstrapUtils",
      "./Accordion",
      "./Alert",
      "./Badge",
      "./Breadcrumb",
      "./BreadcrumbItem",
      "./Button",
      "./ButtonGroup",
      "./ButtonInput",
      "./ButtonToolbar",
      "./Carousel",
      "./CarouselItem",
      "./Clearfix",
      "./Col",
      "./CollapsibleNav",
      "./Dropdown",
      "./DropdownButton",
      "./Glyphicon",
      "./Grid",
      "./Image",
      "./Input",
      "./Interpolate",
      "./Jumbotron",
      "./Label",
      "./ListGroup",
      "./ListGroupItem",
      "./MenuItem",
      "./Media",
      "./Modal",
      "./ModalBody",
      "./ModalFooter",
      "./ModalHeader",
      "./ModalTitle",
      "./Nav",
      "./Navbar",
      "./NavBrand",
      "./NavbarBrand",
      "./NavDropdown",
      "./NavItem",
      "./Overlay",
      "./OverlayTrigger",
      "./PageHeader",
      "./PageItem",
      "./Pager",
      "./Pagination",
      "./Panel",
      "./PanelGroup",
      "./Popover",
      "./ProgressBar",
      "./ResponsiveEmbed",
      "./Row",
      "./SafeAnchor",
      "./SplitButton",
      "./Tab",
      "./Table",
      "./Tabs",
      "./Thumbnail",
      "./Tooltip",
      "./Well",
      "./Collapse",
      "./Fade",
      "./FormControls/index"
    ],
    "npm:react@0.14.8/lib/ReactInstanceHandles.js": [
      "./ReactRootIndex",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactDefaultInjection.js": [
      "./BeforeInputEventPlugin",
      "./ChangeEventPlugin",
      "./ClientReactRootIndex",
      "./DefaultEventPluginOrder",
      "./EnterLeaveEventPlugin",
      "fbjs/lib/ExecutionEnvironment",
      "./HTMLDOMPropertyConfig",
      "./ReactBrowserComponentMixin",
      "./ReactComponentBrowserEnvironment",
      "./ReactDefaultBatchingStrategy",
      "./ReactDOMComponent",
      "./ReactDOMTextComponent",
      "./ReactEventListener",
      "./ReactInjection",
      "./ReactInstanceHandles",
      "./ReactMount",
      "./ReactReconcileTransaction",
      "./SelectEventPlugin",
      "./ServerReactRootIndex",
      "./SimpleEventPlugin",
      "./SVGDOMPropertyConfig",
      "./ReactDefaultPerf",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactReconciler.js": [
      "./ReactRef"
    ],
    "npm:react@0.14.8/lib/renderSubtreeIntoContainer.js": [
      "./ReactMount"
    ],
    "npm:react@0.14.8/lib/ReactPerf.js": [
      "process"
    ],
    "npm:fbjs@0.6.1/lib/warning.js": [
      "./emptyFunction",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactMount.js": [
      "./DOMProperty",
      "./ReactBrowserEventEmitter",
      "./ReactCurrentOwner",
      "./ReactDOMFeatureFlags",
      "./ReactElement",
      "./ReactEmptyComponentRegistry",
      "./ReactInstanceHandles",
      "./ReactInstanceMap",
      "./ReactMarkupChecksum",
      "./ReactPerf",
      "./ReactReconciler",
      "./ReactUpdateQueue",
      "./ReactUpdates",
      "./Object.assign",
      "fbjs/lib/emptyObject",
      "fbjs/lib/containsNode",
      "./instantiateReactComponent",
      "fbjs/lib/invariant",
      "./setInnerHTML",
      "./shouldUpdateReactComponent",
      "./validateDOMNesting",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactUpdates.js": [
      "./CallbackQueue",
      "./PooledClass",
      "./ReactPerf",
      "./ReactReconciler",
      "./Transaction",
      "./Object.assign",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@0.14.8/lib/findDOMNode.js": [
      "./ReactCurrentOwner",
      "./ReactInstanceMap",
      "./ReactMount",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.4.2/react.js": [
      "./lib/React"
    ],
    "npm:core-js@1.2.7/library/modules/es6.object.get-own-property-descriptor.js": [
      "./$.to-iobject",
      "./$.object-sap"
    ],
    "npm:warning@3.0.0.js": [
      "npm:warning@3.0.0/browser.js"
    ],
    "npm:warning@2.1.0.js": [
      "npm:warning@2.1.0/browser.js"
    ],
    "npm:query-string@3.0.3.js": [
      "npm:query-string@3.0.3/index"
    ],
    "npm:react-router@2.8.1/lib/computeChangedRoutes.js": [
      "./PatternUtils"
    ],
    "npm:react-router@2.8.1/lib/isActive.js": [
      "./PatternUtils"
    ],
    "npm:react-router@2.8.1/lib/getComponents.js": [
      "./AsyncUtils",
      "./makeStateWithLocation"
    ],
    "github:jspm/nodelibs-process@0.1.2/index.js": [
      "process"
    ],
    "npm:invariant@2.2.2/browser.js": [
      "process"
    ],
    "npm:react@0.14.8/lib/ReactElement.js": [
      "./ReactCurrentOwner",
      "./Object.assign",
      "./canDefineProperty",
      "process"
    ],
    "npm:history@2.1.2/lib/PathUtils.js": [
      "warning",
      "process"
    ],
    "npm:history@2.1.2/lib/DOMStateStorage.js": [
      "warning",
      "process"
    ],
    "npm:history@2.1.2/lib/createDOMHistory.js": [
      "invariant",
      "./ExecutionEnvironment",
      "./DOMUtils",
      "./createHistory",
      "process"
    ],
    "npm:history@2.1.2/lib/runTransitionHook.js": [
      "warning",
      "process"
    ],
    "npm:history@2.1.2/lib/deprecate.js": [
      "warning",
      "process"
    ],
    "npm:react-router@2.8.1/lib/TransitionUtils.js": [
      "./AsyncUtils",
      "./routerWarning",
      "process"
    ],
    "npm:react-router@2.8.1/lib/matchRoutes.js": [
      "./AsyncUtils",
      "./makeStateWithLocation",
      "./PatternUtils",
      "./routerWarning",
      "./RouteUtils",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactServerRendering.js": [
      "./ReactDefaultBatchingStrategy",
      "./ReactElement",
      "./ReactInstanceHandles",
      "./ReactMarkupChecksum",
      "./ReactServerBatchingStrategy",
      "./ReactServerRenderingTransaction",
      "./ReactUpdates",
      "fbjs/lib/emptyObject",
      "./instantiateReactComponent",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactChildren.js": [
      "./PooledClass",
      "./ReactElement",
      "fbjs/lib/emptyFunction",
      "./traverseAllChildren"
    ],
    "npm:react@0.14.8/lib/ReactComponent.js": [
      "./ReactNoopUpdateQueue",
      "./canDefineProperty",
      "fbjs/lib/emptyObject",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactClass.js": [
      "./ReactComponent",
      "./ReactElement",
      "./ReactPropTypeLocations",
      "./ReactPropTypeLocationNames",
      "./ReactNoopUpdateQueue",
      "./Object.assign",
      "fbjs/lib/emptyObject",
      "fbjs/lib/invariant",
      "fbjs/lib/keyMirror",
      "fbjs/lib/keyOf",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactDOMFactories.js": [
      "./ReactElement",
      "./ReactElementValidator",
      "fbjs/lib/mapObject",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactElementValidator.js": [
      "./ReactElement",
      "./ReactPropTypeLocations",
      "./ReactPropTypeLocationNames",
      "./ReactCurrentOwner",
      "./canDefineProperty",
      "./getIteratorFn",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactPropTypes.js": [
      "./ReactElement",
      "./ReactPropTypeLocationNames",
      "fbjs/lib/emptyFunction",
      "./getIteratorFn"
    ],
    "npm:react@0.14.8/lib/onlyChild.js": [
      "./ReactElement",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:core-js@1.2.7/library/modules/es6.object.set-prototype-of.js": [
      "./$.export",
      "./$.set-proto"
    ],
    "npm:react@0.14.8/lib/ReactInjection.js": [
      "./DOMProperty",
      "./EventPluginHub",
      "./ReactComponentEnvironment",
      "./ReactClass",
      "./ReactEmptyComponent",
      "./ReactBrowserEventEmitter",
      "./ReactNativeComponent",
      "./ReactPerf",
      "./ReactRootIndex",
      "./ReactUpdates"
    ],
    "npm:react@0.14.8/lib/ReactReconcileTransaction.js": [
      "./CallbackQueue",
      "./PooledClass",
      "./ReactBrowserEventEmitter",
      "./ReactDOMFeatureFlags",
      "./ReactInputSelection",
      "./Transaction",
      "./Object.assign"
    ],
    "npm:react@0.14.8/lib/SVGDOMPropertyConfig.js": [
      "./DOMProperty"
    ],
    "npm:history@2.1.2/lib/createHistory.js": [
      "warning",
      "deep-equal",
      "./PathUtils",
      "./AsyncUtils",
      "./Actions",
      "./createLocation",
      "./runTransitionHook",
      "./deprecate",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactComponentBrowserEnvironment.js": [
      "./ReactDOMIDOperations",
      "./ReactMount",
      "process"
    ],
    "npm:fbjs@0.6.1/lib/invariant.js": [
      "process"
    ],
    "npm:react@0.14.8/lib/DOMChildrenOperations.js": [
      "./Danger",
      "./ReactMultiChildUpdateTypes",
      "./ReactPerf",
      "./setInnerHTML",
      "./setTextContent",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@0.14.8/lib/DOMPropertyOperations.js": [
      "./DOMProperty",
      "./ReactPerf",
      "./quoteAttributeValueForBrowser",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@0.14.8/lib/setTextContent.js": [
      "fbjs/lib/ExecutionEnvironment",
      "./escapeTextContentForBrowser",
      "./setInnerHTML"
    ],
    "npm:react@0.14.8/lib/validateDOMNesting.js": [
      "./Object.assign",
      "fbjs/lib/emptyFunction",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react-bootstrap@0.28.5/lib/utils/childrenValueInputValidation.js": [
      "babel-runtime/helpers/interop-require-default",
      "react",
      "react-prop-types/lib/singlePropFrom"
    ],
    "npm:react-bootstrap@0.28.5/lib/utils/ValidComponentChildren.js": [
      "babel-runtime/helpers/interop-require-default",
      "react"
    ],
    "npm:react-bootstrap@0.28.5/lib/utils/bootstrapUtils.js": [
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "../styleMaps",
      "invariant",
      "warning",
      "process"
    ],
    "npm:react-bootstrap@0.28.5/lib/Accordion.js": [
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "./PanelGroup"
    ],
    "npm:react-bootstrap@0.28.5/lib/Alert.js": [
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "classnames",
      "./utils/bootstrapUtils",
      "./styleMaps"
    ],
    "npm:react-bootstrap@0.28.5/lib/Badge.js": [
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "./utils/ValidComponentChildren",
      "classnames",
      "./utils/bootstrapUtils"
    ],
    "npm:react-bootstrap@0.28.5/lib/Breadcrumb.js": [
      "babel-runtime/helpers/object-without-properties",
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "classnames",
      "./utils/ValidComponentChildren",
      "./BreadcrumbItem"
    ],
    "npm:react-bootstrap@0.28.5/lib/Button.js": [
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "classnames",
      "react-prop-types/lib/elementType",
      "./utils/bootstrapUtils",
      "./styleMaps"
    ],
    "npm:react-bootstrap@0.28.5/lib/BreadcrumbItem.js": [
      "babel-runtime/helpers/object-without-properties",
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "classnames",
      "react",
      "./SafeAnchor"
    ],
    "npm:react-bootstrap@0.28.5/lib/ButtonGroup.js": [
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "classnames",
      "./utils/bootstrapUtils",
      "react-prop-types/lib/all",
      "./Button"
    ],
    "npm:react-bootstrap@0.28.5/lib/ButtonInput.js": [
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/class-call-check",
      "babel-runtime/helpers/object-without-properties",
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "./Button",
      "./FormGroup",
      "./InputBase",
      "./utils/childrenValueInputValidation"
    ],
    "npm:react-bootstrap@0.28.5/lib/ButtonToolbar.js": [
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "classnames",
      "./utils/bootstrapUtils",
      "./Button"
    ],
    "npm:react-bootstrap@0.28.5/lib/Carousel.js": [
      "babel-runtime/helpers/extends",
      "babel-runtime/core-js/object/assign",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "classnames",
      "./utils/ValidComponentChildren",
      "./Glyphicon",
      "./utils/bootstrapUtils",
      "./CarouselCaption",
      "./CarouselItem"
    ],
    "npm:react-bootstrap@0.28.5/lib/CarouselItem.js": [
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "classnames",
      "react",
      "react-dom",
      "./utils/TransitionEvents",
      "./utils/bootstrapUtils"
    ],
    "npm:react-bootstrap@0.28.5/lib/Clearfix.js": [
      "babel-runtime/helpers/extends",
      "babel-runtime/core-js/object/keys",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "classnames",
      "./styleMaps",
      "react-prop-types/lib/elementType"
    ],
    "npm:react-bootstrap@0.28.5/lib/Col.js": [
      "babel-runtime/helpers/extends",
      "babel-runtime/core-js/object/keys",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "classnames",
      "./styleMaps",
      "react-prop-types/lib/elementType"
    ],
    "npm:react-bootstrap@0.28.5/lib/CollapsibleNav.js": [
      "babel-runtime/helpers/interop-require-default",
      "react",
      "./Collapse",
      "classnames",
      "./utils/deprecationWarning",
      "./utils/ValidComponentChildren",
      "./utils/createChainedFunction"
    ],
    "npm:react-bootstrap@0.28.5/lib/Dropdown.js": [
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/class-call-check",
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "classnames",
      "dom-helpers/activeElement",
      "dom-helpers/query/contains",
      "keycode",
      "lodash-compat/collection/find",
      "lodash-compat/object/omit",
      "react",
      "react-dom",
      "react-prop-types/lib/all",
      "react-prop-types/lib/elementType",
      "react-prop-types/lib/isRequiredForA11y",
      "uncontrollable",
      "./utils/bootstrapUtils",
      "./ButtonGroup",
      "./DropdownMenu",
      "./DropdownToggle",
      "./utils/createChainedFunction",
      "./utils/CustomPropTypes",
      "./utils/ValidComponentChildren"
    ],
    "npm:react-bootstrap@0.28.5/lib/DropdownButton.js": [
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/class-call-check",
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/object-without-properties",
      "babel-runtime/core-js/object/keys",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "./Dropdown",
      "lodash-compat/object/omit",
      "lodash-compat/object/pick",
      "./Button"
    ],
    "npm:react-bootstrap@0.28.5/lib/Glyphicon.js": [
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "classnames"
    ],
    "npm:react-bootstrap@0.28.5/lib/Grid.js": [
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "classnames",
      "react-prop-types/lib/elementType"
    ],
    "npm:react-bootstrap@0.28.5/lib/Input.js": [
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/class-call-check",
      "babel-runtime/helpers/interop-require-default",
      "babel-runtime/helpers/interop-require-wildcard",
      "react",
      "./InputBase",
      "./FormControls/index",
      "./utils/deprecationWarning"
    ],
    "npm:react-bootstrap@0.28.5/lib/Image.js": [
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "classnames"
    ],
    "npm:react-bootstrap@0.28.5/lib/Interpolate.js": [
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "./utils/ValidComponentChildren"
    ],
    "npm:react-bootstrap@0.28.5/lib/Jumbotron.js": [
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "classnames",
      "react-prop-types/lib/elementType"
    ],
    "npm:react-bootstrap@0.28.5/lib/Label.js": [
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/class-call-check",
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "classnames",
      "./utils/bootstrapUtils",
      "./styleMaps"
    ],
    "npm:react-bootstrap@0.28.5/lib/ListGroup.js": [
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/class-call-check",
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "./ListGroupItem",
      "classnames",
      "./utils/ValidComponentChildren"
    ],
    "npm:react-bootstrap@0.28.5/lib/ListGroupItem.js": [
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/class-call-check",
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "./utils/bootstrapUtils",
      "./styleMaps",
      "classnames"
    ],
    "npm:react-bootstrap@0.28.5/lib/MenuItem.js": [
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/class-call-check",
      "babel-runtime/helpers/object-without-properties",
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "classnames",
      "react",
      "./utils/bootstrapUtils",
      "react-prop-types/lib/all",
      "./SafeAnchor",
      "./utils/createChainedFunction"
    ],
    "npm:react-bootstrap@0.28.5/lib/Media.js": [
      "babel-runtime/helpers/object-without-properties",
      "babel-runtime/helpers/extends",
      "babel-runtime/core-js/object/assign",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "react-prop-types/lib/elementType",
      "classnames",
      "./MediaHeading",
      "./MediaBody",
      "./MediaLeft",
      "./MediaRight",
      "./MediaList",
      "./MediaListItem"
    ],
    "npm:react-bootstrap@0.28.5/lib/Modal.js": [
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/object-without-properties",
      "babel-runtime/core-js/object/keys",
      "babel-runtime/helpers/interop-require-default",
      "classnames",
      "react",
      "react-dom",
      "./utils/bootstrapUtils",
      "./styleMaps",
      "dom-helpers/util/scrollbarSize",
      "dom-helpers/util/inDOM",
      "dom-helpers/ownerDocument",
      "dom-helpers/events",
      "react-prop-types/lib/elementType",
      "./Fade",
      "./ModalDialog",
      "./ModalBody",
      "./ModalHeader",
      "./ModalTitle",
      "./ModalFooter",
      "react-overlays/lib/Modal",
      "react-overlays/lib/utils/isOverflowing",
      "lodash-compat/object/pick"
    ],
    "npm:react-bootstrap@0.28.5/lib/ModalBody.js": [
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/class-call-check",
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "classnames",
      "./utils/bootstrapUtils"
    ],
    "npm:react-bootstrap@0.28.5/lib/ModalFooter.js": [
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/class-call-check",
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "classnames",
      "./utils/bootstrapUtils"
    ],
    "npm:react-bootstrap@0.28.5/lib/ModalHeader.js": [
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/class-call-check",
      "babel-runtime/helpers/object-without-properties",
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "classnames",
      "./utils/bootstrapUtils",
      "./utils/createChainedFunction"
    ],
    "npm:react-bootstrap@0.28.5/lib/ModalTitle.js": [
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/class-call-check",
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "classnames",
      "./utils/bootstrapUtils"
    ],
    "npm:react-bootstrap@0.28.5/lib/Navbar.js": [
      "babel-runtime/helpers/object-without-properties",
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "uncontrollable",
      "classnames",
      "react-prop-types/lib/elementType",
      "react-prop-types/lib/deprecated",
      "./utils/deprecationWarning",
      "./utils/ValidComponentChildren",
      "./Grid",
      "./deprecated/Navbar",
      "./NavbarBrand",
      "./NavbarHeader",
      "./NavbarToggle",
      "./NavbarCollapse",
      "./utils/bootstrapUtils",
      "./styleMaps"
    ],
    "npm:react-bootstrap@0.28.5/lib/Nav.js": [
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/class-call-check",
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "classnames",
      "react-prop-types/lib/all",
      "react-prop-types/lib/deprecated",
      "./utils/bootstrapUtils",
      "./utils/ValidComponentChildren",
      "./utils/createChainedFunction",
      "./Collapse"
    ],
    "npm:react-bootstrap@0.28.5/lib/NavBrand.js": [
      "babel-runtime/helpers/interop-require-default",
      "./NavbarBrand",
      "./utils/deprecationWarning"
    ],
    "npm:react-bootstrap@0.28.5/lib/NavbarBrand.js": [
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/class-call-check",
      "babel-runtime/helpers/object-without-properties",
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "classnames",
      "./utils/bootstrapUtils"
    ],
    "npm:react-bootstrap@0.28.5/lib/NavDropdown.js": [
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/class-call-check",
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/object-without-properties",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "./Dropdown"
    ],
    "npm:react-bootstrap@0.28.5/lib/NavItem.js": [
      "babel-runtime/helpers/object-without-properties",
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "classnames",
      "./SafeAnchor",
      "./utils/createChainedFunction"
    ],
    "npm:react-bootstrap@0.28.5/lib/Overlay.js": [
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/class-call-check",
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/object-without-properties",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "react-overlays/lib/Overlay",
      "react-prop-types/lib/elementType",
      "./Fade",
      "classnames"
    ],
    "npm:react-bootstrap@0.28.5/lib/OverlayTrigger.js": [
      "babel-runtime/helpers/extends",
      "babel-runtime/core-js/object/keys",
      "babel-runtime/helpers/interop-require-default",
      "dom-helpers/query/contains",
      "lodash-compat/object/pick",
      "react",
      "react-dom",
      "warning",
      "./Overlay",
      "./utils/createChainedFunction",
      "process"
    ],
    "npm:react-bootstrap@0.28.5/lib/PageHeader.js": [
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "classnames"
    ],
    "npm:react-bootstrap@0.28.5/lib/PageItem.js": [
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "classnames",
      "./SafeAnchor"
    ],
    "npm:react-bootstrap@0.28.5/lib/Pager.js": [
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "classnames",
      "./utils/ValidComponentChildren",
      "./utils/createChainedFunction"
    ],
    "npm:react-bootstrap@0.28.5/lib/Panel.js": [
      "babel-runtime/helpers/object-without-properties",
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "classnames",
      "./utils/bootstrapUtils",
      "./styleMaps",
      "./Collapse"
    ],
    "npm:react-bootstrap@0.28.5/lib/Pagination.js": [
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "classnames",
      "./utils/bootstrapUtils",
      "./PaginationButton",
      "react-prop-types/lib/elementType",
      "./SafeAnchor"
    ],
    "npm:react-bootstrap@0.28.5/lib/PanelGroup.js": [
      "babel-runtime/helpers/object-without-properties",
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "classnames",
      "./utils/bootstrapUtils",
      "./utils/ValidComponentChildren"
    ],
    "npm:react-bootstrap@0.28.5/lib/Popover.js": [
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "classnames",
      "./utils/bootstrapUtils",
      "react-prop-types/lib/isRequiredForA11y"
    ],
    "npm:react-bootstrap@0.28.5/lib/ProgressBar.js": [
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/class-call-check",
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/object-without-properties",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "./Interpolate",
      "./utils/bootstrapUtils",
      "./styleMaps",
      "classnames",
      "./utils/ValidComponentChildren"
    ],
    "npm:react-bootstrap@0.28.5/lib/ResponsiveEmbed.js": [
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/class-call-check",
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/object-without-properties",
      "babel-runtime/helpers/interop-require-default",
      "classnames",
      "react",
      "warning",
      "process"
    ],
    "npm:react-bootstrap@0.28.5/lib/Row.js": [
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "classnames",
      "react-prop-types/lib/elementType"
    ],
    "npm:react-bootstrap@0.28.5/lib/SafeAnchor.js": [
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/class-call-check",
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "./utils/createChainedFunction"
    ],
    "npm:react-bootstrap@0.28.5/lib/Tab.js": [
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "react-dom",
      "classnames",
      "./utils/bootstrapUtils",
      "./utils/TransitionEvents"
    ],
    "npm:react-bootstrap@0.28.5/lib/SplitButton.js": [
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/class-call-check",
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/object-without-properties",
      "babel-runtime/core-js/object/keys",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "./Button",
      "./Dropdown",
      "./SplitToggle",
      "lodash-compat/object/omit",
      "lodash-compat/object/pick"
    ],
    "npm:react-bootstrap@0.28.5/lib/Table.js": [
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "classnames"
    ],
    "npm:react-bootstrap@0.28.5/lib/Tabs.js": [
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/object-without-properties",
      "babel-runtime/core-js/object/keys",
      "babel-runtime/helpers/interop-require-default",
      "classnames",
      "react",
      "react-dom",
      "./Col",
      "./Nav",
      "./NavItem",
      "./styleMaps",
      "keycode",
      "./utils/createChainedFunction",
      "./utils/bootstrapUtils",
      "./utils/ValidComponentChildren"
    ],
    "npm:react-bootstrap@0.28.5/lib/Thumbnail.js": [
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "classnames",
      "./SafeAnchor",
      "./utils/bootstrapUtils"
    ],
    "npm:react-bootstrap@0.28.5/lib/Tooltip.js": [
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "classnames",
      "./utils/bootstrapUtils",
      "react-prop-types/lib/isRequiredForA11y"
    ],
    "npm:react-bootstrap@0.28.5/lib/Well.js": [
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/class-call-check",
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "classnames",
      "./utils/bootstrapUtils",
      "./styleMaps"
    ],
    "npm:react-bootstrap@0.28.5/lib/Collapse.js": [
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/class-call-check",
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "dom-helpers/style",
      "react",
      "classnames",
      "react-overlays/lib/Transition",
      "react-prop-types/lib/deprecated",
      "./utils/createChainedFunction"
    ],
    "npm:react-bootstrap@0.28.5/lib/Fade.js": [
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/class-call-check",
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "classnames",
      "react-overlays/lib/Transition",
      "react-prop-types/lib/deprecated"
    ],
    "npm:react-bootstrap@0.28.5/lib/FormControls/index.js": [
      "babel-runtime/helpers/interop-require-default",
      "./Static"
    ],
    "npm:react@0.14.8/lib/BeforeInputEventPlugin.js": [
      "./EventConstants",
      "./EventPropagators",
      "fbjs/lib/ExecutionEnvironment",
      "./FallbackCompositionState",
      "./SyntheticCompositionEvent",
      "./SyntheticInputEvent",
      "fbjs/lib/keyOf"
    ],
    "npm:react@0.14.8/lib/ChangeEventPlugin.js": [
      "./EventConstants",
      "./EventPluginHub",
      "./EventPropagators",
      "fbjs/lib/ExecutionEnvironment",
      "./ReactUpdates",
      "./SyntheticEvent",
      "./getEventTarget",
      "./isEventSupported",
      "./isTextInputElement",
      "fbjs/lib/keyOf",
      "process"
    ],
    "npm:react@0.14.8/lib/EnterLeaveEventPlugin.js": [
      "./EventConstants",
      "./EventPropagators",
      "./SyntheticMouseEvent",
      "./ReactMount",
      "fbjs/lib/keyOf"
    ],
    "npm:react@0.14.8/lib/DefaultEventPluginOrder.js": [
      "fbjs/lib/keyOf"
    ],
    "npm:react@0.14.8/lib/HTMLDOMPropertyConfig.js": [
      "./DOMProperty",
      "fbjs/lib/ExecutionEnvironment"
    ],
    "npm:react@0.14.8/lib/ReactBrowserComponentMixin.js": [
      "./ReactInstanceMap",
      "./findDOMNode",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactDefaultBatchingStrategy.js": [
      "./ReactUpdates",
      "./Transaction",
      "./Object.assign",
      "fbjs/lib/emptyFunction"
    ],
    "npm:react@0.14.8/lib/ReactDOMComponent.js": [
      "./AutoFocusUtils",
      "./CSSPropertyOperations",
      "./DOMProperty",
      "./DOMPropertyOperations",
      "./EventConstants",
      "./ReactBrowserEventEmitter",
      "./ReactComponentBrowserEnvironment",
      "./ReactDOMButton",
      "./ReactDOMInput",
      "./ReactDOMOption",
      "./ReactDOMSelect",
      "./ReactDOMTextarea",
      "./ReactMount",
      "./ReactMultiChild",
      "./ReactPerf",
      "./ReactUpdateQueue",
      "./Object.assign",
      "./canDefineProperty",
      "./escapeTextContentForBrowser",
      "fbjs/lib/invariant",
      "./isEventSupported",
      "fbjs/lib/keyOf",
      "./setInnerHTML",
      "./setTextContent",
      "fbjs/lib/shallowEqual",
      "./validateDOMNesting",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactEventListener.js": [
      "fbjs/lib/EventListener",
      "fbjs/lib/ExecutionEnvironment",
      "./PooledClass",
      "./ReactInstanceHandles",
      "./ReactMount",
      "./ReactUpdates",
      "./Object.assign",
      "./getEventTarget",
      "fbjs/lib/getUnboundedScrollPosition",
      "process"
    ],
    "npm:react@0.14.8/lib/SelectEventPlugin.js": [
      "./EventConstants",
      "./EventPropagators",
      "fbjs/lib/ExecutionEnvironment",
      "./ReactInputSelection",
      "./SyntheticEvent",
      "fbjs/lib/getActiveElement",
      "./isTextInputElement",
      "fbjs/lib/keyOf",
      "fbjs/lib/shallowEqual"
    ],
    "npm:react@0.14.8/lib/SimpleEventPlugin.js": [
      "./EventConstants",
      "fbjs/lib/EventListener",
      "./EventPropagators",
      "./ReactMount",
      "./SyntheticClipboardEvent",
      "./SyntheticEvent",
      "./SyntheticFocusEvent",
      "./SyntheticKeyboardEvent",
      "./SyntheticMouseEvent",
      "./SyntheticDragEvent",
      "./SyntheticTouchEvent",
      "./SyntheticUIEvent",
      "./SyntheticWheelEvent",
      "fbjs/lib/emptyFunction",
      "./getEventCharCode",
      "fbjs/lib/invariant",
      "fbjs/lib/keyOf",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactDefaultPerf.js": [
      "./DOMProperty",
      "./ReactDefaultPerfAnalysis",
      "./ReactMount",
      "./ReactPerf",
      "fbjs/lib/performanceNow"
    ],
    "npm:react@0.14.8/lib/ReactMarkupChecksum.js": [
      "./adler32"
    ],
    "npm:fbjs@0.6.1/lib/containsNode.js": [
      "./isTextNode"
    ],
    "npm:react@0.14.8/lib/ReactRef.js": [
      "./ReactOwner",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactBrowserEventEmitter.js": [
      "./EventConstants",
      "./EventPluginHub",
      "./EventPluginRegistry",
      "./ReactEventEmitterMixin",
      "./ReactPerf",
      "./ViewportMetrics",
      "./Object.assign",
      "./isEventSupported",
      "process"
    ],
    "npm:fbjs@0.6.1/lib/emptyObject.js": [
      "process"
    ],
    "npm:react@0.14.8/lib/DOMProperty.js": [
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactUpdateQueue.js": [
      "./ReactCurrentOwner",
      "./ReactElement",
      "./ReactInstanceMap",
      "./ReactUpdates",
      "./Object.assign",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@0.14.8/lib/instantiateReactComponent.js": [
      "./ReactCompositeComponent",
      "./ReactEmptyComponent",
      "./ReactNativeComponent",
      "./Object.assign",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@0.14.8/lib/setInnerHTML.js": [
      "fbjs/lib/ExecutionEnvironment",
      "process"
    ],
    "npm:react@0.14.8/lib/CallbackQueue.js": [
      "./PooledClass",
      "./Object.assign",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@0.14.8/lib/PooledClass.js": [
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@0.14.8/lib/Transaction.js": [
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:core-js@1.2.7/library/modules/$.object-sap.js": [
      "./$.export",
      "./$.core",
      "./$.fails"
    ],
    "npm:core-js@1.2.7/library/modules/$.to-iobject.js": [
      "./$.iobject",
      "./$.defined"
    ],
    "npm:process@0.11.9.js": [
      "npm:process@0.11.9/browser.js"
    ],
    "npm:query-string@3.0.3/index.js": [
      "strict-uri-encode"
    ],
    "npm:warning@2.1.0/browser.js": [
      "process"
    ],
    "npm:warning@3.0.0/browser.js": [
      "process"
    ],
    "npm:react-router@2.8.1/lib/makeStateWithLocation.js": [
      "./deprecateObjectProperties",
      "./routerWarning",
      "process"
    ],
    "npm:react@0.14.8/lib/canDefineProperty.js": [
      "process"
    ],
    "npm:react@0.14.8/lib/ReactPropTypeLocationNames.js": [
      "process"
    ],
    "npm:fbjs@0.6.1/lib/keyMirror.js": [
      "./invariant",
      "process"
    ],
    "npm:react@15.4.2/lib/React.js": [
      "object-assign",
      "./ReactChildren",
      "./ReactComponent",
      "./ReactPureComponent",
      "./ReactClass",
      "./ReactDOMFactories",
      "./ReactElement",
      "./ReactPropTypes",
      "./ReactVersion",
      "./onlyChild",
      "fbjs/lib/warning",
      "./ReactElementValidator",
      "process"
    ],
    "npm:react@0.14.8/lib/traverseAllChildren.js": [
      "./ReactCurrentOwner",
      "./ReactElement",
      "./ReactInstanceHandles",
      "./getIteratorFn",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactServerRenderingTransaction.js": [
      "./PooledClass",
      "./CallbackQueue",
      "./Transaction",
      "./Object.assign",
      "fbjs/lib/emptyFunction"
    ],
    "npm:react@0.14.8/lib/ReactNoopUpdateQueue.js": [
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactPropTypeLocations.js": [
      "fbjs/lib/keyMirror"
    ],
    "npm:deep-equal@1.0.1.js": [
      "npm:deep-equal@1.0.1/index.js"
    ],
    "npm:classnames@2.2.5.js": [
      "npm:classnames@2.2.5/index.js"
    ],
    "npm:dom-helpers@2.4.0/query/contains.js": [
      "../util/inDOM"
    ],
    "npm:dom-helpers@2.4.0/activeElement.js": [
      "./util/babelHelpers",
      "./ownerDocument"
    ],
    "npm:keycode@2.1.8.js": [
      "npm:keycode@2.1.8/index.js"
    ],
    "npm:dom-helpers@2.4.0/util/scrollbarSize.js": [
      "./inDOM"
    ],
    "npm:dom-helpers@2.4.0/events.js": [
      "./events/index"
    ],
    "npm:dom-helpers@2.4.0/style.js": [
      "./style/index"
    ],
    "npm:core-js@1.2.7/library/modules/$.export.js": [
      "./$.global",
      "./$.core",
      "./$.ctx"
    ],
    "npm:core-js@1.2.7/library/modules/$.set-proto.js": [
      "./$",
      "./$.is-object",
      "./$.an-object",
      "./$.ctx"
    ],
    "npm:react@0.14.8/lib/ReactEmptyComponent.js": [
      "./ReactElement",
      "./ReactEmptyComponentRegistry",
      "./ReactReconciler",
      "./Object.assign"
    ],
    "npm:react@0.14.8/lib/quoteAttributeValueForBrowser.js": [
      "./escapeTextContentForBrowser"
    ],
    "npm:react-prop-types@0.3.2/lib/all.js": [
      "./common"
    ],
    "npm:babel-runtime@5.8.38/helpers/extends.js": [
      "../core-js/object/assign"
    ],
    "npm:react-prop-types@0.3.2/lib/elementType.js": [
      "react",
      "./common"
    ],
    "npm:babel-runtime@5.8.38/core-js/object/assign.js": [
      "core-js/library/fn/object/assign"
    ],
    "npm:babel-runtime@5.8.38/core-js/object/keys.js": [
      "core-js/library/fn/object/keys"
    ],
    "npm:lodash-compat@3.10.2/collection/find.js": [
      "../internal/baseEach",
      "../internal/createFind"
    ],
    "npm:lodash-compat@3.10.2/object/omit.js": [
      "../internal/arrayMap",
      "../internal/baseDifference",
      "../internal/baseFlatten",
      "../internal/bindCallback",
      "./keysIn",
      "../internal/pickByArray",
      "../internal/pickByCallback",
      "../function/restParam"
    ],
    "npm:uncontrollable@3.3.1.js": [
      "npm:uncontrollable@3.3.1/index.js"
    ],
    "npm:lodash-compat@3.10.2/object/pick.js": [
      "../internal/baseFlatten",
      "../internal/bindCallback",
      "../internal/pickByArray",
      "../internal/pickByCallback",
      "../function/restParam"
    ],
    "npm:react@0.14.8/lib/FallbackCompositionState.js": [
      "./PooledClass",
      "./Object.assign",
      "./getTextContentAccessor"
    ],
    "npm:react@0.14.8/lib/SyntheticCompositionEvent.js": [
      "./SyntheticEvent"
    ],
    "npm:react@0.14.8/lib/SyntheticInputEvent.js": [
      "./SyntheticEvent"
    ],
    "npm:react@0.14.8/lib/SyntheticMouseEvent.js": [
      "./SyntheticUIEvent",
      "./ViewportMetrics",
      "./getEventModifierState"
    ],
    "npm:react@0.14.8/lib/SyntheticClipboardEvent.js": [
      "./SyntheticEvent"
    ],
    "npm:react@0.14.8/lib/SyntheticFocusEvent.js": [
      "./SyntheticUIEvent"
    ],
    "npm:react@0.14.8/lib/SyntheticKeyboardEvent.js": [
      "./SyntheticUIEvent",
      "./getEventCharCode",
      "./getEventKey",
      "./getEventModifierState"
    ],
    "npm:react@0.14.8/lib/SyntheticTouchEvent.js": [
      "./SyntheticUIEvent",
      "./getEventModifierState"
    ],
    "npm:react@0.14.8/lib/SyntheticDragEvent.js": [
      "./SyntheticMouseEvent"
    ],
    "npm:react@0.14.8/lib/SyntheticUIEvent.js": [
      "./SyntheticEvent",
      "./getEventTarget"
    ],
    "npm:react@0.14.8/lib/SyntheticWheelEvent.js": [
      "./SyntheticMouseEvent"
    ],
    "npm:react@0.14.8/lib/ReactDefaultPerfAnalysis.js": [
      "./Object.assign"
    ],
    "npm:fbjs@0.6.1/lib/performanceNow.js": [
      "./performance"
    ],
    "npm:react-overlays@0.6.10/lib/utils/isOverflowing.js": [
      "dom-helpers/query/isWindow",
      "dom-helpers/ownerDocument"
    ],
    "npm:history@2.1.2/lib/createLocation.js": [
      "warning",
      "./Actions",
      "./PathUtils",
      "process"
    ],
    "npm:react-prop-types@0.3.2/lib/deprecated.js": [
      "warning"
    ],
    "npm:react-overlays@0.6.10/lib/Transition.js": [
      "react",
      "react-dom",
      "dom-helpers/transition/properties",
      "dom-helpers/events/on",
      "classnames"
    ],
    "npm:react@0.14.8/lib/ReactMultiChild.js": [
      "./ReactComponentEnvironment",
      "./ReactMultiChildUpdateTypes",
      "./ReactCurrentOwner",
      "./ReactReconciler",
      "./ReactChildReconciler",
      "./flattenChildren",
      "process"
    ],
    "npm:fbjs@0.6.1/lib/EventListener.js": [
      "./emptyFunction",
      "process"
    ],
    "npm:react@0.14.8/lib/EventPluginHub.js": [
      "./EventPluginRegistry",
      "./EventPluginUtils",
      "./ReactErrorUtils",
      "./accumulateInto",
      "./forEachAccumulated",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactComponentEnvironment.js": [
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactNativeComponent.js": [
      "./Object.assign",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactInputSelection.js": [
      "./ReactDOMSelection",
      "fbjs/lib/containsNode",
      "fbjs/lib/focusNode",
      "fbjs/lib/getActiveElement"
    ],
    "npm:react@0.14.8/lib/ReactDOMIDOperations.js": [
      "./DOMChildrenOperations",
      "./DOMPropertyOperations",
      "./ReactMount",
      "./ReactPerf",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@0.14.8/lib/Danger.js": [
      "fbjs/lib/ExecutionEnvironment",
      "fbjs/lib/createNodesFromMarkup",
      "fbjs/lib/emptyFunction",
      "fbjs/lib/getMarkupWrap",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactMultiChildUpdateTypes.js": [
      "fbjs/lib/keyMirror"
    ],
    "npm:react-bootstrap@0.28.5/lib/styleMaps.js": [
      "babel-runtime/core-js/object/assign",
      "babel-runtime/core-js/object/create",
      "babel-runtime/core-js/object/keys"
    ],
    "npm:react-bootstrap@0.28.5/lib/FormGroup.js": [
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/class-call-check",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "classnames"
    ],
    "npm:react-bootstrap@0.28.5/lib/CarouselCaption.js": [
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "classnames",
      "react-prop-types/lib/elementType"
    ],
    "npm:react-bootstrap@0.28.5/lib/InputBase.js": [
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/class-call-check",
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "classnames",
      "react",
      "./FormGroup",
      "./Glyphicon"
    ],
    "npm:react-bootstrap@0.28.5/lib/utils/deprecationWarning.js": [
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/class-call-check",
      "babel-runtime/helpers/interop-require-default",
      "warning",
      "process"
    ],
    "npm:react-bootstrap@0.28.5/lib/DropdownMenu.js": [
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/class-call-check",
      "babel-runtime/helpers/object-without-properties",
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "keycode",
      "react",
      "react-dom",
      "classnames",
      "./utils/bootstrapUtils",
      "react-overlays/lib/RootCloseWrapper",
      "./utils/ValidComponentChildren",
      "./utils/createChainedFunction"
    ],
    "npm:react-bootstrap@0.28.5/lib/DropdownToggle.js": [
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/class-call-check",
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "classnames",
      "./Button",
      "./SafeAnchor"
    ],
    "npm:react-bootstrap@0.28.5/lib/utils/CustomPropTypes.js": [
      "babel-runtime/helpers/interop-require-default",
      "react-prop-types/lib/common",
      "./childrenToArray"
    ],
    "npm:react-bootstrap@0.28.5/lib/MediaHeading.js": [
      "babel-runtime/helpers/object-without-properties",
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "react-prop-types/lib/elementType",
      "classnames"
    ],
    "npm:react-bootstrap@0.28.5/lib/MediaLeft.js": [
      "babel-runtime/helpers/object-without-properties",
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "classnames"
    ],
    "npm:react-bootstrap@0.28.5/lib/MediaBody.js": [
      "babel-runtime/helpers/object-without-properties",
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "react-prop-types/lib/elementType",
      "classnames"
    ],
    "npm:react-bootstrap@0.28.5/lib/MediaRight.js": [
      "babel-runtime/helpers/object-without-properties",
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "classnames"
    ],
    "npm:react-bootstrap@0.28.5/lib/MediaList.js": [
      "babel-runtime/helpers/object-without-properties",
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "classnames"
    ],
    "npm:react-bootstrap@0.28.5/lib/MediaListItem.js": [
      "babel-runtime/helpers/object-without-properties",
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "classnames"
    ],
    "npm:react-bootstrap@0.28.5/lib/ModalDialog.js": [
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "classnames",
      "./utils/bootstrapUtils",
      "./styleMaps"
    ],
    "npm:react-overlays@0.6.10/lib/Modal.js": [
      "react",
      "warning",
      "react-prop-types/lib/componentOrElement",
      "react-prop-types/lib/elementType",
      "./Portal",
      "./ModalManager",
      "./utils/ownerDocument",
      "./utils/addEventListener",
      "./utils/addFocusListener",
      "dom-helpers/util/inDOM",
      "dom-helpers/activeElement",
      "dom-helpers/query/contains",
      "./utils/getContainer"
    ],
    "npm:react-bootstrap@0.28.5/lib/deprecated/Navbar.js": [
      "babel-runtime/helpers/object-without-properties",
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "classnames",
      "react-prop-types/lib/deprecated",
      "react-prop-types/lib/elementType",
      "../Grid",
      "../NavBrand",
      "../utils/bootstrapUtils",
      "../styleMaps",
      "../utils/createChainedFunction",
      "../utils/ValidComponentChildren"
    ],
    "npm:react-bootstrap@0.28.5/lib/NavbarHeader.js": [
      "babel-runtime/helpers/object-without-properties",
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "classnames",
      "./utils/bootstrapUtils"
    ],
    "npm:react-bootstrap@0.28.5/lib/NavbarToggle.js": [
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/object-without-properties",
      "babel-runtime/helpers/interop-require-default",
      "classnames",
      "react",
      "./utils/bootstrapUtils",
      "./utils/createChainedFunction"
    ],
    "npm:react-bootstrap@0.28.5/lib/NavbarCollapse.js": [
      "babel-runtime/helpers/object-without-properties",
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "./utils/bootstrapUtils",
      "./Collapse"
    ],
    "npm:react-overlays@0.6.10/lib/Overlay.js": [
      "react",
      "./Portal",
      "./Position",
      "./RootCloseWrapper",
      "react-prop-types/lib/elementType"
    ],
    "npm:react-bootstrap@0.28.5/lib/PaginationButton.js": [
      "babel-runtime/helpers/object-without-properties",
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "classnames",
      "./utils/createSelectedEvent",
      "react-prop-types/lib/elementType"
    ],
    "npm:react-bootstrap@0.28.5/lib/SplitToggle.js": [
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/class-call-check",
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "./DropdownToggle"
    ],
    "npm:react-bootstrap@0.28.5/lib/FormControls/Static.js": [
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/class-call-check",
      "babel-runtime/helpers/object-without-properties",
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/interop-require-default",
      "react",
      "classnames",
      "../InputBase",
      "../utils/childrenValueInputValidation",
      "react-prop-types/lib/elementType"
    ],
    "npm:react@0.14.8/lib/EventConstants.js": [
      "fbjs/lib/keyMirror"
    ],
    "npm:react@0.14.8/lib/EventPropagators.js": [
      "./EventConstants",
      "./EventPluginHub",
      "fbjs/lib/warning",
      "./accumulateInto",
      "./forEachAccumulated",
      "process"
    ],
    "npm:react@0.14.8/lib/SyntheticEvent.js": [
      "./PooledClass",
      "./Object.assign",
      "fbjs/lib/emptyFunction",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@0.14.8/lib/isEventSupported.js": [
      "fbjs/lib/ExecutionEnvironment"
    ],
    "npm:react@0.14.8/lib/AutoFocusUtils.js": [
      "./ReactMount",
      "./findDOMNode",
      "fbjs/lib/focusNode"
    ],
    "npm:react@0.14.8/lib/CSSPropertyOperations.js": [
      "./CSSProperty",
      "fbjs/lib/ExecutionEnvironment",
      "./ReactPerf",
      "fbjs/lib/camelizeStyleName",
      "./dangerousStyleValue",
      "fbjs/lib/hyphenateStyleName",
      "fbjs/lib/memoizeStringOnly",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactDOMInput.js": [
      "./ReactDOMIDOperations",
      "./LinkedValueUtils",
      "./ReactMount",
      "./ReactUpdates",
      "./Object.assign",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactDOMOption.js": [
      "./ReactChildren",
      "./ReactDOMSelect",
      "./Object.assign",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactDOMSelect.js": [
      "./LinkedValueUtils",
      "./ReactMount",
      "./ReactUpdates",
      "./Object.assign",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactDOMTextarea.js": [
      "./LinkedValueUtils",
      "./ReactDOMIDOperations",
      "./ReactUpdates",
      "./Object.assign",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:fbjs@0.6.1/lib/isTextNode.js": [
      "./isNode"
    ],
    "npm:react@0.14.8/lib/ReactEventEmitterMixin.js": [
      "./EventPluginHub"
    ],
    "npm:react@0.14.8/lib/ReactOwner.js": [
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@0.14.8/lib/EventPluginRegistry.js": [
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactCompositeComponent.js": [
      "./ReactComponentEnvironment",
      "./ReactCurrentOwner",
      "./ReactElement",
      "./ReactInstanceMap",
      "./ReactPerf",
      "./ReactPropTypeLocations",
      "./ReactPropTypeLocationNames",
      "./ReactReconciler",
      "./ReactUpdateQueue",
      "./Object.assign",
      "fbjs/lib/emptyObject",
      "fbjs/lib/invariant",
      "./shouldUpdateReactComponent",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:strict-uri-encode@1.1.0.js": [
      "npm:strict-uri-encode@1.1.0/index"
    ],
    "npm:object-assign@4.1.0.js": [
      "npm:object-assign@4.1.0/index"
    ],
    "npm:core-js@1.2.7/library/modules/$.iobject.js": [
      "./$.cof"
    ],
    "npm:react@15.4.2/lib/ReactDOMFactories.js": [
      "./ReactElement",
      "./ReactElementValidator",
      "process"
    ],
    "npm:fbjs@0.8.9/lib/warning.js": [
      "./emptyFunction",
      "process"
    ],
    "npm:react@15.4.2/lib/ReactChildren.js": [
      "./PooledClass",
      "./ReactElement",
      "fbjs/lib/emptyFunction",
      "./traverseAllChildren"
    ],
    "npm:react@15.4.2/lib/ReactComponent.js": [
      "./reactProdInvariant",
      "./ReactNoopUpdateQueue",
      "./canDefineProperty",
      "fbjs/lib/emptyObject",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.4.2/lib/ReactPureComponent.js": [
      "object-assign",
      "./ReactComponent",
      "./ReactNoopUpdateQueue",
      "fbjs/lib/emptyObject"
    ],
    "npm:react@15.4.2/lib/ReactClass.js": [
      "./reactProdInvariant",
      "object-assign",
      "./ReactComponent",
      "./ReactElement",
      "./ReactPropTypeLocationNames",
      "./ReactNoopUpdateQueue",
      "fbjs/lib/emptyObject",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.4.2/lib/ReactElement.js": [
      "object-assign",
      "./ReactCurrentOwner",
      "fbjs/lib/warning",
      "./canDefineProperty",
      "./ReactElementSymbol",
      "process"
    ],
    "npm:react@15.4.2/lib/ReactPropTypes.js": [
      "./ReactElement",
      "./ReactPropTypeLocationNames",
      "./ReactPropTypesSecret",
      "fbjs/lib/emptyFunction",
      "./getIteratorFn",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.4.2/lib/onlyChild.js": [
      "./reactProdInvariant",
      "./ReactElement",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.4.2/lib/ReactElementValidator.js": [
      "./ReactCurrentOwner",
      "./ReactComponentTreeHook",
      "./ReactElement",
      "./checkReactTypeSpec",
      "./canDefineProperty",
      "./getIteratorFn",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:deep-equal@1.0.1/index.js": [
      "./lib/keys",
      "./lib/is_arguments"
    ],
    "npm:dom-helpers@2.4.0/events/index.js": [
      "./on",
      "./off",
      "./filter"
    ],
    "npm:dom-helpers@2.4.0/style/index.js": [
      "../util/camelizeStyle",
      "../util/hyphenateStyle",
      "./getComputedStyle",
      "./removeStyle"
    ],
    "npm:core-js@1.2.7/library/modules/$.ctx.js": [
      "./$.a-function"
    ],
    "npm:core-js@1.2.7/library/modules/$.an-object.js": [
      "./$.is-object"
    ],
    "npm:dom-helpers@2.4.0/transition/properties.js": [
      "../util/inDOM"
    ],
    "npm:dom-helpers@2.4.0/events/on.js": [
      "../util/inDOM"
    ],
    "npm:core-js@1.2.7/library/fn/object/assign.js": [
      "../../modules/es6.object.assign",
      "../../modules/$.core"
    ],
    "npm:core-js@1.2.7/library/fn/object/keys.js": [
      "../../modules/es6.object.keys",
      "../../modules/$.core"
    ],
    "npm:lodash-compat@3.10.2/internal/baseEach.js": [
      "./baseForOwn",
      "./createBaseEach"
    ],
    "npm:lodash-compat@3.10.2/internal/createFind.js": [
      "./baseCallback",
      "./baseFind",
      "./baseFindIndex",
      "../lang/isArray"
    ],
    "npm:lodash-compat@3.10.2/internal/baseDifference.js": [
      "./baseIndexOf",
      "./cacheIndexOf",
      "./createCache"
    ],
    "npm:lodash-compat@3.10.2/internal/baseFlatten.js": [
      "./arrayPush",
      "../lang/isArguments",
      "../lang/isArray",
      "./isArrayLike",
      "./isObjectLike"
    ],
    "npm:lodash-compat@3.10.2/internal/bindCallback.js": [
      "../utility/identity"
    ],
    "npm:lodash-compat@3.10.2/object/keysIn.js": [
      "../internal/arrayEach",
      "../lang/isArguments",
      "../lang/isArray",
      "../lang/isFunction",
      "../internal/isIndex",
      "../internal/isLength",
      "../lang/isObject",
      "../lang/isString",
      "../support"
    ],
    "npm:lodash-compat@3.10.2/internal/pickByArray.js": [
      "./toObject"
    ],
    "npm:lodash-compat@3.10.2/internal/pickByCallback.js": [
      "./baseForIn"
    ],
    "npm:uncontrollable@3.3.1/index.js": [
      "./createUncontrollable"
    ],
    "npm:react@0.14.8/lib/getEventKey.js": [
      "./getEventCharCode"
    ],
    "npm:fbjs@0.6.1/lib/performance.js": [
      "./ExecutionEnvironment"
    ],
    "npm:fbjs@0.6.1/lib/camelizeStyleName.js": [
      "./camelize"
    ],
    "npm:react@0.14.8/lib/dangerousStyleValue.js": [
      "./CSSProperty"
    ],
    "npm:fbjs@0.6.1/lib/hyphenateStyleName.js": [
      "./hyphenate"
    ],
    "npm:react-overlays@0.6.10/lib/ModalManager.js": [
      "dom-helpers/style",
      "dom-helpers/class",
      "dom-helpers/util/scrollbarSize",
      "./utils/isOverflowing",
      "./utils/manageAriaHidden"
    ],
    "npm:react-overlays@0.6.10/lib/utils/addEventListener.js": [
      "dom-helpers/events/on",
      "dom-helpers/events/off"
    ],
    "npm:react@0.14.8/lib/ReactErrorUtils.js": [
      "process"
    ],
    "npm:fbjs@0.6.1/lib/createNodesFromMarkup.js": [
      "./ExecutionEnvironment",
      "./createArrayFromMixed",
      "./getMarkupWrap",
      "./invariant",
      "process"
    ],
    "npm:fbjs@0.6.1/lib/getMarkupWrap.js": [
      "./ExecutionEnvironment",
      "./invariant",
      "process"
    ],
    "npm:react-overlays@0.6.10/lib/RootCloseWrapper.js": [
      "dom-helpers/query/contains",
      "react",
      "react-dom",
      "./utils/addEventListener",
      "./utils/ownerDocument"
    ],
    "npm:react-prop-types@0.4.0/lib/componentOrElement.js": [
      "react",
      "./utils/createChainableTypeChecker"
    ],
    "npm:react-prop-types@0.4.0/lib/elementType.js": [
      "react",
      "./utils/createChainableTypeChecker"
    ],
    "npm:react-overlays@0.6.10/lib/utils/ownerDocument.js": [
      "react-dom",
      "dom-helpers/ownerDocument"
    ],
    "npm:react-overlays@0.6.10/lib/utils/getContainer.js": [
      "react-dom"
    ],
    "npm:react@0.14.8/lib/getTextContentAccessor.js": [
      "fbjs/lib/ExecutionEnvironment"
    ],
    "npm:react@0.14.8/lib/ReactChildReconciler.js": [
      "./ReactReconciler",
      "./instantiateReactComponent",
      "./shouldUpdateReactComponent",
      "./traverseAllChildren",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@0.14.8/lib/flattenChildren.js": [
      "./traverseAllChildren",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@0.14.8/lib/EventPluginUtils.js": [
      "./EventConstants",
      "./ReactErrorUtils",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@0.14.8/lib/accumulateInto.js": [
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@0.14.8/lib/ReactDOMSelection.js": [
      "fbjs/lib/ExecutionEnvironment",
      "./getNodeForCharacterOffset",
      "./getTextContentAccessor"
    ],
    "npm:react-bootstrap@0.28.5/lib/utils/childrenToArray.js": [
      "babel-runtime/helpers/interop-require-default",
      "./ValidComponentChildren"
    ],
    "npm:react-overlays@0.6.10/lib/Portal.js": [
      "react",
      "react-dom",
      "react-prop-types/lib/componentOrElement",
      "./utils/ownerDocument",
      "./utils/getContainer"
    ],
    "npm:react-overlays@0.6.10/lib/Position.js": [
      "classnames",
      "react",
      "react-dom",
      "react-prop-types/lib/componentOrElement",
      "./utils/calculatePosition",
      "./utils/getContainer",
      "./utils/ownerDocument"
    ],
    "npm:react@0.14.8/lib/LinkedValueUtils.js": [
      "./ReactPropTypes",
      "./ReactPropTypeLocations",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.4.2/lib/canDefineProperty.js": [
      "process"
    ],
    "npm:fbjs@0.8.9/lib/emptyObject.js": [
      "process"
    ],
    "npm:fbjs@0.8.9/lib/invariant.js": [
      "process"
    ],
    "npm:react@15.4.2/lib/ReactPropTypeLocationNames.js": [
      "process"
    ],
    "npm:react@15.4.2/lib/PooledClass.js": [
      "./reactProdInvariant",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.4.2/lib/traverseAllChildren.js": [
      "./reactProdInvariant",
      "./ReactCurrentOwner",
      "./ReactElementSymbol",
      "./getIteratorFn",
      "fbjs/lib/invariant",
      "./KeyEscapeUtils",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.4.2/lib/ReactNoopUpdateQueue.js": [
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.4.2/lib/checkReactTypeSpec.js": [
      "./reactProdInvariant",
      "./ReactPropTypeLocationNames",
      "./ReactPropTypesSecret",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "./ReactComponentTreeHook",
      "process"
    ],
    "npm:react@15.4.2/lib/ReactComponentTreeHook.js": [
      "./reactProdInvariant",
      "./ReactCurrentOwner",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:dom-helpers@2.4.0/events/filter.js": [
      "../query/contains",
      "../query/querySelectorAll"
    ],
    "npm:dom-helpers@2.4.0/util/camelizeStyle.js": [
      "./camelize"
    ],
    "npm:dom-helpers@2.4.0/events/off.js": [
      "../util/inDOM"
    ],
    "npm:dom-helpers@2.4.0/util/hyphenateStyle.js": [
      "./hyphenate"
    ],
    "npm:dom-helpers@2.4.0/style/getComputedStyle.js": [
      "../util/babelHelpers",
      "../util/camelizeStyle"
    ],
    "npm:dom-helpers@2.4.0/class.js": [
      "./class/index"
    ],
    "npm:core-js@1.2.7/library/modules/es6.object.assign.js": [
      "./$.export",
      "./$.object-assign"
    ],
    "npm:core-js@1.2.7/library/modules/es6.object.keys.js": [
      "./$.to-object",
      "./$.object-sap"
    ],
    "npm:lodash-compat@3.10.2/internal/baseForOwn.js": [
      "./baseFor",
      "../object/keys"
    ],
    "npm:lodash-compat@3.10.2/internal/createBaseEach.js": [
      "./getLength",
      "./isLength",
      "./toObject"
    ],
    "npm:lodash-compat@3.10.2/internal/baseCallback.js": [
      "./baseMatches",
      "./baseMatchesProperty",
      "./bindCallback",
      "../utility/identity",
      "../utility/property"
    ],
    "npm:lodash-compat@3.10.2/internal/baseIndexOf.js": [
      "./indexOfNaN"
    ],
    "npm:lodash-compat@3.10.2/lang/isArray.js": [
      "../internal/getNative",
      "../internal/isLength",
      "../internal/isObjectLike"
    ],
    "npm:lodash-compat@3.10.2/internal/cacheIndexOf.js": [
      "../lang/isObject"
    ],
    "npm:lodash-compat@3.10.2/internal/createCache.js": [
      "./SetCache",
      "./getNative"
    ],
    "npm:lodash-compat@3.10.2/lang/isArguments.js": [
      "../internal/isArrayLike",
      "../internal/isObjectLike"
    ],
    "npm:lodash-compat@3.10.2/internal/isArrayLike.js": [
      "./getLength",
      "./isLength"
    ],
    "npm:lodash-compat@3.10.2/lang/isFunction.js": [
      "./isObject"
    ],
    "npm:lodash-compat@3.10.2/lang/isString.js": [
      "../internal/isObjectLike"
    ],
    "npm:lodash-compat@3.10.2/internal/baseForIn.js": [
      "./baseFor",
      "../object/keysIn"
    ],
    "npm:fbjs@0.6.1/lib/createArrayFromMixed.js": [
      "./toArray"
    ],
    "npm:lodash-compat@3.10.2/internal/toObject.js": [
      "../lang/isObject",
      "../lang/isString",
      "../support",
      "process"
    ],
    "npm:uncontrollable@3.3.1/createUncontrollable.js": [
      "react",
      "invariant",
      "./utils"
    ],
    "npm:react-overlays@0.6.10/lib/utils/calculatePosition.js": [
      "dom-helpers/query/offset",
      "dom-helpers/query/position",
      "dom-helpers/query/scrollTop",
      "./ownerDocument"
    ],
    "npm:dom-helpers@2.4.0/class/index.js": [
      "./addClass",
      "./removeClass",
      "./hasClass"
    ],
    "npm:lodash-compat@3.10.2/internal/baseFor.js": [
      "./createBaseFor"
    ],
    "npm:core-js@1.2.7/library/modules/$.to-object.js": [
      "./$.defined"
    ],
    "npm:core-js@1.2.7/library/modules/$.object-assign.js": [
      "./$",
      "./$.to-object",
      "./$.iobject",
      "./$.fails"
    ],
    "npm:lodash-compat@3.10.2/object/keys.js": [
      "../internal/getNative",
      "../internal/isArrayLike",
      "../lang/isObject",
      "../internal/shimKeys",
      "../support"
    ],
    "npm:lodash-compat@3.10.2/internal/getLength.js": [
      "./baseProperty"
    ],
    "npm:lodash-compat@3.10.2/internal/baseMatches.js": [
      "./baseIsMatch",
      "./getMatchData",
      "./toObject"
    ],
    "npm:lodash-compat@3.10.2/internal/baseMatchesProperty.js": [
      "./baseGet",
      "./baseIsEqual",
      "./baseSlice",
      "../lang/isArray",
      "./isKey",
      "./isStrictComparable",
      "../array/last",
      "./toObject",
      "./toPath"
    ],
    "npm:lodash-compat@3.10.2/utility/property.js": [
      "../internal/baseProperty",
      "../internal/basePropertyDeep",
      "../internal/isKey"
    ],
    "npm:lodash-compat@3.10.2/internal/getNative.js": [
      "../lang/isNative"
    ],
    "npm:lodash-compat@3.10.2/internal/SetCache.js": [
      "./cachePush",
      "./getNative"
    ],
    "npm:fbjs@0.6.1/lib/toArray.js": [
      "./invariant",
      "process"
    ],
    "npm:uncontrollable@3.3.1/utils.js": [
      "react",
      "invariant",
      "process"
    ],
    "npm:dom-helpers@2.4.0/query/offset.js": [
      "./contains",
      "./isWindow",
      "../ownerDocument"
    ],
    "npm:dom-helpers@2.4.0/query/scrollTop.js": [
      "./isWindow"
    ],
    "npm:dom-helpers@2.4.0/query/position.js": [
      "../util/babelHelpers",
      "./offset",
      "./offsetParent",
      "./scrollTop",
      "./scrollLeft",
      "../style/index"
    ],
    "npm:dom-helpers@2.4.0/class/addClass.js": [
      "./hasClass"
    ],
    "npm:lodash-compat@3.10.2/internal/createBaseFor.js": [
      "./toObject"
    ],
    "npm:lodash-compat@3.10.2/internal/shimKeys.js": [
      "../lang/isArguments",
      "../lang/isArray",
      "./isIndex",
      "./isLength",
      "../lang/isString",
      "../object/keysIn"
    ],
    "npm:lodash-compat@3.10.2/internal/baseProperty.js": [
      "./toObject"
    ],
    "npm:lodash-compat@3.10.2/internal/getMatchData.js": [
      "./isStrictComparable",
      "../object/pairs"
    ],
    "npm:lodash-compat@3.10.2/internal/baseIsMatch.js": [
      "./baseIsEqual",
      "./toObject"
    ],
    "npm:lodash-compat@3.10.2/internal/baseGet.js": [
      "./toObject"
    ],
    "npm:lodash-compat@3.10.2/internal/baseIsEqual.js": [
      "./baseIsEqualDeep",
      "../lang/isObject",
      "./isObjectLike"
    ],
    "npm:lodash-compat@3.10.2/internal/isKey.js": [
      "../lang/isArray",
      "./toObject"
    ],
    "npm:lodash-compat@3.10.2/internal/isStrictComparable.js": [
      "../lang/isObject"
    ],
    "npm:lodash-compat@3.10.2/internal/basePropertyDeep.js": [
      "./baseGet",
      "./toPath"
    ],
    "npm:lodash-compat@3.10.2/lang/isNative.js": [
      "./isFunction",
      "../internal/isHostObject",
      "../internal/isObjectLike"
    ],
    "npm:lodash-compat@3.10.2/internal/toPath.js": [
      "./baseToString",
      "../lang/isArray",
      "process"
    ],
    "npm:lodash-compat@3.10.2/internal/cachePush.js": [
      "../lang/isObject"
    ],
    "npm:dom-helpers@2.4.0/query/offsetParent.js": [
      "../util/babelHelpers",
      "../ownerDocument",
      "../style/index"
    ],
    "npm:dom-helpers@2.4.0/query/scrollLeft.js": [
      "./isWindow"
    ],
    "npm:lodash-compat@3.10.2/object/pairs.js": [
      "./keys",
      "../internal/toObject"
    ],
    "npm:lodash-compat@3.10.2/internal/baseToString.js": [
      "process"
    ],
    "npm:lodash-compat@3.10.2/internal/baseIsEqualDeep.js": [
      "./equalArrays",
      "./equalByTag",
      "./equalObjects",
      "../lang/isArray",
      "./isHostObject",
      "../lang/isTypedArray"
    ],
    "npm:lodash-compat@3.10.2/internal/equalArrays.js": [
      "./arraySome"
    ],
    "npm:lodash-compat@3.10.2/internal/equalObjects.js": [
      "../object/keys"
    ],
    "npm:lodash-compat@3.10.2/lang/isTypedArray.js": [
      "../internal/isLength",
      "../internal/isObjectLike"
    ]
  },

  map: {
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "base64": "npm:base64@2.1.0",
    "bootstrap": "github:twbs/bootstrap@3.3.7",
    "classnames": "npm:classnames@2.2.5",
    "clean-css": "npm:clean-css@3.4.24",
    "core-js": "npm:core-js@1.2.7",
    "css": "github:systemjs/plugin-css@0.1.32",
    "eslint": "npm:eslint@1.10.3",
    "eslint-config-google": "npm:eslint-config-google@0.6.0",
    "express": "npm:express@4.14.1",
    "font-awesome": "npm:font-awesome@4.7.0",
    "history": "npm:history@2.1.2",
    "immutable": "npm:immutable@3.8.1",
    "jquery": "npm:jquery@2.2.4",
    "jspm-loader-jsx": "npm:jspm-loader-jsx@0.0.7",
    "lite-server": "npm:lite-server@2.2.2",
    "react": "npm:react@0.14.8",
    "react-bootstrap": "npm:react-bootstrap@0.28.5",
    "react-dom": "npm:react-dom@0.14.8",
    "react-redux": "npm:react-redux@4.4.6",
    "react-router": "npm:react-router@2.8.1",
    "react-tap-event-plugin": "npm:react-tap-event-plugin@0.2.2",
    "redux": "npm:redux@3.6.0",
    "redux-async": "npm:redux-async@2.0.1",
    "redux-logger": "npm:redux-logger@2.8.1",
    "redux-thunk": "npm:redux-thunk@1.0.3",
    "reselect": "npm:reselect@2.5.4",
    "systemjs/plugin-css": "github:systemjs/plugin-css@0.1.32",
    "toastr": "npm:toastr@2.1.2",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
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
      "inherits": "npm:inherits@2.0.3",
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
      "process": "npm:process@0.11.9"
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
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "github:twbs/bootstrap@3.3.7": {
      "jquery": "npm:jquery@2.2.4"
    },
    "npm:accepts@1.3.1": {
      "mime-types": "npm:mime-types@2.1.14",
      "negotiator": "npm:negotiator@0.6.0"
    },
    "npm:accepts@1.3.3": {
      "mime-types": "npm:mime-types@2.1.14",
      "negotiator": "npm:negotiator@0.6.1"
    },
    "npm:acorn-jsx@3.0.1": {
      "acorn": "npm:acorn@3.3.0"
    },
    "npm:acorn-object-spread@1.0.0": {
      "acorn": "npm:acorn@3.3.0"
    },
    "npm:acorn@3.3.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:align-text@0.1.4": {
      "kind-of": "npm:kind-of@3.1.0",
      "longest": "npm:longest@1.0.1",
      "repeat-string": "npm:repeat-string@1.6.1"
    },
    "npm:amdefine@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ansi-escapes@1.4.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:anymatch@1.3.0": {
      "arrify": "npm:arrify@1.0.1",
      "micromatch": "npm:micromatch@2.3.11",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:are-we-there-yet@1.1.2": {
      "delegates": "npm:delegates@1.0.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "readable-stream": "npm:readable-stream@1.1.14",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:argparse@1.0.9": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "sprintf-js": "npm:sprintf-js@1.0.3",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:arr-diff@2.0.0": {
      "arr-flatten": "npm:arr-flatten@1.0.1"
    },
    "npm:array-union@1.0.2": {
      "array-uniq": "npm:array-uniq@1.0.3"
    },
    "npm:asap@2.0.5": {
      "domain": "github:jspm/nodelibs-domain@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asn1.js@4.9.1": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:asn1@0.2.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "sys": "github:jspm/nodelibs-util@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert-plus@0.2.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert-plus@1.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:async@0.2.10": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:async@1.5.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asynckit@0.4.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:aws-sign2@0.6.0": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:aws4@1.5.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:base64id@0.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:batch@0.5.3": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bcrypt-pbkdf@1.0.1": {
      "tweetnacl": "npm:tweetnacl@0.14.5"
    },
    "npm:better-assert@1.0.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "callsite": "npm:callsite@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:binary-extensions@1.8.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:bindings@1.2.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:block-stream@0.0.9": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:bn.js@4.11.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:boom@2.10.1": {
      "hoek": "npm:hoek@2.16.3",
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:brace-expansion@1.1.6": {
      "balanced-match": "npm:balanced-match@0.4.2",
      "concat-map": "npm:concat-map@0.0.1"
    },
    "npm:braces@1.8.5": {
      "expand-range": "npm:expand-range@1.8.2",
      "preserve": "npm:preserve@0.2.0",
      "repeat-element": "npm:repeat-element@1.1.2"
    },
    "npm:browser-sync-client@2.4.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "etag": "npm:etag@1.7.0",
      "fresh": "npm:fresh@0.3.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:browser-sync-ui@0.6.3": {
      "async-each-series": "npm:async-each-series@0.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "connect-history-api-fallback": "npm:connect-history-api-fallback@1.3.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "immutable": "npm:immutable@3.8.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "server-destroy": "npm:server-destroy@1.0.1",
      "stream-throttle": "npm:stream-throttle@0.1.3",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "weinre": "npm:weinre@2.0.0-pre-I0Z7U9OV",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:browser-sync@2.18.7": {
      "browser-sync-client": "npm:browser-sync-client@2.4.4",
      "browser-sync-ui": "npm:browser-sync-ui@0.6.3",
      "bs-recipes": "npm:bs-recipes@1.3.4",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "chokidar": "npm:chokidar@1.6.1",
      "connect": "npm:connect@3.5.0",
      "dev-ip": "npm:dev-ip@1.0.1",
      "dns": "github:jspm/nodelibs-dns@0.1.0",
      "easy-extender": "npm:easy-extender@2.3.2",
      "eazy-logger": "npm:eazy-logger@3.0.2",
      "emitter-steward": "npm:emitter-steward@1.0.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fs-extra": "npm:fs-extra@1.0.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "http-proxy": "npm:http-proxy@1.15.2",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "immutable": "npm:immutable@3.8.1",
      "localtunnel": "npm:localtunnel@1.8.2",
      "micromatch": "npm:micromatch@2.3.11",
      "opn": "npm:opn@4.0.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "portscanner": "npm:portscanner@2.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "qs": "npm:qs@6.2.1",
      "resp-modifier": "npm:resp-modifier@6.0.2",
      "rx": "npm:rx@4.1.0",
      "serve-index": "npm:serve-index@1.8.0",
      "serve-static": "npm:serve-static@1.11.1",
      "server-destroy": "npm:server-destroy@1.0.1",
      "socket.io": "npm:socket.io@1.6.0",
      "socket.io-client": "npm:socket.io-client@1.6.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "ua-parser-js": "npm:ua-parser-js@0.7.12",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "yargs": "npm:yargs@6.4.0"
    },
    "npm:browserify-aes@1.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.3",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
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
      "cipher-base": "npm:cipher-base@1.0.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.3"
    },
    "npm:browserify-rsa@4.0.1": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:browserify-sign@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.3.2",
      "inherits": "npm:inherits@2.0.3",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.9",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.2.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:bs-recipes@1.3.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:buble@0.12.5": {
      "acorn": "npm:acorn@3.3.0",
      "acorn-jsx": "npm:acorn-jsx@3.0.1",
      "acorn-object-spread": "npm:acorn-object-spread@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "chalk": "npm:chalk@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "magic-string": "npm:magic-string@0.14.0",
      "minimist": "npm:minimist@1.2.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "os-homedir": "npm:os-homedir@1.0.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:bubleify@0.5.1": {
      "buble": "npm:buble@0.12.5",
      "object-assign": "npm:object-assign@4.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:buffer-shims@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.8",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bufferutil@1.2.1": {
      "bindings": "npm:bindings@1.2.1",
      "nan": "npm:nan@2.4.0"
    },
    "npm:builtin-modules@1.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:camel-case@1.2.2": {
      "sentence-case": "npm:sentence-case@1.1.3",
      "upper-case": "npm:upper-case@1.1.3"
    },
    "npm:center-align@0.1.3": {
      "align-text": "npm:align-text@0.1.4",
      "lazy-cache": "npm:lazy-cache@1.0.4"
    },
    "npm:chalk@1.1.3": {
      "ansi-styles": "npm:ansi-styles@2.2.1",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
      "has-ansi": "npm:has-ansi@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-ansi": "npm:strip-ansi@3.0.1",
      "supports-color": "npm:supports-color@2.0.0"
    },
    "npm:chokidar@1.6.1": {
      "anymatch": "npm:anymatch@1.3.0",
      "async-each": "npm:async-each@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fsevents": "npm:fsevents@1.0.17",
      "glob-parent": "npm:glob-parent@2.0.0",
      "inherits": "npm:inherits@2.0.3",
      "is-binary-path": "npm:is-binary-path@1.0.1",
      "is-glob": "npm:is-glob@2.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readdirp": "npm:readdirp@2.1.0"
    },
    "npm:cipher-base@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.3",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:clean-css@3.4.24": {
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
    "npm:cliui@3.2.0": {
      "string-width": "npm:string-width@1.0.2",
      "strip-ansi": "npm:strip-ansi@3.0.1",
      "wrap-ansi": "npm:wrap-ansi@2.1.0"
    },
    "npm:combined-stream@1.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "delayed-stream": "npm:delayed-stream@1.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.8.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:commander@2.9.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:commoner@0.10.8": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "commander": "npm:commander@2.8.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "detective": "npm:detective@4.3.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@5.0.15",
      "graceful-fs": "npm:graceful-fs@4.1.11",
      "iconv-lite": "npm:iconv-lite@0.4.15",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "q": "npm:q@1.4.1",
      "recast": "npm:recast@0.11.20",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:concat-stream@1.6.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.3",
      "readable-stream": "npm:readable-stream@2.2.2",
      "typedarray": "npm:typedarray@0.0.6"
    },
    "npm:connect-history-api-fallback@1.3.0": {
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:connect-logger@0.0.1": {
      "moment": "npm:moment@2.17.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:connect@1.9.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "formidable": "npm:formidable@1.0.17",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "mime": "npm:mime@1.3.4",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "qs": "npm:qs@6.2.1",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:connect@3.5.0": {
      "debug": "npm:debug@2.2.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "finalhandler": "npm:finalhandler@0.5.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "parseurl": "npm:parseurl@1.3.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "utils-merge": "npm:utils-merge@1.0.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:content-disposition@0.5.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:cookie-signature@1.0.6": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.3.2"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.3",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.8"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.3",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:cryptiles@2.0.5": {
      "boom": "npm:boom@2.10.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:crypto-browserify@3.11.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.0",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@5.0.2",
      "inherits": "npm:inherits@2.0.3",
      "pbkdf2": "npm:pbkdf2@3.0.9",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:d@0.1.1": {
      "es5-ext": "npm:es5-ext@0.10.12"
    },
    "npm:dashdash@1.14.1": {
      "assert-plus": "npm:assert-plus@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:debug@2.2.0": {
      "ms": "npm:ms@0.7.1"
    },
    "npm:debug@2.3.3": {
      "ms": "npm:ms@0.7.2"
    },
    "npm:deep-extend@0.4.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:del@2.2.2": {
      "globby": "npm:globby@5.0.0",
      "is-path-cwd": "npm:is-path-cwd@1.0.0",
      "is-path-in-cwd": "npm:is-path-in-cwd@1.0.0",
      "object-assign": "npm:object-assign@4.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "pify": "npm:pify@2.3.0",
      "pinkie-promise": "npm:pinkie-promise@2.0.1",
      "rimraf": "npm:rimraf@2.5.4"
    },
    "npm:delayed-stream@1.0.0": {
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:depd@1.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:destroy@1.0.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:detective@4.3.2": {
      "acorn": "npm:acorn@3.3.0",
      "defined": "npm:defined@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:diffie-hellman@5.0.2": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:doctrine@0.7.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "esutils": "npm:esutils@1.1.6",
      "isarray": "npm:isarray@0.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:domain-browser@1.1.7": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:easy-extender@2.3.2": {
      "lodash": "npm:lodash@3.10.1"
    },
    "npm:eazy-logger@3.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tfunk": "npm:tfunk@3.1.0"
    },
    "npm:ecc-jsbn@0.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "jsbn": "npm:jsbn@0.1.0"
    },
    "npm:elliptic@6.3.2": {
      "bn.js": "npm:bn.js@4.11.6",
      "brorand": "npm:brorand@1.0.6",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:encoding@0.1.12": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "iconv-lite": "npm:iconv-lite@0.4.15"
    },
    "npm:engine.io-client@1.8.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "component-emitter": "npm:component-emitter@1.2.1",
      "component-inherit": "npm:component-inherit@0.0.3",
      "debug": "npm:debug@2.3.3",
      "engine.io-parser": "npm:engine.io-parser@1.3.1",
      "has-cors": "npm:has-cors@1.1.0",
      "indexof": "npm:indexof@0.0.1",
      "parsejson": "npm:parsejson@0.0.3",
      "parseqs": "npm:parseqs@0.0.5",
      "parseuri": "npm:parseuri@0.0.5",
      "yeast": "npm:yeast@0.1.2"
    },
    "npm:engine.io-parser@1.2.4": {
      "after": "npm:after@0.8.1",
      "arraybuffer.slice": "npm:arraybuffer.slice@0.0.6",
      "base64-arraybuffer": "npm:base64-arraybuffer@0.1.2",
      "blob": "npm:blob@0.0.4",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "has-binary": "npm:has-binary@0.1.6",
      "utf8": "npm:utf8@2.1.0"
    },
    "npm:engine.io-parser@1.3.1": {
      "after": "npm:after@0.8.1",
      "arraybuffer.slice": "npm:arraybuffer.slice@0.0.6",
      "base64-arraybuffer": "npm:base64-arraybuffer@0.1.5",
      "blob": "npm:blob@0.0.4",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "has-binary": "npm:has-binary@0.1.6",
      "wtf-8": "npm:wtf-8@1.0.0"
    },
    "npm:engine.io@1.8.0": {
      "accepts": "npm:accepts@1.3.1",
      "base64id": "npm:base64id@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "debug": "npm:debug@2.2.0",
      "engine.io-parser": "npm:engine.io-parser@1.2.4",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "ws": "npm:ws@1.0.1",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:envify@3.4.1": {
      "jstransform": "npm:jstransform@11.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "through": "npm:through@2.3.8"
    },
    "npm:error-ex@1.3.0": {
      "is-arrayish": "npm:is-arrayish@0.2.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:es5-ext@0.10.12": {
      "es6-iterator": "npm:es6-iterator@2.0.0",
      "es6-symbol": "npm:es6-symbol@3.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:es6-iterator@2.0.0": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.12",
      "es6-symbol": "npm:es6-symbol@3.1.0"
    },
    "npm:es6-map@0.1.4": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.12",
      "es6-iterator": "npm:es6-iterator@2.0.0",
      "es6-set": "npm:es6-set@0.1.4",
      "es6-symbol": "npm:es6-symbol@3.1.0",
      "event-emitter": "npm:event-emitter@0.3.4"
    },
    "npm:es6-set@0.1.4": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.12",
      "es6-iterator": "npm:es6-iterator@2.0.0",
      "es6-symbol": "npm:es6-symbol@3.1.0",
      "event-emitter": "npm:event-emitter@0.3.4"
    },
    "npm:es6-symbol@3.1.0": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.12"
    },
    "npm:es6-weak-map@2.0.1": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.12",
      "es6-iterator": "npm:es6-iterator@2.0.0",
      "es6-symbol": "npm:es6-symbol@3.1.0"
    },
    "npm:escope@3.6.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "es6-map": "npm:es6-map@0.1.4",
      "es6-weak-map": "npm:es6-weak-map@2.0.1",
      "esrecurse": "npm:esrecurse@4.1.0",
      "estraverse": "npm:estraverse@4.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:eslint-config-google@0.6.0": {
      "eslint": "npm:eslint@1.10.3",
      "eslint-config-xo": "npm:eslint-config-xo@0.13.0"
    },
    "npm:eslint-config-xo@0.13.0": {
      "eslint": "npm:eslint@1.10.3",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:eslint@1.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "chalk": "npm:chalk@1.1.3",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "concat-stream": "npm:concat-stream@1.6.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "debug": "npm:debug@2.2.0",
      "doctrine": "npm:doctrine@0.7.2",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
      "escope": "npm:escope@3.6.0",
      "espree": "npm:espree@2.2.5",
      "estraverse": "npm:estraverse@4.1.1",
      "estraverse-fb": "npm:estraverse-fb@1.3.1",
      "esutils": "npm:esutils@2.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "file-entry-cache": "npm:file-entry-cache@1.3.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@5.0.15",
      "globals": "npm:globals@8.18.0",
      "handlebars": "npm:handlebars@4.0.6",
      "inquirer": "npm:inquirer@0.11.4",
      "is-my-json-valid": "npm:is-my-json-valid@2.15.0",
      "is-resolvable": "npm:is-resolvable@1.0.0",
      "js-yaml": "npm:js-yaml@3.4.5",
      "json-stable-stringify": "npm:json-stable-stringify@1.0.1",
      "lodash.clonedeep": "npm:lodash.clonedeep@3.0.2",
      "lodash.merge": "npm:lodash.merge@3.3.2",
      "lodash.omit": "npm:lodash.omit@3.1.0",
      "minimatch": "npm:minimatch@3.0.3",
      "mkdirp": "npm:mkdirp@0.5.1",
      "object-assign": "npm:object-assign@4.1.0",
      "optionator": "npm:optionator@0.6.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.1",
      "path-is-inside": "npm:path-is-inside@1.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "shelljs": "npm:shelljs@0.5.3",
      "strip-json-comments": "npm:strip-json-comments@1.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "text-table": "npm:text-table@0.2.0",
      "user-home": "npm:user-home@2.0.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xml-escape": "npm:xml-escape@1.0.0"
    },
    "npm:espree@2.2.5": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:esprima-fb@15001.1.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:esprima@3.1.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:esrecurse@4.1.0": {
      "estraverse": "npm:estraverse@4.1.1",
      "object-assign": "npm:object-assign@4.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:estraverse-fb@1.3.1": {
      "estraverse": "npm:estraverse@4.1.1"
    },
    "npm:estraverse@4.1.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:etag@1.7.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:event-emitter@0.3.4": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.12",
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
    "npm:expand-brackets@0.1.5": {
      "is-posix-bracket": "npm:is-posix-bracket@0.1.1"
    },
    "npm:expand-range@1.8.2": {
      "fill-range": "npm:fill-range@2.2.3"
    },
    "npm:express@2.5.11": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "connect": "npm:connect@1.9.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "mime": "npm:mime@1.2.4",
      "mkdirp": "npm:mkdirp@0.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "qs": "npm:qs@0.4.2",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:express@4.14.1": {
      "accepts": "npm:accepts@1.3.3",
      "array-flatten": "npm:array-flatten@1.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "content-disposition": "npm:content-disposition@0.5.2",
      "content-type": "npm:content-type@1.0.2",
      "cookie": "npm:cookie@0.3.1",
      "cookie-signature": "npm:cookie-signature@1.0.6",
      "debug": "npm:debug@2.2.0",
      "depd": "npm:depd@1.1.0",
      "encodeurl": "npm:encodeurl@1.0.1",
      "escape-html": "npm:escape-html@1.0.3",
      "etag": "npm:etag@1.7.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "finalhandler": "npm:finalhandler@0.5.1",
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
      "proxy-addr": "npm:proxy-addr@1.1.3",
      "qs": "npm:qs@6.2.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "range-parser": "npm:range-parser@1.2.0",
      "send": "npm:send@0.14.2",
      "serve-static": "npm:serve-static@1.11.2",
      "type-is": "npm:type-is@1.6.14",
      "utils-merge": "npm:utils-merge@1.0.0",
      "vary": "npm:vary@1.1.0"
    },
    "npm:extglob@0.3.2": {
      "is-extglob": "npm:is-extglob@1.0.0"
    },
    "npm:extsprintf@1.0.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:fbjs@0.2.1": {
      "core-js": "npm:core-js@1.2.7",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise": "npm:promise@7.1.1",
      "whatwg-fetch": "npm:whatwg-fetch@0.9.0"
    },
    "npm:fbjs@0.6.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:fbjs@0.8.9": {
      "core-js": "npm:core-js@1.2.7",
      "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
      "loose-envify": "npm:loose-envify@1.3.1",
      "object-assign": "npm:object-assign@4.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise": "npm:promise@7.1.1",
      "setimmediate": "npm:setimmediate@1.0.5",
      "ua-parser-js": "npm:ua-parser-js@0.7.12"
    },
    "npm:figures@1.7.0": {
      "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
      "object-assign": "npm:object-assign@4.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:file-entry-cache@1.3.1": {
      "flat-cache": "npm:flat-cache@1.2.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "object-assign": "npm:object-assign@4.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:fill-range@2.2.3": {
      "is-number": "npm:is-number@2.1.0",
      "isobject": "npm:isobject@2.1.0",
      "randomatic": "npm:randomatic@1.1.6",
      "repeat-element": "npm:repeat-element@1.1.2",
      "repeat-string": "npm:repeat-string@1.6.1"
    },
    "npm:finalhandler@0.5.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "debug": "npm:debug@2.2.0",
      "escape-html": "npm:escape-html@1.0.3",
      "on-finished": "npm:on-finished@2.3.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "statuses": "npm:statuses@1.3.1",
      "unpipe": "npm:unpipe@1.0.0"
    },
    "npm:finalhandler@0.5.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "debug": "npm:debug@2.2.0",
      "escape-html": "npm:escape-html@1.0.3",
      "on-finished": "npm:on-finished@2.3.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "statuses": "npm:statuses@1.3.1",
      "unpipe": "npm:unpipe@1.0.0"
    },
    "npm:find-up@1.1.2": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-exists": "npm:path-exists@2.1.0",
      "pinkie-promise": "npm:pinkie-promise@2.0.1"
    },
    "npm:flat-cache@1.2.2": {
      "circular-json": "npm:circular-json@0.3.1",
      "del": "npm:del@2.2.2",
      "graceful-fs": "npm:graceful-fs@4.1.11",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "write": "npm:write@0.2.1"
    },
    "npm:font-awesome@4.7.0": {
      "css": "github:systemjs/plugin-css@0.1.32"
    },
    "npm:for-own@0.1.4": {
      "for-in": "npm:for-in@0.1.6"
    },
    "npm:forever-agent@0.6.1": {
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:form-data@2.1.2": {
      "asynckit": "npm:asynckit@0.4.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "combined-stream": "npm:combined-stream@1.0.5",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "mime-types": "npm:mime-types@2.1.14",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:formidable@1.0.17": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:fs-extra@1.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-fs": "npm:graceful-fs@4.1.11",
      "jsonfile": "npm:jsonfile@2.4.0",
      "klaw": "npm:klaw@1.3.1",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:fs.realpath@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:fsevents@1.0.17": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "nan": "npm:nan@2.4.0",
      "node-pre-gyp": "npm:node-pre-gyp@0.6.33",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:fstream-ignore@1.0.5": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fstream": "npm:fstream@1.0.10",
      "inherits": "npm:inherits@2.0.3",
      "minimatch": "npm:minimatch@3.0.3",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:fstream@1.0.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-fs": "npm:graceful-fs@4.1.11",
      "inherits": "npm:inherits@2.0.3",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rimraf": "npm:rimraf@2.5.4",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:gauge@2.7.2": {
      "aproba": "npm:aproba@1.0.4",
      "console-control-strings": "npm:console-control-strings@1.1.0",
      "has-unicode": "npm:has-unicode@2.0.1",
      "object-assign": "npm:object-assign@4.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "signal-exit": "npm:signal-exit@3.0.2",
      "string-width": "npm:string-width@1.0.2",
      "strip-ansi": "npm:strip-ansi@3.0.1",
      "supports-color": "npm:supports-color@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "wide-align": "npm:wide-align@1.1.0"
    },
    "npm:generate-function@2.0.0": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:generate-object-property@1.2.0": {
      "is-property": "npm:is-property@1.0.2"
    },
    "npm:getpass@0.1.6": {
      "assert-plus": "npm:assert-plus@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:glob-base@0.3.0": {
      "glob-parent": "npm:glob-parent@2.0.0",
      "is-glob": "npm:is-glob@2.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:glob-parent@2.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "is-glob": "npm:is-glob@2.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:glob@5.0.15": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inflight": "npm:inflight@1.0.6",
      "inherits": "npm:inherits@2.0.3",
      "minimatch": "npm:minimatch@3.0.3",
      "once": "npm:once@1.3.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:glob@7.1.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fs.realpath": "npm:fs.realpath@1.0.0",
      "inflight": "npm:inflight@1.0.6",
      "inherits": "npm:inherits@2.0.3",
      "minimatch": "npm:minimatch@3.0.3",
      "once": "npm:once@1.3.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:globals@8.18.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:globby@5.0.0": {
      "array-union": "npm:array-union@1.0.2",
      "arrify": "npm:arrify@1.0.1",
      "glob": "npm:glob@7.1.1",
      "object-assign": "npm:object-assign@4.1.0",
      "pify": "npm:pify@2.3.0",
      "pinkie-promise": "npm:pinkie-promise@2.0.1"
    },
    "npm:graceful-fs@4.1.11": {
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
    "npm:handlebars@4.0.6": {
      "async": "npm:async@1.5.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "optimist": "npm:optimist@0.6.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.4.4",
      "uglify-js": "npm:uglify-js@2.7.5"
    },
    "npm:har-validator@2.0.6": {
      "chalk": "npm:chalk@1.1.3",
      "commander": "npm:commander@2.9.0",
      "is-my-json-valid": "npm:is-my-json-valid@2.15.0",
      "pinkie-promise": "npm:pinkie-promise@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:has-ansi@2.0.0": {
      "ansi-regex": "npm:ansi-regex@2.1.1"
    },
    "npm:has-binary@0.1.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "isarray": "npm:isarray@0.0.1"
    },
    "npm:has-binary@0.1.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "isarray": "npm:isarray@0.0.1"
    },
    "npm:has-unicode@2.0.1": {
      "os": "github:jspm/nodelibs-os@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.3"
    },
    "npm:hawk@3.1.3": {
      "boom": "npm:boom@2.10.1",
      "cryptiles": "npm:cryptiles@2.0.5",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "hoek": "npm:hoek@2.16.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "sntp": "npm:sntp@1.0.9",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:history@2.1.2": {
      "deep-equal": "npm:deep-equal@1.0.1",
      "invariant": "npm:invariant@2.2.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "query-string": "npm:query-string@3.0.3",
      "warning": "npm:warning@2.1.0"
    },
    "npm:hoek@2.16.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:hosted-git-info@2.1.5": {
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:http-errors@1.5.1": {
      "inherits": "npm:inherits@2.0.3",
      "setprototypeof": "npm:setprototypeof@1.0.2",
      "statuses": "npm:statuses@1.3.1"
    },
    "npm:http-proxy@1.15.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "eventemitter3": "npm:eventemitter3@1.2.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "requires-port": "npm:requires-port@1.0.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:http-signature@1.1.1": {
      "assert-plus": "npm:assert-plus@0.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "jsprim": "npm:jsprim@1.3.1",
      "sshpk": "npm:sshpk@1.10.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:iconv-lite@0.4.15": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:inflight@1.0.6": {
      "once": "npm:once@1.3.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "wrappy": "npm:wrappy@1.0.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:inherits@2.0.3": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:ini@1.3.4": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:inquirer@0.11.4": {
      "ansi-escapes": "npm:ansi-escapes@1.4.0",
      "ansi-regex": "npm:ansi-regex@2.1.1",
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "chalk": "npm:chalk@1.1.3",
      "cli-cursor": "npm:cli-cursor@1.0.2",
      "cli-width": "npm:cli-width@1.1.1",
      "figures": "npm:figures@1.7.0",
      "lodash": "npm:lodash@3.10.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readline2": "npm:readline2@1.0.1",
      "run-async": "npm:run-async@0.1.0",
      "rx-lite": "npm:rx-lite@3.1.2",
      "string-width": "npm:string-width@1.0.2",
      "strip-ansi": "npm:strip-ansi@3.0.1",
      "through": "npm:through@2.3.8",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:invariant@2.2.2": {
      "loose-envify": "npm:loose-envify@1.3.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:is-binary-path@1.0.1": {
      "binary-extensions": "npm:binary-extensions@1.8.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:is-buffer@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:is-builtin-module@1.0.0": {
      "builtin-modules": "npm:builtin-modules@1.1.1"
    },
    "npm:is-equal-shallow@0.1.3": {
      "is-primitive": "npm:is-primitive@2.0.0"
    },
    "npm:is-fullwidth-code-point@1.0.0": {
      "number-is-nan": "npm:number-is-nan@1.0.1"
    },
    "npm:is-glob@2.0.1": {
      "is-extglob": "npm:is-extglob@1.0.0"
    },
    "npm:is-my-json-valid@2.15.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "generate-function": "npm:generate-function@2.0.0",
      "generate-object-property": "npm:generate-object-property@1.2.0",
      "jsonpointer": "npm:jsonpointer@4.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:is-number-like@1.0.7": {
      "bubleify": "npm:bubleify@0.5.1",
      "lodash.isfinite": "npm:lodash.isfinite@3.3.2"
    },
    "npm:is-number@2.1.0": {
      "kind-of": "npm:kind-of@3.1.0"
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
      "path-is-inside": "npm:path-is-inside@1.0.2"
    },
    "npm:is-resolvable@1.0.0": {
      "tryit": "npm:tryit@1.0.3"
    },
    "npm:isobject@2.1.0": {
      "isarray": "npm:isarray@1.0.0"
    },
    "npm:isomorphic-fetch@2.2.1": {
      "node-fetch": "npm:node-fetch@1.6.3",
      "whatwg-fetch": "npm:whatwg-fetch@0.9.0"
    },
    "npm:isstream@0.1.2": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:jodid25519@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "jsbn": "npm:jsbn@0.1.0"
    },
    "npm:js-yaml@3.4.5": {
      "argparse": "npm:argparse@1.0.9",
      "esprima": "npm:esprima@2.7.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:json-stable-stringify@1.0.1": {
      "jsonify": "npm:jsonify@0.0.0"
    },
    "npm:jsonfile@2.4.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-fs": "npm:graceful-fs@4.1.11"
    },
    "npm:jspm-loader-jsx@0.0.7": {
      "pascal-case": "npm:pascal-case@1.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "react": "npm:react@0.13.3",
      "react-hot-api": "github:gaearon/react-hot-api@0.4.5"
    },
    "npm:jsprim@1.3.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "extsprintf": "npm:extsprintf@1.0.2",
      "json-schema": "npm:json-schema@0.2.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "verror": "npm:verror@1.3.6"
    },
    "npm:jstransform@11.0.3": {
      "base62": "npm:base62@1.1.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commoner": "npm:commoner@0.10.8",
      "esprima-fb": "npm:esprima-fb@15001.1.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "object-assign": "npm:object-assign@2.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.4.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:kind-of@3.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "is-buffer": "npm:is-buffer@1.1.4"
    },
    "npm:klaw@1.3.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-fs": "npm:graceful-fs@4.1.11",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:lazy-cache@1.0.4": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lcid@1.0.0": {
      "invert-kv": "npm:invert-kv@1.0.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:levn@0.2.5": {
      "prelude-ls": "npm:prelude-ls@1.1.2",
      "type-check": "npm:type-check@0.3.2"
    },
    "npm:limiter@1.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lite-server@2.2.2": {
      "browser-sync": "npm:browser-sync@2.18.7",
      "connect-history-api-fallback": "npm:connect-history-api-fallback@1.3.0",
      "connect-logger": "npm:connect-logger@0.0.1",
      "lodash": "npm:lodash@4.17.4",
      "minimist": "npm:minimist@1.2.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:load-json-file@1.1.0": {
      "graceful-fs": "npm:graceful-fs@4.1.11",
      "parse-json": "npm:parse-json@2.2.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "pify": "npm:pify@2.3.0",
      "pinkie-promise": "npm:pinkie-promise@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-bom": "npm:strip-bom@2.0.0"
    },
    "npm:localtunnel@1.8.2": {
      "debug": "npm:debug@2.2.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "openurl": "npm:openurl@1.1.0",
      "request": "npm:request@2.78.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "yargs": "npm:yargs@3.29.0"
    },
    "npm:lodash-compat@3.10.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
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
      "lodash.isarguments": "npm:lodash.isarguments@3.1.0",
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
      "lodash.isarguments": "npm:lodash.isarguments@3.1.0",
      "lodash.keysin": "npm:lodash.keysin@3.0.8"
    },
    "npm:lodash.keys@3.1.2": {
      "lodash._getnative": "npm:lodash._getnative@3.9.1",
      "lodash.isarguments": "npm:lodash.isarguments@3.1.0",
      "lodash.isarray": "npm:lodash.isarray@3.0.4"
    },
    "npm:lodash.keysin@3.0.8": {
      "lodash.isarguments": "npm:lodash.isarguments@3.1.0",
      "lodash.isarray": "npm:lodash.isarray@3.0.4"
    },
    "npm:lodash.merge@3.3.2": {
      "lodash._arraycopy": "npm:lodash._arraycopy@3.0.0",
      "lodash._arrayeach": "npm:lodash._arrayeach@3.0.0",
      "lodash._createassigner": "npm:lodash._createassigner@3.1.1",
      "lodash._getnative": "npm:lodash._getnative@3.9.1",
      "lodash.isarguments": "npm:lodash.isarguments@3.1.0",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.isplainobject": "npm:lodash.isplainobject@3.2.0",
      "lodash.istypedarray": "npm:lodash.istypedarray@3.0.6",
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
    "npm:loose-envify@1.3.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-tokens": "npm:js-tokens@3.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:magic-string@0.14.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "vlq": "npm:vlq@0.2.1"
    },
    "npm:micromatch@2.3.11": {
      "arr-diff": "npm:arr-diff@2.0.0",
      "array-unique": "npm:array-unique@0.2.1",
      "braces": "npm:braces@1.8.5",
      "expand-brackets": "npm:expand-brackets@0.1.5",
      "extglob": "npm:extglob@0.3.2",
      "filename-regex": "npm:filename-regex@2.0.0",
      "is-extglob": "npm:is-extglob@1.0.0",
      "is-glob": "npm:is-glob@2.0.1",
      "kind-of": "npm:kind-of@3.1.0",
      "normalize-path": "npm:normalize-path@2.0.1",
      "object.omit": "npm:object.omit@2.0.1",
      "parse-glob": "npm:parse-glob@3.0.4",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "regex-cache": "npm:regex-cache@0.4.3"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "brorand": "npm:brorand@1.0.6"
    },
    "npm:mime-db@1.26.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:mime-types@2.1.14": {
      "mime-db": "npm:mime-db@1.26.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:mime@1.2.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:mime@1.3.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:minimatch@3.0.3": {
      "brace-expansion": "npm:brace-expansion@1.1.6",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:mkdirp@0.3.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
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
    "npm:nan@2.4.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:node-fetch@1.6.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "encoding": "npm:encoding@0.1.12",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "is-stream": "npm:is-stream@1.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:node-pre-gyp@0.6.33": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "mkdirp": "npm:mkdirp@0.5.1",
      "nopt": "npm:nopt@3.0.6",
      "npmlog": "npm:npmlog@4.0.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rc": "npm:rc@1.1.6",
      "request": "npm:request@2.79.0",
      "rimraf": "npm:rimraf@2.5.4",
      "semver": "npm:semver@5.3.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "tar": "npm:tar@2.2.1",
      "tar-pack": "npm:tar-pack@3.3.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:node-uuid@1.4.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:nopt@3.0.6": {
      "abbrev": "npm:abbrev@1.0.9",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:normalize-package-data@2.3.5": {
      "hosted-git-info": "npm:hosted-git-info@2.1.5",
      "is-builtin-module": "npm:is-builtin-module@1.0.0",
      "semver": "npm:semver@5.3.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "validate-npm-package-license": "npm:validate-npm-package-license@3.0.1"
    },
    "npm:npmlog@4.0.2": {
      "are-we-there-yet": "npm:are-we-there-yet@1.1.2",
      "console-control-strings": "npm:console-control-strings@1.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "gauge": "npm:gauge@2.7.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "set-blocking": "npm:set-blocking@2.0.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:oauth-sign@0.8.2": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0"
    },
    "npm:object.omit@2.0.1": {
      "for-own": "npm:for-own@0.1.4",
      "is-extendable": "npm:is-extendable@0.1.1"
    },
    "npm:on-finished@2.3.0": {
      "ee-first": "npm:ee-first@1.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:once@1.3.3": {
      "wrappy": "npm:wrappy@1.0.2"
    },
    "npm:openurl@1.1.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:opn@4.0.2": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "object-assign": "npm:object-assign@4.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "pinkie-promise": "npm:pinkie-promise@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
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
    "npm:options@0.0.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:os-homedir@1.0.2": {
      "os": "github:jspm/nodelibs-os@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:os-locale@1.4.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "lcid": "npm:lcid@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pako@0.2.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:parse-asn1@5.0.0": {
      "asn1.js": "npm:asn1.js@4.9.1",
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.9",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:parse-glob@3.0.4": {
      "glob-base": "npm:glob-base@0.3.0",
      "is-dotfile": "npm:is-dotfile@1.0.2",
      "is-extglob": "npm:is-extglob@1.0.0",
      "is-glob": "npm:is-glob@2.0.1"
    },
    "npm:parse-json@2.2.0": {
      "error-ex": "npm:error-ex@1.3.0"
    },
    "npm:parsejson@0.0.3": {
      "better-assert": "npm:better-assert@1.0.2"
    },
    "npm:parseqs@0.0.5": {
      "better-assert": "npm:better-assert@1.0.2"
    },
    "npm:parseuri@0.0.5": {
      "better-assert": "npm:better-assert@1.0.2"
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
    "npm:path-exists@2.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "pinkie-promise": "npm:pinkie-promise@2.0.1"
    },
    "npm:path-is-absolute@1.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-is-inside@1.0.2": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-type@1.1.0": {
      "graceful-fs": "npm:graceful-fs@4.1.11",
      "pify": "npm:pify@2.3.0",
      "pinkie-promise": "npm:pinkie-promise@2.0.1"
    },
    "npm:pbkdf2@3.0.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pify@2.3.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pinkie-promise@2.0.1": {
      "pinkie": "npm:pinkie@2.0.4"
    },
    "npm:portscanner@2.1.1": {
      "async": "npm:async@1.5.2",
      "is-number-like": "npm:is-number-like@1.0.7",
      "net": "github:jspm/nodelibs-net@0.1.2"
    },
    "npm:process-nextick-args@1.0.7": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.9": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:promise@7.1.1": {
      "asap": "npm:asap@2.0.5",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:proxy-addr@1.1.3": {
      "forwarded": "npm:forwarded@0.1.0",
      "ipaddr.js": "npm:ipaddr.js@1.2.0"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:punycode@1.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:q@1.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:query-string@3.0.3": {
      "strict-uri-encode": "npm:strict-uri-encode@1.1.0"
    },
    "npm:randomatic@1.1.6": {
      "is-number": "npm:is-number@2.1.0",
      "kind-of": "npm:kind-of@3.1.0"
    },
    "npm:randombytes@2.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:rc@1.1.6": {
      "deep-extend": "npm:deep-extend@0.4.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ini": "npm:ini@1.3.4",
      "minimist": "npm:minimist@1.2.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-json-comments": "npm:strip-json-comments@1.0.4"
    },
    "npm:react-bootstrap@0.28.5": {
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "classnames": "npm:classnames@2.2.5",
      "dom-helpers": "npm:dom-helpers@2.4.0",
      "invariant": "npm:invariant@2.2.2",
      "keycode": "npm:keycode@2.1.8",
      "lodash-compat": "npm:lodash-compat@3.10.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@15.4.2",
      "react-dom": "npm:react-dom@0.14.8",
      "react-overlays": "npm:react-overlays@0.6.10",
      "react-prop-types": "npm:react-prop-types@0.3.2",
      "uncontrollable": "npm:uncontrollable@3.3.1",
      "warning": "npm:warning@2.1.0"
    },
    "npm:react-dom@0.14.8": {
      "react": "npm:react@0.14.8"
    },
    "npm:react-overlays@0.6.10": {
      "classnames": "npm:classnames@2.2.5",
      "dom-helpers": "npm:dom-helpers@2.4.0",
      "react": "npm:react@15.4.2",
      "react-dom": "npm:react-dom@0.14.8",
      "react-prop-types": "npm:react-prop-types@0.4.0",
      "warning": "npm:warning@3.0.0"
    },
    "npm:react-prop-types@0.3.2": {
      "warning": "npm:warning@2.1.0"
    },
    "npm:react-prop-types@0.4.0": {
      "react": "npm:react@15.4.2",
      "warning": "npm:warning@3.0.0"
    },
    "npm:react-redux@4.4.6": {
      "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0",
      "invariant": "npm:invariant@2.2.2",
      "lodash": "npm:lodash@4.17.4",
      "loose-envify": "npm:loose-envify@1.3.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@15.4.2",
      "redux": "npm:redux@3.6.0"
    },
    "npm:react-router@2.8.1": {
      "history": "npm:history@2.1.2",
      "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0",
      "invariant": "npm:invariant@2.2.2",
      "loose-envify": "npm:loose-envify@1.3.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@15.4.2",
      "warning": "npm:warning@3.0.0"
    },
    "npm:react-tap-event-plugin@0.2.2": {
      "fbjs": "npm:fbjs@0.2.1",
      "react": "npm:react@0.14.8"
    },
    "npm:react@0.13.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "envify": "npm:envify@3.4.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react@0.14.8": {
      "fbjs": "npm:fbjs@0.6.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react@15.4.2": {
      "fbjs": "npm:fbjs@0.8.9",
      "loose-envify": "npm:loose-envify@1.3.1",
      "object-assign": "npm:object-assign@4.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:read-pkg-up@1.0.1": {
      "find-up": "npm:find-up@1.1.2",
      "read-pkg": "npm:read-pkg@1.1.0"
    },
    "npm:read-pkg@1.1.0": {
      "load-json-file": "npm:load-json-file@1.1.0",
      "normalize-package-data": "npm:normalize-package-data@2.3.5",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-type": "npm:path-type@1.1.0"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.1.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-shims": "npm:buffer-shims@1.0.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.7",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:readable-stream@2.2.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-shims": "npm:buffer-shims@1.0.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.7",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:readdirp@2.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-fs": "npm:graceful-fs@4.1.11",
      "minimatch": "npm:minimatch@3.0.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.2.2",
      "set-immediate-shim": "npm:set-immediate-shim@1.0.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:readline2@1.0.1": {
      "code-point-at": "npm:code-point-at@1.1.0",
      "is-fullwidth-code-point": "npm:is-fullwidth-code-point@1.0.0",
      "mute-stream": "npm:mute-stream@0.0.5",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readline": "github:jspm/nodelibs-readline@0.1.0"
    },
    "npm:recast@0.11.20": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "ast-types": "npm:ast-types@0.9.4",
      "esprima": "npm:esprima@3.1.3",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.6"
    },
    "npm:redux-logger@2.8.1": {
      "deep-diff": "npm:deep-diff@0.3.4"
    },
    "npm:redux@3.6.0": {
      "lodash": "npm:lodash@4.17.4",
      "lodash-es": "npm:lodash-es@4.17.4",
      "loose-envify": "npm:loose-envify@1.3.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "symbol-observable": "npm:symbol-observable@1.0.4"
    },
    "npm:regex-cache@0.4.3": {
      "is-equal-shallow": "npm:is-equal-shallow@0.1.3",
      "is-primitive": "npm:is-primitive@2.0.0"
    },
    "npm:request@2.78.0": {
      "aws-sign2": "npm:aws-sign2@0.6.0",
      "aws4": "npm:aws4@1.5.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "caseless": "npm:caseless@0.11.0",
      "combined-stream": "npm:combined-stream@1.0.5",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "extend": "npm:extend@3.0.0",
      "forever-agent": "npm:forever-agent@0.6.1",
      "form-data": "npm:form-data@2.1.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "har-validator": "npm:har-validator@2.0.6",
      "hawk": "npm:hawk@3.1.3",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "http-signature": "npm:http-signature@1.1.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "is-typedarray": "npm:is-typedarray@1.0.0",
      "isstream": "npm:isstream@0.1.2",
      "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
      "mime-types": "npm:mime-types@2.1.14",
      "node-uuid": "npm:node-uuid@1.4.7",
      "oauth-sign": "npm:oauth-sign@0.8.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "qs": "npm:qs@6.3.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stringstream": "npm:stringstream@0.0.5",
      "tough-cookie": "npm:tough-cookie@2.3.2",
      "tunnel-agent": "npm:tunnel-agent@0.4.3",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:request@2.79.0": {
      "aws-sign2": "npm:aws-sign2@0.6.0",
      "aws4": "npm:aws4@1.5.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "caseless": "npm:caseless@0.11.0",
      "combined-stream": "npm:combined-stream@1.0.5",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "extend": "npm:extend@3.0.0",
      "forever-agent": "npm:forever-agent@0.6.1",
      "form-data": "npm:form-data@2.1.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "har-validator": "npm:har-validator@2.0.6",
      "hawk": "npm:hawk@3.1.3",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "http-signature": "npm:http-signature@1.1.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "is-typedarray": "npm:is-typedarray@1.0.0",
      "isstream": "npm:isstream@0.1.2",
      "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
      "mime-types": "npm:mime-types@2.1.14",
      "oauth-sign": "npm:oauth-sign@0.8.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "qs": "npm:qs@6.3.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stringstream": "npm:stringstream@0.0.5",
      "tough-cookie": "npm:tough-cookie@2.3.2",
      "tunnel-agent": "npm:tunnel-agent@0.4.3",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "uuid": "npm:uuid@3.0.1",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:require-directory@2.1.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:require-main-filename@1.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:resp-modifier@6.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "debug": "npm:debug@2.2.0",
      "minimatch": "npm:minimatch@3.0.3"
    },
    "npm:restore-cursor@1.0.1": {
      "exit-hook": "npm:exit-hook@1.1.1",
      "onetime": "npm:onetime@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:right-align@0.1.3": {
      "align-text": "npm:align-text@0.1.4"
    },
    "npm:rimraf@2.5.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@7.1.1",
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
    "npm:rx@4.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:semver@5.3.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:send@0.14.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "debug": "npm:debug@2.2.0",
      "depd": "npm:depd@1.1.0",
      "destroy": "npm:destroy@1.0.4",
      "encodeurl": "npm:encodeurl@1.0.1",
      "escape-html": "npm:escape-html@1.0.3",
      "etag": "npm:etag@1.7.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fresh": "npm:fresh@0.3.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http-errors": "npm:http-errors@1.5.1",
      "mime": "npm:mime@1.3.4",
      "ms": "npm:ms@0.7.1",
      "on-finished": "npm:on-finished@2.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "range-parser": "npm:range-parser@1.2.0",
      "statuses": "npm:statuses@1.3.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:send@0.14.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "debug": "npm:debug@2.2.0",
      "depd": "npm:depd@1.1.0",
      "destroy": "npm:destroy@1.0.4",
      "encodeurl": "npm:encodeurl@1.0.1",
      "escape-html": "npm:escape-html@1.0.3",
      "etag": "npm:etag@1.7.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fresh": "npm:fresh@0.3.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http-errors": "npm:http-errors@1.5.1",
      "mime": "npm:mime@1.3.4",
      "ms": "npm:ms@0.7.2",
      "on-finished": "npm:on-finished@2.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "range-parser": "npm:range-parser@1.2.0",
      "statuses": "npm:statuses@1.3.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:sentence-case@1.1.3": {
      "lower-case": "npm:lower-case@1.1.3"
    },
    "npm:serve-index@1.8.0": {
      "accepts": "npm:accepts@1.3.3",
      "batch": "npm:batch@0.5.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "debug": "npm:debug@2.2.0",
      "escape-html": "npm:escape-html@1.0.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http-errors": "npm:http-errors@1.5.1",
      "mime-types": "npm:mime-types@2.1.14",
      "parseurl": "npm:parseurl@1.3.1",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:serve-static@1.11.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "encodeurl": "npm:encodeurl@1.0.1",
      "escape-html": "npm:escape-html@1.0.3",
      "parseurl": "npm:parseurl@1.3.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "send": "npm:send@0.14.1",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:serve-static@1.11.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "encodeurl": "npm:encodeurl@1.0.1",
      "escape-html": "npm:escape-html@1.0.3",
      "parseurl": "npm:parseurl@1.3.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "send": "npm:send@0.14.2",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:server-destroy@1.0.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.2"
    },
    "npm:set-blocking@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:setimmediate@1.0.5": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sha.js@2.4.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.3",
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
    "npm:signal-exit@3.0.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sntp@1.0.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "dgram": "github:jspm/nodelibs-dgram@0.1.0",
      "dns": "github:jspm/nodelibs-dns@0.1.0",
      "hoek": "npm:hoek@2.16.3",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:socket.io-adapter@0.5.0": {
      "debug": "npm:debug@2.3.3",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "socket.io-parser": "npm:socket.io-parser@2.3.1"
    },
    "npm:socket.io-client@1.6.0": {
      "backo2": "npm:backo2@1.0.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "component-bind": "npm:component-bind@1.0.0",
      "component-emitter": "npm:component-emitter@1.2.1",
      "debug": "npm:debug@2.3.3",
      "engine.io-client": "npm:engine.io-client@1.8.0",
      "has-binary": "npm:has-binary@0.1.7",
      "indexof": "npm:indexof@0.0.1",
      "object-component": "npm:object-component@0.0.3",
      "parseuri": "npm:parseuri@0.0.5",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "socket.io-parser": "npm:socket.io-parser@2.3.1",
      "to-array": "npm:to-array@0.1.4"
    },
    "npm:socket.io-parser@2.3.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "component-emitter": "npm:component-emitter@1.1.2",
      "debug": "npm:debug@2.2.0",
      "isarray": "npm:isarray@0.0.1",
      "json3": "npm:json3@3.3.2"
    },
    "npm:socket.io@1.6.0": {
      "debug": "npm:debug@2.3.3",
      "engine.io": "npm:engine.io@1.8.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "has-binary": "npm:has-binary@0.1.7",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "object-assign": "npm:object-assign@4.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "socket.io-adapter": "npm:socket.io-adapter@0.5.0",
      "socket.io-client": "npm:socket.io-client@1.6.0",
      "socket.io-parser": "npm:socket.io-parser@2.3.1",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.5.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:spdx-correct@1.0.2": {
      "spdx-license-ids": "npm:spdx-license-ids@1.2.2"
    },
    "npm:spdx-expression-parse@1.0.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:spdx-license-ids@1.2.2": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:sshpk@1.10.2": {
      "asn1": "npm:asn1@0.2.3",
      "assert-plus": "npm:assert-plus@1.0.0",
      "bcrypt-pbkdf": "npm:bcrypt-pbkdf@1.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "dashdash": "npm:dashdash@1.14.1",
      "ecc-jsbn": "npm:ecc-jsbn@0.1.1",
      "getpass": "npm:getpass@0.1.6",
      "jodid25519": "npm:jodid25519@1.0.2",
      "jsbn": "npm:jsbn@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "tweetnacl": "npm:tweetnacl@0.14.5",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:statuses@1.3.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:stream-throttle@0.1.3": {
      "commander": "npm:commander@2.8.1",
      "limiter": "npm:limiter@1.1.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:string-width@1.0.2": {
      "code-point-at": "npm:code-point-at@1.1.0",
      "is-fullwidth-code-point": "npm:is-fullwidth-code-point@1.0.0",
      "strip-ansi": "npm:strip-ansi@3.0.1"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:stringstream@0.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:strip-ansi@3.0.1": {
      "ansi-regex": "npm:ansi-regex@2.1.1"
    },
    "npm:strip-bom@2.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "is-utf8": "npm:is-utf8@0.2.1"
    },
    "npm:strip-json-comments@1.0.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:supports-color@0.2.0": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:supports-color@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:tar-pack@3.3.0": {
      "debug": "npm:debug@2.2.0",
      "fstream": "npm:fstream@1.0.10",
      "fstream-ignore": "npm:fstream-ignore@1.0.5",
      "once": "npm:once@1.3.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.1.5",
      "rimraf": "npm:rimraf@2.5.4",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "tar": "npm:tar@2.2.1",
      "uid-number": "npm:uid-number@0.0.6",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:tar@2.2.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "block-stream": "npm:block-stream@0.0.9",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fstream": "npm:fstream@1.0.10",
      "inherits": "npm:inherits@2.0.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:tfunk@3.1.0": {
      "chalk": "npm:chalk@1.1.3",
      "object-path": "npm:object-path@0.9.2"
    },
    "npm:through@2.3.8": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:timers-browserify@1.4.2": {
      "process": "npm:process@0.11.9"
    },
    "npm:toastr@2.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:tough-cookie@2.3.2": {
      "net": "github:jspm/nodelibs-net@0.1.2",
      "punycode": "npm:punycode@1.4.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:tunnel-agent@0.4.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:type-check@0.3.2": {
      "prelude-ls": "npm:prelude-ls@1.1.2"
    },
    "npm:type-is@1.6.14": {
      "media-typer": "npm:media-typer@0.3.0",
      "mime-types": "npm:mime-types@2.1.14"
    },
    "npm:ua-parser-js@0.7.12": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:uglify-js@2.7.5": {
      "async": "npm:async@0.2.10",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.6",
      "uglify-to-browserify": "npm:uglify-to-browserify@1.0.2",
      "yargs": "npm:yargs@3.10.0"
    },
    "npm:uglify-to-browserify@1.0.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:uid-number@0.0.6": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ultron@1.0.2": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:uncontrollable@3.3.1": {
      "invariant": "npm:invariant@2.2.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@15.4.2"
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
      "os-homedir": "npm:os-homedir@1.0.2"
    },
    "npm:utf-8-validate@1.2.2": {
      "bindings": "npm:bindings@1.2.1",
      "nan": "npm:nan@2.4.0"
    },
    "npm:utf8@2.1.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:uuid@3.0.1": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:validate-npm-package-license@3.0.1": {
      "spdx-correct": "npm:spdx-correct@1.0.2",
      "spdx-expression-parse": "npm:spdx-expression-parse@1.0.4"
    },
    "npm:verror@1.3.6": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "extsprintf": "npm:extsprintf@1.0.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:warning@2.1.0": {
      "loose-envify": "npm:loose-envify@1.3.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:warning@3.0.0": {
      "loose-envify": "npm:loose-envify@1.3.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:weinre@2.0.0-pre-I0Z7U9OV": {
      "dns": "github:jspm/nodelibs-dns@0.1.0",
      "express": "npm:express@2.5.11",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "nopt": "npm:nopt@3.0.6",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "underscore": "npm:underscore@1.7.0"
    },
    "npm:wide-align@1.1.0": {
      "string-width": "npm:string-width@1.0.2"
    },
    "npm:window-size@0.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:window-size@0.1.4": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:window-size@0.2.0": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:wrap-ansi@2.1.0": {
      "string-width": "npm:string-width@1.0.2",
      "strip-ansi": "npm:strip-ansi@3.0.1"
    },
    "npm:write@0.2.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:ws@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "bufferutil": "npm:bufferutil@1.2.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "options": "npm:options@0.0.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "ultron": "npm:ultron@1.0.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "utf-8-validate": "npm:utf-8-validate@1.2.2",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:y18n@3.2.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:yargs-parser@4.2.1": {
      "camelcase": "npm:camelcase@3.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:yargs@3.10.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "camelcase": "npm:camelcase@1.2.1",
      "cliui": "npm:cliui@2.1.0",
      "decamelize": "npm:decamelize@1.2.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "window-size": "npm:window-size@0.1.0"
    },
    "npm:yargs@3.29.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "camelcase": "npm:camelcase@1.2.1",
      "cliui": "npm:cliui@3.2.0",
      "decamelize": "npm:decamelize@1.2.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os-locale": "npm:os-locale@1.4.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "window-size": "npm:window-size@0.1.4",
      "y18n": "npm:y18n@3.2.1"
    },
    "npm:yargs@6.4.0": {
      "camelcase": "npm:camelcase@3.0.0",
      "cliui": "npm:cliui@3.2.0",
      "decamelize": "npm:decamelize@1.2.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "get-caller-file": "npm:get-caller-file@1.0.2",
      "os-locale": "npm:os-locale@1.4.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "read-pkg-up": "npm:read-pkg-up@1.0.1",
      "require-directory": "npm:require-directory@2.1.1",
      "require-main-filename": "npm:require-main-filename@1.0.1",
      "set-blocking": "npm:set-blocking@2.0.0",
      "string-width": "npm:string-width@1.0.2",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "which-module": "npm:which-module@1.0.0",
      "window-size": "npm:window-size@0.2.0",
      "y18n": "npm:y18n@3.2.1",
      "yargs-parser": "npm:yargs-parser@4.2.1"
    }
  }
});
