/**
 * const.let
 */

// var val = "変数";
// console.log(val);

// // var変数は上書き可能

// val = 3;
// console.log(val);

// var val = "val再宣言";
// console.log(val);

// let val2 = "変数";
// console.log(val2);

// val2 = "変数2";
// console.log(val2);

// let val2 = "変数3";
// console.log(val2);

// const val4 = {
//   name: "だれか",
//   age: 28
// };
// console.log(val4);

// val4.name = "abc";
// val4.address = "new york";
// console.log(val4);

// const val5 = ['dog', 'cat'];
// console.log(val5);
// val5[0] = 'bird';
// val5.push('added kirin');

// const name = "jakee";
// const age = 28;

// const message1 = "my name is " + "jakee";
// // console.log(message1);

// const message2 = `my name is ${name}`;
// console.log(message2);

/**
 * アロー関数
 */
// function func1(str) {
//   return str;
// }

// const func2 = function (str) {
//   return str;
// };

// // console.log(func2("test"));

// const func3 = () => "kk";

// const func4 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func4(1, 3));

/**
 * 分割代入
 */

// const myProfile = {
//   name: "jakee",
//   age: 33
// };
// const message1 = `my name is ${myProfile.name}. age is ${myProfile.age}`;
// console.log(message1);

// const {n, age} = myProfile;
// const message2 = `name ${n}, age ${age}`;
// console.log(message2);

// const myProfile2 = ["jakee", 29];
// const [name, age] = myProfile2;
// const message1 = `name: ${name}, age: ${age}`;
// console.log(message1);

/**
 * デフォルト
//  */
// const sayHello = (name = 'guest') => console.log(name);

// sayHello('test');

/**
 * spread 構文
 */

// const array = [1, 2];
// // console.log(array);
// // console.log(...array);

// const sum = (num1, num2) => num1 + num2;
// // console.log(sum(...array));

// // まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...remain] = arr2;
// // console.log(remain);

// // copy array
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// // console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// // console.log(arr7);

// const arr8 = arr4;
// arr4[1] = 50;
// console.log(arr8);

/**
 * map & filter
 */
// const nameArr = ["self", "adam", "Bob"];

// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// nameArr.map((name, i) => {
//   console.log(`${i + 1} is ${name}`);
// });

// nameArr.map((name) => console.log(name));

// console.log(nameArr);
// console.log(nameArr2);

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const nameArr2 = nameArr.map((name) => {
//   return name === "self" ? name : `${name} san`;
// });

// console.log(nameArr2);

/**
 *
 */

// const num = 1300;
// const formatedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formatedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "over 100" : "in range";
// };
// console.log(checkSum(1, 99));

// const flag1 = null;
// const flag2 = false;
// console.log(flag1 && flag2);

// const num = 0;
// const fee = num || "金額未設定です";
// // console.log(fee);

// const num2 = null;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
