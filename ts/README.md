# Ghi Chú TypeScript

TypeScript là JavaScript có thêm hệ thống kiểu dữ liệu tĩnh. Code TypeScript cuối cùng vẫn được biên dịch về JavaScript để chạy trên trình duyệt hoặc Node.js.

## 1. Nên Học TypeScript Sau Khi Nắm JavaScript

Trước khi học TypeScript, nên nắm các phần JavaScript sau:

- Biến: `const`, `let`
- Kiểu dữ liệu cơ bản
- Function
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

## 4. Lộ Trình Học TypeScript

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
