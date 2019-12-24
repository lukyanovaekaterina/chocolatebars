//gamburger

const gamburger__iconButton = document.querySelector(".gamburger__icon");
const navigation = document.querySelector(".nav");

 gamburger__iconButton.addEventListener("click", function() {
 navigation.classList.toggle("active");
 document.body.classList.toggle("overflow");
});


//scrol



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

reviewItems[i].classList.add("active");
reviewItems.forEach((item, idx) => {
      if (i !== idx) {
      	item.classList.remove("active");
      }
    })
});
}



//menu

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



//form

const myForm = document.querySelector(".form__elem");

myForm.addEventListener("submit", function(e) {
e.preventDefault();
const formData = new FormData(myForm);
formData.append('to', "katrin2006.06@inbox.ru");
const request = new XMLHttpRequest();
request.open("POST", "https://webdev-api.loftschool.com/sendmail");
request.send(formData);
request.addEventListener('load', function(){
  const response = JSON.parse(request.response);
 console.log(response);
});
});

//map

ymaps.ready(init);
    function init(){
        // Создание карты.
        const myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.76, 37.64],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 13
        });
      
        myMap.behaviors.disable("scrollZoom");
        
          myPlacemark1 = new ymaps.Placemark(
            [55.7464, 37.5989],
            {
              hintContent: "CHO CCO",
            },
          
          {
            iconLayout: "default#image",
            iconImageHref: "./../img/icon/1.png",
            iconImageSize: [60, 60],
          }
          );

        myMap.geoObjects.add(myPlacemark1);

        myPlacemark2 = new ymaps.Placemark(
          [55.7342, 37.6207],
          {
            hintContent: "CHO CCO",
          },
        
        {
          iconLayout: "default#image",
          iconImageHref: "./../img/icon/1.png",
          iconImageSize: [60, 60],
        }
        );

      myMap.geoObjects.add(myPlacemark2);

      myPlacemark3 = new ymaps.Placemark(
        [55.7612, 37.6089],
        {
          hintContent: "CHO CCO",
        },
      
      {
        iconLayout: "default#image",
        iconImageHref: "./../img/icon/1.png",
        iconImageSize: [60, 60],
      }
      );

    myMap.geoObjects.add(myPlacemark3);

    myPlacemark4 = new ymaps.Placemark(
      [55.7578, 37.5641],
      {
        hintContent: "CHO CCO",
      },
    
    {
      iconLayout: "default#image",
      iconImageHref: "./../img/icon/1.png",
      iconImageSize: [60, 60],
    }
    );

  myMap.geoObjects.add(myPlacemark4);



        }
  