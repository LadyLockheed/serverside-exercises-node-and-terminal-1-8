const fs=require("fs");

//skriva in en sak

// console.log("Välj ett nytt namn.");
// process.stdin.resume();
// process.stdin.on("data", data=>{
//     //trim tar bort mellanslag
//     let input=data.toString().trim();
// console.log(`Du skrev: "${input}"`);
// process.stdin.pause();
// })

//skriva in flera saker

let question=1;
let firstName="";
let surName="";
console.log("Skriv in ett förnamn...")

process.stdin.resume();
process.stdin.on("data", data=>{

    if(question===1){
        firstName=data.toString().trim();
        console.log(`Du skrev: "${firstName}".`)
        question++;

        console.log("Skriv in ett efternamn...")
    }
    else if (question===2){
    
        surName=data.toString().trim();
        console.log(`Du skrev: "${surName}".`)
        process.stdin.pause();

        let object={exercise:6, firstname:firstName, surname:surName}
        objectToSend=JSON.stringify(object);

        fs.writeFile('./personData.json', objectToSend,()=>{
            console.log("Ny person sparad.")
        })
        
    }

})


