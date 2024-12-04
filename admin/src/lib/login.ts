const login = async (data: any) => {
    try {
        const res = await fetch('/api/data/admin/op/login', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        if(res.ok) {
            const d = await res.json();
            console.log(d);
            localStorage.setItem('userData', JSON.stringify(d));
            return true;
        }
    } catch (error) {
        console.error(error);
    }
    return false;
}

export {
    login
}