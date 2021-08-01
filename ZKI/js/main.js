// Получаем элементы из разметки html
let inputs = document.getElementsByClassName("input");
let spans = document.getElementsByClassName("span");
let buttons = document.getElementsByClassName("btn");

// Тут получаем целевые инпуты и спаны 
let knZuInput = document.getElementById("knZU_input");
let knZuSpan = document.getElementById("knZU");

let adZuInput = document.getElementById("adZU_input");
let adZuSpan = document.getElementById("adZU");

let typeOksInput = document.getElementById("typeOKS_input");
let typeOksSpan = document.getElementById("typeOKS");

let sOksInput = document.getElementById("sOKS_input");
let sOksSpan = document.getElementById("sOKS");

let knOksInput = document.getElementById("knOKS_input");
let knOksSpan = document.getElementById("knOKS");

let inOksInput = document.getElementById("inOKS_input");
let inOksSpan = document.getElementById("inOKS");

let unOksInput = document.getElementById("unOKS_input");
let unOksSpan = document.getElementById("unOKS");

let adOksInput = document.getElementById("adOKS_input");
let adOksSpan = document.getElementById("adOKS");

let nDogInput = document.getElementById("nDog_input");
let nDogSpan = document.getElementById("nDog");

let dateDogInput = document.getElementById("dateDog_input");
let dateDogSpan = document.getElementById("dateDog");

//  Для вставки дубля 
// let knzu_01_span = document.getElementById("knzu_01");

// Превращаем коллекцию html в массив
inputs = Array.from(inputs);
spans = Array.from(spans);
buttons = Array.from(buttons);

buttons.map( (item) => {
  // Добавляем событие на клик кнопки и в зависимости от айдишника кнопки выводим/скрываем инпуты и спаны
  item.addEventListener("click", function (event) {
    inputs.map((item) => {
     item.style.display = (event.target.id === "create") ? "none" : "inline-block";
    }
    );
  
    spans.map((item) => {
      item.style.display = (event.target.id === "create") ? "inline-block" : "none";
    }
  );

let getValue = (input) => {
  return input.value ? input.value : "-"
}
  
  // Берем целевой спан и вставляем туда значение из инпута
knZuSpan.innerHTML = getValue(knZuInput);
adZuSpan.innerHTML = getValue(adZuInput);
typeOksSpan.innerHTML = getValue(typeOksInput);
sOksSpan.innerHTML = getValue(sOksInput);
knOksSpan.innerHTML = getValue(knOksInput);
unOksSpan.innerHTML = getValue(unOksInput);
inOksSpan.innerHTML = getValue(inOksInput);
adOksSpan.innerHTML = getValue(adOksInput);
nDogSpan.innerHTML = getValue(nDogInput);
dateDogSpan.innerHTML = getValue(dateDogInput);

  // для вставки дубля
  // knZU_01_span.innerHTML = getValue(knZUInput);
    
  })
});
