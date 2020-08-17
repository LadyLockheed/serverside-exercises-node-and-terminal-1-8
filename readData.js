const fs=require('fs');
const fsReader=fs.createReadStream('./personData.json')

//övning 5

// fs.readFile('./personData.json', (error, data)=>{
//     if(error){
//         console.log("Något gick fel: ", error)
//         return;
//     }
//     personObject = JSON.parse(data);
//     console.log("Övning 5:")
//     console.log("Namn: ", personObject.firstname)
//     console.log("Hårfärg: ", personObject.haircolor)


// })

//Övning 5b

let data="";

fsReader.on('data', chunk => {

    console.log("Data hämtad: ", chunk);
    data+=chunk;
    
});
fsReader.on('end', () => {
    let object=JSON.parse(data);
    console.log("Förnamnet är: ",object.firstname)
	console.log('Nu är strömmen slut, det kommer ingen mer data.');
});

