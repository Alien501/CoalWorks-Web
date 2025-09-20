import { encryptData } from "@/utils/encryptData";

const login = async (data: any) => {
    const encryptedData = encryptData(data);
    try {
        const res = await fetch('/api/data/admin/op/login', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({encryptedData: encryptedData})
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