export async function getResponses(messageid) {

    const response = await fetch(`http://localhost:3636/api/messages/response/?messageid=` + messageid, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    });
    let results = response.json();
    return results
    
}

export async function insertResponse(responseInfo) {

    let url = "http://localhost:3636/api/messages/response";
    const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(responseInfo)
    });
    return response.json();
}