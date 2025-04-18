const mail = document.getElementById("mail")
const phone = document.getElementById("phone")

const c_mail = document.getElementById("copied-mail")
const c_phone = document.getElementById("copied-phone")
const c_tg = document.getElementById("copied-tg")


mail.addEventListener("click", () =>{
    navigator.clipboard.writeText("123mail123@mail.ru")
    c_mail.style.visibility = "visible"
})

tg.addEventListener("click", () =>{
    window.location = "https://t.me/@MCubes"
    c_tg.style.visibility = "visible"
})

phone.addEventListener("click", () =>{
    c_phone.style.opacity = "1"
    navigator.clipboard.writeText("+78005553535")
    setTimeout(() =>{
        c_phone.style.opacity = "0"
    }, 1000)
})

mail.addEventListener("click", () =>{
    c_mail.style.opacity = "1"
    navigator.clipboard.writeText("123mail123@mail.ru")
    setTimeout(() =>{
        c_mail.style.opacity = "0"
    }, 1000)
})
tg.addEventListener("click", () =>{
    c_tg.style.opacity = "1"
    navigator.clipboard.writeText("@dabicanis")
    setTimeout(() =>{
        c_tg.style.opacity = "0"
    }, 1000)
})

const home = document.getElementById("home")

home.addEventListener("click", () =>{
    window.location.href="../main-page/main-index.html"
});