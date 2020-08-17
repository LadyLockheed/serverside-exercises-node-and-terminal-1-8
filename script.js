const importedQuotes=require('./module.js');
const fs=require('fs');

console.log("Övning 1: These violent delights has violent ends.")
console.log("Övning 2: Det har jag aldrig provat förut, så det klarar jag säkert.")

//övning 3
importedQuotes();

//övning 4

//originalkod i personData.json
// {
//     "exercise":4,
//     "firstname":"Alice",
//     "surname":"in Wonderland",
//     "haircolor": "blond"
// }


fs.readFile('./personData.json', (error, data)=>{
    if(error){
        console.log("Något gick fel: ", error)
        return;
    }
    personObject = JSON.parse(data);
    console.log("Från readfile: ", personObject)

    personObject.firstname="Ronja"
    personObject.surname="Rövardotter"
    personObject.haircolor="Brun"

    updatedObject=JSON.stringify(personObject);

    fs.writeFile('./personData.json', updatedObject,()=>{
        console.log("text saved to file in writefile")
    })
   
    

})







// fs.writeFile('./myFile.txt', 'Text to save in file', () => {
// 	console.log('Text saved to file.');
// });


