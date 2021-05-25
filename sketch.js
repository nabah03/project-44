var player1, player2, monster1, monster2, monster3, monster4, background, player, form, players
var player1I, player2I, monster1I, monster2I, monster3I,  monster4I, backgroundI,allPlayers
var gameState = 0;
var playerCount;
var kills = 0;
var database;
var monstersGrp, monsters2Grp, monsters3Grp, monster4Grp

function preload(){
    player1I = loadImage("boycharacter.png")
    player2I = loadImage("boycharacter2.png")
    monster1I = loadImage("monster1.png")
    monster2I = loadImage("monster2.png")
    monster3I = loadImage("monster3.png")
    monster4I = loadImage("monster4.png")
   bgI = loadImage("bg2.jpeg")
   
}

function setup (){
    database = firebase.database();
    createCanvas(windowWidth,windowHeight);
    game = new Game();
    game.getState();
    game.start()
   
    
   
   
    
 
}
function draw(){
    background("white")
    if (playerCount == 2){
        game.update(1)
    }
    if(gameState == 1){
        background(bgI)
     
      
      
      game.play();
      

    }
       
        
        drawSprites();
    }

   
    
   


















