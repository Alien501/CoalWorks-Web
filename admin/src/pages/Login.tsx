import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

import banner1 from '../assets/img/coal_banner.jpg'
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const Login = () => {
    return(
        <div className="h-screen overflow-hidden flex justify-center items-center bg-coal font-noto" id="login-page">
            <Card className="bg-black border-0 w-[90%] h-[90%] flex gap-2 flex-row items-center p-5 shadow-sm">
                <div className="slider-image-container bg-white h-[97%] w-[40%] rounded-sm relative">
                    <img src={banner1} alt="Banner One" className="block h-full object-cover" />
                    <div className="overlay bg-black/50 absolute top-0 bottom-0 w-full h-full"></div>
                    {/* <span className="app-name text-white font-bold absolute text-3xl mt-6 left-1/2 -translate-x-1/2 -translate-y-1/2 top-0 mx-auto">CoalWorks</span> */}
                </div>
                <div className="login-form-container h-[97%] rounded-sm flex flex-col bg-coal/0 w-full">
                    <div className="h-full bg-slate-50/0 flex items-center justify-center">
                        <div className="text-white/30 text-sm h-[50%] p-1 flex flex-col justify-between w-[320px] space-y-4 mx-auto">
                            <form>
                                <div className="text-white mt-3 ml-3">
                                    <h1 className="text-3xl font-semibold text-center">Sign-In</h1>
                                </div>
                                <div className="h-max m-2">
                                    <Label className="text-sm font-normal">
                                        Username
                                    </Label>
                                    <Input className="h-10 border-0 bg-slate-50/5 focus:border focus:border-slate-300/10" />
                                </div>
                                <div className="h-max m-2">
                                    <Label className="text-sm font-normal">
                                        Password
                                    </Label>
                                    <Input className="h-10 border-0 bg-slate-50/5 focus:border focus:border-slate-300/10" />
                                </div>
                                <div className="h-max m-2 text-right">
                                    <a href="#" className="hover:text-white/60">Forgot Password?</a>
                                </div>
                                <div className="h-max m-2">
                                    <Button className="w-full">
                                        Sign-In
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Login;