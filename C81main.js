canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
colour="purple";
var mousevent="empty";
var last_position_x,last_position_y;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    colour=document.getElementById("colour").value;
mousevent="mousedown"
console.log("mousedown")
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    console.log("mouseup")
mousevent="mouseup"
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    console.log("mouseleave")
mousevent="mouseleave"
}


canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
console.log("mousemove")
current_position_x=e.clientX-canvas.offsetLeft;
current_position_y=e.clientY-canvas.offsetTop;
if(mousevent=="mousedown"){
    console.log("mousemove+mousedown")
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=2;
ctx.moveTo(last_position_x,last_position_y);
ctx.lineTo(current_position_x,current_position_y);
ctx.stroke();
}
last_position_x=current_position_x;
last_position_y=current_position_y;
}
function erase(){
ctx.clearRect(0,0,canvas.width,canvas.height);

}