var div5 = document.getElementById('three3').getElementsByTagName('p'); // Возвращает 1 элеменит
// // var par = div5.getElementsByTagName('p'); // Возвращает масив
// // var div = document.getElementsByTagName('div'); // Возвращает масив
// console.log(div5);
div5[2].style.background = "#73bcff";
// ===================================
var div2 = document.querySelector('div p') // CSS селекторы / Можно работать как в CSS коде / Лишь первый параграф первого элемента
var div2 = document.querySelector('#five5') // CSS селекторы / Можно работать как в CSS коде / Вернет элемент по его ID(ID выделяется через #)
var div2 = document.querySelector('#five5 p') // CSS селекторы / Можно работать как в CSS коде / Вернет стиль в эллменте под ID(ID выделяется через #)
var div3 = document.querySelectorAll('div2') // CSS селекторы / Можно работать как в CSS коде / Вернет стиль в эллменте под ID(ID выделяется через #)
div2.style.background = "purple";
console.log(div2);