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


const Board = require("./board");
const Game = require("./game");

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
       setInterval(() => {this.player.color = 'green';}, 1000, 2000);
    }
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
