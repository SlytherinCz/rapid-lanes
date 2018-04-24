var TrafficVehicle = function(relativeVelocity,sprite,shiftingVector){
    "use strict";
    this.relativeVelocity = relativeVelocity;
    this.sprite = sprite;
    this.shiftingVector = shiftingVector;
}

TrafficVehicle.prototype.advance = function(velocityMultiplier){
    "use strict";
    this.sprite.y += velocityMultiplier + this.relativeVelocity ;
    /*if(this.shiftingVector && this.sprite.x !== this.shiftingVector.getDestination()){
        this.sprite.x += (this.shiftingVector.getDestination() - this.shiftingVector.getOrigin()) * this.shiftingVector.getVelocity();
    };*/
}

TrafficVehicle.prototype.getBounds = function(){
    "use strict";
    return this.sprite.getBounds();
}