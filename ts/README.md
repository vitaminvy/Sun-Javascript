
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

## 6. `enum`

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

## 7. Lộ Trình Học TypeScript

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
