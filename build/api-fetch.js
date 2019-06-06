"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var token = null;
var interceptors = [];
/**
 * Get fetch headers
 * @returns {Object}
 */

function getHeaders() {
  var headers = {
    'content-type': 'application/json'
  };

  if (token !== null) {
    headers.authorization = "Bearer ".concat(token);
  }

  return headers;
}
/**
 * GET anonymous ajax request
 * @param {String} url 
 * @returns {Promise.<Object>}
 */


function get(_x) {
  return _get.apply(this, arguments);
}
/**
 * POST ajax request
 * @param {String} url 
 * @param {Object} params 
 * @returns {Promise.<Object>}
 */


function _get() {
  _get = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(url) {
    var response, jsonResponse;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            runAllInterceptors(url, 'get');
            _context.next = 7;
            break;

          case 4:
            _context.prev = 4;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", _context.t0.response || {});

          case 7:
            _context.next = 9;
            return fetch(url, {
              method: 'GET',
              headers: getHeaders()
            });

          case 9:
            response = _context.sent;
            _context.next = 12;
            return response.json();

          case 12:
            jsonResponse = _context.sent;

            if (!(response.status >= 400)) {
              _context.next = 15;
              break;
            }

            throw jsonResponse;

          case 15:
            return _context.abrupt("return", jsonResponse);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 4]]);
  }));
  return _get.apply(this, arguments);
}

function post(_x2, _x3) {
  return _post.apply(this, arguments);
}
/**
 * POST file over ajax
 * @param {String} url 
 * @param {Object} formData 
 * @returns {Promise.<Object>}
 */


function _post() {
  _post = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(url, params) {
    var response, jsonResponse;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            runAllInterceptors(url, 'post', params);
            _context2.next = 7;
            break;

          case 4:
            _context2.prev = 4;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", _context2.t0.response || {});

          case 7:
            _context2.next = 9;
            return fetch(url, {
              method: 'POST',
              headers: getHeaders(),
              body: JSON.stringify(params)
            });

          case 9:
            response = _context2.sent;
            _context2.next = 12;
            return response.json();

          case 12:
            jsonResponse = _context2.sent;

            if (!(response.status >= 400)) {
              _context2.next = 15;
              break;
            }

            throw jsonResponse;

          case 15:
            return _context2.abrupt("return", jsonResponse);

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 4]]);
  }));
  return _post.apply(this, arguments);
}

function postFile(_x4, _x5) {
  return _postFile.apply(this, arguments);
}
/**
 * PATCH ajax request
 * @param {String} url 
 * @param {Object} params 
 * @returns {Promise.<Object>}
 */


function _postFile() {
  _postFile = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(url, formData) {
    var response, jsonResponse;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            runAllInterceptors(url, 'postFile', formData);
            _context3.next = 7;
            break;

          case 4:
            _context3.prev = 4;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", _context3.t0.response || {});

          case 7:
            _context3.next = 9;
            return fetch(url, {
              method: 'POST',
              headers: getHeaders(),
              body: formData
            });

          case 9:
            response = _context3.sent;
            _context3.next = 12;
            return response.json();

          case 12:
            jsonResponse = _context3.sent;

            if (!(response.status >= 400)) {
              _context3.next = 15;
              break;
            }

            throw jsonResponse;

          case 15:
            return _context3.abrupt("return", jsonResponse);

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 4]]);
  }));
  return _postFile.apply(this, arguments);
}

function patch(_x6, _x7) {
  return _patch.apply(this, arguments);
}
/**
 * DELETE ajax request
 * @param {String} url 
 * @param {Object} params 
 * @returns {Promise.<Object>}
 */


function _patch() {
  _patch = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(url, params) {
    var response, jsonResponse;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            runAllInterceptors(url, 'patch', params);
            _context4.next = 7;
            break;

          case 4:
            _context4.prev = 4;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", _context4.t0.response || {});

          case 7:
            _context4.next = 9;
            return fetch(url, {
              method: 'PATCH',
              headers: getHeaders(),
              body: JSON.stringify(params)
            });

          case 9:
            response = _context4.sent;
            _context4.next = 12;
            return response.json();

          case 12:
            jsonResponse = _context4.sent;

            if (!(response.status >= 400)) {
              _context4.next = 15;
              break;
            }

            throw jsonResponse;

          case 15:
            return _context4.abrupt("return", jsonResponse);

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 4]]);
  }));
  return _patch.apply(this, arguments);
}

function del(_x8) {
  return _del.apply(this, arguments);
}
/**
 * Intercept a request that is handled with this service
 * @param {RegExp|String} url 
 * @param {String} method 
 * @param {Function} handler 
 */


function _del() {
  _del = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(url) {
    var params,
        response,
        jsonResponse,
        _args5 = arguments;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            params = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : {};
            _context5.prev = 1;
            runAllInterceptors(url, 'delete', params);
            _context5.next = 8;
            break;

          case 5:
            _context5.prev = 5;
            _context5.t0 = _context5["catch"](1);
            return _context5.abrupt("return", _context5.t0.response || {});

          case 8:
            _context5.next = 10;
            return fetch(url, {
              method: 'DELETE',
              headers: getHeaders(),
              body: JSON.stringify(params)
            });

          case 10:
            response = _context5.sent;
            _context5.next = 13;
            return response.json();

          case 13:
            jsonResponse = _context5.sent;

            if (!(response.status >= 400)) {
              _context5.next = 16;
              break;
            }

            throw jsonResponse;

          case 16:
            return _context5.abrupt("return", jsonResponse);

          case 17:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 5]]);
  }));
  return _del.apply(this, arguments);
}

function intercept(url, method, handler) {
  var urlRegex = typeof url === 'string' ? new RegExp(url) : url;
  interceptors.push({
    method: method,
    urlRegex: urlRegex,
    handler: handler
  });
}

function runAllInterceptors(url, method) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  interceptors.forEach(function (interceptor) {
    if ((!method || method.toLowerCase() === interceptor.method.toLowerCase()) && url.match(interceptor.urlRegex) && typeof interceptor.handler === 'function') {
      interceptor.handler({
        params: params,
        overrideResponse: function overrideResponse(response) {
          var error = new Error('INTERCEPT_BREAK');
          error.response = response;
          throw error;
        }
      });
    }
  });
}

var _default = {
  get: get,
  post: post,
  postFile: postFile,
  patch: patch,
  "delete": del,
  intercept: intercept,

  set authenticationToken(value) {
    token = value;
  }

};
exports["default"] = _default;