var canvas = document.querySelector('canvas');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
// c.fillRect(x,y,width,height);
c.fillStyle = 'rgba(255,0,0,0.8)';
c.fillRect(100,100,100,100);
c.fillStyle = 'rgba(0,0,255,0.8)';
c.fillRect(400,100,100,100);
c.fillStyle = 'rgba(0,255,0,0.8)';
c.fillRect(300,300,100,100);
console.log(canvas);

//line
c.beginPath();
// c.moveTo(x , y);
c.moveTo(500 , 300);
c.lineTo(300,100);
c.lineTo(400,300);
c.strokeStyle = "#fa34a3";
c.stroke();


//Arc
// c.arc(300,300,30,startAngle:Float,andAngle:Float,drawCounterClockwise:Boolean(false));
for(var i =0 ;i<6000;i++){
    var x = Math.random()*window.innerWidth;
    var y = Math.random()*window.innerHeight;
    c.beginPath();
    c.arc(x,y,30,0,Math.PI*2,false);
    c.strokeStyle = 'blue';
    c.stroke();
}

