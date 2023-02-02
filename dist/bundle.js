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

/***/ "./src/Background.js":
/*!***************************!*\
  !*** ./src/Background.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Sprite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite.js */ \"./src/Sprite.js\");\n\n\nclass Background extends _Sprite_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(x = 0, y = 0, width = 100, height = 100, color = '#d6d6d6') {\n    super(x, y, width, height, color); // pass arguments to Sprite!\n  }\n\n  render(ctx) {\n    ctx.beginPath();\n    ctx.rect(this.x, this.y, this.width, this.height);\n    ctx.fillStyle = this.color;\n    ctx.fill();\n    ctx.closePath();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Background);\n\n\n//# sourceURL=webpack://break-out-assignments/./src/Background.js?");

/***/ }),

/***/ "./src/Ball.js":
/*!*********************!*\
  !*** ./src/Ball.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ \"./src/Sprite.js\");\n\n\nclass Ball extends _Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(x = 0, y = 0, radius = 10, color = '#0095DD') {\n    super(x, y, 0, 0, color); // pass parameters to super (which is Sprite)\n    this.radius = radius;\n    this.dx = 2;\n    this.dy = -2;\n  }\n\n  move() {\n    this.x += this.dx;\n    this.y += this.dy;\n  }\n\n  render(ctx) { // Overrides the existing render method!\n    // console.log('drawing ball');\n    ctx.beginPath();\n    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);\n    ctx.fillStyle = this.color;\n    ctx.fill();\n    ctx.closePath();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ball);\n\n\n//# sourceURL=webpack://break-out-assignments/./src/Ball.js?");

/***/ }),

/***/ "./src/Brick.js":
/*!**********************!*\
  !*** ./src/Brick.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ \"./src/Sprite.js\");\n\n\nclass Brick extends _Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(x = 0, y = 0, width = 75, height = 20, color = '#b6d7a8', status = true) {\n    super(x, y, width, height, color); // pass arguments to Sprite!\n    this.status = status; // adds a new property\n  }\n\n  // render() is same as sprite, so don't have to show\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Brick);\n\n\n//# sourceURL=webpack://break-out-assignments/./src/Brick.js?");

/***/ }),

/***/ "./src/Bricks.js":
/*!***********************!*\
  !*** ./src/Bricks.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Brick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Brick */ \"./src/Brick.js\");\n\n\nclass Bricks {\n  constructor(cols, rows) {\n    this.brickPadding = 10;\n    this.brickOffsetTop = 30;\n    this.brickOffsetLeft = 30;\n    this.brickWidth = 75;\n    this.brickHeight = 20;\n    this.cols = cols;\n    this.rows = rows;\n    this.bricks = [];\n    // this.bricks = bricks; //bricks.bricks\n    this.initialize();\n  }\n\n  initialize() { // used old initializeBricks\n    for (let c = 0; c < this.cols; c += 1) {\n      this.bricks[c] = [];\n      for (let r = 0; r < this.rows; r += 1) {\n        // const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;\n        // const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;\n        const brickX = c * (this.brickWidth + this.brickPadding) + this.brickOffsetLeft;\n        const brickY = r * (this.brickHeight + this.brickPadding) + this.brickOffsetTop;\n        // bricks[c][r] = new Brick(brickX, brickY, this.width, this.height);\n        // new way to make a new brick\n        this.bricks[c][r] = new _Brick__WEBPACK_IMPORTED_MODULE_0__[\"default\"](brickX, brickY);\n      }\n    }\n  }\n\n  render(ctx) { // used old drawBricks\n    // console.log('drawing bricks');\n    for (let c = 0; c < this.cols; c += 1) {\n      for (let r = 0; r < this.rows; r += 1) {\n        const brick = this.bricks[c][r];\n        if (brick.status === true) {\n          brick.render(ctx);\n        }\n      }\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bricks);\n\n\n//# sourceURL=webpack://break-out-assignments/./src/Bricks.js?");

/***/ }),

