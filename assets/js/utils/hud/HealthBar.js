var HealthBar = function(lifes) {
    "use strict";
    this.lifes = lifes;
    this.defaultLifes = lifes;
}

HealthBar.prototype.registerHeartsGroup = function(group,width){
    this.group = group;
    this.width = width;
    this.recreate();
}
HealthBar.prototype.recreate = function(){
    for (var i = 0;i < this.lifes;i++) {
        var lifeIcon = this.group.create(this.width - ((i + 1) * 35), 20, 'spritesheet');
        lifeIcon.setFrame('life-icon.png');
        lifeIcon.setDepth(1);
        console.log(lifeIcon);
    }
}

HealthBar.prototype.resetLifes = function(){
    "use strict";
    this.lifes = this.defaultLifes;
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