"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setAuthToken = setAuthToken;
exports.intercept = exports["default"] = void 0;

var _ajaxForm = _interopRequireDefault(require("./ajax-form"));

var _apiFetch = _interopRequireDefault(require("./api-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var intercept = _apiFetch["default"].intercept;
/**
 * Set authentication token (for authenticated requests)
 */

exports.intercept = intercept;

function setAuthToken(authToken) {
  _apiFetch["default"].authenticationToken = authToken;
}

var _default = _ajaxForm["default"];
exports["default"] = _default;