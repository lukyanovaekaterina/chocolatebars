//gamburger

const gamburger__iconButton = document.querySelector(".gamburger__icon");
const navigation = document.querySelector(".nav");

 gamburger__iconButton.addEventListener("click", function() {
 navigation.classList.toggle("active");
 document.body.classList.toggle("overflow");
});

//bar
const composition__iconButton = document.querySelector(".bar__composition-button");
const table = document.querySelector(".bar__composition-table");

composition__iconButton.addEventListener("click", function () {
  table.classList.toggle("active");
  document.body.classList.toggle("overflow");  
});

$(document).ready(function() {
  const owl = $(".owl-carousel").owlCarousel({
    center: true,
    items: 1,
    loop: true
  });

  $(".bar__button_prev").click(function() {
    console.log("prev");
    owl.trigger("prev.owl.carousel");
  });

  $(".bar__button_next").click(function() {
    console.log("next");
    owl.trigger("next.owl.carousel");
  });
});

// review

let reviewsFoto = document.querySelectorAll(".reviews__foto");
let reviewItems = document.querySelectorAll(".reviews__item");

for (let i = 0; i < reviewsFoto.length; i++){
reviewsFoto[i].addEventListener("click", function () {
reviewsFoto[i].classList.add("reviews__foto--activ");
let reviewsFotoActiv = document.querySelector(".reviews__foto--activ");
reviewsFotoActiv.classList.remove("reviews__foto--activ");
reviewItems[i].classList.add("reviews__item--activ");
let reviewItemsActiv = document.querySelector(".reviews__item--activ");
//reviewItemsActiv.classList.remove("reviews__item--activ");

});
}


//menu

const teamMembers = document.querySelectorAll(".menu__item");

teamMembers.forEach(el =>
el.addEventListener("click", function() {
teamMembers.forEach(el => el.classList.remove("active"));
addClassList(el);
})
);

function addClassList(el) {
el.classList.add("active");
}


