const navLinks = document.querySelectorAll(".nav-link");
const logos = document.querySelectorAll(".social-logo");
const projectLinks = document.querySelectorAll(".buttons p");

//Make an underline and color on hover (desktop)
navLinks.forEach((link) => {
    link.addEventListener("mouseover", () => {
        if (link.classList.contains("1")) {
            link.classList.add("link-hover");
        } else if (link.classList.contains("2")) {
            link.classList.add("link-hover-2");
        } else {
            link.classList.add("link-hover-3");
        }
    });
});

//Make an underline and color on hover (Mobile)
navLinks.forEach((link) => {
    link.addEventListener("touchstart", () => {
        if (link.classList.contains("1")) {
            link.classList.add("link-hover");
        } else if (link.classList.contains("2")) {
            link.classList.add("link-hover-2");
        } else {
            link.classList.add("link-hover-3");
        }
    });
});

navLinks.forEach((link) => {
    link.addEventListener("mouseout", () => {
        link.classList.remove("link-hover");
        link.classList.remove("link-hover-2");
        link.classList.remove("link-hover-3");
    });
});

navLinks.forEach((link) => {
    link.addEventListener("touchend", () => {
        link.classList.remove("link-hover");
        link.classList.remove("link-hover-2");
        link.classList.remove("link-hover-3");
    });
});

logos.forEach((logo) => {
    logo.addEventListener("mouseover", () => {
        logo.classList.add("social-logo-active");
    });
});

logos.forEach((logo) => {
    logo.addEventListener("mouseout", () => {
        logo.classList.remove("social-logo-active");
    });
});

logos.forEach((logo) => {
    logo.addEventListener("touchstart", () => {
        logo.classList.add("social-logo-active");
    });
});

logos.forEach((logo) => {
    logo.addEventListener("touchend", () => {
        logo.classList.remove("social-logo-active");
    });
});

projectLinks.forEach((link) => {
    link.addEventListener("mouseover", () => {
        link.classList.add("link-hover-2");
    });
});

projectLinks.forEach((link) => {
    link.addEventListener("mouseout", () => {
        link.classList.remove("link-hover-2");
    });
});

projectLinks.forEach((link) => {
    link.addEventListener("touchstart", () => {
        link.classList.add("link-hover-2");
    });
});

projectLinks.forEach((link) => {
    link.addEventListener("touchend", () => {
        link.classList.remove("link-hover-2");
    });
});
