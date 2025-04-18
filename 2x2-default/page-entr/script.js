const btn_alg_1 = document.getElementById("rightly-angls-alg-a-1")
const btn_alg_2 = document.getElementById("rightly-angls-alg-a-2")

const vid_alg_1 = document.getElementById("rightly-angls-alg-vid-1")
const vid_alg_2 = document.getElementById("rightly-angls-alg-vid-2")

const home = document.getElementById("home")


btn_alg_1.addEventListener("mouseover", () =>{
    vid_alg_1.play();
});
btn_alg_1.addEventListener("mouseout", () =>{
    vid_alg_1.pause();
    vid_alg_1.currentTime = 0;
});

btn_alg_2.addEventListener("mouseover", () =>{
    vid_alg_2.play();
});
btn_alg_2.addEventListener("mouseout", () =>{
    vid_alg_2.pause();
    vid_alg_2.currentTime = 0;
});
// Динамические частицы
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDuration = 15 + Math.random() * 15 + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.width = 2 + Math.random() * 3 + 'px';
        particle.style.height = particle.style.width;
        particlesContainer.appendChild(particle);
    }
}

createParticles();




home.addEventListener("click", () =>{
    window.location.href="../../main-page/main-index.html"
});