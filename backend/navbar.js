function loadNavbar() {
    const navbar = document.getElementById("nav")
    navbar.innerHTML = `<div id="navbar">
            <div><a href="index.html">Login</a></div>
            <div><a href="tasks.html">Tasks</a></div>
            <div><a href="completed.html">Completed</a></div>
        </div>`
}
loadNavbar()
