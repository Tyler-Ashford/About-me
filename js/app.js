'use strict'

let answerOne = prompt('Am I married?').toLocaleLowerCase();
  
  if(answerOne === 'yes'  || answerOne === 'y'){
  alert('You are correct!');
 } else if(answerOne === 'no' || answerOne === 'n'){
  alert('Sorry I am, my wife is beautiful');
  }

  let answerTwo = prompt('Did I serve in the military?').toLocaleLowerCase();
    
    if(answerTwo === 'yes' || answerTwo === 'y'){
      alert('Right choice bro');
    } else if(answerTwo === 'no' || answerTwo === 'n'){
      alert('Nah bro, I served in the Army and the Navy');
    }