// DrawRectangle.js
function main() {
  // Retrieve <canvas> element <- (1)
  var canvas = document.getElementById("example");
  if (!canvas) {
    console.log("Failed to retrieve the <canvas> element");
    return;
  }
  // Get the rendering context for 2DCG <- (2)
  var ctx = canvas.getContext("2d");

  // turn the entire canvas black
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, 400, 400);
  let v1 = new Vector3([2.25, 2.25, 0]);
  // drawVector(v1, 'red')
}

function drawVector(v, color) {
  var canvas = document.getElementById("example");
  var ctx = canvas.getContext("2d");
  
  ctx.beginPath();
  ctx.moveTo(200, 200)
  ctx.strokeStyle = color;
  x = v.elements[0];
  y = v.elements[1]
  ctx.lineTo(200 + x * 20, 200 + - (y * 20));
  ctx.stroke();
}

function handleDrawEvent() {
  var canvas = document.getElementById("example");
  var ctx = canvas.getContext("2d");

  // clear the canvas
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, 400, 400);
  // get the input values
  v1_x = document.getElementById("v1_x").value;
  v1_y = document.getElementById("v1_y").value;


  v2_x = document.getElementById("v2_x").value;
  v2_y = document.getElementById("v2_y").value;

  let v1 = new Vector3([v1_x, v1_y, 0]);
  let v2 = new Vector3([v2_x, v2_y, 0]);
  drawVector(v1, "red")
  drawVector(v2, "blue")
}

function handleDrawOperationEvent() {
  // clear the canvas
  var canvas = document.getElementById("example");
  var ctx = canvas.getContext("2d");

  // clear the canvas
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, 400, 400);
  // read value of text boxes and draw v1 v2
  v1_x = document.getElementById("v1_x").value;
  v1_y = document.getElementById("v1_y").value;


  v2_x = document.getElementById("v2_x").value;
  v2_y = document.getElementById("v2_y").value;

  let v1 = new Vector3([v1_x, v1_y, 0]);
  let v2 = new Vector3([v2_x, v2_y, 0]);

  drawVector(v1, "red")
  drawVector(v2, "blue")
  // read value of selector
  operation = document.getElementById("operation").value;
  scalar = document.getElementById("scalar").value;

  color = "green";
  if (operation == "Add") {
    let v3 = v1.add(v2);
    drawVector(v3, color);
  }
  else if (operation == "Subtract") {
    let v3 = v1.sub(v2);
    drawVector(v3, color);
  }
  else if (operation == "Divide") {
    let v3 = v1.div(scalar);
    let v4 = v2.div(scalar);
    drawVector(v3, color);
    drawVector(v4, color);
  }
  else if (operation == "Multiply") {
    // has to be multiply
    let v3 = v1.mul(scalar);
    let v4 = v2.mul(scalar);
    drawVector(v3, color);
    drawVector(v4, color);
  }
  else if (operation == "Magnitude") {
    console.log("Magnitude v1: ", v1.magnitude())
    console.log("Magnitude v2: ", v2.magnitude())
  }
  else if (operation == "Normalize") {
    let v3 = v1.normalize();
    let v4 = v1.normalize();
    drawVector(v3, color);
    drawVector(v4, color);
  }
  else if (operation == "Angle Between") {
    let dot_product = Vector3.dot(v1, v2);
    let angle = Math.acos(dot_product / (v1.magnitude() * v2.magnitude()));
    // convert radians to degrees
    let angle_degrees = angle * (180 / Math.PI);
    console.log("Angle: ", angle_degrees);
  }
  else if (operation == "Area") {
    let cross = Vector3.cross(v1, v2).magnitude();
    let area = cross / 2;
    console.log("Area: ", area);
  }
}