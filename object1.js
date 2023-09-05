let info ={
//  properties: val 
    firstname:"Ambika",
    lastname:"pradhan",
    age:30,
    city:"Gurgaon"

}
//Objects does not store any value in index

//retrive through dot notation and bracket notation
console.log (info.lastname)
console.log (info['age'])


//Update through dot notation and bracket notation
info.lastname="Disha"
info['age']=28
console.log (info)


//Add through dot notation and bracket notation
info.rollno=23
info['country']="India"
console.log(info)


//delete through dot notation and bracket notation
delete info.lastname
delete info['age']
console.log (info)



//For ----------
let vehicle ={
    colour:"red",
    RegNo:987
}
console.log(vehicle)
for (let V in vehicle){
    console.log (V,vehicle[V])
}


//at-------
let number2=[22,33,44,66,45]
console.log(number2.at(1))


//fill------
let number3= number2.fill("Ambika",2,4)
console.log (number3)


//splice----------Over writes the object
let name2=["Ambika","Disha","Ambrish","Rohan"]
name2.splice(1,2, "Ram","Laxman")
console.log (name2)

//=====================================================================
let firstname="Ambika"
let age=30
let lastname="Pradhan"
console.log (firstname)
console.log (typeof firstname)
console.log (typeof age)

//concat string
//console.log ("My first name is ${firstname} and my last name is ${lastname}" )

// number + number ====> number 
// string + number ====> string
// number + string ====> string 
// string + string ====> string 


let a1=10
let b1=5
let c1="hello"
console.log (a1+b1+c1)
console.log (a1+c1+b1)

//string store the value in index
let firstname1="Ambika"
let lastname1="Pradhan"
console.log (lastname1.length)
console.log (lastname1)

for (i=0;i<lastname1.length;i++){
    console.log( lastname1[i])
}

