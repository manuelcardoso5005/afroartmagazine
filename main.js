document.addEventListener("DOMContentLoaded", function() {
    var btnMenu = document.querySelector('.toggle-menu');
    var menu = document.querySelector('.menu-content');
    var isMenuOpen = false;
  
    // Função para fechar o menu
    function closeMenu() {
      menu.style.display = "none";
      isMenuOpen = false;
    }
  
    btnMenu.addEventListener("click", function(event) {
      event.preventDefault();
      if (isMenuOpen) {
        closeMenu();
      } else {
        menu.style.display = "block";
        isMenuOpen = true;
      }
    });
  
    // Ouvinte de redimensionamento da janela
    window.addEventListener("resize", function() {
      if (window.innerWidth <= 800 && isMenuOpen) {
        closeMenu();
      }
    });
  });
  