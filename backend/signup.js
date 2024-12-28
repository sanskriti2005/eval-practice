import { endpoint } from "./endpoint.js";
import { usersEndpoint } from "./endpoint.js";

// catch main elements
const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    const dataToBePosted = { email, password }
    try {
        let userData = await getData();
        const foundUser = userData.find((ele) => ele.email === email);
        if (foundUser) {
            alert("User Already Exists");
            window.location.href = "index.html";
        } else {
            const req = await postData(dataToBePosted)
            if (req) {
                alert("Signup successful!")
                userData = await getData();
                window.location.href = "tasks.html";
            }
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

async function postData(dataToBePosted) {
    try {
        const res = await fetch(usersEndpoint, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(dataToBePosted)
        })
        if (res.ok) {
            return res.json()
        }
    } catch (error) {
        alert("Could not sign user up :(")
        console.log(error)
    }
}