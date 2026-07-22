# Ghi Chú JavaScript Cơ Bản

## 1. Cách Nhúng JavaScript Vào HTML

- JavaScript có thể đặt trong thẻ `<script>` ở phần `<head>` hoặc `<body>`.
- Nên đặt `<script>` ở cuối thẻ `<body>` để HTML hiển thị trước, sau đó JavaScript mới chạy.
- Nếu đặt script ở đầu trang, trình duyệt có thể phải dừng render HTML để tải và thực thi JavaScript.
- Function thường được gọi khi có sự kiện xảy ra, ví dụ: click button, submit form, nhập input.

Ví dụ lấy phần tử HTML theo `id`:

```js
document.getElementById("demo");
```

`getElementById()` dùng để lấy một phần tử HTML dựa trên `id`.

## 2. JavaScript Output

JavaScript có nhiều cách hiển thị dữ liệu:

- `innerHTML`: hiển thị nội dung vào phần tử HTML, có thể render cả thẻ HTML.
- `innerText`: chỉ hiển thị văn bản, không render HTML.
- `document.write()`: ghi trực tiếp vào trang web. Nếu gọi sau khi trang đã tải xong, nó có thể ghi đè toàn bộ nội dung trang. Chỉ nên dùng để test.
- `window.alert()`: hiển thị hộp thoại popup.
- `console.log()`: in dữ liệu ra Console, thường dùng để debug.
- `window.print()`: mở hộp thoại in trang hiện tại.

JavaScript không có lệnh `print()` giống một số ngôn ngữ khác.

![Ví dụ innerHTML](image/README/1784618235864.png)

![Ví dụ output](image/README/1784618265577.png)

![Ví dụ document write](image/.MD/1784618289989.png)

![Ví dụ alert](image/.MD/1784618297466.png)

## 3. Giá Trị, Biến Và Scope

### Giá Trị

- Literal là giá trị cố định được viết trực tiếp trong code, ví dụ: `10`, `3.14`, `"Hello"`, `true`.
- JavaScript chỉ có một kiểu `number` cho cả số nguyên và số thực.

### Khai Báo Biến

| Khai báo | Global scope                    | Function scope | Block scope | Khai báo lại cùng scope |
| --------- | ------------------------------- | -------------- | ----------- | -------------------------- |
| `var`   | Có, nếu khai báo ngoài hàm | Có            | Không      | Có                        |
| `let`   | Có, nếu khai báo ngoài hàm | Có            | Có         | Không                     |
| `const` | Có, nếu khai báo ngoài hàm | Có            | Có         | Không                     |

- Nên ưu tiên `const`.
- Dùng `let` khi cần gán lại giá trị.
- Hạn chế dùng `var` vì dễ gây lỗi liên quan tới scope và hoisting.
- Tên biến bắt đầu bằng dấu `_`, ví dụ `_name`, thường được dùng như quy ước để chỉ biến "private", nhưng JavaScript không tự động biến nó thành private thật.

### Hoisting

Hoisting là cơ chế JavaScript đưa phần khai báo lên đầu scope trước khi thực thi code.

- `var` được hoisting và được khởi tạo với giá trị `undefined`.
- `let` và `const` cũng được hoisting, nhưng nằm trong Temporal Dead Zone nên không thể dùng trước dòng khai báo.
- `const` không thể trỏ sang giá trị khác, nhưng nếu giá trị là object hoặc array thì vẫn có thể sửa nội dung bên trong.

```js
const user = { name: "Vy" };
user.name = "An"; // hợp lệ

// user = {}; // lỗi vì const không được gán lại
```

## 4. Kiểu Dữ Liệu

`typeof` dùng để kiểm tra kiểu dữ liệu:

```js
typeof "Hello"; // "string"
typeof 10; // "number"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof {}; // "object"
typeof []; // "object"
typeof null; // "object"
```

Một số lưu ý quan trọng:

- `typeof []` trả về `"object"` vì array là object đặc biệt.
- `typeof null` trả về `"object"` là một điểm đặc biệt lịch sử của JavaScript.
- Nên dùng `Array.isArray(value)` để kiểm tra array.

## 5. Ép Kiểu, Truthy Và Falsy

### Ép Kiểu

