function startRotator(rotatorElement) {
  const cases = rotatorElement.querySelectorAll('.rotator__case');

  if (cases.length === 0) 
  return;
  
  let activeIndex = 0;
  for (let i = 0; i < cases.length; i++) {
      if (cases[i].classList.contains('rotator__case_active')) {
          activeIndex = i;
          break;
      }
  }
  
  function rotate() {
      cases[activeIndex].classList.remove('rotator__case_active');
      activeIndex = (activeIndex + 1) % cases.length;
      cases[activeIndex].classList.add('rotator__case_active');
      const speed = cases[activeIndex].dataset.speed || 1000;
      const color = cases[activeIndex].dataset.color;

      if (color) {
          cases[activeIndex].style.color = color;
      }
      
      setTimeout(rotate, speed);
  }
  
  const firstSpeed = cases[activeIndex].dataset.speed || 1000;
  const firstColor = cases[activeIndex].dataset.color;
  
  if (firstColor) {
      cases[activeIndex].style.color = firstColor;
  }
  
  setTimeout(rotate, firstSpeed);
}

document.addEventListener('DOMContentLoaded', function() {
  const rotators = document.querySelectorAll('.rotator');
  rotators.forEach(rotator => {
      startRotator(rotator);
  });
});