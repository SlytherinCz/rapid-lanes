var preGameStatePreload = function(){
    "use strict";
    this.load.atlas('spritesheet', 'public/gfx/spritesheet.png','public/gfx/spritesheet.json');
    this.load.audio('shell_shock_shake', ['public/sfx/music/ozzed-shell_shock_shake.mp3']);
    this.load.image('background','public/gfx/images/bg.png');
};