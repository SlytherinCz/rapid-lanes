var mainSceneStateCreate = function () {
    "use strict";
    console.log('create state');
    console.log(this);

    this.gameState.registerBackground(this.add.tileSprite(
        this.WIDTH / 2,
        this.HEIGHT / 2,
        this.WIDTH,
        this.HEIGHT,
        'background'
    ));

    this.gameState.registerScoreText(this.add.text(0, 0, this.gameState.score));
    var playerSprite = this.add.sprite(this.WIDTH / 2, this.HEIGHT - 50, 'vehicles').setInteractive()
    playerSprite.setFrame('player1.png');
    playerSprite.scaleY = 1.3;
    playerSprite.scaleX = 1.3;
    this.gameState.registerPlayer(playerSprite);

    var leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    var rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    this.gameState.registerControls({leftKey: leftKey, rightKey: rightKey});

    this.gameState.registerCamera(this.cameras.main);

    this.gameState.healthBar.registerHeartsGroup(this.add.group(), this.WIDTH);
    this.gameState.trafficManager.registerTrafficGroup(this.add.group());

    this.time.addEvent({
        'delay': 20000,
        'loop': true,
        'callback': this.gameState.progressionStep,
        'callbackScope': this.gameState
    });
};