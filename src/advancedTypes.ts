type Employee={
    readonly id:number,
    name:string,
    retire: (date:Date)=>void
}
//like this we can use alise or separate the declaration 

let eml:Employee = {
    id:1,
    name:'RUpam',
    retire:(date:Date)=>{
        console.log(date);
    }
}
//EOD Type Alias
//Now Union type
function kgTolbs(weight:number | string) : number{
    //Narrowing down the type
    if(typeof weight === "number"){
        return weight*2.2;
    }else{
        return parseInt(weight)*2.2;
    }
}

kgTolbs(10);
kgTolbs('10kg');
//EOD Union Type

//Now Intersection Type checking
//e.g., let wei : number & string; but not a good example

type Draggable ={
    drag: () =>void;
}

type Resizable = {
    resize: () => void;
}

type UIwidget = Draggable & Resizable;

let textbox : UIwidget = {
    drag:()=>{},
    resize:()=>{}
}

//EO Intersection type
//Now Literal Types
//Literals(exact, specific)
let quantity : 50 | 100 =100;
//or
type Quantity =50 |100;
let qty:Quantity=100;

//nullable types
function greet(name : string | null |undefined){
    if(name){
        console.log(name.toUpperCase());
    }else{
        console.log("hola");
    }
}

greet(null); // without the union operator in the function defination, we can't use this null.
greet(undefined);  // without the union operator in the function defination, we can't use this undefined.


//Optional chaining
//