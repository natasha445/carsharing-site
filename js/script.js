document.addEventListener("DOMContentLoaded", () => {

    const smoothScrollTo = (targetId) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const headerHeight = 73;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 15;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

 document.getElementById("link-info").addEventListener("click", (e) => {
        e.preventDefault();
        smoothScrollTo("why-choose-us");
    });

    document.getElementById("link-rent").addEventListener("click", (e) => {
        e.preventDefault();
        smoothScrollTo("available-cars");
    });

    document.getElementById("link-how").addEventListener("click", (e) => {
        e.preventDefault();
        smoothScrollTo("how-it-works");
    });
    document.getElementById("link-contacts").addEventListener("click", (e) => {
        e.preventDefault();
        smoothScrollTo("contact-section");
    });

    document.getElementById("btn-start-rent").addEventListener("click", () => {
        smoothScrollTo("available-cars");
    });

    document.getElementById("btn-more").addEventListener("click", () => {
        smoothScrollTo("why-choose-us");
    });
     const rentButtons = document.querySelectorAll(".btn-rent");
    rentButtons.forEach(button => {
        button.addEventListener("click", () => {
            smoothScrollTo("contact-section");
        });
    });