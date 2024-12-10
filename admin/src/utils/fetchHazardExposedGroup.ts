import axios from "axios"

const fetchHzardExposedGroup = async () => {
    try {
        const res = await axios.get('/api/data/hazard/exposed-group');
        if(res.status === 200) {
            return res.data;
        }
    } catch (error) {
        console.error(error);
    }
    return false
}

export {
    fetchHzardExposedGroup
}