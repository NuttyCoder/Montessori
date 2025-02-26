// Mobile Menu Functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Create and Render Flip Cards
function createFlipCard(cardData) {
    const card = document.createElement('div');
    card.className = 'flip-card';
    
    card.innerHTML = `
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <i class="${cardData.icon}"></i>
                <h3>${cardData.title}</h3>
            </div>
            <div class="flip-card-back">
                <p>${cardData.description}</p>
            </div>
        </div>
    `;
    
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
    
    return card;
}

// Render Cards
const flipCardGrid = document.querySelector('.flip-card-grid');
cardData.forEach(data => {
    const card = createFlipCard(data);
    flipCardGrid.appendChild(card);
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            navLinks.classList.remove('active');
        }
    });
});