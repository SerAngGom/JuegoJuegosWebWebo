let Settings = {
    preload: loadsetting,
    create: createsetting,
    update: updatesetting
}
let n_rope=4;
let difficulty = 'normal';
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
    game.load.image('mousemode','assets/imgs/mousemode.png');
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
    game.load.image('mouseselect','assets/imgs/mouseselect.png');
    game.load.image('keyboardselect','assets/imgs/keyboardselect.png');
}

function createsetting() {

    // set the background image
    game.add.image(0, 0, "bg");

    // Crea el botón de imagen
    let b_return = game.add.button(20, 20, 'return', goToStartScreen, this, 2, 1, 0);

    // Cambia la posición del botón
    b_return.anchor.setTo(0.5, 0.5);
    b_return.y = 40;
    b_return.x = 40;

    game.add.image(230,20, 'letterrope');
    game.add.image(230,170, 'letterdificulty');
    game.add.image(230,330, 'lettercontrol');

    let select3= game.add.image(252, 90, 'select3');
    let select4= game.add.image(294, 90, 'select4');
    let select5= game.add.image(336, 90, 'select5');
    let select6= game.add.image(378, 90, 'select6');
    let select7= game.add.image(420, 90, 'select7');
    let select8= game.add.image(462, 90, 'select8');
    let select9= game.add.image(504, 90, 'select9');

    rope3= game.add.button(252, 90, 'rope3', onClickrope3, this);
    rope4= game.add.button(294, 90, 'rope4', onClickrope4, this);
    rope5= game.add.button(336, 90, 'rope5', onClickrope5, this);
    rope6= game.add.button(378, 90, 'rope6', onClickrope6, this);
    rope7= game.add.button(420, 90, 'rope7', onClickrope7, this);
    rope8= game.add.button(462, 90, 'rope8', onClickrope8, this);
    rope9= game.add.button(504, 90, 'rope9', onClickrope9, this);
    let easymode = game.add.button(80, 250, 'easymode', oceasy, this);
    let normalmode = game.add.button(240, 250, 'normalmode', ocnormal, this);
    let hardmode = game.add.button(400, 250, 'hardmode', ochard, this);
    let insanemode = game.add.button(560, 250, 'insanemode',ocinsane, this);
    let mousemode = game.add.button(270, 405, 'mousemode');
    let keyboardmode = game.add.button(400, 405, 'keyboardmode');
    rope4.visible=false;
    invisible=rope4;

}


var rope3= game.add.button(252, 90, 'rope3', onClickrope3, this);
var rope4= game.add.button(294, 90, 'rope4', onClickrope4, this);
var rope5= game.add.button(336, 90, 'rope5', onClickrope5, this);
var rope6= game.add.button(378, 90, 'rope6', onClickrope6, this);
var rope7= game.add.button(420, 90, 'rope7', onClickrope7, this);
var rope8= game.add.button(462, 90, 'rope8', onClickrope8, this);
var rope9= game.add.button(504, 90, 'rope9', onClickrope9, this);
var invisible;

function updatesetting() {
    //game.physics.arcade.overlap(goose, bread, drop_bread, null, this);
    num = n_rope;
}

function goToStartScreen() {
    game.state.start('startScreen');
}

function onClickrope3() {
    invisible.visible= true;
    invisible = rope3;
    rope3.visible= false;
    n_rope= 3;
}

function onClickrope4() {
    invisible.visible= true;
    invisible = rope4;
    rope4.visible= false;
    n_rope= 4;
}

function onClickrope5() {
    invisible.visible= true;
    invisible = rope5;
    rope5.visible= false;
    n_rope= 5;
}

function onClickrope6() {
    invisible.visible= true;
    invisible = rope6;
    rope6.visible= false;
    n_rope= 6;
}

function onClickrope7() {
    invisible.visible= true;
    invisible = rope7;
    rope7.visible= false;
    n_rope= 7;
}

function onClickrope8() {
    invisible.visible= true;
    invisible = rope8;
    rope8.visible= false;
    n_rope= 8;
}

function onClickrope9() {
    invisible.visible= true;
    invisible = rope9;
    rope9.visible= false;
    n_rope= 9;
}

function oceasy(){
    speed = 0.5;
    difficulty = 'easy';
}

function ocnormal(){
    speed = 1;
    difficulty = 'normal';
}
function ochard(){
    speed = 2;
    difficulty = 'hard';
}
function ocinsane(){
    speed = 3;
    difficulty = 'insane';
}


