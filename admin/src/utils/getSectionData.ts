const getSectionData = async (scaleLevel: number) => {
    if(scaleLevel < 1 || scaleLevel > 5) {
        return null;
    }
    const res = await fetch(`http://localhost:3000/api/v1/section/${scaleLevel}`);
    const d = await res.json();
    return d.data;
}

export {
    getSectionData
}