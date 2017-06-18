document.addEventListener('DOMContentLoaded', function(event) {

  document.getElementById('hamburger').addEventListener('click', function(event) {
    document.getElementsByTagName('nav')[0].classList.toggle('expanded');
  }, false);

  window.addEventListener('click', function(e){
    if (!document.getElementsByTagName('header')[0].contains(e.target)) {
      document.getElementsByTagName('nav')[0].classList.remove('expanded');
    }
  });
});
