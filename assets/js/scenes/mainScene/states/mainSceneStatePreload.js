var mainSceneStatePreload = function(){
    "use strict";
    console.log('preload state');
    this.load.atlas('land', 'public/gfx/spritesheets/land.png','public/gfx/spritesheets/land.json');
    this.load.atlas('vehicles','public/gfx/spritesheets/vehicles.png','public/gfx/spritesheets/vehicles.json');
    this.load.image('background','public/gfx/images/bg.png');
};