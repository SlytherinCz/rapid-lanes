var HealthBar = function(lifes) {
    "use strict";
    this.lifes = lifes;
}

HealthBar.prototype.registerHeartsGroup = function(group,width){
    this.group = group;
    var groupConfig = {
        key: 'life',
        repeat: this.lifes -1,
        setXY: {
            x: width - 20,
            y: 20,
            stepX: -35,
            stepY: 0
        }
    }
    this.group.createMultiple(groupConfig);
}

HealthBar.prototype.decrease = function() {
    "use strict";
    this.lifes--;
    var lifeHearts = this.group.getChildren();
    lifeHearts[lifeHearts.length - 1].destroy();
}

HealthBar.prototype.getLifes = function() {
    "use strict";
    return this.lifes;
}