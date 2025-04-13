const piv_1 = document.getElementById("piv-1-a")
const piv_3 = document.getElementById("piv-3-a")
const piv_5 = document.getElementById("piv-5-a")

const piv_1_vid = document.getElementById("piv-1-vid")
const piv_3_vid = document.getElementById("piv-3-vid")
const piv_5_vid = document.getElementById("piv-5-vid")


piv_1.addEventListener("mouseover", () =>{
    piv_1_vid.play();
});
piv_1.addEventListener("mouseout", () =>{
    piv_1_vid.pause();
    piv_1_vid.currentTime = 0;
});

piv_5.addEventListener("mouseover", () =>{
    piv_5_vid.play();
});
piv_5.addEventListener("mouseout", () =>{
    piv_5_vid.pause();
    piv_5_vid.currentTime = 0;
});

piv_3.addEventListener("mouseover", () =>{
    piv_3_vid.play();
});
piv_3.addEventListener("mouseout", () =>{
    piv_3_vid.pause();
    piv_3_vid.currentTime = 0;
});

const piv_1_1 = document.getElementById("piv-1-1-a")

const piv_1_2_vid = document.getElementById("piv-1-2-vid")
const piv_2_2_vid = document.getElementById("piv-2-2-vid")
const piv_3_2_vid = document.getElementById("piv-3-2-vid")

piv_1_1.addEventListener("mouseover", () =>{
    piv_1_2_vid.play()
    piv_2_2_vid.play()
    piv_3_2_vid.play()
});
piv_1_1.addEventListener("mouseout", () =>{
    piv_1_2_vid.pause();
    piv_1_2_vid.currentTime = 0;
    piv_2_2_vid.pause();
    piv_2_2_vid.currentTime = 0;
    piv_3_2_vid.pause();
    piv_3_2_vid.currentTime = 0;
});

const home = document.getElementById("home")

home.addEventListener("click", () =>{
    window.location.href="../../main-page/main-index.html"
});