const btn_stage_entr = document.getElementById("btn-stage-entr") 
const btn_stage_0_1 = document.getElementById("btn-stage-0-1")
const btn_stage_1= document.getElementById("btn-stage-1")
const btn_stage_2 = document.getElementById("btn-stage-2")
const btn_stage_3 = document.getElementById("btn-stage-3")

btn_stage_entr.addEventListener("click", () =>{
    window.location="../page-entr/index.html"
});

btn_stage_0_1.addEventListener("click", () =>{
    window.location="../page-0-1/index.html"
});

btn_stage_1.addEventListener("click", () =>{
    window.location="../page-1/index.html"
});

btn_stage_2.addEventListener("click", () =>{
    window.location="../page-2/index.html"
});

btn_stage_3.addEventListener("click", () =>{
    window.location="../page-3/index.html"
});


home.addEventListener("click", () =>{
    window.location.href="../../main-page/main-index.html"
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

const about = document.getElementById("about-us")

about.addEventListener("click", () =>{
    window.location.href = "../../adout-us/index.html"
})