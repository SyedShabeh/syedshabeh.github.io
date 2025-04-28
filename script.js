        // for type writer
        const words = ["DESIGNER", "DEVELOPER"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typingSpeed = 150;
        const erasingSpeed = 100;
        const delayBetweenWords = 1500; // time to wait before typing next word
        const typedText = document.getElementById("typed-text");

        function type() {
            const currentWord = words[wordIndex];

            if (isDeleting) {
                typedText.textContent = currentWord.substring(0, charIndex--);
                if (charIndex < 0) {
                    isDeleting = false;
                    wordIndex = (wordIndex + 1) % words.length;
                    setTimeout(type, 500);
                } else {
                    setTimeout(type, erasingSpeed);
                }
            } else {
                typedText.textContent = currentWord.substring(0, charIndex++);
                if (charIndex > currentWord.length) {
                    isDeleting = true;
                    setTimeout(type, delayBetweenWords);
                } else {
                    setTimeout(type, typingSpeed);
                }
            }
        }

        document.addEventListener("DOMContentLoaded", () => {
            setTimeout(type, 1000);
        });

        // for faq details
        const allDetails = document.querySelectorAll(".accordion details");

        allDetails.forEach((targetDetail) => {
            targetDetail.addEventListener("toggle", () => {
                if (targetDetail.open) {
                    allDetails.forEach((detail) => {
                        if (detail !== targetDetail) detail.removeAttribute("open");
                    });
                }
            });
        });

        // for light dark mode
        const toggleBtn = document.getElementById("theme-toggle");
        const iconImg = document.getElementById("theme-icon");
        const textSpan = document.getElementById("theme-text");

        toggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");
            const isLight = document.body.classList.contains("light-mode");

            // Update text and button style
            textSpan.textContent = isLight ? "🌙" : "💡";
            toggleBtn.classList.toggle("btn-outline-light", !isLight);
            toggleBtn.classList.toggle("btn-outline-dark", isLight);

            // Swap icon
            iconImg.src = isLight ? "light.png" : "dark.png";
            iconImg.alt = isLight ? "Sun Icon" : "Moon Icon";
        });