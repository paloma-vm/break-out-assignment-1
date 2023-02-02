/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Background.ts":
/*!***************************!*\
  !*** ./src/Background.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ \"./src/Sprite.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar Background = /** @class */ (function (_super) {\n    __extends(Background, _super);\n    function Background(x, y, width, height, color) {\n        if (x === void 0) { x = 0; }\n        if (y === void 0) { y = 0; }\n        if (width === void 0) { width = 100; }\n        if (height === void 0) { height = 100; }\n        if (color === void 0) { color = '#d6d6d6'; }\n        return _super.call(this, x, y, width, height, color) || this;\n    }\n    return Background;\n}(_Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Background);\n\n\n//# sourceURL=webpack://break-out-assignments/./src/Background.ts?");

/***/ }),

/***/ "./src/Ball.ts":
/*!*********************!*\
  !*** ./src/Ball.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ \"./src/Sprite.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar Ball = /** @class */ (function (_super) {\n    __extends(Ball, _super);\n    function Ball(x, y, radius, color) {\n        if (x === void 0) { x = 0; }\n        if (y === void 0) { y = 0; }\n        if (radius === void 0) { radius = 10; }\n        if (color === void 0) { color = '#0095DD'; }\n        var _this = _super.call(this, x, y, 0, 0, color) || this;\n        _this.radius = radius;\n        _this.dx = 2;\n        _this.dy = -2;\n        return _this;\n    }\n    Ball.prototype.move = function () {\n        this.x += this.dx;\n        this.y += this.dy;\n    };\n    Ball.prototype.render = function (ctx) {\n        // console.log('drawing ball');\n        ctx.beginPath();\n        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);\n        ctx.fillStyle = this.color;\n        ctx.fill();\n        ctx.closePath();\n    };\n    return Ball;\n}(_Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ball);\n\n\n//# sourceURL=webpack://break-out-assignments/./src/Ball.ts?");

/***/ }),

/***/ "./src/Brick.ts":
/*!**********************!*\
  !*** ./src/Brick.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ \"./src/Sprite.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar Brick = /** @class */ (function (_super) {\n    __extends(Brick, _super);\n    function Brick(x, y, width, height, color, status) {\n        if (x === void 0) { x = 0; }\n        if (y === void 0) { y = 0; }\n        if (width === void 0) { width = 75; }\n        if (height === void 0) { height = 20; }\n        if (color === void 0) { color = '#b6d7a8'; }\n        if (status === void 0) { status = true; }\n        var _this = _super.call(this, x, y, width, height, color) || this;\n        _this.status = status; // adds a new property\n        return _this;\n    }\n    return Brick;\n}(_Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Brick);\n\n\n//# sourceURL=webpack://break-out-assignments/./src/Brick.ts?");

/***/ }),

/***/ "./src/Bricks.ts":
/*!***********************!*\
  !*** ./src/Bricks.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Brick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Brick */ \"./src/Brick.ts\");\n\nvar Bricks = /** @class */ (function () {\n    function Bricks(cols, rows) {\n        this.brickPadding = 10;\n        this.brickOffsetTop = 30;\n        this.brickOffsetLeft = 30;\n        this.brickWidth = 75;\n        this.brickHeight = 20;\n        this.cols = cols;\n        this.rows = rows;\n        this.bricks = [];\n        this.initialize();\n    }\n    Bricks.prototype.initialize = function () {\n        for (var c = 0; c < this.cols; c += 1) {\n            this.bricks[c] = [];\n            for (var r = 0; r < this.rows; r += 1) {\n                var brickX = c * (this.brickWidth + this.brickPadding) + this.brickOffsetLeft;\n                var brickY = r * (this.brickHeight + this.brickPadding) + this.brickOffsetTop;\n                // new way to make a new brick\n                this.bricks[c][r] = new _Brick__WEBPACK_IMPORTED_MODULE_0__[\"default\"](brickX, brickY);\n            }\n        }\n    };\n    Bricks.prototype.render = function (ctx) {\n        for (var c = 0; c < this.cols; c += 1) {\n            for (var r = 0; r < this.rows; r += 1) {\n                var brick = this.bricks[c][r];\n                if (brick.status === true) {\n                    brick.render(ctx);\n                }\n            }\n        }\n    };\n    return Bricks;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bricks);\n\n\n//# sourceURL=webpack://break-out-assignments/./src/Bricks.ts?");

/***/ }),

