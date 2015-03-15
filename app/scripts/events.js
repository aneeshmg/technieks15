$(document).ready(function(){
  "use strict";
  console.log('loaded...');

  var url = "../data/";
  var signCode = "<div class='row'>";
  var day1Code = "<div class='row'>";
  var day2Code = "<div class='row'>";
  var day3Code = "<div class='row'>";

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
      signCode += "<div class='desc-sign'>";
      signCode += signEvents[i].desc;
      signCode += "</div>";
      signCode += "</a>";
      signCode += "</center></div>";
      if(i == signEvents.length - 1) {
        $('#signEventsBox').append(signCode);
      }
    }
  });

  $.get(url + "day1.json", function(day1Events){
    console.log(day1Events);

    for(var i = 0; i < day1Events.length; i++) {
      //if(i % 3 == 0)
        //day1Code += "</div><div class='row'>";
      day1Code += "<div class='col-md-2 events-desc'><center>";
      day1Code += "<a href='";
      day1Code += day1Events[i].regUrl;
      day1Code += "'>";
      day1Code += "<h3>";
      day1Code += day1Events[i].name;
      day1Code += "</h3>";
      day1Code += "<img src='";
      day1Code += day1Events[i].imgUrl;
      day1Code += "' height='100px' width='100px'></img>";
      day1Code += "<div class='desc'>";
      day1Code += day1Events[i].desc;
      day1Code += "</div>";
      day1Code += "</a>";
      day1Code += "</center></div>";
      if(i == day1Events.length - 1) {
        $('#d1EventsBox').append(day1Code);
      }
    }
  });

  $.get(url + "day2.json", function(day2Events){
    console.log(day2Events);

    for(var i = 0; i < day2Events.length; i++) {
      //if(i % 3 == 0)
        //day2Code += "</div><div class='row'>";
      day2Code += "<div class='col-md-2 events-desc'><center>";
      day2Code += "<a href='";
      day2Code += day2Events[i].regUrl;
      day2Code += "'>";
      day2Code += "<h3>";
      day2Code += day2Events[i].name;
      day2Code += "</h3>";
      day2Code += "<img src='";
      day2Code += day2Events[i].imgUrl;
      day2Code += "' height='100px' width='100px'></img>";
      day2Code += "<div class='desc'>";
      day2Code += day2Events[i].desc;
      day2Code += "</div>";
      day2Code += "</a>";
      day2Code += "</center></div>";
      if(i == day2Events.length - 1) {
        $('#d2EventsBox').append(day2Code);
      }
    }
  });
  
  $.get(url + "day3.json", function(day3Events){
    console.log(day3Events);

    for(var i = 0; i < day3Events.length; i++) {
      //if(i % 3 == 0)
        //day3Code += "</div><div class='row'>";
      day3Code += "<div class='col-md-2 events-desc'><center>";
      day3Code += "<a href='";
      day3Code += day3Events[i].regUrl;
      day3Code += "'>";
      day3Code += "<h3>";
      day3Code += day3Events[i].name;
      day3Code += "</h3>";
      day3Code += "<img src='";
      day3Code += day3Events[i].imgUrl;
      day3Code += "' height='100px' width='100px'></img>";
      day3Code += "<div class='desc'>";
      day3Code += day3Events[i].desc;
      day3Code += "</div>";
      day3Code += "</a>";
      day3Code += "</center></div>";
      if(i == day3Events.length - 1) {
        $('#d3EventsBox').append(day3Code);
      }
    }
  });





});
