//given string and array of numbers
//numbers=index of letter to be removed.
//indexing resets after each removal
//return last letter standing

function lastSurvivor(str, numArray) {
  //turn str into array
  let arrayStr = str.split('');
  
  //for loop?
  for(let i = 0; i < numArray.length; i++){
    arrayStr.splice((numArray[i]),1)
  }
  
  //return first/only element
  return arrayStr[0]
  
  //or return arrayStr.join('')
}
