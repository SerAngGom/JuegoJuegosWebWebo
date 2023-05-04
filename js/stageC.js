let stageC = {
    preload: loadStageC,
    create: createStageC,
    update: updateStageC
}

//————————————————————————————————————————————————————————————
//--------LOAD, CREATE AND UPDATE STAGE-----------------------
//————————————————————————————————————————————————————————————
let goose;
let velocidad = 5;

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
    goose = game.add.sprite(200, 200, 'goose').scale.setTo(0.5);


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
        if (cursors.left.isDown) {
            goose.x -= velocidad;
        }
    
        // Mueve el personaje hacia la derecha si se presiona la flecha derecha
        if (cursors.right.isDown) {
            goose.x += velocidad;
        }
    
        // Mueve el personaje hacia arriba si se presiona la flecha arriba
        if (cursors.up.isDown) {
            goose.y -= velocidad;
        }
    
        // Mueve el personaje hacia abajo si se presiona la flecha abajo
        if (cursors.down.isDown) {
            goose.y += velocidad;
        }
  //  checkCollision();
// moveWords();
}