console.log ("function with parameter and without return type") 

function CalculatorA(x,y)
{
    console.log(x+y)
}

CalculatorA(10,5)

console.log ("--------------------------------------------")
console.log ("function with parameter and with return type")

function Calculator(x,y)
{
    return x + y
}

let A1 = Calculator(20,4)
console.log(A1)
console.log(A1 + 5)

console.log ("--------------------------------------------")

 let marks =92
 if (marks>90){
 console.log ("Grade A++")
 }
 if (marks >60){
    console.log ("Grade A+")
 }
 if (marks < 60){
    console.log ("Failed")
 }

console.log ("---------------------------------------------")
let mark1= 91
if (mark1>=90){
    console.log("Grade O++")
}
else if (mark1>= 80){
    console.log ("Grade O+")
}
else if (mark1 >= 60){
    console.log ("Grade O")
}
//else if (mark1 <60){
    //console.log(" Grade D")
//}
else {
    console.log ("Fail")
}

console.log("------------------------")
let age =60
let A = age >=60? "senior citizen":"Adult"
console.log (A)

console.log ("-------switch case with break-------")

let name = "Disha"
switch (name)
{
    case "Ambika":
    console.log ("Male")
    break

    case "Disha":
    console.log ("Female")
    break

    default:
        console.log ("Incorrect input")


}

console.log ("-------witch case with break 2------")

let mark2 =91
switch (mark2){
    case "Ranking":
    if (mark2 > 90){
    console.log ("Grade A++")
    }
    else if (mark2 >80){
    console.log ("Grade A+")
    }
   
        else {
    console.log ("Passed to next class")
    }
    break
    default:
        console.log("Fail")
}

console.log("======print 5 to 1 using for loop===========")

for(let i = 5 ; i >= 1 ; i--){ 
    console.log(i) 
}

console.log("------Table for 3----------------")
for(let i = 3 ; i <= 30 ; i = i + 3){ 
    console.log(i) 
}

console.log("------table of three in reverse---------")
for(let i = 30 ; i >= 3 ; i = i - 3){
    console.log(i)
}


console.log ("--------- break statement with loop-------")

for(let i = 1 ; i <= 10 ; i++){ 
    if(i == 5){
        break;
    }
    console.log(i) 

}

console.log ("--------- break statement with loop-------")

for(let i = 10 ; i >= 1 ; i--){ 
    console.log(i) 
    if(i == 5){
        break
    }

}

console.log ("--------- for loop with continue statement -------")
for(let i = 1 ; i <= 10; i++){ 
    if(i == 5){
        continue
    }
    console.log(i)
}

console.log ("--------- while loop -------")
let A4 = 2
while (A4 <= 20) {
    console.log(A4)
    A4 = A4 + 2
}

console.log (" break statement with while ")

let C1=5
    while (C1>=1){
        if (C1==3){
        break

        }
    console.log (C1)
    C1--
    }

    console.log (" break statement with while ")
let C2=1
     while (C2<=5){
        console.log (C2)
        if (C2==3){
            break
        }
        C2++
     }

     console.log (" continue statement with while ")

     let C3= 1
     while (C3<=5){
        if (C3==3){
            C3++
            continue
        }
        console.log(C3)
        C3++

     }

     //Array

//let number =[15,28,39,50,61]
//console.log(number[1])

console.log("===============property==================")
 let names=["Ambika","Ashis","Yash","Disha"]
 console.log(names[1])
 let B4=names.length
 console.log(B4)

  
 console.log ("---------------print number by reverse")
 let numberD=[11,22,33,44,55,66,77,88,99,101]
 for  (let P= numberD.length-1; P>=0; P--){
    console.log(numberD[P])
 }

console.log("--push---action-> add the element to last---return -> new length of array")

let city=["BBSR","Kolkota","Pune","Mumbai"]
let T1= city.push("Delhi")
console.log(T1)
console.log (city)


console.log("--unshift---action-> add the element to First---return -> new length of array")

let T2=city.unshift("Manipur")
console.log(T2)
console.log(city)


console.log("--pop---action-> removes the last element ---return -> return the same element")

let T3= city.pop()
console.log(T3)
console.log(city)


console.log("---shift-- Action -> removes the first element ---return-> return the same element")

let T4=city.shift()
console.log(T4)
console.log(city)


console.log("--includes---Action-> search for the element  ---return -> boolean--")

let T5=city.includes("BBSR")
console.log (T5)


console.log("-----program5---")
let birthyear=[1987,1988,1989,1990]
let age1= []
for (i=0;i<birthyear.length; i++)
{
    //console.log(i)
    //console.log (2023-birthyear[i])
    let s= 2023-birthyear[i]
    age1.push(s)

}
console.log(age1)



console.log("-----Marks above 50---")

let mark3=[29,51,39,67,89,49]
let above50 = []
for (i=0; i<mark3.length; i++){
    //console.log (i)
    if (mark3[i]>50){
        //console.log(mark3)
        above50.push(mark3[i])

    }
}
console.log (above50)
