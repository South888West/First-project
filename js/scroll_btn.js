// $(document).ready(function () {
//   if ($(document).width() > 480) {
//     $(".btn-yellow").on("click", "a", function (event) {
//       //отменяем стандартную обработку нажатия по ссылке
//       event.preventDefault();
//       //забираем идентификатор блока с атрибута href
//       var id = $(this).attr("href"),
//         //узнаем высоту от начала страницы до блока на который ссылается якорь
//         top = $(id).offset().top;

//       //анимируем переход на расстояние - top за 1500 мс
//       $("body,html").animate({ scrollTop: top - 75 }, 1500);
//     });
//   } else {
//     $(".btn-yellow").on("click", "a", function (event) {
//       //отменяем стандартную обработку нажатия по ссылке
//       event.preventDefault();
//       //забираем идентификатор блока с атрибута href
//       var id = $(this).attr("href"),
//         //узнаем высоту от начала страницы до блока на который ссылается якорь
//         top = $(id).offset().top;

//       //анимируем переход на расстояние - top за 1500 мс
//       $("body,html").animate({ scrollTop: top - 75 }, 1500);
//     });
//   }
// });
