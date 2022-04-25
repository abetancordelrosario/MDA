export async function getSubjects() {

    const response = await fetch(`http://localhost:3636/api/subjects`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
    let results = response.json();
    return results
    
}