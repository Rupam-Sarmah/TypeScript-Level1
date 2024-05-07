function calcu(income:number){
    return 0;
}

//Best practice
function calculator(income:number):number{
    //mention the return type
    //it helps other developer to understand

    //for the income variable to make unambiguous, need to make the "noUnusedParameter":true
    //"noImplicitReturns": true,    if we make a conflict in return or forgot to return from a function.
    return income;
}
function calc(income:number, tax?:number):number{
    return income+(tax || 2);
}
function cal(income:number, tax=2):number{
    
    return income+tax;
}
calc(222); //here we can make a arugument optional in two way as shown above
cal(333); //this also

