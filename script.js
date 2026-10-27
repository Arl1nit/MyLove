const lovePage = document.querySelector(".love-page");
const heartPath = document.querySelector(".heart path");

heartPath.addEventListener("mouseenter", () => {
    lovePage.querySelectorAll(".letter").forEach((letter) => {
        letter.style.opacity = "0.72";
    });
});

heartPath.addEventListener("mouseleave", () => {
    lovePage.querySelectorAll(".letter").forEach((letter) => {
        letter.style.opacity = "0";
    });
});