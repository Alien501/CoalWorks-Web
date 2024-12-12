import axios from "axios"
import { encryptData } from "./encryptData";

const addHazardMechanism = async (data: any) => {
    const encrypted = encryptData(data);
    try {
        const res = await axios.post('/api/data/hazard/mechanism', {
            encryptedData: encrypted
        });
        if(res.status === 200) {
            return res.data;
        }
    } catch (error) {
        console.error(error);
    }
    return false;
}

export {
    addHazardMechanism
}