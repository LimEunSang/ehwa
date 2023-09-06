const DropdownMenu = () => {
  return (
    <ul className="dropdown-menu">
      <li>
        소개
        <ul className="depth">
          <li>인사말</li>
          <li>오시는 길</li>
        </ul>
      </li>
      <li>국제결혼서류</li>
      <li>입양서류</li>
      <li>유학서류</li>
      <li>초청</li>
      <li>국적/영주권</li>
      <li>불법체류자 구제</li>
      <li>커뮤니티</li>
    </ul>
  );
};

export default DropdownMenu;
