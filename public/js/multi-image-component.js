webpackJsonp([0],{

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(306)
/* template */
var __vue_template__ = __webpack_require__(307)
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
Component.options.__file = "resources/js/components/MultiImageUpload.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-48e2312e", Component.options)
  } else {
    hotAPI.reload("data-v-48e2312e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vueFilepond = __webpack_require__(20);

var _vueFilepond2 = _interopRequireDefault(_vueFilepond);

__webpack_require__(161);

var _filepondPluginFileValidateType = __webpack_require__(162);

var _filepondPluginFileValidateType2 = _interopRequireDefault(_filepondPluginFileValidateType);

var _filepondPluginImagePreview = __webpack_require__(163);

var _filepondPluginImagePreview2 = _interopRequireDefault(_filepondPluginImagePreview);

var _filepondPluginFileValidateSize = __webpack_require__(164);

var _filepondPluginFileValidateSize2 = _interopRequireDefault(_filepondPluginFileValidateSize);

var _filepondPluginImageExifOrientation = __webpack_require__(165);

var _filepondPluginImageExifOrientation2 = _interopRequireDefault(_filepondPluginImageExifOrientation);

var _filepondPluginImageCrop = __webpack_require__(166);

var _filepondPluginImageCrop2 = _interopRequireDefault(_filepondPluginImageCrop);

var _filepondPluginImageResize = __webpack_require__(167);

var _filepondPluginImageResize2 = _interopRequireDefault(_filepondPluginImageResize);

var _filepondPluginImageTransform = __webpack_require__(168);

var _filepondPluginImageTransform2 = _interopRequireDefault(_filepondPluginImageTransform);

__webpack_require__(169);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// use image preview and file type validation plugins

// Import FilePond plugins
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

// Import Vue FilePond
var FilePond = (0, _vueFilepond2.default)(_filepondPluginFileValidateType2.default, _filepondPluginImageExifOrientation2.default, _filepondPluginImagePreview2.default, _filepondPluginFileValidateSize2.default, _filepondPluginImageCrop2.default, _filepondPluginImageResize2.default, _filepondPluginImageTransform2.default);
//        FilePondPluginFileEncode,

// Please note that you need to install these plugins separately

// Import image preview plugin styles

// Import FilePond styles
exports.default = {
    name: "multi-file-input",
    props: ['label', 'type', 'server', 'file', 'maxSize', 'maxFiles'],
    data: function data() {
        return {
            ids: []
        };
    },
    computed: {
        token: function token() {
            return localStorage.getItem('user_token');
        },
        base: function base() {
            //                return this.$router.options.base;
            return document.querySelector('base').getAttribute('href');
        }
    },
    methods: {
        onResponse: function onResponse(data) {
            var r = JSON.parse(data);
            Event.fire('removeLoader', '');
            this.ids.push(r.image_key);
            this.$emit('input', this.ids);
            // return this.ids;
            return r.image_key;
        },
        onDeleteResponse: function onDeleteResponse(id) {
            this.ids = this.ids.filter(function (item) {
                return Number(item) !== Number(id);
            });
            this.$emit('input', this.ids);
        }
    },
    components: {
        FilePond: FilePond
    },
    mounted: function mounted() {}
};

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("FilePond", {
        ref: "input",
        attrs: {
          name: "picture",
          "allow-multiple": "true",
          "max-files": _vm.maxFiles,
          file: _vm.file,
          acceptedFileTypes: _vm.type,
          maxFileSize: _vm.maxSize,
          imagePreviewWidth: "500",
          imagePreviewHeight: "500",
          imageCropAspectRatio: "16:9",
          imageResizeTargetWidth: "500",
          imageResizeTargetHeight: "500",
          server: {
            url: _vm.base + _vm.server,
            process: {
              method: "POST",
              headers: {
                Authorization: "Bearer " + _vm.token
              },
              onload: _vm.onResponse
            },

            revert: {
              method: "DELETE",
              headers: {
                Authorization: "Bearer " + _vm.token
              },
              onload: _vm.onDeleteResponse
            }
          },
          "label-idle": _vm.label,
          labelFileWaitingForSize: _vm.$t("waiting_for_size"),
          labelFileSizeNotAvailable: _vm.$t("size_not_available"),
          labelFileLoading: _vm.$t("loading"),
          labelFileLoadError: _vm.$t("error_during_load"),
          labelFileProcessing: _vm.$t("uploading"),
          labelFileProcessingComplete: _vm.$t("upload_complete"),
          labelFileProcessingAborted: _vm.$t("upload_canceled"),
          labelFileProcessingError: _vm.$t("error_during_upload"),
          labelTapToCancel: _vm.$t("tap_to_cancel"),
          labelTapToRetry: _vm.$t("tap_to_retry"),
          labelTapToUndo: _vm.$t("tap_to_undo"),
          labelButtonRemoveItem: _vm.$t("remove"),
          labelButtonAbortItemLoad: _vm.$t("abort"),
          labelButtonRetryItemLoad: _vm.$t("retry"),
          labelButtonAbortItemProcessing: _vm.$t("cancel"),
          labelButtonUndoItemProcessing: _vm.$t("undo"),
          labelButtonRetryItemProcessing: _vm.$t("retry"),
          labelButtonProcessItem: _vm.$t("upload"),
          imageValidateSizeLabelFormatError: _vm.$t("image_type_not_supported"),
          imageValidateSizeLabelImageSizeTooSmall: _vm.$t("image_is_too_small"),
          imageValidateSizeLabelImageSizeTooBig: _vm.$t("image_is_to_big"),
          labelFileTypeNotAllowed: _vm.$t("file_of_invalid_type"),
          labelMaxFileSizeExceeded: _vm.$t("image_is_too_large"),
          labelMaxFileSize: _vm.$t("max_image_size")
        }
      })
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
    require("vue-hot-reload-api")      .rerender("data-v-48e2312e", module.exports)
  }
}

/***/ })

});