

var Store = {

  state : {
    searchInput : "",
    searched : false,
    commands: CommandsList,
    totalShown : -1
  },

  textSearch : function() {
    this.state.searched = true;
  },

  blankSearch : function() {
    this.state.searched = false;
  },

  resetTotalShown : function() {
    this.state.totalShown = -1;
  },

  decrementTotalShown : function() {
    this.state.totalShown -= 1;
  },

  incrementTotalShown : function() {
    this.state.totalShown += 1;
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
      Store.resetTotalShown();
    }
  }

});

var Commands = new Vue({

  el: '#commands',
  data: Store.state,
  methods: {
    getCommands : function() {
      var searched = this.searched;
      var searchInput = this.searchInput;
      var tagged = function(command) {
        return !searched ||
               command.tags.indexOf(searchInput) !== -1;
      };
      var commands = this.commands.filter(tagged);
      return (commands.length) ? commands : false;
    }

  }

});

$(document).ready(function(){
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal-trigger').leanModal();
});
