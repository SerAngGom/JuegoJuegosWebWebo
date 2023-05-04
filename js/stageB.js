let stageB = {
    preload: loadStageB,
    create: createStageB,
    update: updateStageB
}

//————————————————————————————————————————————————————————————
//--------LOAD, CREATE AND UPDATE STAGE-----------------------
//————————————————————————————————————————————————————————————

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

    let goose = game.add.image(450, 100, "goose");
    let wood = game.add.image(100, 0, "wood");
  
    
   

    // load info for the wave and play music
    //initiateVariables();
    //playMusic();

    // for reading the keyboard
    //cursors = game.input.keyboard.createCursorKeys();
    //game.input.keyboard.onDownCallback = readKeyboard;
    //Wood.sprite = game.add.sprite(Wood.x, Wood.y, 'wood' /*, frame*/);

    //game.time.events.repeat(waveAppearanceRate, numberFlies, createOWP, this, 'fly', 'timer');
}

function updateStageB() {

  //  checkCollision();
// moveWords();
}