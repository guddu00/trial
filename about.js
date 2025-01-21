// Smooth scroll for internal navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Fade-in Effect for Sections
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.about-item');
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (sectionTop < windowHeight * 0.8) {
        section.classList.add('fade-in');
      }
    });
  });
  
  // Add fade-in class to sections
  document.querySelectorAll('.about-item').forEach(section => {
    section.classList.add('fade');
  });
  
  // footer question and answer
  // JavaScript to toggle FAQ answers
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', (e) => {
        e.preventDefault();
        const answer = document.querySelector(question.getAttribute('href'));
        answer.classList.toggle('active');
    });
  });
  // location 
  // JavaScript for Interactions
document.querySelectorAll('.location-card').forEach(card => {
  card.addEventListener('click', () => {
      const locationName = card.dataset.location;
      const detailsText = document.querySelector('.details-text');
      const detailsSection = document.querySelector('.location-details');
      
      // Show details with animation
      detailsText.textContent = `Welcome to our office in ${locationName}. Contact us for more details!`;
      detailsSection.classList.add('active');
  });
});

// Close Button Interaction
document.querySelector('.close-details').addEventListener('click', () => {
  const detailsSection = document.querySelector('.location-details');
  detailsSection.classList.remove('active');
});
