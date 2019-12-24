const menuMembers = document.querySelectorAll(".menu__item");
const iconmenu = document.querySelector(".menu__close");

menuMembers.forEach(el => 
el.addEventListener("click", function(e) {
  e.preventDefault();
menuMembers.forEach(el => el.classList.remove("active"));
addClassList(el);
})

)

function addClassList(el) {
el.classList.add("active");
};

iconmenu.addEventListener("click", function(e){
  e.preventDefault;
  menuMembers.forEach(el => el.classList.remove("active"));
  addClassList(el);
})