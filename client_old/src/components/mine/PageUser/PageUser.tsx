import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

const PageUser = () => {
  const [currentTime, setCurrentTime] = useState(() => {
    const now = new Date();
    return `${now.toLocaleDateString('en-US')} - ${now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })}`;
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setCurrentTime(`${now.toLocaleDateString('en-US')} - ${now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })}`);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return(
    <Card className="flex flex-col max-w-[90%] mx-auto">
      <CardContent className="text-2xl flex flex-row justify-between p-3">
        <p className="font-medium text-stone-700">Hello, <span className="font-bold text-slate-950">Admin</span></p>
        <p className="text-sm flex justify-center items-center">{currentTime}</p>
      </CardContent>
    </Card>
  )
};

export default PageUser;