/***/ "./src/GameLabel.js":
/*!**************************!*\
  !*** ./src/GameLabel.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ \"./src/Sprite.js\");\n\n// a class to display score and lives\nclass GameLabel extends _Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(text, x, y, color, value, align, font = '16px Helvetica') {\n    // call super with properties as you would initialize sprite\n    super(x, y, 0, 0, color);\n    // define the new properties here on this: this.text and this.font\n    this.text = text;\n    this.value = value;\n    this.font = font;\n    this.align = align;\n  }\n\n  render(ctx) {\n    // Add the code here to draw your text label\n    // set the font: with ctx.font = this.font\n    // Align the text with ctx.textAlign = this.align\n    // ...\n    ctx.font = this.font;\n    ctx.fillStyle = this.color;\n    // ctx.fillText(`Score: ${this.text}`, this.x, this.y);\n    ctx.fillText(`${this.text} ${this.value}`, this.x, this.y);\n    // console.log('drawing label');\n    // ctx.fillText(`Score: ${this.score}`, 8, 20);\n    ctx.textAlign = this.align;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameLabel);\n\n\n//# sourceURL=webpack://break-out-assignments/./src/GameLabel.js?");

/***/ }),

/***/ "./src/Paddle.js":
/*!***********************!*\
  !*** ./src/Paddle.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ \"./src/Sprite.js\");\n\n\nclass Paddle extends _Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(x, y, width = 75, height = 10, color = '#0095DD') {\n    super(x, y, width, height, color); // pass arguments to Sprite\n  }\n\n// moveTo, moveBy, render all inherited from Sprite\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Paddle);\n\n\n//# sourceURL=webpack://break-out-assignments/./src/Paddle.js?");

/***/ }),

