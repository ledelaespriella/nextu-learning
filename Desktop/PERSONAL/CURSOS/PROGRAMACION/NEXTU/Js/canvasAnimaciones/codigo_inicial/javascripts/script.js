function dibujar() {

  var canvas = document.getElementById('lienzo')
  var contexto = canvas.getContext('2d');

  var centro = {
    x: canvas.width / 2,
    y: canvas.height / 2,
  }

  contexto.beginPath();
  contexto.arc(centro.x, centro.y, 50, 0, 2 * Math.PI, false);
  contexto.fillStyle = 'black';
  contexto.fill();
  contexto.lineWidth = 3;
  contexto.strokeStyle = 'black';
  contexto.stroke();

  contexto.beginPath();
  contexto.arc(centro.x + 50, centro.y - 50, 30, 0, 2 * Math.PI, false);
  contexto.fillStyle = 'black';
  contexto.fill();
  contexto.lineWidth = 3;
  contexto.strokeStyle = 'black';
  contexto.stroke();

  contexto.beginPath();
  contexto.arc(centro.x - 50, centro.y - 50, 30, 0, 2 * Math.PI, false);
  contexto.fillStyle = 'black';
  contexto.fill();
  contexto.lineWidth = 3;
  contexto.strokeStyle = 'black';
  contexto.stroke();

  var k = document.getElementById("MasCanvas");
  var ctx = k.getContext("2d");
  ctx.beginPath();
  ctx.arc(95, 50, 40, 0, 2 * Math.PI);
  ctx.stroke();

}

dibujar();
