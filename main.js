var canvas= new fabric.Canvas("mycanvas")
var blockH=30
var blockW=30
var palyerX=100
var palyerY=100
var playerobject=""
var blockobject=""

function updateplayer(){
    fabric.Image.fromURL("player.png",function(img){
        playerobject=img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(150);
        playerobject.set({
            top:palyerY,left:palyerX
        });
        canvas.add(playerobject)
    });
}
function updateblock(block){
    fabric.Image.fromURL(block,function(img){
    blockobject=img;
    blockobject.scaleToWidth(blockW);
    blockobject.scaleToHeight(blockH);
    blockobject.set({
        top:palyerX,left:palyerY
    });
    canvas.add(blockobject)
    });
}


window.addEventListener("keydown",kd)
function kd(e){
keynumber=e.keyCode
console.log(keynumber)

if (keynumber==37) {
   left()
   console.log("left is pressed") 
}
if (keynumber==39) {
    right()
    console.log("right is pressed")
}
if (keynumber==38) {
    up()
    console.log("up is pressed")
}
if (keynumber==40) {
    down()
    console.log("down is pressed")
}
if (keynumber==67) {
    updateblock("cloud.jpg")
    console.log("c is pressed")
}
if (keynumber==68) {
    updateblock("dark_green.png")
    console.log("d is pressed")
}
if (keynumber==71) {
    updateblock("ground.png")
    console.log("g is pressed")
}
if (keynumber==82) {
    updateblock("roof.jpg")
    console.log("r is pressed")
}
if (keynumber==84) {
    updateblock("trunk.jpg")
    console.log("t is pressed")
}
if (keynumber==76) {
    updateblock("light_green.png")
    console.log("l is pressed")
}
if (keynumber==85) {
    updateblock("unique.png")
    console.log("u is pressed")
}
if (keynumber==87) {
    updateblock("wall.jpg")
    console.log("w is pressed")
}
if (keynumber==89) {
    updateblock("yellow_wall.png")
    console.log("y is pressed")
}
if (e.shiftKey==true&& keynumber==80) {
    blockW=blockW+10
    blockH=blockH+10
    document.getElementById("width").innerHTML=blockW
    document.getElementById("height").innerHTML=blockH
    console.log("shift and p pressed together")
}
if (e.shiftKey==true&& keynumber==77) {
    blockW=blockW-10
    blockH=blockH-10
    document.getElementById("width").innerHTML=blockW
    document.getElementById("height").innerHTML=blockH
    console.log("shift and m pressed together")
}
}