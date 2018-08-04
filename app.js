filterOddElements = (arr) => {
    let odds = []; //se indica que el array odds esté vacio
    
    for (let num = 0; num < arr.length; num++) { //se itera la variable num por el largo del array
      if ( arr[num] % 2 !== 0 ) { //se indica que si el array num, como resultado tiene un residuo distinto de 0, 
        odds.push(arr[num]); // se agregue al array num
      }
    }
    return odds;
  }

  //ejemplo
  let result = filterOddElements([1, 2, 3, 4, 5, 6, 7]);
console.log(result);