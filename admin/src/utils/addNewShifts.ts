import { encryptData } from "./encryptData";

const addNewShift = async (data) => {
    const encrypted = encryptData(data);
    try {
        const res = await fetch('/api/data/shift/create', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                encryptedData: encrypted
            })
        })
    
        if(res.ok) {
            const d = await res.json();
            return d;
        }
    } catch (error) {
        console.log(error)
    }
    return false;
}

export {
    addNewShift
}