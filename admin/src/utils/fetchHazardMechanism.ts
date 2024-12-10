import axios from "axios"

const fetchHazardMechanism = async () => {
    try {
        const res = await axios.get('/api/data/hazard/mechanism');
        if(res.status == 200) {
            return res.data;
        }
    } catch (error) {
        console.error(error);
    }
    return false;
}

export {
    fetchHazardMechanism
}