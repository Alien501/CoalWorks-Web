import axios from "axios"

const fetchAssetType = async () => {
    try {
        const res = await axios.get('/api/data/assettype');
        return res.data;
    } catch (error) {
        console.error();
    }
    return []
}

export {
    fetchAssetType
}