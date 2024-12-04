const updateMines = async (mineId, data) => {
    try {
        const res = await fetch('/api/data/mine', {
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({mineId, ...data}),
            method: 'PATCH'
        })
        if(res.ok) {
            return true;
        }
    } catch (error) {
        console.error(error);
    }
    return false;
}

export {
    updateMines
}