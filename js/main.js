// $(document).ready(function () {
//   if ($(document).width() > 480) {
//     $("#nav-scroll").on("click", "a", function (event) {
//       //отменяем стандартную обработку нажатия по ссылке
//       event.preventDefault();
//       //забираем идентификатор блока с атрибута href
//       var id = $(this).attr("href"),
//         //узнаем высоту от начала страницы до блока на который ссылается якорь
//         top = $(id).offset().top;

//       //анимируем переход на расстояние - top за 1500 мс
//       $("body,html").animate({ scrollTop: top - 90 }, 1500);
//     });
//   } else {
//     $(document).ready(function () {
//       $(".navbar-collapse").on("click", "a", function (event) {
//         event.preventDefault();
//         var id = $(this).attr("href"),
//           top = $(id).offset().top;
//         $("body,html").animate({ scrollTop: top - 250 }, 1500);
//         $(".navbar-collapse").collapse("hide");
//       });
//     });
//   }
// });
