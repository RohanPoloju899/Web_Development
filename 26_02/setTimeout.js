console.log("start");
setTimeout(()=>{
    console.log("set timeout");
},0);
Promise.resolve().then(()=>{
    console.log("promise");
});
console.log("end");
