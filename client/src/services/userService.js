export async function getUser(data) {

    const response = await fetch(`http://localhost:3636/api/users`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    let results = response.json();
    return results
    
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

export async function updateUserPoints(pointsInfo) {

    await fetch(`http://localhost:3636/api/users/points`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(pointsInfo)
    })
}