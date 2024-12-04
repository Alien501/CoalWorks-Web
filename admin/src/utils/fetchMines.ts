const fetchMines = async () => {
    try {
        const res = await fetch('/api/data/mine');
        if(res.ok) {
            const d = await res.json();
            return d.data;
        }
    } catch (error) {
        console.error(error);
    }
    return []
}

export {
    fetchMines
}