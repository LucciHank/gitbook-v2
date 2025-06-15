// Custom JavaScript for ToMoi documentation site

$(document).ready(function() {
  // Create and insert a custom logo for ToMoi
  var headerTitle = $('.book-header h1');
  if (headerTitle.length) {
    var logoHTML = '<span class="tomoi-logo">ToMoi</span> ' + headerTitle.text().replace('Tài liệu ToMoi', '');
    headerTitle.html(logoHTML);
  }

  // Add hover effects to navigation buttons
  $('.navigation').hover(
    function() {
      $(this).css('transform', 'translateY(-2px)');
    },
    function() {
      $(this).css('transform', 'translateY(0)');
    }
  );

  // Add smooth scrolling for anchor links
  $(document).on('click', 'a[href^="#"]', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 70
      }, 500);
    }
  });

  // Add a back-to-top button when scrolling
  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
      $('.back-to-top').fadeIn();
    } else {
      $('.back-to-top').fadeOut();
    }
  });
});
