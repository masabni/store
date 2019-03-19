(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/tiptap-editor-component"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TiptapEditor.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TiptapEditor.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tiptap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiptap */ "./node_modules/tiptap/dist/tiptap.esm.js");
/* harmony import */ var tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tiptap-extensions */ "./node_modules/tiptap-extensions/dist/extensions.esm.js");
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
  components: {
    EditorContent: tiptap__WEBPACK_IMPORTED_MODULE_0__["EditorContent"],
    EditorMenuBar: tiptap__WEBPACK_IMPORTED_MODULE_0__["EditorMenuBar"]
  },
  props: ['text', 'label'],
  data: function data() {
    var _this = this;

    return {
      editor: new tiptap__WEBPACK_IMPORTED_MODULE_0__["Editor"]({
        onUpdate: function onUpdate(_ref) {
          var getHTML = _ref.getHTML;
          var state = getHTML();

          _this.$emit('input', state);
        },
        extensions: [new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Blockquote"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["BulletList"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["CodeBlock"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["HardBreak"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Heading"]({
          levels: [1, 2, 3]
        }), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["HorizontalRule"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["ListItem"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["OrderedList"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["TodoItem"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["TodoList"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Bold"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Code"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Italic"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Link"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Strike"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Underline"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["History"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Placeholder"]({
          emptyClass: 'is-empty',
          emptyNodeText: this.label,
          showOnlyWhenEditable: true
        })]
      }) //, content: ``

    };
  },
  methods: {
    updateValue: function updateValue(text) {
      // editor.setContent(this.value)
      this.$emit('input', text);
    }
  },
  watch: {
    text: function text() {
      this.editor.setContent(this.text);
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.editor.destroy();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TiptapEditor.vue?vue&type=template&id=ee95d3c0&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TiptapEditor.vue?vue&type=template&id=ee95d3c0& ***!
  \***************************************************************************************************************************************************************************************************************/
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
    { staticClass: "editor" },
    [
      _c(
        "v-layout",
        { attrs: { "align-center": "", "justify-center": "" } },
        [
          _c("editor-menu-bar", {
            attrs: { editor: _vm.editor },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var commands = ref.commands
                  var isActive = ref.isActive
                  return _c("div", { staticClass: "menubar" }, [
                    _c(
                      "button",
                      {
                        staticClass: "menubar__button",
                        class: { "is-active": isActive.bold() },
                        on: { click: commands.bold }
                      },
                      [_c("v-icon", [_vm._v("format_bold")])],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "menubar__button",
                        class: { "is-active": isActive.italic() },
                        on: { click: commands.italic }
                      },
                      [_c("v-icon", [_vm._v("format_italic")])],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "menubar__button",
                        class: { "is-active": isActive.strike() },
                        on: { click: commands.strike }
                      },
                      [_c("v-icon", [_vm._v("format_strikethrough")])],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "menubar__button",
                        class: { "is-active": isActive.underline() },
                        on: { click: commands.underline }
                      },
                      [_c("v-icon", [_vm._v("format_underline")])],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "menubar__button",
                        class: { "is-active": isActive.code() },
                        on: { click: commands.code }
                      },
                      [_c("v-icon", [_vm._v("code")])],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "menubar__button",
                        class: { "is-active": isActive.paragraph() },
                        on: { click: commands.paragraph }
                      },
                      [_c("v-icon", [_vm._v("short_text")])],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "menubar__button",
                        class: { "is-active": isActive.heading({ level: 1 }) },
                        on: {
                          click: function($event) {
                            return commands.heading({ level: 1 })
                          }
                        }
                      },
                      [_vm._v("\n                    H1\n                ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "menubar__button",
                        class: { "is-active": isActive.heading({ level: 2 }) },
                        on: {
                          click: function($event) {
                            return commands.heading({ level: 2 })
                          }
                        }
                      },
                      [_vm._v("\n                    H2\n                ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "menubar__button",
                        class: { "is-active": isActive.heading({ level: 3 }) },
                        on: {
                          click: function($event) {
                            return commands.heading({ level: 3 })
                          }
                        }
                      },
                      [_vm._v("\n                    H3\n                ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "menubar__button",
                        class: { "is-active": isActive.bullet_list() },
                        on: { click: commands.bullet_list }
                      },
                      [_c("v-icon", [_vm._v("format_list_bulleted")])],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "menubar__button",
                        class: { "is-active": isActive.ordered_list() },
                        on: { click: commands.ordered_list }
                      },
                      [_c("v-icon", [_vm._v("format_list_numbered")])],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "menubar__button",
                        class: { "is-active": isActive.blockquote() },
                        on: { click: commands.blockquote }
                      },
                      [_c("v-icon", [_vm._v("format_quote")])],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "menubar__button",
                        on: { click: commands.undo }
                      },
                      [_c("v-icon", [_vm._v("undo")])],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "menubar__button",
                        on: { click: commands.redo }
                      },
                      [_c("v-icon", [_vm._v("redo")])],
                      1
                    )
                  ])
                }
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("editor-content", {
        staticClass: "editor__content",
        attrs: { editor: _vm.editor },
        on: {
          input: function($event) {
            return _vm.updateValue($event.target.value)
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/TiptapEditor.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/TiptapEditor.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TiptapEditor_vue_vue_type_template_id_ee95d3c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TiptapEditor.vue?vue&type=template&id=ee95d3c0& */ "./resources/js/components/TiptapEditor.vue?vue&type=template&id=ee95d3c0&");
/* harmony import */ var _TiptapEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TiptapEditor.vue?vue&type=script&lang=js& */ "./resources/js/components/TiptapEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TiptapEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TiptapEditor_vue_vue_type_template_id_ee95d3c0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TiptapEditor_vue_vue_type_template_id_ee95d3c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/TiptapEditor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/TiptapEditor.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/TiptapEditor.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TiptapEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TiptapEditor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TiptapEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TiptapEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/TiptapEditor.vue?vue&type=template&id=ee95d3c0&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/TiptapEditor.vue?vue&type=template&id=ee95d3c0& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TiptapEditor_vue_vue_type_template_id_ee95d3c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TiptapEditor.vue?vue&type=template&id=ee95d3c0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TiptapEditor.vue?vue&type=template&id=ee95d3c0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TiptapEditor_vue_vue_type_template_id_ee95d3c0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TiptapEditor_vue_vue_type_template_id_ee95d3c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);