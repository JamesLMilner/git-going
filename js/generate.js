(function() {
  console.log("Yo", jQuery);

  $.get("commands.json", function(commands) {
    console.log("Adding");
    var use, explain, command, complexity, div;

    for (var id in commands) {

      command = commands[id]["command"];
      use = commands[id]["use"];
      explain = command = commands[id]["explain"];
      complexity = commands[id]["complexity"];

      use = "<span> Use Case: " + use + "</span><br>";
      explain = "<span> Explanation: " + explain + "</span><br>";
      command = "<span> Command: " + command + "</span><br>";
      complexity = "<span> Complexity: " + complexity + "</span><br>";


      div = $(use + explain + command + complexity);
      $(".commands").append(div);

    }

  });

})();
