let md5 = require("md5")

const password = md5("12345");
let anyUserInf = {
    display_name: "display1",
    passwd: password
}

export async function getUser() {

    try{
        // const response = await appAgent.get("/api/users").send(anyUserInf);
    }catch(error) {
        return [];
    }
    
}


let anyUserInfo = {
    name: "nombre2", 
    surname: "apellidos2", 
    display_name: "display12", 
    email: "email1@gm2ail.com", 
    phone: "123 456 7829", 
    passwd: password, 
    rol: 1, 
    points: 2, 
    organization: "ULPGdC", 
    time_stamp: "17/03/2022 12:12:25"
}

export async function createUser(data) {

    const response = await fetch(`http://localhost:3636/api/users`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(anyUserInfo)
    })
    alert("hola")
    return await response.json();
}