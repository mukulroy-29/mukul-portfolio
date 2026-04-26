
    function toggleMode() {
      document.body.classList.toggle("dark");
    }

    //  FULL PAGE CURSOR GLOW
    document.addEventListener("mousemove", (e) => {
      document.body.style.setProperty("--x", e.clientX + "px");
      document.body.style.setProperty("--y", e.clientY + "px");
    });

    // NAVBAR EFFECT
    const nav = document.querySelector(".nav");
    nav.addEventListener("mousemove", (e) => {
      const rect = nav.getBoundingClientRect();
      nav.style.setProperty("--nx", (e.clientX - rect.left) + "px");
      nav.style.setProperty("--ny", (e.clientY - rect.top) + "px");
    });

    //  TYPEWRITER
    const text = "Final year B.Tech student passionate about web development";
    const element = document.querySelector(".typewriter");

    let index = 0;
    let isDeleting = false;

    function typeEffect() {
      if (!isDeleting) {
        element.textContent = text.substring(0, index++);
        if (index > text.length) {
          isDeleting = true;
          setTimeout(typeEffect, 1500);
          return;
        }
      } else {
        element.textContent = text.substring(0, index--);
        if (index === 0) {
          isDeleting = false;
        }
      }

      setTimeout(typeEffect, isDeleting ? 40 : 80);
    }

    typeEffect();
  const toggle = document.getElementById("themeToggle");

  toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark");
  });
// OPEN MODAL
function openModal(src) {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");

  modal.classList.add("show");
  modalImg.src = src;
}

// CLOSE MODAL
function closeModal() {
  const modal = document.getElementById("imgModal");
  modal.classList.remove("show");
}

// CLICK OUTSIDE TO CLOSE
window.onclick = function(e) {
  const modal = document.getElementById("imgModal");
  if (e.target === modal) {
    modal.classList.remove("show");
  }
}
