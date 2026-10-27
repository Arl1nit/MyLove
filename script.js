const lovePage = document.querySelector(".love-page");
const loveContent = document.querySelector(".love-content");
const heartPath = document.querySelector(".heart path");

heartPath.addEventListener("mouseenter", () => {
    if (loveContent.classList.contains("is-selected")) {
        return;
    }

    lovePage.querySelectorAll(".letter").forEach((letter) => {
        letter.style.opacity = "0.72";
    });
});

heartPath.addEventListener("mouseleave", () => {
    if (loveContent.classList.contains("is-selected")) {
        return;
    }

    lovePage.querySelectorAll(".letter").forEach((letter) => {
        letter.style.opacity = "0";
    });
});

heartPath.addEventListener("click", () => {
    loveContent.classList.add("is-selected");
});