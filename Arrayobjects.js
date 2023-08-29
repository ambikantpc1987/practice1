//Array and Objects

let students = [
    {
        firstName:"Ram",
        lastName:"Sahoo",
        age:11,
        rollNo:19,
        skills:["Math","Science","GK"],
        city:"Talcher"
    },
    {
        firstName:"Sita",
        lastName:"Pradhan",
        age:17,
        rollNo:11,
        skills:["Science","History"],
        city:"Angul"
    },
    {
        firstName:"Laxman",
        lastName:"Pandey",
        age:10,
        rollNo:9,
        skills:["Hindi","Geography","Drawing","English","Oriya"],
        city:"Bhubaneswar"
    },

    {
        firstName:"Bharat",
        lastName:"Das",
        age:18,
        rollNo:2,
        skills:["Hindi1","Math1","Sankrit","News"],
        city:"cuttack"
    }
]

//  fullname print
//console.log(students[0].firstName + students[0].lastName)
// program
for(let i = 0 ; i < students.length ; i++){
    console.log(students[i].firstName+students[i].lastName)
}

//Program
students.forEach(function(el){
    console.log (el.firstName + el.lastName)
})


//Program: People with Angul city
students.forEach(function(el,index,arr){
    if (el.city=="Angul"){
        console.log(el.firstName + el.lastName)
    }
})


//Program: numberofskills
students.forEach(function(el){
    console.log (el.firstName +"-" +  el.skills.length)

})

//Program: add Subjects Marathi to all objects 
students.forEach(function(el,index,arr){
    el.language="Marathi"
})
console.log (students)


//Program: find city as Angul and skill is history
students.forEach(function (el){
   if (el.city=="Angul" &&  el.skills.includes ("History")){
    console.log(el.firstName + el.lastName)
   }
})

//Print number of student above 15 years.
students.forEach(function(el){
    if (el.age >15) {
        console.log (el.firstName)
    }
})


//Program: Avarage of all students
let A1=students.reduce(function(acc,el){
    return acc +el.age
},0)
console.log(A1/students.length)


