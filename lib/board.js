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
