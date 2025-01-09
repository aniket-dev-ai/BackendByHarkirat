// const path = require('path');
// console.log(__dirname);
// console.log(__dirname+"/index.js");
// console.log(path.join(__dirname, "../../index.js","projects"));


const fs = require('fs');
const { log } = require('console');

function main(filename) {
    fs.readFile(filename,"utf-8",function(err,data){
        let count = 0
        for(i = 0 ; i<data.length;i++){
            if(data[i] === " "){
                count++;
            }
        }
        console.log(count);
        
    })
}

main('a.txt')
