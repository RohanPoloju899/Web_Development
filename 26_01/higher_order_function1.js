//Composition

function fun(variable){
    return variable+2;
}
function fun1(variable){
    return variable*2;
}

function fun2(variable,variable1){
    return function(variable2){
        return variable(variable1(variable2));
    };
}

const fun3=fun2(fun,fun1)(5);
console.log(fun3);

//currying

function fun4(variable){
    return function(variable1){
        return variable+variable1;
    };
}

const fun5=fun4(5);
console.log(fun5(2));

//memorization

function fun6(variable){
    let variable1={};
    return function(variable2){
        if(variable1[variable2]){
            return variable1[variable2];
        }
        else{
            let variable3=variable(variable2);
            variable1[variable2]=variable3;
            return variable3;
        }
    };
}

function fun7(variable){
    console.log("hello");
    return variable*2;
}

const variable=fun6(fun7);
console.log(variable(5));
console.log(variable(5));
console.log(variable(6));
console.log(variable(6));
console.log(variable(5));
console.log(variable(5));
