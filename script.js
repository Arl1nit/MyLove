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
    loveContent.querySelector(".letter-u").insertAdjacentHTML(
        "beforeend",
        '<span class="new-letter">R...</span>'
    );

    ["EYES...", "SMILE...", "LAUGH...", "JOKES...", "LOVE...", "PERSONALITY...", "HAIR...", "FACE...", "TOUCHES...", "EVERYTHING!", "I LOVE YOU!"].forEach((message, index) => {
        const line = document.createElement("span");
        line.className = "new-letter";
        line.textContent = message;
        line.style.animationDelay = `${(index + 1) * 0.5}s`;
        if (index === 9 || index === 10) {
            line.style.fontSize = "clamp(16rem, 6vw, 6rem)";
        }
        loveContent.querySelector(".messages").append(line);
    });

    const image = document.createElement("img");
    image.className = "new-letter rerender-image";
    image.src = "US.jpeg";
    image.alt = "US";
    image.style.animationDelay = "6s";
    lovePage.append(image);
});