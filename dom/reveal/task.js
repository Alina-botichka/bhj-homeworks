function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();

  return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

function handleScroll() {
  const reveals = document.querySelectorAll('.reveal');
  
  reveals.forEach(reveal => {
      if (isElementInViewport(reveal)) {
          reveal.classList.add('reveal_active');
      } else {
          reveal.classList.remove('reveal_active');
      }
  });
}

window.addEventListener('scroll', handleScroll);

document.addEventListener('DOMContentLoaded', handleScroll);