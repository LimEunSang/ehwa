import DropdownMenu from "./DropdownMenu";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">logo</div>
      <div className="menu">
        <DropdownMenu />
        <div className="login">login</div>
      </div>
    </header>
  );
};

export default Header;
