function initDropdowns() {
  const dropdowns = document.querySelectorAll('.dropdown');
  
  dropdowns.forEach(dropdown => {
      const valueElement = dropdown.querySelector('.dropdown__value');
      const listElement = dropdown.querySelector('.dropdown__list');
      const items = dropdown.querySelectorAll('.dropdown__item');
      
      valueElement.addEventListener('click', function(event) {
          event.stopPropagation();
          
          closeAllDropdowns();
          
          listElement.classList.toggle('dropdown__list_active');
      });
      
      items.forEach(item => {
          const link = item.querySelector('.dropdown__link');
          
          link.addEventListener('click', function(event) {
              event.preventDefault();
              
              const selectedText = this.textContent.trim();

              valueElement.textContent = selectedText;
              
              listElement.classList.remove('dropdown__list_active');
          });
      });
  });
  
  document.addEventListener('click', function() {
      closeAllDropdowns();
  });
}

function closeAllDropdowns() {
  const activeLists = document.querySelectorAll('.dropdown__list_active');
  activeLists.forEach(list => {
      list.classList.remove('dropdown__list_active');
  });
}

document.addEventListener('DOMContentLoaded', initDropdowns);