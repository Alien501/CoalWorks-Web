import axios from "axios"

const fetchAllRoles = async () => {
    try {
        const res = await axios.get('/api/data/role')
        if(res.status == 200) {
            const d = res.data
            return d.data;
        }
    } catch (error) {
        console.error(error);
    }
    return false;
}

export {
    fetchAllRoles
}