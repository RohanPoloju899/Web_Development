function fun(){
    console.log("Hello World");
}
function fun1(variable){
    variable();
    variable();
}

fun1(fun);
