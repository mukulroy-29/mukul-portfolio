
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

// TYPEWRITER WITH MULTIPLE SENTENCES
const sentences = [
  "Final year B.Tech student passionate about Data Science",
  "Full Stack Developer & AI Enthusiast",
  "Expert in Data Visualization with Tableau & Power BI",
  "Building Intelligent Systems with Machine Learning"
];

const element = document.querySelector(".typewriter");

let sentenceIndex = 0; 
let charIndex = 0;     
let isDeleting = false;

function typeEffect() {
  const currentSentence = sentences[sentenceIndex];

  if (!isDeleting) {
    // Typing logic
    element.textContent = currentSentence.substring(0, charIndex++);
    if (charIndex > currentSentence.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500); 
      return;
    }
  } else {
    
    element.textContent = currentSentence.substring(0, charIndex--);
    if (charIndex === 0) {
      isDeleting = false;
    
      sentenceIndex = (sentenceIndex + 1) % sentences.length;
    }
  }

  // Type hone ki speed (80ms) aur delete hone ki speed (40ms)
  setTimeout(typeEffect, isDeleting ? 40 : 80);
}

typeEffect();


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
