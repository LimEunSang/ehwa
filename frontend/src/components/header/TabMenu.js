const menuItems = [
  {
    tab: "소개",
    depth: [
      { depthTab: "인사말", path: "/" },
      { depthTab: "오시는 길", path: "/" },
    ],
  },
  {
    tab: "국제결혼서류",
    depth: [
      { depthTab: "베트남", path: "/" },
      { depthTab: "캄보디아", path: "/" },
    ],
  },
  {
    tab: "입양서류",
    depth: [{ depthTab: "입양서류", path: "/" }],
  },
  {
    tab: "유학서류",
    depth: [{ depthTab: "유학서류", path: "/" }],
  },
  {
    tab: "초청",
    depth: [{ depthTab: "초청", path: "/" }],
  },
  {
    tab: "국적/영주권",
    depth: [{ depthTab: "국적/영주권", path: "/" }],
  },
  {
    tab: "불법체류자 구제",
    depth: [{ depthTab: "불법체류자 구제", path: "/" }],
  },
  {
    tab: "커뮤니티",
    depth: [{ depthTab: "공지사항", path: "/" }],
  },
];

const TabMenu = () => {
  return (
    <ul className="tab-menu">
      {menuItems.map((item, key) => (
        <li key={key}>
          {item.tab}
          <ul className="depth">
            {item.depth.map((depthItem, key) => (
              <li key={key}>{depthItem.depthTab}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default TabMenu;
