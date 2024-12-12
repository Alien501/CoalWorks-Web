import { encryptData } from "./encryptData";

const SECRET_KEY = import.meta.env.BASE_URL;

const updateShiftData = async (data, shiftId) => {
    const encrypted = encryptData(data)
    try {
        const encrypted = encryptData(data)
        const res = await fetch(`/api/data/shift/${shiftId}`, {
            headers: {
                'Content-type': "application/json"
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
    updateShiftData
}