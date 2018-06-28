var level01 = function (window) {

   window.opspark = window.opspark || {};

   var draw = window.opspark.draw;
   var createjs = window.createjs;

   window.opspark.runLevelInGame = function(game) {
       // some useful constants 
       var groundY = game.groundY;
      
       // this data will allow us to define all of the
       // behavior of our game
       var levelData = {
           name: "Robot Romp",
           number: 1, 
           speed: -3,
           gameItems: [
               {type: 'sawblade',x:400,y:groundY},
               {type: 'sawblade',x:600,y:groundY},
               {type: 'sawblade',x:900,y:groundY}
           ]
       }
       for (var i = 0; i < levelData.gameItems.length; i++ ) {
           createSawBlade
}
       window.levelData = levelData;
       // set this to true or false depending on if you want to see hitzones
       game.setDebugMode(true);
       var enemy =  game.createGameItem('enemy',25);
var redSquare = draw.rect(50,50,'purple');
redSquare.x = -25;
redSquare.y = -25;
enemy.addChild(redSquare);
enemy.x = 400;
enemy.y = groundY-50;
game.addGameItem(enemy);
enemy.velocityX = -0.5;
       // BEGIN EDITING YOUR CODE HERE
    
     
       function createSawBlade(x,y) {
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
       var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
       myObstacle.x = x;
       myObstacle.y = y;
       game.addGameItem(myObstacle);
       var obstacleImage = draw.bitmap('img/sawblade.png');
       myObstacle.addChild(obstacleImage);
       myObstacle.velocityX = -1;
       obstacleImage.x = -25;
       obstacleImage.y = -25;
 
   // your code goes here
}       createSawBlade(100,groundY - 70);
        createSawBlade(300,groundY - 70);
        createSawBlade(500, groundY - 70);
           
           
   enemy.onPlayerCollision = function() {
       game.changeIntegrity(-10);
       game.changeIntegrity(10);
       console.log('The enemy has hit Halle');
}
};
};
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
   // here, export any references you need for tests //
   module.exports = level01;
}