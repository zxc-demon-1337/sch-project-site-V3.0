const vid = document.getElementById("vid")
const video = document.getElementById("video")

const F = document.getElementById("F")
//F
F.addEventListener("mouseover", () =>{
    let rect = F.getBoundingClientRect();
    vid.style.display = "block";
    vid.style.top = `${rect.top - 200}px`;
    vid.style.left = `${rect.left - 130}px`;
    video.src="../../imgs/F.webm"
    video.play().catch(error => {
        console.error('Ошибка при запуске видео:', error);
    });

});
F.addEventListener("mouseout", () =>{
    vid.style.display = "none"
});

const f = document.getElementById("F'")
f.addEventListener("mouseover", () =>{
    let rect = f.getBoundingClientRect();
    vid.style.display = "block"
    vid.style.top = `${rect.top - 200}px`
    vid.style.left = `${rect.left - 130}px`
    video.src="../../imgs/F'.webm"
    video.play().catch(error => {
        console.error('Ошибка при запуске видео:', error);
    });
});
f.addEventListener("mouseout", () =>{
    vid.style.display = "none"
});
//

//B
const B = document.getElementById("B")
B.addEventListener("mouseover", () =>{
    let rect = B.getBoundingClientRect();
    vid.style.display = "block"
    vid.style.top = `${rect.top - 200}px`
    vid.style.left = `${rect.left - 130}px`
    video.src="../../imgs/B.webm"
    video.play().catch(error => {
        console.error('Ошибка при запуске видео:', error);
    });
});
B.addEventListener("mouseout", () =>{
    vid.style.display = "none"
});

const b = document.getElementById("B'")
b.addEventListener("mouseover", () =>{
    let rect = b.getBoundingClientRect();
    vid.style.display = "block"
    vid.style.top = `${rect.top - 200}px`
    vid.style.left = `${rect.left - 130}px`
    video.src="../../imgs/B'.webm"
    video.play().catch(error => {
        console.error('Ошибка при запуске видео:', error);
    });
});
b.addEventListener("mouseout", () =>{
    vid.style.display = "none"
});
//

//R
const R = document.getElementById("R")
R.addEventListener("mouseover", () =>{
    let rect = R.getBoundingClientRect();
    vid.style.display = "block"
    vid.style.top = `${rect.top - 200}px`
    vid.style.left = `${rect.left - 130}px`
    video.src="../../imgs/R.webm"
    video.play().catch(error => {
        console.error('Ошибка при запуске видео:', error);
    });
});
R.addEventListener("mouseout", () =>{
    vid.style.display = "none"
});

const r = document.getElementById("R'")
r.addEventListener("mouseover", () =>{
    let rect = r.getBoundingClientRect();
    vid.style.display = "block"
    vid.style.top = `${rect.top - 200}px`
    vid.style.left = `${rect.left - 130}px`
    video.src="../../imgs/R'.webm"
    video.play().catch(error => {
        console.error('Ошибка при запуске видео:', error);
    });
});
r.addEventListener("mouseout", () =>{
    vid.style.display = "none"
});
//

//L
const L = document.getElementById("L")
L.addEventListener("mouseover", () =>{
    let rect = L.getBoundingClientRect();
    vid.style.display = "block"
    vid.style.top = `${rect.top - 200}px`
    vid.style.left = `${rect.left - 130}px`
    video.src="../../imgs/L.webm"
    video.play().catch(error => {
        console.error('Ошибка при запуске видео:', error);
    });
});
L.addEventListener("mouseout", () =>{
    vid.style.display = "none"
});

const l = document.getElementById("L'")
l.addEventListener("mouseover", () =>{
    let rect = l.getBoundingClientRect();
    vid.style.display = "block"
    vid.style.top = `${rect.top - 200}px`
    vid.style.left = `${rect.left - 130}px`
    video.src="../../imgs/L'.webm"
    video.play().catch(error => {
        console.error('Ошибка при запуске видео:', error);
    });
});
l.addEventListener("mouseout", () =>{
    vid.style.display = "none"
});
//

//U
const U = document.getElementById("U")
U.addEventListener("mouseover", () =>{
    let rect = U.getBoundingClientRect();
    vid.style.display = "block"
    vid.style.top = `${rect.top - 200}px`
    vid.style.left = `${rect.left - 130}px`
    video.src="../../imgs/U.webm"
    video.play().catch(error => {
        console.error('Ошибка при запуске видео:', error);
    });
});
U.addEventListener("mouseout", () =>{
    vid.style.display = "none"
});

const u = document.getElementById("U'")
u.addEventListener("mouseover", () =>{
    let rect = u.getBoundingClientRect();
    vid.style.display = "block"
    vid.style.top = `${rect.top - 200}px`
    vid.style.left = `${rect.left - 130}px`
    video.src="../../imgs/U'.webm"
    video.play().catch(error => {
        console.error('Ошибка при запуске видео:', error);
    });
});
u.addEventListener("mouseout", () =>{
    vid.style.display = "none"
});
//

//D
const D = document.getElementById("D")
D.addEventListener("mouseover", () =>{
    let rect = D.getBoundingClientRect();
    vid.style.display = "block"
    vid.style.top = `${rect.top - 200}px`
    vid.style.left = `${rect.left - 130}px`
    video.src="../../imgs/D.webm"
    video.play().catch(error => {
        console.error('Ошибка при запуске видео:', error);
    });
});
D.addEventListener("mouseout", () =>{
    vid.style.display = "none"
});

const d = document.getElementById("D'")
d.addEventListener("mouseover", () =>{
    let rect = d.getBoundingClientRect();
    vid.style.display = "block"
    vid.style.top = `${rect.top - 200}px`
    vid.style.left = `${rect.left - 130}px`
    video.src="../../imgs/D'.webm"
    video.play().catch(error => {
        console.error('Ошибка при запуске видео:', error);
    });
});
d.addEventListener("mouseout", () =>{
    vid.style.display = "none"
});
//

const home = document.getElementById("home")

home.addEventListener("click", () =>{
    window.location.href="../../main-page/main-index.html"
});
