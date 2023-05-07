let stageC = {
    preload: loadStageC,
    create: createStageC,
    update: updateStageC
}

//————————————————————————————————————————————————————————————
//--------LOAD, CREATE AND UPDATE STAGE-----------------------
//————————————————————————————————————————————————————————————


function loadStageC() {
    game.load.image('bg', 'assets/imgs/background.png');

    game.load.image('goose', 'assets/imgs/goose.png');
    game.load.image('wood', 'assets/imgs/palo.png');
    game.load.image('bread', 'assets/imgs/pan.png');
    game.load.image('foreground', 'assets/imgs/foreground.png');
    game.load.image('cuerdaHaciaDer', 'assets/imgs/cuerdaHaciaDer.png');
    game.load.image('cuerdaHaciaIzq', 'assets/imgs/cuerdaHaciaIzq.png');
    game.load.image('catfish', 'assets/imgs/siluro.png');

}

function createStageC() {

    // set the background image
    game.add.image( 0, 0, "bg");

    let wood = game.add.image(100, 0, "wood");

    // Crea el personaje y ajusta su escala y posición
    goose = game.add.image(500, 375, "goose");

    estado = "derecha";

    // Habilita las teclas de flecha para el juego
    cursors = game.input.keyboard.createCursorKeys();

    //playMusic();

}

function updateStageC() {



  //  checkCollision();
}

