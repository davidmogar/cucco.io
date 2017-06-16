document.addEventListener('DOMContentLoaded', function(event) {

  document.getElementById('hamburger').addEventListener('click', function(event) {
    document.getElementsByTagName('nav')[0].classList.toggle('expanded');
  }, false);
});
