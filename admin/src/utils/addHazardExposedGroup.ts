import axios from "axios"
import { encryptData } from "./encryptData";

const addHazardExposedGroup = async (data) => {
    const encrypted = encryptData(data);
    try {
        const res = await axios.post('/api/data/hazard/exposed-group', {
            encryptedData: encrypted
        });
        if(res.status === 200) {
            return true;
        }
    } catch (error) {
        console.error(error);
    }
    return false;
}

export {
    addHazardExposedGroup
}