$(document).ready(function() {
  $("form#questions").submit(function(event) {
    var website = $("select#website").val();
    var favoriteColor = $("select#favoriteColor").val();
    var computer = $("input:radio[name=computer]:checked").val();
    var hipster = $("select#hipster").val();
    var sunday = $("select#sunday").val();


  var yourtrack = function(){

      if (website === "frontEnd" && favoriteColor === "orange") {
        return ("CSS/Design");
      } else if (favoriteColor === "orange" && computer === "macintosh") {
        return ("CSS/Design");
      } else if (computer === "windows" && favoriteColor === "white") {
        return ("C#/.NET");
      } else if (hipster === "exactly" && sunday === "sleep") {
        return ("Ruby/Rails");
      } else if (sunday === "football" && favoriteColor === "black") {
        return ("C#/.NET");
      } else if (sunday === "sleep" && favoriteColor === "orange") {
        return ("Ruby/Rails");
      }

    };

    $("#output").text(yourtrack);
    $("#yourtrack").show();

    event.preventDefault();
  });
});
