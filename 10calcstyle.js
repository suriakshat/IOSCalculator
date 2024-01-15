let calculation= localStorage.getItem('calc') || ''; 
document.querySelector('.ben').innerHTML=calculation;
function calc(num){
  if(num==='='){
    //console.log(eval(calculation));
    calculation=eval(calculation);
    document.querySelector('.ben').innerHTML=calculation;
    
    
  }
  else if(num==='clear')
  {
    calculation = '';
    //console.log('caleared');

  }
  else{
    calculation+=num;
    //console.log(calculation)
}
localStorage.setItem('calc',calculation);

document.querySelector('.ben').innerHTML=calculation;
}     