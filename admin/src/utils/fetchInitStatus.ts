const fetchInitStatus = async () => {
    try {
        const res = await fetch('/api/data/admin/init');
        if (!res.ok) {
            throw new Error('Failed to fetch initialization status');
        }
        
        const data = await res.json();
        return {
            status: !!data.data,
            error: null
        };
    } catch (error) {
        console.error('Initialization check error:', error);
        return {
            status: false,
            error: true
        };
    }
}


export {
    fetchInitStatus
}