- `Number("123")` trả về `123`.
- `Number("")` trả về `0`.
- `Number("abc")` trả về `NaN`.
- `String(123)` trả về `"123"`.
- `Boolean(0)` trả về `false`.
- `Boolean("0")` trả về `true`.

Nên ép kiểu rõ ràng để code dễ đọc và dễ đoán hơn.

### Truthy Và Falsy

Các giá trị falsy trong JavaScript:

- `false`
- `0`
- `-0`
- `0n`
- `""`
- `null`
- `undefined`
- `NaN`

Mọi giá trị còn lại là truthy, kể cả `[]`, `{}` và `"false"`.

## 6. Toán Tử

### Toán Tử Trong Object Literal

Dấu `:` dùng để khai báo thuộc tính và giá trị trong object:

```js
const user = {
  name: "Vy",
  age: 20
};
```

### Logical Assignment Operators

- `&&=`: chỉ gán khi biến hiện tại là truthy.
- `||=`: chỉ gán khi biến hiện tại là falsy.
- `??=`: chỉ gán khi biến hiện tại là `null` hoặc `undefined`.

`??=` thường an toàn hơn `||=` khi bạn muốn giữ lại các giá trị hợp lệ như `0`, `false` hoặc `""`.

```js
let count = 0;
count ||= 10; // count thành 10

let total = 0;
total ??= 10; // total vẫn là 0
```

### Nullish Coalescing

`??` trả về toán hạng bên phải nếu toán hạng bên trái là `null` hoặc `undefined`.

```js
const name = userName ?? "Guest";
```

## 7. So Sánh

- `==` so sánh có ép kiểu.
- `===` so sánh không ép kiểu, kiểm tra cả giá trị và kiểu dữ liệu.
- Nên ưu tiên `===` và `!==` để tránh bug khó đoán.
- So sánh với `NaN` luôn trả về `false`, kể cả `NaN === NaN`.
- Muốn kiểm tra `NaN`, dùng `Number.isNaN(value)`.
- So sánh giữa hai object khác tham chiếu luôn trả về `false`.

Ví dụ:

```js
0 == false; // true
0 === false; // false
null == undefined; // true
null === undefined; // false
NaN === NaN; // false
```

Khi so sánh lớn hơn hoặc nhỏ hơn:

- Nếu có ít nhất một toán hạng là số, JavaScript thường cố ép chuỗi sang số.
- Nếu cả hai toán hạng là chuỗi, JavaScript so sánh theo thứ tự Unicode.
- `"John" > 5` trở thành `NaN > 5`, kết quả là `false`.

## 8. Điều Kiện

Trong `if`, JavaScript kiểm tra giá trị theo truthy/falsy:

```js
if (value) {
  console.log("value là truthy");
}
```

Trong `switch`, `default` không bắt buộc phải nằm cuối, nhưng đặt cuối thường dễ đọc hơn.

## 9. String

### Escape Characters

| Escape     | Kết quả                       | Ý nghĩa                            |
| ---------- | ------------------------------- | ------------------------------------ |
| `\'`     | `'`                           | Dấu nháy đơn                     |
| `\"`     | `"`                           | Dấu nháy kép                      |
| `\\`     | `\`                           | Dấu gạch chéo ngược             |
| `\n`     | Xuống dòng                    | New line                             |
| `\r`     | Về đầu dòng                 | Carriage return                      |
| `\t`     | Tab                             | Horizontal tab                       |
| `\b`     | Xóa 1 ký tự trước con trỏ | Backspace                            |
| `\f`     | Form feed                       | Sang trang, hiếm dùng              |
| `\v`     | Vertical tab                    | Tab dọc, ít dùng                  |
| `\0`     | Ký tự NULL                    | Null character                       |
| ``\` ``    | `` ` ``                         | Dấu backtick trong template literal |
| `\uXXXX` | Ký tự Unicode                 | Ví dụ:`\u2764`                   |
| `\xXX`   | Ký tự theo mã Hex            | Ví dụ:`\x41` là `A`           |

### String Methods Hay Gặp

- `at(position)`: lấy ký tự theo vị trí, hỗ trợ chỉ số âm.
- `charAt(position)`: lấy ký tự theo vị trí, không hỗ trợ chỉ số âm.
- `charCodeAt(position)`: trả về mã Unicode của ký tự.
- `str[index]`: truy cập như array, không hỗ trợ chỉ số âm.

