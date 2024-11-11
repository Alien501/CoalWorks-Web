import RegisterLeft from "@/components/own/RegisterLeft";
import CompanyRegistration from "@/components/own/companyRegistration/companyRegistration";
import RolesAndResponsibilties from "@/components/own/rolesAndResponsibilities/rolesAndResponsibilities";
import OperationsAndProduction from "@/components/own/operationsAndProduction/operationsAndProduction";
import DBMigration from "@/components/own/dbMigration/dbMigration";
import { useState } from "react";

const Register = () => {
    const [activeSection, setActiveSection] = useState("companyRegistration");

    const renderRightSection = () => {
        switch (activeSection) {
            case "companyRegistration":
                return <CompanyRegistration title="Company Registration and Licensing" sections={["Company Registration", "Mine Identification"]} />;
            case "rolesAndRes":
                return <RolesAndResponsibilties title="Roles and Responsibilties" sections={["Company Registration", "Mine Identification"]} />;
            case "operations":
                return <OperationsAndProduction title="Operations and Production" sections={["Company Registration", "Mine Identification"]} />;
            case "dbMigration":
                return <DBMigration />;
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen flex overflow-hidden">
            <div className="w-[20%] p-3">
                <RegisterLeft setActiveSection={setActiveSection} />
            </div>
            <div className="w-[80%] p-3 overflow-y-auto h-screen">
                {renderRightSection()}
            </div>
        </div>
    );
};

export default Register