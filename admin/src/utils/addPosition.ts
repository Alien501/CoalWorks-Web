const addNewPosition = async (data) => {
    try {
        const res = await fetch('/api/data/position/create', {
            headers: {
                'Content-type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(data)
        })
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
    addNewPosition
}