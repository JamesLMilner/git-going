
var Search = new Vue({

  el: '#search',
  data: {
    searchInput : ""
  },
  methods: {
    onSubmit: function(){
      console.log(Search.$data.searchInput);
    }
  }

});

var Commands = new Vue({

  el: '#commands',
  methods: {
    show : function(command) {

      console.log("hello");
      //
      // function matches(value) {
      //   return value == Search.searchInput;
      // }
      //
      // return commands.filter(matches);
      //
      // console.log(command);
      return true;
    }
  },
  data: {
    commands: [
      {
         "use" : "Initialise a git repository",
         "explanation" : "This command creates a repository in a folder which hasn't previously been initialised as a git repository",
         "command" : "git init",
         "complexity" : "0",
         "tags" : ["initialise", "start", "create"]
       },
       {
         "use" : "Add files to be staged",
         "explanation" : "",
         "command" : "git add .",
         "complexity" : "0",
         "tags" : ["initialise", "start", "create"]
       },

       {
         "use" : "Copy (clone) a remote repository locally to your machine",
         "explanation" : "",
         "command" : "git clone https://github.com/JamesMilnerUK/git-going.git",
         "complexity" : "0",
         "tags" : ["initialise", "start", "create"]
       }

    ]
  }

});

// Vue.filter('search', function (command) {
//
//
// });
