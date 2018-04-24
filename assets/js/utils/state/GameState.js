var GameState = function(player,trafficManager,difficulty,healthBar,playlist,sceneryDecorator){
    "use strict";
    this.defaultVelocity = 1;
    this.currentScoringRate = 1;
    this.score = 0;
    this.difficulty = difficulty;
    this.trafficManager = trafficManager;
    this.healthBar = healthBar;
    this.playlist = playlist;
    this.player = player;
    this.sceneryDecorator = sceneryDecorator;
}

GameState.prototype.registerSceneManager = function(sceneManager) {
    "use strict";
    this.sceneManager = sceneManager;
}

GameState.prototype.registerTimeEvents = function(timeEvents) {
    "use strict";
    this.timeEvents = timeEvents;
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
    this.player.setManeuverability(this.difficulty.getVelocityMultiplier());
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
    this.player.damage();
    this.healthBar.decrease();
    if(!this.player.isAlive()){
        this.gameOver();
    }

    this.player.setDamagedFrame();
    this.camera.shake(350,0.01);
    this.collisionImunity = true;
    this.timeEvents.addEvent({
        'delay': 1500,
        'loop': false,
        'callback': function(){
            this.collisionImunity = false;
        },
        'callbackScope': this
    });
}

GameState.prototype.manageTraffic = function() {
    "use strict";
    this.trafficManager.gameCycle(
        this.difficulty.getLevel(),
        this.difficulty.getGenericDifficultyMultiplier(),
        this.difficulty.getVelocityMultiplier()
    );
    if( this.detectCollision() ){
        this.manageCollision();
    }
}

GameState.prototype.gameOver = function() {
    "use strict";
    this.playlist.stop();
    this.sceneManager.stop('mainScene');
    this.sceneManager.start('postGame');
};