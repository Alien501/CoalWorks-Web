import { encryptData } from "./encryptData";

const updatePosition = async (data, positionId) => {
    const encrypted = encryptData(data);
    try {
        const res = await fetch(`/api/data/position/${positionId}`, {
            method: 'PATCH',
            body: JSON.stringify({
                encryptedData: encrypted
            }),
            headers: {
                'Content-type': 'application/json'
            }
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
    updatePosition
}