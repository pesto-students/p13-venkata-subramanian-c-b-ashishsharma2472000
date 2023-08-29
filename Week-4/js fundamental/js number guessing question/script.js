
function playguessinggame(numToGuess,totalGuesses){


    var guess = 0 ; 
    
    var X = prompt("enter a number between 1 to 100");
    
      if (X === null) {
          // User pressed Cancel, exit the game and return 0
        console.log("exit");  
        return 0;
        }
    
    while(X!=numToGuess ){
    
    
       if (X === null) {
          // User pressed Cancel, exit the game and return 0
         console.log("exit"); 
         return 0;
          
        }
        else if(X<numToGuess){
      X =   prompt(`${X} is too small. Guess a larger number.`);
        guess++;
    }else if (X > numToGuess){
        X = prompt(`${X} is too Large. Guess a Smaller number.`);
        guess++
    }
      else if (isNaN(X)){
        X =   prompt(`${X} Please enter a number.`);
      }
      
    }
    
      if (totalGuesses < guess){
          console.log("No guess remaine");
      }
    
      else{
        console.log("guess = " ,guess )
      }
    
    
      return 0;
    
    
      
    }
    
    
    playguessinggame(5,10)
    