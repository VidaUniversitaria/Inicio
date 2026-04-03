// Mobile Navigation handling
const mobileMenuBtn = document.getElementById('mobileMenuBtn');

mobileMenuBtn.addEventListener('click', () => {
    // In a full implementation, you would toggle a mobile menu here
    alert('Mobile navigation will open here. Add menu panel in HTML and toggle classes.');
});

// Carousel functionality
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

const testimonials = [
    {
        name: "Carmen Hodkiewicz",
        role: "Global Markets Engineer",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec<br>at massa sit amet nisi blandit vehicula adipiscing elit."
    },
    {
        name: "Alex Johnson",
        role: "Software Developer",
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
        quote: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Proin vel nisl in diam."
    },
    {
        name: "Maria Garcia",
        role: "Data Scientist",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
        quote: "Nunc tincidunt ante id libero ullamcorper, a fermentum enim scelerisque. Curabitur mattis urna quis lorem."
    }
];

let currentIndex = 0;

const testName = document.querySelector('.test-name');
const testRole = document.querySelector('.test-role');
const testQuote = document.querySelector('.test-quote');
const testAvatar = document.querySelector('.test-avatar');

function updateTestimonial(index) {
    const t = testimonials[index];
    // Simple fade effect implementation
    testName.style.opacity = 0;
    testRole.style.opacity = 0;
    testQuote.style.opacity = 0;
    testAvatar.style.opacity = 0;
    
    setTimeout(() => {
        testName.innerHTML = t.name;
        testRole.innerHTML = t.role;
        testQuote.innerHTML = t.quote;
        testAvatar.src = t.image;
        
        testName.style.opacity = 1;
        testRole.style.opacity = 1;
        testQuote.style.opacity = 1;
        testAvatar.style.opacity = 1;
        
        testName.style.transition = 'opacity 0.3s ease';
        testRole.style.transition = 'opacity 0.3s ease';
        testQuote.style.transition = 'opacity 0.3s ease';
        testAvatar.style.transition = 'opacity 0.3s ease';
    }, 300);
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonials.length - 1;
    updateTestimonial(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
    updateTestimonial(currentIndex);
});
