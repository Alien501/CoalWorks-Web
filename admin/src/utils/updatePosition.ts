const updatePosition = async (data, positionId) => {
    try {
        const res = await fetch(`http://localhost:3000/api/v1/position/${positionId}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
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
    updatePosition
}