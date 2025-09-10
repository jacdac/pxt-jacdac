"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5914],{

/***/ 50542:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ FormControlLabel_FormControlLabel; }
});

// UNUSED EXPORTS: FormControlLabelRoot

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(94780);
// EXTERNAL MODULE: ./node_modules/@mui/material/FormControl/useFormControl.js
var useFormControl = __webpack_require__(74423);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(2658);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(98216);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(90948);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js
var useThemeProps = __webpack_require__(71657);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(1588);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(34867);
;// CONCATENATED MODULE: ./node_modules/@mui/material/FormControlLabel/formControlLabelClasses.js


function getFormControlLabelUtilityClasses(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiFormControlLabel', slot);
}
const formControlLabelClasses = (0,generateUtilityClasses/* default */.Z)('MuiFormControlLabel', ['root', 'labelPlacementStart', 'labelPlacementTop', 'labelPlacementBottom', 'disabled', 'label', 'error']);
/* harmony default export */ var FormControlLabel_formControlLabelClasses = (formControlLabelClasses);
// EXTERNAL MODULE: ./node_modules/@mui/material/FormControl/formControlState.js
var formControlState = __webpack_require__(15704);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/FormControlLabel/FormControlLabel.js


const _excluded = ["checked", "className", "componentsProps", "control", "disabled", "disableTypography", "inputRef", "label", "labelPlacement", "name", "onChange", "slotProps", "value"];














