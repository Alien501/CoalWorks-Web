import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({children}: {children: React.ReactNode}) => {
    const navigate = useNavigate();

    useEffect(() => {
        const verifyToken = async (token: string) => {
            try {
                const res = await fetch('/api/data/admin/op/verify', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                });
                return res.status === 200;
            } catch (error) {
                console.error('Token verification failed:', error);
                return false;
            }
        }
        
        const checkAuth = async () => {
            const ud = localStorage.getItem('userData');
            
            if (!ud) {
                navigate('/login');
                return;
            }

            try {
                const userData = JSON.parse(ud);
                const token = userData.token;

                if (!token) {
                    navigate('/login');
                    return;
                }

                const isValid = await verifyToken(token);
                
                if (!isValid) {
                    localStorage.removeItem('userData');
                    navigate('/login');
                }
            } catch (error) {
                console.error('Authentication check failed:', error);
                navigate('/login');
            }
        };

        checkAuth();
    }, [navigate]);

    return <>{children}</>;
}

export { ProtectedRoute }