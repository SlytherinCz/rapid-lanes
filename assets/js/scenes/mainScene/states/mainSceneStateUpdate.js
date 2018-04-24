var mainSceneStateUpdate = function(){
    "use strict";
    this.gameState.advanceBackground();
    this.gameState.addScore();
    this.gameState.manageTraffic();


    // todo This needs some tending to
    if(this.gameState.leftKey.isDown){
        this.gameState.player.x -= 1 * this.gameState.difficulty.getVelocityMultiplier();
    }

    if(this.gameState.rightKey.isDown){
        this.gameState.player.x += 1 * this.gameState.difficulty.getVelocityMultiplier();
    }
};