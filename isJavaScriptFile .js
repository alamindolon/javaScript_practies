
function isJavaScriptFile(filenName){
    if(filenName.slice(-3) == '.js')
    {
        return true;
    }
    else{
        return false;
    }

}

console.log(isJavaScriptFile("file.js"));