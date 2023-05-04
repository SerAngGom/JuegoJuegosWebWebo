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

    // Crea el botón de imagen
    let facil = game.add.button(100, 200, 'patoA', goToStageA, this, 2, 1, 0);
    
    // Cambia la posición del botón
    facil.anchor.setTo(0.5, 0.5);
    facil.y = 100;
    facil.x = 200;
    facil.scale.setTo(0.75);


    // Crea el botón de imagen
    let normal = game.add.button(100, 200, 'patoB', goToStageB, this, 2, 1, 0);
    
    // Cambia la posición del botón
    normal.anchor.setTo(0.5, 0.5);
    normal.y = 200;
    normal.x = 200;
    normal.scale.setTo(0.75);


    // Crea el botón de imagen
    let dificil = game.add.button(100, 200, 'patoC', goToStageC, this, 2, 1, 0);
    
    // Cambia la posición del botón
    dificil.anchor.setTo(0.5, 0.5);
    dificil.y = 300;
    dificil.x = 200;
    dificil.scale.setTo(0.75);
}

function goToAboutScreen() {
    game.state.start('aboutScreen');
}

function goToStageA() {
    stage = 'A';
    //initiateVariablesStart();
    game.state.start('stageA');
}

function goToStageB() {
    stage = 'B';
    //initiateVariablesStart();
    game.state.start('stageB');
}

function goToStageC() {
    stage = 'C';
    //initiateVariablesStart();
    game.state.start('stageC');
}


function create() {
    // Crea el botón de imagen
    var button = game.add.button(game.world.centerX, game.world.centerY, 'buttonImage', actionOnClick, this, 2, 1, 0);
    
    // Cambia la posición del botón
    button.anchor.setTo(0.5, 0.5);
}

