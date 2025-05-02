// Wait for DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease',
        once: true,
        offset: 100,
        disable: 'mobile'
    });

    // Preloader
    const preloader = document.querySelector('.preloader');
    const logoPath = document.querySelector('.logo-path');
    
    // Animate logo path with anime.js
    anime({
        targets: logoPath,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: 300,
        direction: 'alternate',
        loop: true
    });
    
    // Hide preloader after everything is loaded
    window.addEventListener('load', function() {
        setTimeout(function() {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
            
            // Animate hero section elements
            anime({
                targets: '.hero-title',
                opacity: [0, 1],
                translateY: [30, 0],
                easing: 'easeOutExpo',
                duration: 1000,
                delay: 300
            });
            
            anime({
                targets: '.hero-subtitle',
                opacity: [0, 1],
                translateY: [30, 0],
                easing: 'easeOutExpo',
                duration: 1000,
                delay: 600
            });
            
            anime({
                targets: '.hero-badges',
                opacity: [0, 1],
                translateY: [30, 0],
                easing: 'easeOutExpo',
                duration: 1000,
                delay: 900
            });
            
            anime({
                targets: '.hero-cta',
                opacity: [0, 1],
                translateY: [30, 0],
                easing: 'easeOutExpo',
                duration: 1000,
                delay: 1200
            });
        }, 2000);
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
        // Add scrolled class to navbar
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Highlight active nav link based on scroll position
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 300) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });
    
    // Close mobile menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    });

    // Typed.js for hero section text animation
    if (document.querySelector('.typing')) {
        let typed = new Typed('.typing', {
            strings: [
                "Training the next generation of engineers",
                "Building industry-ready skills",
                "Connecting students with real clients",
                "Creating tomorrow's tech leaders"
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            startDelay: 1000,
            loop: true
        });
    }

    // Particles.js for hero background
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 120,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": ["#ff4500", "#ff7800", "#ff6a00"]
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.6,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 5,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 4,
                        "size_min": 0.3,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ff4500",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 3,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": true,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 150,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }

    // Testimonial slider
    const testimonialTrack = document.querySelector('.testimonial-track');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;
    
    // Set initial positions
    function setSliderPosition() {
        testimonialTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    
    // Next slide function
    function nextSlide() {
        currentIndex = (currentIndex + 1) % testimonialCards.length;
        setSliderPosition();
        updateDots();
    }
    
    // Previous slide function
    function prevSlide() {
        currentIndex = (currentIndex - 1 + testimonialCards.length) % testimonialCards.length;
        setSliderPosition();
        updateDots();
    }
    
    // Add event listeners for navigation
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);
    }
    
    // Auto slide every 5 seconds
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Pause slider on hover
    if (testimonialTrack) {
        testimonialTrack.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        testimonialTrack.addEventListener('mouseleave', () => {
            slideInterval = setInterval(nextSlide, 5000);
        });
    }
    
    // Create slider dots
    function createDots() {
        if (!testimonialTrack) return;
        
        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'testimonial-dots';
        
        for (let i = 0; i < testimonialCards.length; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            if (i === 0) dot.classList.add('active');
            
            dot.addEventListener('click', () => {
                currentIndex = i;
                setSliderPosition();
                updateDots();
            });
            
            dotsContainer.appendChild(dot);
        }
        
        document.querySelector('.testimonial-nav').appendChild(dotsContainer);
    }
    
    // Update active dot
    function updateDots() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }
    
    createDots();

    // Number counter animation for stats
    const statNumbers = document.querySelectorAll('.stat-number');
    
    function animateNumbers() {
        statNumbers.forEach(number => {
            const target = parseInt(number.getAttribute('data-count'));
            const duration = 2000; // 2 seconds
            
            anime({
                targets: number,
                innerHTML: [0, target],
                round: 1,
                easing: 'easeInOutExpo',
                duration: duration,
                begin: function(anime) {
                    number.innerHTML = '0';
                },
                update: function(anime) {
                    const value = Math.round(anime.animations[0].currentValue);
                    number.innerHTML = value;
                }
            });
        });
    }
    
    // Trigger counter animation when section becomes visible
    const aboutSection = document.querySelector('.about');
    
    if (aboutSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateNumbers();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(aboutSection);
    }

    // Form validation and submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
                alert('Please fill in all required fields');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Simulate form submission (in a real site, this would send data to a server)
            const submitBtn = contactForm.querySelector('.submit-btn');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            
            // Simulating API call delay
            setTimeout(() => {
                // Reset form
                contactForm.reset();
                
                // Show success message
                alert('Your message has been sent successfully! We will get back to you soon.');
                
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
            }, 2000);
        });
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Parallax effect on hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroContent = document.querySelector('.hero-content');
        
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.15}px)`;
        }
    });

    // Add 3D hover effect to expertise cards
    const expertiseCards = document.querySelectorAll('.expertise-card');
    
    expertiseCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element
            const y = e.clientY - rect.top; // y position within the element
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const deltaX = (x - centerX) / centerX;
            const deltaY = (y - centerY) / centerY;
            
            this.style.transform = `perspective(1000px) rotateX(${-deltaY * 10}deg) rotateY(${deltaX * 10}deg) translateZ(20px)`;
            
            // Add a shine effect
            const shine = this.querySelector('.card-icon');
            if (shine) {
                shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.2), transparent 40%)`;
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
            
            const shine = this.querySelector('.card-icon');
            if (shine) {
                shine.style.background = 'none';
            }
        });
    });

    // Tilt effect for testimonial cards
    const testimonialCard = document.querySelectorAll('.testimonial-card');
    
    testimonialCard.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const deltaX = (x - centerX) / 20;
            const deltaY = (y - centerY) / 20;
            
            this.style.transform = `rotateX(${-deltaY}deg) rotateY(${deltaX}deg)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'rotateX(0) rotateY(0)';
        });
    });

    // Add animations to navigation links
    navLinks.forEach((link, index) => {
        anime({
            targets: link,
            opacity: [0, 1],
            translateY: [20, 0],
            easing: 'easeOutExpo',
            duration: 500,
            delay: 1500 + (index * 100)
        });
    });
}); 