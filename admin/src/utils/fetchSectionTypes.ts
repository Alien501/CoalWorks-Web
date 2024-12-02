const fetchSectionTypes = async (scaleLevel: number) => {
    try {
        const res = await fetch(`/api/data/section/items?scaleLevel=${scaleLevel}`)
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