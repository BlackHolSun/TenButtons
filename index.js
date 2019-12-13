
let buttons = document.querySelectorAll('[data-type=button]');

for(let i = 0; i < buttons.length; i++){
  
   buttons[i].addEventListener('click',  () =>{
    alert(i + 1);});
}