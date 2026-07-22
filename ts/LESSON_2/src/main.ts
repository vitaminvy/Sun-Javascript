let myName: string = "Mai";
let meaningOfLife: number;
let isLoading: boolean;
//let album: string | number; //Union Type
let album: any; 
myName = "Vy";
meaningOfLife = 22;
isLoading = true;
album = "MCK";

const sum = (a: number, b: string) => {
    return a + b;
}
let postId: string | number;
let isActive: number | boolean;
let re: RegExp = /\w+/g;