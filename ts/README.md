
# Ghi Chú TypeScript

TypeScript là JavaScript có thêm hệ thống kiểu dữ liệu tĩnh. Code TypeScript cuối cùng vẫn được biên dịch về JavaScript để chạy trên trình duyệt hoặc Node.js.

## 1. Nên Học TypeScript Sau Khi Nắm JavaScript

Trước khi học TypeScript, nên nắm các phần JavaScript sau:

- Biến: `const`, `let`
- Kiểu dữ liệu cơ bản
- Functionlet
- Array và object
- Destructuring, spread/rest
- DOM cơ bản
- Promise và `async/await`

## 2. TypeScript Giúp Gì?

- Báo lỗi sớm khi viết code.
- Giúp code dễ đọc hơn nhờ biết rõ kiểu dữ liệu.
- Gợi ý code tốt hơn trong editor.
- Giảm lỗi khi project lớn dần.

## 3. Ví Dụ Cơ Bản

```ts
let userName: string = "Vy";
let age: number = 20;
let isLearning: boolean = true;

function greet(name: string): string {
  return `Xin chào ${name}`;
}

console.log(greet(userName));
```

## 4. Tuple

Tuple dùng để khai báo mảng có số lượng phần tử và kiểu dữ liệu ở từng vị trí đã biết trước.

```ts
let user: [string, number] = ["Vy", 20];
```

- Tuple trong TypeScript thực chất vẫn là `Array` của JavaScript.
- Vì vậy, nó vẫn có các method như `push()`, `pop()`,...
- `push()` vẫn có thể thêm phần tử vào cuối mảng khi code chạy.
- Tuy nhiên, điều này làm tuple không còn đúng số lượng phần tử như lúc khai báo ban đầu.
- Trong thực tế, không nên dùng `push()` với tuple nếu muốn giữ dữ liệu đúng cấu trúc.

```ts
let point: [number, number] = [10, 20];

point.push(30); // vẫn chạy được ở runtime
console.log(point); // [10, 20, 30]
```

## 5. `type` Và `interface`

### `type` là gì?

`type` dùng để đặt tên cho một kiểu dữ liệu, giúp code ngắn gọn và dễ đọc hơn.

```ts
type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "Vy",
  age: 20
};
```

- `type` thường được dùng khi muốn tạo type alias.
- Nó không chỉ dùng cho object mà còn dùng cho union, tuple, primitive hoặc kiểu kết hợp phức tạp.

Ví dụ:

```ts
type Id = string | number;
type Point = [number, number];
```

### So Sánh `type` Và `interface`

| `type` | `interface` |
| --- | --- |
| ✅ Định nghĩa object | ✅ Định nghĩa object |
| ✅ Định nghĩa union như `string | number` | ❌ Không |
| ✅ Định nghĩa tuple như `[string, number]` | ❌ Không |
| ✅ Đổi tên kiểu dữ liệu (type alias) | ❌ Không |
| ❌ Không thể khai báo trùng tên | ✅ Có thể khai báo trùng tên (declaration merging) |
| ⚠️ Có thể mở rộng bằng `&` | ✅ Có thể mở rộng bằng `extends` |

Ghi nhớ nhanh:

- Dùng `interface` khi chủ yếu mô tả cấu trúc object.
- Dùng `type` khi cần union, tuple hoặc ghép nhiều kiểu dữ liệu linh hoạt hơn.

## 6. Type Alias

`type alias` là cách đặt một tên mới cho kiểu dữ liệu đã có sẵn hoặc cho một kiểu tự tạo. Mục đích là để code ngắn hơn, dễ đọc hơn và tái sử dụng được nhiều lần.

Ví dụ:

```ts
type StringOrNumber = string | number;
type AlbumList = (string | number)[];

type Guitarist = {
  name?: string;
  active: boolean;
  albums: AlbumList;
};
```

Ý nghĩa:

- `StringOrNumber` là alias cho kiểu `string | number`.
- `AlbumList` là alias cho mảng chứa `string` hoặc `number`.
- `Guitarist` là alias cho object mô tả một guitarist.

Lợi ích của `type alias`:

- Tránh viết lặp lại các kiểu dài.
- Dễ đổi tên và quản lý kiểu dữ liệu.
- Phù hợp với union type, tuple, object hoặc kiểu kết hợp phức tạp.

