var OutOfBoundsDestructor = function(width,height,tolerance){
    "use strict";
    this.width = width;
    this.height = height;
    this.tolerance = tolerance;
}

OutOfBoundsDestructor.prototype.destroyIfOutOfBounds = function(group) {
    for (var i = 0; i < group; i++) {
        if (group[i].getBounds().y > this.height + this.tolerance) {
            group[i].sprite.destroy();
            group.splice(i, 1);
        }
    }
}