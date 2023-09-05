//MAP--create a new array from calling a function for every array element

let numbers = [10,20,30,40,50]
let q1 = numbers.map(function(el,index,arr){
    return el + 3
})
console.log(q1)

//Fllter --- create a new array by filtering out the element 
let transaction =[23,987,-233,473,23,-545,894]
let q2=transaction.filter(function(el,index,arr){
    return el<0
})
console.log (q2)

let q3=transaction.filter(function(el,index,arr){
    return el>0
})
console.log (q3)
 let totalwithdraw=q2.reduce(function(acc, el,index,arr){
    return acc+el
 })
 console.log (totalwithdraw)
let totaldeposit =q3.reduce(function(acc,el,index,arr){
    return acc+el
})
console.log (totaldeposit)



//ForEach------
let names =["Ambika","Ashis","Shiv"]
names.forEach(function(el,index,arr){
    console.log ("Welcome" + el)
})

//Find ----FindIndex
    let marks = [22,11,61,64,4,223,66,77,88,444,211,987,332333]
    let q4 = marks.filter(function(el,index,arr){
        return el > 60
    })
    console.log(q4)
    
    let q5 = marks.find(function(el,index,arr){    

return el > 60
})
console.log(q5)

let q6 = marks.findIndex(function(el,index,arr){
    return el > 60
})
console.log(q6)


// Every-----Some

let r = [11,22,33,44,4,5,22,33,44]
let q7 = r.every(function(el,index,arr){
    return el > 0
})
console.log(q7)


let q8 = r.some(function(el,index,arr){
    return el > 400
})
console.log(q8)





// concat
let a  = [11,22,33]
let b = [44,55,66]

let q9 = a.concat(b)
let q10 = b.concat(a)
console.log(q9)
console.log(q10)


// join---
let info = ["Ambika","Pradhan",25]
let q11 = info.join(" ")
console.log(q11)


// reverse----
let cities = ["Bhubaneswar" , "chennai","delhi","Agra"]
let q12  = cities.reverse()
console.log(q12)


//Flat----
 let states=[["Mumbai","Nagpur"],["Bhubaneswar","Talcher"],["Delhi","janakpuri"]]
 console.log ([0][1])
 let U=states.flat()
 console.log(U)


 //Slice----------
let names8=["pune","Mumbai","goa","talcher","Cuttack","chennai"]
//names8.scile (startIndex:EndIndex (Not inclusive))

let U2= names8.slice (1,5)
let U3= names8.slice(2,4)
let U4= names8.slice (0,-1)
let U5= names8.slice (-5,-3)
console.log (U2)
console.log (U3)
console.log (U4)
console.log (U5)

//Splice------

let number2= [10,99,23,34,76,49]
//number2.splice(startIndex, number of element to be deleted)
number2.splice (1,4)
console.log (number2)


//fill--------
let number3 =[22,11,33,23,45,56,67,78,79,99,41,55,61]
let q15= number3.fill("Ambika",2,8)
console.log(q15)

