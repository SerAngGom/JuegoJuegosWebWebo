let stageB = {
    preload: loadStageB,
    create: createStageB,
    update: updateStageB
}

//————————————————————————————————————————————————————————————
//--------LOAD, CREATE AND UPDATE STAGE-----------------------
//————————————————————————————————————————————————————————————

let bread;
let goose;
let num = 8;
let diff = 700/num;
let salto = diff; 
let rand = randomNumber(1, num); //El pan cae por un palo aleatorio
let estado = "derecha";

function loadStageB() {
    game.load.image('bg', 'assets/imgs/background.png');

    game.load.image('goose', 'assets/imgs/goose.png');
    game.load.image('wood', 'assets/imgs/palo.png');
    game.load.image('bread', 'assets/imgs/pan.png');
    game.load.image('foreground', 'assets/imgs/foreground.png');
    game.load.image('cuerdaHaciaDer', 'assets/imgs/cuerdaHaciaDer.png');
    game.load.image('cuerdaHaciaIzq', 'assets/imgs/cuerdaHaciaIzq.png');
    game.load.image('catfish', 'assets/imgs/siluro.png');

}

function createStageB() {

    // set the background image
    game.add.image( 0, 0, "bg");

    create_wood(num);
    bread = game.add.image(-100, 100, "bread");
    drop_bread(diff*rand+25, bread);
   

    goose = game.add.image(100, 350, "goose");
    goose.anchor.setTo(0.5, 0,5);
    cursors = game.input.keyboard.createCursorKeys();
  
}

function updateStageB() {

    move_goose();
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

function move_goose(){
    // Mueve el personaje hacia la izquierda si se presiona la flecha izquierda
    if (cursors.left.justDown) 
    {
        
        if (estado == "derecha") goose.scale.setTo(-1, 1);
        estado = "izquierda";
        goose.x -= salto;
        
    }

    // Mueve el personaje hacia la derecha si se presiona la flecha derecha
    else if (cursors.right.justDown) 
    {
        
        if (estado == "izquierda") goose.scale.setTo(1, 1);
        estado = "derecha";
        goose.x += salto;
    }
}
