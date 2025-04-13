const cube_2_image = document.getElementById("cube-2x2")
const cube_3_image = document.getElementById("cube-3x3")
const cube_4_image = document.getElementById("cube-4x4")

const home_btn = document.getElementById("home")


const methodButton_2x2Def = document.getElementById("m-2x2-def")
const methodButton_2x2Adv = document.getElementById("m-2x2-adv")

const methodButton_3x3Def = document.getElementById("m-3x3-def")
const methodButton_3x3Adv = document.getElementById("m-3x3-adv")

const methodButton_4x4Def = document.getElementById("m-4x4-def")
const methodButton_4x4Adv = document.getElementById("m-4x4-adv")


home_btn.addEventListener("click", () =>{
    window.location.href = "../main-page/main-index.html"
})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
methodButton_2x2Def.addEventListener('mouseover', () =>{
    cube_2_image.style.filter = 'drop-shadow(0 0 5px var(--primary))';
    cube_image.style.transition = 'filter 1s ease';
});

methodButton_2x2Def.addEventListener('mouseout', () =>{
    cube_2_image.style.filter = '';
});

methodButton_2x2Def.addEventListener("click", () =>{
    window.location.href="../2x2-default/page-0-1/index.html"
})


methodButton_2x2Adv.addEventListener("mouseover", () =>{
    cube_2_image.style.filter = "drop-shadow(0 0 5px var(--accent))";
    cube_2_image.style.transition = "filter 1s ease";
});

methodButton_2x2Adv.addEventListener("mouseout", () =>{
    cube_2_image.style.filter = ""
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
methodButton_3x3Def.addEventListener("mouseover", () =>{
    cube_3_image.style.filter = "drop-shadow(0 0 5px var(--primary))";
    cube_3_image.style.transition = "filter 1s ease";
});

methodButton_3x3Def.addEventListener("mouseout", () =>{
    cube_3_image.style.filter = "";
});


methodButton_3x3Adv.addEventListener("mouseover", () =>{
    cube_3_image.style.filter = "drop-shadow(0 0 5px var(--accent))";
    cube_3_image.style.transition = "filter 1s ease";
});

methodButton_3x3Adv.addEventListener("mouseout", () =>{
    cube_3_image.style.filter = "";
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

methodButton_4x4Def.addEventListener("mouseover", () =>{
    cube_4_image.style.filter = "drop-shadow(0 0 5px var(--primary))";
    cube_4_image.style.transition = "filter 1s ease";
});

methodButton_4x4Def.addEventListener("mouseout", () =>{
    cube_4_image.style.filter = "";
});


methodButton_4x4Adv.addEventListener("mouseover", () =>{
    cube_4_image.style.filter = "drop-shadow(0 0 5px var(--accent))";
    cube_4_image.style.transition = "filter 1s ease";
});

methodButton_4x4Adv.addEventListener("mouseout", () =>{
    cube_4_image.style.filter = "";
});


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
};

createParticles();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", () => {

    const framesContainer = document.getElementById("cube-selector-2");
    const leftButton = document.getElementById("left");
    const rightButton = document.getElementById("right");
  
    // Функция для сдвига фреймов вправо
    function shiftRight() {
      const frames = Array.from(framesContainer.children);
      const lastFrame = frames.pop(); // Убираем последний элемент
      frames.unshift(lastFrame); // Добавляем его в начало
      frames.forEach(frame => framesContainer.appendChild(frame)); // Обновляем DOM
    }
  
    // Функция для сдвига фреймов влево
    function shiftLeft() {
      const frames = Array.from(framesContainer.children);
      const firstFrame = frames.shift(); // Убираем первый элемент
      frames.push(firstFrame); // Добавляем его в конец
      frames.forEach(frame => framesContainer.appendChild(frame)); // Обновляем DOM
    }
  
    // Привязываем обработчики событий к кнопкам
    rightButton.addEventListener("click", shiftRight);
    leftButton.addEventListener("click", shiftLeft);
});