```js
const text = "Hello";

text.at(-1); // "o"
text.charAt(1); // "e"
text[0]; // "H"
```

### Regex Cơ Bản

```js
let re = /\w+/g;
```

- Đây là một regular expression dùng để tìm các chuỗi gồm ký tự chữ, số hoặc dấu gạch dưới.
- `\w` khớp với một ký tự thuộc nhóm `[A-Za-z0-9_]`.
- Dấu `+` nghĩa là khớp một hoặc nhiều ký tự `\w` liên tiếp.
- Cờ `g` là `global`, giúp tìm tất cả kết quả phù hợp trong chuỗi thay vì dừng ở kết quả đầu tiên.

Ví dụ:

```js
const text = "Hello_123 !!! JS";
const matches = text.match(/\w+/g);

console.log(matches); // ["Hello_123", "JS"]
```

## 10. Array

- Array trong JavaScript là object đặc biệt.
- Dùng `Array.isArray(value)` để kiểm tra một giá trị có phải array không.
- `push()` thêm phần tử vào cuối array.
- `pop()` xóa phần tử cuối array.
- `shift()` xóa phần tử đầu array.
- `unshift()` thêm phần tử vào đầu array.
- `shift()` và `unshift()` thường chậm hơn vì phải dời lại vị trí nhiều phần tử.

Các method quan trọng:

- `map()`: biến đổi từng phần tử và trả về array mới.
- `filter()`: lọc phần tử theo điều kiện.
- `find()`: tìm phần tử đầu tiên thỏa điều kiện.
- `some()`: kiểm tra có ít nhất một phần tử thỏa điều kiện không.
- `every()`: kiểm tra tất cả phần tử có thỏa điều kiện không.
- `reduce()`: gom array thành một giá trị.

```js
const numbers = [1, 2, 3];

const doubled = numbers.map((number) => number * 2);
const evenNumbers = numbers.filter((number) => number % 2 === 0);
```

Dùng `for...of` để duyệt giá trị trong array:

```js
for (const number of numbers) {
  console.log(number);
}
```

## 11. Object

- Object lưu dữ liệu theo cặp `key: value`.
- Truy cập thuộc tính bằng dấu chấm: `obj.name`.
- Truy cập thuộc tính bằng ngoặc vuông: `obj["name"]`.
- Dùng ngoặc vuông khi key được tạo động hoặc key có ký tự đặc biệt.

```js
const user = {
  name: "Vy",
  age: 20
};

user.name;
user["age"];
```

Object và array là kiểu tham chiếu. Nếu hai biến cùng trỏ tới một object, sửa qua một biến sẽ ảnh hưởng biến còn lại.

Copy nông:

```js
const userCopy = { ...user };
const numbersCopy = [...numbers];
```

Spread chỉ copy một tầng. Nếu object có object con bên trong, object con vẫn dùng chung tham chiếu.

## 12. Destructuring, Spread Và Rest

Destructuring giúp lấy dữ liệu nhanh:

```js
const user = { name: "Vy", age: 20 };
const { name, age } = user;
```

Spread dùng để sao chép hoặc gộp:

```js
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
```

Rest dùng để gom phần còn lại:

```js
const [first, ...rest] = [1, 2, 3];
```

## 13. Function

- Function declaration được hoisting đầy đủ.
- Function expression chỉ dùng được sau khi biến chứa function đã được khởi tạo.
- Function có thể nhận parameter mặc định.

```js
function greet(name = "bạn") {
  return `Hello ${name}`;
}
```

Arrow function:

- Viết gọn hơn function thường.
- Không có `this` riêng.
- Không dùng làm constructor với `new`.

```js
const sum = (a, b) => a + b;
```

## 14. `this`

`this` không phụ thuộc nơi function được khai báo, mà phụ thuộc cách function được gọi.

Trong method, `this` thường là object đứng trước dấu chấm:

```js
const user = {
  name: "Vy",
  sayHi() {
    console.log(this.name);
  }
};

user.sayHi(); // "Vy"
```

Arrow function không có `this` riêng. Nó lấy `this` từ scope bên ngoài.

Trong DOM event handler:

- Function thường có `this` là phần tử đang bắt event.
- Arrow function không tự có `this`, nên cần dùng `event.currentTarget` nếu muốn lấy phần tử đang xử lý event.

## 15. Scope Và Closure

