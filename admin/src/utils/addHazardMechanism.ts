import axios from "axios"

const addHazardMechanism = async (data: any) => {
    try {
        const res = await axios.post('/api/data/hazard/mechanism', data);
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