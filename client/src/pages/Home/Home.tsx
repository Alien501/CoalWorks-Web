import MenuCardItem from "@/components/mine/MenuCardItem/MenuCardItem";
import Navbar from "@/components/mine/Navbar/Navbar";
import PageUser from "@/components/mine/PageUser/PageUser";
import WorkChart from "@/components/mine/WorkChart/WorkChart";
import { useNavigate } from "react-router-dom";
import MapComponent from "../Map/MapComponent";
import LBar from "@/components/mine/LBar/Lbar";

const Home = () => {
  const navigate = useNavigate();
  const menuItemClicked = (path: string) => {
    navigate(path);
  }

  return(
    <>
      {/* <Navbar /> */}
        <LBar />
        <div className="my-14">
        <div>
          <PageUser />
          <br />
          <div className="flex justify-evenly min-w-[100px] min-h-[100px]">
            <MenuCardItem
              menuName="Mange Workers"
              onMenuClicked={() => menuItemClicked ('/manage-worker')}
            />
            <MenuCardItem
              menuName="Assign Works"
              onMenuClicked={() => menuItemClicked ('/assign-works')}
            />
            <MenuCardItem
              menuName="Generate Report"
              onMenuClicked={() => menuItemClicked ('/generate-report')}
            />
          </div>
          <div className="my-4 flex flex-row">
            <WorkChart />
            <div className="w-full max-h-[400px]">
              <MapComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;