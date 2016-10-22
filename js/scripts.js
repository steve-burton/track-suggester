//### User interface ###//
$(document).ready(function() {
  $("form#questions").submit(function(event) {
    var website = $("select#website").val();
    var favoriteColor = $("select#favoriteColor").val();
    var computer = $("input:radio[name=computer]:checked").val();
    var hipster = $("select#hipster").val();
    var sunday = $("select#sunday").val();

//### Business logic ###//
  var yourtrack = function(){

      if (website === "frontEnd" && favoriteColor === "orange") {
        return ("CSS/Design");
      } else if (website === "backEnd" && computer === "macintosh") {
        return ("Ruby/Rails");
      } else if (website === "backEnd" && favoriteColor === "orange") {
        return ("CSS/Design");
      } else if (website === "backEnd" && favoriteColor === "black") {
        return ("C#/.NET");
      } else if (website === "backEnd" && hipster === "what") {
        return ("C#/.NET");
      } else if (favoriteColor === "orange" && computer === macintosh) {
        return ("CSS/Design");
      } else if (computer === "windows") {
        return ("C#/.NET");
      } else if (hipster === "exactly") {
        return ("Ruby/Rails");
      } else if (sunday === "football") {
        return ("C#/.NET");
      } else if (sunday === "sleep") {
        return ("Ruby/Rails");
      }
    };

    $("#output").text(yourtrack);
    $("#yourtrack").show();

    event.preventDefault();
  });
});
