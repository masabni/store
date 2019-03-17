webpackJsonp([3],{

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(290)
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
Component.options.__file = "resources/js/pages/Home.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b3c5cf30", Component.options)
  } else {
    hotAPI.reload("data-v-b3c5cf30", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "section",
      [
        _c(
          "v-parallax",
          { attrs: { src: "assets/hero.jpeg", height: "600" } },
          [
            _c(
              "v-layout",
              {
                staticClass: "white--text",
                attrs: { column: "", "align-center": "", "justify-center": "" }
              },
              [
                _c("img", {
                  attrs: {
                    src: "assets/vuetify.png",
                    alt: "Vuetify.js",
                    height: "200"
                  }
                }),
                _vm._v(" "),
                _c(
                  "h1",
                  { staticClass: "white--text mb-2 display-1 text-xs-center" },
                  [_vm._v("Parallax Template")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "subheading mb-3 text-xs-center" }, [
                  _vm._v("Powered by Vuetify")
                ]),
                _vm._v(" "),
                _c(
                  "v-btn",
                  {
                    staticClass: "blue lighten-2 mt-5",
                    attrs: { dark: "", large: "", href: "/pre-made-themes" }
                  },
                  [
                    _vm._v(
                      "\n                    Get Started\n                "
                    )
                  ]
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "section",
      [
        _c(
          "v-layout",
          {
            staticClass: "my-5",
            attrs: { column: "", wrap: "", "align-center": "" }
          },
          [
            _c(
              "v-flex",
              { staticClass: "my-3", attrs: { xs12: "", sm4: "" } },
              [
                _c("div", { staticClass: "text-xs-center" }, [
                  _c("h2", { staticClass: "headline" }, [
                    _vm._v("The best way to start developing")
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "subheading" }, [
                    _vm._v(
                      "\n                Cras facilisis mi vitae nunc\n              "
                    )
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "v-flex",
              { attrs: { xs12: "" } },
              [
                _c(
                  "v-container",
                  { attrs: { "grid-list-xl": "" } },
                  [
                    _c(
                      "v-layout",
                      { attrs: { row: "", wrap: "", "align-center": "" } },
                      [
                        _c(
                          "v-flex",
                          { attrs: { xs12: "", md4: "" } },
                          [
                            _c(
                              "v-card",
                              { staticClass: "elevation-0 transparent" },
                              [
                                _c(
                                  "v-card-text",
                                  { staticClass: "text-xs-center" },
                                  [
                                    _c(
                                      "v-icon",
                                      {
                                        staticClass:
                                          "blue--text text--lighten-2",
                                        attrs: { "x-large": "" }
                                      },
                                      [_vm._v("color_lens")]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-card-title",
                                  {
                                    staticClass: "layout justify-center",
                                    attrs: { "primary-title": "" }
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "headline text-xs-center"
                                      },
                                      [_vm._v("Material Design")]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("v-card-text", [
                                  _vm._v(
                                    "\n                                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.\n                                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n                                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.\n                                "
                                  )
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-flex",
                          { attrs: { xs12: "", md4: "" } },
                          [
                            _c(
                              "v-card",
                              { staticClass: "elevation-0 transparent" },
                              [
                                _c(
                                  "v-card-text",
                                  { staticClass: "text-xs-center" },
                                  [
                                    _c(
                                      "v-icon",
                                      {
                                        staticClass:
                                          "blue--text text--lighten-2",
                                        attrs: { "x-large": "" }
                                      },
                                      [_vm._v("flash_on")]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-card-title",
                                  {
                                    staticClass: "layout justify-center",
                                    attrs: { "primary-title": "" }
                                  },
                                  [
                                    _c("div", { staticClass: "headline" }, [
                                      _vm._v("Fast development")
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c("v-card-text", [
                                  _vm._v(
                                    "\n                                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.\n                                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n                                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.\n                                "
                                  )
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-flex",
                          { attrs: { xs12: "", md4: "" } },
                          [
                            _c(
                              "v-card",
                              { staticClass: "elevation-0 transparent" },
                              [
                                _c(
                                  "v-card-text",
                                  { staticClass: "text-xs-center" },
                                  [
                                    _c(
                                      "v-icon",
                                      {
                                        staticClass:
                                          "blue--text text--lighten-2",
                                        attrs: { "x-large": "" }
                                      },
                                      [_vm._v("build")]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-card-title",
                                  {
                                    staticClass: "layout justify-center",
                                    attrs: { "primary-title": "" }
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "headline text-xs-center"
                                      },
                                      [_vm._v("Completely Open Sourced")]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("v-card-text", [
                                  _vm._v(
                                    "\n                                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.\n                                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n                                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.\n                                "
                                  )
                                ])
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
              ],
              1
            )
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "section",
      [
        _c(
          "v-parallax",
          { attrs: { src: "assets/section.jpg", height: "380" } },
          [
            _c(
              "v-layout",
              {
                attrs: { column: "", "align-center": "", "justify-center": "" }
              },
              [
                _c(
                  "div",
                  { staticClass: "headline white--text mb-3 text-xs-center" },
                  [_vm._v("Web development has never been easier")]
                ),
                _vm._v(" "),
                _c("em", [_vm._v("Kick-start your application today")]),
                _vm._v(" "),
                _c(
                  "v-btn",
                  {
                    staticClass: "blue lighten-2 mt-5",
                    attrs: { dark: "", large: "", href: "/pre-made-themes" }
                  },
                  [
                    _vm._v(
                      "\n                    Get Started\n                "
                    )
                  ]
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "section",
      [
        _c(
          "v-container",
          { attrs: { "grid-list-xl": "" } },
          [
            _c(
              "v-layout",
              {
                staticClass: "my-5",
                attrs: { row: "", wrap: "", "justify-center": "" }
              },
              [
                _c(
                  "v-flex",
                  { attrs: { xs12: "", sm4: "" } },
                  [
                    _c(
                      "v-card",
                      { staticClass: "elevation-0 transparent" },
                      [
                        _c(
                          "v-card-title",
                          {
                            staticClass: "layout justify-center",
                            attrs: { "primary-title": "" }
                          },
                          [
                            _c("div", { staticClass: "headline" }, [
                              _vm._v("Company info")
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c("v-card-text", [
                          _vm._v(
                            "\n                            Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.\n                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n                            Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.\n                        "
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-flex",
                  { attrs: { xs12: "", sm4: "", "offset-sm1": "" } },
                  [
                    _c(
                      "v-card",
                      { staticClass: "elevation-0 transparent" },
                      [
                        _c(
                          "v-card-title",
                          {
                            staticClass: "layout justify-center",
                            attrs: { "primary-title": "" }
                          },
                          [
                            _c("div", { staticClass: "headline" }, [
                              _vm._v("Contact us")
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c("v-card-text", [
                          _vm._v(
                            "\n                            Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.\n                        "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-list",
                          { staticClass: "transparent" },
                          [
                            _c(
                              "v-list-tile",
                              [
                                _c(
                                  "v-list-tile-action",
                                  [
                                    _c(
                                      "v-icon",
                                      {
                                        staticClass:
                                          "blue--text text--lighten-2"
                                      },
                                      [_vm._v("phone")]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-tile-content",
                                  [
                                    _c("v-list-tile-title", [
                                      _vm._v("777-867-5309")
                                    ])
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-list-tile",
                              [
                                _c(
                                  "v-list-tile-action",
                                  [
                                    _c(
                                      "v-icon",
                                      {
                                        staticClass:
                                          "blue--text text--lighten-2"
                                      },
                                      [_vm._v("place")]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-tile-content",
                                  [
                                    _c("v-list-tile-title", [
                                      _vm._v("Chicago, US")
                                    ])
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-list-tile",
                              [
                                _c(
                                  "v-list-tile-action",
                                  [
                                    _c(
                                      "v-icon",
                                      {
                                        staticClass:
                                          "blue--text text--lighten-2"
                                      },
                                      [_vm._v("email")]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-tile-content",
                                  [
                                    _c("v-list-tile-title", [
                                      _vm._v("john@vuetifyjs.com")
                                    ])
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
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b3c5cf30", module.exports)
  }
}

/***/ })

});