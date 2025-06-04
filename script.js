// Function to inject header
function injectHeader() {
  const headerContainer = document.getElementById('header-container');
  
  headerContainer.innerHTML = `
    <header id="main-header">
      <div class="logo">
        <a href="index.html">
          <img src="lfit.png" alt="LivFit Logo">
        </a>
      </div>
      <nav>
        <div class="nav-item">
          <a href="zym.html">Gym</a>
        </div>
        <div class="nav-item">
          <a href="calesthenic.html">Calisthenics</a>
        </div>
        <div class="nav-item">
          <a href="cardio.html">Cardio</a>
        </div>
        <div class="nav-item">
          <a href="yoga.html">Yoga</a>
        </div>
        <div class="nav-item">
          <a href="meditation.html">Meditation</a>
        </div>
        <div class="nav-item">
          <a href="morningdrink.html">Detox Drinks</a>
        </div>
        <div class="nav-item">
          <a href="diet.html">Diet Plans</a>
        </div>
        <div class="nav-item">
          <a href="weight.html">Weight</a>
        </div>
        <div class="nav-item">
          <a href="donate.html" class="donate-btn">Donate</a>
        </div>
         <div class="nav-item">
          <a href="user.html" class="donate-btn">User</a>
        </div>
      </nav>
      <div class="menu-toggle" onclick="toggleSidebar()">
        <i class="fas fa-bars"></i>
      </div>

      <!-- Sidebar -->
      <div class="sidebar" id="sidebar">
        <div class="close-btn" onclick="toggleSidebar()">
          <i class="fas fa-times"></i>
        </div>
        <div class="sidebar-logo">
          <a href="index.html">
            <img src="lfit.png" alt="LivFit Logo">
          </a>
        </div>
        <ul>
          <li>
            <a class="sidebar-button" href="zym.html">
              <span><i class="fas fa-dumbbell"></i> Gym Workout</span>
            </a>
          </li>
          <li>
            <a class="sidebar-button" href="calesthenic.html">
              <span><i class="fas fa-person-walking"></i> Calisthenics</span>
            </a>
          </li>
          <li>
            <a class="sidebar-button" href="cardio.html">
              <span><i class="fas fa-running"></i> Cardio Workout</span>
            </a>
          </li>
          <li>
            <a class="sidebar-button" href="yoga.html">
              <span><i class="fas fa-spa"></i> Yoga</span>
            </a>
          </li>
          <li>
            <a class="sidebar-button" href="meditation.html">
              <span><i class="fas fa-brain"></i> Meditation</span>
            </a>
          </li>
          <li>
            <a class="sidebar-button" href="morningdrink.html">
              <span><i class="fas fa-mug-hot"></i> Detox Drinks</span>
            </a>
          </li>
          <li>
            <a class="sidebar-button" href="diet.html">
              <span><i class="fas fa-apple-alt"></i> Diet Plans</span>
            </a>
          </li>
          <li>
            <a class="sidebar-button" href="weight.html">
              <span><i class="fas fa-weight"></i> Weight Management</span>
            </a>
          </li>
          <li>
            <a class="sidebar-button" href="donate.html">
              <span><i class="fas fa-donate"></i> Donate</span>
            </a>
          </li>
          <li>
            <a class="sidebar-button" href="user.html">
              <span><i class="fas fa-user"></i>User</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  `;
}

// Function to inject footer
function injectFooter() {
  const footerContainer = document.getElementById('footer-container');
  
  footerContainer.innerHTML = `
    <footer id="site-footer">
      <div class="footer-container">
        <div class="footer-logo">LivFit.pro</div>
        <p class="footer-description">
          Where Wellness Meets Lifestyle. Unlock your healthiest, most vibrant self with LivFit.pro — your ultimate destination for holistic fitness, mindful living, and powerful transformation.
        </p>
        <div class="footer-buttons">
          <a href="zym.html" class="footer-btn">Gym Workouts</a>
          <a href="calesthenic.html" class="footer-btn">Calisthenics</a>
          <a href="cardio.html" class="footer-btn">Cardio</a>
          <a href="yoga.html" class="footer-btn">Yoga</a>
          <a href="meditation.html" class="footer-btn">Meditation</a>
          <a href="morningdrink.html" class="footer-btn">Detox Drinks</a>
          <a href="diet.html" class="footer-btn">Diet Plans</a>
          <a href="weight.html" class="footer-btn">Weight Management</a>
          <a href="donate.html" class="footer-btn">Donate</a>
          <a href="policy.html" class="footer-btn">Privacy Policy</a>
        </div>
        <div class="social-links">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-youtube"></i></a>
          <a href="#"><i class="fab fa-pinterest"></i></a>
        </div>
        <div class="copyright">
          &copy; ${new Date().getFullYear()} LivFit.pro. All rights reserved.
        </div>
      </div>
      <!-- Scroll to Top Button -->
      <div class="scroll-to-top" id="scrollToTop">
        <i class="fas fa-arrow-up"></i>
      </div>
    </footer>
  `;
}

// Initialize all site functionality
function initializeSite() {
  // Header scroll effect
  const header = document.getElementById('main-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Mobile menu functionality
  window.toggleSidebar = function() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.classList.toggle('active');
    }
  };

  // Scroll to top button
  const scrollToTopBtn = document.getElementById('scrollToTop');
  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // Close sidebar if open
        const sidebar = document.getElementById('sidebar');
        if (sidebar && sidebar.classList.contains('active')) {
          toggleSidebar();
        }
      }
    });
  });
}

// Inject components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  injectHeader();
  injectFooter();
  initializeSite();
});

// Slider Functionality
    const images = document.querySelectorAll('.slider-background img');
    const totalImages = images.length;
    let currentIndex = 0;
    let autoSlideInterval;

    function showImage(index) {
      images.forEach((img, i) => {
        img.classList.remove('active');
      });
      images[index].classList.add('active');
    }

    function nextImage() {
      currentIndex = (currentIndex + 1) % totalImages;
      showImage(currentIndex);
    }

    function startAutoSlide() {
      autoSlideInterval = setInterval(nextImage, 5000);
    }

    // Initialize slider
    showImage(currentIndex);
    startAutoSlide();

<script>
  // Create style element
  const style = document.createElement('style');
  style.textContent = `
    .floating-register-button {
      position: fixed;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      background-color: transparent;
      border: none;
      z-index: 1000;
    }

    .register-button-inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      height: 97px;
      width: 27px;
      background-color: #007BFF;
      color: white;
      text-decoration: none;
      font-weight: bold;
      border-radius: 0 10px 10px 0;
      box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
      transition: background-color 0.3s ease;
      writing-mode: vertical-rl;
      text-orientation: mixed;
    }

    .register-button-inner:hover {
      background-color: #0056b3;
    }
  `;
  document.head.appendChild(style);

  // Create the anchor element
  const button = document.createElement('a');
  button.href = 'register.html';
  button.className = 'floating-register-button';

  // Create the inner div
  const innerDiv = document.createElement('div');
  innerDiv.className = 'register-button-inner';
  innerDiv.textContent = 'Register';

  // Nest the inner div inside the anchor
  button.appendChild(innerDiv);

  // Add the button to the body
  document.body.appendChild(button);
</script>
