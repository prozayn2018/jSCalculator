function seven(){
// test for linking JS to DOM; works.
function mousehover(){


  const mousein = document.querySelector('#seven');
  mousein.addEventListener('mouseover', function(){
  document.querySelector('#seven').style.color = "#FA7921";
  })

  const mouseout = document.querySelector('#seven');
  mouseout.addEventListener('mouseout', function(){
  document.querySelector('#seven').style.color = "white";
  })
 }
 mousehover()


 function click(){
   const click = document.querySelector('#seven');
     click.addEventListener('click', function(){
       document.querySelector('#selections').innerHTML += "7";
     })
   }
 click()
}
seven()

function calcLogic(){
  
    for(i =0, i > 10, i++){
      // click is the recent grid clicked, MUST RETURN a string only
      input = click();
      if(input == 'clear'){
        document.querySelector('#selections').innerHTML = ' '
        break;
      }else if(input != 'clear'){
        // add clicked button to selections
        document.querySelector('#selections').innerHTML += input;
        // once added, evaluate the string expression
        evalUpdate = math.eval (figure out what code goes here)
        // once evaluated; add to bottom header
        document.querySelector('#answer').innerHTML = evalUpdate
        i++;
      };
    };
  };

calcLogic()
