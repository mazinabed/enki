module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./friends.json":
/*!**********************!*\
  !*** ./friends.json ***!
  \**********************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"name\":\"SpongeBob\",\"image\":\"https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014\",\"occupation\":\"Fry Cook\",\"location\":\"A Pineapple Under the Sea\"},{\"id\":2,\"name\":\"Mr. Krabs\",\"image\":\"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131\",\"occupation\":\"Restaurant Owner\",\"location\":\"A Giant Anchor\"},{\"id\":3,\"name\":\"Squidward\",\"image\":\"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626\",\"occupation\":\"Cashier\",\"location\":\"An Easter Island Head\"},{\"id\":4,\"name\":\"Dexter\",\"image\":\"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png\",\"occupation\":\"Boy Genius\",\"location\":\"A Secret Laboratory\"},{\"id\":5,\"name\":\"Courage\",\"image\":\"https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423\",\"occupation\":\"A Cowardly Dog\",\"location\":\"Nowhere, Kansas\"},{\"id\":6,\"name\":\"Doug Funnie\",\"image\":\"https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511\",\"occupation\":\"Student\",\"location\":\"Bluffington\"},{\"id\":7,\"name\":\"Bugs Bunny\",\"image\":\"https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607\",\"occupation\":\"Looney Toon\",\"location\":\"A Rabbit Burrow\"},{\"id\":8,\"name\":\"Johnny Bravo\",\"image\":\"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist\",\"occupation\":\"Ladies Man\",\"location\":\"Aron City\"},{\"id\":9,\"name\":\"Tommy Pickles\",\"image\":\"https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641\",\"occupation\":\"Adventurer\",\"location\":\"California\"},{\"id\":10,\"name\":\"Rocko\",\"image\":\"http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416\",\"occupation\":\"Cashier\",\"location\":\"O-Town, California\"},{\"id\":11,\"name\":\"Captain Planet\",\"image\":\"http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836\",\"occupation\":\"Superhero\",\"location\":\"Earth\"},{\"id\":12,\"name\":\"Ickis\",\"image\":\"http://static.tvtropes.org/pmwiki/pub/images/ickis.png\",\"occupation\":\"Ahhhh! A Real Monster!\",\"location\":\"Under a City Dump\"}]");

/***/ }),

/***/ "./src/components/MemberSectionOnMHP.js.js":
/*!*************************************************!*\
  !*** ./src/components/MemberSectionOnMHP.js.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MemberSectionOnMHP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/mazinabed/Desktop/enki/src/components/MemberSectionOnMHP.js.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function MemberSectionOnMHP() {
  return __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 1
    }
  }, __jsx("div", {
    className: "col-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 1
    }
  }, __jsx("div", {
    className: "card",
    style: {
      width: '18 px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 1
    }
  }, __jsx("img", {
    style: {
      width: '200px',
      height: '200px'
    },
    className: "card-img-top",
    src: "../MemberPic.jpeg",
    alt: "Card image cap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }), __jsx("div", {
    className: "card-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }
  }, __jsx("h5", {
    className: "card-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, "Card title"), __jsx("p", {
    className: "card-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, "Some quick example text to build on the card title and make up the bulk of the card's content."), __jsx("a", {
    href: "#",
    className: "btn btn-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, "Go somewhere")))));
}

/***/ }),

/***/ "./src/components/NavProfileHome/index.js":
/*!************************************************!*\
  !*** ./src/components/NavProfileHome/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavProfileHome; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/mazinabed/Desktop/enki/src/components/NavProfileHome/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function NavProfileHome() {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("nav", {
    className: "nav justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 1
    }
  }, "Enki")), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("button", {
    onClick: () => {
      localStorage.clear('token');
      window.location = '/';
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 3
    }
  }, "Logout")));
}

/***/ }),

/***/ "./src/components/PictureSlider.js":
/*!*****************************************!*\
  !*** ./src/components/PictureSlider.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import React from 'react';
// import { Fade } from 'react-slideshow-image';
// const fadeImages = [
//   'images/MemberPic.jpeg',
//   'images/slide_6.jpg',
//   'images/slide_7.jpg'
// ];
// const fadeProperties = {
//   duration: 5000,
//   transitionDuration: 500,
//   infinite: false,
//   indicators: true,
//   onChange: (oldIndex, newIndex) => {
//     console.log(`fade transition from ${oldIndex} to ${newIndex}`);
//   }
// }
// const Slideshow = () => {
//   return (
//     <div className="slide-container">
//       <Fade {...fadeProperties}>
//         <div className="each-fade">
//           <div className="image-container">
//             <img src={process.env.PUBLIC_URL + '../public/MemberPic.jpeg'} />
//           </div>
//           <h2>First Slide</h2>
//         </div>
//         <div className="each-fade">
//           <div className="image-container">
//             <img src={fadeImages[1]} />
//           </div>
//           <h2>Second Slide</h2>
//         </div>
//         <div className="each-fade">
//           <div className="image-container">
//             <img src={fadeImages[2]} />
//           </div>
//           <h2>Third Slide</h2>
//         </div>
//       </Fade>
//     </div>
//   )
// }
// export default Slideshow

/***/ }),

