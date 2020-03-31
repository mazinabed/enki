webpackHotUpdate("static/development/pages/profile.js",{

/***/ "./src/components/ProfileHome/index.js":
/*!*********************************************!*\
  !*** ./src/components/ProfileHome/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _NavProfileHome_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../NavProfileHome/index */ "./src/components/NavProfileHome/index.js");
/* harmony import */ var _MemberSectionOnMHP_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../MemberSectionOnMHP.js */ "./src/components/MemberSectionOnMHP.js.js");
/* harmony import */ var _components_profileCard_FriendCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/profileCard/FriendCard */ "./src/components/profileCard/FriendCard/index.js");
/* harmony import */ var _components_profileCard_Wrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/profileCard/Wrapper */ "./src/components/profileCard/Wrapper/index.js");
/* harmony import */ var _components_profileCard_Title__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/profileCard/Title */ "./src/components/profileCard/Title/index.js");
/* harmony import */ var _friends_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../friends.json */ "./friends.json");
var _friends_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../friends.json */ "./friends.json", 1);







var _jsxFileName = "/Users/mazinabed/Desktop/enki/src/components/ProfileHome/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







 // export default function ProfileHome(props){
//     return(
//         <>
//         <NavProfileHome/>
//     <MemberSectionOnMHP/>
//   </>
//     )
// }

var ProfileHome = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ProfileHome, _Component);

  var _super = _createSuper(ProfileHome);

  function ProfileHome() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProfileHome);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      friends: _friends_json__WEBPACK_IMPORTED_MODULE_13__
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "removeFriend", function (id) {
      // Filter this.state.friends for friends with an id not equal to the id being removed
      var friends = _this.state.friends.filter(function (friend) {
        return friend.id !== id;
      }); // Set this.state.friends equal to the new friends array


      _this.setState({
        friends: friends
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProfileHome, [{
    key: "render",
    // Map over this.state.friends and render a FriendCard component for each friend object
    value: function render() {
      var _this2 = this;

      return __jsx(_components_profileCard_Wrapper__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 7
        }
      }, __jsx(_components_profileCard_Title__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 9
        }
      }, "Friends List"), this.state.friends.map(function (friend) {
        return __jsx(_components_profileCard_FriendCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
          removeFriend: _this2.removeFriend,
          id: friend.id,
          key: friend.id,
          name: friend.name,
          image: friend.image,
          occupation: friend.occupation,
          location: friend.location,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 11
          }
        });
      }));
    }
  }]);

  return ProfileHome;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ProfileHome);

/***/ })

})
//# sourceMappingURL=profile.js.bf230357e1af5bfb1acb.hot-update.js.map