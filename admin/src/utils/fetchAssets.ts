const fetchAssets = async () => {
    try {
        const res = await fetch('/api/data/asset');
        if(res.ok) {
            const data = await res.json();
            return data.data;
        }
    } catch (error) {
        console.error(errorl.message);   
    }
    return false;
}

export {
    fetchAssets
}