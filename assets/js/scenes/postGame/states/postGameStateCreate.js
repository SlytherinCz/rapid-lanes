var postGameStateCreate = function () {
    "use strict";

    var background = this.add.sprite(
        this.WIDTH / 2,
        this.HEIGHT / 2,
        'background'
    )
    background.alpha = 0.3;

    console.log(this.scene.manager.stop('mainScene'));


    this.input.keyboard.once('keydown',function(){
        this.scene.start('mainScene');
    },this);

   var text = this.add.text(this.WIDTH / 2 - 60,this.HEIGHT / 2,'Any key to play again');
};