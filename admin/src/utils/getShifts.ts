const getShifts = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/v1/shift');
        if(res.ok) {
            const d = await res.json()
            return d.data
        }
    } catch (error) {
        console.error(error);
    }
    return false;
}

export {
    getShifts
}