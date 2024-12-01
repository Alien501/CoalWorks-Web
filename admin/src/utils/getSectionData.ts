const getSectionData = async (scaleLevel: number) => {
    if(scaleLevel < 1 || scaleLevel > 5) {
        return null;
    }
    const res = await fetch(`/api/data/section/${scaleLevel}`);
    const d = await res.json();
    console.log(d.data)
    return d.data;
}

export {
    getSectionData
}