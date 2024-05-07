let employee ={id:1};
//This is possible

let employe:{
    id:number,
    name:string
}
//This is possible
let employ:{
    id:number,
    name:string
}={id:1,name:'RUpam'}
//This is possible
let empl:{
    id:number,
    name?:string
}={id:1}
empl.name='Sarmah';

//This is possible

let emp:{
    readonly id:number,
    name:string
}={id:1,name:'RUpam'}
//emp.id=2; //This is not allowed because we marked the "id" as readonly.

let em:{
    id:number,
    name:string,
    retire: (date:Date)=>void
}={id:1,
    name:'RUpam',
    retire:(date:Date)=>{
        console.log(date);
    }
}