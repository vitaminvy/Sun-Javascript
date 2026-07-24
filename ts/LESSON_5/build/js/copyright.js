// //Original js code
// const year = document.getElementById("year");
// const thisYear = new Date().getFullYear(); // new Date : tạo 1 object chứa ngày, giờ hiện tại
// year.setAtrribute("datetime", thisYear);
// year.textContent = thisYear;
// 1 st variation:
// let year:HTMLElement  | null 
// year = document.getElementById("year");
// let  thisYear: string;  
// thisYear = new Date().getFullYear().toString();
// if (year){
//     year.setAttribute("datetime", thisYear); //Thêm (hoặc cập nhật) thuộc tính datetime của thẻ HTML thành giá trị thisYear.
//     year.textContent = thisYear;
// }
// 2nd variation:
const year = document.getElementById("year");
const thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear); //Thêm (hoặc cập nhật) thuộc tính datetime của thẻ HTML thành giá trị thisYear.
year.textContent = thisYear;
export {};
//# sourceMappingURL=copyright.js.map