JavaScript dùng lexical scope: function bên trong có thể truy cập biến ở scope bên ngoài.

Closure xảy ra khi function bên trong "nhớ" được biến của function bên ngoài, kể cả sau khi function bên ngoài đã chạy xong.

```js
function outer() {
  let count = 0;

  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
```

Closure rất quan trọng khi học callback, event, async và module pattern.

## 16. Optional Chaining

`?.` giúp tránh lỗi khi thuộc tính trung gian là `null` hoặc `undefined`.

```js
const city = user?.address?.city;
```

Optional chaining rất hữu ích khi đọc dữ liệu từ API vì dữ liệu có thể thiếu một số field.

## 17. Bắt Lỗi

Dùng `try...catch` để bắt lỗi runtime:

```js
try {
  JSON.parse("abc");
} catch (error) {
  console.log(error.message);
}
```

Có thể chủ động ném lỗi:

```js
throw new Error("Có lỗi xảy ra");
```

## 18. JSON

JSON là định dạng chuỗi dữ liệu, thường dùng khi làm việc với API.

- `JSON.stringify(object)`: chuyển object thành chuỗi JSON.
- `JSON.parse(jsonString)`: chuyển chuỗi JSON thành object.
- JSON không cho phép comment.
- JSON không cho phép function.
- JSON không cho phép dấu phẩy thừa ở cuối.

```js
const user = { name: "Vy", age: 20 };
const json = JSON.stringify(user);
const parsedUser = JSON.parse(json);
```

## 19. DOM Và Event

- `querySelector()`: lấy phần tử đầu tiên khớp CSS selector.
- `querySelectorAll()`: lấy tất cả phần tử khớp CSS selector, trả về `NodeList`.
- `addEventListener()`: cách nên dùng để gắn sự kiện.

```js
const button = document.querySelector("button");

button.addEventListener("click", function () {
  console.log("clicked");
});
```

Các event hay gặp:

- `click`: khi click.
- `input`: khi giá trị input thay đổi ngay lúc nhập.
- `change`: khi giá trị thay đổi và người dùng hoàn tất thao tác.
- `submit`: khi submit form.
- `keydown`: khi nhấn phím.

Trong form, thường dùng `event.preventDefault()` để chặn reload trang:

```js
form.addEventListener("submit", function (event) {
  event.preventDefault();
});
```

## 20. Event Bubbling

Event thường nổi bọt từ phần tử con lên phần tử cha.

- Dùng `event.stopPropagation()` nếu muốn chặn nổi bọt.
- Event delegation là kỹ thuật gắn một listener ở phần tử cha để xử lý nhiều phần tử con.

Ví dụ event delegation:

```js
list.addEventListener("click", function (event) {
  if (event.target.matches(".item")) {
    console.log(event.target.textContent);
  }
});
```

## 21. Asynchronous JavaScript

JavaScript chạy đơn luồng, nhưng có thể xử lý bất đồng bộ.

Thứ tự nên học:

1. Callback
2. Promise
3. `async/await`

Promise có 3 trạng thái:

- `pending`: đang chờ.
- `fulfilled`: thành công.
- `rejected`: thất bại.

```js
fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

## 22. `async/await`

- `async` làm function luôn trả về Promise.
- `await` dùng để chờ Promise hoàn thành.
- `await` chỉ dùng được bên trong `async function`.

```js
async function loadData() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

## 23. Event Loop

Event loop là phần rất quan trọng để hiểu bất đồng bộ trong JavaScript.

```js
console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

console.log(3);
```

Kết quả:

```txt
1
3
2
```

Callback của `setTimeout` được đưa vào hàng đợi nên không chạy ngay lập tức.

## 24. Prototype

- Gần như mọi object trong JavaScript đều liên kết tới một prototype.
- JavaScript kế thừa thông qua prototype.
- Khi truy cập một thuộc tính, JavaScript tìm trong object trước. Nếu không có, nó tiếp tục tìm lên prototype.
- Hiểu prototype sẽ giúp học `class` dễ hơn.

## 25. Class

`class` trong JavaScript chủ yếu là cú pháp dễ đọc hơn trên nền prototype.

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`Hi, ${this.name}`);
  }
}

const person = new Person("Vy");
person.sayHi();
```

- Dùng `extends` để kế thừa.
- Dùng `super()` để gọi constructor của class cha.
