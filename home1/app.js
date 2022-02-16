// const os = require('os');
//1.30

// console.log(os.cpus())
// console.log(os.cpus().length)
// console.log(os.arch());

const path = require('path')

const fs = require('fs');
//
// fs.writeFile(path.join(__dirname, 'main', 'online', 'file1.txt'), 'user ({  ',(err) =>{
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// }
// )
// fs.appendFile(path.join(__dirname, 'main', 'online', 'file1.txt'),'\nname: "Andrii",',(err) =>{
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// }
// )
// fs.appendFile(path.join(__dirname, 'main', 'online', 'file1.txt'),'\nage: 22",',(err) =>{
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// }
// )
// fs.appendFile(path.join(__dirname, 'main', 'online', 'file1.txt'),'\ncity: "Lviv"',(err) =>{
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// }
// )
// fs.appendFile(path.join(__dirname, 'main', 'online', 'file1.txt'),' \n})"',(err) =>{
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// }
// )

// fs.readFile(path.join(__dirname, 'main', 'online', 'file1.txt'), (err, data) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
//     console.log(data.toString());
// })


// fs.mkdir(path.join(__dirname,'main','inPerson'),(err)=>{
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })

// fs.writeFile(path.join(__dirname, 'main', 'inPerson', 'file2.txt'), 'user ({  ',(err) =>{
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//     }
// )

// fs.appendFile(path.join(__dirname, 'main', 'inPerson', 'file2.txt'),'\nname: "Roman",',(err) =>{
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })
// fs.appendFile(path.join(__dirname, 'main', 'inPerson', 'file2.txt'),'\nage:"45",',(err) =>{
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })
// fs.appendFile(path.join(__dirname, 'main', 'inPerson', 'file2.txt'),'\ncity: "Odesa",',(err) =>{
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })
// fs.appendFile(path.join(__dirname, 'main', 'inPerson', 'file2.txt'),'\n}),',(err) =>{
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })

// fs.readFile(path.join(__dirname, 'main', 'inPerson'), (err, data) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
//     console.log(data.toString());
// })

// fs.mkdir(path.join(__dirname,'test1','test2','file.js'),{recursive:true},(err)=>{
//     if(err){
//         console.log(err);
//     }
// })

// fs.rmdir(path.join(__dirname,'test1','test2'),(err)=>{
//     if(err){
//         console.log(err)
//     }
//
// })
// fs.rmdir(path.join(__dirname,'test1'),(err)=>{
//     if(err){
//         console.log(err)
//     }
//
// })
//
// const online = [
//     {
//     name:"Andiy",
//     age:'25',
//     citi: "Lviv"
// }]
//
// const inPerson=[{
//     name:'Roman',
//     age:'45',
//     citi:'Odesa'
// }]
// fs.writeFile(path.join(__dirname, 'main', 'inPerson', 'file2.txt'), "name:\"Andiy\",\n" +
//     "    age:'25',\n" +
//     "    citi: \"Lviv\""
// , (err) => {
//         if (err) {
//             console.log(err);
//         }
//     }
// )
// fs.writeFile(path.join(__dirname, 'main', 'online', 'file1.txt'), 'name:\'Roman\',\n' +
//     '    age:\'45\',\n' +
//     '    citi:\'Odesa\''
// , (err) => {
//         if (err) {
//             console.log(err);
//         }
//     }
// )



