const hamburgerBtn = document.querySelector(".hamburger"),
      menu = document.querySelector(".menu"),
      closeMenuBtn = document.querySelector(".menu__close");


function toggleMenu(){
  menu.classList.toggle("active");
}



hamburgerBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);