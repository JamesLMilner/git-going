var CommandsList = [

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
     "use" : "Add all files in the current folder to be staged",
     "explanation" : "",
     "command" : "git add .",
     "complexity" : "0",
     "tags" : ["add", "all", "files", "stage"]
   },

   {
     "use" : "Copy (clone) a remote repository locally to your machine",
     "explanation" : "",
     "command" : "git clone https://github.com/JamesMilnerUK/git-going.git",
     "complexity" : "0",
     "tags" : ["clone", "copy", "files", "local", "project"]
   },

   {
     "use" : "Pretty one line logging of commits",
     "explanation" : "",
     "command" : "git log --pretty=oneline",
     "complexity" : "0",
     "tags" : ["pretty", "log", "one", "line", "oneline"]
   },

   {
     "use" : "Rename your current working branch",
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
     "use" : "List modified files in your current repository",
     "explanation" : "",
     "command" : "git ls-files --modified",
     "complexity" : "1",
     "tags" : ["modified", "changed", "list", "files"]

   }




];
