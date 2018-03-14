/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var score=[0,0];
var roundScore=0;
var activePlayer=0;
var gameplay=true ;
//console.log(dice);
//document.querySelector(`#current-${activePlayer}`).textContent=dice;

//var x=parseInt(document.querySelector("#score-1").textContent);
//x=x+dice ;
//document.querySelector("#score-0").textContent=x ;
 function reset()
{ 
        
    gameplay=true ;
    var score=[0,0];
var roundScore=0;
var activePlayer=0;
    document.getElementById('score-0').textContent=0;
document.getElementById('score-1').textContent=0;
document.getElementById('current-1').textContent=0;
document.getElementById('current-0').textContent=0;
    document.getElementById('name-0').textContent='PLAYER-1';
    document.getElementById('name-1').textContent='PLAYER-2';
    document.querySelector(".player-0-panel").classList.remove('winner');
        document.querySelector(".player-1-panel").classList.remove('winner');

        document.querySelector(".player-0-panel").classList.remove('active');

        document.querySelector(".player-1-panel").classList.remove('active');

}


reset();
   function changePayer()
    {  if(gameplay){
         activePlayer===0? activePlayer=1 :activePlayer=0 ;
            roundScore=0;
            document.getElementById("current-0").textContent=0;
            document.getElementById("current-1").textContent=0;
            
            document.querySelector('.player-0-panel').classList.toggle("active");
            
            document.querySelector('.player-1-panel').classList.toggle("active");
        
            document.querySelector(".dice").style.display='none';
    }}
document.querySelector(".dice").style.display='none'; 
document.querySelector(".btn-roll").addEventListener('click',function(){
    if(gameplay){
    document.querySelector(".dice").style.display='none';
 document.querySelector(".player-"+activePlayer+"-panel").classList.add('active');
    var dice=Math.floor(Math.random()*6)+1 ;
    document.querySelector(".dice").style= 'block';
    document.  querySelector(".dice").src="dice-"+dice+".png";
    
    if(dice !==1)
        {
            roundScore +=dice ;
            console.log(roundScore);
            
        document.getElementById("current-"+activePlayer).textContent=roundScore ;
        }
    else{  changePayer();
        }    }});



document.querySelector(".btn-hold").addEventListener('click',function(){
    if(gameplay){
   score[activePlayer] +=roundScore ;
    document.getElementById("score-"+activePlayer).textContent= score[activePlayer];
    if(score[activePlayer]>=100)
        {
            document.querySelector("#name-"+activePlayer).textContent="Winner!";
            document.querySelector(".dice").style.display='none';
 document.querySelector(".player-"+activePlayer+"-panel").classList.add('winner');
            document.querySelector(".dice").style.display='none';
 document.querySelector(".player-"+activePlayer+"-panel").classList.remove('active');
            gameplay=false ;
             }
    changePayer();
    document.querySelector(".player-"+activePlayer+"-panel").classList.add('active');
}}) ;



document.querySelector(".btn-new").addEventListener('click',reset);

 