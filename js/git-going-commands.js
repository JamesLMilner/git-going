var CommandsList = [

  {
     "use" : "Set my name in the git config",
     "explanation" : "",
     "command" : "git config --global user.name \"name\"",
     "complexity" : "0",
     "tags" : ["config", "name", "user", "global"]
  },

  {
      "use" : "Set my name in the git config",
      "explanation" : "",
      "command" : "git config --global user.email \"email\"",
      "complexity" : "0",
      "tags" : ["config", "email", "user", "address", "global"]
  },

  {
     "use" : "Initialise a git repository",
     "explanation" : "This command creates a repository in a folder which hasn't previously been initialised as a git repository",
     "command" : "git init",
     "complexity" : "0",
     "tags" : ["init", "initialise", "start", "create"]
  },

  {
     "use" : "Log all the previous commits to a repository",
     "explanation" : "",
     "command" : "git log",
     "complexity" : "0",
     "tags" : ["log", "logging", "commits"]
  },

  {
      "use" : "Want to see who last changed a specific line in a file",
      "explanation" : "",
      "command" : "git-blame some-file",
      "complexity" : "0",
      "tags" : ["blame", "change", "history", "edit", "editors", "others"]
  },

  {
     "use" : "Add all files in the current folder to be staged",
     "explanation" : "",
     "command" : "git add .",
     "complexity" : "0",
     "tags" : ["add", "all", "files", "stage"]
  },


  {
     "use" : "Pick and choose what to add to be staged",
     "explanation" : "",
     "command" : "git add -p",
     "complexity" : "1",
     "tags" : ["pick", "choose", "add"]
  },

  {
     "use" : "Copy (clone) a remote repository locally to my machine",
     "explanation" : "",
     "command" : "git clone https://github.com/JamesMilnerUK/git-going.git",
     "complexity" : "0",
     "tags" : ["clone", "copy", "files", "local", "project"]
   },

   {
     "use" : "Checkout a branch",
     "explanation" : "",
     "command" : "git checkout some-branch",
     "complexity" : "0",
     "tags" : ["branch", "branching", "checkout"]
   },

   {
     "use" : "Create a branch",
     "explanation" : "",
     "command" : "git checkout -b some-feature",
     "complexity" : "0",
     "tags" : ["branch", "branching", "checkout", "create", "new"]
   },

   {
     "use" : "Get the latest changes from some remote branch",
     "explanation" : "",
     "command" : "git pull some-remote some-branch",
     "complexity" : "0",
     "tags" : ["pull", "latest", "get", "changes"]
   },

   {
     "use" : "Get a graph of all the changes/tags/branch history",
     "explanation" : "",
     "command" : "git log --graph --oneline --decorate --all",
     "complexity" : "0",
     "tags" : ["log", "graph", "decorate", "oneline"]
   },

   {
     "use" : "Tag a commit",
     "explanation" : "",
     "command" : "git tag <tagName>",
     "complexity" : "0",
     "tags" : ["tag", "tagging", "tag", "add"]
   },

   {
     "use" : "Remove a tag from commit",
     "explanation" : "",
     "command" : "git tag -d <tagName>",
     "complexity" : "0",
     "tags" : ["tag", "tagging", "tag", "remove", "delete"]
   },

   {
     "use" : "Log commits out onto one line in a pretty way",
     "explanation" : "",
     "command" : "git log --pretty=oneline",
     "complexity" : "0",
     "tags" : ["pretty", "log", "one", "line", "oneline"]
   },

   {
     "use" : "merge master with a feature branch in one command",
     "explanation" : "",
     "command" : "git merge master feature",
     "complexity" : "0",
     "tags" : ["merge", "oneline", "feature"]
   },

   {
     "use" : "Rename my current working branch",
     "explanation" : "",
     "command" : "git branch -m newbranch",
     "complexity" : "0",
     "tags" : ["rename", "branch"]
   },

   {
     "use" : "Delete a remote branch",
     "explanation" : "",
     "command" : "git push origin --delete branch_name",
     "complexity" : "1",
     "tags" : ["delete", "remote", "branch"]

   },

   {
     "use" : "List modified files in my current repository",
     "explanation" : "",
     "command" : "git ls-files --modified",
     "complexity" : "1",
     "tags" : ["modified", "changed", "list", "files"]
   },

   {
     "use" : "Save a current working state for later",
     "explanation" : "",
     "command" : "git stash",
     "complexity" : "1",
     "tags" : ["save", "stash", "state"]
   },

   {
     "use" : "Release a saved state from earlier (saved using 'git stash')",
     "explanation" : "",
     "command" : "git pop",
     "complexity" : "1",
     "tags" : ["save", "stash", "state"]
   },

   {
     "use" : "Modify the last commited change",
     "explanation" : "",
     "command" : "git commit --ammend",
     "complexity" : "1",
     "tags" : ["ammend", "change", "last", "commit", "commited"]
   },

   // Reset
   {
     "use" : "completely throw away (undo) uncommited changes back to the last commit",
     "explanation" : "",
     "command" : "git reset --HARD",
     "complexity" : "1",
     "tags" : ["reset", "undo", ]
   }

];
