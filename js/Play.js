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

let wood;
let grapes;
let catfish;
let catlive = 3;
let createfish;

let fireButton;
let goose;
let gooseG;

let shooting = false;

let ropes;
let numropes = 3;
let skip = 0;
let changeR = false;
let changeL = false;
let hitboxesL;
let hitboxesR;
let hitboxground;

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

var stage = 1;
var wave = 1;
let speed = 1;
let spawnedBread = 0;
let targetBread = 4;

let disparo;
let shot;
let sploosh;

var score = 0;
var time = 0;

let textscore;
let titlescore;
let mainscore;

let texttimer;
let titletimer;
let maintimer;

let textstage;
let titlestage;
let mainstage;

let musicaFondo;
let boolmouse = false;
 
//————————————————————————————————————————————————————————————
//--------LOAD, CREATE AND UPDATE------------------------------
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
    game.load.image('hitboxground','assets/imgs/hitboxground.png');
    game.load.image('catfish','assets/imgs/siluro.png');
    game.load.audio('shootEffect', 'assets/sound/efectoDisparo.wav');
    game.load.audio('explosionEffect', 'assets/sound/efectoExplosion.wav');
    game.load.audio('grapeEffect', 'assets/sound/efectoUva.wav');
    game.load.audio('damageEffect', 'assets/sound/efectoDano.wav');
    game.load.audio('backgroundMusic', 'assets/sound/musicaJuego.ogg');

}

function createPlay() {

    // set the background image
    game.add.image( 0, 0, "bg");

    timerClock = game.time.events.loop(Phaser.Timer.SECOND, updateTime, this);

    create_wood();
    generate_ropes(diff*rand, numropes);

    bread = game.add.group();
    bread.enableBody = true;
    createBread();

    hitboxground = game.add.group();
    hitboxground.create(0, 490, 'hitboxground');
    game.physics.arcade.enable(hitboxground);
    hitboxground.enableBody = true;
    hitboxground.visible = false;

    grapes = game.add.group();
    grapes.enableBody = true;

    catfish = game.add.group();
    game.physics.arcade.enable(hitboxground);
    catfish.enableBody = true;

    createLives();

    disparo = game.add.group();
    disparo.enableBody = true;

    gooseG = game.add.group();
    createGoose(80, 425);
    game.physics.arcade.enable(gooseG);
    gooseG.enableBody = true;

    cursors = game.input.keyboard.createCursorKeys();
    fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    game.time.events.loop(Phaser.Timer.SECOND*3*1/speed, createBread, this);
    game.time.events.loop(Phaser.Timer.SECOND*7.5* 1/speed, createGrapes, this);
    game.time.events.loop(Phaser.Timer.SECOND*1, updatetimer, this);

    createscore();
    createtimer();
    stage = 1;
    createstage();

    if(boolmouse == true) game.time.events.loop(Phaser.Timer.SECOND*speed, mouse_goose, this); 

    musicaFondo = game.add.sound('backgroundMusic');
    musicaFondo.loop = true;
    musicaFondo.play();
}


function updatePlay() {
    
    game.physics.arcade.overlap(bread, hitboxesL, collideL, null, this);
    game.physics.arcade.overlap(bread, hitboxesR, collideR, null, this);
    game.physics.arcade.overlap(bread, disparo, explode, null, this);
    game.physics.arcade.overlap(bread, gooseG, loseLife, null, this);
    game.physics.arcade.overlap(bread, hitboxground, loseLife, null, this);

    game.physics.arcade.overlap(grapes, hitboxesL, collideL, null, this);
    game.physics.arcade.overlap(grapes, hitboxesR, collideR, null, this);
    game.physics.arcade.overlap(grapes, disparo, explode, null, this);
    game.physics.arcade.overlap(grapes, gooseG, gainLife, null, this);

    game.physics.arcade.overlap(catfish, hitboxesL, collideL, null, this);
    game.physics.arcade.overlap(catfish, hitboxesR, collideR, null, this);
    game.physics.arcade.overlap(catfish, disparo,damagecatfish, null, this);
    game.physics.arcade.overlap(catfish, gooseG, loseLife, null, this);
    game.physics.arcade.overlap(catfish, hitboxground, loseLife, null, this);
    
    bread.forEach(moveBread, this);
    grapes.forEach(moveBread, this);
    catfish.forEach(moveBread, this);
    disparo.forEach(moverProjectile, this);

    changeR = false;
    changeL = false;
    updatescore();
    updatestage();
    checkWaveStage();

    if (boolmouse == false)move_goose();
    if(boolmouse == true) mouse_shoot();
}


function randomNumber(min, max) {
    max += 1;
    return Math.floor(Math.random() * (max - min) + min);
}

