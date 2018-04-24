var Controls = function(keys){
    "use strict";
    this.keys = keys;
    console.log(keys);

    this.callbacks = {
        'up' : function(){},
        'down' : function(){},
        'left' : function(){},
        'right' : function(){}
    }
}


Controls.prototype.on = function(eventName,fn,context){
    "use strict";
    this.callbacks[eventName] = fn.bind(context);
}

Controls.prototype.detect = function(){
    "use strict";
    if(this.keys.up.isDown){this.callbacks['up']()}
    if(this.keys.down.isDown){this.callbacks['down']()}
    if(this.keys.left.isDown){this.callbacks['left']()}
    if(this.keys.right.isDown){this.callbacks['right']()}
}