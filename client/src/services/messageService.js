export async function getMessages(filters) {

    let url = "http://localhost:3636/api/messages/?";
    if (filters.subjectid) {
        url += "subjectid=" + filters.subjectid
    }
    if (filters.id) {
        url += "id=" + filters.id
    }
    const response = await fetch(url, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    });
    let results = response.json();
    return results
    
}

export async function insertMessage(messageInfo) {

    let url = "http://localhost:3636/api/messages/";
    const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(messageInfo)
    });
    return response.json();
}