Ví dụ dùng lại:

```ts
type UserId = string | number;

let id1: UserId = "abc123";
let id2: UserId = 101;
```

## 7. Literal Types

`literal type` là kiểu chỉ cho phép đúng một giá trị cụ thể, không phải cả một nhóm giá trị.

Ví dụ:

```ts
let myName: "Vy";
myName = "Vy"; // đúng
// myName = "An"; // lỗi
```

Literal type cũng hay được kết hợp với union để giới hạn một biến chỉ nhận một vài giá trị xác định trước.

```ts
let userName: "Dave" | "John" | "Amy";

userName = "Dave"; // đúng
// userName = "Vy"; // lỗi
```

Khi nào nên dùng literal types:

- Khi muốn giới hạn chặt chẽ giá trị đầu vào.
- Khi biến chỉ nên nhận một số trạng thái cố định.
- Khi muốn thay thế các string "cứng" bằng kiểu an toàn hơn.

Ví dụ thực tế:

```ts
type Status = "loading" | "success" | "error";

let currentStatus: Status = "loading";
```

Với cách này, TypeScript sẽ báo lỗi ngay nếu gán sai như `"done"` hoặc `"finished"`.

## 8. `enum`

`enum` dùng để gom nhiều giá trị liên quan vào một nhóm có tên rõ ràng, giúp code dễ đọc hơn.

### Numeric Enum

Nếu không gán giá trị, TypeScript sẽ tự đánh số từ `0`.

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right
}

console.log(Direction.Up); // 0
console.log(Direction.Right); // 3
```

### String Enum

Có thể gán trực tiếp giá trị chuỗi để kết quả dễ đọc hơn.

```ts
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

console.log(Role.Admin); // "ADMIN"
```

### Khi Nào Dùng `enum`?

- Dùng khi có một nhóm giá trị cố định như trạng thái, vai trò, hướng di chuyển.
- Giúp tránh viết lặp nhiều string "cứng" trong code.
- Tên enum thường rõ nghĩa hơn so với việc dùng số hoặc chuỗi rời rạc.

Ví dụ:

```ts
enum Status {
  Pending,
  Success,
  Failed
}

const currentStatus: Status = Status.Success;
```

Lưu ý:

- `enum` là tính năng của TypeScript, không phải cú pháp gốc của JavaScript.
- Trong nhiều project hiện đại, người ta cũng hay dùng union type thay cho `enum` trong các trường hợp đơn giản.

## 9. Lesson 4: Function Types Và Type Narrowing

`LESSON_4` tập trung vào function trong TypeScript: khai báo kiểu cho tham số, kiểu trả về, type alias cho function, optional parameter, default parameter, rest parameter, `void`, `never` và kiểm tra kiểu dữ liệu.

### Khai báo kiểu cho function

TypeScript cho phép chỉ rõ kiểu dữ liệu của từng tham số và kiểu dữ liệu trả về.

```ts
const add = (a: number, b: number): number => {
  return a + b;
};
```

- `a` và `b` có kiểu `number`
- `: number` phía sau function là kiểu trả về
- Nếu truyền sai kiểu, TypeScript sẽ báo lỗi ngay

Ví dụ:

```ts
const logMsg = (message: any): void => {
  console.log(message);
};

logMsg(add(2, 3)); // 5
// logMsg(add(2, "3")); // lỗi
```

`void` nghĩa là hàm không trả về giá trị, chỉ thực hiện hành động như `console.log()`.

### Type Alias Cho Function

Có thể dùng `type` để đặt tên cho kiểu của một function.

```ts
type MathFunction = (a: number, b: number) => number;

let multiply: MathFunction = function (c, d) {
  return c * d;
};
```

Lợi ích:

- Giúp khai báo function ngắn gọn hơn
- Dễ tái sử dụng cho nhiều function có cùng cấu trúc
- Giúp code dễ đọc hơn khi project lớn

### Optional Parameter

Optional parameter là tham số có thể truyền hoặc không.

```ts
const addAll = (a: number, b: number, c?: number) => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};
```

- `c?: number` nghĩa là `c` có thể có hoặc không
- Khi dùng optional parameter, nên kiểm tra trước khi sử dụng

### Default Parameter

Default parameter là tham số có giá trị mặc định nếu khi gọi hàm không truyền vào.

```ts
const sumAll = (a: number, b: number, c = 2) => {
  return a + b + c;
};

