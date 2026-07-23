//Type Alias: Định nghĩa một kiểu dữ liệu mới, có thể tái sử dụng nhiều lần
type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];
type Guitarist = {
    name?: string,
    active: boolean,
    albums: stringOrNumberArray 
}
type UserId = stringOrNumber; 
// interface mô tả object hoặc kế thừa từ object
//interface PostId = stringOrNumber; // Error: An interface can only extend an object type or 
// intersection of object types with statically known members.ts(2312)

//Literal types: chỉ định giá trị cụ thể cho một biến, không thể gán giá trị khác
let myName: "Vuong"; 
//myName = "John"; // Error: Type '"John"' is not assignable to type '"Vuong"'

let userName: 'Dave' | 'John' | 'Amy'; // union type: chỉ định nhiều giá trị cụ thể cho một biến
userName = 'Dave'; // OK
//userName = 'Vuong'; // Error


// function 
const add = (a: number, b: number): number => {
    return a + b;
}
const logMsg = (message: any): void => {
    console.log(message );
}
logMsg("Hello, TypeScript!"); 
logMsg(add(2, 3)); // 5
//logMsg(add(2, '3')); // Error vì　 ts không ép kiểu như js

let subtract = function (c: number , d:number)
:number{
    return c - d;
}
type mathFunction = (a: number, b: number) => number; // type alias cho function
// interface mathFunction {
//     (a: number, b: number): number;
// }

let multiply: mathFunction = function (c, d) {
    return c * d;
}
logMsg(multiply(2, 3)); // 6

//optional parameters: tham số tùy chọn, có thể không truyền vào khi gọi hàm
const addAll = (a: number, b:number, c?:number) => {
    if (typeof c !== 'undefined'){
        return a + b + c;
    }
    return a + b;
}
// default parameters: tham số mặc định, nếu không truyền vào giá trị thì sẽ lấy giá trị mặc định
const sumAll = (a: number, b:number, c=2) => {
    return a + b + c;
} // nếu không truyền vào giá trị cho c thì c sẽ mặc định là 2
logMsg(addAll(2, 3)); // 5
logMsg(sumAll(2, 3)); // 7
logMsg(sumAll(2, 3, 4)); // 9

// Rest parameters: tham số còn lại, có thể truyền vào nhiều giá trị, sẽ được gộp lại thành một mảng
const total = (a: number, ...nums: number[]) => {
    return nums.reduce((prev, curr) => prev + curr);
} //...nums:number[]: gom các tham số truyền vào thành một 
//mảng nums có kiểu number[]
logMsg(total(1, 2, 3, 4)); // 9 -> vì a = 1, nums = [2, 3, 4] => 2 + 3 + 4 = 9
//logMsg(total[3,2,1])
const total2 = (...nums: number[]) => {
    return nums.reduce((prev, curr) => prev + curr);
    }
logMsg(total2(1, 2, 3, 4));  // 10 -> vì nums = [1, 2, 3, 4] => 1 + 2 + 3 + 4 = 10
const total3 = (a:number, b:number,...nums: number[]) => {
    return nums.reduce((prev, curr) => prev + curr);
    }
logMsg(total3(1, 2, 3, 4));  // 7 -> vì a = 1, b = 2, nums = [3, 4] => 3 + 4 = 7
const createError = (errMsg: string):never=>{
    throw new Error(errMsg); // new Error: tạo ra một object Error mới với message là errMsg

} // never: kiểu dữ liệu không bao giờ xảy ra, ví dụ như throw error, infinite loop
// Hàm không bao giờ kết thúc
const infiniteLoop = ()=>{
    let i: number = 1;
    while(true){
        i++;
        if (i > 100)break;
    }

}
const isNumber = (value: any): boolean => {
    return  typeof value === 'number' ? true : false;
}
const numberOrString = (value: number | string):string => {
    if (typeof value === 'string') return 'string';
    if (isNumber(value)) return 'number';
    return createError('This should never happen!'); // never
    // nếu thiếu sẽ báo lỗi: Function lacks ending return statement and return type does not include 'undefined'.ts(2366)
}