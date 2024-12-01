const updateShiftData = async (data, shiftId) => {
    try {
        const res = await fetch(`/api/data/shift/${shiftId}`, {
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify(data),
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
    updateShiftData
}