var Playlist = function() {
    "use strict";
    this.currentTrackIndex = 0;
    this.keepStopped = false;

}

Playlist.prototype.registerTrackList = function(trackList){
    "use strict";
    this.trackList = trackList;
}

Playlist.prototype.stop = function(){
    "use strict";
    this.keepStopped = true;
    this.trackList[this.currentTrackIndex].stop();
}

Playlist.prototype.play = function(){
    "use strict";
    this.keepStopped = false;
    this.loop();
}

Playlist.prototype.loop = function(){
    "use strict";
    this.trackList[this.currentTrackIndex].play();
    this.trackList[this.currentTrackIndex].once('stop',function(){
        if(this.currentTrackIndex < (this.trackList.length -1)){
            this.currentTrackIndex++;
        }else{
            this.currentTrackIndex = 0;
        }
        if(!this.keepStopped){
            this.loop();
        }
    }.bind(this))
}