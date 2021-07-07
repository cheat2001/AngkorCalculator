const equal=document.querySelector('.equal');
const scr=document.querySelector('.screen');
equal.addEventListener('click',getvalue);

function getvalue(){
  let got=eval(scr.value);
  scr.value=got;
}
