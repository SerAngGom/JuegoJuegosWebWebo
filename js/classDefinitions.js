//————————————————————————————————————————————————————————————
//--------MAIN CHARACTER---------------------------------------
//————————————————————————————————————————————————————————————

class Goose {
    constructor() {
        this.x = GAME_AREA_WIDTH / 2;
        this.y = GAME_AREA_HEIGHT - SPRITE_GOOSE_HEIGHT / 2 - 30; // 15 pixels of margin
        this.type = 'goose';
        this.sprite = 'goose';
    }

    configGooseSprite() {
        this.sprite.anchor.setTo(0.5);
        game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
    }

    move(x) {
        //this.sprite.x = x;
        //this.x = this.sprite.x;

        //for (var i = 0; i < owps.list.length; i++) {
       //     let owp = owps.list[i];
        //    owp.refocusOWP();
        }
    }


//————————————————————————————————————————————————————————————
//--------WOOD STICKS------------------------------------------
//————————————————————————————————————————————————————————————
class Wood{
    constructor(image){
        this.x= 0;
        this.y= WOOD_Y; //constante
        this.type= 'wood';
        this.image = game.add.image("wood");
    }
    configWoodSprite() {
        this.sprite.anchor.setTo(1);
        game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
    }
    addWoods(){

    }

}

class Bread {
    constructor(x, y, type, created = false) {
        this.x = x;
        this.y = y;
        this.type = type;

        this.sprite;

        this.deactivated = false;

        this.speed = this.getSpeed();

        this.timer = null;

        if (type == 'bread') {
            this.timer = game.time.events.loop(REPLICATION_RATE, this.replicate, this);
        }
        else if (type == 'catfish') {
            this.timer = game.time.events.loop(FAN_GENERATION_RATE, this.fanGenerate, this);
        }

        this.created = created;
    }

    configEnemySprite() {
        this.sprite.anchor.setTo(0.5,0.5);

        game.physics.enable(this.sprite, Phaser.Physics.ARCADE);

        this.sprite.body.collideWorldBounds = true;
        this.sprite.body.bounce.set(1);
    }

    getSpeed() {
        return waveSpeed;
    }

    


    randomNumber(min, max) {
        max += 1;
        return Math.floor(Math.random() * (max - min) + min);
    }

}

