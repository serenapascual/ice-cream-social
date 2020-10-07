resize = function() {
  const logo = $("#logo");
  const newImage = new Image();
  newImage.src = logo.attr("src");
  const imageWidth = 100;

  // assign distance for resize to take place over
  let maxScrollDist = 300;
  maxScrollDist = Math.min(maxScrollDist, $(window).height());
  
  const widthAtMaxDist = 70;
  const widthDiff = imageWidth - widthAtMaxDist;
  const scrollDelta = (widthDiff / maxScrollDist);

  $(window).scroll(function() {
    const scrollPos = Math.min($(document).scrollTop(), maxScrollDist);
    const sumScrollDelta = Math.floor(scrollPos * scrollDelta);
    const newWidth = imageWidth - sumScrollDelta;
    $('#logo').css('width', newWidth);
  });
}
resize();