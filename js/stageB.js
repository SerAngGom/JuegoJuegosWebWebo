let stageB = {
    preload: loadStageB,
    create: createStageB,
    update: updateStageB
}

//————————————————————————————————————————————————————————————
//--------VARIABLE DECLARATIONS-------------------------------
//————————————————————————————————————————————————————————————

let bread;
let goose;
let ropes;
let wood;
let remainingTime;
let speed = 1;
let num = 4;                                //number of sticks (will be defined in the settings menu)
let diff = 700/num;                         //distance between sticks depends on how many there are
let rand = randomNumber(1, num);            //Bread falls on a random stick
let estado = "derecha";    //The duck flips and is defaulted to looking right
let numB = 6;                 

//————————————————————————————————————————————————————————————
//--------LOAD, CREATE AND UPDATE-------------------------------
//————————————————————————————————————————————————————————————


function loadStageB() {
    game.load.image('bg', 'assets/imgs/background.png');
    game.load.image('goose', 'assets/imgs/goose.png');
    game.load.image('wood', 'assets/imgs/palo.png');
    game.load.image('bread', 'assets/imgs/pan.png');
    game.load.image('foreground', 'assets/imgs/foreground.png');
    game.load.image('rightRope', 'assets/imgs/cuerdaHaciaDer.png');
    game.load.image('leftRope', 'assets/imgs/cuerdaHaciaIzq.png');
    game.load.image('catfish', 'assets/imgs/siluro.png');

}

function createStageB() {

    // set the background image
    game.add.image( 0, 0, "bg");

    timerClock = game.time.events.loop(Phaser.Timer.SECOND, updateTime, this);

    create_wood(num);
    generate_ropes(diff*rand, 3);
    createBread(5);
    goose = game.add.image(100, 400, "goose");
    goose.anchor.setTo(0.5, 0.5);
    game.physics.arcade.enable(goose);
    goose.enableBody = true;
    
    cursors = game.input.keyboard.createCursorKeys();

    game.time.events.loop(Phaser.Timer.SECOND*5, timerEvent, this);
  
}



function updateStageB() {
    
    bread.forEach(moveBread, this);
    move_goose();

    //bread.y += speed;
    game.physics.arcade.overlap(ropes, bread, collide, null, this);
    
}

//————————————————————————————————————————————————————————————
//--------------------FUNCTIONS-------------------------------
//————————————————————————————————————————————————————————————

function moveBread(unibread) {
    console.log(unibread);
    var speed = 100;
    unibread.x = diff*(rand-1)+100;
    unibread.y =speed;
  }

  function createBread(num){

    bread = game.add.group();
    game.physics.arcade.enable(bread);
    bread.enableBody = true;
    
    bread.createMultiple(num, bread);
    game.physics.arcade.enable(bread);
    bread.callAll('events.onOutOfBounds.add','events.onOutOfBounds', resetMember);
    bread.callAll('anchor.setTo', 'anchor', 0.5, 0.5);

}

function resetMember(bread){
    //bread.kill();
}

function timerEvent(){                              //Bread will fall depending on a timer


    //rand = randomNumber(1, num);
    //bread = game.add.image(0, 0, "bread");
    //bread.anchor.setTo(0.5, 0.5);
   
    //game.physics.arcade.enable(bread);
    //bread.enableBody = true;
}


function collide(){
    bread.y = ropes.y+50;
}

function create_wood(x){                            //Creates x amounts of sticks

    for(i=0; i<x+1; i++){
        let wood = game.add.image(diff*i+100, 0, "wood");        
    }  
}

function generate_ropes(x, y){
                                      //y is the amount of ropes, depends on difficulty
    ropes = game.add.group();
    game.physics.arcade.enable(ropes);
    ropes.enableBody = true;
    
    for(i=0; i<y; i++){

        side = randomNumber(1,2);
        height = randomNumber(1, 6);
        woods = randomNumber(1, x);
        

        if (side == 1) ropes.create(diff*i+98, 50*height, "rightRope");     
        else  ropes.create(diff*i+98, height, "leftRope");
        
    }
}

function move_goose(){
    cursors = game.input.keyboard.createCursorKeys();
    // IF left arrow pushed, goose moves to the left, unless he's at the utmost left
    if (cursors.left.justDown) 
    {
        if (goose.x > 100){
        goose.x -= diff;
        if (estado == "derecha") goose.scale.setTo(-1, 1);
        estado = "izquierda";
        }
    }

    // IF right arrow pushed, goose moves to the right, unless he's at the utmost right
    else if (cursors.right.justDown) 
    {
        if (goose.x != diff*(num-1)+100){
        goose.x += diff;
        if (estado == "izquierda") goose.scale.setTo(1, 1);
        estado = "derecha";
        }
    }

}
function updateTime() {
    remainingTime = Math.max(0,remainingTime-1);
    //hudTime.setText(setRemainingTime(remainingTime));
    if (remainingTime === 0) {
    game.time.events.remove(timerClock);
    }
}

function randomNumber(min, max) {
    max += 1;
    return Math.floor(Math.random() * (max - min) + min);
}

//a dibujar: cuerda 4 palos +2px, cuerdas de cada cant de palos. Uvas. HUD y botones.