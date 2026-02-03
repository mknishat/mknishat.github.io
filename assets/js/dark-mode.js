// Dark mode theme toggle - Immediate execution for theme
(function() {
  // Get saved theme from localStorage or default to light
  const savedTheme = localStorage.getItem('theme') || 'light';
  
  // Set initial theme IMMEDIATELY to prevent flash
  document.documentElement.setAttribute('data-theme', savedTheme);
})();

// Toggle theme function - must be global
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  // Update icon
  const icon = document.querySelector('#theme-toggle i');
  if (icon) {
    icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
  
  console.log('Theme toggled to:', newTheme);
}

// Initialize icon on page load
document.addEventListener('DOMContentLoaded', function() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  const icon = document.querySelector('#theme-toggle i');
  if (icon) {
    icon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
});
