var CommandsList = [

  {
     "use" : "Initialise a git repository",
     "explanation" : "This command creates a repository in a folder which hasn't previously been initialised as a git repository",
     "command" : "git init",
     "complexity" : "0",
     "tags" : ["init", "initialise", "start", "create"]
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

];

var Store = {

  state : {
    searchInput : "",
    searched : false,
    commands: CommandsList
  },

  textSearch : function() {
    this.state.searched = true;
  },

  blankSearch : function() {
    this.state.searched = false;
  }


};

var Search = new Vue({

  el: '#search',
  data: Store.state,
  methods: {
    onSubmit: function(){
      this.handleInput();
    },
    onKeyUp: function() {
      this.handleInput();
    },
    handleInput : function() {
      if (this.searchInput) {
        Store.textSearch();
      } else {
        Store.blankSearch();
      }
    }
  }

});

var Commands = new Vue({

  el: '#commands',
  data: Store.state,
  methods: {
    show : function(command) {

      var searched = this.searched;
      var tags = command.tags.indexOf(this.searchInput) !== -1;
      return !searched || (searched && tags);

    },
    matching : function() {

      return true;

    }
  }

});
