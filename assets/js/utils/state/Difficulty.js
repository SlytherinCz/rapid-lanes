var Difficulty = function(level){
    "use strict";
    this.level = level;
}

Difficulty.prototype.levelUp = function(){
    "use strict";
    this.level++;
}

Difficulty.prototype.getLevel = function(){
    "use strict";
    return this.level;
}

Difficulty.prototype.getVelocityMultiplier = function(){
    "use strict";
    return this.getGenericDifficultyMultiplier();
}

Difficulty.prototype.getGenericDifficultyMultiplier = function(){
    "use strict";
    if(this.level > 10) return 10 / 1.37;
    return this.level / 1.37;
}