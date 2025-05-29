"use strict";
(self["webpackChunkfamily_tree"] = self["webpackChunkfamily_tree"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;



const routes = [];
class AppRoutingModule {}
_class = AppRoutingModule;
_class.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _family_tree_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./family-tree.service */ 7640);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
var _class;




function AppComponent_ul_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
const _c0 = function (a0) {
  return {
    $implicit: a0
  };
};
function AppComponent_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_ul_4_ng_container_1_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx_r0.familyTree));
  }
}
function AppComponent_ng_template_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const member_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", member_r4.name, "(", member_r4.dateOfBirth, ")");
  }
}
function AppComponent_ng_template_5_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const member_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](member_r4.name);
  }
}
function AppComponent_ng_template_5_ul_5_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function AppComponent_ng_template_5_ul_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_ng_template_5_ul_5_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const child_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, child_r12));
  }
}
function AppComponent_ng_template_5_ul_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_ng_template_5_ul_5_ng_container_1_Template, 2, 4, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const member_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", member_r4.children);
  }
}
function AppComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AppComponent_ng_template_5_span_2_Template, 2, 2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AppComponent_ng_template_5_ng_template_3_Template, 1, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AppComponent_ng_template_5_ul_5_Template, 2, 1, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const member_r4 = ctx.$implicit;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", member_r4.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", member_r4.dateOfBirth)("ngIfElse", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", member_r4.children && member_r4.children.length);
  }
}
class AppComponent {
  constructor(familyTreeService) {
    this.familyTreeService = familyTreeService;
    this.title = 'family-tree';
    this.familyMembers = [];
    this.newMember = {};
    this.possibleRelationships = ['Child', 'Spouse', 'Sibling'];
    this.zoomLevel = 1.0;
    this.cursorX = 0;
    this.cursorY = 0;
    this.isDragging = false;
    this.previousX = 0;
    this.previousY = 0;
    this.familyTree = null;
    this.searchText = '';
    this.fullTree = null;
  }
  ngOnInit() {
    this.familyTreeService.getAllMembers().subscribe(tree => {
      this.familyTree = tree;
      this.fullTree = tree;
    });
  }
  onSearchChange() {
    const value = this.searchText.trim();
    if (value.length === 0) {
      this.familyTree = this.fullTree;
    } else if (value.length >= 3) {
      this.familyTreeService.getMembersByRootId(value).subscribe(member => {
        this.familyTree = member || null;
      });
    }
  }
  onScroll(event) {
    const delta = Math.sign(event.deltaY);
    if (delta > 0) {
      this.zoomOut();
    } else {
      this.zoomIn();
    }
    event.preventDefault();
  }
  onMouseDown(event) {
    if (event.button === 0) {
      this.isDragging = true;
      this.previousX = event.clientX;
      this.previousY = event.clientY;
    }
  }
  onMouseUp() {
    this.isDragging = false;
  }
  onMouseMove(event) {
    if (this.isDragging) {
      const deltaX = event.clientX - this.previousX;
      const deltaY = event.clientY - this.previousY;
      const scaleFactor = 1 / this.zoomLevel;
      this.cursorX -= deltaX * scaleFactor;
      this.cursorY -= deltaY * scaleFactor;
      this.previousX = event.clientX;
      this.previousY = event.clientY;
    }
  }
  zoomIn() {
    this.zoomLevel += 0.1;
  }
  zoomOut() {
    this.zoomLevel -= 0.1;
  }
}
_class = AppComponent;
_class.ɵfac = function AppComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_family_tree_service__WEBPACK_IMPORTED_MODULE_0__.FamilyTreeService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-root"]],
  hostBindings: function AppComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousewheel", function AppComponent_mousewheel_HostBindingHandler($event) {
        return ctx.onScroll($event);
      })("mousedown", function AppComponent_mousedown_HostBindingHandler($event) {
        return ctx.onMouseDown($event);
      })("mouseup", function AppComponent_mouseup_HostBindingHandler() {
        return ctx.onMouseUp();
      })("mousemove", function AppComponent_mousemove_HostBindingHandler($event) {
        return ctx.onMouseMove($event);
      });
    }
  },
  decls: 7,
  vars: 6,
  consts: [[1, "tree-container", "zoomed"], [2, "position", "absolute", "top", "20px", "right", "40px", "z-index", "10"], ["type", "text", "placeholder", "Pretraga po imenu...", 1, "search-input", 3, "ngModel", "ngModelChange", "input"], [1, "tree", 3, "mousedown"], [4, "ngIf"], ["renderMember", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngClass"], [4, "ngIf", "ngIfElse"], ["noDate", ""], [4, "ngFor", "ngForOf"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_2_listener($event) {
        return ctx.searchText = $event;
      })("input", function AppComponent_Template_input_input_2_listener() {
        return ctx.onSearchChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function AppComponent_Template_div_mousedown_3_listener($event) {
        return ctx.onMouseDown($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AppComponent_ul_4_Template, 2, 4, "ul", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AppComponent_ng_template_5_Template, 6, 4, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchText);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("transform", "scale(" + ctx.zoomLevel + ") translate(" + -ctx.cursorX + "px," + -ctx.cursorY + "px)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("draggable", ctx.isDragging);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.familyTree);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel],
  styles: [".tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  position: relative;\n  transition: all 0.5s;\n  display: flex;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  float: left;\n  text-align: center;\n  list-style-type: none;\n  position: relative;\n  padding: 20px 5px 0 5px;\n  transition: all 0.5s;\n  padding-bottom: 100px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 50%;\n  border-top: 1px solid #ccc;\n  width: 50%;\n  height: 20px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after {\n  right: auto;\n  left: 50%;\n  border-left: 1px solid #ccc;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:only-child::after, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:only-child::before {\n  display: none;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:only-child {\n  padding-top: 0;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child::before, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child::after {\n  border: 0 none;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child::before {\n  border-right: 1px solid #ccc;\n  border-radius: 0 5px 0 0;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child::after {\n  border-radius: 5px 0 0 0;\n}\n\n.tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 50%;\n  border-left: 1px solid #ccc;\n  width: 0;\n  height: 20px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  padding: 5px 10px;\n  text-decoration: none;\n  color: #666;\n  font-family: arial, verdana, tahoma;\n  font-size: 11px;\n  display: inline-block;\n  border-radius: 5px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background: #c8e4f8;\n  color: #000;\n  border: 1px solid #94a0b4;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + ul[_ngcontent-%COMP%]::before, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]::before {\n  border-color: #94a0b4;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.child-1[_ngcontent-%COMP%] {\n  background-color: #ffcccc;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.child-2[_ngcontent-%COMP%] {\n  background-color: #ccffcc;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.child-3[_ngcontent-%COMP%] {\n  background-color: #ccccff;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.child-4[_ngcontent-%COMP%] {\n  background-color: #ffffcc;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.child-5[_ngcontent-%COMP%] {\n  background-color: #b8eebf;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.child-6[_ngcontent-%COMP%] {\n  background-color: #a9e4f2;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.child-7[_ngcontent-%COMP%] {\n  background-color: #3db5d3;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.child-8[_ngcontent-%COMP%] {\n  background-color: #9199ee;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.child-1[_ngcontent-%COMP%]:hover, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.child-2[_ngcontent-%COMP%]:hover, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.child-3[_ngcontent-%COMP%]:hover, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.child-4[_ngcontent-%COMP%]:hover, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.child-5[_ngcontent-%COMP%]:hover, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.child-6[_ngcontent-%COMP%]:hover, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.child-7[_ngcontent-%COMP%]:hover, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.child-8[_ngcontent-%COMP%]:hover {\n  background-color: #e0e0e0;\n}\n\ninput.search-input[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  min-width: 220px;\n}\n\n.tree.draggable[_ngcontent-%COMP%] {\n  cursor: move;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBOztFQUVJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUVBOztFQUVJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTs7RUFFSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSw0QkFBQTtFQUNBLHdCQUFBO0FBQ0o7O0FBRUE7RUFDSSx3QkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBOztFQUVJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7Ozs7RUFJSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7Ozs7Ozs7O0VBUUkseUJBQUE7QUFDSjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIudHJlZSB1bCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnRyZWUgbGkge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDVweCAwIDVweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG59XHJcblxyXG4udHJlZSBsaTo6YmVmb3JlLFxyXG4udHJlZSBsaTo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogNTAlO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4udHJlZSBsaTo6YWZ0ZXIge1xyXG4gICAgcmlnaHQ6IGF1dG87XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjY2M7XHJcbn1cclxuXHJcbi50cmVlIGxpOm9ubHktY2hpbGQ6OmFmdGVyLFxyXG4udHJlZSBsaTpvbmx5LWNoaWxkOjpiZWZvcmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnRyZWUgbGk6b25seS1jaGlsZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxufVxyXG5cclxuLnRyZWUgbGk6Zmlyc3QtY2hpbGQ6OmJlZm9yZSxcclxuLnRyZWUgbGk6bGFzdC1jaGlsZDo6YWZ0ZXIge1xyXG4gICAgYm9yZGVyOiAwIG5vbmU7XHJcbn1cclxuXHJcbi50cmVlIGxpOmxhc3QtY2hpbGQ6OmJlZm9yZSB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCA1cHggMCAwO1xyXG59XHJcblxyXG4udHJlZSBsaTpmaXJzdC1jaGlsZDo6YWZ0ZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCAwO1xyXG59XHJcblxyXG4udHJlZSB1bCB1bDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi50cmVlIGxpIGEge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbiAgICBmb250LWZhbWlseTogYXJpYWwsIHZlcmRhbmEsIHRhaG9tYTtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnRyZWUgbGkgYTpob3ZlcixcclxuLnRyZWUgbGkgYTpob3Zlcit1bCBsaSBhIHtcclxuICAgIGJhY2tncm91bmQ6ICNjOGU0Zjg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5NGEwYjQ7XHJcbn1cclxuXHJcbi50cmVlIGxpIGE6aG92ZXIrdWwgbGk6OmFmdGVyLFxyXG4udHJlZSBsaSBhOmhvdmVyK3VsIGxpOjpiZWZvcmUsXHJcbi50cmVlIGxpIGE6aG92ZXIrdWw6OmJlZm9yZSxcclxuLnRyZWUgbGkgYTpob3Zlcit1bCB1bDo6YmVmb3JlIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzk0YTBiNDtcclxufVxyXG5cclxuLnRyZWUgbGkgYS5jaGlsZC0xIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmNjY2M7XHJcbn1cclxuXHJcbi50cmVlIGxpIGEuY2hpbGQtMiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NmZmNjO1xyXG59XHJcblxyXG4udHJlZSBsaSBhLmNoaWxkLTMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NmZjtcclxufVxyXG5cclxuLnRyZWUgbGkgYS5jaGlsZC00IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmY2M7XHJcbn1cclxuXHJcbi50cmVlIGxpIGEuY2hpbGQtNSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjhlZWJmO1xyXG59XHJcblxyXG4udHJlZSBsaSBhLmNoaWxkLTYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E5ZTRmMjtcclxufVxyXG5cclxuLnRyZWUgbGkgYS5jaGlsZC03IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZGI1ZDM7XHJcbn1cclxuXHJcbi50cmVlIGxpIGEuY2hpbGQtOCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTE5OWVlO1xyXG59XHJcblxyXG4udHJlZSBsaSBhLmNoaWxkLTE6aG92ZXIsXHJcbi50cmVlIGxpIGEuY2hpbGQtMjpob3ZlcixcclxuLnRyZWUgbGkgYS5jaGlsZC0zOmhvdmVyLFxyXG4udHJlZSBsaSBhLmNoaWxkLTQ6aG92ZXIsXHJcbi50cmVlIGxpIGEuY2hpbGQtNTpob3ZlcixcclxuLnRyZWUgbGkgYS5jaGlsZC02OmhvdmVyLFxyXG4udHJlZSBsaSBhLmNoaWxkLTc6aG92ZXIsXHJcbi50cmVlIGxpIGEuY2hpbGQtODpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xyXG59XHJcblxyXG5pbnB1dC5zZWFyY2gtaW5wdXQge1xyXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIG1pbi13aWR0aDogMjIwcHg7XHJcbn1cclxuXHJcbi50cmVlLmRyYWdnYWJsZSB7XHJcbiAgY3Vyc29yOiBtb3ZlO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;






class AppModule {}
_class = AppModule;
_class.ɵfac = function AppModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _class,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule]
  });
})();

/***/ }),

/***/ 7640:
/*!****************************************!*\
  !*** ./src/app/family-tree.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FamilyTreeService: () => (/* binding */ FamilyTreeService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2235);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
var _class;



class FamilyTreeService {
  constructor(http) {
    this.http = http;
    this.dataUrl = 'assets/family-tree.json';
  }
  getAllMembers() {
    return this.http.get(this.dataUrl);
  }
  getMembersByRootId(rootName) {
    // Returns the first (highest hierarchy) member whose name matches rootName
    // If multiple nodes have the same name, the one closest to the root is returned
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(observer => {
      this.getAllMembers().subscribe(tree => {
        const findMember = member => {
          if (member.name.toLowerCase().includes(rootName.toLowerCase())) return member; // first match = highest hierarchy
          for (const child of member.children) {
            const found = findMember(child);
            if (found) return found;
          }
          return undefined;
        };
        observer.next(findMember(tree));
        observer.complete();
      });
    });
  }
}
_class = FamilyTreeService;
_class.ɵfac = function FamilyTreeService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map