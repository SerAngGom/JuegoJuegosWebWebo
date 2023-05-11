let setting = {
    preload: loadsetting,
    create: createsetting,
    update: updatesetting
}

//————————————————————————————————————————————————————————————
//--------LOAD, CREATE AND UPDATE STAGE-----------------------
//————————————————————————————————————————————————————————————

function loadsetting() {
    game.load.image('bg', 'assets/imgs/background.png');


}

function createsetting() {

    // set the background image
    game.add.image( 0, 0, "bg");
}

function updatesetting() {



    //game.physics.arcade.overlap(goose, bread, drop_bread, null, this);
}