const useUtilityClasses = ownerState => {
  const {
    classes,
    disabled,
    labelPlacement,
    error
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', `labelPlacement${(0,capitalize/* default */.Z)(labelPlacement)}`, error && 'error'],
    label: ['label', disabled && 'disabled']
  };
  return (0,composeClasses/* default */.Z)(slots, getFormControlLabelUtilityClasses, classes);
};
const FormControlLabelRoot = (0,styled/* default */.ZP)('label', {
  name: 'MuiFormControlLabel',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${FormControlLabel_formControlLabelClasses.label}`]: styles.label
    }, styles.root, styles[`labelPlacement${(0,capitalize/* default */.Z)(ownerState.labelPlacement)}`]];
  }
})(({
  theme,
  ownerState
}) => (0,esm_extends/* default */.Z)({
  display: 'inline-flex',
  alignItems: 'center',
  cursor: 'pointer',
  // For correct alignment with the text.
  verticalAlign: 'middle',
  WebkitTapHighlightColor: 'transparent',
  marginLeft: -11,
  marginRight: 16,
  // used for row presentation of radio/checkbox
  [`&.${FormControlLabel_formControlLabelClasses.disabled}`]: {
    cursor: 'default'
  }
}, ownerState.labelPlacement === 'start' && {
  flexDirection: 'row-reverse',
  marginLeft: 16,
  // used for row presentation of radio/checkbox
  marginRight: -11
}, ownerState.labelPlacement === 'top' && {
  flexDirection: 'column-reverse',
  marginLeft: 16
}, ownerState.labelPlacement === 'bottom' && {
  flexDirection: 'column',
  marginLeft: 16
}, {
  [`& .${FormControlLabel_formControlLabelClasses.label}`]: {
    [`&.${FormControlLabel_formControlLabelClasses.disabled}`]: {
      color: (theme.vars || theme).palette.text.disabled
    }
  }
}));

/**
 * Drop-in replacement of the `Radio`, `Switch` and `Checkbox` component.
 * Use this component if you want to display an extra label.
 */
const FormControlLabel = /*#__PURE__*/react.forwardRef(function FormControlLabel(inProps, ref) {
  var _slotProps$typography;
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiFormControlLabel'
  });
  const {
      className,
      componentsProps = {},
      control,
      disabled: disabledProp,
      disableTypography,
      label: labelProp,
      labelPlacement = 'end',
      slotProps = {}
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);
  const muiFormControl = (0,useFormControl/* default */.Z)();
  let disabled = disabledProp;
  if (typeof disabled === 'undefined' && typeof control.props.disabled !== 'undefined') {
    disabled = control.props.disabled;
  }
  if (typeof disabled === 'undefined' && muiFormControl) {
    disabled = muiFormControl.disabled;
  }
  const controlProps = {
    disabled
  };
  ['checked', 'name', 'onChange', 'value', 'inputRef'].forEach(key => {
    if (typeof control.props[key] === 'undefined' && typeof props[key] !== 'undefined') {
      controlProps[key] = props[key];
    }
  });
  const fcs = (0,formControlState/* default */.Z)({
    props,
    muiFormControl,
    states: ['error']
  });
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    disabled,
    labelPlacement,
    error: fcs.error
  });
  const classes = useUtilityClasses(ownerState);
  const typographySlotProps = (_slotProps$typography = slotProps.typography) != null ? _slotProps$typography : componentsProps.typography;
  let label = labelProp;
  if (label != null && label.type !== Typography/* default */.Z && !disableTypography) {
    label = /*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, (0,esm_extends/* default */.Z)({
      component: "span"
    }, typographySlotProps, {
      className: (0,clsx_m/* default */.Z)(classes.label, typographySlotProps == null ? void 0 : typographySlotProps.className),
      children: label
    }));
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(FormControlLabelRoot, (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other, {
    children: [/*#__PURE__*/react.cloneElement(control, controlProps), label]
  }));
});
 false ? 0 : void 0;
/* harmony default export */ var FormControlLabel_FormControlLabel = (FormControlLabel);

/***/ }),

/***/ 89149:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Switch_Switch; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(94780);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(41796);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(98216);
// EXTERNAL MODULE: ./node_modules/@mui/material/internal/SwitchBase.js + 1 modules
var SwitchBase = __webpack_require__(32207);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js
var useThemeProps = __webpack_require__(71657);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(90948);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(1588);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(34867);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Switch/switchClasses.js


function getSwitchUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiSwitch', slot);
}
const switchClasses = (0,generateUtilityClasses/* default */.Z)('MuiSwitch', ['root', 'edgeStart', 'edgeEnd', 'switchBase', 'colorPrimary', 'colorSecondary', 'sizeSmall', 'sizeMedium', 'checked', 'disabled', 'input', 'thumb', 'track']);
/* harmony default export */ var Switch_switchClasses = (switchClasses);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Switch/Switch.js


const _excluded = ["className", "color", "edge", "size", "sx"];
// @inheritedComponent IconButton













const useUtilityClasses = ownerState => {
  const {
    classes,
    edge,
    size,
    color,
    checked,
    disabled
  } = ownerState;
  const slots = {
    root: ['root', edge && `edge${(0,capitalize/* default */.Z)(edge)}`, `size${(0,capitalize/* default */.Z)(size)}`],
    switchBase: ['switchBase', `color${(0,capitalize/* default */.Z)(color)}`, checked && 'checked', disabled && 'disabled'],
    thumb: ['thumb'],
    track: ['track'],
    input: ['input']
  };
  const composedClasses = (0,composeClasses/* default */.Z)(slots, getSwitchUtilityClass, classes);
  return (0,esm_extends/* default */.Z)({}, classes, composedClasses);
};
const SwitchRoot = (0,styled/* default */.ZP)('span', {
  name: 'MuiSwitch',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.edge && styles[`edge${(0,capitalize/* default */.Z)(ownerState.edge)}`], styles[`size${(0,capitalize/* default */.Z)(ownerState.size)}`]];
  }
})(({
  ownerState
}) => (0,esm_extends/* default */.Z)({
  display: 'inline-flex',
  width: 34 + 12 * 2,
  height: 14 + 12 * 2,
  overflow: 'hidden',
  padding: 12,
  boxSizing: 'border-box',
  position: 'relative',
  flexShrink: 0,
  zIndex: 0,
  // Reset the stacking context.
  verticalAlign: 'middle',
  // For correct alignment with the text.
  '@media print': {
    colorAdjust: 'exact'
  }
}, ownerState.edge === 'start' && {
  marginLeft: -8
}, ownerState.edge === 'end' && {
  marginRight: -8
}, ownerState.size === 'small' && {
  width: 40,
  height: 24,
  padding: 7,
  [`& .${Switch_switchClasses.thumb}`]: {
    width: 16,
    height: 16
  },
  [`& .${Switch_switchClasses.switchBase}`]: {
    padding: 4,
    [`&.${Switch_switchClasses.checked}`]: {
      transform: 'translateX(16px)'
    }
  }
}));
const SwitchSwitchBase = (0,styled/* default */.ZP)(SwitchBase/* default */.Z, {
  name: 'MuiSwitch',
  slot: 'SwitchBase',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.switchBase, {
      [`& .${Switch_switchClasses.input}`]: styles.input
    }, ownerState.color !== 'default' && styles[`color${(0,capitalize/* default */.Z)(ownerState.color)}`]];
  }
})(({
  theme
}) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 1,
  // Render above the focus ripple.
  color: theme.vars ? theme.vars.palette.Switch.defaultColor : `${theme.palette.mode === 'light' ? theme.palette.common.white : theme.palette.grey[300]}`,
  transition: theme.transitions.create(['left', 'transform'], {
    duration: theme.transitions.duration.shortest
  }),
  [`&.${Switch_switchClasses.checked}`]: {
    transform: 'translateX(20px)'
  },
  [`&.${Switch_switchClasses.disabled}`]: {
    color: theme.vars ? theme.vars.palette.Switch.defaultDisabledColor : `${theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600]}`
  },
  [`&.${Switch_switchClasses.checked} + .${Switch_switchClasses.track}`]: {
    opacity: 0.5
  },
  [`&.${Switch_switchClasses.disabled} + .${Switch_switchClasses.track}`]: {
    opacity: theme.vars ? theme.vars.opacity.switchTrackDisabled : `${theme.palette.mode === 'light' ? 0.12 : 0.2}`
  },
  [`& .${Switch_switchClasses.input}`]: {
    left: '-100%',
    width: '300%'
  }
}), ({
  theme,
  ownerState
}) => (0,esm_extends/* default */.Z)({
  '&:hover': {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : (0,colorManipulator/* alpha */.Fq)(theme.palette.action.active, theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  }
}, ownerState.color !== 'default' && {
  [`&.${Switch_switchClasses.checked}`]: {
    color: (theme.vars || theme).palette[ownerState.color].main,
    '&:hover': {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : (0,colorManipulator/* alpha */.Fq)(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    },
    [`&.${Switch_switchClasses.disabled}`]: {
      color: theme.vars ? theme.vars.palette.Switch[`${ownerState.color}DisabledColor`] : `${theme.palette.mode === 'light' ? (0,colorManipulator/* lighten */.$n)(theme.palette[ownerState.color].main, 0.62) : (0,colorManipulator/* darken */._j)(theme.palette[ownerState.color].main, 0.55)}`
    }
  },
  [`&.${Switch_switchClasses.checked} + .${Switch_switchClasses.track}`]: {
    backgroundColor: (theme.vars || theme).palette[ownerState.color].main
  }
}));
const SwitchTrack = (0,styled/* default */.ZP)('span', {
  name: 'MuiSwitch',
  slot: 'Track',
  overridesResolver: (props, styles) => styles.track
})(({
  theme
}) => ({
  height: '100%',
  width: '100%',
  borderRadius: 14 / 2,
  zIndex: -1,
  transition: theme.transitions.create(['opacity', 'background-color'], {
    duration: theme.transitions.duration.shortest
  }),
  backgroundColor: theme.vars ? theme.vars.palette.common.onBackground : `${theme.palette.mode === 'light' ? theme.palette.common.black : theme.palette.common.white}`,
  opacity: theme.vars ? theme.vars.opacity.switchTrack : `${theme.palette.mode === 'light' ? 0.38 : 0.3}`
}));
const SwitchThumb = (0,styled/* default */.ZP)('span', {
  name: 'MuiSwitch',
  slot: 'Thumb',
  overridesResolver: (props, styles) => styles.thumb
})(({
  theme
}) => ({
  boxShadow: (theme.vars || theme).shadows[1],
  backgroundColor: 'currentColor',
  width: 20,
  height: 20,
  borderRadius: '50%'
}));
const Switch = /*#__PURE__*/react.forwardRef(function Switch(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiSwitch'
  });
  const {
      className,
      color = 'primary',
      edge = false,
      size = 'medium',
      sx
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    color,
    edge,
    size
  });
  const classes = useUtilityClasses(ownerState);
  const icon = /*#__PURE__*/(0,jsx_runtime.jsx)(SwitchThumb, {
    className: classes.thumb,
    ownerState: ownerState
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(SwitchRoot, {
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    sx: sx,
    ownerState: ownerState,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SwitchSwitchBase, (0,esm_extends/* default */.Z)({
      type: "checkbox",
      icon: icon,
      checkedIcon: icon,
      ref: ref,
      ownerState: ownerState
    }, other, {
      classes: (0,esm_extends/* default */.Z)({}, classes, {
        root: classes.switchBase
      })
    })), /*#__PURE__*/(0,jsx_runtime.jsx)(SwitchTrack, {
      className: classes.track,
      ownerState: ownerState
    })]
  });
});
 false ? 0 : void 0;
/* harmony default export */ var Switch_Switch = (Switch);

/***/ }),

/***/ 32207:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ internal_SwitchBase; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(94780);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(98216);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(90948);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useControlled.js
var useControlled = __webpack_require__(49299);
// EXTERNAL MODULE: ./node_modules/@mui/material/FormControl/useFormControl.js
var useFormControl = __webpack_require__(74423);
// EXTERNAL MODULE: ./node_modules/@mui/material/ButtonBase/ButtonBase.js + 6 modules
var ButtonBase = __webpack_require__(76637);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(1588);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(34867);
;// CONCATENATED MODULE: ./node_modules/@mui/material/internal/switchBaseClasses.js


function getSwitchBaseUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('PrivateSwitchBase', slot);
}
const switchBaseClasses = (0,generateUtilityClasses/* default */.Z)('PrivateSwitchBase', ['root', 'checked', 'disabled', 'input', 'edgeStart', 'edgeEnd']);
/* harmony default export */ var internal_switchBaseClasses = ((/* unused pure expression or super */ null && (switchBaseClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/internal/SwitchBase.js


const _excluded = ["autoFocus", "checked", "checkedIcon", "className", "defaultChecked", "disabled", "disableFocusRipple", "edge", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"];













const useUtilityClasses = ownerState => {
  const {
    classes,
    checked,
    disabled,
    edge
  } = ownerState;
  const slots = {
    root: ['root', checked && 'checked', disabled && 'disabled', edge && `edge${(0,capitalize/* default */.Z)(edge)}`],
    input: ['input']
  };
  return (0,composeClasses/* default */.Z)(slots, getSwitchBaseUtilityClass, classes);
};
const SwitchBaseRoot = (0,styled/* default */.ZP)(ButtonBase/* default */.Z)(({
  ownerState
}) => (0,esm_extends/* default */.Z)({
  padding: 9,
  borderRadius: '50%'
}, ownerState.edge === 'start' && {
  marginLeft: ownerState.size === 'small' ? -3 : -12
}, ownerState.edge === 'end' && {
  marginRight: ownerState.size === 'small' ? -3 : -12
}));
const SwitchBaseInput = (0,styled/* default */.ZP)('input')({
  cursor: 'inherit',
  position: 'absolute',
  opacity: 0,
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
  zIndex: 1
});

/**
 * @ignore - internal component.
 */
const SwitchBase = /*#__PURE__*/react.forwardRef(function SwitchBase(props, ref) {
  const {
      autoFocus,
      checked: checkedProp,
      checkedIcon,
      className,
      defaultChecked,
      disabled: disabledProp,
      disableFocusRipple = false,
      edge = false,
      icon,
      id,
      inputProps,
      inputRef,
      name,
      onBlur,
      onChange,
      onFocus,
      readOnly,
      required = false,
      tabIndex,
      type,
      value
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);
  const [checked, setCheckedState] = (0,useControlled/* default */.Z)({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: 'SwitchBase',
    state: 'checked'
  });
  const muiFormControl = (0,useFormControl/* default */.Z)();
  const handleFocus = event => {
    if (onFocus) {
      onFocus(event);
    }
    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    }
  };
  const handleBlur = event => {
    if (onBlur) {
      onBlur(event);
    }
    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    }
  };
  const handleInputChange = event => {
    // Workaround for https://github.com/facebook/react/issues/9023
    if (event.nativeEvent.defaultPrevented) {
      return;
    }
    const newChecked = event.target.checked;
    setCheckedState(newChecked);
    if (onChange) {
      // TODO v6: remove the second argument.
      onChange(event, newChecked);
    }
  };
  let disabled = disabledProp;
  if (muiFormControl) {
    if (typeof disabled === 'undefined') {
      disabled = muiFormControl.disabled;
    }
  }
  const hasLabelFor = type === 'checkbox' || type === 'radio';
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    checked,
    disabled,
    disableFocusRipple,
    edge
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(SwitchBaseRoot, (0,esm_extends/* default */.Z)({
    component: "span",
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    centerRipple: true,
    focusRipple: !disableFocusRipple,
    disabled: disabled,
    tabIndex: null,
    role: undefined,
    onFocus: handleFocus,
    onBlur: handleBlur,
    ownerState: ownerState,
    ref: ref
  }, other, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SwitchBaseInput, (0,esm_extends/* default */.Z)({
      autoFocus: autoFocus,
      checked: checkedProp,
      defaultChecked: defaultChecked,
      className: classes.input,
      disabled: disabled,
      id: hasLabelFor && id,
      name: name,
      onChange: handleInputChange,
      readOnly: readOnly,
      ref: inputRef,
      required: required,
      ownerState: ownerState,
      tabIndex: tabIndex,
      type: type
    }, type === 'checkbox' && value === undefined ? {} : {
      value
    }, inputProps)), checked ? checkedIcon : icon]
  }));
});

// NB: If changed, please update Checkbox, Switch and Radio
// so that the API documentation is updated.
 false ? 0 : void 0;
/* harmony default export */ var internal_SwitchBase = (SwitchBase);

/***/ }),

/***/ 44020:
/***/ (function(module) {


var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp(token, 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return decodeURIComponent(components.join(''));
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher);

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher);
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

module.exports = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};


/***/ }),

/***/ 92806:
/***/ (function(module) {


module.exports = function (obj, predicate) {
	var ret = {};
	var keys = Object.keys(obj);
	var isArr = Array.isArray(predicate);

	for (var i = 0; i < keys.length; i++) {
		var key = keys[i];
		var val = obj[key];

		if (isArr ? predicate.indexOf(key) !== -1 : predicate(key, val, obj)) {
			ret[key] = val;
		}
	}

	return ret;
};


/***/ }),

/***/ 38846:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": function() { return /* binding */ keyCodeFromEvent; },
/* harmony export */   "Z": function() { return /* binding */ useFireKey; }
/* harmony export */ });
var ENTER_KEY=13;var SPACE_KEY=32;function keyCodeFromEvent(e){return typeof e.which=="number"?e.which:e.keyCode;}function useFireKey(handler){if(!handler)return undefined;return e=>{var charCode=keyCodeFromEvent(e);if(charCode===ENTER_KEY||charCode===SPACE_KEY){e.preventDefault();handler();}};}

/***/ }),

/***/ 27761:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tL": function() { return /* binding */ tL; },
/* harmony export */   "Q": function() { return /* binding */ translateServer; }
/* harmony export */ });
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17563);
var translations={en:{active:"active",inactive:"inactive",on:"on",off:"off",red:"red",yellow:"yellow",green:"green",orange:"orange",text:"text",intensity:"intensity",clearDisplay:"clear the entire display",vibrate:"vibrate",vibrationPattern:"vibration pattern",sendVibPattern:"send vibration pattern",patternVibrations:"Pattern of vibrations",patternTooLong:"Pattern too long",maximum:"maximum",pressVibrate:"Press VIBRATE to enable sound playback.",clickActivateSounds:"Click to activate sounds",simulators:"Simulators",devices:"Devices",autoStart:"Auto start",startSimulator:"Start simulator",startAsimulator:"Start a simulator",clearSimulators:"clear simulators",filterSimulators:"filter simulators",blockAdd:"Add blocks",blockEnabled:"Add blocks for your connected and simulated devices to the modules drawer",blockDisabled:"This button becomes available if you have devices connected that don't have their matching blocks added to the 'Modules' drawer",simAdd:"Add simulators",simEnabled:"Create a simulator for each Role without an assigned device",simDisabled:"This button becomes available if there are Roles without assignable devices"},de:{active:"aktiv",inactive:"inaktiv",on:"an",off:"aus",red:"rot",yellow:"gelb",green:"grün",orange:"orange",text:"Text",intensity:"Intensität",clearDisplay:"Anzeige löschen",vibrate:"vibrieren",vibrationPattern:"Vibrationsmuster",sendVibPattern:"Vibrationsmuster senden",patternVibrations:"Muster der Vibrationen",patternTooLong:"Muster zu lang",maximum:"Maximum",pressVibrate:"Drücke VIBRIEREN, um die Soundwiedergabe zu aktivieren.",clickActivateSounds:"Klicke, um Sounds zu aktivieren",simulators:"Simulatoren",devices:"Geräte",autoStart:"Automatisch starten",startSimulator:"Simulator starten",startAsimulator:"Einen Simulator starten",clearSimulators:"Simulatoren löschen",filterSimulators:"Simulatoren filtern",blockAdd:"Blöcke hinzufügen",blockEnabled:"Füge Blöcke für die verbundenen und simulierten Geräte zur Modulauswahl hinzu",blockDisabled:"Diese Schaltfläche wird verfügbar, wenn Geräte verbunden sind, für die noch keine passenden Blöcke in der 'Module'-Leiste hinzugefügt wurden",simAdd:"Simulatoren hinzufügen",simEnabled:"Erstelle einen Simulator für jede Rolle ohne zugewiesenes Gerät",simDisabled:"Diese Schaltfläche wird verfügbar, wenn es Rollen ohne zuweisbare Geräte gibt"}};function getLang(){var qs=query_string__WEBPACK_IMPORTED_MODULE_0__.parse(location.search);if(qs.language&&typeof qs.language==="string")return qs.language;var lang=typeof navigator!=="undefined"?navigator.language.slice(0,2):"en";return lang;}function tL(key){var _translations$lang;var lang=getLang();return((_translations$lang=translations[lang])===null||_translations$lang===void 0?void 0:_translations$lang[key])||translations.en[key];}var translate_servers={de:{accelerometer:"Beschleunigungssensor","humidity + temperature":"Feuchtigkeit + Temperatur","vibration motor":"Vibrationsmotor",button:"Knopf",color:"Farbe","eCO₂":"eCO₂","electrical conductivity":"elektrische Leitfähigkeit","cursor character screen (LCD, 16x2)":"Cursor-Zeichenbildschirm (LCD, 16x2)","rotations per minute":"Umdrehungen pro Minute","light level (solar)":"Lichtstärke (solar)","magnetic field level":"Magnetfeldstärke",power:"Stromversorgung","relay (EM/10A)":"Relais (EM/10A)","water pump (relay)":"Wasserpumpe (Relais)","LED ring 8 pixels":"LED-Ring 8 Pixel","LED pixel strip 30":"LED-Pixelstreifen 30","LED pixel strip 60":"LED-Pixelstreifen 60","LED pixel strip 150":"LED-Pixelstreifen 150","LED pixel strip 300":"LED-Pixelstreifen 300","rotary encoder + button":"Drehgeber + Knopf",servo:"Servo","servo (270°)":"Servo (270°)","servo (360°)":"Servo (360°)","servo (continuous)":"Servo (kontinuierlich)","rotary potentiometer":"Drehpotentiometer","slider (potentiometer)":"Schieberegler (Potentiometer)","Hall sensor (potentiometer)":"Hallsensor (Potentiometer)","distance (sonar)":"Entfernung (Ultraschall)","DC current/voltage measurement":"Gleichstrom-/Spannungsmessung","light bulb":"Glühbirne","line sensor (3x digital)":"Liniensensor (3x digital)","soil moisture":"Bodenfeuchtigkeit","water acidity (pH)":"Wasser-Säuregehalt (pH)","thermometer (outdoor)":"Thermometer (außen)","thermometer (soil)":"Thermometer (Boden)","thermometer (medical)":"Thermometer (medizinisch)",buzzer:"Summer",motion:"Bewegung","UV index":"UV-Index","light bulb (dimmeable)":"Glühbirne (dimmbar)"}};function translateServer(name){var lang=getLang();if(lang==="en")return name;if(translate_servers[lang]){return translate_servers[lang][name]||name;}return name;}

/***/ }),

/***/ 68320:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ SwitchWithLabel; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63366);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50542);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89149);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
var _excluded=["label","labelPlacement","labelStyle"];function SwitchWithLabel(props){var{label,labelPlacement,labelStyle}=props,rest=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(props,_excluded);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{control:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,rest),label:label,style:labelStyle,labelPlacement:labelPlacement});}

/***/ }),

/***/ 63634:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": function() { return /* binding */ useUnitConverters; },
/* harmony export */   "Z": function() { return /* binding */ useUnitConverter; }
/* harmony export */ });
/* harmony import */ var _jacdac_ts_src_jdom_pretty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34743);
/* harmony import */ var _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10431);
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../../jacdac-ts/jacdac-spec/spectool/jdspec.d.ts" />
var adapters={"°C":{"°C":v=>v,"°F":v=>9/5*v+32},"/":{"/":v=>v,"%":v=>v*100},A:{A:v=>v,mA:v=>1000*v}};var inverters={"°F":{"°C":v=>(v-32)*5/9},"%":{"/":v=>v/100},mA:{A:v=>v/1000}};function useUnitConverters(){var[settings,setSettings]=(0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)("jacdac:unitconverters",{});return{converters:Object.keys(adapters).map(unit=>({unit,name:settings[unit]||unit,names:Object.keys(adapters[unit])})),setConverter:(unit,name)=>{var newSettings=Object.assign({},settings);newSettings[unit]=name;setSettings(newSettings);}};}var identity=v=>v;function useUnitConverter(unit){var _inverters$name;if(!unit)return{converter:v=>v,inverter:v=>v};var[settings]=(0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)("jacdac:unitconverters",{"/":"%",A:"mA"});var adapter=adapters[unit];if(!adapter)return{name:(0,_jacdac_ts_src_jdom_pretty__WEBPACK_IMPORTED_MODULE_0__/* .prettyUnit */ .QP)(unit),converter:v=>v,inverter:v=>v};var names=Object.keys(adapter);var name=settings[unit]||names[0];var converter=adapter[name]||identity;var inverter=((_inverters$name=inverters[name])===null||_inverters$name===void 0?void 0:_inverters$name[unit])||identity;return{name,converter,inverter,names};}

/***/ }),

/***/ 17563:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


const strictUriEncode = __webpack_require__(70610);
const decodeComponent = __webpack_require__(44020);
const splitOnFirst = __webpack_require__(80500);
const filterObject = __webpack_require__(92806);

const isNullOrUndefined = value => value === null || value === undefined;

function encoderForArrayFormat(options) {
	switch (options.arrayFormat) {
		case 'index':
			return key => (result, value) => {
				const index = result.length;

				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[', index, ']'].join('')];
				}

				return [
					...result,
					[encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('')
				];
			};

		case 'bracket':
			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[]'].join('')];
				}

				return [...result, [encode(key, options), '[]=', encode(value, options)].join('')];
			};

		case 'comma':
		case 'separator':
			return key => (result, value) => {
				if (value === null || value === undefined || value.length === 0) {
					return result;
				}

				if (result.length === 0) {
					return [[encode(key, options), '=', encode(value, options)].join('')];
				}

				return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
			};

		default:
			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, encode(key, options)];
				}

				return [...result, [encode(key, options), '=', encode(value, options)].join('')];
			};
	}
}

function parserForArrayFormat(options) {
	let result;

	switch (options.arrayFormat) {
		case 'index':
			return (key, value, accumulator) => {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return (key, value, accumulator) => {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		case 'comma':
		case 'separator':
			return (key, value, accumulator) => {
				const isArray = typeof value === 'string' && value.includes(options.arrayFormatSeparator);
				const isEncodedArray = (typeof value === 'string' && !isArray && decode(value, options).includes(options.arrayFormatSeparator));
				value = isEncodedArray ? decode(value, options) : value;
				const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map(item => decode(item, options)) : value === null ? value : decode(value, options);
				accumulator[key] = newValue;
			};

		default:
			return (key, value, accumulator) => {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function validateArrayFormatSeparator(value) {
	if (typeof value !== 'string' || value.length !== 1) {
		throw new TypeError('arrayFormatSeparator must be single character string');
	}
}

function encode(value, options) {
	if (options.encode) {
		return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function decode(value, options) {
	if (options.decode) {
		return decodeComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	}

	if (typeof input === 'object') {
		return keysSorter(Object.keys(input))
			.sort((a, b) => Number(a) - Number(b))
			.map(key => input[key]);
	}

	return input;
}

function removeHash(input) {
	const hashStart = input.indexOf('#');
	if (hashStart !== -1) {
		input = input.slice(0, hashStart);
	}

	return input;
}

function getHash(url) {
	let hash = '';
	const hashStart = url.indexOf('#');
	if (hashStart !== -1) {
		hash = url.slice(hashStart);
	}

	return hash;
}

function extract(input) {
	input = removeHash(input);
	const queryStart = input.indexOf('?');
	if (queryStart === -1) {
		return '';
	}

	return input.slice(queryStart + 1);
}

function parseValue(value, options) {
	if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === 'string' && value.trim() !== '')) {
		value = Number(value);
	} else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
		value = value.toLowerCase() === 'true';
	}

	return value;
}

function parse(query, options) {
	options = Object.assign({
		decode: true,
		sort: true,
		arrayFormat: 'none',
		arrayFormatSeparator: ',',
		parseNumbers: false,
		parseBooleans: false
	}, options);

	validateArrayFormatSeparator(options.arrayFormatSeparator);

	const formatter = parserForArrayFormat(options);

	// Create an object with no prototype
	const ret = Object.create(null);

	if (typeof query !== 'string') {
		return ret;
	}

	query = query.trim().replace(/^[?#&]/, '');

	if (!query) {
		return ret;
	}

	for (const param of query.split('&')) {
		if (param === '') {
			continue;
		}

		let [key, value] = splitOnFirst(options.decode ? param.replace(/\+/g, ' ') : param, '=');

		// Missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		value = value === undefined ? null : ['comma', 'separator'].includes(options.arrayFormat) ? value : decode(value, options);
		formatter(decode(key, options), value, ret);
	}

	for (const key of Object.keys(ret)) {
		const value = ret[key];
		if (typeof value === 'object' && value !== null) {
			for (const k of Object.keys(value)) {
				value[k] = parseValue(value[k], options);
			}
		} else {
			ret[key] = parseValue(value, options);
		}
	}

	if (options.sort === false) {
		return ret;
	}

	return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
		const value = ret[key];
		if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
			// Sort object keys, not values
			result[key] = keysSorter(value);
		} else {
			result[key] = value;
		}

		return result;
	}, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = (object, options) => {
	if (!object) {
		return '';
	}

	options = Object.assign({
		encode: true,
		strict: true,
		arrayFormat: 'none',
		arrayFormatSeparator: ','
	}, options);

	validateArrayFormatSeparator(options.arrayFormatSeparator);

	const shouldFilter = key => (
		(options.skipNull && isNullOrUndefined(object[key])) ||
		(options.skipEmptyString && object[key] === '')
	);

	const formatter = encoderForArrayFormat(options);

	const objectCopy = {};

	for (const key of Object.keys(object)) {
		if (!shouldFilter(key)) {
			objectCopy[key] = object[key];
		}
	}

	const keys = Object.keys(objectCopy);

	if (options.sort !== false) {
		keys.sort(options.sort);
	}

	return keys.map(key => {
		const value = object[key];

		if (value === undefined) {
			return '';
		}

		if (value === null) {
			return encode(key, options);
		}

		if (Array.isArray(value)) {
			return value
				.reduce(formatter(key), [])
				.join('&');
		}

		return encode(key, options) + '=' + encode(value, options);
	}).filter(x => x.length > 0).join('&');
};

exports.parseUrl = (url, options) => {
	options = Object.assign({
		decode: true
	}, options);

	const [url_, hash] = splitOnFirst(url, '#');

	return Object.assign(
		{
			url: url_.split('?')[0] || '',
			query: parse(extract(url), options)
		},
		options && options.parseFragmentIdentifier && hash ? {fragmentIdentifier: decode(hash, options)} : {}
	);
};

exports.stringifyUrl = (object, options) => {
	options = Object.assign({
		encode: true,
		strict: true
	}, options);

	const url = removeHash(object.url).split('?')[0] || '';
	const queryFromUrl = exports.extract(object.url);
	const parsedQueryFromUrl = exports.parse(queryFromUrl, {sort: false});

	const query = Object.assign(parsedQueryFromUrl, object.query);
	let queryString = exports.stringify(query, options);
	if (queryString) {
		queryString = `?${queryString}`;
	}

	let hash = getHash(object.url);
	if (object.fragmentIdentifier) {
		hash = `#${encode(object.fragmentIdentifier, options)}`;
	}

	return `${url}${queryString}${hash}`;
};

