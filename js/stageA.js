let stageA = {
    preload: loadStageA,
    create: createStageA,
    update: updateStageA
}

//————————————————————————————————————————————————————————————
//--------LOAD, CREATE AND UPDATE STAGE-----------------------
//————————————————————————————————————————————————————————————

function loadStageA() {
<<<<<<< Updated upstream
    loadStages();
 
=======
    //loadStages('A');
>>>>>>> Stashed changes
}

function createStageA() {

    // set the background image
    game.add.image( 0, 0, "bg");

    let goose = game.add.image(450, 100, "goose");
    let wood = game.add.image(100, WOOD_Y, "wood");
  
    
    function create_wood(x){
        diff = 800/x
        for(i=0; i=x; i++){
            game.add.wood(wood, diff);  
        }
            
    }

    // load info for the wave and play music
    //initiateVariables();
    //playMusic();

    // for reading the keyboard
    cursors = game.input.keyboard.createCursorKeys();
    //game.input.keyboard.onDownCallback = readKeyboard;
    Wood.sprite = game.add.sprite(Wood.x, Wood.y, 'wood' /*, frame*/);

    //game.time.events.repeat(waveAppearanceRate, numberFlies, createOWP, this, 'fly', 'timer');
}

function updateStageA() {

    checkCollision();
    moveWords();
}