let scrollContainer = document.querySelector(".gallery")
let backBtn = document.getElementById("backBtn")
let nextBtn = document.getElementById("nextBtn")

scrollContainer.addEventListener("wheel",function(){
    evt.preventDefault();
    scrollContainer.scrollLeft+=evt.deltaY;
    scrollContainer.style.scrollBehavior="auto";

});

nextBtn.addEventListener("click",function(){
    scrollContainer.style.scrollBehavior="smooth";
    scrollContainer.style.transition="transform 0.5s";
    scrollContainer.scrollLeft+=900;
});

backBtn.addEventListener("click",function(){
    scrollContainer.style.scrollBehavior="smooth";
    scrollContainer.style.transition="transform 0.5s";
    scrollContainer.scrollLeft-=900;
});
