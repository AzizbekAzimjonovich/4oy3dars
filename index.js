//1-misol
/**let num1=+prompt("1-son");
let num2=+prompt("2-son");
let num3=+prompt("3-son");
let yig=0;
if (num1%5==0) {
    if (num1%2==0) {
        yig+=num1;
    }
}
if (num2%5==0) {
    if (num2%2==0) {
        yig+=num1;
    }
}
if (num3%5==0) {
    if (num3%2==0) {
        yig+=num1;
    }
}
console.log(yig); */

//2-misol
/**let num1=+prompt("1-son");
let num2=+prompt("2-son");
let num3=+prompt("3-son");
let num4=+prompt("4-son");
let kop=1;
if (num1%3==0||num1%7==0) {
    kop*=num1;
}
if (num2%3==0||num2%7==0) {
    kop*=num2;
}
if (num3%3==0||num3%7==0) {
    kop*=num3;
}
if (num4%3==0||num4%7==0) {
    kop*=num4;
}
console.log(kop); */

//3-misol
/**let num1=+prompt("ikki honali son");
let bir=num1%10;
let onlik=(num1/10-bir/10);
console.log(bir*onlik); */

//5-misol
/**let num1=+prompt("uch honali son");
let yuz=num1/100-(num1%100)/100;
let on=(num1%100)/10-((num1%100)%10)/10;
console.log(yuz*on); */

//6-misol
/**let num1=+prompt("uch honali son");
let yuz=num1/100-(num1%100)/100;
let on=(num1%100)/10-((num1%100)%10)/10;
let bir=num1%10;
console.log(yuz*bir); */

//7-misol
/**let num=+prompt("1-son");
let birlik=Math.trunc(num%10);
let onlik=Math.trunc(num%100/10-num%10/10);
let yuzlik=Math.trunc(num%1000/100-num%100/100);
let minglik=Math.trunc(num%10000/1000-num%1000/1000);
let hisob=0;

if (birlik%2==0) {
    hisob++;
}
if (onlik%2==0) {
    hisob++;
}
if (yuzlik%2==0) {
    hisob++;
}
if (minglik%2==0) {
    hisob++;
}
console.log(hisob); */

//8-misol
/**let a=+prompt("eni");
let b=+prompt("bo'yi");
let s=a*b;
let p=2*(a+b);
if (s>p) {
    max=s;
    console.log(" yuzasi");
}
else{
    max=p;
    console.log(" peremetr");
}
console.log(max); */

//9-misol
/**let num=+prompt("1-son");
let birlik=Math.trunc(num%10);
let onlik=Math.trunc(num%100/10-num%10/10);
let yuzlik=Math.trunc(num%1000/100-num%100/100);
let minglik=Math.trunc(num%10000/1000-num%1000/1000);
let onminglik=Math.trunc(num%100000/10000-num%10000/10000);
let hisob=0;

if (birlik==0) {
    hisob++;
}
if (onlik==0) {
    hisob++;
}
if (yuzlik==0) {
    hisob++;
}
if (minglik==0) {
    hisob++;
}
if (onminglik==0) {
    hisob++;
}
console.log(hisob);
 */

//10-misol
let T=+prompt("kech qolgan vaqt");
let t=+prompt("joriy  vaqt");
let a=t-T;
console.log(a,"da poezd ketgan");