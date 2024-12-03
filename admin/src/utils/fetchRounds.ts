const fetchRounds = async () => {
    try {
        const res = await fetch('/api/data/rounds');
        if(res.ok) {
            const d = await res.json();
            return d.data;
        }
    } catch (error) {
        console.error(error);
    }
    return false;
}

export {
    fetchRounds
}