import axios from "axios"

const fetchHazardHazard = async () => {
    try {
        const res = await axios.get('/api/data/hazard/hazard')
        if(res.status === 200) {
            return res.data
        }
    } catch (error) {
        console.error(error);
    }
    return false;
}

export {
    fetchHazardHazard
}