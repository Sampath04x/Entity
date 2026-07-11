/*==========================================================
PREMIUM NAVBAR
==========================================================*/

async function initNavbar() {
    const navbarContainer = document.getElementById("navbar");
    if (!navbarContainer) return;

    try {
        const response = await fetch("/components/navbar.html");
        if (!response.ok) throw new Error("Failed to load navbar component");
        
        navbarContainer.innerHTML = await response.text();

        // Check if page has a dark hero header
        if (document.querySelector(".page-hero") || document.querySelector(".about-hero")) {
            navbarContainer.classList.add("has-dark-hero");
        }

        // Setup mobile menu toggle
        const toggle = navbarContainer.querySelector(".menu-toggle");
        if (toggle) {
            toggle.addEventListener("click", () => {
                navbarContainer.classList.toggle("mobile-open");
            });
        }

        // Close mobile menu on clicking any nav-link
        const links = navbarContainer.querySelectorAll(".nav-link");
        links.forEach(link => {
            link.addEventListener("click", () => {
                navbarContainer.classList.remove("mobile-open");
            });
        });

        // Setup scrolled class on scroll
        window.addEventListener("scroll", () => {
            if (window.scrollY > 80) {
                navbarContainer.classList.add("scrolled");
            } else {
                navbarContainer.classList.remove("scrolled");
            }
        });
        
        // Initial scroll check
        if (window.scrollY > 80) {
            navbarContainer.classList.add("scrolled");
        }
    } catch (error) {
        console.error("Navbar loading error:", error);
    }
}
