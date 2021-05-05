var div5 = document.getElementById('three3'); // Возвращает 1 элеменит
var div5 = document.getElementById('three3').getElementsByTagName('p'); // Возвращает массив параграфов (p)
// // var par = div5.getElementsByTagName('p'); // Возвращает масив параграфов(p)
// // var div = document.getElementsByTagName('div'); // Возвращает масив дивов (div)
// console.log(div5);
div5[2].style.background = "#73bcff";
// ===================================
var div2 = document.querySelector('div p') // CSS селекторы / Можно работать как в CSS коде / Лишь первый параграф первого элемента, то есть, 1 элемент
var div2 = document.querySelector('#five5') // CSS селекторы / Можно работать как в CSS коде / Вернет элемент по его ID(ID выделяется через #)
// var div2 = document.querySelector('#five5 p') // CSS селекторы / Можно работать как в CSS коде / Вернет стиль в эллменте под ID(ID выделяется через #)
var div3 = document.querySelectorAll('div') // CSS селекторы / Можно работать как в CSS коде / Вернет массив дивов(div)
div3[3, 2, 1, 0].style.background = "purple";
console.log(div3);
// ===================================
three3.style.background = 'orange'