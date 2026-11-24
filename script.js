// Otvara i zatvara navigaciju, uz ažuriranje ARIA stanja dugmeta.
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("nav");

function closeMenu() {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
}

menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
});

navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
});

// Priprema linkova i podrška za deljenje stranice.
const shareUrl = encodeURIComponent(window.location.href);
const facebookLink = document.querySelector(".share-facebook");
const linkedInLink = document.querySelector(".share-linkedin");
const nativeShareButton = document.querySelector(".share-native");

facebookLink.href = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
linkedInLink.href = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;

nativeShareButton.addEventListener("click", async () => {
    if (navigator.share) {
        await navigator.share({
            title: "Urban Coffee Novi Sad",
            url: window.location.href,
        });
        return;
    }

    await navigator.clipboard.writeText(window.location.href);
});