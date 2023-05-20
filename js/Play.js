let Play = {
    preload: loadPlay,
    create: createPlay,
    update: updatePlay
}

//————————————————————————————————————————————————————————————
//--------VARIABLE DECLARATIONS-------------------------------
//————————————————————————————————————————————————————————————

let bread;
let unibread;
let x; 

let wood;
let grapes;
let fireButton;
let goose;

let shooting = false;

let ropes;
let skip = 0;
let changeR = false;
let changeL = false;
let hitboxesL;
let hitboxesR;

let remainingTime;
let shootTime;

let lives = 3;
let l1;
let l2;
let l3;

let num = 4;                               //number of sticks (will be defined in the settings menu)
let diff = 700/num;                         //distance between sticks depends on how many there are
let rand = randomNumber(1, num);            //Bread falls on a random stick
let estado = "null";                     //The duck flips and is defaulted to looking right
let speed = 1;

let disparo;
let shot;

//————————————————————————————————————————————————————————————
//--------LOAD, CREATE AND UPDATE-------------------------------
//————————————————————————————————————————————————————————————


function loadPlay() {
    game.load.image('bg', 'assets/imgs/background.png');
    game.load.image('goose', 'assets/imgs/goose.png');
    game.load.image('wood', 'assets/imgs/palo.png');
    game.load.image('bread', 'assets/imgs/pan.png');
    game.load.image('foreground', 'assets/imgs/foreground.png');
    game.load.image('rightRope', 'assets/imgs/cuerdaHaciaDer.png');
    game.load.image('leftRope', 'assets/imgs/cuerdaHaciaIzq.png');
    game.load.image('grapes', 'assets/imgs/uvas.png');
    game.load.image('shoot', 'assets/imgs/shoot.png');
    game.load.image('projectile', 'assets/imgs/projectile.png');
    game.load.image('splash', 'assets/imgs/explosion.png');
    game.load.image('fullheart', 'assets/imgs/corple.png');
    game.load.image('emptyheart', 'assets/imgs/corbuit.png');

}

function createPlay() {

    // set the background image
    game.add.image( 0, 0, "bg");

    timerClock = game.time.events.loop(Phaser.Timer.SECOND, updateTime, this);

    create_wood();
    generate_ropes(diff*rand, 5);
    
    bread = game.add.group();
    bread.enableBody = true;
    createBread();

    grapes= game.add.group();
    grapes.enableBody = true;
    createGrapes();

    createLives();

    disparo = game.add.group();
    disparo.enableBody = true;

    createSplash = game.add.group();
    createSplash.enableBody = true;

    createGoose(80, 425);
    game.physics.arcade.enable(goose);
    goose.enableBody = true;

    cursors = game.input.keyboard.createCursorKeys();
    fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);


    game.time.events.loop(Phaser.Timer.SECOND*3, createBread, this);
    game.time.events.loop(Phaser.Timer.SECOND*8, createGrapes, this);
}


function updatePlay() {
    
    game.physics.arcade.overlap(bread, hitboxesL, collideL, null, this);
    game.physics.arcade.overlap(bread, hitboxesR, collideR, null, this);
    game.physics.arcade.overlap(bread, disparo, explode, null, this);
    game.physics.arcade.collide(bread, goose, loseLife, null, this);

    game.physics.arcade.overlap(grapes, hitboxesL, collideL, null, this);
    game.physics.arcade.overlap(grapes, hitboxesR, collideR, null, this);
    game.physics.arcade.overlap(grapes, disparo, explode, null, this);
    game.physics.arcade.overlap(grapes, goose, gainLife, null, this);

    bread.forEach(moveBread, this);
    grapes.forEach(moveBread, this);
    disparo.forEach(moverProjectile, this);

    changeR = false;
    changeL = false;

    move_goose();

}


function randomNumber(min, max) {
    max += 1;
    return Math.floor(Math.random() * (max - min) + min);
}
