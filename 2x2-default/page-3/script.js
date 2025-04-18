const btn_alg_1 = document.getElementById("formula-1")
const btn_alg_2 = document.getElementById("formula-2")

const vid_alg_1 = document.getElementById("vid-1")
const vid_alg_2 = document.getElementById("vid-2")


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
