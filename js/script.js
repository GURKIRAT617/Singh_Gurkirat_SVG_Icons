document.querySelectorAll("img").forEach(icon => {
    icon.addEventListener("click", function () {
        console.log(`Clicked on: ${this.id}`);
    });
});
