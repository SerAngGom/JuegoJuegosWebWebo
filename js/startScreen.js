let startScreen = {
    preload: loadStartScreen,
    create: createStartScreen,
};

//Variable definitions: assets (sounds, sprites, etc)
let musicaInicio;
function loadStartScreen() {
    game.load.image('bg', 'assets/imgs/background.png');
    game.load.image('title', 'assets/imgs/title.png');
    game.load.image('patoB', 'assets/imgs/patoB.png');

    game.load.image('setting', 'assets/imgs/setting.png');
    game.load.image('aboutScreen', 'assets/imgs/aboutScreen.png');
    game.load.audio('startMusic', 'assets/sound/musicaInicio.ogg');
      
}

function createStartScreen() {
    //initiate assets on the game screen: set their locations, scales, rotations, tweens, etc
    
    // add the background image to the screen
    game.add.image(0, 0, "bg");
    game.add.image(80, 40, "title");


    // Crea el botón de imagen
    let normal = game.add.button(100, 200, 'patoB', goToPlay, this, 2, 1, 0);

    // Cambia la posición del botón
    normal.anchor.setTo(0, 0.5);
    normal.y = 275;
    normal.x = 0;


    //Crea el botón de ajustes
    let Settings = game.add.button(100, 200, 'setting', goToSettings, this, 2, 1, 0);

    //Cambia la posicion del botón
    Settings.anchor.setTo(0.5, 0.5);
    Settings.y = 40;
    Settings.x = 755;

    //Crea el botón de ajustes
    let aboutScreen = game.add.button(100, 200, 'aboutScreen', goToaboutScreen, this, 2, 1, 0);

    //Cambia la posicion del botón
    aboutScreen.anchor.setTo(0.5, 0.5);
    aboutScreen.y = 40;
    aboutScreen.x = 675;

    createMusic();
}


function goToPlay() {
    musicaInicio.stop();
    stage = 'B';
    //initiateVariablesStart();
    game.state.start('Play');
    
}


function goToSettings() {
    musicaInicio.stop();
    stage = 'S';
    //initiateVariablesStart();
    game.state.start('Settings');
}

function goToaboutScreen() {
    musicaInicio.stop();
    stage= 'I';

    game.state.start('aboutScreen');
}


function create() {
    // Crea el botón de imagen
    var button = game.add.button(game.world.centerX, game.world.centerY, 'buttonImage', actionOnClick, this, 2, 1, 0);

    // Cambia la posición del botón
    button.anchor.setTo(0.5, 0.5);

    musicaInicio = game.add.sound('startMusic');
    musicaInicio.loop = true;
    musicaInicio.play();
}

function createMusic() 
{
    musicaInicio = game.add.sound('startMusic');
    musicaInicio.loop = true;
    musicaInicio.play();
}

