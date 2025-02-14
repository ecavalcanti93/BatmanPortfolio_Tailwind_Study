const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("#nav-menu");
const navList = document.querySelectorAll("#nav-menu li")

menuButton.addEventListener("click", () =>{
    navMenu.classList.remove("hidden", "animate-slide-out");
    navMenu.classList.add("flex", "animate-slide-in");
});

navList.forEach((liElement)=> {
    liElement.addEventListener("click", () => {
        if(window.innerWidth >= 640) return;
        navMenu.classList.add("animate-slide-out");
        navMenu.classList.remove("animate-slide-in");
    })
});

navMenu.addEventListener("animationend", (e) => {
    if(e.animationName !== "slide-out") return;
    navMenu.classList.add("hidden");
    navMenu.classList.remove("flex");
});

window.addEventListener("resize", () =>{
    if(window.innerWidth >= 640){
        navMenu.classList.remove("animate-slide-in", "animate-slide-out")
    }
});