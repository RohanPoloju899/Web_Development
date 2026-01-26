const variable=[1,2,3,4,5,6,7,8,9];
const variable1=variable[Symbol.iterator]();
for(let variable3 of variable1){
    process.stdout.write(variable3 + " ");
}
console.log();

let variable2={
    variable3: [1,2,3],
    [Symbol.iterator](){
        let variable4=0;
        return{
            next: ()=>({
                value:this.variable3[variable4],
                done: variable4++ >=this.variable3.length
            })
        };
    }
};

for(let variable of variable2){
    process.stdout.write(variable + " ");
}
