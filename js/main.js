// Wait for DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS with improved settings
    AOS.init({
        duration: 1000,
        easing: 'ease-out',
        once: false,
        offset: 100,
        disable: 'mobile',
        mirror: true
    });

    // Preloader animation with enhanced anime.js effects
    const preloader = document.querySelector('.preloader');
    const logoPath = document.querySelector('.logo-path');
    
    const loaderAnimation = anime.timeline({
        loop: false,
        complete: function() {
            setTimeout(function() {
                anime({
                    targets: preloader,
                    opacity: 0,
                    duration: 800,
                    easing: 'easeOutExpo',
                    complete: function() {
                        preloader.style.visibility = 'hidden';
                        // Start hero animations when preloader is done
                        heroAnimations.play();
                    }
                });
            }, 500);
        }
    });
    
    loaderAnimation
        .add({
            targets: '.progress',
            width: ['0%', '100%'],
            duration: 2000,
            easing: 'easeInOutQuart'
        })
        .add({
            targets: '.loader-cube',
            rotateX: [-30, 330],
            rotateY: [45, 405],
            rotateZ: [0, 180],
            duration: 2000,
            easing: 'easeInOutQuart'
        }, '-=1800');
    
    // Hero section animations with improved 3D effects
    const heroAnimations = anime.timeline({
        autoplay: false
    });
    
    // Creating a layered animation sequence for the hero section
    heroAnimations
        // Animate the Z shape
        .add({
            targets: '.z-shape',
            opacity: [0, 0.1],
            scale: [0.5, 1],
            rotateY: [90, 0],
            duration: 1500,
            easing: 'easeOutExpo'
        })
        // Animate the 3D Z letter with more dynamic movement
        .add({
            targets: '.z-letter',
            scale: [0, 1],
            opacity: [0, 1],
            rotateX: [50, 20],
            rotateY: [0, 30],
            translateZ: [-100, 0],
            duration: 1500,
            easing: 'easeOutExpo'
        }, '-=1000')
        // Animate the Z letter parts
        .add({
            targets: ['.z-top', '.z-middle', '.z-bottom'],
            width: [0, '100%'],
            opacity: [0, 1],
            delay: anime.stagger(200),
            duration: 800,
            easing: 'easeOutExpo'
        }, '-=1000')
        // Reveal the cyberpunk title text one word at a time with 3D effect
        .add({
            targets: '.cyberpunk-text .word',
            translateY: ['100%', '0%'],
            translateZ: [-50, 0],
            rotateX: [90, 0],
            opacity: [0, 1],
            duration: 1000,
            delay: anime.stagger(200),
            easing: 'easeOutExpo'
        }, '-=800')
        // Animate in the hero badges with 3D effect
        .add({
            targets: '.cyber-badge',
            translateX: ['-100%', '0%'],
            translateZ: [-30, 0],
            opacity: [0, 1],
            scale: [0.8, 1],
            duration: 1000,
            delay: anime.stagger(200),
            easing: 'easeOutExpo'
        }, '-=600')
        // Animate in the hero CTA buttons with 3D effect
        .add({
            targets: '.cyber-button',
            translateY: [50, 0],
            translateZ: [-50, 0],
            rotateX: [20, 0],
            opacity: [0, 1],
            duration: 1000,
            delay: anime.stagger(200),
            easing: 'easeOutExpo'
        }, '-=800')
        // Animate scroll indicator
        .add({
            targets: '.scroll-indicator',
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeOutExpo'
        }, '-=600');

    // Create an enhanced floating effect for the Z letter
    anime({
        targets: '.z-letter',
        translateY: ['0px', '-15px', '0px'],
        translateZ: ['0px', '30px', '0px'],
        rotateX: ['20deg', '25deg', '20deg'],
        rotateY: ['30deg', '35deg', '30deg'],
        duration: 6000,
        easing: 'easeInOutQuad',
        loop: true
    });
    
    // Create pulsing effect for Z letter parts
    anime({
        targets: ['.z-top', '.z-middle', '.z-bottom'],
        boxShadow: [
            '0 0 20px rgba(255, 69, 0, 0.6)',
            '0 0 40px rgba(255, 69, 0, 0.8)',
            '0 0 20px rgba(255, 69, 0, 0.6)'
        ],
        duration: 2000,
        easing: 'easeInOutSine',
        loop: true
    });
    
    // Create a parallax effect for the hero elements on mousemove with depth
    const heroSection = document.querySelector('.hero');
    
    heroSection.addEventListener('mousemove', function(e) {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.015;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.015;
        
        // Enhanced Z letter movement with depth effect
        anime({
            targets: '.z-letter',
            translateX: moveX * 2,
            translateY: moveY * 2,
            rotateX: 20 - moveY,
            rotateY: 30 + moveX,
            duration: 400,
            easing: 'easeOutCubic'
        });
        
        // Z-shape movement for 3D effect
        anime({
            targets: '.z-shape',
            translateX: moveX * 2,
            translateY: moveY * 2,
            rotateY: moveX * 0.5,
            duration: 400,
            easing: 'easeOutCubic'
        });
        
        // Hero shapes parallax movement
        anime({
            targets: '.hero-shapes .shape',
            translateX: function(el, i) {
                return moveX * (i + 1) * 3;
            },
            translateY: function(el, i) {
                return moveY * (i + 1) * 3;
            },
            scale: function(el, i) {
                const baseFactor = 0.02;
                return 1 + (Math.abs(moveX) + Math.abs(moveY)) * baseFactor * (i + 1);
            },
            duration: 400,
            easing: 'easeOutCubic'
        });
        
        // Grid overlay parallax movement
        anime({
            targets: '.grid-overlay',
            translateX: moveX * 0.5,
            translateY: moveY * 0.5,
            rotateX: moveY * 0.2,
            rotateY: -moveX * 0.2,
            duration: 400,
            easing: 'easeOutCubic'
        });
        
        // Text parallax effect
        anime({
            targets: '.hero-title, .hero-subtitle',
            translateX: moveX * 0.5,
            translateY: moveY * 0.5,
            duration: 400,
            easing: 'easeOutCubic'
        });
    });

    // Enhanced Typed.js for hero section text animation
    if (document.querySelector('.typing')) {
        let typed = new Typed('.typing', {
            strings: [
                "Training the next generation of engineers",
                "Building industry-ready skills",
                "Connecting students with real clients",
                "Creating tomorrow's tech leaders"
            ],
            typeSpeed: 60,
            backSpeed: 30,
            backDelay: 2500,
            startDelay: 1000,
            loop: true,
            cursorChar: '|',
            fadeOut: true,
            fadeOutClass: 'typed-fade-out',
            fadeOutDelay: 500
        });
    }

    // Enhanced Particles.js for hero background with more dynamic fire-themed settings
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 150,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": ["#ff4500", "#ff7800", "#ff6a00", "#ff8c00"]
                },
                "shape": {
                    "type": ["circle", "triangle", "polygon"],
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 6
                    }
                },
                "opacity": {
                    "value": 0.6,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1.5,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 6,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 5,
                        "size_min": 0.3,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ff4500",
                    "opacity": 0.4,
                    "width": 1.2
                },
                "move": {
                    "enable": true,
                    "speed": 4,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": true,
                        "rotateX": 800,
                        "rotateY": 1500
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
                        "distance": 150,
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
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 5
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }

    // Enhanced navbar scroll effect with glitch animation
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
        // Add scrolled class to navbar with enhanced animation
        if (window.scrollY > 100) {
            if (!navbar.classList.contains('scrolled')) {
                navbar.classList.add('scrolled');
                
                // Add an enhanced glitch effect when navbar changes
                anime({
                    targets: '.logo a',
                    translateX: [
                        {value: -5, duration: 100, delay: 0},
                        {value: 5, duration: 100, delay: 0},
                        {value: -3, duration: 100, delay: 0},
                        {value: 3, duration: 100, delay: 0},
                        {value: 0, duration: 100, delay: 0}
                    ],
                    translateY: [
                        {value: -3, duration: 100, delay: 50},
                        {value: 3, duration: 100, delay: 50},
                        {value: -2, duration: 100, delay: 50},
                        {value: 2, duration: 100, delay: 50},
                        {value: 0, duration: 100, delay: 50}
                    ],
                    opacity: [
                        {value: 0.8, duration: 100, delay: 0},
                        {value: 0.2, duration: 100, delay: 100},
                        {value: 1, duration: 100, delay: 100}
                    ],
                    color: [
                        {value: '#ff4500', duration: 100, delay: 0},
                        {value: '#ffffff', duration: 100, delay: 100}
                    ],
                    easing: 'easeInOutQuad'
                });
            }
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Enhanced parallax scroll effect for sections with depth
        sections.forEach(section => {
            const scrollY = window.scrollY;
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY > sectionTop - window.innerHeight && scrollY < sectionTop + sectionHeight) {
                const translateY = (scrollY - sectionTop) * 0.2;
                
                // Apply enhanced parallax to section backgrounds
                const background = section.querySelector('.section-background');
                if (background) {
                    background.style.transform = `translateY(${translateY}px) translateZ(-50px)`;
                }
                
                // Apply parallax to z-shapes in each section
                const zShape = section.querySelector('.z-shape');
                if (zShape) {
                    const zFactor = (scrollY - sectionTop) * 0.1;
                    zShape.style.transform = `translateY(${zFactor}px) rotateY(${zFactor}deg)`;
                }
            }
        });
        
        // Enhanced active nav link highlight with improved animation
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
                
                // Add an enhanced pulse animation to active link
                anime({
                    targets: link,
                    scale: [1, 1.2, 1],
                    color: [
                        {value: '#ffffff', duration: 200},
                        {value: '#ff4500', duration: 200},
                        {value: '#ffffff', duration: 200}
                    ],
                    textShadow: [
                        {value: '0 0 10px rgba(255, 69, 0, 0.8)', duration: 100},
                        {value: '0 0 0 rgba(255, 69, 0, 0)', duration: 100},
                        {value: '0 0 10px rgba(255, 69, 0, 0.8)', duration: 100},
                        {value: '0 0 5px rgba(255, 69, 0, 0.4)', duration: 100}
                    ],
                    duration: 600,
                    easing: 'easeInOutQuad'
                });
            }
        });
    });

    // Enhanced mobile menu toggle with improved 3D animations
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', function() {
        const isActive = menuToggle.classList.contains('active');
        
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
        
        // Animate menu bars with enhanced 3D effect
        anime({
            targets: '.bar:nth-child(1)',
            translateY: isActive ? [9, 0] : [0, 9],
            translateZ: isActive ? [5, 0] : [0, 5],
            rotate: isActive ? [45, 0] : [0, 45],
            duration: 500,
            easing: 'easeInOutQuad'
        });
        
        anime({
            targets: '.bar:nth-child(2)',
            opacity: isActive ? [0, 1] : [1, 0],
            translateZ: isActive ? [5, 0] : [0, 5],
            duration: 400,
            easing: 'easeInOutQuad'
        });
        
        anime({
            targets: '.bar:nth-child(3)',
            translateY: isActive ? [-9, 0] : [0, -9],
            translateZ: isActive ? [5, 0] : [0, 5],
            rotate: isActive ? [-45, 0] : [0, -45],
            duration: 500,
            easing: 'easeInOutQuad'
        });
        
        // Animate menu items with enhanced 3D effect
        if (!isActive) {
            anime({
                targets: '.nav-menu li',
                translateX: ['-50px', '0'],
                translateZ: ['-30px', '0'],
                opacity: [0, 1],
                rotateY: ['-30deg', '0deg'],
                duration: 800,
                delay: anime.stagger(150),
                easing: 'easeOutExpo'
            });
        }
    });
    
    // Close mobile menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
                
                // Reverse animations with enhanced effects
                anime({
                    targets: '.bar:nth-child(1)',
                    translateY: [9, 0],
                    translateZ: [5, 0],
                    rotate: [45, 0],
                    duration: 500,
                    easing: 'easeInOutQuad'
                });
                
                anime({
                    targets: '.bar:nth-child(2)',
                    opacity: [0, 1],
                    translateZ: [5, 0],
                    duration: 400,
                    easing: 'easeInOutQuad'
                });
                
                anime({
                    targets: '.bar:nth-child(3)',
                    translateY: [-9, 0],
                    translateZ: [5, 0],
                    rotate: [-45, 0],
                    duration: 500,
                    easing: 'easeInOutQuad'
                });
            }
        });
    });

    // Enhanced 3D tilt effect for cards using anime.js
    document.querySelectorAll('[data-tilt]').forEach(card => {
        card.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.05,
                boxShadow: '0 30px 45px rgba(0, 0, 0, 0.25), 0 0 35px rgba(255, 69, 0, 0.5)',
                duration: 800,
                easing: 'easeOutCubic'
            });
            
            anime({
                targets: this.querySelector('.card-icon'),
                scale: 1.2,
                translateZ: 80,
                rotateY: [0, 360],
                duration: 800,
                easing: 'easeOutCubic'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                duration: 800,
                easing: 'easeOutCubic'
            });
            
            anime({
                targets: this.querySelector('.card-icon'),
                scale: 1,
                translateZ: 0,
                rotateY: 0,
                duration: 800,
                easing: 'easeOutCubic'
            });
        });
        
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const moveX = (mouseX - centerX) / 8;
            const moveY = (mouseY - centerY) / 8;
            
            anime({
                targets: this,
                translateX: moveX,
                translateY: moveY,
                translateZ: Math.abs(moveX + moveY) / 2,
                rotateX: -moveY * 0.5,
                rotateY: moveX * 0.5,
                duration: 50,
                easing: 'linear'
            });
            
            const icon = this.querySelector('.card-icon');
            if (icon) {
                anime({
                    targets: icon,
                    translateX: moveX * 2,
                    translateY: moveY * 2,
                    translateZ: 30 + Math.abs(moveX + moveY),
                    duration: 50,
                    easing: 'linear'
                });
            }
            
            const title = this.querySelector('.card-title');
            if (title) {
                anime({
                    targets: title,
                    translateX: moveX * 0.5,
                    translateY: moveY * 0.5,
                    translateZ: 20,
                    duration: 50,
                    easing: 'linear'
                });
            }
        });
    });

    // Enhanced number counter animation for stats using anime.js with glitch effect
    const statNumbers = document.querySelectorAll('.stat-number');
    
    function animateNumbers() {
        statNumbers.forEach(number => {
            const target = parseInt(number.getAttribute('data-count'));
            const duration = 2500;
            
            // Add enhanced glitch effect to the counter
            const glitchEffect = anime.timeline({
                loop: false,
                duration: duration,
                complete: function() {
                    number.innerHTML = target;
                }
            });
            
            glitchEffect
                .add({
                    targets: number,
                    innerHTML: [0, target],
                    round: 1,
                    easing: 'easeInOutExpo',
                    update: function(anim) {
                        // Add random glitch during the animation
                        if (Math.random() > 0.92) {
                            number.innerHTML = Math.floor(Math.random() * target);
                            setTimeout(() => {
                                const progress = Math.round(anim.progress);
                                const currentValue = Math.round((target * progress) / 100);
                                number.innerHTML = currentValue;
                            }, 50);
                        }
                    }
                })
                .add({
                    targets: number,
                    color: [
                        {value: '#ff4500', duration: 100},
                        {value: '#ffffff', duration: 100},
                        {value: '#ff4500', duration: 100},
                        {value: '#ffffff', duration: 100}
                    ],
                    textShadow: [
                        {value: '0 0 10px rgba(255, 69, 0, 0.8)', duration: 100},
                        {value: '0 0 0 rgba(255, 69, 0, 0)', duration: 100},
                        {value: '0 0 10px rgba(255, 69, 0, 0.8)', duration: 100},
                        {value: '0 0 5px rgba(255, 69, 0, 0.4)', duration: 100}
                    ],
                    delay: anime.stagger(100),
                    direction: 'alternate',
                    easing: 'steps(2)'
                }, '-=2000');
        });
    }
    
    // Trigger counter animation when section becomes visible with Intersection Observer
    const aboutSection = document.querySelector('.about');
    
    if (aboutSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateNumbers();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        observer.observe(aboutSection);
    }

    // Enhanced smooth scrolling with anime.js for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                
                // Create an enhanced smooth and elastic scroll effect
                anime({
                    targets: 'html, body',
                    scrollTop: offsetTop,
                    duration: 1200,
                    easing: 'easeOutExpo',
                    complete: function() {
                        // Add an enhanced 3D scale animation to the target section
                        anime({
                            targets: targetSection,
                            scale: [1, 1.02, 1],
                            duration: 1000,
                            easing: 'easeInOutQuad'
                        });
                        
                        // Add a glow effect to the section title
                        const sectionTitle = targetSection.querySelector('.section-title');
                        if (sectionTitle) {
                            anime({
                                targets: sectionTitle,
                                textShadow: [
                                    '0 0 5px rgba(255, 255, 255, 0.2)',
                                    '0 0 20px rgba(255, 69, 0, 0.6)',
                                    '0 0 5px rgba(255, 255, 255, 0.2)'
                                ],
                                duration: 1000,
                                easing: 'easeInOutQuad'
                            });
                        }
                    }
                });
            }
        });
    });

    // Enhanced animated text reveal effect for section titles using anime.js
    document.querySelectorAll('.section-title').forEach(title => {
        const text = title.textContent;
        let html = '';
        
        // Split text into characters with spans
        for (let i = 0; i < text.length; i++) {
            if (text[i] === ' ') {
                html += ' ';
            } else {
                html += `<span class="char">${text[i]}</span>`;
            }
        }
        
        title.innerHTML = html;
        
        // Create observer to trigger animation when title is in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate each character with enhanced 3D effect
                    anime({
                        targets: entry.target.querySelectorAll('.char'),
                        translateY: [50, 0],
                        translateZ: [50, 0],
                        opacity: [0, 1],
                        rotateX: [90, 0],
                        easing: "easeOutExpo",
                        duration: 1200,
                        delay: anime.stagger(30),
                        complete: function() {
                            // Add a subtle hover animation after reveal
                            anime({
                                targets: entry.target.querySelectorAll('.char'),
                                translateY: ['0px', '-5px', '0px'],
                                translateZ: ['0px', '10px', '0px'],
                                opacity: [1, 0.8, 1],
                                easing: 'easeInOutSine',
                                duration: 2000,
                                delay: anime.stagger(100, {from: 'center'}),
                                loop: true
                            });
                        }
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(title);
    });

    // Animate Z-shapes independently
    anime({
        targets: '.z-shape',
        translateZ: [-30, 30],
        opacity: [0.05, 0.15, 0.05],
        rotateY: [0, 180],
        duration: 15000,
        easing: 'easeInOutSine',
        loop: true
    });

    // Animate section separators
    anime({
        targets: '.section-separator .separator-line::before',
        translateX: ['0%', '400%'],
        easing: 'linear',
        duration: 3000,
        loop: true
    });

    anime({
        targets: '.section-separator .separator-icon',
        rotate: [0, 360],
        easing: 'linear',
        duration: 8000,
        loop: true
    });
}); 