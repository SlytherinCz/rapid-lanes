var mainSceneStateUpdate = function(){
    "use strict";
    this.gameState.advanceBackground();
    this.gameState.addScore();
    this.gameState.player.controls.detect();
    this.gameState.sceneryDecorator.gameCycle(this.gameState.difficulty.getVelocityMultiplier());
    this.gameState.manageTraffic();

};