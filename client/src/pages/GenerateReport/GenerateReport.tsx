import Navbar from "@/components/mine/Navbar/Navbar"
import WorkChart from "@/components/mine/WorkChart/WorkChart";

const GenerateReport = () => {
  return(
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="flex flex-row flex-wrap justify-center items-center">
        <WorkChart />
      </div>
    </div>
  )
}

export default GenerateReport;