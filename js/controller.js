const menuIcon = document.querySelector(".menu-icon");
const CloseMenuIcon = document.querySelector(".close-icon");
const menu = document.querySelector(".menu");
const logOutIcon = document.querySelector(".log-out-icon");
const logOutIcon1 = document.querySelector(".log-out-icon-1")
const logOutBtn = document.querySelector(".log-out-btn");
const chattingArea = document.querySelector(".chatting-area");
const toSiganl = document.querySelector(".to-signal");
const direct = document.querySelectorAll(".user");
const userImg = document.querySelector(".user-img");
const fullName = document.querySelector(".full-name");
const nosegnal = document.querySelector(".no-segnal");
const upload = document.querySelector(".upload");

let user = JSON.parse(localStorage.getItem("user"))

upload.addEventListener("change", () => {

    // let img = URL.createObjectURL(upload.files[0]);
    user.img = [upload]
    debugger

    fetch(`https://655f26f7879575426b44ad38.mockapi.io/users/${user.id}`, {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
            "Content-type": "application/json"
        }
    }).then(res => res.json())
        .then(data => {
            // console.log(JSON.parse(data.img))
            localStorage.setItem('user', JSON.stringify(data))
        })
    // userImg.setAttribute('src',img)
})


menuIcon.addEventListener("click", () => {
    menu.style.left = 0;
})

CloseMenuIcon.addEventListener("click", () => {
    menu.style.left = "-350px";
})

logOutIcon.addEventListener("click", () => {
    if (logOutBtn.style.display == "none") {
        logOutBtn.style.display = "block"
    }
    else {
        logOutBtn.style.display = "none";
    }
})

direct.forEach(item => {
    item.addEventListener("click", () => {
        chattingArea.style.display = "flex";
        nosegnal.style.display = 'none';
    })
})



toSiganl.addEventListener("click", () => {
    chattingArea.style.display = "none";
    nosegnal.style.display = 'flex';
})



window.addEventListener('load', () => {


    if (!user) {
        window.location.href = "signin.html";
    }




    else {
        console.log(user.img)
        fullName.innerHTML = user.fullName;
        userImg.setAttribute("src", user.img ? user.img : "https://avatars.mds.yandex.net/i?id=4137ec77c7d43f96333157bfcaf12a003b63241f-4502683-images-thumbs&n=13")
    }
})

logOutIcon1.addEventListener("click", () => {
    localStorage.removeItem("user");
    window.location.href = "signin.html"
})

logOutBtn.addEventListener("click", () => {
    localStorage.removeItem("user");


    window.location.href = "signin.html"
})

