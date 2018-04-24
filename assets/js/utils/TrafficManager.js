var TrafficManager = function (width, height, lanes, maxRows, minimumRowsDistance, allowedTrafficFrames) {
    "use strict";
    this.width = width;
    this.height = height;
    this.lanes = lanes;
    this.rows = [];
    this.maxRows = maxRows;
    this.minimumRowsDistance = minimumRowsDistance;
    this.allowedTrafficFrames = allowedTrafficFrames;
};

TrafficManager.prototype.registerTrafficGroup = function (group) {
    "use strict";
    this.trafficGroup = group;
};

TrafficManager.prototype.spawnObstacle = function (lane) {
    "use strict";
    var obstacle = this.trafficGroup.create(lane, 0, 'vehicles');
    obstacle.setFrame(Phaser.Utils.Array.GetRandomElement(this.allowedTrafficFrames));
    obstacle.scaleX = 1.3;
    obstacle.scaleY = 1.3;
    return obstacle;
};

TrafficManager.prototype.gameCycle = function (difficultyMultiplier, velocityMultiplier) {
    "use strict";
    this.advanceTraffic(difficultyMultiplier, velocityMultiplier);
};

TrafficManager.prototype.prepareRow = function () {
    "use strict";
    var row = {
        y: 0,
        obstacles: []
    };
    row.obstacles.push(this.spawnObstacle(Phaser.Utils.Array.GetRandomElement(this.lanes)));
    this.rows.push(row);
};

TrafficManager.prototype.detectCollision = function (bounds) {
    "use strict";
    var children = this.trafficGroup.getChildren();
    for (var i = 0; i < children.length; i++) {
        if (Phaser.Geom.Intersects.RectangleToRectangle(bounds, children[i].getBounds())) {
            console.log('collision detected');
            return true;
        }
    }
    return false;
};

TrafficManager.prototype.advanceTraffic = function (difficultyMultiplier, velocityMultiplier) {
    "use strict";
    for (var i = 0; i < this.rows.length; i++) {
        var outOfBounds = false;
        this.advanceCoordinateY(this.rows[i], velocityMultiplier);
        if (this.rows[i].y > this.height) {
            outOfBounds = true;
        }
        for (var ii = 0; ii < this.rows[i].obstacles.length; ii++) {
            this.advanceCoordinateY(this.rows[i].obstacles[ii], velocityMultiplier);
            if (outOfBounds) {
                this.rows[i].obstacles[ii].destroy();
                this.rows[i].obstacles.splice(ii, 1);
            }
        }
        if (outOfBounds) {
            this.rows.splice(i, 1);
        }
    }
    if (this.allowedToSpawnRow()) {
        this.prepareRow(difficultyMultiplier);
    }
};

TrafficManager.prototype.allowedToSpawnRow = function () {
    "use strict";
    var slotAvailable = this.rows.length <= this.maxRows;
    var minimumDistanceMet = true;
    for (var i = 0; i < this.rows.length; i++) {
        minimumDistanceMet = minimumDistanceMet && this.rows[i].y > this.minimumRowsDistance;
    }
    return slotAvailable && minimumDistanceMet;
};

TrafficManager.prototype.advanceCoordinateY = function (obj, velocityMultiplier) {
    "use strict";
    obj.y += 1 * velocityMultiplier;
};

