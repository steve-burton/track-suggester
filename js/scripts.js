$(document).ready(function() {
  $("form#questions").submit(function(event) {
    var website = $("select#website").val();
    var favoriteColor = $("select#favoriteColor").val();
    var computer = $("input#radio").val();
    var hipster = $("select#hipster").val();
    var sunday = $("select#sunday").val();


  var celebrity = function(){

      if (age < 25 && gender === "male" && genderPref === "female") {
        return ("Miley");
      } else if (age <  25 && gender === "male" && genderPref === "male") {
        return ("Brad");
      } else if (age < 25 && gender === "female" && genderPref === "male") {
        return ("Craig");
      } else if (age < 25 && gender === "female" && genderPref === "female") {
        return ("Dina");
      } else if (age > 25 && gender === "male" && genderPref === "female") {
        return ("Elanore");
      } else if (age > 25 && gender === "male" && genderPref === "male") {
        return ("Fred");
      } else if (age > 25 && gender === "female" && genderPref === "male") {
        return ("George");
      } else if (age > 25 && gender === "female" && genderPref === "female") {
        return ("Helena");
      }
    };

    $("#output").text(celebrity);
    $("#yourceleb").show();

    event.preventDefault();
  });
});
