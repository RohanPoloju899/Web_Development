function fun(){
    for(let i=0;i<3;i++){
        setTimeout(function(){
            console.log(`Timer ${i+1}`);
        },i*1000);
    }
}
fun();
