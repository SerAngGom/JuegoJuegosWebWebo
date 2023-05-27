let endScreen = {
    preload: loadEndScreen,
    create: createEndScreen
};

function loadEndScreen() {
    game.load.image('bg', 'assets/imgs/background.png');
    game.load.image('start', 'assets/imgs/return.png');
    game.load.image('back', 'assets/imgs/return.png');
}

function createEndScreen() {

    game.add.image(0, 0, "bg");

    btnStart = game.add.button(20, 20, 'back', clickBackToStart);
    btnStart.position.setTo(10, 10);


}

function clickBackToStart() {
    btnStart.inputEnabled = false;
    game.state.start('startScreen');
}