exports.pick = (input, filter, options) => {
	options = Object.assign({
		parseFragmentIdentifier: true
	}, options);

	const {url, query, fragmentIdentifier} = exports.parseUrl(input, options);
	return exports.stringifyUrl({
		url,
		query: filterObject(query, filter),
		fragmentIdentifier
	}, options);
};

exports.exclude = (input, filter, options) => {
	const exclusionFilter = Array.isArray(filter) ? key => !filter.includes(key) : (key, value) => !filter(key, value);

	return exports.pick(input, exclusionFilter, options);
};


/***/ }),

/***/ 80500:
/***/ (function(module) {



module.exports = (string, separator) => {
	if (!(typeof string === 'string' && typeof separator === 'string')) {
		throw new TypeError('Expected the arguments to be of type `string`');
	}

	if (separator === '') {
		return [string];
	}

	const separatorIndex = string.indexOf(separator);

	if (separatorIndex === -1) {
		return [string];
	}

	return [
		string.slice(0, separatorIndex),
		string.slice(separatorIndex + separator.length)
	];
};


/***/ }),

/***/ 70610:
/***/ (function(module) {


module.exports = str => encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);


/***/ })

}]);
//# sourceMappingURL=fb2b01b89c8fca081f6d41855fe2a02f68bf048b-d0c7d781dbabc6e0c44e.js.map