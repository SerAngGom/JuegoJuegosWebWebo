let stageA = {
    preload: loadStageA,
    create: createStageA,
    update: updateStageA
}

//————————————————————————————————————————————————————————————
//--------LOAD, CREATE AND UPDATE STAGE-----------------------
//————————————————————————————————————————————————————————————

function loadStageA() {
    loadStages('A');
}

function createStageA() {
    // set the background image
    game.add.image( 0, 0, "bg");

    // load the json files


    // load info for the wave and play music
    initiateVariables();
    //playMusic();

    // for reading the keyboard
    cursors = game.input.keyboard.createCursorKeys();
    game.input.keyboard.onDownCallback = readKeyboard;
    Wood.sprite = game.add.sprite(Wood.x, Wood.y, 'wood' /*, frame*/);

    //game.time.events.repeat(waveAppearanceRate, numberFlies, createOWP, this, 'fly', 'timer');
}

function updateStageA() {

    checkCollision();
    moveWords();
}