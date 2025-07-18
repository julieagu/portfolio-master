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
/* document.addEventListener("DOMContentLoaded", () => {
  let basePath = "";

  // Detect if we're in a nested folder (like articles/article-1/)
  if (window.location.pathname.includes("/articles/")) {
    console.log("i am articles")
    basePath = "../../";
  } else {
    basePath = "";
  }

  includeHTML(`${basePath}includes/header.html`, "header-placeholder");
  includeHTML(`${basePath}includes/footer.html`, "footer-placeholder");
}); */

console.log(window.innerWidth);
