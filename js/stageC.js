let stageC = {
    preload: loadStageC,
    create: createStageC,
    update: updateStageC
}            

//————————————————————————————————————————————————————————————
//--------LOAD, CREATE AND UPDATE-------------------------------
//————————————————————————————————————————————————————————————
<<<<<<< Updated upstream

let fireButton;

=======
>>>>>>> Stashed changes
function loadStageC() {
    game.load.image('bg', 'assets/imgs/background.png');
    game.load.image('goose', 'assets/imgs/goose.png');
    game.load.image('gooseShoot', 'assets/imgs/shoot.png');
    game.load.image('wood', 'assets/imgs/palo.png');
    game.load.image('bread', 'assets/imgs/pan.png');
    game.load.image('foreground', 'assets/imgs/foreground.png');
    game.load.image('rightRope', 'assets/imgs/cuerdaHaciaDer.png');
    game.load.image('leftRope', 'assets/imgs/cuerdaHaciaIzq.png');
<<<<<<< Updated upstream
    game.load.image('grapes', 'assets/imgs/uvas.png');
    game.load.image('shooting', 'assets/imgs/shoot.png');
    game.load.image('projectile', 'assets/imgs/projectile.png');
    game.load.image('splash', 'assets/imgs/explosion.png');
    
=======
    game.load.image('catfish', 'assets/imgs/siluro.png');
    game.load.image('projectile', 'assets/imgs/projectile.png');
    game.load.image('splash', 'assets/imgs/explosion.png');

>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
    fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        
    game.time.events.loop(Phaser.Timer.SECOND*5, timerEvent, this);
    
}



function updateStageC() {
    
    bool = game.physics.arcade.overlap(bread, ropes, collide, null, this);
    bread.forEach(moveBread, this, bool);
    
    move_goose();    
    game.add.image(0, 0, "foreground");
=======
    game.time.events.loop(Phaser.Timer.SECOND*5, timerEvent, this);
  
}

function createBread(num){

    bread = game.add.group();
    game.physics.arcade.enable(bread);
    bread.enableBody = true;
    
    bread.createMultiple(num, bread);
    //var breads.bread.create(0, 0, img);
    game.physics.arcade.enable(bread);
    bread.callAll('events.onOutOfBounds.add','events.onOutOfBounds', resetMember);
    bread.callAll('anchor.setTo', 'anchor', 0.5, 0.5);
    bread.callAll('x', diff*(rand-1)+100 );

}

function resetMember(bread){
    //bread.kill();
}
function updateStageC() {
    
    bread.forEach(moveBread, this);
    move_goose();

    //bread.y += speed;
    //game.physics.arcade.overlap(goose, bread, collide, null, this);
    
>>>>>>> Stashed changes
}

//————————————————————————————————————————————————————————————
//--------------------FUNCTIONS-------------------------------
//————————————————————————————————————————————————————————————

<<<<<<< Updated upstream
function moveBread(unibread, bool) {
    unibread.x = diff*(rand-1)+100;
    unibread.y += speed;
    if (bool == true) unibread.speed = 0;



  }
  function collide(unibread) {
    console.log('a');
    unibread.speed = 0;
    unibread.x += 10;
    //(unibread.x - 192), (unibread.y - 80)
  }

  function createBread(num){

    bread = game.add.group();
    game.physics.arcade.enable(bread);
    bread.enableBody = true;
    
    bread.createMultiple(num, "bread", 1, 1);
    game.physics.arcade.enable(bread);
    bread.callAll('events.onOutOfBounds.add','events.onOutOfBounds', resetMember);
    bread.callAll('anchor.setTo', 'anchor', 0.5, 0.5);
    bread.callAll('enableBody', true);
    
}

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

function timerEvent(){                       //Bread will fall depending on a timer

    
=======
function moveBread(unibread) {
    console.log(unibread);
    var speed = 100;
    unibread.x = diff*(rand-1)+100;
    unibread.y =speed;
  }
function timerEvent(){                              //Bread will fall depending on a timer


            
        

>>>>>>> Stashed changes
    //rand = randomNumber(1, num);
    //bread = game.add.image(0, 0, "bread");
    //bread.anchor.setTo(0.5, 0.5);
   
    //game.physics.arcade.enable(bread);
    //bread.enableBody = true;
}


<<<<<<< Updated upstream
=======
function collide(){
    bread.y = ropes.y+50;
}

>>>>>>> Stashed changes
function create_wood(x){                            //Creates x amounts of sticks

    for(i=0; i<x+1; i++){
        let wood = game.add.image(diff*i+100, 0, "wood");        
    }  
}

function generate_ropes(x, y){
                                      //y is the amount of ropes, depends on difficulty
<<<<<<< Updated upstream
    ropes = game.add.group();
    game.physics.arcade.enable(ropes);
    ropes.enableBody = true;

=======
    
>>>>>>> Stashed changes
    for(i=0; i<y; i++){

        side = randomNumber(1,2);
        height = randomNumber(1, 6);
        woods = randomNumber(1, x);
<<<<<<< Updated upstream
        

        if (side == 1) ropes.create(diff*i+98, 50*height, "rightRope");     
        else  ropes.create(diff*i+98, 50*height, "leftRope");
=======
        let ropes; 

        if (side == 1) ropes = game.add.image(diff*i+98, 50*height, "rightRope");     
        else ropes = game.add.image(diff*i+98, height, "leftRope");
>>>>>>> Stashed changes
        
    }
}

function move_goose(){
<<<<<<< Updated upstream
    cursors = game.input.keyboard.createCursorKeys();
    // IF left arrow pushed, goose moves to the left, unless he's at the utmost left
=======
    // IF left arrow pushed, goose moves to the left, unless he's at the utmost left
    
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
        if (goose.x != diff*(num-1)+100)
        {
            goose.x += diff;

            if (estado == "izquierda") 
            {
                goose.scale.setTo(1, 1);
            }
            estado = "derecha";
        }
    }

    else if (fireButton.justDown)
    {
        disparo.forEach(moverProjectile, this);

        console.log("Hola");

    }
        

}

function moverProjectile(chorro)
{
    this.chorro.x = goose.x;
    this.y -= 1;
}
=======
        if (goose.x != diff*(num-1)+100){
        goose.x += diff;
        if (estado == "izquierda") goose.scale.setTo(1, 1);
        estado = "derecha";
        }

        createShoot(3);
    }

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
    
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
//a dibujar: cuerdas de cada cant de palos. HUD y botones.
=======
//a dibujar: cuerda 4 palos +2px, cuerdas de cada cant de palos. Uvas. HUD y botones.
>>>>>>> Stashed changes
