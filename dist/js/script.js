const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      procent = document.querySelectorAll('.progress__box-procent'),
      progressBar = document.querySelectorAll('.progress__bar>span');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

procent.forEach( (el, index) => {
    
    progressBar[index].style.width = el.innerHTML;

})