/***/ "./src/components/ProfileHome/index.js":
/*!*********************************************!*\
  !*** ./src/components/ProfileHome/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProfileHome; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavProfileHome_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../NavProfileHome/index */ "./src/components/NavProfileHome/index.js");
/* harmony import */ var _MemberSectionOnMHP_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MemberSectionOnMHP.js */ "./src/components/MemberSectionOnMHP.js.js");
/* harmony import */ var _components_profileCard_ProfileCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/profileCard/ProfileCard */ "./src/components/profileCard/ProfileCard.js");
var _jsxFileName = "/Users/mazinabed/Desktop/enki/src/components/ProfileHome/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function ProfileHome(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_NavProfileHome_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(_components_profileCard_ProfileCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "col-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }))));
}

/***/ }),

/***/ "./src/components/profileCard/FriendCard/index.js":
/*!********************************************************!*\
  !*** ./src/components/profileCard/FriendCard/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/mazinabed/Desktop/enki/src/components/profileCard/FriendCard/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function FriendCard(props) {
  return __jsx("div", {
    className: "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "img-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("img", {
    alt: props.name,
    src: props.image,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, "Name:"), " ", props.name), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, "Occupation:"), " ", props.occupation), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, "Location:"), " ", props.location))));
}

/* harmony default export */ __webpack_exports__["default"] = (FriendCard);

/***/ }),

/***/ "./src/components/profileCard/ProfileCard.js":
/*!***************************************************!*\
  !*** ./src/components/profileCard/ProfileCard.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavProfileHome_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../NavProfileHome/index */ "./src/components/NavProfileHome/index.js");
/* harmony import */ var _MemberSectionOnMHP_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MemberSectionOnMHP.js */ "./src/components/MemberSectionOnMHP.js.js");
/* harmony import */ var _components_profileCard_FriendCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/profileCard/FriendCard */ "./src/components/profileCard/FriendCard/index.js");
/* harmony import */ var _components_profileCard_Wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/profileCard/Wrapper */ "./src/components/profileCard/Wrapper/index.js");
/* harmony import */ var _components_profileCard_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/profileCard/Title */ "./src/components/profileCard/Title/index.js");
/* harmony import */ var _friends_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../friends.json */ "./friends.json");
var _friends_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../friends.json */ "./friends.json", 1);
var _jsxFileName = "/Users/mazinabed/Desktop/enki/src/components/profileCard/ProfileCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class ProfileCard extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      friends: _friends_json__WEBPACK_IMPORTED_MODULE_6__
    });

    _defineProperty(this, "removeFriend", id => {
      // Filter this.state.friends for friends with an id not equal to the id being removed
      const friends = this.state.friends.filter(friend => friend.id !== id); // Set this.state.friends equal to the new friends array

      this.setState({
        friends
      });
    });
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return __jsx(_components_profileCard_Wrapper__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 7
      }
    }, __jsx(_components_profileCard_Title__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }
    }, "Topics"), this.state.friends.map(friend => __jsx(_components_profileCard_FriendCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      removeFriend: this.removeFriend,
      id: friend.id,
      key: friend.id,
      name: friend.name,
      image: friend.image,
      occupation: friend.occupation,
      location: friend.location,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ProfileCard);

/***/ }),

/***/ "./src/components/profileCard/Title/index.js":
/*!***************************************************!*\
  !*** ./src/components/profileCard/Title/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/mazinabed/Desktop/enki/src/components/profileCard/Title/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Title(props) {
  return __jsx("h1", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 10
    }
  }, props.children);
}

/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./src/components/profileCard/Wrapper/index.js":
/*!*****************************************************!*\
  !*** ./src/components/profileCard/Wrapper/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/mazinabed/Desktop/enki/src/components/profileCard/Wrapper/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Wrapper(props) {
  return __jsx("div", {
    className: "wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 10
    }
  }, props.children);
}

/* harmony default export */ __webpack_exports__["default"] = (Wrapper);

/***/ }),

/***/ "./src/pages/profile.js":
/*!******************************!*\
  !*** ./src/pages/profile.js ***!
  \******************************/
/*! exports provided: default, getSeverSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProfilePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSeverSideProps", function() { return getSeverSideProps; });
/* harmony import */ var _components_ProfileHome_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/ProfileHome/index */ "./src/components/ProfileHome/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_PictureSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PictureSlider */ "./src/components/PictureSlider.js");
/* harmony import */ var _components_PictureSlider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_PictureSlider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/mazinabed/Desktop/enki/src/pages/profile.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function ProfilePage(user) {
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (!localStorage.getItem('token')) {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/profile', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then(response => {
      setData(response.data);
      console.log(response.data);
    });
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_ProfileHome_index__WEBPACK_IMPORTED_MODULE_0__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 10
    }
  }));
}
async function getSeverSideProps(context) {
  return {
    props: {
      authenticated: true
    }
  };
}

/***/ }),

/***/ 5:
/*!************************************!*\
  !*** multi ./src/pages/profile.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mazinabed/Desktop/enki/src/pages/profile.js */"./src/pages/profile.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=profile.js.map