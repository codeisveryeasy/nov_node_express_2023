console.log("Working with functions in node")

//define few functions

function welcomeBasic() {
    console.log("Welcome to node runtime")
}

function welcomeName(name) {
    console.log(name + ", welcome to node runtime")
    console.log(`${name}, welcome to node runtime`)
}

//arrow function
let welcomeArrowBasic=()=>{
    console.log("Welcome to node runtime, arrow")
}

//arrow function
let welcomeArrowName=(name)=>{
    console.log(`${name}, Welcome to node runtime, arrow`)
}

//call the functions which are defined above
welcomeBasic()
welcomeName("Airasia")
welcomeArrowBasic()
welcomeArrowName("Airasia Academy")