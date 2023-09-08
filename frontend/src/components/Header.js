import Logo from "./header/Logo";
import DropdownPageMenu from "./header/DropdownPageMenu";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <DropdownPageMenu />
    </header>
  );
};

export default Header;
