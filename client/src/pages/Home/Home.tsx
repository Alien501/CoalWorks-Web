import MenuCardItem from "@/components/mine/MenuCardItem/MenuCardItem";
import Navbar from "@/components/mine/Navbar/Navbar";
import PageUser from "@/components/mine/PageUser/PageUser";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const menuItemClicked = (path) => {
    navigate(path);
  }

  return(
    <>
      <Navbar />
        <div className="my-11">
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
              onMenuClicked={() => menuItemClicked ('/manage-worker')}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;