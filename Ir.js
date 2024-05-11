const sections = document.querySelectorAll('.section');

sections.forEach(section => {
  section.addEventListener('mouseover', () => {
    section.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.2)';
  });

  section.addEventListener('mouseout', () => {
    section.style.textShadow = 'none';
  });
});
