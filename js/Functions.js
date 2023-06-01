
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

        sploosh = game.add.image(enemy.x -60, enemy.y - 40, "splash");
        game.time.events.add(Phaser.Timer.SECOND*0.1, destroyX, this);
        enemy.kill();
        blast.kill();

        let soundEffect = game.add.sound('explosionEffect');
        soundEffect.play();

        if (enemy = bread) {
            spawnedBread += 1;
            score += 100;

    } 
}

function damagecatfish(enemy, blast){

    catlive -= 1;
    sploosh = game.add.image(enemy.x -60, enemy.y - 40, "splash");
    game.time.events.add(Phaser.Timer.SECOND*0.1, destroyX, this);
    
    blast.kill();
    if (catlive == 0){
        enemy.kill();
        catlive = 3;
    }
}

function destroyX(blast){
    sploosh.visible = false;
    sploosh.kill();
}

function checkWaveStage(){

if (spawnedBread == targetBread){
    wave += 1;
    targetBread += 2;
}

if (wave > 3){
    wave = 1;
    stage = stage + 1;
    createfish = true;
    speed += 0.5;

    ropes.kill();
    generate_ropes(diff*rand, numropes + 1);

    grapes.kill();              //these three remakes of the groups are so that if theres already a bread,
                                // it resets, and then respawns on top of the new ropes instead of under them.
    grapes = game.add.group();
    grapes.enableBody = true;

    bread.kill();
    bread = game.add.group();
    bread.enableBody = true;

    catfish.kill();
    catfish = game.add.group();
    catfish.enableBody = true;

    
}

if (stage >= 4 && createfish == true){
    catlive = 3;
    createCatfish();
    createfish = false;
    }
}
function createBread(){

rand = randomNumber(1, num);
let unibread = bread.create(diff*(rand-1)+100, 1, "bread");
unibread.events.onOutOfBounds.add(resetMember);
unibread.anchor.setTo(0.5, 0.5);
unibread.scale.setTo(4/(num+5), 4/(num+5));
unibread.enableBody = true;

}


function createGrapes(){

    rand = randomNumber(1, num);
    let unigrape = grapes.create(diff*(rand-1)+100, 1, "grapes");
    unigrape.events.onOutOfBounds.add(resetMember);
    unigrape.anchor.setTo(0.5, 0.5);
    unigrape.scale.setTo(4/(num+5), 4/(num+5));
    unigrape.enableBody = true; 
    }


function createCatfish(){

    rand = randomNumber(1, num);
    let fish = catfish.create(diff*(rand-1)+100, 1, "catfish");
    fish.events.onOutOfBounds.add(resetMember);
    fish.anchor.setTo(0.5, 0.5);
    fish.scale.setTo(4/(num+5), 4/(num+5));
    fish.enableBody = true; 
    }


function resetMember(item){
    item.kill();

}
function createGoose(x, y){
goose = gooseG.create(x, y, "goose");
goose.anchor.setTo(0.5, 0.5);
goose.scale.setTo(4/num, 4/num);
goose.enableBody = true;

}

function createLives(){
   l1 = game.add.image(20, 20, "fullheart");
   l2 = game.add.image(20, 70, "fullheart");
   l3 = game.add.image(20, 120, "fullheart");
}

function loseLife(bread){
    
    let soundEffect = game.add.sound('damageEffect');
    soundEffect.play();

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
        musicaFondo.stop();
        game.state.start('endScreen');

    }

    bread.kill();
}

function gainLife(grapes){

    let soundEffect = game.add.sound('grapeEffect');
    soundEffect.play();

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
    ropes.enableBody = true;

    hitboxesR = game.add.group();
    hitboxesR.enableBody = true;

    hitboxesL = game.add.group();
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
            hitbox.scale.setTo(4/(num+12), 4/(num+10));
            incX += 36*(4/num);
            incY += 12;
        }
    }     
    else { 
        rope = ropes.create(diff*woods+98, 30*height, "leftRope");
        rope.scale.x =  4/num;

        incX = 30*(4/num);
        incY = 50;
        for (k=0; k<5; k++){
            hitbox = hitboxesL.create(rope.x+incX, rope.y+incY, null);
            hitbox.scale.setTo(4/(num+12), 4/(num+10));
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

            if (goose.x < diff*(num-1)) goose.x += diff;

        }
        else if (goose.x < diff*(num)) goose.x += diff;

}

// IF space is pushed, a projectile is shot upwards

    else if (fireButton.justDown && estado != "disparando")
    {
        goose.kill();
        goose = gooseG.create(goose.x, goose.y, "shoot");
        goose.scale.setTo(4/num, 4/num);
        goose.anchor.setTo(0.5, 0.5);
        goose.enableBody = true;
        
        createShoot();

        let soundEffect = game.add.sound('shootEffect');
        soundEffect.play();
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
        shot.events.onOutOfBounds.add(resetMember);
        shot.anchor.setTo(0, 0.5);
        shot.checkWorldBounds = true;
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


function mouse_goose(){
    x = game.input.mousePointer.x;
    for (k=0; k<=num; k++){       

//if que haga que si está a diff*k del ratón, ya no se mueva
if(Math.abs(goose.x - x) > diff/3){

        if ( x > diff*k && x < diff*(k+1) && goose.x < x && estado != "disparando") 
        {
            goose.kill();
            createGoose(goose.x, goose.y);
            goose.scale.setTo(4/num, 4/num);
            estado = "derecha";
        
            if (num != 9) {

                if (goose.x < diff*(num-1))goose.x += diff;
            }
            else if (goose.x < diff*(num)) goose.x += diff;
        }

        else if ( x > diff*k && x < diff*(k+1) && goose.x >= x && estado != "disparando") 
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
      }
     
    }
    
    
}

function mouse_shoot(){
    if (game.input.mousePointer.leftButton.justPressed(30)){

        goose.kill();
        goose = gooseG.create(goose.x, goose.y, "shoot");
        goose.scale.setTo(4/num, 4/num);
        goose.anchor.setTo(0.5, 0.5);
        goose.enableBody = true;
        
        createShoot();

        let soundEffect = game.add.sound('shootEffect');
        soundEffect.play();
        estado = "disparando";
        }
}