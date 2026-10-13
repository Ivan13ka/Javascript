// const age = 13;
// const name = 'Іванка';
// console.log(age);
// console.log(name);

// const isStudent = confirm('are you student?');
// console.log(isStudent);
// console.log(typeof isStudent);

// if(isStudent) {
//     Boolean = true;
// } else {
//     Boolean = false;
// }

// const myString = "'Що розум людини може осягнути і в що він може повірити, те він здатний досягти'";
// console.log(myString);

// const myNumber = Number(prompt('напиши число:'));
// const answer = myNumber + 10;
// console.log(answer);

// const myNull = null;
// console.log(myNull);

// const myName = prompt('Введіть своє ім’я:');
// console.log(myName);
// console.log(typeof myName);

// const userAnswer = confirm('Ви дійсно хочете покинути сторінку?');
// console.log(userAnswer);

// window.alert('Увага! Дія може бути небезпечною.');
// const sure = confirm('Ви впевнені, що хочете продовжити?');
// console.log(sure);

// 1. Переведення температури з Цельсія у Фаренгейт
// let celsius = 25;
// let fahrenheit = (celsius * 9 / 5) + 32;
// console.log(fahrenheit);

// // 2. Кількість годин і хвилин у місяці
// let daysInMonth = 30;
// let hoursInMonth = daysInMonth * 24;
// let minutesInMonth = hoursInMonth * 60;
// console.log(hoursInMonth);
// console.log(minutesInMonth);

// let health = 100;
// let energy = 100;
// health -= 20;
// energy -= 15;
// console.log(health);
// console.log(energy);

// let totalPrice = 200;
// let discount = 10;
// let discountedPrice = totalPrice - (totalPrice * discount / 100);
// console.log(discountedPrice);

// const floatNumber = 12.78;
// let roundedDown = Math.floor(floatNumber);
// console.log(roundedDown);

// const floatString = "45.67";
// let parsedFloat = parseFloat(floatString);
// console.log(parsedFloat);

// const intString = "123";
// let parsedInt = parseInt(intString);
// console.log(parsedInt);


//homework3 

// 1. Перевірити тип змінної result let result = 5 + 5 + '5'; console.log(result);
// 2. Перевірити email let email = 'example@gmail.com';

// console.log(email.includes('@')); console.log(email.length);
// 3. Об'єднати слова в fullName let firstName = 'My'; let lastName = 'name'; let thirdName = 'is';


// let fullName = firstName + ' ' + lastName + ' ' + thirdName; fullName += ' Viktor';
// console.log(fullName);
// 4. Повідомлення про оплату let userName = 'Олександр'; let payment = 300;
// alert(Дякуємо, ${userName}! До сплати ${payment} гривень);


// homework4

// 1. Перевірка текстових полів
let field1 = "Hello";
let field2 = "World";

if (field1 !== "" && field2 !== "") {
    console.log("Обидва поля заповнені");
} else {
    console.log("Не всі поля заповнені");
}

// 2. Сума двох чисел
let num1 = 7;
let num2 = 5;
let sum = num1 + num2;

if (sum > 10) {
    console.log("Сума більша за 10");
} else {
    console.log("Сума менша або дорівнює 10");
}

// 3. Перевірка наявності слова JavaScript
let text = "Я вивчаю JavaScript";

if (text.includes("JavaScript")) {
    console.log("Текст містить слово JavaScript");
} else {
    console.log("Текст не містить слово JavaScript");
}

// 4. Перевірка числа
let number = 15;

if (number > 10 && number < 20) {
    console.log("Число входить в діапазон від 10 до 20");
} else {
    console.log("Число не входить в діапазон від 10 до 20");
}

// 5. Перевірка даних користувача
let name = "Ivanka";
let email = "ivanka@gmail.com";
let password = "123456";

if (
    name.length >= 3 &&
    email.includes("@") &&
    password.length >= 6
) {
    console.log("Перенаправлення на іншу сторінку");
} else {
    console.log("Помилка: неправильне заповнення");
}