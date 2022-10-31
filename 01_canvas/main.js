const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Draw rectangle
ctx.fillStyle = "green";
// x: number, y: number, w: number, h: number
ctx.fillRect(10, 10, 100, 100);

// Draw circle
ctx.fillStyle = "blue";
ctx.beginPath();
// x: number, y: number, radius: number, startAngle: number, endAngle: number,
ctx.arc(200, 60, 50, 0, 2 * Math.PI);
ctx.fill();

// Draw triangle
ctx.fillStyle = "red";
ctx.beginPath();
// x: number, y: number
ctx.moveTo(175, 150);
ctx.lineTo(200, 175);
ctx.lineTo(200, 125);
ctx.fill();
