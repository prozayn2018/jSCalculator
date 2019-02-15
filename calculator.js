

// interesting function
//Made a forEach to grab each grid-item element when it is clicked,
//then var y grabs the inside children of (e) (debug using console.log(e)
//for tree structure, and the button clicked is returned as childNode)
function click(){

 globalArray = []

 for(let i=0; i<1; i++){

  const griditem = document.querySelectorAll('div.grid-item').forEach(function(e){
    e.addEventListener('click', function(){


      var buttonInt = e.childNodes[1].textContent;
      //trim() takes out white spaces in strings
      var y = document.querySelector('#selections').innerHTML += buttonInt.trim();
      var buttonStr = buttonInt.trim();
      console.log(buttonStr)

      // calculator logic
      if(buttonStr !== 'C'){
        globalArray.push(buttonStr);
        console.log(globalArray);
        var convertString = globalArray.toString();
        //figure out what's the logic behind replace; removes spaces in between int & str
        var removeSpace = convertString.replace(/,/g, '')
        console.log(removeSpace)
        evalUpdate = math.eval(removeSpace);
        // once evaluated; add to bottom header
        document.querySelector('#answer').innerHTML = evalUpdate
        i++;
        console.log(i);
      }else if(buttonStr === 'C'){
        document.querySelector('#selections').innerHTML = '';
        document.querySelector('#answer').innerHTML = 0;
        // clears out array whenever user hits C (clear's logic)
          function empty(){
          globalArray.length = 0;
        };
        empty()
        i++;
        console.log(i);
      }
    })
    })
  }
}

click()
