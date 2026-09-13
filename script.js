// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Custom Cursor
const cursor = document.querySelector('.cursor');
const links = document.querySelectorAll('a, .gallery-item');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.classList.add('hovered');
    });
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('hovered');
    });
});

// Initial Load Animations
const tl = gsap.timeline();

// Set initial states
gsap.set('.bg-word', { y: 100, opacity: 0 });
gsap.set('.hero-image-wrapper', { opacity: 0, y: 50 });
gsap.set('.accent-text', { opacity: 0 });

tl.to('.bg-word', {
    y: 0,
    opacity: 1,
    duration: 1.2,
    stagger: 0.2,
    ease: "power4.out",
    delay: 0.2
})
.to('.hero-image-wrapper', {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: "power2.out"
}, "-=0.8")
.from('header', {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
}, "-=1.0")
.to('.accent-text, .scroll-indicator', {
    opacity: 1,
    duration: 1
}, "-=0.5");

// Parallax for Hero Image
gsap.to('.hero-image-wrapper', {
    yPercent: 15,
    ease: "none",
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

// Parallax for Hero Text
gsap.to('.hero-bg-text', {
    yPercent: -20,
    ease: "none",
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

// About Section Text Reveal
gsap.from('.about-text', {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
    }
});

// Gallery Items Staggered Reveal
gsap.utils.toArray('.gallery-item').forEach((item, i) => {
    gsap.to(item, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: item,
            start: "top 85%",
        }
    });
});
