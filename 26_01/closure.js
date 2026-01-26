function fun(){
    let variable=0;
    return {
        fun2: function(){
            variable++;
            return variable;
        },
        fun3: function(){
            variable=0;
            return "Counter Reset."
        }
    };
}

const fun1=fun();
console.log(fun1.fun2());
console.log(fun1.fun2());
console.log(fun1.fun2());
console.log(fun1.fun3());
console.log(fun1.fun2());
