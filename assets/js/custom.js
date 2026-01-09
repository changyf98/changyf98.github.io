/* ============================================
   CUSTOM JAVASCRIPT FOR TECH THEME
   ============================================ */

(function() {
  'use strict';

  // Particle Background Animation
  function createParticles() {
    const canvas = document.createElement('canvas');
    canvas.id = 'particle-canvas';
    canvas.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      pointer-events: none;
    `;
    document.body.insertBefore(canvas, document.body.firstChild);

    const ctx = canvas.getContext('2d');
    let particles = [];
    let width, height;

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${this.opacity})`;
        ctx.fill();
      }
    }

    function init() {
      resize();
      particles = [];
      const particleCount = Math.floor((width * height) / 15000);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.15 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    window.addEventListener('resize', init);
    init();
    animate();
  }

  // Back to Top Button
  function setupBackToTop() {
    // Create button if it doesn't exist
    let backToTopBtn = document.querySelector('.back-to-top');
    if (!backToTopBtn) {
      backToTopBtn = document.createElement('div');
      backToTopBtn.className = 'back-to-top';
      backToTopBtn.innerHTML = '↑';
      backToTopBtn.style.fontSize = '24px';
      backToTopBtn.style.color = 'white';
      document.body.appendChild(backToTopBtn);
    }

    // Show/hide button on scroll
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });

    // Scroll to top on click
    backToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Smooth scroll for anchor links
  function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // Add fade-in animation to elements
  function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, {
      threshold: 0.1
    });

    document.querySelectorAll('.page__content > *').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      observer.observe(el);
    });
  }

  // Typing effect for title
  function setupTypingEffect() {
    const title = document.querySelector('.page__title');
    if (title && !title.dataset.typed) {
      title.dataset.typed = 'true';
      const text = title.textContent;
      title.textContent = '';
      title.style.borderRight = '2px solid var(--primary-color)';

      let i = 0;
      function type() {
        if (i < text.length) {
          title.textContent += text.charAt(i);
          i++;
          setTimeout(type, 50);
        } else {
          setTimeout(() => {
            title.style.borderRight = 'none';
          }, 500);
        }
      }
      type();
    }
  }

  // Answer Toggle Functionality
  function setupAnswerToggle() {
    // Use setTimeout to ensure DOM is fully loaded
    setTimeout(function() {
      const toggleBtn = document.getElementById('answerToggleBtn');
      const answerContainer = document.getElementById('answerContainer');

      console.log('Answer Toggle Setup:', {
        toggleBtn: toggleBtn,
        answerContainer: answerContainer
      });

      if (toggleBtn && answerContainer) {
        console.log('Elements found, adding event listener');

        toggleBtn.addEventListener('click', function(e) {
          e.preventDefault();
          console.log('Button clicked!');

          const isExpanded = answerContainer.classList.contains('show');
          console.log('Is expanded:', isExpanded);

          if (isExpanded) {
            // Hide answer
            answerContainer.classList.remove('show');
            toggleBtn.classList.remove('expanded');
            toggleBtn.querySelector('.toggle-icon').textContent = '🔍';
            toggleBtn.querySelector('.toggle-text').textContent = '查看答案';
          } else {
            // Show answer
            answerContainer.classList.add('show');
            toggleBtn.classList.add('expanded');
            toggleBtn.querySelector('.toggle-icon').textContent = '👁️';
            toggleBtn.querySelector('.toggle-text').textContent = '隐藏答案';
          }
        });
      } else {
        console.log('Answer toggle elements not found');
      }
    }, 100);
  }

  // Initialize all functions when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    createParticles();
    setupBackToTop();
    setupSmoothScroll();
    setupAnswerToggle();
    // setupScrollAnimations(); // Commented out as CSS animation is already applied
    // setupTypingEffect(); // Optional: uncomment if you want typing effect
  }

})();
