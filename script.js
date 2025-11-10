const popup = document.querySelector(".popup")
const shareBtn = document.querySelector(".share-container")

shareBtn.addEventListener("click", () => {
    shareBtn.classList.toggle("change");
    popup.classList.toggle("show")
    document.querySelector(".share-img").classList.toggle("white");
})