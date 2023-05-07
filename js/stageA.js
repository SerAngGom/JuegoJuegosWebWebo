let stageA = {
    preload: loadStageA,
    create: createStageA,
    update: updateStageA
}

//————————————————————————————————————————————————————————————
//--------LOAD, CREATE AND UPDATE STAGE-----------------------
//————————————————————————————————————————————————————————————

function loadStageA() {
    game.load.image('bg', 'assets/imgs/background.png');

    game.load.image('goose', 'assets/imgs/goose.png');
    game.load.image('wood', 'assets/imgs/palo.png');
    game.load.image('bread', 'assets/imgs/pan.png');
    game.load.image('foreground', 'assets/imgs/foreground.png');
    game.load.image('cuerdaHaciaDer', 'assets/imgs/cuerdaHaciaDer.png');
    game.load.image('cuerdaHaciaIzq', 'assets/imgs/cuerdaHaciaIzq.png');
    game.load.image('catfish', 'assets/imgs/siluro.png');

}

function createStageA() {

    // set the background image
    game.add.image( 0, 0, "bg");

    create_wood(num);
    bread = game.add.image(-100, 100, "bread");
    drop_bread(diff*rand+25, bread);
   

    goose = game.add.image(100, 350, "goose");
    let estado = "derecha";
    cursors = game.input.keyboard.createCursorKeys();
  
}

function updateStageA() {

    bread.y += 50;

    //game.physics.arcade.overlap(goose, bread, drop_bread, null, this);
}

function create_wood(x){
    diff = 700/x;
    for(i=0; i<x+1; i++){
        let wood = game.add.image(diff*i+100, 0, "wood");        
    }  
}
function drop_bread(x, bread){
    bread = game.add.image(x, 100, "bread");
    bread.anchor.setTo(0.5, 0.5);
    game.physics.arcade.enable(bread);
    bread.enableBody = true;
}

function randomNumber(min, max) {
    max += 1;
    return Math.floor(Math.random() * (max - min) + min);
}


