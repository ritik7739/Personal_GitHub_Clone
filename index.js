//yargs---> is used for reading the command from terminal
const yargs=require("yargs");
//helps to extract the arguments from the command line
const {hideBin}=require("yargs/helpers");
const {initRepos}=require("./controllers/init");
const {addRepo}=require("./controllers/add");


//use for what we need to perform if the for the command---> init
yargs(hideBin(process.argv))
.command("init","Initialize a new repository",{},initRepos)  //chaining the command
.command("add <file>","Add a file to the repository",(yargs)=>{
    yargs.positional("file",{
        describe:"File to add the staging area",
        type:"string",
    });
},addRepo)
.command("commit <file>","Add a file to the repository",(yargs)=>{
    yargs.positional("file",{
        describe:"File to add the staging area",
        type:"string",
    });
},addRepo)
.demandCommand(1,"You need at least one command")
.help().argv;


