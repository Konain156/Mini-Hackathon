// script.js
document.querySelector('.content h1').addEventListener('mouseover', () => {
    alert('Discover the De Simone Formulation!');
  });
  // script.js
document.querySelector('.cta-button').addEventListener('click', () => {
    alert('Redirecting to product page!');
  });
  const section = document.getElementById('benefits-section');
  window.addEventListener('scroll', () => {
    const rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      section.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.3)";
    } else {
      section.style.boxShadow = "none";
    }
  });

  // Add click functionality to highlight keywords
  const highlightText = document.querySelectorAll('.highlight');
  highlightText.forEach((text) => {
    text.addEventListener('click', () => {
      alert(`You clicked on: ${text.textContent}`);
    });
  });
   // Form Submission Handler
   const form = document.getElementById('contact-form');
   form.addEventListener('submit', (event) => {
     event.preventDefault(); // Prevent default form submission

     const name = document.getElementById('name').value;
     const email = document.getElementById('email').value;
     const message = document.getElementById('message').value;
     const consent = document.getElementById('consent').checked;

     if (!consent) {
       alert('Please consent to the processing of personal data.');
       return;
     }

     // Simulate form submission
     alert(`Thank you, ${name}! Your message has been sent.`);
     form.reset();
   });
  