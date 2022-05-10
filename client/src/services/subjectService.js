export async function getSubjects(subjectId) {

    let url= `http://localhost:3636/api/subjects`;

    if(subjectId)
    {
        url +="?subjectId=" + subjectId;
    }

    const response = await fetch(url, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
    let results = response.json();
    return results
    
}