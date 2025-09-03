function openRegistrationForm() {
    const container = document.querySelector('.registration-container');
    container.classList.add('open');
  }
  function toggleRegistrationForm() {
    var form = document.getElementById('registration-form');
    var image = document.getElementById('registration-img');
    
    // Toggle the form visibility
    if (form.style.display === 'none') {
      form.style.display = 'block';
      image.style.transform = 'translateX(-50%)'; // Slide the image to the left
    } else {
      form.style.display = 'none';
      image.style.transform = 'translateX(0)'; // Reset the image position
    }
  }
  