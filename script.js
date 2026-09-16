const age = 13;
const name = 'Іванка';
console.log(age);
console.log(name);

const isStudent = confirm('are you student?');
console.log(isStudent);
console.log(typeof isStudent);

if(isStudent) {
    Boolean = true;
} else {
    Boolean = false;
}

const myString = "'Що розум людини може осягнути і в що він може повірити, те він здатний досягти'";
console.log(myString);

const myNumber = Number(prompt('напиши число:'));
const answer = myNumber + 10;
console.log(answer);

const myNull = null;
console.log(myNull);

const myName = prompt('Введіть своє ім’я:');
console.log(myName);
console.log(typeof myName);

const userAnswer = confirm('Ви дійсно хочете покинути сторінку?');
console.log(userAnswer);

window.alert('Увага! Дія може бути небезпечною.');
const sure = confirm('Ви впевнені, що хочете продовжити?');
console.log(sure);