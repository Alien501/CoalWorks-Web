import axios from "axios"

const addHazardHazard = async (data: any) => {
    try {
        const res = await axios.post('/api/data/hazard/hazard', data);
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