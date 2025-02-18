
function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,_toPropertyKey(i.key),i)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_setPrototypeOf(e,t)}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _possibleConstructorReturn(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _createSuper(r){var i=_isNativeReflectConstruct();return function(){var e,t=_getPrototypeOf(r);return _possibleConstructorReturn(this,i?(e=_getPrototypeOf(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments))}}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return"symbol"==typeof t?t:String(t)}function _toPrimitive(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0===r)return("string"===t?String:Number)(e);r=r.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}

var config = {
  controlName: "phone-input",
  groupName: "Custom Controls",
  fallbackDisableSubmit: !1,
  description: "International phone number input with country code validation",
  version: "1.0",
  properties: {
    phoneNumber: {
      type: "string",
      title: "Phone Number",
      description: "Phone number with country code",
      maxLength: 20
    },
    countryCode: {
      type: "string",
      title: "Country Code",
      description: "Default country code",
      defaultValue: "+33"
    },
    allowedCountries: {
      type: "array",
      title: "Allowed Countries",
      description: "List of allowed country codes",
      defaultValue: ["+33", "+44", "+1", "+49", "+34", "+39"]
    }
  },
  events: ["ntx-value-change", "phone-validation-change"],
  standardProperties: {
    fieldLabel: !0,
    description: !0,
    defaultValue: !0,
    readOnly: !0,
    visibility: !0,
    validation: !0
  }
},
styles = [];

var PhoneInput = _decorate([e$1("phone-input")], function(i, n) {
  return {
    F: function() {
      _inherits(r, n);
      var t = _createSuper(r);
      function r() {
        var e;
        return _classCallCheck(this, r),
        e = t.call(this),
        i(_assertThisInitialized(e)),
        e.phoneNumber = "",
        e.countryCode = "+33",
        e.allowedCountries = ["+33", "+44", "+1", "+49", "+34", "+39"],
        e.isValid = !0,
        e.errorMessage = "",
        e
      }
      return _createClass(r)
    }(),
    d: [{
      kind: "field",
      static: !0,
      key: "getMetaConfig",
      value: function() {
        return function() {
          return config
        }
      }
    }, {
      kind: "field",
      static: !0,
      key: "styles",
      value: function() {
        return styles
      }
    }, {
      kind: "field",
      decorators: [e({type: String})],
      key: "phoneNumber",
      value: void 0
    }, {
      kind: "field",
      decorators: [e({type: String})],
      key: "countryCode",
      value: void 0
    }, {
      kind: "field",
      decorators: [e({type: Array})],
      key: "allowedCountries",
      value: void 0
    }, {
      kind: "method",
      key: "validatePhoneNumber",
      value: function(n, c) {
        var p = {
          "+33": /^\+33[1-9][0-9]{8}$/,
          "+44": /^\+44[1-9][0-9]{9}$/,
          "+1": /^\+1[2-9][0-9]{9}$/,
          "+49": /^\+49[1-9][0-9]{9}$/,
          "+34": /^\+34[6-9][0-9]{8}$/,
          "+39": /^\+39[3][0-9]{9}$/
        },
        t = p[c];
        if (!t) return this.isValid = !1, this.errorMessage = "Invalid country code", !1;
        var i = t.test(n);
        return this.isValid = i, this.errorMessage = i ? "" : "Invalid phone number format", i
      }
    }, {
      kind: "method",
      key: "render",
      value: function() {
        return x(_templateObject || (_templateObject = _taggedTemplateLiteral(['\
          <div class="phone-input-container">\
            <select class="country-select ', '">\
              ', '\
            </select>\
            <input type="tel" class="phone-input ', '" value="', '" placeholder="Enter phone number">\
          </div>\
          ', '\
        '])), 
        this.isValid ? "valid" : "invalid",
        this.allowedCountries.map(function(c) {
          return '<option value="' + c + '"' + (c === this.countryCode ? " selected" : "") + ">" + c + "</option>"
        }.bind(this)).join(""),
        this.isValid ? "valid" : "invalid",
        this.phoneNumber,
        this.errorMessage ? '<div class="error-message">' + this.errorMessage + "</div>" : "")
      }
    }]
  }
}, s);

export { PhoneInput };