/***/ "./src/GameLabel.ts":
/*!**************************!*\
  !*** ./src/GameLabel.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ \"./src/Sprite.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n// a class to display score and lives\nvar GameLabel = /** @class */ (function (_super) {\n    __extends(GameLabel, _super);\n    function GameLabel(text, x, y, color, value, align, font) {\n        if (x === void 0) { x = 0; }\n        if (y === void 0) { y = 0; }\n        if (font === void 0) { font = '16px Helvetica'; }\n        var _this = \n        // call super with properties as you would initialize sprite\n        _super.call(this, x, y, 0, 0, color) || this;\n        _this.text = text;\n        _this.value = value;\n        _this.font = font;\n        _this.align = align;\n        return _this;\n    }\n    GameLabel.prototype.render = function (ctx) {\n        ctx.font = this.font;\n        ctx.fillStyle = this.color;\n        ctx.fillText(\"\".concat(this.text, \" \").concat(this.value), this.x, this.y);\n        ctx.textAlign = this.align;\n    };\n    return GameLabel;\n}(_Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameLabel);\n\n\n//# sourceURL=webpack://break-out-assignments/./src/GameLabel.ts?");

/***/ }),

/***/ "./src/Paddle.ts":
/*!***********************!*\
  !*** ./src/Paddle.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ \"./src/Sprite.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar Paddle = /** @class */ (function (_super) {\n    __extends(Paddle, _super);\n    function Paddle(x, y, width, height, color) {\n        if (width === void 0) { width = 75; }\n        if (height === void 0) { height = 10; }\n        if (color === void 0) { color = '#0095DD'; }\n        return _super.call(this, x, y, width, height, color) || this;\n    }\n    return Paddle;\n}(_Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Paddle);\n\n\n//# sourceURL=webpack://break-out-assignments/./src/Paddle.ts?");

/***/ }),

