// explore button animation
document.getElementById('scrollBtn').addEventListener('click', function() {
    // Smooth scroll to the target element
    document.getElementById('wowWork').scrollIntoView({ behavior: 'smooth' });
  });


// back to top button
  var btn = $('#button');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });
  
  if ($(window).scrollTop() > 100) {
    btn.addClass('show');
  }