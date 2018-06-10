var answers = [];
var answer;

$(window).on('beforeunload', function() {
  $(window).scrollTop(0);
});

$("#start").click(function(e) {
  e.preventDefault();
  $("#q1, .quiz").fadeIn();
    smoothScroll('.quiz');
});

// Helper function for smooth scroll
function smoothScroll(el) {
    var pos = $(el).offset().top;
  $("body, html").animate({ scrollTop: pos });
}

// Store the users response in 'answers' array
$(".choice").click(function() {
  answer = $(this).find(".highlight").text();
  answers.push(answer);
});

// Show the next question
$('div[id^="q"]').click(function() {
  $(this).find(".choice").hide();
  $(this).find(".blank").text(answer);

  if ($(this).attr("id") == "q1") {
    $("#q2").fadeIn("slow");
  } else if ($(this).attr("id") == "q2") {
    $("#q3").fadeIn();
  } else if ($(this).attr("id") == "q3") {
    $(".quiz").fadeOut();

    readAnswer();
    smoothScroll('#result');
    $("#result").fadeIn();
    
  }
});

// Read in answer from data.js file which is the 'trailData' json object.
// Append answer to corresponding id from HTML body.
function readAnswer() {
  var num = getID();
  var name = trailData[num].name;
  var miles = trailData[num].mileage;
  var elevation = trailData[num].elevation;
  var pass = trailData[num].pass;
  var link = trailData[num].wtaLink;

  document.getElementById("title").innerHTML = name;
  document.getElementById("miles").innerHTML =  "<img class='icon' src='images/route.svg'><br>" + miles + " mi <br> rountrip";
  document.getElementById("elevation").innerHTML = "<img class ='icon' src='images/mountains.svg'><br>" +  elevation + " ft <br> elevation";
  document.getElementById("pass").innerHTML = pass + " needed";
  var a = document.getElementById("wta-link");
  a.href = link;
}

// Get the id number based off the user response. The number corresponds to
// location in json object.
function getID() {
  if (compare(answers, ["beginner", "alpine lakes", "less traveled by"])) {
    return 0;
  } else if (compare(answers, ["beginner", "alpine lakes", "having better claim"])) {
    return 1;
  } else if (compare(answers, ["beginner", "wildflowers", "less traveled by"])) {
    return 2;
  } else if (compare(answers, ["beginner", "wildflowers", "having better claim"])) {
    return 3;
  } else if (compare(answers, ["beginner", "waterfalls", "less traveled by"])) {
    return 4;
  } else if (compare(answers, ["beginner", "waterfalls", "having better claim"])) {
    return 5;
  } else if (compare(answers, ["beginner", "view", "less traveled by"])) {
    return 6;
  } else if (compare(answers, ["beginner", "view", "having better claim"])) {
    return 7;
  } else if (compare(answers, ["seasoned", "alpine lakes", "less traveled by"])) {
    return 8;
  } else if (compare(answers, ["seasoned", "alpine lakes", "having better claim"])) {
    return 9;
  } else if (compare(answers, ["seasoned", "wildflowers", "less traveled by"])) {
    return 10;
  } else if (compare(answers, ["seasoned", "wildflowers", "having better claim"])) {
    return 11;
  } else if (compare(answers, ["seasoned", "waterfalls", "less traveled by"])) {
    return 12;
  } else if (compare(answers, ["seasoned", "waterfalls", "having better claim"])) {
    return 13;
  } else if (compare(answers, ["seasoned", "view", "less traveled by"])) {
    return 14;
  } else if (compare(answers, ["seasoned", "view", "having better claim"])) {
    return 15;
  } else if (compare(answers, ["expert", "alpine lakes", "less traveled by"])) {
    return 16;
  } else if (compare(answers, ["expert", "alpine lakes", "having better claim"])) {
    return 17;
  } else if (compare(answers, ["expert", "wildflowers", "less traveled by"])) {
    return 18;
  } else if (compare(answers, ["expert", "wildflowers", "having better claim"])) {
    return 19;
  } else if (compare(answers, ["expert", "waterfalls", "less traveled by"])) {
    return 20;
  } else if (compare(answers, ["expert", "waterfalls", "having better claim"])) {
    return 21;
  } else if (compare(answers, ["expert", "view", "less traveled by"])) {
    return 22;
  } else if (compare(answers, ["expert", "view", "having better claim"])) {
    return 23;
  }
}

// Helper function to compare arrays
function compare(a1, a2) {
  for (i = 0; i < 3; i++) {
    if (a1[i] != a2[i]) {
      return 0;
    }
  }
  return 1;
}
