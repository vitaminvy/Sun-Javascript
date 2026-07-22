let stringArray = ["Vy", "Mai", "MCK"];
let guitars = ["Strat", "Les Paul", 1950];
let mixedData = ["EVH", 1984, true];
stringArray[0] = "John";
stringArray.push("hey");
guitars[0] = 1984;
guitars.unshift("Jim"); // thêm một hoặc nhiều phần tử vào đầu mảng
//guitars.unshift(true); Error
//guitars = stringArray
//console.log(guitars); output: [ 'Jim', 1984, 'Les Paul', 1950 ]
//stringArray = guitars -> Error
let test = [];
let bands = [];
bands.push("The Beatles");
//bands.push(0); // Error
// Tuples: Khai báo mảng với số lượng phần tử cố định và kiểu dữ liệu của từng phần tử
let tuple = ["Vy", 22, true];
let mixed = ["John", 1, false];
mixed = tuple; // OK
// tuple = mixed; // Error
//tuple.push("hey"); // OK
//tuple.push(true); // 
//tuple.push(22); // OK
// ⚠️ Tuple trong TypeScript thực chất vẫn là Array của JavaScript.
// Vì vậy vẫn có các method như push(), pop(),...
// push() có thể thêm phần tử vào cuối mảng khi chạy.
// Tuy nhiên, điều này làm tuple không còn đúng số lượng phần tử đã khai báo.
// => Trong thực tế, không nên dùng push() với Tuple.
//tuple[0] = 43 // Error
tuple[0] = "John"; // OK
//objects
let myObj;
myObj = [];
console.log(typeof myObj); //object
myObj = bands;
console.log(typeof myObj); //object
const exampleObj = {
    prop1: "Vy",
    prop2: true,
};
exampleObj.prop1 = "Mai"; // OK
let evh = {
    name: "Eddie",
    active: true,
    albums: [1984, 1986, "OU812"]
};
/*let jp: Guitarist = {
    name: "Jimmy",
    active: false,
    albums: ["I", "II", "IV"]
}
evh = jp; // OK
jp = evh; // OK

*/
let jp = {
    name: "Jimmy",
    active: false,
    albums: ["I", "II", "IV"]
};
evh = jp; //True
//jp = evh; // Error    
/*const greetGuitarist = (guitarist: Guitarist) => {
    return `Hello ${guitarist.name.toUpperCase()}`
} // false -> Error: Object is possibly 'undefined'.ts(2532) do name là optional property nên có thể undefined
// guitarist: () : truyền được mọi giá trị trừ null và undefined=>  {
*/
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}`;
    }
    return "Hello!";
};
console.log(greetGuitarist(jp));
//Enums: Enum là một kiểu dữ liệu đặc biệt, cho phép chúng ta định nghĩa một tập hợp các hằng số có tên.
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 3] = "U";
    Grade[Grade["D"] = 4] = "D";
    Grade[Grade["C"] = 5] = "C";
})(Grade || (Grade = {}));
// chỉ cần gán giá trị cho phần tử đầu tiên, các phần tử còn lại sẽ tự động tăng dần từ giá trị đó.
console.log(Grade.D); // 4
console.log(Grade.U); // 3
export {};
// Enum là tập hợp các hằng số có tên.
// Nếu chỉ gán giá trị cho phần tử đầu tiên,
// các phần tử phía sau sẽ tự động tăng thêm 1.
//
// enum Grade {
//   U = 0,
//   D,      // = 1
//   C       // = 2
// }
//
// Có thể truy cập:
// Grade.D  -> 1
// Grade[1] -> "D" (reverse mapping)
//# sourceMappingURL=main.js.map