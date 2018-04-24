var SceneryObject = function(sprite){
    "use strict";
    this.sprite = sprite;
}

SceneryObject.prototype.advance = function(velocityMultiplier) {
    "use strict";
    this.sprite.y += velocityMultiplier;
}

SceneryObject.prototype.getBounds = function(){
    "use strict";
    return this.sprite.getBounds();
}