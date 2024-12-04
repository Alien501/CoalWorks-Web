import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({children}: {children: any}) => {
    const navigate = useNavigate();

    useEffect(() => {
        const verfiytoken = async (token) => {
            const res = await fetch('/api/data/admin/op/verify', {
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            })
            if(res.ok) {
                return true;
            }
            else {
                return false;
            }
        }
        
        const ud = localStorage.getItem('userData');
        if(!ud) {
            navigate('/login');
        }else {
            const token = JSON.parse(ud).token;
            const isValid = verfiytoken(token);
            if(!isValid) {
                navigate('/login')
            }
        }

    }, []);

    return(
        <>
            {children}
        </>
    )
}

export {
    ProtectedRoute
}