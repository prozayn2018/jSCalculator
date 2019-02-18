

// interesting function
//Made a forEach to grab each grid-item element when it is clicked,
//then var y grabs the inside children of (e) (debug using console.log(e)
//for tree structure, and the button clicked is returned as childNode)
function click(){

 globalArray = []
 cloneArr= []

 for(let i=0; i<1; i++){

  const griditem = document.querySelectorAll('div.grid-item').forEach(function(e){
    e.addEventListener('click', function(){


    function asciiCode(){
      //note this, getting exact charcode from within textcontent instead
      //of array
      var buttonInt = e.childNodes[1].textContent;
      var buttonChar = buttonInt.trim();
      //gives char code of button pressed
      console.log(buttonChar.charCodeAt())

      //char number of times (x) from HTML DOM
       let multiplication = 215;
      //char number of minus (-) from HTML DOM and others below.
       let minusS = 8722;
       let divis = 247;
       let mod = 37;
       let lessThan = 60;
       let greaterThan = 62;
       let deleteD = 68;
       //plusminus char number
      if(buttonChar.charCodeAt() === multiplication){
        var times = '*';
          return times;
      }else if(buttonChar.charCodeAt() === minusS){
        var minus = '-';
        return minus;
      }else if(buttonChar.charCodeAt() === divis){
        var division = '/';
        return division;
      }else if(buttonChar.charCodeAt() === mod){
        var modulus = '%';
        return modulus;
      }else if(buttonChar.charCodeAt() === lessThan){
        var lessThann = '<';
        return lessThann;
      }else if(buttonChar.charCodeAt() === greaterThan){
        var greaterThann = '>';
        return greaterThann;
      }else if(buttonChar.charCodeAt() === deleteD){
        var deleteDd = 'del';
        return deleteDd;
      }else{
        return buttonInt;
        };
      };

    asciiCode()

    function displayInput(){
      //trim() takes out white spaces in strings

      var buttonInt = asciiCode();
      if(buttonInt !== 'del'){
        var y = document.querySelector('#selections').innerHTML += buttonInt.trim();
        var buttonStr = buttonInt.trim();
        return buttonStr;
      }else{
        // pop takes out last element when user presses delete, shows correct answer
        //clone of global array, for delete
        cloneArr = globalArray.slice(0);
        var removeComms = cloneArr.join('');
        globalArray.pop();
        //need to show entries leading upto last delete
        var del = buttonInt.trim();
        return del;

      };
    };


    displayInput()

    //deletes repeating html on topheader due to calling displayInput()


      function calcLogic(){
        // never DO THIS AGAIN, call an important function twice;
        //creates duplication of logic; mess to contain
      var buttonStr = displayInput();

      // function duplicateString():
      var callDs = removeDupStr();
      //chain the replace to domstring at beginning to make it work

      // calculator logic
      if(buttonStr !== 'C' && buttonStr !== 'del'){
        globalArray.push(buttonStr);
        console.log(globalArray);
        console.log(cloneArr)
        var convertString = globalArray.toString();
        //figure out what's the logic behind replace; removes spaces in between int & str
        var removeSpace = convertString.replace(/,/g, '');
        evalUpdate = math.eval(removeSpace);
        // once evaluated; add to bottom header
        document.querySelector('#answer').innerHTML = evalUpdate;
        i++;

      }else if(buttonStr === 'C'){
        document.querySelector('#selections').innerHTML = '';
        document.querySelector('#answer').innerHTML = 0;
        // clears out array whenever user hits C (clear's logic)
          function empty(){
            //length erases data in array (better than remove method)
          globalArray.length = 0;
          cloneArr.length = 0;
          };
          empty()
          i++;

      }else if(buttonStr === 'del'){

          // if it can evaluate, goes here (no operator in the end:),
          //ends with number; mathjs throws exception if not number
          //just need if - then to trigger this.

        var convertCloneString = cloneArr.toString();
        var trimClone = convertCloneString.replace(/,/g, '');

          // logic for operator (+, -, etc) in the end;
        var convertCloneString = cloneArr.toString();
        var trimClone = convertCloneString.replace(/,/g, '');

        //if it throws error then start code below
        var trimLength = trimClone.length
        var cloneMath = trimClone.slice(0, trimLength -1);
        console.log('2l:'+ cloneMath);
        console.log('3l:' + globalArray);

        var cloneUpdate = math.eval(cloneMath);
        // once evaluated; add to bottom header
        document.querySelector('#selections').innerHTML = trimClone;
        document.querySelector('#answer').innerHTML = cloneUpdate;
        //push last operator back to globalarray, or else logic breaks down
        var lastElemMath = trimClone.slice(-1);
        globalArray.push(lastElemMath);
        i++;
       };
      };
      calcLogic()
    });
   });
  };
};

click()

// print inner html at [1]
//removes last element within html dom
function removeDupStr(){
  var domString = document.querySelector('#selections').innerHTML;
  var dsLength = domString.length
  var num = domString.slice(0,dsLength - 1);
  return domString = document.querySelector('#selections').innerHTML = num;
}

removeDupStr()
