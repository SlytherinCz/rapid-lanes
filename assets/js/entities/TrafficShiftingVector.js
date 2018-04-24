var TrafficShiftingVector = function(origin,destination,velocity) {
    "use strict";
    this.origin = origin;
    this.destination = destination;
    this.shiftingVelocity = velocity;
};

TrafficShiftingVector.prototype.getOrigin = function(){return this.origin};
TrafficShiftingVector.prototype.getDestination = function(){return this.destination};
TrafficShiftingVector.prototype.getVelocity = function(){return this.shiftingVelocity};
