
//————————————————————————————————————————————————————————————
//--------------------FUNCTIONS-------------------------------
//————————————————————————————————————————————————————————————

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
}

function collideL(unibread) {
changeL = true; 
}

function createBread(nume){

bread = game.add.group();
bread.enableBody = true;

bread.createMultiple(nume, "bread",diff*(rand-1)+100, 1);
game.physics.arcade.enable(bread);
bread.callAll('events.onOutOfBounds.add','events.onOutOfBounds', resetMember);
bread.callAll('anchor.setTo', 'anchor', 0.5, 0.5);
bread.callAll('scale.setTo', 'scale', 1-(num/10), 1-(num/10));
bread.callAll('enableBody', true);

}

function resetMember(item){
item.x = 0;
item.y = 0;

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
    woods = randomNumber(0, num-2);
    
    if (side == 1){
        rope = ropes.create(diff*woods+98, 40*height, "rightRope"); 
        rope.scale.x = 4/(num);
       
        incX = 0;
        incY = -10;
        for (j=0; j<5; j++){
            hitbox = hitboxesR.create(rope.x+incX, rope.y+incY, null);
            hitbox.scale.setTo(1/4, 1/4);
            incX += 36*(4/num);
            incY += 12;
        }
    }     
    else { 
        rope = ropes.create(diff*woods+98, 40*height, "leftRope");
        rope.scale.x =  4/(num);

        incX = 30*(4/num);
        incY = 50;
        for (k=0; k<5; k++){
            hitbox = hitboxesL.create(rope.x+incX, rope.y+incY, null);
            hitbox.scale.setTo(1/4, 1/4);
            incX += 36*(4/num);
            incY -= 12;
            }
        }  
    }
}

function move_goose(){


// IF left arrow pushed, goose moves to the left, unless he's at the utmost left

    if (cursors.left.justDown && estado != "disparando") 
    {
        estado = "izquierda";
    //  goose.animations.play('normal');
        goose.scale.setTo(-1, 1);

        if (goose.x > 100)
        {
            goose.x -= diff;
        }

        //goose.animations.play('walk');
    }

// IF right arrow pushed, goose moves to the right, unless he's at the utmost right

    if (cursors.right.justDown && estado != "disparando") 
    {
        estado = "derecha";
        goose.scale.setTo(1, 1);

        if (goose.x < diff*(num-1))
        {
            goose.x += diff;
        }

        //goose.animations.play('walk');
    }


// IF space is pushed, a projectile is shot upwards

    else if (fireButton.justDown && estado != "disparando")
    {
        goose.kill();

        //disparo.forEach(moverProjectile, this);   
        console.log("Hola"); 

        createShoot();
        shootLaser();    
        estado = "disparando";
        
        goose = game.add.image(goose.x, goose.y, "shoot");
        goose.anchor.setTo(0.5, 0.5);
        //goose.animations.play('shoot');
    }

//AÑADIR TIEMPO ESPERA DISPARO DE NUEVO

}

/*
function createShoot(num) {

    disparo = game.add.group();
    game.physics.arcade.enable(disparo);
    disparo.enableBody = true;

    disparo.createMultiple(num, 'projectile', goose.x, goose.y);
    disparo.callAll('events.onOutOfBounds.add','events.onOutOfBounds', killMember);
    disparo.callAll('anchor.setTo', 'anchor', 0.5, 0.5);
    disparo.callAll('enableBody', true);

}
*/

function shootLaser() {

    disparo = game.add.image(goose.x, goose.y, "projectile");

    /*
    let shot = disparo.getFirstExists(false);
    
    if (shot) {
        shot.reset(x, y);
        shot.body.velocity.y = speed;
    }*/
}
       

function moverProjectile(chorro){

    chorro.y -= 10;
    if(chorro.y <= 0)
    {
        chorro.kill();
        estado = "null";
        goose.kill();
        goose = game.add.image(goose.x, goose.y, "goose");
        goose.anchor.setTo(0.5, 0.5);
    }   
}


function createShoot(number) {
    
    if(estado != "disparando")
    {
        disparo = game.add.group();
        disparo.enableBody = true;
        disparo.createMultiple(number, 'projectile');
    
        game.physics.arcade.enable(disparo);
    
        disparo.callAll('events.onOutOfBounds.add','events.onOutOfBounds', resetMember);
        disparo.callAll('anchor.setTo', 'anchor', 0, 0.5);
        disparo.setAll('checkWorldBounds', true);
    }

}

function killMember(item) {
    item.kill();
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

    
    
    