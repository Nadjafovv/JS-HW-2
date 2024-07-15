//task 1

// const ageprompt = prompt('Введите возраст свой пожалуйста')
// const age = Number(ageprompt);

// if(isNaN(age)){
//     alert('нет, возраст');
// }
// else if(age <= 2){
//     alert('ребенок');
// }
// else if(age <= 12){
//     alert('тинейджер, йооууу круто скейтеррр');
// }
// else if(age <= 18){
//     alert('пост старик');
// }
// else if(age <= 60){
//     alert('стариккк');
// }
// else if(age > 120){
//     alert('Японский мудрец -.-');
// }

//task 2


// let number = prompt('Enter the number from 0 to 9', 0);
//     switch(number) {
//         case '0':
//             console.log('0 is )');
//             break;
//         case '1':
//             console.log('1 is !');
//             break;
//         case '2':
//             console.log('2 is @');
//             break;
//         case '3':
//             console.log('3 is #');
//             break;
//         case '4':
//             console.log('4 is $');
//             break;
//         case '5':
//             console.log('5 is %');
//             break;
//         case '6':
//             console.log('6 is ^');
//             break;
//         case '7':
//             console.log('7 is &');
//             break;
//         case '8':
//             console.log('8 is *');
//             break;
//         case '9':
//             console.log('9 is (');
//             break;
//     }

//task 4

// const year = +prompt('Enter any year', 0)

// if (year%4 == 0 && year%100 !== 0) {
//     alert('Leap year')
// } else{
//     alert('not leap year')
// }

//task 6

// const amount = +prompt('Введите сумму', 0)
// const currency = prompt('EUR = 1, UAH = 2, AZN = 3')

// switch (currency) {
//     case '1':
//         console.log(amount * 0.92 + "€");
//         break;
//     case '2':
//         console.log(amount * 40.90 + "₴");
//         break;
//     case '3':
//         console.log(amount * 1.70 + "₼");
//         break;

// }

//task 7 

// let amount = +prompt('Enter the value of purchase:');
//     if (amount >=200 && amount < 300)
//         alert(amount/100*97 + '$ with 3% discount');
//     else if (amount >=300 && amount < 500)
//         alert(amount/100*95 + '$ with 5% discount');
//     else if (amount >=500)
//         alert(amount/100*93 + '$ with 7% discount');

//task 9 
    // const first = prompt('Наполеон в послании французам заменил слово «братство» на другое. Какое слово согрело душу миллионам французов? 1 - собственность 2 - он не менял 3 - содружество');
    // const second = prompt('«Цивилизация зародилась, когда человек вместо камня бросил…» Закончите афоризм Зигмунда Фрейда. 1 - палку 2 - мысль 3 - слово');
    // const third = prompt('Какое блюдо в Аргентине символизировало изобилие? 1 - свинина 2 - курятина 3 - говядина');
    // const score = 0;

    // if (first == 1)
    //     score += 2;
    // if (second == 1)
    //     score += 2;
    // if (third == 3)
    //     score += 2;
    // alert('Your score is ' + score);