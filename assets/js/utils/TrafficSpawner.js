var TrafficSpawner = function (lanes, coneLanes, trafficFrames,coneFrames,spawnConesSince) {
    "use strict";
    this.lanes = lanes;
    this.coneLanes = coneLanes;
    this.trafficFrames = trafficFrames;
    this.coneFrames = coneFrames;
    this.spawnConesSince = spawnConesSince;
};

TrafficSpawner.prototype.registerTrafficGroup = function (group) {
    "use strict";
    this.trafficGroup = group;
}

TrafficSpawner.prototype.createRelativeVelocity = function(difficultyLevel) {
    return Phaser.Math.RND.realInRange(-(difficultyLevel/10),difficultyLevel/10);
}

TrafficSpawner.prototype.spawn = function(difficultyLevel,difficultyMultiplier){
    "use strict";
    var obstacles = [];
    var sprite = this.trafficGroup.create( Phaser.Utils.Array.GetRandomElement(this.lanes), -15, 'spritesheet');
    sprite.setFrame(Phaser.Utils.Array.GetRandomElement(this.trafficFrames));
    sprite.scaleX = 1.1;
    sprite.scaleY = 1.1;
    obstacles.push(new TrafficVehicle(
        this.createRelativeVelocity(difficultyLevel),
        sprite,
        false
    ));

    console.log(difficultyLevel + '>' + this.spawnConesSince);
    if(difficultyLevel > this.spawnConesSince &&
        Phaser.Math.RND.integerInRange(0,15) < difficultyLevel
    ){
        var coneSprite = this.trafficGroup.create( Phaser.Utils.Array.GetRandomElement(this.coneLanes), -15, 'spritesheet');
        coneSprite.setFrame(Phaser.Utils.Array.GetRandomElement(this.coneFrames));
        coneSprite.scaleX = 1.1;
        coneSprite.scaleY = 1.1;
        obstacles.push(new TrafficVehicle(
            0,
            coneSprite,
            false
        ));
    }
    console.log(obstacles);
    return obstacles;
}