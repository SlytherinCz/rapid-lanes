var preGameStateCreate = function () {
    "use strict";

    var background = this.add.sprite(
        this.WIDTH / 2,
        this.HEIGHT / 2,
        'background'
    )
    background.alpha = 0.3;

    var title = this.add.sprite(
        this.WIDTH / 2,
        this.HEIGHT / 5,
        'spritesheet'
    );
    title.setFrame('title.png');

    this.input.keyboard.once('keydown',function(){
        this.scene.start('mainScene');
    },this);
};