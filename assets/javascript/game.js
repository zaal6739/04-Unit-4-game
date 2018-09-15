
$( window ).on( "load", function() { 
// create random number between 1 and 12 for each crystal, 19-120 for the computer
var rn1 = Math.floor(Math.random()*12+1)
var rn2 = Math.floor(Math.random()*12+1)
var rn3 = Math.floor(Math.random()*12+1)
var rn4 = Math.floor(Math.random()*12+1)
var rnComputer = Math.floor(Math.random()*120+19)
var userTotal = 0;
var wins = 0;
var losses = 0;


$('#numberToMatch').text(rnComputer);
$('#wins').text(wins);
$('#losses').text(losses);


function resetGame(){
    Random=Math.floor(Math.random()*120+19);
    console.log(Random)
    $('#numberToMatch').text(rnComputer);
    rn1= Math.floor(Math.random()*12+1);
    rn2= Math.floor(Math.random()*12+1);
    rn3= Math.floor(Math.random()*12+1);
    rn4= Math.floor(Math.random()*12+1);
    userTotal= 0;
    $('#playerScore').text(userTotal);
    } 



// display player wins
function playerWins(){
    alert("You won!!!");
      wins++; 
      $('#wins').text(wins);
      reset();
    }

// display player losses
function playerLoses(){
    alert ("You Lost!!!");
      losses++;
      $('#losses').text(losses);
      resetGame()
    }

})

