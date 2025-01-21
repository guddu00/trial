// Modal functionality
const modal = document.getElementById('certificate-modal');
const modalImg = modal.querySelector('img');
const closeBtn = modal.querySelector('.close-btn');

document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const imgSrc = btn.getAttribute('data-certificate');
        modalImg.src = imgSrc;
        modal.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
// update pdf 
document.querySelectorAll(".certificate-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transition = "transform 0.8s ease-in-out, box-shadow 0.5s ease";
    });
  
    card.addEventListener("mouseleave", () => {
      card.style.transition = "transform 0.6s ease-out, box-shadow 0.4s ease";
    });
  });
  
  
