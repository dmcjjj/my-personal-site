// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  initializeSocialLinks();
});

function initializeSocialLinks() {
  const socialLinksContainer = document.getElementById('social-links');
  if (!socialLinksContainer) return;

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/yourusername', icon: '📚' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: '💼' },
    { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: '🐦' },
  ];

  const socialLinksHTML = socialLinks
    .map(
      link => `
        <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="social-link">
          <span class="icon">${link.icon}</span>
          <span class="name">${link.name}</span>
        </a>
      `
    )
    .join('');

  socialLinksContainer.innerHTML = socialLinksHTML;
}
