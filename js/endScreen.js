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
    game.world.removeAll();
    game.add.image(0, 0, "bg");

    btnStart = game.add.button(20, 20, 'back', clickBackToStart);
    btnStart.position.setTo(10, 10);

    let titlest = 'Stage: ';
    titlest += stage.toString() + '-' + wave.toString();
    let style = {
        font: 'Source Sans Pro',
        fontWeight: '600',
        fontSize: '40px',
    }
    let mainest = game.add.text(0, 0, titlest, style);
    mainest.anchor.setTo(0.5, 0);
    mainest.position.setTo(GAME_AREA_WIDTH/2, 50);

    let titlesc = 'Score: ';
    titlesc += score.toString();
    let mainTitle = game.add.text(0, 0, titlesc, style);
    mainTitle.anchor.setTo(0.5, 0);
    mainTitle.position.setTo(GAME_AREA_WIDTH/2, 100);

    let titletm = 'Time: ';
    titletm += time.toString();
    let maintm = game.add.text(0, 0, titletm, style);
    maintm.anchor.setTo(0.5, 0);
    maintm.position.setTo(GAME_AREA_WIDTH/2, 150);

    if (stage>0 && score>=1 ){
        let result = 'Congratulations\n';
        result += 'you win with\n';
        result += score.toString();
        result += ' points';
        style = {
            font: 'Source Sans Pro',
            fontWeight: '600',
            fontSize: '40px',
        }
        let maintm = game.add.text(0, 0, result, style);
        maintm.anchor.setTo(0.5, 0);
        maintm.position.setTo(GAME_AREA_WIDTH/2, 300);
    }
    else{
        let result = 'GAME OVER';
        let maintm = game.add.text(0, 0, result, style);
        maintm.anchor.setTo(0.5, 0);
        maintm.position.setTo(GAME_AREA_WIDTH/2, 300);
    }




}

function clickBackToStart() {
    btnStart.inputEnabled = false;
    game.state.start('startScreen');
}

