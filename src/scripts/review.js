let reviewsFoto = document.querySelectorAll(".reviews__foto");
let reviewItems = document.querySelectorAll(".reviews__item");

for (let i = 0; i < reviewsFoto.length; i++){
reviewsFoto[i].addEventListener("click", function () {
reviewsFoto[i].classList.add("reviews__foto--activ");

let reviewsFotoActiv = document.querySelector(".reviews__foto--activ");
reviewsFotoActiv.classList.remove("reviews__foto--activ");

reviewItems[i].classList.add("active");
reviewItems.forEach((item, idx) => {
      if (i !== idx) {
      	item.classList.remove("active");
      }
    })
});
}