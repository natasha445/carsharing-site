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
