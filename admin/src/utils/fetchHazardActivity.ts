import axios from "axios"

const fetchHazardActivity = async () => {
    try {
        const res = await axios.get('/api/data/hazard/activity');
        if(res.status === 200) {
            return res.data;
        }
    } catch (error) {
        console.log(error);
    }
    return false;
}

export {
    fetchHazardActivity
}