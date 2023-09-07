import TabMenu from "./TabMenu";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="logo" onClick={() => navigate("/")}>
        ewha
      </div>
      {/* 추가되는 menu는 여기에 작성 */}
      <div className="menu">
        <TabMenu />
      </div>
    </header>
  );
};

export default Header;
