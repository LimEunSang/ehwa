const DropdownMenu = () => {
  return (
    <div className="dropdown-menu">
      <ul className="main-ul">
        <li>
          MENU 1
          <ul class="sub-ul">
            <li>MENU 1_1</li>
            <li>MENU 1_2</li>
            <li>MENU 1_3</li>
          </ul>
        </li>
        <li>MENU 2</li>
        <li>
          MENU 3
          <ul class="sub-ul">
            <li>MENU 3_1</li>
            <li>MENU 3_2</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
