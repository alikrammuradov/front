alert("Hello, World!");
let a = 5;
let b = 10;
console.log(a + b);
let c = a * b;
console.log(c);
let person = {
  name: "Ali",
  age: 30,
  address: "Baku"
};
console.log(person.name);
console.log(person.age);
console.log(person.address);
let person2 = {
  name: "Aysel",
  age: 25,
  address: "Ganja"
};
let persons = [person, person2];
for (let i = 0; i < persons.length; i++) {
  console.log(persons[i].name);
}
for (let key in person2) {
  console.log(key + ": " + person2[key]);
}
for (let i = 0; i < 5; i++) {
  console.log("Number: " + i);
}
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log(fruit);
}
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
let arr=[1,2,3,4,5];
arr.push(6);
console.log(arr);
arr.pop();
console.log(arr);

let nums = 34256;
let numsStr = Math.abs(nums).toString().length;
console.log(numsStr);
let s=10;
if(s%2==0){
    console.log("cut eded");
}else{
    console.log("tek eded");
}
let says=[12,45,67,23,89,90];
let A=says[1];
console.log(A);
let B=Math.max(...says);
let C=Math.min(...says);
let D=says.sort();
let E=says.reverse();
console.log(C);
console.log(B);
console.log(D);
console.log(E);