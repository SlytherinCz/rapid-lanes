var Player = function(frameNames,lifes, playerAreaBounds){
    "use strict";
    this.frameNames = frameNames;
    this.lifes = lifes;
    this.defaultLifes = lifes;
    this.currentManeuverability = 2.1;
    this.playerAreaBounds = playerAreaBounds;
}

Player.prototype.resetLifes = function(){
    "use strict";
    this.lifes = this.defaultLifes;
}

Player.prototype.registerSprite = function(sprite){
    "use strict";
    this.sprite = sprite;
}

Player.prototype.registerCamera = function(camera){
    "use strict";
    this.camera = camera;
}

Player.prototype.registerControls = function(controls){
    "use strict";
    this.controls = controls;
    this.assignControls();
}

Player.prototype.isAlive = function(){
    "use strict";
    return this.lifes > 0;
}

Player.prototype.damage = function(){
    "use strict";
    return this.lifes--;
}

Player.prototype.getBounds = function(){
    "use strict";
    return this.sprite.getBounds();
}

Player.prototype.setDamagedFrame = function(){
    "use strict";
    this.sprite.setFrame(this.frameNames.damaged);
}

Player.prototype.setManeuverability = function(maneuverability){
    "use strict";
    this.currentManeuverability = maneuverability;
}

Player.prototype.shake = function(){
    "use strict";
    this.camera.shake(100,0.005);
}

Player.prototype.assignControls = function(){
    "use strict";
    this.controls.on('left',function(){
        if(this.sprite.x > this.playerAreaBounds.x[0]){
            this.sprite.x -= 1 * this.currentManeuverability;
        } else {
            this.shake();
        }
    }.bind(this));

    this.controls.on('right',function(){
        if(this.sprite.x < this.playerAreaBounds.x[1]){
            this.sprite.x += 1 * this.currentManeuverability;
        } else {
            this.shake();
        }
    }.bind(this));

    this.controls.on('up',function(){
        if(this.sprite.y > this.playerAreaBounds.y[0]){
            this.sprite.y -= 1 * this.currentManeuverability;
        } else {
            this.shake();
        }
    }.bind(this));

    this.controls.on('down',function(){
        if(this.sprite.y < this.playerAreaBounds.y[1]){
            this.sprite.y += 1 * this.currentManeuverability;
        } else {
            this.shake();
        }
    }.bind(this));
}