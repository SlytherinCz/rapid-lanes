var bottle = new Bottle();

bottle.constant('defaultDifficulty',1);
bottle.constant('defaultLifes',3);
bottle.constant('playerBounds',{left:0,right:0});
bottle.constant('WIDTH',640);
bottle.constant('HEIGHT',480);
bottle.constant('LANES',[220,320,420]);
bottle.constant('maxRows',3);
bottle.constant('minimumRowsDistance',160);
bottle.constant('allowedTrafficFrames',[
    'beetle.png',
    'van1.png',
    'van2.png',
    'cabrio.png',
    'sedan.png'
]);

bottle.factory('mainScene',function(container){
    var scene = new Phaser.Scene('mainScene');
    scene.preload = mainSceneStatePreload;
    scene.create = mainSceneStateCreate;
    scene.render = mainSceneStateRender;
    scene.update = mainSceneStateUpdate;
    scene.gameState = container.gameState;
    scene.WIDTH = container.WIDTH;
    scene.HEIGHT = container.HEIGHT;
    console.log(scene);

    return scene;
});

bottle.service('difficulty',Difficulty,'defaultDifficulty');
bottle.service('trafficManager',TrafficManager,'WIDTH','HEIGHT','LANES','maxRows','minimumRowsDistance','allowedTrafficFrames');
bottle.service('gameState',GameState,'trafficManager','difficulty','healthBar');
bottle.service('healthBar',HealthBar,'defaultLifes');

bottle.factory('config',function(container){
    return {
        type: Phaser.AUTO,
        width: container.WIDTH,
        height: container.HEIGHT,
        scene : container.mainScene
    }
});

bottle.service('rapidLanes',Phaser.Game,'config');