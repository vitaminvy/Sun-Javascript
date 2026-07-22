"use strict";

// Demo này đi kèm file .MD: mở Console trong trình duyệt để xem kết quả.

const demoElement = document.getElementById("demo");
demoElement.innerHTML = "<strong>JavaScript đã chạy từ file demo.js</strong>";

console.log("===== 1. Biến, kiểu dữ liệu và typeof =====");

const userName = "Vy";
let score = 0;
const isLearning = true;

console.log(typeof userName); // "string"
console.log(typeof score); // "number"
console.log(typeof isLearning); // "boolean"
console.log(typeof null); // "object" - điểm đặc biệt của JS
console.log(Array.isArray([])); // true

console.log("===== 2. Truthy, falsy và so sánh =====");

console.log(0 == false); // true, vì == có ép kiểu
console.log(0 === false); // false, vì === không ép kiểu
console.log(Number.isNaN(NaN)); // true

if ("false") {
  console.log('Chuỗi "false" là truthy');
}

console.log("===== 3. Toán tử ??, ||= và ??= =====");

let displayName;
displayName ??= "Guest";
console.log(displayName); // "Guest"

let total = 0;
total ||= 10;
console.log(total); // 10, vì 0 là falsy

let quantity = 0;
quantity ??= 10;
console.log(quantity); // 0, vì 0 không phải null hoặc undefined

console.log("===== 4. String =====");

const text = "Hello World";

console.log(text.at(-1)); // "d"
console.log(text.charAt(0)); // "H"
console.log(text.charCodeAt(0)); // 72
console.log(text[3]); // "l"

console.log("===== 5. Array =====");

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((number) => number * 2);
const evenNumbers = numbers.filter((number) => number % 2 === 0);
const sum = numbers.reduce((totalNumber, number) => totalNumber + number, 0);

console.log(doubledNumbers); // [2, 4, 6, 8, 10]
console.log(evenNumbers); // [2, 4]
console.log(sum); // 15

for (const number of numbers) {
  console.log(`Số hiện tại: ${number}`);
}

console.log("===== 6. Object, destructuring và spread =====");

const user = {
  name: "Vy",
  age: 20,
  address: {
    city: "Ho Chi Minh"
  }
};

const { name, age } = user;
const copiedUser = { ...user, job: "JavaScript learner" };

console.log(name, age);
console.log(copiedUser);
console.log(user?.address?.city); // optional chaining

console.log("===== 7. Function, arrow function và this =====");

function greet(nameValue = "bạn") {
  return `Xin chào ${nameValue}`;
}

const multiply = (a, b) => a * b;

console.log(greet("Vy"));
console.log(multiply(3, 4));

const student = {
  name: "Vy",
  sayHi() {
    console.log(`Mình là ${this.name}`);
  }
};

student.sayHi();

console.log("===== 8. Closure =====");

function createCounter() {
  let count = 0;

  return function increase() {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2

console.log("===== 9. DOM event =====");

const button = document.getElementById("changeTextButton");

button.addEventListener("click", function (event) {
  event.preventDefault();
  demoElement.innerText = "Bạn vừa click button bằng addEventListener!";
  console.log(event.currentTarget.textContent);
});

console.log("===== 10. try...catch, Promise và async/await =====");

try {
  JSON.parse("abc");
} catch (error) {
  console.log(`Bắt được lỗi JSON: ${error.message}`);
}

function waitOneSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise đã hoàn thành sau 1 giây");
    }, 1000);
  });
}

async function runAsyncDemo() {
  const message = await waitOneSecond();
  console.log(message);
}

runAsyncDemo();

console.log("===== 11. Event loop =====");
console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

console.log(3);
