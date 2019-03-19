(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/flash-component"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Flash.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Flash.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['message'],
  data: function data() {
    return {
      body: this.message,
      level: 'success',
      hideAfter: 5000,
      show: false,
      showResendEmailBtn: false,
      loading: false
    };
  },
  computed: {
    classes: function classes() {
      var defaults = ['uk-notify-message', 'alert-dismissable', 'alert']; //,'fixed', 'p-4', 'border', 'text-white'

      if (this.level === 'success') defaults.push('alert-success');
      if (this.level === 'warning') defaults.push('alert-warning');
      if (this.level === 'danger') defaults.push('alert-danger');
      if (this.level === 'info') defaults.push('alert-info');
      return defaults;
    }
  },
  created: function created() {
    var _this = this;

    if (this.message) {
      this.flash();
    }

    window.events.$on('flash', function (data) {
      return _this.flash(data);
    });
  },
  methods: {
    flash: function flash(data) {
      if (data) {
        this.body = data.message;
        this.level = data.level;
        this.hideAfter = data.hideAfter;
        this.showResendEmailBtn = data.showResendEmailBtn;
      }

      this.show = true;
      this.hide();
    },
    hide: function hide() {
      var _this2 = this;

      setTimeout(function () {
        _this2.show = false;
      }, this.hideAfter);
    },
    resendEmail: function resendEmail() {
      var _this3 = this;

      this.loading = true;
      var i18n = this.$i18n;
      this.$http.get('/activate', {
        params: {
          email: this.$store.state.user.email
        }
      }).then(function (res) {
        flash(i18n.t('confirmation_email_sent'));
        _this3.loading = false;
        _this3.showResendEmailBtn = false;
      }).catch(function (err) {
        flash(err.message, 'danger');
        _this3.loading = false;
        _this3.showResendEmailBtn = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Snackbar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Snackbar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['message'],
  data: function data() {
    return {
      body: this.message,
      level: 'success',
      hideAfter: 5000,
      show: false,
      showResendEmailBtn: false,
      loading: false
    };
  },
  computed: {
    classes: function classes() {
      var defaults = ['uk-notify-message', 'alert-dismissable', 'alert']; //,'fixed', 'p-4', 'border', 'text-white'

      if (this.level === 'success') defaults.push('alert-success');
      if (this.level === 'warning') defaults.push('alert-warning');
      if (this.level === 'danger') defaults.push('alert-danger');
      if (this.level === 'info') defaults.push('alert-info');
      return defaults;
    }
  },
  created: function created() {
    var _this = this;

    if (this.message) {
      this.snackbar();
    }

    window.events.$on('snackbar', function (data) {
      return _this.snackbar(data);
    });
  },
  methods: {
    snackbar: function snackbar(data) {
      if (data) {
        this.body = data.message;
        this.level = data.level;
        this.hideAfter = data.hideAfter;
        this.showResendEmailBtn = data.showResendEmailBtn;
      }

      this.show = true;
      this.hide();
    },
    hide: function hide() {
      var _this2 = this;

      setTimeout(function () {
        _this2.show = false;
      }, this.hideAfter);
    },
    resendEmail: function resendEmail() {
      var _this3 = this;

      this.loading = true;
      var i18n = this.$i18n;
      this.$http.get('/activate', {
        params: {
          email: this.$store.state.user.email
        }
      }).then(function (res) {
        snackbar(i18n.t('confirmation_email_sent'));
        _this3.loading = false;
        _this3.showResendEmailBtn = false;
      }).catch(function (err) {
        snackbar(err.message, 'danger');
        _this3.loading = false;
        _this3.showResendEmailBtn = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Flash.vue?vue&type=template&id=003fbc42&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Flash.vue?vue&type=template&id=003fbc42& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-alert",
        {
          attrs: {
            dismissible: "",
            type: _vm.level,
            transition: "scale-transition"
          },
          model: {
            value: _vm.show,
            callback: function($$v) {
              _vm.show = $$v
            },
            expression: "show"
          }
        },
        [_vm._v("\n       " + _vm._s(_vm.body) + "\n    ")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Snackbar.vue?vue&type=template&id=727e1820&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Snackbar.vue?vue&type=template&id=727e1820& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-snackbar",
    {
      attrs: { "multi-line": "", top: "", color: _vm.level },
      model: {
        value: _vm.show,
        callback: function($$v) {
          _vm.show = $$v
        },
        expression: "show"
      }
    },
    [
      _vm._v("\n    " + _vm._s(_vm.body) + "\n    "),
      _c(
        "v-btn",
        {
          attrs: { dark: "", flat: "" },
          on: {
            click: function($event) {
              _vm.show = false
            }
          }
        },
        [_vm._v("\n        " + _vm._s(_vm.$t("close")) + "\n    ")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Flash.vue":
/*!********************************!*\
  !*** ./resources/js/Flash.vue ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Flash_vue_vue_type_template_id_003fbc42___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Flash.vue?vue&type=template&id=003fbc42& */ "./resources/js/Flash.vue?vue&type=template&id=003fbc42&");
/* harmony import */ var _Flash_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Flash.vue?vue&type=script&lang=js& */ "./resources/js/Flash.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Flash_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Flash_vue_vue_type_template_id_003fbc42___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Flash_vue_vue_type_template_id_003fbc42___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Flash.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Flash.vue?vue&type=script&lang=js&":
/*!*********************************************************!*\
  !*** ./resources/js/Flash.vue?vue&type=script&lang=js& ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Flash_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib??vue-loader-options!./Flash.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Flash.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Flash_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Flash.vue?vue&type=template&id=003fbc42&":
/*!***************************************************************!*\
  !*** ./resources/js/Flash.vue?vue&type=template&id=003fbc42& ***!
  \***************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Flash_vue_vue_type_template_id_003fbc42___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Flash.vue?vue&type=template&id=003fbc42& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Flash.vue?vue&type=template&id=003fbc42&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Flash_vue_vue_type_template_id_003fbc42___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Flash_vue_vue_type_template_id_003fbc42___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Snackbar.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/Snackbar.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Snackbar_vue_vue_type_template_id_727e1820___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Snackbar.vue?vue&type=template&id=727e1820& */ "./resources/js/components/Snackbar.vue?vue&type=template&id=727e1820&");
/* harmony import */ var _Snackbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Snackbar.vue?vue&type=script&lang=js& */ "./resources/js/components/Snackbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Snackbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Snackbar_vue_vue_type_template_id_727e1820___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Snackbar_vue_vue_type_template_id_727e1820___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Snackbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Snackbar.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Snackbar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Snackbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Snackbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Snackbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Snackbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Snackbar.vue?vue&type=template&id=727e1820&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Snackbar.vue?vue&type=template&id=727e1820& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Snackbar_vue_vue_type_template_id_727e1820___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Snackbar.vue?vue&type=template&id=727e1820& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Snackbar.vue?vue&type=template&id=727e1820&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Snackbar_vue_vue_type_template_id_727e1820___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Snackbar_vue_vue_type_template_id_727e1820___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);