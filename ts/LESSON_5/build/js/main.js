//type assertion: ép kiểu dữ liệu, giúp TypeScript hiểu rõ hơn về kiểu dữ liệu của một giá trị
//convert to more or less specific
let a = 'hello'; // biến a kiểu  one (string)
let b = a; // less specific
let c = a; // more specific
let d = 'world'; // let d = 'world' as One;
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    // return a as One + b as One; Lỗi. do as không chuyển kiểu thật sự 
    return '' + a + b; // nếu một toán hạng là string thì thành phép nối chuỗi
};
let myVal = addOrConcat(2, 2, 'concat'); // nếu không có as: ts chỉ nhìn kiểu 
// khai báo chứ không biết là concat sẽ trả về string 
// ts không thấy problem nhưng thực tế đang trả về string 
let nextVal = addOrConcat(2, 2, 'concat');
10; // double asserttion
// Ép 10 sang unknow . ts cho phép chuyển mọi kiểu sang unknow
//unkonw -> string  : ts cho phép từ unknown sang bất kì kiểu nào
//the DOM
// querySelector(): khi truyền tên thẻ HTML ('img', 'input', 'button',...),
// TypeScript tự suy luận kiểu phần tử tương ứng.
// 'img' -> HTMLImageElement nên có thể dùng .src mà không cần ép kiểu.
const img = document.querySelector('img'); //querySelector: tìm phần tử đầu tiên trong DOM bằng CSS selector
// getElementById(): chỉ trả về HTMLElement | null,
// vì TypeScript không biết id="img" là thẻ <img>, <div> hay thẻ khác.
// Cần ép kiểu sang HTMLImageElement để sử dụng thuộc tính .src.
const myImg = document.getElementById('img'); //!: Non null
const nextImg = document.getElementById('img'); // Ít dùng do trong file tsx, trình biên dịch
// có thể hiểu <HTMLImageElement> là một thẻ JSX thay vì type assertion
img.src;
myImg.src;
export {};
//# sourceMappingURL=main.js.map