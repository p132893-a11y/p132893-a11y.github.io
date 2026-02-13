document.addEventListener("DOMContentLoaded", function () {

    const yesBtn = document.querySelector(".yes");
    const noBtn = document.querySelector(".no");
    const container = document.querySelector(".container");

    let scale = 1;
    let moveRight = 0;
    let clickCount = 0;
    const maxClicks = 12;

    const noTexts = [
        "Are you sure?",
        "PRESS YES",
        "Please",
        "Press yes please",
        "I am fading soon",
        "Are you sure?!?!?!?",
        "Pookie please",
        "I am going to fade sooonnnnn",
        "Please press yessss",
        "I ammm fadinggg",
        "I am fadingg"
    ];

    let textIndex = 0;

    // NO BUTTON LOGIC
    noBtn.addEventListener("click", function () {

        if (clickCount >= maxClicks) return;

        clickCount++;

        // YES grows
        scale += 2.3;
        yesBtn.style.transform = `scale(${scale})`;

        // NO slides right
        moveRight += 70;
        noBtn.style.left = moveRight + "px";

        // Change NO text
        if (textIndex < noTexts.length - 1) {
            noBtn.textContent = noTexts[textIndex];
            textIndex++;
        }

        // Dramatic fade out
        if (clickCount === maxClicks) {

            setTimeout(() => {
                noBtn.style.opacity = "0";
                noBtn.style.transform = "scale(0.5)";
                noBtn.style.left = moveRight + 150 + "px";
            }, 200);

            setTimeout(() => {
                noBtn.style.display = "none";
            }, 800);
        }
    });

    // YES BUTTON LOGIC
    yesBtn.addEventListener("click", function () {

        container.innerHTML = `
            <img src="jumping-gatito.gif" class="success-gif" alt="Happy Cat">
            <h2>YAYYY  I knew it you would say yes 😏</h2>
            <button class="btn next">Next</button>
        `;

        const nextBtn = document.querySelector(".next");

        nextBtn.addEventListener("click", function () {

            container.innerHTML = `
                <img src="sleepcat.gif" class="success-gif" alt="Get Well">
                <h2>Get well soonnnn</h2>
            `;
        });

    });

});
