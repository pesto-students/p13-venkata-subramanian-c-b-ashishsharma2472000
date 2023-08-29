let nums = [4, 2, 9, 1, 8];


const divideArray = (number) => {
  
  var evennum = [];
  
  var oddnum = [];


  for(let i = 0 ; i < number.length ;i++){
    var n = number[i];

    if (n % 2 == 0){
      evennum.push(n);
    }
    else{
      oddnum.push(n);
    }

    
  }

  const compare = (a,b) =>{
    return a-b;
  }
  
  console.log(evennum.sort(compare));
  
  console.log(oddnum.sort(compare));

  
} 


divideArray(nums);