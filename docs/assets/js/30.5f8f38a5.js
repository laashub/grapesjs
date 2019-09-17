(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{215:function(t,s,a){"use strict";a.r(s);var e=a(1),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),a("p",[t._v("This module allows to manage the stack of changes applied in canvas.\nOnce the editor is instantiated you can use its API. Before using these methods you should get the module from the instance")]),t._m(1),t._m(2),t._m(3),a("p",[t._v("Get module configurations")]),t._m(4),t._m(5),a("p",[t._v("Returns "),a("strong",[a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object"),a("OutboundLink")],1)]),t._v(" Configuration object")]),t._m(6),a("p",[t._v("Add an entity (Model/Collection) to track\nNote: New Components and CSSRules will be added automatically")]),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),a("p",[t._v("Remove and stop tracking the entity (Model/Collection)")]),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),a("p",[t._v("Remove all entities")]),t._m(19),t._m(20),t._m(21),t._m(22),a("p",[t._v("Start/resume tracking changes")]),t._m(23),t._m(24),t._m(25),t._m(26),a("p",[t._v("Stop tracking changes")]),t._m(27),t._m(28),t._m(29),t._m(30),a("p",[t._v("Undo last change")]),t._m(31),t._m(32),t._m(33),t._m(34),a("p",[t._v("Undo all changes")]),t._m(35),t._m(36),t._m(37),t._m(38),a("p",[t._v("Redo last change")]),t._m(39),t._m(40),t._m(41),t._m(42),a("p",[t._v("Redo all changes")]),t._m(43),t._m(44),t._m(45),t._m(46),a("p",[t._v("Checks if exists an available undo")]),t._m(47),t._m(48),a("p",[t._v("Returns "),a("strong",[a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"}},[t._v("Boolean"),a("OutboundLink")],1)])]),t._m(49),a("p",[t._v("Checks if exists an available redo")]),t._m(50),t._m(51),a("p",[t._v("Returns "),a("strong",[a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"}},[t._v("Boolean"),a("OutboundLink")],1)])]),t._m(52),a("p",[t._v("Get stack of changes")]),t._m(53),t._m(54),t._m(55),t._m(56),a("p",[t._v("Clear the stack")]),t._m(57),t._m(58),t._m(59)])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"undomanager"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#undomanager","aria-hidden":"true"}},[this._v("#")]),this._v(" UndoManager")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" um "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" editor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UndoManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("a",{attrs:{href:"#getconfig"}},[t._v("getConfig")])]),a("li",[a("a",{attrs:{href:"#add"}},[t._v("add")])]),a("li",[a("a",{attrs:{href:"#remove"}},[t._v("remove")])]),a("li",[a("a",{attrs:{href:"#removeall"}},[t._v("removeAll")])]),a("li",[a("a",{attrs:{href:"#start"}},[t._v("start")])]),a("li",[a("a",{attrs:{href:"#stop"}},[t._v("stop")])]),a("li",[a("a",{attrs:{href:"#undo"}},[t._v("undo")])]),a("li",[a("a",{attrs:{href:"#undoall"}},[t._v("undoAll")])]),a("li",[a("a",{attrs:{href:"#redo"}},[t._v("redo")])]),a("li",[a("a",{attrs:{href:"#redoall"}},[t._v("redoAll")])]),a("li",[a("a",{attrs:{href:"#hasundo"}},[t._v("hasUndo")])]),a("li",[a("a",{attrs:{href:"#hasredo"}},[t._v("hasRedo")])]),a("li",[a("a",{attrs:{href:"#getstack"}},[t._v("getStack")])]),a("li",[a("a",{attrs:{href:"#clear"}},[t._v("clear")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"getconfig"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getconfig","aria-hidden":"true"}},[this._v("#")]),this._v(" getConfig")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" um"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// { ... }")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"add"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add","aria-hidden":"true"}},[this._v("#")]),this._v(" add")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters","aria-hidden":"true"}},[this._v("#")]),this._v(" Parameters")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("entity")]),s("strong",[this._v("(Model | Collection)")]),this._v(" Entity to track")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"examples-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("um"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("someModelOrCollection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Returns "),s("strong",[this._v("this")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"remove"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remove","aria-hidden":"true"}},[this._v("#")]),this._v(" remove")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"parameters-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Parameters")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("entity")]),s("strong",[this._v("(Model | Collection)")]),this._v(" Entity to remove")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"examples-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples-3","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("um"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("someModelOrCollection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Returns "),s("strong",[this._v("this")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"removeall"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#removeall","aria-hidden":"true"}},[this._v("#")]),this._v(" removeAll")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"examples-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples-4","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[this._v("um"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("removeAll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Returns "),s("strong",[this._v("this")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"start"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start","aria-hidden":"true"}},[this._v("#")]),this._v(" start")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"examples-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples-5","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[this._v("um"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Returns "),s("strong",[this._v("this")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"stop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stop","aria-hidden":"true"}},[this._v("#")]),this._v(" stop")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"examples-6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples-6","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[this._v("um"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("stop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Returns "),s("strong",[this._v("this")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"undo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#undo","aria-hidden":"true"}},[this._v("#")]),this._v(" undo")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"examples-7"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples-7","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[this._v("um"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("undo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Returns "),s("strong",[this._v("this")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"undoall"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#undoall","aria-hidden":"true"}},[this._v("#")]),this._v(" undoAll")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"examples-8"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples-8","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[this._v("um"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("undoAll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Returns "),s("strong",[this._v("this")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"redo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redo","aria-hidden":"true"}},[this._v("#")]),this._v(" redo")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"examples-9"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples-9","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[this._v("um"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("redo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Returns "),s("strong",[this._v("this")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"redoall"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redoall","aria-hidden":"true"}},[this._v("#")]),this._v(" redoAll")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"examples-10"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples-10","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[this._v("um"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("redoAll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Returns "),s("strong",[this._v("this")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"hasundo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hasundo","aria-hidden":"true"}},[this._v("#")]),this._v(" hasUndo")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"examples-11"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples-11","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[this._v("um"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("hasUndo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"hasredo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hasredo","aria-hidden":"true"}},[this._v("#")]),this._v(" hasRedo")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"examples-12"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples-12","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[this._v("um"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("hasRedo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"getstack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getstack","aria-hidden":"true"}},[this._v("#")]),this._v(" getStack")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"examples-13"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples-13","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" stack "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" um"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getStack")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nstack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("each")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Returns "),s("strong",[this._v("Collection")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"clear"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clear","aria-hidden":"true"}},[this._v("#")]),this._v(" clear")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"examples-14"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples-14","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[this._v("um"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("clear")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Returns "),s("strong",[this._v("this")])])}],!1,null,null,null);s.default=r.exports}}]);