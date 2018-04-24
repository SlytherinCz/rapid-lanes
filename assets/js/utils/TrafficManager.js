var TrafficManager = function (width, height,minimumYTrafficDistance, trafficSpawner, outOfBoundsDestructor) {
    "use strict";
    this.width = width;
    this.height = height;
    this.obstacles = [];
    this.minimumYTrafficDistance = minimumYTrafficDistance;
    this.trafficSpawner = trafficSpawner;
    this.outOfBoundsDestructor = outOfBoundsDestructor;
};

TrafficManager.prototype.registerTrafficGroup = function (group) {
    "use strict";
    this.trafficGroup = group;
    this.trafficSpawner.registerTrafficGroup(group);
};

TrafficManager.prototype.spawnObstacle = function (difficultyLevel) {
    "use strict";
    this.obstacles = this.obstacles.concat(this.trafficSpawner.spawn(difficultyLevel));
};

TrafficManager.prototype.gameCycle = function (difficultyLevel,difficultyMultiplier, velocityMultiplier) {
    "use strict";
    this.advanceTraffic(difficultyLevel,difficultyMultiplier, velocityMultiplier);
};


TrafficManager.prototype.detectCollision = function (bounds) {
    "use strict";
    var children = this.trafficGroup.getChildren();
    for (var i = 0; i < children.length; i++) {
        if (Phaser.Geom.Intersects.RectangleToRectangle(bounds, children[i].getBounds())) {
            return true;
        }
    }
    return false;
};

TrafficManager.prototype.advanceTraffic = function (difficultyLevel,difficultyMultiplier, velocityMultiplier) {
    "use strict";
    for (var i = 0; i < this.obstacles.length; i++) {
        var outOfBounds = false;
        this.obstacles[i].advance(velocityMultiplier);

    }
    if (this.allowedToSpawnObstacle()) {
        this.spawnObstacle(difficultyLevel);
    }

    this.outOfBoundsDestructor.destroyIfOutOfBounds(this.obstacles);
};

TrafficManager.prototype.allowedToSpawnObstacle = function () {
    "use strict";
    var minimumDistanceMet = true;
    for (var i = 0; i < this.obstacles.length; i++) {
        minimumDistanceMet = minimumDistanceMet && this.obstacles[i].getBounds().y > this.minimumYTrafficDistance;
    }
    return minimumDistanceMet;
};