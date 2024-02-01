export function createUser (userData) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch('/api/v1/users/register', {
                method: "POST",
                body: JSON.stringify(userData),
                headers: { 'content-type': 'application/json' },
                credentials: 'include',
            });
            const data = await response.json();
            resolve(data);
        } catch (error) {
            reject("--User not Created--", error);
        }
    })
} 