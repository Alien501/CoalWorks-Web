const fetchAssets = async () => {
    try {
        const res = await fetch('/api/data/asset');
        if(res.ok) {
            const data = await res.json();
            return data;
        }
    } catch (error) {
        console.error(error.message);   
    }
    return false;
}

export {
    fetchAssets
}