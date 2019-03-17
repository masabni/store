webpackJsonp([1],{

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(293)
/* template */
var __vue_template__ = __webpack_require__(294)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/ConfirmDialogComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2e9d2140", Component.options)
  } else {
    hotAPI.reload("data-v-2e9d2140", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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
exports.default = {
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
};

/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

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
                !("button" in $event) &&
                _vm._k($event.keyCode, "esc", 27, $event.key, "Escape")
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
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2e9d2140", module.exports)
  }
}

/***/ })

});