let items = document.getElementsByClassName('input-for-JS')

Array.from(items).forEach(element => {
    element.children.inputValue.addEventListener('input', (e)=> {
        element.children.inputValue.value = e.target.value
        if(element.children.inputValue.value !== 0){
            element.children.placeholder.style.display = "none";
        }
        if(element.children.inputValue.value == 0){
            element.children.placeholder.style.display = "flex";
        }
    })
});

document.querySelector('.burger-btn').onclick = function(){
  document.querySelector('.burger-btn').classList.toggle('open');
  document.querySelector('.header__navigation-wrapper').classList.toggle('active');
}
  
Array.from(document.getElementsByClassName('header__navigation-item')).forEach( li => {
    li.onclick = function(){
        document.querySelector('.header__navigation-wrapper').classList.toggle('active');
        document.querySelector('.burger-btn').classList.toggle('open');
    }
})

  