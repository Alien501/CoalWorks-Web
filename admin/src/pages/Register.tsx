import RegisterLeft from "@/components/own/RegisterLeft";
import CompanyRegistration from "@/components/own/companyRegistration/companyRegistration";
import OperationsAndProduction from "@/components/own/operationsAndProduction/operationsAndProduction";
import Documents from "@/components/own/documents/documents";
import { useEffect, useState } from "react";

const Register = () => {
    const [activeSection, setActiveSection] = useState("companyRegistration");

    const [registerData, setRegisterData] = useState([])

    useEffect(() => {
        registerData.forEach((formData) => {
            //@ts-ignore
            for (const [key, value] of formData.entries()) {
                console.log(`${key}: ${JSON.stringify(value)}`);
            }
        });
    }, [registerData]);

    const renderRightSection = () => {
        switch (activeSection) {
            case "companyRegistration":
                return <CompanyRegistration title="Company Registration and Licensing" sections={["Company Registration", "Mine Identification"]} setRegisterData = { setRegisterData } registerData = {registerData}/>;
            case "operations":
                return <OperationsAndProduction title="Operations and Production" sections={["Company Registration", "Mine Identification"]} registerData = {registerData} setRegisterData={setRegisterData}/>;
            case "documents":
                return <Documents />;
            default:
                return null;
        }
    };

    return (
        <div className="h-screen flex overflow-hidden">
            <div className="w-[20%] p-3">
                <RegisterLeft setActiveSection={setActiveSection} />
            </div>
            <div className="w-[80%] p-3 overflow-y-hidden h-full">
                {renderRightSection()}
            </div>
        </div>
    );
};

export default Register