let startScreen = {
    preload: loadStartScreen,
    create: createStartScreen,
};

//Variable definitions: assets (sounds, sprites, etc)

function loadStartScreen() {
    game.load.image('bg', 'assets/imgs/background.png')
    
}

function createStartScreen() {
    //initiate assets on the game screen: set their locations, scales, rotations, tweens, etc

    // add the background image to the screen
    game.add.image(-1, -1, "bg");

  
}

function goToAboutScreen() {
    game.state.start('aboutScreen');
}

function goToStageA() {
    stage = 'A';
    initiateVariablesStart();
    game.state.start('stageA');
}

function goToStageB() {
    stage = 'B';
    initiateVariablesStart();
    game.state.start('stageB');
}

function goToStageC() {
    stage = 'C';
    initiateVariablesStart();
    game.state.start('stageC');
}