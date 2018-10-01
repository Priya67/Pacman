/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const outline = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];


const Board = __webpack_require__(3);
const Game = __webpack_require__(2);

const players = {
  pos: {x: 20,
    y: 23
  },
  direction: '',
  color: ''
};

class Pacman {

  constructor(context, color) {
    this.check = this.check.bind(this);
    this.makePacman = this.makePacman.bind(this);
    this.placeCoins = this.placeCoins.bind(this);
    this.winner = new Boolean(false);
    this.player = players;
    this.player.color = color;
  }

  collide(current_pacman) {
    let i = current_pacman.pos.x;
    let j = current_pacman.pos.y;
    if(i < 38 && i > 0) {
      if(j < 38 && j > 0) {
        if(outline[j-1][i-1]!==1) {
          return false;
        }
      }
    }
    return true;
  }

  makePacman(context) {
    context.beginPath();
    switch (this.player.direction) {
      case 'right':
      context.arc(this.player.pos.x, this.player.pos.y, 0.5, 0.25*Math.PI, 1.75*Math.PI);
      context.fillStyle = '#000';
      context.lineTo(this.player.pos.x, this.player.pos.y);
      context.fillStyle = this.player.color;
      context.fill();
      break;

      case 'left':
      context.arc(this.player.pos.x, this.player.pos.y, 0.5, -0.75*Math.PI, -1.25*Math.PI);
      context.fillStyle = '#000';
      context.lineTo(this.player.pos.x, this.player.pos.y);
      context.fillStyle = this.player.color;
      context.fill();
      break;

      case 'top':
      context.arc(this.player.pos.x, this.player.pos.y, 0.5, -2.25*Math.PI, -0.75*Math.PI);
      context.fillStyle = '#000';
      context.lineTo(this.player.pos.x, this.player.pos.y);
      context.fillStyle = this.player.color;
      context.fill();
      break;

      case 'down':
      context.arc(this.player.pos.x, this.player.pos.y, 0.5, 0.75*Math.PI, 2.25*Math.PI);
      context.fillStyle = '#000';
      context.lineTo(this.player.pos.x, this.player.pos.y);
      context.fillStyle = this.player.color;
      context.fill();
      break;

      default:
      context.arc(this.player.pos.x, this.player.pos.y, 0.5, 0.25*Math.PI, 1.75*Math.PI);
      context.fillStyle = '#000';
      context.lineTo(this.player.pos.x, this.player.pos.y);
      context.fillStyle = this.player.color;
      context.fill();
    }
  }



  check(direction) {

    if (direction === 'left') {
      if((this.player.pos.x === 1 && this.player.pos.y === 18) ||
      (this.player.pos.x === 1 && this.player.pos.y === 19)) {
        this.player.pos.x = 37;
      }
      else {
        if(!this.collide({pos: {x: this.player.pos.x-1, y: this.player.pos.y}})){
          this.clearSpot(this.player.pos);
          this.player.pos.x-=1;
        }
        this.player.direction='left';
      }

    } else if (direction === 'right') {
      if((this.player.pos.x === 37 && this.player.pos.y === 18) ||
      this.player.pos.x === 37 && this.player.pos.y === 19) {
        this.player.pos.x = 1;
      }
      else {
        if(!this.collide({pos: {x: this.player.pos.x+1, y: this.player.pos.y}})){
          this.clearSpot(this.player.pos);
          this.player.pos.x+=1;
        }
        this.player.direction='right';
      }

    } else if (direction === 'up') {
      if(!this.collide({pos: {x: this.player.pos.x, y: this.player.pos.y-1}})){
        this.clearSpot(this.player.pos);
        this.player.pos.y-=1;
        this.player.direction='top';
      }

    } else if (direction === 'down') {
      if(!this.collide({pos: {x: this.player.pos.x, y: this.player.pos.y+1}})){
        this.clearSpot(this.player.pos);
        this.player.pos.y+=1;
        this.player.direction='down';
      }
    }
  }

  clearSpot(position) {
    outline[position.y-1][position.x-1]=2;
    if(this.won() === true) {
      this.winner = true;
      alert("You won!!");
      location.reload();
    }
    document.getElementById('big_orange').innerHTML = '';
    if((position.x-1 === 35 && position.y-1 === 35) ||
       (position.x-1 === 2 && position.y-1 === 2) ||
       (position.x-1 === 2 && position.y-1 === 35)) {
      setTimeout(() => {
        document.getElementById('big_orange').innerHTML = "Good Job!";},
       500);
       this.blinking();
    }
  }

