var mainSceneStateCreate = function () {
    "use strict";


    var background = this.add.tileSprite(
        this.WIDTH / 2,
        this.HEIGHT / 2,
        this.WIDTH,
        this.HEIGHT,
        'background'
    );

    var trackList = [
        this.sound.add('shell_shock_shake')
    ];

    var playerSprite = this.add.sprite(this.WIDTH / 2, this.HEIGHT - 50, 'spritesheet').setInteractive()
    playerSprite.setFrame('player1.png');
    playerSprite.scaleY = 1.2;
    playerSprite.scaleX = 1.2;

    var controls = {
        up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP),
        down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN),
        left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT),
        right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
    };



    this.gameState.registerBackground(background);
    this.gameState.registerScoreText(this.add.text(0, 0, this.gameState.score));
    this.gameState.player.registerSprite(playerSprite);
    this.gameState.player.registerControls(new Controls(controls));
    this.gameState.player.registerCamera(this.cameras.main);

    this.gameState.player.resetLifes();
    this.gameState.healthBar.resetLifes()

    this.gameState.registerControls(controls);
    this.gameState.registerCamera(this.cameras.main);
    this.gameState.registerTimeEvents(this.time);
    this.gameState.registerSceneManager(this.scene.manager);
    this.gameState.healthBar.registerHeartsGroup(this.add.group(), this.WIDTH);

    this.gameState.trafficManager.registerTrafficGroup(this.add.group());
    this.gameState.sceneryDecorator.registerSceneryGroup(this.add.group());

    this.gameState.playlist.registerTrackList(trackList);
    this.gameState.playlist.loop();
    this.time.addEvent({
        'delay': 14000,
        'loop': true,
        'callback': this.gameState.progressionStep,
        'callbackScope': this.gameState
    });
};