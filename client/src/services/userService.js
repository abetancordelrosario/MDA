

export async function getUser(data) {

    const response = await fetch(`http://localhost:3636/api/users`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    let results = response.json();
    results.then(value => {
        console.log(value);
    }).catch(err => {
        console.log(err);
    });
    // console.log(results)
    // console.log(results[0].DISPLAY_NAME);
    // console.log(results[0].PASSWD);
    return response.json();

    
}


export async function createUser(data) {

    await fetch(`http://localhost:3636/api/users`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then(response => {       
        if (response.ok) {
            return response.json();
          } else {
            alert("El usuario ya existe")
          }
    })
}