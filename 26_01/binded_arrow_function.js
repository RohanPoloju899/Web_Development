const fun={
    name:"Rohan",
    fun1:function(city,country){
        const fun2 = () =>{
            console.log("Hello "+this.name+"..! from "+city+", "+country+".");
        }
        fun2();
    }
};

fun.fun1();

