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

/* --CUSTOM CURSOR */
// Select all elements with the data-cursor-theme attribute
const themedSections = document.querySelectorAll('[data-cursor-theme]');

themedSections.forEach(section => {
  section.addEventListener('mouseenter', () => {
    cursor.style.backgroundColor = '#0E0E0E'; // dark dot for light bg
  });
  section.addEventListener('mouseleave', () => {
    cursor.style.backgroundColor = '#A291C3'; // back to default (e.g., purple or green)
  });
});


const cursor = document.createElement("div");
cursor.classList.add("cursor-dot");
document.body.appendChild(cursor);

let mouseX = 0,
  mouseY = 0;
let currentX = 0,
  currentY = 0;
let scale = 1;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Add hover effect
const hoverTargets = document.querySelectorAll(
  "a, button, [data-cursor-hover]"
);
hoverTargets.forEach((el) => {
  el.addEventListener("mouseenter", () => {
  scale = 2;
  cursor.style.backgroundColor = "#abd189";
});

el.addEventListener("mouseleave", () => {
  scale = 1;
  cursor.style.backgroundColor = "#A291C3";
});
});

// Animation loop
function animateCursor() {
  // Optional: smooth easing
  currentX += (mouseX - currentX) * 0.2;
  currentY += (mouseY - currentY) * 0.2;

  cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) scale(${scale})`;

  requestAnimationFrame(animateCursor);
}
animateCursor();


/* -- LOADING ANIMATION */
window.addEventListener('load', () => {
  setTimeout(() => {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'none';
  }, 500); // 1 second delay before hiding
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
