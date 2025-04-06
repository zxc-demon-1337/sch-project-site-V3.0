document.getElementById('startBtn').addEventListener('click', function() {
    // Анимация кнопки
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 200);
    
    // Эффект вспышки
    const flash = document.createElement('div');
    flash.style.position = 'fixed';
    flash.style.top = '0';
    flash.style.left = '0';
    flash.style.width = '100%';
    flash.style.height = '100%';
    flash.style.background = 'rgba(0, 247, 255, 0.5)';
    flash.style.zIndex = '1000';
    flash.style.opacity = '0';
    flash.style.transition = 'opacity 0.5s';
    document.body.appendChild(flash);
    
    setTimeout(() => {
        flash.style.opacity = '1';
    }, 10);
    
    setTimeout(() => {
        flash.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(flash);
        }, 500);
    }, 100);
    
    setTimeout(() => {
        window.location.href = '../cubes/index.html';
    }, 600);
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
