const fs=require('fs').promises;
const path=require("path");


async function addRepos(filePath){
   const repoPath=path.resolve(process.cwd(),".PersonaLGit");
   const stagingPath=path.join(repoPath,"staging");

   try {
      //creating  a stagingPath (i.e. staging) Folder in the same folder(by recursive:true)
      await fs.mkdir(stagingPath,{recursive:true});
      //filename of wiil be same as user input
      const fileName=path.basename(filePath);
      //copy the same file into the staging area
      await fs.copyFile(filePath,path.join(stagingPath,fileName));
      console.log(`File ${fileName} added to staging area!`); 
   } catch (error) {
      console.log("Error in adding file :",error);
   }
}

module.exports={addRepos}