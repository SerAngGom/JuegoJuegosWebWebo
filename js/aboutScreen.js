let aboutScreen = {
    preload: preloadAbout,
    create: createAbout
};

function preloadAbout() {
    game.load.image('bg', 'assets/imgs/background.png');
}
function createAbout() {
    game.world.removeAll();

    game.add.image(-1, -1, "bg");

    //text describing the game (Ab-out)
    let titleAb = 'GOOSETAVOS BREAD RAGE';
    let style = {
        font: 'Source Sans Pro',
        fontWeight: '600',
        fontSize: '40px'
    }
    let mainTitle = game.add.text(0, 0, titleAb, style);
    mainTitle.anchor.setTo(0.5, 0);
    mainTitle.position.setTo(GAME_AREA_WIDTH/2, 50);

    let textAb = 'This game is about learning not to\n';
    textAb += 'feed bread to ducks.\n';

    style = {
        font: 'Source Sans Pro',
        fontWeight: '400',
        fontSize: '20px',
        align: 'center'
    }
    let introduction = game.add.text(0, 0, textAb, style);
    introduction.anchor.setTo(0.5, 0);
    introduction.position.setTo(GAME_AREA_WIDTH/2, 95);

    let imgDuck = game.add.image(GAME_AREA_WIDTH/2, 200, 'duck');
    imgDuck.anchor.setTo(0.5, 0);


    //text and images explaining the game (A-bout T-utorial)
    let titleAT = 'HOW TO PLAY';
    style = {
        font: 'Source Sans Pro',
        fontWeight: '600',
        fontSize: '30px'
    }
    let titleTutorial = game.add.text(0, 0, titleAT, style);
    titleTutorial.anchor.setTo(0.5, 0);
    titleTutorial.position.setTo(GAME_AREA_WIDTH/2, 320);

    let textAT = 'Get to the right position to shoot the bread.\n';
    textAT += 'Then, click or press space to shoot at it!\n';
  
    style = {
        font: 'Source Sans Pro',
        fontWeight: '400',
        fontSize: '20px',
        align: 'center'
    }
    let tutorial = game.add.text(0, 0, textAT, style);
    tutorial.anchor.setTo(0.5, 0);
    tutorial.position.setTo(GAME_AREA_WIDTH/2, 365);


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
