let Settings = {
    preload: loadsetting,
    create: createsetting,
    update: updatesetting
}

//————————————————————————————————————————————————————————————
//--------LOAD, CREATE AND UPDATE STAGE-----------------------
//————————————————————————————————————————————————————————————

function loadsetting() {
    game.load.image('bg', 'assets/imgs/background.png');
    game.load.image('return', 'assets/imgs/return.png')
    game.load.image('letterrope', 'assets/imgs/letterrope.png');
    game.load.image('letterdificulty', 'assets/imgs/letterdificulty.png');
    game.load.image('lettercontrol', 'assets/imgs/lettercontrol.png');
    game.load.image('rope3','assets/imgs/rope3.png');
    game.load.image('rope4','assets/imgs/rope4.png');
    game.load.image('rope5','assets/imgs/rope5.png');
    game.load.image('rope6','assets/imgs/rope6.png');
    game.load.image('rope7','assets/imgs/rope7.png');
    game.load.image('rope8','assets/imgs/rope8.png');
    game.load.image('rope9','assets/imgs/rope9.png');
    game.load.image('easymode','assets/imgs/easymode.png');
    game.load.image('normalmode','assets/imgs/normalmode.png');
    game.load.image('hardmode','assets/imgs/hardmode.png');
    game.load.image('insanemode','assets/imgs/insanemode.png');
    game.load.image('mosemode','assets/imgs/mosemode.png');
    game.load.image('keyboardmode','assets/imgs/keyboardmode.png');
    game.load.image('select3','assets/imgs/3select.png');
    game.load.image('select4','assets/imgs/4select.png');
    game.load.image('select5','assets/imgs/5select.png');
    game.load.image('select6','assets/imgs/6select.png');
    game.load.image('select7','assets/imgs/7select.png');
    game.load.image('select8','assets/imgs/8select.png');
    game.load.image('select9','assets/imgs/9select.png');
    game.load.image('easyelect','assets/imgs/easyselect.png');
    game.load.image('normalelect','assets/imgs/normalselect.png');
    game.load.image('hardelect','assets/imgs/hardselect.png');
    game.load.image('insaneelect','assets/imgs/insaneselect.png');
    game.load.image('moseselect','assets/imgs/moseselect.png');
    game.load.image('keyboardselect','assets/imgs/keyboardselect.png');
}

function createsetting() {

    // set the background image
    game.add.image(0, 0, "bg");

    // Crea el botón de imagen
    let b_return = game.add.button(20, 20, 'return', goToStartScreen, this, 2, 1, 0);

    // Cambia la posición del botón
    b_return.anchor.setTo(0.5, 0.5);
    b_return.y = 30;
    b_return.x = 30;
    b_return.scale.setTo(0.1);

    game.add.image(230,20, 'letterrope');
    game.add.image(230,170, 'letterdificulty');
    game.add.image(230,330, 'lettercontrol');

    //let select5= game.add.image(336, 90, 'select5');

    let rope3= game.add.button(252, 90, 'rope3', onClickrope3, this);
    let rope4= game.add.button(294, 90, 'rope4');
    let rope5= game.add.button(336, 90, 'rope5');
    let rope6= game.add.button(378, 90, 'rope6');
    let rope7= game.add.button(420, 90, 'rope7');
    let rope8= game.add.button(462, 90, 'rope8');
    let rope9= game.add.button(504, 90, 'rope9');
    let easymode = game.add.button(80, 250, 'easymode');
    let mormalmode = game.add.button(240, 250, 'normalmode');
    let hardmode = game.add.button(400, 250, 'hardmode');
    let insanemode = game.add.button(560, 250, 'insanemode');
    let mosemode = game.add.button(270, 405, 'mosemode');
    let keyboardmode = game.add.button(400, 405, 'keyboardmode');
    let select3= game.add.image(252, 90, 'select3');
    let select4= game.add.image(294, 90, 'select4');
    let select5= game.add.image(336, 90, 'select5');
    let select6= game.add.image(378, 90, 'select6');
    let select7= game.add.image(420, 90, 'select7');
    let select8= game.add.image(462, 90, 'select8');
    let select9= game.add.image(504, 90, 'select9');
}

function updatesetting() {
    //game.physics.arcade.overlap(goose, bread, drop_bread, null, this);
}

function goToStartScreen() {
    game.state.start('startScreen');
}

function onClickrope3() {
    rope3.kill();
    game.add.image(252, 90, 'select3');

}