  blinking() {
    var blink = setInterval(() => { this.player.color = 'green';}, 1000, 2000);
    clearInterval(blink);
  }

  won() {
    for(let i = 0; i < 38; i++) {
      for(let j = 0; j < 38; j++) {
        if(outline[i][j]===0) {
          return false;
        }
      }
    }
    return true;
  }

  resetPacman(context) {
    this.player.pos.x = 20;
    this.player.pos.y = 23;
    this.makePacman(context, 'yellow');
  }

  placeCoins(context) {
    for(let i = 0; i < 38; i++) {
      for(let j = 0; j < 38; j++) {
        if(outline[i][j]===0) {
          if((i === 35 && j === 35)|| (i === 2 && j === 2) || (i === 35 && j === 2)) {
            context.beginPath();
            context.arc(j+1, i+1, 0.4, 0, 2 * Math.PI);
            context.fillStyle = 'red';
            context.fill();
          }
          else {
            context.beginPath();
            context.arc(j+1, i+1, 0.19, 0, 2 * Math.PI);
            context.fillStyle = '#FFD700';
            context.fill();
          }
        }
      }
    }
}}

module.exports = Pacman;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const outline = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const Pacman = __webpack_require__(0);
const monsters = [
  {pos:
    {
      x: 18,
      y:19
    }
  },
  {
    pos:
    {
      x: 20,
      y: 19
    }
  },
  {
    pos:
    {
      x: 22,
      y: 19
    }
  }
];

const direction = ['right', 'left', 'top', 'down'];

class Monster {
  constructor(context, color) {
    this.makeMonsters = this.makeMonsters.bind(this);
    this.moveMonster = this.moveMonster.bind(this);
    this.checkIfLost = this.checkIfLost.bind(this);
    this.pacman = new Pacman(context, 'yellow');
    this.currentDir = this.selectDir();
  }

  makeMonsters(context, color, index) {
    context.beginPath();
    context.arc(monsters[index].pos.x, monsters[index].pos.y, 0.6, 0*Math.PI, 2*Math.PI);
    context.fillStyle = color;
    context.fill();
    this.moveMonster(context, color, index);
  }

  collide(current_monster) {
    let i = current_monster.pos.x;
    let j = current_monster.pos.y;
    if(i < 38 && i > 0) {
      if(j < 38 && j > 0) {
        if(outline[j-1][i-1]!==1) {
          return false;
        }
      }
    }
    return true;
  }

  selectDir() {
    return direction[Math.floor(Math.random() * (3 - 0 + 1))];
  }

  moveMonster(context, color, index) {
    // this.checkIfLost();

    if(this.currentDir === 'left') {
      if(!this.collide({pos: {x: monsters[index].pos.x-1, y: monsters[index].pos.y}})) {
          monsters[index].pos.x-=1;
      }
      else {
        this.currentDir = this.selectDir(index);
      }
    }

    if(this.currentDir === 'right') {
      if(!this.collide({pos: {x: monsters[index].pos.x+1, y: monsters[index].pos.y}})) {
        monsters[index].pos.x+=1;
      }
      else {
        this.currentDir = this.selectDir(index);
      }
    }

    if(this.currentDir === 'top') {
      if(!this.collide({pos: {x: monsters[index].pos.x, y: monsters[index].pos.y-1}})) {
        monsters[index].pos.y-=1;
      }
      else {
        this.currentDir = this.selectDir(index);
      }
    }

    if(this.currentDir === 'down') {
      if(!this.collide({pos: {x: monsters[index].pos.x, y: monsters[index].pos.y+1}})) {
        monsters[index].pos.y+=1;
      }
      else {
        this.currentDir = this.selectDir(index);
      }
    }
  }

  checkIfLost() {
    if((this.pacman.player.pos.x === monsters[0].pos.x &&  this.pacman.player.pos.y === monsters[0].pos.y) ||
       (this.pacman.player.pos.x === monsters[1].pos.x && this.pacman.player.pos.y === monsters[1].pos.y) ||
       (this.pacman.player.pos.x === monsters[2].pos.x && this.pacman.player.pos.y === monsters[2].pos.y)) {
         alert("Game Over!");
         location.reload();
    }
  }
}

