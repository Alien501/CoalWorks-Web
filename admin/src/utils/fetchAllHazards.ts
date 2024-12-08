import axios from "axios"

const fetchAllHazards = async () => {
    try {
        const res = await axios.get('/api/data/smp/ra');
        if(res.status == 200) {
            return res.data;
        }
    } catch (error) {
        console.error(error);
    }
    return false;
}

export {
    fetchAllHazards
}