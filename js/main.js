// the game is created in constantDefinitions.js
let game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');
// entry point ———————————————————————————————————————————————
window.onload = startGame;

function startGame() {
    
    game.state.add('startScreen', startScreen);
    game.state.add('aboutScreen', aboutScreen);
    game.state.add('stageA', stageA);
    game.state.add('stageB', stageB);
    game.state.add('stageC', stageC);
    game.state.add('endScreen', endScreen);
    game.state.start('startScreen');
}


