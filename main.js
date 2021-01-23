var canvas= new fabric.canva("mycanvas")
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