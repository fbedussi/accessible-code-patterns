 (function() {
    var button = document.querySelector('[aria-label="site"] button');
    var menu = button.nextElementSibling;

    button.setAttribute('aria-expanded', 'false');
    button.hidden = false;
    menu.hidden = true;
  
    function hideMenu() {
      menu.classList.remove('visible');
      menu.hidden = true;
    }
    
    button.addEventListener('click', function() {
        var expanded = this.getAttribute('aria-expanded') === "true";
        this.setAttribute('aria-expanded', String(!expanded));
        
        if (!expanded) {
          menu.hidden = false;
          menu.classList.add('visible');
        }
      
        setTimeout(() => {
          menu.classList.toggle('open')
        }, 0);
      
        if (expanded) {
          setTimeout(hideMenu, 500);
        }
    });
})();