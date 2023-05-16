let stageB = {
    preload: loadStageB,
    create: createStageB,
    update: updateStageB
}

//————————————————————————————————————————————————————————————
//--------VARIABLE DECLARATIONS-------------------------------
//————————————————————————————————————————————————————————————

let bread;
let numBread = 6;  

let hitboxesL;
let hitboxesR;
let fireButton;
let goose;
let ropes;
let wood;
let grapes;

let remainingTime;

let num = 4;                                //number of sticks (will be defined in the settings menu)
let diff = 700/num;                         //distance between sticks depends on how many there are
let rand = randomNumber(1, num);            //Bread falls on a random stick
let estado = "derecha";    //The duck flips and is defaulted to looking right
let speed = 1;
               

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
    game.load.image('grapes', 'assets/imgs/uvas.png');
    game.load.image('shooting', 'assets/imgs/shoot.png');
    game.load.image('projectile', 'assets/imgs/projectile.png');
    game.load.image('splash', 'assets/imgs/explosion.png');
    
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

    game.time.events.loop(Phaser.Timer.SECOND*10, timerEvent, this);
    fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    bread.x =  diff*(rand-1)+100;
    
}
var changeR = false;
var changeL = false;

function updateStageB() {
    game.physics.arcade.overlap(bread, hitboxesL, collideL, null, this);
    game.physics.arcade.overlap(bread, hitboxesR, collideR, null, this);
    bread.forEach(moveBread, this);
    changeR = false;
    changeL = false;
    move_goose();    
    game.add.image(0, 0, "foreground");

    //moveBread(1, true);
}

//————————————————————————————————————————————————————————————
//--------------------FUNCTIONS-------------------------------
//————————————————————————————————————————————————————————————
let skip = 0;
function moveBread(unibread) {
   
        if (changeL != false) {
           
            unibread.x -= speed*2;
            unibread.y += speed; 
        }
        else if (changeR != false) {
            unibread.x += speed*2;
            unibread.y += speed;  
        }
        else  unibread.y += speed;
    }

  function collideR(unibread) {
    changeR = true;
    console.log('a');
  }
 
  function collideL(unibread) {
    changeL = true;
    console.log('a');
  }

  function createBread(num){

    bread = game.add.group();
    game.physics.arcade.enable(bread);
    bread.enableBody = true;


    bread.createMultiple(num, "bread",diff*(rand-1)+100, 1);
    game.physics.arcade.enable(bread);
    bread.callAll('events.onOutOfBounds.add','events.onOutOfBounds', resetMember);
    bread.callAll('anchor.setTo', 'anchor', 0.5, 0.5);
    bread.callAll('scale.setTo', 'scale', 0.7, 0.7);
    bread.callAll('enableBody', true);
    
}

function resetMember(bread){
    bread.x = 0;
    bread.y = 0;

}

function timerEvent(){                       //Bread will fall depending on a timer

        let unibread = bread.getFirstExists();
        unibread.reset(0, 0);
        
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

    hitboxesR = game.add.group();
    game.physics.arcade.enable(hitboxesR);
    hitboxesR.enableBody = true;

    hitboxesL = game.add.group();
    game.physics.arcade.enable(hitboxesL);
    hitboxesL.enableBody = true;

    for(i=0; i<y; i++){

        side = randomNumber(1,2);
        height = randomNumber(1, 6);
        woods = randomNumber(1, x);
        
        if (side == 1){
            rope = ropes.create(diff*i+98, 50*height, "rightRope"); 
            rope.scale.x = 4/(num);
           

            incX = 0;
            incY = -10;
            for (j=0; j<5; j++){
                hitbox = hitboxesR.create(rope.x+incX, rope.y+incY,"grapes");
                hitbox.scale.setTo(1/4, 1/4);
                incX += 36*(4/num);
                incY += 12;
            }
        }     
        else { 
            rope = ropes.create(diff*i+98, 50*height, "leftRope");
            rope.scale.x =  4/(num);

            incX = 30*(4/num);
            incY = 50;
            for (k=0; k<5; k++){
                hitbox = hitboxesL.create(rope.x+incX, rope.y+incY,"grapes");
                hitbox.scale.setTo(1/4, 1/4);
                incX += 36*(4/num);
                incY -= 12;
            }
        }  
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
    else if (fireButton.justDown)
    {
        disparo.forEach(moverProjectile, this);

        console.log("Hola");        

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

