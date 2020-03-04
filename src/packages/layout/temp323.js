export default {
  "component": "ta-page-container",
  "info": {
    "name": "页面模版-323",
    "dir": "layout"
  },
  "setting": {
    "mode": {
      "label": "主题模式",
      "value": "light",
      "type": "radioGroup",
      "props": {
        "options": [
          {
            "label": "浅色",
            "value": "light"
          },
          {
            "label": "深色",
            "value": "dark"
          }
        ]
      }
    }
  },
  "slots": [
    "default"
  ],
  "children": {
    "default": [
      {
        "component": "ta-view",
        "info": {
          "name": "视图容器",
          "dir": "view"
        },
        "setting": {
          "tag": {
            "label": "标签",
            "value": "div",
            "type": "select",
            "props": {
              "placeholder": "请选择",
              "multiple": false,
              "options": [
                {
                  "label": "div",
                  "value": "div"
                },
                {
                  "label": "p",
                  "value": "p"
                },
                {
                  "label": "ul",
                  "value": "ul"
                },
                {
                  "label": "li",
                  "value": "li"
                },
                {
                  "label": "span",
                  "value": "span"
                },
                {
                  "label": "h1",
                  "value": "h1"
                },
                {
                  "label": "h2",
                  "value": "h2"
                },
                {
                  "label": "h3",
                  "value": "h3"
                },
                {
                  "label": "h4",
                  "value": "h4"
                },
                {
                  "label": "h5",
                  "value": "h5"
                },
                {
                  "label": "h6",
                  "value": "h6"
                }
              ]
            }
          },
          "display": {
            "label": "display",
            "value": "",
            "type": "select",
            "props": {
              "placeholder": "请选择",
              "options": [
                {
                  "label": "flex",
                  "value": "flex"
                },
                {
                  "label": "block",
                  "value": "block"
                },
                {
                  "label": "inline-block",
                  "value": "inline-block"
                },
                {
                  "label": "inline",
                  "value": "inline"
                }
              ]
            },
            "relation": {
              "flex": [
                "direction",
                "wrap",
                "justify",
                "align"
              ]
            }
          },
          "direction": {
            "label": "排列方向",
            "value": "row",
            "type": "select",
            "configurable": false,
            "props": {
              "placeholder": "请选择",
              "options": [
                {
                  "label": "水平",
                  "value": "row"
                },
                {
                  "label": "垂直",
                  "value": "column"
                }
              ]
            }
          },
          "wrap": {
            "label": "容器换行",
            "value": "nowrap",
            "type": "select",
            "configurable": false,
            "props": {
              "placeholder": "请选择",
              "options": [
                {
                  "label": "单行",
                  "value": "nowrap"
                },
                {
                  "label": "多行",
                  "value": "wrap"
                }
              ]
            }
          },
          "justify": {
            "label": "主轴对齐方式",
            "value": "",
            "type": "select",
            "configurable": false,
            "props": {
              "placeholder": "请选择",
              "options": [
                {
                  "label": "left",
                  "value": "left"
                },
                {
                  "label": "center",
                  "value": "center"
                },
                {
                  "label": "right",
                  "value": "right"
                },
                {
                  "label": "between",
                  "value": "between"
                },
                {
                  "label": "around",
                  "value": "around"
                }
              ]
            }
          },
          "align": {
            "label": "侧轴对齐方式",
            "value": "",
            "type": "select",
            "configurable": false,
            "props": {
              "placeholder": "请选择",
              "options": [
                {
                  "label": "top",
                  "value": "top"
                },
                {
                  "label": "middle",
                  "value": "middle"
                },
                {
                  "label": "bottom",
                  "value": "bottom"
                },
                {
                  "label": "baseline",
                  "value": "baseline"
                },
                {
                  "label": "stretch",
                  "value": "stretch"
                }
              ]
            }
          },
          "styles": {
            "label": "其他样式",
            "value": "",
            "type": "textarea"
          }
        },
        "slots": [
          "default"
        ],
        "children": {
          "default": [
            {
              "component": "ta-header",
              "info": {
                "name": "通用头部",
                "dir": "header"
              },
              "setting": {
                "title": {
                  "label": "标题",
                  "value": "珍珠一期数据大屏",
                  "type": "input",
                  "props": {
                    "placeholder": "请填写标题"
                  }
                }
              },
              "style": {
                "width": "px",
                "height": "px",
                "marginLeft": "px",
                "marginRight": "px"
              },
              "slots": [
                "default",
                "left",
                "right"
              ],
              "children": {
                "default": [],
                "left": [
                  {
                    "component": "ta-text",
                    "info": {
                      "name": "文本内容",
                      "dir": "text"
                    },
                    "setting": {
                      "tag": {
                        "label": "标签",
                        "value": "span",
                        "type": "select",
                        "props": {
                          "placeholder": "请选择",
                          "multiple": false,
                          "options": [
                            {
                              "label": "span",
                              "value": "span"
                            },
                            {
                              "label": "strong",
                              "value": "strong"
                            },
                            {
                              "label": "div",
                              "value": "div"
                            },
                            {
                              "label": "p",
                              "value": "p"
                            },
                            {
                              "label": "h1",
                              "value": "h1"
                            },
                            {
                              "label": "h2",
                              "value": "h2"
                            },
                            {
                              "label": "h3",
                              "value": "h3"
                            },
                            {
                              "label": "h4",
                              "value": "h4"
                            },
                            {
                              "label": "h5",
                              "value": "h5"
                            },
                            {
                              "label": "h6",
                              "value": "h6"
                            },
                            {
                              "label": "li",
                              "value": "li"
                            }
                          ]
                        }
                      },
                      "content": {
                        "label": "内容",
                        "value": "2020. 10. 22  天气 晴☀️",
                        "type": "textarea",
                        "props": {
                          "placeholder": "请填写内容"
                        }
                      },
                      "fontSize": {
                        "label": "字体尺寸",
                        "value": "",
                        "type": "cssInput"
                      },
                      "color": {
                        "label": "文本颜色",
                        "value": "",
                        "type": "colorPicker"
                      }
                    },
                    "style": {}
                  }
                ],
                "right": [
                  {
                    "component": "ta-text",
                    "info": {
                      "name": "文本内容",
                      "dir": "text"
                    },
                    "setting": {
                      "tag": {
                        "label": "标签",
                        "value": "span",
                        "type": "select",
                        "props": {
                          "placeholder": "请选择",
                          "multiple": false,
                          "options": [
                            {
                              "label": "span",
                              "value": "span"
                            },
                            {
                              "label": "strong",
                              "value": "strong"
                            },
                            {
                              "label": "div",
                              "value": "div"
                            },
                            {
                              "label": "p",
                              "value": "p"
                            },
                            {
                              "label": "h1",
                              "value": "h1"
                            },
                            {
                              "label": "h2",
                              "value": "h2"
                            },
                            {
                              "label": "h3",
                              "value": "h3"
                            },
                            {
                              "label": "h4",
                              "value": "h4"
                            },
                            {
                              "label": "h5",
                              "value": "h5"
                            },
                            {
                              "label": "h6",
                              "value": "h6"
                            },
                            {
                              "label": "li",
                              "value": "li"
                            }
                          ]
                        }
                      },
                      "content": {
                        "label": "内容",
                        "value": "返回首页🔙",
                        "type": "textarea",
                        "props": {
                          "placeholder": "请填写内容"
                        }
                      },
                      "fontSize": {
                        "label": "字体尺寸",
                        "value": "",
                        "type": "cssInput"
                      },
                      "color": {
                        "label": "文本颜色",
                        "value": "",
                        "type": "colorPicker"
                      }
                    },
                    "style": {}
                  }
                ]
              }
            }
          ]
        },
        "style": {}
      },
      {
        "component": "ta-grid",
        "info": {
          "name": "栅格布局",
          "dir": "grid"
        },
        "setting": {
          "gutter": {
            "label": "栅格间隔",
            "value": 24,
            "type": "inputNumber"
          },
          "col": {
            "label": "列配置项 (24栅格)",
            "value": [
              {
                "slot": "col3",
                "value": 8
              },
              {
                "slot": "col4",
                "value": 8
              },
              {
                "slot": "col5",
                "value": 8
              }
            ],
            "type": "grid"
          },
          "justify": {
            "label": "水平排列方式",
            "value": "",
            "type": "select",
            "props": {
              "placeholder": "请选择",
              "options": [
                {
                  "label": "start",
                  "value": "start"
                },
                {
                  "label": "end",
                  "value": "end"
                },
                {
                  "label": "center",
                  "value": "center"
                },
                {
                  "label": "space-around",
                  "value": "space-around"
                },
                {
                  "label": "space-between",
                  "value": "space-between"
                }
              ],
              "clearable": true
            }
          },
          "align": {
            "label": "垂直排列方式",
            "value": "",
            "type": "select",
            "props": {
              "placeholder": "请选择",
              "options": [
                {
                  "label": "top",
                  "value": "top"
                },
                {
                  "label": "middle",
                  "value": "middle"
                },
                {
                  "label": "bottom",
                  "value": "bottom"
                }
              ],
              "clearable": true
            }
          },
          "rowTag": {
            "label": "row元素标签",
            "value": "",
            "type": "select",
            "props": {
              "placeholder": "请选择",
              "options": [
                {
                  "label": "div",
                  "value": "div"
                },
                {
                  "label": "p",
                  "value": "p"
                },
                {
                  "label": "ul",
                  "value": "ul"
                },
                {
                  "label": "li",
                  "value": "li"
                },
                {
                  "label": "span",
                  "value": "span"
                }
              ],
              "clearable": true
            }
          },
          "colTag": {
            "label": "col元素标签",
            "value": "",
            "type": "select",
            "props": {
              "placeholder": "请选择",
              "options": [
                {
                  "label": "div",
                  "value": "div"
                },
                {
                  "label": "p",
                  "value": "p"
                },
                {
                  "label": "ul",
                  "value": "ul"
                },
                {
                  "label": "li",
                  "value": "li"
                },
                {
                  "label": "span",
                  "value": "span"
                }
              ],
              "clearable": true
            }
          }
        },
        "slots": [
          "col3",
          "col4",
          "col5"
        ],
        "children": {
          "col3": [
            {
              "component": "ta-view",
              "info": {
                "name": "视图容器",
                "dir": "view"
              },
              "setting": {
                "tag": {
                  "label": "标签",
                  "value": "div",
                  "type": "select",
                  "props": {
                    "placeholder": "请选择",
                    "multiple": false,
                    "options": [
                      {
                        "label": "div",
                        "value": "div"
                      },
                      {
                        "label": "p",
                        "value": "p"
                      },
                      {
                        "label": "ul",
                        "value": "ul"
                      },
                      {
                        "label": "li",
                        "value": "li"
                      },
                      {
                        "label": "span",
                        "value": "span"
                      },
                      {
                        "label": "h1",
                        "value": "h1"
                      },
                      {
                        "label": "h2",
                        "value": "h2"
                      },
                      {
                        "label": "h3",
                        "value": "h3"
                      },
                      {
                        "label": "h4",
                        "value": "h4"
                      },
                      {
                        "label": "h5",
                        "value": "h5"
                      },
                      {
                        "label": "h6",
                        "value": "h6"
                      }
                    ]
                  }
                },
                "display": {
                  "label": "display",
                  "value": "",
                  "type": "select",
                  "props": {
                    "placeholder": "请选择",
                    "options": [
                      {
                        "label": "flex",
                        "value": "flex"
                      },
                      {
                        "label": "block",
                        "value": "block"
                      },
                      {
                        "label": "inline-block",
                        "value": "inline-block"
                      },
                      {
                        "label": "inline",
                        "value": "inline"
                      }
                    ]
                  },
                  "relation": {
                    "flex": [
                      "direction",
                      "wrap",
                      "justify",
                      "align"
                    ]
                  }
                },
                "direction": {
                  "label": "排列方向",
                  "value": "row",
                  "type": "select",
                  "configurable": false,
                  "props": {
                    "placeholder": "请选择",
                    "options": [
                      {
                        "label": "水平",
                        "value": "row"
                      },
                      {
                        "label": "垂直",
                        "value": "column"
                      }
                    ]
                  }
                },
                "wrap": {
                  "label": "容器换行",
                  "value": "nowrap",
                  "type": "select",
                  "configurable": false,
                  "props": {
                    "placeholder": "请选择",
                    "options": [
                      {
                        "label": "单行",
                        "value": "nowrap"
                      },
                      {
                        "label": "多行",
                        "value": "wrap"
                      }
                    ]
                  }
                },
                "justify": {
                  "label": "主轴对齐方式",
                  "value": "",
                  "type": "select",
                  "configurable": false,
                  "props": {
                    "placeholder": "请选择",
                    "options": [
                      {
                        "label": "left",
                        "value": "left"
                      },
                      {
                        "label": "center",
                        "value": "center"
                      },
                      {
                        "label": "right",
                        "value": "right"
                      },
                      {
                        "label": "between",
                        "value": "between"
                      },
                      {
                        "label": "around",
                        "value": "around"
                      }
                    ]
                  }
                },
                "align": {
                  "label": "侧轴对齐方式",
                  "value": "",
                  "type": "select",
                  "configurable": false,
                  "props": {
                    "placeholder": "请选择",
                    "options": [
                      {
                        "label": "top",
                        "value": "top"
                      },
                      {
                        "label": "middle",
                        "value": "middle"
                      },
                      {
                        "label": "bottom",
                        "value": "bottom"
                      },
                      {
                        "label": "baseline",
                        "value": "baseline"
                      },
                      {
                        "label": "stretch",
                        "value": "stretch"
                      }
                    ]
                  }
                },
                "styles": {
                  "label": "其他样式",
                  "value": "",
                  "type": "textarea"
                }
              },
              "slots": [
                "default"
              ],
              "children": {
                "default": [
                  {
                    "component": "ta-elevator",
                    "info": {
                      "name": "升降机",
                      "dir": "elevator"
                    },
                    "setting": {
                      "title": {
                        "label": "标题",
                        "value": "升降机",
                        "type": "input",
                        "props": {
                          "placeholder": "请填写标题"
                        }
                      }
                    },
                    "slots": [
                      "default"
                    ],
                    "children": {
                      "default": []
                    },
                    "style": {
                      "height": "300px"
                    }
                  }
                ]
              },
              "style": {}
            },
            {
              "component": "ta-view",
              "info": {
                "name": "视图容器",
                "dir": "view"
              },
              "setting": {
                "tag": {
                  "label": "标签",
                  "value": "div",
                  "type": "select",
                  "props": {
                    "placeholder": "请选择",
                    "multiple": false,
                    "options": [
                      {
                        "label": "div",
                        "value": "div"
                      },
                      {
                        "label": "p",
                        "value": "p"
                      },
                      {
                        "label": "ul",
                        "value": "ul"
                      },
                      {
                        "label": "li",
                        "value": "li"
                      },
                      {
                        "label": "span",
                        "value": "span"
                      },
                      {
                        "label": "h1",
                        "value": "h1"
                      },
                      {
                        "label": "h2",
                        "value": "h2"
                      },
                      {
                        "label": "h3",
                        "value": "h3"
                      },
                      {
                        "label": "h4",
                        "value": "h4"
                      },
                      {
                        "label": "h5",
                        "value": "h5"
                      },
                      {
                        "label": "h6",
                        "value": "h6"
                      }
                    ]
                  }
                },
                "display": {
                  "label": "display",
                  "value": "",
                  "type": "select",
                  "props": {
                    "placeholder": "请选择",
                    "options": [
                      {
                        "label": "flex",
                        "value": "flex"
                      },
                      {
                        "label": "block",
                        "value": "block"
                      },
                      {
                        "label": "inline-block",
                        "value": "inline-block"
                      },
                      {
                        "label": "inline",
                        "value": "inline"
                      }
                    ]
                  },
                  "relation": {
                    "flex": [
                      "direction",
                      "wrap",
                      "justify",
                      "align"
                    ]
                  }
                },
                "direction": {
                  "label": "排列方向",
                  "value": "row",
                  "type": "select",
                  "configurable": false,
                  "props": {
                    "placeholder": "请选择",
                    "options": [
                      {
                        "label": "水平",
                        "value": "row"
                      },
                      {
                        "label": "垂直",
                        "value": "column"
                      }
                    ]
                  }
                },
                "wrap": {
                  "label": "容器换行",
                  "value": "nowrap",
                  "type": "select",
                  "configurable": false,
                  "props": {
                    "placeholder": "请选择",
                    "options": [
                      {
                        "label": "单行",
                        "value": "nowrap"
                      },
                      {
                        "label": "多行",
                        "value": "wrap"
                      }
                    ]
                  }
                },
                "justify": {
                  "label": "主轴对齐方式",
                  "value": "",
                  "type": "select",
                  "configurable": false,
                  "props": {
                    "placeholder": "请选择",
                    "options": [
                      {
                        "label": "left",
                        "value": "left"
                      },
                      {
                        "label": "center",
                        "value": "center"
                      },
                      {
                        "label": "right",
                        "value": "right"
                      },
                      {
                        "label": "between",
                        "value": "between"
                      },
                      {
                        "label": "around",
                        "value": "around"
                      }
                    ]
                  }
                },
                "align": {
                  "label": "侧轴对齐方式",
                  "value": "",
                  "type": "select",
                  "configurable": false,
                  "props": {
                    "placeholder": "请选择",
                    "options": [
                      {
                        "label": "top",
                        "value": "top"
                      },
                      {
                        "label": "middle",
                        "value": "middle"
                      },
                      {
                        "label": "bottom",
                        "value": "bottom"
                      },
                      {
                        "label": "baseline",
                        "value": "baseline"
                      },
                      {
                        "label": "stretch",
                        "value": "stretch"
                      }
                    ]
                  }
                },
                "styles": {
                  "label": "其他样式",
                  "value": "",
                  "type": "textarea"
                }
              },
              "slots": [
                "default"
              ],
              "children": {
                "default": [
                  {
                    "component": "ta-elevator",
                    "info": {
                      "name": "升降机",
                      "dir": "elevator"
                    },
                    "setting": {
                      "title": {
                        "label": "标题",
                        "value": "升降机",
                        "type": "input",
                        "props": {
                          "placeholder": "请填写标题"
                        }
                      }
                    },
                    "slots": [
                      "default"
                    ],
                    "children": {
                      "default": []
                    },
                    "style": {
                      "height": "320px"
                    }
                  }
                ]
              },
              "style": {
                "marginTop": "24px"
              }
            },
            {
              "component": "ta-view",
              "info": {
                "name": "视图容器",
                "dir": "view"
              },
              "setting": {
                "tag": {
                  "label": "标签",
                  "value": "div",
                  "type": "select",
                  "props": {
                    "placeholder": "请选择",
                    "multiple": false,
                    "options": [
                      {
                        "label": "div",
                        "value": "div"
                      },
                      {
                        "label": "p",
                        "value": "p"
                      },
                      {
                        "label": "ul",
                        "value": "ul"
                      },
                      {
                        "label": "li",
                        "value": "li"
                      },
                      {
                        "label": "span",
                        "value": "span"
                      },
                      {
                        "label": "h1",
                        "value": "h1"
                      },
                      {
                        "label": "h2",
                        "value": "h2"
                      },
                      {
                        "label": "h3",
                        "value": "h3"
                      },
                      {
                        "label": "h4",
                        "value": "h4"
                      },
                      {
                        "label": "h5",
                        "value": "h5"
                      },
                      {
                        "label": "h6",
                        "value": "h6"
                      }
                    ]
                  }
                },
                "display": {
                  "label": "display",
                  "value": "",
                  "type": "select",
                  "props": {
                    "placeholder": "请选择",
                    "options": [
                      {
                        "label": "flex",
                        "value": "flex"
                      },
                      {
                        "label": "block",
                        "value": "block"
                      },
                      {
                        "label": "inline-block",
                        "value": "inline-block"
                      },
                      {
                        "label": "inline",
                        "value": "inline"
                      }
                    ]
                  },
                  "relation": {
                    "flex": [
                      "direction",
                      "wrap",
                      "justify",
                      "align"
                    ]
                  }
                },
                "direction": {
                  "label": "排列方向",
                  "value": "row",
                  "type": "select",
                  "configurable": false,
                  "props": {
                    "placeholder": "请选择",
                    "options": [
                      {
                        "label": "水平",
                        "value": "row"
                      },
                      {
                        "label": "垂直",
                        "value": "column"
                      }
                    ]
                  }
                },
                "wrap": {
                  "label": "容器换行",
                  "value": "nowrap",
                  "type": "select",
                  "configurable": false,
                  "props": {
                    "placeholder": "请选择",
                    "options": [
                      {
                        "label": "单行",
                        "value": "nowrap"
                      },
                      {
                        "label": "多行",
                        "value": "wrap"
                      }
                    ]
                  }
                },
                "justify": {
                  "label": "主轴对齐方式",
                  "value": "",
                  "type": "select",
                  "configurable": false,
                  "props": {
                    "placeholder": "请选择",
                    "options": [
                      {
                        "label": "left",
                        "value": "left"
                      },
                      {
                        "label": "center",
                        "value": "center"
                      },
                      {
                        "label": "right",
                        "value": "right"
                      },
                      {
                        "label": "between",
                        "value": "between"
                      },
                      {
                        "label": "around",
                        "value": "around"
                      }
                    ]
                  }
                },
                "align": {
                  "label": "侧轴对齐方式",
                  "value": "",
                  "type": "select",
                  "configurable": false,
                  "props": {
                    "placeholder": "请选择",
                    "options": [
                      {
                        "label": "top",
                        "value": "top"
                      },
                      {
                        "label": "middle",
                        "value": "middle"
                      },
                      {
                        "label": "bottom",
                        "value": "bottom"
                      },
                      {
                        "label": "baseline",
                        "value": "baseline"
                      },
                      {
                        "label": "stretch",
                        "value": "stretch"
                      }
                    ]
                  }
                },
                "styles": {
                  "label": "其他样式",
                  "value": "",
                  "type": "textarea"
                }
              },
              "slots": [
                "default"
              ],
              "children": {
                "default": [
                  {
                    "component": "ta-elevator",
                    "info": {
                      "name": "升降机",
                      "dir": "elevator"
                    },
                    "setting": {
                      "title": {
                        "label": "标题",
                        "value": "升降机",
                        "type": "input",
                        "props": {
                          "placeholder": "请填写标题"
                        }
                      }
                    },
                    "slots": [
                      "default"
                    ],
                    "children": {
                      "default": []
                    },
                    "style": {
                      "height": "300px"
                    }
                  }
                ]
              },
              "style": {
                "marginTop": "24px"
              }
            }
          ],
          "col4": [
            {
              "component": "ta-view",
              "info": {
                "name": "视图容器",
                "dir": "view"
              },
              "setting": {
                "tag": {
                  "label": "标签",
                  "value": "div",
                  "type": "select",
                  "props": {
                    "placeholder": "请选择",
                    "multiple": false,
                    "options": [
                      {
                        "label": "div",
                        "value": "div"
                      },
                      {
                        "label": "p",
                        "value": "p"
                      },
                      {
                        "label": "ul",
                        "value": "ul"
                      },
                      {
                        "label": "li",
                        "value": "li"
                      },
                      {
                        "label": "span",
                        "value": "span"
                      },
                      {
                        "label": "h1",
                        "value": "h1"
                      },
                      {
                        "label": "h2",
                        "value": "h2"
                      },
                      {
                        "label": "h3",
                        "value": "h3"
                      },
                      {
                        "label": "h4",
                        "value": "h4"
                      },
                      {
                        "label": "h5",
                        "value": "h5"
                      },
                      {
                        "label": "h6",
                        "value": "h6"
                      }
                    ]
                  }
                },
                "display": {
                  "label": "display",
                  "value": "",
                  "type": "select",
                  "props": {
                    "placeholder": "请选择",
                    "options": [
                      {
                        "label": "flex",
                        "value": "flex"
                      },
                      {
                        "label": "block",
                        "value": "block"
                      },
                      {
                        "label": "inline-block",
                        "value": "inline-block"
                      },
                      {
                        "label": "inline",
                        "value": "inline"
                      }
                    ]
                  },
                  "relation": {
                    "flex": [
                      "direction",
                      "wrap",
                      "justify",
                      "align"
                    ]
                  }
                },
                "direction": {
                  "label": "排列方向",
                  "value": "row",
                  "type": "select",
                  "configurable": false,
                  "props": {
                    "placeholder": "请选择",
                    "options": [
                      {
                        "label": "水平",
                        "value": "row"
                      },
                      {
                        "label": "垂直",
                        "value": "column"
                      }
                    ]
                  }
                },
                "wrap": {
                  "label": "容器换行",
                  "value": "nowrap",
                  "type": "select",
                  "configurable": false,
                  "props": {
                    "placeholder": "请选择",
                    "options": [
                      {
                        "label": "单行",
                        "value": "nowrap"
                      },
                      {
                        "label": "多行",
                        "value": "wrap"
                      }
                    ]
                  }
                },
                "justify": {
                  "label": "主轴对齐方式",
                  "value": "",
                  "type": "select",
                  "configurable": false,
                  "props": {
                    "placeholder": "请选择",
                    "options": [
                      {
                        "label": "left",
                        "value": "left"
                      },
                      {
                        "label": "center",
                        "value": "center"
                      },
                      {
                        "label": "right",
                        "value": "right"
                      },
                      {
                        "label": "between",
                        "value": "between"
                      },
                      {
                        "label": "around",
                        "value": "around"
                      }
                    ]
                  }
                },
                "align": {
                  "label": "侧轴对齐方式",
                  "value": "",
                  "type": "select",
                  "configurable": false,
                  "props": {
                    "placeholder": "请选择",
                    "options": [
                      {
                        "label": "top",
                        "value": "top"
                      },
                      {
                        "label": "middle",
                        "value": "middle"
                      },
                      {
                        "label": "bottom",
                        "value": "bottom"
                      },
                      {
                        "label": "baseline",
                        "value": "baseline"
                      },
                      {
                        "label": "stretch",
                        "value": "stretch"
                      }
                    ]
                  }
                },
                "styles": {
                  "label": "其他样式",
                  "value": "",
                  "type": "textarea"
                }
              },
              "slots": [
                "default"
              ],
              "children": {
                "default": [
                  {
                    "component": "ta-environment",
                    "info": {
                      "name": "环境监测",
                      "dir": "environment"
                    },
                    "setting": {
                      "title": {
                        "label": "标题",
                        "value": "环境监测",
                        "type": "input",
                        "props": {
                          "placeholder": "请填写标题"
                        }
                      }
                    },
                    "slots": [
                      "default"
                    ],
                    "children": {
                      "default": []
                    },
                    "style": {
                      "width": "100%",
                      "height": "100%"
                    }
                  }
                ]
              },
              "style": {
                "height": "50%"
              }
            },
            {
              "component": "ta-view",
              "info": {
                "name": "视图容器",
                "dir": "view"
              },
              "setting": {
                "tag": {
                  "label": "标签",
                  "value": "div",
                  "type": "select",
                  "props": {
                    "placeholder": "请选择",
                    "multiple": false,
                    "options": [
                      {
                        "label": "div",
                        "value": "div"
                      },
                      {
                        "label": "p",
                        "value": "p"
                      },
                      {
                        "label": "ul",
                        "value": "ul"
                      },
                      {
                        "label": "li",
                        "value": "li"
                      },
                      {
                        "label": "span",
                        "value": "span"
                      },
                      {
                        "label": "h1",
                        "value": "h1"
                      },
                      {
                        "label": "h2",
                        "value": "h2"
                      },
                      {
                        "label": "h3",
                        "value": "h3"
                      },
                      {
                        "label": "h4",
                        "value": "h4"
                      },
                      {
                        "label": "h5",
                        "value": "h5"
                      },
                      {
                        "label": "h6",
                        "value": "h6"
                      }
                    ]
                  }
                },
                "display": {
                  "label": "display",
                  "value": "",
                  "type": "select",
                  "props": {
                    "placeholder": "请选择",
                    "options": [
                      {
                        "label": "flex",
                        "value": "flex"
                      },
                      {
                        "label": "block",
                        "value": "block"
                      },
                      {
                        "label": "inline-block",
                        "value": "inline-block"
                      },
                      {
                        "label": "inline",
                        "value": "inline"
                      }
                    ]
                  },
                  "relation": {
                    "flex": [
                      "direction",
                      "wrap",
                      "justify",
                      "align"
                    ]
                  }
                },
                "direction": {
                  "label": "排列方向",
                  "value": "row",
                  "type": "select",
                  "configurable": false,
                  "props": {
                    "placeholder": "请选择",
                    "options": [
                      {
                        "label": "水平",
                        "value": "row"
                      },
                      {
                        "label": "垂直",
                        "value": "column"
                      }
                    ]
                  }
                },
                "wrap": {
                  "label": "容器换行",
                  "value": "nowrap",
                  "type": "select",
                  "configurable": false,
                  "props": {
                    "placeholder": "请选择",
                    "options": [
                      {
                        "label": "单行",
                        "value": "nowrap"
                      },
                      {
                        "label": "多行",
                        "value": "wrap"
                      }
                    ]
                  }
                },
                "justify": {
                  "label": "主轴对齐方式",
                  "value": "",
                  "type": "select",
                  "configurable": false,
                  "props": {
                    "placeholder": "请选择",
                    "options": [
                      {
                        "label": "left",
                        "value": "left"
                      },
                      {
                        "label": "center",
                        "value": "center"
                      },
                      {
                        "label": "right",
                        "value": "right"
                      },
                      {
                        "label": "between",
                        "value": "between"
                      },
                      {
                        "label": "around",
                        "value": "around"
                      }
                    ]
                  }
                },
                "align": {
                  "label": "侧轴对齐方式",
                  "value": "",
                  "type": "select",
                  "configurable": false,
                  "props": {
                    "placeholder": "请选择",
                    "options": [
                      {
                        "label": "top",
                        "value": "top"
                      },
                      {
                        "label": "middle",
                        "value": "middle"
                      },
                      {
                        "label": "bottom",
                        "value": "bottom"
                      },
                      {
                        "label": "baseline",
                        "value": "baseline"
                      },
                      {
                        "label": "stretch",
                        "value": "stretch"
                      }
                    ]
                  }
                },
                "styles": {
                  "label": "其他样式",
                  "value": "",
                  "type": "textarea"
                }
              },
              "slots": [
                "default"
              ],
              "children": {
                "default": [
                  {
                    "component": "ta-elevator",
                    "info": {
                      "name": "升降机",
                      "dir": "elevator"
                    },
                    "setting": {
                      "title": {
                        "label": "标题",
                        "value": "升降机",
                        "type": "input",
                        "props": {
                          "placeholder": "请填写标题"
                        }
                      }
                    },
                    "slots": [
                      "default"
                    ],
                    "children": {
                      "default": []
                    },
                    "style": {
                      "height": "100%"
                    }
                  }
                ]
              },
              "style": {
                "height": "48%",
                "marginTop": "24px"
              }
            }
          ],
          "col5": [
            {
              "component": "ta-view",
              "info": {
                "name": "视图容器",
                "dir": "view"
              },
              "setting": {
                "tag": {
                  "label": "标签",
                  "value": "div",
                  "type": "select",
                  "props": {
                    "placeholder": "请选择",
                    "multiple": false,
                    "options": [
                      {
                        "label": "div",
                        "value": "div"
                      },
                      {
                        "label": "p",
                        "value": "p"
                      },
                      {
                        "label": "ul",
                        "value": "ul"
                      },
                      {
                        "label": "li",
                        "value": "li"
                      },
                      {
                        "label": "span",
                        "value": "span"
                      },
                      {
                        "label": "h1",
                        "value": "h1"
                      },
                      {
                        "label": "h2",
                        "value": "h2"
                      },
                      {
                        "label": "h3",
                        "value": "h3"
                      },
                      {
                        "label": "h4",
                        "value": "h4"
                      },
                      {
                        "label": "h5",
                        "value": "h5"
                      },
                      {
                        "label": "h6",
                        "value": "h6"
                      }
                    ]
                  }
                },
                "display": {
                  "label": "display",
                  "value": "",
                  "type": "select",
                  "props": {
                    "placeholder": "请选择",
                    "options": [
                      {
                        "label": "flex",
                        "value": "flex"
                      },
                      {
                        "label": "block",
                        "value": "block"
                      },
                      {
                        "label": "inline-block",
                        "value": "inline-block"
                      },
                      {
                        "label": "inline",
                        "value": "inline"
                      }
                    ]
                  },
                  "relation": {
                    "flex": [
                      "direction",
                      "wrap",
                      "justify",
                      "align"
                    ]
                  }
                },
                "direction": {
                  "label": "排列方向",
                  "value": "row",
                  "type": "select",
                  "configurable": false,
                  "props": {
                    "placeholder": "请选择",
                    "options": [
                      {
                        "label": "水平",
                        "value": "row"
                      },
                      {
                        "label": "垂直",
                        "value": "column"
                      }
                    ]
                  }
                },
                "wrap": {
                  "label": "容器换行",
                  "value": "nowrap",
                  "type": "select",
                  "configurable": false,
                  "props": {
                    "placeholder": "请选择",
                    "options": [
                      {
                        "label": "单行",
                        "value": "nowrap"
                      },
                      {
                        "label": "多行",
                        "value": "wrap"
                      }
                    ]
                  }
                },
                "justify": {
                  "label": "主轴对齐方式",
                  "value": "",
                  "type": "select",
                  "configurable": false,
                  "props": {
                    "placeholder": "请选择",
                    "options": [
                      {
                        "label": "left",
                        "value": "left"
                      },
                      {
                        "label": "center",
                        "value": "center"
                      },
                      {
                        "label": "right",
                        "value": "right"
                      },
                      {
                        "label": "between",
                        "value": "between"
                      },
                      {
                        "label": "around",
                        "value": "around"
                      }
                    ]
                  }
                },
                "align": {
                  "label": "侧轴对齐方式",
                  "value": "",
                  "type": "select",
                  "configurable": false,
                  "props": {
                    "placeholder": "请选择",
                    "options": [
                      {
                        "label": "top",
                        "value": "top"
                      },
                      {
                        "label": "middle",
                        "value": "middle"
                      },
                      {
                        "label": "bottom",
                        "value": "bottom"
                      },
                      {
                        "label": "baseline",
                        "value": "baseline"
                      },
                      {
                        "label": "stretch",
                        "value": "stretch"
                      }
                    ]
                  }
                },
                "styles": {
                  "label": "其他样式",
                  "value": "",
                  "type": "textarea"
                }
              },
              "slots": [
                "default"
              ],
              "children": {
                "default": [
                  {
                    "component": "ta-elevator",
                    "info": {
                      "name": "升降机",
                      "dir": "elevator"
                    },
                    "setting": {
                      "title": {
                        "label": "标题",
                        "value": "升降机",
                        "type": "input",
                        "props": {
                          "placeholder": "请填写标题"
                        }
                      }
                    },
                    "slots": [
                      "default"
                    ],
                    "children": {
                      "default": []
                    },
                    "style": {
                      "height": "300px"
                    }
                  }
                ]
              },
              "style": {}
            },
            {
              "component": "ta-view",
              "info": {
                "name": "视图容器",
                "dir": "view"
              },
              "setting": {
                "tag": {
                  "label": "标签",
                  "value": "div",
                  "type": "select",
                  "props": {
                    "placeholder": "请选择",
                    "multiple": false,
                    "options": [
                      {
                        "label": "div",
                        "value": "div"
                      },
                      {
                        "label": "p",
                        "value": "p"
                      },
                      {
                        "label": "ul",
                        "value": "ul"
                      },
                      {
                        "label": "li",
                        "value": "li"
                      },
                      {
                        "label": "span",
                        "value": "span"
                      },
                      {
                        "label": "h1",
                        "value": "h1"
                      },
                      {
                        "label": "h2",
                        "value": "h2"
                      },
                      {
                        "label": "h3",
                        "value": "h3"
                      },
                      {
                        "label": "h4",
                        "value": "h4"
                      },
                      {
                        "label": "h5",
                        "value": "h5"
                      },
                      {
                        "label": "h6",
                        "value": "h6"
                      }
                    ]
                  }
                },
                "display": {
                  "label": "display",
                  "value": "",
                  "type": "select",
                  "props": {
                    "placeholder": "请选择",
                    "options": [
                      {
                        "label": "flex",
                        "value": "flex"
                      },
                      {
                        "label": "block",
                        "value": "block"
                      },
                      {
                        "label": "inline-block",
                        "value": "inline-block"
                      },
                      {
                        "label": "inline",
                        "value": "inline"
                      }
                    ]
                  },
                  "relation": {
                    "flex": [
                      "direction",
                      "wrap",
                      "justify",
                      "align"
                    ]
                  }
                },
                "direction": {
                  "label": "排列方向",
                  "value": "row",
                  "type": "select",
                  "configurable": false,
                  "props": {
                    "placeholder": "请选择",
                    "options": [
                      {
                        "label": "水平",
                        "value": "row"
                      },
                      {
                        "label": "垂直",
                        "value": "column"
                      }
                    ]
                  }
                },
                "wrap": {
                  "label": "容器换行",
                  "value": "nowrap",
                  "type": "select",
                  "configurable": false,
                  "props": {
                    "placeholder": "请选择",
                    "options": [
                      {
                        "label": "单行",
                        "value": "nowrap"
                      },
                      {
                        "label": "多行",
                        "value": "wrap"
                      }
                    ]
                  }
                },
                "justify": {
                  "label": "主轴对齐方式",
                  "value": "",
                  "type": "select",
                  "configurable": false,
                  "props": {
                    "placeholder": "请选择",
                    "options": [
                      {
                        "label": "left",
                        "value": "left"
                      },
                      {
                        "label": "center",
                        "value": "center"
                      },
                      {
                        "label": "right",
                        "value": "right"
                      },
                      {
                        "label": "between",
                        "value": "between"
                      },
                      {
                        "label": "around",
                        "value": "around"
                      }
                    ]
                  }
                },
                "align": {
                  "label": "侧轴对齐方式",
                  "value": "",
                  "type": "select",
                  "configurable": false,
                  "props": {
                    "placeholder": "请选择",
                    "options": [
                      {
                        "label": "top",
                        "value": "top"
                      },
                      {
                        "label": "middle",
                        "value": "middle"
                      },
                      {
                        "label": "bottom",
                        "value": "bottom"
                      },
                      {
                        "label": "baseline",
                        "value": "baseline"
                      },
                      {
                        "label": "stretch",
                        "value": "stretch"
                      }
                    ]
                  }
                },
                "styles": {
                  "label": "其他样式",
                  "value": "",
                  "type": "textarea"
                }
              },
              "slots": [
                "default"
              ],
              "children": {
                "default": [
                  {
                    "component": "ta-elevator",
                    "info": {
                      "name": "升降机",
                      "dir": "elevator"
                    },
                    "setting": {
                      "title": {
                        "label": "标题",
                        "value": "升降机",
                        "type": "input",
                        "props": {
                          "placeholder": "请填写标题"
                        }
                      }
                    },
                    "slots": [
                      "default"
                    ],
                    "children": {
                      "default": []
                    },
                    "style": {
                      "height": "320px"
                    }
                  }
                ]
              },
              "style": {
                "marginTop": "24px"
              }
            },
            {
              "component": "ta-view",
              "info": {
                "name": "视图容器",
                "dir": "view"
              },
              "setting": {
                "tag": {
                  "label": "标签",
                  "value": "div",
                  "type": "select",
                  "props": {
                    "placeholder": "请选择",
                    "multiple": false,
                    "options": [
                      {
                        "label": "div",
                        "value": "div"
                      },
                      {
                        "label": "p",
                        "value": "p"
                      },
                      {
                        "label": "ul",
                        "value": "ul"
                      },
                      {
                        "label": "li",
                        "value": "li"
                      },
                      {
                        "label": "span",
                        "value": "span"
                      },
                      {
                        "label": "h1",
                        "value": "h1"
                      },
                      {
                        "label": "h2",
                        "value": "h2"
                      },
                      {
                        "label": "h3",
                        "value": "h3"
                      },
                      {
                        "label": "h4",
                        "value": "h4"
                      },
                      {
                        "label": "h5",
                        "value": "h5"
                      },
                      {
                        "label": "h6",
                        "value": "h6"
                      }
                    ]
                  }
                },
                "display": {
                  "label": "display",
                  "value": "",
                  "type": "select",
                  "props": {
                    "placeholder": "请选择",
                    "options": [
                      {
                        "label": "flex",
                        "value": "flex"
                      },
                      {
                        "label": "block",
                        "value": "block"
                      },
                      {
                        "label": "inline-block",
                        "value": "inline-block"
                      },
                      {
                        "label": "inline",
                        "value": "inline"
                      }
                    ]
                  },
                  "relation": {
                    "flex": [
                      "direction",
                      "wrap",
                      "justify",
                      "align"
                    ]
                  }
                },
                "direction": {
                  "label": "排列方向",
                  "value": "row",
                  "type": "select",
                  "configurable": false,
                  "props": {
                    "placeholder": "请选择",
                    "options": [
                      {
                        "label": "水平",
                        "value": "row"
                      },
                      {
                        "label": "垂直",
                        "value": "column"
                      }
                    ]
                  }
                },
                "wrap": {
                  "label": "容器换行",
                  "value": "nowrap",
                  "type": "select",
                  "configurable": false,
                  "props": {
                    "placeholder": "请选择",
                    "options": [
                      {
                        "label": "单行",
                        "value": "nowrap"
                      },
                      {
                        "label": "多行",
                        "value": "wrap"
                      }
                    ]
                  }
                },
                "justify": {
                  "label": "主轴对齐方式",
                  "value": "",
                  "type": "select",
                  "configurable": false,
                  "props": {
                    "placeholder": "请选择",
                    "options": [
                      {
                        "label": "left",
                        "value": "left"
                      },
                      {
                        "label": "center",
                        "value": "center"
                      },
                      {
                        "label": "right",
                        "value": "right"
                      },
                      {
                        "label": "between",
                        "value": "between"
                      },
                      {
                        "label": "around",
                        "value": "around"
                      }
                    ]
                  }
                },
                "align": {
                  "label": "侧轴对齐方式",
                  "value": "",
                  "type": "select",
                  "configurable": false,
                  "props": {
                    "placeholder": "请选择",
                    "options": [
                      {
                        "label": "top",
                        "value": "top"
                      },
                      {
                        "label": "middle",
                        "value": "middle"
                      },
                      {
                        "label": "bottom",
                        "value": "bottom"
                      },
                      {
                        "label": "baseline",
                        "value": "baseline"
                      },
                      {
                        "label": "stretch",
                        "value": "stretch"
                      }
                    ]
                  }
                },
                "styles": {
                  "label": "其他样式",
                  "value": "",
                  "type": "textarea"
                }
              },
              "slots": [
                "default"
              ],
              "children": {
                "default": [
                  {
                    "component": "ta-elevator",
                    "info": {
                      "name": "升降机",
                      "dir": "elevator"
                    },
                    "setting": {
                      "title": {
                        "label": "标题",
                        "value": "升降机",
                        "type": "input",
                        "props": {
                          "placeholder": "请填写标题"
                        }
                      }
                    },
                    "slots": [
                      "default"
                    ],
                    "children": {
                      "default": []
                    },
                    "style": {
                      "height": "300px"
                    }
                  }
                ]
              },
              "style": {
                "marginTop": "24px"
              }
            }
          ]
        },
        "style": {
          "marginTop": "20px",
          "marginBottom": "20px",
          "marginLeft": "20px",
          "marginRight": "20px"
        }
      }
    ]
  },
  "style": {
    "width": "100%",
    "height": "100%",
    "marginLeft": "auto",
    "marginRight": "auto"
  }
}
