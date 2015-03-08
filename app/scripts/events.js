$(document).ready(function(){
  "use strict";
  console.log('loaded...');

  var url = "../data/";
  var signCode = "<div class='row'>";

  $.get(url + "sign.json", function(signEvents){
    console.log(signEvents);

    for(var i = 0; i < signEvents.length; i++) {
      //if(i % 3 == 0)
        //signCode += "</div><div class='row'>";
      signCode += "<div class='col-md-4 events-desc'><center>";
      signCode += "<a href='";
      signCode += signEvents[i].regUrl;
      signCode += "'>";
      signCode += "<h3>";
      signCode += signEvents[i].name;
      signCode += "</h3>";
      signCode += "<img src='";
      signCode += signEvents[i].imgUrl;
      signCode += "' height='200px' width='200px'></img>";
      signCode += "<div class='desc'>";
      signCode += signEvents[i].desc;
      signCode += "</div>";
      signCode += "</a>";
      signCode += "</center></div>";
      if(i == signEvents.length - 1) {
        $('#signEventsBox').append(signCode);
      }
    }
  });





});
