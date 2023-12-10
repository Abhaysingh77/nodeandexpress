const {readFile,writeFile} =require('fs')
readFile('./content/file1.txt','utf8',(err,res)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(res)
})
writeFile('./content/file2.txt','Hello this is file 2','utf8',(err,res)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log('success')
});