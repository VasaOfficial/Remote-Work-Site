const featuresArrow = document.querySelector(".features-arrow")
const featuresOpen = document.querySelector(".features-open")
const companyArrow = document.querySelector(".company-arrow")
const companyOpen = document.querySelector(".company-open")

featuresArrow.addEventListener("click", () => featuresOpen.classList.toggle("hidden"))
companyArrow.addEventListener("click", () => companyOpen.classList.toggle("hidden"))