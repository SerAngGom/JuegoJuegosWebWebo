let startScreen = {
    preload: loadStartScreen,
    create: createStartScreen,
};

//Variable definitions: assets (sounds, sprites, etc)

function loadStartScreen() {
    game.load.image('bg', 'assets/imgs/background.png');
    game.load.image('patoA', 'assets/imgs/patoA.png');
    game.load.image('patoB', 'assets/imgs/patoB.png');
    game.load.image('patoC', 'assets/imgs/patoC.png');
}

function createStartScreen() {
    //initiate assets on the game screen: set their locations, scales, rotations, tweens, etc

    // add the background image to the screen
    game.add.image(0, 0, "bg");


    let pato1 = game.add.image(0, 0, "patoA");
    
    pato1.scale.setTo(0.75);

    pato1.y = 100;
    pato1.x = 200;

    let pato2 = game.add.image(0, 0, "patoA");
    
    pato2.scale.setTo(0.75);

    pato2.y = 200;
    pato2.x = 200;


    let pato3 = game.add.image(0, 0, "patoA");
    
    pato3.scale.setTo(0.75);

    pato3.y = 300;
    pato3.x = 200;


    let pato4 = game.add.image(0, 0, "patoA");
    
    pato4.scale.setTo(5);

    pato4.y = 300;
    //pato4.x = -0.75 * pato4.width;


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