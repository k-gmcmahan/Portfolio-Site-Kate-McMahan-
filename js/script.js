function menuToggle() {
  var x = document.getElementById('myNavtoggle')
  if (x.className === 'navtoggle') {
    x.className += ' responsive'
  } else {
    x.className = 'navtoggle'
  }
}

$(document).ready(function() {
  $('.project-preview').on('click', function() {
    $(this).siblings('.project-details').slideToggle()
  })
})

var $backToTop = $('.back-to-top')
$backToTop.hide()

$(window).on('scroll', function() {
  if ($(this).scrollTop() > 100) {
    $backToTop.fadeIn()
  } else {
    $backToTop.fadeOut()
  }
})

$backToTop.on('click', function(e) {
  $('html, body').animate({
    scrollTop: 0
  }, 500)
})
