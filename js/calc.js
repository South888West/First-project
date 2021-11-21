const btnMinusHour = document.querySelector("#btnCounterMinus");
const btnPlusHour = document.querySelector("#btnCounterPlus");
const countScreenHour = document.querySelector(".counter-table");

const btnMinusDay = document.querySelector("#btnCounterMinus-day");
const btnPlusDay = document.querySelector("#btnCounterPlus-day");
const countScreenDay = document.querySelector("#counter-days");

const result = document.querySelector("#result-calc");

let Pay = 491;
let resultDay = 7;
let resultHour = 10;
let mounth = 4;
btnPlusHour.addEventListener("click", function () {
  let countPlus = countScreenHour.innerHTML;
  if (countPlus < 10) {
    let counterHour = countPlus++ + 1;
    countScreenHour.innerHTML++;
    resultHour = counterHour;
    let finish = resultHour * resultDay * Pay * mounth;
    result.innerHTML = finish + "<span> Рублей</span>";
  }
});

btnMinusHour.addEventListener("click", function () {
  let countPlus = countScreenHour.innerHTML;
  let counterHour = countPlus++ - 1;
  if (countPlus > 2) {
    countScreenHour.innerHTML--;
    resultHour = counterHour;
    let finish = resultHour * resultDay * Pay * mounth;
    result.innerHTML = finish + "<span> Рублей</span>";
  }
});

btnPlusDay.addEventListener("click", function () {
  let countPlusDay = countScreenDay.innerHTML;

  if (countPlusDay < 7) {
    let counterDay = countPlusDay++ + 1;
    countScreenDay.innerHTML++;
    resultDay = counterDay;
    let finish = resultHour * resultDay * Pay * mounth;
    result.innerHTML = finish + "<span> Рублей</span>";
  }
});

btnMinusDay.addEventListener("click", function () {
  let countPlusDay = countScreenDay.innerHTML;
  if (countPlusDay > 1) {
    let counterDay = countPlusDay++ - 1;

    countScreenDay.innerHTML--;
    resultDay = counterDay;
    let finish = resultHour * resultDay * Pay * mounth;
    result.innerHTML = finish + "<span> Рублей</span>";
  }
});
