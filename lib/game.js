const Pacman = require("./pacman");
const Monster = require("./monster");
const Board = require("./board");
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
