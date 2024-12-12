import { encryptData } from "./encryptData";

const updateMines = async (mineId, data) => {
    const encrypted = encryptData({mineId, ...data});
    try {
        const res = await fetch('/api/data/mine', {
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                encryptedData: encrypted
            }),
            method: 'PATCH'
        })
        if(res.ok) {
            return true;
        }
    } catch (error) {
        console.error(error);
    }
    return false;
}

export {
    updateMines
}