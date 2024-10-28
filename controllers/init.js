const fs=require("fs").promises;
const path=require("path");
const { json } = require("stream/consumers");

async function initRepos(){
    const repoPath=path.resolve(process.cwd(),".PersonaLGit");
    const commitsPath=path.join(repoPath,"commits");

    try { 
        await fs.mkdir(repoPath,{ recursive :true});
        await fs.mkdir(commitsPath,{ recursive :true});
        await fs.writeFile(
            path.join(repoPath,"config.json"),
            JSON.stringify({ bucket:process.env.S3_BUCKET})
        );
        console.log("repository initialized!!");
        
    } catch (error) {
        console.log("Error initialising the repository",error);
    }

}

module.exports={initRepos};