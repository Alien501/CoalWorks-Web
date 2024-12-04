const fetchSectionTypes = async () => {
    try {
        const res = await fetch(`/api/data/sectiontype`)
        if(res.ok) {
            const d = await res.json();
            return d.data;
        }
    } catch (error) {
        console.error(error.message);
    }
    return false;
}

export {
    fetchSectionTypes
}