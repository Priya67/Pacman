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

const player = {
  pos: {x: canvas.width/10,
        y: canvas.height/10+8
      },
  direction: ''
};

function makePacman(player, direction) {
  context.beginPath();
  console.log("hey");
  switch (player.direction) {
    case 'right':
      context.arc(player.pos.x + 2, player.pos.y + 2, 3.8, 0.25*Math.PI, 1.75*Math.PI);
      context.fillStyle = '#000';
      context.lineTo(player.pos.x + 2, player.pos.y + 2);
      context.fillStyle = 'yellow';
      context.fill();
      // context.stroke();
      break;

    case 'left':
      context.arc(player.pos.x + 2, player.pos.y + 2, 3.8, -0.75*Math.PI, -1.25*Math.PI);
      context.fillStyle = '#000';
      context.lineTo(player.pos.x + 2, player.pos.y + 2);
      context.fillStyle = 'yellow';
      context.fill();
      // context.stroke();
      break;

    case 'top':
      context.arc(player.pos.x+2, player.pos.y+2, 3.8, -2.25*Math.PI, -0.75*Math.PI);
      context.fillStyle = '#000';
      context.lineTo(player.pos.x + 2, player.pos.y + 2);
      context.fillStyle = 'yellow';
      context.fill();
      // context.stroke();
      break;

    case 'down':
      context.arc(player.pos.x+2, player.pos.y+2, 3.8, 0.75*Math.PI, 2.25*Math.PI);
      context.fillStyle = '#000';
      context.lineTo(player.pos.x + 2, player.pos.y + 2);
      context.fillStyle = 'yellow';
      context.fill();
      // context.stroke();
      break;

    default:
      context.arc(player.pos.x + 2, player.pos.y + 2, 3.8, 0.25*Math.PI, 1.75*Math.PI);
      context.fillStyle = '#000';
      context.lineTo(player.pos.x + 2, player.pos.y + 2);
      context.fillStyle = 'yellow';
      context.fill();
      // context.stroke();
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
    clearSpot(player.pos);
    player.pos.x-=8;
    player.direction='left';

  } else if (event.keyCode === 39) {
    clearSpot(player.pos);
    player.pos.x+=8;
    player.direction='right';

  } else if (event.keyCode === 38) {
    clearSpot(player.pos);
    player.pos.y-=8;
    player.direction='top';

  } else if (event.keyCode === 40) {
    clearSpot(player.pos);
    player.pos.y+=8;
    player.direction='down';
  }

});

function clearSpot(position) {
  context.fillStyle = '#000';
  context.fillRect(position.x-2, position.y-2, 8, 8);
}

function placeCoins() {
  for(let i = 2; i < canvas.height-2; i++) {
    for(let j = 2; j < canvas.width-2; j++) {
      if(j % 8 === 0 && i % 8 === 0) {
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
