$(document).foundation();

function timeOfDay() {
  var d = new Date().getHours();
  if (d > 1 && d < 5) {
    return "gravy it's late";
  } else if (d > 5 && d < 12) {
    return "morning";
  } else if (d > 12 && d < 17) {
    return "afternoon";
  } else {
    return "evening";
  }
}

$(".js-timeOfDay").append(timeOfDay());
