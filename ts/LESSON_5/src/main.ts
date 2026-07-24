type One = string; // one là tên khác của kiểu string
type Two = string | number;
type Three = 'hello';

//type assertion: ép kiểu dữ liệu, giúp TypeScript hiểu rõ hơn về kiểu dữ liệu của một giá trị
//convert to more or less specific
let a: One = 'hello'; // biến a kiểu  one (string)
let b = a as Two; // less specific
let c = a as Three; // more specific
let d = <One>'world'; // let d = 'world' as One;
let e = <string|number>'world'; 

const addOrConcat = (a: number, b:number, c:'add' | 'concat'): number | string => {
    if (c === 'add'){
        return a + b
    }
    // return a as One + b as One; Lỗi. do as không chuyển kiểu thật sự 
    return '' + a + b; // nếu một toán hạng là string thì thành phép nối chuỗi

}
let myVal : string  = addOrConcat(2,2,'concat') as string // nếu không có as: ts chỉ nhìn kiểu 
// khai báo chứ không biết là concat sẽ trả về string 
// ts không thấy problem nhưng thực tế đang trả về string 
let nextVal : number  = addOrConcat(2,2,'concat') as number;

(10 as unknown) as string; // double asserttion
// Ép 10 sang unknow . ts cho phép chuyển mọi kiểu sang unknow
//unkonw -> string  : ts cho phép từ unknown sang bất kì kiểu nào


//the DOM
// querySelector(): khi truyền tên thẻ HTML ('img', 'input', 'button',...),
// TypeScript tự suy luận kiểu phần tử tương ứng.
// 'img' -> HTMLImageElement nên có thể dùng .src mà không cần ép kiểu.
const img = document.querySelector('img')!;//querySelector: tìm phần tử đầu tiên trong DOM bằng CSS selector
// getElementById(): chỉ trả về HTMLElement | null,
// vì TypeScript không biết id="img" là thẻ <img>, <div> hay thẻ khác.
// Cần ép kiểu sang HTMLImageElement để sử dụng thuộc tính .src.
const myImg = document.getElementById('img') as HTMLImageElement; //!: Non null
const nextImg = <HTMLImageElement>document.getElementById('img'); // Ít dùng do trong file tsx, trình biên dịch
// có thể hiểu <HTMLImageElement> là một thẻ JSX thay vì type assertion
img.src;
myImg.src;


