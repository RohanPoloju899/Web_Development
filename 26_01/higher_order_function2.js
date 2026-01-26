function fun(variable,variable1){
    console.log("Hello "+variable);
    variable1();
}

function fun1(){
    console.log("Bye");
}

fun("Rohan",fun1);

