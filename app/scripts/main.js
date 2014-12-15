$(document).ready(function(){
  console.log("loaded...");

  // QueryLoader2 - site preloader configuration
  $("body").queryLoader2({
    fadeOutTime: 300,
    minimumTime: 500,
    barColor: '#efefef',
    backgroundColor: '#000',
    percentage: true,
    barHeight: 1
  });


});
