import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader } from "../../components/ui/card";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

import coalgif from '@/assets/coalworks.gif'

const Login = () => {
  const loginForm = useRef();
  const [submitButtonCLicked, setIsButtonClicked] = useState(false);
  const navigate = useNavigate();

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsButtonClicked(true);
    const formData = new FormData(loginForm.current);
    const username = formData.get('username');
    const password = formData.get('password');
    if(username == 'superadmin' && password == 'superadmin@123') {
      setTimeout(() => {
        toast('Login Successfull!');
        navigate('/home');
      }, 2000);
    } else {
      setTimeout(() => {
        toast('Login failed!, Wrong credentials');
        setIsButtonClicked(false);
      }, 2000);
    }
  }

  return(
    <div className="grid grid-cols-2 place-items-center items-center h-screen">
      <div className="bg-black text-white h-full w-full flex items-center justify-center relative">
        <div className="absolute z-0 w-full h-full">
          <img src={coalgif} alt="Gif" className="block h-full w-full opacity-30" />
        </div>
        <div className="text-left relative z-10">
          <h1 className="text-7xl font-bold">Coalworks</h1>
          <p className="text-base font-medium text-center">You Mine, we Mine!</p>
        </div>
      </div>
      <div>
        <Card className="min-w-[320px] shadow-lg">
          <CardHeader>
            <h1 className="text-xl font-bold text-center">Login</h1>
          </CardHeader>
          <CardContent>
            <form ref={loginForm} onSubmit={onFormSubmit}>
              <Input className="mx-auto my-2" name="username" placeholder="User Name" type="text" />
              <Input className="mx-auto my-2" name="password" placeholder="Password" type="password" />
              {submitButtonCLicked?
                <Button disabled className="mx-auto my-2 block">
                  Submit
                </Button>
                :
                <Button className="mx-auto my-2 block">
                  Submit
                </Button>
              }
            </form>
          </CardContent>
          <CardFooter className="flex justify-center items-center">
            <p className="text-sm text-center font-medium">&copy;Coal Works</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default Login;