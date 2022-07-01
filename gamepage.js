// random value generated
  var y = Math.floor(Math.random() * 10 + 1);
  
  // function for number guessed by user     
var x = document.getElementById("guessField").value;

// counting the number of guesses
var guess = 1;

function submit()
{
  guess++;

if(x == y)
{
  alert("CONGRATULATIONS!!!"+player_name+"YOU GUESSED IT RIGHT IN " + guess + " GUESS");
  guess=1;
}

if(x > y)
{
  guess++;
  alert("OOPS!! SORRY TRY A BIGGER NUMBER");
}
else
{
  guess++;
  alert("OOPS!! SORRY TRY A SMALLER NUMBER");
}

}

function playAgain()
{
  y = Math.floor(Math.random() * 10 + 1); 
}