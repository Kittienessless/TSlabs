class User{
  name : string;
  constructor(_name:string){
        
      this.name = _name;
  }
}
const tom : User = new User("Том");
const header = this.document.getElementById("header");
if(header !=  null)
  header.innerHTML = "Hello " + tom.name;





//-----------строгая типизация
let x: number = 10; 
let hello: string = "hello world";
let isValid: boolean = true;
let firstName: string = "Tom";
let age: number = 28;
let info: string = `Имя ${firstName}    Возраст: ${age}`;
console.log(info);  // Имя Tom    Возраст: 28
let sentence: string = `Hello World!
Goobbye World!`;





//------------ тип ANY
let someVar: any = "hello";
console.log(someVar);   // сейчас someVar - это string
someVar = 20; 
console.log(someVar);   // сейчас someVar - это number





//--------------------- проверка типов typeof   string number bigint boolean symbol undefined object function
let sum: any;
sum = 1200;
 
if (typeof sum === "number") {
     
    let result: number = sum / 12;
    console.log(result);
}
else{
    console.log("invalid operation");
}




//---------------------------- функции 
// определение функции
function add(a: number, b: number){ // строгая типизация параметров функции, без строгой типизации ошибку не выдаст при вызове функций с разными типами
  let result = a + b;
  console.log(result);
}
// вызов функции
add(20, 30); // 50
add(10, 15); //25


//Если функция ничего не возвращает, то указывается тип void:
function addition(a: number, b: number): void {
  console.log(a + b);
}
addition(10, 20);



//Тип функции можно использовать как тип переменной, но он также может применяться для определения типа параметра другой функции:


function summ (x: number, y: number): number {
  return x + y;
};
function multiply (a: number, b: number): number {
  return a * b;
};

function mathOp(x: number, y: number, op: (a: number, b: number) => number): number{

  return op(x, y);
}
console.log(mathOp(10, 20, summ)); // 30 
console.log(mathOp(10, 20, multiply)); // 200 







//Для определения функций в TypeScript можно использовать стрелочные функции или arrow functions.
// Стрелочные функции представляют выражения типа (параметры) => тело функции.
const square = x => x * x;
const hellow = () => "hello world"
  
console.log(square(5)); // 25
console.log(hellow());   // hello world
const summm = (x: number, y: number) => {
  x *= 2;
  return x + y;
};


//Объединения или union не являются собственно типом данных, но они позволяют комбинировать или объединить другие типы.
// Так, с помощью объединений можно определить переменную, которая может хранить значение двух или более типов:
// данном случае переменная id может представлять как тип string, то есть строку, так и число
let id : number | string;
id = "1345dgg5";
console.log(id); // 1345dgg5
id = 234;
console.log(id);  // 234
//Тип union подходит для тех ситуаций, когда логика работы со всеми объединенными типами однообразна, например, 
//как в случае выше, где значение извне встраивается в строку и выводится на консоли. Вне зависимости от типа действия одинаковы.

//В то же время отсутствие проверки для этих типов со 
//стороны компилятора является потенциальным источников багов, 
//поэтому нередко при компиляции применяется параметр strictNullChecks.


//Тем не менее нередки ситуации, когда мы точно не знаем, имеет ли какая-то переменная или параметр функции или конкретное значение или оно отсутствует.
// Особенно в тех случааях, когда мы получаем значение из вне, например, с помощью запроса к какому-нибудь сетевому ресурсу.
// В этом случае может потребоваться, чтобы переменная или параметр могли принимать значение null. 
//И в этом случае можно использовать объединения. 

let userId: number|null = null;
//Оператор ! (non-null assertion operator) позволяет указать,
// что объект не представляет значение null и undefined. 
const headerr: HTMLElement|null = document.getElementById("header");
headerr!.innerText = "Hello Typescript!";
//Оператор ! ставится после объекта, который теоретически может принимать значение null перед обращением к его свойствам и методам:
//В то же время надо учитывать, что этот оператор не меняет значения объекта.
// Например, если объект имеет значение null или undefined, то данный оператор не поможет. 
//Программа скомпилируется, но при выполнении скрипта программа все равно сгенерирует ошибку
//Поэтому рекомендуется применять данный оператор, когда мы знаем, что объект не равен null или undefined.