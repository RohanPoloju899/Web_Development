function fun(){
    console.log("Hello World");
}
function fun1(variable){
    variable();
    variable();
}

fun1(fun);

const variable=[1,2,3,4,5,6,7,8,9];

const variable1=variable.map((variable)=>variable**2);

const variable2=variable.filter((variable)=>variable%2===0);

const variable3=variable.reduce((variable,variable1)=>variable+variable1,0);

const variable4=variable.find((variable)=>variable%2===0);

const variable5=variable.some((variable)=>variable<0);

const variable6=variable.every((variable)=>variable>0);

variable2.forEach((variable)=>process.stdout.write(variable*2+" "));

console.log();
console.log(variable1);
console.log(variable2);
console.log(variable3);
console.log(variable4);
console.log(variable5);
console.log(variable6);
