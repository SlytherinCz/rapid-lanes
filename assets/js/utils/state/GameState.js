var GameState = function(trafficManager,difficulty,healthBar){
    "use strict";
    this.defaultVelocity = 1;
    this.currentScoringRate = 1;
    this.score = 0;
    this.difficulty = difficulty;
    this.trafficManager = trafficManager;
    this.healthBar = healthBar;
}

GameState.prototype.registerPlayer = function(sprite) {
    "use strict";
    this.player = sprite;
}

GameState.prototype.registerBackground = function(tilesprite) {
    "use strict";
    this.background = tilesprite;
}

GameState.prototype.registerScoreText = function(text) {
    "use strict";
    this.scoreText = text;
}

GameState.prototype.registerHealthBarGroup = function(group, width){
    "use strict";
    this.healthBar = group;

    console.log(this.healthBar);
}

GameState.prototype.registerControls = function(controls) {
    "use strict";
    this.leftKey = controls.leftKey;
    this.rightKey = controls.rightKey;
}

GameState.prototype.registerCamera = function(camera) {
    "use strict";
    this.camera = camera;
}

GameState.prototype.advanceBackground = function() {
    "use strict";
    this.background.tilePositionY -= ( this.defaultVelocity * this.difficulty.getVelocityMultiplier() );
}

GameState.prototype.addScore = function() {
    "use strict";
    this.score += (this.currentScoringRate * this.difficulty.getGenericDifficultyMultiplier());
    this.scoreText.setText(Math.floor(this.score));
}

GameState.prototype.progressionStep = function() {
    "use strict";
    this.difficulty.levelUp();
}

GameState.prototype.detectCollision = function() {
    "use strict";
    if(!this.collisionImunity){
        return this.trafficManager.detectCollision(this.player.getBounds())
    }
    return false;
}

GameState.prototype.manageCollision = function() {
    "use strict";
    this.healthBar.decrease();
    this.player.setFrame('player2.png');
    this.camera.shake(200,0.01);
    this.collisionImunity = true;

}

GameState.prototype.manageTraffic = function() {
    "use strict";
    this.trafficManager.gameCycle(this.difficulty.getGenericDifficultyMultiplier(),this.difficulty.getVelocityMultiplier());
    if( this.detectCollision() ){
        this.manageCollision();
    };
}