sumAll(2, 3); // 7
sumAll(2, 3, 4); // 9
```

- Nếu không truyền `c`, TypeScript dùng giá trị mặc định là `2`

### Rest Parameter

Rest parameter dùng để nhận nhiều tham số còn lại và gom chúng thành một mảng.

```ts
const total = (a: number, ...nums: number[]) => {
  return nums.reduce((prev, curr) => prev + curr);
};

const total2 = (...nums: number[]) => {
  return nums.reduce((prev, curr) => prev + curr);
};
```

- `...nums: number[]` nghĩa là nhận nhiều giá trị kiểu `number`
- Các giá trị đó sẽ được gom vào mảng `nums`

Ví dụ:

```ts
total(1, 2, 3, 4); // 9
total2(1, 2, 3, 4); // 10
```

Trong `total(1, 2, 3, 4)`:

- `a = 1`
- `nums = [2, 3, 4]`

### `never`

`never` là kiểu dùng cho function không bao giờ trả về kết quả.

Ví dụ:

```ts
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};
```

Hàm trên không trả về giá trị vì nó dừng ngay tại `throw`.

`never` cũng thường xuất hiện trong các trường hợp:

- Ném lỗi (`throw`)
- Vòng lặp vô hạn
- Những nhánh code không thể xảy ra

### Type Narrowing

Type narrowing là quá trình thu hẹp kiểu dữ liệu để TypeScript biết chắc biến đang thuộc kiểu nào.

Ví dụ:

```ts
const isNumber = (value: any): boolean => {
  return typeof value === "number";
};

const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";
  return createError("This should never happen!");
};
```

Giải thích:

- `value` ban đầu có kiểu `number | string`
- `typeof value === "string"` giúp TypeScript biết nhánh đó là `string`
- Sau khi kiểm tra tiếp bằng `isNumber(value)`, TypeScript hiểu nhánh đó là `number`
- Nếu không rơi vào 2 trường hợp trên, ta dùng `never` để xử lý nhánh không thể xảy ra

### Tóm Tắt Lesson 4

- Biết khai báo kiểu cho tham số và kiểu trả về của function
- Biết dùng `void` cho hàm không trả về dữ liệu
- Biết tạo type alias cho function
- Biết dùng optional parameter và default parameter
- Biết dùng rest parameter để nhận nhiều đối số
- Hiểu `never` dùng cho những hàm không bao giờ trả về
- Hiểu type narrowing để kiểm tra và thu hẹp kiểu dữ liệu an toàn hơn

## 10. Lesson 5: Type Assertion Và DOM

`LESSON_5` tập trung vào `type assertion` và cách làm việc với DOM trong TypeScript. Đây là phần rất hay gặp khi lấy dữ liệu từ HTML hoặc khi TypeScript chưa tự suy luận đúng kiểu dữ liệu mà mình mong muốn.

### Type Assertion Là Gì?

`type assertion` là cách nói với TypeScript rằng: "hãy hiểu giá trị này theo kiểu dữ liệu mà tôi chỉ định".

Ví dụ:

```ts
type One = string;
type Two = string | number;
type Three = "hello";

let a: One = "hello";
let b = a as Two;
let c = a as Three;
let d = <One>"world";
```

Ý nghĩa:

- `a as Two`: ép từ kiểu cụ thể hơn sang kiểu rộng hơn
- `a as Three`: ép sang kiểu cụ thể hơn
- `<One>"world"` là một cách viết khác của `as`

Lưu ý:

- `type assertion` chỉ ảnh hưởng đến TypeScript khi kiểm tra kiểu
- Nó không chuyển đổi dữ liệu thật ở runtime

Ví dụ:

```ts
return "" + a + b;
```

Dòng trên mới là chuyển thật sang chuỗi, còn `as string` chỉ là ép kiểu ở mức kiểm tra type.

### Type Assertion Với Kết Quả Hàm

Khi một hàm trả về nhiều kiểu dữ liệu khác nhau, TypeScript có thể chỉ nhìn thấy kiểu tổng quát.

```ts
const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") {
    return a + b;
  }
  return "" + a + b;
};

