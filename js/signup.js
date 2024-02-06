const fullname = document.querySelector(".fullname");
const username = document.querySelector(".username");
const password = document.querySelector(".password");
const add = document.querySelector(".add");
let users = [];

window.addEventListener('load', () => {
    fetch("https://655f26f7879575426b44ad38.mockapi.io/users")
        .then(res => res.json())
        .then(data => {
            users = data;
        })
})


add.addEventListener("submit", (e) => {
    e.preventDefault();

    let user = {};
    user.fullName = fullname.value;
    user.username = username.value;
    user.password = password.value;
    user.img = "";
    user.id = null;

    if (users.some(item => item.username == user.username)) {
        alert("This username is already used!!!")
    } else {
        fetch("https://655f26f7879575426b44ad38.mockapi.io/users", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem("user", JSON.stringify(data))
                window.location.href = "index.html";
            })
    }

})
