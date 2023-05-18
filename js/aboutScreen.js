const GAME_AREA_WIDTH = 800;
let aboutScreen = {
    preload: preloadAbout,
    create: createAbout
};

function preloadAbout() {
    game.load.image('bg', 'assets/imgs/background.png');
    game.load.image('goose', 'assets/imgs/goose.png');
    game.load.image('back', 'assets/imgs/return.png')
}
function createAbout() {
    game.world.removeAll();

    game.add.image(0, 0, "bg");

    //text describing the game
    let titleAb = 'GOOSETAVOS BREAD RAGE';
    let style = {
        font: 'Source Sans Pro',
        fontWeight: '600',
        fontSize: '40px',
    }
    let mainTitle = game.add.text(0, 0, titleAb, style);
    mainTitle.anchor.setTo(0.5, 0);
    mainTitle.position.setTo(GAME_AREA_WIDTH/2, 50);

    let textAb = 'A game about a goose’s difficulties through life.\n';
    textAb += 'Did you know that bread is extremely prudish to a duck’s digestive system?\n';
    textAb += 'Goosetavo is very tired of people throwing bread crumbs to him at the lake \n';
    textAb += 'and has started fighting back. But he loves it when people feed him grapes! \n';
    textAb += 'Also beware of any catfish, predatory fish of the lake. \n';

    style = {
        font: 'Source Sans Pro',
        fontWeight: '400',
        fontSize: '20px',
        align: 'center'
    }
    let introduction = game.add.text(0, 0, textAb, style);
    introduction.anchor.setTo(0.5, 0);
    introduction.position.setTo(GAME_AREA_WIDTH/2, 95);

    let imgGoose = game.add.image(GAME_AREA_WIDTH/2.5, 300, 'goose');

    //Explaining the controles
    let titleAT = 'HOW TO PLAY';
    style = {
        font: 'Source Sans Pro',
        fontWeight: '600',
        fontSize: '30px'
    }
    let titleTutorial = game.add.text(0, 0, titleAT, style);
    titleTutorial.anchor.setTo(0.5, 0);
    titleTutorial.position.setTo(GAME_AREA_WIDTH/5, 250);

    let textAT = 'Use the arrows to\n';
    textAT += 'to move Goosetavo.\n';
    textAT += 'Press space to shoot \n';
    textAT += 'water to the bread.\n';

    style = {
        font: 'Source Sans Pro',
        fontWeight: '400',
        fontSize: '20px',
        align: 'center'
    }
    let tutorial = game.add.text(0, 0, textAT, style);
    tutorial.anchor.setTo(0.5, 0);
    tutorial.position.setTo(GAME_AREA_WIDTH/5, 300);

    let textDE = 'DEPEVOLPERS';

    style = {
        font: 'Source Sans Pro',
        fontWeight: '600',
        fontSize: '30px',
        align: 'center'
    }
    let titledevelopers = game.add.text(0, 0, textDE, style);
    titledevelopers.anchor.setTo(0.5, 0);
    titledevelopers.position.setTo(GAME_AREA_WIDTH/1.3, 250);

    let textNA = 'Sara Berlanga Aramburu\n';
    textNA += 'Pere Mengual Roca\n';
    textNA += 'Sergio Angulo Gómez';


    style = {
        font: 'Source Sans Pro',
        fontWeight: '400',
        fontSize: '20px',
        align: 'center'
    }
    let names = game.add.text(0, 0, textNA, style);
    names.anchor.setTo(0.5, 0);
    names.position.setTo(GAME_AREA_WIDTH/1.3, 300);


    //button for showing credits
    btnCredits = game.add.button(20, 20, 'credits', showCredits);
    btnCredits.anchor.setTo(0.5);
    btnCredits.position.setTo(GAME_AREA_WIDTH/2, 700);

    //button for going  back to the start screen
    btnStart = game.add.button(20, 20, 'back', clickBackToStart);
    btnStart.position.setTo(10, 10);
}

function showCredits() {
    game.world.removeAll();
    let BG = game.add.image(0, 0, 'bg');
    BG.scale.setTo(1.8);

    //credits of the images used and the programing (A-bout C-redits)
    let titleAC = 'CREDITS';
    let style = {
        font: 'Source Sans Pro',
        fontWeight: '600',
        fontSize: '40px'
    }
    let titleCredits = game.add.text(10, 5, titleAC, style);
    titleCredits.anchor.setTo(0.5, 0);
    titleCredits.position.setTo(GAME_AREA_WIDTH/2, 140);

    let textAC = 'This game has been created by\n';
    textAC += '\n';
    textAC += 'TEAM WEBO\n';

    style = {
        font: 'Source Sans Pro',
        fontWeight: '400',
        fontSize: '20px',
        align: 'center'
    }
    let credits = game.add.text(10, 50, textAC, style);
    credits.anchor.setTo(0.5, 0);
    credits.position.setTo(GAME_AREA_WIDTH/2, 230);

    //button for showing about
    btnCredits = game.add.button(20, 20, 'about', createAbout);
    btnCredits.anchor.setTo(0.5);
    btnCredits.position.setTo(GAME_AREA_WIDTH/2, 670);

    //button for going  back to the start screen
    btnStart = game.add.button(20, 20, 'back', clickBackToStart);
    btnStart.position.setTo(10, 10);
}

function clickBackToStart() {
    btnStart.inputEnabled = false;
    game.state.start('startScreen');
}
