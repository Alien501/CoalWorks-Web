import axios from "axios"
import { encryptData } from "./encryptData";

const addHazardHazard = async (data: any) => {
    const encrypted = encryptData(data);
    try {
        const res = await axios.post('/api/data/hazard/hazard', {
            encryptedData: encrypted
        });
        if(res.status === 200) {
            return true;
        }
    } catch (error) {
        console.log(error)
    }
    return true;
}

export {
    addHazardHazard
}