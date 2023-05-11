//————————————————————————————————————————————————————————————
//--------LOADING STAGES--------------------------------------
//————————————————————————————————————————————————————————————

function loadStages() {
    game.load.image('bg', 'assets/imgs/background.png');

    game.load.image('goose', 'assets/imgs/goose.png');
    game.load.image('wood', 'assets/imgs/palo.png');
    game.load.image('bread', 'assets/imgs/pan.png');
    game.load.image('foreground', 'assets/imgs/foreground.png');
    game.load.image('cuerdaHaciaDer', 'assets/imgs/cuerdaHaciaDer.png');
    game.load.image('cuerdaHaciaIzq', 'assets/imgs/cuerdaHaciaIzq.png');
    game.load.image('catfish', 'assets/imgs/siluro.png');

    //game.load.spritesheet('explosion','assets/imgs/explosion.png', 125, 125);
    //game.load.audio('sndexplosion', 'assets/snds/hit.mp3');
}

function create_wood(x){
    diff = 800/x
    for(i=0; i=x; i++){
        game.add.wood(wood, diff);
    }

}

function shoot(){
}