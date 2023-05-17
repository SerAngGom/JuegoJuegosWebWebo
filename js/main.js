//Game creation
let game = new Phaser.Game(800, 500, Phaser.AUTO, 'game');

// entry point ———————————————————————————————————————————————
window.onload = startGame;

function startGame() {
    game.state.add('startScreen', startScreen);
    game.state.add('aboutScreen', aboutScreen);
    game.state.add('Settings', Settings);
    game.state.add('Play', Play);
    game.state.add('endScreen', endScreen);
    game.state.start('startScreen');
}


