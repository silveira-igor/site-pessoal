// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', () => {
  
  // Seleciona o botão do menu e a lista de links
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-links a');

  // Alterna a classe 'active' para abrir/fechar o menu mobile
  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Fecha o menu mobile automaticamente quando um link é clicado
  links.forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
      }
    });
  });

});