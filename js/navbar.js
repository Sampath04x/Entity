function initNavbar() {

    const navbar = document.getElementById("navbar");

    navbar.innerHTML = `
    <div class="nav-wrapper">

        <a href="#" class="logo">
            <img src="assets/logo/logo.svg" alt="Entity">
        </a>

        <nav>

            <ul class="nav-links">

                <li><a href="index.html#hero">Home</a></li>

                <li><a href="about.html">About</a></li>

                <li><a href="index.html#services">Services</a></li>

                <li><a href="projects.html">Projects</a></li>

                <li><a href="contact.html">Contact</a></li>

            </ul>

        </nav>

        <a href="#" class="btn btn-dark">

            Let's Talk

            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 24 24">

            <path
            d="M5 12H19"

            stroke="currentColor"

            stroke-width="2"

            stroke-linecap="round"/>

            <path

            d="M12 5L19 12L12 19"

            stroke="currentColor"

            stroke-width="2"

            stroke-linecap="round"

            stroke-linejoin="round"/>

            </svg>

        </a>

        <div class="menu-toggle">

            <span></span>

            <span></span>

            <span></span>

        </div>

    </div>
    `;

    const menu = navbar.querySelector(".menu-toggle");

    menu.addEventListener("click", () => {

        navbar.classList.toggle("mobile-open");

    });

    window.addEventListener("scroll", () => {

        navbar.classList.toggle(

            "scrolled",

            window.scrollY > 40

        );

    });

}