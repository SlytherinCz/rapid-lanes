var SceneryDecorator = function(width,height,sceneryFrames,minimumSceneryDistance,outOfBoundsDestructor){
    "use strict";
    this.width = width;
    this.height = height;
    this.sceneryFrames = sceneryFrames;
    this.minimumSceneryDistance = minimumSceneryDistance;
    this.outOfBoundsDestructor = outOfBoundsDestructor;
    this.decorations = [];
}

SceneryDecorator.prototype.registerSceneryGroup = function(group){
    "use strict";
    this.group = group;
}

SceneryDecorator.prototype.spawnDecoration = function(){
    "use strict";
    var side = Phaser.Utils.Array.GetRandomElement(['left','right']);

    var decoration = new SceneryObject(
        this.group.create(side === 'left' ? 45 : this.width - 45,-35,'spritesheet')
    );
    decoration.sprite.setFrame(Phaser.Utils.Array.GetRandomElement(this.sceneryFrames));
    decoration.sprite.setScale(1.5);
    if(side === 'right'){
        decoration.sprite.setFlipX(true);
    }
    console.log(decoration);
    this.decorations.push(decoration);
}

SceneryDecorator.prototype.gameCycle = function(velocityMultiplier){
    "use strict";
    for (var i = 0; i < this.decorations.length; i++) {
        this.decorations[i].advance(velocityMultiplier);
    }
    if(this.allowedToSpawnDecoration()){
        this.spawnDecoration();
    }
    this.outOfBoundsDestructor.destroyIfOutOfBounds(this.decorations);
}

SceneryDecorator.prototype.allowedToSpawnDecoration = function () {
    "use strict";
    var minimumDistanceMet = true;
    for (var i = 0; i < this.decorations.length; i++) {
        minimumDistanceMet = minimumDistanceMet && this.decorations[i].getBounds().y > this.minimumSceneryDistance;
    }
    return minimumDistanceMet;
};