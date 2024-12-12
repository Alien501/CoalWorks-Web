import { encryptData } from "./encryptData";

const addNewPosition = async (data) => {
    const encrypted = encryptData(data);
    try {
        const res = await fetch('/api/data/position/create', {
            headers: {
                'Content-type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                encryptedData: encrypted
            })
        })
        if(res.ok) {
            const d = await res.json();
            return d.data;
        }
    } catch (error) {
        console.error(error);
    }
    return false;
}

export {
    addNewPosition
}