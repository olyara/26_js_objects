// 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость),
//  и следующие функции для работы с этим объектом:
let car = {
  manufacturer: "Ford",
  model: "Focus",
  year: 2013,
  speed: 100,
};

// Функция для вывода на экран информации об автомобиле;
// function showInfo(obj) {
//   for (let key in obj) {
//     console.log(`${key}: ${obj[key]}`);
//   }
// }
// showInfo(car);

// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
// Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
// function getTime(obj, distance) {
//   let time = distance / obj.speed;
//   let i = 4;
//   while (i <= time) {
//     time += 1;
//     i += 4;
//   }
//   return time;
// }
// console.log(getTime(car, 900));

// 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом:
let fraction1 = {
  numerator: 8,
  denominator: 16,
};
let fraction2 = {
  numerator: 7,
  denominator: 20,
};

// Функция сокращения объекта-дроби.
// THIS FUNCTION SHOULD BE UNCOMMENTED IN 4 NEXT FUNCTIONS!!!
function reduction(obj) {
  const min = obj.numerator < obj.denominator ? obj.numerator : obj.denominator;
  let i = 2;
  let reduced = false;
  while (i <= min) {
    if (!(obj.numerator % i) && !(obj.denominator % i)) {
      obj.numerator /= i;
      obj.denominator /= i;
      reduced = true;
    }
    i++;
  }
  if (reduced === true) {
    reduction(obj);
  }
  return obj;
}
// console.log(reduction(fraction1));

// Функция сложения 2-х объектов-дробей;
// function addition(obj1, obj2) {
//   let objAddition = {
//     numerator:
//       obj1.numerator * obj2.denominator + obj2.numerator * obj1.denominator,
//     denominator: obj1.denominator * obj2.denominator,
//   };
//   return reduction(objAddition);
// }
// console.log(addition(fraction1, fraction2));

// Функция вычитания 2-х объектов-дробей;
// function substraction(obj1, obj2) {
//   let objSubstraction = {
//     numerator:
//       obj1.numerator * obj2.denominator - obj2.numerator * obj1.denominator,
//     denominator: obj1.denominator * obj2.denominator,
//   };
//   return reduction(objSubstraction);
// }
// console.log(substraction(fraction1, fraction2));

// Функция умножения 2-х объектов-дробей;
// function multiplication(obj1, obj2) {
//   let objMultiplication = {
//     numerator: obj1.numerator * obj2.numerator,
//     denominator: obj1.denominator * obj2.denominator,
//   };
//   return reduction(objMultiplication);
// }
// console.log(multiplication(fraction1, fraction2));

// Функция деления 2-х объектов-дробей;
// function division(obj1, obj2) {
//   let objDivision = {
//     numerator: obj1.numerator * obj2.denominator,
//     denominator: obj1.denominator * obj2.numerator,
//   };
//   return reduction(objDivision);
// }
// console.log(division(fraction1, fraction2));

// 3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом:
//THE UNDERMENTIONED FUNCTION IS NEEDED FOR THIS TASK, IT WAS TAKEN FROM THE PREVIOUS HOMEWORK. IT SHOULD STAY UNCOMMENTED.
function timeFormat(unit) {
  unit = String(unit);
  if (unit.length === 1) {
    unit = "0" + unit;
  }
  return unit;
}
//

let time = {
  hours: 13,
  minutes: 27,
  seconds: 45,
};

// Функция вывода времени на экран;
// THIS FUNCTION SHOULD BE UNCOMMENTED IN THE NEXT FUNCTIONS!!!
function showTime(obj) {
  for (let key in obj) {
    console.log(`${key}: ${timeFormat(obj[key])}`);
  }
}
// showTime(time);

// Функция изменения времени на переданное количество секунд;
// function changeTimeOnS(obj, sec) {
//   obj.seconds += sec;
//   while (obj.seconds > 60) {
//     obj.seconds -= 60;
//     obj.minutes += 1;
//   }
//   obj.minutes = timeFormat(obj.minutes);
//   obj.seconds = timeFormat(obj.seconds);

//   return showTime(obj);
// }
// changeTimeOnS(time, 122);

// Функция изменения времени на переданное количество минут;
// function changeTimeOnM(obj, min) {
//   obj.minutes += min;
//   while (obj.minutes > 60) {
//     obj.minutes -= 60;
//     obj.hours += 1;
//   }
//   obj.hours = timeFormat(obj.hours);
//   obj.minutes = timeFormat(obj.minutes);

//   return showTime(obj);
// }
// changeTimeOnM(time, 122);

// Функция изменения времени на переданное количество часов.
// function changeTimeOnH(obj, hours) {
//   obj.hours += hours;
//   while (obj.hours >= 24) {
//     obj.hours -= 24;
//   }
//   obj.hours = timeFormat(obj.hours);
//   return showTime(obj);
// }
// changeTimeOnH(time, 22);
