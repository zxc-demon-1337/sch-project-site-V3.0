const btn_alg_1 = document.getElementById("rightly-angls-alg-a-1")
const btn_alg_2 = document.getElementById("rightly-angls-alg-a-2")

const vid_alg_1 = document.getElementById("rightly-angls-alg-vid-1")
const vid_alg_2 = document.getElementById("rightly-angls-alg-vid-2")


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

home.addEventListener("click", () =>{
    window.location.href="../../main-page/main-index.html"
});

