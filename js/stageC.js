let stageC = {
    preload: loadStageC,
    create: createStageC,
    update: updateStageC
}            

//————————————————————————————————————————————————————————————
//--------LOAD, CREATE AND UPDATE-------------------------------
//————————————————————————————————————————————————————————————


function loadStageC() {
    game.load.image('bg', 'assets/imgs/background.png');
    game.load.image('goose', 'assets/imgs/goose.png');
    game.load.image('gooseShoot', 'assets/imgs/shoot.png');
    game.load.image('wood', 'assets/imgs/palo.png');
    game.load.image('bread', 'assets/imgs/pan.png');
    game.load.image('foreground', 'assets/imgs/foreground.png');
    game.load.image('rightRope', 'assets/imgs/cuerdaHaciaDer.png');
    game.load.image('leftRope', 'assets/imgs/cuerdaHaciaIzq.png');

    game.load.image('grapes', 'assets/imgs/uvas.png');
    game.load.image('shooting', 'assets/imgs/shoot.png');
    game.load.image('projectile', 'assets/imgs/projectile.png');
    game.load.image('splash', 'assets/imgs/explosion.png');
    

    game.load.image('catfish', 'assets/imgs/siluro.png');
    game.load.image('projectile', 'assets/imgs/projectile.png');
    game.load.image('splash', 'assets/imgs/explosion.png');


}

function createStageC() {

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


    fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        
    game.time.events.loop(Phaser.Timer.SECOND*5, timerEvent, this);
    
}



function updateStageC() {
    
    bool = game.physics.arcade.overlap(bread, ropes, collide, null, this);
    bread.forEach(moveBread, this, bool);
    
    move_goose();    
    game.add.image(0, 0, "foreground");

    game.time.events.loop(Phaser.Timer.SECOND*5, timerEvent, this);
  
}


//————————————————————————————————————————————————————————————
//--------------------FUNCTIONS-------------------------------
//————————————————————————————————————————————————————————————


function createShoot(num) {
    disparo = game.add.group();
    disparo.enableBody = true;
    disparo.createMultiple(num, 'projectile', goose.x, goose.y);
    bread.callAll('events.onOutOfBounds.add','events.onOutOfBounds', resetMember);
    bread.callAll('anchor.setTo', 'anchor', 0.5, 0.5);
    bread.callAll('enableBody', true);

}

function shootLaser() {
    

    let shot = lasers.getFirstExists(false);
    if (shot) {
        shot.reset(x, y);
        shot.body.velocity.y = speed;
    }
    return shot;
}
    
function resetMember(bread){
    bread.kill();
}



function moverProjectile(chorro)
{
    this.chorro.x = goose.x;
    this.y -= 1;

        if (goose.x != diff*(num-1)+100){
        goose.x += diff;
        }
        if (estado == "izquierda") {goose.scale.setTo(1, 1);
        estado = "derecha";
        }

        createShoot(3);
    
}


function createShoot(number) {
    disparo = game.add.group();
    disparo.enableBody = true;
    disparo.createMultiple(number, 'shoot');
    disparo.callAll('events.onOutOfBounds.add',
    'events.onOutOfBounds', resetMember);
    disparo.callAll(
    'anchor.setTo', 'anchor', 0.5, 1.0);
    disparo.setAll('checkWorldBounds', true);

    disparo = game.add.image(goose.x, goose.y - 100, "projectile");
}

function resetMember(item) {
    item.kill();
}
    