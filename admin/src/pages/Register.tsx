import RegisterLeft from "@/components/own/RegisterLeft";
import CompanyRegistration from "@/components/own/companyRegistration";
import RightSection from "@/components/own/companyRegistration";
const Register = () => {
    return (
        <div className="min-h-screen flex">
            <div className="w-[20%] p-3">
                <RegisterLeft />
            </div>
            <div className="w-[80%] p-3 overflow-y-auto h-screen">
                <RightSection title={"Company Registration and Liscensing"} sections = {["Company Registration", "Mine Identification", "Infrastructure"]} />
            </div>
        </div>
    );    
}

export default Register;