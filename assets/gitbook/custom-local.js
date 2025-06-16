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
  
  // Add keyboard shortcut for Ctrl+K to focus search input
  $(document).on('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      $('#book-search-input input').focus();
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
    // Mobile sidebar toggle functionality
    const sidebarToggleBtn = document.querySelector('.js-toolbar-action[aria-label="Toggle Sidebar"]');
    const sidebar = document.getElementById('sidebar');
    const sidebarClose = document.getElementById('sidebar-close');
    
    if (sidebarToggleBtn && sidebar) {
        sidebarToggleBtn.addEventListener('click', function(e) {
            e.preventDefault();
            sidebar.classList.toggle('with-summary');
            document.body.classList.toggle('with-summary');
        });
    }
    
    if (sidebarClose) {
        sidebarClose.addEventListener('click', function(e) {
            e.preventDefault();
            sidebar.classList.remove('with-summary');
            document.body.classList.remove('with-summary');
        });
    }

    // Add mobile close button if it doesn't exist
    if (sidebar && !sidebarClose) {
        const closeBtn = document.createElement('button');
        closeBtn.id = 'sidebar-close';
        closeBtn.className = 'sidebar-toggle';
        closeBtn.innerHTML = '<i class="fa fa-times"></i>';
        
        const sidebarHeader = sidebar.querySelector('.sidebar-header');
        if (sidebarHeader) {
            sidebarHeader.appendChild(closeBtn);
        } else {
            const newHeader = document.createElement('div');
            newHeader.className = 'sidebar-header';
            newHeader.appendChild(closeBtn);
            sidebar.insertBefore(newHeader, sidebar.firstChild);
        }
        
        closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            sidebar.classList.remove('with-summary');
            document.body.classList.remove('with-summary');
        });
    }

    // Search functionality
    const searchInput = document.getElementById('book-search-input');
    if (searchInput) {
        searchInput.addEventListener('keyup', function() {
            // Implement search functionality here
        });
    }
    
    // Dark mode toggle
    const darkModeToggle = document.querySelector('.js-toolbar-action[aria-label="Toggle Dark Mode"]');
    if (darkModeToggle) {
        // Check if user has a preference stored
        const darkModePreference = localStorage.getItem('darkMode') === 'true';
        if (darkModePreference) {
            document.body.classList.add('dark-mode');
        }
        
        darkModeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
        });
    }
});
