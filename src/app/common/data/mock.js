export const loginApi = async (creds) => {
    if (creds.email === 'marwa@gmail.com"') {
        const response = await fetch('https://run.mocky.io/v3/0a02596b-a81d-4de5-a839-1bf020d8c7ae', { method: 'GET' });
        return response.json();
    }
    else if (creds.email === 'rachid@gmail.com') {
        const response = await fetch('https://run.mocky.io/v3/0a02596b-a81d-4de5-a839-1bf020d8c7ae', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        return await response.json();
    }
};