document.addEventListener('DOMContentLoaded', () => {
    // Load reviews
    loadReviews();

    // Navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const target = link.getAttribute('data-target');
            navigateTo(target);
        });
    });
});

function loadReviews() {
    const reviews = [
        {
            title: "Who moved my cheese?",
            author: "Spencer Jhonson",
            rating: "★★★★☆",
            summary: "offers valuable insights on embracing change and thriving in uncertain times. Here's what makes it unique: The book uses a simple, relatable story to convey its message, making it accessible to all readers. ",
            cover: "book2.jpg"
        },
        {
            title: "Animal Farm",
            author: "George Orwell",
            rating: "★★★★★",
            summary: "The book serves as a reflection of human society, revealing the corrupting influence of power on even the most well-intentioned individuals.",
            cover: "book.jpg"
        }
    ];

    const reviewsContainer = document.getElementById('reviews-container');
    reviewsContainer.innerHTML = '';  // Clear any existing content

    reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.className = 'review';

        reviewElement.innerHTML = `
            <img src="${review.cover}" alt="Book Cover">
            <div class="review-content">
                <h3>${review.title}</h3>
                <p>Author: ${review.author}</p>
                <p>Rating: ${review.rating}</p>
                <p>Summary: ${review.summary}</p>
            </div>
        `;

        reviewsContainer.appendChild(reviewElement);
    });
}

// Navigate between sections
function navigateTo(target) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    const targetSection = document.getElementById(target);
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }
}
