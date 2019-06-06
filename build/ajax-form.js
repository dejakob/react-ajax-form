"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _apiFetch = _interopRequireDefault(require("./api-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Ajax form
 * 
 * @example
 *  <AjaxForm
 *    action="/create"
 *    method="POST"
 *  />
 */
var AjaxForm =
/*#__PURE__*/
function (_Component) {
  _inherits(AjaxForm, _Component);

  function AjaxForm() {
    var _this;

    _classCallCheck(this, AjaxForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AjaxForm).call(this));
    _this.form = null;
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AjaxForm, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        success: false,
        fail: false,
        response: null
      });
    }
  }, {
    key: "handleSubmit",
    value: function () {
      var _handleSubmit = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(eventData) {
        var formData, methodName, method, response, props, successState, _props, failState;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                eventData.preventDefault();
                this.form = eventData.target;

                if (typeof this.props.onSubmit === 'function') {
                  this.props.onSubmit(eventData);
                }

                if (!this.props.disabled) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", false);

              case 5:
                formData = this.formData;
                _context.prev = 6;
                methodName = (this.props.method || 'GET').toLowerCase();
                method = _apiFetch["default"][methodName];

                if (!(typeof method !== 'function')) {
                  _context.next = 11;
                  break;
                }

                throw new Error('AjaxForm: method ' + methodName + ' not supported');

              case 11:
                _context.next = 13;
                return method(this.props.action, formData);

              case 13:
                response = _context.sent;
                props = {
                  request: formData,
                  response: response
                };
                successState = typeof this.props.onSuccess === 'function' && this.props.onSuccess(props);
                this.setState({
                  success: successState
                });
                _context.next = 24;
                break;

              case 19:
                _context.prev = 19;
                _context.t0 = _context["catch"](6);
                _props = {
                  request: formData,
                  response: _context.t0
                };
                failState = typeof this.props.onFail === 'function' && this.props.onFail(_props);
                this.setState({
                  fail: failState
                });

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[6, 19]]);
      }));

      function handleSubmit(_x) {
        return _handleSubmit.apply(this, arguments);
      }

      return handleSubmit;
    }()
  }, {
    key: "render",
    value: function render() {
      if (this.state.success) {
        return this.state.success;
      }

      return _react["default"].createElement(_react["default"].Fragment, null, this.state.fail || null, _react["default"].createElement("form", {
        action: this.props.action,
        method: this.props.method,
        onSubmit: this.handleSubmit,
        className: this.props.className,
        style: this.props.style
      }, this.props.children));
    }
  }, {
    key: "formData",
    get: function get() {
      var data = {};

      if (typeof this.props.additionalData === 'function') {
        data = this.props.additionalData();
      } else if (_typeof(this.props.additionalData) === 'object' && this.props.additionalData !== null) {
        data = _objectSpread({}, this.props.additionalData);
      }

      if (this.form) {
        _toConsumableArray(this.form.querySelectorAll('[name]')).forEach(function (field) {
          if (field.getAttribute('type') === 'checkbox') {
            data[field.getAttribute('name')] = !!field.checked;
          } else {
            data[field.getAttribute('name')] = field.value;
          }
        });
      }

      return data;
    }
  }]);

  return AjaxForm;
}(_react.Component);

AjaxForm.propTypes = {
  action: _propTypes["default"].string,
  method: _propTypes["default"].string,
  additionalData: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func]),
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node]).isRequired,
  onSubmit: _propTypes["default"].func,
  onSuccess: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
  onFail: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func])
};
AjaxForm.defaultProps = {
  action: '/',
  method: 'GET'
};
var _default = AjaxForm;
exports["default"] = _default;