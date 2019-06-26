// //Init controller

$(document).ready(function(){

  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      duration: $('section').height(),
      triggerHook: .025,
      reverse: true
    }
  });

  var scene1 = new ScrollMagic.Scene({
      triggerElement: '#Wrapper'
    })
    .setClassToggle('#wrapper-link', 'active')
    .addTo(controller);
  var scene2 = new ScrollMagic.Scene({
      triggerElement: '#About'
    })
    .setClassToggle('#link-1', 'active')
    .addTo(controller);
  var scene3 = new ScrollMagic.Scene({
      triggerElement: '#Services'
    })
    .setClassToggle('#link-2', 'active')
    .addTo(controller);
  var scene4 = new ScrollMagic.Scene({
      triggerElement: '#Works'
    })
    .setClassToggle('#link-3', 'active')
    .addTo(controller);
  var scene5 = new ScrollMagic.Scene({
      triggerElement: '#Prices'
    })
    .setClassToggle('#link-4', 'active')
    .addTo(controller);
  var scene6 = new ScrollMagic.Scene({
      triggerElement: '#Contact'
    })
    .setClassToggle('#link-5', 'active')
    .addTo(controller);


});


