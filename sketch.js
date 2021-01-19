// variable and datatypes
//number
//var score = 5;
//string
var name = "rajat";
//boolean
var bool = true;
//undefined
var mark; 
// null
var nothing = null;
//*** 
//arrays

var arr1 = [1,2,3,4,5]
console.log(arr1);
console.log(arr1.length);

console.log(arr1[0]);
console.log(arr1[3]);

var arr2 = [score,name,bool];
console.log(arr2)
console.log(arr2[1]);

var arr3 = [[1,2],[3,4],[5,6]];
console.log(arr3)
console.log(arr3[0][0])
console.log(arr3[2][0])
console.log(arr3[1][1])

arr1.push(6,7,8);
console.log(arr1);
arr1.pop();
console.log(arr1);

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var score = 0;
var gamestate = "onsling";

function preload() {
    changeBackground();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
    
}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
        
    } else {
        background(255);
    }
    textSize(15);
    text("Score: "+score ,1000, 50);
    pig1.Score() ;
    pig3.Score() ;
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if(gamestate === "onsling"){
         Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gamestate = "released";
}

function keyPressed(){
    if(keyCode === 32 && bird.body.speed < 2){
        Matter.Body.setPosition(bird.body, {x: 200  , y:50 });
        slingshot.attach(bird.body);
        bird.trajectory = [];
        gamestate = "onsling";
    }
}

async function changeBackground(){

    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo");
    var respjson = await response.json();
    var dt = respjson.datetime;
    var hour = dt.slice(11,13);
    console.log(hour);
    if(hour>=06 && hour<=19){
        backgroundImg = loadImage("sprites/bg.png");
    } else {

        backgroundImg = loadImage("sprites/bg2.jpg");
    }
        
    
}