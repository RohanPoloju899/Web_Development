function fun(variable,variable1){
    console.log("Hello "+variable);
    variable1();
}

function fun1(){
    console.log("Bye");
}

fun("Rohan",fun1);

const variable=[1,2,3,4,5];

const variable1=variable.map(function(variable){
    return variable ** 2;
});
console.log(variable1);

const variable2=variable.filter(function(variable){
    return variable%2===0;
});
console.log(variable2);

const variable3=variable.reduce(function(variable,variable1){
    return variable+variable1;
});
console.log(variable3);

