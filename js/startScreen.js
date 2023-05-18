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
    game.load.image('setting', 'assets/imgs/setting.png');
    game.load.image('aboutScreen', 'assets/imgs/aboutScreen.png');
}

function createStartScreen() {
    //initiate assets on the game screen: set their locations, scales, rotations, tweens, etc

    // add the background image to the screen
    game.add.image(0, 0, "bg");


    // Crea el botón de imagen
    let normal = game.add.button(100, 200, 'patoB', goToPlay, this, 2, 1, 0);

    // Cambia la posición del botón
    normal.anchor.setTo(0.5, 0.5);
    normal.y = 200;
    normal.x = 200;
    normal.scale.setTo(0.75);


    //Crea el botón de ajustes
    let Settings = game.add.button(100, 200, 'setting', goToSettings, this, 2, 1, 0);

    //Cambia la posicion del botón
    Settings.anchor.setTo(0.5, 0.5);
    Settings.y = 400;
    Settings.x = 200;
    Settings.scale.setTo(0.15);

    //Crea el botón de ajustes
    let aboutScreen = game.add.button(100, 200, 'aboutScreen', goToaboutScreen, this, 2, 1, 0);

    //Cambia la posicion del botón
    aboutScreen.anchor.setTo(0.5, 0.5);
    aboutScreen.y = 400;
    aboutScreen.x = 400;
    aboutScreen.scale.setTo(0.5);
}

function goToAboutScreen() {
    game.state.start('aboutScreen');
}


function goToPlay() {
    stage = 'B';
    //initiateVariablesStart();
    game.state.start('Play');
}


function goToSettings() {
    stage = 'S';
    //initiateVariablesStart();
    game.state.start('Settings');
}

function goToaboutScreen() {
    stage= 'I';

    game.state.start('aboutScreen');
}


function create() {
    // Crea el botón de imagen
    var button = game.add.button(game.world.centerX, game.world.centerY, 'buttonImage', actionOnClick, this, 2, 1, 0);

    // Cambia la posición del botón
    button.anchor.setTo(0.5, 0.5);
}

