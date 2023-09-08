import { pageMenuItems } from "../../utils/PageMenuItems";

const DropdownPageMenu = () => {
  return (
    <div className="dropdown-page-menu">
      <ul className="tab-ul">
        {pageMenuItems.map((item, index) => (
          <li className="tab-li" key={index}>
            {item.tab}
            <ul className="page-ul">
              {item.pages.map((item, index) => (
                <li className="page-li" key={index}>
                  {item.page}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownPageMenu;
