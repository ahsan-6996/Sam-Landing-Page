
function showSection(sectionClass) {
    // Remove 'active' class from all buttons
    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach((button) => button.classList.remove('active'));
  
    // Add 'active' class to the clicked button
    const clickedButton = document.querySelector(
      `.buttons button[onclick="showSection('${sectionClass}')"]`
    );
    clickedButton.classList.add('active');
  
    // Hide all sections
    const sections = document.querySelectorAll('.sections .section');
    sections.forEach((section) => section.classList.remove('active'));
  
    // Show the clicked section
    const sectionToShow = document.querySelector(`.sections .${sectionClass}`);
    sectionToShow.classList.add('active');
  }


// for gallery section card

document.addEventListener('DOMContentLoaded', () => {
    const dots = document.querySelectorAll('.pagination-dots .dot');
    const cards = document.querySelectorAll('.gallery-container .gallery.card');
  
    // Function to activate the selected card and dot
    function activateCard(index) {
      // Remove the 'active' class from all dots and cards
      dots.forEach(dot => dot.classList.remove('active'));
      cards.forEach(card => card.classList.remove('active'));
  
      // Add the 'active' class to the clicked dot and the corresponding card
      dots[index]?.classList.add('active');
      cards[index]?.classList.add('active');
    }
  
    // Add click event listeners to all dots
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        activateCard(index);
      });
    });
  
    // Initialize: Activate the first dot and card by default
    activateCard(0);
  });
  

  
  // Select all navigation links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default anchor behavior

      // Get the target section from the href attribute (e.g., "#we-build-section")
      const targetSection = this.getAttribute('href').substring(1); // Remove the "#" symbol

      // Find the target section by its class
      const targetElement = document.querySelector(`.${targetSection}`);

      // Scroll to the target section if it exists
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });



 