let myVal: string = addOrConcat(2, 2, "concat") as string;
```

Trong ví dụ trên:

- Hàm trả về `number | string`
- Nhưng khi gọi với `"concat"`, mình biết kết quả thực tế là `string`
- Vì vậy có thể dùng `as string`

Tuy nhiên, cần cẩn thận vì ép kiểu sai vẫn có thể làm code logic bị lỗi.

### Double Assertion

TypeScript cho phép ép kiểu qua `unknown`.

```ts
(10 as unknown) as string;
```

Cách này gọi là `double assertion`.

Ý nghĩa:

- Bước 1: ép `10` sang `unknown`
- Bước 2: từ `unknown` ép tiếp sang `string`

Kiểu này thường chỉ nên dùng khi thật sự cần thiết, vì nó bỏ qua nhiều lớp kiểm tra an toàn của TypeScript.

### Type Assertion Với DOM

Khi làm việc với DOM, TypeScript thường chỉ biết một phần tử là `HTMLElement | null`. Nếu muốn dùng các thuộc tính riêng như `.src`, `.value`, `.href`, mình cần nói rõ phần tử đó là loại gì.

Ví dụ:

```ts
const myImg = document.getElementById("img") as HTMLImageElement;
myImg.src;
```

Ở đây:

- `getElementById()` chỉ trả về `HTMLElement | null`
- TypeScript không tự biết phần tử có id `"img"` là thẻ `<img>`
- Vì vậy cần ép sang `HTMLImageElement`

### `querySelector()` Và `getElementById()`

`querySelector()` đôi khi suy luận kiểu tốt hơn nếu selector đủ rõ.

```ts
const img = document.querySelector("img")!;
img.src;
```

Trong trường hợp này:

- `document.querySelector("img")` có thể được hiểu là phần tử ảnh
- Dấu `!` là non-null assertion, nghĩa là mình khẳng định phần tử này chắc chắn tồn tại

So sánh:

- `querySelector("img")`: thường suy luận tốt nếu chọn theo tên thẻ
- `getElementById("img")`: không biết chắc là thẻ gì, nên thường phải ép kiểu

### Non-Null Assertion

Dấu `!` sau một giá trị nghĩa là: "giá trị này không phải `null` hoặc `undefined`".

```ts
const img = document.querySelector("img")!;
```

Lưu ý:

- Cách này tiện nhưng nên dùng khi thật sự chắc chắn phần tử tồn tại
- Nếu phần tử không có trong HTML thì lúc chạy vẫn có thể lỗi

### Ví Dụ DOM Thực Tế

Trong file `copyright.ts`, bài học dùng TypeScript để cập nhật năm hiện tại vào HTML:

```ts
const year = document.getElementById("year") as HTMLSpanElement;
const thisYear = new Date().getFullYear().toString();

year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
```

Ý nghĩa:

- Lấy phần tử có id là `year`
- Ép kiểu sang `HTMLSpanElement`
- Gán năm hiện tại vào thuộc tính `datetime`
- Đồng thời hiển thị năm đó ra giao diện

### Khi Nào Nên Dùng Type Assertion?

- Khi TypeScript chưa suy luận đúng kiểu dữ liệu
- Khi làm việc với DOM và biết rõ phần tử là loại gì
- Khi xử lý dữ liệu mà mình chắc chắn kiểu thực tế của nó

Không nên lạm dụng:

- Vì ép kiểu sai có thể làm mất lợi ích kiểm tra lỗi của TypeScript
- Nên ưu tiên để TypeScript tự suy luận nếu có thể

### Tóm Tắt Lesson 5

- Hiểu `type assertion` là ép kiểu cho TypeScript, không phải ép kiểu thật ở runtime
- Biết 2 cách viết: `as Type` và `<Type>`
- Biết dùng `double assertion` qua `unknown`
- Biết ép kiểu khi làm việc với DOM
- Hiểu sự khác nhau giữa `querySelector()` và `getElementById()`
- Biết dùng non-null assertion `!` khi chắc chắn phần tử tồn tại

## 11. Lộ Trình Học TypeScript

1. Type annotation
2. Type inference
3. Array, tuple và object type
4. Union type và literal type
5. Type alias và interface
6. Function type
7. Optional property và readonly
8. Generic
9. Type narrowing
10. TypeScript với DOM
