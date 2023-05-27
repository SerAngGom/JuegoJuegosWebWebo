
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
    
    blast.kill();

    if (enemy = bread) {
        spawnedBread += 1;
        score += 100;
    }
 
}

function destroyX(blast){
    x.visible = false;
    x.kill();
}

function checkWaveStage(){

if (spawnedBread == targetBread){
    wave += 1;
    targetBread += 2;
}

if (wave == 3){
    wave = 1;
    stage = stage + 1;
    speed += 0.5;
    ropes.kill();
    generate_ropes(diff*rand, numropes + 1);
}


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
goose.scale.setTo(4/num, 4/num);
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
        goose.scale.setTo(-4/num, 4/num);
        estado = "izquierda";


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
        goose.scale.setTo(4/num, 4/num);
        estado = "derecha";
   

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
        goose.scale.setTo(4/num, 4/num);
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
    mainscore = game.add.text(0, 0, titlescore, style);
    mainscore.anchor.setTo(0.5, 0);
    mainscore.position.setTo(GAME_AREA_WIDTH/1.1, 60);
}
let mainTitle;
function updatescore(){
    mainscore.kill();
    textscore = score.toString();
    titlescore = textscore;
    let style = {
        font: 'Courier',
        fontWeight: '600',
        fontSize: '40px',
    }
    mainscore = game.add.text(0, 0, titlescore, style);
    mainscore.anchor.setTo(0.5, 0);
    mainscore.position.setTo(GAME_AREA_WIDTH/1.1, 60);
}

function createtimer(){
    texttimer = time.toString();
    titletimer = texttimer;
    let style = {
        font: 'Courier',
        fontWeight: '600',
        fontSize: '40px',
    }
    maintimer = game.add.text(0, 0, titletimer, style);
    maintimer.anchor.setTo(0.5, 0);
    maintimer.position.setTo(GAME_AREA_WIDTH/1.1, 100);

}

function updatetimer(){
    maintimer.kill();
    time += 1;
    texttimer = time.toString();
    titletimer = texttimer;
    let style = {
        font: 'Courier',
        fontWeight: '600',
        fontSize: '40px',
    }
    maintimer = game.add.text(0, 0, titletimer, style);
    maintimer.anchor.setTo(0.5, 0);
    maintimer.position.setTo(GAME_AREA_WIDTH/1.1, 100);
}

function createstage(){

    textstage = stage.toString() + '-' + wave.toString();
    titlestage = textstage;
    let style = {
        font: 'Courier',
        fontWeight: '600',
        fontSize: '40px',
    }
    mainstage = game.add.text(0, 0, titlestage, style);
    mainstage.anchor.setTo(0.5, 0);
    mainstage.position.setTo(GAME_AREA_WIDTH/1.1, 20);
}


function updatestage(){
    mainstage.kill();

    textstage = stage.toString() + '-' + wave.toString();
    titlestage = textstage;
    let style = {
        font: 'Courier',
        fontWeight: '600',
        fontSize: '40px',
    }
    mainstage = game.add.text(0, 0, titlestage, style);
    mainstage.anchor.setTo(0.5, 0);
    mainstage.position.setTo(GAME_AREA_WIDTH/1.1, 20);
}

/*function mouse_move{
    // Mantener pulsado, dentro de la función update
    if(game.input.activePointer.isDown){
        if(game.input.x > 500){ // Se comprueban las coordenadas del click
        // Esta tocando o haciendo click en el borde derecho de la pantalla
    }
}

// Pulsar una sola vez
game.input.onUp.add(function(){
    // Se ha presionado y levantado el dedo o el botón del ratón
});
</code></pre>

//mouse = game.input.mspointer;
    //game.input.mspointer.pointerMoveCallback = moveTypist;

}
*/
