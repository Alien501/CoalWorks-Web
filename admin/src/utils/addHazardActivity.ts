import axios from "axios"
import { encryptData } from "./encryptData";

const addhazardActivity = async (data) => {
    const encrypted = encryptData(data);
    try {
        const res = await axios.post('/api/data/hazard/activity', {
            encryptedData: encrypted
        });
        if(res.status === 200) {
            return res.data;
        }
    } catch (error) {
        console.log(error);
    }
    return false;
}

export {
    addhazardActivity
}