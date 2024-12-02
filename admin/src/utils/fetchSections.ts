const fetchSections = async () => {
    try {
        const res = await fetch('/api/data/section');
        if(res.ok) {
            const d = await res.json();
            return d
        }
    } catch (error) {
        console.error(error.message);
    }
    return false;
}

export {
    fetchSections
}