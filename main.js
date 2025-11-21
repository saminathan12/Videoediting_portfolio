

var typed = new Typed(".text", {   
    strings: ["Frontend developer", "Cinematic Wedding Editor", "Reels editor"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar a");

  function setActiveLink() {
    let currentId = "";

    sections.forEach((section) => {
      const top = section.offsetTop - 140;  // little above the section
      const height = section.offsetHeight;

      if (window.scrollY >= top && window.scrollY < top + height) {
        currentId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      const hrefId = link.getAttribute("href").substring(1); // remove '#'
      if (hrefId === currentId) {
        link.classList.add("active");
      }
    });
  }

  // change active on scroll
  window.addEventListener("scroll", setActiveLink);

  // smooth scroll + active on click
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });

      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });




document.addEventListener("DOMContentLoaded", function () {
    const skillsSection = document.querySelector("#Skills");
    const barSpans = document.querySelectorAll(".progress-line span");
    const paths = document.querySelectorAll(".radial-bar .path");

    if (!skillsSection) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // animate horizontal bars
                barSpans.forEach(span => {
                    span.classList.add("animate");
                });

                // animate circular paths
                paths.forEach(path => {
                    path.classList.add("animate");
                });

                observer.disconnect(); // run only once
            }
        });
    }, { threshold: 0.4 });

    observer.observe(skillsSection);
});


  // -------- Scroll reveal for Contact section --------
  document.addEventListener("DOMContentLoaded", function () {
    const contactSection = document.querySelector("#contact");
    const left = document.querySelector(".contact-text");
    const right = document.querySelector(".contact-form");

    if (!contactSection) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          left.classList.add("show");
          right.classList.add("show");
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });

    observer.observe(contactSection);
  });

  // -------- Form to Google Sheet --------
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxGOwDfcAF3Hajk52sh1oIiViA9t-l8_8xV7UT3elzITEflHqa9nwCtvFEP8wT0N14g/exec";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const statusEl = document.getElementById("formStatus");
  const submitBtn = document.getElementById("submitBtn");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (statusEl) {
      statusEl.textContent = "Sending...";
      statusEl.style.color = "#ffffff";
    }
    if (submitBtn) {
      submitBtn.disabled = true;
    }

    fetch(scriptURL, {
      method: "POST",
      body: new FormData(form),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Network error");
        return response.text(); // Apps Script usually returns text
      })
      .then((text) => {
        console.log("Server response:", text);
        if (statusEl) {
          statusEl.textContent = "Thank you! I’ll get back to you soon.";
          statusEl.style.color = "#00eeff";
        }
        form.reset();
        if (submitBtn) submitBtn.disabled = false;
      })
      .catch((error) => {
        console.error("Error!", error);
        if (statusEl) {
          statusEl.textContent =
            "Oops, something went wrong. Please try again.";
          statusEl.style.color = "#ff6b6b";
        }
        if (submitBtn) submitBtn.disabled = false;
      });
  });
});


  



