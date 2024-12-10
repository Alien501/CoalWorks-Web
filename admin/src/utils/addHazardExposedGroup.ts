import axios from "axios"

const addHazardExposedGroup = async (data) => {
    try {
        const res = await axios.post('/api/data/hazard/exposed-group', data);
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