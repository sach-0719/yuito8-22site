document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tabs li a');
  const sections = document.querySelectorAll('section');

  function highlightTab() {
    const scrollPos = window.scrollY || window.pageYOffset;

    sections.forEach((section, index) => {
      const top = section.offsetTop - 80; // ナビバーの高さを考慮
      const bottom = top + section.offsetHeight;

      if (scrollPos >= top && scrollPos < bottom) {
        tabs.forEach(tab => tab.classList.remove('active'));
        tabs[index].classList.add('active');
      }
    });
  }

  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tap-target');
    var instances = M.TapTarget.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.tap-target').tapTarget();
  });