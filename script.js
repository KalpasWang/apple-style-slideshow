$(document).ready(() => {
  const positions = [], // array of every slide's position from left 
    $allSlides = $('#all-slides'); // the container of all slidess

  setSlider();


  // move slides when click thumbnails
  $('#menu li.thumbnails').click(function() {
    $('#menu li.thumbnails').removeClass('active').addClass('inactive');
    $(this).removeClass('inactive').addClass('active');

    const pIndex = $(this).prevAll('.thumbnails').length;
    
    $allSlides.stop().animate({marginLeft: -positions[pIndex]+'px'}, 500);
  });

  // adjust slides position and center present image when window's size change
  $(window).resize(function() {
    setSlider();
    $('#menu li.thumbnails.active').trigger('click');
  });
  
  
  // set slides position and all-slides container's width
  function setSlider() {
    const slideWidth = $('#slider').width();
    let totalWidth = 0;

    $('#all-slides .slide').each(function(index){
      let $this = $(this);
      positions[index] = totalWidth;
      totalWidth += slideWidth;
      $this.width(slideWidth+'px');
    });

    $allSlides.width(totalWidth);
  }
});

