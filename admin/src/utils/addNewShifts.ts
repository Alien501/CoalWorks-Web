const addNewShift = async (data) => {
    try {
        const res = await fetch('http://localhost:3000/api/v1/shift/create', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
    
        if(res.ok) {
            const d = await res.json();
            return d;
        }
    } catch (error) {
        console.log(error)
    }
    return false;
}

export {
    addNewShift
}