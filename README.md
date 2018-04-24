#Rapid Lanes minigame

### Overview
This minigame is my attempt to try two things, both new to me. 
One being the Bottle container, the other being Phaser.js 

Using either for the first time, I just straight
assume both usages are plain wrong.

### Controls
Well ... the arrow keys. I might add touch buttons on HUD possibly.

### Running with docker

```bash
docker build . -t rapid-lanes
```

and then

```bash
docker run -p <your_port>:8080 rapid-lanes
```

* On Windows, you might have to use your docker machine IP
* On Debian/Ubuntu you can access the minigame on `localhost:<your_port>`

### Running on bare metal

You need to have `node` and `imagemagick` installed

In this directory, run 
```bash
npm install
```

Then start a web-server serving this directory.
With php
```bash
php -S localhost:<your_port>
```

With (node)http-server
```bash
http-server . -p <your_port>
```
