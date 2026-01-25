function fun(){
    console.log(a);
    var a=5;
    function fun1(){
        console.log(b);
        var b=10;
    }
    fun1();
}
fun();
