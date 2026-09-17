// let x = 10;
// console.log(x);

// variables

// let FirstName = "";
// let age = 20;
// let isActive = false;

// const yourBirthDate = "2 Feb 2002";

// var price = 100;
// FirstName = "Mr. Jodu"

// console.log("This is a console log");
// console.log(10);
// console.log(price);

// let firstName = "Mr."
// let lastName = "Jodu Mia";
// let role = "Student"
// let price = 100;

// console.log("My name is ", firstName, lastName, "And i am a", role);

// console.log(`My name is ${firstName} ${lastName} And i am a ${role}`);

// const priceWithVat = `The price with vat = ${price + 15}`

// console.log(priceWithVat);

// Conditional operation:

// if, else if, else

// let price = 100;
// let vat = 15;

// if (price >= 100) {
//     let priceWithvat = price + vat
//     console.log(`etar upor vat apply hobe and price with vat ${priceWithvat}`);

// } else {
//     console.log(`Etar upor vat nei and price ${price}`);

// }

// let orderPrice = 1000;

// if (orderPrice > 999) {
//     console.log("Free Delivery")
// } else{
//     console.log(`Delivery Charge Applicable`)
// }

// let trafficLight = "Yellow";

// if (trafficLight == "Red") {
//     console.log("Stop!")
// } else if (trafficLight == "Yellow") {
//     console.log("Get Ready")
// } else {
//     console.log("GO!")
// }

// let oshukh = true;
// let rain = true;

// if (oshukh == true && rain == true) {
//     console.log("school cancel")
// } else {
//     console.log("School jabo")

// }

// Function

// function sum(n1, n2 = 0) {
//     console.log(`n2 er value ${n2}`)
//     let total = n1 + n2;
//     console.log(total);
// }
// sum(5);

// const sum = (n1, n2 = 0) => {
//     let total = n1 + n2;
//     console.log(total);
// }

// function sum() {
//     return 5 + 10;
// }

// const sum =()=> 5 +15

// const total= sum()
// console.log(total)

// const calculatePrice =(item1, item2) =>{
// const total = item1 + item2;
// console. log(total)

// }

// const priceResult = calculatePrice(150, 200);
// console.log(priceResult);

// const calDis = (buyingPrice, discount) =>{
// const afterDis = buyingPrice - discount
// return afterDis;
// }
// const discountResult = calDis(priceResult, 15);
// console. log ("After discount price is ", discountResult)


// Array and Object
// const bazarList = ["Alu", "potol", "Rosun"];
// bazarList.push("Ada")
// bazarList.pop();

// console. log(bazarList)

// const numberList = [20,13,254,65];

// const [n1, n2,n3,n4] = [20,13,254,65]
// console. log(n40)

// const phone1 = {
//     name: "Samsung S20",
//     brand: "Sumsung",
//     price: 20000
// }

// const phone2 = {
//     name: "Sumsung 21",
//     brand: "sumsung",
//     price: 26000,
// }

// const phone3 = {
//     name: "Sumsung 22",
//     brand: "sumsung",
//     price: 36000,
// }

// // phone3.ram ="8 GB"
// const newPhone3 = { ...phone3, ram:"8 GB"}

// console.log(phone3)

// const { brand, name, price } = phone1

// console.log(price);

// const phoneList = [phone1, phone2];

// const newPhoneList = [...phoneList, phone3]
// console.log(newPhoneList)

// For loop

// for(let i=1; i <= 100; i++){
// console.log(i);

//}

// const bazarList = ["Alu", "potol", "Rosun"];
// console.log(bazarList.length)

// for (let index = 0; index < bazarList.length; index++) {
//     console.log(bazarList[index]);

// }

// Map, filter, find, forEach

// const phones = [
//     {
//         brand: "Samsung",
//         model: "Galaxy S25",
//         price: 95000,
//         storage: "256GB",
//         isStock: true
//     },
//     {
//         brand: "Apple",
//         model: "iPhone 16",
//         price: 120000,
//         storage: "128GB",
//         isStock: true
//     },
//     {
//         brand: "Xiaomi",
//         model: "Redmi Note 14",
//         price: 35000,
//         storage: "256GB",
//         isStock: false
//     },
//     {
//         brand: "OnePlus",
//         model: "OnePlus 1I",
//         price: 85000,
//         storage: "512GB",
//         isStock: true
//     }
// ];

// const listOfBrand = phones.map((p) => p.price + 15);
// console.log(listOfBrand);

// const filterPhone = phones.filter((p) => p.brand == "Apple")

// console.log(filterPhone)

// console.log("--------------------------------");

// const findPhone = phones.find((p) => p.brand == "Apple");
// console.log(findPhone);

// phones. forEach((p)=> console.log(p.brand))
