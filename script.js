// Select the toggle container, mode text, and body element
const toggleContainer = document.querySelector('.toggle-container');
const modeText = document.getElementById('mode-text');
const body = document.body;

// Add an event listener to the toggle container
toggleContainer.addEventListener('click', () => {
  // Toggle the "active" class for the toggle button
  toggleContainer.classList.toggle('active');
  
  // Toggle the "dark-mode" class for the body element
  body.classList.toggle('dark-mode');

  // Update the mode text based on the current state
  if (body.classList.contains('dark-mode')) {
    modeText.textContent = 'Dark Mode';
  } else {
    modeText.textContent = 'Light Mode';
  }
});
