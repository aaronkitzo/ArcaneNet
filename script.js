// Get Meditation Field 
const canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

// Set initial quantum
let r = Math.min(canvas.width, 
           canvas.height) * 0.2;
let angle = 0;

// Animaflux loop
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'grey';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Translate to center of canvas
  ctx.translate(canvas.width/2, canvas.height/2);
  
  // Define sigil shape
  ctx.strokeStyle = 'rgb(33, 69, 333)';
  ctx.lineWidth = 2;
  let x = r * Math.cos(angle)*0.5;
  let y = r * Math.sin(angle);
  ctx.beginPath();
  ctx.ellipse(x, y, r, r, 0, 0, 2*Math.PI);
  ctx.stroke();
  
  // Draw attracting lines
  let angleStep = 30;
  for (let i = 0; i < 360; i += angleStep) {
    let x1 = r * Math.cos(i * Math.PI / 180);
    let y1 = r * Math.sin(i * Math.PI / 180);
    let x2 = x + r/2 * Math.cos((i + angle) * Math.PI / 180);
    let y2 = y + r/2 * Math.sin((i + angle) * Math.PI / 180);
    ctx.strokeStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }
  
  // Reset translation and increment angle
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  angle += 0.06;
  
  requestAnimationFrame(draw);
}

draw();
