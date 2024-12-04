const initDb = async (data: any) => {
    try {
        const res = await fetch('/api/data/admin/init', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        if(res.ok) {
            const d = await res.json()
            localStorage.setItem('mineData', d);
            return true;
        }
    } catch (error) {
        console.error("Something went wrong!\n" + error);
    }
    return false;
}

export {
    initDb
}