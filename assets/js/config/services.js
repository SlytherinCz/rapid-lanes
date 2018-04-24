var bottle = new Bottle();

bottle.constant('defaultDifficulty',2);
bottle.constant('maxDifficulty',12);
bottle.constant('defaultLifes',3);
bottle.constant('playerBounds',{left:0,right:0});
bottle.constant('WIDTH',640);
bottle.constant('HEIGHT',480);
bottle.constant('LANES',[220,320,420]);
bottle.constant('CONE_LANES',[270,370]);
bottle.constant('playerAreaBounds',{
    "x": [190,450],
    "y": [20,460]
});
bottle.constant('outOfBoundsTolerance',10);
bottle.constant('spawnConesSince',2);
bottle.constant('minimumYTrafficDistance',160);
bottle.constant('minimumSceneryDistance',260);
bottle.constant('sceneryFrames',[
    'field1.png',
    'forest1.png',
    'forest2.png',
    'pond.png'
]);
bottle.constant('playerFrames',{
    mint: 'player1.png',
    damaged:'player2.png'
});
bottle.constant('trafficFrames',[
    'beetle.png',
    'van1.png',
    'van2.png',
    'cabrio.png',
    'sedan.png'
]);

bottle.constant('coneFrames',[
    'cone1.png'
]);

bottle.factory('preGame',function(container){
    var scene = new Phaser.Scene('preGame');
    scene.preload = preGameStatePreload;
    scene.create = preGameStateCreate;
    scene.render = preGameStateRender;
    scene.update = preGameStateUpdate;   
    scene.WIDTH = container.WIDTH;
    scene.HEIGHT = container.HEIGHT;
    return scene;
});

bottle.factory('mainScene',function(container){
    var scene = new Phaser.Scene('mainScene');
    scene.preload = mainSceneStatePreload;
    scene.create = mainSceneStateCreate;
    scene.render = mainSceneStateRender;
    scene.update = mainSceneStateUpdate;
    scene.gameState = container.gameState;
    scene.WIDTH = container.WIDTH;
    scene.HEIGHT = container.HEIGHT;
    return scene;
});

bottle.factory('postGame',function(container){
    var scene = new Phaser.Scene('postGame');
    scene.preload = postGameStatePreload;
    scene.create = postGameStateCreate;
    scene.render = postGameStateRender;
    scene.update = postGameStateUpdate;
    scene.WIDTH = container.WIDTH;
    scene.HEIGHT = container.HEIGHT;
    return scene;
});

bottle.service('difficulty',Difficulty,'defaultDifficulty','maxDifficulty');
bottle.service('trafficSpawner',TrafficSpawner,'LANES','CONE_LANES','trafficFrames','coneFrames','spawnConesSince');
bottle.service('trafficManager',TrafficManager,'WIDTH','HEIGHT','minimumYTrafficDistance','trafficSpawner','outOfBoundsDestructor');
bottle.service('outOfBoundsDestructor',OutOfBoundsDestructor,'WIDTH','HEIGHT','outOfBoundsTolerance');
bottle.service('sceneryDecorator',SceneryDecorator,'WIDTH','HEIGHT','sceneryFrames','minimumSceneryDistance','outOfBoundsDestructor');
bottle.service('player',Player,'playerFrames','defaultLifes','playerAreaBounds');
bottle.service('gameState',GameState,'player','trafficManager','difficulty','healthBar','playlist','sceneryDecorator');
bottle.service('healthBar',HealthBar,'defaultLifes');
bottle.service('playlist',Playlist);

bottle.factory('config',function(container){
    return {
        type: Phaser.AUTO,
        width: container.WIDTH,
        height: container.HEIGHT,
        backgroundColor: "#ffffff",
        scene : [container.preGame,container.mainScene,container.postGame]
    }
});

bottle.service('rapidLanes',Phaser.Game,'config');