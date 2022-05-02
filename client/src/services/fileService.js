export async function uploadFile(files, subject, userId, userPoints) {
    let formData = new FormData();
    formData.append("File", files[0]);
    let url = "http://localhost:3636/api/files/?subject=" + subject + "&userId=" + userId + "&userPoints=" + userPoints;
    const response = await fetch(url, {
        method: 'POST',
        body: formData
    });
    if (response.status === 200) {
        sessionStorage.setItem("userPoints", parseInt(userPoints)+1);
    }
    return response.json();
}

export async function getFiles(subject) {

    if (subject) {
        let url = "http://localhost:3636/api/files/?subject=" + subject;

        const response = await fetch(url, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        });
        let results = response.json();
        return results
    }
    
}