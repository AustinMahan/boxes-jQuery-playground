$(document).ready(function () {
  $('#secretBox').css('background-color', 'white').append('<h1>secret Box</h1>');

  $('#row1').children().toggleClass('boxType3');

  $('#row4 div:last-child').css('display', 'none');

  $('#row2 > .boxType1, #row4 div:first-child').css('background-color', 'white');

  $('#row2 div:lt(2)').removeClass('boxType2 boxType3');

  // $('#container div').not('.row').not('#secretBox').css('width', '2px');

  $('body').click(function (e) {
    console.log('x-axis: ' + e.pageX);
    console.log('y-axis: ' + e.pageY);
  });

  $('#secretBox').click(function () {
    alert('You can never Leave!!!');
    window.location = 'http://www.galvanize.com';
  });

  $('.box').click(function () {
    $(this).append('<img src="https://pbs.twimg.com/profile_images/446566229210181632/2IeTff-V.jpeg" style="width:100%">');
  });

  $('div .box').click(function () {
    $(this).css('background-color', 'white');
    $('#container').css('background-color', 'black');
  });
  $('#container').not('.box').click(function () {
    $(this).css('background-color', 'limegreen');
  });
});
