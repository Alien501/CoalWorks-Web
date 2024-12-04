
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { HardHat, Clipboard, Shield, ArrowRight } from 'lucide-react'

import banner from '@/assets/img/coal-works-bg.jpg'
import { useState } from "react";
import { login } from "@/lib/login";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const ExplainerCard = ({icon, heading, content}: {icon: React.ReactNode, heading: string, content: string}) => {
    return(
        <Card className="w-full max-w-sm rounded-md backdrop-blur-sm bg-white/20 border-none">
            <CardContent className="flex items-center space-x-4 p-4 text-white">
                <div className="flex-shrink-0">
                    {icon}
                </div>
                <div className="flex-grow">
                    <h3 className="text-sm font-semibold mb-1">{heading}</h3>
                    <p className="text-xs font-light">{content}</p>
                </div>
            </CardContent>
        </Card>
    )
}

const Login = () => {
    const [data, setData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const onValueChange = (e) => {
        setData(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }
    
    const onLoginButtonPressed = async () => {
        const res = await login(data);
        if(res) {
            toast.success("Login Success!");
            navigate('/');
        }else{
            toast.error("Something went wrong!");
        }
    }

    return(
        <div className="h-screen w-full bg-white font-satoshi" id="login-page">
            <Card className="w-full h-full shadow-xl rounded-none overflow-hidden border-none">
                <CardContent className="grid md:grid-cols-[65%_35%] p-0 h-full">
                    <div className="relative h-full">
                        <img src={banner} className="block h-full w-full object-cover" alt="Coal mining background" />
                        <div className="absolute inset-0 bg-black/50" />
                        <div className="absolute bottom-6 left-6 right-6 grid gap-4 md:grid-cols-3">
                            <ExplainerCard
                                icon={<HardHat className="h-6 w-6" />}
                                heading="Shift Handover"
                                content="Streamline communication between shifts for seamless operations."
                            />
                            <ExplainerCard
                                icon={<Clipboard className="h-6 w-6" />}
                                heading="Management Dashboard"
                                content="Real-time insights and control over your mining operations."
                            />
                            <ExplainerCard
                                icon={<Shield className="h-6 w-6" />}
                                heading="Safety Protocols"
                                content="Ensure compliance with safety regulations and best practices."
                            />
                        </div>
                    </div>
                    <div className="flex justify-center items-center p-8 bg-gray-50">
                        <div className="w-full max-w-md space-y-8">
                            <div className="text-center">
                                <h1 className="font-bold text-3xl text-gray-900">Coalworks</h1>
                                <p className="mt-2 text-sm text-gray-600 italic">
                                    "Empowering safe and efficient mining operations"
                                </p>
                            </div>
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold text-center text-gray-900">Login</h2>
                                <div className="space-y-4">
                                    <div>
                                        <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            onChange={onValueChange}
                                            className="mt-1 block w-full text-black border-gray-300 rounded-sm shadow-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="password" className="text-sm font-medium text-gray-700">Password</Label>
                                        <Input
                                            id="password"
                                            name="password"
                                            type="password"
                                            onChange={onValueChange}
                                            className="mt-1 block w-full text-black border-gray-300 rounded-sm shadow-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <Button onClick={onLoginButtonPressed} className="w-full rounded-sm bg-background text-foreground flex items-center justify-center">
                                        Log in <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                    <Button variant="link" className="w-full text-sm text-blue-600 hover:text-blue-500">
                                        I forgot my password
                                    </Button>
                                </div>
                            </div>
                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <p className="text-xs text-center text-gray-600">
                                    Still have issues? Contact: 
                                    <a href="mailto:support@coalworks.com" className="ml-1 font-medium text-blue-600 hover:text-blue-500">
                                        support@coalworks.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Login;