/***/ "./src/Sprite.ts":
/*!***********************!*\
  !*** ./src/Sprite.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Sprite = /** @class */ (function () {\n    function Sprite(x, y, width, height, color) {\n        if (x === void 0) { x = 0; }\n        if (y === void 0) { y = 0; }\n        if (width === void 0) { width = 100; }\n        if (height === void 0) { height = 100; }\n        if (color === void 0) { color = '#f00'; }\n        this.x = x;\n        this.y = y;\n        this.width = width;\n        this.height = height;\n        this.color = color;\n    }\n    Sprite.prototype.moveTo = function (x, y) {\n        this.x = x;\n        this.y = y; // be careful!! use = , not += !!!!!!!!!!\n    };\n    Sprite.prototype.moveBy = function (dx, dy) {\n        this.x += dx;\n        this.y += dy;\n    };\n    Sprite.prototype.render = function (ctx) {\n        // console.log('drawing brick', this.width, this.height, this.color, this.x, this.y);\n        ctx.beginPath();\n        ctx.rect(this.x, this.y, this.width, this.height);\n        ctx.fillStyle = this.color;\n        ctx.fill();\n        ctx.closePath();\n    };\n    return Sprite;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sprite);\n\n\n//# sourceURL=webpack://break-out-assignments/./src/Sprite.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ball */ \"./src/Ball.ts\");\n/* harmony import */ var _Paddle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Paddle */ \"./src/Paddle.ts\");\n/* harmony import */ var _Bricks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Bricks */ \"./src/Bricks.ts\");\n/* harmony import */ var _Background__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Background */ \"./src/Background.ts\");\n/* harmony import */ var _GameLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GameLabel */ \"./src/GameLabel.ts\");\n\n\n\n\n\n// JavaScript code goes here\nvar canvas = document.getElementById('myCanvas');\nvar ctx = canvas.getContext('2d');\n// ----------------------------------------------\n// Variables\n// ----------------------------------------------\nvar paddleHeight = 10;\nvar paddleWidth = 75;\nvar paddleXStart = (canvas.width - paddleWidth) / 2;\nvar paddleYStart = canvas.height - paddleHeight;\nvar background = new _Background__WEBPACK_IMPORTED_MODULE_3__[\"default\"](0, 0, canvas.width, canvas.height);\nvar ball = new _Ball__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nvar paddle = new _Paddle__WEBPACK_IMPORTED_MODULE_1__[\"default\"](paddleXStart, paddleYStart, paddleWidth, paddleHeight);\nvar rightPressed = false;\nvar leftPressed = false;\n// false because at the beginning the control buttons are not pressed\nvar rows = 3;\nvar cols = 5;\nvar bricks = new _Bricks__WEBPACK_IMPORTED_MODULE_2__[\"default\"](cols, rows);\nvar scoreLabel = new _GameLabel__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('Score: ', 100, 20, 'blue', 0, 'left');\nvar livesLabel = new _GameLabel__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('Lives: ', canvas.width - 70, 20, 'green', 3, 'right');\nscoreLabel.align = 'left';\nlivesLabel.align = 'right';\nscoreLabel.value = 0;\nlivesLabel.value = 3;\n// ----------------------------------------------\n// Functions\n// ----------------------------------------------\nfunction resetBallAndPaddle() {\n    ball.x = canvas.width / 2;\n    ball.y = canvas.height - 30;\n    ball.dx = 2;\n    ball.dy = -2;\n    paddle.x = (canvas.width - paddle.width) / 2;\n}\nfunction movePaddle() {\n    // checking to see if the RT or LT keys are pressed\n    if (rightPressed && paddle.x < canvas.width - paddle.width) {\n        paddle.moveBy(7, 0);\n    }\n    else if (leftPressed && paddle.x > 0) {\n        paddle.moveBy(-7, 0);\n    }\n}\nfunction mouseMoveHandler(e) {\n    var relativeX = e.clientX - canvas.offsetLeft;\n    if (relativeX > 0 && relativeX < canvas.width) {\n        paddle.moveTo(relativeX - paddle.width / 2, paddleYStart);\n    }\n}\nfunction keyDownHandler(e) {\n    if (e.key === 'Right' || e.key === 'ArrowRight') {\n        rightPressed = true;\n    }\n    else if (e.key === 'Left' || e.key === 'ArrowLeft') {\n        leftPressed = true;\n    }\n}\nfunction keyUpHandler(e) {\n    if (e.key === 'Right' || e.key === 'ArrowRight') {\n        rightPressed = false;\n    }\n    else if (e.key === 'Left' || e.key === 'ArrowLeft') {\n        leftPressed = false;\n    }\n}\nfunction collisionDetection() {\n    for (var c = 0; c < bricks.cols; c += 1) {\n        for (var r = 0; r < bricks.rows; r += 1) {\n            var brick = bricks.bricks[c][r];\n            if (brick.status === true) {\n                if (ball.x > brick.x\n                    && ball.x < brick.x + brick.width\n                    && ball.y > brick.y\n                    && ball.y < brick.y + brick.height) {\n                    ball.dy = -ball.dy;\n                    brick.status = false;\n                    scoreLabel.value += 1;\n                    if (scoreLabel.value === bricks.rows * bricks.cols) {\n                        alert('YOU WIN, CONGRATULATIONS!');\n                        document.location.reload();\n                    }\n                }\n            }\n        }\n    }\n}\nfunction collisionsWithCanvasAndPaddle() {\n    // bounce off top wall by reversing y-axis movement\n    if (ball.y + ball.dy < 0) {\n        ball.dy = -ball.dy;\n    }\n    // bounce off bottom wall\n    if (ball.y + ball.dy > canvas.height) {\n        ball.dy = -ball.dy;\n    }\n    // bounce off left and right\n    if (ball.x + ball.dx > canvas.width || ball.x + ball.dx < 0) {\n        ball.dx = -ball.dx;\n    }\n    if (ball.y + ball.dy > canvas.height || ball.y + ball.dy < 0) {\n        ball.dy = -ball.dy;\n    }\n    // adjusting for radius of ball so it doesn't 'sink' into the wall\n    if (ball.x + ball.dx > canvas.width - ball.radius || ball.x + ball.dx < ball.radius) {\n        ball.dx = -ball.dx;\n    }\n    // if ball hits bottom wall\n    if (ball.y + ball.dy < ball.radius) {\n        ball.dy = -ball.dy;\n    }\n    else if (ball.y + ball.dy > canvas.height - ball.radius) {\n        if (ball.x > paddle.x && ball.x < paddle.x + paddle.width) {\n            ball.dy = -ball.dy;\n        }\n        else {\n            // lose a life\n            livesLabel.value -= 1;\n            if (livesLabel.value < 1) {\n                alert('GAME OVER');\n                livesLabel.value = 3;\n                scoreLabel.value = 0;\n                document.location.reload();\n            }\n            else {\n                resetBallAndPaddle();\n            }\n        }\n    }\n}\n//  GAME LOOP ------------------------------------------------\nfunction draw() {\n    // clear the canvas\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    // call helper functions\n    background.render(ctx);\n    bricks.render(ctx);\n    paddle.render(ctx);\n    ball.render(ctx);\n    scoreLabel.render(ctx);\n    livesLabel.render(ctx);\n    collisionDetection();\n    ball.move();\n    movePaddle();\n    collisionsWithCanvasAndPaddle();\n    // draw the screen again\n    requestAnimationFrame(draw);\n}\n// event listeners for control buttons\ndocument.addEventListener('keydown', keyDownHandler, false);\ndocument.addEventListener('keyup', keyUpHandler, false);\ndocument.addEventListener('mousemove', mouseMoveHandler, false);\nresetBallAndPaddle();\ndraw();\n\n\n//# sourceURL=webpack://break-out-assignments/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;