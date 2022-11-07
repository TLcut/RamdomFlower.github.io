const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.globalCompositeOperation='destination-over';


let X = window.innerWidth/2;
let Y = window.innerHeight/2;
let num = 0;
let scale = 10;
let r = (Math.random())*(Math.random()*10);

function DF(){
    let angle = num*r;
    let radius = scale *Math.sqrt(num);
    let X = radius*Math.sin(angle) +window.innerWidth/2;;
    let Y = radius*Math.cos(angle) +window.innerHeight/2;
    
    ctx.fillStyle='gray';
    ctx.strokeStyle='black'
    ctx.lineWidth=4;
    ctx.beginPath();
    ctx.arc(X,Y,num,0,Math.PI*2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    num++;
}

function animate(){
    //ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
    DF();
    //if(num>100)return;
    requestAnimationFrame(animate);
}

animate();

