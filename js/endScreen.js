let endScreen = {
    preload: loadEndScreen,
    create: createEndScreen
};

function loadEndScreen() {
    game.load.image('bg', 'assets/imgs/background.png');
    game.load.image('start', 'assets/imgs/start.png'); 
}

function createEndScreen() {

    game.add.image(-1, -1, "bg");

    let infoText;

    if (death) {
        infoText = game.add.text(TITLE_OFFSET, TITLE_OFFSET, 'YOU DIED ON STAGE ' + (stage), { font: 'Source Sans Pro', fontSize: '60px', fontWeight: 'bold', fill: color } );
    } else {
        infoText = game.add.text(TITLE_OFFSET, TITLE_OFFSET, 'STAGE ' + (stage) + ' COMPLETED', { font: 'Source Sans Pro', fontSize: '60px', fontWeight: 'bold', fill: color  } );
    }

    infoText = game.add.text(TITLE_OFFSET, 12 * TITLE_OFFSET, 'SCORE: ' + score, { font: 'Source Sans Pro', fontSize: '25px', fill: color  } );
    infoText = game.add.text(TITLE_OFFSET, 12 * TITLE_OFFSET, 'TIME: ' + time, { font: 'Source Sans Pro', fontSize: '25px', fill: color  } );

    //button for going  back to the start screen
    btnStart = game.add.button(20, 20, 'start', clickBackToStart);
    btnStart.anchor.setTo(0.5);
    btnStart.position.setTo(GAME_AREA_WIDTH/2, 670);
}

