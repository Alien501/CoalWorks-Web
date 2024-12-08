import axios from "axios"

const fetchAllRiskMatrix = async () => {
    try {
        const res = await axios.get('/api/data/smp/rm');
        if(res.status == 200) {
            return res.data
        }
    } catch (error) {
        console.error(error)
    }
    return false
}

export {
    fetchAllRiskMatrix
}