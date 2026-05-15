
    (function() {
      const mobileBtn = document.getElementById('mobileMenuBtn');
      const navLinks = document.getElementById('navLinks');
      if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
          navLinks.classList.toggle('active');
        });
      }
      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          const href = this.getAttribute('href');
          if (href === "#") return;
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
            if (navLinks.classList.contains('active')) {
              navLinks.classList.remove('active');
            }
          }
        });
      });
    })();
    
document.getElementById("contactForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let project = document.getElementById("project").value;

    let message =
"New Website Request%0A%0A" +
"Name: " + name + "%0A" +
"Email: " + email + "%0A" +
"Phone: " + phone + "%0A" +
"Project: " + project;

    let whatsappNumber = "2347070596863";

    let url =
"https://wa.me/" + whatsappNumber + "?text=" + message;

    window.location.href = url;

});




