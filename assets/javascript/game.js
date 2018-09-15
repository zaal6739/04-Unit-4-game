
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
    rnComputer=Math.floor(Math.random()*120+19);
    console.log(rnComputer)
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
      $('#Wins').text(wins);
      resetGame();
    }

// display player losses
function playerLoses(){
    alert ("You Lost!!!");
      losses++;
      $('#Losses').text(losses);
      resetGame()
    }

//crystal click functions
$('.img-red').on ('click', function(){
    userTotal = userTotal + rn1;
        console.log("Updated Crystal Total= " + userTotal);
        console.log("Red crystal total= "+ rn1);
        $('#playerScore').text(userTotal); 
              //Win condition
            if (userTotal == rnComputer){
              playerWins();
            }
            else if ( userTotal > rnComputer){
              playerLoses();
            }   
      })

$('.img-blue').on ('click', function(){
     userTotal = userTotal + rn2;
        console.log("Updated Crystal Total= " + userTotal);
        console.log("Blue crystal total= "+ rn2);
        $('#playerScore').text(userTotal); 
        //Win condition
        if (userTotal == rnComputer){
                playerWins();
                }
                else if ( userTotal > rnComputer){
                playerLoses();
                }   
          })

  $('.img-yellow').on ('click', function(){
     userTotal = userTotal + rn3;
      console.log("Updated Crystal Total= " + userTotal);
      console.log("Yellow crystal total= "+ rn3);
      $('#playerScore').text(userTotal); 
          //win condition
          if (userTotal == rnComputer){
             playerWins();
                  }
         else if ( userTotal > rnComputer){
             playerLoses();
                 }   
                 }
                 )

   $('.img-green').on ('click', function(){
      userTotal = userTotal + rn4;
      console.log("New Crystal Total= " + userTotal);
      console.log("Green crystal total= "+ rn4);
      $('#playerScore').text(userTotal); 
        //win condition
        if (userTotal == rnComputer){
            playerWins();
                        }
          else if ( userTotal > rnComputer){
               playerLoses();
                        }   
                        }
                        )



})

