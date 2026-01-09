// Dark mode theme toggle
(function() {
  // Get saved theme from localStorage or default to light
  const savedTheme = localStorage.getItem('theme') || 'light';
  
  // Set initial theme
  document.documentElement.setAttribute('data-theme', savedTheme);
  
  // Create and inject toggle button
  function createThemeToggle() {
    const nav = document.querySelector('.greedy-nav');
    if (!nav) return;
    
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'theme-toggle';
    toggleBtn.setAttribute('aria-label', 'Toggle dark/light mode');
    toggleBtn.id = 'theme-toggle';
    
    const icon = document.createElement('i');
    icon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    toggleBtn.appendChild(icon);
    
    toggleBtn.addEventListener('click', toggleTheme);
    
    // Insert after the site title
    const siteTitle = nav.querySelector('.masthead__menu-item--lg');
    if (siteTitle) {
      siteTitle.parentElement.appendChild(toggleBtn);
    }
  }
  
  // Toggle theme function
  window.toggleTheme = function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update icon
    const icon = document.querySelector('#theme-toggle i');
    if (icon) {
      icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
  };
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createThemeToggle);
  } else {
    createThemeToggle();
  }
})();
