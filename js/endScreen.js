let endScreen = {
    preload: loadEndScreen,
    create: createEndScreen
};

function loadEndScreen() {
    game.load.image('bg', 'assets/imgs/background.png');
    game.load.image('back', 'assets/imgs/return.png');
    game.load.image('play', 'assets/imgs/patoB.png');
    game.load.audio('gameOver', 'assets/sound/finJuego.mp3');
}

function createEndScreen() {
    let soundEffect = game.add.sound('gameOver');
    soundEffect.play();
    game.time.events.loop(Phaser.Timer.SECOND*20, playagain, this);

    game.world.removeAll();
    game.add.image(0, 0, "bg");

    btnStart = game.add.button(20, 20, 'back', clickBackToStart);
    btnStart.position.setTo(10, 10);

    btnPlay = game.add.button(0, 300, 'play', playagain);
    btnPlay.scale.setTo(0.4, 0.4);


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
        let result = 'CONGRATULATIONS!\n';
        result += 'You made it to stage ';
        result += stage.toString();
        result +='\n';
        result += ' in ';
        result += difficulty;
        result += ' difficulty!';
        style = {
            font: 'Source Sans Pro',
            fontWeight: '600',
            fontSize: '40px',
        }
        let maintm = game.add.text(0, 0, result, style);
        maintm.anchor.setTo(0.5, 0);
        maintm.position.setTo(GAME_AREA_WIDTH/1.7, 300);
    }
    else{
        let result = 'GAME OVER';
        let maintm = game.add.text(0, 0, result, style);
        maintm.anchor.setTo(0.5, 0);
        maintm.position.setTo(GAME_AREA_WIDTH/2, 300);
    }

}

function clickBackToStart() {
    lives = 3;
    createLives();
    stage = 1;
    wave = 1;
    score = 0;
    time = 0;
    if (difficulty == 'easy') speed = 0.5;
    else if (difficulty == 'normal') speed = 1;
    else if (difficulty == 'hard') speed = 2;
    else if (difficulty == 'insane') speed = 3;
    
    btnStart.inputEnabled = false;
    game.state.start('startScreen');
}

function playagain(){
    lives = 3;
    createLives();
    stage = 1;
    wave = 1;
    score = 0;
    time = 0;
    if (difficulty == 'easy') speed = 0.5;
    else if (difficulty == 'normal') speed = 1;
    else if (difficulty == 'hard') speed = 2;
    else if (difficulty == 'insane') speed = 3;
    game.state.start('Play');
}
