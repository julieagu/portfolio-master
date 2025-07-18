function includeHTML(file, elementId) {
  fetch(file)
    .then((res) => {
      if (!res.ok) throw new Error("Include failed");
      return res.text();
    })
    .then((html) => {
      document.getElementById(elementId).innerHTML = html;
    })
    .catch((err) => console.error(err));
}

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});






// Automatically include header and footer once the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  includeHTML("/includes/header.html", "header-placeholder");
  includeHTML("/includes/footer.html", "footer-placeholder");
});

console.log(window.innerWidth);
