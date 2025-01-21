
const burgerMenu = document.getElementById('burger-menu');
const navMenu = document.getElementById('nav-menu');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});
// home 
// JavaScript for Interactive Effects
document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    const heroButton = document.querySelector('.btn');

    // Scroll Effect
    window.addEventListener('scroll', () => {
        let opacityValue = 1 - window.scrollY / 500;
        heroContent.style.opacity = opacityValue > 0 ? opacityValue : 0;
    });

    // Button Click Animation
    heroButton.addEventListener('click', () => {
        heroButton.style.transform = 'scale(1.2)';
        setTimeout(() => {
            heroButton.style.transform = 'scale(1)';
        }, 200);
    });
});
// footer 
// JavaScript for Newsletter Subscription Form
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    const emailInput = this.querySelector('input[type="email"]');
    const email = emailInput.value;

    // Simple email validation
    if (validateEmail(email)) {
        alert('Thank you for subscribing!');
        emailInput.value = ''; // Clear the input field
    } else {
        alert('Please enter a valid email address.');
    }
});

// Email Validation Function
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
// about 
// JavaScript for Contact Form Validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    const name = this.querySelector('input[type="text"]').value.trim();
    const email = this.querySelector('input[type="email"]').value.trim();
    const message = this.querySelector('textarea').value.trim();

    if (!name || !email || !message) {
        alert('All fields are required!');
    } else if (!validateEmail(email)) {
        alert('Please enter a valid email address!');
    } else {
        alert('Thank you for contacting us! We will get back to you shortly.');
        this.reset(); // Clear the form
    }
});

// Email Validation Function
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
// more 
// Add animation class dynamically if needed (Optional)
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    carousel.classList.add('slide-infinite');
});
// blog 
document.addEventListener("DOMContentLoaded", function () {
    const blogGrid = document.querySelector(".blog-grid");
    const loadMoreButton = document.getElementById("load-more");

    let blogData = [
        {
            title: "The Future of Real Estate",
            description: "Exploring new trends in the real estate market.",
            image: "5.jpg",
        },
        {
            title: "How to Choose Your Dream Home",
            description: "Important tips to help you pick the perfect home.",
            image: "7.jpg",
        },
        {
            title: "Investing in Properties for Beginners",
            description: "A complete guide to start investing in properties.",
            image: "3.jpg",
        },
        {
            title: "The Best Neighborhoods to Buy a Home",
            description: "Discover the most popular areas to live in.",
            image: "2.jpg",
        },
        {
            title: "How to Sell Your Property Quickly",
            description: "Tips and tricks for a fast property sale.",
            image: "1.jpg",
        },
        {
            title: "Understanding Market Trends",
            description: "A deeper look into property market trends and forecasts.",
            image: "2.jpg",
        },
    ];

    let displayedBlogs = 0;
    const blogsToShow = 3;

    // Function to add blog posts dynamically
    function displayBlogs() {
        for (let i = displayedBlogs; i < displayedBlogs + blogsToShow; i++) {
            if (i >= blogData.length) break;

            const blog = blogData[i];
            const blogPost = document.createElement("div");
            blogPost.classList.add("blog-post");
            blogPost.innerHTML = `
                <img src="${blog.image}" alt="Blog Image">
                <h3>${blog.title}</h3>
                <p>${blog.description}</p>
            `;

            blogGrid.appendChild(blogPost);
            setTimeout(() => {
                blogPost.classList.add("visible");
            }, 200);
        }
        displayedBlogs += blogsToShow;
    }

    // Load initial set of blogs
    displayBlogs();

    // Load more blogs when button is clicked
    loadMoreButton.addEventListener("click", function () {
        displayBlogs();
        if (displayedBlogs >= blogData.length) {
            loadMoreButton.style.display = "none"; // Hide button when all blogs are loaded
        }
    });
});
// about 
// footer question and answer
  // JavaScript to toggle FAQ answers
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', (e) => {
        e.preventDefault();
        const answer = document.querySelector(question.getAttribute('href'));
        answer.classList.toggle('active');
    });
  });
//   slider hero 
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

// Function to update the slider position
function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event Listeners for Buttons
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    updateSlider();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    updateSlider();
});

// Auto-slide every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    updateSlider();
}, 5000);











