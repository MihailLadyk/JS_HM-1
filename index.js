
// "use strtict"
// const name = "Генератор защитного поля";
// let price = 1000;
// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);
// price = 2000;
// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);




// const total = 100;
// let ordered = 50;
// if (ordered>total) {alert("На складе недостаточно товаров!")}
// else (ordered<=total) {alert("Заказ оформлен, с вами свяжется менеджер")};



// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;
// let prompt_password = prompt('Введите пароль');
// console.log(prompt_password);
// if (prompt_password==null) {message = "Отменено пользователем!"} else if (prompt_password==ADMIN_PASSWORD) {message = "Добро пожаловать!"} else if (prompt_password!=ADMIN_PASSWORD) {message = "Доступ запрещен, неверный пароль!"};
// console.log(message)





// let message;
// let credits = 23580;
// let pricePerDroid = 3000;
// let prompt_Droid = prompt('Сколько дроидов вы хотите купить?');
// console.log(prompt_Droid);
// let totalPrice = (pricePerDroid * prompt_Droid);
// console.log(totalPrice);
// if (prompt_Droid == null) {
//     message = "Отменено пользователем!"
// } else if (credits < totalPrice) {  message = "Недостаточно средств на счету!"} 
//   else if (credits > totalPrice) {message = `Вы купили ${prompt_Droid} дроидов, на счету осталось ${credits-totalPrice} кредитов.`};
// console.log(message)




// let promptCountry = prompt('Выберите страну').toLowerCase();
// switch (promptCountry) {
//     case "китай":
//       alert('Доставка в Китай будет стоить 100 кредитов');
//       break;
//     case "чили":
//       alert('Доставка в Чили будет стоить 250 кредитов');
//       break;
//     case "австралия":
//       alert('Доставка в Австралию будет стоить 170 кредитов');
//       break;
//     case "индия":
//       alert('Доставка в Индию будет стоить 80 кредитов');
//       break;
//     case "ямайка":
//       alert('Доставка в Ямайку будет стоить 120 кредитов');
//       break;
//     default:
//       alert('В вашей стране доставка не доступна')
//   }


  
let total = 0;
let promptNumber;




while (promptNumber!==null) {
   promptNumber =  prompt('Введите число');

  total = +promptNumber+total;
}

alert(total);