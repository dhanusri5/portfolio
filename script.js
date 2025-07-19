 // SCRIPT FOR DYNAMIC FUNCTIONALITY
        
        // 1. Typing effect
        const typingText = "We build digital experiences.";
        const textElement = document.getElementById('typing-text');
        let index = 0;
        function type() {
            if (index < typingText.length && textElement) {
                textElement.innerHTML += typingText.charAt(index++);
                setTimeout(type, 80);
            }
        }
        window.onload = () => setTimeout(type, 500);

        // 2. Scroll-triggered animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Optional: Unobserve after first visibility if animation should only play once
                    // observer.unobserve(entry.target); 
                } else {
                    // Optional: Remove 'visible' class if you want animations to replay on scroll back up
                    // entry.target.classList.remove('visible'); 
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

        // 3. Active navigation highlighting on scroll
        const sections = document.querySelectorAll('main section');
        const navLinks = document.querySelectorAll('.main-nav a');
        const mainPanel = document.querySelector('.right-panel');

        mainPanel.onscroll = () => {
            let current = 'hero';
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 150; // A small offset to activate earlier
                if (mainPanel.scrollTop >= sectionTop) {
                    current = section.getAttribute('id');
                }
            });

            // Update active class for nav links
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
        };