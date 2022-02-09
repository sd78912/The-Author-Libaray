"use strict";

const login = document.querySelector(".login")
login.addEventListener("click", login_page)

function login_page(e){
    e.preventDefault()

    const container_signup = document.querySelector(".signup-content")
    container_signup.classList.add("hidden")

    const container_signin = document.querySelector(".signin-content")
    container_signin.classList.remove("hidden")
}



const sign_up = document.querySelector(".sign_up")
sign_up.addEventListener("click", signup_page)

function signup_page(e){
    e.preventDefault()

    const container_signin = document.querySelector(".signin-content")
    container_signin.classList.add("hidden")

    const container_signup = document.querySelector(".signup-content")
    container_signup.classList.remove("hidden")
}

const lgn = document.querySelector('.Log')
const reg = document.querySelector('.Reg')
// console.log(sign_up)
lgn.addEventListener("click", Som);
reg.addEventListener("click", sig);

const temp_database = [{Name: "admin", Password: "admin@123"}]

function Som(e)
{
     e.preventDefault()
    const user = document.querySelector('.User1').value
    const password = document.querySelector('.Pass1').value
    // console.log(temp_database[0][0], temp_database[0][1])

    for (let i=0; i<temp_database.length; i++){
        if(temp_database[i].Name===user && temp_database[i].Password===password){
            window.location.replace("index.html");
            return
        }
    }
    alert("Wrong Credentials, please try again!")
        
    console.log(temp_database)
    // console.log(temp_database.includes())  
}


function sig(e)
 {
      e.preventDefault()
    // console.log("Inside the function")
    const name = document.querySelector('.User2').value
    const email_id = document.querySelector('.Email').value
    const password1 = document.querySelector('.Pass2').value
    const cnfpassword1 = document.querySelector('.Pass3').value
    console.log(name)
     for(let i=0; i<temp_database.length; i++)
     {
     if(temp_database[i].Name === name && temp_database[i].Password === password1)
     {
     alert("⚠️ User already exists, please login instead!!")
    return
     }
     } 
     if(name.length >= 3 && email_id.length >= 10 && email_id.includes("@") && email_id.includes(".com") && password1.length >= 8 && cnfpassword1 === password1){
     temp_database.push({Name:name, Password:password1 })
     console.log(temp_database)
     alert("✅ Registration Successful, Please login!!")
  }
     else{
         alert("Wrong credentials!!!!!")
     }   
    
 }
       