var Difficulty = function(level,maxLevel){
    "use strict";
    this.level = level;
    this.maxLevel = maxLevel;
}

Difficulty.prototype.levelUp = function(){
    "use strict";
    if(this.level < this.maxLevel){
        this.level++;
    }
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
    return this.level / 1.17;
}