// Mobilna navigacija: otvaranje menija i zatvaranje nakon izbora stavke.
const button = document.querySelector(".menu-toggle"),
    nav = document.querySelector("nav");
button.addEventListener("click", () => {
    nav.classList.toggle("open");
    button.setAttribute("aria-expanded", nav.classList.contains("open"));
});
document
    .querySelectorAll("nav a")
    .forEach((link) =>
        link.addEventListener("click", () => nav.classList.remove("open")),
    );
