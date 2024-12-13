document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-button");
  const menuOverlay = document.getElementById("menu-overlay");
  const banner = document.querySelector(".banner");
  const scrollDownArrow = document.querySelector('.scroll-down-container');
  const welcomeSection = document.querySelector('.welcome');
  const header = document.querySelector(".header");

  // Function to show the banner with sliding effect
  function showBanner() {
    banner.classList.add("visible");  // Make the banner visible
  }

  // Function to hide the banner
  function hideBanner() {
    banner.classList.remove("visible");  // Hide the banner
  }

  // Function to show the header
  function showHeader() {
    header.classList.add("visible");  // Make the header (menu button and search bar) visible
  }

  // Function to hide the header
  function hideHeader() {
    header.classList.remove("visible");  // Hide the header
  }

  // Function to check scroll position and show/hide elements
  function checkScrollPosition() {
    const welcomeSectionBottom = welcomeSection.offsetTop + welcomeSection.offsetHeight;
    const bannerAlreadyVisible = banner.classList.contains('visible');  // Check if the banner is visible
    const headerAlreadyVisible = header.classList.contains('visible');  // Check if the header is visible

    if (window.scrollY > welcomeSectionBottom) {
      // If we have scrolled past the welcome section, show both the banner and the header
      if (!bannerAlreadyVisible) {
        showBanner();
      }
      if (!headerAlreadyVisible) {
        showHeader();
      }
    } else {
      // If we are still within the welcome section, hide both the banner and the header
      if (bannerAlreadyVisible) {
        hideBanner();
      }
      if (headerAlreadyVisible) {
        hideHeader();
      }
    }
  }

  // Listen for scroll event to handle visibility of banner and header
  window.addEventListener("scroll", () => {
    // Check scroll position for banner and header visibility
    checkScrollPosition();

    // Hide scroll down arrow after scrolling past the welcome section
    if (window.scrollY > welcomeSection.offsetHeight) {
      scrollDownArrow.classList.add('hidden');
    } else {
      scrollDownArrow.classList.remove('hidden');
    }
  });

  // Scroll to next section on arrow click
  scrollDownArrow.addEventListener('click', function() {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  });

  // Toggle the menu visibility on button click
  menuButton.addEventListener("click", () => {
    menuOverlay.classList.toggle("visible");
  });

  // Close the menu when clicking on a link
  menuOverlay.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      menuOverlay.classList.remove("visible");
      const targetId = event.target.getAttribute("href").substring(1); // Get section ID from the link
      const targetSection = document.getElementById(targetId);

      // Smooth scroll to the section
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth',
        });
      }
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const bookNowButton = document.querySelector('.welcome .book-now');

  // Function to add the "show" class after a delay
  setTimeout(() => {
    bookNowButton.classList.add('show');
  }, 1000);  // 2000 milliseconds = 2 seconds delay
});

