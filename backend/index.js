import { endpoint } from "./endpoint.js";
import { usersEndpoint } from "./endpoint.js";

// catch main elements
const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const emailInput = loginForm.email.value;
    const passwordInput = loginForm.password.value;
    try {
        const userData = await getData();
        const foundUser = await userData.find((ele) => ele.email === emailInput);
        if(await foundUser){
            if(await foundUser.password === passwordInput){
                alert("Login successful!");
                window.onload.href = "tasks.html";
            } else{
                alert("Wrong Password!");
            }
        } else {
            alert("User Not found");
        }
    } catch (error) {
        console.log(error);
    }
})

async function getData() {
    try {
        const res = await fetch(usersEndpoint);
        const data = await res.json()
        return data
    } catch (error) {
        alert("Could not fetch user data")
        console.log(error)
    }
}