var num = 1;
console.log("All odd numbers between 1 to 20");
while(num<=20){
    console.log(num);
    num = num + 2;
}

console.log("While loop completed");

console.log("Print 1 to 10 using For Loop");

for (var num3 = 1; num3 <= 10; num3++) {
    console.log(num3);
}

console.log("Print all the numners bleow in the loop")
var arr1 = [4,7,12,10,15,20];

for (var num of arr1){
    console.log(num);
}

for (var i=0;i<arr1.length;i++){
    console.log(arr1[i]);
}