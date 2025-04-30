// // // let num="45"
// // // let num1=53
// // // console.log(num+num1)
// // // let num2=true
// // // console.log(num2+num1)
// // // console.log(num2+num2)
// // // console.log(Number('4'),typeof Number('4')

// // console.log('a'<'b')
// // console.log('a'>'A')
// // console.log('3'>'4')
// // console.log('2'>'1')
// // console.log('17'.charCodeAt(0))
// console.log(Number(3)+String('4'))
// console.log(typeof(Boolean(3)+String('4')))
// //if ,else if ,else
// if(1){
//     console.log("augef")
// }
// else if(2){
//     console.log("gdsiu")
// }
// else{
//     console.log("efwoih")
// }
// // ternary operator
// let valour = 2>1 ? 'hello' : "gagan"
// console.log(valour)
// 3>5?console.log("efoij"):console.log("sdifu")

// //array
// let arr1=[1,2,3,4]
// console.log(arr1.pop())
// console.log(arr1)
// console.log(arr1.push(5))
// console.log(arr1)
// console.log(arr1.pop())
// console.log(arr1)
// const arr2=[1,2,3] //save as reference, and normal variable save as value
// console.log(arr2.unshift(5))
// console.log(arr2)
// console.log(arr2.shift())
// console.log(arr2)
// console.log(arr2.slice(1,3)) //print arr2[1] to arr2[2]
// console.log(arr2.indexOf(3)) //take value ,return index
// console.log(arr2.includes(2)) //check value is present,return true or false
// console.log(arr2.reverse())
// let arr3=[2,3,4,5,6,7,8,9]
// console.log(arr3.concat(arr2))

// //object
// let obj={
//     name:"atul",
//     age:20,
//     address:{
//         country:"INDIA",
//         state:"Rajasthan",
//         city:"Jaipur",
//         house:{
//             area:"Pratap nagar",
//             sector:26
//         }
//     },
//     univercity:"RTU",
//     college:"TCBS",
//     sem:2,
//     skill:["html","css","js","DBMS","C"]
// }
// console.log(obj.name)
// console.log(obj['age'])
// obj.data="sfkj"
// console.log(obj)

let arr4=[3,6,7,9,12,5]
let i,j
for(i=0;i<arr4.length;i++){
    for(j=i+1;j<=arr4.length;j++){
        if(arr4[i]+arr4[j]==11){
            console.log(`[${i},${j}]`)
            break;
        }
    }
}