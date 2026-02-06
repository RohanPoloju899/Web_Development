let v=345e2;
console.log(v);
let v1=345e-2;
console.log(v1);
let v2=9999999999999999;
console.log(v2);
let v3=0.22+0.12;
console.log(v3);
let v4=(0.22*10+0.12*10)/10;
console.log(v4);
console.log("1000"/100000);
let v5=0547;
console.log(v5);
let v6=0b10110101;
console.log(v6);
let v7=0x10110101;
console.log(v7);
let v8=undefined+10;
console.log(v8);
let v9=null+10;
console.log(v9);
let v10=10+true;
console.log(v10);
let v11=10-2*(true);
console.log(v11);
let v12="42";
console.log(Number(v12));
let v13="h2";
console.log(Number(v13));
const id=Symbol("userid");
const user={
    name:"Alice",
    [id]:123
};
console.log(user[id]);


