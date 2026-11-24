// Mobilna navigacija i održavanje ARIA stanja dugmeta.
const button = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
button.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    button.setAttribute("aria-expanded", String(isOpen));
});
document.querySelectorAll("nav a").forEach((link) =>
    link.addEventListener("click", () => {
        nav.classList.remove("open");
        button.setAttribute("aria-expanded", "false");
    }),
);
// Formiranje URL-ova za deljenje aktuelne stranice.
const shareUrl = encodeURIComponent(location.href);
document.querySelector(".share-facebook").href =
    "https://www.facebook.com/sharer/sharer.php?u=" + shareUrl;
document.querySelector(".share-linkedin").href =
    "https://www.linkedin.com/sharing/share-offsite/?url=" + shareUrl;
// Koristi sistemski dijalog za deljenje kada je dostupan; inače kopira URL.
document.querySelector(".share-native").addEventListener("click", async () => {
    if (navigator.share) {
        await navigator.share({
            title: "Urban Coffee Novi Sad",
            url: location.href,
        });
    } else {
        await navigator.clipboard.writeText(location.href);
    }
});
