const canvas = document.getElementById('pacman');
const context = canvas.getContext('2d');

function draw() {
  makeMaze();
  makePacman(player);
  makeMonsters();
  requestAnimationFrame(draw);
}

context.scale(5, 5);

function makeMaze() {

  context.strokeStyle = 'blue';
  context.lineWidth = 1;
  context.beginPath();
  context.moveTo(48, 48);
  context.lineTo(48, 72);
  context.lineTo(96, 72);
  context.lineTo(96, 48);
  context.lineTo(88, 48);
  context.lineTo(88, 64);
  context.lineTo(56, 64);
  context.lineTo(56, 56);
  context.lineTo(56, 48);
  context.lineTo(56, 48);
  context.lineTo(48, 48);
  context.stroke();
}

function createMatrix(w, h) {
  const matrix = [];
  while(h--) {
    matrix.push(new Array(w).fill(0));
  }
  return matrix;
}

const arena = createMatrix(canvas.height/5, canvas.width/5);

const player = {
  pos: {x: canvas.width/10,
        y: canvas.height/10+8
      },
  direction: ''
};

function collide(arena, current_pacman) {
  let i = current_pacman.pos.x;
  let j = current_pacman.pos.y;
  if(i < arena[0].length && i > 1) {
    if(j < arena.length && j > 1) {
      if(!(i > 45 && j > 45 && i < 96 && j < 72)) {
        return false;
      }
    }
  }
    return true;
  }

function makePacman(player, direction) {
  context.beginPath();
  switch (player.direction) {
    case 'right':
      context.arc(player.pos.x + 2, player.pos.y + 2, 3.8, 0.25*Math.PI, 1.75*Math.PI);
      context.fillStyle = '#000';
      context.lineTo(player.pos.x + 2, player.pos.y + 2);
      context.fillStyle = 'yellow';
      context.fill();
      break;

    case 'left':
      context.arc(player.pos.x + 2, player.pos.y + 2, 3.8, -0.75*Math.PI, -1.25*Math.PI);
      context.fillStyle = '#000';
      context.lineTo(player.pos.x + 2, player.pos.y + 2);
      context.fillStyle = 'yellow';
      context.fill();
      break;

    case 'top':
      context.arc(player.pos.x+2, player.pos.y+2, 3.8, -2.25*Math.PI, -0.75*Math.PI);
      context.fillStyle = '#000';
      context.lineTo(player.pos.x + 2, player.pos.y + 2);
      context.fillStyle = 'yellow';
      context.fill();
      break;

    case 'down':
      context.arc(player.pos.x+2, player.pos.y+2, 3.8, 0.75*Math.PI, 2.25*Math.PI);
      context.fillStyle = '#000';
      context.lineTo(player.pos.x + 2, player.pos.y + 2);
      context.fillStyle = 'yellow';
      context.fill();
      break;

    default:
      context.arc(player.pos.x + 2, player.pos.y + 2, 3.8, 0.25*Math.PI, 1.75*Math.PI);
      context.fillStyle = '#000';
      context.lineTo(player.pos.x + 2, player.pos.y + 2);
      context.fillStyle = 'yellow';
      context.fill();
  }
}

function makeMonsters() {
  context.beginPath();
  context.arc((canvas.width/10)-6, (canvas.height/10)-14, 3.8, 0*Math.PI, 2*Math.PI);
  context.fillStyle = 'blue';
  context.fill();

  context.beginPath();
  context.arc((canvas.width/10)+2, (canvas.height/10)-14, 3.8, 0*Math.PI, 2*Math.PI);
  context.fillStyle = 'black';
  context.fillStyle = 'pink';
  context.fill();

  context.beginPath();
  context.arc((canvas.width/10)+10, (canvas.height/10)-14, 3.8, 0*Math.PI, 2*Math.PI);
  context.fillStyle = 'black';
  context.fillStyle = 'green';
  context.fill();
}

document.addEventListener('keydown', event => {
  console.log(event);

  if (event.keyCode === 37) {
    if(!collide(arena, {pos: {x: player.pos.x-8, y: player.pos.y}})){
      clearSpot(player.pos);
      player.pos.x-=8;
      player.direction='left';
    }

  } else if (event.keyCode === 39) {
    if(!collide(arena, {pos: {x: player.pos.x+8, y: player.pos.y}})){
      clearSpot(player.pos);
      player.pos.x+=8;
      player.direction='right';
    }

  } else if (event.keyCode === 38) {
    if(!collide(arena, {pos: {x: player.pos.x, y: player.pos.y-8}})){
      clearSpot(player.pos);
      player.pos.y-=8;
      player.direction='top';
    }

  } else if (event.keyCode === 40) {
    if(!collide(arena, {pos: {x: player.pos.x, y: player.pos.y+8}})){
      clearSpot(player.pos);
      player.pos.y+=8;
      player.direction='down';
    }
  }
});

function clearSpot(position) {
  context.fillStyle = '#000';
  context.fillRect(position.x-2, position.y-2, 8, 8);
}

function placeCoins() {
  for(let i = 2; i < canvas.height-2; i++) {
    for(let j = 2; j < canvas.width-2; j++) {
      if(j % 8 === 0 && i % 8 === 0 && !(i > 47 && j > 47 && i < 96 && j < 72)) {
        context.beginPath();
        context.arc(i, j, 0.5, 0, 2 * Math.PI);
        context.fillStyle = '#FFD700';
        context.fill();
      }
    }
  }
}

function play() {
  context.fillStyle = '#000';
  context.fillRect(0, 0, canvas.width, canvas.height);
  placeCoins();
  draw();
}

play();
