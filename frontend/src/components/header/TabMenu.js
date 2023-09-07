const tabItems = [
  {
    mainTab: "소개",
    depth: [
      { subTab: "인사말", path: "/" },
      { subTab: "오시는 길", path: "/" },
    ],
  },
  {
    mainTab: "국제결혼서류",
    depth: [
      { subTab: "베트남", path: "/" },
      { subTab: "캄보디아", path: "/" },
    ],
  },
  {
    mainTab: "입양서류",
    depth: [{ subTab: "입양서류", path: "/" }],
  },
  {
    mainTab: "유학서류",
    depth: [{ subTab: "유학서류", path: "/" }],
  },
  {
    mainTab: "초청",
    depth: [{ subTab: "초청", path: "/" }],
  },
  {
    mainTab: "국적/영주권",
    depth: [{ subTab: "국적/영주권", path: "/" }],
  },
  {
    mainTab: "불법체류자 구제",
    depth: [{ subTab: "불법체류자 구제", path: "/" }],
  },
  {
    mainTab: "커뮤니티",
    depth: [{ subTab: "공지사항", path: "/" }],
  },
];

const TabMenu = () => {
  return (
    <ul className="main-tab">
      {tabItems.map((item, key) => (
        <li key={key}>
          {item.mainTab}
          <ul className="sub-tab">
            {item.depth.map((depthItem, key) => (
              <li key={key}>{depthItem.subTab}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default TabMenu;
