// objects 
// Properties --- color , gender , height weight 
// Method - walk() , talk()


//property: length
let city ="Gurgaon"
console.log (city.length)

//property:toUpparcase()
let city1=city.toUpperCase()
console.log (city1)

//Property:toLowercase()
let city2=city.toLowerCase()
console.log (city2)

//property:includes()   --------to check present or not
let city3="Mumbai"
let q1= city3.includes('i')
console.log(q1)
let q2= city3.includes('bai')
console.log (q2)


//Property:Indexof()
let q3= city3.indexOf ('b')
console.log (q3)


//Property:startsWith()
let city4="mumbai"
let q4=city4.startsWith('m')
let q5=city4.startsWith('mum')
let q6=city4.startsWith('R')
console.log (q4)
console.log (q5)
console.log (q6)


//Property:endsWith()
let q7=city4.endsWith('W')
let q8=city4.endsWith('bai')
let q9=city4.endsWith('i')
console.log (q7)
console.log (q8)
console.log (q9)


//Property:Replace()
let sentence="I am learning javascript"
let q10=sentence.replace("javascript","pyhton")
console.log (q10)


//Property:trimStart()
let city5=" Delhi"
let q11 = city5.trimStart()
console.log(q11)

//Property:trimEnd()
let city6="Chennai "
let q12=city6.trimEnd()
console.log (q12)


//Property:trim
let city7=" Jaipur  "
let q13=city7.trim()
console.log (q13)

//Property:concate
let q14= city6.concat(city7)
console.log (q14)


//Property:join()
let q15=["Ambika","Pradhan","23"]
let q16=q15.join ('@')
console.log (q16)


//Property:split()
let sentence2="I am learning JS"
let q17=sentence2.split(" ")
console.log (q17)


//Property:Slice()
let birthCity = "chandrapur"

// 0   1  2   3   4   5  6   7  8   9   
// c   h  a   n   d   r  a   p  u   r
//-10 -9 -8  -7  -6  -5 -4  -3  -2  -1

console.log(birthCity.slice(2))
console.log(birthCity.slice(2,9))
console.log(birthCity.slice(2,-3))
console.log(birthCity.slice(-9,-3))
console.log(birthCity.slice(-9,6))
console.log(birthCity.slice(-1,-5))


//Program
let city8=['Pune','Mumbai',"delhi"]
let [n1,n2,n3]=city8
console.log(n1)
console.log(n2)
console.log(n3)


//Program
let info = {
    firstName:"Disha",
    lastName:"Pradhan",
    age:33
}

let a1 =  info.firstName
let a2 =  info.lastName
let a3 =  info.age

console.log(a1)
console.log(a2)
console.log(a3)

let {firstName,lastName,age} = info
console.log(firstName)
console.log(lastName)
console.log(age)


//Program
let family = {
    fullName:"Ambika pradhan",
    parent:{
        father:"Premananda Pradhan",
        mother:"Anjalee Pradhan"
    }
}
let {fullName:m1,parent:{father:m2,mother:m3}} = family
console.log(m1)
console.log(m2)
console.log(m3)