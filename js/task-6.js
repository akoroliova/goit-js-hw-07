function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//Завдання 6 - функція createBoxes має приймати amount - кількість дівів, яку потрібно створити. В івент-ліснери потрібно
//передавати окремі колбеки, правильно іменовані за допомогою on або handle, а вже в них викликати функції
//createBoxes і destroyBoxes відповідно.
