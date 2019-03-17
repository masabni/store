webpackJsonp([0],{

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(298)
/* template */
var __vue_template__ = __webpack_require__(299)
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
Component.options.__file = "resources/js/Flash.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-003fbc42", Component.options)
  } else {
    hotAPI.reload("data-v-003fbc42", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(300)
/* template */
var __vue_template__ = __webpack_require__(301)
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
Component.options.__file = "resources/js/components/Snackbar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-727e1820", Component.options)
  } else {
    hotAPI.reload("data-v-727e1820", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 298:
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
//
//

exports.default = {
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
            this.$http.get('/activate', { params: { email: this.$store.state.user.email } }).then(function (res) {
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
};

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

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
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-003fbc42", module.exports)
  }
}

/***/ }),

/***/ 300:
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

exports.default = {
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
            this.$http.get('/activate', { params: { email: this.$store.state.user.email } }).then(function (res) {
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
};

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

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
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-727e1820", module.exports)
  }
}

/***/ })

});