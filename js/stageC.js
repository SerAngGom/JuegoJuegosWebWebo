let stageC = {
    preload: loadStageC,
    create: createStageC,
    update: updateStageC
}

//————————————————————————————————————————————————————————————
//--------LOAD, CREATE AND UPDATE STAGE-----------------------
//————————————————————————————————————————————————————————————
let goose;
let salto = 100;

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



    // Habilita las teclas de flecha para el juego
    cursors = game.input.keyboard.createCursorKeys();

    // load info for the wave and play music
    //initiateVariables();
    //playMusic();

    // for reading the keyboard
    //cursors = game.input.keyboard.createCursorKeys();
    //game.input.keyboard.onDownCallback = readKeyboard;
    //Wood.sprite = game.add.sprite(Wood.x, Wood.y, 'wood' /*, frame*/);

    //game.time.events.repeat(waveAppearanceRate, numberFlies, createOWP, this, 'fly', 'timer');
}

function updateStageC() {


        // Mueve el personaje hacia la izquierda si se presiona la flecha izquierda
        if (cursors.left.justDown) 
        {
            goose.x -= salto;
        }
    
        // Mueve el personaje hacia la derecha si se presiona la flecha derecha
        else if (cursors.right.justDown) 
        {
            goose.x += salto;
        }




  //  checkCollision();
// moveWords();
}