import { encryptData } from "./encryptData";

const addNewAsset = async (data: any) => {
    const encrypted = encryptData(data);
    try {
        const res = await fetch('/api/data/asset/create', {
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                encryptedData: encrypted
            }),
            method: 'POST'
        })
        if(res.ok) {
            const d = await res.json()
            return d.data();
        }
    } catch(error) {
        console.error(error.message);
    }
    return false;
}

export {
    addNewAsset
}