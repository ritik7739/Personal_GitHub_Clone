//yargs---> is used for reading the command from terminal
const yargs=require("yargs");
//helps to extract the arguments from the command line
const {hideBin}=require("yargs/helpers");
const {initRepos}=require("./controllers/init");
const {addRepos}=require("./controllers/add");
const { commitRepos } = require("./controllers/commit");
const { pushRepos } = require("./controllers/push");
const { pullRepos } = require("./controllers/pull");
const { revertRepos } = require("./controllers/revert");
const { argv } = require("process");


//use for what we need to perform if the for the command---> init
yargs(hideBin(process.argv))
.command("init","Initialize a new repository",{},initRepos)  //chaining the command
.command("add <file>","Add a file to the repository",(yargs)=>{
    yargs.positional("file",{
        describe:"File to add the staging area",
        type:"string",
    });
},(argv)=>{
    addRepos(argv.file);
})
.command("commit <message>","commit the staged area",(yargs)=>{
    yargs.positional("message",{
        describe:"Commit message",
        type:"string",
    });
},commitRepos)
.command("push","Push Commits to S3",{},pushRepos)
.command("pull","Pull Commits from S3",{},pullRepos)
.command("revert<commitID>",'Revert to Specified commit',(yargs)=>{
    yargs.positional("commitID",{
        describe:"Commit ID to revert",
        type:"string",
    });
},revertRepos)
.demandCommand(1,"You need at least one command")
.help().argv;