module.exports = Monster;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const Pacman = __webpack_require__(0);
const Monster = __webpack_require__(1);
const Board = __webpack_require__(3);
const colors = ['purple', 'blue', 'pink'];
const pacmanColor = ['yellow', 'white'];

class Game {
  constructor(canvas, context, pacman) {
    this.pacman = pacman;
    this.board = new Board(context);
    this.monster = [new Monster(context, colors[0], 0), new Monster(context, colors[1], 1),
                  new Monster(context, colors[2], 2)];
    setInterval(() => {this.draw(canvas, context);},
                      150);

  }

  draw(canvas, context) {
    const that = this;
    context.fillStyle = '#000';
    context.fillRect(0, 0, canvas.width, canvas.height);
    this.pacman.placeCoins(context);
    this.board.makeMaze(context);
    this.pacman.makePacman(context);
    this.monster.forEach(((mon, i) => (
      mon.makeMonsters(context, colors[i], i)
    )));
    new Monster().checkIfLost();
  }
}

module.exports = Game;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

class Board {

  constructor(context) {
    this.makeMaze(context);
  }


  makeMaze(context) {

    context.strokeStyle = 'blue';
    context.lineWidth = 0.2;
    context.beginPath();
    context.moveTo(1, 16);
    context.lineTo(8, 16);
    context.lineTo(8, 13);
    context.lineTo(1, 13);
    context.lineTo(1, 1);
    context.lineTo(38, 1);
    context.lineTo(38, 13);
    context.lineTo(31, 13);
    context.lineTo(31, 16);
    context.lineTo(38, 16);
    context.stroke();

    context.strokeStyle = 'blue';
    context.lineWidth = 0.2;
    context.beginPath();
    context.moveTo(1, 17);
    context.lineTo(9, 17);
    context.lineTo(9, 12);
    context.lineTo(2, 12);
    context.lineTo(2, 2);
    context.lineTo(19, 2);
    context.lineTo(19, 7);
    context.lineTo(20, 7);
    context.lineTo(20, 2);
    context.lineTo(37, 2);
    context.lineTo(37, 12);
    context.lineTo(30, 12);
    context.lineTo(30, 17);
    context.lineTo(38, 17);
    context.stroke();

    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(1, 21);
    context.lineTo(8, 21);
    context.lineTo(8, 24);
    context.lineTo(1, 24);
    context.lineTo(1, 38);
    context.lineTo(38, 38);
    context.lineTo(38, 24);
    context.lineTo(31, 24);
    context.lineTo(31, 21);
    context.lineTo(38, 21);
    context.stroke();

    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(1, 20);
    context.lineTo(9, 20);
    context.lineTo(9, 25);
    context.lineTo(2, 25);
    context.lineTo(2, 30);
    context.lineTo(6, 30);
    context.lineTo(6, 32);
    context.lineTo(2, 32);
    context.lineTo(2, 37);
    context.lineTo(37, 37);
    context.lineTo(37, 32);
    context.lineTo(33, 32);
    context.lineTo(33, 30);
    context.lineTo(37, 30);
    context.lineTo(37, 25);
    context.lineTo(30, 25);
    context.lineTo(30, 20);
    context.lineTo(38, 20);
    context.stroke();


    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(14, 16);
    context.lineTo(14, 21);
    context.lineTo(25, 21);
    context.lineTo(25, 16);
    context.stroke();

    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(20, 35);
    context.lineTo(20, 32);
    context.lineTo(25, 32);
    context.lineTo(25, 31);
    context.lineTo(14, 31);
    context.lineTo(14, 32);
    context.lineTo(19, 32);
    context.lineTo(19, 35);
    context.lineTo(20, 35);
    context.stroke();

    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(20, 29);
    context.lineTo(20, 25);
    context.lineTo(25, 25);
    context.lineTo(25, 24);
    context.lineTo(14, 24);
    context.lineTo(14, 25);
    context.lineTo(19, 25);
    context.lineTo(19, 29);
    context.lineTo(20, 29);
    context.stroke();

    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(14, 9);
    context.lineTo(25, 9);
    context.lineTo(25, 10);
    context.lineTo(20, 10);
    context.lineTo(20, 13);
    context.lineTo(19, 13);
    context.lineTo(19, 10);
    context.lineTo(14, 10);
    context.lineTo(14, 9);
    context.stroke();

    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(4, 27);
    context.lineTo(9, 27);
    context.lineTo(9, 32);
    context.lineTo(8, 32);
    context.lineTo(8, 28);
    context.lineTo(4, 28);
    context.lineTo(4, 27);
    context.stroke();

    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(35, 27);
    context.lineTo(30, 27);
    context.lineTo(30, 32);
    context.lineTo(31, 32);
    context.lineTo(31, 28);
    context.lineTo(35, 28);
    context.lineTo(35, 27);
    context.stroke();

    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(4, 35);
    context.lineTo(17, 35);
    context.lineTo(17, 34);
    context.lineTo(12, 34);
    context.lineTo(12, 31);
    context.lineTo(11, 31);
    context.lineTo(11, 34);
    context.lineTo(4, 34);
    context.lineTo(4, 35);
    context.stroke();

    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(22, 35);
    context.lineTo(35, 35);
    context.lineTo(35, 34);
    context.lineTo(28, 34);
    context.lineTo(28, 31);
    context.lineTo(27, 31);
    context.lineTo(27, 34);
    context.lineTo(22, 34);
    context.lineTo(22, 35);
    context.stroke();

    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(11, 27);
    context.lineTo(17, 27);
    context.lineTo(17, 29);
    context.lineTo(11, 29);
    context.lineTo(11, 27);
    context.stroke();

    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(22, 27);
    context.lineTo(28, 27);
    context.lineTo(28, 29);
    context.lineTo(22, 29);
    context.lineTo(22, 27);
    context.stroke();

    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(11, 20);
    context.lineTo(12, 20);
    context.lineTo(12, 25);
    context.lineTo(11, 25);
    context.lineTo(11, 20);
    context.stroke();

    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(27, 20);
    context.lineTo(28, 20);
    context.lineTo(28, 25);
    context.lineTo(27, 25);
    context.lineTo(27, 20);
    context.stroke();

    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(11, 4);
    context.lineTo(17, 4);
    context.lineTo(17, 7);
    context.lineTo(11, 7);
    context.lineTo(11, 4);
    context.stroke();

    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(22, 4);
    context.lineTo(28, 4);
    context.lineTo(28, 7);
    context.lineTo(22, 7);
    context.lineTo(22, 4);
    context.stroke();

    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(4, 4);
    context.lineTo(4, 7);
    context.lineTo(9, 7);
    context.lineTo(9, 4);
    context.lineTo(4, 4);
    context.stroke();

    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(30, 4);
    context.lineTo(30, 7);
    context.lineTo(35, 7);
    context.lineTo(35, 4);
    context.lineTo(30, 4);
    context.stroke();

    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(4, 9);
    context.lineTo(4, 10);
    context.lineTo(9, 10);
    context.lineTo(9, 9);
    context.lineTo(4, 9);
    context.stroke();

    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(30, 9);
    context.lineTo(30, 10);
    context.lineTo(35, 10);
    context.lineTo(35, 9);
    context.lineTo(30, 9);
    context.stroke();

    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(11, 18);
    context.lineTo(11, 9);
    context.lineTo(12, 9);
    context.lineTo(12, 12);
    context.lineTo(17, 12);
    context.lineTo(17, 13);
    context.lineTo(12, 13);
    context.lineTo(12, 18);
    context.lineTo(11, 18);
    context.stroke();

    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(28, 18);
    context.lineTo(28, 9);
    context.lineTo(27, 9);
    context.lineTo(27, 12);
    context.lineTo(22, 12);
    context.lineTo(22, 13);
    context.lineTo(27, 13);
    context.lineTo(27, 18);
    context.lineTo(28, 18);
    context.stroke();
  }
}
module.exports = Board;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {


const Game = __webpack_require__(2);
const Pacman = __webpack_require__(0);
const Monster = __webpack_require__(1);

  const canvas = document.getElementById('pacman');
  const context = canvas.getContext('2d');

  context.fillStyle = 'black';
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.scale(15, 15);

  const pacman = new Pacman(context, 'white');
  const monster = new Monster();
  if(pacman.winner === true) {
    game = new Game(canvas, context, pacman);
  }
  let game = new Game(canvas, context, pacman);

  const newTest = () => {
    location.reload();
  };

  window.newTest = newTest;

  document.addEventListener('keydown', event => {
    event.preventDefault();

    if (event.keyCode === 37) {
      pacman.check('left');
    }
    else if (event.keyCode === 39) {
      pacman.check('right');
    }
    else if (event.keyCode === 38) {
      pacman.check('up');
    }
    else if (event.keyCode === 40) {
      pacman.check('down');
    }
  });


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
