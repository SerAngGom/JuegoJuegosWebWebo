
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
//changeR = true;
unibread.x += speed*2;
}

function collideL(unibread) {
//changeL = true; 
unibread.x -= speed*2;
}
function explode(enemy, blast){

    x = game.add.image(enemy.x -60, enemy.y - 40, "splash");
    game.time.events.add(Phaser.Timer.SECOND*0.2, destroyX, this);
    enemy.kill();
    score += 100;
    blast.kill();
}

function destroyX(blast){
    x.visible = false;
    x.kill();
}

function createBread(){

rand = randomNumber(1, num);
let unibread = bread.create(diff*(rand-1)+100, 1, "bread");
game.physics.arcade.enable(unibread);
unibread.events.onOutOfBounds.add(resetMember);
unibread.anchor.setTo(0.5, 0.5);
unibread.scale.setTo(4/(num+5), 4/(num+5));
unibread.enableBody = true;

}

function createGrapes(){

    rand = randomNumber(1, num);
    let unigrape = grapes.create(diff*(rand-1)+100, 1, "grapes");
    game.physics.arcade.enable(unigrape);
    unigrape.events.onOutOfBounds.add(resetMember);
    unigrape.anchor.setTo(0.5, 0.5);
    unigrape.scale.setTo(4/(num+5), 4/(num+5));
    unigrape.enableBody = true; 
    }


function resetMember(item){
item.x = 0;
item.y = 0;

}
function createGoose(x, y){
goose = gooseG.create(x, y, "goose");
goose.anchor.setTo(0.5, 0.5);
game.physics.arcade.enable(goose);
goose.enableBody = true;

}

function createLives(){
   l1 = game.add.image(20, 20, "fullheart");
   l2 = game.add.image(20, 70, "fullheart");
   l3 = game.add.image(20, 120, "fullheart");
}

function loseLife(bread){
    
    if (lives == 3){
        l3 = game.add.image(20, 120, "emptyheart");
        lives -= 1;
    
    }
    else if (lives == 2){
        l2 = game.add.image(20, 70, "emptyheart");
        lives -= 1;
    }
    else if (lives == 1){
        l1 = game.add.image(20, 20, "emptyheart"); //perdería ya pero bueno
        lives -= 1;
        game.state.start('endScreen');

    }
    bread.kill();
    console.log(lives);
}

function gainLife(grapes){
    
     if (lives == 2){
        l3.kill();
        l3 = game.add.image(20, 70, "fullheart");
        lives += 1;
    }
    else if (lives == 1){
        l2.kill();
        l2 = game.add.image(20, 20, "fullheart"); 
        lives += 1;
    }
    grapes.kill();
    score+=500;
    console.log(lives);
}

function create_wood(){                            //Creates x amounts of sticks

for(i=0; i<=num; i++){
    diff = 700/num; 
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
        rope.scale.x = 4/num;
       
        incX = 0;
        incY = -10;
        for (j=0; j<5; j++){
            hitbox = hitboxesR.create(rope.x+incX, rope.y+incY,null);
            hitbox.scale.setTo(4/(num+12), 4/(num+12));
            incX += 36*(4/num);
            incY += 12;
        }
    }     
    else { 
        rope = ropes.create(diff*woods+98, 40*height, "leftRope");
        rope.scale.x =  4/num;

        incX = 30*(4/num);
        incY = 50;
        for (k=0; k<5; k++){
            hitbox = hitboxesL.create(rope.x+incX, rope.y+incY, null);
            hitbox.scale.setTo(4/(num+12), 4/(num+12));
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
        goose.kill();
        createGoose(goose.x, goose.y);

        estado = "izquierda";

        goose.scale.setTo(-1, 1);

        if (goose.x > 100)
        {
            goose.x -= diff;
            
        }
    }

// IF right arrow pushed, goose moves to the right, unless he's at the utmost right

    if (cursors.right.justDown && estado != "disparando") 
    {
        goose.kill();
        createGoose(goose.x, goose.y);

        estado = "derecha";
        goose.scale.setTo(1, 1);

        if (num != 9) {

            if (goose.x < diff*(num-1))
            {
                goose.x += diff;
              
            }
        }
        else {
            if (goose.x < diff*(num))
            {
                goose.x += diff;
             
            }
        }
      
    }

// IF space is pushed, a projectile is shot upwards

    else if (fireButton.justDown && estado != "disparando")
    {
        goose.kill();
        goose = gooseG.create(goose.x, goose.y, "shoot");
        goose.anchor.setTo(0.5, 0.5);
        game.physics.arcade.enable(goose);
        goose.enableBody = true;

        createShoot();
   
        estado = "disparando";

    }

}

function moverProjectile(chorro){

    chorro.y -= 10;
    if(chorro.y <= 0)
    {
        chorro.kill();
        estado = "null";
    }   
}


function createShoot() {
    
    if(estado != "disparando")
    {
        shot = disparo.create(goose.x, goose.y, 'projectile');
        game.physics.arcade.enable(shot);
    
        shot.events.onOutOfBounds.add(resetMember);
        shot.anchor.setTo(0, 0.5);
        shot.checkWorldBounds = true;
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

function createscore() {
    textscore = score.toString();
    titlescore = textscore;
    let style = {
        font: 'Courier',
        fontWeight: '600',
        fontSize: '40px',
    }
    mainTitle = game.add.text(0, 0, titlescore, style);
    mainTitle.anchor.setTo(0.5, 0);
    mainTitle.position.setTo(GAME_AREA_WIDTH/2, 50);
}
let mainTitle;
function updatescore(){
    mainTitle.kill();
    textscore = score.toString();
    titlescore = textscore;
    let style = {
        font: 'Courier',
        fontWeight: '600',
        fontSize: '40px',
    }
    mainTitle = game.add.text(0, 0, titlescore, style);
    mainTitle.anchor.setTo(0.5, 0);
    mainTitle.position.setTo(GAME_AREA_WIDTH/1.1, 25);
    console.log(score);
    console.log(textscore);
}
