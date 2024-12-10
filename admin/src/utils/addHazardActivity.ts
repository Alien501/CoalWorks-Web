import axios from "axios"

const addhazardActivity = async (data) => {
    try {
        const res = await axios.post('/api/data/hazard/activity', data);
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