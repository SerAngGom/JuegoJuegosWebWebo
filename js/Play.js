let Play = {
    preload: loadPlay,
    create: createPlay,
    update: updatePlay
}

//————————————————————————————————————————————————————————————
//--------VARIABLE DECLARATIONS-------------------------------
//————————————————————————————————————————————————————————————

let bread;
let numBread = 1;  
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

let num = 4;                                //number of sticks (will be defined in the settings menu)
let diff = 700/num;                         //distance between sticks depends on how many there are
let rand = randomNumber(1, num);            //Bread falls on a random stick
let estado = "derecha";                     //The duck flips and is defaulted to looking right
let speed = 1;
let disparo;
               

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
}

function createPlay() {

    //LO HE PUESTO AQUI PARA QUE NO SE CREE CADA VEZ QUE SE LLAME A LA FUNCION mover_goose
    cursors = game.input.keyboard.createCursorKeys();

    // set the background image
    game.add.image( 0, 0, "bg");

    //goose = game.add.sprite(0, 180, 'animacionGoose', 'goose/shoot/0001');
    //goose.animations.add('shoot', Phaser.Animation.generateFrameNames('goose/shoot/0001', 1, '', 4), 10, true, false);

    //goose = game.add.sprite(0, 180, 'animacionGoose', 'goose/normal/0001');
    //goose.animations.add('walk', Phaser.Animation.generateFrameNames('goose/normal/0001', 1, '', 4), 10, true, false);
    
    timerClock = game.time.events.loop(Phaser.Timer.SECOND, updateTime, this);

    create_wood(num);
    generate_ropes(diff*rand, 5);
    createBread(numBread);
    goose = game.add.image(100, 400, "goose");
    goose.anchor.setTo(0.5, 0.5);
    game.physics.arcade.enable(goose);
    goose.enableBody = true;
    createShoot(5);
    
    cursors = game.input.keyboard.createCursorKeys();

    game.time.events.loop(Phaser.Timer.SECOND*10, timerEvent, this);
    fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    bread.x =  diff*(rand-1)+100;
    disparo.x =  goose.x;
    
}


function updatePlay() {

    game.physics.arcade.overlap(bread, hitboxesL, collideL, null, this);
    game.physics.arcade.overlap(bread, hitboxesR, collideR, null, this);
    game.physics.arcade.overlap(bread, disparo, collideR, null, this);
    game.physics.arcade.overlap(bread, disparo, collideL, null, this);

    bread.forEach(moveBread, this);
    //disparo.forEach(moverProjectile, this);

    changeR = false;
    changeL = false;
    
    move_goose();    

    //AL PONERLE EL FOREGROUND VA MAS LENTO EL JUEGO POCO A POCO
    //CREO QUE ES PORQUE SE SOBREPONE CADA VEZ QUE SE HACE UN UPDATE
    
    //game.add.image(0, 0, "foreground");

    moveBread(1, true);
    moverProjectile(disparo);
}


function randomNumber(min, max) {
    max += 1;
    return Math.floor(Math.random() * (max - min) + min);
}
