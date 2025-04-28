let str1="Atul"
let str2="Tiwari"
// let str3="Hello "+str1+" "+str2
let str3=`Hello ${str1} ${str2}`
console.log(str3) // Hello Atul Tiwari
// let is a reserved keyword in JS, so it cannot be used as a variable name

// // boolean
// let iscorrect= 4>1
// console.log(iscorrect) // true
// // null
// let isnull= null
// console.log(typeof isnull) // null
// console.log(isnull) // null

// // browser
// // alert
// alert("Hello World") // alert box
// // confirm
// confirm("Are you sure?") // confirm box
// prompt
// let age=prompt("Enter your age")
// console.log(age) // age entered by user
// alert(`ha bhai tum itne ${age} sal ke ho`)
let len=str1.length
console.log(len)
console.log(str1.indexOf("a")) //-1
console.log(str1.indexOf("l")) //3
console.log(str2.indexOf("i")) //1
console.log(str1.indexOf("tu")) //1
console.log("Tiwari".indexOf("i")) //1
console.log(Math.floor(2.99))
console.log(Math.floor(Math.random()*1000))
let num=Math.floor(Math.random()*1000)
console.log(num)