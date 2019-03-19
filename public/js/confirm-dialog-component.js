(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/confirm-dialog-component"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ConfirmDialogComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ConfirmDialogComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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

/**
 * Vuetify Confirm Dialog component
 *
 * Insert component where you want to use it:
 * <confirm ref="confirm"></confirm>
 *
 * Call it:
 * this.$refs.confirm.open('Delete', 'Are you sure?', { color: 'red' }).then((confirm) => {})
 * Or use await:
 * if (await this.$refs.confirm.open('Delete', 'Are you sure?', { color: 'red' })) {
*   // yes
* }
 * else {
*   // cancel
* }
 *
 * Alternatively you can place it in main App component and access it globally via this.$root.$confirm
 * <template>
 *   <v-app>
 *     ...
 *     <confirm ref="confirm"></confirm>
 *   </v-app>
 * </template>
 *
 * mounted() {
*   this.$root.$confirm = this.$refs.confirm.open
* }
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      dialog: false,
      resolve: null,
      reject: null,
      message: null,
      title: null,
      options: {
        color: 'primary',
        width: 290
      }
    };
  },
  methods: {
    open: function open(title, message, options) {
      var _this = this;

      this.dialog = true;
      this.title = title;
      this.message = message;
      this.options = Object.assign(this.options, options);
      return new Promise(function (resolve, reject) {
        _this.resolve = resolve;
        _this.reject = reject;
      });
    },
    agree: function agree() {
      this.resolve(true);
      this.dialog = false;
    },
    cancel: function cancel() {
      this.reject(false);
      this.dialog = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ConfirmDialogComponent.vue?vue&type=template&id=2e9d2140&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ConfirmDialogComponent.vue?vue&type=template&id=2e9d2140& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    "v-app",
    [
      _c(
        "v-dialog",
        {
          attrs: { "max-width": _vm.options.width },
          on: {
            keydown: function($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])
              ) {
                return null
              }
              return _vm.cancel($event)
            }
          },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-toolbar",
                {
                  attrs: {
                    dark: "",
                    color: _vm.options.color,
                    dense: "",
                    flat: ""
                  }
                },
                [
                  _c("v-toolbar-title", { staticClass: "white--text" }, [
                    _vm._v(_vm._s(_vm.title))
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !!_vm.message,
                      expression: "!!message"
                    }
                  ]
                },
                [_vm._v(_vm._s(_vm.message))]
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                { staticClass: "pt-0" },
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "primary darken-1", flat: "flat" },
                      nativeOn: {
                        click: function($event) {
                          return _vm.agree($event)
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("yes")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "grey", flat: "flat" },
                      nativeOn: {
                        click: function($event) {
                          return _vm.cancel($event)
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("cancel")))]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ConfirmDialogComponent.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/ConfirmDialogComponent.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ConfirmDialogComponent_vue_vue_type_template_id_2e9d2140___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConfirmDialogComponent.vue?vue&type=template&id=2e9d2140& */ "./resources/js/components/ConfirmDialogComponent.vue?vue&type=template&id=2e9d2140&");
/* harmony import */ var _ConfirmDialogComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConfirmDialogComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/ConfirmDialogComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ConfirmDialogComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ConfirmDialogComponent_vue_vue_type_template_id_2e9d2140___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ConfirmDialogComponent_vue_vue_type_template_id_2e9d2140___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ConfirmDialogComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ConfirmDialogComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/ConfirmDialogComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmDialogComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ConfirmDialogComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ConfirmDialogComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmDialogComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ConfirmDialogComponent.vue?vue&type=template&id=2e9d2140&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/ConfirmDialogComponent.vue?vue&type=template&id=2e9d2140& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmDialogComponent_vue_vue_type_template_id_2e9d2140___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ConfirmDialogComponent.vue?vue&type=template&id=2e9d2140& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ConfirmDialogComponent.vue?vue&type=template&id=2e9d2140&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmDialogComponent_vue_vue_type_template_id_2e9d2140___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmDialogComponent_vue_vue_type_template_id_2e9d2140___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);