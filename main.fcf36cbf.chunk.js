(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(22);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(10);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./src/css/normalize.css
var normalize = __webpack_require__(98);

// EXTERNAL MODULE: ./src/css/colors.css
var colors = __webpack_require__(99);

// EXTERNAL MODULE: ./src/css/fonts.css
var fonts = __webpack_require__(100);

// EXTERNAL MODULE: ./src/css/main.css
var main = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/papaparse/papaparse.min.js
var papaparse_min = __webpack_require__(62);
var papaparse_min_default = /*#__PURE__*/__webpack_require__.n(papaparse_min);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(102);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.sub.js
var es_string_sub = __webpack_require__(109);

// EXTERNAL MODULE: ./src/js/BigNum/BigNum.css
var BigNum = __webpack_require__(112);

// CONCATENATED MODULE: ./src/js/BigNum/BigNum.js











var init = /*#__PURE__*/function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(data) {
    var string, el;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            string = '';
            el = document.getElementById('big-num-container');
            data.forEach(function (d, i) {
              string += createBigNumString(d.num, d.sub, d.date);
            });
            el.innerHTML = string;

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function init(_x) {
    return _ref.apply(this, arguments);
  };
}(); // TEMPLATE


function createBigNumString(num, sub, date) {
  return "\n\t\t<div class=\"big-num\">\n\t\t\t<h2 class=\"num ".concat(sub, "\">").concat(numberWithCommas(num), "</h2>\n\t\t\t<p class=\"sub\">").concat(sub, "</p>\n\t\t\t<p class=\"date\">as of ").concat(date, "</p>\n\t\t</div>\n\t");
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/* harmony default export */ var BigNum_BigNum = ({
  init: init
});
// CONCATENATED MODULE: ./src/index.js







// CSS



 // JS


 // VARS

var dataObj;
var url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRX2X9TkSNhMcia10m3SPMQA_OvW9myF3orsHOhg2Wu5KQRPCodKaWAiTAnIAHuVfTIuesM0wCGm4mB/pub?gid=769966488&single=true&output=csv'; //

var src_init = /*#__PURE__*/function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            papaparse_min_default.a.parse(url, {
              download: true,
              header: true,
              complete: function complete(res) {
                // get the latest week of data
                var data = res.data[res.data.length - 1];
                console.log(data); // prep data for BigNum componenet

                var stats = [{
                  sub: 'icu',
                  num: data.icu,
                  date: data.last_update
                }, {
                  sub: 'hospitalized',
                  num: data.hospitalized,
                  date: data.last_update
                }, {
                  sub: 'deaths',
                  num: data.deaths,
                  date: data.week_end
                }];
                dataObj = data;
                dataObj.stats = stats; // show it!

                update();
              }
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function init() {
    return _ref.apply(this, arguments);
  };
}();
/*
*
* FUNCTIONS
*
*/


function update() {
  // header & footer copy
  updateHeader(dataObj);
  updateFooter(dataObj); // update the stats

  BigNum_BigNum.init(dataObj.stats);
}

function updateHeader(data) {
  var el = document.getElementById('header');
  el.innerHTML = "<p class=\"header-copy\">COVID-19 figures for the week ending ".concat(data.last_update, ":</p>");
}

function updateFooter(data) {
  var el = document.getElementById('footer');
  el.innerHTML = "<p class=\"footer-copy\">There were ".concat(src_numberWithCommas(data.cases_new), " new cases reported between ").concat(data.week_start, " and ").concat(data.week_end, " in B.C., for a total of ").concat(src_numberWithCommas(data.cases_total), " COVID-19 cases.</p><p class=\"footer-copy-bold\">Read the full report <a href=\"http://www.bccdc.ca/health-info/diseases-conditions/covid-19/data-trends#Reports\" _target=\"blank\">here</a> | Next update: ").concat(data.next_update, " at 1 p.m. or later.</p>");
}

function src_numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
} // start it up!!


src_init();

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[113,1,2]]]);