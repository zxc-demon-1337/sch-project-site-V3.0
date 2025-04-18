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


const home = document.getElementById("home")

home.addEventListener("click", () =>{
    window.location.href="../main-page/main-index.html"
});

const about = document.getElementById("about-us")

about.addEventListener("click", () =>{
    window.location.href = "../adout-us/index.html"
})