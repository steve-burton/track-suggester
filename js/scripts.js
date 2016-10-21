$(document).ready(function() {
  $("form#questions").submit(function(event) {
    var website = $("select#website").val();
    var favoriteColor = $("select#favoriteColor").val();
    var computer = $("input:radio[name=computer]:checked").val();
    var hipster = $("select#hipster").val();
    var sunday = $("select#sunday").val();


  var yourtrack = function(){

      if (website === "backEnd") {
        return ("CSS/Design");
        } else if (favoriteColor === "orange") {
          return ("CSS/Design");
        } else if (computer === "windows") {
          return ("C#/.NET");
        } else if (hipster === "exactly") {
          return ("Ruby/Rails");
        } else if (sunday === "football") {
          return ("C#/.NET");
        } else {
          return ("Ruby/Rails");
      }
    };

    $("#output").text(yourtrack);
    $("#yourtrack").show();

    event.preventDefault();
  });
});
