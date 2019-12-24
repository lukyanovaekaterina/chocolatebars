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
  