/***/ "./src/Sprite.js":
/*!***********************!*\
  !*** ./src/Sprite.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Sprite {\n  constructor(x = 0, y = 0, width = 100, height = 100, color = '#f00') {\n    this.x = x;\n    this.y = y;\n    this.width = width;\n    this.height = height;\n    this.color = color;\n  }\n\n  moveTo(x, y) {\n    this.x = x;\n    this.y = y; // be careful!! use = , not += !!!!!!!!!!\n  }\n\n  moveBy(dx, dy) {\n    this.x += dx;\n    this.y += dy;\n  }\n\n  render(ctx) {\n    // console.log('drawing brick', this.width, this.height, this.color, this.x, this.y);\n    ctx.beginPath();\n    ctx.rect(this.x, this.y, this.width, this.height);\n    ctx.fillStyle = this.color;\n    ctx.fill();\n    ctx.closePath();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sprite);\n\n\n//# sourceURL=webpack://break-out-assignments/./src/Sprite.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ball */ \"./src/Ball.js\");\n/* harmony import */ var _Paddle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Paddle */ \"./src/Paddle.js\");\n/* harmony import */ var _Bricks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Bricks */ \"./src/Bricks.js\");\n/* harmony import */ var _Background__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Background */ \"./src/Background.js\");\n/* harmony import */ var _GameLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GameLabel */ \"./src/GameLabel.js\");\n// import Background from './Background.js';\n\n\n\n\n\n\n// JavaScript code goes here\nconst canvas = document.getElementById('myCanvas');\nconst ctx = canvas.getContext('2d');\n\n// ----------------------------------------------\n// Variables\n// ----------------------------------------------\nconst paddleHeight = 10;\nconst paddleWidth = 75;\nconst paddleXStart = (canvas.width - paddleWidth) / 2;\nconst paddleYStart = canvas.height - paddleHeight;\nconst background = new _Background__WEBPACK_IMPORTED_MODULE_3__[\"default\"](0, 0, canvas.width, canvas.height);\nconst ball = new _Ball__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconst paddle = new _Paddle__WEBPACK_IMPORTED_MODULE_1__[\"default\"](paddleXStart, paddleYStart, paddleWidth, paddleHeight);\n\nlet rightPressed = false;\nlet leftPressed = false;\n// false because at the beginning the control buttons are not pressed\n\nconst rows = 3;\nconst cols = 5;\n\nconst bricks = new _Bricks__WEBPACK_IMPORTED_MODULE_2__[\"default\"](cols, rows);\n\nconst scoreLabel = new _GameLabel__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('Score: ', 100, 20, 'blue');\nconst livesLabel = new _GameLabel__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('Lives: ', canvas.width - 70, 20, 'green');\nscoreLabel.align = 'left';\nlivesLabel.align = 'right';\nscoreLabel.value = 0;\nlivesLabel.value = 3;\n\n// ----------------------------------------------\n// Functions\n// ----------------------------------------------\n\nfunction resetBallAndPaddle() {\n  ball.x = canvas.width / 2;\n  ball.y = canvas.height - 30;\n  ball.dx = 2;\n  ball.dy = -2;\n  paddle.x = (canvas.width - paddle.width) / 2;\n}\n\nfunction movePaddle() {\n  // checking to see if the RT or LT keys are pressed\n  if (rightPressed && paddle.x < canvas.width - paddle.width) {\n    paddle.moveBy(7, 0);\n  } else if (leftPressed && paddle.x > 0) {\n    paddle.moveBy(-7, 0);\n  }\n}\n\nfunction mouseMoveHandler(e) {\n  const relativeX = e.clientX - canvas.offsetLeft;\n  if (relativeX > 0 && relativeX < canvas.width) {\n    paddle.moveTo(relativeX - paddle.width / 2, paddleYStart);\n  }\n}\n\nfunction keyDownHandler(e) {\n  if (e.key === 'Right' || e.key === 'ArrowRight') {\n    rightPressed = true;\n  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {\n    leftPressed = true;\n  }\n}\n\nfunction keyUpHandler(e) {\n  if (e.key === 'Right' || e.key === 'ArrowRight') {\n    rightPressed = false;\n  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {\n    leftPressed = false;\n  }\n}\nfunction collisionDetection() {\n  for (let c = 0; c < bricks.cols; c += 1) {\n    for (let r = 0; r < bricks.rows; r += 1) {\n      const brick = bricks.bricks[c][r];\n      if (brick.status === true) {\n        if (\n          ball.x > brick.x\n                && ball.x < brick.x + brick.width\n                && ball.y > brick.y\n                && ball.y < brick.y + brick.height\n        ) {\n          ball.dy = -ball.dy;\n          brick.status = false;\n          scoreLabel.value += 1;\n\n          if (scoreLabel.value === bricks.rows * bricks.cols) {\n            alert('YOU WIN, CONGRATULATIONS!');\n            document.location.reload();\n          }\n        }\n      }\n    }\n  }\n}\n\nfunction collisionsWithCanvasAndPaddle() {\n  // bounce off top wall by reversing y-axis movement\n  if (ball.y + ball.dy < 0) {\n    ball.dy = -ball.dy;\n  }\n\n  // bounce off bottom wall\n  if (ball.y + ball.dy > canvas.height) {\n    ball.dy = -ball.dy;\n  }\n  // bounce off left and right\n  if (ball.x + ball.dx > canvas.width || ball.x + ball.dx < 0) {\n    ball.dx = -ball.dx;\n  }\n\n  if (ball.y + ball.dy > canvas.height || ball.y + ball.dy < 0) {\n    ball.dy = -ball.dy;\n  }\n\n  // adjusting for radius of ball so it doesn't 'sink' into the wall\n  if (ball.x + ball.dx > canvas.width - ball.radius || ball.x + ball.dx < ball.radius) {\n    ball.dx = -ball.dx;\n  }\n  // if ball hits bottom wall\n  if (ball.y + ball.dy < ball.radius) {\n    ball.dy = -ball.dy;\n  } else if (ball.y + ball.dy > canvas.height - ball.radius) {\n    if (ball.x > paddle.x && ball.x < paddle.x + paddle.width) {\n      ball.dy = -ball.dy;\n    } else {\n      // lose a life\n      livesLabel.value -= 1;\n      if (livesLabel.value < 1) {\n        alert('GAME OVER');\n        livesLabel.value = 3;\n        scoreLabel.value = 0;\n        document.location.reload();\n      } else {\n        resetBallAndPaddle();\n      }\n    }\n  }\n}\n\n//  GAME LOOP ------------------------------------------------\n\nfunction draw() {\n  // clear the canvas\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  // call helper functions\n  background.render(ctx);\n  bricks.render(ctx);\n  paddle.render(ctx);\n  ball.render(ctx);\n  scoreLabel.render(ctx);\n  livesLabel.render(ctx);\n  collisionDetection();\n  ball.move(ctx);\n  movePaddle();\n  collisionsWithCanvasAndPaddle();\n\n  // draw the screen again\n  requestAnimationFrame(draw);\n}\n\n// event listeners for control buttons\ndocument.addEventListener('keydown', keyDownHandler, false);\ndocument.addEventListener('keyup', keyUpHandler, false);\ndocument.addEventListener('mousemove', mouseMoveHandler, false);\n\nresetBallAndPaddle();\ndraw();\n\n\n//# sourceURL=webpack://break-out-assignments/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;