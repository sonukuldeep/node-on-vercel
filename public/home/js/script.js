document.querySelectorAll(".card")
const handleMouseMovement = (e) => {
    document.querySelectorAll(".card").forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    });
};
document
    .querySelector("#cards")
    .addEventListener("mousemove", handleMouseMovement);

document.querySelectorAll(".card")
    .forEach(card => {
        const dataUrl = card.getAttribute('data-url')
        card.addEventListener('click', () => {
            window.location.href = dataUrl
        })
    })