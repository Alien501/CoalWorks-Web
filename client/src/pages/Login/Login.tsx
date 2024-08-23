import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader } from "../../components/ui/card";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

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
    <div className="flex justify-center items-center h-screen">
      <Card className="min-w-[320px]">
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
        <CardFooter>
          <p className="text-sm font-medium">&copy;Coal Works</p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Login;