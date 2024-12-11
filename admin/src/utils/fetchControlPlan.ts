import axios from "axios"

const fetchControlPlan = async (id: number) => {
    try {
        const res = await axios.get(`/api/data/smp/ra/${id}`)
        if(res.status == 200) {
            return res.data;
        }
    } catch (error) {
        console.error(error);
    }
    return false;
}

export {
    fetchControlPlan
}