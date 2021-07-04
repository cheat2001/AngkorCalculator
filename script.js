const get=document.querySelector('.equal');
const scr=document.querySelector('.screen');

get.addEventListener('click',getvalue);

function getvalue(){
  let got=eval(scr.value);
  scr.value=got;
}
